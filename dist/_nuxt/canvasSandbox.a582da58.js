import{C as z,r as _,q as C,w as E,x as M,p as P,o as I,a as B,P as h,A as L,B as q,e as A}from"./entry.47d84b8f.js";import{C as j,M as O}from"./Meteor.b39d4ffa.js";const W=s=>(L("data-v-651f44e2"),s=s(),q(),s),X=W(()=>A("canvas",{id:"canvas",class:"canvas"},null,-1)),Y=[X],F={__name:"canvasSandbox",setup(s){const a=_({}),o=_({});let c,n,l,r;const d=C(()=>!!Object.keys(a.value).length||!!Object.keys(o.value).length);E(d,e=>{e&&u()});function f(e,t,g,S,b){n.beginPath(),n.arc(e,t,g,0,2*Math.PI),n.strokeStyle=b,n.lineWidth=S,n.stroke()}const p=()=>{for(const e in a.value){const t=a.value[e];f(t.x,t.y,t.size+=1,t.thick-=.1,"#fff"),t.size>200&&delete a.value[e],t.thick<.2&&delete a.value[e]}};function w(e){e.updatePosition(),e.updateMeteorSize(),n.beginPath(),n.arc(e.x,e.y,e.size,0,2*Math.PI),n.fillStyle="red",n.fill()}const m=()=>{for(const e in o.value){const t=o.value[e];w(t),t.size<.1&&delete o.value[e]}},u=()=>{console.log(1),n.clearRect(0,0,l,r),p(),m(),d.value&&requestAnimationFrame(u)},x=e=>{a.value[h()]=new j(e.clientX,e.clientY)},y=e=>{for(let t=0;t<10;t++)o.value[h()]=new O({x:e.clientX,y:e.clientY})},i=()=>{l=c.width=window.innerWidth,r=c.height=window.innerHeight},k=()=>{c=document.querySelector(".canvas"),n=c.getContext("2d")},v=e=>{x(e),y(e)};return M(()=>{k(),i(),document.body.addEventListener("click",v),window.addEventListener("resize",i)}),P(()=>{document.body.removeEventListener("click",v),window.removeEventListener("resize",i)}),(e,t)=>(I(),B("div",null,Y))}},R=z(F,[["__scopeId","data-v-651f44e2"]]);export{R as default};