<script setup lang="ts">
import { ref } from 'vue';
import { aceptLanguages, t } from '@/utils/translate';
import Help from '@/assets/icons/HelpIcon.vue'
import Chart from '@/assets/icons/ChartIcon.vue';
import Menu from '@/assets/icons/MenuIcon.vue';
import Language from '@/assets/icons/LanguageIcon.vue';
import GameHelp from '@/components/GameHelp.vue';
import GameStats from '@/components/GameStats.vue';
import { playerStorage } from '../utils/storage';

const isHelpModalOpen = ref(playerStorage.isNew);
const isStatspModalOpen = ref(false);
const showMenu = ref(false);
const showMenuLang = ref(false);
const languages = aceptLanguages

const openMenu = () => {
  showMenu.value = !showMenu.value;
  showMenuLang.value = false;
};

const openMenuLang = () => {
  showMenuLang.value = !showMenuLang.value;
};
const setLang = (lang: string) => {
  playerStorage.setLang(lang)
  showMenuLang.value = false;
  showMenu.value = false;
}

const openHelp = () => {
  isHelpModalOpen.value = true;
  showMenu.value = false;
};
const openStats = () => {
  isStatspModalOpen.value = true;
  showMenu.value = false;
};
const closeModal = () => {
  isHelpModalOpen.value = false;
  isStatspModalOpen.value = false;
};
</script>

<template>
  <div class="menu">
    <button @click="openMenu">
      <Menu />
    </button>
    <ul v-if="showMenu" class="dropdown">
      <li @click="openHelp">
        <Help /> <span>{{ t('HELP_TITLE') }}</span>
      </li>
      <li @click="openStats">
        <Chart /> <span>{{ t('STATS') }}</span>
      </li>
      <li @click="openMenuLang">
        <Language /> <span>{{ t('LANGUAGE') }}</span>
        <ul v-if="showMenuLang" class="dropdown">
          <li v-for="item in languages" :key="item" @click="setLang(item)">{{ t(item.toUpperCase()) }}</li>
        </ul>

      </li>
    </ul>
  </div>
  <GameHelp v-if="isHelpModalOpen" :isOpen="isHelpModalOpen" @close="closeModal" />
  <GameStats v-if="isStatspModalOpen" :isOpen="isStatspModalOpen" @close="closeModal" />
</template>

<style scoped>
.menu {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 0;
  right: 100%;
  list-style: none;
  margin: 4px 0 0 0;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background: var(--color-background-modal);
  color: var(--color-text);
  z-index: 10;
}

.dropdown li {
  display: flex;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: var(--color-background-cards);
}

span {
  text-wrap: nowrap;
}
</style>
