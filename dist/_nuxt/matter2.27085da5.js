import { M as d } from './matter.5596ea92.js'
import { C as l, I as u, o as m, a as _, e as p } from './entry.b5c09835.js'
const {
    Engine: f,
    Render: a,
    World: w,
    Bodies: t,
    Body: $,
    Events: b,
    Composite: i,
    Composites: k,
    Constraint: E,
    Vertices: I,
    Mouse: g,
    Bounds: H,
    MouseConstraint: y,
    Query: L,
    Common: P,
    Runner: c,
  } = d,
  v = {
    methods: { ...u('app', ['setIsPageLoaderHide']) },
    mounted() {
      this.setIsPageLoaderHide(!0)
      const e = f.create({ gravity: { y: 1 } }),
        s = a.create({
          element: document.querySelector('.box'),
          engine: e,
          options: { wireframes: !1 },
        })
      i.add(e.world, [
        t.circle(450, 0, 100, { restitution: 0.8 }),
        t.circle(150, 100, 150, {
          isStatic: !0,
          render: { fillStyle: '#fc0', strokeStyle: 'white', lineWidth: 3 },
        }),
        t.rectangle(400, 0, 800, 50, { isStatic: !0 }),
        t.rectangle(400, 600, 800, 50, { isStatic: !0 }),
        t.rectangle(800, 300, 50, 600, { isStatic: !0 }),
        t.rectangle(0, 300, 50, 600, { isStatic: !0 }),
      ])
      const r = g.create(s.canvas),
        n = y.create(e, {
          mouse: r,
          constraint: { stiffness: 0.2, render: { visible: !1 } },
        })
      i.add(e.world, n), a.run(s)
      const o = c.create()
      c.run(o, e)
    },
  },
  S = p('div', { class: 'box' }, null, -1),
  h = [S]
function C(e, s, r, n, o, x) {
  return m(), _('div', null, h)
}
const R = l(v, [['render', C]])
export { R as default }
