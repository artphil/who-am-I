<script lang="ts">
import { t } from '@/utils/translate';

export default {
  name: 'GameChart',
  props: {
    title: {
      type: String,
      required: true
    },
    collumnData: {
      type: Array as () => number[],
      required: true
    }
  },
  data() {
    const maxValue = Math.max(...this.collumnData);
    const chartWidth = 550;
    const colGap = 10;
    return {
      chartWidth: chartWidth,
      chartHeight: 320,
      collumnWidth: (chartWidth - 100) / this.collumnData.length - colGap,
      collumnGap: colGap,
      collumnValues: this.collumnData.map(value => maxValue > 0 ? Math.round((value / maxValue) * 100) : 0),
      hoveredBar: null as null | number,
      t: t
    }
  },
}
</script>

<template>
  <div class="chart-container">
    <h3>{{ t(title) }}</h3>
    <svg :viewBox="`0 0 ${chartWidth} ${chartHeight}`" class="chart">
      <!-- Eixo Y -->
      <line x1="40" y1="20" x2="40" y2="280" stroke="#333" stroke-width="2" />
      <!-- Eixo X -->
      <line x1="40" y1="280" x2="500" y2="280" stroke="#333" stroke-width="2" />

      <!-- Barras -->
      <g>
        <rect :x="0" :y="0" :width="40" :height="0" fill="#4CAF50" />
      </g>
      <g v-for="(game, index) in collumnValues" :key="index">
        <rect :x="50 + Number(index) * (collumnWidth + collumnGap)" :y="280 - (game * 2.6)" width="40"
          :height="game * 2.6" fill="#4CAF50" @mouseover="hoveredBar = Number(index)" @mouseout="hoveredBar = null" />
        <text :x="70 + Number(index) * (collumnWidth + collumnGap)" :y="295" text-anchor="middle" font-size="12">
          {{ Number(index) + 1 }}
        </text>
        <!-- Tooltip -->
        <text v-if="hoveredBar === index" :x="70 + Number(index) * (collumnWidth + collumnGap)" :y="300 - (game * 2.6)"
          text-anchor="middle" font-size="16" fill="#ffffff">
          {{ collumnData[index] }}
        </text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.chart-container {
  margin-top: 20px;
  text-align: center;
}

.chart {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
}
</style>
