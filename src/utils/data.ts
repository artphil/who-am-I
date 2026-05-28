import characters from '@/theme/characters'
import { CHARACTER_ID } from './constants'

export const characterData = characters
export type Character = (typeof characters)[0]

export function getById(id: string): Character | null {
  for (const item of characterData) {
    if (item[CHARACTER_ID] == id.toLowerCase()) {
      return item
    }
  }
  return null
}

export function existis(id: string): boolean {
  return Boolean(getById(id))
}

export function getByIndex(index: number): Character | null {
  const i = index % characterData.length
  return characterData[i] || null
}

export function getRandom(): Character | null {
  const i = Math.floor(Math.random() * characterData.length)
  return characterData[i] || null
}

export function getDally(): Character | null {
  const start = new Date(2024, 0, 1) // 2024-01-01
  const today = new Date()
  const diffTime = Math.abs(today.getTime() - start.getTime()) // miliseconds
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return getByIndex(diffDays)
}
