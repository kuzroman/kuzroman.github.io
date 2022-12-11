export default class Letter {
  isShow = false
  x1 = 0
  x2 = 0
  y1 = 0
  y2 = 0

  constructor(letter, i) {
    const isService = letter === ' ' || letter === '|'
    this.id = i
    this.sign = letter === ' ' ? '-' : letter
    this.isKilled = isService
    this.isService = isService
  }


  static getLifeLetters(letters) {
    return letters.filter((letter) => !letter.isKilled)
  }
}
