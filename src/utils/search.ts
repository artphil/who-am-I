export default class SearchIndex {
  items: Array<string> = []
  index: Array<{ original: string; normalized: string }> = []

  constructor(items: Array<string> = []) {
    this.setItems(items)
  }

  static normalize(str: string) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
  }

  setItems(items: Array<string>) {
    this.items = items

    this.index = items.map((item) => ({
      original: item,
      normalized: SearchIndex.normalize(item),
    }))
  }

  startsWith(query: string) {
    const q = SearchIndex.normalize(query)

    return this.index.filter((item) => item.normalized.startsWith(q)).map((item) => item.original)
  }

  includes(query: string) {
    const q = SearchIndex.normalize(query)

    return this.index.filter((item) => item.normalized.includes(q)).map((item) => item.original)
  }

  fuzzy(query: string, maxDistance = 3) {
    const q = SearchIndex.normalize(query)

    return this.index
      .map((item) => {
        const distance = SearchIndex.levenshtein(q, item.normalized)

        const prefixBonus = item.normalized.startsWith(q) ? -2 : 0

        const lengthPenalty = Math.abs(item.normalized.length - q.length)

        const score = distance + prefixBonus + lengthPenalty

        return {
          original: item.original,
          score,
        }
      })
      .filter((item) => item.score <= maxDistance)
      .sort((a, b) => a.score - b.score)
      .map((item) => item.original)
  }

  static levenshtein(a: string, b: string) {
    const rows = a.length + 1
    const cols = b.length + 1

    const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0))

    for (let i = 0; i < rows; i++) matrix[i][0] = i
    for (let j = 0; j < cols; j++) matrix[0][j] = j

    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1

        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost,
        )
      }
    }

    return matrix[rows - 1][cols - 1]
  }
}
