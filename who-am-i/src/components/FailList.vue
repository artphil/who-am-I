<script lang="ts">
export default {
  name: 'FailList',
  data() {
    return {
      inputValue: '',
      words: [] as string[]
    }
  },
  methods: {
    addWord() {
      if (this.inputValue.trim()) {
        this.words.push(this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<template>
  <div class="fail-list">
    <input v-model="inputValue" @keyup.enter="addWord" type="text" placeholder="Digite uma palavra" />

    <ul>
      <li v-for="(word, index) in words" :key="index">
        {{ word }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.fail-list {
  padding: 20px;
}

input {
  padding: 8px;
}

ul {
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
