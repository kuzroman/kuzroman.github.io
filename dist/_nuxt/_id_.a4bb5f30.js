import{u as x}from"./composables.19f28322.js";import{N as C,p as i,r as k,o,a as l,e as s,t as a,u as t,J as _,F as d,b as u,O as w}from"./entry.cd87997d.js";import{w as I}from"./works.48111cac.js";const L={class:"portfolio-id"},M={class:"scroll-y"},N={class:"header"},T={class:"h1"},j={key:0},D={key:1},V={class:"gallery mx-0 m-12"},B=["src"],H={class:"gallery__horizon mt-4"},$=["onClick"],F=["src"],z={class:"description"},A={key:0,class:"link"},E=["href"],J=["innerHTML"],O={class:"skills"},R={class:"skill"},Q={__name:"[id]",setup(S){x({title:"some latest job"});const g=C(),e=i(()=>I[g.params.id]),v=i(()=>e.value.imageDirectory),m=i(()=>[...Array(e.value.numberImg)].map((c,p)=>({src:`/img/portfolio/gallery/${v.value}/${p+1}.jpg`}))),y=k(null),h=k(null),f=c=>{h.value[c].scrollIntoView({behavior:"smooth",block:"nearest"})},b=i(()=>e.value.link.replace(/https:/ig,"").replace(/\//ig,""));return(c,p)=>(o(),l("div",L,[s("div",M,[s("div",N,[s("h1",T,a(t(e).nameCompany),1),t(e).nameTitle?(o(),l("div",j,a(t(e).nameTitle),1)):_("",!0),t(e).descCompany?(o(),l("div",D,a(t(e).descCompany),1)):_("",!0)]),s("div",V,[s("div",{class:"gallery__scroll",ref_key:"galleryMain",ref:y},[(o(!0),l(d,null,u(t(m),(r,n)=>(o(),l("div",{ref_for:!0,ref_key:"galleryImgs",ref:h,key:n},[s("img",{class:"mx-auto border border-none",src:r.src,alt:""},null,8,B)]))),128))],512),s("div",H,[(o(!0),l(d,null,u(t(m),(r,n)=>(o(),l("div",{class:"inline-block w-2/12 h-full",key:n,onClick:q=>f(n)},[s("img",{src:r.src,alt:""},null,8,F)],8,$))),128))])]),s("div",z,[t(e).link?(o(),l("div",A,[w(" Link to project: "),s("a",{href:t(e).link,target:"_blank"},a(t(b)),9,E)])):_("",!0),s("div",{class:"desc",innerHTML:t(e).descDeal},null,8,J),s("div",O,[(o(!0),l(d,null,u(t(e).skills,r=>(o(),l("div",R,a(r),1))),256))])])])]))}};export{Q as default};