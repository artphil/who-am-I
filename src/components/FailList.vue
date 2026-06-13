<script setup lang="ts">
import type { WrongItem } from '@/utils/storage'
import { t } from '@/utils/translate'

import FeatureTag from './FeatureTag.vue'
import CharacterFeatures from './CharacterFeatures.vue'

defineProps<{
  wrongList: WrongItem[]
}>()
</script>

<template>
  <div class="fail-list">
    <ul>
      <li v-for="(char, index) in wrongList" :key="index">
        <h3>{{ t(char.name) }}</h3>
        <div>
          <FeatureTag v-if="!char.list.length" :text="'NO_MATCHING_FEATURES'" :isCorrect="false" />
          <CharacterFeatures v-if="char.list.length" :title="'NO_MATCHING'" :features="char.list"
            :correctFeatures="[]" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background-color: var(--color-background-modal);
}

li div {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
