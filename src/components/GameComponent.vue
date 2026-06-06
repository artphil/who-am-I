<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getById, getDally, getRandom, characterData } from '@/utils/data'
import type { Character } from '@/utils/data'
import { t } from '@/utils/translate'
import { DEFAULT_UI_DELAY, MAX_WRONG_GUESSES, CHARACTER_ID, CHARACTER_NAME } from '@/utils/constants'
import { playerStorage, type WrongItem } from '@/utils/storage'
import { getIntersection, getDifference } from '@/utils/game.helper'

import FailList from './FailList.vue'
import GameStats from './GameStats.vue'
import NameSearch from './NameSearch.vue'
import CharacterPerfil from './CharacterPerfil.vue'
import Share from '@/assets/icons/ShareIcon.vue'
import Reload from '@/assets/icons/ReloadIcon.vue'
import CharacterModal from './CharacterModal.vue'

const COPIED_LABEL_KEY = 'COPIED'
const SHARE_LABEL_KEY = 'SHARE'

// router
const route = useRoute()
const router = useRouter()

// helpers
function getCharacterId(): string {
  const id = route.params.id
  return typeof id === 'string' ? id : ''
}

// estado reativo
const correct = ref<Character | null>(null)
const correctName = ref('')
const wrongList = ref<WrongItem[]>([])
const lastSelected = ref<Character | null>(null)
const unknown = ref<Character | null>(null)
const isFinished = ref(false)
const isWin = ref(false)
const isDally = ref(false)
const isModalOpen = ref(false)
const isCharacterOpen = ref(false)
const shareLabel = ref(SHARE_LABEL_KEY)
const correctFeatures = ref<string[]>([])

const names = characterData.map(p => t(p[CHARACTER_NAME]))


// executar inicialização
initGame()

// init do jogo
function initGame() {
  const id = getCharacterId()
  const current = playerStorage.getGame()
  const isCurrentFinished = current.finish === true
  const isCurrentDally = current.dally === true

  let picked = null

  if (id) {
    const character = getById(id)

    if (!character) {
      router.replace('/')
      return
    }

    if (id !== current.selectedId) {
      playerStorage.updateGame({
        ...playerStorage.createGameStatus(),
        selectedId: id,
      })
    }

    picked = character

  } else if (current.selectedId && (!isCurrentFinished || isCurrentDally)) {
    picked = getById(current.selectedId)
  } else {
    picked = getDally()
    if (picked) {
      const dallyCurrent = playerStorage.getGame(picked._id)
      if (!dallyCurrent.selectedId) {
        playerStorage.updateGame({
          ...dallyCurrent,
          selectedId: picked._id,
          dally: true,
        })
      }
    }
  }

  if (!picked) {
    router.replace('/')
    return
  }

  const gameStatus = playerStorage.getGame(picked[CHARACTER_ID])

  correct.value = picked
  correctFeatures.value = gameStatus.correctFeatures || []
  unknown.value = getUnknown(picked, correctFeatures.value, gameStatus.finish)
  correctName.value = t(picked[CHARACTER_NAME])
  wrongList.value = gameStatus.wrongList
  isFinished.value = gameStatus.finish
  isWin.value = gameStatus.win
  isDally.value = gameStatus.dally

  lastSelected.value = gameStatus.win
    ? picked
    : gameStatus.wrongList.length
      ? characterData.find(c => c[CHARACTER_NAME] === gameStatus.wrongList[0]?.name) || null
      : null
}

function getUnknown(correct: Character, correctFeatures: string[], finished: boolean): Character {
  if (finished) {
    return correct
  }
  return Object.keys(correct).map(key => {
    if (key === CHARACTER_NAME) {
      return [key, 'UNKNOWN']
    }
    else if (key.startsWith('_')) {
      return [key, correct[key as keyof Character]]
    } else {
      const features = [] as string[]
      const value = correct[key as keyof Character]
      if (Array.isArray(value)) {
        value.forEach(feature => {
          if (correctFeatures.includes(feature)) {
            features.push(feature)
          }
        })
      }
      return [key, features]
    }
  }).reduce((acc, [key, value]) => ({ ...acc, [key as string]: value }), {}) as Character
}

// reagir a mudança de rota
watch(() => route.params.id, () => {
  initGame()
})

