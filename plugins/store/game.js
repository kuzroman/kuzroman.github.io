// import vue from '@vitejs/plugin-vue';
// import { getCurrentInstance } from 'vue'

const defaultIsSeedsFall = false
const defaultIsGameReady = false
const defaultIsGameStart = false
const defaultIsGameFinished = false
const defaultIsLeaderBoardOpened = false
const defaultScore = 0
const defaultLetters = []
const defaultCircles = {}
const defaultShots = 0
const defaultDamage = 0
const defaultTimeLeft = 30

export default {
  namespaced: true,
  state: {
    isSeedsFall: defaultIsSeedsFall,
    isGameReady: defaultIsGameReady,
    isGameStart: defaultIsGameStart,
    isGameFinished: defaultIsGameFinished,
    isLeaderBoardOpened: defaultIsLeaderBoardOpened,
    score: defaultScore,
    letters: [...defaultLetters],
    circles: { ...defaultCircles },
    killedLetters: defaultLetters.length,
    shots: defaultShots,
    damage: defaultDamage,
    timeLeft: defaultTimeLeft,
    barrier: null,
  },
  getters: {
    isSeedsFall: (state) => state.isSeedsFall,
    isGameReady: (state) => state.isGameReady,
    isGameStart: (state) => state.isGameStart,
    isGameFinished: (state) => state.isGameFinished,
    isLeaderBoardOpened: (state) => state.isLeaderBoardOpened,
    score: (state) => state.score,
    letters: (state) => state.letters,
    circles: (state) => state.circles,
    killedLetters: (state) =>
      state.letters.filter((x) => x.isKilled && !x.isService),
    aliveLetters: (state) =>
      state.letters.filter((x) => !x.isKilled && !x.isService),
    shots: (state) => state.shots,
    damage: (state) => state.damage,
    timeLeft: (state) => state.timeLeft,
    barrier: (state) => state.barrier,
  },
  mutations: {
    setBarrier(state, data) {
      state.barrier = data
    },
    setIsSeedsFall(state, bool) {
      state.isSeedsFall = bool
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
      state.isSeedsFall = defaultIsSeedsFall
      state.isGameReady = defaultIsGameReady
      state.isGameStart = defaultIsGameStart
      state.isGameFinished = defaultIsGameFinished
      state.score = defaultScore
      state.letters = [...defaultLetters]
      state.circles = { ...defaultCircles }
      state.shots = defaultShots
      state.damage = defaultDamage
      state.timeLeft = defaultTimeLeft
    },
    setScore(state, num) {
      state.score = num
    },
    setLetters(state, collection) {
      state.letters = collection
    },
    showLetter(state, letters) {
      state.letters[letters.id].isShow = true
    },
    killLetter(state, letters) {
      state.letters[letters.id].isKilled = true
    },
    updateLetters(state, letter) {
      state.letters[letter.id] = letter
      // vue.set(state.letters, letter.id, letter)
    },
    addCircle(state, circle) {
      state.circles[new Date().getTime()] = circle
    },
    removeCircle(state, key) {
      delete state.circles[key]
    },
    increaseShoots(state) {
      state.shots += 1
    },
    increaseDamage(state) {
      state.damage += 2
    },
    decreaseTimeLeft(state) {
      state.timeLeft -= 1
    },
  },
}
