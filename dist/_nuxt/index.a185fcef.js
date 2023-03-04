import {
  j as Ke,
  r as C,
  k as de,
  l as Ge,
  m as Xe,
  p as ee,
  w as Qe,
  u as D,
  q as Ye,
  s as Ze,
  f as et,
  v as tt,
  x as nt,
  y as rt,
  o as st,
  a as ot,
  e as j,
  t as it,
  _ as he,
} from './entry.b5c09835.js'
const at = () => null
function ct(...e) {
  var y
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0
  typeof e[0] != 'string' && e.unshift(t)
  let [r, n, s = {}] = e
  if (typeof r != 'string')
    throw new TypeError('[nuxt] [asyncData] key must be a string.')
  if (typeof n != 'function')
    throw new TypeError('[nuxt] [asyncData] handler must be a function.')
  ;(s.server = s.server ?? !0),
    (s.default = s.default ?? at),
    (s.lazy = s.lazy ?? !1),
    (s.immediate = s.immediate ?? !0)
  const o = Ke(),
    i = () => (o.isHydrating ? o.payload.data[r] : o.static.data[r]),
    u = () => i() !== void 0
  o._asyncData[r] ||
    (o._asyncData[r] = {
      data: C(i() ?? ((y = s.default) == null ? void 0 : y.call(s)) ?? null),
      pending: C(!u()),
      error: C(o.payload._errors[r] ? de(o.payload._errors[r]) : null),
    })
  const l = { ...o._asyncData[r] }
  l.refresh = l.execute = (m = {}) => {
    if (o._asyncDataPromises[r]) {
      if (m.dedupe === !1) return o._asyncDataPromises[r]
      o._asyncDataPromises[r].cancelled = !0
    }
    if (m._initial && u()) return i()
    l.pending.value = !0
    const h = new Promise((p, g) => {
      try {
        p(n(o))
      } catch (b) {
        g(b)
      }
    })
      .then((p) => {
        if (h.cancelled) return o._asyncDataPromises[r]
        s.transform && (p = s.transform(p)),
          s.pick && (p = ut(p, s.pick)),
          (l.data.value = p),
          (l.error.value = null)
      })
      .catch((p) => {
        var g
        if (h.cancelled) return o._asyncDataPromises[r]
        ;(l.error.value = p),
          (l.data.value = D(
            ((g = s.default) == null ? void 0 : g.call(s)) ?? null
          ))
      })
      .finally(() => {
        h.cancelled ||
          ((l.pending.value = !1),
          (o.payload.data[r] = l.data.value),
          l.error.value && (o.payload._errors[r] = de(l.error.value)),
          delete o._asyncDataPromises[r])
      })
    return (o._asyncDataPromises[r] = h), o._asyncDataPromises[r]
  }
  const c = () => l.refresh({ _initial: !0 }),
    f = s.server !== !1 && o.payload.serverRendered
  {
    const m = Ge()
    if (m && !m._nuxtOnBeforeMountCbs) {
      m._nuxtOnBeforeMountCbs = []
      const p = m._nuxtOnBeforeMountCbs
      m &&
        (Xe(() => {
          p.forEach((g) => {
            g()
          }),
            p.splice(0, p.length)
        }),
        ee(() => p.splice(0, p.length)))
    }
    f && o.isHydrating && u()
      ? (l.pending.value = !1)
      : m &&
        ((o.payload.serverRendered && o.isHydrating) || s.lazy) &&
        s.immediate
      ? m._nuxtOnBeforeMountCbs.push(c)
      : s.immediate && c(),
      s.watch && Qe(s.watch, () => l.refresh())
    const h = o.hook('app:data:refresh', (p) => {
      if (!p || p.includes(r)) return l.refresh()
    })
    m && ee(h)
  }
  const d = Promise.resolve(o._asyncDataPromises[r]).then(() => l)
  return Object.assign(d, l), d
}
function ut(e, t) {
  const r = {}
  for (const n of t) r[n] = e[n]
  return r
}
const lt = {
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
}
function ft(e, t = {}) {
  t = { ...lt, ...t }
  const r = Ae(t)
  return r.dispatch(e), r.toString()
}
function Ae(e) {
  const t = []
  let r = []
  const n = (s) => {
    t.push(s)
  }
  return {
    toString() {
      return t.join('')
    },
    getContext() {
      return r
    },
    dispatch(s) {
      return (
        e.replacer && (s = e.replacer(s)),
        this['_' + (s === null ? 'null' : typeof s)](s)
      )
    },
    _object(s) {
      const o = /\[object (.*)]/i,
        i = Object.prototype.toString.call(s),
        u = o.exec(i),
        l = u ? u[1].toLowerCase() : 'unknown:[' + i.toLowerCase() + ']'
      let c = null
      if ((c = r.indexOf(s)) >= 0) return this.dispatch('[CIRCULAR:' + c + ']')
      if (
        (r.push(s),
        typeof Buffer < 'u' && Buffer.isBuffer && Buffer.isBuffer(s))
      )
        return n('buffer:'), n(s.toString('utf8'))
      if (l !== 'object' && l !== 'function' && l !== 'asyncfunction')
        if (this['_' + l]) this['_' + l](s)
        else {
          if (e.ignoreUnknown) return n('[' + l + ']')
          throw new Error('Unknown object type "' + l + '"')
        }
      else {
        let f = Object.keys(s)
        e.unorderedObjects && (f = f.sort()),
          e.respectType !== !1 &&
            !pe(s) &&
            f.splice(0, 0, 'prototype', '__proto__', 'letructor'),
          e.excludeKeys &&
            (f = f.filter(function (d) {
              return !e.excludeKeys(d)
            })),
          n('object:' + f.length + ':')
        for (const d of f)
          this.dispatch(d),
            n(':'),
            e.excludeValues || this.dispatch(s[d]),
            n(',')
      }
    },
    _array(s, o) {
      if (
        ((o = typeof o < 'u' ? o : e.unorderedArrays !== !1),
        n('array:' + s.length + ':'),
        !o || s.length <= 1)
      ) {
        for (const l of s) this.dispatch(l)
        return
      }
      const i = [],
        u = s.map((l) => {
          const c = Ae(e)
          return c.dispatch(l), i.push(c.getContext()), c.toString()
        })
      return (r = [...r, ...i]), u.sort(), this._array(u, !1)
    },
    _date(s) {
      return n('date:' + s.toJSON())
    },
    _symbol(s) {
      return n('symbol:' + s.toString())
    },
    _error(s) {
      return n('error:' + s.toString())
    },
    _boolean(s) {
      return n('bool:' + s.toString())
    },
    _string(s) {
      n('string:' + s.length + ':'), n(s.toString())
    },
    _function(s) {
      n('fn:'),
        pe(s) ? this.dispatch('[native]') : this.dispatch(s.toString()),
        e.respectFunctionNames !== !1 &&
          this.dispatch('function-name:' + String(s.name)),
        e.respectFunctionProperties && this._object(s)
    },
    _number(s) {
      return n('number:' + s.toString())
    },
    _xml(s) {
      return n('xml:' + s.toString())
    },
    _null() {
      return n('Null')
    },
    _undefined() {
      return n('Undefined')
    },
    _regexp(s) {
      return n('regex:' + s.toString())
    },
    _uint8array(s) {
      return n('uint8array:'), this.dispatch(Array.prototype.slice.call(s))
    },
    _uint8clampedarray(s) {
      return (
        n('uint8clampedarray:'), this.dispatch(Array.prototype.slice.call(s))
      )
    },
    _int8array(s) {
      return n('int8array:'), this.dispatch(Array.prototype.slice.call(s))
    },
    _uint16array(s) {
      return n('uint16array:'), this.dispatch(Array.prototype.slice.call(s))
    },
    _int16array(s) {
      return n('int16array:'), this.dispatch(Array.prototype.slice.call(s))
    },
    _uint32array(s) {
      return n('uint32array:'), this.dispatch(Array.prototype.slice.call(s))
    },
    _int32array(s) {
      return n('int32array:'), this.dispatch(Array.prototype.slice.call(s))
    },
    _float32array(s) {
      return n('float32array:'), this.dispatch(Array.prototype.slice.call(s))
    },
    _float64array(s) {
      return n('float64array:'), this.dispatch(Array.prototype.slice.call(s))
    },
    _arraybuffer(s) {
      return n('arraybuffer:'), this.dispatch(new Uint8Array(s))
    },
    _url(s) {
      return n('url:' + s.toString())
    },
    _map(s) {
      n('map:')
      const o = [...s]
      return this._array(o, e.unorderedSets !== !1)
    },
    _set(s) {
      n('set:')
      const o = [...s]
      return this._array(o, e.unorderedSets !== !1)
    },
    _file(s) {
      return n('file:'), this.dispatch([s.name, s.size, s.type, s.lastModfied])
    },
    _blob() {
      if (e.ignoreUnknown) return n('[blob]')
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
    },
    _domwindow() {
      return n('domwindow')
    },
    _bigint(s) {
      return n('bigint:' + s.toString())
    },
    _process() {
      return n('process')
    },
    _timer() {
      return n('timer')
    },
    _pipe() {
      return n('pipe')
    },
    _tcp() {
      return n('tcp')
    },
    _udp() {
      return n('udp')
    },
    _tty() {
      return n('tty')
    },
    _statwatcher() {
      return n('statwatcher')
    },
    _securecontext() {
      return n('securecontext')
    },
    _connection() {
      return n('connection')
    },
    _zlib() {
      return n('zlib')
    },
    _context() {
      return n('context')
    },
    _nodescript() {
      return n('nodescript')
    },
    _httpparser() {
      return n('httpparser')
    },
    _dataview() {
      return n('dataview')
    },
    _signal() {
      return n('signal')
    },
    _fsevent() {
      return n('fsevent')
    },
    _tlswrap() {
      return n('tlswrap')
    },
  }
}
function pe(e) {
  return typeof e != 'function'
    ? !1
    : /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(
        Function.prototype.toString.call(e)
      ) != null
}
class F {
  constructor(t, r) {
    ;(t = this.words = t || []),
      (this.sigBytes = r !== void 0 ? r : t.length * 4)
  }
  toString(t) {
    return (t || dt).stringify(this)
  }
  concat(t) {
    if ((this.clamp(), this.sigBytes % 4))
      for (let r = 0; r < t.sigBytes; r++) {
        const n = (t.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
        this.words[(this.sigBytes + r) >>> 2] |=
          n << (24 - ((this.sigBytes + r) % 4) * 8)
      }
    else
      for (let r = 0; r < t.sigBytes; r += 4)
        this.words[(this.sigBytes + r) >>> 2] = t.words[r >>> 2]
    return (this.sigBytes += t.sigBytes), this
  }
  clamp() {
    ;(this.words[this.sigBytes >>> 2] &=
      4294967295 << (32 - (this.sigBytes % 4) * 8)),
      (this.words.length = Math.ceil(this.sigBytes / 4))
  }
  clone() {
    return new F([...this.words])
  }
}
const dt = {
    stringify(e) {
      const t = []
      for (let r = 0; r < e.sigBytes; r++) {
        const n = (e.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
        t.push((n >>> 4).toString(16), (n & 15).toString(16))
      }
      return t.join('')
    },
  },
  ht = {
    stringify(e) {
      const t =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        r = []
      for (let n = 0; n < e.sigBytes; n += 3) {
        const s = (e.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255,
          o = (e.words[(n + 1) >>> 2] >>> (24 - ((n + 1) % 4) * 8)) & 255,
          i = (e.words[(n + 2) >>> 2] >>> (24 - ((n + 2) % 4) * 8)) & 255,
          u = (s << 16) | (o << 8) | i
        for (let l = 0; l < 4 && n * 8 + l * 6 < e.sigBytes * 8; l++)
          r.push(t.charAt((u >>> (6 * (3 - l))) & 63))
      }
      return r.join('')
    },
  },
  pt = {
    parse(e) {
      const t = e.length,
        r = []
      for (let n = 0; n < t; n++)
        r[n >>> 2] |= (e.charCodeAt(n) & 255) << (24 - (n % 4) * 8)
      return new F(r, t)
    },
  },
  mt = {
    parse(e) {
      return pt.parse(unescape(encodeURIComponent(e)))
    },
  }
class yt {
  constructor() {
    ;(this._minBufferSize = 0), (this.blockSize = 512 / 32), this.reset()
  }
  reset() {
    ;(this._data = new F()), (this._nDataBytes = 0)
  }
  _append(t) {
    typeof t == 'string' && (t = mt.parse(t)),
      this._data.concat(t),
      (this._nDataBytes += t.sigBytes)
  }
  _doProcessBlock(t, r) {}
  _process(t) {
    let r,
      n = this._data.sigBytes / (this.blockSize * 4)
    t ? (n = Math.ceil(n)) : (n = Math.max((n | 0) - this._minBufferSize, 0))
    const s = n * this.blockSize,
      o = Math.min(s * 4, this._data.sigBytes)
    if (s) {
      for (let i = 0; i < s; i += this.blockSize)
        this._doProcessBlock(this._data.words, i)
      ;(r = this._data.words.splice(0, s)), (this._data.sigBytes -= o)
    }
    return new F(r, o)
  }
}
class wt extends yt {
  update(t) {
    return this._append(t), this._process(), this
  }
  finalize(t) {
    t && this._append(t)
  }
}
const gt = [
    1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372,
    528734635, 1541459225,
  ],
  _t = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
    -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
    -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998,
  ],
  N = []
class bt extends wt {
  constructor() {
    super(), this.reset()
  }
  reset() {
    super.reset(), (this._hash = new F([...gt]))
  }
  _doProcessBlock(t, r) {
    const n = this._hash.words
    let s = n[0],
      o = n[1],
      i = n[2],
      u = n[3],
      l = n[4],
      c = n[5],
      f = n[6],
      d = n[7]
    for (let y = 0; y < 64; y++) {
      if (y < 16) N[y] = t[r + y] | 0
      else {
        const S = N[y - 15],
          R = ((S << 25) | (S >>> 7)) ^ ((S << 14) | (S >>> 18)) ^ (S >>> 3),
          T = N[y - 2],
          We = ((T << 15) | (T >>> 17)) ^ ((T << 13) | (T >>> 19)) ^ (T >>> 10)
        N[y] = R + N[y - 7] + We + N[y - 16]
      }
      const m = (l & c) ^ (~l & f),
        h = (s & o) ^ (s & i) ^ (o & i),
        p =
          ((s << 30) | (s >>> 2)) ^
          ((s << 19) | (s >>> 13)) ^
          ((s << 10) | (s >>> 22)),
        g =
          ((l << 26) | (l >>> 6)) ^
          ((l << 21) | (l >>> 11)) ^
          ((l << 7) | (l >>> 25)),
        b = d + g + m + _t[y] + N[y],
        E = p + h
      ;(d = f),
        (f = c),
        (c = l),
        (l = (u + b) | 0),
        (u = i),
        (i = o),
        (o = s),
        (s = (b + E) | 0)
    }
    ;(n[0] = (n[0] + s) | 0),
      (n[1] = (n[1] + o) | 0),
      (n[2] = (n[2] + i) | 0),
      (n[3] = (n[3] + u) | 0),
      (n[4] = (n[4] + l) | 0),
      (n[5] = (n[5] + c) | 0),
      (n[6] = (n[6] + f) | 0),
      (n[7] = (n[7] + d) | 0)
  }
  finalize(t) {
    super.finalize(t)
    const r = this._nDataBytes * 8,
      n = this._data.sigBytes * 8
    return (
      (this._data.words[n >>> 5] |= 128 << (24 - (n % 32))),
      (this._data.words[(((n + 64) >>> 9) << 4) + 14] = Math.floor(
        r / 4294967296
      )),
      (this._data.words[(((n + 64) >>> 9) << 4) + 15] = r),
      (this._data.sigBytes = this._data.words.length * 4),
      this._process(),
      this._hash
    )
  }
}
function Et(e) {
  return new bt().finalize(e).toString(ht)
}
function St(e, t = {}) {
  const r = typeof e == 'string' ? e : ft(e, t)
  return Et(r).slice(0, 10)
}
function Ot(e, t, r) {
  const [n = {}, s] = typeof t == 'string' ? [{}, t] : [t, r],
    o =
      n.key ||
      St([
        s,
        D(n.baseURL),
        typeof e == 'string' ? e : '',
        D(n.params || n.query),
      ])
  if (!o || typeof o != 'string')
    throw new TypeError('[nuxt] [useFetch] key must be a string: ' + o)
  if (!e) throw new Error('[nuxt] [useFetch] request is missing.')
  const i = o === s ? '$f' + o : o,
    u = Ye(() => {
      let R = e
      return typeof R == 'function' && (R = R()), D(R)
    }),
    {
      server: l,
      lazy: c,
      default: f,
      transform: d,
      pick: y,
      watch: m,
      immediate: h,
      ...p
    } = n,
    g = Ze({ ...p, cache: typeof n.cache == 'boolean' ? void 0 : n.cache }),
    b = {
      server: l,
      lazy: c,
      default: f,
      transform: d,
      pick: y,
      immediate: h,
      watch: [g, u, ...(m || [])],
    }
  let E
  return ct(
    i,
    () => {
      var T
      return (
        (T = E == null ? void 0 : E.abort) == null || T.call(E),
        (E = typeof AbortController < 'u' ? new AbortController() : {}),
        typeof u.value == 'string' && u.value.startsWith('/'),
        (n.$fetch || globalThis.$fetch)(u.value, { signal: E.signal, ...g })
      )
    },
    b
  )
}
function Te(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: Be } = Object.prototype,
  { getPrototypeOf: oe } = Object,
  ie = ((e) => (t) => {
    const r = Be.call(t)
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  A = (e) => ((e = e.toLowerCase()), (t) => ie(t) === e),
  V = (e) => (t) => typeof t === e,
  { isArray: U } = Array,
  v = V('undefined')
function Rt(e) {
  return (
    e !== null &&
    !v(e) &&
    e.constructor !== null &&
    !v(e.constructor) &&
    P(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const Pe = A('ArrayBuffer')
function xt(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Pe(e.buffer)),
    t
  )
}
const At = V('string'),
  P = V('function'),
  Ne = V('number'),
  ae = (e) => e !== null && typeof e == 'object',
  Tt = (e) => e === !0 || e === !1,
  I = (e) => {
    if (ie(e) !== 'object') return !1
    const t = oe(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  Bt = A('Date'),
  Pt = A('File'),
  Nt = A('Blob'),
  Ct = A('FileList'),
  Dt = (e) => ae(e) && P(e.pipe),
  Ft = (e) => {
    const t = '[object FormData]'
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        Be.call(e) === t ||
        (P(e.toString) && e.toString() === t))
    )
  },
  kt = A('URLSearchParams'),
  Ut = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function H(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let n, s
  if ((typeof e != 'object' && (e = [e]), U(e)))
    for (n = 0, s = e.length; n < s; n++) t.call(null, e[n], n, e)
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length
    let u
    for (n = 0; n < i; n++) (u = o[n]), t.call(null, e[u], u, e)
  }
}
function Ce(e, t) {
  t = t.toLowerCase()
  const r = Object.keys(e)
  let n = r.length,
    s
  for (; n-- > 0; ) if (((s = r[n]), t === s.toLowerCase())) return s
  return null
}
const De = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  Fe = (e) => !v(e) && e !== De
function te() {
  const { caseless: e } = (Fe(this) && this) || {},
    t = {},
    r = (n, s) => {
      const o = (e && Ce(t, s)) || s
      I(t[o]) && I(n)
        ? (t[o] = te(t[o], n))
        : I(n)
        ? (t[o] = te({}, n))
        : U(n)
        ? (t[o] = n.slice())
        : (t[o] = n)
    }
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && H(arguments[n], r)
  return t
}
const Lt = (e, t, r, { allOwnKeys: n } = {}) => (
    H(
      t,
      (s, o) => {
        r && P(s) ? (e[o] = Te(s, r)) : (e[o] = s)
      },
      { allOwnKeys: n }
    ),
    e
  ),
  jt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  vt = (e, t, r, n) => {
    ;(e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      r && Object.assign(e.prototype, r)
  },
  Ht = (e, t, r, n) => {
    let s, o, i
    const u = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!n || n(i, e, t)) && !u[i] && ((t[i] = e[i]), (u[i] = !0))
      e = r !== !1 && oe(e)
    } while (e && (!r || r(e, t)) && e !== Object.prototype)
    return t
  },
  Mt = (e, t, r) => {
    ;(e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length)
    const n = e.indexOf(t, r)
    return n !== -1 && n === r
  },
  It = (e) => {
    if (!e) return null
    if (U(e)) return e
    let t = e.length
    if (!Ne(t)) return null
    const r = new Array(t)
    for (; t-- > 0; ) r[t] = e[t]
    return r
  },
  zt = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && oe(Uint8Array)),
  qt = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e)
    let s
    for (; (s = n.next()) && !s.done; ) {
      const o = s.value
      t.call(e, o[0], o[1])
    }
  },
  Jt = (e, t) => {
    let r
    const n = []
    for (; (r = e.exec(t)) !== null; ) n.push(r)
    return n
  },
  $t = A('HTMLFormElement'),
  Vt = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, s) {
      return n.toUpperCase() + s
    }),
  me = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  Wt = A('RegExp'),
  ke = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {}
    H(r, (s, o) => {
      t(s, o, e) !== !1 && (n[o] = s)
    }),
      Object.defineProperties(e, n)
  },
  Kt = (e) => {
    ke(e, (t, r) => {
      if (P(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1) return !1
      const n = e[r]
      if (P(n)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'")
          })
      }
    })
  },
  Gt = (e, t) => {
    const r = {},
      n = (s) => {
        s.forEach((o) => {
          r[o] = !0
        })
      }
    return U(e) ? n(e) : n(String(e).split(t)), r
  },
  Xt = () => {},
  Qt = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  X = 'abcdefghijklmnopqrstuvwxyz',
  ye = '0123456789',
  Ue = { DIGIT: ye, ALPHA: X, ALPHA_DIGIT: X + X.toUpperCase() + ye },
  Yt = (e = 16, t = Ue.ALPHA_DIGIT) => {
    let r = ''
    const { length: n } = t
    for (; e--; ) r += t[(Math.random() * n) | 0]
    return r
  }
