import {
  C as h,
  v as g,
  r as d,
  x as m,
  o as f,
  a as p,
  e,
} from './entry.b5c09835.js'
import i from './wave.53281bb7.js'
import './utils.a0756ea6.js'
import './config.20180e1f.js'
const b = { id: 'box', ref: 'box' },
  M = { class: 'svg' },
  x = { class: 'svg' },
  y = {
    __name: 'index',
    setup(w) {
      g().commit('app/setIsPageLoaderHide', !0)
      let n, a
      const s = d(null),
        r = d(null)
      m(() => {
        ;(n = new i(s.value, {
          waveHeight: 90,
          baseHeight: 20,
          color: 'green',
          curve: 40,
          delay: Math.random() * 1 * 100,
          duration: 2500,
        })),
          (a = new i(r.value, [
            {
              waveHeight: 40,
              baseHeight: 60,
              color: o(),
              endColor: o(),
              curve: 20,
              delay: Math.random() * 1 * 200,
              duration: 2500,
            },
            {
              waveHeight: 30,
              baseHeight: 40,
              color: o(),
              endColor: o(),
              curve: 15,
              delay: Math.random() * 1 * 300,
              duration: 2500,
            },
          ]))
      })
      function o() {
        const t = Math.round(Math.random() * 255),
          c = Math.round(Math.random() * 255),
          _ = Math.round(Math.random() * 255),
          v = Math.random() * 0.8 + 0.2
        return `rgba(${t}, ${c}, ${_}, ${v})`
      }
      function l() {
        ;[n, a].forEach((t) => t.run())
      }
      function u() {
        ;[n, a].forEach((t) => t.stop())
      }
      return (t, c) => (
        f(),
        p('div', null, [
          e(
            'div',
            b,
            [
              e('div', M, [
                e(
                  'div',
                  {
                    ref_key: 'svg1',
                    ref: s,
                    style: { width: '100%', height: '100%' },
                  },
                  null,
                  512
                ),
              ]),
              e('div', { class: 'buttons m-5' }, [
                e('button', { class: 'buttons__btn m-1', onClick: l }, ' Run '),
                e(
                  'button',
                  { class: 'buttons__btn m-1', onClick: u },
                  ' Stop '
                ),
              ]),
              e('div', x, [
                e(
                  'div',
                  {
                    ref_key: 'svg2',
                    ref: r,
                    style: { width: '100%', height: '100%' },
                  },
                  null,
                  512
                ),
              ]),
            ],
            512
          ),
        ])
      )
    },
  },
  B = h(y, [['__scopeId', 'data-v-c8f4be57']])
export { B as default }
