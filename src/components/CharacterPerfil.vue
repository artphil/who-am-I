<template>
  <div class="character-perfil">
    <div class="perfil-header">
      <!-- <div v-if="selectedCharacter.image" class="perfil-image">
        <img :src="selectedCharacter.image" :alt="selectedCharacter[CHARACTER_NAME]" />
      </div> -->
      <div class="perfil-data">

        <h2>{{ t('CHARACTER.' + selectedCharacter[CHARACTER_NAME]) }}</h2>
        <p v-if="showDescription" class="description">
          <span class="reference">"</span>
          {{ t('DESCRIPTION.' + selectedCharacter[CHARACTER_NAME]) }}
          <span class="reference">"</span>
        </p>
      </div>
    </div>

    <div class="perfil-content">

      <div class="perfil-attributes">
        <CharacterFeatures v-for="(value, key, index) in getFeatures(selectedCharacter)" :title="key" :features="value"
          :correctFeatures="getFeatures(correctCharacter)[key] || []" :key="index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CHARACTER_NAME } from '@/utils/constants'
import { t } from '@/utils/translate'
import type { Character } from '@/utils/data'

import CharacterFeatures from './CharacterFeatures.vue'

defineProps<{
  correctCharacter: Character
  selectedCharacter: Character
  showDescription?: boolean;
}>()

function getFeatures(character: Character): Record<string, string[]> {
  return Object.fromEntries(
    Object.entries(character).filter(
      ([key]) => !key.startsWith('_')
    ).map(([key, value]) => [key, value as string[]])
  )
}
</script>


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
}

.perfil-data {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.perfil-data p {
  background-color: var(--color-background-cards);
  border-radius: var(--border-radius);
  padding: 8px;
}

.reference {
  font-size: 1.3rem;
  color: var(--color-heading);
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
