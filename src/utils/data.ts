import characters from '@/theme/characters'
import { CHARACTER_ID } from './constants'

export const characterData = characters
export type Character = (typeof characters)[0]

export function getById(id: string) {
  for (const item of characterData) {
    if (item[CHARACTER_ID] == id.toLowerCase()) {
      return item
    }
  }
  return null
}

export function existis(id: string) {
  return Boolean(getById(id))
}

export function getByIndex(index: number) {
  const i = index % characterData.length
  return characterData[i]
}

export function getRandom() {
  const i = Math.floor(Math.random() * characterData.length)
  return characterData[i]
}

export function getDally() {
  const today = new Date()
  const start = new Date(2024, 0, 1) // January 1, 2024
  const diffTime = Math.abs(today.getTime() - start.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return getByIndex(diffDays)
}
