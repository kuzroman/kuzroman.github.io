import{f,v as _,r as h,x as g,p as b,o as s,a as r,F as v,b as y,e as c,t as d,u as x}from"./entry.ecafaa21.js";const L={class:"scroll"},S={class:"text-lg"},w=c("div",{class:"box p-2 invisible"},null,-1),H=f({__name:"infinite-scroll",setup(B){_().commit("app/setIsPageLoaderHide",!0);const i=h(a(20));g(()=>{const t=document.querySelector(".scroll"),e=document.querySelector(".box");t.addEventListener("scroll",l.bind({box:e}),{passive:!0})}),b(()=>document.body.removeEventListener("scroll",l));function l(){if(!p(this.box))return!1;i.value.push(...a(20)),console.log("added")}function a(t){return Array(t).fill(0).map(e=>({desc:m(100)}))}function m(t){let e="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length;for(let u=0;u<t;u++)e+=n.charAt(Math.floor(Math.random()*o));return e.split("").join(" ")}function p(t){if(!t)return;const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}return(t,e)=>(s(),r("div",L,[(s(!0),r(v,null,y(x(i),(n,o)=>(s(),r("div",{key:o,class:"p-2 border-amber-50 border"},[c("b",S,d(o),1),c("span",null," - "+d(n.desc),1)]))),128)),w]))}});export{H as default};