<script lang="ts">
import { persons } from '../utils/data';
import NameSearch from './NameSearch.vue';
import FailList from './FailList.vue';
import PersonPerfil from './PersonPerfil.vue';
import { t } from '@/utils/translate';

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
        return
      }

      this.wrongNames.push(word)
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
    <span v-if="isFinished">You found the correct name: {{ correctName }}</span>
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
</style>
