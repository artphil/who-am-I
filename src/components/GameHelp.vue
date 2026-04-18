<script lang="ts">
import { playerStorage } from '@/utils/storage';
import { t } from '@/utils/translate';
import PersonFeatures from './PersonFeatures.vue';

export default {

  name: 'GameHelp',
  components: {
    PersonFeatures
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
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
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>Como jogar:</h2>
        <button class="close-btn" @click="closeModal">&times;</button>
      </div>

      <div class="modal-body">
        <div class="player-info">
          <p>Escolha um personagem bíblico para começar e digite o nome.</p>
          <p>Com base nas características, tente adivinhar quem é o personagem misterioso.</p>

          <PersonFeatures :title="'FEATURES'" :features="['CORRECT', 'WRONG']" :correctFeatures="['CORRECT']" />
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  color: black;
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
  background: white;
  border-radius: 8px;
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
  border-bottom: 1px solid #eee;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
}

.modal-body {
  padding: 20px;
}

.player-info {
  margin-bottom: 30px;
}

.player-info p {
  margin: 8px 0;
  font-size: 14px;
}

.chart-container {
  margin-top: 20px;
}

.chart-container h3 {
  margin-bottom: 15px;
  font-size: 16px;
}

.chart {
  width: 100%;
  height: auto;
}

svg rect {
  cursor: pointer;
  transition: opacity 0.2s;
}

svg rect:hover {
  opacity: 0.8;
}
</style>
