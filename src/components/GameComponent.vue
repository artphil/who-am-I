<template>
  <div class="game-component">

    <h3 v-if="isFinished && isWin">{{ t('MESSAGE.GAME_OVER_SUCCESS') }}</h3>
    <h3 v-else-if="isFinished && !isWin">{{ t('MESSAGE.GAME_OVER_FAILURE') }} <strong>{{ correctName }}</strong></h3>
    <span v-else>{{ t('MESSAGE.TRIES_LEFT') }}: {{ MAX_WRONG_GUESSES - wrongList.length }} / {{ MAX_WRONG_GUESSES
      }}</span>
    <div v-if="!isFinished" class="search">
      <NameSearch :nameList="names" :wordHandler="checkWord" />
      <button v-if="isHintAvailable" @click="showHints" :title="t('MESSAGE.HINTS_TITLE')"
        :aria-label="t('MESSAGE.HINTS_TITLE')">
        <HintIcon /> {{ hintsTotal - hintsUsed }}/{{ hintsTotal }}
      </button>

    </div>
    <div v-else class="button-group">
      <button v-if="!isDally" @click="goDally">
        <DallyIcon /> {{ t('SYSTEM.GO_DALLY') }}
      </button>
      <button @click="newGame">
        <Reload /> {{ t('SYSTEM.TRY_AGAIN') }}
      </button>
      <button @click="shareGame">
        <Share /> {{ t('SYSTEM.SHARE') }}
      </button>
    </div>
    <div class="game" :class="{ 'unicolumn': isFinished || wrongList.length === 0 }">
      <CharacterPerfil v-if="correct && unknown" :correctCharacter="correct" :selectedCharacter="unknown" />
      <FailList v-if="wrongList.length" :wrongList="wrongList" />
    </div>
    <div class="footer">
      by <a href="https://artphil.github.io/" target="_blank" rel="noopener noreferrer">Artphil</a>
    </div>
  </div>
  <GameStats v-if="isModalOpen" :isOpen="isModalOpen" @close="isModalOpen = false" />
  <CharacterModal v-if="isCharacterOpen && correct && lastSelected" :correct="correct" :lastSelected="lastSelected"
    @close="isCharacterOpen = false" />
  <ConfirmMessage v-if="isHintsOpen" :title="t('MESSAGE.HINTS_TITLE')" :message="hintMessage"
    :confirm="hintsUsed < hintsTotal ? useHint : undefined" :cancel="() => { isHintsOpen = false; }"
    @close="isHintsOpen = false" />
</template>

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
import HintIcon from '@/assets/icons/HintIcon.vue'
import ConfirmMessage from './ConfirmMessage.vue'
import DallyIcon from '@/assets/icons/DallyIcon.vue'

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
const isHintAvailable = ref(false)
const isHintsOpen = ref(false)
const hintMessage = ref('')
const hintsUsed = ref(0)
const hintsTotal = ref(1)
const reveled = ref(0)

const names = characterData.map(p => t('CHARACTER.' + p[CHARACTER_NAME]))


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
  correctName.value = t('CHARACTER.' + picked[CHARACTER_NAME])
  wrongList.value = gameStatus.wrongList || []
  isFinished.value = gameStatus.finish || false
  isWin.value = gameStatus.win || false
  isDally.value = gameStatus.dally || false
  hintsUsed.value = gameStatus.usedHints || 0
  isHintAvailable.value = hintsUsed.value > 0 || playerStorage.getHintStatus() || false
  hintsTotal.value = wrongList.value.length >= Math.floor(MAX_WRONG_GUESSES / 2) ? 2 : 1
  reveled.value = gameStatus.reveled || 0
  unknown.value = getUnknown(picked, correctFeatures.value, gameStatus.finish)

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
      if (reveled.value > 0) {
        const name = correct[CHARACTER_NAME] as string
        const revealed = name.slice(0, reveled.value)
        return [key, revealed + '...']
      }
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

  lastSelected.value = characterData.find(p => t('CHARACTER.' + p[CHARACTER_NAME]) === word) || null
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

  if (wrongList.value.length === Math.floor(MAX_WRONG_GUESSES / 2)) {
    hintsTotal.value += 1
  }

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
    t('MESSAGE.SHARE_MESSAGE', [
      t('MESSAGE.GAME_TITLE'),
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
  const id = getRandom()?.[CHARACTER_ID]
  router.push('/' + id)
  return
}

function goDally() {
  router.push('/')
}

function showHints() {
  if (isFinished.value) return
  if (hintsUsed.value < hintsTotal.value) {
    hintMessage.value = 'MESSAGE.HINTS_MESSAGE'
  } else {
    hintMessage.value = 'MESSAGE.NO_MORE_HINTS'
  }
  isHintsOpen.value = true
}

function useHint() {
  isHintsOpen.value = false
  if (isFinished.value) return
  if (hintsUsed.value >= hintsTotal.value) return

  const hintKeys = correct.value && unknown.value ? getDifference(correct.value, unknown.value) : []
  console.log('hintKeys', hintKeys);

  if (hintKeys.length > 0) {
    const hint = hintKeys[Math.floor(Math.random() * hintKeys.length)] as string
    correctFeatures.value.push(hint)
  } else {
    reveled.value += 1
  }

  hintsUsed.value += 1
  unknown.value = getUnknown(correct.value as Character, correctFeatures.value, isFinished.value)
  playerStorage.updateGame({ correctFeatures: correctFeatures.value, usedHints: hintsUsed.value, reveled: reveled.value })


}

</script>

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
  display: flex;
  align-items: center;
  gap: 8px;
}

.final-button {
  min-width: 10rem;
}

.search {
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
}

.game-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.game {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--color-divider);
  padding: 16px;
  width: 100%;
  font-size: 0.8rem;
  color: var(--color-text);
}

.footer a {
  font-weight: bold;
}

@media screen and (min-width: 768px) {
  .game {
    grid-template-columns: 1fr 1fr;
  }

  .game.unicolumn {
    grid-template-columns: 1fr;
  }
}
</style>
