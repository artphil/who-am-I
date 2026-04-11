<script lang="ts">
import { persons } from '../utils/data';
import NameSearch from './NameSearch.vue';
import FailList from './FailList.vue';
import PersonPerfil from './PersonPerfil.vue';
import { t } from '@/utils/translate';
import { MAX_WRONG_GUESSES } from '@/utils/constants';

export default {
  name: 'GameComponent',
  components: {
    NameSearch,
    FailList,
    PersonPerfil,
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
        this.isFinished = true
        this.isWin = true
        return
      }

      this.wrongNames.push(word)
      if (this.wrongNames.length >= this.max_tries) {
        this.isFinished = true
      }
    },
    hasSelected() {
      return this.lastSelected && Object.keys(this.lastSelected).length > 0;
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
