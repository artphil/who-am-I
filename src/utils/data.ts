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

export { persons, existis, getById, getByIndex, getRandom }
