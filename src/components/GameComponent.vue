<script lang="ts">
import { persons } from '../utils/data';
import NameSearch from './NameSearch.vue';
import FailList from './FailList.vue';
import PersonPerfil from './PersonPerfil.vue';
import { t } from '@/utils/translate';
import { MAX_WRONG_GUESSES } from '@/utils/constants';
import { playerStorage } from '@/utils/storage';
import GameStats from './GameStats.vue';

export default {
  name: 'GameComponent',
  components: {
    NameSearch,
    FailList,
    PersonPerfil,
    GameStats
  },
  data() {
    const pickedPerson = persons[Math.floor(Math.random() * persons.length)] || { name: '' };
    return {
      names: persons.map(p => t(p.name)),
      wrongNames: [] as string[],
      correct: pickedPerson,
      correctName: t(pickedPerson.name),
      lastSelected: {} as Object,
      isFinished: false,
      isWin: false,
      t: t,
      max_tries: MAX_WRONG_GUESSES,
      isModalOpen: false,
    }
  },
  methods: {
    checkWord(word: string) {
      if (this.isFinished) { return }
      if (!word.trim()) { return }
      if (!this.names.includes(word)) { return }
      if (this.wrongNames.includes(word)) { return }

      this.lastSelected = persons.find(p => t(p.name) === word) || {};

      if (word === this.correctName) {
        this.gameOver();
        return
      }

      this.wrongNames.push(word)
      if (this.wrongNames.length >= this.max_tries) {
        this.gameOver();
      }
    },
    hasSelected() {
      return this.lastSelected && Object.keys(this.lastSelected).length > 0;
    },
    gameOver() {
      this.isFinished = true;
      this.isWin = this.wrongNames.length < this.max_tries;
      const playerData = playerStorage.getData();
      playerData.gamesPlayed += 1;
      if (this.isWin) {
        playerData.activeSequence += 1;
        if (playerData.activeSequence > playerData.maxSequence) {
          playerData.maxSequence = playerData.activeSequence;
        }
        const index = this.wrongNames.length;
        if (playerData?.gamesWon?.length > index && typeof playerData.gamesWon[index] === 'number') {
          playerData.gamesWon[index] += 1;
        } else {
          playerData.activeSequence = 0;
        }
      }
      playerStorage.updateData(playerData);
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
}
</script>

<template>
  <div class="game-component">
    <NameSearch :nameList="names" :wordHandler="checkWord" />
    <span v-if="isFinished && isWin">{{ t('GAME_OVER_SUCCESS') }}</span>
    <span v-else-if="isFinished && !isWin">{{ t('GAME_OVER_FAILURE') }} <strong>{{ correctName }}</strong></span>
    <span v-else>{{ t('TRIES_LEFT') }}: {{ max_tries - wrongNames.length }} / {{ max_tries }}</span>
    <PersonPerfil v-if="hasSelected()" :correctCharacter="correct" :selectedCharacter="lastSelected" />
    <FailList :wrongList="wrongNames" />
  </div>
  <GameStats v-if="isModalOpen" :isOpen="isModalOpen" @close="closeModal" />
</template>

<style scoped>
span {
  display: block;
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
}

span strong {
  color: var(--color-primary);
  text-decoration: underline;
  font-weight: bold;
}
</style>
