<script setup lang="ts">
import { ref } from 'vue';
import MainTitle from './components/MainTitle.vue';
import GameComponent from './components/GameComponent.vue';
import GameHelp from './components/GameHelp.vue';

const isHelpModalOpen = ref(false);

const openModal = () => {
  isHelpModalOpen.value = true;
};
const closeModal = () => {
  isHelpModalOpen.value = false;
};
</script>

<template>
  <header>
    <MainTitle />
    <button @click="openModal">?</button>
  </header>

  <main>
    <GameComponent />
  </main>
  <GameHelp v-if="isHelpModalOpen" :isOpen="isHelpModalOpen" @close="closeModal" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-between;
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
