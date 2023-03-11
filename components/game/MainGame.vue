<template>
  <div
    :key="mainGameKey"
    class="main-game"
    @click="makeShot"
    @mousemove="moveShooter"
  >
    <GameCanvasAnimation :shooter="shooterPosition" />

    <Transition>
      <GameButtonPlay
        v-if="isPageAnimationFinished"
        @button-play--restart="restartGame"
      />
    </Transition>

    <GameStatusBar v-if="isGameReady" />
    <GameRobotShooter
      v-if="isGameReady"
      ref="shooter"
      :position="shooterPosition"
    />
    <GameScoreBoard v-if="isGameFinished" />
    <!--    <GameLeaderBoard />-->
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import CustomAudio from '../abstractions/Audio'
import shootMp3 from '../../assets/media/shoot.mp3'
import backgroundGame from '../../assets/media/backgroundGame.mp3'

const store = useStore()
let audioShot, audioBg
const shooterPosition = ref({})
const mainGameKey = ref(0)
const shooter = ref(null)

const isGameStart = computed(() => store.getters['game/isGameStart'])
const isGameFinished = computed(() => store.getters['game/isGameFinished'])
const isGameReady = computed(() => store.getters['game/isGameReady'])
const isPageAnimationFinished = computed(
  () => store.getters['app/isPageAnimationFinished']
)

const setIsGameStart = (bool) => store.commit('game/setIsGameStart', bool)
const resetStateGame = () => store.commit('game/resetStateGame')
const increaseShoots = () => store.commit('game/increaseShoots')
const resetStateLeaderBoard = () =>
  store.commit('leaderBoard/resetStateLeaderBoard')

const forceUpdateComponent = () => {
  mainGameKey.value += 1
}
const restartGame = () => {
  resetStateLeaderBoard()
  resetStateGame()
  forceUpdateComponent()
  audioBg.destroy()
  audioShot.destroy()
}

const makeShot = () => {
  if (!isGameReady.value || isGameFinished.value) {
    return
  }
  if (!isGameStart.value) {
    setIsGameStart(true)
  }
  increaseShoots()
  audioShot.replay()
}
const moveShooter = (ev) => {
  if (!shooter?.value?.shooter) {
    return
  }
  const shooterEl = shooter.value.shooter
  shooterPosition.value = {
    x1: ev.clientX,
    y1: shooterEl.getBoundingClientRect().top,
    x2: ev.clientX + shooterEl.offsetWidth,
  }
}
const restartGameByResizeBody = () => {
  let timeId
  window.addEventListener('resize', () => {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      restartGame()
    }, 300)
  })
}

onMounted(() => {
  audioShot = new CustomAudio(shootMp3, 0.3)
  audioBg = new CustomAudio(backgroundGame, 0.5, true)

  restartGameByResizeBody()
})

onUnmounted(() => {
  restartGame()
})

watch(
  () => isGameReady.value,
  () => {
    audioBg.replay()
  }
)
watch(
  () => isGameFinished.value,
  () => {
    audioBg.pause()
  }
)
</script>

<style lang="scss">
@import '../../assets/styles/props.scss';

.main-game {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: $zIndex-1;
  top: 0;
  left: 0;
  overflow: hidden;

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
