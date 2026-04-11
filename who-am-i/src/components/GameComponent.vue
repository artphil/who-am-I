<script lang="ts">
import NameSearch from './NameSearch.vue';
import FailList from './FailList.vue';

export default {
  name: 'GameComponent',
  components: {
    NameSearch,
    FailList
  },
  data() {
    return {
      names: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan'],
      wrongNames: [] as string[],
      correctName: 'Charlie',
      lastSelectedName: '' as string,
      isFinished: false,
    }
  },
  methods: {
    checkWord(word: string) {
      if (this.isFinished) { return }
      if (!word.trim()) { return }
      if (!this.names.includes(word)) { return }
      if (this.wrongNames.includes(word)) { return }

      if (word === this.correctName) {
        this.isFinished = true
        return
      }

      this.wrongNames.push(word)
    }
  }
}
</script>

<template>
  <div class="game-component">
    <NameSearch :nameList="names" :wordHandler="checkWord" />
    <span v-if="isFinished">You found the correct name: {{ correctName }}</span>
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
