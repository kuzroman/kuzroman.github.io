export default class Canvas {
  #canvas
  ctx

  constructor(selector) {
    this.#canvas = document.querySelector(selector)
    this.ctx = this.#canvas.getContext('2d')
  }

  drawRect(x, y, size, color) {
    this.ctx.fillStyle = color || '#fff'
    this.ctx.fillRect(x, y, size, size)
  }

  drawRing(x, y, size, color) {
    this.ctx.beginPath()
    this.ctx.arc(x, y, size, 0, 2 * Math.PI)
    this.ctx.fillStyle = color
    this.ctx.fill()
  }

  clearCanvas(
    width = this.ctx.#canvas.width,
    height = this.ctx.#canvas.height
  ) {
    // console.log('this', this.#ctx);
    this.ctx.clearRect(0, 0, width, height)
  }
}
