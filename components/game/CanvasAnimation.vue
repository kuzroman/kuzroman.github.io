<template>
  <div class="canvas-letters">
    <div id="lettersEl" class="letters">
      <GameLetterTag
        v-for="letter in letters"
        :key="letter.id"
        :is-show="letter.isShow"
        :is-killed="letter.isKilled"
        :sign="letter.sign"
        @letter-tag--show="letterShowed"
      />
    </div>

    <canvas id="canvas" :width="viewPortWidth" :height="viewPortHeight" />

    <div v-if="isDebug" style="position: absolute; top: 0; left: 50%">
      <div>hasElementsInAnimation: {{ hasElementsInAnimation }}</div>
      <div>seeds: {{ seeds.length }} | bullets: {{ bulletsLength }}</div>
      <div>circles: {{ circlesLength }} | meteors: {{ meteorsLength }}</div>
      <div>text {{ text.length }}</div>
    </div>

    <!--    <GameDebugInput-->
    <!--      v-if="isDebug"-->
    <!--      :seeds="seeds"-->
    <!--      :bullets="bullets"-->
    <!--      :letters="letters"-->
    <!--      :shooter="shooter"-->
    <!--      @debug-input&#45;&#45;pause="pause"-->
    <!--    />-->
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import CustomAudio from '../abstractions/Audio'
import bitMp3 from '../../assets/media/explode.mp3'
import Canvas from './abstractions/Canvas'
import Seed from './abstractions/Seed'
import Bullet from './abstractions/Bullet'
import Letter from './abstractions/Letter'
import Circle from '~/components/game/abstractions/Circle'
import Meteor from '~/components/game/abstractions/Meteor'

const store = useStore()
let audioBit
let intervalLetters, animationId
const props = defineProps({
  shooter: {
    type: Object,
    default: () => {},
  },
})

const isDebug = computed(() => store.getters['game/isDebug'])
const shots = computed(() => store.getters['game/shots'])
const letters = computed(() => store.getters['game/letters'])
const barrier = computed(() => store.getters['game/barrier'])
const circles = computed(() => store.getters['game/circles'])
const meteors = computed(() => store.getters['game/meteors'])
const bullets = computed(() => store.getters['game/bullets'])
const circlesLength = computed(() => store.getters['game/circlesLength'])
const meteorsLength = computed(() => store.getters['game/meteorsLength'])
const bulletsLength = computed(() => store.getters['game/bulletLength'])
const hasElementsInAnimation = computed(
  () =>
    seeds.value.length > 0 ||
    bulletsLength.value > 0 ||
    circlesLength.value > 0 ||
    meteorsLength.value > 0
)

const seeds = ref([])
const numSeedsForOneLetter = 3
const fps60 = isDebug.value ? 0 : 16 // 1000/60
let canvas
let viewPortWidth = 0
let viewPortHeight = 0

const text =
  'Hello, my name is Roman.|' +
  'I am a Front-End developer with 12 years old experience.|' +
  'SPA, SSR, SSG, js and Vue ... are my passion.|' +
  'Check this out some projects on my Work page.|' +
  'Feel free if you wanna say hello at kuzroman@list.ru then do it!)'

const setIsSeedsFalling = (bool) => store.commit('game/setIsSeedsFalling', bool)
const setIsGameFinished = (bool) => store.commit('game/setIsGameFinished', bool)
const setLetters = (collection) => store.commit('game/setLetters', collection)
const updateLetters = (letter) => store.commit('game/updateLetters', letter)
const addCircle = (circle) => store.commit('game/addCircle', circle)
const addMeteor = (meteor) => store.commit('game/addMeteor', meteor)
const addBullet = (bullet) => store.commit('game/addBullet', bullet)
const removeCircle = (key) => store.commit('game/removeCircle', key)
const removeMeteors = (key) => store.commit('game/removeMeteors', key)
const removeBullet = (key) => store.commit('game/removeBullet', key)
const showLetter = (letters) => store.commit('game/showLetter', letters)
const killLetter = (letters) => store.commit('game/killLetter', letters)
const increaseDamage = (meteor) => store.commit('game/increaseDamage', meteor)

watch(
  () => shots.value,
  () => {
    addBullet(new Bullet(props.shooter.x1, props.shooter.y1))
  }
)

watch(
  () => hasElementsInAnimation.value,
  (n) => {
    if (n) startAnimation()
  }
)
const createLetters = () => {
  const letters = Array.from(text, (letter, i) => new Letter(letter, i))
  setLetters(letters)
}
const letterShowed = (data) => {
  const letter = letters.value[data.id]
  updateLetters({ ...letter, ...data })
  addSeed(data)
}
const addSeed = (props, type) => {
  for (let i = 0; i < numSeedsForOneLetter; i++) {
    const seed = new Seed(props.x1, props.y1, type)
    seeds.value.push(seed)
  }
}
const showLetterByIndex = (tick) => {
  if (text.length - 1 < tick) return
  const letter = letters.value[tick]
  showLetter(letter)
  updateLetters(letter)
}

