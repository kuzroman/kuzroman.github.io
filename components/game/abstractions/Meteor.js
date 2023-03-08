import { getRandomInRange } from '~/composables/common'
export default class Meteor {
  gravity = getRandomInRange(1, 5)
  speed = getRandomInRange(5, 10)
  size = getRandomInRange(5, 8)
  angle = getRandomInRange(0, 360)
  isInactive = false
  constructor(args) {
    this.x = args.x || 0
    this.y = args.y || 0
  }

  updatePosition() {
    this.x += Math.cos(this.angle) * this.speed
    this.y += Math.sin(this.angle) * this.speed
  }

  updateSize() {
    this.size -= 0.05
  }

  setInactive() {
    this.isInactive = true
  }
}
