import{f as x,V as C,k as i,r as h,o,a as r,e as t,t as n,u as s,m as _,F as d,b as u,M}from"./entry.9df884fa.js";import{u as w}from"./composables.72322aa9.js";import{w as I}from"./works.66a01dd7.js";const L={class:"portfolio-id"},T={class:"header"},V={class:"h1"},j={key:0},D={key:1},N={class:"gallery mx-0 m-12"},B=["src"],H={class:"gallery__horizon mt-4"},$=["onClick"],F=["src"],z={class:"description"},A={key:0,class:"link"},E=["href"],R=["innerHTML"],S={class:"skills"},P=x({__name:"[id]",setup(q){w({title:"some latest job"});const g=C(),e=i(()=>I[g.params.id]),y=i(()=>e.value.imageDirectory),m=i(()=>[...Array(e.value.numberImg)].map((c,p)=>({src:`/img/portfolio/gallery/${y.value}/${p+1}.jpg`}))),v=h(),k=h(),f=c=>{k.value[c].scrollIntoView({behavior:"smooth",block:"nearest"})},b=i(()=>e.value.link.replace(/https:/gi,"").replace(/\//gi,""));return(c,p)=>(o(),r("div",L,[t("div",T,[t("h1",V,n(s(e).nameCompany),1),s(e).nameTitle?(o(),r("div",j,n(s(e).nameTitle),1)):_("",!0),s(e).descCompany?(o(),r("div",D,n(s(e).descCompany),1)):_("",!0)]),t("div",N,[t("div",{ref_key:"galleryMain",ref:v,class:"gallery__scroll"},[(o(!0),r(d,null,u(s(m),(a,l)=>(o(),r("div",{ref_for:!0,ref_key:"galleryImgs",ref:k,key:l},[t("img",{class:"mx-auto border border-none",src:a.src,alt:""},null,8,B)]))),128))],512),t("div",H,[(o(!0),r(d,null,u(s(m),(a,l)=>(o(),r("div",{key:l,class:"inline-block w-2/12 h-full",onClick:G=>f(l)},[t("img",{src:a.src,alt:""},null,8,F)],8,$))),128))])]),t("div",z,[s(e).link?(o(),r("div",A,[M(" Link to project: "),t("a",{href:s(e).link,target:"_blank"},n(s(b)),9,E)])):_("",!0),t("div",{class:"desc",innerHTML:s(e).descDeal},null,8,R),t("div",S,[(o(!0),r(d,null,u(s(e).skills,(a,l)=>(o(),r("div",{key:l,class:"skill"},n(a),1))),128))])])]))}});export{P as default};