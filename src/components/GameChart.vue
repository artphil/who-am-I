<script setup lang="ts">
import { computed, ref } from 'vue'
import { t } from '@/utils/translate'

const props = defineProps<{
  title: string
  collumnData: number[]
}>()

const chartWidth = 550
const chartHeight = 320
const collumnGap = 10

const maxValue = computed(() => Math.max(...props.collumnData))

const collumnWidth = computed(() => {
  return (chartWidth - 100) / props.collumnData.length - collumnGap
})

const collumnValues = computed(() => {
  return props.collumnData.map(value =>
    maxValue.value > 0 ? Math.round((value / maxValue.value) * 100) : 0
  )
})

const hoveredBar = ref<number | null>(null)
</script>

<template>
  <div class="chart-container">
    <h3>{{ t(title) }}</h3>
    <svg :viewBox="`0 0 ${chartWidth} ${chartHeight}`" class="chart">
      <!-- Eixo Y -->
      <line x1="40" y1="20" x2="40" y2="280" stroke-width="2" />
      <!-- Eixo X -->
      <line x1="40" y1="280" x2="500" y2="280" stroke-width="2" />

      <!-- Barras -->
      <g>
        <rect :x="0" :y="0" :width="40" :height="0" fill="#4CAF50" />
      </g>
      <g v-for="(game, index) in collumnValues" :key="index">
        <rect :x="50 + Number(index) * (collumnWidth + collumnGap)" :y="280 - (game * 2.6)" width="40"
          :height="game * 2.6" @mouseover="hoveredBar = Number(index)" @mouseout="hoveredBar = null" />
        <text :x="70 + Number(index) * (collumnWidth + collumnGap)" :y="295" text-anchor="middle" font-size="12">
          {{ Number(index) + 1 }}
        </text>
        <!-- Tooltip -->
        <text class="tooltip-value" v-if="hoveredBar === index" :x="70 + Number(index) * (collumnWidth + collumnGap)"
          :y="300 - (game * 2.6)" text-anchor="middle" font-size="16">
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
  background-color: var(--color-background-cards);
}

.chart {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
}

line {
  stroke: var(--color-border);
}

svg rect {
  cursor: pointer;
  transition: opacity 0.2s;
  fill: var(--color-correct);
}

text {
  fill: var(--color-text);
}

.tooltip-value {
  fill: var(--color-heading);
}

svg rect:hover {
  opacity: 0.8;
}
</style>
