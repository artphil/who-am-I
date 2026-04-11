const locale = navigator.language || 'en-US'

const localization: Record<string, Record<string, string>> = {
  JESUS: {
    en: 'Jesus',
    es: 'Jesús',
    pt: 'Jesus',
  },
  DAVID: {
    en: 'David',
    es: 'David',
    pt: 'Davi',
  },
  ABRAHAM: {
    en: 'Abraham',
    es: 'Abraham',
    pt: 'Abraão',
  },
  JACOB: {
    en: 'Jacob',
    es: 'Jacob',
    pt: 'Jaco',
  },
  MARY: {
    en: 'Mary',
    es: 'María',
    pt: 'Maria',
  },
  DEBORAH: {
    en: 'Deborah',
    es: 'Débora',
    pt: 'Débora',
  },
  SARAH: {
    en: 'Sarah',
    es: 'Sara',
    pt: 'Sara',
  },
  RUTH: {
    en: 'Ruth',
    es: 'Rut',
    pt: 'Rute',
  },
  JOSEPH: {
    en: 'Joseph',
    es: 'José',
    pt: 'José',
  },
  SACRIFICE: {
    en: 'Sacrifice',
    es: 'Sacrificio',
    pt: 'Sacrifício',
  },
  LOVE: {
    en: 'Love',
    es: 'Amor',
    pt: 'Amor',
  },
  HOLINESS: {
    en: 'Holiness',
    es: 'Santidad',
    pt: 'Santidade',
  },
  LEADERSHIP: {
    en: 'Leadership',
    es: 'Liderazgo',
    pt: 'Liderança',
  },
  HEROISM: {
    en: 'Heroism',
    es: 'Heroísmo',
    pt: 'Heroísmo',
  },
  WISDOM: {
    en: 'Wisdom',
    es: 'Sabiduría',
    pt: 'Sabedoria',
  },
  FAITH: {
    en: 'Faith',
    es: 'Fe',
    pt: 'Fé',
  },
  PATIENCE: {
    en: 'Patience',
    es: 'Paciencia',
    pt: 'Paciência',
  },
  COMPASSION: {
    en: 'Compassion',
    es: 'Compasión',
    pt: 'Compaixão',
  },
  COURAGE: {
    en: 'Courage',
    es: 'Coraje',
    pt: 'Coragem',
  },
  LOYALTY: {
    en: 'Loyalty',
    es: 'Lealtad',
    pt: 'Lealdade',
  },
  JUSTICE: {
    en: 'Justice',
    es: 'Justicia',
    pt: 'Justiça',
  },
  MALE: {
    en: 'Male',
    es: 'Masculino',
    pt: 'Masculino',
  },
  FEMALE: {
    en: 'Female',
    es: 'Femenino',
    pt: 'Feminino',
  },
}

function t(name: string): string {
  const lang = locale.split('-')[0] || 'en'
  return localization[name]?.[lang] || name
}

export { t }