function Zt(e) {
  return !!(
    e &&
    P(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const en = (e) => {
    const t = new Array(10),
      r = (n, s) => {
        if (ae(n)) {
          if (t.indexOf(n) >= 0) return
          if (!('toJSON' in n)) {
            t[s] = n
            const o = U(n) ? [] : {}
            return (
              H(n, (i, u) => {
                const l = r(i, s + 1)
                !v(l) && (o[u] = l)
              }),
              (t[s] = void 0),
              o
            )
          }
        }
        return n
      }
    return r(e, 0)
  },
  a = {
    isArray: U,
    isArrayBuffer: Pe,
    isBuffer: Rt,
    isFormData: Ft,
    isArrayBufferView: xt,
    isString: At,
    isNumber: Ne,
    isBoolean: Tt,
    isObject: ae,
    isPlainObject: I,
    isUndefined: v,
    isDate: Bt,
    isFile: Pt,
    isBlob: Nt,
    isRegExp: Wt,
    isFunction: P,
    isStream: Dt,
    isURLSearchParams: kt,
    isTypedArray: zt,
    isFileList: Ct,
    forEach: H,
    merge: te,
    extend: Lt,
    trim: Ut,
    stripBOM: jt,
    inherits: vt,
    toFlatObject: Ht,
    kindOf: ie,
    kindOfTest: A,
    endsWith: Mt,
    toArray: It,
    forEachEntry: qt,
    matchAll: Jt,
    isHTMLForm: $t,
    hasOwnProperty: me,
    hasOwnProp: me,
    reduceDescriptors: ke,
    freezeMethods: Kt,
    toObjectSet: Gt,
    toCamelCase: Vt,
    noop: Xt,
    toFiniteNumber: Qt,
    findKey: Ce,
    global: De,
    isContextDefined: Fe,
    ALPHABET: Ue,
    generateString: Yt,
    isSpecCompliantForm: Zt,
    toJSONObject: en,
  }
function w(e, t, r, n, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    s && (this.response = s)
}
a.inherits(w, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    }
  },
})
const Le = w.prototype,
  je = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  je[e] = { value: e }
})
Object.defineProperties(w, je)
Object.defineProperty(Le, 'isAxiosError', { value: !0 })
w.from = (e, t, r, n, s, o) => {
  const i = Object.create(Le)
  return (
    a.toFlatObject(
      e,
      i,
      function (l) {
        return l !== Error.prototype
      },
      (u) => u !== 'isAxiosError'
    ),
    w.call(i, e.message, t, r, n, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  )
}
const tn = null
function ne(e) {
  return a.isPlainObject(e) || a.isArray(e)
}
function ve(e) {
  return a.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function we(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = ve(s)), !r && o ? '[' + s + ']' : s
        })
        .join(r ? '.' : '')
    : t
}
function nn(e) {
  return a.isArray(e) && !e.some(ne)
}
const rn = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function W(e, t, r) {
  if (!a.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (r = a.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (p, g) {
        return !a.isUndefined(g[p])
      }
    ))
  const n = r.metaTokens,
    s = r.visitor || f,
    o = r.dots,
    i = r.indexes,
    l = (r.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t)
  if (!a.isFunction(s)) throw new TypeError('visitor must be a function')
  function c(h) {
    if (h === null) return ''
    if (a.isDate(h)) return h.toISOString()
    if (!l && a.isBlob(h))
      throw new w('Blob is not supported. Use a Buffer instead.')
    return a.isArrayBuffer(h) || a.isTypedArray(h)
      ? l && typeof Blob == 'function'
        ? new Blob([h])
        : Buffer.from(h)
      : h
  }
  function f(h, p, g) {
    let b = h
    if (h && !g && typeof h == 'object') {
      if (a.endsWith(p, '{}'))
        (p = n ? p : p.slice(0, -2)), (h = JSON.stringify(h))
      else if (
        (a.isArray(h) && nn(h)) ||
        ((a.isFileList(h) || a.endsWith(p, '[]')) && (b = a.toArray(h)))
      )
        return (
          (p = ve(p)),
          b.forEach(function (S, R) {
            !(a.isUndefined(S) || S === null) &&
              t.append(
                i === !0 ? we([p], R, o) : i === null ? p : p + '[]',
                c(S)
              )
          }),
          !1
        )
    }
    return ne(h) ? !0 : (t.append(we(g, p, o), c(h)), !1)
  }
  const d = [],
    y = Object.assign(rn, {
      defaultVisitor: f,
      convertValue: c,
      isVisitable: ne,
    })
  function m(h, p) {
    if (!a.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error('Circular reference detected in ' + p.join('.'))
      d.push(h),
        a.forEach(h, function (b, E) {
          ;(!(a.isUndefined(b) || b === null) &&
            s.call(t, b, a.isString(E) ? E.trim() : E, p, y)) === !0 &&
            m(b, p ? p.concat(E) : [E])
        }),
        d.pop()
    }
  }
  if (!a.isObject(e)) throw new TypeError('data must be an object')
  return m(e), t
}
function ge(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n]
  })
}
function ce(e, t) {
  ;(this._pairs = []), e && W(e, this, t)
}
const He = ce.prototype
He.append = function (t, r) {
  this._pairs.push([t, r])
}
He.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, ge)
      }
    : ge
  return this._pairs
    .map(function (s) {
      return r(s[0]) + '=' + r(s[1])
    }, '')
    .join('&')
}
function sn(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Me(e, t, r) {
  if (!t) return e
  const n = (r && r.encode) || sn,
    s = r && r.serialize
  let o
  if (
    (s
      ? (o = s(t, r))
      : (o = a.isURLSearchParams(t) ? t.toString() : new ce(t, r).toString(n)),
    o)
  ) {
    const i = e.indexOf('#')
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o)
  }
  return e
}
class on {
  constructor() {
    this.handlers = []
  }
  use(t, r, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    a.forEach(this.handlers, function (n) {
      n !== null && t(n)
    })
  }
}
const _e = on,
  Ie = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  an = typeof URLSearchParams < 'u' ? URLSearchParams : ce,
  cn = typeof FormData < 'u' ? FormData : null,
  un = (() => {
    let e
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u'
  })(),
  ln = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  O = {
    isBrowser: !0,
    classes: { URLSearchParams: an, FormData: cn, Blob },
    isStandardBrowserEnv: un,
    isStandardBrowserWebWorkerEnv: ln,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  }
