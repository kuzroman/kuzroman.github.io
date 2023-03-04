function $({ width: e, height: t, curve: l }) {
  let r = 0,
    n = t / 2,
    i = `M0,${n} `,
    u = e / 8
  for (; r < e; )
    (i += `Q${r + u},${n + l} ${r + 2 * u},${n} `),
      (r = r + 2 * u),
      (l = l * -1)
  return i + `L${e},0 ${e},${t} 0,${t}`
}
let h =
  typeof HTMLElement == 'object'
    ? function (e) {
        return e instanceof HTMLElement
      }
    : function (e) {
        return (
          e &&
          typeof e == 'object' &&
          e.nodeType === 1 &&
          typeof e.nodeName == 'string'
        )
      }
function b(e) {
  return { width: e.clientWidth, height: e.clientHeight }
}
function S(e) {
  console.warn(e)
}
function m(e, t, l) {
  let r = ((e << 16) | (t << 8) | l).toString(16)
  return '#' + new Array(Math.abs(r.length - 7)).join('0') + r
}
function p(e) {
  let t = [],
    l = e.length,
    r = parseInt((l - 1) / 3)
  for (let n = 1; n < l; n += r) t.push(parseInt('0x' + e.slice(n, n + r)))
  return t
}
function s(e = '') {
  const t = e.replace(/\s+/g, '').match(/^(?:rgb(?:a)?)\(([\d(\.\d*),]*)\)$/)
  return t ? t[1].split(',') : null
}
function o(e) {
  let t = []
  if (e.startsWith('rgb')) t = s(e)
  else if (e.startsWith('#')) t = p(e)
  else return null
  return t.map((l) => Number(l))
}
function y({ start: e, end: t, total: l, step: r }) {
  if (e === t) return e
  let n = o(e),
    i = o(t)
  if (n && i) {
    let u = r / l,
      a = i[0] - n[0],
      c = i[1] - n[1],
      f = i[2] - n[2],
      g = (i[3] || 1) - (n[3] || 1)
    return `rgba(${a * u + n[0]}, ${c * u + n[1]}, ${f + n[2]}, ${
      g * u + (n[3] || 1)
    })`
  } else return null
}
function w(e) {
  return document.createElementNS('http://www.w3.org/2000/svg', e)
}
export {
  $ as creatSvgPath,
  w as createElementNS,
  b as getClientSize,
  y as getStepColor,
  p as hexToRgb,
  h as isDOM,
  m as rgbToHex,
  S as warn,
}