const startAnimation = () => {
  setIsSeedsFalling(true)
  let tick = 0
  clearInterval(animationId)
  animationId = setInterval(() => {
    canvas.clearCanvas(viewPortWidth, viewPortHeight)

    showLetterByIndex(tick++)
    updateSeeds()

    updateBullets()
    updateCircles()
    updateMeteors()

    if (!hasElementsInAnimation.value) {
      clearInterval(animationId)
      setIsSeedsFalling(false)
    }
  }, fps60)
}
function drawMeteor(meteor) {
  meteor.updatePosition()
  meteor.updateMeteorSize()

  canvas.drawRing({
    x: meteor.x,
    y: meteor.y,
    size: meteor.size,
    color: '#fc0',
  })
}
const updateMeteors = () => {
  for (const key in meteors.value) {
    const meteor = meteors.value[key]
    drawMeteor(meteor)
    checkDamage(props.shooter, meteor)
    if (meteor.size < 0.1 || meteor.isInactive) {
      removeMeteors(key)
    }
  }
}
const updateSeeds = () => {
  seeds.value = seeds.value.filter((seed) => {
    seed.update(barrier.value)
    canvas.drawRect(seed.x1, seed.y1, seed.size)
    return !seed.isStopped
  })
}
const updateBullets = () => {
  for (const key in bullets.value) {
    const bullet = bullets.value[key]
    bullet.y1 -= bullet.gravityY

    canvas.drawRing({
      x: bullet.x1,
      y: bullet.y1,
      size: bullet.size,
      color: '#4cb977',
    })

    if (bullet.y1 < bullet.ground) {
      removeBullet(key)
      continue
    }

    // todo каждая пуля проверяет каждую букву - как можно улучшить алгоритм? O(n*y)
    // сделать еще одну хеш таблицу где можно будет удалять поля
    if (letters.value.length) {
      checkGoals(bullet, letters.value)
    } else {
      setIsGameFinished(true)
    }
  }
}
const updateCircles = () => {
  for (const key in circles.value) {
    const circle = circles.value[key]
    circle.size += 0.5
    circle.thick -= 0.2
    canvas.drawRing({
      x: circle.x,
      y: circle.y,
      size: circle.size,
      color: false,
      thick: circle.thick,
      borderColor: '#fff',
    })
    if (circle.thick < circle.endThick) {
      removeCircle(key)
    }
  }
}
const checkGoals = (bullet, aliveLetters) => {
  aliveLetters.forEach((letter, index) => {
    if (
      !letter.isKilled &&
      bullet.y1 < letter.y1 &&
      ((bullet.x1 < letter.x1 && letter.x1 < bullet.x2) ||
        (bullet.x1 < letter.x2 && letter.x2 < bullet.x2) ||
        (letter.x1 < bullet.x1 && bullet.x2 < letter.x2))
    ) {
      killLetter(letter)
      if (index % 2 === 0) {
        addCircle(new Circle(letter.x1, letter.y1))
      }
      createMeteors(letter)
      audioBit.replay()
    }
  })
}
const createMeteors = (letter) => {
  for (let i = 0; i < 3; i++) {
    addMeteor(new Meteor({ x: letter.x1, y: letter.y1 }))
  }
}
const checkDamage = (shooter, meteor) => {
  if (shooter.y1 < meteor.y && shooter.x1 < meteor.x && meteor.x < shooter.x2) {
    meteor.setInactive()
    increaseDamage(meteor)
  }
}
const prepareToGame = () => {
  canvas = new Canvas('#canvas')
  createLetters()
  startAnimation()
}
onMounted(() => {
  viewPortWidth = window.innerWidth
  viewPortHeight = window.innerHeight
  audioBit = new CustomAudio(bitMp3, 0.3)

  prepareToGame()
})
onUnmounted(() => {
  clearInterval(intervalLetters)
  audioBit.destroy()
})
</script>

<style lang="scss">
@import '../../assets/styles/props';

.canvas-letters {
  & .letters {
    width: 100%;
    color: #fff;
    font-size: 1.4em;
    text-align: center;
    margin-top: 8em;
    user-select: none;
  }

  & #canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}

@media (max-width: $mq-phone) {
  .canvas-letters {
    & .letters {
      width: 100%;
      left: 0;
      font-size: 1em;
      padding: 0 4em;
    }
  }
}
</style>
