import{M as N,X as M,a0 as V,_ as E,E as j,N as ce,F,G as I,a6 as B,V as ae,j as D,J as P}from"./CurrentUser.5db6b464.js";import{a as T,r as n}from"./index.178a5b5e.js";function se(e){const t=e+"CollectionProvider",[o,r]=N(t),[s,i]=o(t,{collectionRef:{current:null},itemMap:new Map}),c=x=>{const{scope:a,children:$}=x,_=T.useRef(null),l=T.useRef(new Map).current;return T.createElement(s,{scope:a,itemMap:l,collectionRef:_},$)},p=e+"CollectionSlot",m=T.forwardRef((x,a)=>{const{scope:$,children:_}=x,l=i(p,$),b=M(a,l.collectionRef);return T.createElement(V,{ref:b},_)}),d=e+"CollectionItemSlot",u="data-radix-collection-item",f=T.forwardRef((x,a)=>{const{scope:$,children:_,...l}=x,b=T.useRef(null),w=M(a,b),C=i(d,$);return T.useEffect(()=>(C.itemMap.set(b,{ref:b,...l}),()=>void C.itemMap.delete(b))),T.createElement(V,{[u]:"",ref:w},_)});function v(x){const a=i(e+"CollectionConsumer",x);return T.useCallback(()=>{const _=a.collectionRef.current;if(!_)return[];const l=Array.from(_.querySelectorAll(`[${u}]`));return Array.from(a.itemMap.values()).sort((C,h)=>l.indexOf(C.ref.current)-l.indexOf(h.ref.current))},[a.collectionRef,a.itemMap])}return[{Provider:c,Slot:m,ItemSlot:f},v,r]}const ie=n.createContext(void 0);function U(e){const t=n.useContext(ie);return e||t||"ltr"}const A="rovingFocusGroup.onEntryFocus",de={bubbles:!1,cancelable:!0},O="RovingFocusGroup",[y,q,fe]=se(O),[le,Y]=N(O,[fe]),[ue,be]=le(O),$e=n.forwardRef((e,t)=>n.createElement(y.Provider,{scope:e.__scopeRovingFocusGroup},n.createElement(y.Slot,{scope:e.__scopeRovingFocusGroup},n.createElement(pe,E({},e,{ref:t}))))),pe=n.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,orientation:r,loop:s=!1,dir:i,currentTabStopId:c,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:m,onEntryFocus:d,...u}=e,f=n.useRef(null),v=M(t,f),x=U(i),[a=null,$]=j({prop:c,defaultProp:p,onChange:m}),[_,l]=n.useState(!1),b=ce(d),w=q(o),C=n.useRef(!1),[h,k]=n.useState(0);return n.useEffect(()=>{const g=f.current;if(g)return g.addEventListener(A,b),()=>g.removeEventListener(A,b)},[b]),n.createElement(ue,{scope:o,orientation:r,dir:x,loop:s,currentTabStopId:a,onItemFocus:n.useCallback(g=>$(g),[$]),onItemShiftTab:n.useCallback(()=>l(!0),[]),onFocusableItemAdd:n.useCallback(()=>k(g=>g+1),[]),onFocusableItemRemove:n.useCallback(()=>k(g=>g-1),[])},n.createElement(F.div,E({tabIndex:_||h===0?-1:0,"data-orientation":r},u,{ref:v,style:{outline:"none",...e.style},onMouseDown:I(e.onMouseDown,()=>{C.current=!0}),onFocus:I(e.onFocus,g=>{const te=!C.current;if(g.target===g.currentTarget&&te&&!_){const L=new CustomEvent(A,de);if(g.currentTarget.dispatchEvent(L),!L.defaultPrevented){const S=w().filter(R=>R.focusable),oe=S.find(R=>R.active),ne=S.find(R=>R.id===a),re=[oe,ne,...S].filter(Boolean).map(R=>R.ref.current);z(re)}}C.current=!1}),onBlur:I(e.onBlur,()=>l(!1))})))}),me="RovingFocusGroupItem",ve=n.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,focusable:r=!0,active:s=!1,tabStopId:i,...c}=e,p=B(),m=i||p,d=be(me,o),u=d.currentTabStopId===m,f=q(o),{onFocusableItemAdd:v,onFocusableItemRemove:x}=d;return n.useEffect(()=>{if(r)return v(),()=>x()},[r,v,x]),n.createElement(y.ItemSlot,{scope:o,id:m,focusable:r,active:s},n.createElement(F.span,E({tabIndex:u?0:-1,"data-orientation":d.orientation},c,{ref:t,onMouseDown:I(e.onMouseDown,a=>{r?d.onItemFocus(m):a.preventDefault()}),onFocus:I(e.onFocus,()=>d.onItemFocus(m)),onKeyDown:I(e.onKeyDown,a=>{if(a.key==="Tab"&&a.shiftKey){d.onItemShiftTab();return}if(a.target!==a.currentTarget)return;const $=_e(a,d.orientation,d.dir);if($!==void 0){a.preventDefault();let l=f().filter(b=>b.focusable).map(b=>b.ref.current);if($==="last")l.reverse();else if($==="prev"||$==="next"){$==="prev"&&l.reverse();const b=l.indexOf(a.currentTarget);l=d.loop?Te(l,b+1):l.slice(b+1)}setTimeout(()=>z(l))}})})))}),ge={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function xe(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function _e(e,t,o){const r=xe(e.key,o);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return ge[r]}function z(e){const t=document.activeElement;for(const o of e)if(o===t||(o.focus(),document.activeElement!==t))return}function Te(e,t){return e.map((o,r)=>e[(t+r)%e.length])}const Ie=$e,Ee=ve,H="Tabs",[Ce,Ve]=N(H,[Y]),J=Y(),[Re,G]=Ce(H),Fe=n.forwardRef((e,t)=>{const{__scopeTabs:o,value:r,onValueChange:s,defaultValue:i,orientation:c="horizontal",dir:p,activationMode:m="automatic",...d}=e,u=U(p),[f,v]=j({prop:r,onChange:s,defaultProp:i});return n.createElement(Re,{scope:o,baseId:B(),value:f,onValueChange:v,orientation:c,dir:u,activationMode:m},n.createElement(F.div,E({dir:u,"data-orientation":c},d,{ref:t})))}),we="TabsList",he=n.forwardRef((e,t)=>{const{__scopeTabs:o,loop:r=!0,...s}=e,i=G(we,o),c=J(o);return n.createElement(Ie,E({asChild:!0},c,{orientation:i.orientation,dir:i.dir,loop:r}),n.createElement(F.div,E({role:"tablist","aria-orientation":i.orientation},s,{ref:t})))}),Se="TabsTrigger",Ae=n.forwardRef((e,t)=>{const{__scopeTabs:o,value:r,disabled:s=!1,...i}=e,c=G(Se,o),p=J(o),m=X(c.baseId,r),d=Q(c.baseId,r),u=r===c.value;return n.createElement(Ee,E({asChild:!0},p,{focusable:!s,active:u}),n.createElement(F.button,E({type:"button",role:"tab","aria-selected":u,"aria-controls":d,"data-state":u?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:m},i,{ref:t,onMouseDown:I(e.onMouseDown,f=>{!s&&f.button===0&&f.ctrlKey===!1?c.onValueChange(r):f.preventDefault()}),onKeyDown:I(e.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&c.onValueChange(r)}),onFocus:I(e.onFocus,()=>{const f=c.activationMode!=="manual";!u&&!s&&f&&c.onValueChange(r)})})))}),Me="TabsContent",ye=n.forwardRef((e,t)=>{const{__scopeTabs:o,value:r,forceMount:s,children:i,...c}=e,p=G(Me,o),m=X(p.baseId,r),d=Q(p.baseId,r),u=r===p.value,f=n.useRef(u);return n.useEffect(()=>{const v=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(v)},[]),n.createElement(ae,{present:s||u},({present:v})=>n.createElement(F.div,E({"data-state":u?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":m,hidden:!v,id:d,tabIndex:0},c,{ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0}}),v&&i))});function X(e,t){return`${e}-trigger-${t}`}function Q(e,t){return`${e}-content-${t}`}const Ne=Fe,W=he,Z=Ae,ee=ye,Ke=Ne,De=n.forwardRef(({className:e,...t},o)=>D.jsx(W,{ref:o,className:P("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",e),...t}));De.displayName=W.displayName;const Pe=n.forwardRef(({className:e,...t},o)=>D.jsx(Z,{ref:o,className:P("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",e),...t}));Pe.displayName=Z.displayName;const Oe=n.forwardRef(({className:e,...t},o)=>D.jsx(ee,{ref:o,className:P("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));Oe.displayName=ee.displayName;function je(e,t){return e*10**t}function Be(e){navigator.clipboard.writeText(e).then(()=>{console.log("Text copied to clipboard")}).catch(t=>{console.error("Error copying text to clipboard:",t)})}function Ue(e,t){return parseFloat((e/10**t).toFixed(t))}function qe(e,t){return parseFloat(e).toFixed(t)}function Ye(e){const o=new Date().getTime()-new Date(e).getTime(),r=Math.floor(o/(1e3*60*60*24)),s=Math.floor(o/(1e3*60*60)%24),i=Math.floor(o/(1e3*60)%60);let c="";return r>0&&(c+=`${r}d `),(s>0||r>0)&&(c+=`${s}h `),c+=`${i}m`,c}const K={charge_market_fee:1,white_list:2,override_authority:4,transfer_restricted:8,disable_force_settle:16,global_settle:32,disable_confidential:64,witness_fed_asset:128,committee_fed_asset:256,lock_max_supply:512,disable_new_supply:1024,disable_mcr_update:2048,disable_icr_update:4096,disable_mssr_update:8192,disable_bsrm_update:16384,disable_collateral_bidding:32768};function ze(e){const t={};for(let o in K)e&K[o]&&(t[o]=!0);return t}function He(e,t){let o;return(...r)=>{o&&clearTimeout(o),o=setTimeout(()=>{e(...r)},t)}}export{se as $,Ke as T,De as a,je as b,Pe as c,He as d,Oe as e,Ye as f,ze as g,Ue as h,U as i,Be as j,qe as t};