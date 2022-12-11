<template>
  <div class="canvas-letters">
    <div class="letters" id="lettersEl">
        <GameLetterTag
          v-for="letter in letters" :key="letter.id"
          :isShow="letter.isShow"
          :isKilled="letter.isKilled"
          :sign="letter.sign"
          @letter-tag--show="letterShowed"
        />
    </div>
    <canvas
      id="canvas"
      :width="viewPortWidth"
      :height="viewPortHeight"
    />

    <GameDebugInput
      v-if="isDebug"
      :isDebug="isDebug"
      :seeds="seeds"
      :bullets="bullets"
      :letters="letters"
      :shooter="shooter"
      @debug-input--pause="pause"
    />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Canvas from './abstractions/Canvas'
import Seed from './abstractions/Seed'
import Bullet from './abstractions/Bullet'
import Letter from './abstractions/Letter'
import CustomAudio from '../abstractions/Audio'
import bitMp3 from '../../assets/media/explode.mp3'

const store = useStore()
let audioBit;
let intervalLetters, animationId
const emit = defineEmits(['canvas-letters-damage'])
const props = defineProps({
  isDebug: { type: Boolean, default: false },
  barrier: { type: Object, default: null },
  shooter: {
    type: Object,
    default: () => {},
  },
})

const seeds = ref([]);
const bullets = ref([]);
const numSeedsForOneLetter = ref(3);
const fps60 = ref(16); // 1000/60
const isPaused = ref(false);
const canvas = ref(null);
const viewPortWidth = ref(0);
const viewPortHeight = ref(0);

const isPageLoaderHide = computed(() => store.getters['app/isPageLoaderHide']);
const shots = computed(() => store.getters['game/shots']);
const letters = computed(() => store.getters['game/letters']);
const description = computed(() =>
    props.isDebug
    ? 'Hello'
    : 'Hello, my name is Roman.|' +
    'I am a Front-End developer with 12 years experience.|' +
    'SPA, SSR, SSG, js and Vue ... are my passion.|' +
    'Check this out some projects on my Work page.|' +
    'Feel free if you wanna say hello at kuzroman@list.ru then do it!)');

const setIsSeedsFall = (bool) => store.commit('game/setIsSeedsFall', bool);
const setIsGameFinished = (bool) => store.commit('game/setIsGameFinished', bool);
const setLetters = (collection) => store.commit('game/setLetters', collection);
const updateLetters = (letter) => store.commit('game/updateLetters', letter);
const showLetter = (letters) => store.commit('game/showLetter', letters);
const killLetter = (letters) => store.commit('game/killLetter', letters);

watch(() => isPageLoaderHide.value, () => {
  prepareToGame()
})
watch(() => shots.value, () => {
  let bullet = new Bullet(props.shooter.x1, props.shooter.y1)
  bullets.value.push(bullet)
  startAnimation()
})

const createLetters = () => {
  const letters = Array.from(
      description.value,
      (letter, i) => new Letter(letter, i)
  )
  setLetters(letters)
};

const startShowLetters = () => {
  let i = 0,
      letter
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
};

// data has position XY from LetterTag
const letterShowed = (data) => {
  let letter = letters.value[data.id]
  updateLetters({...letter, ...data})
  addSeed(data)
};

const addSeed = (props, type) => {
  for (let i = 0; i < numSeedsForOneLetter.value; i++) {
    let seed = new Seed(props.x1, props.y1, type)
    seeds.value.push(seed)
  }
};

const startAnimation = () => {
  setIsSeedsFall(true)
  clearInterval(animationId)

  animationId = setInterval(() => {
    if (isPaused.value) return
    canvas.value.clearCanvas(viewPortWidth.value, viewPortHeight.value)

    updateSeeds()
    updateBullets()

    if (!seeds.value.length && !bullets.value.length) {
      clearInterval(animationId)
      setIsSeedsFall(false)
    }
  }, fps60.value)
};

const updateSeeds = () => {
  seeds.value = seeds.value.filter((seed) => {
    seed.update(props.barrier)

    if (seed.type === 'shrapnel') {
      checkDamage(props.shooter, seed)
    }

    canvas.value.drawRect(seed.x1, seed.y1, seed.size)
    return !seed.isStopped
  })
};
const updateBullets = () => {
  bullets.value = bullets.value.filter((bullet) => {
    bullet.update()
    let aliveLetters = Letter.getLifeLetters(letters.value)
    if (aliveLetters.length) {
      checkGoals(bullet, aliveLetters)
    } else {
      setIsGameFinished(true)
    }

    canvas.value.drawRing(bullet.x1, bullet.y1, bullet.size, '#fc0')
    return !bullet.isStopped
  })
};
const checkGoals = (bullet, aliveLetters) => {
  aliveLetters.forEach((letter) => {
    if (
        bullet.y1 < letter.y1 &&
        ((bullet.x1 < letter.x1 && letter.x1 < bullet.x2) ||
            (bullet.x1 < letter.x2 && letter.x2 < bullet.x2) ||
            (letter.x1 < bullet.x1 && bullet.x2 < letter.x2))
    ) {
      killLetter(letter)
      addSeed({ x1: bullet.x1, y1: bullet.y1 }, 'shrapnel')
      audioBit.replay()
    }
  })
};
const checkDamage = (shooter, seed) => {
  if (
      shooter.y1 < seed.y1 &&
      shooter.x1 < seed.x1 &&
      seed.x1 < shooter.x2
  ) {
    seed.isStopped = true
    emit('canvas-letters-damage')
  }
};
const pause = (bool) => {
  isPaused.value = bool
};
const prepareToGame = () => {
  canvas.value = new Canvas('#canvas')
  createLetters()
  startShowLetters()
  startAnimation()
};

onMounted(() => {
  viewPortWidth.value = window.innerWidth
  viewPortHeight.value = window.innerHeight
  audioBit = new CustomAudio(bitMp3, 0.3)


  // if (isPageLoaderHide.value) {
  prepareToGame()
  // }
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
    //position: absolute;
    //z-index: 1;
    color: #fff;
    font-size: 1.4em;
    text-align: center;
    margin-top: 8em;
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
