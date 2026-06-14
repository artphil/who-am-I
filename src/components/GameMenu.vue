<template>
  <div class="menu">
    <button @click="openMenu" aria-label="Menu" title="Menu">
      <Menu />
    </button>
    <ul v-if="showMenu" class="dropdown">
      <li @click="openHelp">
        <Help /> <span>{{ t('MESSAGE.HELP_TITLE') }}</span>
      </li>
      <li @click="openStats">
        <Chart /> <span>{{ t('MESSAGE.STATS') }}</span>
      </li>
      <li @click="toggleHintStatus">
        <HintIcon />
        <span>{{ t('MESSAGE.HINTS_TITLE') }}</span>
        <CheckIcon v-if="isHintAvailable" />
        <CloseIcon v-else />
      </li>
      <li @click="openMenuLang">
        <Language /> <span>{{ t('SYSTEM.LANGUAGE') }}</span>
        <ul v-if="showMenuLang" class="dropdown">
          <li v-for="item in languages" :key="item" @click="setLang(item)">{{ t('SYSTEM.' + item.toUpperCase()) }}</li>
        </ul>
      </li>
    </ul>
  </div>
  <GameHelp v-if="isHelpModalOpen" :isOpen="isHelpModalOpen" @close="closeModal" />
  <GameStats v-if="isStatspModalOpen" :isOpen="isStatspModalOpen" @close="closeModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { acceptLanguages, t } from '@/utils/translate';
import Help from '@/assets/icons/HelpIcon.vue'
import Chart from '@/assets/icons/ChartIcon.vue';
import Menu from '@/assets/icons/MenuIcon.vue';
import Language from '@/assets/icons/LanguageIcon.vue';
import GameHelp from '@/components/GameHelp.vue';
import GameStats from '@/components/GameStats.vue';
import { playerStorage } from '../utils/storage';
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import HintIcon from '@/assets/icons/HintIcon.vue';

const isHelpModalOpen = ref(playerStorage.isNew);
const isStatspModalOpen = ref(false);
const showMenu = ref(false);
const showMenuLang = ref(false);
const languages = acceptLanguages
const isHintAvailable = ref(playerStorage.getHintStatus())

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

const toggleHintStatus = () => {
  isHintAvailable.value = !isHintAvailable.value;
  playerStorage.setHintStatus(isHintAvailable.value);
}

</script>

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
