import {
  C as _,
  o as a,
  a as c,
  e,
  D as w,
  F as x,
  b as k,
  E as U,
  A as v,
  B as f,
  r as m,
  x as H,
  G as B,
  c as I,
  v as C,
  h as y,
  u as T,
  H as S,
} from './entry.b5c09835.js'
import { u as F } from './composables.39d4856c.js'
import { w as z } from './works.97412629.js'
const R = (t) => (v('data-v-59ae726d'), (t = t()), f(), t),
  O = { class: 'parallax-area m50' },
  W = { class: 'left' },
  Y = R(() =>
    e(
      'div',
      { class: 'right' },
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore, dolorem est excepturi exercitationem facilis hic magni minima natus nobis numquam obcaecati perspiciatis quae quibusdam quo quos sunt, voluptate? Ad. ',
      -1
    )
  ),
  G = {
    __name: 'ParallaxArea',
    props: ['images', 'top'],
    setup(t) {
      const u = t,
        s = (i, o) => {
          const r = Math.ceil(u.top / 15),
            n = o % 2 === 0
          return {
            'background-image': `url(${l(i, '0')})`,
            left: 0,
            transform: `translateY(${n ? -150 + r : 0 - r}px)`,
          }
        },
        l = (i, o) => {
          const r = o === 'logo' ? '.png' : '.jpg'
          return `/img/portfolio/gallery/${i.imageDirectory}/${o + r}`
        }
      return (i, o) => (
        a(),
        c('div', O, [
          e('div', W, [
            w(
              i.$slots,
              'default',
              {},
              () => [
                (a(!0),
                c(
                  x,
                  null,
                  k(
                    u.images,
                    (r, n) => (
                      a(),
                      c('div', { class: 'image', style: U(s(r, n)) }, null, 4)
                    )
                  ),
                  256
                )),
              ],
              !0
            ),
          ]),
          Y,
        ])
      )
    },
  },
  P = _(G, [['__scopeId', 'data-v-59ae726d']])
const L = (t) => (v('data-v-6d4f8d69'), (t = t()), f(), t),
  X = { class: 'flexible' },
  j = { class: 'flexible__content' },
  N = L(() => e('h2', null, 'Title', -1)),
  V = L(() => e('p', null, 'Awesome text', -1)),
  J = {
    __name: '3dHover',
    setup(t) {
      const s = m()
      H(() => {
        if (window.innerWidth < 480) return
        window.matchMedia('(prefers-reduced-motion)').matches ||
          (s.value.addEventListener('mousemove', l),
          s.value.addEventListener('mouseleave', i))
      }),
        B(() => {
          s.value.removeEventListener('mousemove', l),
            s.value.removeEventListener('mouseleave', i)
        })
      function l(o) {
        const { clientX: r, clientY: n, currentTarget: h } = o,
          { clientWidth: p, clientHeight: g, offsetLeft: b, offsetTop: q } = h,
          A = (r - b) / p,
          E = (n - q) / g,
          D = (15 / 2 - A * 15).toFixed(2),
          M = (E * 15 - 15 / 2).toFixed(2)
        s.value.style.transform = `perspective(${p}px) rotateX(${-M}deg) rotateY(${-D}deg) scale3d(1, 1, 1)`
      }
      function i(o) {
        s.value.style.transform = `perspective(${o.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`
      }
      return (o, r) => (
        a(),
        c('div', X, [
          e(
            'article',
            { ref_key: 'cardEl', ref: s, class: 'flexible__card' },
            [
              e('div', j, [
                w(o.$slots, 'default', {}, () => [N], !0),
                w(o.$slots, 'desc', {}, () => [V], !0),
              ]),
            ],
            512
          ),
        ])
      )
    },
  },
  K = _(J, [['__scopeId', 'data-v-6d4f8d69']])
const Q = {},
  Z = { class: 'floating-up-cubs' },
  ee = { class: 'circles' }
