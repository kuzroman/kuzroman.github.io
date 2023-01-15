var Le=Object.defineProperty;var we=(t,e,s)=>e in t?Le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var _=(t,e,s)=>(we(t,typeof e!="symbol"?e+"":e,s),s),ne=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var Y=(t,e,s)=>(ne(t,e,"read from private field"),s?s.call(t):e.get(t)),oe=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},re=(t,e,s,i)=>(ne(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);import{r as d,m as $e,p as f,w as T,o as h,a as m,t as x,I as z,u as g,k as be,e as o,v as J,x as Q,l as Z,F as Ge,b as Be,c as j,J as ue,z as I,K as ee,H as te,f as S,B as he,C as Ie,D as ke,L as _e,M as q,A as Me,G as me,T as De}from"./entry.03c438c7.js";import{u as Re}from"./composables.1dd16deb.js";const Ce={key:1},Fe={__name:"LetterTag",props:{sign:{type:String,default:" "},isKilled:{type:Boolean,default:!1},isShow:{type:Boolean,default:!1}},emits:["letter-tag--show"],setup(t,{emit:e}){const s=t,i=d(null),r=d(null),n=d(null),c=d(null),l=d(null),v=d($e().vnode.key),L=f(()=>[{show:s.isShow},{hide:s.isKilled}]),b=()=>{if(!i.value)return;let y=i.value.getBoundingClientRect();r.value=Math.ceil(y.left),c.value=Math.ceil(y.top),n.value=Math.ceil(y.left+i.value.clientWidth),l.value=Math.ceil(y.top+i.value.clientHeight)};return T(()=>s.isShow,()=>{b(),!(!r.value||!c.value)&&e("letter-tag--show",{x1:r.value,x2:n.value,y1:c.value,y2:l.value,id:v.value})}),(y,w)=>t.sign!=="|"?(h(),m("div",{key:0,class:z(["letter-tag",g(L)]),ref_key:"letterEl",ref:i},x(t.sign),3)):(h(),m("br",Ce))}};const Te={class:"debug-input"},ze={class:"left"},Ue={class:"right"},Pe={__name:"DebugInput",props:{isDebug:{type:Boolean,default:!1},seeds:{type:Array,default:[]},bullets:{type:Array,default:[]},letters:{type:Array,default:[]},shooter:{type:Object,default:{}}},emits:["debug-input--pause"],setup(t,{emit:e}){const s=t,i=d(!1),r=n=>{const c=n||"Space";document.body.addEventListener("keydown",l=>{l.code===c&&(i.value=!i.value,e("debug-input--pause",i.value))}),document.body.focus()};return be(()=>{s.isDebug&&r("Space")}),(n,c)=>(h(),m("div",Te,[o("pre",ze,x([...t.seeds,...t.bullets]),1),o("pre",Ue,x(t.letters),1)]))}};var k;class Ye{constructor(e){oe(this,k,void 0);_(this,"ctx");re(this,k,document.querySelector(e)),this.ctx=Y(this,k).getContext("2d")}drawRect(e,s,i,r){this.ctx.fillStyle=r||"#fff",this.ctx.fillRect(e,s,i,i)}drawRing(e,s,i,r){this.ctx.beginPath(),this.ctx.arc(e,s,i,0,2*Math.PI),this.ctx.fillStyle=r,this.ctx.fill()}clearCanvas(e=Y(this.ctx,k).width,s=Y(this.ctx,k).height){this.ctx.clearRect(0,0,e,s)}}k=new WeakMap;const F=(t,e)=>Math.floor(Math.random()*(e-t+1)+t);class He{constructor(e,s,i="default"){_(this,"ground",document.body.offsetHeight);_(this,"gravityX",F(1,5));_(this,"gravityY",F(1,5));_(this,"speed",F(2,5)/10);_(this,"bounceNum",0);_(this,"maxBounceNum",5);_(this,"revert",!1);this.x1=e||0,this.y1=s||0,this.size=F(1,3),this.isStopped=!1,this.direction=Math.random()<.6?1:-1,this.type=i}update(e){this.type==="shrapnel"?this._updateShrapnel():this._updateSeed(e)}_updateSeed(e){if(this._isBarrier(e)&&(this.revert=!0,this.bounceNum+=1),this.gravityY<0&&(this.revert=!1),this._isBounceLimitReached()||this._isUnderGround()){this.isStopped=!0;return}this._move()}_updateShrapnel(){if(this._isUnderGround()){this.isStopped=!0;return}this._fallDown(this.direction,!0)}_isBounceLimitReached(){return this.maxBounceNum<this.bounceNum}_isUnderGround(){return this.ground<this.y1}_isBarrier(e){return e?this.y1>=e.y1&&e.x1<this.x1&&this.x1<e.x2:!1}_move(){this.revert?this._fallUp():this._fallDown()}_fallDown(e,s){this._moveX(e,s),this.y1+=Math.round(this.gravityY),this.gravityY=Math.round((this.gravityY+this.speed)*100)/100}_fallUp(e){this._moveX(e),this.y1-=Math.round(this.gravityY),this.gravityY=Math.round((this.gravityY-1)*100)/100}_moveX(e=1,s=!1){const i=s?F(2,8):7;this.x1+=e*Math.round(this.gravityX/i),this.gravityX=Math.round((this.gravityX+this.speed)*100)/100}}class Ae{constructor(e,s){_(this,"gravityY",10);_(this,"ground",-20);this.x1=e,this.x2=e+6,this.y1=s,this.size=6,this.isStopped=!1}update(){if(this._isOverScreen()){this.isStopped=!0;return}this._move()}_move(){this._moveY()}_moveY(){this.y1-=Math.round(this.gravityY)}_isOverScreen(){return this.y1<this.ground}}class ce{constructor(e,s){_(this,"isShow",!1);_(this,"x1",0);_(this,"x2",0);_(this,"y1",0);_(this,"y2",0);const i=e===" "||e==="|";this.id=s,this.sign=e===" "?"-":e,this.isKilled=i,this.isService=i}static getLifeLetters(e){return e.filter(s=>!s.isKilled)}}class H{constructor(e,s=1,i=!1){this.audio=new Audio(e),this.audio.volume=s,this.audio.loop=i}isPlaying(){return this.audio.duration>0&&!this.audio.paused}play(e=()=>{}){this.audio.play().then(s=>e(s))}pause(){this.audio.pause()}replay(){this.audio.currentTime=0,this.play()}destroy(){this.audio.remove()}}const Ke=""+new URL("explode.1718f901.mp3",import.meta.url).href;const Ne={class:"canvas-letters"},Oe={class:"letters",id:"lettersEl"},Ve=["width","height"],Ee={__name:"CanvasLetters",props:{isDebug:{type:Boolean,default:!1},shooter:{type:Object,default:()=>{}}},emits:["canvas-letters-damage"],setup(t,{emit:e}){const s=t,i=J();let r,n,c;const l=d([]),v=d([]),L=d(3),b=d(16),y=d(!1),w=d(null),M=d(0),D=d(0),A=f(()=>i.getters["game/shots"]),G=f(()=>i.getters["game/letters"]),C=f(()=>i.getters["game/barrier"]),K=f(()=>s.isDebug?"Hello":"Hello, my name is Roman.|I am a Front-End developer with 12 years old experience.|SPA, SSR, SSG, js and Vue ... are my passion.|Check this out some projects on my Work page.|Feel free if you wanna say hello at kuzroman@list.ru then do it!)"),U=a=>i.commit("game/setIsSeedsFall",a),N=a=>i.commit("game/setIsGameFinished",a),B=a=>i.commit("game/setLetters",a),$=a=>i.commit("game/updateLetters",a),R=a=>i.commit("game/showLetter",a),O=a=>i.commit("game/killLetter",a);T(()=>A.value,()=>{let a=new Ae(s.shooter.x1,s.shooter.y1);v.value.push(a),ie()});const V=()=>{const a=Array.from(K.value,(u,p)=>new ce(u,p));B(a)},E=()=>{let a=0,u;n=setInterval(()=>{a<=G.value.length-1?(u=G.value[a],R(u),$(u)):clearInterval(n),a++},b.value)},X=a=>{let u=G.value[a.id];$({...u,...a}),ae(a)},ae=(a,u)=>{for(let p=0;p<L.value;p++){let W=new He(a.x1,a.y1,u);l.value.push(W)}},ie=()=>{U(!0),clearInterval(c),c=setInterval(()=>{y.value||(w.value.clearCanvas(M.value,D.value),ve(),ge(),!l.value.length&&!v.value.length&&(clearInterval(c),U(!1)))},b.value)},ve=()=>{l.value=l.value.filter(a=>(a.update(C.value),a.type==="shrapnel"&&ye(s.shooter,a),w.value.drawRect(a.x1,a.y1,a.size),!a.isStopped))},ge=()=>{v.value=v.value.filter(a=>{a.update();let u=ce.getLifeLetters(G.value);return u.length?fe(a,u):N(!0),w.value.drawRing(a.x1,a.y1,a.size,"#fc0"),!a.isStopped})},fe=(a,u)=>{u.forEach(p=>{a.y1<p.y1&&(a.x1<p.x1&&p.x1<a.x2||a.x1<p.x2&&p.x2<a.x2||p.x1<a.x1&&a.x2<p.x2)&&(O(p),ae({x1:a.x1,y1:a.y1},"shrapnel"),r.replay())})},ye=(a,u)=>{a.y1<u.y1&&a.x1<u.x1&&u.x1<a.x2&&(u.isStopped=!0,e("canvas-letters-damage"))},xe=a=>{y.value=a},Se=()=>{w.value=new Ye("#canvas"),V(),E(),ie()};return Q(()=>{M.value=window.innerWidth,D.value=window.innerHeight,r=new H(Ke,.3),Se()}),Z(()=>{clearInterval(n),r.destroy()}),(a,u)=>{const p=Fe,W=Pe;return h(),m("div",Ne,[o("div",Oe,[(h(!0),m(Ge,null,Be(g(G),P=>(h(),j(p,{key:P.id,isShow:P.isShow,isKilled:P.isKilled,sign:P.sign,"onLetterTag-Show":X},null,8,["isShow","isKilled","sign"]))),128))]),o("canvas",{id:"canvas",width:g(M),height:g(D)},null,8,Ve),t.isDebug?(h(),j(W,{key:0,isDebug:t.isDebug,seeds:g(l),bullets:g(v),letters:g(G),shooter:t.shooter,"onDebugInput-Pause":xe},null,8,["isDebug","seeds","bullets","letters","shooter"])):ue("",!0)])}}};const Xe={name:"UIButton",props:{text:{type:String,default:"Button"},disabled:{type:Boolean,default:!1}},data(){return{}},computed:{},methods:{}},We={class:"ui-button"};function je(t,e,s,i,r,n){return h(),m("div",We,x(s.text),1)}const se=I(Xe,[["render",je]]);const qe={name:"ButtonPlay",components:{UIButton:se},props:{},data(){return{barrier:{},texts:{default:"Destroy this text",wait:"Wait for falling ...",again:"Close"}}},computed:{...ee("game",["isSeedsFall","isGameReady","isGameFinished"]),text(){return this.isGameFinished?this.texts.again:this.isSeedsFall?this.texts.wait:this.texts.default},disabled(){return this.isSeedsFall},stiles(){return{disabled:this.disabled,hide:this.isGameReady&&!this.isGameFinished}}},methods:{...te("game",["setIsGameReady","setBarrier"]),handleClick(){if(!this.isSeedsFall){if(this.isGameFinished){this.$emit("button-play--restart",this.barrier);return}setTimeout(()=>{this.setIsGameReady(!0)})}},createBarrier(){let t=this.$el.getBoundingClientRect();this.barrier={x1:t.left,x2:t.left+t.width,y1:t.top}}},mounted(){this.createBarrier(),this.setBarrier(this.barrier)}},Je=["disabled"];function Qe(t,e,s,i,r,n){const c=se;return h(),m("div",{class:z(["button-play",n.stiles]),onClick:e[0]||(e[0]=(...l)=>n.handleClick&&n.handleClick(...l)),disabled:n.disabled},[S(c,{text:n.text},null,8,["text"])],10,Je)}const Ze=I(qe,[["render",Qe]]);const et={name:"UILoaderLine",props:{percent:{type:Number,default:50}},data(){return{}},computed:{width(){return`${this.percent}%`}}},tt={class:"ui-loader-line"};function st(t,e,s,i,r,n){return h(),m("div",tt,[o("div",{class:"loader",style:he({width:n.width})},null,4)])}const pe=I(et,[["render",st]]);const at={name:"IconTime"},it={class:"icon-time",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 50 50",space:"preserve"},nt=o("path",{d:"M7.533,21.646C9.111,13.06,16.633,6.552,25.678,6.552c10.188,0,18.447,8.259,18.447,18.448 c0,10.19-8.259,18.447-18.447,18.447c-7.167,0-13.378-4.084-16.433-10.053h3.886c2.708,4.039,7.317,6.699,12.547,6.699 c8.336,0,15.094-6.758,15.094-15.094S34.014,9.907,25.678,9.907c-7.184,0-13.195,5.018-14.72,11.739H7.533L7.533,21.646z M24.838,25.587l8.74,5.151l0.851-1.444l-7.913-4.706V13.314h-1.678V25.587z M8.906,28.354l5.031-6.708H3.875L8.906,28.354z M7.533,21.646C9.111,13.06,16.633,6.552,25.678,6.552c10.188,0,18.447,8.259,18.447,18.448c0,10.19-8.259,18.447-18.447,18.447 c-7.167,0-13.378-4.084-16.433-10.053h3.886c2.708,4.039,7.317,6.699,12.547,6.699c8.336,0,15.094-6.758,15.094-15.094 S34.014,9.907,25.678,9.907c-7.184,0-13.195,5.018-14.72,11.739H7.533L7.533,21.646z M24.838,25.587l8.74,5.151l0.851-1.444 l-7.913-4.706V13.314h-1.678V25.587z M8.906,28.354l5.031-6.708H3.875L8.906,28.354z",fill:"#6a6a6a"},null,-1),ot=[nt];function rt(t,e,s,i,r,n){return h(),m("svg",it,ot)}const ct=I(at,[["render",rt]]);const lt={name:"IconShield"},dt=t=>(Ie("data-v-c9eb4c77"),t=t(),ke(),t),ut={class:"icon-shield",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 50 50",space:"preserve"},ht=dt(()=>o("path",{d:"M41.575,12.596c-3.887-1.112-6.776-2.975-9.326-4.616C29.669,6.317,27.442,4.882,25,4.882 c-2.441,0-4.668,1.435-7.248,3.094c-2.549,1.645-5.438,3.507-9.325,4.619l-1.324,0.378v1.376c0,0.691,0.033,5.652,0.086,6.479 c0.109,1.667,0.339,3.317,0.684,4.905c3.292,15.173,15.951,20.082,16.488,20.282L25,46.256l0.642-0.24 c0.536-0.2,13.193-5.105,16.486-20.282c0.345-1.588,0.575-3.237,0.684-4.905c0.055-0.825,0.086-5.787,0.086-6.479v-1.376 L41.575,12.596z M25,44.308V25.345H9.658C9.343,23.9,9.119,22.358,9.012,20.71c-0.049-0.75-0.084-5.567-0.084-6.36 C16.964,12.051,21.067,6.709,25,6.709V20.71v4.635h15.346C37.226,39.73,25,44.308,25,44.308z",fill:"#6a6a6a"},null,-1)),_t=[ht];function mt(t,e,s,i,r,n){return h(),m("svg",ut,_t)}const pt=I(lt,[["render",mt],["__scopeId","data-v-c9eb4c77"]]);const le=100;let de;const vt={name:"StatusBar",components:{UI_Loader_line:pe,UILink2Move:_e,IconTime:ct,IconShield:pt},data(){return{health:le,isDebug:!1}},watch:{isGameStart(){this.runTimer()},damage(t){this.health=le-t},health(t){t<=0&&this.setIsGameFinished(!0)}},computed:{...ee("game",["isGameReady","isGameStart","isGameFinished","score","shots","letters","killedLetters","damage","timeLeft"])},methods:{...te("game",["setIsGameFinished","setIsLeaderBoardOpened","setScore","decreaseTimeLeft"]),runTimer(){de=setInterval(()=>{this.decreaseTimeLeft(),(this.timeLeft<=0||this.isGameFinished)&&(this.setIsGameFinished(!0),clearInterval(de))},1e3)},openLeaderBoard(){this.setIsLeaderBoardOpened(!0)}}},gt={class:"status-bar--top"},ft={class:"score"},yt={class:"status-bar--right"},xt={class:"time"};function St(t,e,s,i,r,n){const c=q("IconTime"),l=q("IconShield"),v=pe,L=_e;return h(),m("div",{class:z(["status-bar",{active:t.isGameReady||r.isDebug}])},[o("div",gt,[o("div",ft,x(t.killedLetters.length)+" killed",1),o("div",yt,[S(c),S(l),o("div",xt,x(t.timeLeft)+"s",1)])]),S(v,{class:"loader-Line",percent:r.health},null,8,["percent"]),S(L,{class:"leaders",text:"leaderboard",onClick:n.openLeaderBoard},null,8,["onClick"])],2)}const Lt=I(vt,[["render",St]]),wt=""+new URL("damage.f1e615a0.mp3",import.meta.url).href;const $t={__name:"RobotShooter",props:{position:{type:Object,default:{}}},setup(t,{expose:e}){const s=t,i=J();let r;const n=d(!1),c=d(null),l=f(()=>i.getters["game/isGameReady"]),v=f(()=>i.getters["game/isGameFinished"]),L=f(()=>i.getters["game/damage"]),b=f(()=>({left:s.position.x1+"px"})),y=f(()=>({active:l.value&&!v.value,damage:n.value})),w=()=>{n.value=!0,setTimeout(()=>{n.value=!1},300)};return T(()=>L.value,()=>{w(),r.replay()}),Q(()=>{r=new H(wt,.3)}),Z(()=>{r.destroy()}),e({shooter:c}),(M,D)=>(h(),m("div",{class:z(["robot-shooter",g(y)]),style:he(g(b)),ref_key:"shooter",ref:c},null,6))}};const bt={},Gt={class:"ui-dashed-list"};function Bt(t,e){return h(),m("div",Gt,[Me(t.$slots,"default")])}const It=I(bt,[["render",Bt]]);const kt={name:"ScoreBoard",components:{UIButton:se,DashedList:It},data(){return{isDebug:!1}},watch:{score(t){this.setScore(t)}},computed:{...ee("game",["isGameFinished","timeLeft","damage","shots","letters","killedLetters","aliveLetters","score"]),score(){if(this.aliveLetters.length,!this.killedLetters.length)return 0;const t=Math.ceil(this.killedLetters.length*1e4/(this.aliveLetters.length+this.shots)),e=this.timeLeft*10-this.damage*5;return t+e}},methods:{...te("game",["setScore","setIsLeaderBoardOpened"]),openLeaderBoard(){this.setIsLeaderBoardOpened(!0)}}},Mt=o("div",{class:"hooray"},"Hooray!",-1),Dt={class:"result"},Rt=o("div",null,"Time left",-1),Ct={class:"result"},Ft=o("div",null,"Shots",-1),Tt={class:"result"},zt=o("div",null,"Goals",-1),Ut={class:"result"},Pt=o("div",null,"Life",-1),Yt={class:"result best"},Ht=o("div",null,"Your best score",-1);function At(t,e,s,i,r,n){const c=q("DashedList");return h(),m("div",{class:z(["score-board",{active:t.isGameFinished||r.isDebug}])},[o("h3",null,x(n.score)+" points",1),Mt,S(c,null,{default:me(()=>[o("div",Dt,[Rt,o("div",null,x(t.timeLeft),1)]),o("div",Ct,[Ft,o("div",null,x(t.shots),1)]),o("div",Tt,[zt,o("div",null,x(t.killedLetters.length),1)]),o("div",Ut,[Pt,o("div",null,x(100-t.damage),1)]),o("div",Yt,[Ht,o("div",null,x(n.score),1)])]),_:1})],2)}const Kt=I(kt,[["render",At]]),Nt=""+new URL("shoot.6b00b3bd.mp3",import.meta.url).href,Ot=""+new URL("backgroundGame.c17ea688.mp3",import.meta.url).href;const Vt={__name:"MainGame",setup(t){const e=J();let s,i;const r=d(!1),n=d({}),c=d(0),l=d(null),v=f(()=>e.getters["game/isGameFinished"]),L=f(()=>e.getters["game/isGameReady"]),b=f(()=>e.getters["app/isPageAnimationFinished"]),y=B=>e.commit("game/setIsGameStart",B),w=()=>e.commit("game/resetStateGame"),M=()=>e.commit("game/increaseShoots"),D=()=>e.commit("game/increaseDamage"),A=()=>e.commit("leaderBoard/resetStateLeaderBoard"),G=()=>{c.value+=1},C=()=>{A(),w(),G(),i.destroy(),s.destroy()},K=()=>{!L.value||v.value||(y(!0),M(),s.replay())},U=B=>{var R;if(!((R=l==null?void 0:l.value)!=null&&R.shooter))return;const $=l.value.shooter;n.value={x1:B.clientX,y1:$.getBoundingClientRect().top,x2:B.clientX+$.offsetWidth}},N=B=>{let $;window.addEventListener("resize",()=>{clearTimeout($),$=setTimeout(()=>{C()},300)})};return Q(()=>{s=new H(Nt,.3),i=new H(Ot,.5,!0),N()}),Z(()=>{C()}),T(()=>L.value,()=>{i.replay()}),T(()=>v.value,()=>{i.pause()}),(B,$)=>{const R=Ee,O=Ze,V=Lt,E=$t,X=Kt;return h(),m("div",{class:"main-game",onClick:K,onMousemove:U,key:g(c)},[S(R,{isDebug:g(r),shooter:g(n),onCanvasLettersDamage:D},null,8,["isDebug","shooter"]),S(De,null,{default:me(()=>[g(b)?(h(),j(O,{key:0,"onButtonPlay-Restart":C})):ue("",!0)]),_:1}),S(V),S(E,{position:g(n),ref_key:"shooter",ref:l},null,8,["position"]),S(X)],32)}}};const Et={class:"page-game"},Xt=o("div",{id:"stars"},null,-1),Wt=o("div",{id:"stars2"},null,-1),jt=o("div",{id:"stars3"},null,-1),Zt={__name:"index",setup(t){return Re({title:"In game"}),(e,s)=>{const i=Vt;return h(),m("div",Et,[S(i),Xt,Wt,jt])}}};export{Zt as default};
