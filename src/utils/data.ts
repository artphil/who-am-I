const persons = [
  {
    // JESUS
    id: '850b694021a0',
    name: 'JESUS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['SACRIFICE', 'LOVE', 'HOLINESS', 'LEADERSHIP'],
  },
  {
    // MARY
    id: 'efc9ddc1f6cc',
    name: 'MARY',
    gender: 'FEMALE',
    age: 'NEW_AGE',
    features: ['FAITH', 'HUMILITY', 'COMPASSION'],
  },
  {
    // JOSEPH_NT
    id: '10c05c683f7d',
    name: 'JOSEPH_NT',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['OBEDIENCE', 'FAITH', 'RESPONSIBILITY'],
  },
  {
    // PETER
    id: '4aeccfc45a8e',
    name: 'PETER',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['LEADERSHIP', 'FAITH', 'IMPULSIVENESS'],
  },
  {
    // PAUL
    id: 'd713449b7477',
    name: 'PAUL',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['ZEAL', 'INTELLIGENCE', 'MISSION', 'ELOQUENCE'],
  },
  {
    // JOHN
    id: '851f96ec7f08',
    name: 'JOHN',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['LOVE', 'LOYALTY', 'SPIRITUALITY'],
  },
  {
    // JAMES
    id: '0b8804f712ba',
    name: 'JAMES',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['FAITH', 'LEADERSHIP', 'MARTYRDOM'],
  },
  {
    // ANDREW
    id: '003fc57b8bf6',
    name: 'ANDREW',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['EVANGELISM', 'FAITH', 'LOYALTY'],
  },
  {
    // MATTHEW
    id: '8835b91d22f0',
    name: 'MATTHEW',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['TRANSFORMATION', 'FAITH', 'DISCIPLINE'],
  },
  {
    // THOMAS
    id: '3243634e124d',
    name: 'THOMAS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['DOUBT', 'FAITH', 'COURAGE'],
  },
  {
    // PHILIP
    id: '7ea92a302845',
    name: 'PHILIP',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['CURIOSITY', 'FAITH', 'EVANGELISM'],
  },
  {
    // BARTHOLOMEW
    id: 'ab31873de208',
    name: 'BARTHOLOMEW',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['HONESTY', 'FAITH', 'LOYALTY'],
  },
  {
    // SIMON_ZEALOT
    id: 'ecab39db05b8',
    name: 'SIMON_ZEALOT',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['ZEAL', 'COMMITMENT', 'FAITH'],
  },
  {
    // JUDAS_THADDAEUS
    id: '5eca9cdc4a28',
    name: 'JUDAS_THADDAEUS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['FAITH', 'COURAGE', 'LOYALTY'],
  },
  {
    // MARY_MAGDALENE
    id: 'e61abe6f3157',
    name: 'MARY_MAGDALENE',
    gender: 'FEMALE',
    age: 'NEW_AGE',
    features: ['DEVOTION', 'FAITH', 'LOYALTY'],
  },
  {
    // MARTHA
    id: 'dce604085342',
    name: 'MARTHA',
    gender: 'FEMALE',
    age: 'NEW_AGE',
    features: ['SERVICE', 'FAITH', 'HOSPITALITY'],
  },
  {
    // LAZARUS
    id: '536ad5ba5670',
    name: 'LAZARUS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['FAITH', 'MIRACLE', 'LOYALTY'],
  },
  {
    // TIMOTHY
    id: '7f2e8ad692ec',
    name: 'TIMOTHY',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['DISCIPLESHIP', 'FAITH', 'YOUTH'],
  },
  {
    // TITUS
    id: '9917fed6d108',
    name: 'TITUS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['LEADERSHIP', 'FAITH', 'DISCIPLINE'],
  },
  {
    // STEPHEN
    id: 'dd28adb09f3d',
    name: 'STEPHEN',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['FAITH', 'COURAGE', 'MARTYRDOM'],
  },
  {
    // ADAM
    id: 'ffb36ebe8c34',
    name: 'ADAM',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['ORIGIN', 'HUMANITY', 'RESPONSIBILITY'],
  },
  {
    // EVE
    id: 'c723b0cece2b',
    name: 'EVE',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['ORIGIN', 'TEMPTATION', 'HUMANITY'],
  },
  {
    // NOAH
    id: '88e07349ecd3',
    name: 'NOAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['OBEDIENCE', 'FAITH', 'PERSEVERANCE', 'WORK'],
  },
  {
    // ABRAHAM
    id: 'b9b37969a172',
    name: 'ABRAHAM',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'OBEDIENCE', 'LEADERSHIP'],
  },
  {
    // SARAH
    id: 'c9260283e598',
    name: 'SARAH',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'PATIENCE', 'MATERNITY'],
  },
  {
    // ISAAC
    id: '9b333f91b78f',
    name: 'ISAAC',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['OBEDIENCE', 'FAITH', 'PEACEFULNESS'],
  },
  {
    // REBEKAH
    id: 'bb7b310e6e56',
    name: 'REBEKAH',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['DECISION', 'FAITH', 'INITIATIVE'],
  },
  {
    // JACOB
    id: '8854880aa421',
    name: 'JACOB',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PERSISTENCE', 'TRANSFORMATION', 'FAITH'],
  },
  {
    // ESAU
    id: '571b331c32ad',
    name: 'ESAU',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['IMPULSIVENESS', 'STRENGTH', 'LOSS'],
  },
  {
    // JOSEPH_OT
    id: '495b93348c1b',
    name: 'JOSEPH_OT',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['DREAMS', 'WISDOM', 'FORGIVENESS'],
  },
  {
    // MOSES
    id: 'd66502bad9b3',
    name: 'MOSES',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['LEADERSHIP', 'FAITH', 'DELIVERANCE'],
  },
  {
    // AARON
    id: '34a6664e8dad',
    name: 'AARON',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PRIESTHOOD', 'SUPPORT', 'LEADERSHIP'],
  },
  {
    // MIRIAM
    id: '83af57c8a569',
    name: 'MIRIAM',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['PROPHECY', 'LEADERSHIP', 'WORSHIP'],
  },
  {
    // JOSHUA
    id: '7365794cb3c6',
    name: 'JOSHUA',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['COURAGE', 'LEADERSHIP', 'FAITH'],
  },
  {
    // CALEB
    id: '0d9301a26915',
    name: 'CALEB',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'COURAGE', 'LOYALTY'],
  },
  {
    // RAHAB
    id: 'd1a4727fefac',
    name: 'RAHAB',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'COURAGE', 'REDEMPTION'],
  },
  {
    // DEBORAH
    id: 'e97756041a8b',
    name: 'DEBORAH',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['WISDOM', 'LEADERSHIP', 'COURAGE'],
  },
  {
    // GIDEON
    id: 'bf751829bd49',
    name: 'GIDEON',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['DOUBT', 'FAITH', 'COURAGE'],
  },
  {
    // SAMSON
    id: 'c93153fbd2ec',
    name: 'SAMSON',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['STRENGTH', 'WEAKNESS', 'SACRIFICE'],
  },
  {
    // RUTH
    id: '0a765194c58e',
    name: 'RUTH',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['LOYALTY', 'LOVE', 'FAITH'],
  },
  {
    // SAMUEL
    id: 'fd5e94014a42',
    name: 'SAMUEL',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PROPHECY', 'FAITH', 'LEADERSHIP'],
  },
  {
    // SAUL
    id: 'b00d1b737b0e',
    name: 'SAUL',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['KINGSHIP', 'PRIDE', 'DECLINE'],
  },
  {
    // DAVID
    id: 'bac28d102b32',
    name: 'DAVID',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['LEADERSHIP', 'COURAGE', 'REPENTANCE'],
  },
  {
    // SOLOMON
    id: 'd772d2b0ad91',
    name: 'SOLOMON',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['WISDOM', 'WEALTH', 'DECLINE', 'ELOQUENCE'],
  },
  {
    // ELIJAH
    id: '9549412eee2a',
    name: 'ELIJAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PROPHECY', 'COURAGE', 'FAITH'],
  },
  {
    // ELISHA
    id: 'e7b003f6705e',
    name: 'ELISHA',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['MIRACLES', 'FAITH', 'DISCIPLESHIP'],
  },
  {
    // ISAIAH
    id: 'c619bc235498',
    name: 'ISAIAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PROPHECY', 'HOLINESS', 'VISION'],
  },
  {
    // JEREMIAH
    id: '30df4e4fcfcd',
    name: 'JEREMIAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PROPHECY', 'PERSEVERANCE', 'SORROW'],
  },
  {
    // EZEKIEL
    id: 'ab7fae8051b1',
    name: 'EZEKIEL',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['VISIONS', 'PROPHECY', 'OBEDIENCE'],
  },
  {
    // DANIEL
    id: '2658e24203f2',
    name: 'DANIEL',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'COURAGE', 'WISDOM'],
  },
  {
    // SHADRACH
    id: '1473e65b990d',
    name: 'SHADRACH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'COURAGE', 'LOYALTY'],
  },
  {
    // MESHACH
    id: '8bb83ab2a1d5',
    name: 'MESHACH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'COURAGE', 'LOYALTY'],
  },
  {
    // ABEDNEGO
    id: 'f5f162104a75',
    name: 'ABEDNEGO',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'COURAGE', 'LOYALTY'],
  },
  {
    // ESTHER
    id: '8a9c07db3235',
    name: 'ESTHER',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['COURAGE', 'WISDOM', 'LEADERSHIP'],
  },
  {
    // MORDECAI
    id: '04c018e95e56',
    name: 'MORDECAI',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['LOYALTY', 'WISDOM', 'COURAGE'],
  },
  {
    // JOB
    id: '29ea81d0e0b7',
    name: 'JOB',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PATIENCE', 'FAITH', 'SUFFERING'],
  },
  {
    // NEHEMIAH
    id: 'e778ff0452e5',
    name: 'NEHEMIAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['LEADERSHIP', 'DISCIPLINE', 'FAITH'],
  },
  {
    // EZRA
    id: '18d63c3c35d1',
    name: 'EZRA',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['TEACHING', 'LAW', 'FAITH'],
  },
  {
    // HAGGAI
    id: 'd1223a82ed11',
    name: 'HAGGAI',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PROPHECY', 'MOTIVATION', 'FAITH'],
  },
  {
    // ZECHARIAH
    id: 'd8126ec3a1a1',
    name: 'ZECHARIAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['VISIONS', 'PROPHECY', 'HOPE'],
  },
  {
    // MALACHI
    id: 'fda9af972f06',
    name: 'MALACHI',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PROPHECY', 'JUSTICE', 'FAITH'],
  },
  {
    // JONAH
    id: 'e1c769752ded',
    name: 'JONAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['DISOBEDIENCE', 'REPENTANCE', 'MISSION'],
  },
  {
    // MICAH
    id: 'b808bdd7b9ad',
    name: 'MICAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['JUSTICE', 'PROPHECY', 'TRUTH'],
  },
  {
    // NAHUM
    id: '50b1fbe3df48',
    name: 'NAHUM',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['JUDGMENT', 'PROPHECY', 'JUSTICE'],
  },
  {
    // HABAKKUK
    id: '53e3d4617e44',
    name: 'HABAKKUK',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['QUESTIONING', 'FAITH', 'TRUST'],
  },
  {
    // ZEPHANIAH
    id: '5d817a26bc0e',
    name: 'ZEPHANIAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['JUDGMENT', 'PROPHECY', 'WARNING'],
  },
  {
    // LOT
    id: 'bedbe915403a',
    name: 'LOT',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['WEAKNESS', 'CHOICE', 'SURVIVAL'],
  },
  {
    // MELCHIZEDEK
    id: '0a6ac060fde8',
    name: 'MELCHIZEDEK',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PRIESTHOOD', 'MYSTERY', 'BLESSING'],
  },
  {
    // JETHRO
    id: '7d9426c0771f',
    name: 'JETHRO',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['WISDOM', 'COUNSEL', 'LEADERSHIP'],
  },
  {
    // PHARAOH
    id: '5376b95985f9',
    name: 'PHARAOH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PRIDE', 'POWER', 'RESISTANCE'],
  },
  {
    // BALAAM
    id: '0bbd73d11212',
    name: 'BALAAM',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['GREED', 'PROPHECY', 'CONFLICT'],
  },
  {
    // KORAH
    id: '434eb02d24ad',
    name: 'KORAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['REBELLION', 'PRIDE', 'JUDGMENT'],
  },
  {
    // ACHAN
    id: '228f5704a5d4',
    name: 'ACHAN',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['DISOBEDIENCE', 'GREED', 'CONSEQUENCE'],
  },
  {
    // DELILAH
    id: '8f8f5a1a2006',
    name: 'DELILAH',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['DECEPTION', 'BETRAYAL', 'CUNNING'],
  },
  {
    // BATHSHEBA
    id: 'b8436d32b85a',
    name: 'BATHSHEBA',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['BEAUTY', 'INFLUENCE', 'ROYALTY'],
  },
  {
    // URIAH
    id: '78ef9851a10d',
    name: 'URIAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['LOYALTY', 'HONOR', 'SACRIFICE'],
  },
  {
    // NATHAN
    id: '33a8bfba05e6',
    name: 'NATHAN',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PROPHECY', 'COURAGE', 'TRUTH'],
  },
  {
    // ABSALOM
    id: '4a4ae2d79ea7',
    name: 'ABSALOM',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['REBELLION', 'CHARISMA', 'AMBITION'],
  },
  {
    // REHOBOAM
    id: '1558fa7989ac',
    name: 'REHOBOAM',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PRIDE', 'DIVISION', 'LEADERSHIP'],
  },
  {
    // JEROBOAM
    id: '4441534c6812',
    name: 'JEROBOAM',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['REBELLION', 'IDOLATRY', 'POWER'],
  },
  {
    // HEZEKIAH
    id: '5b8de0060b17',
    name: 'HEZEKIAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'REFORM', 'PRAYER'],
  },
  {
    // JOSIAH
    id: 'e21370e773f1',
    name: 'JOSIAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['REFORM', 'FAITH', 'YOUTH'],
  },
  {
    // MANASSEH
    id: 'a06986d458ed',
    name: 'MANASSEH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['WICKEDNESS', 'REPENTANCE', 'CHANGE'],
  },
  {
    // AHAB
    id: '371cc3ed4281',
    name: 'AHAB',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['IDOLATRY', 'WEAKNESS', 'POWER'],
  },
  {
    // JEZEBEL
    id: '8cb017e9c0be',
    name: 'JEZEBEL',
    gender: 'FEMALE',
    age: 'OLD_AGE',
    features: ['MANIPULATION', 'IDOLATRY', 'POWER'],
  },
  {
    // OBADIAH
    id: '53e291286051',
    name: 'OBADIAH',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['FAITH', 'COURAGE', 'LOYALTY'],
  },
  {
    // AMOS
    id: '6b634c1b72fe',
    name: 'AMOS',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['JUSTICE', 'PROPHECY', 'TRUTH'],
  },
  {
    // JOEL
    id: 'c20704fb1bea',
    name: 'JOEL',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['PROPHECY', 'WARNING', 'HOPE'],
  },
  {
    // ZERUBBABEL
    id: 'be620be58de8',
    name: 'ZERUBBABEL',
    gender: 'MALE',
    age: 'OLD_AGE',
    features: ['LEADERSHIP', 'RESTORATION', 'FAITH'],
  },
  {
    // ANNAS
    id: 'fcdf44491532',
    name: 'ANNAS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['AUTHORITY', 'RELIGION', 'POLITICS'],
  },
  {
    // CAIAPHAS
    id: '66cd0dc6cfa7',
    name: 'CAIAPHAS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['POWER', 'RELIGION', 'PLOT'],
  },
  {
    // PILATE
    id: 'bab6c7139112',
    name: 'PILATE',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['AUTHORITY', 'WEAKNESS', 'DECISION'],
  },
  {
    // BARNABAS
    id: '3649f1998ec7',
    name: 'BARNABAS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['ENCOURAGEMENT', 'FAITH', 'MISSION'],
  },
  {
    // SILAS
    id: '0242e2081a15',
    name: 'SILAS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['FAITH', 'MISSION', 'PERSEVERANCE'],
  },
  {
    // LYDIA
    id: '6d9e91e15d40',
    name: 'LYDIA',
    gender: 'FEMALE',
    age: 'NEW_AGE',
    features: ['HOSPITALITY', 'FAITH', 'GENEROSITY'],
  },
  {
    // PRISCILLA
    id: '7a3b0288b09d',
    name: 'PRISCILLA',
    gender: 'FEMALE',
    age: 'NEW_AGE',
    features: ['TEACHING', 'FAITH', 'LEADERSHIP'],
  },
  {
    // AQUILA
    id: 'aa751bf3a519',
    name: 'AQUILA',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['PARTNERSHIP', 'FAITH', 'WORK'],
  },
  {
    // APOLLOS
    id: '6d6d333a6395',
    name: 'APOLLOS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['ELOQUENCE', 'TEACHING', 'FAITH'],
  },
  {
    // PHILEMON
    id: 'c312c8d5b648',
    name: 'PHILEMON',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['FORGIVENESS', 'FAITH', 'HOSPITALITY'],
  },
  {
    // ONESIMUS
    id: '40f7fe12dd90',
    name: 'ONESIMUS',
    gender: 'MALE',
    age: 'NEW_AGE',
    features: ['TRANSFORMATION', 'FAITH', 'REDEMPTION'],
  },
]

export { persons }
