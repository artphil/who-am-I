<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header" :class="color === 'correct' ? 'correct' : color === 'wrong' ? 'wrong' : ''">
        <h2>{{ title }}</h2>
        <button class="close-btn" @click="closeModal" :aria-label="t('CLOSE')" :title="t('CLOSE')">
          <CloseIcon />
        </button>
      </div>

      <div class="modal-body">

        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import { t } from '@/utils/translate'

defineProps<{
  title: string
  color?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function closeModal() {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  color: var(--color-text);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--color-background-modal);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 90%;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--color-divider);
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: var(--color-heading);
}

.modal-body {
  padding: 20px;
}

.correct {
  background-color: var(--color-correct);
}

.wrong {
  background-color: var(--color-wrong);
}
</style>
