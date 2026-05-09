import characters from '@/theme/characters'
import { PERSON_ID } from './constants'

const characterData = characters
type CharacterType = (typeof characters)[0]

function getById(id: string) {
  for (const item of characterData) {
    if (item[PERSON_ID] == id.toLowerCase()) {
      return item
    }
  }
  return null
}

function existis(id: string) {
  return Boolean(getById(id))
}

function getByIndex(index: number) {
  const i = index % characterData.length
  return characterData[i]
}

function getRandom() {
  const i = Math.floor(Math.random() * characterData.length)
  return characterData[i]
}

function getDally() {
  const today = new Date()
  const start = new Date(2024, 0, 1) // January 1, 2024
  const diffTime = Math.abs(today.getTime() - start.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return getByIndex(diffDays)
}

export { characterData, existis, getById, getByIndex, getDally, getRandom, type CharacterType }
