var Y =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function oe(z) {
  return z && z.__esModule && Object.prototype.hasOwnProperty.call(z, 'default')
    ? z.default
    : z
}
var j = {},
  le = {
    get exports() {
      return j
    },
    set exports(z) {
      j = z
    },
  }
/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) Liam Brummitt and contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ ;(function (z, fe) {
  ;(function (R, m) {
    z.exports = m()
  })(Y, function () {
    return (function (T) {
      var R = {}
      function m(e) {
        if (R[e]) return R[e].exports
        var l = (R[e] = { i: e, l: !1, exports: {} })
        return T[e].call(l.exports, l, l.exports, m), (l.l = !0), l.exports
      }
      return (
        (m.m = T),
        (m.c = R),
        (m.d = function (e, l, o) {
          m.o(e, l) || Object.defineProperty(e, l, { enumerable: !0, get: o })
        }),
        (m.r = function (e) {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (m.t = function (e, l) {
          if (
            (l & 1 && (e = m(e)),
            l & 8 || (l & 4 && typeof e == 'object' && e && e.__esModule))
          )
            return e
          var o = Object.create(null)
          if (
            (m.r(o),
            Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
            l & 2 && typeof e != 'string')
          )
            for (var r in e)
              m.d(
                o,
                r,
                function (v) {
                  return e[v]
                }.bind(null, r)
              )
          return o
        }),
        (m.n = function (e) {
          var l =
            e && e.__esModule
              ? function () {
                  return e.default
                }
              : function () {
                  return e
                }
          return m.d(l, 'a', l), l
        }),
        (m.o = function (e, l) {
          return Object.prototype.hasOwnProperty.call(e, l)
        }),
        (m.p = ''),
        m((m.s = 21))
      )
    })([
      function (T, R) {
        var m = {}
        ;(T.exports = m),
          (function () {
            ;(m._nextId = 0),
              (m._seed = 0),
              (m._nowStartTime = +new Date()),
              (m._warnedOnce = {}),
              (m._decomp = null),
              (m.extend = function (l, o) {
                var r, v
                typeof o == 'boolean' ? ((r = 2), (v = o)) : ((r = 1), (v = !0))
                for (var s = r; s < arguments.length; s++) {
                  var f = arguments[s]
                  if (f)
                    for (var n in f)
                      v &&
                      f[n] &&
                      f[n].constructor === Object &&
                      (!l[n] || l[n].constructor === Object)
                        ? ((l[n] = l[n] || {}), m.extend(l[n], v, f[n]))
                        : (l[n] = f[n])
                }
                return l
              }),
              (m.clone = function (l, o) {
                return m.extend({}, o, l)
              }),
              (m.keys = function (l) {
                if (Object.keys) return Object.keys(l)
                var o = []
                for (var r in l) o.push(r)
                return o
              }),
              (m.values = function (l) {
                var o = []
                if (Object.keys) {
                  for (var r = Object.keys(l), v = 0; v < r.length; v++)
                    o.push(l[r[v]])
                  return o
                }
                for (var s in l) o.push(l[s])
                return o
              }),
              (m.get = function (l, o, r, v) {
                o = o.split('.').slice(r, v)
                for (var s = 0; s < o.length; s += 1) l = l[o[s]]
                return l
              }),
              (m.set = function (l, o, r, v, s) {
                var f = o.split('.').slice(v, s)
                return (m.get(l, o, 0, -1)[f[f.length - 1]] = r), r
              }),
              (m.shuffle = function (l) {
                for (var o = l.length - 1; o > 0; o--) {
                  var r = Math.floor(m.random() * (o + 1)),
                    v = l[o]
                  ;(l[o] = l[r]), (l[r] = v)
                }
                return l
              }),
              (m.choose = function (l) {
                return l[Math.floor(m.random() * l.length)]
              }),
              (m.isElement = function (l) {
                return typeof HTMLElement < 'u'
                  ? l instanceof HTMLElement
                  : !!(l && l.nodeType && l.nodeName)
              }),
              (m.isArray = function (l) {
                return Object.prototype.toString.call(l) === '[object Array]'
              }),
              (m.isFunction = function (l) {
                return typeof l == 'function'
              }),
              (m.isPlainObject = function (l) {
                return typeof l == 'object' && l.constructor === Object
              }),
              (m.isString = function (l) {
                return toString.call(l) === '[object String]'
              }),
              (m.clamp = function (l, o, r) {
                return l < o ? o : l > r ? r : l
              }),
              (m.sign = function (l) {
                return l < 0 ? -1 : 1
              }),
              (m.now = function () {
                if (typeof window < 'u' && window.performance) {
                  if (window.performance.now) return window.performance.now()
                  if (window.performance.webkitNow)
                    return window.performance.webkitNow()
                }
                return Date.now ? Date.now() : new Date() - m._nowStartTime
              }),
              (m.random = function (l, o) {
                return (
                  (l = typeof l < 'u' ? l : 0),
                  (o = typeof o < 'u' ? o : 1),
                  l + e() * (o - l)
                )
              })
            var e = function () {
              return (
                (m._seed = (m._seed * 9301 + 49297) % 233280), m._seed / 233280
              )
            }
            ;(m.colorToNumber = function (l) {
              return (
                (l = l.replace('#', '')),
                l.length == 3 &&
                  (l =
                    l.charAt(0) +
                    l.charAt(0) +
                    l.charAt(1) +
                    l.charAt(1) +
                    l.charAt(2) +
                    l.charAt(2)),
                parseInt(l, 16)
              )
            }),
              (m.logLevel = 1),
              (m.log = function () {
                console &&
                  m.logLevel > 0 &&
                  m.logLevel <= 3 &&
                  console.log.apply(
                    console,
                    ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                  )
              }),
              (m.info = function () {
                console &&
                  m.logLevel > 0 &&
                  m.logLevel <= 2 &&
                  console.info.apply(
                    console,
                    ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                  )
              }),
              (m.warn = function () {
                console &&
                  m.logLevel > 0 &&
                  m.logLevel <= 3 &&
                  console.warn.apply(
                    console,
                    ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                  )
              }),
              (m.warnOnce = function () {
                var l = Array.prototype.slice.call(arguments).join(' ')
                m._warnedOnce[l] || (m.warn(l), (m._warnedOnce[l] = !0))
              }),
              (m.deprecated = function (l, o, r) {
                l[o] = m.chain(function () {
                  m.warnOnce('🔅 deprecated 🔅', r)
                }, l[o])
              }),
              (m.nextId = function () {
                return m._nextId++
              }),
              (m.indexOf = function (l, o) {
                if (l.indexOf) return l.indexOf(o)
                for (var r = 0; r < l.length; r++) if (l[r] === o) return r
                return -1
              }),
              (m.map = function (l, o) {
                if (l.map) return l.map(o)
                for (var r = [], v = 0; v < l.length; v += 1) r.push(o(l[v]))
                return r
              }),
              (m.topologicalSort = function (l) {
                var o = [],
                  r = [],
                  v = []
                for (var s in l)
                  !r[s] && !v[s] && m._topologicalSort(s, r, v, l, o)
                return o
              }),
              (m._topologicalSort = function (l, o, r, v, s) {
                var f = v[l] || []
                r[l] = !0
                for (var n = 0; n < f.length; n += 1) {
                  var t = f[n]
                  r[t] || o[t] || m._topologicalSort(t, o, r, v, s)
                }
                ;(r[l] = !1), (o[l] = !0), s.push(l)
              }),
              (m.chain = function () {
                for (var l = [], o = 0; o < arguments.length; o += 1) {
                  var r = arguments[o]
                  r._chained ? l.push.apply(l, r._chained) : l.push(r)
                }
                var v = function () {
                  for (
                    var s,
                      f = new Array(arguments.length),
                      n = 0,
                      t = arguments.length;
                    n < t;
                    n++
                  )
                    f[n] = arguments[n]
                  for (n = 0; n < l.length; n += 1) {
                    var i = l[n].apply(s, f)
                    typeof i < 'u' && (s = i)
                  }
                  return s
                }
                return (v._chained = l), v
              }),
              (m.chainPathBefore = function (l, o, r) {
                return m.set(l, o, m.chain(r, m.get(l, o)))
              }),
              (m.chainPathAfter = function (l, o, r) {
                return m.set(l, o, m.chain(m.get(l, o), r))
              }),
              (m.setDecomp = function (l) {
                m._decomp = l
              }),
              (m.getDecomp = function () {
                var l = m._decomp
                try {
                  !l && typeof window < 'u' && (l = window.decomp),
                    !l && typeof Y < 'u' && (l = Y.decomp)
                } catch {
                  l = null
                }
                return l
              })
          })()
      },
      function (T, R) {
        var m = {}
        ;(T.exports = m),
          (function () {
            ;(m.create = function (e) {
              var l = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } }
              return e && m.update(l, e), l
            }),
              (m.update = function (e, l, o) {
                ;(e.min.x = 1 / 0),
                  (e.max.x = -1 / 0),
                  (e.min.y = 1 / 0),
                  (e.max.y = -1 / 0)
                for (var r = 0; r < l.length; r++) {
                  var v = l[r]
                  v.x > e.max.x && (e.max.x = v.x),
                    v.x < e.min.x && (e.min.x = v.x),
                    v.y > e.max.y && (e.max.y = v.y),
                    v.y < e.min.y && (e.min.y = v.y)
                }
                o &&
                  (o.x > 0 ? (e.max.x += o.x) : (e.min.x += o.x),
                  o.y > 0 ? (e.max.y += o.y) : (e.min.y += o.y))
              }),
              (m.contains = function (e, l) {
                return (
                  l.x >= e.min.x &&
                  l.x <= e.max.x &&
                  l.y >= e.min.y &&
                  l.y <= e.max.y
                )
              }),
              (m.overlaps = function (e, l) {
                return (
                  e.min.x <= l.max.x &&
                  e.max.x >= l.min.x &&
                  e.max.y >= l.min.y &&
                  e.min.y <= l.max.y
                )
              }),
              (m.translate = function (e, l) {
                ;(e.min.x += l.x),
                  (e.max.x += l.x),
                  (e.min.y += l.y),
                  (e.max.y += l.y)
              }),
              (m.shift = function (e, l) {
                var o = e.max.x - e.min.x,
                  r = e.max.y - e.min.y
                ;(e.min.x = l.x),
                  (e.max.x = l.x + o),
                  (e.min.y = l.y),
                  (e.max.y = l.y + r)
              })
          })()
      },
      function (T, R) {
        var m = {}
        ;(T.exports = m),
          (function () {
            ;(m.create = function (e, l) {
              return { x: e || 0, y: l || 0 }
            }),
              (m.clone = function (e) {
                return { x: e.x, y: e.y }
              }),
              (m.magnitude = function (e) {
                return Math.sqrt(e.x * e.x + e.y * e.y)
              }),
              (m.magnitudeSquared = function (e) {
                return e.x * e.x + e.y * e.y
              }),
              (m.rotate = function (e, l, o) {
                var r = Math.cos(l),
                  v = Math.sin(l)
                o || (o = {})
                var s = e.x * r - e.y * v
                return (o.y = e.x * v + e.y * r), (o.x = s), o
              }),
              (m.rotateAbout = function (e, l, o, r) {
                var v = Math.cos(l),
                  s = Math.sin(l)
                r || (r = {})
                var f = o.x + ((e.x - o.x) * v - (e.y - o.y) * s)
                return (
                  (r.y = o.y + ((e.x - o.x) * s + (e.y - o.y) * v)),
                  (r.x = f),
                  r
                )
              }),
              (m.normalise = function (e) {
                var l = m.magnitude(e)
                return l === 0 ? { x: 0, y: 0 } : { x: e.x / l, y: e.y / l }
              }),
              (m.dot = function (e, l) {
                return e.x * l.x + e.y * l.y
              }),
              (m.cross = function (e, l) {
                return e.x * l.y - e.y * l.x
              }),
              (m.cross3 = function (e, l, o) {
                return (l.x - e.x) * (o.y - e.y) - (l.y - e.y) * (o.x - e.x)
              }),
              (m.add = function (e, l, o) {
                return o || (o = {}), (o.x = e.x + l.x), (o.y = e.y + l.y), o
              }),
              (m.sub = function (e, l, o) {
                return o || (o = {}), (o.x = e.x - l.x), (o.y = e.y - l.y), o
              }),
              (m.mult = function (e, l) {
                return { x: e.x * l, y: e.y * l }
              }),
              (m.div = function (e, l) {
                return { x: e.x / l, y: e.y / l }
              }),
              (m.perp = function (e, l) {
                return (l = l === !0 ? -1 : 1), { x: l * -e.y, y: l * e.x }
              }),
              (m.neg = function (e) {
                return { x: -e.x, y: -e.y }
              }),
              (m.angle = function (e, l) {
                return Math.atan2(l.y - e.y, l.x - e.x)
              }),
              (m._temp = [
                m.create(),
                m.create(),
                m.create(),
                m.create(),
                m.create(),
                m.create(),
              ])
          })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(2),
          o = m(0)
        ;(function () {
          ;(e.create = function (r, v) {
            for (var s = [], f = 0; f < r.length; f++) {
              var n = r[f],
                t = { x: n.x, y: n.y, index: f, body: v, isInternal: !1 }
              s.push(t)
            }
            return s
          }),
            (e.fromPath = function (r, v) {
              var s = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                f = []
              return (
                r.replace(s, function (n, t, i) {
                  f.push({ x: parseFloat(t), y: parseFloat(i) })
                }),
                e.create(f, v)
              )
            }),
            (e.centre = function (r) {
              for (
                var v = e.area(r, !0), s = { x: 0, y: 0 }, f, n, t, i = 0;
                i < r.length;
                i++
              )
                (t = (i + 1) % r.length),
                  (f = l.cross(r[i], r[t])),
                  (n = l.mult(l.add(r[i], r[t]), f)),
                  (s = l.add(s, n))
              return l.div(s, 6 * v)
            }),
            (e.mean = function (r) {
              for (var v = { x: 0, y: 0 }, s = 0; s < r.length; s++)
                (v.x += r[s].x), (v.y += r[s].y)
              return l.div(v, r.length)
            }),
            (e.area = function (r, v) {
              for (var s = 0, f = r.length - 1, n = 0; n < r.length; n++)
                (s += (r[f].x - r[n].x) * (r[f].y + r[n].y)), (f = n)
              return v ? s / 2 : Math.abs(s) / 2
            }),
            (e.inertia = function (r, v) {
              for (var s = 0, f = 0, n = r, t, i, a = 0; a < n.length; a++)
                (i = (a + 1) % n.length),
                  (t = Math.abs(l.cross(n[i], n[a]))),
                  (s +=
                    t *
                    (l.dot(n[i], n[i]) +
                      l.dot(n[i], n[a]) +
                      l.dot(n[a], n[a]))),
                  (f += t)
              return (v / 6) * (s / f)
            }),
            (e.translate = function (r, v, s) {
              s = typeof s < 'u' ? s : 1
              var f = r.length,
                n = v.x * s,
                t = v.y * s,
                i
              for (i = 0; i < f; i++) (r[i].x += n), (r[i].y += t)
              return r
            }),
            (e.rotate = function (r, v, s) {
              if (v !== 0) {
                var f = Math.cos(v),
                  n = Math.sin(v),
                  t = s.x,
                  i = s.y,
                  a = r.length,
                  c,
                  h,
                  C,
                  P
                for (P = 0; P < a; P++)
                  (c = r[P]),
                    (h = c.x - t),
                    (C = c.y - i),
                    (c.x = t + (h * f - C * n)),
                    (c.y = i + (h * n + C * f))
                return r
              }
            }),
            (e.contains = function (r, v) {
              for (
                var s = v.x, f = v.y, n = r.length, t = r[n - 1], i, a = 0;
                a < n;
                a++
              ) {
                if (
                  ((i = r[a]),
                  (s - t.x) * (i.y - t.y) + (f - t.y) * (t.x - i.x) > 0)
                )
                  return !1
                t = i
              }
              return !0
            }),
            (e.scale = function (r, v, s, f) {
              if (v === 1 && s === 1) return r
              f = f || e.centre(r)
              for (var n, t, i = 0; i < r.length; i++)
                (n = r[i]),
                  (t = l.sub(n, f)),
                  (r[i].x = f.x + t.x * v),
                  (r[i].y = f.y + t.y * s)
              return r
            }),
            (e.chamfer = function (r, v, s, f, n) {
              typeof v == 'number' ? (v = [v]) : (v = v || [8]),
                (s = typeof s < 'u' ? s : -1),
                (f = f || 2),
                (n = n || 14)
              for (var t = [], i = 0; i < r.length; i++) {
                var a = r[i - 1 >= 0 ? i - 1 : r.length - 1],
                  c = r[i],
                  h = r[(i + 1) % r.length],
                  C = v[i < v.length ? i : v.length - 1]
                if (C === 0) {
                  t.push(c)
                  continue
                }
                var P = l.normalise({ x: c.y - a.y, y: a.x - c.x }),
                  u = l.normalise({ x: h.y - c.y, y: c.x - h.x }),
                  g = Math.sqrt(2 * Math.pow(C, 2)),
                  p = l.mult(o.clone(P), C),
                  x = l.normalise(l.mult(l.add(P, u), 0.5)),
                  S = l.sub(c, l.mult(x, g)),
                  y = s
                s === -1 && (y = Math.pow(C, 0.32) * 1.75),
                  (y = o.clamp(y, f, n)),
                  y % 2 === 1 && (y += 1)
                for (
                  var w = Math.acos(l.dot(P, u)), d = w / y, M = 0;
                  M < y;
                  M++
                )
                  t.push(l.add(l.rotate(p, d * M), S))
              }
              return t
            }),
            (e.clockwiseSort = function (r) {
              var v = e.mean(r)
              return (
                r.sort(function (s, f) {
                  return l.angle(v, s) - l.angle(v, f)
                }),
                r
              )
            }),
            (e.isConvex = function (r) {
              var v = 0,
                s = r.length,
                f,
                n,
                t,
                i
              if (s < 3) return null
              for (f = 0; f < s; f++)
                if (
                  ((n = (f + 1) % s),
                  (t = (f + 2) % s),
                  (i = (r[n].x - r[f].x) * (r[t].y - r[n].y)),
                  (i -= (r[n].y - r[f].y) * (r[t].x - r[n].x)),
                  i < 0 ? (v |= 1) : i > 0 && (v |= 2),
                  v === 3)
                )
                  return !1
              return v !== 0 ? !0 : null
            }),
            (e.hull = function (r) {
              var v = [],
                s = [],
                f,
                n
              for (
                r = r.slice(0),
                  r.sort(function (t, i) {
                    var a = t.x - i.x
                    return a !== 0 ? a : t.y - i.y
                  }),
                  n = 0;
                n < r.length;
                n += 1
              ) {
                for (
                  f = r[n];
                  s.length >= 2 &&
                  l.cross3(s[s.length - 2], s[s.length - 1], f) <= 0;

                )
                  s.pop()
                s.push(f)
              }
              for (n = r.length - 1; n >= 0; n -= 1) {
                for (
                  f = r[n];
                  v.length >= 2 &&
                  l.cross3(v[v.length - 2], v[v.length - 1], f) <= 0;

                )
                  v.pop()
                v.push(f)
              }
              return v.pop(), s.pop(), v.concat(s)
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(0)
        ;(function () {
          ;(e.on = function (o, r, v) {
            for (var s = r.split(' '), f, n = 0; n < s.length; n++)
              (f = s[n]),
                (o.events = o.events || {}),
                (o.events[f] = o.events[f] || []),
                o.events[f].push(v)
            return v
          }),
            (e.off = function (o, r, v) {
              if (!r) {
                o.events = {}
                return
              }
              typeof r == 'function' &&
                ((v = r), (r = l.keys(o.events).join(' ')))
              for (var s = r.split(' '), f = 0; f < s.length; f++) {
                var n = o.events[s[f]],
                  t = []
                if (v && n)
                  for (var i = 0; i < n.length; i++) n[i] !== v && t.push(n[i])
                o.events[s[f]] = t
              }
            }),
            (e.trigger = function (o, r, v) {
              var s,
                f,
                n,
                t,
                i = o.events
              if (i && l.keys(i).length > 0) {
                v || (v = {}), (s = r.split(' '))
                for (var a = 0; a < s.length; a++)
                  if (((f = s[a]), (n = i[f]), n)) {
                    ;(t = l.clone(v, !1)), (t.name = f), (t.source = o)
                    for (var c = 0; c < n.length; c++) n[c].apply(o, [t])
                  }
              }
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(4),
          o = m(0),
          r = m(1),
          v = m(6)
        ;(function () {
          ;(e.create = function (s) {
            return o.extend(
              {
                id: o.nextId(),
                type: 'composite',
                parent: null,
                isModified: !1,
                bodies: [],
                constraints: [],
                composites: [],
                label: 'Composite',
                plugin: {},
                cache: {
                  allBodies: null,
                  allConstraints: null,
                  allComposites: null,
                },
              },
              s
            )
          }),
            (e.setModified = function (s, f, n, t) {
              if (
                ((s.isModified = f),
                f &&
                  s.cache &&
                  ((s.cache.allBodies = null),
                  (s.cache.allConstraints = null),
                  (s.cache.allComposites = null)),
                n && s.parent && e.setModified(s.parent, f, n, t),
                t)
              )
                for (var i = 0; i < s.composites.length; i++) {
                  var a = s.composites[i]
                  e.setModified(a, f, n, t)
                }
            }),
            (e.add = function (s, f) {
              var n = [].concat(f)
              l.trigger(s, 'beforeAdd', { object: f })
              for (var t = 0; t < n.length; t++) {
                var i = n[t]
                switch (i.type) {
                  case 'body':
                    if (i.parent !== i) {
                      o.warn(
                        'Composite.add: skipped adding a compound body part (you must add its parent instead)'
                      )
                      break
                    }
                    e.addBody(s, i)
                    break
                  case 'constraint':
                    e.addConstraint(s, i)
                    break
                  case 'composite':
                    e.addComposite(s, i)
                    break
                  case 'mouseConstraint':
                    e.addConstraint(s, i.constraint)
                    break
                }
              }
              return l.trigger(s, 'afterAdd', { object: f }), s
            }),
            (e.remove = function (s, f, n) {
              var t = [].concat(f)
              l.trigger(s, 'beforeRemove', { object: f })
              for (var i = 0; i < t.length; i++) {
                var a = t[i]
                switch (a.type) {
                  case 'body':
                    e.removeBody(s, a, n)
                    break
                  case 'constraint':
                    e.removeConstraint(s, a, n)
                    break
                  case 'composite':
                    e.removeComposite(s, a, n)
                    break
                  case 'mouseConstraint':
                    e.removeConstraint(s, a.constraint)
                    break
                }
              }
              return l.trigger(s, 'afterRemove', { object: f }), s
            }),
            (e.addComposite = function (s, f) {
              return (
                s.composites.push(f),
                (f.parent = s),
                e.setModified(s, !0, !0, !1),
                s
              )
            }),
            (e.removeComposite = function (s, f, n) {
              var t = o.indexOf(s.composites, f)
              if ((t !== -1 && e.removeCompositeAt(s, t), n))
                for (var i = 0; i < s.composites.length; i++)
                  e.removeComposite(s.composites[i], f, !0)
              return s
            }),
            (e.removeCompositeAt = function (s, f) {
              return s.composites.splice(f, 1), e.setModified(s, !0, !0, !1), s
            }),
            (e.addBody = function (s, f) {
              return s.bodies.push(f), e.setModified(s, !0, !0, !1), s
            }),
            (e.removeBody = function (s, f, n) {
              var t = o.indexOf(s.bodies, f)
              if ((t !== -1 && e.removeBodyAt(s, t), n))
                for (var i = 0; i < s.composites.length; i++)
                  e.removeBody(s.composites[i], f, !0)
              return s
            }),
            (e.removeBodyAt = function (s, f) {
              return s.bodies.splice(f, 1), e.setModified(s, !0, !0, !1), s
            }),
            (e.addConstraint = function (s, f) {
              return s.constraints.push(f), e.setModified(s, !0, !0, !1), s
            }),
            (e.removeConstraint = function (s, f, n) {
              var t = o.indexOf(s.constraints, f)
              if ((t !== -1 && e.removeConstraintAt(s, t), n))
                for (var i = 0; i < s.composites.length; i++)
                  e.removeConstraint(s.composites[i], f, !0)
              return s
            }),
            (e.removeConstraintAt = function (s, f) {
              return s.constraints.splice(f, 1), e.setModified(s, !0, !0, !1), s
            }),
            (e.clear = function (s, f, n) {
              if (n)
                for (var t = 0; t < s.composites.length; t++)
                  e.clear(s.composites[t], f, !0)
              return (
                f
                  ? (s.bodies = s.bodies.filter(function (i) {
                      return i.isStatic
                    }))
                  : (s.bodies.length = 0),
                (s.constraints.length = 0),
                (s.composites.length = 0),
                e.setModified(s, !0, !0, !1),
                s
              )
            }),
            (e.allBodies = function (s) {
              if (s.cache && s.cache.allBodies) return s.cache.allBodies
              for (
                var f = [].concat(s.bodies), n = 0;
                n < s.composites.length;
                n++
              )
                f = f.concat(e.allBodies(s.composites[n]))
              return s.cache && (s.cache.allBodies = f), f
            }),
            (e.allConstraints = function (s) {
              if (s.cache && s.cache.allConstraints)
                return s.cache.allConstraints
              for (
                var f = [].concat(s.constraints), n = 0;
                n < s.composites.length;
                n++
              )
                f = f.concat(e.allConstraints(s.composites[n]))
              return s.cache && (s.cache.allConstraints = f), f
            }),
            (e.allComposites = function (s) {
              if (s.cache && s.cache.allComposites) return s.cache.allComposites
              for (
                var f = [].concat(s.composites), n = 0;
                n < s.composites.length;
                n++
              )
                f = f.concat(e.allComposites(s.composites[n]))
              return s.cache && (s.cache.allComposites = f), f
            }),
            (e.get = function (s, f, n) {
              var t, i
              switch (n) {
                case 'body':
                  t = e.allBodies(s)
                  break
                case 'constraint':
                  t = e.allConstraints(s)
                  break
                case 'composite':
                  t = e.allComposites(s).concat(s)
                  break
              }
              return t
                ? ((i = t.filter(function (a) {
                    return a.id.toString() === f.toString()
                  })),
                  i.length === 0 ? null : i[0])
                : null
            }),
            (e.move = function (s, f, n) {
              return e.remove(s, f), e.add(n, f), s
            }),
            (e.rebase = function (s) {
              for (
                var f = e
                    .allBodies(s)
                    .concat(e.allConstraints(s))
                    .concat(e.allComposites(s)),
                  n = 0;
                n < f.length;
                n++
              )
                f[n].id = o.nextId()
              return s
            }),
            (e.translate = function (s, f, n) {
              for (
                var t = n ? e.allBodies(s) : s.bodies, i = 0;
                i < t.length;
                i++
              )
                v.translate(t[i], f)
              return s
            }),
            (e.rotate = function (s, f, n, t) {
              for (
                var i = Math.cos(f),
                  a = Math.sin(f),
                  c = t ? e.allBodies(s) : s.bodies,
                  h = 0;
                h < c.length;
                h++
              ) {
                var C = c[h],
                  P = C.position.x - n.x,
                  u = C.position.y - n.y
                v.setPosition(C, {
                  x: n.x + (P * i - u * a),
                  y: n.y + (P * a + u * i),
                }),
                  v.rotate(C, f)
              }
              return s
            }),
            (e.scale = function (s, f, n, t, i) {
              for (
                var a = i ? e.allBodies(s) : s.bodies, c = 0;
                c < a.length;
                c++
              ) {
                var h = a[c],
                  C = h.position.x - t.x,
                  P = h.position.y - t.y
                v.setPosition(h, { x: t.x + C * f, y: t.y + P * n }),
                  v.scale(h, f, n)
              }
              return s
            }),
            (e.bounds = function (s) {
              for (
                var f = e.allBodies(s), n = [], t = 0;
                t < f.length;
                t += 1
              ) {
                var i = f[t]
                n.push(i.bounds.min, i.bounds.max)
              }
              return r.create(n)
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(3),
          o = m(2),
          r = m(7)
        m(16)
        var v = m(0),
          s = m(1),
          f = m(11)
        ;(function () {
          ;(e._inertiaScale = 4),
            (e._nextCollidingGroupId = 1),
            (e._nextNonCollidingGroupId = -1),
            (e._nextCategory = 1),
            (e.create = function (t) {
              var i = {
                  id: v.nextId(),
                  type: 'body',
                  label: 'Body',
                  parts: [],
                  plugin: {},
                  angle: 0,
                  vertices: l.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
                  position: { x: 0, y: 0 },
                  force: { x: 0, y: 0 },
                  torque: 0,
                  positionImpulse: { x: 0, y: 0 },
                  constraintImpulse: { x: 0, y: 0, angle: 0 },
                  totalContacts: 0,
                  speed: 0,
                  angularSpeed: 0,
                  velocity: { x: 0, y: 0 },
                  angularVelocity: 0,
                  isSensor: !1,
                  isStatic: !1,
                  isSleeping: !1,
                  motion: 0,
                  sleepThreshold: 60,
                  density: 0.001,
                  restitution: 0,
                  friction: 0.1,
                  frictionStatic: 0.5,
                  frictionAir: 0.01,
                  collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                  slop: 0.05,
                  timeScale: 1,
                  render: {
                    visible: !0,
                    opacity: 1,
                    strokeStyle: null,
                    fillStyle: null,
                    lineWidth: null,
                    sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 },
                  },
                  events: null,
                  bounds: null,
                  chamfer: null,
                  circleRadius: 0,
                  positionPrev: null,
                  anglePrev: 0,
                  parent: null,
                  axes: null,
                  area: 0,
                  mass: 0,
                  inertia: 0,
                  _original: null,
                },
                a = v.extend(i, t)
              return n(a, t), a
            }),
            (e.nextGroup = function (t) {
              return t
                ? e._nextNonCollidingGroupId--
                : e._nextCollidingGroupId++
            }),
            (e.nextCategory = function () {
              return (e._nextCategory = e._nextCategory << 1), e._nextCategory
            })
          var n = function (t, i) {
            ;(i = i || {}),
              e.set(t, {
                bounds: t.bounds || s.create(t.vertices),
                positionPrev: t.positionPrev || o.clone(t.position),
                anglePrev: t.anglePrev || t.angle,
                vertices: t.vertices,
                parts: t.parts || [t],
                isStatic: t.isStatic,
                isSleeping: t.isSleeping,
                parent: t.parent || t,
              }),
              l.rotate(t.vertices, t.angle, t.position),
              f.rotate(t.axes, t.angle),
              s.update(t.bounds, t.vertices, t.velocity),
              e.set(t, {
                axes: i.axes || t.axes,
                area: i.area || t.area,
                mass: i.mass || t.mass,
                inertia: i.inertia || t.inertia,
              })
            var a = t.isStatic
                ? '#14151f'
                : v.choose([
                    '#f19648',
                    '#f5d259',
                    '#f55a3c',
                    '#063e7b',
                    '#ececd1',
                  ]),
              c = t.isStatic ? '#555' : '#ccc',
              h = t.isStatic && t.render.fillStyle === null ? 1 : 0
            ;(t.render.fillStyle = t.render.fillStyle || a),
              (t.render.strokeStyle = t.render.strokeStyle || c),
              (t.render.lineWidth = t.render.lineWidth || h),
              (t.render.sprite.xOffset +=
                -(t.bounds.min.x - t.position.x) /
                (t.bounds.max.x - t.bounds.min.x)),
              (t.render.sprite.yOffset +=
                -(t.bounds.min.y - t.position.y) /
                (t.bounds.max.y - t.bounds.min.y))
          }
          ;(e.set = function (t, i, a) {
            var c
            typeof i == 'string' && ((c = i), (i = {}), (i[c] = a))
            for (c in i)
              if (Object.prototype.hasOwnProperty.call(i, c))
                switch (((a = i[c]), c)) {
                  case 'isStatic':
                    e.setStatic(t, a)
                    break
                  case 'isSleeping':
                    r.set(t, a)
                    break
                  case 'mass':
                    e.setMass(t, a)
                    break
                  case 'density':
                    e.setDensity(t, a)
                    break
                  case 'inertia':
                    e.setInertia(t, a)
                    break
                  case 'vertices':
                    e.setVertices(t, a)
                    break
                  case 'position':
                    e.setPosition(t, a)
                    break
                  case 'angle':
                    e.setAngle(t, a)
                    break
                  case 'velocity':
                    e.setVelocity(t, a)
                    break
                  case 'angularVelocity':
                    e.setAngularVelocity(t, a)
                    break
                  case 'parts':
                    e.setParts(t, a)
                    break
                  case 'centre':
                    e.setCentre(t, a)
                    break
                  default:
                    t[c] = a
                }
          }),
            (e.setStatic = function (t, i) {
              for (var a = 0; a < t.parts.length; a++) {
                var c = t.parts[a]
                ;(c.isStatic = i),
                  i
                    ? ((c._original = {
                        restitution: c.restitution,
                        friction: c.friction,
                        mass: c.mass,
                        inertia: c.inertia,
                        density: c.density,
                        inverseMass: c.inverseMass,
                        inverseInertia: c.inverseInertia,
                      }),
                      (c.restitution = 0),
                      (c.friction = 1),
                      (c.mass = c.inertia = c.density = 1 / 0),
                      (c.inverseMass = c.inverseInertia = 0),
                      (c.positionPrev.x = c.position.x),
                      (c.positionPrev.y = c.position.y),
                      (c.anglePrev = c.angle),
                      (c.angularVelocity = 0),
                      (c.speed = 0),
                      (c.angularSpeed = 0),
                      (c.motion = 0))
                    : c._original &&
                      ((c.restitution = c._original.restitution),
                      (c.friction = c._original.friction),
                      (c.mass = c._original.mass),
                      (c.inertia = c._original.inertia),
                      (c.density = c._original.density),
                      (c.inverseMass = c._original.inverseMass),
                      (c.inverseInertia = c._original.inverseInertia),
                      (c._original = null))
              }
            }),
            (e.setMass = function (t, i) {
              var a = t.inertia / (t.mass / 6)
              ;(t.inertia = a * (i / 6)),
                (t.inverseInertia = 1 / t.inertia),
                (t.mass = i),
                (t.inverseMass = 1 / t.mass),
                (t.density = t.mass / t.area)
            }),
            (e.setDensity = function (t, i) {
              e.setMass(t, i * t.area), (t.density = i)
            }),
            (e.setInertia = function (t, i) {
              ;(t.inertia = i), (t.inverseInertia = 1 / t.inertia)
            }),
            (e.setVertices = function (t, i) {
              i[0].body === t
                ? (t.vertices = i)
                : (t.vertices = l.create(i, t)),
                (t.axes = f.fromVertices(t.vertices)),
                (t.area = l.area(t.vertices)),
                e.setMass(t, t.density * t.area)
              var a = l.centre(t.vertices)
              l.translate(t.vertices, a, -1),
                e.setInertia(
                  t,
                  e._inertiaScale * l.inertia(t.vertices, t.mass)
                ),
                l.translate(t.vertices, t.position),
                s.update(t.bounds, t.vertices, t.velocity)
            }),
            (e.setParts = function (t, i, a) {
              var c
              for (
                i = i.slice(0),
                  t.parts.length = 0,
                  t.parts.push(t),
                  t.parent = t,
                  c = 0;
                c < i.length;
                c++
              ) {
                var h = i[c]
                h !== t && ((h.parent = t), t.parts.push(h))
              }
              if (t.parts.length !== 1) {
                if (((a = typeof a < 'u' ? a : !0), a)) {
                  var C = []
                  for (c = 0; c < i.length; c++) C = C.concat(i[c].vertices)
                  l.clockwiseSort(C)
                  var P = l.hull(C),
                    u = l.centre(P)
                  e.setVertices(t, P), l.translate(t.vertices, u)
                }
                var g = e._totalProperties(t)
                ;(t.area = g.area),
                  (t.parent = t),
                  (t.position.x = g.centre.x),
                  (t.position.y = g.centre.y),
                  (t.positionPrev.x = g.centre.x),
                  (t.positionPrev.y = g.centre.y),
                  e.setMass(t, g.mass),
                  e.setInertia(t, g.inertia),
                  e.setPosition(t, g.centre)
              }
            }),
            (e.setCentre = function (t, i, a) {
              a
                ? ((t.positionPrev.x += i.x),
                  (t.positionPrev.y += i.y),
                  (t.position.x += i.x),
                  (t.position.y += i.y))
                : ((t.positionPrev.x = i.x - (t.position.x - t.positionPrev.x)),
                  (t.positionPrev.y = i.y - (t.position.y - t.positionPrev.y)),
                  (t.position.x = i.x),
                  (t.position.y = i.y))
            }),
            (e.setPosition = function (t, i) {
              var a = o.sub(i, t.position)
              ;(t.positionPrev.x += a.x), (t.positionPrev.y += a.y)
              for (var c = 0; c < t.parts.length; c++) {
                var h = t.parts[c]
                ;(h.position.x += a.x),
                  (h.position.y += a.y),
                  l.translate(h.vertices, a),
                  s.update(h.bounds, h.vertices, t.velocity)
              }
            }),
            (e.setAngle = function (t, i) {
              var a = i - t.angle
              t.anglePrev += a
              for (var c = 0; c < t.parts.length; c++) {
                var h = t.parts[c]
                ;(h.angle += a),
                  l.rotate(h.vertices, a, t.position),
                  f.rotate(h.axes, a),
                  s.update(h.bounds, h.vertices, t.velocity),
                  c > 0 && o.rotateAbout(h.position, a, t.position, h.position)
              }
            }),
            (e.setVelocity = function (t, i) {
              ;(t.positionPrev.x = t.position.x - i.x),
                (t.positionPrev.y = t.position.y - i.y),
                (t.velocity.x = i.x),
                (t.velocity.y = i.y),
                (t.speed = o.magnitude(t.velocity))
            }),
            (e.setAngularVelocity = function (t, i) {
              ;(t.anglePrev = t.angle - i),
                (t.angularVelocity = i),
                (t.angularSpeed = Math.abs(t.angularVelocity))
            }),
            (e.translate = function (t, i) {
              e.setPosition(t, o.add(t.position, i))
            }),
            (e.rotate = function (t, i, a) {
              if (!a) e.setAngle(t, t.angle + i)
              else {
                var c = Math.cos(i),
                  h = Math.sin(i),
                  C = t.position.x - a.x,
                  P = t.position.y - a.y
                e.setPosition(t, {
                  x: a.x + (C * c - P * h),
                  y: a.y + (C * h + P * c),
                }),
                  e.setAngle(t, t.angle + i)
              }
            }),
            (e.scale = function (t, i, a, c) {
              var h = 0,
                C = 0
              c = c || t.position
              for (var P = 0; P < t.parts.length; P++) {
                var u = t.parts[P]
                l.scale(u.vertices, i, a, c),
                  (u.axes = f.fromVertices(u.vertices)),
                  (u.area = l.area(u.vertices)),
                  e.setMass(u, t.density * u.area),
                  l.translate(u.vertices, {
                    x: -u.position.x,
                    y: -u.position.y,
                  }),
                  e.setInertia(
                    u,
                    e._inertiaScale * l.inertia(u.vertices, u.mass)
                  ),
                  l.translate(u.vertices, { x: u.position.x, y: u.position.y }),
                  P > 0 && ((h += u.area), (C += u.inertia)),
                  (u.position.x = c.x + (u.position.x - c.x) * i),
                  (u.position.y = c.y + (u.position.y - c.y) * a),
                  s.update(u.bounds, u.vertices, t.velocity)
              }
              t.parts.length > 1 &&
                ((t.area = h),
                t.isStatic ||
                  (e.setMass(t, t.density * h), e.setInertia(t, C))),
                t.circleRadius &&
                  (i === a ? (t.circleRadius *= i) : (t.circleRadius = null))
            }),
            (e.update = function (t, i, a, c) {
              var h = Math.pow(i * a * t.timeScale, 2),
                C = 1 - t.frictionAir * a * t.timeScale,
                P = t.position.x - t.positionPrev.x,
                u = t.position.y - t.positionPrev.y
              ;(t.velocity.x = P * C * c + (t.force.x / t.mass) * h),
                (t.velocity.y = u * C * c + (t.force.y / t.mass) * h),
                (t.positionPrev.x = t.position.x),
                (t.positionPrev.y = t.position.y),
                (t.position.x += t.velocity.x),
                (t.position.y += t.velocity.y),
                (t.angularVelocity =
                  (t.angle - t.anglePrev) * C * c + (t.torque / t.inertia) * h),
                (t.anglePrev = t.angle),
                (t.angle += t.angularVelocity),
                (t.speed = o.magnitude(t.velocity)),
                (t.angularSpeed = Math.abs(t.angularVelocity))
              for (var g = 0; g < t.parts.length; g++) {
                var p = t.parts[g]
                l.translate(p.vertices, t.velocity),
                  g > 0 &&
                    ((p.position.x += t.velocity.x),
                    (p.position.y += t.velocity.y)),
                  t.angularVelocity !== 0 &&
                    (l.rotate(p.vertices, t.angularVelocity, t.position),
                    f.rotate(p.axes, t.angularVelocity),
                    g > 0 &&
                      o.rotateAbout(
                        p.position,
                        t.angularVelocity,
                        t.position,
                        p.position
                      )),
                  s.update(p.bounds, p.vertices, t.velocity)
              }
            }),
            (e.applyForce = function (t, i, a) {
              ;(t.force.x += a.x), (t.force.y += a.y)
              var c = { x: i.x - t.position.x, y: i.y - t.position.y }
              t.torque += c.x * a.y - c.y * a.x
            }),
            (e._totalProperties = function (t) {
              for (
                var i = {
                    mass: 0,
                    area: 0,
                    inertia: 0,
                    centre: { x: 0, y: 0 },
                  },
                  a = t.parts.length === 1 ? 0 : 1;
                a < t.parts.length;
                a++
              ) {
                var c = t.parts[a],
                  h = c.mass !== 1 / 0 ? c.mass : 1
                ;(i.mass += h),
                  (i.area += c.area),
                  (i.inertia += c.inertia),
                  (i.centre = o.add(i.centre, o.mult(c.position, h)))
              }
              return (i.centre = o.div(i.centre, i.mass)), i
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(4)
        ;(function () {
          ;(e._motionWakeThreshold = 0.18),
            (e._motionSleepThreshold = 0.08),
            (e._minBias = 0.9),
            (e.update = function (o, r) {
              for (var v = r * r * r, s = 0; s < o.length; s++) {
                var f = o[s],
                  n = f.speed * f.speed + f.angularSpeed * f.angularSpeed
                if (f.force.x !== 0 || f.force.y !== 0) {
                  e.set(f, !1)
                  continue
                }
                var t = Math.min(f.motion, n),
                  i = Math.max(f.motion, n)
                ;(f.motion = e._minBias * t + (1 - e._minBias) * i),
                  f.sleepThreshold > 0 && f.motion < e._motionSleepThreshold * v
                    ? ((f.sleepCounter += 1),
                      f.sleepCounter >= f.sleepThreshold && e.set(f, !0))
                    : f.sleepCounter > 0 && (f.sleepCounter -= 1)
              }
            }),
            (e.afterCollisions = function (o, r) {
              for (var v = r * r * r, s = 0; s < o.length; s++) {
                var f = o[s]
                if (f.isActive) {
                  var n = f.collision,
                    t = n.bodyA.parent,
                    i = n.bodyB.parent
                  if (
                    !(
                      (t.isSleeping && i.isSleeping) ||
                      t.isStatic ||
                      i.isStatic
                    ) &&
                    (t.isSleeping || i.isSleeping)
                  ) {
                    var a = t.isSleeping && !t.isStatic ? t : i,
                      c = a === t ? i : t
                    !a.isStatic &&
                      c.motion > e._motionWakeThreshold * v &&
                      e.set(a, !1)
                  }
                }
              }
            }),
            (e.set = function (o, r) {
              var v = o.isSleeping
              r
                ? ((o.isSleeping = !0),
                  (o.sleepCounter = o.sleepThreshold),
                  (o.positionImpulse.x = 0),
                  (o.positionImpulse.y = 0),
                  (o.positionPrev.x = o.position.x),
                  (o.positionPrev.y = o.position.y),
                  (o.anglePrev = o.angle),
                  (o.speed = 0),
                  (o.angularSpeed = 0),
                  (o.motion = 0),
                  v || l.trigger(o, 'sleepStart'))
                : ((o.isSleeping = !1),
                  (o.sleepCounter = 0),
                  v && l.trigger(o, 'sleepEnd'))
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(3),
          o = m(9)
        ;(function () {
          var r = [],
            v = { overlap: 0, axis: null },
            s = { overlap: 0, axis: null }
          ;(e.create = function (f, n) {
            return {
              pair: null,
              collided: !1,
              bodyA: f,
              bodyB: n,
              parentA: f.parent,
              parentB: n.parent,
              depth: 0,
              normal: { x: 0, y: 0 },
              tangent: { x: 0, y: 0 },
              penetration: { x: 0, y: 0 },
              supports: [],
            }
          }),
            (e.collides = function (f, n, t) {
              if (
                (e._overlapAxes(v, f.vertices, n.vertices, f.axes),
                v.overlap <= 0 ||
                  (e._overlapAxes(s, n.vertices, f.vertices, n.axes),
                  s.overlap <= 0))
              )
                return null
              var i = t && t.table[o.id(f, n)],
                a
              i
                ? (a = i.collision)
                : ((a = e.create(f, n)),
                  (a.collided = !0),
                  (a.bodyA = f.id < n.id ? f : n),
                  (a.bodyB = f.id < n.id ? n : f),
                  (a.parentA = a.bodyA.parent),
                  (a.parentB = a.bodyB.parent)),
                (f = a.bodyA),
                (n = a.bodyB)
              var c
              v.overlap < s.overlap ? (c = v) : (c = s)
              var h = a.normal,
                C = a.supports,
                P = c.axis,
                u = P.x,
                g = P.y
              u * (n.position.x - f.position.x) +
                g * (n.position.y - f.position.y) <
              0
                ? ((h.x = u), (h.y = g))
                : ((h.x = -u), (h.y = -g)),
                (a.tangent.x = -h.y),
                (a.tangent.y = h.x),
                (a.depth = c.overlap),
                (a.penetration.x = h.x * a.depth),
                (a.penetration.y = h.y * a.depth)
              var p = e._findSupports(f, n, h, 1),
                x = 0
              if (
                (l.contains(f.vertices, p[0]) && (C[x++] = p[0]),
                l.contains(f.vertices, p[1]) && (C[x++] = p[1]),
                x < 2)
              ) {
                var S = e._findSupports(n, f, h, -1)
                l.contains(n.vertices, S[0]) && (C[x++] = S[0]),
                  x < 2 && l.contains(n.vertices, S[1]) && (C[x++] = S[1])
              }
              return x === 0 && (C[x++] = p[0]), (C.length = x), a
            }),
            (e._overlapAxes = function (f, n, t, i) {
              var a = n.length,
                c = t.length,
                h = n[0].x,
                C = n[0].y,
                P = t[0].x,
                u = t[0].y,
                g = i.length,
                p = Number.MAX_VALUE,
                x = 0,
                S,
                y,
                w,
                d,
                M,
                I
              for (M = 0; M < g; M++) {
                var A = i[M],
                  B = A.x,
                  E = A.y,
                  L = h * B + C * E,
                  D = P * B + u * E,
                  F = L,
                  V = D
                for (I = 1; I < a; I += 1)
                  (d = n[I].x * B + n[I].y * E),
                    d > F ? (F = d) : d < L && (L = d)
                for (I = 1; I < c; I += 1)
                  (d = t[I].x * B + t[I].y * E),
                    d > V ? (V = d) : d < D && (D = d)
                if (
                  ((y = F - D),
                  (w = V - L),
                  (S = y < w ? y : w),
                  S < p && ((p = S), (x = M), S <= 0))
                )
                  break
              }
              ;(f.axis = i[x]), (f.overlap = p)
            }),
            (e._projectToAxis = function (f, n, t) {
              for (
                var i = n[0].x * t.x + n[0].y * t.y, a = i, c = 1;
                c < n.length;
                c += 1
              ) {
                var h = n[c].x * t.x + n[c].y * t.y
                h > a ? (a = h) : h < i && (i = h)
              }
              ;(f.min = i), (f.max = a)
            }),
            (e._findSupports = function (f, n, t, i) {
              var a = n.vertices,
                c = a.length,
                h = f.position.x,
                C = f.position.y,
                P = t.x * i,
                u = t.y * i,
                g = Number.MAX_VALUE,
                p,
                x,
                S,
                y,
                w
              for (w = 0; w < c; w += 1)
                (x = a[w]),
                  (y = P * (h - x.x) + u * (C - x.y)),
                  y < g && ((g = y), (p = x))
              return (
                (S = a[(c + p.index - 1) % c]),
                (g = P * (h - S.x) + u * (C - S.y)),
                (x = a[(p.index + 1) % c]),
                P * (h - x.x) + u * (C - x.y) < g
                  ? ((r[0] = p), (r[1] = x), r)
                  : ((r[0] = p), (r[1] = S), r)
              )
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(17)
        ;(function () {
          ;(e.create = function (o, r) {
            var v = o.bodyA,
              s = o.bodyB,
              f = {
                id: e.id(v, s),
                bodyA: v,
                bodyB: s,
                collision: o,
                contacts: [],
                activeContacts: [],
                separation: 0,
                isActive: !0,
                confirmedActive: !0,
                isSensor: v.isSensor || s.isSensor,
                timeCreated: r,
                timeUpdated: r,
                inverseMass: 0,
                friction: 0,
                frictionStatic: 0,
                restitution: 0,
                slop: 0,
              }
            return e.update(f, o, r), f
          }),
            (e.update = function (o, r, v) {
              var s = o.contacts,
                f = r.supports,
                n = o.activeContacts,
                t = r.parentA,
                i = r.parentB,
                a = t.vertices.length
              ;(o.isActive = !0),
                (o.timeUpdated = v),
                (o.collision = r),
                (o.separation = r.depth),
                (o.inverseMass = t.inverseMass + i.inverseMass),
                (o.friction =
                  t.friction < i.friction ? t.friction : i.friction),
                (o.frictionStatic =
                  t.frictionStatic > i.frictionStatic
                    ? t.frictionStatic
                    : i.frictionStatic),
                (o.restitution =
                  t.restitution > i.restitution
                    ? t.restitution
                    : i.restitution),
                (o.slop = t.slop > i.slop ? t.slop : i.slop),
                (r.pair = o),
                (n.length = 0)
              for (var c = 0; c < f.length; c++) {
                var h = f[c],
                  C = h.body === t ? h.index : a + h.index,
                  P = s[C]
                P ? n.push(P) : n.push((s[C] = l.create(h)))
              }
            }),
            (e.setActive = function (o, r, v) {
              r
                ? ((o.isActive = !0), (o.timeUpdated = v))
                : ((o.isActive = !1), (o.activeContacts.length = 0))
            }),
            (e.id = function (o, r) {
              return o.id < r.id
                ? 'A' + o.id + 'B' + r.id
                : 'A' + r.id + 'B' + o.id
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(3),
          o = m(2),
          r = m(7),
          v = m(1),
          s = m(11),
          f = m(0)
        ;(function () {
          ;(e._warming = 0.4),
            (e._torqueDampen = 1),
            (e._minLength = 1e-6),
            (e.create = function (n) {
              var t = n
              t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }),
                t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 })
              var i = t.bodyA ? o.add(t.bodyA.position, t.pointA) : t.pointA,
                a = t.bodyB ? o.add(t.bodyB.position, t.pointB) : t.pointB,
                c = o.magnitude(o.sub(i, a))
              ;(t.length = typeof t.length < 'u' ? t.length : c),
                (t.id = t.id || f.nextId()),
                (t.label = t.label || 'Constraint'),
                (t.type = 'constraint'),
                (t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7)),
                (t.damping = t.damping || 0),
                (t.angularStiffness = t.angularStiffness || 0),
                (t.angleA = t.bodyA ? t.bodyA.angle : t.angleA),
                (t.angleB = t.bodyB ? t.bodyB.angle : t.angleB),
                (t.plugin = {})
              var h = {
                visible: !0,
                lineWidth: 2,
                strokeStyle: '#ffffff',
                type: 'line',
                anchors: !0,
              }
              return (
                t.length === 0 && t.stiffness > 0.1
                  ? ((h.type = 'pin'), (h.anchors = !1))
                  : t.stiffness < 0.9 && (h.type = 'spring'),
                (t.render = f.extend(h, t.render)),
                t
              )
            }),
            (e.preSolveAll = function (n) {
              for (var t = 0; t < n.length; t += 1) {
                var i = n[t],
                  a = i.constraintImpulse
                i.isStatic ||
                  (a.x === 0 && a.y === 0 && a.angle === 0) ||
                  ((i.position.x += a.x),
                  (i.position.y += a.y),
                  (i.angle += a.angle))
              }
            }),
            (e.solveAll = function (n, t) {
              for (var i = 0; i < n.length; i += 1) {
                var a = n[i],
                  c = !a.bodyA || (a.bodyA && a.bodyA.isStatic),
                  h = !a.bodyB || (a.bodyB && a.bodyB.isStatic)
                ;(c || h) && e.solve(n[i], t)
              }
              for (i = 0; i < n.length; i += 1)
                (a = n[i]),
                  (c = !a.bodyA || (a.bodyA && a.bodyA.isStatic)),
                  (h = !a.bodyB || (a.bodyB && a.bodyB.isStatic)),
                  !c && !h && e.solve(n[i], t)
            }),
            (e.solve = function (n, t) {
              var i = n.bodyA,
                a = n.bodyB,
                c = n.pointA,
                h = n.pointB
              if (!(!i && !a)) {
                i &&
                  !i.isStatic &&
                  (o.rotate(c, i.angle - n.angleA, c), (n.angleA = i.angle)),
                  a &&
                    !a.isStatic &&
                    (o.rotate(h, a.angle - n.angleB, h), (n.angleB = a.angle))
                var C = c,
                  P = h
                if (
                  (i && (C = o.add(i.position, c)),
                  a && (P = o.add(a.position, h)),
                  !(!C || !P))
                ) {
                  var u = o.sub(C, P),
                    g = o.magnitude(u)
                  g < e._minLength && (g = e._minLength)
                  var p = (g - n.length) / g,
                    x = n.stiffness < 1 ? n.stiffness * t : n.stiffness,
                    S = o.mult(u, p * x),
                    y = (i ? i.inverseMass : 0) + (a ? a.inverseMass : 0),
                    w = (i ? i.inverseInertia : 0) + (a ? a.inverseInertia : 0),
                    d = y + w,
                    M,
                    I,
                    A,
                    B,
                    E
                  if (n.damping) {
                    var L = o.create()
                    ;(A = o.div(u, g)),
                      (E = o.sub(
                        (a && o.sub(a.position, a.positionPrev)) || L,
                        (i && o.sub(i.position, i.positionPrev)) || L
                      )),
                      (B = o.dot(A, E))
                  }
                  i &&
                    !i.isStatic &&
                    ((I = i.inverseMass / y),
                    (i.constraintImpulse.x -= S.x * I),
                    (i.constraintImpulse.y -= S.y * I),
                    (i.position.x -= S.x * I),
                    (i.position.y -= S.y * I),
                    n.damping &&
                      ((i.positionPrev.x -= n.damping * A.x * B * I),
                      (i.positionPrev.y -= n.damping * A.y * B * I)),
                    (M =
                      (o.cross(c, S) / d) *
                      e._torqueDampen *
                      i.inverseInertia *
                      (1 - n.angularStiffness)),
                    (i.constraintImpulse.angle -= M),
                    (i.angle -= M)),
                    a &&
                      !a.isStatic &&
                      ((I = a.inverseMass / y),
                      (a.constraintImpulse.x += S.x * I),
                      (a.constraintImpulse.y += S.y * I),
                      (a.position.x += S.x * I),
                      (a.position.y += S.y * I),
                      n.damping &&
                        ((a.positionPrev.x += n.damping * A.x * B * I),
                        (a.positionPrev.y += n.damping * A.y * B * I)),
                      (M =
                        (o.cross(h, S) / d) *
                        e._torqueDampen *
                        a.inverseInertia *
                        (1 - n.angularStiffness)),
                      (a.constraintImpulse.angle += M),
                      (a.angle += M))
                }
              }
            }),
            (e.postSolveAll = function (n) {
              for (var t = 0; t < n.length; t++) {
                var i = n[t],
                  a = i.constraintImpulse
                if (
                  !(i.isStatic || (a.x === 0 && a.y === 0 && a.angle === 0))
                ) {
                  r.set(i, !1)
                  for (var c = 0; c < i.parts.length; c++) {
                    var h = i.parts[c]
                    l.translate(h.vertices, a),
                      c > 0 && ((h.position.x += a.x), (h.position.y += a.y)),
                      a.angle !== 0 &&
                        (l.rotate(h.vertices, a.angle, i.position),
                        s.rotate(h.axes, a.angle),
                        c > 0 &&
                          o.rotateAbout(
                            h.position,
                            a.angle,
                            i.position,
                            h.position
                          )),
                      v.update(h.bounds, h.vertices, i.velocity)
                  }
                  ;(a.angle *= e._warming),
                    (a.x *= e._warming),
                    (a.y *= e._warming)
                }
              }
            }),
            (e.pointAWorld = function (n) {
              return {
                x: (n.bodyA ? n.bodyA.position.x : 0) + n.pointA.x,
                y: (n.bodyA ? n.bodyA.position.y : 0) + n.pointA.y,
              }
            }),
            (e.pointBWorld = function (n) {
              return {
                x: (n.bodyB ? n.bodyB.position.x : 0) + n.pointB.x,
                y: (n.bodyB ? n.bodyB.position.y : 0) + n.pointB.y,
              }
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(2),
          o = m(0)
        ;(function () {
          ;(e.fromVertices = function (r) {
            for (var v = {}, s = 0; s < r.length; s++) {
              var f = (s + 1) % r.length,
                n = l.normalise({ x: r[f].y - r[s].y, y: r[s].x - r[f].x }),
                t = n.y === 0 ? 1 / 0 : n.x / n.y
              ;(t = t.toFixed(3).toString()), (v[t] = n)
            }
            return o.values(v)
          }),
            (e.rotate = function (r, v) {
              if (v !== 0)
                for (
                  var s = Math.cos(v), f = Math.sin(v), n = 0;
                  n < r.length;
                  n++
                ) {
                  var t = r[n],
                    i
                  ;(i = t.x * s - t.y * f), (t.y = t.x * f + t.y * s), (t.x = i)
                }
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(3),
          o = m(0),
          r = m(6),
          v = m(1),
          s = m(2)
        ;(function () {
          ;(e.rectangle = function (f, n, t, i, a) {
            a = a || {}
            var c = {
              label: 'Rectangle Body',
              position: { x: f, y: n },
              vertices: l.fromPath(
                'L 0 0 L ' + t + ' 0 L ' + t + ' ' + i + ' L 0 ' + i
              ),
            }
            if (a.chamfer) {
              var h = a.chamfer
              ;(c.vertices = l.chamfer(
                c.vertices,
                h.radius,
                h.quality,
                h.qualityMin,
                h.qualityMax
              )),
                delete a.chamfer
            }
            return r.create(o.extend({}, c, a))
          }),
            (e.trapezoid = function (f, n, t, i, a, c) {
              ;(c = c || {}), (a *= 0.5)
              var h = (1 - a * 2) * t,
                C = t * a,
                P = C + h,
                u = P + C,
                g
              a < 0.5
                ? (g =
                    'L 0 0 L ' +
                    C +
                    ' ' +
                    -i +
                    ' L ' +
                    P +
                    ' ' +
                    -i +
                    ' L ' +
                    u +
                    ' 0')
                : (g = 'L 0 0 L ' + P + ' ' + -i + ' L ' + u + ' 0')
              var p = {
                label: 'Trapezoid Body',
                position: { x: f, y: n },
                vertices: l.fromPath(g),
              }
              if (c.chamfer) {
                var x = c.chamfer
                ;(p.vertices = l.chamfer(
                  p.vertices,
                  x.radius,
                  x.quality,
                  x.qualityMin,
                  x.qualityMax
                )),
                  delete c.chamfer
              }
              return r.create(o.extend({}, p, c))
            }),
            (e.circle = function (f, n, t, i, a) {
              i = i || {}
              var c = { label: 'Circle Body', circleRadius: t }
              a = a || 25
              var h = Math.ceil(Math.max(10, Math.min(a, t)))
              return (
                h % 2 === 1 && (h += 1),
                e.polygon(f, n, h, t, o.extend({}, c, i))
              )
            }),
            (e.polygon = function (f, n, t, i, a) {
              if (((a = a || {}), t < 3)) return e.circle(f, n, i, a)
              for (
                var c = (2 * Math.PI) / t, h = '', C = c * 0.5, P = 0;
                P < t;
                P += 1
              ) {
                var u = C + P * c,
                  g = Math.cos(u) * i,
                  p = Math.sin(u) * i
                h += 'L ' + g.toFixed(3) + ' ' + p.toFixed(3) + ' '
              }
              var x = {
                label: 'Polygon Body',
                position: { x: f, y: n },
                vertices: l.fromPath(h),
              }
              if (a.chamfer) {
                var S = a.chamfer
                ;(x.vertices = l.chamfer(
                  x.vertices,
                  S.radius,
                  S.quality,
                  S.qualityMin,
                  S.qualityMax
                )),
                  delete a.chamfer
              }
              return r.create(o.extend({}, x, a))
            }),
            (e.fromVertices = function (f, n, t, i, a, c, h, C) {
              var P = o.getDecomp(),
                u,
                g,
                p,
                x,
                S,
                y,
                w,
                d,
                M,
                I,
                A
              for (
                u = Boolean(P && P.quickDecomp),
                  i = i || {},
                  p = [],
                  a = typeof a < 'u' ? a : !1,
                  c = typeof c < 'u' ? c : 0.01,
                  h = typeof h < 'u' ? h : 10,
                  C = typeof C < 'u' ? C : 0.01,
                  o.isArray(t[0]) || (t = [t]),
                  I = 0;
                I < t.length;
                I += 1
              )
                if (
                  ((y = t[I]),
                  (x = l.isConvex(y)),
                  (S = !x),
                  S &&
                    !u &&
                    o.warnOnce(
                      "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                    ),
                  x || !u)
                )
                  x ? (y = l.clockwiseSort(y)) : (y = l.hull(y)),
                    p.push({ position: { x: f, y: n }, vertices: y })
                else {
                  var B = y.map(function (G) {
                    return [G.x, G.y]
                  })
                  P.makeCCW(B),
                    c !== !1 && P.removeCollinearPoints(B, c),
                    C !== !1 &&
                      P.removeDuplicatePoints &&
                      P.removeDuplicatePoints(B, C)
                  var E = P.quickDecomp(B)
                  for (w = 0; w < E.length; w++) {
                    var L = E[w],
                      D = L.map(function (G) {
                        return { x: G[0], y: G[1] }
                      })
                    ;(h > 0 && l.area(D) < h) ||
                      p.push({ position: l.centre(D), vertices: D })
                  }
                }
              for (w = 0; w < p.length; w++) p[w] = r.create(o.extend(p[w], i))
              if (a) {
                var F = 5
                for (w = 0; w < p.length; w++) {
                  var V = p[w]
                  for (d = w + 1; d < p.length; d++) {
                    var k = p[d]
                    if (v.overlaps(V.bounds, k.bounds)) {
                      var H = V.vertices,
                        O = k.vertices
                      for (M = 0; M < V.vertices.length; M++)
                        for (A = 0; A < k.vertices.length; A++) {
                          var N = s.magnitudeSquared(
                              s.sub(H[(M + 1) % H.length], O[A])
                            ),
                            W = s.magnitudeSquared(
                              s.sub(H[M], O[(A + 1) % O.length])
                            )
                          N < F &&
                            W < F &&
                            ((H[M].isInternal = !0), (O[A].isInternal = !0))
                        }
                    }
                  }
                }
              }
              return p.length > 1
                ? ((g = r.create(o.extend({ parts: p.slice(0) }, i))),
                  r.setPosition(g, { x: f, y: n }),
                  g)
                : p[0]
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(0)
        ;(function () {
          ;(e.create = function (o) {
            var r = {}
            return (
              o ||
                l.log(
                  'Mouse.create: element was undefined, defaulting to document.body',
                  'warn'
                ),
              (r.element = o || document.body),
              (r.absolute = { x: 0, y: 0 }),
              (r.position = { x: 0, y: 0 }),
              (r.mousedownPosition = { x: 0, y: 0 }),
              (r.mouseupPosition = { x: 0, y: 0 }),
              (r.offset = { x: 0, y: 0 }),
              (r.scale = { x: 1, y: 1 }),
              (r.wheelDelta = 0),
              (r.button = -1),
              (r.pixelRatio =
                parseInt(r.element.getAttribute('data-pixel-ratio'), 10) || 1),
              (r.sourceEvents = {
                mousemove: null,
                mousedown: null,
                mouseup: null,
                mousewheel: null,
              }),
              (r.mousemove = function (v) {
                var s = e._getRelativeMousePosition(v, r.element, r.pixelRatio),
                  f = v.changedTouches
                f && ((r.button = 0), v.preventDefault()),
                  (r.absolute.x = s.x),
                  (r.absolute.y = s.y),
                  (r.position.x = r.absolute.x * r.scale.x + r.offset.x),
                  (r.position.y = r.absolute.y * r.scale.y + r.offset.y),
                  (r.sourceEvents.mousemove = v)
              }),
              (r.mousedown = function (v) {
                var s = e._getRelativeMousePosition(v, r.element, r.pixelRatio),
                  f = v.changedTouches
                f
                  ? ((r.button = 0), v.preventDefault())
                  : (r.button = v.button),
                  (r.absolute.x = s.x),
                  (r.absolute.y = s.y),
                  (r.position.x = r.absolute.x * r.scale.x + r.offset.x),
                  (r.position.y = r.absolute.y * r.scale.y + r.offset.y),
                  (r.mousedownPosition.x = r.position.x),
                  (r.mousedownPosition.y = r.position.y),
                  (r.sourceEvents.mousedown = v)
              }),
              (r.mouseup = function (v) {
                var s = e._getRelativeMousePosition(v, r.element, r.pixelRatio),
                  f = v.changedTouches
                f && v.preventDefault(),
                  (r.button = -1),
                  (r.absolute.x = s.x),
                  (r.absolute.y = s.y),
                  (r.position.x = r.absolute.x * r.scale.x + r.offset.x),
                  (r.position.y = r.absolute.y * r.scale.y + r.offset.y),
                  (r.mouseupPosition.x = r.position.x),
                  (r.mouseupPosition.y = r.position.y),
                  (r.sourceEvents.mouseup = v)
              }),
              (r.mousewheel = function (v) {
                ;(r.wheelDelta = Math.max(
                  -1,
                  Math.min(1, v.wheelDelta || -v.detail)
                )),
                  v.preventDefault()
              }),
              e.setElement(r, r.element),
              r
            )
          }),
            (e.setElement = function (o, r) {
              ;(o.element = r),
                r.addEventListener('mousemove', o.mousemove),
                r.addEventListener('mousedown', o.mousedown),
                r.addEventListener('mouseup', o.mouseup),
                r.addEventListener('mousewheel', o.mousewheel),
                r.addEventListener('DOMMouseScroll', o.mousewheel),
                r.addEventListener('touchmove', o.mousemove),
                r.addEventListener('touchstart', o.mousedown),
                r.addEventListener('touchend', o.mouseup)
            }),
            (e.clearSourceEvents = function (o) {
              ;(o.sourceEvents.mousemove = null),
                (o.sourceEvents.mousedown = null),
                (o.sourceEvents.mouseup = null),
                (o.sourceEvents.mousewheel = null),
                (o.wheelDelta = 0)
            }),
            (e.setOffset = function (o, r) {
              ;(o.offset.x = r.x),
                (o.offset.y = r.y),
                (o.position.x = o.absolute.x * o.scale.x + o.offset.x),
                (o.position.y = o.absolute.y * o.scale.y + o.offset.y)
            }),
            (e.setScale = function (o, r) {
              ;(o.scale.x = r.x),
                (o.scale.y = r.y),
                (o.position.x = o.absolute.x * o.scale.x + o.offset.x),
                (o.position.y = o.absolute.y * o.scale.y + o.offset.y)
            }),
            (e._getRelativeMousePosition = function (o, r, v) {
              var s = r.getBoundingClientRect(),
                f =
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body,
                n =
                  window.pageXOffset !== void 0
                    ? window.pageXOffset
                    : f.scrollLeft,
                t =
                  window.pageYOffset !== void 0
                    ? window.pageYOffset
                    : f.scrollTop,
                i = o.changedTouches,
                a,
                c
              return (
                i
                  ? ((a = i[0].pageX - s.left - n),
                    (c = i[0].pageY - s.top - t))
                  : ((a = o.pageX - s.left - n), (c = o.pageY - s.top - t)),
                {
                  x: a / ((r.clientWidth / (r.width || r.clientWidth)) * v),
                  y: c / ((r.clientHeight / (r.height || r.clientHeight)) * v),
                }
              )
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(0),
          o = m(8)
        ;(function () {
          ;(e.create = function (r) {
            var v = { bodies: [], pairs: null }
            return l.extend(v, r)
          }),
            (e.setBodies = function (r, v) {
              r.bodies = v.slice(0)
            }),
            (e.clear = function (r) {
              r.bodies = []
            }),
            (e.collisions = function (r) {
              var v = [],
                s = r.pairs,
                f = r.bodies,
                n = f.length,
                t = e.canCollide,
                i = o.collides,
                a,
                c
              for (f.sort(e._compareBoundsX), a = 0; a < n; a++) {
                var h = f[a],
                  C = h.bounds,
                  P = h.bounds.max.x,
                  u = h.bounds.max.y,
                  g = h.bounds.min.y,
                  p = h.isStatic || h.isSleeping,
                  x = h.parts.length,
                  S = x === 1
                for (c = a + 1; c < n; c++) {
                  var y = f[c],
                    w = y.bounds
                  if (w.min.x > P) break
                  if (
                    !(u < w.min.y || g > w.max.y) &&
                    !(p && (y.isStatic || y.isSleeping)) &&
                    t(h.collisionFilter, y.collisionFilter)
                  ) {
                    var d = y.parts.length
                    if (S && d === 1) {
                      var M = i(h, y, s)
                      M && v.push(M)
                    } else
                      for (
                        var I = x > 1 ? 1 : 0, A = d > 1 ? 1 : 0, B = I;
                        B < x;
                        B++
                      )
                        for (
                          var E = h.parts[B], C = E.bounds, L = A;
                          L < d;
                          L++
                        ) {
                          var D = y.parts[L],
                            w = D.bounds
                          if (
                            !(
                              C.min.x > w.max.x ||
                              C.max.x < w.min.x ||
                              C.max.y < w.min.y ||
                              C.min.y > w.max.y
                            )
                          ) {
                            var M = i(E, D, s)
                            M && v.push(M)
                          }
                        }
                  }
                }
              }
              return v
            }),
            (e.canCollide = function (r, v) {
              return r.group === v.group && r.group !== 0
                ? r.group > 0
                : (r.mask & v.category) !== 0 && (v.mask & r.category) !== 0
            }),
            (e._compareBoundsX = function (r, v) {
              return r.bounds.min.x - v.bounds.min.x
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(0)
        ;(function () {
          ;(e._registry = {}),
            (e.register = function (o) {
              if (
                (e.isPlugin(o) ||
                  l.warn(
                    'Plugin.register:',
                    e.toString(o),
                    'does not implement all required fields.'
                  ),
                o.name in e._registry)
              ) {
                var r = e._registry[o.name],
                  v = e.versionParse(o.version).number,
                  s = e.versionParse(r.version).number
                v > s
                  ? (l.warn(
                      'Plugin.register:',
                      e.toString(r),
                      'was upgraded to',
                      e.toString(o)
                    ),
                    (e._registry[o.name] = o))
                  : v < s
                  ? l.warn(
                      'Plugin.register:',
                      e.toString(r),
                      'can not be downgraded to',
                      e.toString(o)
                    )
                  : o !== r &&
                    l.warn(
                      'Plugin.register:',
                      e.toString(o),
                      'is already registered to different plugin object'
                    )
              } else e._registry[o.name] = o
              return o
            }),
            (e.resolve = function (o) {
              return e._registry[e.dependencyParse(o).name]
            }),
            (e.toString = function (o) {
              return typeof o == 'string'
                ? o
                : (o.name || 'anonymous') +
                    '@' +
                    (o.version || o.range || '0.0.0')
            }),
            (e.isPlugin = function (o) {
              return o && o.name && o.version && o.install
            }),
            (e.isUsed = function (o, r) {
              return o.used.indexOf(r) > -1
            }),
            (e.isFor = function (o, r) {
              var v = o.for && e.dependencyParse(o.for)
              return (
                !o.for ||
                (r.name === v.name && e.versionSatisfies(r.version, v.range))
              )
            }),
            (e.use = function (o, r) {
              if (
                ((o.uses = (o.uses || []).concat(r || [])), o.uses.length === 0)
              ) {
                l.warn(
                  'Plugin.use:',
                  e.toString(o),
                  'does not specify any dependencies to install.'
                )
                return
              }
              for (
                var v = e.dependencies(o),
                  s = l.topologicalSort(v),
                  f = [],
                  n = 0;
                n < s.length;
                n += 1
              )
                if (s[n] !== o.name) {
                  var t = e.resolve(s[n])
                  if (!t) {
                    f.push('❌ ' + s[n])
                    continue
                  }
                  e.isUsed(o, t.name) ||
                    (e.isFor(t, o) ||
                      (l.warn(
                        'Plugin.use:',
                        e.toString(t),
                        'is for',
                        t.for,
                        'but installed on',
                        e.toString(o) + '.'
                      ),
                      (t._warned = !0)),
                    t.install
                      ? t.install(o)
                      : (l.warn(
                          'Plugin.use:',
                          e.toString(t),
                          'does not specify an install function.'
                        ),
                        (t._warned = !0)),
                    t._warned
                      ? (f.push('🔶 ' + e.toString(t)), delete t._warned)
                      : f.push('✅ ' + e.toString(t)),
                    o.used.push(t.name))
                }
              f.length > 0 && l.info(f.join('  '))
            }),
            (e.dependencies = function (o, r) {
              var v = e.dependencyParse(o),
                s = v.name
              if (((r = r || {}), !(s in r))) {
                ;(o = e.resolve(o) || o),
                  (r[s] = l.map(o.uses || [], function (n) {
                    e.isPlugin(n) && e.register(n)
                    var t = e.dependencyParse(n),
                      i = e.resolve(n)
                    return (
                      i && !e.versionSatisfies(i.version, t.range)
                        ? (l.warn(
                            'Plugin.dependencies:',
                            e.toString(i),
                            'does not satisfy',
                            e.toString(t),
                            'used by',
                            e.toString(v) + '.'
                          ),
                          (i._warned = !0),
                          (o._warned = !0))
                        : i ||
                          (l.warn(
                            'Plugin.dependencies:',
                            e.toString(n),
                            'used by',
                            e.toString(v),
                            'could not be resolved.'
                          ),
                          (o._warned = !0)),
                      t.name
                    )
                  }))
                for (var f = 0; f < r[s].length; f += 1)
                  e.dependencies(r[s][f], r)
                return r
              }
            }),
            (e.dependencyParse = function (o) {
              if (l.isString(o)) {
                var r = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/
                return (
                  r.test(o) ||
                    l.warn(
                      'Plugin.dependencyParse:',
                      o,
                      'is not a valid dependency string.'
                    ),
                  { name: o.split('@')[0], range: o.split('@')[1] || '*' }
                )
              }
              return { name: o.name, range: o.range || o.version }
            }),
            (e.versionParse = function (o) {
              var r =
                /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/
              r.test(o) ||
                l.warn(
                  'Plugin.versionParse:',
                  o,
                  'is not a valid version or range.'
                )
              var v = r.exec(o),
                s = Number(v[4]),
                f = Number(v[5]),
                n = Number(v[6])
              return {
                isRange: Boolean(v[1] || v[2]),
                version: v[3],
                range: o,
                operator: v[1] || v[2] || '',
                major: s,
                minor: f,
                patch: n,
                parts: [s, f, n],
                prerelease: v[7],
                number: s * 1e8 + f * 1e4 + n,
              }
            }),
            (e.versionSatisfies = function (o, r) {
              r = r || '*'
              var v = e.versionParse(r),
                s = e.versionParse(o)
              if (v.isRange) {
                if (v.operator === '*' || o === '*') return !0
                if (v.operator === '>') return s.number > v.number
                if (v.operator === '>=') return s.number >= v.number
                if (v.operator === '~')
                  return (
                    s.major === v.major &&
                    s.minor === v.minor &&
                    s.patch >= v.patch
                  )
                if (v.operator === '^')
                  return v.major > 0
                    ? s.major === v.major && s.number >= v.number
                    : v.minor > 0
                    ? s.minor === v.minor && s.patch >= v.patch
                    : s.patch === v.patch
              }
              return o === r || o === '*'
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(0),
          o = m(5),
          r = m(1),
          v = m(4),
          s = m(2),
          f = m(13)
        ;(function () {
          var n, t
          typeof window < 'u' &&
            ((n =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (u) {
                window.setTimeout(function () {
                  u(l.now())
                }, 1e3 / 60)
              }),
            (t =
              window.cancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.msCancelAnimationFrame)),
            (e._goodFps = 30),
            (e._goodDelta = 1e3 / 60),
            (e.create = function (u) {
              var g = {
                  controller: e,
                  engine: null,
                  element: null,
                  canvas: null,
                  mouse: null,
                  frameRequestId: null,
                  timing: {
                    historySize: 60,
                    delta: 0,
                    deltaHistory: [],
                    lastTime: 0,
                    lastTimestamp: 0,
                    lastElapsed: 0,
                    timestampElapsed: 0,
                    timestampElapsedHistory: [],
                    engineDeltaHistory: [],
                    engineElapsedHistory: [],
                    elapsedHistory: [],
                  },
                  options: {
                    width: 800,
                    height: 600,
                    pixelRatio: 1,
                    background: '#14151f',
                    wireframeBackground: '#14151f',
                    hasBounds: !!u.bounds,
                    enabled: !0,
                    wireframes: !0,
                    showSleeping: !0,
                    showDebug: !1,
                    showStats: !1,
                    showPerformance: !1,
                    showBounds: !1,
                    showVelocity: !1,
                    showCollisions: !1,
                    showSeparations: !1,
                    showAxes: !1,
                    showPositions: !1,
                    showAngleIndicator: !1,
                    showIds: !1,
                    showVertexNumbers: !1,
                    showConvexHulls: !1,
                    showInternalEdges: !1,
                    showMousePosition: !1,
                  },
                },
                p = l.extend(g, u)
              return (
                p.canvas &&
                  ((p.canvas.width = p.options.width || p.canvas.width),
                  (p.canvas.height = p.options.height || p.canvas.height)),
                (p.mouse = u.mouse),
                (p.engine = u.engine),
                (p.canvas = p.canvas || c(p.options.width, p.options.height)),
                (p.context = p.canvas.getContext('2d')),
                (p.textures = {}),
                (p.bounds = p.bounds || {
                  min: { x: 0, y: 0 },
                  max: { x: p.canvas.width, y: p.canvas.height },
                }),
                (p.options.showBroadphase = !1),
                p.options.pixelRatio !== 1 &&
                  e.setPixelRatio(p, p.options.pixelRatio),
                l.isElement(p.element)
                  ? p.element.appendChild(p.canvas)
                  : p.canvas.parentNode ||
                    l.log(
                      'Render.create: options.element was undefined, render.canvas was created but not appended',
                      'warn'
                    ),
                p
              )
            }),
            (e.run = function (u) {
              ;(function g(p) {
                ;(u.frameRequestId = n(g)),
                  i(u, p),
                  e.world(u, p),
                  (u.options.showStats || u.options.showDebug) &&
                    e.stats(u, u.context, p),
                  (u.options.showPerformance || u.options.showDebug) &&
                    e.performance(u, u.context, p)
              })()
            }),
            (e.stop = function (u) {
              t(u.frameRequestId)
            }),
            (e.setPixelRatio = function (u, g) {
              var p = u.options,
                x = u.canvas
              g === 'auto' && (g = h(x)),
                (p.pixelRatio = g),
                x.setAttribute('data-pixel-ratio', g),
                (x.width = p.width * g),
                (x.height = p.height * g),
                (x.style.width = p.width + 'px'),
                (x.style.height = p.height + 'px')
            }),
            (e.lookAt = function (u, g, p, x) {
              ;(x = typeof x < 'u' ? x : !0),
                (g = l.isArray(g) ? g : [g]),
                (p = p || { x: 0, y: 0 })
              for (
                var S = {
                    min: { x: 1 / 0, y: 1 / 0 },
                    max: { x: -1 / 0, y: -1 / 0 },
                  },
                  y = 0;
                y < g.length;
                y += 1
              ) {
                var w = g[y],
                  d = w.bounds ? w.bounds.min : w.min || w.position || w,
                  M = w.bounds ? w.bounds.max : w.max || w.position || w
                d &&
                  M &&
                  (d.x < S.min.x && (S.min.x = d.x),
                  M.x > S.max.x && (S.max.x = M.x),
                  d.y < S.min.y && (S.min.y = d.y),
                  M.y > S.max.y && (S.max.y = M.y))
              }
              var I = S.max.x - S.min.x + 2 * p.x,
                A = S.max.y - S.min.y + 2 * p.y,
                B = u.canvas.height,
                E = u.canvas.width,
                L = E / B,
                D = I / A,
                F = 1,
                V = 1
              D > L ? (V = D / L) : (F = L / D),
                (u.options.hasBounds = !0),
                (u.bounds.min.x = S.min.x),
                (u.bounds.max.x = S.min.x + I * F),
                (u.bounds.min.y = S.min.y),
                (u.bounds.max.y = S.min.y + A * V),
                x &&
                  ((u.bounds.min.x += I * 0.5 - I * F * 0.5),
                  (u.bounds.max.x += I * 0.5 - I * F * 0.5),
                  (u.bounds.min.y += A * 0.5 - A * V * 0.5),
                  (u.bounds.max.y += A * 0.5 - A * V * 0.5)),
                (u.bounds.min.x -= p.x),
                (u.bounds.max.x -= p.x),
                (u.bounds.min.y -= p.y),
                (u.bounds.max.y -= p.y),
                u.mouse &&
                  (f.setScale(u.mouse, {
                    x: (u.bounds.max.x - u.bounds.min.x) / u.canvas.width,
                    y: (u.bounds.max.y - u.bounds.min.y) / u.canvas.height,
                  }),
                  f.setOffset(u.mouse, u.bounds.min))
            }),
            (e.startViewTransform = function (u) {
              var g = u.bounds.max.x - u.bounds.min.x,
                p = u.bounds.max.y - u.bounds.min.y,
                x = g / u.options.width,
                S = p / u.options.height
              u.context.setTransform(
                u.options.pixelRatio / x,
                0,
                0,
                u.options.pixelRatio / S,
                0,
                0
              ),
                u.context.translate(-u.bounds.min.x, -u.bounds.min.y)
            }),
            (e.endViewTransform = function (u) {
              u.context.setTransform(
                u.options.pixelRatio,
                0,
                0,
                u.options.pixelRatio,
                0,
                0
              )
            }),
            (e.world = function (u, g) {
              var p = l.now(),
                x = u.engine,
                S = x.world,
                y = u.canvas,
                w = u.context,
                d = u.options,
                M = u.timing,
                I = o.allBodies(S),
                A = o.allConstraints(S),
                B = d.wireframes ? d.wireframeBackground : d.background,
                E = [],
                L = [],
                D,
                F = { timestamp: x.timing.timestamp }
              if (
                (v.trigger(u, 'beforeRender', F),
                u.currentBackground !== B && P(u, B),
                (w.globalCompositeOperation = 'source-in'),
                (w.fillStyle = 'transparent'),
                w.fillRect(0, 0, y.width, y.height),
                (w.globalCompositeOperation = 'source-over'),
                d.hasBounds)
              ) {
                for (D = 0; D < I.length; D++) {
                  var V = I[D]
                  r.overlaps(V.bounds, u.bounds) && E.push(V)
                }
                for (D = 0; D < A.length; D++) {
                  var k = A[D],
                    H = k.bodyA,
                    O = k.bodyB,
                    N = k.pointA,
                    W = k.pointB
                  H && (N = s.add(H.position, k.pointA)),
                    O && (W = s.add(O.position, k.pointB)),
                    !(!N || !W) &&
                      (r.contains(u.bounds, N) || r.contains(u.bounds, W)) &&
                      L.push(k)
                }
                e.startViewTransform(u),
                  u.mouse &&
                    (f.setScale(u.mouse, {
                      x: (u.bounds.max.x - u.bounds.min.x) / u.options.width,
                      y: (u.bounds.max.y - u.bounds.min.y) / u.options.height,
                    }),
                    f.setOffset(u.mouse, u.bounds.min))
              } else
                (L = A),
                  (E = I),
                  u.options.pixelRatio !== 1 &&
                    u.context.setTransform(
                      u.options.pixelRatio,
                      0,
                      0,
                      u.options.pixelRatio,
                      0,
                      0
                    )
              !d.wireframes || (x.enableSleeping && d.showSleeping)
                ? e.bodies(u, E, w)
                : (d.showConvexHulls && e.bodyConvexHulls(u, E, w),
                  e.bodyWireframes(u, E, w)),
                d.showBounds && e.bodyBounds(u, E, w),
                (d.showAxes || d.showAngleIndicator) && e.bodyAxes(u, E, w),
                d.showPositions && e.bodyPositions(u, E, w),
                d.showVelocity && e.bodyVelocity(u, E, w),
                d.showIds && e.bodyIds(u, E, w),
                d.showSeparations && e.separations(u, x.pairs.list, w),
                d.showCollisions && e.collisions(u, x.pairs.list, w),
                d.showVertexNumbers && e.vertexNumbers(u, E, w),
                d.showMousePosition && e.mousePosition(u, u.mouse, w),
                e.constraints(L, w),
                d.hasBounds && e.endViewTransform(u),
                v.trigger(u, 'afterRender', F),
                (M.lastElapsed = l.now() - p)
            }),
            (e.stats = function (u, g, p) {
              for (
                var x = u.engine,
                  S = x.world,
                  y = o.allBodies(S),
                  w = 0,
                  d = 55,
                  M = 44,
                  I = 0,
                  A = 0,
                  B = 0;
                B < y.length;
                B += 1
              )
                w += y[B].parts.length
              var E = {
                Part: w,
                Body: y.length,
                Cons: o.allConstraints(S).length,
                Comp: o.allComposites(S).length,
                Pair: x.pairs.list.length,
              }
              ;(g.fillStyle = '#0e0f19'),
                g.fillRect(I, A, d * 5.5, M),
                (g.font = '12px Arial'),
                (g.textBaseline = 'top'),
                (g.textAlign = 'right')
              for (var L in E) {
                var D = E[L]
                ;(g.fillStyle = '#aaa'),
                  g.fillText(L, I + d, A + 8),
                  (g.fillStyle = '#eee'),
                  g.fillText(D, I + d, A + 26),
                  (I += d)
              }
            }),
            (e.performance = function (u, g) {
              var p = u.engine,
                x = u.timing,
                S = x.deltaHistory,
                y = x.elapsedHistory,
                w = x.timestampElapsedHistory,
                d = x.engineDeltaHistory,
                M = x.engineElapsedHistory,
                I = p.timing.lastDelta,
                A = a(S),
                B = a(y),
                E = a(d),
                L = a(M),
                D = a(w),
                F = D / A || 0,
                V = 1e3 / A || 0,
                k = 4,
                H = 12,
                O = 60,
                N = 34,
                W = 10,
                G = 69
              ;(g.fillStyle = '#0e0f19'),
                g.fillRect(0, 50, H * 4 + O * 5 + 22, N),
                e.status(
                  g,
                  W,
                  G,
                  O,
                  k,
                  S.length,
                  Math.round(V) + ' fps',
                  V / e._goodFps,
                  function (U) {
                    return S[U] / A - 1
                  }
                ),
                e.status(
                  g,
                  W + H + O,
                  G,
                  O,
                  k,
                  d.length,
                  I.toFixed(2) + ' dt',
                  e._goodDelta / I,
                  function (U) {
                    return d[U] / E - 1
                  }
                ),
                e.status(
                  g,
                  W + (H + O) * 2,
                  G,
                  O,
                  k,
                  M.length,
                  L.toFixed(2) + ' ut',
                  1 - L / e._goodFps,
                  function (U) {
                    return M[U] / L - 1
                  }
                ),
                e.status(
                  g,
                  W + (H + O) * 3,
                  G,
                  O,
                  k,
                  y.length,
                  B.toFixed(2) + ' rt',
                  1 - B / e._goodFps,
                  function (U) {
                    return y[U] / B - 1
                  }
                ),
                e.status(
                  g,
                  W + (H + O) * 4,
                  G,
                  O,
                  k,
                  w.length,
                  F.toFixed(2) + ' x',
                  F * F * F,
                  function (U) {
                    return (w[U] / S[U] / F || 0) - 1
                  }
                )
            }),
            (e.status = function (u, g, p, x, S, y, w, d, M) {
              ;(u.strokeStyle = '#888'),
                (u.fillStyle = '#444'),
                (u.lineWidth = 1),
                u.fillRect(g, p + 7, x, 1),
                u.beginPath(),
                u.moveTo(g, p + 7 - S * l.clamp(0.4 * M(0), -2, 2))
              for (var I = 0; I < x; I += 1)
                u.lineTo(
                  g + I,
                  p + 7 - (I < y ? S * l.clamp(0.4 * M(I), -2, 2) : 0)
                )
              u.stroke(),
                (u.fillStyle =
                  'hsl(' + l.clamp(25 + 95 * d, 0, 120) + ',100%,60%)'),
                u.fillRect(g, p - 7, 4, 4),
                (u.font = '12px Arial'),
                (u.textBaseline = 'middle'),
                (u.textAlign = 'right'),
                (u.fillStyle = '#eee'),
                u.fillText(w, g + x, p - 5)
            }),
            (e.constraints = function (u, g) {
              for (var p = g, x = 0; x < u.length; x++) {
                var S = u[x]
                if (!(!S.render.visible || !S.pointA || !S.pointB)) {
                  var y = S.bodyA,
                    w = S.bodyB,
                    d,
                    M
                  if (
                    (y ? (d = s.add(y.position, S.pointA)) : (d = S.pointA),
                    S.render.type === 'pin')
                  )
                    p.beginPath(),
                      p.arc(d.x, d.y, 3, 0, 2 * Math.PI),
                      p.closePath()
                  else {
                    if (
                      (w ? (M = s.add(w.position, S.pointB)) : (M = S.pointB),
                      p.beginPath(),
                      p.moveTo(d.x, d.y),
                      S.render.type === 'spring')
                    )
                      for (
                        var I = s.sub(M, d),
                          A = s.perp(s.normalise(I)),
                          B = Math.ceil(l.clamp(S.length / 5, 12, 20)),
                          E,
                          L = 1;
                        L < B;
                        L += 1
                      )
                        (E = L % 2 === 0 ? 1 : -1),
                          p.lineTo(
                            d.x + I.x * (L / B) + A.x * E * 4,
                            d.y + I.y * (L / B) + A.y * E * 4
                          )
                    p.lineTo(M.x, M.y)
                  }
                  S.render.lineWidth &&
                    ((p.lineWidth = S.render.lineWidth),
                    (p.strokeStyle = S.render.strokeStyle),
                    p.stroke()),
                    S.render.anchors &&
                      ((p.fillStyle = S.render.strokeStyle),
                      p.beginPath(),
                      p.arc(d.x, d.y, 3, 0, 2 * Math.PI),
                      p.arc(M.x, M.y, 3, 0, 2 * Math.PI),
                      p.closePath(),
                      p.fill())
                }
              }
            }),
            (e.bodies = function (u, g, p) {
              var x = p
              u.engine
              var S = u.options,
                y = S.showInternalEdges || !S.wireframes,
                w,
                d,
                M,
                I
              for (M = 0; M < g.length; M++)
                if (((w = g[M]), !!w.render.visible)) {
                  for (I = w.parts.length > 1 ? 1 : 0; I < w.parts.length; I++)
                    if (((d = w.parts[I]), !!d.render.visible)) {
                      if (
                        (S.showSleeping && w.isSleeping
                          ? (x.globalAlpha = 0.5 * d.render.opacity)
                          : d.render.opacity !== 1 &&
                            (x.globalAlpha = d.render.opacity),
                        d.render.sprite &&
                          d.render.sprite.texture &&
                          !S.wireframes)
                      ) {
                        var A = d.render.sprite,
                          B = C(u, A.texture)
                        x.translate(d.position.x, d.position.y),
                          x.rotate(d.angle),
                          x.drawImage(
                            B,
                            B.width * -A.xOffset * A.xScale,
                            B.height * -A.yOffset * A.yScale,
                            B.width * A.xScale,
                            B.height * A.yScale
                          ),
                          x.rotate(-d.angle),
                          x.translate(-d.position.x, -d.position.y)
                      } else {
                        if (d.circleRadius)
                          x.beginPath(),
                            x.arc(
                              d.position.x,
                              d.position.y,
                              d.circleRadius,
                              0,
                              2 * Math.PI
                            )
                        else {
                          x.beginPath(),
                            x.moveTo(d.vertices[0].x, d.vertices[0].y)
                          for (var E = 1; E < d.vertices.length; E++)
                            !d.vertices[E - 1].isInternal || y
                              ? x.lineTo(d.vertices[E].x, d.vertices[E].y)
                              : x.moveTo(d.vertices[E].x, d.vertices[E].y),
                              d.vertices[E].isInternal &&
                                !y &&
                                x.moveTo(
                                  d.vertices[(E + 1) % d.vertices.length].x,
                                  d.vertices[(E + 1) % d.vertices.length].y
                                )
                          x.lineTo(d.vertices[0].x, d.vertices[0].y),
                            x.closePath()
                        }
                        S.wireframes
                          ? ((x.lineWidth = 1),
                            (x.strokeStyle = '#bbb'),
                            x.stroke())
                          : ((x.fillStyle = d.render.fillStyle),
                            d.render.lineWidth &&
                              ((x.lineWidth = d.render.lineWidth),
                              (x.strokeStyle = d.render.strokeStyle),
                              x.stroke()),
                            x.fill())
                      }
                      x.globalAlpha = 1
                    }
                }
            }),
            (e.bodyWireframes = function (u, g, p) {
              var x = p,
                S = u.options.showInternalEdges,
                y,
                w,
                d,
                M,
                I
              for (x.beginPath(), d = 0; d < g.length; d++)
                if (((y = g[d]), !!y.render.visible))
                  for (
                    I = y.parts.length > 1 ? 1 : 0;
                    I < y.parts.length;
                    I++
                  ) {
                    for (
                      w = y.parts[I],
                        x.moveTo(w.vertices[0].x, w.vertices[0].y),
                        M = 1;
                      M < w.vertices.length;
                      M++
                    )
                      !w.vertices[M - 1].isInternal || S
                        ? x.lineTo(w.vertices[M].x, w.vertices[M].y)
                        : x.moveTo(w.vertices[M].x, w.vertices[M].y),
                        w.vertices[M].isInternal &&
                          !S &&
                          x.moveTo(
                            w.vertices[(M + 1) % w.vertices.length].x,
                            w.vertices[(M + 1) % w.vertices.length].y
                          )
                    x.lineTo(w.vertices[0].x, w.vertices[0].y)
                  }
              ;(x.lineWidth = 1), (x.strokeStyle = '#bbb'), x.stroke()
            }),
            (e.bodyConvexHulls = function (u, g, p) {
              var x = p,
                S,
                y,
                w
              for (x.beginPath(), y = 0; y < g.length; y++)
                if (
                  ((S = g[y]), !(!S.render.visible || S.parts.length === 1))
                ) {
                  for (
                    x.moveTo(S.vertices[0].x, S.vertices[0].y), w = 1;
                    w < S.vertices.length;
                    w++
                  )
                    x.lineTo(S.vertices[w].x, S.vertices[w].y)
                  x.lineTo(S.vertices[0].x, S.vertices[0].y)
                }
              ;(x.lineWidth = 1),
                (x.strokeStyle = 'rgba(255,255,255,0.2)'),
                x.stroke()
            }),
            (e.vertexNumbers = function (u, g, p) {
              var x = p,
                S,
                y,
                w
              for (S = 0; S < g.length; S++) {
                var d = g[S].parts
                for (w = d.length > 1 ? 1 : 0; w < d.length; w++) {
                  var M = d[w]
                  for (y = 0; y < M.vertices.length; y++)
                    (x.fillStyle = 'rgba(255,255,255,0.2)'),
                      x.fillText(
                        S + '_' + y,
                        M.position.x + (M.vertices[y].x - M.position.x) * 0.8,
                        M.position.y + (M.vertices[y].y - M.position.y) * 0.8
                      )
                }
              }
            }),
            (e.mousePosition = function (u, g, p) {
              var x = p
              ;(x.fillStyle = 'rgba(255,255,255,0.8)'),
                x.fillText(
                  g.position.x + '  ' + g.position.y,
                  g.position.x + 5,
                  g.position.y - 5
                )
            }),
            (e.bodyBounds = function (u, g, p) {
              var x = p
              u.engine
              var S = u.options
              x.beginPath()
              for (var y = 0; y < g.length; y++) {
                var w = g[y]
                if (w.render.visible)
                  for (
                    var d = g[y].parts, M = d.length > 1 ? 1 : 0;
                    M < d.length;
                    M++
                  ) {
                    var I = d[M]
                    x.rect(
                      I.bounds.min.x,
                      I.bounds.min.y,
                      I.bounds.max.x - I.bounds.min.x,
                      I.bounds.max.y - I.bounds.min.y
                    )
                  }
              }
              S.wireframes
                ? (x.strokeStyle = 'rgba(255,255,255,0.08)')
                : (x.strokeStyle = 'rgba(0,0,0,0.1)'),
                (x.lineWidth = 1),
                x.stroke()
            }),
            (e.bodyAxes = function (u, g, p) {
              var x = p
              u.engine
              var S = u.options,
                y,
                w,
                d,
                M
              for (x.beginPath(), w = 0; w < g.length; w++) {
                var I = g[w],
                  A = I.parts
                if (I.render.visible)
                  if (S.showAxes)
                    for (d = A.length > 1 ? 1 : 0; d < A.length; d++)
                      for (y = A[d], M = 0; M < y.axes.length; M++) {
                        var B = y.axes[M]
                        x.moveTo(y.position.x, y.position.y),
                          x.lineTo(
                            y.position.x + B.x * 20,
                            y.position.y + B.y * 20
                          )
                      }
                  else
                    for (d = A.length > 1 ? 1 : 0; d < A.length; d++)
                      for (y = A[d], M = 0; M < y.axes.length; M++)
                        x.moveTo(y.position.x, y.position.y),
                          x.lineTo(
                            (y.vertices[0].x +
                              y.vertices[y.vertices.length - 1].x) /
                              2,
                            (y.vertices[0].y +
                              y.vertices[y.vertices.length - 1].y) /
                              2
                          )
              }
              S.wireframes
                ? ((x.strokeStyle = 'indianred'), (x.lineWidth = 1))
                : ((x.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                  (x.globalCompositeOperation = 'overlay'),
                  (x.lineWidth = 2)),
                x.stroke(),
                (x.globalCompositeOperation = 'source-over')
            }),
            (e.bodyPositions = function (u, g, p) {
              var x = p
              u.engine
              var S = u.options,
                y,
                w,
                d,
                M
              for (x.beginPath(), d = 0; d < g.length; d++)
                if (((y = g[d]), !!y.render.visible))
                  for (M = 0; M < y.parts.length; M++)
                    (w = y.parts[M]),
                      x.arc(w.position.x, w.position.y, 3, 0, 2 * Math.PI, !1),
                      x.closePath()
              for (
                S.wireframes
                  ? (x.fillStyle = 'indianred')
                  : (x.fillStyle = 'rgba(0,0,0,0.5)'),
                  x.fill(),
                  x.beginPath(),
                  d = 0;
                d < g.length;
                d++
              )
                (y = g[d]),
                  y.render.visible &&
                    (x.arc(
                      y.positionPrev.x,
                      y.positionPrev.y,
                      2,
                      0,
                      2 * Math.PI,
                      !1
                    ),
                    x.closePath())
              ;(x.fillStyle = 'rgba(255,165,0,0.8)'), x.fill()
            }),
            (e.bodyVelocity = function (u, g, p) {
              var x = p
              x.beginPath()
              for (var S = 0; S < g.length; S++) {
                var y = g[S]
                y.render.visible &&
                  (x.moveTo(y.position.x, y.position.y),
                  x.lineTo(
                    y.position.x + (y.position.x - y.positionPrev.x) * 2,
                    y.position.y + (y.position.y - y.positionPrev.y) * 2
                  ))
              }
              ;(x.lineWidth = 3), (x.strokeStyle = 'cornflowerblue'), x.stroke()
            }),
            (e.bodyIds = function (u, g, p) {
              var x = p,
                S,
                y
              for (S = 0; S < g.length; S++)
                if (g[S].render.visible) {
                  var w = g[S].parts
                  for (y = w.length > 1 ? 1 : 0; y < w.length; y++) {
                    var d = w[y]
                    ;(x.font = '12px Arial'),
                      (x.fillStyle = 'rgba(255,255,255,0.5)'),
                      x.fillText(d.id, d.position.x + 10, d.position.y - 10)
                  }
                }
            }),
            (e.collisions = function (u, g, p) {
              var x = p,
                S = u.options,
                y,
                w,
                d,
                M
              for (x.beginPath(), d = 0; d < g.length; d++)
                if (((y = g[d]), !!y.isActive))
                  for (
                    w = y.collision, M = 0;
                    M < y.activeContacts.length;
                    M++
                  ) {
                    var I = y.activeContacts[M],
                      A = I.vertex
                    x.rect(A.x - 1.5, A.y - 1.5, 3.5, 3.5)
                  }
              for (
                S.wireframes
                  ? (x.fillStyle = 'rgba(255,255,255,0.7)')
                  : (x.fillStyle = 'orange'),
                  x.fill(),
                  x.beginPath(),
                  d = 0;
                d < g.length;
                d++
              )
                if (
                  ((y = g[d]),
                  !!y.isActive &&
                    ((w = y.collision), y.activeContacts.length > 0))
                ) {
                  var B = y.activeContacts[0].vertex.x,
                    E = y.activeContacts[0].vertex.y
                  y.activeContacts.length === 2 &&
                    ((B =
                      (y.activeContacts[0].vertex.x +
                        y.activeContacts[1].vertex.x) /
                      2),
                    (E =
                      (y.activeContacts[0].vertex.y +
                        y.activeContacts[1].vertex.y) /
                      2)),
                    w.bodyB === w.supports[0].body || w.bodyA.isStatic === !0
                      ? x.moveTo(B - w.normal.x * 8, E - w.normal.y * 8)
                      : x.moveTo(B + w.normal.x * 8, E + w.normal.y * 8),
                    x.lineTo(B, E)
                }
              S.wireframes
                ? (x.strokeStyle = 'rgba(255,165,0,0.7)')
                : (x.strokeStyle = 'orange'),
                (x.lineWidth = 1),
                x.stroke()
            }),
            (e.separations = function (u, g, p) {
              var x = p,
                S = u.options,
                y,
                w,
                d,
                M,
                I
              for (x.beginPath(), I = 0; I < g.length; I++)
                if (((y = g[I]), !!y.isActive)) {
                  ;(w = y.collision), (d = w.bodyA), (M = w.bodyB)
                  var A = 1
                  !M.isStatic && !d.isStatic && (A = 0.5),
                    M.isStatic && (A = 0),
                    x.moveTo(M.position.x, M.position.y),
                    x.lineTo(
                      M.position.x - w.penetration.x * A,
                      M.position.y - w.penetration.y * A
                    ),
                    (A = 1),
                    !M.isStatic && !d.isStatic && (A = 0.5),
                    d.isStatic && (A = 0),
                    x.moveTo(d.position.x, d.position.y),
                    x.lineTo(
                      d.position.x + w.penetration.x * A,
                      d.position.y + w.penetration.y * A
                    )
                }
              S.wireframes
                ? (x.strokeStyle = 'rgba(255,165,0,0.5)')
                : (x.strokeStyle = 'orange'),
                x.stroke()
            }),
            (e.inspector = function (u, g) {
              u.engine
              var p = u.selected,
                x = u.render,
                S = x.options,
                y
              if (S.hasBounds) {
                var w = x.bounds.max.x - x.bounds.min.x,
                  d = x.bounds.max.y - x.bounds.min.y,
                  M = w / x.options.width,
                  I = d / x.options.height
                g.scale(1 / M, 1 / I),
                  g.translate(-x.bounds.min.x, -x.bounds.min.y)
              }
              for (var A = 0; A < p.length; A++) {
                var B = p[A].data
                switch (
                  (g.translate(0.5, 0.5),
                  (g.lineWidth = 1),
                  (g.strokeStyle = 'rgba(255,165,0,0.9)'),
                  g.setLineDash([1, 2]),
                  B.type)
                ) {
                  case 'body':
                    ;(y = B.bounds),
                      g.beginPath(),
                      g.rect(
                        Math.floor(y.min.x - 3),
                        Math.floor(y.min.y - 3),
                        Math.floor(y.max.x - y.min.x + 6),
                        Math.floor(y.max.y - y.min.y + 6)
                      ),
                      g.closePath(),
                      g.stroke()
                    break
                  case 'constraint':
                    var E = B.pointA
                    B.bodyA && (E = B.pointB),
                      g.beginPath(),
                      g.arc(E.x, E.y, 10, 0, 2 * Math.PI),
                      g.closePath(),
                      g.stroke()
                    break
                }
                g.setLineDash([]), g.translate(-0.5, -0.5)
              }
              u.selectStart !== null &&
                (g.translate(0.5, 0.5),
                (g.lineWidth = 1),
                (g.strokeStyle = 'rgba(255,165,0,0.6)'),
                (g.fillStyle = 'rgba(255,165,0,0.1)'),
                (y = u.selectBounds),
                g.beginPath(),
                g.rect(
                  Math.floor(y.min.x),
                  Math.floor(y.min.y),
                  Math.floor(y.max.x - y.min.x),
                  Math.floor(y.max.y - y.min.y)
                ),
                g.closePath(),
                g.stroke(),
                g.fill(),
                g.translate(-0.5, -0.5)),
                S.hasBounds && g.setTransform(1, 0, 0, 1, 0, 0)
            })
          var i = function (u, g) {
              var p = u.engine,
                x = u.timing,
                S = x.historySize,
                y = p.timing.timestamp
              ;(x.delta = g - x.lastTime || e._goodDelta),
                (x.lastTime = g),
                (x.timestampElapsed = y - x.lastTimestamp || 0),
                (x.lastTimestamp = y),
                x.deltaHistory.unshift(x.delta),
                (x.deltaHistory.length = Math.min(x.deltaHistory.length, S)),
                x.engineDeltaHistory.unshift(p.timing.lastDelta),
                (x.engineDeltaHistory.length = Math.min(
                  x.engineDeltaHistory.length,
                  S
                )),
                x.timestampElapsedHistory.unshift(x.timestampElapsed),
                (x.timestampElapsedHistory.length = Math.min(
                  x.timestampElapsedHistory.length,
                  S
                )),
                x.engineElapsedHistory.unshift(p.timing.lastElapsed),
                (x.engineElapsedHistory.length = Math.min(
                  x.engineElapsedHistory.length,
                  S
                )),
                x.elapsedHistory.unshift(x.lastElapsed),
                (x.elapsedHistory.length = Math.min(x.elapsedHistory.length, S))
            },
            a = function (u) {
              for (var g = 0, p = 0; p < u.length; p += 1) g += u[p]
              return g / u.length || 0
            },
            c = function (u, g) {
              var p = document.createElement('canvas')
              return (
                (p.width = u),
                (p.height = g),
                (p.oncontextmenu = function () {
                  return !1
                }),
                (p.onselectstart = function () {
                  return !1
                }),
                p
              )
            },
            h = function (u) {
              var g = u.getContext('2d'),
                p = window.devicePixelRatio || 1,
                x =
                  g.webkitBackingStorePixelRatio ||
                  g.mozBackingStorePixelRatio ||
                  g.msBackingStorePixelRatio ||
                  g.oBackingStorePixelRatio ||
                  g.backingStorePixelRatio ||
                  1
              return p / x
            },
            C = function (u, g) {
              var p = u.textures[g]
              return p || ((p = u.textures[g] = new Image()), (p.src = g), p)
            },
            P = function (u, g) {
              var p = g
              ;/(jpg|gif|png)$/.test(g) && (p = 'url(' + g + ')'),
                (u.canvas.style.background = p),
                (u.canvas.style.backgroundSize = 'contain'),
                (u.currentBackground = g)
            }
        })()
      },
      function (T, R) {
        var m = {}
        ;(T.exports = m),
          (function () {
            m.create = function (e) {
              return { vertex: e, normalImpulse: 0, tangentImpulse: 0 }
            }
          })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(7),
          o = m(19),
          r = m(14),
          v = m(20),
          s = m(4),
          f = m(5),
          n = m(10),
          t = m(0),
          i = m(6)
        ;(function () {
          ;(e.create = function (a) {
            a = a || {}
            var c = {
                positionIterations: 6,
                velocityIterations: 4,
                constraintIterations: 2,
                enableSleeping: !1,
                events: [],
                plugin: {},
                gravity: { x: 0, y: 1, scale: 0.001 },
                timing: {
                  timestamp: 0,
                  timeScale: 1,
                  lastDelta: 0,
                  lastElapsed: 0,
                },
              },
              h = t.extend(c, a)
            return (
              (h.world = a.world || f.create({ label: 'World' })),
              (h.pairs = a.pairs || v.create()),
              (h.detector = a.detector || r.create()),
              (h.grid = { buckets: [] }),
              (h.world.gravity = h.gravity),
              (h.broadphase = h.grid),
              (h.metrics = {}),
              h
            )
          }),
            (e.update = function (a, c, h) {
              var C = t.now()
              ;(c = c || 1e3 / 60), (h = h || 1)
              var P = a.world,
                u = a.detector,
                g = a.pairs,
                p = a.timing,
                x = p.timestamp,
                S
              ;(p.timestamp += c * p.timeScale), (p.lastDelta = c * p.timeScale)
              var y = { timestamp: p.timestamp }
              s.trigger(a, 'beforeUpdate', y)
              var w = f.allBodies(P),
                d = f.allConstraints(P)
              for (
                P.isModified && r.setBodies(u, w),
                  P.isModified && f.setModified(P, !1, !1, !0),
                  a.enableSleeping && l.update(w, p.timeScale),
                  e._bodiesApplyGravity(w, a.gravity),
                  e._bodiesUpdate(w, c, p.timeScale, h, P.bounds),
                  n.preSolveAll(w),
                  S = 0;
                S < a.constraintIterations;
                S++
              )
                n.solveAll(d, p.timeScale)
              n.postSolveAll(w), (u.pairs = a.pairs)
              var M = r.collisions(u)
              for (
                v.update(g, M, x),
                  a.enableSleeping && l.afterCollisions(g.list, p.timeScale),
                  g.collisionStart.length > 0 &&
                    s.trigger(a, 'collisionStart', { pairs: g.collisionStart }),
                  o.preSolvePosition(g.list),
                  S = 0;
                S < a.positionIterations;
                S++
              )
                o.solvePosition(g.list, p.timeScale)
              for (
                o.postSolvePosition(w), n.preSolveAll(w), S = 0;
                S < a.constraintIterations;
                S++
              )
                n.solveAll(d, p.timeScale)
              for (
                n.postSolveAll(w), o.preSolveVelocity(g.list), S = 0;
                S < a.velocityIterations;
                S++
              )
                o.solveVelocity(g.list, p.timeScale)
              return (
                g.collisionActive.length > 0 &&
                  s.trigger(a, 'collisionActive', { pairs: g.collisionActive }),
                g.collisionEnd.length > 0 &&
                  s.trigger(a, 'collisionEnd', { pairs: g.collisionEnd }),
                e._bodiesClearForces(w),
                s.trigger(a, 'afterUpdate', y),
                (a.timing.lastElapsed = t.now() - C),
                a
              )
            }),
            (e.merge = function (a, c) {
              if ((t.extend(a, c), c.world)) {
                ;(a.world = c.world), e.clear(a)
                for (var h = f.allBodies(a.world), C = 0; C < h.length; C++) {
                  var P = h[C]
                  l.set(P, !1), (P.id = t.nextId())
                }
              }
            }),
            (e.clear = function (a) {
              v.clear(a.pairs), r.clear(a.detector)
            }),
            (e._bodiesClearForces = function (a) {
              for (var c = 0; c < a.length; c++) {
                var h = a[c]
                ;(h.force.x = 0), (h.force.y = 0), (h.torque = 0)
              }
            }),
            (e._bodiesApplyGravity = function (a, c) {
              var h = typeof c.scale < 'u' ? c.scale : 0.001
              if (!((c.x === 0 && c.y === 0) || h === 0))
                for (var C = 0; C < a.length; C++) {
                  var P = a[C]
                  P.isStatic ||
                    P.isSleeping ||
                    ((P.force.y += P.mass * c.y * h),
                    (P.force.x += P.mass * c.x * h))
                }
            }),
            (e._bodiesUpdate = function (a, c, h, C, P) {
              for (var u = 0; u < a.length; u++) {
                var g = a[u]
                g.isStatic || g.isSleeping || i.update(g, c, h, C)
              }
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(3),
          o = m(1)
        ;(function () {
          ;(e._restingThresh = 4),
            (e._restingThreshTangent = 6),
            (e._positionDampen = 0.9),
            (e._positionWarming = 0.8),
            (e._frictionNormalMultiplier = 5),
            (e.preSolvePosition = function (r) {
              var v,
                s,
                f,
                n = r.length
              for (v = 0; v < n; v++)
                (s = r[v]),
                  s.isActive &&
                    ((f = s.activeContacts.length),
                    (s.collision.parentA.totalContacts += f),
                    (s.collision.parentB.totalContacts += f))
            }),
            (e.solvePosition = function (r, v) {
              var s,
                f,
                n,
                t,
                i,
                a,
                c,
                h,
                C = e._positionDampen,
                P = r.length
              for (s = 0; s < P; s++)
                (f = r[s]),
                  !(!f.isActive || f.isSensor) &&
                    ((n = f.collision),
                    (t = n.parentA),
                    (i = n.parentB),
                    (a = n.normal),
                    (f.separation =
                      a.x *
                        (i.positionImpulse.x +
                          n.penetration.x -
                          t.positionImpulse.x) +
                      a.y *
                        (i.positionImpulse.y +
                          n.penetration.y -
                          t.positionImpulse.y)))
              for (s = 0; s < P; s++)
                (f = r[s]),
                  !(!f.isActive || f.isSensor) &&
                    ((n = f.collision),
                    (t = n.parentA),
                    (i = n.parentB),
                    (a = n.normal),
                    (h = (f.separation - f.slop) * v),
                    (t.isStatic || i.isStatic) && (h *= 2),
                    t.isStatic ||
                      t.isSleeping ||
                      ((c = C / t.totalContacts),
                      (t.positionImpulse.x += a.x * h * c),
                      (t.positionImpulse.y += a.y * h * c)),
                    i.isStatic ||
                      i.isSleeping ||
                      ((c = C / i.totalContacts),
                      (i.positionImpulse.x -= a.x * h * c),
                      (i.positionImpulse.y -= a.y * h * c)))
            }),
            (e.postSolvePosition = function (r) {
              for (
                var v = e._positionWarming,
                  s = r.length,
                  f = l.translate,
                  n = o.update,
                  t = 0;
                t < s;
                t++
              ) {
                var i = r[t],
                  a = i.positionImpulse,
                  c = a.x,
                  h = a.y,
                  C = i.velocity
                if (((i.totalContacts = 0), c !== 0 || h !== 0)) {
                  for (var P = 0; P < i.parts.length; P++) {
                    var u = i.parts[P]
                    f(u.vertices, a),
                      n(u.bounds, u.vertices, C),
                      (u.position.x += c),
                      (u.position.y += h)
                  }
                  ;(i.positionPrev.x += c),
                    (i.positionPrev.y += h),
                    c * C.x + h * C.y < 0
                      ? ((a.x = 0), (a.y = 0))
                      : ((a.x *= v), (a.y *= v))
                }
              }
            }),
            (e.preSolveVelocity = function (r) {
              var v = r.length,
                s,
                f
              for (s = 0; s < v; s++) {
                var n = r[s]
                if (!(!n.isActive || n.isSensor)) {
                  var t = n.activeContacts,
                    i = t.length,
                    a = n.collision,
                    c = a.parentA,
                    h = a.parentB,
                    C = a.normal,
                    P = a.tangent
                  for (f = 0; f < i; f++) {
                    var u = t[f],
                      g = u.vertex,
                      p = u.normalImpulse,
                      x = u.tangentImpulse
                    if (p !== 0 || x !== 0) {
                      var S = C.x * p + P.x * x,
                        y = C.y * p + P.y * x
                      c.isStatic ||
                        c.isSleeping ||
                        ((c.positionPrev.x += S * c.inverseMass),
                        (c.positionPrev.y += y * c.inverseMass),
                        (c.anglePrev +=
                          c.inverseInertia *
                          ((g.x - c.position.x) * y -
                            (g.y - c.position.y) * S))),
                        h.isStatic ||
                          h.isSleeping ||
                          ((h.positionPrev.x -= S * h.inverseMass),
                          (h.positionPrev.y -= y * h.inverseMass),
                          (h.anglePrev -=
                            h.inverseInertia *
                            ((g.x - h.position.x) * y -
                              (g.y - h.position.y) * S)))
                    }
                  }
                }
              }
            }),
            (e.solveVelocity = function (r, v) {
              var s = v * v,
                f = e._restingThresh * s,
                n = e._frictionNormalMultiplier,
                t = e._restingThreshTangent * s,
                i = Number.MAX_VALUE,
                a = r.length,
                c,
                h,
                C,
                P
              for (C = 0; C < a; C++) {
                var u = r[C]
                if (!(!u.isActive || u.isSensor)) {
                  var g = u.collision,
                    p = g.parentA,
                    x = g.parentB,
                    S = p.velocity,
                    y = x.velocity,
                    w = g.normal.x,
                    d = g.normal.y,
                    M = g.tangent.x,
                    I = g.tangent.y,
                    A = u.activeContacts,
                    B = A.length,
                    E = 1 / B,
                    L = p.inverseMass + x.inverseMass,
                    D = u.friction * u.frictionStatic * n * s
                  for (
                    S.x = p.position.x - p.positionPrev.x,
                      S.y = p.position.y - p.positionPrev.y,
                      y.x = x.position.x - x.positionPrev.x,
                      y.y = x.position.y - x.positionPrev.y,
                      p.angularVelocity = p.angle - p.anglePrev,
                      x.angularVelocity = x.angle - x.anglePrev,
                      P = 0;
                    P < B;
                    P++
                  ) {
                    var F = A[P],
                      V = F.vertex,
                      k = V.x - p.position.x,
                      H = V.y - p.position.y,
                      O = V.x - x.position.x,
                      N = V.y - x.position.y,
                      W = S.x - H * p.angularVelocity,
                      G = S.y + k * p.angularVelocity,
                      U = y.x - N * x.angularVelocity,
                      ae = y.y + O * x.angularVelocity,
                      q = W - U,
                      b = G - ae,
                      Z = w * q + d * b,
                      Q = M * q + I * b,
                      _ = u.separation + Z,
                      X = Math.min(_, 1)
                    X = _ < 0 ? 0 : X
                    var ee = X * D
                    Q > ee || -Q > ee
                      ? ((h = Q > 0 ? Q : -Q),
                        (c = u.friction * (Q > 0 ? 1 : -1) * s),
                        c < -h ? (c = -h) : c > h && (c = h))
                      : ((c = Q), (h = i))
                    var te = k * d - H * w,
                      ne = O * d - N * w,
                      ie =
                        E /
                        (L +
                          p.inverseInertia * te * te +
                          x.inverseInertia * ne * ne),
                      $ = (1 + u.restitution) * Z * ie
                    if (((c *= ie), Z * Z > f && Z < 0)) F.normalImpulse = 0
                    else {
                      var re = F.normalImpulse
                      ;(F.normalImpulse += $),
                        (F.normalImpulse = Math.min(F.normalImpulse, 0)),
                        ($ = F.normalImpulse - re)
                    }
                    if (Q * Q > t) F.tangentImpulse = 0
                    else {
                      var se = F.tangentImpulse
                      ;(F.tangentImpulse += c),
                        F.tangentImpulse < -h && (F.tangentImpulse = -h),
                        F.tangentImpulse > h && (F.tangentImpulse = h),
                        (c = F.tangentImpulse - se)
                    }
                    var K = w * $ + M * c,
                      J = d * $ + I * c
                    p.isStatic ||
                      p.isSleeping ||
                      ((p.positionPrev.x += K * p.inverseMass),
                      (p.positionPrev.y += J * p.inverseMass),
                      (p.anglePrev += (k * J - H * K) * p.inverseInertia)),
                      x.isStatic ||
                        x.isSleeping ||
                        ((x.positionPrev.x -= K * x.inverseMass),
                        (x.positionPrev.y -= J * x.inverseMass),
                        (x.anglePrev -= (O * J - N * K) * x.inverseInertia))
                  }
                }
              }
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(9),
          o = m(0)
        ;(function () {
          ;(e.create = function (r) {
            return o.extend(
              {
                table: {},
                list: [],
                collisionStart: [],
                collisionActive: [],
                collisionEnd: [],
              },
              r
            )
          }),
            (e.update = function (r, v, s) {
              var f = r.list,
                n = f.length,
                t = r.table,
                i = v.length,
                a = r.collisionStart,
                c = r.collisionEnd,
                h = r.collisionActive,
                C,
                P,
                u,
                g
              for (a.length = 0, c.length = 0, h.length = 0, g = 0; g < n; g++)
                f[g].confirmedActive = !1
              for (g = 0; g < i; g++)
                (C = v[g]),
                  (u = C.pair),
                  u
                    ? (u.isActive ? h.push(u) : a.push(u),
                      l.update(u, C, s),
                      (u.confirmedActive = !0))
                    : ((u = l.create(C, s)),
                      (t[u.id] = u),
                      a.push(u),
                      f.push(u))
              var p = []
              for (n = f.length, g = 0; g < n; g++)
                (u = f[g]),
                  u.confirmedActive ||
                    (l.setActive(u, !1, s),
                    c.push(u),
                    !u.collision.bodyA.isSleeping &&
                      !u.collision.bodyB.isSleeping &&
                      p.push(g))
              for (g = 0; g < p.length; g++)
                (P = p[g] - g), (u = f[P]), f.splice(P, 1), delete t[u.id]
            }),
            (e.clear = function (r) {
              return (
                (r.table = {}),
                (r.list.length = 0),
                (r.collisionStart.length = 0),
                (r.collisionActive.length = 0),
                (r.collisionEnd.length = 0),
                r
              )
            })
        })()
      },
      function (T, R, m) {
        var e = (T.exports = m(22))
        ;(e.Axes = m(11)),
          (e.Bodies = m(12)),
          (e.Body = m(6)),
          (e.Bounds = m(1)),
          (e.Collision = m(8)),
          (e.Common = m(0)),
          (e.Composite = m(5)),
          (e.Composites = m(23)),
          (e.Constraint = m(10)),
          (e.Contact = m(17)),
          (e.Detector = m(14)),
          (e.Engine = m(18)),
          (e.Events = m(4)),
          (e.Grid = m(24)),
          (e.Mouse = m(13)),
          (e.MouseConstraint = m(25)),
          (e.Pair = m(9)),
          (e.Pairs = m(20)),
          (e.Plugin = m(15)),
          (e.Query = m(26)),
          (e.Render = m(16)),
          (e.Resolver = m(19)),
          (e.Runner = m(27)),
          (e.SAT = m(28)),
          (e.Sleeping = m(7)),
          (e.Svg = m(29)),
          (e.Vector = m(2)),
          (e.Vertices = m(3)),
          (e.World = m(30)),
          (e.Engine.run = e.Runner.run),
          e.Common.deprecated(
            e.Engine,
            'run',
            'Engine.run ➤ use Matter.Runner.run(engine) instead'
          )
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(15),
          o = m(0)
        ;(function () {
          ;(e.name = 'matter-js'),
            (e.version = '0.18.0'),
            (e.uses = []),
            (e.used = []),
            (e.use = function () {
              l.use(e, Array.prototype.slice.call(arguments))
            }),
            (e.before = function (r, v) {
              return (r = r.replace(/^Matter./, '')), o.chainPathBefore(e, r, v)
            }),
            (e.after = function (r, v) {
              return (r = r.replace(/^Matter./, '')), o.chainPathAfter(e, r, v)
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(5),
          o = m(10),
          r = m(0),
          v = m(6),
          s = m(12),
          f = r.deprecated
        ;(function () {
          ;(e.stack = function (n, t, i, a, c, h, C) {
            for (
              var P = l.create({ label: 'Stack' }),
                u = n,
                g = t,
                p,
                x = 0,
                S = 0;
              S < a;
              S++
            ) {
              for (var y = 0, w = 0; w < i; w++) {
                var d = C(u, g, w, S, p, x)
                if (d) {
                  var M = d.bounds.max.y - d.bounds.min.y,
                    I = d.bounds.max.x - d.bounds.min.x
                  M > y && (y = M),
                    v.translate(d, { x: I * 0.5, y: M * 0.5 }),
                    (u = d.bounds.max.x + c),
                    l.addBody(P, d),
                    (p = d),
                    (x += 1)
                } else u += c
              }
              ;(g += y + h), (u = n)
            }
            return P
          }),
            (e.chain = function (n, t, i, a, c, h) {
              for (var C = n.bodies, P = 1; P < C.length; P++) {
                var u = C[P - 1],
                  g = C[P],
                  p = u.bounds.max.y - u.bounds.min.y,
                  x = u.bounds.max.x - u.bounds.min.x,
                  S = g.bounds.max.y - g.bounds.min.y,
                  y = g.bounds.max.x - g.bounds.min.x,
                  w = {
                    bodyA: u,
                    pointA: { x: x * t, y: p * i },
                    bodyB: g,
                    pointB: { x: y * a, y: S * c },
                  },
                  d = r.extend(w, h)
                l.addConstraint(n, o.create(d))
              }
              return (n.label += ' Chain'), n
            }),
            (e.mesh = function (n, t, i, a, c) {
              var h = n.bodies,
                C,
                P,
                u,
                g,
                p
              for (C = 0; C < i; C++) {
                for (P = 1; P < t; P++)
                  (u = h[P - 1 + C * t]),
                    (g = h[P + C * t]),
                    l.addConstraint(
                      n,
                      o.create(r.extend({ bodyA: u, bodyB: g }, c))
                    )
                if (C > 0)
                  for (P = 0; P < t; P++)
                    (u = h[P + (C - 1) * t]),
                      (g = h[P + C * t]),
                      l.addConstraint(
                        n,
                        o.create(r.extend({ bodyA: u, bodyB: g }, c))
                      ),
                      a &&
                        P > 0 &&
                        ((p = h[P - 1 + (C - 1) * t]),
                        l.addConstraint(
                          n,
                          o.create(r.extend({ bodyA: p, bodyB: g }, c))
                        )),
                      a &&
                        P < t - 1 &&
                        ((p = h[P + 1 + (C - 1) * t]),
                        l.addConstraint(
                          n,
                          o.create(r.extend({ bodyA: p, bodyB: g }, c))
                        ))
              }
              return (n.label += ' Mesh'), n
            }),
            (e.pyramid = function (n, t, i, a, c, h, C) {
              return e.stack(n, t, i, a, c, h, function (P, u, g, p, x, S) {
                var y = Math.min(a, Math.ceil(i / 2)),
                  w = x ? x.bounds.max.x - x.bounds.min.x : 0
                if (!(p > y)) {
                  p = y - p
                  var d = p,
                    M = i - 1 - p
                  if (!(g < d || g > M)) {
                    S === 1 &&
                      v.translate(x, {
                        x: (g + (i % 2 === 1 ? 1 : -1)) * w,
                        y: 0,
                      })
                    var I = x ? g * w : 0
                    return C(n + I + g * c, u, g, p, x, S)
                  }
                }
              })
            }),
            (e.newtonsCradle = function (n, t, i, a, c) {
              for (
                var h = l.create({ label: 'Newtons Cradle' }), C = 0;
                C < i;
                C++
              ) {
                var P = 1.9,
                  u = s.circle(n + C * (a * P), t + c, a, {
                    inertia: 1 / 0,
                    restitution: 1,
                    friction: 0,
                    frictionAir: 1e-4,
                    slop: 1,
                  }),
                  g = o.create({
                    pointA: { x: n + C * (a * P), y: t },
                    bodyB: u,
                  })
                l.addBody(h, u), l.addConstraint(h, g)
              }
              return h
            }),
            f(
              e,
              'newtonsCradle',
              'Composites.newtonsCradle ➤ moved to newtonsCradle example'
            ),
            (e.car = function (n, t, i, a, c) {
              var h = v.nextGroup(!0),
                C = 20,
                P = -i * 0.5 + C,
                u = i * 0.5 - C,
                g = 0,
                p = l.create({ label: 'Car' }),
                x = s.rectangle(n, t, i, a, {
                  collisionFilter: { group: h },
                  chamfer: { radius: a * 0.5 },
                  density: 2e-4,
                }),
                S = s.circle(n + P, t + g, c, {
                  collisionFilter: { group: h },
                  friction: 0.8,
                }),
                y = s.circle(n + u, t + g, c, {
                  collisionFilter: { group: h },
                  friction: 0.8,
                }),
                w = o.create({
                  bodyB: x,
                  pointB: { x: P, y: g },
                  bodyA: S,
                  stiffness: 1,
                  length: 0,
                }),
                d = o.create({
                  bodyB: x,
                  pointB: { x: u, y: g },
                  bodyA: y,
                  stiffness: 1,
                  length: 0,
                })
              return (
                l.addBody(p, x),
                l.addBody(p, S),
                l.addBody(p, y),
                l.addConstraint(p, w),
                l.addConstraint(p, d),
                p
              )
            }),
            f(e, 'car', 'Composites.car ➤ moved to car example'),
            (e.softBody = function (n, t, i, a, c, h, C, P, u, g) {
              ;(u = r.extend({ inertia: 1 / 0 }, u)),
                (g = r.extend(
                  { stiffness: 0.2, render: { type: 'line', anchors: !1 } },
                  g
                ))
              var p = e.stack(n, t, i, a, c, h, function (x, S) {
                return s.circle(x, S, P, u)
              })
              return e.mesh(p, i, a, C, g), (p.label = 'Soft Body'), p
            }),
            f(
              e,
              'softBody',
              'Composites.softBody ➤ moved to softBody and cloth examples'
            )
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(9),
          o = m(0),
          r = o.deprecated
        ;(function () {
          ;(e.create = function (v) {
            var s = {
              buckets: {},
              pairs: {},
              pairsList: [],
              bucketWidth: 48,
              bucketHeight: 48,
            }
            return o.extend(s, v)
          }),
            (e.update = function (v, s, f, n) {
              var t,
                i,
                a,
                c = f.world,
                h = v.buckets,
                C,
                P,
                u = !1
              for (t = 0; t < s.length; t++) {
                var g = s[t]
                if (
                  !(g.isSleeping && !n) &&
                  !(
                    c.bounds &&
                    (g.bounds.max.x < c.bounds.min.x ||
                      g.bounds.min.x > c.bounds.max.x ||
                      g.bounds.max.y < c.bounds.min.y ||
                      g.bounds.min.y > c.bounds.max.y)
                  )
                ) {
                  var p = e._getRegion(v, g)
                  if (!g.region || p.id !== g.region.id || n) {
                    ;(!g.region || n) && (g.region = p)
                    var x = e._regionUnion(p, g.region)
                    for (i = x.startCol; i <= x.endCol; i++)
                      for (a = x.startRow; a <= x.endRow; a++) {
                        ;(P = e._getBucketId(i, a)), (C = h[P])
                        var S =
                            i >= p.startCol &&
                            i <= p.endCol &&
                            a >= p.startRow &&
                            a <= p.endRow,
                          y =
                            i >= g.region.startCol &&
                            i <= g.region.endCol &&
                            a >= g.region.startRow &&
                            a <= g.region.endRow
                        !S && y && y && C && e._bucketRemoveBody(v, C, g),
                          (g.region === p || (S && !y) || n) &&
                            (C || (C = e._createBucket(h, P)),
                            e._bucketAddBody(v, C, g))
                      }
                    ;(g.region = p), (u = !0)
                  }
                }
              }
              u && (v.pairsList = e._createActivePairsList(v))
            }),
            r(e, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
            (e.clear = function (v) {
              ;(v.buckets = {}), (v.pairs = {}), (v.pairsList = [])
            }),
            r(e, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
            (e._regionUnion = function (v, s) {
              var f = Math.min(v.startCol, s.startCol),
                n = Math.max(v.endCol, s.endCol),
                t = Math.min(v.startRow, s.startRow),
                i = Math.max(v.endRow, s.endRow)
              return e._createRegion(f, n, t, i)
            }),
            (e._getRegion = function (v, s) {
              var f = s.bounds,
                n = Math.floor(f.min.x / v.bucketWidth),
                t = Math.floor(f.max.x / v.bucketWidth),
                i = Math.floor(f.min.y / v.bucketHeight),
                a = Math.floor(f.max.y / v.bucketHeight)
              return e._createRegion(n, t, i, a)
            }),
            (e._createRegion = function (v, s, f, n) {
              return {
                id: v + ',' + s + ',' + f + ',' + n,
                startCol: v,
                endCol: s,
                startRow: f,
                endRow: n,
              }
            }),
            (e._getBucketId = function (v, s) {
              return 'C' + v + 'R' + s
            }),
            (e._createBucket = function (v, s) {
              var f = (v[s] = [])
              return f
            }),
            (e._bucketAddBody = function (v, s, f) {
              var n = v.pairs,
                t = l.id,
                i = s.length,
                a
              for (a = 0; a < i; a++) {
                var c = s[a]
                if (!(f.id === c.id || (f.isStatic && c.isStatic))) {
                  var h = t(f, c),
                    C = n[h]
                  C ? (C[2] += 1) : (n[h] = [f, c, 1])
                }
              }
              s.push(f)
            }),
            (e._bucketRemoveBody = function (v, s, f) {
              var n = v.pairs,
                t = l.id,
                i
              s.splice(o.indexOf(s, f), 1)
              var a = s.length
              for (i = 0; i < a; i++) {
                var c = n[t(f, s[i])]
                c && (c[2] -= 1)
              }
            }),
            (e._createActivePairsList = function (v) {
              var s,
                f = v.pairs,
                n = o.keys(f),
                t = n.length,
                i = [],
                a
              for (a = 0; a < t; a++)
                (s = f[n[a]]), s[2] > 0 ? i.push(s) : delete f[n[a]]
              return i
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(3),
          o = m(7),
          r = m(13),
          v = m(4),
          s = m(14),
          f = m(10),
          n = m(5),
          t = m(0),
          i = m(1)
        ;(function () {
          ;(e.create = function (a, c) {
            var h = (a ? a.mouse : null) || (c ? c.mouse : null)
            h ||
              (a && a.render && a.render.canvas
                ? (h = r.create(a.render.canvas))
                : c && c.element
                ? (h = r.create(c.element))
                : ((h = r.create()),
                  t.warn(
                    'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
                  )))
            var C = f.create({
                label: 'Mouse Constraint',
                pointA: h.position,
                pointB: { x: 0, y: 0 },
                length: 0.01,
                stiffness: 0.1,
                angularStiffness: 1,
                render: { strokeStyle: '#90EE90', lineWidth: 3 },
              }),
              P = {
                type: 'mouseConstraint',
                mouse: h,
                element: null,
                body: null,
                constraint: C,
                collisionFilter: { category: 1, mask: 4294967295, group: 0 },
              },
              u = t.extend(P, c)
            return (
              v.on(a, 'beforeUpdate', function () {
                var g = n.allBodies(a.world)
                e.update(u, g), e._triggerEvents(u)
              }),
              u
            )
          }),
            (e.update = function (a, c) {
              var h = a.mouse,
                C = a.constraint,
                P = a.body
              if (h.button === 0) {
                if (C.bodyB) o.set(C.bodyB, !1), (C.pointA = h.position)
                else
                  for (var u = 0; u < c.length; u++)
                    if (
                      ((P = c[u]),
                      i.contains(P.bounds, h.position) &&
                        s.canCollide(P.collisionFilter, a.collisionFilter))
                    )
                      for (
                        var g = P.parts.length > 1 ? 1 : 0;
                        g < P.parts.length;
                        g++
                      ) {
                        var p = P.parts[g]
                        if (l.contains(p.vertices, h.position)) {
                          ;(C.pointA = h.position),
                            (C.bodyB = a.body = P),
                            (C.pointB = {
                              x: h.position.x - P.position.x,
                              y: h.position.y - P.position.y,
                            }),
                            (C.angleB = P.angle),
                            o.set(P, !1),
                            v.trigger(a, 'startdrag', { mouse: h, body: P })
                          break
                        }
                      }
              } else
                (C.bodyB = a.body = null),
                  (C.pointB = null),
                  P && v.trigger(a, 'enddrag', { mouse: h, body: P })
            }),
            (e._triggerEvents = function (a) {
              var c = a.mouse,
                h = c.sourceEvents
              h.mousemove && v.trigger(a, 'mousemove', { mouse: c }),
                h.mousedown && v.trigger(a, 'mousedown', { mouse: c }),
                h.mouseup && v.trigger(a, 'mouseup', { mouse: c }),
                r.clearSourceEvents(c)
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(2),
          o = m(8),
          r = m(1),
          v = m(12),
          s = m(3)
        ;(function () {
          ;(e.collides = function (f, n) {
            for (
              var t = [],
                i = n.length,
                a = f.bounds,
                c = o.collides,
                h = r.overlaps,
                C = 0;
              C < i;
              C++
            ) {
              var P = n[C],
                u = P.parts.length,
                g = u === 1 ? 0 : 1
              if (h(P.bounds, a))
                for (var p = g; p < u; p++) {
                  var x = P.parts[p]
                  if (h(x.bounds, a)) {
                    var S = c(x, f)
                    if (S) {
                      t.push(S)
                      break
                    }
                  }
                }
            }
            return t
          }),
            (e.ray = function (f, n, t, i) {
              i = i || 1e-100
              for (
                var a = l.angle(n, t),
                  c = l.magnitude(l.sub(n, t)),
                  h = (t.x + n.x) * 0.5,
                  C = (t.y + n.y) * 0.5,
                  P = v.rectangle(h, C, c, i, { angle: a }),
                  u = e.collides(P, f),
                  g = 0;
                g < u.length;
                g += 1
              ) {
                var p = u[g]
                p.body = p.bodyB = p.bodyA
              }
              return u
            }),
            (e.region = function (f, n, t) {
              for (var i = [], a = 0; a < f.length; a++) {
                var c = f[a],
                  h = r.overlaps(c.bounds, n)
                ;((h && !t) || (!h && t)) && i.push(c)
              }
              return i
            }),
            (e.point = function (f, n) {
              for (var t = [], i = 0; i < f.length; i++) {
                var a = f[i]
                if (r.contains(a.bounds, n))
                  for (
                    var c = a.parts.length === 1 ? 0 : 1;
                    c < a.parts.length;
                    c++
                  ) {
                    var h = a.parts[c]
                    if (r.contains(h.bounds, n) && s.contains(h.vertices, n)) {
                      t.push(a)
                      break
                    }
                  }
              }
              return t
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(4),
          o = m(18),
          r = m(0)
        ;(function () {
          var v, s
          if (
            (typeof window < 'u' &&
              ((v =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame),
              (s =
                window.cancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.msCancelAnimationFrame)),
            !v)
          ) {
            var f
            ;(v = function (n) {
              f = setTimeout(function () {
                n(r.now())
              }, 1e3 / 60)
            }),
              (s = function () {
                clearTimeout(f)
              })
          }
          ;(e.create = function (n) {
            var t = {
                fps: 60,
                correction: 1,
                deltaSampleSize: 60,
                counterTimestamp: 0,
                frameCounter: 0,
                deltaHistory: [],
                timePrev: null,
                timeScalePrev: 1,
                frameRequestId: null,
                isFixed: !1,
                enabled: !0,
              },
              i = r.extend(t, n)
            return (
              (i.delta = i.delta || 1e3 / i.fps),
              (i.deltaMin = i.deltaMin || 1e3 / i.fps),
              (i.deltaMax = i.deltaMax || 1e3 / (i.fps * 0.5)),
              (i.fps = 1e3 / i.delta),
              i
            )
          }),
            (e.run = function (n, t) {
              return (
                typeof n.positionIterations < 'u' &&
                  ((t = n), (n = e.create())),
                (function i(a) {
                  ;(n.frameRequestId = v(i)), a && n.enabled && e.tick(n, t, a)
                })(),
                n
              )
            }),
            (e.tick = function (n, t, i) {
              var a = t.timing,
                c = 1,
                h,
                C = { timestamp: a.timestamp }
              l.trigger(n, 'beforeTick', C),
                n.isFixed
                  ? (h = n.delta)
                  : ((h = i - n.timePrev || n.delta),
                    (n.timePrev = i),
                    n.deltaHistory.push(h),
                    (n.deltaHistory = n.deltaHistory.slice(-n.deltaSampleSize)),
                    (h = Math.min.apply(null, n.deltaHistory)),
                    (h = h < n.deltaMin ? n.deltaMin : h),
                    (h = h > n.deltaMax ? n.deltaMax : h),
                    (c = h / n.delta),
                    (n.delta = h)),
                n.timeScalePrev !== 0 && (c *= a.timeScale / n.timeScalePrev),
                a.timeScale === 0 && (c = 0),
                (n.timeScalePrev = a.timeScale),
                (n.correction = c),
                (n.frameCounter += 1),
                i - n.counterTimestamp >= 1e3 &&
                  ((n.fps = n.frameCounter * ((i - n.counterTimestamp) / 1e3)),
                  (n.counterTimestamp = i),
                  (n.frameCounter = 0)),
                l.trigger(n, 'tick', C),
                l.trigger(n, 'beforeUpdate', C),
                o.update(t, h, c),
                l.trigger(n, 'afterUpdate', C),
                l.trigger(n, 'afterTick', C)
            }),
            (e.stop = function (n) {
              s(n.frameRequestId)
            }),
            (e.start = function (n, t) {
              e.run(n, t)
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(8),
          o = m(0),
          r = o.deprecated
        ;(function () {
          ;(e.collides = function (v, s) {
            return l.collides(v, s)
          }),
            r(e, 'collides', 'SAT.collides ➤ replaced by Collision.collides')
        })()
      },
      function (T, R, m) {
        var e = {}
        ;(T.exports = e), m(1)
        var l = m(0)
        ;(function () {
          ;(e.pathToVertices = function (o, r) {
            typeof window < 'u' &&
              !('SVGPathSeg' in window) &&
              l.warn(
                'Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.'
              )
            var v,
              s,
              f,
              n,
              t,
              i,
              a,
              c,
              h,
              C,
              P = [],
              u,
              g,
              p = 0,
              x = 0,
              S = 0
            r = r || 15
            var y = function (d, M, I) {
                var A = I % 2 === 1 && I > 1
                if (!h || d != h.x || M != h.y) {
                  h && A ? ((u = h.x), (g = h.y)) : ((u = 0), (g = 0))
                  var B = { x: u + d, y: g + M }
                  ;(A || !h) && (h = B), P.push(B), (x = u + d), (S = g + M)
                }
              },
              w = function (d) {
                var M = d.pathSegTypeAsLetter.toUpperCase()
                if (M !== 'Z') {
                  switch (M) {
                    case 'M':
                    case 'L':
                    case 'T':
                    case 'C':
                    case 'S':
                    case 'Q':
                      ;(x = d.x), (S = d.y)
                      break
                    case 'H':
                      x = d.x
                      break
                    case 'V':
                      S = d.y
                      break
                  }
                  y(x, S, d.pathSegType)
                }
              }
            for (
              e._svgPathToAbsolute(o), f = o.getTotalLength(), i = [], v = 0;
              v < o.pathSegList.numberOfItems;
              v += 1
            )
              i.push(o.pathSegList.getItem(v))
            for (a = i.concat(); p < f; ) {
              if (((C = o.getPathSegAtLength(p)), (t = i[C]), t != c)) {
                for (; a.length && a[0] != t; ) w(a.shift())
                c = t
              }
              switch (t.pathSegTypeAsLetter.toUpperCase()) {
                case 'C':
                case 'T':
                case 'S':
                case 'Q':
                case 'A':
                  ;(n = o.getPointAtLength(p)), y(n.x, n.y, 0)
                  break
              }
              p += r
            }
            for (v = 0, s = a.length; v < s; ++v) w(a[v])
            return P
          }),
            (e._svgPathToAbsolute = function (o) {
              for (
                var r,
                  v,
                  s,
                  f,
                  n,
                  t,
                  i = o.pathSegList,
                  a = 0,
                  c = 0,
                  h = i.numberOfItems,
                  C = 0;
                C < h;
                ++C
              ) {
                var P = i.getItem(C),
                  u = P.pathSegTypeAsLetter
                if (/[MLHVCSQTA]/.test(u))
                  'x' in P && (a = P.x), 'y' in P && (c = P.y)
                else
                  switch (
                    ('x1' in P && (s = a + P.x1),
                    'x2' in P && (n = a + P.x2),
                    'y1' in P && (f = c + P.y1),
                    'y2' in P && (t = c + P.y2),
                    'x' in P && (a += P.x),
                    'y' in P && (c += P.y),
                    u)
                  ) {
                    case 'm':
                      i.replaceItem(o.createSVGPathSegMovetoAbs(a, c), C)
                      break
                    case 'l':
                      i.replaceItem(o.createSVGPathSegLinetoAbs(a, c), C)
                      break
                    case 'h':
                      i.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(a), C)
                      break
                    case 'v':
                      i.replaceItem(o.createSVGPathSegLinetoVerticalAbs(c), C)
                      break
                    case 'c':
                      i.replaceItem(
                        o.createSVGPathSegCurvetoCubicAbs(a, c, s, f, n, t),
                        C
                      )
                      break
                    case 's':
                      i.replaceItem(
                        o.createSVGPathSegCurvetoCubicSmoothAbs(a, c, n, t),
                        C
                      )
                      break
                    case 'q':
                      i.replaceItem(
                        o.createSVGPathSegCurvetoQuadraticAbs(a, c, s, f),
                        C
                      )
                      break
                    case 't':
                      i.replaceItem(
                        o.createSVGPathSegCurvetoQuadraticSmoothAbs(a, c),
                        C
                      )
                      break
                    case 'a':
                      i.replaceItem(
                        o.createSVGPathSegArcAbs(
                          a,
                          c,
                          P.r1,
                          P.r2,
                          P.angle,
                          P.largeArcFlag,
                          P.sweepFlag
                        ),
                        C
                      )
                      break
                    case 'z':
                    case 'Z':
                      ;(a = r), (c = v)
                      break
                  }
                ;(u == 'M' || u == 'm') && ((r = a), (v = c))
              }
            })
        })()
      },
      function (T, R, m) {
        var e = {}
        T.exports = e
        var l = m(5)
        m(0),
          (function () {
            ;(e.create = l.create),
              (e.add = l.add),
              (e.remove = l.remove),
              (e.clear = l.clear),
              (e.addComposite = l.addComposite),
              (e.addBody = l.addBody),
              (e.addConstraint = l.addConstraint)
          })()
      },
    ])
  })
})(le)
const ue = oe(j)
export { ue as M }
