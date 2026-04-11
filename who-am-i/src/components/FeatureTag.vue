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
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
}

.tag--correct {
  background-color: #22c55e;
  color: white;
}

.tag--incorrect {
  background-color: #ef4444;
  color: white;
}
</style>
