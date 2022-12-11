export default class Bullet {
  gravityY = 10
  ground = -20

  constructor(x, y) {
    const size = 6

    this.x1 = x
    this.x2 = x + size
    this.y1 = y
    this.size = size
    this.isStopped = false
  }

  update() {
    if (this._isOverScreen()) {
      this.isStopped = true
      return
    }

    this._move()
  }

  _move() {
    this._moveY()
  }

  _moveY() {
    this.y1 -= Math.round(this.gravityY)
  }

  _isOverScreen() {
    return this.y1 < this.ground
  }
}
