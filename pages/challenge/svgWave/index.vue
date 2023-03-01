<template>
  <div>
    <div id="box" ref="box">
      <div class="svg">
        <div ref="svg1" style="width: 100%;height: 100%;" />
      </div>

      <div class="buttons m-5">
        <button class="buttons__btn m-1" @click="runWave">
          Run
        </button>
        <button class="buttons__btn m-1" @click="stopWave">
          Stop
        </button>
      </div>

      <div class="svg">
        <div ref="svg2" style="width: 100%;height: 100%;" />
      </div>

      <!--    <div @click="saveSvg">Save to SVG</div>-->
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import WavySvg from './wave'

const store = useStore()
store.commit('app/setIsPageLoaderHide', true)

let svgInstance
let svgInstance2

const svg1 = ref(null)
const svg2 = ref(null)

onMounted(() => {
  svgInstance = new WavySvg(svg1.value, {
    waveHeight: 90,
    baseHeight: 20,
    color: 'green',
    curve: 40,
    delay: Math.random() * 1 * 100,
    duration: 2500
  })

  svgInstance2 = new WavySvg(svg2.value, [{
    waveHeight: 40,
    baseHeight: 60,
    color: getRandomColor(),
    endColor: getRandomColor(),
    curve: 20,
    delay: Math.random() * 1 * 200,
    duration: 2500
  }, {
    waveHeight: 30,
    baseHeight: 40,
    color: getRandomColor(),
    endColor: getRandomColor(),
    curve: 15,
    delay: Math.random() * 1 * 300,
    duration: 2500
  }])
})

function getRandomColor () {
  const r = Math.round(Math.random() * 255); const g = Math.round(Math.random() * 255); const b = Math.round(Math.random() * 255); const o = Math.random() * 0.8 + 0.2
  return `rgba(${r}, ${g}, ${b}, ${o})`
}

function runWave () {
  [svgInstance, svgInstance2].forEach(item => item.run())
}
function stopWave () {
  [svgInstance, svgInstance2].forEach(item => item.stop())
}

function saveSvg () {
  // convert the SVG to a string
  const svgString = new XMLSerializer().serializeToString(svgInstance.wrap)
  // save
  const blob = new Blob([svgString], { type: 'image/svg+xml' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'canvas.svg'
  link.click()
}
</script>

<style scoped lang="scss">
#box {
  width: 300px;
  margin: 0 auto;

  .svg {
    overflow: hidden;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid #4b4b4b
  }

  .buttons {
    display: flex;
    justify-content: center;

    &__btn {
      padding: 4px 8px;
      background: #4b4b4b;
      cursor: pointer;
      border-radius: 4px;
      display: inline-block;

      &:hover {
        background: lighten(#4b4b4b, 10%);
      }
      &:focus {
        background: #3bade3;
        color: black;
      }
    }
  }
}
</style>
