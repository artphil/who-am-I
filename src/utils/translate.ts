import theme_translation from '@/theme/translation'
import default_translation from './translation'

const aceptLanguages = ['en', 'es', 'pt']

let locale: string

const localization: Record<string, Record<string, string>> = {
  ...default_translation,
  ...theme_translation,
}

function t(name: string, args: string[] = []): string {
  const lang = getLanguage()
  let message = localization[name]?.[lang] || name

  args.forEach((arg, index) => {
    message = message.replace(`{${index}}`, arg)
  })

  return message
}

function setLanguage(lang: string): string {
  if (lang) {
    for (const l of aceptLanguages) {
      if (lang.startsWith(l)) {
        locale = l
        return locale
      }
    }
  }
  locale = 'pt'
  return locale
}

function getLanguage(): string {
  if (!locale) {
    setLanguage(navigator.language)
  }
  return locale
}

export { t, setLanguage, getLanguage, aceptLanguages }
