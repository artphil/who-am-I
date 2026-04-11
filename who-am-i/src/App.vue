<script setup lang="ts">
import MainTitle from './components/MainTitle.vue';
import FailList from './components/FailList.vue';
</script>

<template>
  <header>
    <MainTitle title="Who am I?" />
  </header>

  <main>
    <FailList />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
