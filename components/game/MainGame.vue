<template>
  <div
    class="main-game"
    @click="makeShot"
    @mousemove="moveShooter"
    :key="mainGameKey"
  >
    <GameCanvasLetters
      :isDebug="isDebug"
      :barrier="barrier"
      :shooter="shooterPosition"
      @canvas-letters-damage="increaseDamage"
    />

<!--    <ClickForFire />-->

    <GameButtonPlay
      @button-play--mounted="setBarrier"
      @button-play--restart="restartGame"
    />

    <GameStatusBar />
    <GameRobotShooter :position="shooterPosition" ref="shooter" />
    <GameScoreBoard />
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
const barrier = ref(null);
const isDebug = ref(false);
const shooterPosition = ref({});
const mainGameKey = ref(0);
const shooter = ref(null);

const isGameFinished = computed(() => store.getters['game/isGameFinished']);
const isGameReady = computed(() => store.getters['game/isGameReady']);
// const shots = computed(() => store.getters['game/shots']);
// const damage = computed(() => store.getters['game/damage']);

const setIsGameStart = (bool) => store.commit('game/setIsGameStart', bool);
const resetStateGame = () => store.commit('game/resetStateGame');
// const setIsGameFinished = (bool) => store.commit('game/setIsGameFinished', bool);
const increaseShoots = () => store.commit('game/increaseShoots');
const increaseDamage = () => store.commit('game/increaseDamage');
const resetStateLeaderBoard = () => store.commit('leaderBoard/resetStateLeaderBoard');

const forceUpdateComponent = () => { mainGameKey.value += 1 };
const restartGame = () => {
  resetStateLeaderBoard()
  resetStateGame()
  forceUpdateComponent()
  audioBg.destroy()
  audioShot.destroy()
};
const setBarrier = () => {
  barrier.value = barrier
};
const makeShot = () => {
  if (!isGameReady.value || isGameFinished.value) return
  setIsGameStart(true)
  increaseShoots()
  audioShot.replay()
};
const moveShooter = (ev) => {
  if (!shooter?.value?.shooter) return
  const shooterEl = shooter.value.shooter
  shooterPosition.value = {
    x1: ev.clientX,
    y1: shooterEl.getBoundingClientRect().top,
    x2: ev.clientX + shooterEl.offsetWidth,
  }
};
const restartGameByResizeBody = (ev) => {
  let timeId
  window.addEventListener('resize', () => {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      restartGame()
    }, 300)
  })
};

onMounted(() => {
  audioShot = new CustomAudio(shootMp3, 0.3)
  audioBg = new CustomAudio(backgroundGame, 0.5, true)

  restartGameByResizeBody()
})

onUnmounted(() => {
  restartGame()
})

watch(() => isGameReady.value, () => {
  audioBg.replay()
})
watch(() => isGameFinished.value, () => {
  audioBg.pause()
})

</script>

<style lang="scss">
@import '../../assets/styles/props.scss';

.main-game {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>
