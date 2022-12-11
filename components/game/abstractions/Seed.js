const getRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export default class Seed {
  ground = document.body.offsetHeight
  gravityX = getRandomInRange(1, 5)
  gravityY = getRandomInRange(1, 5)
  speed = getRandomInRange(2, 5) / 10
  bounceNum = 0
  maxBounceNum = 5
  revert = false

  constructor(x1, y1, type = 'default') {
    this.x1 = x1 || 0
    this.y1 = y1 || 0
    this.size = getRandomInRange(1, 3)
    this.isStopped = false
    this.direction = Math.random() < 0.6 ? 1 : -1
    this.type = type // default || shrapnel
  }

  update(barrier) {
    this.type === 'shrapnel'
      ? this._updateShrapnel()
      : this._updateSeed(barrier)
  }

  _updateSeed(barrier) {
    if (this._isBarrier(barrier)) {
      this.revert = true
      this.bounceNum += 1
    }
    if (this.gravityY < 0) {
      this.revert = false
    }

    if (this._isBounceLimitReached() || this._isUnderGround()) {
      this.isStopped = true
      return
    }

    this._move()
  }

  _updateShrapnel() {

    if (this._isUnderGround()) {
      this.isStopped = true
      return
    }

    this._fallDown(this.direction, true)
  }

  _isBounceLimitReached() {
    return this.maxBounceNum < this.bounceNum
  }

  _isUnderGround() {
    return this.ground < this.y1
  }

  _isBarrier(barrier) {
    if (!barrier) return false
    return this.y1 >= barrier.y1 && barrier.x1 < this.x1 && this.x1 < barrier.x2
  }

  _move() {
    if (this.revert) {
      this._fallUp()
    } else this._fallDown()
  }

  _fallDown(direction, isRandomShiftX) {
    this._moveX(direction, isRandomShiftX)
    this.y1 += Math.round(this.gravityY)
    this.gravityY = Math.round((this.gravityY + this.speed) * 100) / 100
  }

  _fallUp(direction ) {
    this._moveX(direction)
    this.y1 -= Math.round(this.gravityY)
    this.gravityY = Math.round((this.gravityY - 1) * 100) / 100
  }

  _moveX(direction = 1, isRandomShiftX = false) {
    const shift = isRandomShiftX ? getRandomInRange(2, 8) : 7
    this.x1 += direction * Math.round(this.gravityX / shift)
    this.gravityX = Math.round((this.gravityX + this.speed) * 100) / 100
  }
}
