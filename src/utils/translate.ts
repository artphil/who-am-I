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
    pt: 'Jacó',
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
  GENDER: {
    en: 'Gender',
    es: 'Género',
    pt: 'Gênero',
  },
  FEATURE: {
    en: 'Feature',
    es: 'Característica',
    pt: 'Característica',
  },
  AGE: {
    en: 'Age',
    es: 'Edad',
    pt: 'Era',
  },
  NEW_AGE: {
    en: 'New Age',
    es: 'Nueva Edad',
    pt: 'Nova Era',
  },
  OLD_AGE: {
    en: 'Old Age',
    es: 'Vieja Edad',
    pt: 'Era Antiga',
  },
  MODERN_AGE: {
    en: 'Modern Age',
    es: 'Edad Moderna',
    pt: 'Era Moderna',
  },
  GAME_TITLE: {
    en: 'Who Am I?',
    es: '¿Quién Soy?',
    pt: 'Quem Sou Eu?',
  },
  GAME_DESCRIPTION: {
    en: 'Guess the character based on their traits and story.',
    es: 'Adivina el personaje basado en sus características e historia.',
    pt: 'Adivinhe o personagem com base em suas características e história.',
  },
  GAME_OVER_SUCCESS: {
    en: 'Congratulations! You guessed correctly!',
    es: '¡Felicidades! ¡Adivinaste correctamente!',
    pt: 'Parabéns! Você adivinhou corretamente!',
  },
  GAME_OVER_FAILURE: {
    en: 'Game Over! Better luck next time.',
    es: '¡Juego Terminado! Mejor suerte la próxima vez.',
    pt: 'Fim de Jogo! Melhor sorte na próxima vez.',
  },
  TRIES_LEFT: {
    en: 'Tries Left',
    es: 'Intentos Restantes',
    pt: 'Tentativas Restantes',
  },
}

function t(name: string): string {
  const lang = locale.split('-')[0] || 'en'
  return localization[name]?.[lang] || name
}

export { t }
