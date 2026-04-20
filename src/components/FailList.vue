<script lang="ts">

export default {
  name: 'FailList',
  props: {
    wrongList: {
      type: [] as string[],
      required: true,
    }
  }
}
</script>

<template>
  <div class="fail-list">
    <ul>
      <li v-for="(word, index) in wrongList" :key="index">
        {{ word }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.fail-list {
  padding: 20px;
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
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}
</style>
