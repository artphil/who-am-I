<script setup lang="ts">
import { t } from '@/utils/translate'
import PersonFeatures from './CharacterFeatures.vue'
import GameModal from './GameModal.vue'
</script>

<template>
  <GameModal :title="t('HELP_TITLE')">

    <div class="group-info">
      <p>{{ t('HELP_STEP_1') }}</p>
      <p>{{ t('HELP_STEP_2') }}</p>
      <p>{{ t('HELP_STEP_3') }}</p>
    </div>

    <div class="group-info">
      <PersonFeatures :title="'FEEDBACK'" :features="['CORRECT', 'WRONG']" :correctFeatures="['CORRECT']" />
      <p>{{ t('CORRECT') }} → {{ t('HELP_CORRECT') }}</p>
      <p>{{ t('WRONG') }} → {{ t('HELP_WRONG') }}</p>
    </div>

    <div class="group-info">
      <p>{{ t('HELP_TARGET') }}</p>

    </div>

  </GameModal>
</template>

<style scoped>
.group-info {
  margin: 0 8px 16px 0;
  font-size: 14px;
}
</style>
