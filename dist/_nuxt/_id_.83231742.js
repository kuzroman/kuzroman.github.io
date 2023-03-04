import {
  f as x,
  N as C,
  q as i,
  r as k,
  o,
  a as r,
  e as s,
  t as a,
  u as t,
  z as _,
  F as d,
  b as u,
  O as w,
} from './entry.b5c09835.js'
import { u as I } from './composables.39d4856c.js'
import { w as L } from './works.97412629.js'
const M = { class: 'portfolio-id' },
  N = { class: 'scroll-y' },
  T = { class: 'header' },
  j = { class: 'h1' },
  D = { key: 0 },
  V = { key: 1 },
  B = { class: 'gallery mx-0 m-12' },
  H = ['src'],
  $ = { class: 'gallery__horizon mt-4' },
  z = ['onClick'],
  F = ['src'],
  q = { class: 'description' },
  A = { key: 0, class: 'link' },
  E = ['href'],
  O = ['innerHTML'],
  R = { class: 'skills' },
  S = { class: 'skill' },
  U = x({
    __name: '[id]',
    setup(G) {
      I({ title: 'some latest job' })
      const g = C(),
        e = i(() => L[g.params.id]),
        v = i(() => e.value.imageDirectory),
        m = i(() =>
          [...Array(e.value.numberImg)].map((c, p) => ({
            src: `/img/portfolio/gallery/${v.value}/${p + 1}.jpg`,
          }))
        ),
        y = k(),
        h = k(),
        f = (c) => {
          h.value[c].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        },
        b = i(() => e.value.link.replace(/https:/gi, '').replace(/\//gi, ''))
      return (c, p) => (
        o(),
        r('div', M, [
          s('div', N, [
            s('div', T, [
              s('h1', j, a(t(e).nameCompany), 1),
              t(e).nameTitle
                ? (o(), r('div', D, a(t(e).nameTitle), 1))
                : _('', !0),
              t(e).descCompany
                ? (o(), r('div', V, a(t(e).descCompany), 1))
                : _('', !0),
            ]),
            s('div', B, [
              s(
                'div',
                { class: 'gallery__scroll', ref_key: 'galleryMain', ref: y },
                [
                  (o(!0),
                  r(
                    d,
                    null,
                    u(
                      t(m),
                      (l, n) => (
                        o(),
                        r(
                          'div',
                          {
                            ref_for: !0,
                            ref_key: 'galleryImgs',
                            ref: h,
                            key: n,
                          },
                          [
                            s(
                              'img',
                              {
                                class: 'mx-auto border border-none',
                                src: l.src,
                                alt: '',
                              },
                              null,
                              8,
                              H
                            ),
                          ]
                        )
                      )
                    ),
                    128
                  )),
                ],
                512
              ),
              s('div', $, [
                (o(!0),
                r(
                  d,
                  null,
                  u(
                    t(m),
                    (l, n) => (
                      o(),
                      r(
                        'div',
                        {
                          class: 'inline-block w-2/12 h-full',
                          key: n,
                          onClick: (J) => f(n),
                        },
                        [s('img', { src: l.src, alt: '' }, null, 8, F)],
                        8,
                        z
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            s('div', q, [
              t(e).link
                ? (o(),
                  r('div', A, [
                    w(' Link to project: '),
                    s(
                      'a',
                      { href: t(e).link, target: '_blank' },
                      a(t(b)),
                      9,
                      E
                    ),
                  ]))
                : _('', !0),
              s('div', { class: 'desc', innerHTML: t(e).descDeal }, null, 8, O),
              s('div', R, [
                (o(!0),
                r(
                  d,
                  null,
                  u(t(e).skills, (l) => (o(), r('div', S, a(l), 1))),
                  256
                )),
              ]),
            ]),
          ]),
        ])
      )
    },
  })
export { U as default }
