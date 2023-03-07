// import {useState} from "nuxt/app";
// export const useCounter = () => useState('counter', () => 0)

import { useRoute as use_Route } from 'vue-router' // workaround bug https://github.com/nuxt/framework/issues/6646
export const useRoute = () => use_Route()

export const calculateFps = () => {
  let fps = 0
  let animationFrameId
  function updateFps() {
    const now = performance.now()
    const elapsed = now - lastUpdate
    lastUpdate = now
    fps = 1000 / elapsed
    animationFrameId = requestAnimationFrame(updateFps)
  }
  let lastUpdate = performance.now()
  requestAnimationFrame(updateFps)

  return new Promise((resolve) => {
    setTimeout(() => {
      cancelAnimationFrame(animationFrameId)
      console.log('fps', fps)
      resolve(fps)
    }, 3000)
  })
}
