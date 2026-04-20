<script setup lang="ts">
import { t } from '../utils/translate';
defineProps({
  text: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <span :class="['tag', isCorrect ? 'tag--correct' : 'tag--incorrect']">
    {{ t(text) }}
  </span>
</template>


<style scoped>
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-heading);
}

.tag--correct {
  background-color: var(--color-correct);
}

.tag--incorrect {
  background-color: var(--color-wrong);
}
</style>
