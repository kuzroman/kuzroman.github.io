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
      <div>seeds: {{ seeds.length }} | bullets: {{ bullets.length }}</div>
      <div>circles: {{ circlesLength }} | meteors: {{ meteorsLength }}</div>
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
const emit = defineEmits(['canvas-letters-damage'])
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
const circlesLength = computed(() => store.getters['game/circlesLength'])
const meteorsLength = computed(() => store.getters['game/meteorsLength'])
const hasElementsInAnimation = computed(
  () =>
    seeds.value.length > 0 ||
    bullets.value.length > 0 ||
    circlesLength.value > 0 ||
    meteorsLength.value > 0
)

const seeds = ref([])
const bullets = ref([])
const numSeedsForOneLetter = ref(3)
const fps60 = ref(isDebug.value ? 0 : 16) // 1000/60
const canvas = ref(null)
const viewPortWidth = ref(0)
const viewPortHeight = ref(0)

const text =
  'Hello, my name is Roman.|' +
  'I am a Front-End developer with 12 years old experience.|' +
  'SPA, SSR, SSG, js and Vue ... are my passion.|' +
  'Check this out some projects on my Work page.|' +
  'Feel free if you wanna say hello at kuzroman@list.ru then do it!)'

const description = computed(() => (isDebug.value ? text : text))

const setIsSeedsFall = (bool) => store.commit('game/setIsSeedsFall', bool)
const setIsGameFinished = (bool) => store.commit('game/setIsGameFinished', bool)
const setLetters = (collection) => store.commit('game/setLetters', collection)
const updateLetters = (letter) => store.commit('game/updateLetters', letter)
const addCircle = (circle) => store.commit('game/addCircle', circle)
const addMeteor = (meteor) => store.commit('game/addMeteor', meteor)
const removeCircle = (key) => store.commit('game/removeCircle', key)
const removeMeteors = (key) => store.commit('game/removeMeteors', key)
const showLetter = (letters) => store.commit('game/showLetter', letters)
const killLetter = (letters) => store.commit('game/killLetter', letters)

watch(
  () => shots.value,
  () => {
    const bullet = new Bullet(props.shooter.x1, props.shooter.y1)
    bullets.value.push(bullet)
    startAnimation()
  }
)
const createLetters = () => {
  const letters = Array.from(
    description.value,
    (letter, i) => new Letter(letter, i)
  )
  setLetters(letters)
}
const startShowLetters = () => {
  let i = 0
  let letter
  intervalLetters = setInterval(() => {
    if (i <= letters.value.length - 1) {
      letter = letters.value[i]
      showLetter(letter)
      updateLetters(letter)
    } else {
      clearInterval(intervalLetters)
    }
    i++
  }, fps60.value)
}
const letterShowed = (data) => {
  const letter = letters.value[data.id]
  updateLetters({ ...letter, ...data })
  addSeed(data)
}
const addSeed = (props, type) => {
  for (let i = 0; i < numSeedsForOneLetter.value; i++) {
    const seed = new Seed(props.x1, props.y1, type)
    seeds.value.push(seed)
  }
}
const startAnimation = () => {
  setIsSeedsFall(true)
  clearInterval(animationId)

  animationId = setInterval(() => {
    canvas.value.clearCanvas(viewPortWidth.value, viewPortHeight.value)

    updateSeeds()
    updateBullets()
    updateCircles()
    updateMeteors()

    if (!hasElementsInAnimation.value) {
      clearInterval(animationId)
      setIsSeedsFall(false)
    }
  }, fps60.value)
}
function drawMeteor(meteor) {
  meteor.updatePosition()
  meteor.updateSize()

  canvas.value.drawRing({
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
    if (meteor.size < 0.1 || meteor.isInactive) {
      removeMeteors(key)
      continue
    }
    checkDamage(props.shooter, meteor)
  }
}
const updateSeeds = () => {
  seeds.value = seeds.value.filter((seed) => {
    seed.update(barrier.value)
    canvas.value.drawRect(seed.x1, seed.y1, seed.size)
    return !seed.isStopped
  })
}
const updateBullets = () => {
  bullets.value = bullets.value.filter((bullet) => {
    bullet.update()
    const aliveLetters = Letter.getLifeLetters(letters.value)
    if (aliveLetters.length) {
      checkGoals(bullet, aliveLetters)
    } else {
      setIsGameFinished(true)
    }

    canvas.value.drawRing({
      x: bullet.x1,
      y: bullet.y1,
      size: bullet.size,
      color: '#fc0',
    })
    return !bullet.isStopped
  })
}
const updateCircles = () => {
  for (const key in circles.value) {
    const circle = circles.value[key]
    circle.size += 0.5
    circle.thick -= 0.2
    canvas.value.drawRing({
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
      bullet.y1 < letter.y1 &&
      ((bullet.x1 < letter.x1 && letter.x1 < bullet.x2) ||
        (bullet.x1 < letter.x2 && letter.x2 < bullet.x2) ||
        (letter.x1 < bullet.x1 && bullet.x2 < letter.x2))
    ) {
      killLetter(letter)
      if (index % 2 === 0) {
        addCircle(new Circle(letter.x1, letter.y1))
      }
      if (index % 4 === 0) {
        createMeteors(letter)
      }
      audioBit.replay()
    }
  })
}
const createMeteors = (letter) => {
  for (let i = 0; i < 10; i++) {
    addMeteor(new Meteor({ x: letter.x1, y: letter.y1 }))
  }
}
const checkDamage = (shooter, seed) => {
  if (shooter.y1 < seed.y && shooter.x1 < seed.x && seed.x < shooter.x2) {
    seed.setInactive()
    emit('canvas-letters-damage')
  }
}
const prepareToGame = () => {
  canvas.value = new Canvas('#canvas')
  createLetters()
  startShowLetters()
  startAnimation()
}
onMounted(() => {
  viewPortWidth.value = window.innerWidth
  viewPortHeight.value = window.innerHeight
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
