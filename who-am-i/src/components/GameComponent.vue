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
    }
  },
  methods: {
    checkWord(word: string) {
      if (!word.trim()) { return }
      if (!this.names.includes(word)) { return }
      if (this.wrongNames.includes(word)) { return }

      this.wrongNames.push(word)
    }
  }
}
</script>

<template>
  <div class="game-component">
    <NameSearch :nameList="names" :wordHandler="checkWord" />
    <FailList :wrongList="wrongNames" />
  </div>
</template>

<style scoped></style>
