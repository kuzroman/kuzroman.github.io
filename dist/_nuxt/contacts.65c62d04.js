import { f as t, o as a, a as e, i as s } from './entry.b5c09835.js'
import { u as o } from './composables.39d4856c.js'
const n = { class: 'contacts' },
  c = s(
    '<h1 class="h1"> Contacts </h1><div class="text pt1 pb1"><p>Currently I&#39;m located in Russia, Moscow (GMT+3)</p><p>Wanna talk about a project or offer me job?</p><p> Welcome <a class="email" href="mailto:kuzroman@list.ru">kuzroman@list.ru</a></p></div><div class="social"><a class="linkedin" href="https://www.linkedin.com/in/kuzroman" target="_blank">linkedin</a><a class="github" href="https://github.com/kuzroman" target="_blank">github</a></div>',
    3
  ),
  i = [c],
  u = t({
    __name: 'contacts',
    setup(l) {
      return o({ title: 'my contacts' }), (r, _) => (a(), e('div', n, i))
    },
  })
export { u as default }
