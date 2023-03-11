import { nanoid } from 'nanoid'

const defaultIsSeedsFall = false
const defaultIsGameReady = false
const defaultIsGameStart = false
const defaultIsGameFinished = false
const defaultIsLeaderBoardOpened = false
const defaultScore = 0
const defaultLetters = []
const defaultCircles = {}
const defaultMeteors = {}
const defaultBullets = {}
const defaultCirclesLength = 0
const defaultMeteorsLength = 0
const defaultBulletLength = 0
const defaultShots = 0
const defaultDamage = 0
const defaultTimeLeft = 30

export default {
  namespaced: true,
  state: {
    isSeedsFalling: defaultIsSeedsFall,
    isGameReady: defaultIsGameReady,
    isGameStart: defaultIsGameStart,
    isGameFinished: defaultIsGameFinished,
    isLeaderBoardOpened: defaultIsLeaderBoardOpened,
    score: defaultScore,
    letters: [...defaultLetters],
    circles: { ...defaultCircles },
    meteors: { ...defaultMeteors },
    bullets: { ...defaultBullets },
    circlesLength: defaultCirclesLength,
    meteorsLength: defaultMeteorsLength,
    bulletLength: defaultBulletLength,
    killedLetters: defaultLetters.length,
    shots: defaultShots,
    damage: defaultDamage,
    timeLeft: defaultTimeLeft,
    barrier: null,
    isDebug: false,
  },
  getters: {
    isSeedsFalling: (state) => state.isSeedsFalling,
    isGameReady: (state) => state.isGameReady,
    isGameStart: (state) => state.isGameStart,
    isGameFinished: (state) => state.isGameFinished,
    isLeaderBoardOpened: (state) => state.isLeaderBoardOpened,
    score: (state) => state.score,
    letters: (state) => state.letters,
    circles: (state) => state.circles,
    meteors: (state) => state.meteors,
    bullets: (state) => state.bullets,
    circlesLength: (state) => state.circlesLength,
    meteorsLength: (state) => state.meteorsLength,
    bulletLength: (state) => state.bulletLength,
    killedLetters: (state) =>
      state.letters.filter((x) => x.isKilled && !x.isService),
    aliveLetters: (state) =>
      state.letters.filter((x) => !x.isKilled && !x.isService),
    shots: (state) => state.shots,
    damage: (state) => state.damage,
    timeLeft: (state) => state.timeLeft,
    barrier: (state) => state.barrier,
    isDebug: (state) => state.isDebug,
  },
  mutations: {
    setBarrier(state, data) {
      state.barrier = data
    },
    setIsSeedsFalling(state, bool) {
      state.isSeedsFalling = bool
    },
    setIsGameReady(state, bool) {
      state.isGameReady = bool
    },
    setIsGameStart(state, bool) {
      state.isGameStart = bool
    },
    setIsGameFinished(state, bool) {
      state.isGameFinished = bool
      state.isGameReady = false
    },
    setIsLeaderBoardOpened(state, bool) {
      state.isLeaderBoardOpened = bool
    },
    resetStateGame(state) {
      state.isSeedsFalling = defaultIsSeedsFall
      state.isGameReady = defaultIsGameReady
      state.isGameStart = defaultIsGameStart
      state.isGameFinished = defaultIsGameFinished
      state.score = defaultScore
      state.letters = [...defaultLetters]
      state.circles = { ...defaultCircles }
      state.meteors = { ...defaultMeteors }
      state.bullets = { ...defaultBullets }
      state.shots = defaultShots
      state.damage = defaultDamage
      state.timeLeft = defaultTimeLeft
      state.circlesLength = defaultCirclesLength
      state.meteorsLength = defaultMeteorsLength
      state.bulletLength = defaultBulletLength
    },
    setScore(state, num) {
      state.score = num
    },
    setLetters(state, collection) {
      state.letters = collection
    },
    showLetter(state, letter) {
      state.letters[letter.id].isShow = true
    },
    killLetter(state, letter) {
      state.letters[letter.id].isKilled = true
    },
    updateLetters(state, letter) {
      state.letters[letter.id] = letter
    },
    addCircle(state, circle) {
      state.circlesLength++
      state.circles[nanoid(2)] = circle
    },
    removeCircle(state, key) {
      state.circlesLength--
      delete state.circles[key]
    },
    addMeteor(state, meteor) {
      state.meteorsLength++
      state.meteors[nanoid(3)] = meteor
    },
    removeMeteors(state, key) {
      state.meteorsLength--
      delete state.meteors[key]
    },
    addBullet(state, bullet) {
      state.bulletLength++
      state.bullets[nanoid(2)] = bullet
    },
    removeBullet(state, key) {
      state.bulletLength--
      delete state.bullets[key]
    },
    increaseShoots(state) {
      state.shots += 1
    },
    increaseDamage(state, meteor) {
      state.damage = Math.floor(state.damage + meteor.size)
    },
    decreaseTimeLeft(state) {
      state.timeLeft -= 1
    },
  },
}
