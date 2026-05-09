<script setup lang="ts">
import { CHARACTER_NAME } from '@/utils/constants'
import { t } from '@/utils/translate'
import type { Character } from '@/utils/data'

import PersonFeatures from './PersonFeatures.vue'

const props = defineProps<{
  correctCharacter: Character
  selectedCharacter: Character
}>()

const correctFeatures = getFeatures(props.correctCharacter)
const selectedFeatures = getFeatures(props.selectedCharacter)

function getFeatures(character: Character): Record<string, string[]> {
  return Object.fromEntries(
    Object.entries(character).filter(
      ([key]) => !key.startsWith('_')
    ).map(([key, value]) => [key, value as string[]])
  )
}
</script>

<template>
  <div class="character-perfil">
    <div class="perfil-header">
      <h2>{{ t(selectedCharacter[CHARACTER_NAME]) }}</h2>
    </div>

    <div class="perfil-content">
      <!-- <div v-if="selectedCharacter.image" class="perfil-image">
        <img :src="selectedCharacter.image" :alt="selectedCharacter[CHARACTER_NAME]" />
      </div> -->

      <div class="perfil-attributes">
        <PersonFeatures v-for="(value, key, index) in selectedFeatures" :title="key" :features="value"
          :correctFeatures="correctFeatures[key] || []" :key="index" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.character-perfil {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 20px;
  background: var(--color-background-modal);
}

.perfil-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #333;
}

.perfil-image {
  margin-bottom: 20px;
}

.perfil-image img {
  max-width: 100%;
  border-radius: var(--border-radius);
}

.perfil-attributes {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
</style>
