<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getById, getDally, getRandom, characterData } from '@/utils/data'
import type { Character } from '@/utils/data'
import { t } from '@/utils/translate'
import { DEFAULT_UI_DELAY, MAX_WRONG_GUESSES, CHARACTER_ID, CHARACTER_NAME } from '@/utils/constants'
import { playerStorage, type WrongItem } from '@/utils/storage'

import FailList from './FailList.vue'
import GameStats from './GameStats.vue'
import NameSearch from './NameSearch.vue'
import PersonPerfil from './PersonPerfil.vue'
import Share from '@/assets/icons/ShareIcon.vue'
import Reload from '@/assets/icons/ReloadIcon.vue'
import { getIntersection } from '@/utils/game.helper'

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
const isFinished = ref(false)
const isWin = ref(false)
const isModalOpen = ref(false)
const shareLabel = ref(SHARE_LABEL_KEY)

const names = characterData.map(p => t(p[CHARACTER_NAME]))
const max_tries = MAX_WRONG_GUESSES

// init do jogo
function initGame() {
  const id = getCharacterId()
  const current = playerStorage.getGame()

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
  } else if (current.selectedId && (current.dally || !current.finish)) {
    picked = getById(current.selectedId)
  } else {
    picked = getDally()
    if (picked && !getById(picked._id)) {
      playerStorage.updateGame({
        ...playerStorage.createGameStatus(),
        selectedId: picked._id,
        dally: true,
      })
    }
  }

  if (!picked) {
    router.replace('/')
    return
  }

  const gameStatus = playerStorage.getGame(picked[CHARACTER_ID])

  correct.value = picked
  correctName.value = t(picked[CHARACTER_NAME])
  wrongList.value = gameStatus.wrongList
  isFinished.value = gameStatus.finish
  isWin.value = gameStatus.win

  lastSelected.value = gameStatus.win
    ? picked
    : gameStatus.wrongList.length
      ? characterData.find(c => c[CHARACTER_NAME] === gameStatus.wrongList[0]?.name) || null
      : null
}

// executar inicialização
initGame()

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

  if (word === correctName.value) {
    gameOver()
    return
  }

  wrongList.value.unshift({ name: charName, list: lastSelected.value && correct.value ? getIntersection(lastSelected.value || [], correct.value) : [] })
  playerStorage.updateGame({ wrongList: wrongList.value })

  if (wrongList.value.length >= max_tries) {
    gameOver()
  }
}

function gameOver() {
  setTimeout(() => {
    isModalOpen.value = true
  }, DEFAULT_UI_DELAY)

  isFinished.value = true
  isWin.value = wrongList.value.length < max_tries

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
  const url = `${window.location.origin}/${playerStorage.getGame()?.dally ? '' : getCharacterId()}`

  await navigator.clipboard.writeText(
    t('SHARE_MESSAGE', [
      (wrongList.value.length + 1).toString(),
      MAX_WRONG_GUESSES.toString(),
      t('GAME_TITLE'),
      url
    ])
  )

  const newLocal = COPIED_LABEL_KEY
  shareLabel.value = newLocal
  setTimeout(() => (shareLabel.value = SHARE_LABEL_KEY), DEFAULT_UI_DELAY)
}

function randomGame() {
  const id = getRandom()?.[CHARACTER_ID]
  router.push('/' + id)
}

function closeModal() {
  isModalOpen.value = false
}
</script>

<template>
  <div class="game-component">
    <h3 v-if="isFinished && isWin">{{ t('GAME_OVER_SUCCESS') }}</h3>
    <h3 v-else-if="isFinished && !isWin">{{ t('GAME_OVER_FAILURE') }} <strong>{{ correctName }}</strong></h3>
    <span v-else>{{ t('TRIES_LEFT') }}: {{ max_tries - wrongList.length }} / {{ max_tries }}</span>
    <NameSearch v-if="!isFinished" :nameList="names" :wordHandler="checkWord" />
    <div v-else class="button-group">
      <button @click="randomGame">
        <Reload /> {{ t('TRY_AGAIN') }}
      </button>
      <button @click="shareGame">
        <Share /> {{ t(shareLabel) }}
      </button>
    </div>
    <PersonPerfil v-if="lastSelected" :correctCharacter="correct as any" :selectedCharacter="lastSelected" />
    <FailList v-if="wrongList.length" :wrongList="wrongList" />
  </div>
  <GameStats v-if="isModalOpen" :isOpen="isModalOpen" @close="closeModal" />
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
