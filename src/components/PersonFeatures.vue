<script setup lang="ts">
import { t } from '@/utils/translate';
import FeatureTag from './FeatureTag.vue';

const props = defineProps<{
  title: string;
  features: string[];
  correctFeatures: string[]
}>()

const isCorrect = (value: string) => {
  return props.correctFeatures.includes(value)
}
</script>

<template>
  <div class="attribute">
    <span class="attribute-label">{{ t(title.toUpperCase()) }}:</span>
    <div class="attribute-container">
      <FeatureTag v-for="(value, key) in features" :key="key" :text="value" :isCorrect="isCorrect(value)" />
    </div>
  </div>
</template>


<style scoped>
.attribute {
  position: relative;
  padding: 8px;
  padding-top: 10px;
  background-color: var(--color-background-cards);
  border-radius: var(--border-radius);
}

.attribute-label {
  position: absolute;
  top: 0;
  left: 16px;
  font-weight: 600;
  color: var(--color-heading);
  padding: 0 6px;
  background-color: var(--color-background-cards);
}

.attribute-container {
  display: flex;
  padding: 8px;
  padding-top: 16px;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-divider);
  flex-wrap: wrap;
  gap: 10px;
}
</style>
