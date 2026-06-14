<script setup lang="ts">
import GameModal from './GameModal.vue'
import { t } from '@/utils/translate'
import CloseIcon from '@/assets/icons/CloseIcon.vue'
import CheckIcon from '@/assets/icons/CheckIcon.vue'

defineProps<{
  title: string
  message: string
  confirm?: () => void
  cancel?: () => void
}>()
</script>

<template>
  <GameModal :title="t('MESSAGE.' + title)">
    <p class="message">{{ t('MESSAGE.' + message) }}</p>
    <div class="button-group">
      <button v-if="confirm" class="action-button confirm" @click="confirm">
        <CheckIcon /> {{ t('SYSTEM.CONFIRM') }}
      </button>
      <button v-if="cancel" class="action-button cancel" @click="cancel">
        <CloseIcon /> {{ t('SYSTEM.CANCEL') }}
      </button>
    </div>
  </GameModal>
</template>

<style scoped>
.message {
  margin-bottom: 20px;
  color: var(--color-text);
  font-size: 1rem;
  text-align: center;
}

.button-group {
  display: flex;
  justify-content: space-around;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: var(--border-radius);
  color: var(--color-heading);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
}

.confirm {
  background-color: var(--vt-c-green);
}

.cancel {
  background-color: var(--vt-c-red);
}
</style>
