<script setup lang="ts">
import MainTitle from './components/MainTitle.vue';
import GameComponent from './components/GameComponent.vue';
import GameMenu from './GameMenu.vue'

</script>

<template>
  <header>
    <MainTitle />
    <GameMenu />
  </header>

  <main>
    <GameComponent />
  </main>

</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
  align-items: center;
  margin-bottom: var(--section-gap);
  gap: 16px;
}
</style>
