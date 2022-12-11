// import vue from '@vitejs/plugin-vue';
// import { getCurrentInstance } from 'vue'

const defaultIsSeedsFall = false
const defaultIsGameReady = false
const defaultIsGameStart = false
const defaultIsGameFinished = false
const defaultIsLeaderBoardOpened = false
const defaultScore = 0
const defaultLetters = []
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
    killedLetters: defaultLetters.length,
    shots: defaultShots,
    damage: defaultDamage,
    timeLeft: defaultTimeLeft,
  },
  getters: {
    isSeedsFall: (state) => state.isSeedsFall,
    isGameReady: (state) => state.isGameReady,
    isGameStart: (state) => state.isGameStart,
    isGameFinished: (state) => state.isGameFinished,
    isLeaderBoardOpened: (state) => state.isLeaderBoardOpened,
    score: (state) => state.score,
    letters: (state) => state.letters,
    killedLetters: (state) =>
        state.letters.filter((x) => x.isKilled && !x.isService),
    aliveLetters: (state) =>
        state.letters.filter((x) => !x.isKilled && !x.isService),
    shots: (state) => state.shots,
    damage: (state) => state.damage,
    timeLeft: (state) => state.timeLeft,
  },
  mutations: {
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


// import Vue from 'vue'
//
// const defaultIsSeedsFall = false
// const defaultIsGameReady = false
// const defaultIsGameStart = false
// const defaultIsGameFinished = false
// const defaultIsLeaderBoardOpened = false
// const defaultScore = 0
// const defaultLetters = []
// const defaultShots = 0
// const defaultDamage = 0
// const defaultTimeLeft = 30

// export const state = () => ({
//   isSeedsFall: defaultIsSeedsFall,
//   isGameReady: defaultIsGameReady,
//   isGameStart: defaultIsGameStart,
//   isGameFinished: defaultIsGameFinished,
//   isLeaderBoardOpened: defaultIsLeaderBoardOpened,
//   score: defaultScore,
//   letters: [...defaultLetters],
//   killedLetters: defaultLetters.length,
//   shots: defaultShots,
//   damage: defaultDamage,
//   timeLeft: defaultTimeLeft,
// })

// export const getters = {
//   isSeedsFall: (state) => state.isSeedsFall,
//   isGameReady: (state) => state.isGameReady,
//   isGameStart: (state) => state.isGameStart,
//   isGameFinished: (state) => state.isGameFinished,
//   isLeaderBoardOpened: (state) => state.isLeaderBoardOpened,
//   score: (state) => state.score,
//   letters: (state) => state.letters,
//   killedLetters: (state) =>
//       state.letters.filter((x) => x.isKilled && !x.isService),
//   aliveLetters: (state) =>
//       state.letters.filter((x) => !x.isKilled && !x.isService),
//   shots: (state) => state.shots,
//   damage: (state) => state.damage,
//   timeLeft: (state) => state.timeLeft,
// }

// export const mutations = {
  // setIsSeedsFall(state, bool) {
  //   state.isSeedsFall = bool
  // },
  // setIsGameReady(state, bool) {
  //   state.isGameReady = bool
  // },
  // setIsGameStart(state, bool) {
  //   state.isGameStart = bool
  // },
  // setIsGameFinished(state, bool) {
  //   state.isGameFinished = bool
  //   state.isGameReady = false
  // },
  // setIsLeaderBoardOpened(state, bool) {
  //   state.isLeaderBoardOpened = bool
  // },
  // resetStateGame(state) {
  //   state.isSeedsFall = defaultIsSeedsFall
  //   state.isGameReady = defaultIsGameReady
  //   state.isGameStart = defaultIsGameStart
  //   state.isGameFinished = defaultIsGameFinished
  //   state.score = defaultScore
  //   state.letters = [...defaultLetters]
  //   state.shots = defaultShots
  //   state.damage = defaultDamage
  //   state.timeLeft = defaultTimeLeft
  // },
  // setScore(state, num) {
  //   state.score = num
  // },
  // setLetters(state, collection) {
  //   state.letters = collection
  // },
  // showLetter(state, letters) {
  //   state.letters[letters.id].isShow = true
  // },
  // killLetter(state, letters) {
  //   state.letters[letters.id].isKilled = true
  // },
  // updateLetters(state, letter) {
  //   Vue.set(state.letters, letter.id, letter)
  // },
  // increaseShoots(state) {
  //   state.shots += 1
  // },
  // increaseDamage(state) {
  //   state.damage += 2
  // },
  // decreaseTimeLeft(state) {
  //   state.timeLeft -= 1
  // },
// }
