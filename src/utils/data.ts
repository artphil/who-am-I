import characters from '@/theme/characters'
import { PERSON_ID } from './constants'

const persons = characters

function getById(id: string) {
  for (const item of persons) {
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
  const i = index % persons.length
  return persons[i]
}

function getRandom() {
  const i = Math.floor(Math.random() * persons.length)
  return persons[i]
}

function getDally() {
  const today = new Date()
  const start = new Date(2024, 0, 1) // January 1, 2024
  const diffTime = Math.abs(today.getTime() - start.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return getByIndex(diffDays)
}

export { persons, existis, getById, getByIndex, getDally, getRandom }
