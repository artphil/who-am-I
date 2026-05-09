<script setup lang="ts">
import { ref, computed } from 'vue'
import { playerStorage } from '@/utils/storage'
import GameChart from './GameChart.vue'
import GameModal from './GameModal.vue'
import { t } from '@/utils/translate'

const playerData = ref(playerStorage.getData())

const winRate = computed(() => {
  if (playerData.value.gamesPlayed === 0) return 0

  const totalWins = playerData.value.gamesWon.reduce(
    (a: number, b: number) => a + b,
    0
  )

  return Math.round((100 * totalWins) / playerData.value.gamesPlayed)
})
</script>

<template>
  <GameModal :title="t('PLAYER_STATS')">
    <div class="player-info">
      <p><strong>{{ t('ACTUAL_SEQ') }}:</strong> {{ playerData.activeSequence }}</p>
      <p><strong>{{ t('MAX_SEQ') }}:</strong> {{ playerData.maxSequence }}</p>
      <p><strong>{{ t('TOTAL_GAMES') }}:</strong> {{ playerData.gamesPlayed }}</p>
      <p><strong>{{ t('GAMES_WON') }}:</strong> {{playerData.gamesWon.reduce((a, b) => a + b, 0)}}</p>
      <p><strong>{{ t('WIN_RATE') }}:</strong> {{ winRate }}%</p>
    </div>
    <GameChart title="CHART_TITLE" :collumnData="playerData.gamesWon" />
  </GameModal>
</template>

<style scoped>
.player-info {
  margin-bottom: 30px;
}

.player-info p {
  margin: 8px 0;
  font-size: 14px;
}
</style>
