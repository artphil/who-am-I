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
    <FeatureTag v-for="(value, key) in features" :key="key" :text="value" :isCorrect="isCorrect(value)" />
  </div>
</template>


<style scoped>
.attribute {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.attribute-label {
  font-weight: 600;
  color: #333;
}
</style>
