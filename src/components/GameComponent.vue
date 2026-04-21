<script lang="ts">
import { persons } from '../utils/data';
import { t } from '@/utils/translate';
import { MAX_WRONG_GUESSES, PERSON_NAME } from '@/utils/constants';
import { playerStorage } from '@/utils/storage';
import NameSearch from './NameSearch.vue';
import PersonPerfil from './PersonPerfil.vue';
import FailList from './FailList.vue';
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
    const pickedPerson = persons[Math.floor(Math.random() * persons.length)] || { [PERSON_NAME]: '' };
    return {
      names: persons.map(p => t(p[PERSON_NAME])),
      wrongNames: [] as string[],
      correct: pickedPerson,
      correctName: t(pickedPerson[PERSON_NAME]),
      lastSelected: {} as Object,
      isFinished: false,
      isWin: false,
      t: t,
      max_tries: MAX_WRONG_GUESSES,
      isModalOpen: false,
      nameNotFound: '',
    }
  },
  methods: {
    checkWord(word: string) {
      if (this.isFinished) { return }
      if (!word.trim()) { return }
      if (!this.names.includes(word)) {
        this.nameNotFound = word;
        return;
      }
      this.nameNotFound = '';

      if (this.wrongNames.includes(word)) { return }

      this.lastSelected = persons.find(p => t(p[PERSON_NAME]) === word) || {};

      if (word === this.correctName) {
        this.gameOver();
        return
      }

      this.wrongNames.unshift(word)
      if (this.wrongNames.length >= this.max_tries) {
        this.gameOver();
      }
    },
    hasSelected() {
      return this.lastSelected && Object.keys(this.lastSelected).length > 0;
    },
    gameOver() {
      setTimeout(() => {
        this.isModalOpen = true;
      }, 2000);

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
        }
      } else {
        playerData.activeSequence = 0;
      }
      playerStorage.updateData(playerData);
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
}
</script>

<template>
  <div class="game-component">
    <NameSearch v-if="!isFinished" :nameList="names" :wordHandler="checkWord" />
    <span class="not-found" v-if="nameNotFound">{{ t('NOT_FOUND', [nameNotFound]) }}</span>
    <h3 v-if="isFinished && isWin">{{ t('GAME_OVER_SUCCESS') }}</h3>
    <h3 v-else-if="isFinished && !isWin">{{ t('GAME_OVER_FAILURE') }} <strong>{{ correctName }}</strong></h3>
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
  text-decoration: underline;
  font-weight: bold;
}

.not-found {
  color: var(--color-wrong);
  font-size: 1.5em;
  word-wrap: normal;
}
</style>
