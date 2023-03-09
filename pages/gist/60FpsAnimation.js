let frameId
const isStopped = false

const start60FPS = (allAnimation) => {
  const fps = 60
  let lastFrameTime = 0
  function animate(timestamp) {
    const deltaTime = timestamp - lastFrameTime
    if (deltaTime >= 1000 / fps) {
      allAnimation()
      lastFrameTime = timestamp
    }
    frameId = requestAnimationFrame(animate)

    if (isStopped) {
      cancelAnimationFrame(frameId)
      console.log('stop')
    }
  }
  frameId = requestAnimationFrame(animate)
}

function allAnimation() {
  console.log(1)
}

start60FPS(allAnimation)
