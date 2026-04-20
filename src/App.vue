<script setup lang="ts">
import { ref } from 'vue';
import MainTitle from './components/MainTitle.vue';
import GameComponent from './components/GameComponent.vue';
import GameHelp from './components/GameHelp.vue';
import Help from './assets/icons/HelpIcon.vue'
import Chart from './assets/icons/ChartIcon.vue';
import GameStats from './components/GameStats.vue';

const isHelpModalOpen = ref(false);
const isStatspModalOpen = ref(false);

const openHelp = () => {
  isHelpModalOpen.value = true;
};
const openStats = () => {
  isStatspModalOpen.value = true;
};
const closeModal = () => {
  isHelpModalOpen.value = false;
  isStatspModalOpen.value = false;
};
</script>

<template>
  <header>
    <MainTitle />
    <div class="button-group">
      <button @click="openHelp">
        <Help />
      </button>
      <button @click="openStats">
        <Chart />
      </button>
    </div>
  </header>

  <main>
    <GameComponent />
  </main>
  <GameHelp v-if="isHelpModalOpen" :isOpen="isHelpModalOpen" @close="closeModal" />
  <GameStats v-if="isStatspModalOpen" :isOpen="isStatspModalOpen" @close="closeModal" />
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

header button {
  background: var(--color-background-cards);
  color: var(--color-headding);
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: .5rem;
}

header button:hover {
  background: var(--color-background-modal);
  border: 2px solid var(--color-border-hover);
}


.button-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
