import theme_character_translation from '@/theme/translation/character'
import theme_feature_translation from '@/theme/translation/feature'
import theme_description_translation from '@/theme/translation/description'

import character_translation from './translation/character'
import feature_translation from './translation/feature'
import system_translation from './translation/system'
import message_translation from './translation/message'
import description_translation from './translation/description'

import { DEFAULT_LANGUAGE } from './constants'

type LocaleUnit = {
  en: string
  es: string
  pt: string
}

type Localization = Record<string, Record<string, LocaleUnit>>

const acceptLanguages = ['en', 'es', 'pt']

let locale: string

const localization: Localization = {
  CHARACTER: { ...character_translation, ...theme_character_translation },
  FEATURE: { ...feature_translation, ...theme_feature_translation },
  SYSTEM: system_translation,
  MESSAGE: message_translation,
  DESCRIPTION: { ...description_translation, ...theme_description_translation },
}

function t(path: string, args: string[] = []): string {
  const lang = getLanguage() as keyof LocaleUnit
  const pathList = path.split('.')
  if (pathList.length === 0) {
    return path
  } else if (pathList.length === 1) {
    for (const bundle in localization) {
      if (localization[bundle]?.[path]?.[lang]) {
        return resolveMessage(localization[bundle][path][lang], args)
      }
    }
  } else {
    const bundle = pathList[0] || ''
    const unit = pathList[1] || ''

    if (localization[bundle]?.[unit]?.[lang]) {
      return resolveMessage(localization[bundle][unit][lang], args)
    }
  }
  return path
}

function resolveMessage(message: string, args: string[] = []): string {
  args.forEach((arg, index) => {
    message = message.replace(`{${index}}`, arg)
  })
  return message
}

function setLanguage(lang: string): string {
  if (lang) {
    for (const l of acceptLanguages) {
      if (lang.startsWith(l)) {
        locale = l
        return locale
      }
    }
  }
  locale = DEFAULT_LANGUAGE
  return locale
}

function getLanguage(): string {
  if (!locale) {
    setLanguage(navigator.language)
  }
  return locale
}

export { t, setLanguage, getLanguage, acceptLanguages }
