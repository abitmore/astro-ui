import{j as c}from"./utils.CoSl1RWq.js";import{r}from"./index.sXsv9c-e.js";const Q=e=>{const t=r.useRef(e);return r.useEffect((()=>{t.current=e})),t},V=Q,H=typeof performance<"u"?performance:Date,Z=()=>H.now();function J(e,t=30,o=!1){const n=V(e),s=1e3/t,a=r.useRef(0),i=r.useRef(),u=()=>i.current&&clearTimeout(i.current),c=[t,o,n];function l(){a.current=0,u()}return r.useEffect((()=>l),c),r.useCallback((function(){const e=arguments,t=Z(),r=()=>{a.current=t,u(),n.current.apply(null,e)},c=a.current;if(o&&0===c)return r();if(t-c>s){if(c>0)return r();a.current=t}u(),i.current=setTimeout((()=>{r(),a.current=0}),s)}),c)}function K(e,t,o){const n=r.useState(e);return[n[0],J(n[1],t,o)]}const p=e=>{let t=0;for(const r of e)t=(t<<5)-t+r.charCodeAt(0),t&=t;return Math.abs(t)},G=e=>{const t=e.slice(1),[r,o,n]=[0,2,4].map((e=>parseInt(t.slice(e,e+2),16)));return(299*r+587*o+114*n)/1e3>=128?"#000000":"#FFFFFF"};class x{constructor(e){this._seed=e,(this._seed<=0||this._seed===Number.MAX_VALUE)&&(this._seed=1)}nextDouble(){const e=Math.floor(this._seed/x.q),t=this._seed%x.q;return this._seed=x.a*t-x.r*e,this._seed<=0&&(this._seed+=x.m),Number(this._seed)/x.m}nextInt(e,t){const r=Math.round(t)-Math.round(e);return e+Math.round(r*this.nextDouble())}nextNumber(e,t){return e+(t-e)*this.nextDouble()}nextBoolean(){return this.nextDouble()>=.5}nextChoice(e){if(0===e.length)return;return e[this.nextInt(0,e.length-1)]}nextUnit=(e,t)=>this.nextNumber(t?-e:0,e);static a=16807;static m=2147483647;static q=127773;static r=2836}const a=36,ee=["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"],v=(e,t)=>({rightEye:e,leftEye:t??e}),E={normal:v((e=>c.jsx("rect",{x:e.x+e.eyeSpread,y:e.y,width:e.eyeSize,height:2,rx:1,fill:e.eyeColor}))),happy:v((e=>c.jsx("path",{d:`M${e.x+e.eyeSpread-e.eyeSize},${e.y+e.eyeSize} Q${e.x+e.eyeSpread},${e.y} ${e.x+e.eyeSpread+e.eyeSize},${e.y+e.eyeSize}`,fill:"none",stroke:e.eyeColor,strokeWidth:1,strokeLinecap:"round"}))),sleepy:v((e=>c.jsx("path",{d:`M${e.x+e.eyeSpread-e.eyeSize},${e.y} Q${e.x+e.eyeSpread},${e.y+e.eyeSize} ${e.x+e.eyeSpread+e.eyeSize},${e.y}`,fill:"none",stroke:e.eyeColor,strokeWidth:1,strokeLinecap:"round"}))),mischief:v((e=>c.jsx("path",{d:`M${e.x+e.eyeSpread},${e.y} l${e.eyeSize},${e.eyeSize} l-${e.eyeSize},${e.eyeSize}`,fill:"none",stroke:e.eyeColor,strokeWidth:1,strokeLinecap:"round"})),(e=>c.jsx("path",{d:`M${e.x+e.eyeSpread},${e.y} l-${e.eyeSize},${e.eyeSize} l${e.eyeSize},${e.eyeSize}`,fill:"none",stroke:e.eyeColor,strokeWidth:1,strokeLinecap:"round"})))},X={smile:e=>c.jsx("path",{d:`M13,${19+e.mouthSpread} a1,0.75 0 0,0 10,0`,fill:e.mouthColor}),open:e=>c.jsx("path",{d:`M15 ${19+e.mouthSpread}c2 1 4 1 6 0`,stroke:e.mouthColor,fill:"none",strokeLinecap:"round"}),surprise:e=>c.jsx("circle",{cx:20,cy:19+e.mouthSpread,r:e.mouthSize,fill:e.mouthColor}),unhappy:e=>c.jsx("path",{d:`M15 ${19+e.mouthSpread}c2 -1 4 -1 6 0`,stroke:e.mouthColor,fill:"none",strokeLinecap:"round"})},te=e=>{let t="#";for(let r=0;r<6;r++){t+=Math.floor(e.nextUnit(16,!1)).toString(16)}return t};function ne(e,t=ee,r={}){let o=p(e);const n=new x(o),s=n?te(n):t[0],a=n.nextUnit(10,!0),i=a<5?a+4:a,u=n.nextUnit(10,!0),c=u<5?u+4:u,l=r.eye??n?.nextChoice(Object.keys(E)),h=r.mouth??n?.nextChoice(Object.keys(X));return{wrapperColor:s,faceColor:G(s),backgroundColor:n.nextChoice(t)??t[1],wrapperTranslateX:i,wrapperTranslateY:c,wrapperRotate:n.nextUnit(360,!1),wrapperScale:1+n.nextUnit(3,!1)/10,eyeSpread:n.nextUnit(5,!1)??0,eyeSize:1.5+(n.nextUnit(1,!1)??0),mouthSpread:n.nextUnit(5,!1)??0,mouthSize:1.5+(n.nextUnit(1,!0)??0),eyeType:l,mouthType:h}}const oe=({name:e,extra:t,colors:o,size:n,title:s,square:i,expression:u,...l})=>{const h=r.useMemo((()=>ne(e,o,u)),[e,o,u]),p=r.useId(),[y,d]=K({mouseX:null,mouseY:null},30),m=e=>{d({mouseX:e.clientX,mouseY:e.clientY})};r.useEffect((()=>(window.addEventListener("mousemove",m),()=>{window.removeEventListener("mousemove",m)})),[]);const[x,f]=r.useState(),[S,$]=r.useState(0),[C,w]=r.useState(0);r.useEffect((()=>{!function(){const r=document.querySelector(`#avatar${t}_${e.replace(".","")}`),{left:o,top:n,width:s,height:a}=r.getBoundingClientRect(),i=o+s/2,u=n+a/2;let c=180*Math.atan2(y.mouseY-u,y.mouseX-i)/Math.PI+90;c||(c=0),c<0&&(c=360+c),0===c&&(c=1),c=parseInt(c.toFixed(0));const l=Math.sqrt(Math.pow(y.mouseX-i,2)+Math.pow(y.mouseY-u,2));f(y.mouseX<=o?"left":"right"),w(l),$(c)}()}),[y]);const[M,z]=r.useState(1);r.useEffect((()=>{S?S>=0&&S<=15?z(15):S>20&&S<=95?z(S):S>95&&S<=180?z(95):S>180&&S<=275?z(275):S>275&&S<345?z(S):S>=345&&S<=360&&z(345):z(15)}),[x,C,S]);const[k,g]=r.useState(!1),[j,v]=r.useState(h.mouthType),[T,b]=r.useState(h.eyeType);r.useEffect((()=>{const e=setInterval((()=>{if(k)return b("sleepy"),void v("surprise");b("sleepy"!==h.eyeType?"sleepy":"normal"),setTimeout((()=>{b(h.eyeType)}),Math.max(100,500*Math.random()))}),Math.max(3e3,1e4*Math.random()));return()=>clearInterval(e)}),[k]);const[F,U]=r.useState();return r.useEffect((()=>{function e(){g(!0)}return y.mouseX&&y.mouseY&&(F&&clearTimeout(F),k&&(g(!1),b(h.eyeType),v(h.mouthType)),U(setTimeout(e,3e4))),()=>{F&&clearTimeout(F)}}),[y]),c.jsxs("svg",{viewBox:"0 0 36 36",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:n,height:n,...l,children:[s&&c.jsx("title",{children:s}),c.jsx("mask",{id:p,maskUnits:"userSpaceOnUse",x:0,y:0,width:a,height:a,children:c.jsx("rect",{width:a,height:a,rx:i?void 0:72,fill:"#FFFFFF"})}),c.jsxs("g",{mask:`url(#${p})`,children:[c.jsx("rect",{width:a,height:a,fill:h.backgroundColor}),c.jsx("rect",{x:"0",y:"0",width:a,height:a,transform:`translate(${h.wrapperTranslateX} ${h.wrapperTranslateY}) rotate(${h.wrapperRotate} 18 18) scale(${h.wrapperScale})`,fill:h.wrapperColor,rx:a}),c.jsxs("g",{id:`avatar${t}_${e.replace(".","")}`,transform:`rotate(${"left"===x?M+65:M-65}, 18 18)`,children:[E[T].leftEye({eyeSize:h.eyeSize,eyeSpread:Math.min(C/20,5)*("left"===x?-1:1),eyeColor:h.faceColor,x:20,y:14}),E[T].rightEye({eyeSize:h.eyeSize,eyeSpread:Math.min(C/20,5)*("left"===x?-1:1),eyeColor:h.faceColor,x:14,y:14}),X[j]({mouthSpread:Math.min(C/50,5),mouthSize:h.mouthSize,mouthColor:h.faceColor})]})]})]})};oe.displayName="Avatar";export{oe as A};