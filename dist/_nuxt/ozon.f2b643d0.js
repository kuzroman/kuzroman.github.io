async function r() {
  let e
  return (
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((t) => t.json())
      .then((t) => {
        e = t
      }),
    e
  )
}
async function c() {
  let e
  return (
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((t) => t.json())
      .then((t) => {
        e = t
      }),
    e
  )
}
async function a() {
  let e
  return (
    await fetch('https://jsonplaceholder.typicode.com/comments')
      .then((t) => t.json())
      .then((t) => {
        e = t
      }),
    e
  )
}
async function i() {
  let e = await r(),
    t = await c(),
    s = await a(),
    n = u(e, s, t)
  console.log(n)
}
i()
function u(e, t, s) {
  return e.map((n) => ({
    id: n.id,
    title: n.title,
    userName: s.find((o) => o.id === n.userId).username,
    commentsCount: t.filter((o) => o.postId === n.id).length,
  }))
}
