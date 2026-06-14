<script setup lang="ts">
import { CHARACTER_ID } from '@/utils/constants';
import { t } from '@/utils/translate'
import type { Character } from '@/utils/data';

import GameModal from './GameModal.vue'
import CharacterPerfil from './CharacterPerfil.vue'

const props = defineProps<{
  correct: Character
  lastSelected: Character
}>()

function isCorrect(): boolean {
  return props.correct[CHARACTER_ID] === props.lastSelected[CHARACTER_ID]
}

function getColor(): string {
  return isCorrect() ? 'correct' : 'wrong'
}

function getTitle(): string {
  const key = isCorrect() ? 'CHARACTER_CORRECT' : 'CHARACTER_WRONG'
  return t('MESSAGE.' + key)
}

</script>

<template>
  <GameModal :title="getTitle()" :color="getColor()">
    <CharacterPerfil :correctCharacter="correct" :selectedCharacter="lastSelected" />
  </GameModal>
</template>

<style scoped></style>
