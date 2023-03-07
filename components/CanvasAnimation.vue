<template>
  <canvas id="canvas" class="canvas-animation"></canvas>
</template>

<script setup>
let canvas, weight, height, ctx
const opts = {
  len: 20,
  count: 50,
  baseTime: 10,
  addedTime: 10,
  dieChance: 0.05,
  sparkChance: 0.1,
  sparkDist: 10,
  sparkSize: 2,
  // color: 'hsl(hue,100%,light%)',
  color: 'gray',
  // color: 'hsl(10%, 60%, light%)',
  baseLight: 50,
  addedLight: 10, // [50-10,50+10]
  shadowToTimePropMult: 6,
  baseLightInputMultiplier: 0.01,
  addedLightInputMultiplier: 0.02,
  cx: null,
  cy: null,
  repaintAlpha: 0.04,
  hueChange: 0.1,
  defaultBg: '#2a2a2a',
}
const lines = []
let dieX
let dieY
const baseRad = (Math.PI * 2) / 6
let animationId = ref(0)

const stopAnimation = () => {
  cancelAnimationFrame(animationId)
}

function loop() {
  if (weight < 480) return

  ctx.globalCompositeOperation = 'source-over'
  ctx.fillStyle = 'rgba(42, 42, 42, alp)'.replace('alp', opts.repaintAlpha)
  ctx.fillRect(0, 0, weight, height)
  ctx.globalCompositeOperation = 'lighter'

  if (lines.length < opts.count) {
    lines.push(new Line())
  }

  lines.forEach((line) => {
    line.step()
  })

  animationId = window.requestAnimationFrame(loop)
}
function Line() {
  this.reset()
}
Line.prototype.reset = function () {
  this.x = 0
  this.y = 0
  this.addedX = 0
  this.addedY = 0
  this.rad = 0

  this.lightInputMultiplier =
    opts.baseLightInputMultiplier +
    opts.addedLightInputMultiplier * Math.random()

  this.color = opts.color
  this.cumulativeTime = 0

  this.beginPhase()
}
Line.prototype.beginPhase = function () {
  this.x += this.addedX
  this.y += this.addedY

  this.time = 0
  this.targetTime = (opts.baseTime + opts.addedTime) | 0

  this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1)
  this.addedX = Math.cos(this.rad)
  this.addedY = Math.sin(this.rad)

  if (
    Math.random() < opts.dieChance ||
    this.x > dieX ||
    this.x < -dieX ||
    this.y > dieY ||
    this.y < -dieY
  )
    this.reset()
}
Line.prototype.step = function () {
  ++this.time
  ++this.cumulativeTime

  if (this.time >= this.targetTime) this.beginPhase()

  const prop = this.time / this.targetTime
  const wave = Math.sin((prop * Math.PI) / 2)
  const x = this.addedX * wave
  const y = this.addedY * wave

  // ctx.shadowBlur = prop * opts.shadowToTimePropMult // hard operation
  ctx.fillStyle = ctx.shadowColor = this.color.replace(
    'light',
    opts.baseLight +
      opts.addedLight *
        Math.sin(this.cumulativeTime * this.lightInputMultiplier)
  )
  ctx.fillRect(
    opts.cx + (this.x + x) * opts.len,
    opts.cy + (this.y + y) * opts.len,
    2,
    2
  )

  if (Math.random() < opts.sparkChance)
    ctx.fillRect(
      opts.cx +
        (this.x + x) * opts.len +
        Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
        opts.sparkSize / 2,
      opts.cy +
        (this.y + y) * opts.len +
        Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
        opts.sparkSize / 2,
      opts.sparkSize,
      opts.sparkSize
    )
}

const resizeParams = () => {
  weight = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
  ctx.fillStyle = opts.defaultBg
  ctx.fillRect(0, 0, weight, height)
  opts.cx = weight / 1.2
  opts.cy = height / 1.2
  dieX = weight / 2 / opts.len
  dieY = height / 2 / opts.len
}

const resize = () => {
  stopAnimation()
  resizeParams()
  loop()
}

const initParams = () => {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  resizeParams()
}

onMounted(() => {
  initParams()
  setTimeout(loop, 1000)
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  stopAnimation()
  window.removeEventListener('resize', resize)
})
</script>

<style lang="scss">
@import '../assets/styles/props';

.canvas-animation {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
