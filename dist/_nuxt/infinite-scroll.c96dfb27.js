import{s as _,v as f,r as h,x as g,l as b,o as r,a as s,F as v,b as y,e as l,t as d,u as x}from"./entry.03c438c7.js";const L={class:"scroll"},S={class:"text-lg"},w=l("div",{class:"box p-2 invisible"},null,-1),H=_({__name:"infinite-scroll",setup(B){f().commit("app/setIsPageLoaderHide",!0);const i=h(a(20));g(()=>{const t=document.querySelector(".scroll"),e=document.querySelector(".box");t.addEventListener("scroll",c.bind({box:e}),{passive:!0})}),b(()=>document.body.removeEventListener("scroll",c));function c(){if(!p(this.box))return!1;i.value.push(...a(20)),console.log("added")}function a(t){return Array(t).fill(0).map(e=>({desc:m(100)}))}function m(t){let e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length;for(let u=0;u<t;u++)e+=n.charAt(Math.floor(Math.random()*o));return e.split("").join(" ")}function p(t){if(!t)return;const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}return(t,e)=>(r(),s("div",L,[(r(!0),s(v,null,y(x(i),(n,o)=>(r(),s("div",{class:"p-2 border-amber-50 border",key:o},[l("b",S,d(o),1),l("span",null," - "+d(n.desc),1)]))),128)),w]))}});export{H as default};