function te(t, u) {
  return (
    a(),
    c('div', Z, [
      e('ul', ee, [
        (a(!0),
        c(
          x,
          null,
          k(Array(10), (s) => (a(), c('li'))),
          256
        )),
      ]),
    ])
  )
}
const se = _(Q, [['render', te]])
const oe = {},
  ae = { class: 'gradient-animation' }
function ne(t, u) {
  return a(), c('div', ae)
}
const ie = _(oe, [
  ['render', ne],
  ['__scopeId', 'data-v-04899fa0'],
])
const ce = {},
  $ = (t) => (v('data-v-3c48c667'), (t = t()), f(), t),
  re = { class: 'poker-hand' },
  le = $(() =>
    e(
      'div',
      { class: 'poker-hand__top' },
      [
        e('div', { class: 'poker-hand__top__title' }, ' Title '),
        e(
          'div',
          { class: 'poker-hand__top__desc' },
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at commodi exercitationem minus modi nihil odio quasi saepe sunt suscipit. Aliquid, at dicta illo labore odio perspiciatis repudiandae similique voluptas. Alias, cumque excepturi exercitationem in laudantium magnam magni necessitatibus rem? Dicta expedita labore minus molestias non recusandae similique tenetur voluptatibus. '
        ),
      ],
      -1
    )
  ),
  de = { class: 'poker-hand__bottom' },
  ue = { class: 'poker-hand__column' },
  _e = { class: 'poker-hand__deck' },
  he = $(() =>
    e(
      'div',
      { class: 'poker-hand__deck__front-card' },
      [
        e(
          'b',
          null,
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, minus? '
        ),
        e(
          'p',
          null,
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aut autem consectetur cumque cupiditate deleniti ducimus earum, facilis maxime, nam, nesciunt quam quidem quo reprehenderit suscipit tempore unde voluptatum. '
        ),
      ],
      -1
    )
  ),
  pe = { class: 'poker-hand__deck__back-card' },
  me = $(() => e('div', { class: 'poker-hand__border' }, null, -1))
function ve(t, u) {
  const s = se,
    l = ie
  return (
    a(),
    c('div', re, [
      le,
      e('div', de, [
        (a(!0),
        c(
          x,
          null,
          k(
            [...Array(4).keys()],
            (i) => (
              a(),
              c('div', ue, [
                e('div', _e, [
                  he,
                  e('div', pe, [
                    i % 2 === 0
                      ? (a(), I(s, { key: 0 }))
                      : (a(), I(l, { key: 1 })),
                  ]),
                ]),
                me,
              ])
            )
          ),
          256
        )),
      ]),
    ])
  )
}
const fe = _(ce, [
    ['render', ve],
    ['__scopeId', 'data-v-3c48c667'],
  ]),
  ge = '' + new URL('history.17c0194a.mp4', import.meta.url).href
