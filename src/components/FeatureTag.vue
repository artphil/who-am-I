<template>
  <span :class="['tag', isCorrect ? 'tag--correct' : 'tag--incorrect']">
    <CheckIcon v-if="isCorrect" :aria-label="t('correct')" />
    <CloseIcon v-else :aria-label="t('incorrect')" />
    {{ t(text) }}
  </span>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import { t } from '../utils/translate';
import CheckIcon from '@/assets/icons/CheckIcon.vue';
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

<style scoped>
.tag {
  --tag-color: var(--color-heading);

  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 700;
  border: 2px solid var(--tag-color);
  background-color: var(--color-background-cards);
  color: var(--tag-color);
}

.tag svg {
  fill: var(--tag-color);
}

.tag--correct {
  --tag-color: var(--color-correct);
}

.tag--incorrect {
  --tag-color: var(--color-wrong);
}
</style>