// lógica do jogo
function checkWord(word: string) {
  if (isFinished.value) return
  if (!word.trim()) return
  if (!names.includes(word)) return

  lastSelected.value = characterData.find(p => t(p[CHARACTER_NAME]) === word) || null
  const charName = lastSelected.value?.[CHARACTER_NAME] || ''

  if (charName && wrongList.value.some(item => item.name === charName)) return

  isCharacterOpen.value = true

  if (word === correctName.value) {
    gameOver()
    return
  }

  getIntersection(lastSelected.value as Character, correct.value as Character).forEach(feature => {
    if (!correctFeatures.value.includes(feature)) {
      correctFeatures.value.push(feature)
    }
  })

  unknown.value = getUnknown(correct.value as Character, correctFeatures.value, isFinished.value)

  wrongList.value.unshift({ name: charName, list: lastSelected.value && correct.value ? getDifference(lastSelected.value, correct.value) : [] })
  playerStorage.updateGame({ wrongList: wrongList.value, correctFeatures: correctFeatures.value })

  if (wrongList.value.length >= MAX_WRONG_GUESSES) {
    gameOver()
  }
}

function gameOver() {
  setTimeout(() => {
    isModalOpen.value = true
  }, DEFAULT_UI_DELAY)

  isFinished.value = true
  isWin.value = wrongList.value.length < MAX_WRONG_GUESSES
  unknown.value = getUnknown(correct.value as Character, correctFeatures.value, isFinished.value)

  playerStorage.updateGame({
    finish: isFinished.value,
    win: isWin.value
  })

  const playerData = playerStorage.getData()
  playerData.gamesPlayed += 1

  if (isWin.value) {
    playerData.activeSequence += 1
    if (playerData.activeSequence > playerData.maxSequence) {
      playerData.maxSequence = playerData.activeSequence
    }

    const index = wrongList.value.length
    if (playerData?.gamesWon?.[index] !== undefined) {
      playerData.gamesWon[index] += 1
    }
  } else {
    playerData.activeSequence = 0
  }

  playerStorage.updateData(playerData)
}

async function shareGame() {
  // TODO: Remover comentário após transição
  // Durante a transição para nova url, será compartilhada apenas a nova url.
  // const baseUrl = window.location.origin
  // const url = `${baseUrl}/${playerStorage.getGame()?.dally ? '' : getCharacterId()}`

  const baseUrl = 'https://artphil.github.io/who-am-I/'
  const guesses = wrongList.value.length
  await navigator.clipboard.writeText(
    t('SHARE_MESSAGE', [
      t('GAME_TITLE'),
      (playerStorage.getGame()?.win ? guesses + 1 : "X").toString(),
      MAX_WRONG_GUESSES.toString(),
      baseUrl // url
    ])
  )

  const newLocal = COPIED_LABEL_KEY
  shareLabel.value = newLocal
  setTimeout(() => (shareLabel.value = SHARE_LABEL_KEY), DEFAULT_UI_DELAY)
}

function newGame() {
  console.log('isDally', isDally.value);

  if (isDally.value) {

    const id = getRandom()?.[CHARACTER_ID]
    console.log('id', id);
    router.push('/' + id)
    return
  }
  router.push('/')
}

</script>

<template>
  <div class="game-component">
    <h3 v-if="isFinished && isWin">{{ t('GAME_OVER_SUCCESS') }}</h3>
    <h3 v-else-if="isFinished && !isWin">{{ t('GAME_OVER_FAILURE') }} <strong>{{ correctName }}</strong></h3>
    <span v-else>{{ t('TRIES_LEFT') }}: {{ MAX_WRONG_GUESSES - wrongList.length }} / {{ MAX_WRONG_GUESSES }}</span>
    <NameSearch v-if="!isFinished" :nameList="names" :wordHandler="checkWord" />
    <div v-else class="button-group">
      <button @click="newGame">
        <Reload /> {{ isDally ? t('TRY_AGAIN') : t('GO_DALLY') }}
      </button>
      <button @click="shareGame">
        <Share /> {{ t(shareLabel) }}
      </button>
    </div>
    <CharacterPerfil v-if="correct && unknown" :correctCharacter="correct" :selectedCharacter="unknown" />
    <FailList v-if="wrongList.length" :wrongList="wrongList" />
  </div>
  <GameStats v-if="isModalOpen" :isOpen="isModalOpen" @close="isModalOpen = false" />
  <CharacterModal v-if="isCharacterOpen && correct && lastSelected" :correct="correct" :lastSelected="lastSelected"
    @close="isCharacterOpen = false" />
</template>

<style scoped>
span {
  display: block;
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
}

span strong {
  text-decoration: underline;
  font-weight: bold;
}

.button-group {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 16px 0;
  gap: 16px;
}

button {
  min-width: 10rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
