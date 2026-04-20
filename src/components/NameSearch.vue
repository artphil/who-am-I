<script lang="ts">
import { t } from '@/utils/translate';

export default {
  name: 'NameSearch',
  props: {
    nameList: {
      type: Array as () => string[],
      required: true
    },
    wordHandler: {
      type: Function as unknown as () => (word: string) => void,
      required: true
    }
  },
  data() {
    return {
      searchQuery: '',
      filteredNames: [] as string[],
      showDropdown: false,
      t: t,
    }
  },
  methods: {
    addWord() {
      if (this.searchQuery.trim()) {
        this.wordHandler(this.searchQuery)
        this.searchQuery = ''
      }
    },
    filterNames() {
      const query = this.searchQuery.toLowerCase().trim()

      if (!query) {
        this.filteredNames = []
        this.closeDropdown()
        return
      }

      this.filteredNames = this.nameList.filter(name =>
        name.toLowerCase().startsWith(query)
      )
      this.openDropdown()
    },
    selectName(name: string) {
      this.searchQuery = name
      this.showDropdown = false
      this.$emit('name-selected', name)
      this.$nextTick(() => {
        (this.$refs.searchInput as HTMLInputElement)?.focus()
      })
    },
    openDropdown() {
      if (this.searchQuery) {
        this.showDropdown = true
      }
    },
    closeDropdown() {
      setTimeout(() => {
        this.showDropdown = false
      }, 200)
    }
  }
}
</script>

<template>
  <div class="name-search">
    <input v-model="searchQuery" type="text" :placeholder="t('INPUT_PLACEHOLDER')" @input="filterNames"
      @blur="closeDropdown" @focus="openDropdown" @keyup.enter="addWord" ref="searchInput" />
    <ul v-if="showDropdown && filteredNames.length" class="dropdown">
      <li v-for="name in filteredNames" :key="name" @click="selectName(name)">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.name-search {
  position: relative;
  width: 100%;
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
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  background: white;
  color: black;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown li {
  padding: 8px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f0f0f0;
}
</style>
