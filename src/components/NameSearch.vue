<script setup lang="ts">
import { ref } from 'vue'
import SearchIndex from '@/utils/search'
import { t } from '@/utils/translate'

const props = defineProps<{
  nameList: string[]
  wordHandler: (word: string) => void
}>()

const search = new SearchIndex(props.nameList)

const searchQuery = ref('')
const filteredNames = ref<string[]>([])
const showDropdown = ref(false)

const searchInput = ref<HTMLInputElement | null>(null)

function filterNames() {
  const query = searchQuery.value.toLowerCase().trim()

  if (!query) {
    filteredNames.value = []
    closeDropdown()
    return
  }

  filteredNames.value = search.includes(query).slice(0, 20)
  openDropdown()
}

function sendWord() {
  if (filteredNames.value.length) {
    selectName(filteredNames.value[0] || '')
  }
}

function selectName(name: string) {
  searchQuery.value = ''
  showDropdown.value = false
  searchInput.value?.blur()
  props.wordHandler(name)
}

function openDropdown() {
  showDropdown.value = true
}

function closeDropdown() {
  setTimeout(() => {
    showDropdown.value = false
  }, 200)
}
</script>

<template>
  <div class="name-search">
    <input v-model="searchQuery" type="text" :placeholder="t('INPUT_PLACEHOLDER')" @input="filterNames"
      @blur="closeDropdown" @focus="openDropdown" ref="searchInput" autocomplete="new-password"
      @keypress.enter="sendWord" />

    <ul v-show="showDropdown && searchQuery" class="dropdown">
      <li v-if="!filteredNames.length">
        {{ t('NOT_FOUND') }}
      </li>
      <li v-for="name in filteredNames" :key="name" @mousedown.prevent="selectName(name)">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.name-search {
  position: relative;
  width: 100%;
  margin: 16px 0;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 16px;
  background: var(--color-background-modal);
  color: var(--color-heading);
}

input:hover {
  border-color: var(--color-border-hover);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  list-style: none;
  margin: 4px 0 0 0;
  padding: 0;
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius);
  background: var(--color-background-cards);
  color: var(--color-text);
  max-height: 200px;
  overflow-y: auto;
  z-index: 999;
  webkit-overflow-scrolling: touch;
}

.dropdown li {
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: var(--color-background-modal);
  color: var(--color-heading);
}
</style>
