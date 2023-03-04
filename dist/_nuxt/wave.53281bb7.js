var w = Object.defineProperty
var $ = (s, e, t) =>
  e in s
    ? w(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t)
var d = (s, e, t) => ($(s, typeof e != 'symbol' ? e + '' : e, t), t)
import {
  warn as S,
  isDOM as x,
  getClientSize as y,
  getStepColor as C,
  createElementNS as h,
  creatSvgPath as E,
} from './utils.a0756ea6.js'
import {
  STOP_CLASS as v,
  WRAP_CLASS as L,
  SVG_BASE_CLASS as W,
  SVG_MAIN_CLASS as _,
  SVG_NAME as z,
} from './config.20180e1f.js'
let A = 1
const G = {
  waveHeight: 20,
  baseHeight: 0,
  color: 'transparent',
  delay: 0,
  duration: 2e3,
}
class B {
  constructor(e, t = {}) {
    d(this, 'status', 1)
    d(this, 'wrap', null)
    d(this, 'size', { width: 0, height: 0 })
    d(this, 'initWrap', (e) => {
      if (!x(e)) {
        S('el is not a HTMLElement')
        return
      }
      const { width: t, height: i } = y(e)
      this.wrap = N((this.size = { width: t, height: i }))
    })
    d(this, 'createWave', (e) => {
      if (this.wrap)
        for (let t = 0, i = e.length; t < i; t++) {
          const { width: p = 0 } = this.size,
            o = Object.assign({ width: p }, G, e[t])
          let {
            baseHeight: b,
            waveHeight: c,
            color: u,
            endColor: r,
            curve: n,
          } = o
          n || (o.curve = n = isNaN(c) ? 0 : c / 2),
            r || (o.endColor = r = u),
            (o.middleColor = C({ start: u, end: r, total: c + b, step: c }))
          const l = H(o),
            a = M(o)
          this.wrap.append(a), this.wrap.append(l), A++
        }
    })
    e && t
      ? (this.initWrap(e),
        this.createWave(t instanceof Array ? t : [t]),
        e.append(this.wrap))
      : S('illegal parameters')
  }
  run() {
    this.status === 0 && ((this.status = 1), this.wrap.classList.remove(v))
  }
  stop() {
    this.status === 1 && ((this.status = 0), this.wrap.classList.add(v))
  }
}
function N({ width: s = 0, height: e = 0 }) {
  const t = document.createElement('div')
  return (
    t.setAttribute('class', L),
    t.setAttribute('style', `width: ${s}px;height: ${e}px;`),
    t
  )
}
function H({ baseHeight: s, color: e, endColor: t, middleColor: i }) {
  const p = document.createElement('div')
  return (
    p.setAttribute('class', W),
    i && t !== i && (t = `linear-gradient(to bottom, ${i}, ${t})`),
    p.setAttribute('style', `height: ${s}px;background:${t};z-index: ${A}`),
    p
  )
}
function M({
  width: s,
  waveHeight: e,
  baseHeight: t,
  color: i,
  middleColor: p,
  curve: o,
  delay: b,
  duration: c,
}) {
  const u = `${z}-${A}`,
    r = document.createElement('div')
  r.setAttribute('class', _),
    r.setAttribute('data-svg-name', u),
    r.setAttribute('style', `bottom: ${t}px;z-index:${A}`)
  const n = h('svg')
  n.setAttribute('width', s * 2 + 'px'),
    n.setAttribute('height', e + 'px'),
    n.setAttribute(
      'style',
      `animation-duration:${c / 1e3}s;animation-delay:${b / 1e3}s`
    )
  const l = h('defs'),
    a = h('linearGradient')
  a.setAttribute('id', u),
    a.setAttribute('x1', '0'),
    a.setAttribute('y1', '0'),
    a.setAttribute('x2', '0'),
    a.setAttribute('y2', '100%')
  const f = h('stop')
  f.setAttribute('offset', '0'), f.setAttribute('stop-color', i)
  const g = h('stop')
  g.setAttribute('offset', '100%'), g.setAttribute('stop-color', p || i)
  const m = h('path')
  return (
    m.setAttribute('d', E({ width: s * 2, height: e, curve: o })),
    m.setAttribute('fill', `url(#${u})`),
    a.appendChild(f),
    a.appendChild(g),
    l.appendChild(a),
    n.appendChild(l),
    n.appendChild(m),
    r.appendChild(n),
    r
  )
}
export { B as default }
