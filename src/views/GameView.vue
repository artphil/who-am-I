<script setup lang="ts">
import MainTitle from '@/components/MainTitle.vue';
import GameComponent from '@/components/GameComponent.vue';
import GameMenu from '@/components/GameMenu.vue'

</script>

<template>
  <header>
    <MainTitle />
    <GameMenu />
  </header>

  <main>
    <GameComponent />
  </main>

  <footer>
    by <a href="https://artphil.github.io/" target="_blank" rel="noopener noreferrer">Artphil</a>
  </footer>
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

main {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: var(--section-gap);
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  border-top: 1px solid var(--color-divider);
  padding: 16px;
  width: 100%;
  font-size: 0.8rem;
  color: var(--color-text);
}

footer a {
  font-weight: bold;
}
</style>
