export default class CustomAudio {
  constructor(media, volume = 1, loop = false) {
    this.audio = new Audio(media)
    this.audio.volume = volume // 0 ?? volume
    this.audio.loop = loop
  }

  isPlaying() {
    return this.audio.duration > 0 && !this.audio.paused
  }

  play(callback = () => {}) {
    this.audio.play().then((r) => callback(r))
  }

  pause() {
    this.audio.pause()
  }

  replay() {
    this.audio.currentTime = 0
    this.play()
  }

  destroy() {
    this.audio.remove()
  }
}
