<script lang="ts">
import { playerStorage } from '@/utils/storage';
import GameChart from './GameChart.vue';
import { t } from '@/utils/translate';
import GameModal from './GameModal.vue';

export default {

  name: 'GameStats',
  components: {
    GameChart,
    GameModal,
  },
  data() {
    return {
      chartWidth: 550,
      chartHeight: 320,
      hoveredBar: null as null | number,
      playerData: playerStorage.getData(),
      t: t
    }
  },
  computed: {
    winRate() {
      if (this.playerData.gamesPlayed === 0) return 0;
      const avg = 100 * this.playerData.gamesWon.reduce((a: number, b: number) => a + b, 0) / this.playerData.gamesPlayed;
      return Math.round(avg);
    }
  },
}
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
