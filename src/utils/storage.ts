import { DEFAULT_LANGUAGE, MAX_WRONG_GUESSES } from './constants'
import { getLanguage, setLanguage } from './translate'

export interface PlayerData {
  gamesPlayed: number
  activeSequence: number
  maxSequence: number
  gamesWon: number[]
}

export interface GameStatus {
  dally: boolean
  finish: boolean
  win: boolean
  selectedId: string
  wrongList: string[]
}

class PlayerStorage {
  private static instance: PlayerStorage
  private data: PlayerData
  private language: string
  private current: GameStatus
  private dally: GameStatus
  private readonly storageKey = 'wai_data'
  private readonly languageKey = 'wai_lang'
  private readonly currentKey = 'wai_current'
  private readonly dallyKey = 'wai_dally'
  public isNew = false

  private constructor() {
    this.data = this.loadData()
    this.language = setLanguage(localStorage.getItem(this.languageKey) || '')
    this.current = this.loadGame(this.currentKey)
    this.dally = this.loadGame(this.dallyKey)
  }

  static getInstance(): PlayerStorage {
    if (!PlayerStorage.instance) {
      PlayerStorage.instance = new PlayerStorage()
    }
    return PlayerStorage.instance
  }

  private loadData(): PlayerData {
    const stored = localStorage.getItem(this.storageKey)
    if (stored) {
      return JSON.parse(stored)
    }
    this.isNew = true
    const defaultData = this.createDefaultPlayerData()
    localStorage.setItem(this.storageKey, JSON.stringify(defaultData))
    return defaultData
  }

  private createDefaultPlayerData(): PlayerData {
    const language = getLanguage()
    return {
      gamesPlayed: 0,
      activeSequence: 0,
      maxSequence: 0,
      gamesWon: new Array(MAX_WRONG_GUESSES).fill(0),
    }
  }

  private saveData(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data))
  }

  getData(): PlayerData {
    return this.data
  }

  updateData(updates: Partial<PlayerData>): void {
    this.data = { ...this.data, ...updates }
    this.saveData()
  }

  reset(): void {
    this.data = this.createDefaultPlayerData()
    this.saveData()
  }

  getLang(): string {
    return this.language
  }

  setLang(lang: string): void {
    this.language = setLanguage(lang)
    localStorage.setItem(this.languageKey, this.language)

    location.reload()
  }

  loadGame(key: string): GameStatus {
    const stored = localStorage.getItem(key)
    if (stored) {
      return JSON.parse(stored)
    }
    return this.createGameStatus()
  }

  saveGame() {
    localStorage.setItem(this.currentKey, JSON.stringify(this.current))
    if (this.current?.dally) {
      this.dally = this.current
      localStorage.setItem(this.dallyKey, JSON.stringify(this.dally))
    }
  }

  updateGame(updates: Partial<GameStatus>): void {
    this.current = { ...this.current, ...updates }
    this.saveGame()
  }

  getGame(id: string = ''): GameStatus {
    if (id && id !== this.current.selectedId) {
      if (id === this.dally.selectedId) {
        this.current = this.dally
      } else {
        this.current = this.createGameStatus()
      }
    }
    return this.current
  }

  createGameStatus(): GameStatus {
    return { dally: false, selectedId: '', wrongList: [], finish: false, win: false }
  }
}

export const playerStorage = PlayerStorage.getInstance()
