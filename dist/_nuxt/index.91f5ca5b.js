import{f as L,j as C,r as d,k as x,l as R,o,a,u as s,F as l,e as m,b as w,m as A,p as B,q as E,s as I}from"./entry.9df884fa.js";const U=n=>(B("data-v-7cd662b7"),n=n(),E(),n),M=U(()=>m("p",{class:"my-5"},'Click Start and "Allow" your microphone Permission!',-1)),j={key:2},q=["src"],F=L({__name:"index",setup(n){C().commit("app/setIsPageLoaderHide",!0);const r=d([]);let e=null;const u=d(!1),c=d("inactive"),v=x(()=>c.value==="recording"),y=t=>{const i=new Blob([t]);return URL.createObjectURL(i)},h=()=>{u.value=!0,navigator.mediaDevices.getUserMedia({audio:!0}).then(t=>{e=new MediaRecorder(t),e.addEventListener("dataavailable",p),e.addEventListener("stop",_)})},k=()=>{e&&(e.removeEventListener("dataavailable",p),e.removeEventListener("stop",_),e=null)},p=t=>{r.value.push(t.data)},f=()=>{e&&e.state==="inactive"&&(e.start(),c.value="recording")},b=()=>{e&&e.state==="recording"&&(e.stop(),c.value="inactive")},_=()=>{const t=document.querySelectorAll("audio");t[t.length-1].play()};return R(k),(t,i)=>(o(),a("div",null,[s(u)?(o(),a(l,{key:1},[s(v)?(o(),a("button",{key:0,type:"primary",onClick:b}," Stop and play it ")):(o(),a("button",{key:1,type:"primary",onClick:f}," Record your voice "))],64)):(o(),a(l,{key:0},[M,m("button",{type:"primary",onClick:h},"Start")],64)),s(r).length?(o(),a("div",j,[(o(!0),a(l,null,w(s(r),(g,S)=>(o(),a("audio",{key:S,src:y(g),controls:"",class:"my-5 h-10 audio"},null,8,q))),128))])):A("",!0)]))}});const V=I(F,[["__scopeId","data-v-7cd662b7"]]);export{V as default};