function fn(e, t) {
  return W(
    e,
    new O.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, s, o) {
          return O.isNode && a.isBuffer(r)
            ? (this.append(n, r.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments)
        },
      },
      t
    )
  )
}
function dn(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function hn(e) {
  const t = {},
    r = Object.keys(e)
  let n
  const s = r.length
  let o
  for (n = 0; n < s; n++) (o = r[n]), (t[o] = e[o])
  return t
}
function ze(e) {
  function t(r, n, s, o) {
    let i = r[o++]
    const u = Number.isFinite(+i),
      l = o >= r.length
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      l
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], n]) : (s[i] = n), !u)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(r, n, s[i], o) && a.isArray(s[i]) && (s[i] = hn(s[i])),
          !u)
    )
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const r = {}
    return (
      a.forEachEntry(e, (n, s) => {
        t(dn(n), s, r, 0)
      }),
      r
    )
  }
  return null
}
const pn = { 'Content-Type': void 0 }
function mn(e, t, r) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e)
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n
    }
  return (r || JSON.stringify)(e)
}
const K = {
  transitional: Ie,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || '',
        s = n.indexOf('application/json') > -1,
        o = a.isObject(t)
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s && s ? JSON.stringify(ze(t)) : t
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t)
      )
        return t
      if (a.isArrayBufferView(t)) return t.buffer
      if (a.isURLSearchParams(t))
        return (
          r.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let u
      if (o) {
        if (n.indexOf('application/x-www-form-urlencoded') > -1)
          return fn(t, this.formSerializer).toString()
        if ((u = a.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData
          return W(u ? { 'files[]': t } : t, l && new l(), this.formSerializer)
        }
      }
      return o || s ? (r.setContentType('application/json', !1), mn(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || K.transitional,
        n = r && r.forcedJSONParsing,
        s = this.responseType === 'json'
      if (t && a.isString(t) && ((n && !this.responseType) || s)) {
        const i = !(r && r.silentJSONParsing) && s
        try {
          return JSON.parse(t)
        } catch (u) {
          if (i)
            throw u.name === 'SyntaxError'
              ? w.from(u, w.ERR_BAD_RESPONSE, this, null, this.response)
              : u
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: O.classes.FormData, Blob: O.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
}
a.forEach(['delete', 'get', 'head'], function (t) {
  K.headers[t] = {}
})
a.forEach(['post', 'put', 'patch'], function (t) {
  K.headers[t] = a.merge(pn)
})
const ue = K,
  yn = a.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  wn = (e) => {
    const t = {}
    let r, n, s
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            ;(s = i.indexOf(':')),
              (r = i.substring(0, s).trim().toLowerCase()),
              (n = i.substring(s + 1).trim()),
              !(!r || (t[r] && yn[r])) &&
                (r === 'set-cookie'
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ', ' + n : n))
          }),
      t
    )
  },
  be = Symbol('internals')
function L(e) {
  return e && String(e).trim().toLowerCase()
}
function z(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(z) : String(e)
}
function gn(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let n
  for (; (n = r.exec(e)); ) t[n[1]] = n[2]
  return t
}
function _n(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim())
}
function Q(e, t, r, n, s) {
  if (a.isFunction(n)) return n.call(this, t, r)
  if ((s && (t = r), !!a.isString(t))) {
    if (a.isString(n)) return t.indexOf(n) !== -1
    if (a.isRegExp(n)) return n.test(t)
  }
}
function bn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n)
}
function En(e, t) {
  const r = a.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (s, o, i) {
        return this[n].call(this, t, s, o, i)
      },
      configurable: !0,
    })
  })
}
class G {
  constructor(t) {
    t && this.set(t)
  }
  set(t, r, n) {
    const s = this
    function o(u, l, c) {
      const f = L(l)
      if (!f) throw new Error('header name must be a non-empty string')
      const d = a.findKey(s, f)
      ;(!d || s[d] === void 0 || c === !0 || (c === void 0 && s[d] !== !1)) &&
        (s[d || l] = z(u))
    }
    const i = (u, l) => a.forEach(u, (c, f) => o(c, f, l))
    return (
      a.isPlainObject(t) || t instanceof this.constructor
        ? i(t, r)
        : a.isString(t) && (t = t.trim()) && !_n(t)
        ? i(wn(t), r)
        : t != null && o(r, t, n),
      this
    )
  }
  get(t, r) {
    if (((t = L(t)), t)) {
      const n = a.findKey(this, t)
      if (n) {
        const s = this[n]
        if (!r) return s
        if (r === !0) return gn(s)
        if (a.isFunction(r)) return r.call(this, s, n)
        if (a.isRegExp(r)) return r.exec(s)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, r) {
    if (((t = L(t)), t)) {
      const n = a.findKey(this, t)
      return !!(n && this[n] !== void 0 && (!r || Q(this, this[n], n, r)))
    }
    return !1
  }
  delete(t, r) {
    const n = this
    let s = !1
    function o(i) {
      if (((i = L(i)), i)) {
        const u = a.findKey(n, i)
        u && (!r || Q(n, n[u], u, r)) && (delete n[u], (s = !0))
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s
  }
  clear(t) {
    const r = Object.keys(this)
    let n = r.length,
      s = !1
    for (; n--; ) {
      const o = r[n]
      ;(!t || Q(this, this[o], o, t, !0)) && (delete this[o], (s = !0))
    }
    return s
  }
  normalize(t) {
    const r = this,
      n = {}
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(n, o)
        if (i) {
          ;(r[i] = z(s)), delete r[o]
          return
        }
        const u = t ? bn(o) : String(o).trim()
        u !== o && delete r[o], (r[u] = z(s)), (n[u] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const r = Object.create(null)
    return (
      a.forEach(this, (n, s) => {
        n != null && n !== !1 && (r[s] = t && a.isArray(n) ? n.join(', ') : n)
      }),
      r
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ': ' + r).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...r) {
    const n = new this(t)
    return r.forEach((s) => n.set(s)), n
  }
  static accessor(t) {
    const n = (this[be] = this[be] = { accessors: {} }).accessors,
      s = this.prototype
    function o(i) {
      const u = L(i)
      n[u] || (En(s, i), (n[u] = !0))
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this
  }
}
G.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
a.freezeMethods(G.prototype)
a.freezeMethods(G)
const x = G
function Y(e, t) {
  const r = this || ue,
    n = t || r,
    s = x.from(n.headers)
  let o = n.data
  return (
    a.forEach(e, function (u) {
      o = u.call(r, o, s.normalize(), t ? t.status : void 0)
    }),
    s.normalize(),
    o
  )
}
function qe(e) {
  return !!(e && e.__CANCEL__)
}
function M(e, t, r) {
  w.call(this, e ?? 'canceled', w.ERR_CANCELED, t, r),
    (this.name = 'CanceledError')
}
a.inherits(M, w, { __CANCEL__: !0 })
function Sn(e, t, r) {
  const n = r.config.validateStatus
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new w(
          'Request failed with status code ' + r.status,
          [w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      )
}
const On = O.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (r, n, s, o, i, u) {
          const l = []
          l.push(r + '=' + encodeURIComponent(n)),
            a.isNumber(s) && l.push('expires=' + new Date(s).toGMTString()),
            a.isString(o) && l.push('path=' + o),
            a.isString(i) && l.push('domain=' + i),
            u === !0 && l.push('secure'),
            (document.cookie = l.join('; '))
        },
        read: function (r) {
          const n = document.cookie.match(
            new RegExp('(^|;\\s*)(' + r + ')=([^;]*)')
          )
          return n ? decodeURIComponent(n[3]) : null
        },
        remove: function (r) {
          this.write(r, '', Date.now() - 864e5)
        },
      }
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {},
      }
    })()
function Rn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function xn(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function Je(e, t) {
  return e && !Rn(t) ? xn(e, t) : t
}
const An = O.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        r = document.createElement('a')
      let n
      function s(o) {
        let i = o
        return (
          t && (r.setAttribute('href', i), (i = r.href)),
          r.setAttribute('href', i),
          {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, '') : '',
            hash: r.hash ? r.hash.replace(/^#/, '') : '',
            hostname: r.hostname,
            port: r.port,
            pathname:
              r.pathname.charAt(0) === '/' ? r.pathname : '/' + r.pathname,
          }
        )
      }
      return (
        (n = s(window.location.href)),
        function (i) {
          const u = a.isString(i) ? s(i) : i
          return u.protocol === n.protocol && u.host === n.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function Tn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function Bn(e, t) {
  e = e || 10
  const r = new Array(e),
    n = new Array(e)
  let s = 0,
    o = 0,
    i
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const c = Date.now(),
        f = n[o]
      i || (i = c), (r[s] = l), (n[s] = c)
      let d = o,
        y = 0
      for (; d !== s; ) (y += r[d++]), (d = d % e)
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), c - i < t)) return
      const m = f && c - f
      return m ? Math.round((y * 1e3) / m) : void 0
    }
  )
}
function Ee(e, t) {
  let r = 0
  const n = Bn(50, 250)
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      u = o - r,
      l = n(u),
      c = o <= i
    r = o
    const f = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && i && c ? (i - o) / l : void 0,
      event: s,
    }
    ;(f[t ? 'download' : 'upload'] = !0), e(f)
  }
}
const Pn = typeof XMLHttpRequest < 'u',
  Nn =
    Pn &&
    function (e) {
      return new Promise(function (r, n) {
        let s = e.data
        const o = x.from(e.headers).normalize(),
          i = e.responseType
        let u
        function l() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener('abort', u)
        }
        a.isFormData(s) &&
          (O.isStandardBrowserEnv || O.isStandardBrowserWebWorkerEnv) &&
          o.setContentType(!1)
        let c = new XMLHttpRequest()
        if (e.auth) {
          const m = e.auth.username || '',
            h = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          o.set('Authorization', 'Basic ' + btoa(m + ':' + h))
        }
        const f = Je(e.baseURL, e.url)
        c.open(e.method.toUpperCase(), Me(f, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout)
        function d() {
          if (!c) return
          const m = x.from(
              'getAllResponseHeaders' in c && c.getAllResponseHeaders()
            ),
            p = {
              data:
                !i || i === 'text' || i === 'json'
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: m,
              config: e,
              request: c,
            }
          Sn(
            function (b) {
              r(b), l()
            },
            function (b) {
              n(b), l()
            },
            p
          ),
            (c = null)
        }
        if (
          ('onloadend' in c
            ? (c.onloadend = d)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(d)
              }),
          (c.onabort = function () {
            c && (n(new w('Request aborted', w.ECONNABORTED, e, c)), (c = null))
          }),
          (c.onerror = function () {
            n(new w('Network Error', w.ERR_NETWORK, e, c)), (c = null)
          }),
          (c.ontimeout = function () {
            let h = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const p = e.transitional || Ie
            e.timeoutErrorMessage && (h = e.timeoutErrorMessage),
              n(
                new w(
                  h,
                  p.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null)
          }),
          O.isStandardBrowserEnv)
        ) {
          const m =
            (e.withCredentials || An(f)) &&
            e.xsrfCookieName &&
            On.read(e.xsrfCookieName)
          m && o.set(e.xsrfHeaderName, m)
        }
        s === void 0 && o.setContentType(null),
          'setRequestHeader' in c &&
            a.forEach(o.toJSON(), function (h, p) {
              c.setRequestHeader(p, h)
            }),
          a.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          i && i !== 'json' && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            c.addEventListener('progress', Ee(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            c.upload &&
            c.upload.addEventListener('progress', Ee(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (m) => {
              c &&
                (n(!m || m.type ? new M(null, e, c) : m), c.abort(), (c = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener('abort', u)))
        const y = Tn(f)
        if (y && O.protocols.indexOf(y) === -1) {
          n(new w('Unsupported protocol ' + y + ':', w.ERR_BAD_REQUEST, e))
          return
        }
        c.send(s || null)
      })
    },
  q = { http: tn, xhr: Nn }
a.forEach(q, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const Cn = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e]
    const { length: t } = e
    let r, n
    for (
      let s = 0;
      s < t && ((r = e[s]), !(n = a.isString(r) ? q[r.toLowerCase()] : r));
      s++
    );
    if (!n)
      throw n === !1
        ? new w(
            `Adapter ${r} is not supported by the environment`,
            'ERR_NOT_SUPPORT'
          )
        : new Error(
            a.hasOwnProp(q, r)
              ? `Adapter '${r}' is not available in the build`
              : `Unknown adapter '${r}'`
          )
    if (!a.isFunction(n)) throw new TypeError('adapter is not a function')
    return n
  },
  adapters: q,
}
function Z(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new M(null, e)
}
function Se(e) {
  return (
    Z(e),
    (e.headers = x.from(e.headers)),
    (e.data = Y.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Cn.getAdapter(e.adapter || ue.adapter)(e).then(
      function (n) {
        return (
          Z(e),
          (n.data = Y.call(e, e.transformResponse, n)),
          (n.headers = x.from(n.headers)),
          n
        )
      },
      function (n) {
        return (
          qe(n) ||
            (Z(e),
            n &&
              n.response &&
              ((n.response.data = Y.call(e, e.transformResponse, n.response)),
              (n.response.headers = x.from(n.response.headers)))),
          Promise.reject(n)
        )
      }
    )
  )
}
const Oe = (e) => (e instanceof x ? e.toJSON() : e)
function k(e, t) {
  t = t || {}
  const r = {}
  function n(c, f, d) {
    return a.isPlainObject(c) && a.isPlainObject(f)
      ? a.merge.call({ caseless: d }, c, f)
      : a.isPlainObject(f)
      ? a.merge({}, f)
      : a.isArray(f)
      ? f.slice()
      : f
  }
  function s(c, f, d) {
    if (a.isUndefined(f)) {
      if (!a.isUndefined(c)) return n(void 0, c, d)
    } else return n(c, f, d)
  }
  function o(c, f) {
    if (!a.isUndefined(f)) return n(void 0, f)
  }
  function i(c, f) {
    if (a.isUndefined(f)) {
      if (!a.isUndefined(c)) return n(void 0, c)
    } else return n(void 0, f)
  }
  function u(c, f, d) {
    if (d in t) return n(c, f)
    if (d in e) return n(void 0, c)
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (c, f) => s(Oe(c), Oe(f), !0),
  }
  return (
    a.forEach(Object.keys(e).concat(Object.keys(t)), function (f) {
      const d = l[f] || s,
        y = d(e[f], t[f], f)
      ;(a.isUndefined(y) && d !== u) || (r[f] = y)
    }),
    r
  )
}
const $e = '1.3.3',
  le = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    le[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const Re = {}
le.transitional = function (t, r, n) {
  function s(o, i) {
    return (
      '[Axios v' +
      $e +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (n ? '. ' + n : '')
    )
  }
  return (o, i, u) => {
    if (t === !1)
      throw new w(
        s(i, ' has been removed' + (r ? ' in ' + r : '')),
        w.ERR_DEPRECATED
      )
    return (
      r &&
        !Re[i] &&
        ((Re[i] = !0),
        console.warn(
          s(
            i,
            ' has been deprecated since v' +
              r +
              ' and will be removed in the near future'
          )
        )),
      t ? t(o, i, u) : !0
    )
  }
}
function Dn(e, t, r) {
  if (typeof e != 'object')
    throw new w('options must be an object', w.ERR_BAD_OPTION_VALUE)
  const n = Object.keys(e)
  let s = n.length
  for (; s-- > 0; ) {
    const o = n[s],
      i = t[o]
    if (i) {
      const u = e[o],
        l = u === void 0 || i(u, o, e)
      if (l !== !0)
        throw new w('option ' + o + ' must be ' + l, w.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (r !== !0) throw new w('Unknown option ' + o, w.ERR_BAD_OPTION)
  }
}
const re = { assertOptions: Dn, validators: le },
  B = re.validators
class $ {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new _e(), response: new _e() })
  }
  request(t, r) {
    typeof t == 'string' ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = k(this.defaults, r))
    const { transitional: n, paramsSerializer: s, headers: o } = r
    n !== void 0 &&
      re.assertOptions(
        n,
        {
          silentJSONParsing: B.transitional(B.boolean),
          forcedJSONParsing: B.transitional(B.boolean),
          clarifyTimeoutError: B.transitional(B.boolean),
        },
        !1
      ),
      s !== void 0 &&
        re.assertOptions(s, { encode: B.function, serialize: B.function }, !0),
      (r.method = (r.method || this.defaults.method || 'get').toLowerCase())
    let i
    ;(i = o && a.merge(o.common, o[r.method])),
      i &&
        a.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          (h) => {
            delete o[h]
          }
        ),
      (r.headers = x.concat(i, o))
    const u = []
    let l = !0
    this.interceptors.request.forEach(function (p) {
      ;(typeof p.runWhen == 'function' && p.runWhen(r) === !1) ||
        ((l = l && p.synchronous), u.unshift(p.fulfilled, p.rejected))
    })
    const c = []
    this.interceptors.response.forEach(function (p) {
      c.push(p.fulfilled, p.rejected)
    })
    let f,
      d = 0,
      y
    if (!l) {
      const h = [Se.bind(this), void 0]
      for (
        h.unshift.apply(h, u),
          h.push.apply(h, c),
          y = h.length,
          f = Promise.resolve(r);
        d < y;

      )
        f = f.then(h[d++], h[d++])
      return f
    }
    y = u.length
    let m = r
    for (d = 0; d < y; ) {
      const h = u[d++],
        p = u[d++]
      try {
        m = h(m)
      } catch (g) {
        p.call(this, g)
        break
      }
    }
    try {
      f = Se.call(this, m)
    } catch (h) {
      return Promise.reject(h)
    }
    for (d = 0, y = c.length; d < y; ) f = f.then(c[d++], c[d++])
    return f
  }
  getUri(t) {
    t = k(this.defaults, t)
    const r = Je(t.baseURL, t.url)
    return Me(r, t.params, t.paramsSerializer)
  }
}
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
  $.prototype[t] = function (r, n) {
    return this.request(k(n || {}, { method: t, url: r, data: (n || {}).data }))
  }
})
a.forEach(['post', 'put', 'patch'], function (t) {
  function r(n) {
    return function (o, i, u) {
      return this.request(
        k(u || {}, {
          method: t,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i,
        })
      )
    }
  }
  ;($.prototype[t] = r()), ($.prototype[t + 'Form'] = r(!0))
})
const J = $
class fe {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let r
    this.promise = new Promise(function (o) {
      r = o
    })
    const n = this
    this.promise.then((s) => {
      if (!n._listeners) return
      let o = n._listeners.length
      for (; o-- > 0; ) n._listeners[o](s)
      n._listeners = null
    }),
      (this.promise.then = (s) => {
        let o
        const i = new Promise((u) => {
          n.subscribe(u), (o = u)
        }).then(s)
        return (
          (i.cancel = function () {
            n.unsubscribe(o)
          }),
          i
        )
      }),
      t(function (o, i, u) {
        n.reason || ((n.reason = new M(o, i, u)), r(n.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const r = this._listeners.indexOf(t)
    r !== -1 && this._listeners.splice(r, 1)
  }
  static source() {
    let t
    return {
      token: new fe(function (s) {
        t = s
      }),
      cancel: t,
    }
  }
}
const Fn = fe
function kn(e) {
  return function (r) {
    return e.apply(null, r)
  }
}
function Un(e) {
  return a.isObject(e) && e.isAxiosError === !0
}
const se = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(se).forEach(([e, t]) => {
  se[t] = e
})
const Ln = se
function Ve(e) {
  const t = new J(e),
    r = Te(J.prototype.request, t)
  return (
    a.extend(r, J.prototype, t, { allOwnKeys: !0 }),
    a.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (s) {
      return Ve(k(e, s))
    }),
    r
  )
}
const _ = Ve(ue)
_.Axios = J
_.CanceledError = M
_.CancelToken = Fn
_.isCancel = qe
_.VERSION = $e
_.toFormData = W
_.AxiosError = w
_.Cancel = _.CanceledError
_.all = function (t) {
  return Promise.all(t)
}
_.spread = kn
_.isAxiosError = Un
_.mergeConfig = k
_.AxiosHeaders = x
_.formToJSON = (e) => ze(a.isHTMLForm(e) ? new FormData(e) : e)
_.HttpStatusCode = Ln
_.default = _
const xe = _,
  jn = { class: 'scroll-y' },
  vn = j('div', null, '(OSR) Optical character recognition', -1),
  Hn = { class: 'images' },
  Mn = ['src'],
  In = j('div', null, 'Text inner image:', -1),
  qn = et({
    __name: 'index',
    setup(e) {
      tt().commit('app/setIsPageLoaderHide', !0)
      const r = C(),
        n = C(''),
        s = C(''),
        o = C('')
      nt(async () => {
        n.value = await l()
        const { data: c } = await Ot(
          '/api/getRandomMeme',
          { method: 'POST', body: { url: n.value } },
          '$bBwKkUdqYJ'
        )
        console.log('data', c)
        const f = Object.assign({
          '/assets/challenge/ImageToText/file.jpeg': () =>
            he(
              () => import('./file.0e7eda17.js'),
              [
                './file.0e7eda17.js',
                './entry.b5c09835.js',
                './entry.76c4abb4.css',
              ],
              import.meta.url
            ),
          '/assets/challenge/ImageToText/file.png': () =>
            he(
              () => import('./file.a2b9a51d.js'),
              [
                './file.a2b9a51d.js',
                './entry.b5c09835.js',
                './entry.76c4abb4.css',
              ],
              import.meta.url
            ),
        })
        ;(s.value = `/_nuxt/${c.value.directory}/${c.value.fileName}.${c.value.fileType}`),
          console.log('importImages', f),
          (r.value = await i(s.value)),
          console.log('file', r.value),
          await u(r.value)
      }),
        ee(() => {
          debugger
        })
      async function i(c) {
        const f = c.split('/').at(-1),
          d = await rt(c, { responseType: 'blob' })
        return console.log('fileName', f, d), d
      }
      async function u(c) {
        const f = new FormData()
        f.append('image', c),
          xe
            .post('https://api.api-ninjas.com/v1/imagetotext', f, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'X-Api-Key': 'NYU1gAiQjDbX5zmq5E16wg==dGQOlldR4D80fX7E',
              },
            })
            .then((d) => {
              ;(o.value = d.data.map((y) => y.text).join(' ')),
                console.log('res', d)
            })
            .catch((d) => console.error(d))
      }
      const l = async () => {
        let c = ''
        return (
          await xe
            .get('https://meme-api.com/gimme')
            .then((f) => {
              const d = f.data.preview
              c = d[3] || d.at(-1)
            })
            .catch((f) => console.log(f)),
          c
        )
      }
      return (c, f) => (
        st(),
        ot('div', jn, [
          vn,
          j('div', Hn, [
            j('img', { src: D(n) }, null, 8, Mn),
            In,
            j('div', null, it(D(o)), 1),
          ]),
        ])
      )
    },
  })
export { qn as default }
