export default class Bullet {
  gravityY = 10
  ground = -20
  constructor(x, y) {
    const size = 6

    this.x1 = x
    this.x2 = x + size
    this.y1 = y
    this.size = size
  }
}
