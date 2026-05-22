<script setup lang="ts">
import type { WrongItem } from '@/utils/storage'
import { t } from '@/utils/translate'

import FeatureTag from './FeatureTag.vue'

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
          <FeatureTag v-for="(feature, idx) in char.list" :key="idx" :text="feature" :isCorrect="false" />
          <FeatureTag v-if="!char.list.length" :text="'NO_MATCHING_FEATURES'" :isCorrect="false" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.fail-list {
  padding: 20px;
}

ul {
  margin-top: 20px;
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
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
