import {
  M as y,
  o as e,
  a as o,
  e as s,
  F as a,
  b as n,
  u as p,
  c as m,
  H as k,
  E as d,
  t as _,
} from './entry.b5c09835.js'
import { u as $ } from './composables.39d4856c.js'
import { w as f } from './works.97412629.js'
const w = { class: 'portfolio' },
  x = { class: 'scroll-y' },
  B = { class: 'works' },
  b = { class: 'work-date' },
  C = { class: 'work-desc' },
  D = { class: 'work-desc' },
  S = {
    __name: 'index',
    setup(z) {
      $({ title: 'kuzroman portfolio' })
      const h = f.filter((l) => !l.isChallenge),
        v = f.filter((l) => l.isChallenge),
        i = (l, c) => {
          const r = c === 'logo' ? '.png' : '.jpg'
          return `/img/portfolio/gallery/${l.imageDirectory}/${c + r}`
        }
      return (l, c) => {
        const r = y('router-link')
        return (
          e(),
          o('div', w, [
            s('div', x, [
              s('div', B, [
                (e(!0),
                o(
                  a,
                  null,
                  n(
                    p(h),
                    (t, g) => (
                      e(),
                      m(
                        r,
                        { to: { path: `/portfolio/${g}` } },
                        {
                          default: k(() => [
                            s(
                              'div',
                              {
                                class: 'work',
                                style: d({
                                  'background-image': `url(${i(t, '0')})`,
                                }),
                              },
                              [
                                s('div', b, _(t.date), 1),
                                s('div', C, [
                                  (e(!0),
                                  o(
                                    a,
                                    null,
                                    n(
                                      t.skills,
                                      (u) => (e(), o('div', null, _(u), 1))
                                    ),
                                    256
                                  )),
                                ]),
                                s(
                                  'div',
                                  {
                                    class: 'work-logo',
                                    style: d({
                                      'background-image': `url(${i(
                                        t,
                                        'logo'
                                      )})`,
                                    }),
                                  },
                                  null,
                                  4
                                ),
                              ],
                              4
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ['to']
                      )
                    )
                  ),
                  256
                )),
                (e(!0),
                o(
                  a,
                  null,
                  n(
                    p(v),
                    (t, g) => (
                      e(),
                      m(
                        r,
                        { to: { path: `/challenge/${t.link}` } },
                        {
                          default: k(() => [
                            s(
                              'div',
                              {
                                class: 'work',
                                style: d({
                                  'background-image': `url(${i(t, '0')})`,
                                }),
                              },
                              [
                                s('div', D, [
                                  (e(!0),
                                  o(
                                    a,
                                    null,
                                    n(
                                      t.skills,
                                      (u) => (e(), o('div', null, _(u), 1))
                                    ),
                                    256
                                  )),
                                ]),
                              ],
                              4
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ['to']
                      )
                    )
                  ),
                  256
                )),
              ]),
            ]),
          ])
        )
      }
    },
  }
export { S as default }
