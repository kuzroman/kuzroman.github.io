import{u as v}from"./composables.a78e2061.js";import{M as f}from"./matter.8f1420d2.js";import{r as i,q as g,s as h,o as w,a as B}from"./entry.174ca79e.js";const S={class:"box"},U={__name:"matter",setup(M){v({title:"matter.js great gravity =)"});const{Engine:m,Render:c,World:C,Bodies:r,Body:k,Events:E,Composite:l,Composites:W,Constraint:b,Vertices:I,Mouse:R,Bounds:q,MouseConstraint:j,Query:A,Common:H,Runner:d}=f,e=(o,a)=>Math.ceil(Math.random()*(a-o)+o),u=i(0),y=i(100),_=i(100);return g(()=>{const o=m.create({gravity:{y:.1}}),a=c.create({element:document.querySelector(".box"),engine:o,options:{wireframes:!1,background:"#2d2d2d"}});u.value=setInterval(()=>{let s=[];[...Array(e(2,6))].forEach(L=>{s.push(r.circle(e(0,window.innerWidth),e(-50,0),e(2,10),{restitution:1,render:{fillStyle:"#333",strokeStyle:"orange",lineWidth:3}}))}),l.add(o.world,s)},200);const n={isStatic:!0,render:{fillStyle:"#333",strokeStyle:"#5a5a5a",lineWidth:3}};let t=[{x:e(390,410),y:e(90,110)},{x:e(40,60),y:e(190,210)},{x:e(590,610),y:e(290,310)},{x:e(240,260),y:e(440,460)},{x:e(490,510),y:e(590,610)}];const p=s=>{y.value=s.x,_.value=s.y};window.addEventListener("mousemove",p),l.add(o.world,[r.circle(t[0].x,t[0].y,e(30,40),n),r.circle(t[1].x,t[1].y,e(30,40),n),r.circle(t[2].x,t[2].y,e(60,70),n),r.circle(t[3].x,t[3].y,e(100,120),n),r.circle(t[4].x,t[4].y,e(40,60),n)]),c.run(a);const x=d.create();d.run(x,o)}),h(()=>{clearTimeout(u.value)}),(o,a)=>(w(),B("div",S))}};export{U as default};