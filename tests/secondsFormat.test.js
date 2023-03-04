function formatDuration(seconds) {
  if (seconds === 0) return 'now'

  let m = 60,
    h = 3600,
    d = h * 24,
    y = d * 365

  let year = Math.floor(seconds / y)
  let yRemainsSeconds = seconds % y
  let day = Math.floor(yRemainsSeconds / d)
  let dRemainsSeconds = seconds % d
  let hour = Math.floor(dRemainsSeconds / h)
  let hRemainsSeconds = seconds % h
  let minute = Math.floor(hRemainsSeconds / m)
  let sec = seconds % m

  let yRender = year > 0 ? year + (year > 1 ? ' years' : ' year') : ''
  let dRender = day > 0 ? day + (day > 1 ? ' days' : ' day') : ''
  let hRender = hour > 0 ? hour + (hour > 1 ? ' hours' : ' hour') : ''
  let mRender = minute > 0 ? minute + (minute > 1 ? ' minutes' : ' minute') : ''
  let sRender = sec > 0 ? sec + (sec > 1 ? ' seconds' : ' second') : ''

  let res = [yRender, dRender, hRender, mRender, sRender].filter((i) => i)
  if (res.length === 1) return res[0]

  return res
    .map((word, i) => {
      if (i === res.length - 1) return ` and ${word}`
      if (i === res.length - 2) return word
      else return word + ', '
    })
    .join('')
}

test('1', () => {
  expect(formatDuration(1)).toBe('1 second')
})
test('62', () => {
  expect(formatDuration(62)).toBe('1 minute and 2 seconds')
})
test('120', () => {
  expect(formatDuration(120)).toBe('2 minutes')
})
test('3600', () => {
  expect(formatDuration(3600)).toBe('1 hour')
})
test('3662', () => {
  expect(formatDuration(3662)).toBe('1 hour, 1 minute and 2 seconds')
})
test('15731080', () => {
  expect(formatDuration(15731080)).toBe(
    '182 days, 1 hour, 44 minutes and 40 seconds'
  )
})
test('132030240', () => {
  expect(formatDuration(132030240)).toBe(
    '4 years, 68 days, 3 hours and 4 minutes'
  )
})

// best practise
function formatDuration2(seconds) {
  let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = []

  if (seconds === 0) return 'now'

  for (let key in time) {
    if (seconds >= time[key]) {
      let val = Math.floor(seconds / time[key])
      res.push((val += val > 1 ? ' ' + key + 's' : ' ' + key))
      seconds = seconds % time[key]
    }
  }

  return res.length > 1
    ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1')
    : res[0]
}

// console.log(formatDuration(1));
// console.log(formatDuration(62));
// console.log(formatDuration(120));
// console.log(formatDuration(3600));
// console.log(formatDuration(3662));
// console.log(formatDuration(15731080)); //
