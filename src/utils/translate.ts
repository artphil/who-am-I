const aceptLanguages = ['en', 'es', 'pt']

let locale: string

const localization: Record<string, Record<string, string>> = {
  // PERSONAGENS
  AARON: { en: 'Aaron', es: 'Aarón', pt: 'Arão' },
  ABRAHAM: { en: 'Abraham', es: 'Abraham', pt: 'Abraão' },
  ADAM: { en: 'Adam', es: 'Adán', pt: 'Adão' },
  ANDREW: { en: 'Andrew', es: 'Andrés', pt: 'André' },
  BARTHOLOMEW: { en: 'Bartholomew', es: 'Bartolomé', pt: 'Bartolomeu' },
  CALEB: { en: 'Caleb', es: 'Caleb', pt: 'Calebe' },
  DANIEL: { en: 'Daniel', es: 'Daniel', pt: 'Daniel' },
  DAVID: { en: 'David', es: 'David', pt: 'Davi' },
  DEBORAH: { en: 'Deborah', es: 'Débora', pt: 'Débora' },
  ELIJAH: { en: 'Elijah', es: 'Elías', pt: 'Elias' },
  ELISHA: { en: 'Elisha', es: 'Eliseo', pt: 'Eliseu' },
  ESAU: { en: 'Esau', es: 'Esaú', pt: 'Esaú' },
  ESTHER: { en: 'Esther', es: 'Ester', pt: 'Ester' },
  EZEKIEL: { en: 'Ezekiel', es: 'Ezequiel', pt: 'Ezequiel' },
  EVE: { en: 'Eve', es: 'Eva', pt: 'Eva' },
  GIDEON: { en: 'Gideon', es: 'Gedeón', pt: 'Gideão' },
  HABAKKUK: { en: 'Habakkuk', es: 'Habacuc', pt: 'Habacuque' },
  ISAAC: { en: 'Isaac', es: 'Isaac', pt: 'Isaque' },
  ISAIAH: { en: 'Isaiah', es: 'Isaías', pt: 'Isaías' },
  JACOB: { en: 'Jacob', es: 'Jacob', pt: 'Jacó' },
  JAMES: { en: 'James', es: 'Santiago', pt: 'Tiago' },
  JEREMIAH: { en: 'Jeremiah', es: 'Jeremías', pt: 'Jeremias' },
  JESUS: { en: 'Jesus', es: 'Jesús', pt: 'Jesus' },
  JOB: { en: 'Job', es: 'Job', pt: 'Jó' },
  JOHN: { en: 'John', es: 'Juan', pt: 'João' },
  JOSEPH_NT: {
    en: 'Joseph (Jesus father)',
    es: 'José (padre de Jesús)',
    pt: 'José (pai de Jesus)',
  },
  JOSEPH_OT: { en: 'Joseph (from Egypt)', es: 'José (del Egipto)', pt: 'José (do Egito)' },
  JOSHUA: { en: 'Joshua', es: 'Josué', pt: 'Josué' },
  JUDAS_THADDAEUS: { en: 'Jude Thaddeus', es: 'Judas Tadeo', pt: 'Judas Tadeu' },
  LAZARUS: { en: 'Lazarus', es: 'Lázaro', pt: 'Lázaro' },
  LOT: { en: 'Lot', es: 'Lot', pt: 'Ló' },
  MARTHA: { en: 'Martha', es: 'Marta', pt: 'Marta' },
  MARY: { en: 'Mary (mother of Jesus)', es: 'María (madre de Jesús)', pt: 'Maria (mãe de Jesus)' },
  MARY_MAGDALENE: { en: 'Mary Magdalene', es: 'María Magdalena', pt: 'Maria Madalena' },
  MATTHEW: { en: 'Matthew', es: 'Mateo', pt: 'Mateus' },
  MIRIAM: { en: 'Miriam', es: 'Miriam', pt: 'Miriã' },
  MOSES: { en: 'Moses', es: 'Moisés', pt: 'Moisés' },
  NOAH: { en: 'Noah', es: 'Noé', pt: 'Noé' },
  OBADIAH: { en: 'Obadiah', es: 'Abadías', pt: 'Obadias' },
  PHILIP: { en: 'Philip', es: 'Felipe', pt: 'Filipe' },
  PAUL: { en: 'Paul', es: 'Pablo', pt: 'Paulo' },
  PETER: { en: 'Peter', es: 'Pedro', pt: 'Pedro' },
  RAHAB: { en: 'Rahab', es: 'Rahab', pt: 'Raabe' },
  REBEKAH: { en: 'Rebekah', es: 'Rebeca', pt: 'Rebeca' },
  RUTH: { en: 'Ruth', es: 'Rut', pt: 'Rute' },
  SAMUEL: { en: 'Samuel', es: 'Samuel', pt: 'Samuel' },
  SAMSON: { en: 'Samson', es: 'Sansón', pt: 'Sansão' },
  SARAH: { en: 'Sarah', es: 'Sara', pt: 'Sara' },
  SIMON_ZEALOT: { en: 'Simon the Zealot', es: 'Simón el Zelote', pt: 'Simão, o Zelote' },
  SOLOMON: { en: 'Solomon', es: 'Salomón', pt: 'Salomão' },
  STEPHEN: { en: 'Stephen', es: 'Esteban', pt: 'Estevão' },
  TIMOTHY: { en: 'Timothy', es: 'Timoteo', pt: 'Timóteo' },
  TITUS: { en: 'Titus', es: 'Tito', pt: 'Tito' },
  THOMAS: { en: 'Thomas', es: 'Tomás', pt: 'Tomé' },
  ZEPHANIAH: { en: 'Zephaniah', es: 'Zefanías', pt: 'Zefanias' },
  SAUL: { en: 'Saul', es: 'Saúl', pt: 'Saul' },
  SHADRACH: { en: 'Shadrach', es: 'Sadrac', pt: 'Sadraque' },
  MESHACH: { en: 'Meshach', es: 'Mesac', pt: 'Mesaque' },
  ABEDNEGO: { en: 'Abednego', es: 'Abednego', pt: 'Abednego' },
  MORDECAI: { en: 'Mordecai', es: 'Mardoqueo', pt: 'Mardoqueu' },
  NEHEMIAH: { en: 'Nehemiah', es: 'Nehemías', pt: 'Neemias' },
  EZRA: { en: 'Ezra', es: 'Esdras', pt: 'Esdras' },
  HAGGAI: { en: 'Haggai', es: 'Hageo', pt: 'Ageu' },
  ZECHARIAH: { en: 'Zechariah', es: 'Zacarías', pt: 'Zacarias' },
  MALACHI: { en: 'Malachi', es: 'Malaquías', pt: 'Malaquias' },
  JONAH: { en: 'Jonah', es: 'Jonás', pt: 'Jonas' },
  MELCHIZEDEK: { en: 'Melchizedek', es: 'Melquisedec', pt: 'Melquisedeque' },
  JETHRO: { en: 'Jethro', es: 'Jetro', pt: 'Jetro' },
  PHARAOH: { en: 'Pharaoh', es: 'Faraón', pt: 'Faraó' },
  BALAAM: { en: 'Balaam', es: 'Balaam', pt: 'Balaão' },
  KORAH: { en: 'Korah', es: 'Coré', pt: 'Corá' },
  ACHAN: { en: 'Achan', es: 'Acan', pt: 'Acã' },
  DELILAH: { en: 'Delilah', es: 'Dalila', pt: 'Dalila' },
  BATHSHEBA: { en: 'Bathsheba', es: 'Betsabé', pt: 'Bate-Seba' },
  URIAH: { en: 'Uriah', es: 'Urias', pt: 'Urias' },
  NATHAN: { en: 'Nathan', es: 'Natán', pt: 'Natã' },
  ABSALOM: { en: 'Absalom', es: 'Absalón', pt: 'Absalão' },
  REHOBOAM: { en: 'Rehoboam', es: 'Rehoboam', pt: 'Roboão' },
  JEROBOAM: { en: 'Jeroam', es: 'Jeroboam', pt: 'Jeroboão' },
  HEZEKIAH: { en: 'Hezekiah', es: 'Ezequías', pt: 'Ezequias' },
  MANASSEH: { en: 'Manasseh', es: 'Manasés', pt: 'Manassés' },
  AHAB: { en: 'Ahab', es: 'Acab', pt: 'Acabe' },
  JEZEBEL: { en: 'Jezebel', es: 'Jezabel', pt: 'Jezabel' },
  AMOS: { en: 'Amos', es: 'Amós', pt: 'Amós' },
  ZERUBBABEL: { en: 'Zerubbabel', es: 'Zerubabel', pt: 'Zerubabel' },
  ANNAS: { en: 'Annas', es: 'Anás', pt: 'Anás' },
  CAIAPHAS: { en: 'Caiaphas', es: 'Caifás', pt: 'Caifás' },
  PILATE: { en: 'Pilate', es: 'Pilato', pt: 'Pilatos' },
  BARNABAS: { en: 'Barnabas', es: 'Barnabás', pt: 'Barnabás' },
  SILAS: { en: 'Silas', es: 'Silas', pt: 'Silas' },
  LYDIA: { en: 'Lydia', es: 'Lidia', pt: 'Lídia' },
  PRISCILLA: { en: 'Priscilla', es: 'Priscila', pt: 'Priscila' },
  AQUILA: { en: 'Aquila', es: 'Aquila', pt: 'Aquila' },
  APOLLO: { en: 'Apollo', es: 'Apolo', pt: 'Apolo' },
  PHILEMON: { en: 'Philemon', es: 'Filemón', pt: 'Filemom' },
  ONESIMUS: { en: 'Onesimus', es: 'Onésimo', pt: 'Onésimo' },
  JOSIAH: { en: 'Josiah', es: 'Josías', pt: 'Josías' },

  // FEATURES
  FEMALE: { en: 'Female', es: 'Femenino', pt: 'Feminino' },
  MALE: { en: 'Male', es: 'Masculino', pt: 'Masculino' },
  UNKNOWN: { en: 'Unknown', es: 'Desconocido', pt: 'Desconhecido' },

  ORIGINS: { en: 'Origins', pt: 'Origens', es: 'Orígenes' },
  PATRIARCHS: { en: 'Patriarchs', pt: 'Patriarcas', es: 'Patriarcas' },
  THEOCRACY: { en: 'Theocracy', pt: 'Teocracia', es: 'Teocracia' },
  KINGS: { en: 'Kings', pt: 'Reis', es: 'Reyes' },
  EXILE: { en: 'Exile', pt: 'Exílio', es: 'Exilio' },
  REDEMPTION: { en: 'Redemption', pt: 'Redenção', es: 'Redención' },

  AMBITION: { en: 'Ambition', es: 'Ambición', pt: 'Ambição' },
  AUTHORITY: { en: 'Authority', es: 'Autoridad', pt: 'Autoridade' },
  BEAUTY: { en: 'Beauty', es: 'Belleza', pt: 'Beleza' },
  COMMITMENT: { en: 'Commitment', es: 'Compromiso', pt: 'Compromisso' },
  COMPASSION: { en: 'Compassion', es: 'Compasión', pt: 'Compaixão' },
  CONFLICT: { en: 'Conflict', es: 'Conflicto', pt: 'Conflito' },
  COURAGE: { en: 'Courage', es: 'Valentía', pt: 'Coragem' },
  DECISION: { en: 'Decision', es: 'Decisión', pt: 'Decisão' },
  DISCIPLE: { en: 'Disciple', es: 'Discípulo', pt: 'Discípulo' },
  DISOBEDIENCE: { en: 'Disobedience', es: 'Desobediencia', pt: 'Desobediência' },
  DOUBT: { en: 'Doubt', es: 'Duda', pt: 'Dúvida' },
  ENCOURAGEMENT: { en: 'Encouragement', es: 'Ánimo', pt: 'Encorajamento' },
  FOOLISHNESS: { en: 'Foolishness', es: 'Insensatez', pt: 'Insensatez' },
  FORGIVENESS: { en: 'Forgiveness', es: 'Perdón', pt: 'Perdão' },
  GENEROSITY: { en: 'Generosity', es: 'Generosidad', pt: 'Generosidade' },
  HOLINESS: { en: 'Holiness', es: 'Santidad', pt: 'Santidade' },
  HONESTY: { en: 'Honesty', es: 'Honestidad', pt: 'Honestidade' },
  HONOR: { en: 'Honor', es: 'Honor', pt: 'Honra' },
  HOSPITALITY: { en: 'Hospitality', es: 'Hospitalidad', pt: 'Hospitalidade' },
  HUMILITY: { en: 'Humility', es: 'Humildad', pt: 'Humildade' },
  IDOLATRY: { en: 'Idolatry', es: 'Idolatría', pt: 'Idolatria' },
  KINGSHIP: { en: 'Kingship', es: 'Monarquía', pt: 'Realeza' },
  LEADERSHIP: { en: 'Leadership', es: 'Liderazgo', pt: 'Liderança' },
  MANIPULATION: { en: 'Manipulation', es: 'Manipulación', pt: 'Manipulação' },
  MIRACLES: { en: 'Miracles', es: 'Milagros', pt: 'Milagres' },
  PERSEVERANCE: { en: 'Perseverance', es: 'Perseverancia', pt: 'Perseverança' },
  PRIEST: { en: 'Priest', es: 'Sacerdote', pt: 'Sacerdote' },
  PROPHET: { en: 'Prophet', es: 'Profeta', pt: 'Profeta' },
  REBELLION: { en: 'Rebellion', es: 'Rebelión', pt: 'Rebelião' },
  SACRIFICE: { en: 'Sacrifice', es: 'Sacrificio', pt: 'Sacrifício' },
  VISIONS: { en: 'Visions', es: 'Visiones', pt: 'Visões' },
  WISDOM: { en: 'Wisdom', es: 'Sabiduría', pt: 'Sabedoria' },

  // Game UI
  GENDER: { en: 'Gender', es: 'Género', pt: 'Gênero' },
  FEATURE: { en: 'Feature', es: 'Característica', pt: 'Características' },
  FEATURES: { en: 'Features', es: 'Características', pt: 'Característica' },
  AGE: { en: 'Age', es: 'Edad', pt: 'Era' },
  GAME_TITLE: { en: 'Who Am I?', es: '¿Quién Soy?', pt: 'Quem Sou Eu?' },
  INPUT_PLACEHOLDER: {
    en: 'Type a name and press ENTER',
    es: 'Escribe un nombre y presiona ENTER',
    pt: 'Digite um nome e pressione ENTER',
  },
  LANGUAGE: { en: 'Language', es: 'Idioma', pt: 'Idioma' },
  EN: { en: 'English', es: 'Inglés', pt: 'Inglês' },
  ES: { en: 'Spanish', es: 'Español', pt: 'Espanhol' },
  PT: { en: 'Portuguese', es: 'Portugués', pt: 'Português' },
  // Game Help
  HELP_TITLE: { en: 'How to Play', es: 'Cómo jugar', pt: 'Como Jogar' },

  HELP_STEP_1: {
    en: '1. Choose a character of your preference',
    es: '1. Elige un personaje de tu preferencia',
    pt: '1. Escolha um personagem de sua preferência',
  },
  HELP_STEP_2: {
    en: '2. Check the feedback of the characteristics',
    es: '2. Observa el feedback de las características',
    pt: '2. Veja o feedback das características',
  },
  HELP_STEP_3: {
    en: '3. Use the clues to find the correct one',
    es: '3. Usa las pistas para llegar al correcto',
    pt: '3. Use as pistas para chegar ao correto',
  },

  HELP_CORRECT: {
    en: 'The character has this characteristic',
    es: 'El personaje tiene esta característica',
    pt: 'O personagem possui essa característica',
  },
  HELP_WRONG: {
    en: 'The character does not have this characteristic',
    es: 'El personaje no tiene esta característica',
    pt: 'O personagem não possui essa característica',
  },

  HELP_TARGET: {
    en: 'Guess the character in the fewest attempts.',
    es: 'Adivina el personaje en el menor número de intentos.',
    pt: 'Acerte o personagem no menor número de tentativas.',
  },
  CORRECT: { en: 'Correct', es: 'Correcto', pt: 'Correto' },
  WRONG: { en: 'Wrong', es: 'Incorrecto', pt: 'Errado' },
  FEEDBACK: { en: 'Feedback', es: 'Feedback', pt: 'Feedback' },

  // Game Messages
  GAME_DESCRIPTION: {
    en: 'Guess the character based on their traits.',
    es: 'Adivina el personaje basado en sus características.',
    pt: 'Adivinhe o personagem com base em suas características.',
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
  NOT_FOUND: {
    en: 'Sorry, {0} is not in our list. Try again.',
    es: 'Lo sentimos, {0} no está en nuestra lista. Inténtalo de nuevo.',
    pt: 'Desculpe, {0} não está na nossa lista. Tente novamente.',
  },

  // Game Stats
  PLAYER_STATS: {
    en: 'Player Statistics',
    es: 'Estadísticas del jugador',
    pt: 'Estatísticas do Jogador',
  },
  ACTUAL_SEQ: {
    en: 'Current streak',
    es: 'Racha actual',
    pt: 'Sequência atual',
  },

  MAX_SEQ: {
    en: 'Max streak',
    es: 'Racha máxima',
    pt: 'Sequência máxima',
  },
  TOTAL_GAMES: {
    en: 'Total Games',
    es: 'Total de Juegos',
    pt: 'Total de Jogos',
  },
  GAMES_WON: {
    en: 'Games Won',
    es: 'Juegos Ganados',
    pt: 'Jogos Vencidos',
  },
  WIN_RATE: {
    en: 'Win Rate',
    es: 'Tasa de Victoria',
    pt: 'Taxa de Vitória',
  },
  CHART_TITLE: {
    en: 'Games Won by tries',
    es: 'Juegos Ganados por intentos',
    pt: 'Jogos Vencidos por tentativas',
  },
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
