<template>
  <div :class="['tag', isCorrect ? 'tag--correct' : 'tag--incorrect']">
    <CheckIcon class="icon" v-if="isCorrect" :aria-label="t('correct')" />
    <CloseIcon class="icon" v-else :aria-label="t('incorrect')" />

    <span>
      {{ t('FEATURE.' + text) }}
    </span>
  </div>
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

  border-radius: var(--border-radius);
  border: 2px solid var(--tag-color);
  background-color: var(--color-background-modal);
}

.tag span {
  display: flex;
  align-items: center;
  padding: 0 4px;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--tag-color);
}

.tag .icon {
  background-color: var(--tag-color);
  height: 100%;
  fill: var(--color-background-modal);

}

.tag--correct {
  --tag-color: var(--color-correct);
}

.tag--incorrect {
  --tag-color: var(--color-wrong);
}
</style>
