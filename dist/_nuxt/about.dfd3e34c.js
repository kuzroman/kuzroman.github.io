import {
  r as p,
  o as s,
  a as e,
  F as i,
  b as o,
  e as a,
  t as c,
  u as w,
  f as _,
  h as v,
  i as b,
} from './entry.b5c09835.js'
import { u as h } from './composables.39d4856c.js'
const k = ['JavaScript', 'HTML', 'CSS', 'Type Script'],
  y = ['Vue.js 2-3', 'Nuxt.js 2-3'],
  g = ['pnpm', 'npm', 'Yarn', 'Bower', 'composer'],
  f = ['Tailwind', 'UI Element plus', 'Lodash', 'JQuery'],
  S = ['HTTP', 'WebSocket', 'SSE'],
  T = ['Vite', 'Webpack', 'Browserify'],
  B = ['PostCss', 'Babel', 'Sass', 'Less'],
  M = ['Git'],
  x = ['Jira', 'Trello', 'Asure'],
  V = ['Jest', 'Vue Test Utils'],
  A = ['Highcharts', 'Yandex map', 'DaData', 'Sync Fusion'],
  C = ['Gulp', 'Grunt'],
  F = [
    'Twig',
    'Razor',
    'Twig.js',
    'Django',
    'Dot.js',
    'Jade.js',
    'JQuery templates',
  ],
  P = ['PHP', 'MySQL', 'Backbone', 'Mercurial'],
  L = {
    General: k,
    Framework: y,
    FileManager: g,
    Library: f,
    Protocol: S,
    Bundler: T,
    Compiler: B,
    VersionControl: M,
    TaskManager: x,
    Tests: V,
    API: A,
    TaskRunner: C,
    TemplateEngines: F,
    'T-shape': [
      'Node',
      'Express',
      'MongoDB',
      'Nginx',
      'Apache',
      'CenOs',
      'Photoshop',
      'lowDB',
    ],
    Familiar: P,
  }
const j = { class: 'skills-me' },
  D = { class: 'main' },
  J = { class: 'general' },
  R = {
    __name: 'SkillsMe',
    setup(d) {
      const t = p(L)
      return (u, n) => (
        s(),
        e('div', j, [
          (s(!0),
          e(
            i,
            null,
            o(
              w(t),
              (m, l) => (
                s(),
                e('div', { key: l, class: 'knowledge' }, [
                  a('div', D, c(l), 1),
                  a('div', J, [
                    (s(!0),
                    e(
                      i,
                      null,
                      o(m, (r) => (s(), e('div', { key: r }, c(r), 1))),
                      128
                    )),
                  ]),
                ])
              )
            ),
            128
          )),
        ])
      )
    },
  },
  E = { class: 'skills' },
  G = { class: 'scroll-y' },
  H = b(
    '<h1 class="h1"> About </h1><p class="pt1 pb1"> Senior Front-end web developer with more 12 years old experience<br> Highly skilled at JavaScript including SPA, SSR, SSG, MVVM flux patterns. </p><h2>Last jobs:</h2><div class="mt1 mb1"> 2021. SyncMd, SyncId - <a class="link" href="http://www.syncmd.com" target="_blank">www.syncmd.com</a><div class="sub"> Agile, Scrum, Kanban. </div></div><div class="mt1 mb1"> 2018. Raiffeisen Bank - <a class="link" href="http://www.raiffeisen.ru" target="_blank">www.raiffeisen.ru</a><div class="sub"> Agile, Scrum, Kanban. </div></div><div class="mt1 mb1"> 2015. Ros Business Consulting - RBC media holding - <a class="link" href="https://www.rbc.ru/" target="_blank">www.rbc.ru</a><div class="sub"> Waterfall. </div></div><div class="mt1 mb1"> 2012. Bank of Moscow (current time VTB Bank) - <a class="link" href="https://www.vtb.ru/" target="_blank">www.vtb.ru</a><div class="sub"> Waterfall. </div></div><div class="mt1 mb1"> 2011. Anywayanyday <a class="link" href="https://www.anywayanyday.com/new" target="_blank">www.anywayanyday.com</a><div class="sub"> Waterfall. </div></div><div class="mt1 mb1"> 2010. Advertising Boulevard <a class="link" href="https://bulvar.agency/" target="_blank">www.bulvar.agency</a><div class="sub"> Waterfall. </div></div><p class="pt1 pb1"> This is not full list, but most frequently used knowledge </p><h1 class="h1"> Skills </h1>',
    11
  ),
  I = _({
    __name: 'about',
    setup(d) {
      return (
        h({ title: 'some about kuzroman' }),
        (t, u) => {
          const n = R
          return s(), e('div', E, [a('div', G, [H, v(n)])])
        }
      )
    },
  })
export { I as default }
