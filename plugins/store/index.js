import { createStore } from 'vuex'
import app from './app.js'
import game from './game.js'
import leaderBoard from './leaderBoard.js'

const store = createStore({
  modules: {
    app,
    game,
    leaderBoard
  }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})
