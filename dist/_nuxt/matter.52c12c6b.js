import { r as i, x as v, p as f, o as g, a as h } from './entry.b5c09835.js'
import { u as w } from './composables.39d4856c.js'
import { M as B } from './matter.5596ea92.js'
const S = { class: 'box' },
  U = {
    __name: 'matter',
    setup(M) {
      w({ title: 'matter.js great gravity =)' })
      const {
          Engine: m,
          Render: c,
          World: C,
          Bodies: r,
          Body: k,
          Events: E,
          Composite: l,
          Composites: W,
          Constraint: b,
          Vertices: I,
          Mouse: R,
          Bounds: j,
          MouseConstraint: q,
          Query: A,
          Common: H,
          Runner: d,
        } = B,
        e = (o, a) => Math.ceil(Math.random() * (a - o) + o),
        u = i(0),
        y = i(100),
        p = i(100)
      return (
        v(() => {
          const o = m.create({ gravity: { y: 0.1 } }),
            a = c.create({
              element: document.querySelector('.box'),
              engine: o,
              options: { wireframes: !1, background: '#2d2d2d' },
            })
          u.value = setInterval(() => {
            let s = []
            ;[...Array(e(2, 6))].forEach((L) => {
              s.push(
                r.circle(e(0, window.innerWidth), e(-50, 0), e(2, 10), {
                  restitution: 1,
                  render: {
                    fillStyle: '#333',
                    strokeStyle: 'orange',
                    lineWidth: 3,
                  },
                })
              )
            }),
              l.add(o.world, s)
          }, 200)
          const n = {
            isStatic: !0,
            render: { fillStyle: '#333', strokeStyle: '#5a5a5a', lineWidth: 3 },
          }
          let t = [
            { x: e(390, 410), y: e(90, 110) },
            { x: e(40, 60), y: e(190, 210) },
            { x: e(590, 610), y: e(290, 310) },
            { x: e(240, 260), y: e(440, 460) },
            { x: e(490, 510), y: e(590, 610) },
          ]
          const x = (s) => {
            ;(y.value = s.x), (p.value = s.y)
          }
          window.addEventListener('mousemove', x),
            l.add(o.world, [
              r.circle(t[0].x, t[0].y, e(30, 40), n),
              r.circle(t[1].x, t[1].y, e(30, 40), n),
              r.circle(t[2].x, t[2].y, e(60, 70), n),
              r.circle(t[3].x, t[3].y, e(100, 120), n),
              r.circle(t[4].x, t[4].y, e(40, 60), n),
            ]),
            c.run(a)
          const _ = d.create()
          d.run(_, o)
        }),
        f(() => {
          clearTimeout(u.value)
        }),
        (o, a) => (g(), h('div', S))
      )
    },
  }
export { U as default }
