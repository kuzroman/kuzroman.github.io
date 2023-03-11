var De=Object.defineProperty;var Te=(s,e,a)=>e in s?De(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var v=(s,e,a)=>(Te(s,typeof e!="symbol"?e+"":e,a),a),ae=(s,e,a)=>{if(!e.has(s))throw TypeError("Cannot "+a)};var V=(s,e,a)=>(ae(s,e,"read from private field"),a?a.call(s):e.get(s)),ne=(s,e,a)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,a)},oe=(s,e,a,i)=>(ae(s,e,"write to private field"),i?i.call(s,a):e.set(s,a),a);import{r as S,l as Ue,q as d,w as F,o as u,a as f,t as g,K as z,u as m,L as A,v as J,x as Q,p as Z,e as o,F as Ae,b as He,c as H,z as P,C as G,M as ee,J as te,h as w,E as le,A as Pe,B as Ye,N as de,O as q,D as Ee,H as ue,T as Ne,f as Ve}from"./entry.47d84b8f.js";import{C as Xe,M as Ke}from"./Meteor.b39d4ffa.js";import{u as Oe}from"./composables.a83625a6.js";const We={key:1},je={__name:"LetterTag",props:{sign:{type:String,default:" "},isKilled:{type:Boolean,default:!1},isShow:{type:Boolean,default:!1}},emits:["letter-tag--show"],setup(s,{emit:e}){const a=s,i=S(null),r=S(null),c=S(null),l=S(null),_=S(null),L=S(Ue().vnode.key),p=d(()=>[{show:a.isShow},{hide:a.isKilled}]),k=()=>{if(!i.value)return;const x=i.value.getBoundingClientRect();r.value=Math.ceil(x.left),l.value=Math.ceil(x.top),c.value=Math.ceil(x.left+i.value.clientWidth),_.value=Math.ceil(x.top+i.value.clientHeight)};return F(()=>a.isShow,()=>{k(),!(!r.value||!l.value)&&e("letter-tag--show",{x1:r.value,x2:c.value,y1:l.value,y2:_.value,id:L.value})}),(x,b)=>s.sign!=="|"?(u(),f("div",{key:0,ref_key:"letterEl",ref:i,class:z(["letter-tag",m(p)])},g(s.sign),3)):(u(),f("br",We))}};class X{constructor(e,a=1,i=!1){this.audio=new Audio(e),this.audio.volume=a,this.audio.loop=i}isPlaying(){return this.audio.duration>0&&!this.audio.paused}play(e=()=>{}){this.audio.play().then(a=>e(a))}pause(){this.audio.pause()}replay(){this.audio.currentTime=0,this.play()}destroy(){this.audio.remove()}}const qe=""+new URL("explode.1718f901.mp3",import.meta.url).href;var R;class Je{constructor(e){ne(this,R,void 0);v(this,"ctx");oe(this,R,document.querySelector(e)),this.ctx=V(this,R).getContext("2d")}drawRect(e,a,i,r){this.ctx.fillStyle=r||"#fff",this.ctx.fillRect(e,a,i,i)}drawRing(e){const{x:a,y:i,size:r,color:c,thick:l,borderColor:_}=e;this.ctx.beginPath(),this.ctx.arc(a,i,r,0,2*Math.PI),c&&(this.ctx.fillStyle=c,this.ctx.fill()),l&&(this.ctx.lineWidth=l),_&&(this.ctx.strokeStyle=_,this.ctx.stroke())}clearCanvas(e=V(this.ctx,R).width,a=V(this.ctx,R).height){this.ctx.clearRect(0,0,e,a)}}R=new WeakMap;class Qe{constructor(e,a,i="default"){v(this,"ground",document.body.offsetHeight);v(this,"gravityX",A(1,5));v(this,"gravityY",A(1,5));v(this,"speed",A(2,5)/10);v(this,"bounceNum",0);v(this,"maxBounceNum",5);v(this,"revert",!1);this.x1=e||0,this.y1=a||0,this.size=A(1,3),this.isStopped=!1,this.direction=Math.random()<.6?1:-1,this.type=i}update(e){this.type==="shrapnel"?this._updateShrapnel():this._updateSeed(e)}_updateSeed(e){if(this._isBarrier(e)&&(this.revert=!0,this.bounceNum+=1),this.gravityY<0&&(this.revert=!1),this._isBounceLimitReached()||this._isUnderGround()){this.isStopped=!0;return}this._move()}_updateShrapnel(){if(this._isUnderGround()){this.isStopped=!0;return}this._fallDown(this.direction,!0)}_isBounceLimitReached(){return this.maxBounceNum<this.bounceNum}_isUnderGround(){return this.ground<this.y1}_isBarrier(e){return e?this.y1>=e.y1&&e.x1<this.x1&&this.x1<e.x2:!1}_move(){this.revert?this._fallUp():this._fallDown()}_fallDown(e,a){this._moveX(e,a),this.y1+=Math.round(this.gravityY),this.gravityY=Math.round((this.gravityY+this.speed)*100)/100}_fallUp(e){this._moveX(e),this.y1-=Math.round(this.gravityY),this.gravityY=Math.round((this.gravityY-1)*100)/100}_moveX(e=1,a=!1){const i=a?A(2,8):7;this.x1+=e*Math.round(this.gravityX/i),this.gravityX=Math.round((this.gravityX+this.speed)*100)/100}}class Ze{constructor(e,a){v(this,"gravityY",10);v(this,"ground",-20);this.x1=e,this.x2=e+6,this.y1=a,this.size=6}}class et{constructor(e,a){v(this,"isShow",!1);v(this,"x1",0);v(this,"x2",0);v(this,"y1",0);v(this,"y2",0);const i=e===" "||e==="|";this.id=a,this.sign=e===" "?"-":e,this.isKilled=i,this.isService=i}static getLifeLetters(e){return e.filter(a=>!a.isKilled)}}const tt={class:"canvas-letters"},st={id:"lettersEl",class:"letters"},it=["width","height"],at={key:0,style:{position:"absolute",top:"0",left:"50%"}},nt={__name:"CanvasAnimation",props:{shooter:{type:Object,default:()=>{}}},emits:["canvas-letters-damage"],setup(s,{emit:e}){const a=s,i=J();let r,c,l;const _=d(()=>i.getters["game/isDebug"]),L=d(()=>i.getters["game/shots"]),p=d(()=>i.getters["game/letters"]),k=d(()=>i.getters["game/barrier"]),x=d(()=>i.getters["game/circles"]),b=d(()=>i.getters["game/meteors"]),D=d(()=>i.getters["game/bullets"]),T=d(()=>i.getters["game/circlesLength"]),Y=d(()=>i.getters["game/meteorsLength"]),E=d(()=>i.getters["game/bulletLength"]),I=d(()=>M.value.length>0||E.value>0||T.value>0||Y.value>0),M=S([]),K=3,O=_.value?0:16;let y,C=0,$=0;const U="Hello, my name is Roman.|I am a Front-End developer with 12 years old experience.|SPA, SSR, SSG, js and Vue ... are my passion.|Check this out some projects on my Work page.|Feel free if you wanna say hello at kuzroman@list.ru then do it!)",N=t=>i.commit("game/setIsSeedsFalling",t),W=t=>i.commit("game/setIsGameFinished",t),j=t=>i.commit("game/setLetters",t),se=t=>i.commit("game/updateLetters",t),_e=t=>i.commit("game/addCircle",t),pe=t=>i.commit("game/addMeteor",t),ve=t=>i.commit("game/addBullet",t),ge=t=>i.commit("game/removeCircle",t),fe=t=>i.commit("game/removeMeteors",t),ye=t=>i.commit("game/removeBullet",t),xe=t=>i.commit("game/showLetter",t),Se=t=>i.commit("game/killLetter",t);F(()=>L.value,()=>{ve(new Ze(a.shooter.x1,a.shooter.y1))}),F(()=>I.value,t=>{t&&ie()});const Le=()=>{const t=Array.from(U,(n,h)=>new et(n,h));j(t)},we=t=>{const n=p.value[t.id];se({...n,...t}),$e(t)},$e=(t,n)=>{for(let h=0;h<K;h++){const B=new Qe(t.x1,t.y1,n);M.value.push(B)}},Be=t=>{if(U.length-1<t)return;const n=p.value[t];xe(n),se(n)},ie=()=>{N(!0);let t=0;clearInterval(l),l=setInterval(()=>{y.clearCanvas(C,$),Be(t++),be(),Ie(),Me(),ke(),I.value||(clearInterval(l),N(!1))},O)};function Ge(t){t.updatePosition(),t.updateMeteorSize(),y.drawRing({x:t.x,y:t.y,size:t.size,color:"#fc0"})}const ke=()=>{for(const t in b.value){const n=b.value[t];if(Ge(n),n.size<.1||n.isInactive){fe(t);continue}Fe(a.shooter,n)}},be=()=>{M.value=M.value.filter(t=>(t.update(k.value),y.drawRect(t.x1,t.y1,t.size),!t.isStopped))},Ie=()=>{for(const t in D.value){const n=D.value[t];if(n.y1-=n.gravityY,y.drawRing({x:n.x1,y:n.y1,size:n.size,color:"#4cb977"}),n.y1<n.ground){ye(t);continue}p.value.length?Ce(n,p.value):W(!0)}},Me=()=>{for(const t in x.value){const n=x.value[t];n.size+=.5,n.thick-=.2,y.drawRing({x:n.x,y:n.y,size:n.size,color:!1,thick:n.thick,borderColor:"#fff"}),n.thick<n.endThick&&ge(t)}},Ce=(t,n)=>{n.forEach((h,B)=>{!h.isKilled&&t.y1<h.y1&&(t.x1<h.x1&&h.x1<t.x2||t.x1<h.x2&&h.x2<t.x2||h.x1<t.x1&&t.x2<h.x2)&&(Se(h),B%2===0&&_e(new Xe(h.x1,h.y1)),Re(h),r.replay())})},Re=t=>{for(let n=0;n<5;n++)pe(new Ke({x:t.x1,y:t.y1}))},Fe=(t,n)=>{t.y1<n.y&&t.x1<n.x&&n.x<t.x2&&(n.setInactive(),e("canvas-letters-damage"))},ze=()=>{y=new Je("#canvas"),Le(),ie()};return Q(()=>{C=window.innerWidth,$=window.innerHeight,r=new X(qe,.3),ze()}),Z(()=>{clearInterval(c),r.destroy()}),(t,n)=>{const h=je;return u(),f("div",tt,[o("div",st,[(u(!0),f(Ae,null,He(m(p),B=>(u(),H(h,{key:B.id,"is-show":B.isShow,"is-killed":B.isKilled,sign:B.sign,"onLetterTag-Show":we},null,8,["is-show","is-killed","sign"]))),128))]),o("canvas",{id:"canvas",width:m(C),height:m($)},null,8,it),m(_)?(u(),f("div",at,[o("div",null,"hasElementsInAnimation: "+g(m(I)),1),o("div",null,"seeds: "+g(m(M).length)+" | bullets: "+g(m(E)),1),o("div",null,"circles: "+g(m(T))+" | meteors: "+g(m(Y)),1),o("div",null,"text "+g(U.length),1)])):P("",!0)])}}};const ot={name:"UIButton",props:{text:{type:String,default:"Button"},disabled:{type:Boolean,default:!1}},data(){return{}},computed:{},methods:{}};function rt(s,e,a,i,r,c){return u(),f("div",{class:z(["ui-button",{disabled:a.disabled}])},g(a.text),3)}const he=G(ot,[["render",rt]]);const ct={name:"ButtonPlay",components:{UIButton:he},props:{},data(){return{barrier:{},texts:{default:"Destroy this text",wait:"Wait for falling ...",again:"Close"}}},computed:{...ee("game",["isSeedsFalling","isGameReady","isGameFinished"]),text(){return this.isGameFinished?this.texts.again:this.isSeedsFalling?this.texts.wait:this.texts.default},stiles(){return{disabled:this.isSeedsFalling,hide:this.isGameReady&&!this.isGameFinished}}},mounted(){this.createBarrier(),this.setBarrier(this.barrier)},methods:{...te("game",["setIsGameReady","setBarrier"]),handleClick(){if(!this.isSeedsFalling){if(this.isGameFinished){this.$emit("button-play--restart",this.barrier);return}setTimeout(()=>{this.setIsGameReady(!0)})}},createBarrier(){const s=this.$el.getBoundingClientRect();this.barrier={x1:s.left,x2:s.left+s.width,y1:s.top}}}},lt=["disabled"];function dt(s,e,a,i,r,c){const l=he;return u(),f("div",{class:z(["button-play",c.stiles]),disabled:s.isSeedsFalling,onClick:e[0]||(e[0]=(..._)=>c.handleClick&&c.handleClick(..._))},[w(l,{text:c.text,disabled:s.isSeedsFalling},null,8,["text","disabled"])],10,lt)}const ut=G(ct,[["render",dt]]);const ht={name:"UILoaderLine",props:{percent:{type:Number,default:50}},data(){return{}},computed:{width(){return`${this.percent}%`}}},mt={class:"ui-loader-line"};function _t(s,e,a,i,r,c){return u(),f("div",mt,[o("div",{class:"loader",style:le({width:c.width})},null,4)])}const me=G(ht,[["render",_t]]);const pt={name:"IconTime"},vt={class:"icon-time",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 50 50",space:"preserve"},gt=o("path",{d:"M7.533,21.646C9.111,13.06,16.633,6.552,25.678,6.552c10.188,0,18.447,8.259,18.447,18.448 c0,10.19-8.259,18.447-18.447,18.447c-7.167,0-13.378-4.084-16.433-10.053h3.886c2.708,4.039,7.317,6.699,12.547,6.699 c8.336,0,15.094-6.758,15.094-15.094S34.014,9.907,25.678,9.907c-7.184,0-13.195,5.018-14.72,11.739H7.533L7.533,21.646z M24.838,25.587l8.74,5.151l0.851-1.444l-7.913-4.706V13.314h-1.678V25.587z M8.906,28.354l5.031-6.708H3.875L8.906,28.354z M7.533,21.646C9.111,13.06,16.633,6.552,25.678,6.552c10.188,0,18.447,8.259,18.447,18.448c0,10.19-8.259,18.447-18.447,18.447 c-7.167,0-13.378-4.084-16.433-10.053h3.886c2.708,4.039,7.317,6.699,12.547,6.699c8.336,0,15.094-6.758,15.094-15.094 S34.014,9.907,25.678,9.907c-7.184,0-13.195,5.018-14.72,11.739H7.533L7.533,21.646z M24.838,25.587l8.74,5.151l0.851-1.444 l-7.913-4.706V13.314h-1.678V25.587z M8.906,28.354l5.031-6.708H3.875L8.906,28.354z",fill:"#6a6a6a"},null,-1),ft=[gt];function yt(s,e,a,i,r,c){return u(),f("svg",vt,ft)}const xt=G(pt,[["render",yt]]);const St={name:"IconShield"},Lt=s=>(Pe("data-v-4739967d"),s=s(),Ye(),s),wt={class:"icon-shield",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 50 50",space:"preserve"},$t=Lt(()=>o("path",{d:"M41.575,12.596c-3.887-1.112-6.776-2.975-9.326-4.616C29.669,6.317,27.442,4.882,25,4.882 c-2.441,0-4.668,1.435-7.248,3.094c-2.549,1.645-5.438,3.507-9.325,4.619l-1.324,0.378v1.376c0,0.691,0.033,5.652,0.086,6.479 c0.109,1.667,0.339,3.317,0.684,4.905c3.292,15.173,15.951,20.082,16.488,20.282L25,46.256l0.642-0.24 c0.536-0.2,13.193-5.105,16.486-20.282c0.345-1.588,0.575-3.237,0.684-4.905c0.055-0.825,0.086-5.787,0.086-6.479v-1.376 L41.575,12.596z M25,44.308V25.345H9.658C9.343,23.9,9.119,22.358,9.012,20.71c-0.049-0.75-0.084-5.567-0.084-6.36 C16.964,12.051,21.067,6.709,25,6.709V20.71v4.635h15.346C37.226,39.73,25,44.308,25,44.308z",fill:"#6a6a6a"},null,-1)),Bt=[$t];function Gt(s,e,a,i,r,c){return u(),f("svg",wt,Bt)}const kt=G(St,[["render",Gt],["__scopeId","data-v-4739967d"]]);const re=100;let ce;const bt={name:"StatusBar",components:{UI_Loader_line:me,UILink2Move:de,IconTime:xt,IconShield:kt},data(){return{health:re,isDebug:!1}},watch:{isGameStart(){this.runTimer()},damage(s){this.health=re-s},health(s){s<=0&&this.setIsGameFinished(!0)}},computed:{...ee("game",["isGameReady","isGameStart","isGameFinished","score","shots","letters","killedLetters","damage","timeLeft"])},methods:{...te("game",["setIsGameFinished","setIsLeaderBoardOpened","setScore","decreaseTimeLeft"]),runTimer(){ce=setInterval(()=>{this.decreaseTimeLeft(),(this.timeLeft<=0||this.isGameFinished)&&(this.setIsGameFinished(!0),clearInterval(ce))},1e3)},openLeaderBoard(){this.setIsLeaderBoardOpened(!0)}}},It={class:"status-bar--top"},Mt={class:"score"},Ct={class:"status-bar--right"},Rt={class:"time"};function Ft(s,e,a,i,r,c){const l=q("IconTime"),_=q("IconShield"),L=me,p=de;return u(),f("div",{class:z(["status-bar",{active:s.isGameReady||r.isDebug}])},[o("div",It,[o("div",Mt,g(s.killedLetters.length)+" killed",1),o("div",Ct,[w(l),w(_),o("div",Rt,g(s.timeLeft)+"s",1)])]),w(L,{class:"loader-Line",percent:r.health},null,8,["percent"]),w(p,{class:"leaders",text:"leaderboard",onClick:c.openLeaderBoard},null,8,["onClick"])],2)}const zt=G(bt,[["render",Ft]]),Dt=""+new URL("damage.f1e615a0.mp3",import.meta.url).href;const Tt={__name:"RobotShooter",props:{position:{type:Object,default:{}}},setup(s,{expose:e}){const a=s,i=J();let r;const c=S(!1),l=S(null),_=d(()=>i.getters["game/isGameReady"]),L=d(()=>i.getters["game/isGameFinished"]),p=d(()=>i.getters["game/damage"]),k=d(()=>({left:a.position.x1+"px"})),x=d(()=>({active:_.value&&!L.value,damage:c.value})),b=()=>{c.value=!0,setTimeout(()=>{c.value=!1},300)};return F(()=>p.value,()=>{b(),r.replay()}),Q(()=>{r=new X(Dt,.3)}),Z(()=>{r.destroy()}),e({shooter:l}),(D,T)=>(u(),f("div",{ref_key:"shooter",ref:l,class:z(["robot-shooter",m(x)]),style:le(m(k))},null,6))}};const Ut={},At={class:"ui-dashed-list"};function Ht(s,e){return u(),f("div",At,[Ee(s.$slots,"default")])}const Pt=G(Ut,[["render",Ht]]);const Yt={name:"ScoreBoard",components:{DashedList:Pt},data(){return{isDebug:!1}},computed:{...ee("game",["isGameFinished","timeLeft","damage","shots","letters","killedLetters","aliveLetters","score"]),score(){if(this.aliveLetters.length,!this.killedLetters.length)return 0;const s=Math.ceil(this.killedLetters.length*1e4/(this.aliveLetters.length+this.shots)),e=this.timeLeft*10-this.damage*5;return s+e}},watch:{score(s){this.setScore(s)}},methods:{...te("game",["setScore","setIsLeaderBoardOpened"]),openLeaderBoard(){this.setIsLeaderBoardOpened(!0)}}},Et=o("div",{class:"hooray"},"Hooray!",-1),Nt={class:"result"},Vt=o("div",null,"Time left",-1),Xt={class:"result"},Kt=o("div",null,"Shots",-1),Ot={class:"result"},Wt=o("div",null,"Goals",-1),jt={class:"result"},qt=o("div",null,"Life",-1),Jt={class:"result best"},Qt=o("div",null,"Your best score",-1);function Zt(s,e,a,i,r,c){const l=q("DashedList");return u(),f("div",{class:z(["score-board",{active:s.isGameFinished||r.isDebug}])},[o("h3",null,g(c.score)+" points",1),Et,w(l,null,{default:ue(()=>[o("div",Nt,[Vt,o("div",null,g(s.timeLeft),1)]),o("div",Xt,[Kt,o("div",null,g(s.shots),1)]),o("div",Ot,[Wt,o("div",null,g(s.killedLetters.length),1)]),o("div",jt,[qt,o("div",null,g(100-s.damage),1)]),o("div",Jt,[Qt,o("div",null,g(c.score),1)])]),_:1})],2)}const es=G(Yt,[["render",Zt]]),ts=""+new URL("shoot.6b00b3bd.mp3",import.meta.url).href,ss=""+new URL("backgroundGame.c17ea688.mp3",import.meta.url).href;const is={__name:"MainGame",setup(s){const e=J();let a,i;const r=S({}),c=S(0),l=S(null),_=d(()=>e.getters["game/isGameStart"]),L=d(()=>e.getters["game/isGameFinished"]),p=d(()=>e.getters["game/isGameReady"]),k=d(()=>e.getters["app/isPageAnimationFinished"]),x=y=>e.commit("game/setIsGameStart",y),b=()=>e.commit("game/resetStateGame"),D=()=>e.commit("game/increaseShoots"),T=()=>e.commit("game/increaseDamage"),Y=()=>e.commit("leaderBoard/resetStateLeaderBoard"),E=()=>{c.value+=1},I=()=>{Y(),b(),E(),i.destroy(),a.destroy()},M=()=>{!p.value||L.value||(_.value||x(!0),D(),a.replay())},K=y=>{var $;if(!(($=l==null?void 0:l.value)!=null&&$.shooter))return;const C=l.value.shooter;r.value={x1:y.clientX,y1:C.getBoundingClientRect().top,x2:y.clientX+C.offsetWidth}},O=()=>{let y;window.addEventListener("resize",()=>{clearTimeout(y),y=setTimeout(()=>{I()},300)})};return Q(()=>{a=new X(ts,.3),i=new X(ss,.5,!0),O()}),Z(()=>{I()}),F(()=>p.value,()=>{i.replay()}),F(()=>L.value,()=>{i.pause()}),(y,C)=>{const $=nt,U=ut,N=zt,W=Tt,j=es;return u(),f("div",{key:m(c),class:"main-game",onClick:M,onMousemove:K},[w($,{shooter:m(r),onCanvasLettersDamage:T},null,8,["shooter"]),w(Ne,null,{default:ue(()=>[m(k)?(u(),H(U,{key:0,"onButtonPlay-Restart":I})):P("",!0)]),_:1}),m(p)?(u(),H(N,{key:0})):P("",!0),m(p)?(u(),H(W,{key:1,ref_key:"shooter",ref:l,position:m(r)},null,8,["position"])):P("",!0),m(L)?(u(),H(j,{key:2})):P("",!0)],32)}}},as={class:"page-game"},ns=o("div",{class:"stars-box"},[o("div",{id:"stars"}),o("div",{id:"stars2"}),o("div",{id:"stars3"})],-1),ds=Ve({__name:"index",setup(s){return Oe({title:"Hi! Nice to meet you =)"}),(e,a)=>{const i=is;return u(),f("div",as,[w(i),ns])}}});export{ds as default};