import {
  f as C,
  v as L,
  r as d,
  q as x,
  p as R,
  o,
  a,
  u as r,
  F as l,
  e as v,
  b as A,
  z as B,
  A as w,
  B as E,
  C as I,
} from './entry.b5c09835.js'
const U = (n) => (w('data-v-8bcbe28f'), (n = n()), E(), n),
  M = U(() =>
    v(
      'p',
      { class: 'my-5' },
      ' Click Start and "Allow" your microphone Permission! ',
      -1
    )
  ),
  q = { key: 2 },
  F = ['src'],
  N = C({
    __name: 'index',
    setup(n) {
      L().commit('app/setIsPageLoaderHide', !0)
      const s = d([])
      let e = null
      const u = d(!1),
        c = d('inactive'),
        m = x(() => c.value === 'recording'),
        y = (t) => {
          const i = new Blob([t])
          return URL.createObjectURL(i)
        },
        h = () => {
          ;(u.value = !0),
            navigator.mediaDevices.getUserMedia({ audio: !0 }).then((t) => {
              ;(e = new MediaRecorder(t)),
                e.addEventListener('dataavailable', p),
                e.addEventListener('stop', _)
            })
        },
        f = () => {
          e &&
            (e.removeEventListener('dataavailable', p),
            e.removeEventListener('stop', _),
            (e = null))
        },
        p = (t) => {
          s.value.push(t.data)
        },
        k = () => {
          e && e.state === 'inactive' && (e.start(), (c.value = 'recording'))
        },
        b = () => {
          e && e.state === 'recording' && (e.stop(), (c.value = 'inactive'))
        },
        _ = () => {
          const t = document.querySelectorAll('audio')
          t[t.length - 1].play()
        }
      return (
        R(f),
        (t, i) => (
          o(),
          a('div', null, [
            r(u)
              ? (o(),
                a(
                  l,
                  { key: 1 },
                  [
                    r(m)
                      ? (o(),
                        a(
                          'button',
                          { key: 0, type: 'primary', onClick: b },
                          ' Stop and play it '
                        ))
                      : (o(),
                        a(
                          'button',
                          { key: 1, type: 'primary', onClick: k },
                          ' Record your voice '
                        )),
                  ],
                  64
                ))
              : (o(),
                a(
                  l,
                  { key: 0 },
                  [M, v('button', { type: 'primary', onClick: h }, ' Start ')],
                  64
                )),
            r(s).length
              ? (o(),
                a('div', q, [
                  (o(!0),
                  a(
                    l,
                    null,
                    A(
                      r(s),
                      (g, S) => (
                        o(),
                        a(
                          'audio',
                          {
                            key: S,
                            src: y(g),
                            controls: '',
                            class: 'my-5 h-10 audio',
                          },
                          null,
                          8,
                          F
                        )
                      )
                    ),
                    128
                  )),
                ]))
              : B('', !0),
          ])
        )
      )
    },
  })
const j = I(N, [['__scopeId', 'data-v-8bcbe28f']])
export { j as default }
