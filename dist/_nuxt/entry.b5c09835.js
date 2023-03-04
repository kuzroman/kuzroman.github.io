function js(e, t) {
  const n = Object.create(null),
    r = e.split(',')
  for (let s = 0; s < r.length; s++) n[r[s]] = !0
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s]
}
function Ar(e) {
  if (G(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ye(r) ? qc(r) : Ar(r)
      if (s) for (const o in s) t[o] = s[o]
    }
    return t
  } else {
    if (ye(e)) return e
    if (he(e)) return e
  }
}
const Uc = /;(?![^(]*\))/g,
  Kc = /:([^]+)/,
  Wc = /\/\*.*?\*\//gs
function qc(e) {
  const t = {}
  return (
    e
      .replace(Wc, '')
      .split(Uc)
      .forEach((n) => {
        if (n) {
          const r = n.split(Kc)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function Te(e) {
  let t = ''
  if (ye(e)) t = e
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const r = Te(e[n])
      r && (t += r + ' ')
    }
  else if (he(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function pg(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return t && !ye(t) && (e.class = Te(t)), n && (e.style = Ar(n)), e
}
const Vc =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Gc = js(Vc)
function Bi(e) {
  return !!e || e === ''
}
const Di = (e) =>
    ye(e)
      ? e
      : e == null
      ? ''
      : G(e) || (he(e) && (e.toString === Wi || !J(e.toString)))
      ? JSON.stringify(e, $i, 2)
      : String(e),
  $i = (e, t) =>
    t && t.__v_isRef
      ? $i(e, t.value)
      : un(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {}
          ),
        }
      : Ui(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : he(t) && !G(t) && !qi(t)
      ? String(t)
      : t,
  pe = {},
  an = [],
  ht = () => {},
  zc = () => !1,
  Qc = /^on[^a-z]/,
  Qn = (e) => Qc.test(e),
  Fs = (e) => e.startsWith('onUpdate:'),
  we = Object.assign,
  Bs = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Jc = Object.prototype.hasOwnProperty,
  re = (e, t) => Jc.call(e, t),
  G = Array.isArray,
  un = (e) => Or(e) === '[object Map]',
  Ui = (e) => Or(e) === '[object Set]',
  J = (e) => typeof e == 'function',
  ye = (e) => typeof e == 'string',
  Ds = (e) => typeof e == 'symbol',
  he = (e) => e !== null && typeof e == 'object',
  Ki = (e) => he(e) && J(e.then) && J(e.catch),
  Wi = Object.prototype.toString,
  Or = (e) => Wi.call(e),
  Yc = (e) => Or(e).slice(8, -1),
  qi = (e) => Or(e) === '[object Object]',
  $s = (e) =>
    ye(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Ln = js(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Sr = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Xc = /-(\w)/g,
  _t = Sr((e) => e.replace(Xc, (t, n) => (n ? n.toUpperCase() : ''))),
  Zc = /\B([A-Z])/g,
  En = Sr((e) => e.replace(Zc, '-$1').toLowerCase()),
  kr = Sr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  qr = Sr((e) => (e ? `on${kr(e)}` : '')),
  $n = (e, t) => !Object.is(e, t),
  Vr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  pr = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  ea = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Vi = (e) => {
    const t = ye(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let vo
const ta = () =>
  vo ||
  (vo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
let ft
class Gi {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ft),
      !t && ft && (this.index = (ft.scopes || (ft.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = ft
      try {
        return (ft = this), t()
      } finally {
        ft = n
      }
    }
  }
  on() {
    ft = this
  }
  off() {
    ft = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop()
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function na(e) {
  return new Gi(e)
}
function ra(e, t = ft) {
  t && t.active && t.effects.push(e)
}
function sa() {
  return ft
}
const Us = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  zi = (e) => (e.w & Bt) > 0,
  Qi = (e) => (e.n & Bt) > 0,
  oa = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Bt
  },
  ia = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let r = 0; r < t.length; r++) {
        const s = t[r]
        zi(s) && !Qi(s) ? s.delete(e) : (t[n++] = s), (s.w &= ~Bt), (s.n &= ~Bt)
      }
      t.length = n
    }
  },
  mr = new WeakMap()
let kn = 0,
  Bt = 1
const us = 30
let dt
const zt = Symbol(''),
  fs = Symbol('')
class Ks {
  constructor(t, n = null, r) {
    ;(this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      ra(this, r)
  }
  run() {
    if (!this.active) return this.fn()
    let t = dt,
      n = Nt
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = dt),
        (dt = this),
        (Nt = !0),
        (Bt = 1 << ++kn),
        kn <= us ? oa(this) : bo(this),
        this.fn()
      )
    } finally {
      kn <= us && ia(this),
        (Bt = 1 << --kn),
        (dt = this.parent),
        (Nt = n),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    dt === this
      ? (this.deferStop = !0)
      : this.active &&
        (bo(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function bo(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let Nt = !0
const Ji = []
function wn() {
  Ji.push(Nt), (Nt = !1)
}
function Cn() {
  const e = Ji.pop()
  Nt = e === void 0 ? !0 : e
}
function Me(e, t, n) {
  if (Nt && dt) {
    let r = mr.get(e)
    r || mr.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = Us())), Yi(s)
  }
}
function Yi(e, t) {
  let n = !1
  kn <= us ? Qi(e) || ((e.n |= Bt), (n = !zi(e))) : (n = !e.has(dt)),
    n && (e.add(dt), dt.deps.push(e))
}
function Pt(e, t, n, r, s, o) {
  const i = mr.get(e)
  if (!i) return
  let l = []
  if (t === 'clear') l = [...i.values()]
  else if (n === 'length' && G(e)) {
    const c = Number(r)
    i.forEach((a, u) => {
      ;(u === 'length' || u >= c) && l.push(a)
    })
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case 'add':
        G(e)
          ? $s(n) && l.push(i.get('length'))
          : (l.push(i.get(zt)), un(e) && l.push(i.get(fs)))
        break
      case 'delete':
        G(e) || (l.push(i.get(zt)), un(e) && l.push(i.get(fs)))
        break
      case 'set':
        un(e) && l.push(i.get(zt))
        break
    }
  if (l.length === 1) l[0] && ds(l[0])
  else {
    const c = []
    for (const a of l) a && c.push(...a)
    ds(Us(c))
  }
}
function ds(e, t) {
  const n = G(e) ? e : [...e]
  for (const r of n) r.computed && _o(r)
  for (const r of n) r.computed || _o(r)
}
function _o(e, t) {
  ;(e !== dt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function la(e, t) {
  var n
  return (n = mr.get(e)) === null || n === void 0 ? void 0 : n.get(t)
}
const ca = js('__proto__,__v_isRef,__isVue'),
  Xi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Ds)
  ),
  aa = Ws(),
  ua = Ws(!1, !0),
  fa = Ws(!0),
  Eo = da()
function da() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = se(this)
        for (let o = 0, i = this.length; o < i; o++) Me(r, 'get', o + '')
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(se)) : s
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        wn()
        const r = se(this)[t].apply(this, n)
        return Cn(), r
      }
    }),
    e
  )
}
function ha(e) {
  const t = se(this)
  return Me(t, 'has', e), t.hasOwnProperty(e)
}
function Ws(e = !1, t = !1) {
  return function (r, s, o) {
    if (s === '__v_isReactive') return !e
    if (s === '__v_isReadonly') return e
    if (s === '__v_isShallow') return t
    if (s === '__v_raw' && o === (e ? (t ? Sa : rl) : t ? nl : tl).get(r))
      return r
    const i = G(r)
    if (!e) {
      if (i && re(Eo, s)) return Reflect.get(Eo, s, o)
      if (s === 'hasOwnProperty') return ha
    }
    const l = Reflect.get(r, s, o)
    return (Ds(s) ? Xi.has(s) : ca(s)) || (e || Me(r, 'get', s), t)
      ? l
      : Ee(l)
      ? i && $s(s)
        ? l
        : l.value
      : he(l)
      ? e
        ? sl(l)
        : Et(l)
      : l
  }
}
const pa = Zi(),
  ma = Zi(!0)
function Zi(e = !1) {
  return function (n, r, s, o) {
    let i = n[r]
    if (Jt(i) && Ee(i) && !Ee(s)) return !1
    if (
      !e &&
      (!gr(s) && !Jt(s) && ((i = se(i)), (s = se(s))), !G(n) && Ee(i) && !Ee(s))
    )
      return (i.value = s), !0
    const l = G(n) && $s(r) ? Number(r) < n.length : re(n, r),
      c = Reflect.set(n, r, s, o)
    return (
      n === se(o) && (l ? $n(s, i) && Pt(n, 'set', r, s) : Pt(n, 'add', r, s)),
      c
    )
  }
}
function ga(e, t) {
  const n = re(e, t)
  e[t]
  const r = Reflect.deleteProperty(e, t)
  return r && n && Pt(e, 'delete', t, void 0), r
}
function ya(e, t) {
  const n = Reflect.has(e, t)
  return (!Ds(t) || !Xi.has(t)) && Me(e, 'has', t), n
}
function va(e) {
  return Me(e, 'iterate', G(e) ? 'length' : zt), Reflect.ownKeys(e)
}
const el = { get: aa, set: pa, deleteProperty: ga, has: ya, ownKeys: va },
  ba = {
    get: fa,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    },
  },
  _a = we({}, el, { get: ua, set: ma }),
  qs = (e) => e,
  Ir = (e) => Reflect.getPrototypeOf(e)
function tr(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = se(e),
    o = se(t)
  n || (t !== o && Me(s, 'get', t), Me(s, 'get', o))
  const { has: i } = Ir(s),
    l = r ? qs : n ? zs : Un
  if (i.call(s, t)) return l(e.get(t))
  if (i.call(s, o)) return l(e.get(o))
  e !== s && e.get(t)
}
function nr(e, t = !1) {
  const n = this.__v_raw,
    r = se(n),
    s = se(e)
  return (
    t || (e !== s && Me(r, 'has', e), Me(r, 'has', s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function rr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Me(se(e), 'iterate', zt), Reflect.get(e, 'size', e)
  )
}
function wo(e) {
  e = se(e)
  const t = se(this)
  return Ir(t).has.call(t, e) || (t.add(e), Pt(t, 'add', e, e)), this
}
function Co(e, t) {
  t = se(t)
  const n = se(this),
    { has: r, get: s } = Ir(n)
  let o = r.call(n, e)
  o || ((e = se(e)), (o = r.call(n, e)))
  const i = s.call(n, e)
  return (
    n.set(e, t), o ? $n(t, i) && Pt(n, 'set', e, t) : Pt(n, 'add', e, t), this
  )
}
function Ro(e) {
  const t = se(this),
    { has: n, get: r } = Ir(t)
  let s = n.call(t, e)
  s || ((e = se(e)), (s = n.call(t, e))), r && r.call(t, e)
  const o = t.delete(e)
  return s && Pt(t, 'delete', e, void 0), o
}
function Po() {
  const e = se(this),
    t = e.size !== 0,
    n = e.clear()
  return t && Pt(e, 'clear', void 0, void 0), n
}
function sr(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      l = se(i),
      c = t ? qs : e ? zs : Un
    return (
      !e && Me(l, 'iterate', zt), i.forEach((a, u) => r.call(s, c(a), c(u), o))
    )
  }
}
function or(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = se(s),
      i = un(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      c = e === 'keys' && i,
      a = s[e](...r),
      u = n ? qs : t ? zs : Un
    return (
      !t && Me(o, 'iterate', c ? fs : zt),
      {
        next() {
          const { value: f, done: h } = a.next()
          return h
            ? { value: f, done: h }
            : { value: l ? [u(f[0]), u(f[1])] : u(f), done: h }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Ot(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function Ea() {
  const e = {
      get(o) {
        return tr(this, o)
      },
      get size() {
        return rr(this)
      },
      has: nr,
      add: wo,
      set: Co,
      delete: Ro,
      clear: Po,
      forEach: sr(!1, !1),
    },
    t = {
      get(o) {
        return tr(this, o, !1, !0)
      },
      get size() {
        return rr(this)
      },
      has: nr,
      add: wo,
      set: Co,
      delete: Ro,
      clear: Po,
      forEach: sr(!1, !0),
    },
    n = {
      get(o) {
        return tr(this, o, !0)
      },
      get size() {
        return rr(this, !0)
      },
      has(o) {
        return nr.call(this, o, !0)
      },
      add: Ot('add'),
      set: Ot('set'),
      delete: Ot('delete'),
      clear: Ot('clear'),
      forEach: sr(!0, !1),
    },
    r = {
      get(o) {
        return tr(this, o, !0, !0)
      },
      get size() {
        return rr(this, !0)
      },
      has(o) {
        return nr.call(this, o, !0)
      },
      add: Ot('add'),
      set: Ot('set'),
      delete: Ot('delete'),
      clear: Ot('clear'),
      forEach: sr(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = or(o, !1, !1)),
        (n[o] = or(o, !0, !1)),
        (t[o] = or(o, !1, !0)),
        (r[o] = or(o, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [wa, Ca, Ra, Pa] = Ea()
function Vs(e, t) {
  const n = t ? (e ? Pa : Ra) : e ? Ca : wa
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
      ? e
      : s === '__v_raw'
      ? r
      : Reflect.get(re(n, s) && s in r ? n : r, s, o)
}
const Ta = { get: Vs(!1, !1) },
  Aa = { get: Vs(!1, !0) },
  Oa = { get: Vs(!0, !1) },
  tl = new WeakMap(),
  nl = new WeakMap(),
  rl = new WeakMap(),
  Sa = new WeakMap()
function ka(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Ia(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ka(Yc(e))
}
function Et(e) {
  return Jt(e) ? e : Gs(e, !1, el, Ta, tl)
}
function La(e) {
  return Gs(e, !1, _a, Aa, nl)
}
function sl(e) {
  return Gs(e, !0, ba, Oa, rl)
}
function Gs(e, t, n, r, s) {
  if (!he(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = s.get(e)
  if (o) return o
  const i = Ia(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? r : n)
  return s.set(e, l), l
}
function fn(e) {
  return Jt(e) ? fn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Jt(e) {
  return !!(e && e.__v_isReadonly)
}
function gr(e) {
  return !!(e && e.__v_isShallow)
}
function ol(e) {
  return fn(e) || Jt(e)
}
function se(e) {
  const t = e && e.__v_raw
  return t ? se(t) : e
}
function il(e) {
  return pr(e, '__v_skip', !0), e
}
const Un = (e) => (he(e) ? Et(e) : e),
  zs = (e) => (he(e) ? sl(e) : e)
function ll(e) {
  Nt && dt && ((e = se(e)), Yi(e.dep || (e.dep = Us())))
}
function cl(e, t) {
  e = se(e)
  const n = e.dep
  n && ds(n)
}
function Ee(e) {
  return !!(e && e.__v_isRef === !0)
}
function Se(e) {
  return al(e, !1)
}
function hs(e) {
  return al(e, !0)
}
function al(e, t) {
  return Ee(e) ? e : new Ma(e, t)
}
class Ma {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : se(t)),
      (this._value = n ? t : Un(t))
  }
  get value() {
    return ll(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || gr(t) || Jt(t)
    ;(t = n ? t : se(t)),
      $n(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Un(t)), cl(this))
  }
}
function te(e) {
  return Ee(e) ? e.value : e
}
const xa = {
  get: (e, t, n) => te(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return Ee(s) && !Ee(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function ul(e) {
  return fn(e) ? e : new Proxy(e, xa)
}
class Ha {
  constructor(t, n, r) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return la(se(this._object), this._key)
  }
}
function fl(e, t, n) {
  const r = e[t]
  return Ee(r) ? r : new Ha(e, t, n)
}
var dl
class Na {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[dl] = !1),
      (this._dirty = !0),
      (this.effect = new Ks(t, () => {
        this._dirty || ((this._dirty = !0), cl(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = se(this)
    return (
      ll(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
dl = '__v_isReadonly'
function ja(e, t, n = !1) {
  let r, s
  const o = J(e)
  return (
    o ? ((r = e), (s = ht)) : ((r = e.get), (s = e.set)),
    new Na(r, s, o || !s, n)
  )
}
function jt(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (o) {
    Rn(o, t, n)
  }
  return s
}
function lt(e, t, n, r) {
  if (J(e)) {
    const o = jt(e, t, n, r)
    return (
      o &&
        Ki(o) &&
        o.catch((i) => {
          Rn(i, t, n)
        }),
      o
    )
  }
  const s = []
  for (let o = 0; o < e.length; o++) s.push(lt(e[o], t, n, r))
  return s
}
function Rn(e, t, n, r = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const i = t.proxy,
      l = n
    for (; o; ) {
      const a = o.ec
      if (a) {
        for (let u = 0; u < a.length; u++) if (a[u](e, i, l) === !1) return
      }
      o = o.parent
    }
    const c = t.appContext.config.errorHandler
    if (c) {
      jt(c, null, 10, [e, i, l])
      return
    }
  }
  Fa(e, n, s, r)
}
function Fa(e, t, n, r = !0) {
  console.error(e)
}
let Kn = !1,
  ps = !1
const Pe = []
let vt = 0
const dn = []
let Rt = null,
  Vt = 0
const hl = Promise.resolve()
let Qs = null
function Jn(e) {
  const t = Qs || hl
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ba(e) {
  let t = vt + 1,
    n = Pe.length
  for (; t < n; ) {
    const r = (t + n) >>> 1
    Wn(Pe[r]) < e ? (t = r + 1) : (n = r)
  }
  return t
}
function Lr(e) {
  ;(!Pe.length || !Pe.includes(e, Kn && e.allowRecurse ? vt + 1 : vt)) &&
    (e.id == null ? Pe.push(e) : Pe.splice(Ba(e.id), 0, e), pl())
}
function pl() {
  !Kn && !ps && ((ps = !0), (Qs = hl.then(gl)))
}
function Da(e) {
  const t = Pe.indexOf(e)
  t > vt && Pe.splice(t, 1)
}
function ml(e) {
  G(e)
    ? dn.push(...e)
    : (!Rt || !Rt.includes(e, e.allowRecurse ? Vt + 1 : Vt)) && dn.push(e),
    pl()
}
function To(e, t = Kn ? vt + 1 : 0) {
  for (; t < Pe.length; t++) {
    const n = Pe[t]
    n && n.pre && (Pe.splice(t, 1), t--, n())
  }
}
function yr(e) {
  if (dn.length) {
    const t = [...new Set(dn)]
    if (((dn.length = 0), Rt)) {
      Rt.push(...t)
      return
    }
    for (Rt = t, Rt.sort((n, r) => Wn(n) - Wn(r)), Vt = 0; Vt < Rt.length; Vt++)
      Rt[Vt]()
    ;(Rt = null), (Vt = 0)
  }
}
const Wn = (e) => (e.id == null ? 1 / 0 : e.id),
  $a = (e, t) => {
    const n = Wn(e) - Wn(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function gl(e) {
  ;(ps = !1), (Kn = !0), Pe.sort($a)
  const t = ht
  try {
    for (vt = 0; vt < Pe.length; vt++) {
      const n = Pe[vt]
      n && n.active !== !1 && jt(n, null, 14)
    }
  } finally {
    ;(vt = 0),
      (Pe.length = 0),
      yr(),
      (Kn = !1),
      (Qs = null),
      (Pe.length || dn.length) && gl()
  }
}
function Ua(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || pe
  let s = n
  const o = t.startsWith('update:'),
    i = o && t.slice(7)
  if (i && i in r) {
    const u = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: f, trim: h } = r[u] || pe
    h && (s = n.map((m) => (ye(m) ? m.trim() : m))), f && (s = n.map(ea))
  }
  let l,
    c = r[(l = qr(t))] || r[(l = qr(_t(t)))]
  !c && o && (c = r[(l = qr(En(t)))]), c && lt(c, e, 6, s)
  const a = r[l + 'Once']
  if (a) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), lt(a, e, 6, s)
  }
}
function yl(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const o = e.emits
  let i = {},
    l = !1
  if (!J(e)) {
    const c = (a) => {
      const u = yl(a, t, !0)
      u && ((l = !0), we(i, u))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !o && !l
    ? (he(e) && r.set(e, null), null)
    : (G(o) ? o.forEach((c) => (i[c] = null)) : we(i, o),
      he(e) && r.set(e, i),
      i)
}
function Mr(e, t) {
  return !e || !Qn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      re(e, t[0].toLowerCase() + t.slice(1)) || re(e, En(t)) || re(e, t))
}
let Ae = null,
  xr = null
function vr(e) {
  const t = Ae
  return (Ae = e), (xr = (e && e.type.__scopeId) || null), t
}
function Ka(e) {
  xr = e
}
function Wa() {
  xr = null
}
function br(e, t = Ae, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && jo(-1)
    const o = vr(t)
    let i
    try {
      i = e(...s)
    } finally {
      vr(o), r._d && jo(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Gr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: a,
    render: u,
    renderCache: f,
    data: h,
    setupState: m,
    ctx: v,
    inheritAttrs: E,
  } = e
  let A, y
  const g = vr(e)
  try {
    if (n.shapeFlag & 4) {
      const O = s || r
      ;(A = st(u.call(O, O, f, o, m, h, v))), (y = c)
    } else {
      const O = t
      ;(A = st(
        O.length > 1 ? O(o, { attrs: c, slots: l, emit: a }) : O(o, null)
      )),
        (y = t.props ? c : Va(c))
    }
  } catch (O) {
    ;(Nn.length = 0), Rn(O, e, 1), (A = oe(ke))
  }
  let _ = A
  if (y && E !== !1) {
    const O = Object.keys(y),
      { shapeFlag: P } = _
    O.length && P & 7 && (i && O.some(Fs) && (y = Ga(y, i)), (_ = Dt(_, y)))
  }
  return (
    n.dirs && ((_ = Dt(_)), (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (_.transition = n.transition),
    (A = _),
    vr(g),
    A
  )
}
function qa(e) {
  let t
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    if (Vn(r)) {
      if (r.type !== ke || r.children === 'v-if') {
        if (t) return
        t = r
      }
    } else return
  }
  return t
}
const Va = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Qn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Ga = (e, t) => {
    const n = {}
    for (const r in e) (!Fs(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function za(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    a = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return r ? Ao(r, i, a) : !!i
    if (c & 8) {
      const u = t.dynamicProps
      for (let f = 0; f < u.length; f++) {
        const h = u[f]
        if (i[h] !== r[h] && !Mr(a, h)) return !0
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Ao(r, i, a)
        : !0
      : !!i
  return !1
}
function Ao(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const o = r[s]
    if (t[o] !== e[o] && !Mr(n, o)) return !0
  }
  return !1
}
function Js({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const Qa = (e) => e.__isSuspense,
  Ja = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, r, s, o, i, l, c, a) {
      e == null ? Xa(t, n, r, s, o, i, l, c, a) : Za(e, t, n, r, s, i, l, c, a)
    },
    hydrate: eu,
    create: Ys,
    normalize: tu,
  },
  Ya = Ja
function qn(e, t) {
  const n = e.props && e.props[t]
  J(n) && n()
}
function Xa(e, t, n, r, s, o, i, l, c) {
  const {
      p: a,
      o: { createElement: u },
    } = c,
    f = u('div'),
    h = (e.suspense = Ys(e, s, r, t, f, n, o, i, l, c))
  a(null, (h.pendingBranch = e.ssContent), f, null, r, h, o, i),
    h.deps > 0
      ? (qn(e, 'onPending'),
        qn(e, 'onFallback'),
        a(null, e.ssFallback, t, n, r, null, o, i),
        hn(h, e.ssFallback))
      : h.resolve()
}
function Za(e, t, n, r, s, o, i, l, { p: c, um: a, o: { createElement: u } }) {
  const f = (t.suspense = e.suspense)
  ;(f.vnode = t), (t.el = e.el)
  const h = t.ssContent,
    m = t.ssFallback,
    { activeBranch: v, pendingBranch: E, isInFallback: A, isHydrating: y } = f
  if (E)
    (f.pendingBranch = h),
      bt(h, E)
        ? (c(E, h, f.hiddenContainer, null, s, f, o, i, l),
          f.deps <= 0
            ? f.resolve()
            : A && (c(v, m, n, r, s, null, o, i, l), hn(f, m)))
        : (f.pendingId++,
          y ? ((f.isHydrating = !1), (f.activeBranch = E)) : a(E, s, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = u('div')),
          A
            ? (c(null, h, f.hiddenContainer, null, s, f, o, i, l),
              f.deps <= 0
                ? f.resolve()
                : (c(v, m, n, r, s, null, o, i, l), hn(f, m)))
            : v && bt(h, v)
            ? (c(v, h, n, r, s, f, o, i, l), f.resolve(!0))
            : (c(null, h, f.hiddenContainer, null, s, f, o, i, l),
              f.deps <= 0 && f.resolve()))
  else if (v && bt(h, v)) c(v, h, n, r, s, f, o, i, l), hn(f, h)
  else if (
    (qn(t, 'onPending'),
    (f.pendingBranch = h),
    f.pendingId++,
    c(null, h, f.hiddenContainer, null, s, f, o, i, l),
    f.deps <= 0)
  )
    f.resolve()
  else {
    const { timeout: g, pendingId: _ } = f
    g > 0
      ? setTimeout(() => {
          f.pendingId === _ && f.fallback(m)
        }, g)
      : g === 0 && f.fallback(m)
  }
}
function Ys(e, t, n, r, s, o, i, l, c, a, u = !1) {
  const {
      p: f,
      m: h,
      um: m,
      n: v,
      o: { parentNode: E, remove: A },
    } = a,
    y = e.props ? Vi(e.props.timeout) : void 0,
    g = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: i,
      container: r,
      hiddenContainer: s,
      anchor: o,
      deps: 0,
      pendingId: 0,
      timeout: typeof y == 'number' ? y : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(_ = !1) {
        const {
          vnode: O,
          activeBranch: P,
          pendingBranch: M,
          pendingId: D,
          effects: k,
          parentComponent: q,
          container: W,
        } = g
        if (g.isHydrating) g.isHydrating = !1
        else if (!_) {
          const z = P && M.transition && M.transition.mode === 'out-in'
          z &&
            (P.transition.afterLeave = () => {
              D === g.pendingId && h(M, W, F, 0)
            })
          let { anchor: F } = g
          P && ((F = v(P)), m(P, q, g, !0)), z || h(M, W, F, 0)
        }
        hn(g, M), (g.pendingBranch = null), (g.isInFallback = !1)
        let V = g.parent,
          H = !1
        for (; V; ) {
          if (V.pendingBranch) {
            V.effects.push(...k), (H = !0)
            break
          }
          V = V.parent
        }
        H || ml(k), (g.effects = []), qn(O, 'onResolve')
      },
      fallback(_) {
        if (!g.pendingBranch) return
        const {
          vnode: O,
          activeBranch: P,
          parentComponent: M,
          container: D,
          isSVG: k,
        } = g
        qn(O, 'onFallback')
        const q = v(P),
          W = () => {
            g.isInFallback && (f(null, _, D, q, M, null, k, l, c), hn(g, _))
          },
          V = _.transition && _.transition.mode === 'out-in'
        V && (P.transition.afterLeave = W),
          (g.isInFallback = !0),
          m(P, M, null, !0),
          V || W()
      },
      move(_, O, P) {
        g.activeBranch && h(g.activeBranch, _, O, P), (g.container = _)
      },
      next() {
        return g.activeBranch && v(g.activeBranch)
      },
      registerDep(_, O) {
        const P = !!g.pendingBranch
        P && g.deps++
        const M = _.vnode.el
        _.asyncDep
          .catch((D) => {
            Rn(D, _, 0)
          })
          .then((D) => {
            if (_.isUnmounted || g.isUnmounted || g.pendingId !== _.suspenseId)
              return
            _.asyncResolved = !0
            const { vnode: k } = _
            Es(_, D, !1), M && (k.el = M)
            const q = !M && _.subTree.el
            O(_, k, E(M || _.subTree.el), M ? null : v(_.subTree), g, i, c),
              q && A(q),
              Js(_, k.el),
              P && --g.deps === 0 && g.resolve()
          })
      },
      unmount(_, O) {
        ;(g.isUnmounted = !0),
          g.activeBranch && m(g.activeBranch, n, _, O),
          g.pendingBranch && m(g.pendingBranch, n, _, O)
      },
    }
  return g
}
function eu(e, t, n, r, s, o, i, l, c) {
  const a = (t.suspense = Ys(
      t,
      r,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      s,
      o,
      i,
      l,
      !0
    )),
    u = c(e, (a.pendingBranch = t.ssContent), n, a, o, i)
  return a.deps === 0 && a.resolve(), u
}
function tu(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32
  ;(e.ssContent = Oo(r ? n.default : n)),
    (e.ssFallback = r ? Oo(n.fallback) : oe(ke))
}
function Oo(e) {
  let t
  if (J(e)) {
    const n = gn && e._c
    n && ((e._d = !1), de()), (e = e()), n && ((e._d = !0), (t = ot), $l())
  }
  return (
    G(e) && (e = qa(e)),
    (e = st(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  )
}
function vl(e, t) {
  t && t.pendingBranch
    ? G(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ml(e)
}
function hn(e, t) {
  e.activeBranch = t
  const { vnode: n, parentComponent: r } = e,
    s = (n.el = t.el)
  r && r.subTree === n && ((r.vnode.el = s), Js(r, s))
}
function Mn(e, t) {
  if (ge) {
    let n = ge.provides
    const r = ge.parent && ge.parent.provides
    r === n && (n = ge.provides = Object.create(r)), (n[e] = t)
  }
}
function et(e, t, n = !1) {
  const r = ge || Ae
  if (r) {
    const s =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && J(t) ? t.call(r.proxy) : t
  }
}
function nu(e, t) {
  return Xs(e, null, t)
}
const ir = {}
function Ft(e, t, n) {
  return Xs(e, t, n)
}
function Xs(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: o, onTrigger: i } = pe
) {
  const l = sa() === (ge == null ? void 0 : ge.scope) ? ge : null
  let c,
    a = !1,
    u = !1
  if (
    (Ee(e)
      ? ((c = () => e.value), (a = gr(e)))
      : fn(e)
      ? ((c = () => e), (r = !0))
      : G(e)
      ? ((u = !0),
        (a = e.some((_) => fn(_) || gr(_))),
        (c = () =>
          e.map((_) => {
            if (Ee(_)) return _.value
            if (fn(_)) return cn(_)
            if (J(_)) return jt(_, l, 2)
          })))
      : J(e)
      ? t
        ? (c = () => jt(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return f && f(), lt(e, l, 3, [h])
          })
      : (c = ht),
    t && r)
  ) {
    const _ = c
    c = () => cn(_())
  }
  let f,
    h = (_) => {
      f = y.onStop = () => {
        jt(_, l, 4)
      }
    },
    m
  if (vn)
    if (
      ((h = ht),
      t ? n && lt(t, l, 3, [c(), u ? [] : void 0, h]) : c(),
      s === 'sync')
    ) {
      const _ = Vu()
      m = _.__watcherHandles || (_.__watcherHandles = [])
    } else return ht
  let v = u ? new Array(e.length).fill(ir) : ir
  const E = () => {
    if (y.active)
      if (t) {
        const _ = y.run()
        ;(r || a || (u ? _.some((O, P) => $n(O, v[P])) : $n(_, v))) &&
          (f && f(),
          lt(t, l, 3, [_, v === ir ? void 0 : u && v[0] === ir ? [] : v, h]),
          (v = _))
      } else y.run()
  }
  E.allowRecurse = !!t
  let A
  s === 'sync'
    ? (A = E)
    : s === 'post'
    ? (A = () => Le(E, l && l.suspense))
    : ((E.pre = !0), l && (E.id = l.uid), (A = () => Lr(E)))
  const y = new Ks(c, A)
  t
    ? n
      ? E()
      : (v = y.run())
    : s === 'post'
    ? Le(y.run.bind(y), l && l.suspense)
    : y.run()
  const g = () => {
    y.stop(), l && l.scope && Bs(l.scope.effects, y)
  }
  return m && m.push(g), g
}
function ru(e, t, n) {
  const r = this.proxy,
    s = ye(e) ? (e.includes('.') ? bl(r, e) : () => r[e]) : e.bind(r, r)
  let o
  J(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = ge
  yn(this)
  const l = Xs(s, o.bind(r), n)
  return i ? yn(i) : Qt(), l
}
function bl(e, t) {
  const n = t.split('.')
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function cn(e, t) {
  if (!he(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), Ee(e))) cn(e.value, t)
  else if (G(e)) for (let n = 0; n < e.length; n++) cn(e[n], t)
  else if (Ui(e) || un(e))
    e.forEach((n) => {
      cn(n, t)
    })
  else if (qi(e)) for (const n in e) cn(e[n], t)
  return e
}
function su() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Yt(() => {
      e.isMounted = !0
    }),
    Nr(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const nt = [Function, Array],
  ou = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: nt,
      onEnter: nt,
      onAfterEnter: nt,
      onEnterCancelled: nt,
      onBeforeLeave: nt,
      onLeave: nt,
      onAfterLeave: nt,
      onLeaveCancelled: nt,
      onBeforeAppear: nt,
      onAppear: nt,
      onAfterAppear: nt,
      onAppearCancelled: nt,
    },
    setup(e, { slots: t }) {
      const n = Xn(),
        r = su()
      let s
      return () => {
        const o = t.default && wl(t.default(), !0)
        if (!o || !o.length) return
        let i = o[0]
        if (o.length > 1) {
          for (const E of o)
            if (E.type !== ke) {
              i = E
              break
            }
        }
        const l = se(e),
          { mode: c } = l
        if (r.isLeaving) return zr(i)
        const a = So(i)
        if (!a) return zr(i)
        const u = ms(a, l, r, n)
        gs(a, u)
        const f = n.subTree,
          h = f && So(f)
        let m = !1
        const { getTransitionKey: v } = a.type
        if (v) {
          const E = v()
          s === void 0 ? (s = E) : E !== s && ((s = E), (m = !0))
        }
        if (h && h.type !== ke && (!bt(a, h) || m)) {
          const E = ms(h, l, r, n)
          if ((gs(h, E), c === 'out-in'))
            return (
              (r.isLeaving = !0),
              (E.afterLeave = () => {
                ;(r.isLeaving = !1), n.update.active !== !1 && n.update()
              }),
              zr(i)
            )
          c === 'in-out' &&
            a.type !== ke &&
            (E.delayLeave = (A, y, g) => {
              const _ = El(r, h)
              ;(_[String(h.key)] = h),
                (A._leaveCb = () => {
                  y(), (A._leaveCb = void 0), delete u.delayedLeave
                }),
                (u.delayedLeave = g)
            })
        }
        return i
      }
    },
  },
  _l = ou
function El(e, t) {
  const { leavingVNodes: n } = e
  let r = n.get(t.type)
  return r || ((r = Object.create(null)), n.set(t.type, r)), r
}
function ms(e, t, n, r) {
  const {
      appear: s,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: a,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: h,
      onAfterLeave: m,
      onLeaveCancelled: v,
      onBeforeAppear: E,
      onAppear: A,
      onAfterAppear: y,
      onAppearCancelled: g,
    } = t,
    _ = String(e.key),
    O = El(n, e),
    P = (k, q) => {
      k && lt(k, r, 9, q)
    },
    M = (k, q) => {
      const W = q[1]
      P(k, q),
        G(k) ? k.every((V) => V.length <= 1) && W() : k.length <= 1 && W()
    },
    D = {
      mode: o,
      persisted: i,
      beforeEnter(k) {
        let q = l
        if (!n.isMounted)
          if (s) q = E || l
          else return
        k._leaveCb && k._leaveCb(!0)
        const W = O[_]
        W && bt(e, W) && W.el._leaveCb && W.el._leaveCb(), P(q, [k])
      },
      enter(k) {
        let q = c,
          W = a,
          V = u
        if (!n.isMounted)
          if (s) (q = A || c), (W = y || a), (V = g || u)
          else return
        let H = !1
        const z = (k._enterCb = (F) => {
          H ||
            ((H = !0),
            F ? P(V, [k]) : P(W, [k]),
            D.delayedLeave && D.delayedLeave(),
            (k._enterCb = void 0))
        })
        q ? M(q, [k, z]) : z()
      },
      leave(k, q) {
        const W = String(e.key)
        if ((k._enterCb && k._enterCb(!0), n.isUnmounting)) return q()
        P(f, [k])
        let V = !1
        const H = (k._leaveCb = (z) => {
          V ||
            ((V = !0),
            q(),
            z ? P(v, [k]) : P(m, [k]),
            (k._leaveCb = void 0),
            O[W] === e && delete O[W])
        })
        ;(O[W] = e), h ? M(h, [k, H]) : H()
      },
      clone(k) {
        return ms(k, t, n, r)
      },
    }
  return D
}
function zr(e) {
  if (Yn(e)) return (e = Dt(e)), (e.children = null), e
}
function So(e) {
  return Yn(e) ? (e.children ? e.children[0] : void 0) : e
}
function gs(e, t) {
  e.shapeFlag & 6 && e.component
    ? gs(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function wl(e, t = !1, n) {
  let r = [],
    s = 0
  for (let o = 0; o < e.length; o++) {
    let i = e[o]
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o)
    i.type === Re
      ? (i.patchFlag & 128 && s++, (r = r.concat(wl(i.children, t, l))))
      : (t || i.type !== ke) && r.push(l != null ? Dt(i, { key: l }) : i)
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2
  return r
}
function Tt(e) {
  return J(e) ? { setup: e, name: e.name } : e
}
const pn = (e) => !!e.type.__asyncLoader
function iu(e) {
  J(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    timeout: o,
    suspensible: i = !0,
    onError: l,
  } = e
  let c = null,
    a,
    u = 0
  const f = () => (u++, (c = null), h()),
    h = () => {
      let m
      return (
        c ||
        (m = c =
          t()
            .catch((v) => {
              if (((v = v instanceof Error ? v : new Error(String(v))), l))
                return new Promise((E, A) => {
                  l(
                    v,
                    () => E(f()),
                    () => A(v),
                    u + 1
                  )
                })
              throw v
            })
            .then((v) =>
              m !== c && c
                ? c
                : (v &&
                    (v.__esModule || v[Symbol.toStringTag] === 'Module') &&
                    (v = v.default),
                  (a = v),
                  v)
            ))
      )
    }
  return Tt({
    name: 'AsyncComponentWrapper',
    __asyncLoader: h,
    get __asyncResolved() {
      return a
    },
    setup() {
      const m = ge
      if (a) return () => Qr(a, m)
      const v = (g) => {
        ;(c = null), Rn(g, m, 13, !r)
      }
      if ((i && m.suspense) || vn)
        return h()
          .then((g) => () => Qr(g, m))
          .catch((g) => (v(g), () => (r ? oe(r, { error: g }) : null)))
      const E = Se(!1),
        A = Se(),
        y = Se(!!s)
      return (
        s &&
          setTimeout(() => {
            y.value = !1
          }, s),
        o != null &&
          setTimeout(() => {
            if (!E.value && !A.value) {
              const g = new Error(`Async component timed out after ${o}ms.`)
              v(g), (A.value = g)
            }
          }, o),
        h()
          .then(() => {
            ;(E.value = !0),
              m.parent && Yn(m.parent.vnode) && Lr(m.parent.update)
          })
          .catch((g) => {
            v(g), (A.value = g)
          }),
        () => {
          if (E.value && a) return Qr(a, m)
          if (A.value && r) return oe(r, { error: A.value })
          if (n && !y.value) return oe(n)
        }
      )
    },
  })
}
function Qr(e, t) {
  const { ref: n, props: r, children: s, ce: o } = t.vnode,
    i = oe(e, r, s)
  return (i.ref = n), (i.ce = o), delete t.vnode.ce, i
}
const Yn = (e) => e.type.__isKeepAlive
function Cl(e, t) {
  Pl(e, 'a', t)
}
function Rl(e, t) {
  Pl(e, 'da', t)
}
function Pl(e, t, n = ge) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return e()
    })
  if ((Hr(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) Yn(s.parent.vnode) && lu(r, t, n, s), (s = s.parent)
  }
}
function lu(e, t, n, r) {
  const s = Hr(t, e, r, !0)
  jr(() => {
    Bs(r[t], s)
  }, n)
}
function Hr(e, t, n = ge, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          wn(), yn(n)
          const l = lt(t, n, e, i)
          return Qt(), Cn(), l
        })
    return r ? s.unshift(o) : s.push(o), o
  }
}
const At =
    (e) =>
    (t, n = ge) =>
      (!vn || e === 'sp') && Hr(e, (...r) => t(...r), n),
  cu = At('bm'),
  Yt = At('m'),
  au = At('bu'),
  uu = At('u'),
  Nr = At('bum'),
  jr = At('um'),
  fu = At('sp'),
  du = At('rtg'),
  hu = At('rtc')
function Tl(e, t = ge) {
  Hr('ec', e, t)
}
function yt(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const l = s[i]
    o && (l.oldValue = o[i].value)
    let c = l.dir[r]
    c && (wn(), lt(c, n, 8, [e.el, l, e, t]), Cn())
  }
}
const Zs = 'components'
function Al(e, t) {
  return Sl(Zs, e, !0, t) || e
}
const Ol = Symbol()
function pu(e) {
  return ye(e) ? Sl(Zs, e, !1) || e : e || Ol
}
function Sl(e, t, n = !0, r = !1) {
  const s = Ae || ge
  if (s) {
    const o = s.type
    if (e === Zs) {
      const l = Ku(o, !1)
      if (l && (l === t || l === _t(t) || l === kr(_t(t)))) return o
    }
    const i = ko(s[e] || o[e], t) || ko(s.appContext[e], t)
    return !i && r ? o : i
  }
}
function ko(e, t) {
  return e && (e[t] || e[_t(t)] || e[kr(_t(t))])
}
function kl(e, t, n, r) {
  let s
  const o = n && n[r]
  if (G(e) || ye(e)) {
    s = new Array(e.length)
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, o && o[i])
  } else if (typeof e == 'number') {
    s = new Array(e)
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o && o[i])
  } else if (he(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]))
    else {
      const i = Object.keys(e)
      s = new Array(i.length)
      for (let l = 0, c = i.length; l < c; l++) {
        const a = i[l]
        s[l] = t(e[a], a, l, o && o[l])
      }
    }
  else s = []
  return n && (n[r] = s), s
}
function mg(e, t, n = {}, r, s) {
  if (Ae.isCE || (Ae.parent && pn(Ae.parent) && Ae.parent.isCE))
    return t !== 'default' && (n.name = t), oe('slot', n, r && r())
  let o = e[t]
  o && o._c && (o._d = !1), de()
  const i = o && Il(o(n)),
    l = it(
      Re,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    )
  return (
    !s && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    o && o._c && (o._d = !0),
    l
  )
}
function Il(e) {
  return e.some((t) =>
    Vn(t) ? !(t.type === ke || (t.type === Re && !Il(t.children))) : !0
  )
    ? e
    : null
}
const ys = (e) => (e ? (ql(e) ? ro(e) || e.proxy : ys(e.parent)) : null),
  xn = we(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ys(e.parent),
    $root: (e) => ys(e.root),
    $emit: (e) => e.emit,
    $options: (e) => eo(e),
    $forceUpdate: (e) => e.f || (e.f = () => Lr(e.update)),
    $nextTick: (e) => e.n || (e.n = Jn.bind(e.proxy)),
    $watch: (e) => ru.bind(e),
  }),
  Jr = (e, t) => e !== pe && !e.__isScriptSetup && re(e, t),
  mu = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: l,
        appContext: c,
      } = e
      let a
      if (t[0] !== '$') {
        const m = i[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t]
            case 2:
              return s[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (Jr(r, t)) return (i[t] = 1), r[t]
          if (s !== pe && re(s, t)) return (i[t] = 2), s[t]
          if ((a = e.propsOptions[0]) && re(a, t)) return (i[t] = 3), o[t]
          if (n !== pe && re(n, t)) return (i[t] = 4), n[t]
          vs && (i[t] = 0)
        }
      }
      const u = xn[t]
      let f, h
      if (u) return t === '$attrs' && Me(e, 'get', t), u(e)
      if ((f = l.__cssModules) && (f = f[t])) return f
      if (n !== pe && re(n, t)) return (i[t] = 4), n[t]
      if (((h = c.config.globalProperties), re(h, t))) return h[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e
      return Jr(s, t)
        ? ((s[t] = n), !0)
        : r !== pe && re(r, t)
        ? ((r[t] = n), !0)
        : re(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let l
      return (
        !!n[i] ||
        (e !== pe && re(e, i)) ||
        Jr(t, i) ||
        ((l = o[0]) && re(l, i)) ||
        re(r, i) ||
        re(xn, i) ||
        re(s.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : re(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
let vs = !0
function gu(e) {
  const t = eo(e),
    n = e.proxy,
    r = e.ctx
  ;(vs = !1), t.beforeCreate && Io(t.beforeCreate, e, 'bc')
  const {
    data: s,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: a,
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: m,
    updated: v,
    activated: E,
    deactivated: A,
    beforeDestroy: y,
    beforeUnmount: g,
    destroyed: _,
    unmounted: O,
    render: P,
    renderTracked: M,
    renderTriggered: D,
    errorCaptured: k,
    serverPrefetch: q,
    expose: W,
    inheritAttrs: V,
    components: H,
    directives: z,
    filters: F,
  } = t
  if ((a && yu(a, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const ue in i) {
      const ce = i[ue]
      J(ce) && (r[ue] = ce.bind(n))
    }
  if (s) {
    const ue = s.call(n, n)
    he(ue) && (e.data = Et(ue))
  }
  if (((vs = !0), o))
    for (const ue in o) {
      const ce = o[ue],
        ct = J(ce) ? ce.bind(n, n) : J(ce.get) ? ce.get.bind(n, n) : ht,
        $t = !J(ce) && J(ce.set) ? ce.set.bind(n) : ht,
        at = Y({ get: ct, set: $t })
      Object.defineProperty(r, ue, {
        enumerable: !0,
        configurable: !0,
        get: () => at.value,
        set: (Ie) => (at.value = Ie),
      })
    }
  if (l) for (const ue in l) Ll(l[ue], r, n, ue)
  if (c) {
    const ue = J(c) ? c.call(n) : c
    Reflect.ownKeys(ue).forEach((ce) => {
      Mn(ce, ue[ce])
    })
  }
  u && Io(u, e, 'c')
  function Z(ue, ce) {
    G(ce) ? ce.forEach((ct) => ue(ct.bind(n))) : ce && ue(ce.bind(n))
  }
  if (
    (Z(cu, f),
    Z(Yt, h),
    Z(au, m),
    Z(uu, v),
    Z(Cl, E),
    Z(Rl, A),
    Z(Tl, k),
    Z(hu, M),
    Z(du, D),
    Z(Nr, g),
    Z(jr, O),
    Z(fu, q),
    G(W))
  )
    if (W.length) {
      const ue = e.exposed || (e.exposed = {})
      W.forEach((ce) => {
        Object.defineProperty(ue, ce, {
          get: () => n[ce],
          set: (ct) => (n[ce] = ct),
        })
      })
    } else e.exposed || (e.exposed = {})
  P && e.render === ht && (e.render = P),
    V != null && (e.inheritAttrs = V),
    H && (e.components = H),
    z && (e.directives = z)
}
function yu(e, t, n = ht, r = !1) {
  G(e) && (e = bs(e))
  for (const s in e) {
    const o = e[s]
    let i
    he(o)
      ? 'default' in o
        ? (i = et(o.from || s, o.default, !0))
        : (i = et(o.from || s))
      : (i = et(o)),
      Ee(i) && r
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[s] = i)
  }
}
function Io(e, t, n) {
  lt(G(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ll(e, t, n, r) {
  const s = r.includes('.') ? bl(n, r) : () => n[r]
  if (ye(e)) {
    const o = t[e]
    J(o) && Ft(s, o)
  } else if (J(e)) Ft(s, e.bind(n))
  else if (he(e))
    if (G(e)) e.forEach((o) => Ll(o, t, n, r))
    else {
      const o = J(e.handler) ? e.handler.bind(n) : t[e.handler]
      J(o) && Ft(s, o, e)
    }
}
function eo(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t)
  let c
  return (
    l
      ? (c = l)
      : !s.length && !n && !r
      ? (c = t)
      : ((c = {}), s.length && s.forEach((a) => _r(c, a, i, !0)), _r(c, t, i)),
    he(t) && o.set(t, c),
    c
  )
}
function _r(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t
  o && _r(e, o, n, !0), s && s.forEach((i) => _r(e, i, n, !0))
  for (const i in t)
    if (!(r && i === 'expose')) {
      const l = vu[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const vu = {
  data: Lo,
  props: qt,
  emits: qt,
  methods: qt,
  computed: qt,
  beforeCreate: Oe,
  created: Oe,
  beforeMount: Oe,
  mounted: Oe,
  beforeUpdate: Oe,
  updated: Oe,
  beforeDestroy: Oe,
  beforeUnmount: Oe,
  destroyed: Oe,
  unmounted: Oe,
  activated: Oe,
  deactivated: Oe,
  errorCaptured: Oe,
  serverPrefetch: Oe,
  components: qt,
  directives: qt,
  watch: _u,
  provide: Lo,
  inject: bu,
}
function Lo(e, t) {
  return t
    ? e
      ? function () {
          return we(
            J(e) ? e.call(this, this) : e,
            J(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function bu(e, t) {
  return qt(bs(e), bs(t))
}
function bs(e) {
  if (G(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function qt(e, t) {
  return e ? we(we(Object.create(null), e), t) : t
}
function _u(e, t) {
  if (!e) return t
  if (!t) return e
  const n = we(Object.create(null), e)
  for (const r in t) n[r] = Oe(e[r], t[r])
  return n
}
function Eu(e, t, n, r = !1) {
  const s = {},
    o = {}
  pr(o, Fr, 1), (e.propsDefaults = Object.create(null)), Ml(e, t, s, o)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : La(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o)
}
function wu(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = se(s),
    [c] = e.propsOptions
  let a = !1
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps
      for (let f = 0; f < u.length; f++) {
        let h = u[f]
        if (Mr(e.emitsOptions, h)) continue
        const m = t[h]
        if (c)
          if (re(o, h)) m !== o[h] && ((o[h] = m), (a = !0))
          else {
            const v = _t(h)
            s[v] = _s(c, l, v, m, e, !1)
          }
        else m !== o[h] && ((o[h] = m), (a = !0))
      }
    }
  } else {
    Ml(e, t, s, o) && (a = !0)
    let u
    for (const f in l)
      (!t || (!re(t, f) && ((u = En(f)) === f || !re(t, u)))) &&
        (c
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (s[f] = _s(c, l, f, void 0, e, !0))
          : delete s[f])
    if (o !== l) for (const f in o) (!t || !re(t, f)) && (delete o[f], (a = !0))
  }
  a && Pt(e, 'set', '$attrs')
}
function Ml(e, t, n, r) {
  const [s, o] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let c in t) {
      if (Ln(c)) continue
      const a = t[c]
      let u
      s && re(s, (u = _t(c)))
        ? !o || !o.includes(u)
          ? (n[u] = a)
          : ((l || (l = {}))[u] = a)
        : Mr(e.emitsOptions, c) ||
          ((!(c in r) || a !== r[c]) && ((r[c] = a), (i = !0)))
    }
  if (o) {
    const c = se(n),
      a = l || pe
    for (let u = 0; u < o.length; u++) {
      const f = o[u]
      n[f] = _s(s, c, f, a[f], e, !re(a, f))
    }
  }
  return i
}
function _s(e, t, n, r, s, o) {
  const i = e[n]
  if (i != null) {
    const l = re(i, 'default')
    if (l && r === void 0) {
      const c = i.default
      if (i.type !== Function && J(c)) {
        const { propsDefaults: a } = s
        n in a ? (r = a[n]) : (yn(s), (r = a[n] = c.call(null, t)), Qt())
      } else r = c
    }
    i[0] && (o && !l ? (r = !1) : i[1] && (r === '' || r === En(n)) && (r = !0))
  }
  return r
}
function xl(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const o = e.props,
    i = {},
    l = []
  let c = !1
  if (!J(e)) {
    const u = (f) => {
      c = !0
      const [h, m] = xl(f, t, !0)
      we(i, h), m && l.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!o && !c) return he(e) && r.set(e, an), an
  if (G(o))
    for (let u = 0; u < o.length; u++) {
      const f = _t(o[u])
      Mo(f) && (i[f] = pe)
    }
  else if (o)
    for (const u in o) {
      const f = _t(u)
      if (Mo(f)) {
        const h = o[u],
          m = (i[f] = G(h) || J(h) ? { type: h } : Object.assign({}, h))
        if (m) {
          const v = No(Boolean, m.type),
            E = No(String, m.type)
          ;(m[0] = v > -1),
            (m[1] = E < 0 || v < E),
            (v > -1 || re(m, 'default')) && l.push(f)
        }
      }
    }
  const a = [i, l]
  return he(e) && r.set(e, a), a
}
function Mo(e) {
  return e[0] !== '$'
}
function xo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function Ho(e, t) {
  return xo(e) === xo(t)
}
function No(e, t) {
  return G(t) ? t.findIndex((n) => Ho(n, e)) : J(t) && Ho(t, e) ? 0 : -1
}
const Hl = (e) => e[0] === '_' || e === '$stable',
  to = (e) => (G(e) ? e.map(st) : [st(e)]),
  Cu = (e, t, n) => {
    if (t._n) return t
    const r = br((...s) => to(t(...s)), n)
    return (r._c = !1), r
  },
  Nl = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (Hl(s)) continue
      const o = e[s]
      if (J(o)) t[s] = Cu(s, o, r)
      else if (o != null) {
        const i = to(o)
        t[s] = () => i
      }
    }
  },
  jl = (e, t) => {
    const n = to(t)
    e.slots.default = () => n
  },
  Ru = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = se(t)), pr(t, '_', n)) : Nl(t, (e.slots = {}))
    } else (e.slots = {}), t && jl(e, t)
    pr(e.slots, Fr, 1)
  },
  Pu = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let o = !0,
      i = pe
    if (r.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (o = !1)
          : (we(s, t), !n && l === 1 && delete s._)
        : ((o = !t.$stable), Nl(t, s)),
        (i = t)
    } else t && (jl(e, t), (i = { default: 1 }))
    if (o) for (const l in s) !Hl(l) && !(l in i) && delete s[l]
  }
function Fl() {
  return {
    app: null,
    config: {
      isNativeTag: zc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let Tu = 0
function Au(e, t) {
  return function (r, s = null) {
    J(r) || (r = Object.assign({}, r)), s != null && !he(s) && (s = null)
    const o = Fl(),
      i = new Set()
    let l = !1
    const c = (o.app = {
      _uid: Tu++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: so,
      get config() {
        return o.config
      },
      set config(a) {},
      use(a, ...u) {
        return (
          i.has(a) ||
            (a && J(a.install)
              ? (i.add(a), a.install(c, ...u))
              : J(a) && (i.add(a), a(c, ...u))),
          c
        )
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), c
      },
      component(a, u) {
        return u ? ((o.components[a] = u), c) : o.components[a]
      },
      directive(a, u) {
        return u ? ((o.directives[a] = u), c) : o.directives[a]
      },
      mount(a, u, f) {
        if (!l) {
          const h = oe(r, s)
          return (
            (h.appContext = o),
            u && t ? t(h, a) : e(h, a, f),
            (l = !0),
            (c._container = a),
            (a.__vue_app__ = c),
            ro(h.component) || h.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__)
      },
      provide(a, u) {
        return (o.provides[a] = u), c
      },
    })
    return c
  }
}
function Er(e, t, n, r, s = !1) {
  if (G(e)) {
    e.forEach((h, m) => Er(h, t && (G(t) ? t[m] : t), n, r, s))
    return
  }
  if (pn(r) && !s) return
  const o = r.shapeFlag & 4 ? ro(r.component) || r.component.proxy : r.el,
    i = s ? null : o,
    { i: l, r: c } = e,
    a = t && t.r,
    u = l.refs === pe ? (l.refs = {}) : l.refs,
    f = l.setupState
  if (
    (a != null &&
      a !== c &&
      (ye(a)
        ? ((u[a] = null), re(f, a) && (f[a] = null))
        : Ee(a) && (a.value = null)),
    J(c))
  )
    jt(c, l, 12, [i, u])
  else {
    const h = ye(c),
      m = Ee(c)
    if (h || m) {
      const v = () => {
        if (e.f) {
          const E = h ? (re(f, c) ? f[c] : u[c]) : c.value
          s
            ? G(E) && Bs(E, o)
            : G(E)
            ? E.includes(o) || E.push(o)
            : h
            ? ((u[c] = [o]), re(f, c) && (f[c] = u[c]))
            : ((c.value = [o]), e.k && (u[e.k] = c.value))
        } else
          h
            ? ((u[c] = i), re(f, c) && (f[c] = i))
            : m && ((c.value = i), e.k && (u[e.k] = i))
      }
      i ? ((v.id = -1), Le(v, n)) : v()
    }
  }
}
let St = !1
const lr = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  cr = (e) => e.nodeType === 8
function Ou(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: s,
        nextSibling: o,
        parentNode: i,
        remove: l,
        insert: c,
        createComment: a,
      },
    } = e,
    u = (y, g) => {
      if (!g.hasChildNodes()) {
        n(null, y, g), yr(), (g._vnode = y)
        return
      }
      ;(St = !1),
        f(g.firstChild, y, null, null, null),
        yr(),
        (g._vnode = y),
        St && console.error('Hydration completed but contains mismatches.')
    },
    f = (y, g, _, O, P, M = !1) => {
      const D = cr(y) && y.data === '[',
        k = () => E(y, g, _, O, P, D),
        { type: q, ref: W, shapeFlag: V, patchFlag: H } = g
      let z = y.nodeType
      ;(g.el = y), H === -2 && ((M = !1), (g.dynamicChildren = null))
      let F = null
      switch (q) {
        case mn:
          z !== 3
            ? g.children === ''
              ? (c((g.el = s('')), i(y), y), (F = y))
              : (F = k())
            : (y.data !== g.children && ((St = !0), (y.data = g.children)),
              (F = o(y)))
          break
        case ke:
          z !== 8 || D ? (F = k()) : (F = o(y))
          break
        case Hn:
          if ((D && ((y = o(y)), (z = y.nodeType)), z === 1 || z === 3)) {
            F = y
            const _e = !g.children.length
            for (let Z = 0; Z < g.staticCount; Z++)
              _e && (g.children += F.nodeType === 1 ? F.outerHTML : F.data),
                Z === g.staticCount - 1 && (g.anchor = F),
                (F = o(F))
            return D ? o(F) : F
          } else k()
          break
        case Re:
          D ? (F = v(y, g, _, O, P, M)) : (F = k())
          break
        default:
          if (V & 1)
            z !== 1 || g.type.toLowerCase() !== y.tagName.toLowerCase()
              ? (F = k())
              : (F = h(y, g, _, O, P, M))
          else if (V & 6) {
            g.slotScopeIds = P
            const _e = i(y)
            if (
              (t(g, _e, null, _, O, lr(_e), M),
              (F = D ? A(y) : o(y)),
              F && cr(F) && F.data === 'teleport end' && (F = o(F)),
              pn(g))
            ) {
              let Z
              D
                ? ((Z = oe(Re)),
                  (Z.anchor = F ? F.previousSibling : _e.lastChild))
                : (Z = y.nodeType === 3 ? Wl('') : oe('div')),
                (Z.el = y),
                (g.component.subTree = Z)
            }
          } else
            V & 64
              ? z !== 8
                ? (F = k())
                : (F = g.type.hydrate(y, g, _, O, P, M, e, m))
              : V & 128 &&
                (F = g.type.hydrate(y, g, _, O, lr(i(y)), P, M, e, f))
      }
      return W != null && Er(W, null, O, g), F
    },
    h = (y, g, _, O, P, M) => {
      M = M || !!g.dynamicChildren
      const { type: D, props: k, patchFlag: q, shapeFlag: W, dirs: V } = g,
        H = (D === 'input' && V) || D === 'option'
      if (H || q !== -1) {
        if ((V && yt(g, null, _, 'created'), k))
          if (H || !M || q & 48)
            for (const F in k)
              ((H && F.endsWith('value')) || (Qn(F) && !Ln(F))) &&
                r(y, F, null, k[F], !1, void 0, _)
          else k.onClick && r(y, 'onClick', null, k.onClick, !1, void 0, _)
        let z
        if (
          ((z = k && k.onVnodeBeforeMount) && rt(z, _, g),
          V && yt(g, null, _, 'beforeMount'),
          ((z = k && k.onVnodeMounted) || V) &&
            vl(() => {
              z && rt(z, _, g), V && yt(g, null, _, 'mounted')
            }, O),
          W & 16 && !(k && (k.innerHTML || k.textContent)))
        ) {
          let F = m(y.firstChild, g, y, _, O, P, M)
          for (; F; ) {
            St = !0
            const _e = F
            ;(F = F.nextSibling), l(_e)
          }
        } else
          W & 8 &&
            y.textContent !== g.children &&
            ((St = !0), (y.textContent = g.children))
      }
      return y.nextSibling
    },
    m = (y, g, _, O, P, M, D) => {
      D = D || !!g.dynamicChildren
      const k = g.children,
        q = k.length
      for (let W = 0; W < q; W++) {
        const V = D ? k[W] : (k[W] = st(k[W]))
        if (y) y = f(y, V, O, P, M, D)
        else {
          if (V.type === mn && !V.children) continue
          ;(St = !0), n(null, V, _, null, O, P, lr(_), M)
        }
      }
      return y
    },
    v = (y, g, _, O, P, M) => {
      const { slotScopeIds: D } = g
      D && (P = P ? P.concat(D) : D)
      const k = i(y),
        q = m(o(y), g, k, _, O, P, M)
      return q && cr(q) && q.data === ']'
        ? o((g.anchor = q))
        : ((St = !0), c((g.anchor = a(']')), k, q), q)
    },
    E = (y, g, _, O, P, M) => {
      if (((St = !0), (g.el = null), M)) {
        const q = A(y)
        for (;;) {
          const W = o(y)
          if (W && W !== q) l(W)
          else break
        }
      }
      const D = o(y),
        k = i(y)
      return l(y), n(null, g, k, D, _, O, lr(k), P), D
    },
    A = (y) => {
      let g = 0
      for (; y; )
        if (
          ((y = o(y)), y && cr(y) && (y.data === '[' && g++, y.data === ']'))
        ) {
          if (g === 0) return o(y)
          g--
        }
      return y
    }
  return [u, f]
}
const Le = vl
function Su(e) {
  return Bl(e)
}
function ku(e) {
  return Bl(e, Ou)
}
function Bl(e, t) {
  const n = ta()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: a,
      setElementText: u,
      parentNode: f,
      nextSibling: h,
      setScopeId: m = ht,
      insertStaticContent: v,
    } = e,
    E = (
      d,
      p,
      b,
      w = null,
      R = null,
      I = null,
      N = !1,
      S = null,
      L = !!p.dynamicChildren
    ) => {
      if (d === p) return
      d && !bt(d, p) && ((w = x(d)), Ie(d, R, I, !0), (d = null)),
        p.patchFlag === -2 && ((L = !1), (p.dynamicChildren = null))
      const { type: T, ref: U, shapeFlag: B } = p
      switch (T) {
        case mn:
          A(d, p, b, w)
          break
        case ke:
          y(d, p, b, w)
          break
        case Hn:
          d == null && g(p, b, w, N)
          break
        case Re:
          H(d, p, b, w, R, I, N, S, L)
          break
        default:
          B & 1
            ? P(d, p, b, w, R, I, N, S, L)
            : B & 6
            ? z(d, p, b, w, R, I, N, S, L)
            : (B & 64 || B & 128) && T.process(d, p, b, w, R, I, N, S, L, ne)
      }
      U != null && R && Er(U, d && d.ref, I, p || d, !p)
    },
    A = (d, p, b, w) => {
      if (d == null) r((p.el = l(p.children)), b, w)
      else {
        const R = (p.el = d.el)
        p.children !== d.children && a(R, p.children)
      }
    },
    y = (d, p, b, w) => {
      d == null ? r((p.el = c(p.children || '')), b, w) : (p.el = d.el)
    },
    g = (d, p, b, w) => {
      ;[d.el, d.anchor] = v(d.children, p, b, w, d.el, d.anchor)
    },
    _ = ({ el: d, anchor: p }, b, w) => {
      let R
      for (; d && d !== p; ) (R = h(d)), r(d, b, w), (d = R)
      r(p, b, w)
    },
    O = ({ el: d, anchor: p }) => {
      let b
      for (; d && d !== p; ) (b = h(d)), s(d), (d = b)
      s(p)
    },
    P = (d, p, b, w, R, I, N, S, L) => {
      ;(N = N || p.type === 'svg'),
        d == null ? M(p, b, w, R, I, N, S, L) : q(d, p, R, I, N, S, L)
    },
    M = (d, p, b, w, R, I, N, S) => {
      let L, T
      const { type: U, props: B, shapeFlag: K, transition: Q, dirs: ee } = d
      if (
        ((L = d.el = i(d.type, I, B && B.is, B)),
        K & 8
          ? u(L, d.children)
          : K & 16 &&
            k(d.children, L, null, w, R, I && U !== 'foreignObject', N, S),
        ee && yt(d, null, w, 'created'),
        D(L, d, d.scopeId, N, w),
        B)
      ) {
        for (const ae in B)
          ae !== 'value' &&
            !Ln(ae) &&
            o(L, ae, null, B[ae], I, d.children, w, R, j)
        'value' in B && o(L, 'value', null, B.value),
          (T = B.onVnodeBeforeMount) && rt(T, w, d)
      }
      ee && yt(d, null, w, 'beforeMount')
      const fe = (!R || (R && !R.pendingBranch)) && Q && !Q.persisted
      fe && Q.beforeEnter(L),
        r(L, p, b),
        ((T = B && B.onVnodeMounted) || fe || ee) &&
          Le(() => {
            T && rt(T, w, d), fe && Q.enter(L), ee && yt(d, null, w, 'mounted')
          }, R)
    },
    D = (d, p, b, w, R) => {
      if ((b && m(d, b), w)) for (let I = 0; I < w.length; I++) m(d, w[I])
      if (R) {
        let I = R.subTree
        if (p === I) {
          const N = R.vnode
          D(d, N, N.scopeId, N.slotScopeIds, R.parent)
        }
      }
    },
    k = (d, p, b, w, R, I, N, S, L = 0) => {
      for (let T = L; T < d.length; T++) {
        const U = (d[T] = S ? Mt(d[T]) : st(d[T]))
        E(null, U, p, b, w, R, I, N, S)
      }
    },
    q = (d, p, b, w, R, I, N) => {
      const S = (p.el = d.el)
      let { patchFlag: L, dynamicChildren: T, dirs: U } = p
      L |= d.patchFlag & 16
      const B = d.props || pe,
        K = p.props || pe
      let Q
      b && Ut(b, !1),
        (Q = K.onVnodeBeforeUpdate) && rt(Q, b, p, d),
        U && yt(p, d, b, 'beforeUpdate'),
        b && Ut(b, !0)
      const ee = R && p.type !== 'foreignObject'
      if (
        (T
          ? W(d.dynamicChildren, T, S, b, w, ee, I)
          : N || ce(d, p, S, null, b, w, ee, I, !1),
        L > 0)
      ) {
        if (L & 16) V(S, p, B, K, b, w, R)
        else if (
          (L & 2 && B.class !== K.class && o(S, 'class', null, K.class, R),
          L & 4 && o(S, 'style', B.style, K.style, R),
          L & 8)
        ) {
          const fe = p.dynamicProps
          for (let ae = 0; ae < fe.length; ae++) {
            const ve = fe[ae],
              ut = B[ve],
              nn = K[ve]
            ;(nn !== ut || ve === 'value') &&
              o(S, ve, ut, nn, R, d.children, b, w, j)
          }
        }
        L & 1 && d.children !== p.children && u(S, p.children)
      } else !N && T == null && V(S, p, B, K, b, w, R)
      ;((Q = K.onVnodeUpdated) || U) &&
        Le(() => {
          Q && rt(Q, b, p, d), U && yt(p, d, b, 'updated')
        }, w)
    },
    W = (d, p, b, w, R, I, N) => {
      for (let S = 0; S < p.length; S++) {
        const L = d[S],
          T = p[S],
          U =
            L.el && (L.type === Re || !bt(L, T) || L.shapeFlag & 70)
              ? f(L.el)
              : b
        E(L, T, U, null, w, R, I, N, !0)
      }
    },
    V = (d, p, b, w, R, I, N) => {
      if (b !== w) {
        if (b !== pe)
          for (const S in b)
            !Ln(S) && !(S in w) && o(d, S, b[S], null, N, p.children, R, I, j)
        for (const S in w) {
          if (Ln(S)) continue
          const L = w[S],
            T = b[S]
          L !== T && S !== 'value' && o(d, S, T, L, N, p.children, R, I, j)
        }
        'value' in w && o(d, 'value', b.value, w.value)
      }
    },
    H = (d, p, b, w, R, I, N, S, L) => {
      const T = (p.el = d ? d.el : l('')),
        U = (p.anchor = d ? d.anchor : l(''))
      let { patchFlag: B, dynamicChildren: K, slotScopeIds: Q } = p
      Q && (S = S ? S.concat(Q) : Q),
        d == null
          ? (r(T, b, w), r(U, b, w), k(p.children, b, U, R, I, N, S, L))
          : B > 0 && B & 64 && K && d.dynamicChildren
          ? (W(d.dynamicChildren, K, b, R, I, N, S),
            (p.key != null || (R && p === R.subTree)) && Dl(d, p, !0))
          : ce(d, p, b, U, R, I, N, S, L)
    },
    z = (d, p, b, w, R, I, N, S, L) => {
      ;(p.slotScopeIds = S),
        d == null
          ? p.shapeFlag & 512
            ? R.ctx.activate(p, b, w, N, L)
            : F(p, b, w, R, I, N, L)
          : _e(d, p, L)
    },
    F = (d, p, b, w, R, I, N) => {
      const S = (d.component = Fu(d, w, R))
      if ((Yn(d) && (S.ctx.renderer = ne), Bu(S), S.asyncDep)) {
        if ((R && R.registerDep(S, Z), !d.el)) {
          const L = (S.subTree = oe(ke))
          y(null, L, p, b)
        }
        return
      }
      Z(S, d, p, b, R, I, N)
    },
    _e = (d, p, b) => {
      const w = (p.component = d.component)
      if (za(d, p, b))
        if (w.asyncDep && !w.asyncResolved) {
          ue(w, p, b)
          return
        } else (w.next = p), Da(w.update), w.update()
      else (p.el = d.el), (w.vnode = p)
    },
    Z = (d, p, b, w, R, I, N) => {
      const S = () => {
          if (d.isMounted) {
            let { next: U, bu: B, u: K, parent: Q, vnode: ee } = d,
              fe = U,
              ae
            Ut(d, !1),
              U ? ((U.el = ee.el), ue(d, U, N)) : (U = ee),
              B && Vr(B),
              (ae = U.props && U.props.onVnodeBeforeUpdate) && rt(ae, Q, U, ee),
              Ut(d, !0)
            const ve = Gr(d),
              ut = d.subTree
            ;(d.subTree = ve),
              E(ut, ve, f(ut.el), x(ut), d, R, I),
              (U.el = ve.el),
              fe === null && Js(d, ve.el),
              K && Le(K, R),
              (ae = U.props && U.props.onVnodeUpdated) &&
                Le(() => rt(ae, Q, U, ee), R)
          } else {
            let U
            const { el: B, props: K } = p,
              { bm: Q, m: ee, parent: fe } = d,
              ae = pn(p)
            if (
              (Ut(d, !1),
              Q && Vr(Q),
              !ae && (U = K && K.onVnodeBeforeMount) && rt(U, fe, p),
              Ut(d, !0),
              B && X)
            ) {
              const ve = () => {
                ;(d.subTree = Gr(d)), X(B, d.subTree, d, R, null)
              }
              ae
                ? p.type.__asyncLoader().then(() => !d.isUnmounted && ve())
                : ve()
            } else {
              const ve = (d.subTree = Gr(d))
              E(null, ve, b, w, d, R, I), (p.el = ve.el)
            }
            if ((ee && Le(ee, R), !ae && (U = K && K.onVnodeMounted))) {
              const ve = p
              Le(() => rt(U, fe, ve), R)
            }
            ;(p.shapeFlag & 256 ||
              (fe && pn(fe.vnode) && fe.vnode.shapeFlag & 256)) &&
              d.a &&
              Le(d.a, R),
              (d.isMounted = !0),
              (p = b = w = null)
          }
        },
        L = (d.effect = new Ks(S, () => Lr(T), d.scope)),
        T = (d.update = () => L.run())
      ;(T.id = d.uid), Ut(d, !0), T()
    },
    ue = (d, p, b) => {
      p.component = d
      const w = d.vnode.props
      ;(d.vnode = p),
        (d.next = null),
        wu(d, p.props, w, b),
        Pu(d, p.children, b),
        wn(),
        To(),
        Cn()
    },
    ce = (d, p, b, w, R, I, N, S, L = !1) => {
      const T = d && d.children,
        U = d ? d.shapeFlag : 0,
        B = p.children,
        { patchFlag: K, shapeFlag: Q } = p
      if (K > 0) {
        if (K & 128) {
          $t(T, B, b, w, R, I, N, S, L)
          return
        } else if (K & 256) {
          ct(T, B, b, w, R, I, N, S, L)
          return
        }
      }
      Q & 8
        ? (U & 16 && j(T, R, I), B !== T && u(b, B))
        : U & 16
        ? Q & 16
          ? $t(T, B, b, w, R, I, N, S, L)
          : j(T, R, I, !0)
        : (U & 8 && u(b, ''), Q & 16 && k(B, b, w, R, I, N, S, L))
    },
    ct = (d, p, b, w, R, I, N, S, L) => {
      ;(d = d || an), (p = p || an)
      const T = d.length,
        U = p.length,
        B = Math.min(T, U)
      let K
      for (K = 0; K < B; K++) {
        const Q = (p[K] = L ? Mt(p[K]) : st(p[K]))
        E(d[K], Q, b, null, R, I, N, S, L)
      }
      T > U ? j(d, R, I, !0, !1, B) : k(p, b, w, R, I, N, S, L, B)
    },
    $t = (d, p, b, w, R, I, N, S, L) => {
      let T = 0
      const U = p.length
      let B = d.length - 1,
        K = U - 1
      for (; T <= B && T <= K; ) {
        const Q = d[T],
          ee = (p[T] = L ? Mt(p[T]) : st(p[T]))
        if (bt(Q, ee)) E(Q, ee, b, null, R, I, N, S, L)
        else break
        T++
      }
      for (; T <= B && T <= K; ) {
        const Q = d[B],
          ee = (p[K] = L ? Mt(p[K]) : st(p[K]))
        if (bt(Q, ee)) E(Q, ee, b, null, R, I, N, S, L)
        else break
        B--, K--
      }
      if (T > B) {
        if (T <= K) {
          const Q = K + 1,
            ee = Q < U ? p[Q].el : w
          for (; T <= K; )
            E(null, (p[T] = L ? Mt(p[T]) : st(p[T])), b, ee, R, I, N, S, L), T++
        }
      } else if (T > K) for (; T <= B; ) Ie(d[T], R, I, !0), T++
      else {
        const Q = T,
          ee = T,
          fe = new Map()
        for (T = ee; T <= K; T++) {
          const He = (p[T] = L ? Mt(p[T]) : st(p[T]))
          He.key != null && fe.set(He.key, T)
        }
        let ae,
          ve = 0
        const ut = K - ee + 1
        let nn = !1,
          mo = 0
        const An = new Array(ut)
        for (T = 0; T < ut; T++) An[T] = 0
        for (T = Q; T <= B; T++) {
          const He = d[T]
          if (ve >= ut) {
            Ie(He, R, I, !0)
            continue
          }
          let gt
          if (He.key != null) gt = fe.get(He.key)
          else
            for (ae = ee; ae <= K; ae++)
              if (An[ae - ee] === 0 && bt(He, p[ae])) {
                gt = ae
                break
              }
          gt === void 0
            ? Ie(He, R, I, !0)
            : ((An[gt - ee] = T + 1),
              gt >= mo ? (mo = gt) : (nn = !0),
              E(He, p[gt], b, null, R, I, N, S, L),
              ve++)
        }
        const go = nn ? Iu(An) : an
        for (ae = go.length - 1, T = ut - 1; T >= 0; T--) {
          const He = ee + T,
            gt = p[He],
            yo = He + 1 < U ? p[He + 1].el : w
          An[T] === 0
            ? E(null, gt, b, yo, R, I, N, S, L)
            : nn && (ae < 0 || T !== go[ae] ? at(gt, b, yo, 2) : ae--)
        }
      }
    },
    at = (d, p, b, w, R = null) => {
      const { el: I, type: N, transition: S, children: L, shapeFlag: T } = d
      if (T & 6) {
        at(d.component.subTree, p, b, w)
        return
      }
      if (T & 128) {
        d.suspense.move(p, b, w)
        return
      }
      if (T & 64) {
        N.move(d, p, b, ne)
        return
      }
      if (N === Re) {
        r(I, p, b)
        for (let B = 0; B < L.length; B++) at(L[B], p, b, w)
        r(d.anchor, p, b)
        return
      }
      if (N === Hn) {
        _(d, p, b)
        return
      }
      if (w !== 2 && T & 1 && S)
        if (w === 0) S.beforeEnter(I), r(I, p, b), Le(() => S.enter(I), R)
        else {
          const { leave: B, delayLeave: K, afterLeave: Q } = S,
            ee = () => r(I, p, b),
            fe = () => {
              B(I, () => {
                ee(), Q && Q()
              })
            }
          K ? K(I, ee, fe) : fe()
        }
      else r(I, p, b)
    },
    Ie = (d, p, b, w = !1, R = !1) => {
      const {
        type: I,
        props: N,
        ref: S,
        children: L,
        dynamicChildren: T,
        shapeFlag: U,
        patchFlag: B,
        dirs: K,
      } = d
      if ((S != null && Er(S, null, b, d, !0), U & 256)) {
        p.ctx.deactivate(d)
        return
      }
      const Q = U & 1 && K,
        ee = !pn(d)
      let fe
      if ((ee && (fe = N && N.onVnodeBeforeUnmount) && rt(fe, p, d), U & 6))
        C(d.component, b, w)
      else {
        if (U & 128) {
          d.suspense.unmount(b, w)
          return
        }
        Q && yt(d, null, p, 'beforeUnmount'),
          U & 64
            ? d.type.remove(d, p, b, R, ne, w)
            : T && (I !== Re || (B > 0 && B & 64))
            ? j(T, p, b, !1, !0)
            : ((I === Re && B & 384) || (!R && U & 16)) && j(L, p, b),
          w && tn(d)
      }
      ;((ee && (fe = N && N.onVnodeUnmounted)) || Q) &&
        Le(() => {
          fe && rt(fe, p, d), Q && yt(d, null, p, 'unmounted')
        }, b)
    },
    tn = (d) => {
      const { type: p, el: b, anchor: w, transition: R } = d
      if (p === Re) {
        er(b, w)
        return
      }
      if (p === Hn) {
        O(d)
        return
      }
      const I = () => {
        s(b), R && !R.persisted && R.afterLeave && R.afterLeave()
      }
      if (d.shapeFlag & 1 && R && !R.persisted) {
        const { leave: N, delayLeave: S } = R,
          L = () => N(b, I)
        S ? S(d.el, I, L) : L()
      } else I()
    },
    er = (d, p) => {
      let b
      for (; d !== p; ) (b = h(d)), s(d), (d = b)
      s(p)
    },
    C = (d, p, b) => {
      const { bum: w, scope: R, update: I, subTree: N, um: S } = d
      w && Vr(w),
        R.stop(),
        I && ((I.active = !1), Ie(N, d, p, b)),
        S && Le(S, p),
        Le(() => {
          d.isUnmounted = !0
        }, p),
        p &&
          p.pendingBranch &&
          !p.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === p.pendingId &&
          (p.deps--, p.deps === 0 && p.resolve())
    },
    j = (d, p, b, w = !1, R = !1, I = 0) => {
      for (let N = I; N < d.length; N++) Ie(d[N], p, b, w, R)
    },
    x = (d) =>
      d.shapeFlag & 6
        ? x(d.component.subTree)
        : d.shapeFlag & 128
        ? d.suspense.next()
        : h(d.anchor || d.el),
    $ = (d, p, b) => {
      d == null
        ? p._vnode && Ie(p._vnode, null, null, !0)
        : E(p._vnode || null, d, p, null, null, null, b),
        To(),
        yr(),
        (p._vnode = d)
    },
    ne = {
      p: E,
      um: Ie,
      m: at,
      r: tn,
      mt: F,
      mc: k,
      pc: ce,
      pbc: W,
      n: x,
      o: e,
    }
  let me, X
  return (
    t && ([me, X] = t(ne)), { render: $, hydrate: me, createApp: Au($, me) }
  )
}
function Ut({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Dl(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (G(r) && G(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o]
      let l = s[o]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[o] = Mt(s[o])), (l.el = i.el)),
        n || Dl(i, l)),
        l.type === mn && (l.el = i.el)
    }
}
function Iu(e) {
  const t = e.slice(),
    n = [0]
  let r, s, o, i, l
  const c = e.length
  for (r = 0; r < c; r++) {
    const a = e[r]
    if (a !== 0) {
      if (((s = n[n.length - 1]), e[s] < a)) {
        ;(t[r] = s), n.push(r)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < a ? (o = l + 1) : (i = l)
      a < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
const Lu = (e) => e.__isTeleport,
  Re = Symbol(void 0),
  mn = Symbol(void 0),
  ke = Symbol(void 0),
  Hn = Symbol(void 0),
  Nn = []
let ot = null
function de(e = !1) {
  Nn.push((ot = e ? null : []))
}
function $l() {
  Nn.pop(), (ot = Nn[Nn.length - 1] || null)
}
let gn = 1
function jo(e) {
  gn += e
}
function Ul(e) {
  return (
    (e.dynamicChildren = gn > 0 ? ot || an : null),
    $l(),
    gn > 0 && ot && ot.push(e),
    e
  )
}
function tt(e, t, n, r, s, o) {
  return Ul(ie(e, t, n, r, s, o, !0))
}
function it(e, t, n, r, s) {
  return Ul(oe(e, t, n, r, s, !0))
}
function Vn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function bt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Fr = '__vInternal',
  Kl = ({ key: e }) => e ?? null,
  dr = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ye(e) || Ee(e) || J(e)
        ? { i: Ae, r: e, k: t, f: !!n }
        : e
      : null
function ie(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === Re ? 0 : 1,
  i = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kl(t),
    ref: t && dr(t),
    scopeId: xr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ae,
  }
  return (
    l
      ? (no(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ye(n) ? 8 : 16),
    gn > 0 &&
      !i &&
      ot &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      ot.push(c),
    c
  )
}
const oe = Mu
function Mu(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Ol) && (e = ke), Vn(e))) {
    const l = Dt(e, t, !0)
    return (
      n && no(l, n),
      gn > 0 &&
        !o &&
        ot &&
        (l.shapeFlag & 6 ? (ot[ot.indexOf(e)] = l) : ot.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((Wu(e) && (e = e.__vccOpts), t)) {
    t = xu(t)
    let { class: l, style: c } = t
    l && !ye(l) && (t.class = Te(l)),
      he(c) && (ol(c) && !G(c) && (c = we({}, c)), (t.style = Ar(c)))
  }
  const i = ye(e) ? 1 : Qa(e) ? 128 : Lu(e) ? 64 : he(e) ? 4 : J(e) ? 2 : 0
  return ie(e, t, n, r, s, i, o, !0)
}
function xu(e) {
  return e ? (ol(e) || Fr in e ? we({}, e) : e) : null
}
function Dt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e,
    l = t ? Hu(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Kl(l),
    ref:
      t && t.ref ? (n && s ? (G(s) ? s.concat(dr(t)) : [s, dr(t)]) : dr(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Re ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function Wl(e = ' ', t = 0) {
  return oe(mn, null, e, t)
}
function gg(e, t) {
  const n = oe(Hn, null, e)
  return (n.staticCount = t), n
}
function hr(e = '', t = !1) {
  return t ? (de(), it(ke, null, e)) : oe(ke, null, e)
}
function st(e) {
  return e == null || typeof e == 'boolean'
    ? oe(ke)
    : G(e)
    ? oe(Re, null, e.slice())
    : typeof e == 'object'
    ? Mt(e)
    : oe(mn, null, String(e))
}
function Mt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Dt(e)
}
function no(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (G(t)) n = 16
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), no(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(Fr in t)
        ? (t._ctx = Ae)
        : s === 3 &&
          Ae &&
          (Ae.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    J(t)
      ? ((t = { default: t, _ctx: Ae }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Wl(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Hu(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === 'class')
        t.class !== r.class && (t.class = Te([t.class, r.class]))
      else if (s === 'style') t.style = Ar([t.style, r.style])
      else if (Qn(s)) {
        const o = t[s],
          i = r[s]
        i &&
          o !== i &&
          !(G(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i)
      } else s !== '' && (t[s] = r[s])
  }
  return t
}
function rt(e, t, n, r = null) {
  lt(e, t, 7, [n, r])
}
const Nu = Fl()
let ju = 0
function Fu(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Nu,
    o = {
      uid: ju++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Gi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: xl(r, s),
      emitsOptions: yl(r, s),
      emit: null,
      emitted: null,
      propsDefaults: pe,
      inheritAttrs: r.inheritAttrs,
      ctx: pe,
      data: pe,
      props: pe,
      attrs: pe,
      slots: pe,
      refs: pe,
      setupState: pe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Ua.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let ge = null
const Xn = () => ge || Ae,
  yn = (e) => {
    ;(ge = e), e.scope.on()
  },
  Qt = () => {
    ge && ge.scope.off(), (ge = null)
  }
function ql(e) {
  return e.vnode.shapeFlag & 4
}
let vn = !1
function Bu(e, t = !1) {
  vn = t
  const { props: n, children: r } = e.vnode,
    s = ql(e)
  Eu(e, n, s, t), Ru(e, r)
  const o = s ? Du(e, t) : void 0
  return (vn = !1), o
}
function Du(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = il(new Proxy(e.ctx, mu)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Uu(e) : null)
    yn(e), wn()
    const o = jt(r, e, 0, [e.props, s])
    if ((Cn(), Qt(), Ki(o))) {
      if ((o.then(Qt, Qt), t))
        return o
          .then((i) => {
            Es(e, i, t)
          })
          .catch((i) => {
            Rn(i, e, 0)
          })
      e.asyncDep = o
    } else Es(e, o, t)
  } else Vl(e, t)
}
function Es(e, t, n) {
  J(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : he(t) && (e.setupState = ul(t)),
    Vl(e, n)
}
let Fo
function Vl(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Fo && !r.render) {
      const s = r.template || eo(e).template
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          a = we(we({ isCustomElement: o, delimiters: l }, i), c)
        r.render = Fo(s, a)
      }
    }
    e.render = r.render || ht
  }
  yn(e), wn(), gu(e), Cn(), Qt()
}
function $u(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Me(e, 'get', '$attrs'), t[n]
    },
  })
}
function Uu(e) {
  const t = (r) => {
    e.exposed = r || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = $u(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function ro(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ul(il(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in xn) return xn[n](e)
        },
        has(t, n) {
          return n in t || n in xn
        },
      }))
    )
}
function Ku(e, t = !0) {
  return J(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Wu(e) {
  return J(e) && '__vccOpts' in e
}
const Y = (e, t) => ja(e, t, vn)
function Gn(e, t, n) {
  const r = arguments.length
  return r === 2
    ? he(t) && !G(t)
      ? Vn(t)
        ? oe(e, null, [t])
        : oe(e, t)
      : oe(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Vn(n) && (n = [n]),
      oe(e, t, n))
}
const qu = Symbol(''),
  Vu = () => et(qu),
  so = '3.2.47',
  Gu = 'http://www.w3.org/2000/svg',
  Gt = typeof document < 'u' ? document : null,
  Bo = Gt && Gt.createElement('template'),
  zu = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? Gt.createElementNS(Gu, e)
        : Gt.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          r &&
          r.multiple != null &&
          s.setAttribute('multiple', r.multiple),
        s
      )
    },
    createText: (e) => Gt.createTextNode(e),
    createComment: (e) => Gt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Gt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        Bo.innerHTML = r ? `<svg>${e}</svg>` : e
        const l = Bo.content
        if (r) {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  }
function Qu(e, t, n) {
  const r = e._vtc
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
function Ju(e, t, n) {
  const r = e.style,
    s = ye(n)
  if (n && !s) {
    if (t && !ye(t)) for (const o in t) n[o] == null && ws(r, o, '')
    for (const o in n) ws(r, o, n[o])
  } else {
    const o = r.display
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (r.display = o)
  }
}
const Do = /\s*!important$/
function ws(e, t, n) {
  if (G(n)) n.forEach((r) => ws(e, t, r))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const r = Yu(e, t)
    Do.test(n)
      ? e.setProperty(En(r), n.replace(Do, ''), 'important')
      : (e[r] = n)
  }
}
const $o = ['Webkit', 'Moz', 'ms'],
  Yr = {}
function Yu(e, t) {
  const n = Yr[t]
  if (n) return n
  let r = _t(t)
  if (r !== 'filter' && r in e) return (Yr[t] = r)
  r = kr(r)
  for (let s = 0; s < $o.length; s++) {
    const o = $o[s] + r
    if (o in e) return (Yr[t] = o)
  }
  return t
}
const Uo = 'http://www.w3.org/1999/xlink'
function Xu(e, t, n, r, s) {
  if (r && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Uo, t.slice(6, t.length))
      : e.setAttributeNS(Uo, t, n)
  else {
    const o = Gc(t)
    n == null || (o && !Bi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : n)
  }
}
function Zu(e, t, n, r, s, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && i(r, s, o), (e[t] = n ?? '')
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n
    const c = n ?? ''
    ;(e.value !== c || e.tagName === 'OPTION') && (e.value = c),
      n == null && e.removeAttribute(t)
    return
  }
  let l = !1
  if (n === '' || n == null) {
    const c = typeof e[t]
    c === 'boolean'
      ? (n = Bi(n))
      : n == null && c === 'string'
      ? ((n = ''), (l = !0))
      : c === 'number' && ((n = 0), (l = !0))
  }
  try {
    e[t] = n
  } catch {}
  l && e.removeAttribute(t)
}
function ef(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function tf(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
function nf(e, t, n, r, s = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t]
  if (r && i) i.value = r
  else {
    const [l, c] = rf(t)
    if (r) {
      const a = (o[t] = lf(r, s))
      ef(e, l, a, c)
    } else i && (tf(e, l, i, c), (o[t] = void 0))
  }
}
const Ko = /(?:Once|Passive|Capture)$/
function rf(e) {
  let t
  if (Ko.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Ko)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : En(e.slice(2)), t]
}
let Xr = 0
const sf = Promise.resolve(),
  of = () => Xr || (sf.then(() => (Xr = 0)), (Xr = Date.now()))
function lf(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    lt(cf(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = of()), n
}
function cf(e, t) {
  if (G(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const Wo = /^on[a-z]/,
  af = (e, t, n, r, s = !1, o, i, l, c) => {
    t === 'class'
      ? Qu(e, r, s)
      : t === 'style'
      ? Ju(e, n, r)
      : Qn(t)
      ? Fs(t) || nf(e, t, n, r, i)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : uf(e, t, r, s)
        )
      ? Zu(e, t, r, o, i, l, c)
      : (t === 'true-value'
          ? (e._trueValue = r)
          : t === 'false-value' && (e._falseValue = r),
        Xu(e, t, r, s))
  }
function uf(e, t, n, r) {
  return r
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && Wo.test(t) && J(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (Wo.test(t) && ye(n))
    ? !1
    : t in e
}
const kt = 'transition',
  On = 'animation',
  oo = (e, { slots: t }) => Gn(_l, ff(e), t)
oo.displayName = 'Transition'
const Gl = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
}
oo.props = we({}, _l.props, Gl)
const Kt = (e, t = []) => {
    G(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  qo = (e) => (e ? (G(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function ff(e) {
  const t = {}
  for (const H in e) H in Gl || (t[H] = e[H])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: a = i,
      appearToClass: u = l,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    v = df(s),
    E = v && v[0],
    A = v && v[1],
    {
      onBeforeEnter: y,
      onEnter: g,
      onEnterCancelled: _,
      onLeave: O,
      onLeaveCancelled: P,
      onBeforeAppear: M = y,
      onAppear: D = g,
      onAppearCancelled: k = _,
    } = t,
    q = (H, z, F) => {
      Wt(H, z ? u : l), Wt(H, z ? a : i), F && F()
    },
    W = (H, z) => {
      ;(H._isLeaving = !1), Wt(H, f), Wt(H, m), Wt(H, h), z && z()
    },
    V = (H) => (z, F) => {
      const _e = H ? D : g,
        Z = () => q(z, H, F)
      Kt(_e, [z, Z]),
        Vo(() => {
          Wt(z, H ? c : o), It(z, H ? u : l), qo(_e) || Go(z, r, E, Z)
        })
    }
  return we(t, {
    onBeforeEnter(H) {
      Kt(y, [H]), It(H, o), It(H, i)
    },
    onBeforeAppear(H) {
      Kt(M, [H]), It(H, c), It(H, a)
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(H, z) {
      H._isLeaving = !0
      const F = () => W(H, z)
      It(H, f),
        mf(),
        It(H, h),
        Vo(() => {
          H._isLeaving && (Wt(H, f), It(H, m), qo(O) || Go(H, r, A, F))
        }),
        Kt(O, [H, F])
    },
    onEnterCancelled(H) {
      q(H, !1), Kt(_, [H])
    },
    onAppearCancelled(H) {
      q(H, !0), Kt(k, [H])
    },
    onLeaveCancelled(H) {
      W(H), Kt(P, [H])
    },
  })
}
function df(e) {
  if (e == null) return null
  if (he(e)) return [Zr(e.enter), Zr(e.leave)]
  {
    const t = Zr(e)
    return [t, t]
  }
}
function Zr(e) {
  return Vi(e)
}
function It(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t)
}
function Wt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function Vo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let hf = 0
function Go(e, t, n, r) {
  const s = (e._endId = ++hf),
    o = () => {
      s === e._endId && r()
    }
  if (n) return setTimeout(o, n)
  const { type: i, timeout: l, propCount: c } = pf(e, t)
  if (!i) return r()
  const a = i + 'end'
  let u = 0
  const f = () => {
      e.removeEventListener(a, h), o()
    },
    h = (m) => {
      m.target === e && ++u >= c && f()
    }
  setTimeout(() => {
    u < c && f()
  }, l + 1),
    e.addEventListener(a, h)
}
function pf(e, t) {
  const n = window.getComputedStyle(e),
    r = (v) => (n[v] || '').split(', '),
    s = r(`${kt}Delay`),
    o = r(`${kt}Duration`),
    i = zo(s, o),
    l = r(`${On}Delay`),
    c = r(`${On}Duration`),
    a = zo(l, c)
  let u = null,
    f = 0,
    h = 0
  t === kt
    ? i > 0 && ((u = kt), (f = i), (h = o.length))
    : t === On
    ? a > 0 && ((u = On), (f = a), (h = c.length))
    : ((f = Math.max(i, a)),
      (u = f > 0 ? (i > a ? kt : On) : null),
      (h = u ? (u === kt ? o.length : c.length) : 0))
  const m =
    u === kt && /\b(transform|all)(,|$)/.test(r(`${kt}Property`).toString())
  return { type: u, timeout: f, propCount: h, hasTransform: m }
}
function zo(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, r) => Qo(n) + Qo(e[r])))
}
function Qo(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function mf() {
  return document.body.offsetHeight
}
const zl = we({ patchProp: af }, zu)
let jn,
  Jo = !1
function gf() {
  return jn || (jn = Su(zl))
}
function yf() {
  return (jn = Jo ? jn : ku(zl)), (Jo = !0), jn
}
const vf = (...e) => {
    const t = gf().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = Ql(r)
        if (!s) return
        const o = t._component
        !J(o) && !o.render && !o.template && (o.template = s.innerHTML),
          (s.innerHTML = '')
        const i = n(s, !1, s instanceof SVGElement)
        return (
          s instanceof Element &&
            (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
          i
        )
      }),
      t
    )
  },
  bf = (...e) => {
    const t = yf().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = Ql(r)
        if (s) return n(s, !0, s instanceof SVGElement)
      }),
      t
    )
  }
function Ql(e) {
  return ye(e) ? document.querySelector(e) : e
}
const _f =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Ef =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  wf = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/
function Cf(e, t) {
  if (
    e !== '__proto__' &&
    !(e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)
  )
    return t
}
function Rf(e, t = {}) {
  if (typeof e != 'string') return e
  const n = e.toLowerCase().trim()
  if (n === 'true') return !0
  if (n === 'false') return !1
  if (n === 'null') return null
  if (n === 'nan') return Number.NaN
  if (n === 'infinity') return Number.POSITIVE_INFINITY
  if (n !== 'undefined') {
    if (!wf.test(e)) {
      if (t.strict) throw new SyntaxError('Invalid JSON')
      return e
    }
    try {
      return _f.test(e) || Ef.test(e) ? JSON.parse(e, Cf) : JSON.parse(e)
    } catch (r) {
      if (t.strict) throw r
      return e
    }
  }
}
const Pf = /#/g,
  Tf = /&/g,
  Af = /=/g,
  Jl = /\+/g,
  Of = /%5b/gi,
  Sf = /%5d/gi,
  kf = /%5e/gi,
  If = /%60/gi,
  Lf = /%7b/gi,
  Mf = /%7c/gi,
  xf = /%7d/gi,
  Hf = /%20/gi
function Nf(e) {
  return encodeURI('' + e)
    .replace(Mf, '|')
    .replace(Of, '[')
    .replace(Sf, ']')
}
function Cs(e) {
  return Nf(e)
    .replace(Jl, '%2B')
    .replace(Hf, '+')
    .replace(Pf, '%23')
    .replace(Tf, '%26')
    .replace(If, '`')
    .replace(Lf, '{')
    .replace(xf, '}')
    .replace(kf, '^')
}
function es(e) {
  return Cs(e).replace(Af, '%3D')
}
function Yl(e = '') {
  try {
    return decodeURIComponent('' + e)
  } catch {
    return '' + e
  }
}
function jf(e) {
  return Yl(e.replace(Jl, ' '))
}
function Ff(e = '') {
  const t = {}
  e[0] === '?' && (e = e.slice(1))
  for (const n of e.split('&')) {
    const r = n.match(/([^=]+)=?(.*)/) || []
    if (r.length < 2) continue
    const s = Yl(r[1])
    if (s === '__proto__' || s === 'constructor') continue
    const o = jf(r[2] || '')
    typeof t[s] < 'u'
      ? Array.isArray(t[s])
        ? t[s].push(o)
        : (t[s] = [t[s], o])
      : (t[s] = o)
  }
  return t
}
function Bf(e, t) {
  return (
    (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${es(e)}=${Cs(n)}`).join('&')
        : `${es(e)}=${Cs(t)}`
      : es(e)
  )
}
function Df(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => Bf(t, e[t]))
    .join('&')
}
const $f = /^\w{2,}:(\/\/)?/,
  Uf = /^\/\/[^/]+/
function Zn(e, t = !1) {
  return $f.test(e) || (t && Uf.test(e))
}
const Kf = /\/$|\/\?/
function Rs(e = '', t = !1) {
  return t ? Kf.test(e) : e.endsWith('/')
}
function Xl(e = '', t = !1) {
  if (!t) return (Rs(e) ? e.slice(0, -1) : e) || '/'
  if (!Rs(e, !0)) return e || '/'
  const [n, ...r] = e.split('?')
  return (n.slice(0, -1) || '/') + (r.length > 0 ? `?${r.join('?')}` : '')
}
function Wf(e = '', t = !1) {
  if (!t) return e.endsWith('/') ? e : e + '/'
  if (Rs(e, !0)) return e || '/'
  const [n, ...r] = e.split('?')
  return n + '/' + (r.length > 0 ? `?${r.join('?')}` : '')
}
function qf(e = '') {
  return e.startsWith('/')
}
function Vf(e = '') {
  return (qf(e) ? e.slice(1) : e) || '/'
}
function Gf(e, t) {
  if (Zl(t) || Zn(e)) return e
  const n = Xl(t)
  return e.startsWith(n) ? e : Br(n, e)
}
function Yo(e, t) {
  if (Zl(t)) return e
  const n = Xl(t)
  if (!e.startsWith(n)) return e
  const r = e.slice(n.length)
  return r[0] === '/' ? r : '/' + r
}
function zf(e, t) {
  const n = Dr(e),
    r = { ...Ff(n.search), ...t }
  return (n.search = Df(r)), Jf(n)
}
function Zl(e) {
  return !e || e === '/'
}
function Qf(e) {
  return e && e !== '/'
}
function Br(e, ...t) {
  let n = e || ''
  for (const r of t.filter((s) => Qf(s))) n = n ? Wf(n) + Vf(r) : r
  return n
}
function Dr(e = '', t) {
  if (!Zn(e, !0)) return t ? Dr(t + e) : Xo(e)
  const [n = '', r, s = ''] = (
      e.replace(/\\/g, '/').match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []
    ).splice(1),
    [o = '', i = ''] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: l, search: c, hash: a } = Xo(i.replace(/\/(?=[A-Za-z]:)/, ''))
  return {
    protocol: n,
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : '',
    host: o,
    pathname: l,
    search: c,
    hash: a,
  }
}
function Xo(e = '') {
  const [t = '', n = '', r = ''] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1)
  return { pathname: t, search: n, hash: r }
}
function Jf(e) {
  const t =
    e.pathname +
    (e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '') +
    e.hash
  return e.protocol
    ? e.protocol + '//' + (e.auth ? e.auth + '@' : '') + e.host + t
    : t
}
class Yf extends Error {
  constructor() {
    super(...arguments), (this.name = 'FetchError')
  }
}
function Xf(e, t, n) {
  let r = ''
  e && n && (r = `${n.status} ${n.statusText} (${e.toString()})`),
    t && (r = `${t.message} (${r})`)
  const s = new Yf(r)
  return (
    Object.defineProperty(s, 'request', {
      get() {
        return e
      },
    }),
    Object.defineProperty(s, 'response', {
      get() {
        return n
      },
    }),
    Object.defineProperty(s, 'data', {
      get() {
        return n && n._data
      },
    }),
    Object.defineProperty(s, 'status', {
      get() {
        return n && n.status
      },
    }),
    Object.defineProperty(s, 'statusText', {
      get() {
        return n && n.statusText
      },
    }),
    Object.defineProperty(s, 'statusCode', {
      get() {
        return n && n.status
      },
    }),
    Object.defineProperty(s, 'statusMessage', {
      get() {
        return n && n.statusText
      },
    }),
    s
  )
}
const Zf = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']))
function Zo(e = 'GET') {
  return Zf.has(e.toUpperCase())
}
function ed(e) {
  if (e === void 0) return !1
  const t = typeof e
  return t === 'string' || t === 'number' || t === 'boolean' || t === null
    ? !0
    : t !== 'object'
    ? !1
    : Array.isArray(e)
    ? !0
    : (e.constructor && e.constructor.name === 'Object') ||
      typeof e.toJSON == 'function'
}
const td = new Set([
    'image/svg',
    'application/xml',
    'application/xhtml',
    'application/html',
  ]),
  nd = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i
function rd(e = '') {
  if (!e) return 'json'
  const t = e.split(';').shift()
  return nd.test(t)
    ? 'json'
    : td.has(t) || t.startsWith('text/')
    ? 'text'
    : 'blob'
}
const sd = new Set([408, 409, 425, 429, 500, 502, 503, 504])
function ec(e) {
  const { fetch: t, Headers: n } = e
  function r(i) {
    const l = (i.error && i.error.name === 'AbortError') || !1
    if (i.options.retry !== !1 && !l) {
      const a =
          typeof i.options.retry == 'number'
            ? i.options.retry
            : Zo(i.options.method)
            ? 0
            : 1,
        u = (i.response && i.response.status) || 500
      if (a > 0 && sd.has(u))
        return s(i.request, { ...i.options, retry: a - 1 })
    }
    const c = Xf(i.request, i.error, i.response)
    throw (Error.captureStackTrace && Error.captureStackTrace(c, s), c)
  }
  const s = async function (l, c = {}) {
      const a = {
        request: l,
        options: { ...e.defaults, ...c },
        response: void 0,
        error: void 0,
      }
      a.options.onRequest && (await a.options.onRequest(a)),
        typeof a.request == 'string' &&
          (a.options.baseURL && (a.request = Gf(a.request, a.options.baseURL)),
          (a.options.query || a.options.params) &&
            (a.request = zf(a.request, {
              ...a.options.params,
              ...a.options.query,
            })),
          a.options.body &&
            Zo(a.options.method) &&
            ed(a.options.body) &&
            ((a.options.body =
              typeof a.options.body == 'string'
                ? a.options.body
                : JSON.stringify(a.options.body)),
            (a.options.headers = new n(a.options.headers)),
            a.options.headers.has('content-type') ||
              a.options.headers.set('content-type', 'application/json'),
            a.options.headers.has('accept') ||
              a.options.headers.set('accept', 'application/json'))),
        (a.response = await t(a.request, a.options).catch(
          async (f) => (
            (a.error = f),
            a.options.onRequestError && (await a.options.onRequestError(a)),
            r(a)
          )
        ))
      const u =
        (a.options.parseResponse ? 'json' : a.options.responseType) ||
        rd(a.response.headers.get('content-type') || '')
      if (u === 'json') {
        const f = await a.response.text(),
          h = a.options.parseResponse || Rf
        a.response._data = h(f)
      } else
        u === 'stream'
          ? (a.response._data = a.response.body)
          : (a.response._data = await a.response[u]())
      return (
        a.options.onResponse && (await a.options.onResponse(a)),
        a.response.status >= 400 && a.response.status < 600
          ? (a.options.onResponseError && (await a.options.onResponseError(a)),
            r(a))
          : a.response
      )
    },
    o = function (l, c) {
      return s(l, c).then((a) => a._data)
    }
  return (
    (o.raw = s),
    (o.native = t),
    (o.create = (i = {}) => ec({ ...e, defaults: { ...e.defaults, ...i } })),
    o
  )
}
const tc = (function () {
    if (typeof globalThis < 'u') return globalThis
    if (typeof self < 'u') return self
    if (typeof window < 'u') return window
    if (typeof global < 'u') return global
    throw new Error('unable to locate global object')
  })(),
  od =
    tc.fetch ||
    (() =>
      Promise.reject(new Error('[ofetch] global.fetch is not supported!'))),
  id = tc.Headers,
  ld = ec({ fetch: od, Headers: id }),
  cd = ld,
  ad = () => {
    var e
    return (
      ((e = window == null ? void 0 : window.__NUXT__) == null
        ? void 0
        : e.config) || {}
    )
  },
  wr = ad().app,
  ud = () => wr.baseURL,
  fd = () => wr.buildAssetsDir,
  dd = (...e) => Br(nc(), fd(), ...e),
  nc = (...e) => {
    const t = wr.cdnURL || wr.baseURL
    return e.length ? Br(t, ...e) : t
  }
;(globalThis.__buildAssetsURL = dd), (globalThis.__publicAssetsURL = nc)
function Ps(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      o = n ? `${n}:${r}` : r
    typeof s == 'object' && s !== null
      ? Ps(s, t, o)
      : typeof s == 'function' && (t[o] = s)
  }
  return t
}
function hd(e, t) {
  return e.reduce((n, r) => n.then(() => r.apply(void 0, t)), Promise.resolve())
}
function pd(e, t) {
  return Promise.all(e.map((n) => n.apply(void 0, t)))
}
function ts(e, t) {
  for (const n of e) n(t)
}
class md {
  constructor() {
    ;(this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this))
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != 'function') return () => {}
    const s = t
    let o
    for (; this._deprecatedHooks[t]; )
      (o = this._deprecatedHooks[t]), (t = o.to)
    if (o && !r.allowDeprecated) {
      let i = o.message
      i ||
        (i =
          `${s} hook has been deprecated` +
          (o.to ? `, please use ${o.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) ||
          (console.warn(i), this._deprecatedMessages.add(i))
    }
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0))
      }
    )
  }
  hookOnce(t, n) {
    let r,
      s = (...o) => (
        typeof r == 'function' && r(), (r = void 0), (s = void 0), n(...o)
      )
    return (r = this.hook(t, s)), r
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n)
      r !== -1 && this._hooks[t].splice(r, 1),
        this._hooks[t].length === 0 && delete this._hooks[t]
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n
    const r = this._hooks[t] || []
    this._hooks[t] = void 0
    for (const s of r) this.hook(t, s)
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t)
    for (const n in t) this.deprecateHook(n, t[n])
  }
  addHooks(t) {
    const n = Ps(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]))
    return () => {
      for (const s of r.splice(0, r.length)) s()
    }
  }
  removeHooks(t) {
    const n = Ps(t)
    for (const r in n) this.removeHook(r, n[r])
  }
  callHook(t, ...n) {
    return this.callHookWith(hd, t, ...n)
  }
  callHookParallel(t, ...n) {
    return this.callHookWith(pd, t, ...n)
  }
  callHookWith(t, n, ...r) {
    const s =
      this._before || this._after ? { name: n, args: r, context: {} } : void 0
    this._before && ts(this._before, s)
    const o = t(this._hooks[n] || [], r)
    return o instanceof Promise
      ? o.finally(() => {
          this._after && s && ts(this._after, s)
        })
      : (this._after && s && ts(this._after, s), o)
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        const n = this._before.indexOf(t)
        n !== -1 && this._before.splice(n, 1)
      }
    )
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        const n = this._after.indexOf(t)
        n !== -1 && this._after.splice(n, 1)
      }
    )
  }
}
function rc() {
  return new md()
}
function gd() {
  let e,
    t = !1
  const n = (r) => {
    if (e && e !== r) throw new Error('Context conflict')
  }
  return {
    use: () => {
      if (e === void 0) throw new Error('Context is not available')
      return e
    },
    tryUse: () => e,
    set: (r, s) => {
      s || n(r), (e = r), (t = !0)
    },
    unset: () => {
      ;(e = void 0), (t = !1)
    },
    call: (r, s) => {
      n(r), (e = r)
      try {
        return s()
      } finally {
        t || (e = void 0)
      }
    },
    async callAsync(r, s) {
      e = r
      const o = () => {
          e = r
        },
        i = () => (e === r ? o : void 0)
      Ts.add(i)
      try {
        const l = s()
        return t || (e = void 0), await l
      } finally {
        Ts.delete(i)
      }
    },
  }
}
function yd() {
  const e = {}
  return {
    get(t) {
      return e[t] || (e[t] = gd()), e[t], e[t]
    },
  }
}
const Cr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof global < 'u'
      ? global
      : typeof window < 'u'
      ? window
      : {},
  ei = '__unctx__',
  vd = Cr[ei] || (Cr[ei] = yd()),
  bd = (e) => vd.get(e),
  ti = '__unctx_async_handlers__',
  Ts = Cr[ti] || (Cr[ti] = new Set())
function As(e) {
  const t = []
  for (const s of Ts) {
    const o = s()
    o && t.push(o)
  }
  const n = () => {
    for (const s of t) s()
  }
  let r = e()
  return (
    r &&
      typeof r == 'object' &&
      'catch' in r &&
      (r = r.catch((s) => {
        throw (n(), s)
      })),
    [r, n]
  )
}
const sc = bd('nuxt-app'),
  _d = '__nuxt_plugin'
function Ed(e) {
  let t = 0
  const n = {
    provide: void 0,
    globalName: 'nuxt',
    payload: Et({ data: {}, state: {}, _errors: {}, ...window.__NUXT__ }),
    static: { data: {} },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {}
      t++
      let o = !1
      return () => {
        if (!o && ((o = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook('app:suspense:resolve')
      }
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...e,
  }
  ;(n.hooks = rc()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (o, i) => {
      const l = '$' + o
      ar(n, l, i), ar(n.vueApp.config.globalProperties, l, i)
    }),
    ar(n.vueApp, '$nuxt', n),
    ar(n.vueApp.config.globalProperties, '$nuxt', n)
  const r = Et(n.payload.config),
    s = new Proxy(r, {
      get(o, i) {
        return i === 'public' ? o.public : o[i] ?? o.public[i]
      },
      set(o, i, l) {
        return i === 'public' || i === 'app'
          ? !1
          : ((o[i] = l), (o.public[i] = l), !0)
      },
    })
  return n.provide('config', s), n
}
async function wd(e, t) {
  if (typeof t != 'function') return
  const { provide: n } = (await xt(e, t, [e])) || {}
  if (n && typeof n == 'object') for (const r in n) e.provide(r, n[r])
}
async function Cd(e, t) {
  for (const n of t) await wd(e, n)
}
function Rd(e) {
  return e
    .map((n) =>
      typeof n != 'function' ? null : n.length > 1 ? (r) => n(r, r.provide) : n
    )
    .filter(Boolean)
}
function Xt(e) {
  return (e[_d] = !0), e
}
function xt(e, t, n) {
  const r = () => (n ? t(...n) : t())
  return sc.set(e), r()
}
function Ce() {
  const e = sc.tryUse()
  if (!e) {
    const t = Xn()
    if (!t) throw new Error('nuxt instance unavailable')
    return t.appContext.app.$nuxt
  }
  return e
}
function oc() {
  return Ce().$config
}
function ar(e, t, n) {
  Object.defineProperty(e, t, { get: () => n })
}
const ns = {},
  Pd = Xt((e) => {
    for (const t in ns)
      e.vueApp.component(t, ns[t]), e.vueApp.component('Lazy' + t, ns[t])
  })
function Td(e) {
  return Array.isArray(e) ? e : [e]
}
const Ad = ['title', 'script', 'style', 'noscript'],
  io = ['base', 'meta', 'link', 'style', 'script', 'noscript'],
  Od = [
    'title',
    'titleTemplate',
    'base',
    'htmlAttrs',
    'bodyAttrs',
    'meta',
    'link',
    'style',
    'script',
    'noscript',
  ],
  Sd = ['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs'],
  kd = ['tagPosition', 'tagPriority', 'tagDuplicateStrategy']
function ic(e, t) {
  const { props: n, tag: r } = e
  if (Sd.includes(r)) return r
  if (r === 'link' && n.rel === 'canonical') return 'canonical'
  if (n.charset) return 'charset'
  const s = ['id']
  r === 'meta' && s.push('name', 'property', 'http-equiv')
  for (const o of s)
    if (typeof n[o] < 'u') {
      const i = String(n[o])
      return t && !t(i) ? !1 : `${r}:${o}:${i}`
    }
  return !1
}
const Id = (e) => {
  e = e || {}
  const t = e.dedupeKeys || ['hid', 'vmid', 'key']
  return {
    hooks: {
      'tag:normalise': function ({ tag: n }) {
        t.forEach((s) => {
          n.props[s] && ((n.key = n.props[s]), delete n.props[s])
        })
        const r = n.key ? `${n.tag}:${n.key}` : ic(n)
        r && (n._d = r)
      },
      'tags:resolve': function (n) {
        const r = {}
        n.tags.forEach((s) => {
          let o = s._d || s._p
          const i = r[o]
          if (i) {
            let l = s == null ? void 0 : s.tagDuplicateStrategy
            if (
              (!l &&
                (s.tag === 'htmlAttrs' || s.tag === 'bodyAttrs') &&
                (l = 'merge'),
              l === 'merge')
            ) {
              const a = i.props
              ;['class', 'style'].forEach((u) => {
                s.props[u] &&
                  a[u] &&
                  (u === 'style' && !a[u].endsWith(';') && (a[u] += ';'),
                  (s.props[u] = `${a[u]} ${s.props[u]}`))
              }),
                (r[o].props = { ...a, ...s.props })
              return
            } else s._e === i._e && (o = s._d = `${o}:${s._p}`)
            const c = Object.keys(s.props).length
            if (
              (c === 0 || (c === 1 && typeof s.props['data-h-key'] < 'u')) &&
              !s.children
            ) {
              delete r[o]
              return
            }
          }
          r[o] = s
        }),
          (n.tags = Object.values(r))
      },
    },
  }
}
function lc(e) {
  let t = 9
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9)
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
const ur = (e, t) => {
  const { tag: n, $el: r } = e
  r &&
    (Object.entries(n.props).forEach(([s, o]) => {
      o = String(o)
      const i = `attr:${s}`
      if (s === 'class') {
        if (!o) return
        for (const l of o.split(' ')) {
          const c = `${i}:${l}`
          t && t(e, c, () => r.classList.remove(l)),
            r.classList.contains(l) || r.classList.add(l)
        }
        return
      }
      t && !s.startsWith('data-h-') && t(e, i, () => r.removeAttribute(s)),
        r.getAttribute(s) !== o && r.setAttribute(s, o)
    }),
    Ad.includes(n.tag) &&
      r.innerHTML !== (n.children || '') &&
      (r.innerHTML = n.children || ''))
}
async function cc(e, t = {}) {
  var f, h
  const n = { shouldRender: !0 }
  if ((await e.hooks.callHook('dom:beforeRender', n), !n.shouldRender)) return
  const r = t.document || window.document,
    s = e._popSideEffectQueue()
  e.headEntries()
    .map((m) => m._sde)
    .forEach((m) => {
      Object.entries(m).forEach(([v, E]) => {
        s[v] = E
      })
    })
  const o = async (m) => {
      const v = e.headEntries().find((A) => A._i === m._e),
        E = {
          renderId:
            m._d || lc(JSON.stringify({ ...m, _e: void 0, _p: void 0 })),
          $el: null,
          shouldRender: !0,
          tag: m,
          entry: v,
          staleSideEffects: s,
        }
      return await e.hooks.callHook('dom:beforeRenderTag', E), E
    },
    i = [],
    l = { body: [], head: [] },
    c = (m, v, E) => {
      ;(v = `${m.renderId}:${v}`), m.entry && (m.entry._sde[v] = E), delete s[v]
    },
    a = (m) => {
      ;(e._elMap[m.renderId] = m.$el),
        i.push(m),
        c(m, 'el', () => {
          var v
          ;(v = m.$el) == null || v.remove(), delete e._elMap[m.renderId]
        })
    }
  for (const m of await e.resolveTags()) {
    const v = await o(m)
    if (!v.shouldRender) continue
    const { tag: E } = v
    if (E.tag === 'title') {
      ;(r.title = E.children || ''), i.push(v)
      continue
    }
    if (E.tag === 'htmlAttrs' || E.tag === 'bodyAttrs') {
      ;(v.$el = r[E.tag === 'htmlAttrs' ? 'documentElement' : 'body']),
        ur(v, c),
        i.push(v)
      continue
    }
    if (
      ((v.$el = e._elMap[v.renderId]),
      !v.$el &&
        E._hash &&
        (v.$el = r.querySelector(
          `${
            (f = E.tagPosition) != null && f.startsWith('body')
              ? 'body'
              : 'head'
          } > ${E.tag}[data-h-${E._hash}]`
        )),
      v.$el)
    ) {
      v.tag._d && ur(v), a(v)
      continue
    }
    ;(v.$el = r.createElement(E.tag)),
      ur(v),
      l[
        (h = E.tagPosition) != null && h.startsWith('body') ? 'body' : 'head'
      ].push(v)
  }
  const u = { bodyClose: void 0, bodyOpen: void 0, head: void 0 }
  Object.entries(l).forEach(([m, v]) => {
    var A
    if (!v.length) return
    const E = (A = r == null ? void 0 : r[m]) == null ? void 0 : A.children
    if (E) {
      for (const y of [...E].reverse()) {
        const g = y.tagName.toLowerCase()
        if (!io.includes(g)) continue
        const _ = ic({
            tag: g,
            props: y
              .getAttributeNames()
              .reduce((P, M) => ({ ...P, [M]: y.getAttribute(M) }), {}),
          }),
          O = v.findIndex((P) => {
            var M
            return (
              P &&
              (P.tag._d === _ ||
                ((M = y.isEqualNode) == null ? void 0 : M.call(y, P.$el)))
            )
          })
        if (O !== -1) {
          const P = v[O]
          ;(P.$el = y), ur(P), a(P), delete v[O]
        }
      }
      v.forEach((y) => {
        const g = y.tag.tagPosition || 'head'
        ;(u[g] = u[g] || r.createDocumentFragment()),
          u[g].appendChild(y.$el),
          a(y)
      })
    }
  }),
    u.head && r.head.appendChild(u.head),
    u.bodyOpen && r.body.insertBefore(u.bodyOpen, r.body.firstChild),
    u.bodyClose && r.body.appendChild(u.bodyClose)
  for (const m of i) await e.hooks.callHook('dom:renderTag', m)
  Object.values(s).forEach((m) => m())
}
let rs = null
async function ac(e, t = {}) {
  function n() {
    return (rs = null), cc(e, t)
  }
  const r = t.delayFn || ((s) => setTimeout(s, 10))
  return (rs = rs || new Promise((s) => r(() => s(n()))))
}
const Ld = (e) => ({
    hooks: {
      'entries:updated': function (t) {
        if (
          typeof (e == null ? void 0 : e.document) > 'u' &&
          typeof window > 'u'
        )
          return
        let n = e == null ? void 0 : e.delayFn
        !n && typeof requestAnimationFrame < 'u' && (n = requestAnimationFrame),
          ac(t, {
            document: (e == null ? void 0 : e.document) || window.document,
            delayFn: n,
          })
      },
    },
  }),
  ni = { critical: 2, high: 9, low: 12, base: -1, title: 1, meta: 10 }
function ri(e) {
  if (typeof e.tagPriority == 'number') return e.tagPriority
  if (e.tag === 'meta') {
    if (e.props.charset) return -2
    if (e.props['http-equiv'] === 'content-security-policy') return 0
  }
  const t = e.tagPriority || e.tag
  return t in ni ? ni[t] : 10
}
const Md = [
  { prefix: 'before:', offset: -1 },
  { prefix: 'after:', offset: 1 },
]
function xd() {
  return {
    hooks: {
      'tags:resolve': (e) => {
        const t = (n) => {
          var r
          return (r = e.tags.find((s) => s._d === n)) == null ? void 0 : r._p
        }
        for (const { prefix: n, offset: r } of Md)
          for (const s of e.tags.filter(
            (o) =>
              typeof o.tagPriority == 'string' && o.tagPriority.startsWith(n)
          )) {
            const o = t(s.tagPriority.replace(n, ''))
            typeof o < 'u' && (s._p = o + r)
          }
        e.tags.sort((n, r) => n._p - r._p).sort((n, r) => ri(n) - ri(r))
      },
    },
  }
}
const si = (e, t) =>
    e == null
      ? t || null
      : typeof e == 'function'
      ? e(t)
      : e.replace('%s', t ?? ''),
  Hd = () => ({
    hooks: {
      'tags:resolve': (e) => {
        const { tags: t } = e
        let n = t.findIndex((s) => s.tag === 'titleTemplate')
        const r = t.findIndex((s) => s.tag === 'title')
        if (r !== -1 && n !== -1) {
          const s = si(t[n].children, t[r].children)
          s !== null ? (t[r].children = s || t[r].children) : delete t[r]
        } else if (n !== -1) {
          const s = si(t[n].children)
          s !== null && ((t[n].children = s), (t[n].tag = 'title'), (n = -1))
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean))
      },
    },
  }),
  Nd = () => ({
    hooks: {
      'tag:normalise': function ({ tag: e }) {
        typeof e.props.body < 'u' &&
          ((e.tagPosition = 'bodyClose'), delete e.props.body)
      },
    },
  }),
  jd = typeof window < 'u',
  Fd = () => ({
    hooks: {
      'tag:normalise': (e) => {
        var s, o
        const { tag: t, entry: n } = e,
          r = typeof t.props._dynamic < 'u'
        !io.includes(t.tag) ||
          !t.key ||
          ((t._hash = lc(JSON.stringify({ tag: t.tag, key: t.key }))),
          !(
            jd ||
            ((o = (s = fc()) == null ? void 0 : s.resolvedOptions) != null &&
              o.document)
          ) &&
            (n._m === 'server' || r) &&
            (t.props[`data-h-${t._hash}`] = ''))
      },
      'tags:resolve': (e) => {
        e.tags = e.tags.map((t) => (delete t.props._dynamic, t))
      },
    },
  }),
  oi = ['script', 'link', 'bodyAttrs'],
  Bd = () => {
    const e = (t, n) => {
      const r = {},
        s = {}
      Object.entries(n.props).forEach(([i, l]) => {
        i.startsWith('on') && typeof l == 'function' ? (s[i] = l) : (r[i] = l)
      })
      let o
      return (
        t === 'dom' &&
          n.tag === 'script' &&
          typeof r.src == 'string' &&
          typeof s.onload < 'u' &&
          ((o = r.src), delete r.src),
        { props: r, eventHandlers: s, delayedSrc: o }
      )
    }
    return {
      hooks: {
        'ssr:render': function (t) {
          t.tags = t.tags.map(
            (n) => (
              !oi.includes(n.tag) ||
                !Object.entries(n.props).find(
                  ([r, s]) => r.startsWith('on') && typeof s == 'function'
                ) ||
                (n.props = e('ssr', n).props),
              n
            )
          )
        },
        'dom:beforeRenderTag': function (t) {
          if (
            !oi.includes(t.tag.tag) ||
            !Object.entries(t.tag.props).find(
              ([o, i]) => o.startsWith('on') && typeof i == 'function'
            )
          )
            return
          const { props: n, eventHandlers: r, delayedSrc: s } = e('dom', t.tag)
          Object.keys(r).length &&
            ((t.tag.props = n),
            (t.tag._eventHandlers = r),
            (t.tag._delayedSrc = s))
        },
        'dom:renderTag': function (t) {
          const n = t.$el
          if (!t.tag._eventHandlers || !n) return
          const r =
            t.tag.tag === 'bodyAttrs' && typeof window < 'u' ? window : n
          Object.entries(t.tag._eventHandlers).forEach(([s, o]) => {
            const i = `${t.tag._d || t.tag._p}:${s}`,
              l = s.slice(2).toLowerCase(),
              c = `data-h-${l}`
            if ((delete t.staleSideEffects[i], n.hasAttribute(c))) return
            const a = o
            n.setAttribute(c, ''),
              r.addEventListener(l, a),
              t.entry &&
                (t.entry._sde[i] = () => {
                  r.removeEventListener(l, a), n.removeAttribute(c)
                })
          }),
            t.tag._delayedSrc && n.setAttribute('src', t.tag._delayedSrc)
        },
      },
    }
  }
let uc
const Dd = (e) => (uc = e),
  fc = () => uc
async function $d(e, t) {
  const n = { tag: e, props: {} }
  return e === 'title' || e === 'titleTemplate'
    ? ((n.children = t instanceof Promise ? await t : t), n)
    : ((n.props = await Ud({ ...t })),
      ['children', 'innerHtml', 'innerHTML'].forEach((r) => {
        typeof n.props[r] < 'u' &&
          ((n.children = n.props[r]),
          typeof n.children == 'object' &&
            (n.children = JSON.stringify(n.children)),
          delete n.props[r])
      }),
      Object.keys(n.props)
        .filter((r) => kd.includes(r))
        .forEach((r) => {
          ;(n[r] = n.props[r]), delete n.props[r]
        }),
      typeof n.props.class == 'object' &&
        !Array.isArray(n.props.class) &&
        (n.props.class = Object.keys(n.props.class).filter(
          (r) => n.props.class[r]
        )),
      Array.isArray(n.props.class) && (n.props.class = n.props.class.join(' ')),
      n.props.content && Array.isArray(n.props.content)
        ? n.props.content.map((r, s) => {
            const o = { ...n, props: { ...n.props } }
            return (
              (o.props.content = r),
              (o.key = `${n.props.name || n.props.property}:${s}`),
              o
            )
          })
        : n)
}
async function Ud(e) {
  for (const t of Object.keys(e))
    e[t] instanceof Promise && (e[t] = await e[t]),
      String(e[t]) === 'true'
        ? (e[t] = '')
        : String(e[t]) === 'false' && delete e[t]
  return e
}
const Kd = 10
async function Wd(e) {
  const t = []
  return (
    Object.entries(e.resolvedInput || e.input)
      .filter(([n, r]) => typeof r < 'u' && Od.includes(n))
      .forEach(([n, r]) => {
        const s = Td(r)
        t.push(...s.map((o) => $d(n, o)).flat())
      }),
    (await Promise.all(t))
      .flat()
      .map((n, r) => ((n._e = e._i), (n._p = (e._i << Kd) + r), n))
  )
}
const qd = () => [Id(), xd(), Hd(), Fd(), Bd(), Nd()],
  Vd = (e = {}) => [
    Ld({
      document: e == null ? void 0 : e.document,
      delayFn: e == null ? void 0 : e.domDelayFn,
    }),
  ]
function Gd(e = {}) {
  const t = zd({
    ...e,
    plugins: [...Vd(e), ...((e == null ? void 0 : e.plugins) || [])],
  })
  return Dd(t), t
}
function zd(e = {}) {
  let t = [],
    n = {},
    r = 0
  const s = rc()
  e != null && e.hooks && s.addHooks(e.hooks),
    (e.plugins = [...qd(), ...((e == null ? void 0 : e.plugins) || [])]),
    e.plugins.forEach((l) => l.hooks && s.addHooks(l.hooks))
  const o = () => s.callHook('entries:updated', i),
    i = {
      resolvedOptions: e,
      headEntries() {
        return t
      },
      get hooks() {
        return s
      },
      use(l) {
        l.hooks && s.addHooks(l.hooks)
      },
      push(l, c) {
        const a = { _i: r++, input: l, _sde: {} }
        return (
          c != null && c.mode && (a._m = c == null ? void 0 : c.mode),
          t.push(a),
          o(),
          {
            dispose() {
              t = t.filter((u) =>
                u._i !== a._i
                  ? !0
                  : ((n = { ...n, ...(u._sde || {}) }), (u._sde = {}), o(), !1)
              )
            },
            patch(u) {
              t = t.map(
                (f) => (f._i === a._i && ((a.input = f.input = u), o()), f)
              )
            },
          }
        )
      },
      async resolveTags() {
        const l = { tags: [], entries: [...t] }
        await s.callHook('entries:resolve', l)
        for (const c of l.entries)
          for (const a of await Wd(c)) {
            const u = { tag: a, entry: c }
            await s.callHook('tag:normalise', u), l.tags.push(u.tag)
          }
        return await s.callHook('tags:resolve', l), l.tags
      },
      _elMap: {},
      _popSideEffectQueue() {
        const l = { ...n }
        return (n = {}), l
      },
    }
  return i.hooks.callHook('init', i), i
}
function Qd(e) {
  return typeof e == 'function' ? e() : te(e)
}
function Rr(e, t = '') {
  if (e instanceof Promise) return e
  const n = Qd(e)
  if (!e || !n) return n
  if (Array.isArray(n)) return n.map((r) => Rr(r, t))
  if (typeof n == 'object') {
    let r = !1
    const s = Object.fromEntries(
      Object.entries(n).map(([o, i]) =>
        o === 'titleTemplate' || o.startsWith('on')
          ? [o, te(i)]
          : ((typeof i == 'function' || Ee(i)) && (r = !0), [o, Rr(i, o)])
      )
    )
    return r && io.includes(String(t)) && (s._dynamic = !0), s
  }
  return n
}
const Jd = so.startsWith('3'),
  Yd = typeof window < 'u',
  dc = 'usehead'
function lo() {
  return (Xn() && et(dc)) || fc()
}
function Xd(e = {}) {
  const t = Gd({
      ...e,
      domDelayFn: (r) => setTimeout(() => Jn(() => r()), 10),
      plugins: [Zd(), ...((e == null ? void 0 : e.plugins) || [])],
    }),
    n = {
      install(r) {
        Jd && ((r.config.globalProperties.$unhead = t), r.provide(dc, t))
      },
    }
  return (t.install = n.install), t
}
const Zd = () => ({
  hooks: {
    'entries:resolve': function (e) {
      for (const t of e.entries) t.resolvedInput = Rr(t.input)
    },
  },
})
function eh(e, t = {}) {
  const n = lo(),
    r = Se(!1),
    s = Se({})
  nu(() => {
    s.value = r.value ? {} : Rr(e)
  })
  const o = n.push(s.value, t)
  return (
    Ft(s, (l) => {
      o.patch(l)
    }),
    Xn() &&
      (Nr(() => {
        o.dispose()
      }),
      Rl(() => {
        r.value = !0
      }),
      Cl(() => {
        r.value = !1
      })),
    o
  )
}
function th(e, t = {}) {
  return lo().push(e, t)
}
function hc(e, t = {}) {
  var r
  const n = lo()
  if (n) {
    const s = Yd || !!((r = n.resolvedOptions) != null && r.document)
    return (t.mode === 'server' && s) || (t.mode === 'client' && !s)
      ? void 0
      : s
      ? eh(e, t)
      : th(e, t)
  }
}
function nh(e) {
  const t = Xd(),
    n = {
      unhead: t,
      install(r) {
        so.startsWith('3') &&
          ((r.config.globalProperties.$head = t), r.provide('usehead', t))
      },
      use(r) {
        t.use(r)
      },
      resolveTags() {
        return t.resolveTags()
      },
      headEntries() {
        return t.headEntries()
      },
      headTags() {
        return t.resolveTags()
      },
      push(r, s) {
        return t.push(r, s)
      },
      addEntry(r, s) {
        return t.push(r, s)
      },
      addHeadObjs(r, s) {
        return t.push(r, s)
      },
      addReactiveEntry(r, s) {
        const o = hc(r, s)
        return typeof o < 'u' ? o.dispose : () => {}
      },
      removeHeadObjs() {},
      updateDOM(r, s) {
        s
          ? cc(t, { document: r })
          : ac(t, { delayFn: (o) => setTimeout(() => o(), 50), document: r })
      },
      internalHooks: t.hooks,
      hooks: { 'before:dom': [], 'resolved:tags': [], 'resolved:entries': [] },
    }
  return (
    (t.addHeadObjs = n.addHeadObjs),
    (t.updateDOM = n.updateDOM),
    t.hooks.hook('dom:beforeRender', (r) => {
      for (const s of n.hooks['before:dom']) s() === !1 && (r.shouldRender = !1)
    }),
    e && n.addHeadObjs(e),
    n
  )
}
const rh = {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
      { name: 'description', content: 'Kuzroman Frontend Developer' },
    ],
    link: [],
    style: [],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-XWDSRJ4TEC' },
    ],
    noscript: [],
    title: 'Roman Smith',
  },
  sh = !1,
  oh = '__nuxt',
  ih = Xt((e) => {
    const t = nh()
    t.push(rh), e.vueApp.use(t)
    {
      let n = !0
      const r = () => {
        ;(n = !1), t.internalHooks.callHook('entries:updated', t.unhead)
      }
      t.internalHooks.hook('dom:beforeRender', (s) => {
        s.shouldRender = !n
      }),
        e.hooks.hook('page:start', () => {
          n = !0
        }),
        e.hooks.hook('page:finish', r),
        e.hooks.hook('app:mounted', r)
    }
    e._useHead = hc
  })
function lh() {
  return pc().__VUE_DEVTOOLS_GLOBAL_HOOK__
}
function pc() {
  return typeof navigator < 'u' && typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : {}
}
const ch = typeof Proxy == 'function',
  ah = 'devtools-plugin:setup',
  uh = 'plugin:settings:set'
let rn, Os
function fh() {
  var e
  return (
    rn !== void 0 ||
      (typeof window < 'u' && window.performance
        ? ((rn = !0), (Os = window.performance))
        : typeof global < 'u' &&
          !((e = global.perf_hooks) === null || e === void 0) &&
          e.performance
        ? ((rn = !0), (Os = global.perf_hooks.performance))
        : (rn = !1)),
    rn
  )
}
function dh() {
  return fh() ? Os.now() : Date.now()
}
class hh {
  constructor(t, n) {
    ;(this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = t),
      (this.hook = n)
    const r = {}
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i]
        r[i] = l.defaultValue
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`
    let o = Object.assign({}, r)
    try {
      const i = localStorage.getItem(s),
        l = JSON.parse(i)
      Object.assign(o, l)
    } catch {}
    ;(this.fallbacks = {
      getSettings() {
        return o
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i))
        } catch {}
        o = i
      },
      now() {
        return dh()
      },
    }),
      n &&
        n.on(uh, (i, l) => {
          i === this.plugin.id && this.fallbacks.setSettings(l)
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (i, l) =>
            this.target
              ? this.target.on[l]
              : (...c) => {
                  this.onQueue.push({ method: l, args: c })
                },
        }
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (i, l) =>
            this.target
              ? this.target[l]
              : l === 'on'
              ? this.proxiedOn
              : Object.keys(this.fallbacks).includes(l)
              ? (...c) => (
                  this.targetQueue.push({
                    method: l,
                    args: c,
                    resolve: () => {},
                  }),
                  this.fallbacks[l](...c)
                )
              : (...c) =>
                  new Promise((a) => {
                    this.targetQueue.push({ method: l, args: c, resolve: a })
                  }),
        }
      ))
  }
  async setRealTarget(t) {
    this.target = t
    for (const n of this.onQueue) this.target.on[n.method](...n.args)
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args))
  }
}
function ph(e, t) {
  const n = e,
    r = pc(),
    s = lh(),
    o = ch && n.enableEarlyProxy
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o)) s.emit(ah, e, t)
  else {
    const i = o ? new hh(n, s) : null
    ;(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i,
    }),
      i && t(i.proxiedTarget)
  }
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const ln = typeof window < 'u'
function mh(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const le = Object.assign
function ss(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = pt(s) ? s.map(e) : e(s)
  }
  return n
}
const Fn = () => {},
  pt = Array.isArray,
  gh = /\/$/,
  yh = (e) => e.replace(gh, '')
function os(e, t, n = '/') {
  let r,
    s = {},
    o = '',
    i = ''
  const l = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 &&
      ((r = t.slice(0, c)),
      (o = t.slice(c + 1, l > -1 ? l : t.length)),
      (s = e(o))),
    l > -1 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
    (r = Eh(r ?? t, n)),
    { fullPath: r + (o && '?') + o + i, path: r, query: s, hash: i }
  )
}
function vh(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function ii(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function bh(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    bn(t.matched[r], n.matched[s]) &&
    mc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function bn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function mc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!_h(e[n], t[n])) return !1
  return !0
}
function _h(e, t) {
  return pt(e) ? li(e, t) : pt(t) ? li(t, e) : e === t
}
function li(e, t) {
  return pt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function Eh(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    r = e.split('/')
  let s = n.length - 1,
    o,
    i
  for (o = 0; o < r.length; o++)
    if (((i = r[o]), i !== '.'))
      if (i === '..') s > 1 && s--
      else break
  return (
    n.slice(0, s).join('/') +
    '/' +
    r.slice(o - (o === r.length ? 1 : 0)).join('/')
  )
}
var zn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(zn || (zn = {}))
var Bn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Bn || (Bn = {}))
function wh(e) {
  if (!e)
    if (ln) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), yh(e)
}
const Ch = /^[^#]+#/
function Rh(e, t) {
  return e.replace(Ch, '#') + t
}
function Ph(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const $r = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Th(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!s) return
    t = Ph(s, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      )
}
function ci(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Ss = new Map()
function Ah(e, t) {
  Ss.set(e, t)
}
function Oh(e) {
  const t = Ss.get(e)
  return Ss.delete(e), t
}
let Sh = () => location.protocol + '//' + location.host
function gc(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let l = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = s.slice(l)
    return c[0] !== '/' && (c = '/' + c), ii(c, '')
  }
  return ii(n, e) + r + s
}
function kh(e, t, n, r) {
  let s = [],
    o = [],
    i = null
  const l = ({ state: h }) => {
    const m = gc(e, location),
      v = n.value,
      E = t.value
    let A = 0
    if (h) {
      if (((n.value = m), (t.value = h), i && i === v)) {
        i = null
        return
      }
      A = E ? h.position - E.position : 0
    } else r(m)
    s.forEach((y) => {
      y(n.value, v, {
        delta: A,
        type: zn.pop,
        direction: A ? (A > 0 ? Bn.forward : Bn.back) : Bn.unknown,
      })
    })
  }
  function c() {
    i = n.value
  }
  function a(h) {
    s.push(h)
    const m = () => {
      const v = s.indexOf(h)
      v > -1 && s.splice(v, 1)
    }
    return o.push(m), m
  }
  function u() {
    const { history: h } = window
    h.state && h.replaceState(le({}, h.state, { scroll: $r() }), '')
  }
  function f() {
    for (const h of o) h()
    ;(o = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', u)
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', u),
    { pauseListeners: c, listen: a, destroy: f }
  )
}
function ai(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? $r() : null,
  }
}
function Ih(e) {
  const { history: t, location: n } = window,
    r = { value: gc(e, n) },
    s = { value: t.state }
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    )
  function o(c, a, u) {
    const f = e.indexOf('#'),
      h =
        f > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(f)) + c
          : Sh() + e + c
    try {
      t[u ? 'replaceState' : 'pushState'](a, '', h), (s.value = a)
    } catch (m) {
      console.error(m), n[u ? 'replace' : 'assign'](h)
    }
  }
  function i(c, a) {
    const u = le({}, t.state, ai(s.value.back, c, s.value.forward, !0), a, {
      position: s.value.position,
    })
    o(c, u, !0), (r.value = c)
  }
  function l(c, a) {
    const u = le({}, s.value, t.state, { forward: c, scroll: $r() })
    o(u.current, u, !0)
    const f = le({}, ai(r.value, c, null), { position: u.position + 1 }, a)
    o(c, f, !1), (r.value = c)
  }
  return { location: r, state: s, push: l, replace: i }
}
function yc(e) {
  e = wh(e)
  const t = Ih(e),
    n = kh(e, t.state, t.location, t.replace)
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const s = le(
    { location: '', base: e, go: r, createHref: Rh.bind(null, e) },
    t,
    n
  )
  return (
    Object.defineProperty(s, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  )
}
function Lh(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    yc(e)
  )
}
function Mh(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function vc(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Lt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  bc = Symbol('')
var ui
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(ui || (ui = {}))
function _n(e, t) {
  return le(new Error(), { type: e, [bc]: !0 }, t)
}
function wt(e, t) {
  return e instanceof Error && bc in e && (t == null || !!(e.type & t))
}
const fi = '[^/]+?',
  xh = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Hh = /[.+*?^${}()[\]/\\]/g
function Nh(e, t) {
  const n = le({}, xh, t),
    r = []
  let s = n.start ? '^' : ''
  const o = []
  for (const a of e) {
    const u = a.length ? [] : [90]
    n.strict && !a.length && (s += '/')
    for (let f = 0; f < a.length; f++) {
      const h = a[f]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (h.type === 0)
        f || (s += '/'), (s += h.value.replace(Hh, '\\$&')), (m += 40)
      else if (h.type === 1) {
        const { value: v, repeatable: E, optional: A, regexp: y } = h
        o.push({ name: v, repeatable: E, optional: A })
        const g = y || fi
        if (g !== fi) {
          m += 10
          try {
            new RegExp(`(${g})`)
          } catch (O) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${g}): ` + O.message
            )
          }
        }
        let _ = E ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`
        f || (_ = A && a.length < 2 ? `(?:/${_})` : '/' + _),
          A && (_ += '?'),
          (s += _),
          (m += 20),
          A && (m += -8),
          E && (m += -20),
          g === '.*' && (m += -50)
      }
      u.push(m)
    }
    r.push(u)
  }
  if (n.strict && n.end) {
    const a = r.length - 1
    r[a][r[a].length - 1] += 0.7000000000000001
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && (s += '(?:/|$)')
  const i = new RegExp(s, n.sensitive ? '' : 'i')
  function l(a) {
    const u = a.match(i),
      f = {}
    if (!u) return null
    for (let h = 1; h < u.length; h++) {
      const m = u[h] || '',
        v = o[h - 1]
      f[v.name] = m && v.repeatable ? m.split('/') : m
    }
    return f
  }
  function c(a) {
    let u = '',
      f = !1
    for (const h of e) {
      ;(!f || !u.endsWith('/')) && (u += '/'), (f = !1)
      for (const m of h)
        if (m.type === 0) u += m.value
        else if (m.type === 1) {
          const { value: v, repeatable: E, optional: A } = m,
            y = v in a ? a[v] : ''
          if (pt(y) && !E)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`
            )
          const g = pt(y) ? y.join('/') : y
          if (!g)
            if (A)
              h.length < 2 &&
                (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0))
            else throw new Error(`Missing required param "${v}"`)
          u += g
        }
    }
    return u || '/'
  }
  return { re: i, score: r, keys: o, parse: l, stringify: c }
}
function jh(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function Fh(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const o = jh(r[n], s[n])
    if (o) return o
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (di(r)) return 1
    if (di(s)) return -1
  }
  return s.length - r.length
}
function di(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Bh = { type: 0, value: '' },
  Dh = /[a-zA-Z0-9_]/
function $h(e) {
  if (!e) return [[]]
  if (e === '/') return [[Bh]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${a}": ${m}`)
  }
  let n = 0,
    r = n
  const s = []
  let o
  function i() {
    o && s.push(o), (o = [])
  }
  let l = 0,
    c,
    a = '',
    u = ''
  function f() {
    a &&
      (n === 0
        ? o.push({ type: 0, value: a })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (c === '*' || c === '+') &&
            t(
              `A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: a,
            regexp: u,
            repeatable: c === '*' || c === '+',
            optional: c === '*' || c === '?',
          }))
        : t('Invalid state to consume buffer'),
      (a = ''))
  }
  function h() {
    a += c
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === '\\' && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        c === '/' ? (a && f(), i()) : c === ':' ? (f(), (n = 1)) : h()
        break
      case 4:
        h(), (n = r)
        break
      case 1:
        c === '('
          ? (n = 2)
          : Dh.test(c)
          ? h()
          : (f(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--)
        break
      case 2:
        c === ')'
          ? u[u.length - 1] == '\\'
            ? (u = u.slice(0, -1) + c)
            : (n = 3)
          : (u += c)
        break
      case 3:
        f(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--, (u = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), f(), i(), s
}
function Uh(e, t, n) {
  const r = Nh($h(e.path), n),
    s = le(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function Kh(e, t) {
  const n = [],
    r = new Map()
  t = mi({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(u) {
    return r.get(u)
  }
  function o(u, f, h) {
    const m = !h,
      v = Wh(u)
    v.aliasOf = h && h.record
    const E = mi(t, u),
      A = [v]
    if ('alias' in u) {
      const _ = typeof u.alias == 'string' ? [u.alias] : u.alias
      for (const O of _)
        A.push(
          le({}, v, {
            components: h ? h.record.components : v.components,
            path: O,
            aliasOf: h ? h.record : v,
          })
        )
    }
    let y, g
    for (const _ of A) {
      const { path: O } = _
      if (f && O[0] !== '/') {
        const P = f.record.path,
          M = P[P.length - 1] === '/' ? '' : '/'
        _.path = f.record.path + (O && M + O)
      }
      if (
        ((y = Uh(_, f, E)),
        h
          ? h.alias.push(y)
          : ((g = g || y),
            g !== y && g.alias.push(y),
            m && u.name && !pi(y) && i(u.name)),
        v.children)
      ) {
        const P = v.children
        for (let M = 0; M < P.length; M++) o(P[M], y, h && h.children[M])
      }
      ;(h = h || y),
        ((y.record.components && Object.keys(y.record.components).length) ||
          y.record.name ||
          y.record.redirect) &&
          c(y)
    }
    return g
      ? () => {
          i(g)
        }
      : Fn
  }
  function i(u) {
    if (vc(u)) {
      const f = r.get(u)
      f &&
        (r.delete(u),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(i),
        f.alias.forEach(i))
    } else {
      const f = n.indexOf(u)
      f > -1 &&
        (n.splice(f, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i))
    }
  }
  function l() {
    return n
  }
  function c(u) {
    let f = 0
    for (
      ;
      f < n.length &&
      Fh(u, n[f]) >= 0 &&
      (u.record.path !== n[f].record.path || !_c(u, n[f]));

    )
      f++
    n.splice(f, 0, u), u.record.name && !pi(u) && r.set(u.record.name, u)
  }
  function a(u, f) {
    let h,
      m = {},
      v,
      E
    if ('name' in u && u.name) {
      if (((h = r.get(u.name)), !h)) throw _n(1, { location: u })
      ;(E = h.record.name),
        (m = le(
          hi(
            f.params,
            h.keys.filter((g) => !g.optional).map((g) => g.name)
          ),
          u.params &&
            hi(
              u.params,
              h.keys.map((g) => g.name)
            )
        )),
        (v = h.stringify(m))
    } else if ('path' in u)
      (v = u.path),
        (h = n.find((g) => g.re.test(v))),
        h && ((m = h.parse(v)), (E = h.record.name))
    else {
      if (((h = f.name ? r.get(f.name) : n.find((g) => g.re.test(f.path))), !h))
        throw _n(1, { location: u, currentLocation: f })
      ;(E = h.record.name),
        (m = le({}, f.params, u.params)),
        (v = h.stringify(m))
    }
    const A = []
    let y = h
    for (; y; ) A.unshift(y.record), (y = y.parent)
    return { name: E, path: v, params: m, matched: A, meta: Vh(A) }
  }
  return (
    e.forEach((u) => o(u)),
    {
      addRoute: o,
      resolve: a,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: s,
    }
  )
}
function hi(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function Wh(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: qh(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  }
}
function qh(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r]
  return t
}
function pi(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Vh(e) {
  return e.reduce((t, n) => le(t, n.meta), {})
}
function mi(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function _c(e, t) {
  return t.children.some((n) => n === e || _c(e, n))
}
const Ec = /#/g,
  Gh = /&/g,
  zh = /\//g,
  Qh = /=/g,
  Jh = /\?/g,
  wc = /\+/g,
  Yh = /%5B/g,
  Xh = /%5D/g,
  Cc = /%5E/g,
  Zh = /%60/g,
  Rc = /%7B/g,
  ep = /%7C/g,
  Pc = /%7D/g,
  tp = /%20/g
function co(e) {
  return encodeURI('' + e)
    .replace(ep, '|')
    .replace(Yh, '[')
    .replace(Xh, ']')
}
function np(e) {
  return co(e).replace(Rc, '{').replace(Pc, '}').replace(Cc, '^')
}
function ks(e) {
  return co(e)
    .replace(wc, '%2B')
    .replace(tp, '+')
    .replace(Ec, '%23')
    .replace(Gh, '%26')
    .replace(Zh, '`')
    .replace(Rc, '{')
    .replace(Pc, '}')
    .replace(Cc, '^')
}
function rp(e) {
  return ks(e).replace(Qh, '%3D')
}
function sp(e) {
  return co(e).replace(Ec, '%23').replace(Jh, '%3F')
}
function op(e) {
  return e == null ? '' : sp(e).replace(zh, '%2F')
}
function Pr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function ip(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const r = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(wc, ' '),
      i = o.indexOf('='),
      l = Pr(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : Pr(o.slice(i + 1))
    if (l in t) {
      let a = t[l]
      pt(a) || (a = t[l] = [a]), a.push(c)
    } else t[l] = c
  }
  return t
}
function gi(e) {
  let t = ''
  for (let n in e) {
    const r = e[n]
    if (((n = rp(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(pt(r) ? r.map((o) => o && ks(o)) : [r && ks(r)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function lp(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = pt(r)
        ? r.map((s) => (s == null ? null : '' + s))
        : r == null
        ? r
        : '' + r)
  }
  return t
}
const cp = Symbol(''),
  yi = Symbol(''),
  ao = Symbol(''),
  uo = Symbol(''),
  Is = Symbol('')
function Sn() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r)
        s > -1 && e.splice(s, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e, reset: n }
}
function Ht(e, t, n, r, s) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((i, l) => {
      const c = (f) => {
          f === !1
            ? l(_n(4, { from: n, to: t }))
            : f instanceof Error
            ? l(f)
            : Mh(f)
            ? l(_n(2, { from: t, to: f }))
            : (o &&
                r.enterCallbacks[s] === o &&
                typeof f == 'function' &&
                o.push(f),
              i())
        },
        a = e.call(r && r.instances[s], t, n, c)
      let u = Promise.resolve(a)
      e.length < 3 && (u = u.then(c)), u.catch((f) => l(f))
    })
}
function is(e, t, n, r) {
  const s = []
  for (const o of e)
    for (const i in o.components) {
      let l = o.components[i]
      if (!(t !== 'beforeRouteEnter' && !o.instances[i]))
        if (ap(l)) {
          const a = (l.__vccOpts || l)[t]
          a && s.push(Ht(a, n, r, o, i))
        } else {
          let c = l()
          s.push(() =>
            c.then((a) => {
              if (!a)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                )
              const u = mh(a) ? a.default : a
              o.components[i] = u
              const h = (u.__vccOpts || u)[t]
              return h && Ht(h, n, r, o, i)()
            })
          )
        }
    }
  return s
}
function ap(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function vi(e) {
  const t = et(ao),
    n = et(uo),
    r = Y(() => t.resolve(te(e.to))),
    s = Y(() => {
      const { matched: c } = r.value,
        { length: a } = c,
        u = c[a - 1],
        f = n.matched
      if (!u || !f.length) return -1
      const h = f.findIndex(bn.bind(null, u))
      if (h > -1) return h
      const m = bi(c[a - 2])
      return a > 1 && bi(u) === m && f[f.length - 1].path !== m
        ? f.findIndex(bn.bind(null, c[a - 2]))
        : h
    }),
    o = Y(() => s.value > -1 && hp(n.params, r.value.params)),
    i = Y(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        mc(n.params, r.value.params)
    )
  function l(c = {}) {
    return dp(c)
      ? t[te(e.replace) ? 'replace' : 'push'](te(e.to)).catch(Fn)
      : Promise.resolve()
  }
  return {
    route: r,
    href: Y(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: l,
  }
}
const up = Tt({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: vi,
    setup(e, { slots: t }) {
      const n = Et(vi(e)),
        { options: r } = et(ao),
        s = Y(() => ({
          [_i(e.activeClass, r.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [_i(
            e.exactActiveClass,
            r.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : Gn(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            )
      }
    },
  }),
  fp = up
function dp(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function hp(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == 'string') {
      if (r !== s) return !1
    } else if (!pt(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1
  }
  return !0
}
function bi(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const _i = (e, t, n) => e ?? t ?? n,
  pp = Tt({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = et(Is),
        s = Y(() => e.route || r.value),
        o = et(yi, 0),
        i = Y(() => {
          let a = te(o)
          const { matched: u } = s.value
          let f
          for (; (f = u[a]) && !f.components; ) a++
          return a
        }),
        l = Y(() => s.value.matched[i.value])
      Mn(
        yi,
        Y(() => i.value + 1)
      ),
        Mn(cp, l),
        Mn(Is, s)
      const c = Se()
      return (
        Ft(
          () => [c.value, l.value, e.name],
          ([a, u, f], [h, m, v]) => {
            u &&
              ((u.instances[f] = a),
              m &&
                m !== u &&
                a &&
                a === h &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              a &&
                u &&
                (!m || !bn(u, m) || !h) &&
                (u.enterCallbacks[f] || []).forEach((E) => E(a))
          },
          { flush: 'post' }
        ),
        () => {
          const a = s.value,
            u = e.name,
            f = l.value,
            h = f && f.components[u]
          if (!h) return Ei(n.default, { Component: h, route: a })
          const m = f.props[u],
            v = m
              ? m === !0
                ? a.params
                : typeof m == 'function'
                ? m(a)
                : m
              : null,
            A = Gn(
              h,
              le({}, v, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (f.instances[u] = null)
                },
                ref: c,
              })
            )
          return Ei(n.default, { Component: A, route: a }) || A
        }
      )
    },
  })
function Ei(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const mp = pp
function gp(e) {
  const t = Kh(e.routes, e),
    n = e.parseQuery || ip,
    r = e.stringifyQuery || gi,
    s = e.history,
    o = Sn(),
    i = Sn(),
    l = Sn(),
    c = hs(Lt)
  let a = Lt
  ln &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const u = ss.bind(null, (C) => '' + C),
    f = ss.bind(null, op),
    h = ss.bind(null, Pr)
  function m(C, j) {
    let x, $
    return (
      vc(C) ? ((x = t.getRecordMatcher(C)), ($ = j)) : ($ = C), t.addRoute($, x)
    )
  }
  function v(C) {
    const j = t.getRecordMatcher(C)
    j && t.removeRoute(j)
  }
  function E() {
    return t.getRoutes().map((C) => C.record)
  }
  function A(C) {
    return !!t.getRecordMatcher(C)
  }
  function y(C, j) {
    if (((j = le({}, j || c.value)), typeof C == 'string')) {
      const d = os(n, C, j.path),
        p = t.resolve({ path: d.path }, j),
        b = s.createHref(d.fullPath)
      return le(d, p, {
        params: h(p.params),
        hash: Pr(d.hash),
        redirectedFrom: void 0,
        href: b,
      })
    }
    let x
    if ('path' in C) x = le({}, C, { path: os(n, C.path, j.path).path })
    else {
      const d = le({}, C.params)
      for (const p in d) d[p] == null && delete d[p]
      ;(x = le({}, C, { params: f(C.params) })), (j.params = f(j.params))
    }
    const $ = t.resolve(x, j),
      ne = C.hash || ''
    $.params = u(h($.params))
    const me = vh(r, le({}, C, { hash: np(ne), path: $.path })),
      X = s.createHref(me)
    return le(
      { fullPath: me, hash: ne, query: r === gi ? lp(C.query) : C.query || {} },
      $,
      { redirectedFrom: void 0, href: X }
    )
  }
  function g(C) {
    return typeof C == 'string' ? os(n, C, c.value.path) : le({}, C)
  }
  function _(C, j) {
    if (a !== C) return _n(8, { from: j, to: C })
  }
  function O(C) {
    return D(C)
  }
  function P(C) {
    return O(le(g(C), { replace: !0 }))
  }
  function M(C) {
    const j = C.matched[C.matched.length - 1]
    if (j && j.redirect) {
      const { redirect: x } = j
      let $ = typeof x == 'function' ? x(C) : x
      return (
        typeof $ == 'string' &&
          (($ = $.includes('?') || $.includes('#') ? ($ = g($)) : { path: $ }),
          ($.params = {})),
        le(
          { query: C.query, hash: C.hash, params: 'path' in $ ? {} : C.params },
          $
        )
      )
    }
  }
  function D(C, j) {
    const x = (a = y(C)),
      $ = c.value,
      ne = C.state,
      me = C.force,
      X = C.replace === !0,
      d = M(x)
    if (d)
      return D(
        le(g(d), {
          state: typeof d == 'object' ? le({}, ne, d.state) : ne,
          force: me,
          replace: X,
        }),
        j || x
      )
    const p = x
    p.redirectedFrom = j
    let b
    return (
      !me &&
        bh(r, $, x) &&
        ((b = _n(16, { to: p, from: $ })), $t($, $, !0, !1)),
      (b ? Promise.resolve(b) : q(p, $))
        .catch((w) => (wt(w) ? (wt(w, 2) ? w : ct(w)) : ue(w, p, $)))
        .then((w) => {
          if (w) {
            if (wt(w, 2))
              return D(
                le({ replace: X }, g(w.to), {
                  state: typeof w.to == 'object' ? le({}, ne, w.to.state) : ne,
                  force: me,
                }),
                j || p
              )
          } else w = V(p, $, !0, X, ne)
          return W(p, $, w), w
        })
    )
  }
  function k(C, j) {
    const x = _(C, j)
    return x ? Promise.reject(x) : Promise.resolve()
  }
  function q(C, j) {
    let x
    const [$, ne, me] = yp(C, j)
    x = is($.reverse(), 'beforeRouteLeave', C, j)
    for (const d of $)
      d.leaveGuards.forEach((p) => {
        x.push(Ht(p, C, j))
      })
    const X = k.bind(null, C, j)
    return (
      x.push(X),
      sn(x)
        .then(() => {
          x = []
          for (const d of o.list()) x.push(Ht(d, C, j))
          return x.push(X), sn(x)
        })
        .then(() => {
          x = is(ne, 'beforeRouteUpdate', C, j)
          for (const d of ne)
            d.updateGuards.forEach((p) => {
              x.push(Ht(p, C, j))
            })
          return x.push(X), sn(x)
        })
        .then(() => {
          x = []
          for (const d of C.matched)
            if (d.beforeEnter && !j.matched.includes(d))
              if (pt(d.beforeEnter))
                for (const p of d.beforeEnter) x.push(Ht(p, C, j))
              else x.push(Ht(d.beforeEnter, C, j))
          return x.push(X), sn(x)
        })
        .then(
          () => (
            C.matched.forEach((d) => (d.enterCallbacks = {})),
            (x = is(me, 'beforeRouteEnter', C, j)),
            x.push(X),
            sn(x)
          )
        )
        .then(() => {
          x = []
          for (const d of i.list()) x.push(Ht(d, C, j))
          return x.push(X), sn(x)
        })
        .catch((d) => (wt(d, 8) ? d : Promise.reject(d)))
    )
  }
  function W(C, j, x) {
    for (const $ of l.list()) $(C, j, x)
  }
  function V(C, j, x, $, ne) {
    const me = _(C, j)
    if (me) return me
    const X = j === Lt,
      d = ln ? history.state : {}
    x &&
      ($ || X
        ? s.replace(C.fullPath, le({ scroll: X && d && d.scroll }, ne))
        : s.push(C.fullPath, ne)),
      (c.value = C),
      $t(C, j, x, X),
      ct()
  }
  let H
  function z() {
    H ||
      (H = s.listen((C, j, x) => {
        if (!er.listening) return
        const $ = y(C),
          ne = M($)
        if (ne) {
          D(le(ne, { replace: !0 }), $).catch(Fn)
          return
        }
        a = $
        const me = c.value
        ln && Ah(ci(me.fullPath, x.delta), $r()),
          q($, me)
            .catch((X) =>
              wt(X, 12)
                ? X
                : wt(X, 2)
                ? (D(X.to, $)
                    .then((d) => {
                      wt(d, 20) && !x.delta && x.type === zn.pop && s.go(-1, !1)
                    })
                    .catch(Fn),
                  Promise.reject())
                : (x.delta && s.go(-x.delta, !1), ue(X, $, me))
            )
            .then((X) => {
              ;(X = X || V($, me, !1)),
                X &&
                  (x.delta && !wt(X, 8)
                    ? s.go(-x.delta, !1)
                    : x.type === zn.pop && wt(X, 20) && s.go(-1, !1)),
                W($, me, X)
            })
            .catch(Fn)
      }))
  }
  let F = Sn(),
    _e = Sn(),
    Z
  function ue(C, j, x) {
    ct(C)
    const $ = _e.list()
    return (
      $.length ? $.forEach((ne) => ne(C, j, x)) : console.error(C),
      Promise.reject(C)
    )
  }
  function ce() {
    return Z && c.value !== Lt
      ? Promise.resolve()
      : new Promise((C, j) => {
          F.add([C, j])
        })
  }
  function ct(C) {
    return (
      Z ||
        ((Z = !C),
        z(),
        F.list().forEach(([j, x]) => (C ? x(C) : j())),
        F.reset()),
      C
    )
  }
  function $t(C, j, x, $) {
    const { scrollBehavior: ne } = e
    if (!ln || !ne) return Promise.resolve()
    const me =
      (!x && Oh(ci(C.fullPath, 0))) ||
      (($ || !x) && history.state && history.state.scroll) ||
      null
    return Jn()
      .then(() => ne(C, j, me))
      .then((X) => X && Th(X))
      .catch((X) => ue(X, C, j))
  }
  const at = (C) => s.go(C)
  let Ie
  const tn = new Set(),
    er = {
      currentRoute: c,
      listening: !0,
      addRoute: m,
      removeRoute: v,
      hasRoute: A,
      getRoutes: E,
      resolve: y,
      options: e,
      push: O,
      replace: P,
      go: at,
      back: () => at(-1),
      forward: () => at(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: _e.add,
      isReady: ce,
      install(C) {
        const j = this
        C.component('RouterLink', fp),
          C.component('RouterView', mp),
          (C.config.globalProperties.$router = j),
          Object.defineProperty(C.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => te(c),
          }),
          ln &&
            !Ie &&
            c.value === Lt &&
            ((Ie = !0), O(s.location).catch((ne) => {}))
        const x = {}
        for (const ne in Lt) x[ne] = Y(() => c.value[ne])
        C.provide(ao, j), C.provide(uo, Et(x)), C.provide(Is, c)
        const $ = C.unmount
        tn.add(C),
          (C.unmount = function () {
            tn.delete(C),
              tn.size < 1 &&
                ((a = Lt),
                H && H(),
                (H = null),
                (c.value = Lt),
                (Ie = !1),
                (Z = !1)),
              $()
          })
      },
    }
  return er
}
function sn(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}
function yp(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < o; i++) {
    const l = t.matched[i]
    l && (e.matched.find((a) => bn(a, l)) ? r.push(l) : n.push(l))
    const c = e.matched[i]
    c && (t.matched.find((a) => bn(a, c)) || s.push(c))
  }
  return [n, r, s]
}
function vp() {
  return et(uo)
}
class Ls extends Error {
  constructor() {
    super(...arguments),
      (this.statusCode = 500),
      (this.fatal = !1),
      (this.unhandled = !1),
      (this.statusMessage = void 0)
  }
  toJSON() {
    const t = { message: this.message, statusCode: this.statusCode }
    return (
      this.statusMessage && (t.statusMessage = this.statusMessage),
      this.data !== void 0 && (t.data = this.data),
      t
    )
  }
}
Ls.__h3_error__ = !0
function Ms(e) {
  if (typeof e == 'string') return new Ls(e)
  if (bp(e)) return e
  const t = new Ls(
    e.message ?? e.statusMessage,
    e.cause ? { cause: e.cause } : void 0
  )
  if ('stack' in e)
    try {
      Object.defineProperty(t, 'stack', {
        get() {
          return e.stack
        },
      })
    } catch {
      try {
        t.stack = e.stack
      } catch {}
    }
  return (
    e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = e.statusCode)
      : e.status && (t.statusCode = e.status),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  )
}
function bp(e) {
  var t
  return (
    ((t = e == null ? void 0 : e.constructor) == null
      ? void 0
      : t.__h3_error__) === !0
  )
}
const Ur = () => fl(Ce().payload, 'error'),
  In = (e) => {
    const t = wp(e)
    try {
      Ce().callHook('app:error', t)
      const r = Ur()
      r.value = r.value || t
    } catch {
      throw t
    }
    return t
  },
  _p = async (e = {}) => {
    const t = Ce(),
      n = Ur()
    t.callHook('app:error:cleared', e),
      e.redirect && (await t.$router.replace(e.redirect)),
      (n.value = null)
  },
  Ep = (e) => !!(e && typeof e == 'object' && '__nuxt_error' in e),
  wp = (e) => {
    const t = Ms(e)
    return (t.__nuxt_error = !0), t
  }
function Cp(...e) {
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0
  typeof e[0] != 'string' && e.unshift(t)
  const [n, r] = e
  if (!n || typeof n != 'string')
    throw new TypeError('[nuxt] [useState] key must be a string: ' + n)
  if (r !== void 0 && typeof r != 'function')
    throw new Error('[nuxt] [useState] init must be a function: ' + r)
  const s = '$s' + n,
    o = Ce(),
    i = fl(o.payload.state, s)
  if (i.value === void 0 && r) {
    const l = r()
    if (Ee(l)) return (o.payload.state[s] = l), l
    i.value = l
  }
  return i
}
const Zt = () => {
    var e
    return (e = Ce()) == null ? void 0 : e.$router
  },
  Rp = () => (Xn() ? et('_route', Ce()._route) : Ce()._route),
  Pp = (e) => e,
  Tp = () => {
    try {
      if (Ce()._processingMiddleware) return !0
    } catch {
      return !0
    }
    return !1
  },
  Tc = (e, t) => {
    e || (e = '/')
    const n = typeof e == 'string' ? e : e.path || '/',
      r = Zn(n, !0)
    if (r && !(t != null && t.external))
      throw new Error(
        'Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.'
      )
    if (r && Dr(n).protocol === 'script:')
      throw new Error('Cannot navigate to an URL with script protocol.')
    if (!r && Tp()) return e
    const s = Zt()
    return r
      ? (t != null && t.replace ? location.replace(n) : (location.href = n),
        Promise.resolve())
      : t != null && t.replace
      ? s.replace(e)
      : s.push(e)
  },
  Ap = 'modulepreload',
  Op = function (e, t) {
    return e.startsWith('.') ? new URL(e, t).href : e
  },
  wi = {},
  be = function (t, n, r) {
    if (!n || n.length === 0) return t()
    const s = document.getElementsByTagName('link')
    return Promise.all(
      n.map((o) => {
        if (((o = Op(o, r)), o in wi)) return
        wi[o] = !0
        const i = o.endsWith('.css'),
          l = i ? '[rel="stylesheet"]' : ''
        if (!!r)
          for (let u = s.length - 1; u >= 0; u--) {
            const f = s[u]
            if (f.href === o && (!i || f.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${o}"]${l}`)) return
        const a = document.createElement('link')
        if (
          ((a.rel = i ? 'stylesheet' : Ap),
          i || ((a.as = 'script'), (a.crossOrigin = '')),
          (a.href = o),
          document.head.appendChild(a),
          i)
        )
          return new Promise((u, f) => {
            a.addEventListener('load', u),
              a.addEventListener('error', () =>
                f(new Error(`Unable to preload CSS for ${o}`))
              )
          })
      })
    ).then(() => t())
  },
  Ne = {},
  je = {},
  Fe = {},
  Be = {},
  De = {},
  $e = {},
  Ue = {},
  Ke = {},
  We = {},
  qe = {},
  Ve = {},
  Ge = {},
  ze = {},
  Qe = {},
  Je = {},
  Ye = {},
  Xe = {},
  Ze = {},
  Ci = [
    {
      name: (Ne == null ? void 0 : Ne.name) ?? 'about',
      path: (Ne == null ? void 0 : Ne.path) ?? '/about',
      children: [],
      meta: Ne,
      alias: (Ne == null ? void 0 : Ne.alias) || [],
      redirect: (Ne == null ? void 0 : Ne.redirect) || void 0,
      component: () =>
        be(
          () => import('./about.dfd3e34c.js'),
          [
            './about.dfd3e34c.js',
            './composables.39d4856c.js',
            './about.3e76cca9.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (je == null ? void 0 : je.name) ?? 'challenge-ImageTotext',
      path: (je == null ? void 0 : je.path) ?? '/challenge/ImageTotext',
      children: [],
      meta: je,
      alias: (je == null ? void 0 : je.alias) || [],
      redirect: (je == null ? void 0 : je.redirect) || void 0,
      component: () =>
        be(
          () => import('./index.a185fcef.js'),
          ['./index.a185fcef.js', './index.19766ba5.css'],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Fe == null ? void 0 : Fe.name) ?? 'challenge-audioRecorder',
      path: (Fe == null ? void 0 : Fe.path) ?? '/challenge/audioRecorder',
      children: [],
      meta: Fe,
      alias: (Fe == null ? void 0 : Fe.alias) || [],
      redirect: (Fe == null ? void 0 : Fe.redirect) || void 0,
      component: () =>
        be(
          () => import('./index.26fad4a3.js'),
          ['./index.26fad4a3.js', './index.13930bb6.css'],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Be == null ? void 0 : Be.name) ?? 'challenge-history',
      path: (Be == null ? void 0 : Be.path) ?? '/challenge/history',
      children: [],
      meta: Be,
      alias: (Be == null ? void 0 : Be.alias) || [],
      redirect: (Be == null ? void 0 : Be.redirect) || void 0,
      component: () =>
        be(
          () => import('./history.459d7027.js'),
          [
            './history.459d7027.js',
            './composables.39d4856c.js',
            './works.97412629.js',
            './history.327eb03b.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (De == null ? void 0 : De.name) ?? 'challenge-svgWave-config',
      path: (De == null ? void 0 : De.path) ?? '/challenge/svgWave/config',
      children: [],
      meta: De,
      alias: (De == null ? void 0 : De.alias) || [],
      redirect: (De == null ? void 0 : De.redirect) || void 0,
      component: () =>
        be(() => import('./config.20180e1f.js'), [], import.meta.url).then(
          (e) => e.default || e
        ),
    },
    {
      name: ($e == null ? void 0 : $e.name) ?? 'challenge-svgWave',
      path: ($e == null ? void 0 : $e.path) ?? '/challenge/svgWave',
      children: [],
      meta: $e,
      alias: ($e == null ? void 0 : $e.alias) || [],
      redirect: ($e == null ? void 0 : $e.redirect) || void 0,
      component: () =>
        be(
          () => import('./index.cc929a4f.js'),
          [
            './index.cc929a4f.js',
            './wave.53281bb7.js',
            './utils.a0756ea6.js',
            './config.20180e1f.js',
            './wave.6434291c.css',
            './index.8cc49205.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Ue == null ? void 0 : Ue.name) ?? 'challenge-svgWave-utils',
      path: (Ue == null ? void 0 : Ue.path) ?? '/challenge/svgWave/utils',
      children: [],
      meta: Ue,
      alias: (Ue == null ? void 0 : Ue.alias) || [],
      redirect: (Ue == null ? void 0 : Ue.redirect) || void 0,
      component: () =>
        be(() => import('./utils.a0756ea6.js'), [], import.meta.url).then(
          (e) => e.default || e
        ),
    },
    {
      name: (Ke == null ? void 0 : Ke.name) ?? 'challenge-svgWave-wave',
      path: (Ke == null ? void 0 : Ke.path) ?? '/challenge/svgWave/wave',
      children: [],
      meta: Ke,
      alias: (Ke == null ? void 0 : Ke.alias) || [],
      redirect: (Ke == null ? void 0 : Ke.redirect) || void 0,
      component: () =>
        be(
          () => import('./wave.53281bb7.js'),
          [
            './wave.53281bb7.js',
            './utils.a0756ea6.js',
            './config.20180e1f.js',
            './wave.6434291c.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (We == null ? void 0 : We.name) ?? 'contacts',
      path: (We == null ? void 0 : We.path) ?? '/contacts',
      children: [],
      meta: We,
      alias: (We == null ? void 0 : We.alias) || [],
      redirect: (We == null ? void 0 : We.redirect) || void 0,
      component: () =>
        be(
          () => import('./contacts.65c62d04.js'),
          [
            './contacts.65c62d04.js',
            './composables.39d4856c.js',
            './contacts.2386135d.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (qe == null ? void 0 : qe.name) ?? 'gist-infinite-scroll',
      path: (qe == null ? void 0 : qe.path) ?? '/gist/infinite-scroll',
      children: [],
      meta: qe,
      alias: (qe == null ? void 0 : qe.alias) || [],
      redirect: (qe == null ? void 0 : qe.redirect) || void 0,
      component: () =>
        be(
          () => import('./infinite-scroll.06d00f46.js'),
          ['./infinite-scroll.06d00f46.js', './infinite-scroll.1eefe79c.css'],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Ve == null ? void 0 : Ve.name) ?? 'gist-matter',
      path: (Ve == null ? void 0 : Ve.path) ?? '/gist/matter',
      children: [],
      meta: Ve,
      alias: (Ve == null ? void 0 : Ve.alias) || [],
      redirect: (Ve == null ? void 0 : Ve.redirect) || void 0,
      component: () =>
        be(
          () => import('./matter.52c12c6b.js'),
          [
            './matter.52c12c6b.js',
            './composables.39d4856c.js',
            './matter.5596ea92.js',
            './matter.5d21862f.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Ge == null ? void 0 : Ge.name) ?? 'gist-matter2',
      path: (Ge == null ? void 0 : Ge.path) ?? '/gist/matter2',
      children: [],
      meta: Ge,
      alias: (Ge == null ? void 0 : Ge.alias) || [],
      redirect: (Ge == null ? void 0 : Ge.redirect) || void 0,
      component: () =>
        be(
          () => import('./matter2.27085da5.js'),
          [
            './matter2.27085da5.js',
            './matter.5596ea92.js',
            './matter2.71cb2cba.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (ze == null ? void 0 : ze.name) ?? 'index',
      path: (ze == null ? void 0 : ze.path) ?? '/',
      children: [],
      meta: ze,
      alias: (ze == null ? void 0 : ze.alias) || [],
      redirect: (ze == null ? void 0 : ze.redirect) || void 0,
      component: () =>
        be(
          () => import('./index.7666cec4.js'),
          [
            './index.7666cec4.js',
            './composables.39d4856c.js',
            './index.60378c7b.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Qe == null ? void 0 : Qe.name) ?? 'me-111',
      path: (Qe == null ? void 0 : Qe.path) ?? '/me/111',
      children: [],
      meta: Qe,
      alias: (Qe == null ? void 0 : Qe.alias) || [],
      redirect: (Qe == null ? void 0 : Qe.redirect) || void 0,
      component: () =>
        be(() => import('./111.4ed993c7.js'), [], import.meta.url).then(
          (e) => e.default || e
        ),
    },
    {
      name: (Je == null ? void 0 : Je.name) ?? 'me-gists-gridLine',
      path: (Je == null ? void 0 : Je.path) ?? '/me/gists/gridLine',
      children: [],
      meta: Je,
      alias: (Je == null ? void 0 : Je.alias) || [],
      redirect: (Je == null ? void 0 : Je.redirect) || void 0,
      component: () =>
        be(
          () => import('./gridLine.4451d708.js'),
          ['./gridLine.4451d708.js', './gridLine.7d56ac41.css'],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Ye == null ? void 0 : Ye.name) ?? 'me-interview-ozon',
      path: (Ye == null ? void 0 : Ye.path) ?? '/me/interview/ozon',
      children: [],
      meta: Ye,
      alias: (Ye == null ? void 0 : Ye.alias) || [],
      redirect: (Ye == null ? void 0 : Ye.redirect) || void 0,
      component: () =>
        be(() => import('./ozon.f2b643d0.js'), [], import.meta.url).then(
          (e) => e.default || e
        ),
    },
    {
      name: (Xe == null ? void 0 : Xe.name) ?? 'portfolio-id',
      path: (Xe == null ? void 0 : Xe.path) ?? '/portfolio/:id',
      children: [],
      meta: Xe,
      alias: (Xe == null ? void 0 : Xe.alias) || [],
      redirect: (Xe == null ? void 0 : Xe.redirect) || void 0,
      component: () =>
        be(
          () => import('./_id_.83231742.js'),
          [
            './_id_.83231742.js',
            './composables.39d4856c.js',
            './works.97412629.js',
            './_id_.a80c77ce.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (Ze == null ? void 0 : Ze.name) ?? 'portfolio',
      path: (Ze == null ? void 0 : Ze.path) ?? '/portfolio',
      children: [],
      meta: Ze,
      alias: (Ze == null ? void 0 : Ze.alias) || [],
      redirect: (Ze == null ? void 0 : Ze.redirect) || void 0,
      component: () =>
        be(
          () => import('./index.5a898489.js'),
          [
            './index.5a898489.js',
            './composables.39d4856c.js',
            './works.97412629.js',
            './index.85f828ae.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
  ],
  Sp = {
    scrollBehavior(e, t, n) {
      const r = Ce()
      let s = n || void 0
      if (
        (!s &&
          t &&
          e &&
          e.meta.scrollToTop !== !1 &&
          kp(t, e) &&
          (s = { left: 0, top: 0 }),
        e.path === t.path)
      ) {
        if (t.hash && !e.hash) return { left: 0, top: 0 }
        if (e.hash) return { el: e.hash, top: Ri(e.hash) }
      }
      const o = (l) => !!(l.meta.pageTransition ?? sh),
        i = o(t) && o(e) ? 'page:transition:finish' : 'page:finish'
      return new Promise((l) => {
        r.hooks.hookOnce(i, async () => {
          await Jn(), e.hash && (s = { el: e.hash, top: Ri(e.hash) }), l(s)
        })
      })
    },
  }
function Ri(e) {
  try {
    const t = document.querySelector(e)
    if (t) return parseFloat(getComputedStyle(t).scrollMarginTop)
  } catch {}
  return 0
}
function kp(e, t) {
  const n = e.matched[0] === t.matched[0]
  return !!(!n || (n && JSON.stringify(e.params) !== JSON.stringify(t.params)))
}
const Ip = {},
  Ct = { ...Ip, ...Sp },
  Lp = Pp(async (e) => {
    var s
    let t, n
    if (!((s = e.meta) != null && s.validate)) return
    const r =
      (([t, n] = As(() => Promise.resolve(e.meta.validate(e)))),
      (t = await t),
      n(),
      t)
    if (r !== !0) return r
  }),
  Mp = [Lp],
  Dn = {}
function xp(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#')
  if (o > -1) {
    const l = s.includes(e.slice(o)) ? e.slice(o).length : 1
    let c = s.slice(l)
    return c[0] !== '/' && (c = '/' + c), Yo(c, '')
  }
  return Yo(n, e) + r + s
}
const Hp = Xt(async (e) => {
    var v, E
    let t,
      n,
      r = oc().app.baseURL
    Ct.hashMode && !r.includes('#') && (r += '#')
    const s =
        ((v = Ct.history) == null ? void 0 : v.call(Ct, r)) ??
        (Ct.hashMode ? Lh(r) : yc(r)),
      o = ((E = Ct.routes) == null ? void 0 : E.call(Ct, Ci)) ?? Ci,
      i = xp(r, window.location),
      l = gp({ ...Ct, history: s, routes: o })
    e.vueApp.use(l)
    const c = hs(l.currentRoute.value)
    l.afterEach((A, y) => {
      c.value = y
    }),
      Object.defineProperty(e.vueApp.config.globalProperties, 'previousRoute', {
        get: () => c.value,
      })
    const a = hs(l.resolve(i)),
      u = () => {
        a.value = l.currentRoute.value
      }
    e.hook('page:finish', u),
      l.afterEach((A, y) => {
        var g, _, O, P
        ;((_ = (g = A.matched[0]) == null ? void 0 : g.components) == null
          ? void 0
          : _.default) ===
          ((P = (O = y.matched[0]) == null ? void 0 : O.components) == null
            ? void 0
            : P.default) && u()
      })
    const f = {}
    for (const A in a.value) f[A] = Y(() => a.value[A])
    ;(e._route = Et(f)),
      (e._middleware = e._middleware || { global: [], named: {} })
    const h = Ur()
    try {
      ;([t, n] = As(() => l.isReady())), await t, n()
    } catch (A) {
      ;([t, n] = As(() => xt(e, In, [A]))), await t, n()
    }
    const m = Cp('_layout')
    return (
      l.beforeEach(async (A, y) => {
        var _
        ;(A.meta = Et(A.meta)),
          e.isHydrating &&
            m.value &&
            !Jt(A.meta.layout) &&
            (A.meta.layout = m.value),
          (e._processingMiddleware = !0)
        const g = new Set([...Mp, ...e._middleware.global])
        for (const O of A.matched) {
          const P = O.meta.middleware
          if (P)
            if (Array.isArray(P)) for (const M of P) g.add(M)
            else g.add(P)
        }
        for (const O of g) {
          const P =
            typeof O == 'string'
              ? e._middleware.named[O] ||
                (await ((_ = Dn[O]) == null
                  ? void 0
                  : _.call(Dn).then((D) => D.default || D)))
              : O
          if (!P) throw new Error(`Unknown route middleware: '${O}'.`)
          const M = await xt(e, P, [A, y])
          if (
            !e.payload.serverRendered &&
            e.isHydrating &&
            (M === !1 || M instanceof Error)
          ) {
            const D =
              M ||
              Ms({ statusCode: 404, statusMessage: `Page Not Found: ${i}` })
            return await xt(e, In, [D]), !1
          }
          if (M || M === !1) return M
        }
      }),
      l.afterEach(async (A) => {
        delete e._processingMiddleware,
          !e.isHydrating && h.value && (await xt(e, _p)),
          A.matched.length === 0 &&
            (await xt(e, In, [
              Ms({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${A.fullPath}`,
              }),
            ]))
      }),
      e.hooks.hookOnce('app:created', async () => {
        try {
          await l.replace({ ...l.resolve(i), name: void 0, force: !0 })
        } catch (A) {
          await xt(e, In, [A])
        }
      }),
      { provide: { router: l } }
    )
  }),
  fr = {},
  Np = Xt(() => {
    const e = Ce(),
      t = Zt()
    e.hooks.hook('app:mounted', () => {
      t.beforeEach(async (n) => {
        var s
        const r = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout
        r && typeof fr[r] == 'function' && (await fr[r]())
      })
    }),
      e.hooks.hook('link:prefetch', (n) => {
        var i, l, c, a
        if (Zn(n)) return
        const r = t.resolve(n)
        if (!r) return
        const s = (i = r == null ? void 0 : r.meta) == null ? void 0 : i.layout
        let o = Array.isArray(
          (l = r == null ? void 0 : r.meta) == null ? void 0 : l.middleware
        )
          ? (c = r == null ? void 0 : r.meta) == null
            ? void 0
            : c.middleware
          : [(a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware]
        o = o.filter((u) => typeof u == 'string')
        for (const u of o) typeof Dn[u] == 'function' && Dn[u]()
        s && typeof fr[s] == 'function' && fr[s]()
      })
  })
function Pi(e, t = {}) {
  const n = jp(e, t),
    r = Ce(),
    s = (r._payloadCache = r._payloadCache || {})
  return s[e] || (s[e] = Fp(n).then((o) => o || (delete s[e], null))), s[e]
}
function jp(e, t = {}) {
  const n = new URL(e, 'http://localhost')
  if (n.search)
    throw new Error('Payload URL cannot contain search params: ' + e)
  if (n.host !== 'localhost')
    throw new Error('Payload URL cannot contain host: ' + e)
  const r = t.hash || (t.fresh ? Date.now() : '')
  return Br(
    oc().app.baseURL,
    n.pathname,
    r ? `_payload.${r}.js` : '_payload.js'
  )
}
async function Fp(e) {
  const t = await be(() => import(e), [], import.meta.url).catch((n) => {
    console.warn('[nuxt] Cannot load payload ', e, n)
  })
  return (t == null ? void 0 : t.default) || null
}
function Bp() {
  return !!Ce().payload.prerenderedAt
}
const Dp = Xt((e) => {
    Bp() &&
      (e.hooks.hook('link:prefetch', (t) => {
        if (!Dr(t).protocol) return Pi(t)
      }),
      Zt().beforeResolve(async (t, n) => {
        if (t.path === n.path) return
        const r = await Pi(t.path)
        r && Object.assign(e.static.data, r.data)
      }))
  }),
  xs =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
        }
      return setTimeout(() => {
        e(n)
      }, 1)
    }),
  $p =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e)
    }),
  Up = (e) => {
    const t = Ce()
    t.isHydrating
      ? t.hooks.hookOnce('app:suspense:resolve', () => {
          xs(e)
        })
      : xs(e)
  }
async function Ac(e, t = Zt()) {
  if (
    (t._routePreloaded || (t._routePreloaded = new Set()),
    t._routePreloaded.has(e))
  )
    return
  const n = (t._preloadPromises = t._preloadPromises || [])
  if (n.length > 4) return Promise.all(n).then(() => Ac(e, t))
  t._routePreloaded.add(e)
  const r = t
    .resolve(e)
    .matched.map((s) => {
      var o
      return (o = s.components) == null ? void 0 : o.default
    })
    .filter((s) => typeof s == 'function')
  for (const s of r) {
    const o = Promise.resolve(s())
      .catch(() => {})
      .finally(() => n.splice(n.indexOf(o)))
    n.push(o)
  }
  await Promise.all(n)
}
const Kp = (...e) => e.find((t) => t !== void 0),
  Wp = 'noopener noreferrer'
function qp(e) {
  const t = e.componentName || 'NuxtLink'
  return Tt({
    name: t,
    props: {
      to: { type: [String, Object], default: void 0, required: !1 },
      href: { type: [String, Object], default: void 0, required: !1 },
      target: { type: String, default: void 0, required: !1 },
      rel: { type: String, default: void 0, required: !1 },
      noRel: { type: Boolean, default: void 0, required: !1 },
      prefetch: { type: Boolean, default: void 0, required: !1 },
      noPrefetch: { type: Boolean, default: void 0, required: !1 },
      activeClass: { type: String, default: void 0, required: !1 },
      exactActiveClass: { type: String, default: void 0, required: !1 },
      prefetchedClass: { type: String, default: void 0, required: !1 },
      replace: { type: Boolean, default: void 0, required: !1 },
      ariaCurrentValue: { type: String, default: void 0, required: !1 },
      external: { type: Boolean, default: void 0, required: !1 },
      custom: { type: Boolean, default: void 0, required: !1 },
    },
    setup(n, { slots: r }) {
      const s = Zt(),
        o = Y(() => n.to || n.href || ''),
        i = Y(() =>
          n.external || (n.target && n.target !== '_self')
            ? !0
            : typeof o.value == 'object'
            ? !1
            : o.value === '' || Zn(o.value, !0)
        ),
        l = Se(!1),
        c = Se(null)
      if (
        n.prefetch !== !1 &&
        n.noPrefetch !== !0 &&
        typeof o.value == 'string' &&
        n.target !== '_blank' &&
        !Gp()
      ) {
        const u = Ce()
        let f,
          h = null
        Yt(() => {
          const m = Vp()
          Up(() => {
            f = xs(() => {
              var v
              ;(v = c == null ? void 0 : c.value) != null &&
                v.tagName &&
                (h = m.observe(c.value, async () => {
                  h == null || h(),
                    (h = null),
                    await Promise.all([
                      u.hooks
                        .callHook('link:prefetch', o.value)
                        .catch(() => {}),
                      !i.value && Ac(o.value, s).catch(() => {}),
                    ]),
                    (l.value = !0)
                }))
            })
          })
        }),
          Nr(() => {
            f && $p(f), h == null || h(), (h = null)
          })
      }
      return () => {
        var m, v
        if (!i.value)
          return Gn(
            Al('RouterLink'),
            {
              ref: (E) => {
                c.value = E == null ? void 0 : E.$el
              },
              to: o.value,
              ...(l.value && !n.custom
                ? { class: n.prefetchedClass || e.prefetchedClass }
                : {}),
              activeClass: n.activeClass || e.activeClass,
              exactActiveClass: n.exactActiveClass || e.exactActiveClass,
              replace: n.replace,
              ariaCurrentValue: n.ariaCurrentValue,
              custom: n.custom,
            },
            r.default
          )
        const a =
            typeof o.value == 'object'
              ? ((m = s.resolve(o.value)) == null ? void 0 : m.href) ?? null
              : o.value || null,
          u = n.target || null,
          f = n.noRel
            ? null
            : Kp(n.rel, e.externalRelAttribute, a ? Wp : '') || null,
          h = () => Tc(a, { replace: n.replace })
        return n.custom
          ? r.default
            ? r.default({
                href: a,
                navigate: h,
                route: s.resolve(a),
                rel: f,
                target: u,
                isExternal: i.value,
                isActive: !1,
                isExactActive: !1,
              })
            : null
          : Gn(
              'a',
              { ref: c, href: a, rel: f, target: u },
              (v = r.default) == null ? void 0 : v.call(r)
            )
      }
    },
  })
}
const yg = qp({ componentName: 'NuxtLink' })
function Vp() {
  const e = Ce()
  if (e._observer) return e._observer
  let t = null
  const n = new Map(),
    r = (o, i) => (
      t ||
        (t = new IntersectionObserver((l) => {
          for (const c of l) {
            const a = n.get(c.target)
            ;(c.isIntersecting || c.intersectionRatio > 0) && a && a()
          }
        })),
      n.set(o, i),
      t.observe(o),
      () => {
        n.delete(o),
          t.unobserve(o),
          n.size === 0 && (t.disconnect(), (t = null))
      }
    )
  return (e._observer = { observe: r })
}
function Gp() {
  const e = navigator.connection
  return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
function ls(e) {
  return e !== null && typeof e == 'object'
}
function Hs(e, t, n = '.', r) {
  if (!ls(t)) return Hs(e, {}, n, r)
  const s = Object.assign({}, t)
  for (const o in e) {
    if (o === '__proto__' || o === 'constructor') continue
    const i = e[o]
    i != null &&
      ((r && r(s, o, i, n)) ||
        (Array.isArray(i) && Array.isArray(s[o])
          ? (s[o] = [...i, ...s[o]])
          : ls(i) && ls(s[o])
          ? (s[o] = Hs(i, s[o], (n ? `${n}.` : '') + o.toString(), r))
          : (s[o] = i)))
  }
  return s
}
function zp(e) {
  return (...t) => t.reduce((n, r) => Hs(n, r, '', e), {})
}
const Qp = zp((e, t, n) => {
    if (typeof e[t] < 'u' && typeof n == 'function') return (e[t] = n(e[t])), !0
  }),
  Jp = {}
Qp(Jp)
const Yp = Xt((e) => {
  e.vueApp.directive('focus', {
    mounted(t) {
      t.focus()
    },
    getSSRProps(t, n) {
      return {}
    },
  })
})
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */ var Oc = 'store'
function Pn(e) {
  return e === void 0 && (e = null), et(e !== null ? e : Oc)
}
function Tn(e, t) {
  Object.keys(e).forEach(function (n) {
    return t(e[n], n)
  })
}
function Sc(e) {
  return e !== null && typeof e == 'object'
}
function Xp(e) {
  return e && typeof e.then == 'function'
}
function Zp(e, t) {
  return function () {
    return e(t)
  }
}
function kc(e, t, n) {
  return (
    t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
    function () {
      var r = t.indexOf(e)
      r > -1 && t.splice(r, 1)
    }
  )
}
function Ic(e, t) {
  ;(e._actions = Object.create(null)),
    (e._mutations = Object.create(null)),
    (e._wrappedGetters = Object.create(null)),
    (e._modulesNamespaceMap = Object.create(null))
  var n = e.state
  Kr(e, n, [], e._modules.root, !0), fo(e, n, t)
}
function fo(e, t, n) {
  var r = e._state,
    s = e._scope
  ;(e.getters = {}), (e._makeLocalGettersCache = Object.create(null))
  var o = e._wrappedGetters,
    i = {},
    l = {},
    c = na(!0)
  c.run(function () {
    Tn(o, function (a, u) {
      ;(i[u] = Zp(a, e)),
        (l[u] = Y(function () {
          return i[u]()
        })),
        Object.defineProperty(e.getters, u, {
          get: function () {
            return l[u].value
          },
          enumerable: !0,
        })
    })
  }),
    (e._state = Et({ data: t })),
    (e._scope = c),
    e.strict && sm(e),
    r &&
      n &&
      e._withCommit(function () {
        r.data = null
      }),
    s && s.stop()
}
function Kr(e, t, n, r, s) {
  var o = !n.length,
    i = e._modules.getNamespace(n)
  if (
    (r.namespaced &&
      (e._modulesNamespaceMap[i], (e._modulesNamespaceMap[i] = r)),
    !o && !s)
  ) {
    var l = ho(t, n.slice(0, -1)),
      c = n[n.length - 1]
    e._withCommit(function () {
      l[c] = r.state
    })
  }
  var a = (r.context = em(e, i, n))
  r.forEachMutation(function (u, f) {
    var h = i + f
    tm(e, h, u, a)
  }),
    r.forEachAction(function (u, f) {
      var h = u.root ? f : i + f,
        m = u.handler || u
      nm(e, h, m, a)
    }),
    r.forEachGetter(function (u, f) {
      var h = i + f
      rm(e, h, u, a)
    }),
    r.forEachChild(function (u, f) {
      Kr(e, t, n.concat(f), u, s)
    })
}
function em(e, t, n) {
  var r = t === '',
    s = {
      dispatch: r
        ? e.dispatch
        : function (o, i, l) {
            var c = Tr(o, i, l),
              a = c.payload,
              u = c.options,
              f = c.type
            return (!u || !u.root) && (f = t + f), e.dispatch(f, a)
          },
      commit: r
        ? e.commit
        : function (o, i, l) {
            var c = Tr(o, i, l),
              a = c.payload,
              u = c.options,
              f = c.type
            ;(!u || !u.root) && (f = t + f), e.commit(f, a, u)
          },
    }
  return (
    Object.defineProperties(s, {
      getters: {
        get: r
          ? function () {
              return e.getters
            }
          : function () {
              return Lc(e, t)
            },
      },
      state: {
        get: function () {
          return ho(e.state, n)
        },
      },
    }),
    s
  )
}
function Lc(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {},
      r = t.length
    Object.keys(e.getters).forEach(function (s) {
      if (s.slice(0, r) === t) {
        var o = s.slice(r)
        Object.defineProperty(n, o, {
          get: function () {
            return e.getters[s]
          },
          enumerable: !0,
        })
      }
    }),
      (e._makeLocalGettersCache[t] = n)
  }
  return e._makeLocalGettersCache[t]
}
function tm(e, t, n, r) {
  var s = e._mutations[t] || (e._mutations[t] = [])
  s.push(function (i) {
    n.call(e, r.state, i)
  })
}
function nm(e, t, n, r) {
  var s = e._actions[t] || (e._actions[t] = [])
  s.push(function (i) {
    var l = n.call(
      e,
      {
        dispatch: r.dispatch,
        commit: r.commit,
        getters: r.getters,
        state: r.state,
        rootGetters: e.getters,
        rootState: e.state,
      },
      i
    )
    return (
      Xp(l) || (l = Promise.resolve(l)),
      e._devtoolHook
        ? l.catch(function (c) {
            throw (e._devtoolHook.emit('vuex:error', c), c)
          })
        : l
    )
  })
}
function rm(e, t, n, r) {
  e._wrappedGetters[t] ||
    (e._wrappedGetters[t] = function (o) {
      return n(r.state, r.getters, o.state, o.getters)
    })
}
function sm(e) {
  Ft(
    function () {
      return e._state.data
    },
    function () {},
    { deep: !0, flush: 'sync' }
  )
}
function ho(e, t) {
  return t.reduce(function (n, r) {
    return n[r]
  }, e)
}
function Tr(e, t, n) {
  return (
    Sc(e) && e.type && ((n = t), (t = e), (e = e.type)),
    { type: e, payload: t, options: n }
  )
}
var om = 'vuex bindings',
  Ti = 'vuex:mutations',
  cs = 'vuex:actions',
  on = 'vuex',
  im = 0
function lm(e, t) {
  ph(
    {
      id: 'org.vuejs.vuex',
      app: e,
      label: 'Vuex',
      homepage: 'https://next.vuex.vuejs.org/',
      logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
      packageName: 'vuex',
      componentStateTypes: [om],
    },
    function (n) {
      n.addTimelineLayer({ id: Ti, label: 'Vuex Mutations', color: Ai }),
        n.addTimelineLayer({ id: cs, label: 'Vuex Actions', color: Ai }),
        n.addInspector({
          id: on,
          label: 'Vuex',
          icon: 'storage',
          treeFilterPlaceholder: 'Filter stores...',
        }),
        n.on.getInspectorTree(function (r) {
          if (r.app === e && r.inspectorId === on)
            if (r.filter) {
              var s = []
              Nc(s, t._modules.root, r.filter, ''), (r.rootNodes = s)
            } else r.rootNodes = [Hc(t._modules.root, '')]
        }),
        n.on.getInspectorState(function (r) {
          if (r.app === e && r.inspectorId === on) {
            var s = r.nodeId
            Lc(t, s),
              (r.state = um(
                dm(t._modules, s),
                s === 'root' ? t.getters : t._makeLocalGettersCache,
                s
              ))
          }
        }),
        n.on.editInspectorState(function (r) {
          if (r.app === e && r.inspectorId === on) {
            var s = r.nodeId,
              o = r.path
            s !== 'root' && (o = s.split('/').filter(Boolean).concat(o)),
              t._withCommit(function () {
                r.set(t._state.data, o, r.state.value)
              })
          }
        }),
        t.subscribe(function (r, s) {
          var o = {}
          r.payload && (o.payload = r.payload),
            (o.state = s),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(on),
            n.sendInspectorState(on),
            n.addTimelineEvent({
              layerId: Ti,
              event: { time: Date.now(), title: r.type, data: o },
            })
        }),
        t.subscribeAction({
          before: function (r, s) {
            var o = {}
            r.payload && (o.payload = r.payload),
              (r._id = im++),
              (r._time = Date.now()),
              (o.state = s),
              n.addTimelineEvent({
                layerId: cs,
                event: {
                  time: r._time,
                  title: r.type,
                  groupId: r._id,
                  subtitle: 'start',
                  data: o,
                },
              })
          },
          after: function (r, s) {
            var o = {},
              i = Date.now() - r._time
            ;(o.duration = {
              _custom: {
                type: 'duration',
                display: i + 'ms',
                tooltip: 'Action duration',
                value: i,
              },
            }),
              r.payload && (o.payload = r.payload),
              (o.state = s),
              n.addTimelineEvent({
                layerId: cs,
                event: {
                  time: Date.now(),
                  title: r.type,
                  groupId: r._id,
                  subtitle: 'end',
                  data: o,
                },
              })
          },
        })
    }
  )
}
var Ai = 8702998,
  cm = 6710886,
  am = 16777215,
  Mc = { label: 'namespaced', textColor: am, backgroundColor: cm }
function xc(e) {
  return e && e !== 'root' ? e.split('/').slice(-2, -1)[0] : 'Root'
}
function Hc(e, t) {
  return {
    id: t || 'root',
    label: xc(t),
    tags: e.namespaced ? [Mc] : [],
    children: Object.keys(e._children).map(function (n) {
      return Hc(e._children[n], t + n + '/')
    }),
  }
}
function Nc(e, t, n, r) {
  r.includes(n) &&
    e.push({
      id: r || 'root',
      label: r.endsWith('/') ? r.slice(0, r.length - 1) : r || 'Root',
      tags: t.namespaced ? [Mc] : [],
    }),
    Object.keys(t._children).forEach(function (s) {
      Nc(e, t._children[s], n, r + s + '/')
    })
}
function um(e, t, n) {
  t = n === 'root' ? t : t[n]
  var r = Object.keys(t),
    s = {
      state: Object.keys(e.state).map(function (i) {
        return { key: i, editable: !0, value: e.state[i] }
      }),
    }
  if (r.length) {
    var o = fm(t)
    s.getters = Object.keys(o).map(function (i) {
      return {
        key: i.endsWith('/') ? xc(i) : i,
        editable: !1,
        value: Ns(function () {
          return o[i]
        }),
      }
    })
  }
  return s
}
function fm(e) {
  var t = {}
  return (
    Object.keys(e).forEach(function (n) {
      var r = n.split('/')
      if (r.length > 1) {
        var s = t,
          o = r.pop()
        r.forEach(function (i) {
          s[i] ||
            (s[i] = {
              _custom: {
                value: {},
                display: i,
                tooltip: 'Module',
                abstract: !0,
              },
            }),
            (s = s[i]._custom.value)
        }),
          (s[o] = Ns(function () {
            return e[n]
          }))
      } else
        t[n] = Ns(function () {
          return e[n]
        })
    }),
    t
  )
}
function dm(e, t) {
  var n = t.split('/').filter(function (r) {
    return r
  })
  return n.reduce(
    function (r, s, o) {
      var i = r[s]
      if (!i)
        throw new Error('Missing module "' + s + '" for path "' + t + '".')
      return o === n.length - 1 ? i : i._children
    },
    t === 'root' ? e : e.root._children
  )
}
function Ns(e) {
  try {
    return e()
  } catch (t) {
    return t
  }
}
var mt = function (t, n) {
    ;(this.runtime = n),
      (this._children = Object.create(null)),
      (this._rawModule = t)
    var r = t.state
    this.state = (typeof r == 'function' ? r() : r) || {}
  },
  jc = { namespaced: { configurable: !0 } }
jc.namespaced.get = function () {
  return !!this._rawModule.namespaced
}
mt.prototype.addChild = function (t, n) {
  this._children[t] = n
}
mt.prototype.removeChild = function (t) {
  delete this._children[t]
}
mt.prototype.getChild = function (t) {
  return this._children[t]
}
mt.prototype.hasChild = function (t) {
  return t in this._children
}
mt.prototype.update = function (t) {
  ;(this._rawModule.namespaced = t.namespaced),
    t.actions && (this._rawModule.actions = t.actions),
    t.mutations && (this._rawModule.mutations = t.mutations),
    t.getters && (this._rawModule.getters = t.getters)
}
mt.prototype.forEachChild = function (t) {
  Tn(this._children, t)
}
mt.prototype.forEachGetter = function (t) {
  this._rawModule.getters && Tn(this._rawModule.getters, t)
}
mt.prototype.forEachAction = function (t) {
  this._rawModule.actions && Tn(this._rawModule.actions, t)
}
mt.prototype.forEachMutation = function (t) {
  this._rawModule.mutations && Tn(this._rawModule.mutations, t)
}
Object.defineProperties(mt.prototype, jc)
var en = function (t) {
  this.register([], t, !1)
}
en.prototype.get = function (t) {
  return t.reduce(function (n, r) {
    return n.getChild(r)
  }, this.root)
}
en.prototype.getNamespace = function (t) {
  var n = this.root
  return t.reduce(function (r, s) {
    return (n = n.getChild(s)), r + (n.namespaced ? s + '/' : '')
  }, '')
}
en.prototype.update = function (t) {
  Fc([], this.root, t)
}
en.prototype.register = function (t, n, r) {
  var s = this
  r === void 0 && (r = !0)
  var o = new mt(n, r)
  if (t.length === 0) this.root = o
  else {
    var i = this.get(t.slice(0, -1))
    i.addChild(t[t.length - 1], o)
  }
  n.modules &&
    Tn(n.modules, function (l, c) {
      s.register(t.concat(c), l, r)
    })
}
en.prototype.unregister = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1],
    s = n.getChild(r)
  s && s.runtime && n.removeChild(r)
}
en.prototype.isRegistered = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1]
  return n ? n.hasChild(r) : !1
}
function Fc(e, t, n) {
  if ((t.update(n), n.modules))
    for (var r in n.modules) {
      if (!t.getChild(r)) return
      Fc(e.concat(r), t.getChild(r), n.modules[r])
    }
}
function hm(e) {
  return new xe(e)
}
var xe = function (t) {
    var n = this
    t === void 0 && (t = {})
    var r = t.plugins
    r === void 0 && (r = [])
    var s = t.strict
    s === void 0 && (s = !1)
    var o = t.devtools
    ;(this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new en(t)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._scope = null),
      (this._devtools = o)
    var i = this,
      l = this,
      c = l.dispatch,
      a = l.commit
    ;(this.dispatch = function (h, m) {
      return c.call(i, h, m)
    }),
      (this.commit = function (h, m, v) {
        return a.call(i, h, m, v)
      }),
      (this.strict = s)
    var u = this._modules.root.state
    Kr(this, u, [], this._modules.root),
      fo(this, u),
      r.forEach(function (f) {
        return f(n)
      })
  },
  po = { state: { configurable: !0 } }
xe.prototype.install = function (t, n) {
  t.provide(n || Oc, this), (t.config.globalProperties.$store = this)
  var r = this._devtools !== void 0 ? this._devtools : !1
  r && lm(t, this)
}
po.state.get = function () {
  return this._state.data
}
po.state.set = function (e) {}
xe.prototype.commit = function (t, n, r) {
  var s = this,
    o = Tr(t, n, r),
    i = o.type,
    l = o.payload,
    c = { type: i, payload: l },
    a = this._mutations[i]
  a &&
    (this._withCommit(function () {
      a.forEach(function (f) {
        f(l)
      })
    }),
    this._subscribers.slice().forEach(function (u) {
      return u(c, s.state)
    }))
}
xe.prototype.dispatch = function (t, n) {
  var r = this,
    s = Tr(t, n),
    o = s.type,
    i = s.payload,
    l = { type: o, payload: i },
    c = this._actions[o]
  if (c) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (u) {
          return u.before
        })
        .forEach(function (u) {
          return u.before(l, r.state)
        })
    } catch {}
    var a =
      c.length > 1
        ? Promise.all(
            c.map(function (u) {
              return u(i)
            })
          )
        : c[0](i)
    return new Promise(function (u, f) {
      a.then(
        function (h) {
          try {
            r._actionSubscribers
              .filter(function (m) {
                return m.after
              })
              .forEach(function (m) {
                return m.after(l, r.state)
              })
          } catch {}
          u(h)
        },
        function (h) {
          try {
            r._actionSubscribers
              .filter(function (m) {
                return m.error
              })
              .forEach(function (m) {
                return m.error(l, r.state, h)
              })
          } catch {}
          f(h)
        }
      )
    })
  }
}
xe.prototype.subscribe = function (t, n) {
  return kc(t, this._subscribers, n)
}
xe.prototype.subscribeAction = function (t, n) {
  var r = typeof t == 'function' ? { before: t } : t
  return kc(r, this._actionSubscribers, n)
}
xe.prototype.watch = function (t, n, r) {
  var s = this
  return Ft(
    function () {
      return t(s.state, s.getters)
    },
    n,
    Object.assign({}, r)
  )
}
xe.prototype.replaceState = function (t) {
  var n = this
  this._withCommit(function () {
    n._state.data = t
  })
}
xe.prototype.registerModule = function (t, n, r) {
  r === void 0 && (r = {}),
    typeof t == 'string' && (t = [t]),
    this._modules.register(t, n),
    Kr(this, this.state, t, this._modules.get(t), r.preserveState),
    fo(this, this.state)
}
xe.prototype.unregisterModule = function (t) {
  var n = this
  typeof t == 'string' && (t = [t]),
    this._modules.unregister(t),
    this._withCommit(function () {
      var r = ho(n.state, t.slice(0, -1))
      delete r[t[t.length - 1]]
    }),
    Ic(this)
}
xe.prototype.hasModule = function (t) {
  return typeof t == 'string' && (t = [t]), this._modules.isRegistered(t)
}
xe.prototype.hotUpdate = function (t) {
  this._modules.update(t), Ic(this, !0)
}
xe.prototype._withCommit = function (t) {
  var n = this._committing
  ;(this._committing = !0), t(), (this._committing = n)
}
Object.defineProperties(xe.prototype, po)
var vg = Dc(function (e, t) {
    var n = {}
    return (
      Bc(t).forEach(function (r) {
        var s = r.key,
          o = r.val
        n[s] = function () {
          for (var l = [], c = arguments.length; c--; ) l[c] = arguments[c]
          var a = this.$store.commit
          if (e) {
            var u = $c(this.$store, 'mapMutations', e)
            if (!u) return
            a = u.context.commit
          }
          return typeof o == 'function'
            ? o.apply(this, [a].concat(l))
            : a.apply(this.$store, [o].concat(l))
        }
      }),
      n
    )
  }),
  bg = Dc(function (e, t) {
    var n = {}
    return (
      Bc(t).forEach(function (r) {
        var s = r.key,
          o = r.val
        ;(o = e + o),
          (n[s] = function () {
            if (!(e && !$c(this.$store, 'mapGetters', e)))
              return this.$store.getters[o]
          }),
          (n[s].vuex = !0)
      }),
      n
    )
  })
function Bc(e) {
  return pm(e)
    ? Array.isArray(e)
      ? e.map(function (t) {
          return { key: t, val: t }
        })
      : Object.keys(e).map(function (t) {
          return { key: t, val: e[t] }
        })
    : []
}
function pm(e) {
  return Array.isArray(e) || Sc(e)
}
function Dc(e) {
  return function (t, n) {
    return (
      typeof t != 'string'
        ? ((n = t), (t = ''))
        : t.charAt(t.length - 1) !== '/' && (t += '/'),
      e(t, n)
    )
  }
}
function $c(e, t, n) {
  var r = e._modulesNamespaceMap[n]
  return r
}
const mm = {
    namespaced: !0,
    state: {
      isMenuNavigationOpened: !1,
      hidePageControl: !1,
      isActiveBurger: !1,
      transitionDirection: '',
      isPageLoaderHide: !1,
      navigation: [],
      router: null,
      radioKey: '',
      isMobile: null,
      isPageAnimationFinished: !0,
    },
    getters: {
      isMenuNavigationOpened: (e) => e.isMenuNavigationOpened,
      isActiveBurger: (e) => e.isActiveBurger,
      transitionDirection: (e) => e.transitionDirection,
      hidePageControl: (e) => e.hidePageControl,
      isPageLoaderHide: (e) => e.isPageLoaderHide,
      navigation: (e) => e.navigation,
      radioKey: (e) => e.radioKey,
      isMobile: (e) => e.isMobile,
      isPageAnimationFinished: (e) => e.isPageAnimationFinished,
    },
    mutations: {
      setIsPageAnimationFinished(e, t) {
        e.isPageAnimationFinished = t
      },
      isMobile(e, t) {
        e.isMobile = t
      },
      setIsMenuNavigation(e, t) {
        e.isMenuNavigationOpened = t
      },
      setHidePageControl(e, t) {
        e.hidePageControl = t
      },
      setDirection(e, { route: t, direction: n }) {
        var i
        if (n) {
          e.transitionDirection = n
          return
        }
        const { routes: r } = (i = e.router) == null ? void 0 : i.options,
          s = r.findIndex((l) => l.name === e.router.currentRoute.name),
          o = r.findIndex((l) => l.name === t.name)
        e.transitionDirection = s < o ? 'to-right' : 'to-left'
      },
      toPage(e, { route: t, direction: n }) {
        this.commit('app/setIsMenuNavigation', !1),
          this.commit('app/setHidePageControl', !0),
          this.commit('app/setDirection', { route: t, direction: n }),
          setTimeout(() => Tc(t), 600),
          setTimeout(() => this.commit('app/setHidePageControl', !1), 900)
      },
      setIsPageLoaderHide(e, t) {
        e.isPageLoaderHide = t
      },
      setNavigation(e, t) {
        const n = ['index', 'portfolio', 'about', 'contacts']
        e.navigation = n.map((r) => t.find((s) => s.name === r))
      },
      setRoutes(e, t) {
        e.router = t
      },
      setRadioKey(e, t) {
        e.radioKey = t
      },
    },
  },
  Oi = !1,
  Si = !1,
  ki = !1,
  Ii = !1,
  gm = !1,
  Li = 0,
  as = [],
  Mi = 0,
  xi = 0,
  Hi = 30,
  ym = {
    namespaced: !0,
    state: {
      isSeedsFall: Oi,
      isGameReady: Si,
      isGameStart: ki,
      isGameFinished: Ii,
      isLeaderBoardOpened: gm,
      score: Li,
      letters: [...as],
      killedLetters: as.length,
      shots: Mi,
      damage: xi,
      timeLeft: Hi,
      barrier: null,
    },
    getters: {
      isSeedsFall: (e) => e.isSeedsFall,
      isGameReady: (e) => e.isGameReady,
      isGameStart: (e) => e.isGameStart,
      isGameFinished: (e) => e.isGameFinished,
      isLeaderBoardOpened: (e) => e.isLeaderBoardOpened,
      score: (e) => e.score,
      letters: (e) => e.letters,
      killedLetters: (e) => e.letters.filter((t) => t.isKilled && !t.isService),
      aliveLetters: (e) => e.letters.filter((t) => !t.isKilled && !t.isService),
      shots: (e) => e.shots,
      damage: (e) => e.damage,
      timeLeft: (e) => e.timeLeft,
      barrier: (e) => e.barrier,
    },
    mutations: {
      setBarrier(e, t) {
        e.barrier = t
      },
      setIsSeedsFall(e, t) {
        e.isSeedsFall = t
      },
      setIsGameReady(e, t) {
        e.isGameReady = t
      },
      setIsGameStart(e, t) {
        e.isGameStart = t
      },
      setIsGameFinished(e, t) {
        ;(e.isGameFinished = t), (e.isGameReady = !1)
      },
      setIsLeaderBoardOpened(e, t) {
        e.isLeaderBoardOpened = t
      },
      resetStateGame(e) {
        ;(e.isSeedsFall = Oi),
          (e.isGameReady = Si),
          (e.isGameStart = ki),
          (e.isGameFinished = Ii),
          (e.score = Li),
          (e.letters = [...as]),
          (e.shots = Mi),
          (e.damage = xi),
          (e.timeLeft = Hi)
      },
      setScore(e, t) {
        e.score = t
      },
      setLetters(e, t) {
        e.letters = t
      },
      showLetter(e, t) {
        e.letters[t.id].isShow = !0
      },
      killLetter(e, t) {
        e.letters[t.id].isKilled = !0
      },
      updateLetters(e, t) {
        e.letters[t.id] = t
      },
      increaseShoots(e) {
        e.shots += 1
      },
      increaseDamage(e) {
        e.damage += 2
      },
      decreaseTimeLeft(e) {
        e.timeLeft -= 1
      },
    },
  },
  Ni = !1,
  vm = {
    namespaced: !0,
    state: { leaders: [], isSent: Ni },
    getters: {
      leaders: (e) => e.leaders,
      isSent: (e) => e.isSent,
      getSortLeaders: (e) =>
        [...e.leaders]
          .sort((t, n) => n.score - t.score)
          .map((t, n) => ({ ...t, rate: n })),
    },
    actions: {
      getLeaders({ commit: e }) {
        return fetch('')
          .then((t) => t.json())
          .then((t) => {
            e('fetchLeaders', t)
          })
      },
      addLeader({ commit: e }, t) {
        return ''
      },
    },
    mutations: {
      fetchLeaders(e, t) {
        e.leaders = t
      },
      setIsSent(e, t) {
        e.isSent = t
      },
      resetStateLeaderBoard(e) {
        e.isSent = Ni
      },
    },
  },
  bm = hm({ modules: { app: mm, game: ym, leaderBoard: vm } }),
  _m = Xt((e) => {
    e.vueApp.use(bm)
  }),
  Em = [Pd, ih, Hp, Np, Dp, Yp, _m]
const Wr = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  wm = (e) => (Ka('data-v-888c93e4'), (e = e()), Wa(), e),
  Cm = wm(() =>
    ie(
      'div',
      { class: 'circle' },
      [ie('div', { class: 'loader' }), ie('div', { class: 'text' }, ' Hi! ')],
      -1
    )
  ),
  Rm = [Cm],
  Pm = {
    __name: 'PageLoader',
    setup(e) {
      Pn()
      const t = 300,
        n = Se({
          zoom: !1,
          rotate1: !1,
          rotate2: !1,
          fadeIn: !1,
          tilt: !1,
          goDown: !1,
        })
      Se(!1)
      const r = Y(() =>
          Object.keys(n.value).reduce(
            (o, i) => (n.value[i] === !1 ? o : o + ' ' + i),
            ''
          )
        ),
        s = () => {
          Object.keys(n.value).map((o, i) => {
            setTimeout(() => {
              n.value[o] = !0
            }, t + t * i)
          })
        }
      return (
        Yt(() => {
          s()
        }),
        (o, i) => (
          de(), tt('div', { class: Te(['page-loader', te(r)]) }, Rm, 2)
        )
      )
    },
  },
  Tm = Wr(Pm, [['__scopeId', 'data-v-888c93e4']])
const Am = ['href', 'target'],
  Om = {
    __name: 'Link2Move',
    props: {
      text: { type: String, default: 'someText' },
      href: { type: String, default: null },
      target: { type: String, default: null },
    },
    setup(e) {
      return (t, n) => (
        de(),
        tt(
          'a',
          { class: 'ui-link-move', href: e.href, target: e.target },
          [ie('span', null, Di(e.text), 1)],
          8,
          Am
        )
      )
    },
  },
  Sm = Tt({
    __name: 'MenuNavigation',
    setup(e) {
      const t = Pn(),
        n = Y(() => t.getters['app/isMenuNavigationOpened']),
        r = Y(() => t.getters['app/navigation']),
        s = (i) => t.commit('app/setIsMenuNavigation', i),
        o = (i) => {
          t.commit('app/toPage', i)
        }
      return (i, l) => {
        const c = Om
        return (
          de(),
          tt(
            'div',
            {
              class: Te(['menu-navigation', { active: te(n) }]),
              onMouseleave: l[0] || (l[0] = (a) => s(!1)),
            },
            [
              ie('nav', null, [
                (de(!0),
                tt(
                  Re,
                  null,
                  kl(
                    te(r),
                    (a) => (
                      de(),
                      it(
                        c,
                        {
                          key: a == null ? void 0 : a.name,
                          text:
                            (a == null ? void 0 : a.name) === 'index'
                              ? 'game'
                              : a == null
                              ? void 0
                              : a.name,
                          onClick: (u) => o({ route: a }),
                        },
                        null,
                        8,
                        ['text', 'onClick']
                      )
                    )
                  ),
                  128
                )),
              ]),
            ],
            34
          )
        )
      }
    },
  })
const km = {
    name: 'UIIconBurger',
    props: {},
    data() {
      return { isActive: !1 }
    },
    computed: {},
    methods: {
      addActive() {
        this.isActive = !0
      },
      removeActive() {
        this.isActive = !1
      },
    },
  },
  Im = ie('i', null, null, -1),
  Lm = ie('i', null, null, -1),
  Mm = ie('i', null, null, -1),
  xm = [Im, Lm, Mm]
function Hm(e, t, n, r, s, o) {
  return (
    de(),
    tt(
      'div',
      {
        class: Te(['ui-icon-burger', { active: s.isActive }]),
        onMouseover:
          t[0] || (t[0] = (...i) => o.addActive && o.addActive(...i)),
        onMouseleave:
          t[1] || (t[1] = (...i) => o.removeActive && o.removeActive(...i)),
      },
      xm,
      34
    )
  )
}
const Nm = Wr(km, [['render', Hm]]),
  jm = Tt({
    __name: 'IconBurger',
    setup(e) {
      const t = Pn(),
        n = Y(() => t.getters['app/isMenuNavigationOpened']),
        r = Y(() => t.getters['app/isMobile']),
        s = (a) => t.commit('app/setIsMenuNavigation', a),
        o = Se(),
        i = () => {
          r.value || s(!0)
        },
        l = () => {
          r.value && s(!n.value)
        }
      Yt(() => {
        window.addEventListener('click', c)
      }),
        jr(() => {
          window.removeEventListener('click', c)
        })
      const c = (a) => {
        o.value.$el.contains(a.target) || s(!1)
      }
      return (a, u) => {
        const f = Nm
        return (
          de(),
          it(
            f,
            {
              ref_key: 'burger',
              ref: o,
              class: 'icon-burger',
              onMouseenter: i,
              onClick: l,
            },
            null,
            512
          )
        )
      }
    },
  })
const Fm = {
    __name: 'SoundBar',
    props: { isActive: { type: Boolean, default: !1 } },
    setup(e) {
      return (t, n) => (
        de(),
        tt(
          'div',
          { class: Te(['ui-sound-bar', { active: e.isActive }]) },
          [
            (de(),
            tt(
              Re,
              null,
              kl('1234567', (r) => ie('i', { key: r })),
              64
            )),
          ],
          2
        )
      )
    },
  },
  Bm = { class: 'radio' },
  Dm = ['data-key'],
  $m = ['data-key'],
  Um = ['data-key'],
  Km = Tt({
    __name: 'SoundBar',
    setup(e) {
      const t = {
          maximum: 'https://maximum.hostingradio.ru/maximum96.aacp',
          pop90: 'https://90s90s.hoerradar.de/90s90s-pop-mp3-hq',
          cyberSpace: 'https://pub0101.101.ru/stream/pro/aac/64/79',
        },
        n = Pn(),
        r = Se(!1),
        s = Y(() => n.getters['game/isGameReady']),
        o = Y(() => n.getters['app/radioKey']),
        i = Se(null),
        l = Se(),
        c = (y) => {
          a(o.value), n.commit('app/setRadioKey', y)
        },
        a = (y) => {
          l.value = y
        }
      Yt(() => {
        c('maximum'), u(t.maximum)
      })
      const u = (y) => {
          i.value.setAttribute('src', y)
        },
        f = (y) => o.value === y,
        h = (y) => {
          if (!(y.target instanceof HTMLElement)) return
          const g = y.target.dataset.key
          m(g)
        },
        m = (y) => {
          c(y), u(t[o.value]), r.value && l.value === o.value ? A() : E()
        }
      Ft(
        () => s.value,
        (y) => {
          y && A()
        }
      )
      const v = () => {
          i.value.paused ? E() : A()
        },
        E = () => {
          i.value.play(), (r.value = !0)
        },
        A = () => {
          i.value.pause(), (r.value = !1)
        }
      return (y, g) => {
        const _ = Fm
        return (
          de(),
          tt('div', null, [
            ie('div', Bm, [
              oe(
                _,
                {
                  class: Te(['play', { hide: te(s) }]),
                  'is-active': te(r),
                  onClick: v,
                },
                null,
                8,
                ['is-active', 'class']
              ),
              ie('div', { class: 'stations', onClick: h }, [
                ie(
                  'div',
                  {
                    class: Te(['pt-0', { underline: f('maximum') }]),
                    'data-key': 'maximum',
                  },
                  ' Maximum ',
                  10,
                  Dm
                ),
                ie(
                  'div',
                  { class: Te({ underline: f('pop90') }), 'data-key': 'pop90' },
                  ' 90s pop ',
                  10,
                  $m
                ),
                ie(
                  'div',
                  {
                    class: Te({ underline: f('cyberSpace') }),
                    'data-key': 'cyberSpace',
                  },
                  ' Cyber Space ',
                  10,
                  Um
                ),
              ]),
              ie(
                'video',
                { ref_key: 'player', ref: i, class: 'video', playsinline: '' },
                null,
                512
              ),
            ]),
          ])
        )
      }
    },
  })
const Wm = Wr(Km, [['__scopeId', 'data-v-86fa69b1']])
const qm = { name: 'UIComeBack' },
  Vm = { class: 'ui-come-back' },
  Gm = ie('i', null, null, -1),
  zm = ie('i', null, null, -1),
  Qm = ie('i', null, null, -1),
  Jm = ie('i', null, null, -1),
  Ym = ie('i', null, null, -1),
  Xm = ie('i', null, null, -1),
  Zm = ie('i', null, null, -1),
  eg = ie('i', null, null, -1),
  tg = ie('i', null, null, -1),
  ng = [Gm, zm, Qm, Jm, Ym, Xm, Zm, eg, tg]
function rg(e, t, n, r, s, o) {
  return de(), tt('div', Vm, ng)
}
const sg = Wr(qm, [['render', rg]]),
  og = Tt({
    __name: 'ComeBack',
    setup(e) {
      const t = Zt(),
        n = Y(() => {
          const s = t.currentRoute.value.name
          return s === 'portfolio-id' || (s && s.includes('challenge'))
        }),
        r = () => t.push({ path: '/portfolio' })
      return (s, o) => {
        const i = sg
        return te(n)
          ? (de(), it(i, { key: 0, class: 'come-back', onClick: r }))
          : hr('', !0)
      }
    },
  })
const ig = ie('em', null, null, -1),
  lg = {
    __name: 'IconArrow',
    props: {
      direction: { type: String, default: 'left' },
      text: { type: String, default: 'someText' },
      fadeOut: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = e,
        n = Se(!1),
        r = Y(() => {
          const i = { active: n.value },
            l = { [t.direction]: !0 },
            c = { fadeOut: t.fadeOut }
          return { ...i, ...l, ...c }
        }),
        s = () => (n.value = !0),
        o = () => (n.value = !1)
      return (i, l) => (
        de(),
        tt(
          'div',
          {
            class: Te(['ui-icon-arrow', te(r)]),
            onMouseover: s,
            onMouseleave: o,
          },
          [ie('span', null, Di(e.text), 1), ig],
          34
        )
      )
    },
  },
  cg = Tt({
    __name: 'PageControl',
    props: {
      direction: { type: String, default: 'right' },
      text: { type: String, default: 'PageName' },
    },
    setup(e) {
      const t = Pn(),
        n = Y(() => t.getters['app/hidePageControl']),
        r = Y(() => t.getters['game/isGameReady']),
        s = Y(() => n.value || r.value)
      return (o, i) => {
        const l = lg
        return (
          de(),
          it(
            l,
            {
              class: 'page-control',
              direction: e.direction,
              text: e.text,
              'fade-out': te(s),
            },
            null,
            8,
            ['direction', 'text', 'fade-out']
          )
        )
      }
    },
  })
const ag = () => vp()
const ug = { class: 'app' },
  fg = { class: 'content' },
  dg = {
    __name: 'app',
    setup(e) {
      const t = Pn(),
        n = ag(),
        r = Zt()
      t.commit('app/setRoutes', r)
      const s = Y(() => t.getters['app/transitionDirection']),
        o = Y(() => t.getters['app/isPageLoaderHide']),
        i = Y(() => t.getters['app/navigation']),
        l = Y(() => t.getters['game/isGameReady']),
        c = Y(() => i.value.length),
        a = (P) => t.commit('app/toPage', P),
        u = () => {
          t.commit('app/setIsPageAnimationFinished', !1)
        },
        f = () => {
          t.commit('app/setIsPageAnimationFinished', !0)
        }
      Yt(() => {
        v()
        const P = []
        r.options.routes.forEach((M) => {
          M.name.includes('-id') || P.push(M)
        }),
          t.commit('app/setNavigation', P),
          t.commit('app/isMobile', m()),
          window.addEventListener('resize', h)
      }),
        jr(() => {
          window.removeEventListener('resize', h)
        })
      const h = () => {
          t.commit('app/isMobile', m())
        },
        m = () => window.innerWidth < 480,
        v = () => {
          window.dataLayer = window.dataLayer || []
          function P() {
            dataLayer.push(arguments)
          }
          P('js', new Date()), P('config', 'G-XWDSRJ4TEC')
        },
        E = Y(() => {
          const P = []
          return P.push(s.value), P
        }),
        A = Y(() => n.path),
        y = Y(() => i.value.findIndex((P) => P.path === A.value)),
        g = Y(() => !n.params.id),
        _ = Y(() =>
          y.value === 0 ? i.value[c.value - 1] : i.value[y.value - 1]
        ),
        O = Y(() =>
          y.value === c.value - 1 ? i.value[0] : i.value[y.value + 1]
        )
      return (P, M) => {
        var F, _e
        const D = Tm,
          k = Sm,
          q = jm,
          W = Wm,
          V = og,
          H = Al('router-view'),
          z = cg
        return (
          de(),
          tt('div', ug, [
            te(o) ? hr('', !0) : (de(), it(D, { key: 0 })),
            oe(k),
            oe(q),
            oe(W),
            oe(V),
            ie('main', fg, [
              oe(H, null, {
                default: br(({ Component: Z }) => [
                  oe(
                    oo,
                    { name: 'fade', onAfterEnter: f, onBeforeLeave: u },
                    {
                      default: br(() => [
                        (de(),
                        it(
                          pu(Z),
                          { class: Te(['view pt-28', te(E)]) },
                          null,
                          8,
                          ['class']
                        )),
                      ]),
                      _: 2,
                    },
                    1024
                  ),
                ]),
                _: 1,
              }),
              te(g)
                ? (de(),
                  tt(
                    'div',
                    {
                      key: 0,
                      class: Te(['content-arrow left', { hide: te(l) }]),
                    },
                    [
                      ie(
                        'a',
                        {
                          onClick:
                            M[0] ||
                            (M[0] = (Z) =>
                              a({ route: te(_), direction: 'to-left' })),
                        },
                        [
                          oe(
                            z,
                            {
                              direction: 'left',
                              text: (F = te(_)) == null ? void 0 : F.name,
                            },
                            null,
                            8,
                            ['text']
                          ),
                        ]
                      ),
                    ],
                    2
                  ))
                : hr('', !0),
              te(g)
                ? (de(),
                  tt(
                    'div',
                    {
                      key: 1,
                      class: Te(['content-arrow right', { hide: te(l) }]),
                    },
                    [
                      ie(
                        'a',
                        {
                          onClick:
                            M[1] ||
                            (M[1] = (Z) =>
                              a({ route: te(O), direction: 'to-right' })),
                        },
                        [
                          oe(
                            z,
                            {
                              direction: 'right',
                              text: (_e = te(O)) == null ? void 0 : _e.name,
                            },
                            null,
                            8,
                            ['text']
                          ),
                        ]
                      ),
                    ],
                    2
                  ))
                : hr('', !0),
            ]),
          ])
        )
      }
    },
  },
  ji = {
    __name: 'nuxt-root',
    setup(e) {
      const t = iu(() =>
          be(
            () => import('./error-component.82da5eb7.js'),
            [],
            import.meta.url
          ).then((l) => l.default || l)
        ),
        n = () => null,
        r = Ce(),
        s = r.deferHydration()
      Mn('_route', Rp()),
        r.hooks.callHookWith((l) => l.map((c) => c()), 'vue:setup')
      const o = Ur()
      Tl((l, c, a) => {
        r.hooks
          .callHook('vue:error', l, c, a)
          .catch((u) => console.error('[nuxt] Error in `vue:error` hook', u)),
          Ep(l) && (l.fatal || l.unhandled) && xt(r, In, [l])
      })
      const { islandContext: i } = !1
      return (l, c) => (
        de(),
        it(
          Ya,
          { onResolve: te(s) },
          {
            default: br(() => [
              te(o)
                ? (de(),
                  it(te(t), { key: 0, error: te(o) }, null, 8, ['error']))
                : te(i)
                ? (de(),
                  it(te(n), { key: 1, context: te(i) }, null, 8, ['context']))
                : (de(), it(te(dg), { key: 2 })),
            ]),
            _: 1,
          },
          8,
          ['onResolve']
        )
      )
    },
  }
globalThis.$fetch || (globalThis.$fetch = cd.create({ baseURL: ud() }))
let Fi
const hg = Rd(Em)
;(Fi = async function () {
  var s
  const n = Boolean((s = window.__NUXT__) == null ? void 0 : s.serverRendered)
      ? bf(ji)
      : vf(ji),
    r = Ed({ vueApp: n })
  try {
    await Cd(r, hg)
  } catch (o) {
    await r.callHook('app:error', o), (r.payload.error = r.payload.error || o)
  }
  try {
    await r.hooks.callHook('app:created', n),
      await r.hooks.callHook('app:beforeMount', n),
      n.mount('#' + oh),
      await r.hooks.callHook('app:mounted', n),
      await Jn()
  } catch (o) {
    await r.callHook('app:error', o), (r.payload.error = r.payload.error || o)
  }
}),
  Fi().catch((e) => {
    console.error('Error while mounting app:', e)
  })
export {
  Ka as A,
  Wa as B,
  Wr as C,
  mg as D,
  Ar as E,
  Re as F,
  Nr as G,
  br as H,
  vg as I,
  Te as J,
  bg as K,
  Om as L,
  Al as M,
  ag as N,
  Wl as O,
  yg as P,
  oo as T,
  be as _,
  tt as a,
  kl as b,
  it as c,
  iu as d,
  ie as e,
  Tt as f,
  xu as g,
  oe as h,
  gg as i,
  Ce as j,
  wp as k,
  Xn as l,
  cu as m,
  pg as n,
  de as o,
  jr as p,
  Y as q,
  Se as r,
  Et as s,
  Di as t,
  te as u,
  Pn as v,
  Ft as w,
  Yt as x,
  ld as y,
  hr as z,
}
