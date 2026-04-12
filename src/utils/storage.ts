import { MAX_WRONG_GUESSES } from './constants'

export interface PlayerData {
  gamesPlayed: number
  activeSequence: number
  maxSequence: number
  gamesWon: number[]
}

class PlayerStorage {
  private static instance: PlayerStorage
  private data: PlayerData
  private readonly storageKey = 'wai_data'

  private constructor() {
    this.data = this.loadFromStorage()
  }

  static getInstance(): PlayerStorage {
    if (!PlayerStorage.instance) {
      PlayerStorage.instance = new PlayerStorage()
    }
    return PlayerStorage.instance
  }

  private loadFromStorage(): PlayerData {
    const stored = localStorage.getItem(this.storageKey)
    if (stored) {
      return JSON.parse(stored)
    }
    const defaultData = this.createDefaultPlayerData()
    localStorage.setItem(this.storageKey, JSON.stringify(defaultData))
    return defaultData
  }

  private createDefaultPlayerData(): PlayerData {
    return {
      gamesPlayed: 0,
      activeSequence: 0,
      maxSequence: 0,
      gamesWon: new Array(MAX_WRONG_GUESSES).fill(0),
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data))
  }

  getData(): PlayerData {
    return this.data
  }

  updateData(updates: Partial<PlayerData>): void {
    this.data = { ...this.data, ...updates }
    this.saveToStorage()
  }

  reset(): void {
    this.data = this.createDefaultPlayerData()
    this.saveToStorage()
  }
}

export const playerStorage = PlayerStorage.getInstance()
