import { getRandomInRange } from '~/composables/common'
export default class Circle {
  x = 0
  y = 0
  size = getRandomInRange(5, 20)
  thick = getRandomInRange(8, 12)
  endThick = 0.2

  constructor(x, y, size, thick) {
    this.x = x || this.x
    this.y = y || this.y
    this.size = size || this.size
    this.thick = thick || this.thick
  }
}
