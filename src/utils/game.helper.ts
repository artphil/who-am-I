import type { Character } from './data'

export function getIntersection(source: Character, target: Character): string[] {
  const intersection: string[] = []
  Object.keys(source)
    .filter((key) => !key.startsWith('_'))
    .forEach((key) => {
      const sourceValue = source[key as keyof Character] as string[]
      const targetValue = target[key as keyof Character] as string[]
      sourceValue.forEach((element) => {
        if (targetValue.includes(element)) {
          intersection.push(element)
        }
      })
    })
  return intersection
}