const d = (t) => (v('data-v-fe3b3715'), (t = t()), f(), t),
  be = d(() => e('div', { class: 'grain' }, null, -1)),
  ye = { class: 'top-screen' },
  we = d(() =>
    e(
      'video',
      { loop: '', muted: '', autoplay: '' },
      [e('source', { src: ge, 'data-wf-ignore': 'true' })],
      -1
    )
  ),
  xe = { class: 'content-area' },
  ke = d(() =>
    e(
      'div',
      { class: 'content-area-box' },
      [
        e('div', { class: 'title' }, ' Manifesto '),
        e(
          'div',
          { class: 'desc m50' },
          ' A perfect design is one that is aesthetically pleasing, functionally effective, and emotionally resonant. It should be timeless, elegant, and sophisticated. It should be carefully crafted to meet the needs of its intended audience. It should be innovative and creative, yet practical and logical. It should be intuitive and user-friendly, with a balance of simplicity and complexity. It should have an overall cohesive feel, with attention to detail and subtlety. It should be flexible and adaptable to changing trends and technologies. It should inspire, engage, and motivate its users. Ultimately, a perfect design should be a reflection of its creator’s vision and passion. '
        ),
        e(
          'p',
          { class: 'text m50' },
          ' The perfect web design should be aesthetically pleasing, easy to navigate, and optimized for the user experience. It should have a modern look and feel that is consistent across all platforms and devices. The website should be responsive, allowing users to access it from any device, including mobile phones and tablets. The website should be organized in a way that allows users to quickly find the information they need. The navigation should be intuitive and the pages should load quickly. All pages should be optimized for search engine optimization, ensuring that the website is easily found by users. The website should also be accessible to people with disabilities. This means that the website should be designed with accessibility features such as alt text for images, closed captioning for videos, and appropriate contrast ratios for text. The website should also have a secure login system that allows users to access their accounts safely. This will ensure that user data is kept secure and private. Finally, the website should be regularly maintained and updated with new content. This will ensure that the website remains fresh and relevant to users. Overall, the perfect web design should be visually appealing, easy to navigate, optimized for user experience, and secure. It should also be accessible to people with disabilities and regularly maintained. '
        ),
      ],
      -1
    )
  ),
  $e = d(() => e('h2', null, 'Good morning everyone.', -1)),
  Ie = d(() =>
    e(
      'p',
      null,
      ' Today I want to talk about success. We all want to be successful in life, but what does it really mean? To me, success is more than just money and fame. It’s about having a sense of fulfillment and purpose. It’s about having the courage to pursue your dreams and reach your goals. ',
      -1
    )
  ),
  Te = d(() =>
    e(
      'p',
      null,
      ' Success is not something that happens overnight. It takes hard work, dedication, and resilience. It requires setting goals and working towards them, even when the going gets tough. It’s about having the strength to push through the obstacles and challenges that life throws at you. ',
      -1
    )
  ),
  Se = d(() =>
    e(
      'p',
      null,
      ' Success is also about learning from your mistakes and failures. It’s about taking risks and not being afraid to fail. It’s about having the confidence to try something new and not being afraid to take chances. ',
      -1
    )
  ),
  He = d(() =>
    e(
      'p',
      null,
      ' Finally, success is about having the courage to be yourself and living a life that is true to who you are. It’s about having the courage to follow your heart and live life on your own terms. ',
      -1
    )
  ),
  Le = d(() =>
    e(
      'p',
      null,
      ' So, don’t be afraid to dream big and go after what you want. Believe in yourself and never give up on your dreams. With hard ',
      -1
    )
  ),
  qe = {
    __name: 'history',
    setup(t) {
      F({ title: 'history' }), C().commit('app/setIsPageLoaderHide', !0)
      const s = m(),
        l = m(0),
        i = m((() => z.map((n) => ({ ...n, rotate: r(0, 360) })))())
      H(() => {
        setTimeout(() => {
          s.value.classList.add('active')
        }, 100)
      })
      const o = (n) => {
        l.value = n.target.scrollTop
      }
      function r(n, h) {
        return Math.floor(Math.random() * (h - n + 1)) + n
      }
      return (n, h) => {
        const p = P,
          g = K,
          b = fe
        return (
          a(),
          c(
            'div',
            { class: 'history', onScroll: o },
            [
              be,
              e('div', ye, [
                we,
                e(
                  'h1',
                  { ref_key: 'tricks', ref: s, class: 'animation-text' },
                  ' Some creative text ',
                  512
                ),
              ]),
              e('div', xe, [
                ke,
                y(p, { images: T(i), top: T(l) }, null, 8, ['images', 'top']),
                y(
                  g,
                  { class: 'flexible' },
                  {
                    default: S(() => [$e]),
                    desc: S(() => [Ie, Te, Se, He, Le]),
                    _: 1,
                  }
                ),
              ]),
              y(b, { class: 'm50' }),
            ],
            32
          )
        )
      }
    },
  },
  Me = _(qe, [['__scopeId', 'data-v-fe3b3715']])
export { Me as default }
