import{H as x,k as c,r as p,o,a as l,e as s,t as a,u as t,v as _,F as d,b as u,I as C}from"./entry.3c9de8ab.js";import{w as I}from"./works.7def9683.js";const w={class:"portfolio-id"},M={class:"scroll-y"},T={class:"header"},D={class:"h1"},L={key:0},N={key:1},V={class:"gallery m-12"},j=["src"],B={class:"gallery__horizon mt-4"},H=["onClick"],$=["src"],F={class:"description"},z={key:0,class:"link"},A=["href"],E=["innerHTML"],R={class:"skills"},S={class:"skill"},K={__name:"[id]",setup(W){const v=x(),e=c(()=>I[v.params.id]),g=c(()=>e.value.imageDirectory),m=c(()=>[...Array(e.value.numberImg)].map((i,k)=>({src:`/img/portfolio/gallery/${g.value}/${k+1}.jpg`}))),y=p(null),h=p(null),f=i=>{h.value[i].scrollIntoView({behavior:"smooth",block:"nearest"})},b=c(()=>e.value.link.replace(/https:/ig,"").replace(/\//ig,""));return(i,k)=>(o(),l("div",w,[s("div",M,[s("div",T,[s("h1",D,a(t(e).nameCompany),1),t(e).nameTitle?(o(),l("div",L,a(t(e).nameTitle),1)):_("",!0),t(e).descCompany?(o(),l("div",N,a(t(e).descCompany),1)):_("",!0)]),s("div",V,[s("div",{class:"gallery__scroll",ref_key:"galleryMain",ref:y},[(o(!0),l(d,null,u(t(m),(r,n)=>(o(),l("div",{ref_for:!0,ref_key:"galleryImgs",ref:h,key:n},[s("img",{class:"mx-auto border border-none",src:r.src,alt:""},null,8,j)]))),128))],512),s("div",B,[(o(!0),l(d,null,u(t(m),(r,n)=>(o(),l("div",{class:"inline-block w-2/12 h-full",key:n,onClick:q=>f(n)},[s("img",{src:r.src,alt:""},null,8,$)],8,H))),128))])]),s("div",F,[t(e).link?(o(),l("div",z,[C(" Watch project: "),s("a",{href:t(e).link,target:"_blank"},a(t(b)),9,A)])):_("",!0),s("div",{class:"desc",innerHTML:t(e).descDeal},null,8,E),s("div",R,[(o(!0),l(d,null,u(t(e).skills,r=>(o(),l("div",S,a(r),1))),256))])])])]))}};export{K as default};
