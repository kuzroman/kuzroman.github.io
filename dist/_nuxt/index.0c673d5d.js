var xe=Object.defineProperty;var Se=(t,e,s)=>e in t?xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>(Se(t,typeof e!="symbol"?e+"":e,s),s),ie=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var H=(t,e,s)=>(ie(t,e,"read from private field"),s?s.call(t):e.get(t)),oe=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},re=(t,e,s,n)=>(ie(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);import{r as c,j as Le,k as x,w as C,o as h,a as p,t as y,l as T,u as g,m as we,e as r,p as J,q as Q,s as Z,F as $e,b as be,c as le,v as Ge,x as I,y as ee,z as te,f as S,A as he,B as Be,C as Ie,D as _e,E as q,G as ke,H as Me}from"./entry.3b8c40ce.js";import{u as De}from"./composables.885a117d.js";const Re={key:1},Ce={__name:"LetterTag",props:{sign:{type:String,default:" "},isKilled:{type:Boolean,default:!1},isShow:{type:Boolean,default:!1}},emits:["letter-tag--show"],setup(t,{emit:e}){const s=t,n=c(null),i=c(null),o=c(null),l=c(null),u=c(null),_=c(Le().vnode.key),L=x(()=>[{show:s.isShow},{hide:s.isKilled}]),$=()=>{if(!n.value)return;let f=n.value.getBoundingClientRect();i.value=Math.ceil(f.left),l.value=Math.ceil(f.top),o.value=Math.ceil(f.left+n.value.clientWidth),u.value=Math.ceil(f.top+n.value.clientHeight)};return C(()=>s.isShow,()=>{$(),!(!i.value||!l.value)&&e("letter-tag--show",{x1:i.value,x2:o.value,y1:l.value,y2:u.value,id:_.value})}),(f,b)=>t.sign!=="|"?(h(),p("div",{key:0,class:T(["letter-tag",g(L)]),ref_key:"letterEl",ref:n},y(t.sign),3)):(h(),p("br",Re))}};const Fe={class:"debug-input"},Te={class:"left"},ze={class:"right"},Ue={__name:"DebugInput",props:{isDebug:{type:Boolean,default:!1},seeds:{type:Array,default:[]},bullets:{type:Array,default:[]},letters:{type:Array,default:[]},shooter:{type:Object,default:{}}},emits:["debug-input--pause"],setup(t,{emit:e}){const s=t,n=c(!1),i=o=>{const l=o||"Space";document.body.addEventListener("keydown",u=>{u.code===l&&(n.value=!n.value,e("debug-input--pause",n.value))}),document.body.focus()};return we(()=>{s.isDebug&&i("Space")}),(o,l)=>(h(),p("div",Fe,[r("pre",Te,y([...t.seeds,...t.bullets]),1),r("pre",ze,y(t.letters),1)]))}};var k;class Pe{constructor(e){oe(this,k,void 0);m(this,"ctx");re(this,k,document.querySelector(e)),this.ctx=H(this,k).getContext("2d")}drawRect(e,s,n,i){this.ctx.fillStyle=i||"#fff",this.ctx.fillRect(e,s,n,n)}drawRing(e,s,n,i){this.ctx.beginPath(),this.ctx.arc(e,s,n,0,2*Math.PI),this.ctx.fillStyle=i,this.ctx.fill()}clearCanvas(e=H(this.ctx,k).width,s=H(this.ctx,k).height){this.ctx.clearRect(0,0,e,s)}}k=new WeakMap;const F=(t,e)=>Math.floor(Math.random()*(e-t+1)+t);class He{constructor(e,s,n="default"){m(this,"ground",document.body.offsetHeight);m(this,"gravityX",F(1,5));m(this,"gravityY",F(1,5));m(this,"speed",F(2,5)/10);m(this,"bounceNum",0);m(this,"maxBounceNum",5);m(this,"revert",!1);this.x1=e||0,this.y1=s||0,this.size=F(1,3),this.isStopped=!1,this.direction=Math.random()<.6?1:-1,this.type=n}update(e){this.type==="shrapnel"?this._updateShrapnel():this._updateSeed(e)}_updateSeed(e){if(this._isBarrier(e)&&(this.revert=!0,this.bounceNum+=1),this.gravityY<0&&(this.revert=!1),this._isBounceLimitReached()||this._isUnderGround()){this.isStopped=!0;return}this._move()}_updateShrapnel(){if(this._isUnderGround()){this.isStopped=!0;return}this._fallDown(this.direction,!0)}_isBounceLimitReached(){return this.maxBounceNum<this.bounceNum}_isUnderGround(){return this.ground<this.y1}_isBarrier(e){return e?this.y1>=e.y1&&e.x1<this.x1&&this.x1<e.x2:!1}_move(){this.revert?this._fallUp():this._fallDown()}_fallDown(e,s){this._moveX(e,s),this.y1+=Math.round(this.gravityY),this.gravityY=Math.round((this.gravityY+this.speed)*100)/100}_fallUp(e){this._moveX(e),this.y1-=Math.round(this.gravityY),this.gravityY=Math.round((this.gravityY-1)*100)/100}_moveX(e=1,s=!1){const n=s?F(2,8):7;this.x1+=e*Math.round(this.gravityX/n),this.gravityX=Math.round((this.gravityX+this.speed)*100)/100}}class Ye{constructor(e,s){m(this,"gravityY",10);m(this,"ground",-20);this.x1=e,this.x2=e+6,this.y1=s,this.size=6,this.isStopped=!1}update(){if(this._isOverScreen()){this.isStopped=!0;return}this._move()}_move(){this._moveY()}_moveY(){this.y1-=Math.round(this.gravityY)}_isOverScreen(){return this.y1<this.ground}}class ce{constructor(e,s){m(this,"isShow",!1);m(this,"x1",0);m(this,"x2",0);m(this,"y1",0);m(this,"y2",0);const n=e===" "||e==="|";this.id=s,this.sign=e===" "?"-":e,this.isKilled=n,this.isService=n}static getLifeLetters(e){return e.filter(s=>!s.isKilled)}}class Y{constructor(e,s=1,n=!1){this.audio=new Audio(e),this.audio.volume=s,this.audio.loop=n}isPlaying(){return this.audio.duration>0&&!this.audio.paused}play(e=()=>{}){this.audio.play().then(s=>e(s))}pause(){this.audio.pause()}replay(){this.audio.currentTime=0,this.play()}destroy(){this.audio.remove()}}const Ae=""+new URL("explode.1718f901.mp3",import.meta.url).href;const Oe={class:"canvas-letters"},Ee={class:"letters",id:"lettersEl"},Ne=["width","height"],Ve={__name:"CanvasLetters",props:{isDebug:{type:Boolean,default:!1},barrier:{type:Object,default:null},shooter:{type:Object,default:()=>{}}},emits:["canvas-letters-damage"],setup(t,{emit:e}){const s=t,n=J();let i,o,l;const u=c([]),_=c([]),L=c(3),$=c(16),f=c(!1),b=c(null),M=c(0),D=c(0),A=x(()=>n.getters["app/isPageLoaderHide"]),O=x(()=>n.getters["game/shots"]),w=x(()=>n.getters["game/letters"]),E=x(()=>s.isDebug?"Hello":"Hello, my name is Roman.|I am a Front-End developer with 12 years old experience.|SPA, SSR, SSG, js and Vue ... are my passion.|Check this out some projects on my Work page.|Feel free if you wanna say hello at kuzroman@list.ru then do it!)"),z=a=>n.commit("game/setIsSeedsFall",a),N=a=>n.commit("game/setIsGameFinished",a),V=a=>n.commit("game/setLetters",a),G=a=>n.commit("game/updateLetters",a),B=a=>n.commit("game/showLetter",a),R=a=>n.commit("game/killLetter",a);C(()=>A.value,()=>{ne()}),C(()=>O.value,()=>{let a=new Ye(s.shooter.x1,s.shooter.y1);_.value.push(a),ae()});const K=()=>{const a=Array.from(E.value,(d,v)=>new ce(d,v));V(a)},X=()=>{let a=0,d;o=setInterval(()=>{a<=w.value.length-1?(d=w.value[a],B(d),G(d)):clearInterval(o),a++},$.value)},j=a=>{let d=w.value[a.id];G({...d,...a}),U(a)},U=(a,d)=>{for(let v=0;v<L.value;v++){let W=new He(a.x1,a.y1,d);u.value.push(W)}},ae=()=>{z(!0),clearInterval(l),l=setInterval(()=>{f.value||(b.value.clearCanvas(M.value,D.value),pe(),ve(),!u.value.length&&!_.value.length&&(clearInterval(l),z(!1)))},$.value)},pe=()=>{u.value=u.value.filter(a=>(a.update(s.barrier),a.type==="shrapnel"&&fe(s.shooter,a),b.value.drawRect(a.x1,a.y1,a.size),!a.isStopped))},ve=()=>{_.value=_.value.filter(a=>{a.update();let d=ce.getLifeLetters(w.value);return d.length?ge(a,d):N(!0),b.value.drawRing(a.x1,a.y1,a.size,"#fc0"),!a.isStopped})},ge=(a,d)=>{d.forEach(v=>{a.y1<v.y1&&(a.x1<v.x1&&v.x1<a.x2||a.x1<v.x2&&v.x2<a.x2||v.x1<a.x1&&a.x2<v.x2)&&(R(v),U({x1:a.x1,y1:a.y1},"shrapnel"),i.replay())})},fe=(a,d)=>{a.y1<d.y1&&a.x1<d.x1&&d.x1<a.x2&&(d.isStopped=!0,e("canvas-letters-damage"))},ye=a=>{f.value=a},ne=()=>{b.value=new Pe("#canvas"),K(),X(),ae()};return Q(()=>{M.value=window.innerWidth,D.value=window.innerHeight,i=new Y(Ae,.3),ne()}),Z(()=>{clearInterval(o),i.destroy()}),(a,d)=>{const v=Ce,W=Ue;return h(),p("div",Oe,[r("div",Ee,[(h(!0),p($e,null,be(g(w),P=>(h(),le(v,{key:P.id,isShow:P.isShow,isKilled:P.isKilled,sign:P.sign,"onLetterTag-Show":j},null,8,["isShow","isKilled","sign"]))),128))]),r("canvas",{id:"canvas",width:g(M),height:g(D)},null,8,Ne),t.isDebug?(h(),le(W,{key:0,isDebug:t.isDebug,seeds:g(u),bullets:g(_),letters:g(w),shooter:t.shooter,"onDebugInput-Pause":ye},null,8,["isDebug","seeds","bullets","letters","shooter"])):Ge("",!0)])}}};const Ke={name:"UIButton",props:{text:{type:String,default:"Button"},disabled:{type:Boolean,default:!1}},data(){return{}},computed:{},methods:{}},Xe={class:"ui-button"};function je(t,e,s,n,i,o){return h(),p("div",Xe,y(s.text),1)}const se=I(Ke,[["render",je]]);const We={name:"ButtonPlay",components:{UIButton:se},props:{},data(){return{barrier:{},texts:{default:"Destroy this text",wait:"Wait for falling ...",again:"Close"}}},computed:{...ee("game",["isSeedsFall","isGameReady","isGameFinished"]),text(){return this.isGameFinished?this.texts.again:this.isSeedsFall?this.texts.wait:this.texts.default},disabled(){return this.isSeedsFall},stiles(){return{disabled:this.disabled,hide:this.isGameReady&&!this.isGameFinished}}},methods:{...te("game",["setIsGameReady"]),handleClick(){if(!this.isSeedsFall){if(this.isGameFinished){this.$emit("button-play--restart",this.barrier);return}setTimeout(()=>{this.setIsGameReady(!0)})}},createBarrier(){let t=this.$el.getBoundingClientRect();this.barrier={x1:t.left,x2:t.left+t.width,y1:t.top}}},mounted(){this.createBarrier(),this.$emit("button-play--mounted",this.barrier)}},qe=["disabled"];function Je(t,e,s,n,i,o){const l=se;return h(),p("div",{class:T(["button-play",o.stiles]),onClick:e[0]||(e[0]=(...u)=>o.handleClick&&o.handleClick(...u)),disabled:o.disabled},[S(l,{text:o.text},null,8,["text"])],10,qe)}const Qe=I(We,[["render",Je]]);const Ze={name:"UILoaderLine",props:{percent:{type:Number,default:50}},data(){return{}},computed:{width(){return`${this.percent}%`}}},et={class:"ui-loader-line"};function tt(t,e,s,n,i,o){return h(),p("div",et,[r("div",{class:"loader",style:he({width:o.width})},null,4)])}const me=I(Ze,[["render",tt]]);const st={name:"IconTime"},at={class:"icon-time",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 50 50",space:"preserve"},nt=r("path",{d:"M7.533,21.646C9.111,13.06,16.633,6.552,25.678,6.552c10.188,0,18.447,8.259,18.447,18.448 c0,10.19-8.259,18.447-18.447,18.447c-7.167,0-13.378-4.084-16.433-10.053h3.886c2.708,4.039,7.317,6.699,12.547,6.699 c8.336,0,15.094-6.758,15.094-15.094S34.014,9.907,25.678,9.907c-7.184,0-13.195,5.018-14.72,11.739H7.533L7.533,21.646z M24.838,25.587l8.74,5.151l0.851-1.444l-7.913-4.706V13.314h-1.678V25.587z M8.906,28.354l5.031-6.708H3.875L8.906,28.354z M7.533,21.646C9.111,13.06,16.633,6.552,25.678,6.552c10.188,0,18.447,8.259,18.447,18.448c0,10.19-8.259,18.447-18.447,18.447 c-7.167,0-13.378-4.084-16.433-10.053h3.886c2.708,4.039,7.317,6.699,12.547,6.699c8.336,0,15.094-6.758,15.094-15.094 S34.014,9.907,25.678,9.907c-7.184,0-13.195,5.018-14.72,11.739H7.533L7.533,21.646z M24.838,25.587l8.74,5.151l0.851-1.444 l-7.913-4.706V13.314h-1.678V25.587z M8.906,28.354l5.031-6.708H3.875L8.906,28.354z",fill:"#6a6a6a"},null,-1),it=[nt];function ot(t,e,s,n,i,o){return h(),p("svg",at,it)}const rt=I(st,[["render",ot]]);const lt={name:"IconShield"},ct=t=>(Be("data-v-c9eb4c77"),t=t(),Ie(),t),dt={class:"icon-shield",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 50 50",space:"preserve"},ut=ct(()=>r("path",{d:"M41.575,12.596c-3.887-1.112-6.776-2.975-9.326-4.616C29.669,6.317,27.442,4.882,25,4.882 c-2.441,0-4.668,1.435-7.248,3.094c-2.549,1.645-5.438,3.507-9.325,4.619l-1.324,0.378v1.376c0,0.691,0.033,5.652,0.086,6.479 c0.109,1.667,0.339,3.317,0.684,4.905c3.292,15.173,15.951,20.082,16.488,20.282L25,46.256l0.642-0.24 c0.536-0.2,13.193-5.105,16.486-20.282c0.345-1.588,0.575-3.237,0.684-4.905c0.055-0.825,0.086-5.787,0.086-6.479v-1.376 L41.575,12.596z M25,44.308V25.345H9.658C9.343,23.9,9.119,22.358,9.012,20.71c-0.049-0.75-0.084-5.567-0.084-6.36 C16.964,12.051,21.067,6.709,25,6.709V20.71v4.635h15.346C37.226,39.73,25,44.308,25,44.308z",fill:"#6a6a6a"},null,-1)),ht=[ut];function _t(t,e,s,n,i,o){return h(),p("svg",dt,ht)}const mt=I(lt,[["render",_t],["__scopeId","data-v-c9eb4c77"]]);const de=100;let ue;const pt={name:"StatusBar",components:{UI_Loader_line:me,UILink2Move:_e,IconTime:rt,IconShield:mt},data(){return{health:de,isDebug:!1}},watch:{isGameStart(){this.runTimer()},damage(t){this.health=de-t},health(t){t<=0&&this.setIsGameFinished(!0)}},computed:{...ee("game",["isGameReady","isGameStart","isGameFinished","score","shots","letters","killedLetters","damage","timeLeft"])},methods:{...te("game",["setIsGameFinished","setIsLeaderBoardOpened","setScore","decreaseTimeLeft"]),runTimer(){ue=setInterval(()=>{this.decreaseTimeLeft(),(this.timeLeft<=0||this.isGameFinished)&&(this.setIsGameFinished(!0),clearInterval(ue))},1e3)},openLeaderBoard(){this.setIsLeaderBoardOpened(!0)}}},vt={class:"status-bar--top"},gt={class:"score"},ft={class:"status-bar--right"},yt={class:"time"};function xt(t,e,s,n,i,o){const l=q("IconTime"),u=q("IconShield"),_=me,L=_e;return h(),p("div",{class:T(["status-bar",{active:t.isGameReady||i.isDebug}])},[r("div",vt,[r("div",gt,y(t.killedLetters.length)+" killed",1),r("div",ft,[S(l),S(u),r("div",yt,y(t.timeLeft)+"s",1)])]),S(_,{class:"loader-Line",percent:i.health},null,8,["percent"]),S(L,{class:"leaders",text:"leaderboard",onClick:o.openLeaderBoard},null,8,["onClick"])],2)}const St=I(pt,[["render",xt]]),Lt=""+new URL("damage.f1e615a0.mp3",import.meta.url).href;const wt={__name:"RobotShooter",props:{position:{type:Object,default:{}}},setup(t,{expose:e}){const s=t,n=J();let i;const o=c(!1),l=c(null),u=x(()=>n.getters["game/isGameReady"]),_=x(()=>n.getters["game/isGameFinished"]),L=x(()=>n.getters["game/damage"]),$=x(()=>({left:s.position.x1+"px"})),f=x(()=>({active:u.value&&!_.value,damage:o.value})),b=()=>{o.value=!0,setTimeout(()=>{o.value=!1},300)};return C(()=>L.value,()=>{b(),i.replay()}),Q(()=>{i=new Y(Lt,.3)}),Z(()=>{i.destroy()}),e({shooter:l}),(M,D)=>(h(),p("div",{class:T(["robot-shooter",g(f)]),style:he(g($)),ref_key:"shooter",ref:l},null,6))}};const $t={},bt={class:"ui-dashed-list"};function Gt(t,e,s,n,i,o){return h(),p("div",bt,[ke(t.$slots,"default")])}const Bt=I($t,[["render",Gt]]);const It={name:"ScoreBoard",components:{UIButton:se,DashedList:Bt},data(){return{isDebug:!1}},watch:{score(t){this.setScore(t)}},computed:{...ee("game",["isGameFinished","timeLeft","damage","shots","letters","killedLetters","aliveLetters","score"]),score(){if(this.aliveLetters.length,!this.killedLetters.length)return 0;const t=Math.ceil(this.killedLetters.length*1e4/(this.aliveLetters.length+this.shots)),e=this.timeLeft*10-this.damage*5;return t+e}},methods:{...te("game",["setScore","setIsLeaderBoardOpened"]),openLeaderBoard(){this.setIsLeaderBoardOpened(!0)}}},kt=r("div",{class:"hooray"},"Hooray!",-1),Mt={class:"result"},Dt=r("div",null,"Time left",-1),Rt={class:"result"},Ct=r("div",null,"Shots",-1),Ft={class:"result"},Tt=r("div",null,"Goals",-1),zt={class:"result"},Ut=r("div",null,"Life",-1),Pt={class:"result best"},Ht=r("div",null,"Your best score",-1);function Yt(t,e,s,n,i,o){const l=q("DashedList");return h(),p("div",{class:T(["score-board",{active:t.isGameFinished||i.isDebug}])},[r("h3",null,y(o.score)+" points",1),kt,S(l,null,{default:Me(()=>[r("div",Mt,[Dt,r("div",null,y(t.timeLeft),1)]),r("div",Rt,[Ct,r("div",null,y(t.shots),1)]),r("div",Ft,[Tt,r("div",null,y(t.killedLetters.length),1)]),r("div",zt,[Ut,r("div",null,y(100-t.damage),1)]),r("div",Pt,[Ht,r("div",null,y(o.score),1)])]),_:1})],2)}const At=I(It,[["render",Yt]]),Ot=""+new URL("shoot.6b00b3bd.mp3",import.meta.url).href,Et=""+new URL("backgroundGame.c17ea688.mp3",import.meta.url).href;const Nt={__name:"MainGame",setup(t){const e=J();let s,n;const i=c(null),o=c(!1),l=c({}),u=c(0),_=c(null),L=x(()=>e.getters["game/isGameFinished"]),$=x(()=>e.getters["game/isGameReady"]),f=G=>e.commit("game/setIsGameStart",G),b=()=>e.commit("game/resetStateGame"),M=()=>e.commit("game/increaseShoots"),D=()=>e.commit("game/increaseDamage"),A=()=>e.commit("leaderBoard/resetStateLeaderBoard"),O=()=>{u.value+=1},w=()=>{A(),b(),O(),n.destroy(),s.destroy()},E=()=>{i.value=i},z=()=>{!$.value||L.value||(f(!0),M(),s.replay())},N=G=>{var R;if(!((R=_==null?void 0:_.value)!=null&&R.shooter))return;const B=_.value.shooter;l.value={x1:G.clientX,y1:B.getBoundingClientRect().top,x2:G.clientX+B.offsetWidth}},V=G=>{let B;window.addEventListener("resize",()=>{clearTimeout(B),B=setTimeout(()=>{w()},300)})};return Q(()=>{s=new Y(Ot,.3),n=new Y(Et,.5,!0),V()}),Z(()=>{w()}),C(()=>$.value,()=>{n.replay()}),C(()=>L.value,()=>{n.pause()}),(G,B)=>{const R=Ve,K=Qe,X=St,j=wt,U=At;return h(),p("div",{class:"main-game",onClick:z,onMousemove:N,key:g(u)},[S(R,{isDebug:g(o),barrier:g(i),shooter:g(l),onCanvasLettersDamage:D},null,8,["isDebug","barrier","shooter"]),S(K,{"onButtonPlay-Mounted":E,"onButtonPlay-Restart":w}),S(X),S(j,{position:g(l),ref_key:"shooter",ref:_},null,8,["position"]),S(U)],32)}}};const Vt={class:"page-game"},Kt=r("div",{id:"stars"},null,-1),Xt=r("div",{id:"stars2"},null,-1),jt=r("div",{id:"stars3"},null,-1),Qt={__name:"index",setup(t){return De({title:"In game"}),(e,s)=>{const n=Nt;return h(),p("div",Vt,[S(n),Kt,Xt,jt])}}};export{Qt as default};
