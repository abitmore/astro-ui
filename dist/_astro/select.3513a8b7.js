import{z as A,_ as T,y as He,M as Ce,P as j,a1 as Le,T as O,O as Be,F as ne,Q as We,U as Fe,R as Ke,S as je,V as Ue,W as ze,a0 as ye,E as Ge,Y as xe,Z as qe,X as Ye,j as _,G as Z,a7 as Xe,a8 as Ze}from"./CurrentUser.fcde08c5.js";import{r as e,b as Ee}from"./index.178a5b5e.js";import{$ as be}from"./index.6a2b73ba.js";import{e as Qe,$ as Je}from"./common.1877ab42.js";function et(o){const n=e.useRef({value:o,previous:o});return e.useMemo(()=>(n.current.value!==o&&(n.current.previous=n.current.value,n.current.value=o),n.current.previous),[o])}const Te=e.forwardRef((o,n)=>e.createElement(A.span,T({},o,{ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...o.style}}))),Gt=Te,tt=[" ","Enter","ArrowUp","ArrowDown"],ot=[" ","Enter"],se="Select",[le,ge,nt]=Qe(se),[J,qt]=He(se,[nt,Ce]),ve=Ce(),[ct,G]=J(se),[at,rt]=J(se),st=o=>{const{__scopeSelect:n,children:t,open:c,defaultOpen:s,onOpenChange:f,value:r,defaultValue:l,onValueChange:d,dir:u,name:g,autoComplete:C,disabled:E,required:y}=o,p=ve(n),[$,b]=e.useState(null),[m,a]=e.useState(null),[h,ee]=e.useState(!1),M=Je(u),[te=!1,I]=xe({prop:c,defaultProp:s,onChange:f}),[N,U]=xe({prop:r,defaultProp:l,onChange:d}),q=e.useRef(null),z=$?!!$.closest("form"):!0,[V,W]=e.useState(new Set),F=Array.from(V).map(P=>P.props.value).join(";");return e.createElement(qe,p,e.createElement(ct,{required:y,scope:n,trigger:$,onTriggerChange:b,valueNode:m,onValueNodeChange:a,valueNodeHasChildren:h,onValueNodeHasChildrenChange:ee,contentId:ye(),value:N,onValueChange:U,open:te,onOpenChange:I,dir:M,triggerPointerDownPosRef:q,disabled:E},e.createElement(le.Provider,{scope:n},e.createElement(at,{scope:o.__scopeSelect,onNativeOptionAdd:e.useCallback(P=>{W(H=>new Set(H).add(P))},[]),onNativeOptionRemove:e.useCallback(P=>{W(H=>{const L=new Set(H);return L.delete(P),L})},[])},t)),z?e.createElement(_e,{key:F,"aria-hidden":!0,required:y,tabIndex:-1,name:g,autoComplete:C,value:N,onChange:P=>U(P.target.value),disabled:E},N===void 0?e.createElement("option",{value:""}):null,Array.from(V)):null))},lt="SelectTrigger",it=e.forwardRef((o,n)=>{const{__scopeSelect:t,disabled:c=!1,...s}=o,f=ve(t),r=G(lt,t),l=r.disabled||c,d=j(n,r.onTriggerChange),u=ge(t),[g,C,E]=Ne(p=>{const $=u().filter(a=>!a.disabled),b=$.find(a=>a.value===r.value),m=Oe($,p,b);m!==void 0&&r.onValueChange(m.value)}),y=()=>{l||(r.onOpenChange(!0),E())};return e.createElement(Le,T({asChild:!0},f),e.createElement(A.button,T({type:"button",role:"combobox","aria-controls":r.contentId,"aria-expanded":r.open,"aria-required":r.required,"aria-autocomplete":"none",dir:r.dir,"data-state":r.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":Re(r.value)?"":void 0},s,{ref:d,onClick:O(s.onClick,p=>{p.currentTarget.focus()}),onPointerDown:O(s.onPointerDown,p=>{const $=p.target;$.hasPointerCapture(p.pointerId)&&$.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&(y(),r.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)},p.preventDefault())}),onKeyDown:O(s.onKeyDown,p=>{const $=g.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&C(p.key),!($&&p.key===" ")&&tt.includes(p.key)&&(y(),p.preventDefault())})})))}),dt="SelectValue",ft=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:c,style:s,children:f,placeholder:r="",...l}=o,d=G(dt,t),{onValueNodeHasChildrenChange:u}=d,g=f!==void 0,C=j(n,d.onValueNodeChange);return ne(()=>{u(g)},[u,g]),e.createElement(A.span,T({},l,{ref:C,style:{pointerEvents:"none"}}),Re(d.value)?e.createElement(e.Fragment,null,r):f)}),ut=e.forwardRef((o,n)=>{const{__scopeSelect:t,children:c,...s}=o;return e.createElement(A.span,T({"aria-hidden":!0},s,{ref:n}),c||"▼")}),pt=o=>e.createElement(Be,T({asChild:!0},o)),Q="SelectContent",mt=e.forwardRef((o,n)=>{const t=G(Q,o.__scopeSelect),[c,s]=e.useState();if(ne(()=>{s(new DocumentFragment)},[]),!t.open){const f=c;return f?Ee.createPortal(e.createElement(Pe,{scope:o.__scopeSelect},e.createElement(le.Slot,{scope:o.__scopeSelect},e.createElement("div",null,o.children))),f):null}return e.createElement($t,T({},o,{ref:n}))}),B=10,[Pe,ie]=J(Q),$t=e.forwardRef((o,n)=>{const{__scopeSelect:t,position:c="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:f,onPointerDownOutside:r,side:l,sideOffset:d,align:u,alignOffset:g,arrowPadding:C,collisionBoundary:E,collisionPadding:y,sticky:p,hideWhenDetached:$,avoidCollisions:b,...m}=o,a=G(Q,t),[h,ee]=e.useState(null),[M,te]=e.useState(null),I=j(n,i=>ee(i)),[N,U]=e.useState(null),[q,z]=e.useState(null),V=ge(t),[W,F]=e.useState(!1),P=e.useRef(!1);e.useEffect(()=>{if(h)return We(h)},[h]),Fe();const H=e.useCallback(i=>{const[w,...R]=V().map(x=>x.ref.current),[S]=R.slice(-1),v=document.activeElement;for(const x of i)if(x===v||(x?.scrollIntoView({block:"nearest"}),x===w&&M&&(M.scrollTop=0),x===S&&M&&(M.scrollTop=M.scrollHeight),x?.focus(),document.activeElement!==v))return},[V,M]),L=e.useCallback(()=>H([N,h]),[H,N,h]);e.useEffect(()=>{W&&L()},[W,L]);const{onOpenChange:Y,triggerPointerDownPosRef:K}=a;e.useEffect(()=>{if(h){let i={x:0,y:0};const w=S=>{var v,x,D,k;i={x:Math.abs(Math.round(S.pageX)-((v=(x=K.current)===null||x===void 0?void 0:x.x)!==null&&v!==void 0?v:0)),y:Math.abs(Math.round(S.pageY)-((D=(k=K.current)===null||k===void 0?void 0:k.y)!==null&&D!==void 0?D:0))}},R=S=>{i.x<=10&&i.y<=10?S.preventDefault():h.contains(S.target)||Y(!1),document.removeEventListener("pointermove",w),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",w),document.addEventListener("pointerup",R,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",R,{capture:!0})}}},[h,Y,K]),e.useEffect(()=>{const i=()=>Y(!1);return window.addEventListener("blur",i),window.addEventListener("resize",i),()=>{window.removeEventListener("blur",i),window.removeEventListener("resize",i)}},[Y]);const[de,ce]=Ne(i=>{const w=V().filter(v=>!v.disabled),R=w.find(v=>v.ref.current===document.activeElement),S=Oe(w,i,R);S&&setTimeout(()=>S.ref.current.focus())}),fe=e.useCallback((i,w,R)=>{const S=!P.current&&!R;(a.value!==void 0&&a.value===w||S)&&(U(i),S&&(P.current=!0))},[a.value]),ue=e.useCallback(()=>h?.focus(),[h]),X=e.useCallback((i,w,R)=>{const S=!P.current&&!R;(a.value!==void 0&&a.value===w||S)&&z(i)},[a.value]),ae=c==="popper"?we:ht,oe=ae===we?{side:l,sideOffset:d,align:u,alignOffset:g,arrowPadding:C,collisionBoundary:E,collisionPadding:y,sticky:p,hideWhenDetached:$,avoidCollisions:b}:{};return e.createElement(Pe,{scope:t,content:h,viewport:M,onViewportChange:te,itemRefCallback:fe,selectedItem:N,onItemLeave:ue,itemTextRefCallback:X,focusSelectedItem:L,selectedItemText:q,position:c,isPositioned:W,searchRef:de},e.createElement(Ke,{as:je,allowPinchZoom:!0},e.createElement(Ue,{asChild:!0,trapped:a.open,onMountAutoFocus:i=>{i.preventDefault()},onUnmountAutoFocus:O(s,i=>{var w;(w=a.trigger)===null||w===void 0||w.focus({preventScroll:!0}),i.preventDefault()})},e.createElement(ze,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:r,onFocusOutside:i=>i.preventDefault(),onDismiss:()=>a.onOpenChange(!1)},e.createElement(ae,T({role:"listbox",id:a.contentId,"data-state":a.open?"open":"closed",dir:a.dir,onContextMenu:i=>i.preventDefault()},m,oe,{onPlaced:()=>F(!0),ref:I,style:{display:"flex",flexDirection:"column",outline:"none",...m.style},onKeyDown:O(m.onKeyDown,i=>{const w=i.ctrlKey||i.altKey||i.metaKey;if(i.key==="Tab"&&i.preventDefault(),!w&&i.key.length===1&&ce(i.key),["ArrowUp","ArrowDown","Home","End"].includes(i.key)){let S=V().filter(v=>!v.disabled).map(v=>v.ref.current);if(["ArrowUp","End"].includes(i.key)&&(S=S.slice().reverse()),["ArrowUp","ArrowDown"].includes(i.key)){const v=i.target,x=S.indexOf(v);S=S.slice(x+1)}setTimeout(()=>H(S)),i.preventDefault()}})}))))))}),ht=e.forwardRef((o,n)=>{const{__scopeSelect:t,onPlaced:c,...s}=o,f=G(Q,t),r=ie(Q,t),[l,d]=e.useState(null),[u,g]=e.useState(null),C=j(n,I=>g(I)),E=ge(t),y=e.useRef(!1),p=e.useRef(!0),{viewport:$,selectedItem:b,selectedItemText:m,focusSelectedItem:a}=r,h=e.useCallback(()=>{if(f.trigger&&f.valueNode&&l&&u&&$&&b&&m){const I=f.trigger.getBoundingClientRect(),N=u.getBoundingClientRect(),U=f.valueNode.getBoundingClientRect(),q=m.getBoundingClientRect();if(f.dir!=="rtl"){const v=q.left-N.left,x=U.left-v,D=I.left-x,k=I.width+D,pe=Math.max(k,N.width),me=window.innerWidth-B,$e=be(x,[B,me-pe]);l.style.minWidth=k+"px",l.style.left=$e+"px"}else{const v=N.right-q.right,x=window.innerWidth-U.right-v,D=window.innerWidth-I.right-x,k=I.width+D,pe=Math.max(k,N.width),me=window.innerWidth-B,$e=be(x,[B,me-pe]);l.style.minWidth=k+"px",l.style.right=$e+"px"}const z=E(),V=window.innerHeight-B*2,W=$.scrollHeight,F=window.getComputedStyle(u),P=parseInt(F.borderTopWidth,10),H=parseInt(F.paddingTop,10),L=parseInt(F.borderBottomWidth,10),Y=parseInt(F.paddingBottom,10),K=P+H+W+Y+L,de=Math.min(b.offsetHeight*5,K),ce=window.getComputedStyle($),fe=parseInt(ce.paddingTop,10),ue=parseInt(ce.paddingBottom,10),X=I.top+I.height/2-B,ae=V-X,oe=b.offsetHeight/2,i=b.offsetTop+oe,w=P+H+i,R=K-w;if(w<=X){const v=b===z[z.length-1].ref.current;l.style.bottom="0px";const x=u.clientHeight-$.offsetTop-$.offsetHeight,D=Math.max(ae,oe+(v?ue:0)+x+L),k=w+D;l.style.height=k+"px"}else{const v=b===z[0].ref.current;l.style.top="0px";const D=Math.max(X,P+$.offsetTop+(v?fe:0)+oe)+R;l.style.height=D+"px",$.scrollTop=w-X+$.offsetTop}l.style.margin=`${B}px 0`,l.style.minHeight=de+"px",l.style.maxHeight=V+"px",c?.(),requestAnimationFrame(()=>y.current=!0)}},[E,f.trigger,f.valueNode,l,u,$,b,m,f.dir,c]);ne(()=>h(),[h]);const[ee,M]=e.useState();ne(()=>{u&&M(window.getComputedStyle(u).zIndex)},[u]);const te=e.useCallback(I=>{I&&p.current===!0&&(h(),a?.(),p.current=!1)},[h,a]);return e.createElement(gt,{scope:t,contentWrapper:l,shouldExpandOnScrollRef:y,onScrollButtonChange:te},e.createElement("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:ee}},e.createElement(A.div,T({},s,{ref:C,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}}))))}),we=e.forwardRef((o,n)=>{const{__scopeSelect:t,align:c="start",collisionPadding:s=B,...f}=o,r=ve(t);return e.createElement(Ye,T({},r,f,{ref:n,align:c,collisionPadding:s,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[gt,vt]=J(Q,{}),Se="SelectViewport",xt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...c}=o,s=ie(Se,t),f=vt(Se,t),r=j(n,s.onViewportChange),l=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(le.Slot,{scope:t},e.createElement(A.div,T({"data-radix-select-viewport":"",role:"presentation"},c,{ref:r,style:{position:"relative",flex:1,overflow:"auto",...c.style},onScroll:O(c.onScroll,d=>{const u=d.currentTarget,{contentWrapper:g,shouldExpandOnScrollRef:C}=f;if(C!=null&&C.current&&g){const E=Math.abs(l.current-u.scrollTop);if(E>0){const y=window.innerHeight-B*2,p=parseFloat(g.style.minHeight),$=parseFloat(g.style.height),b=Math.max(p,$);if(b<y){const m=b+E,a=Math.min(y,m),h=m-a;g.style.height=a+"px",g.style.bottom==="0px"&&(u.scrollTop=h>0?h:0,g.style.justifyContent="flex-end")}}}l.current=u.scrollTop})}))))}),bt="SelectGroup",[Yt,wt]=J(bt),St="SelectLabel",Ct=e.forwardRef((o,n)=>{const{__scopeSelect:t,...c}=o,s=wt(St,t);return e.createElement(A.div,T({id:s.id},c,{ref:n}))}),he="SelectItem",[yt,Ie]=J(he),Et=e.forwardRef((o,n)=>{const{__scopeSelect:t,value:c,disabled:s=!1,textValue:f,...r}=o,l=G(he,t),d=ie(he,t),u=l.value===c,[g,C]=e.useState(f??""),[E,y]=e.useState(!1),p=j(n,m=>{var a;return(a=d.itemRefCallback)===null||a===void 0?void 0:a.call(d,m,c,s)}),$=ye(),b=()=>{s||(l.onValueChange(c),l.onOpenChange(!1))};if(c==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return e.createElement(yt,{scope:t,value:c,disabled:s,textId:$,isSelected:u,onItemTextChange:e.useCallback(m=>{C(a=>{var h;return a||((h=m?.textContent)!==null&&h!==void 0?h:"").trim()})},[])},e.createElement(le.ItemSlot,{scope:t,value:c,disabled:s,textValue:g},e.createElement(A.div,T({role:"option","aria-labelledby":$,"data-highlighted":E?"":void 0,"aria-selected":u&&E,"data-state":u?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1},r,{ref:p,onFocus:O(r.onFocus,()=>y(!0)),onBlur:O(r.onBlur,()=>y(!1)),onPointerUp:O(r.onPointerUp,b),onPointerMove:O(r.onPointerMove,m=>{if(s){var a;(a=d.onItemLeave)===null||a===void 0||a.call(d)}else m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:O(r.onPointerLeave,m=>{if(m.currentTarget===document.activeElement){var a;(a=d.onItemLeave)===null||a===void 0||a.call(d)}}),onKeyDown:O(r.onKeyDown,m=>{var a;((a=d.searchRef)===null||a===void 0?void 0:a.current)!==""&&m.key===" "||(ot.includes(m.key)&&b(),m.key===" "&&m.preventDefault())})}))))}),re="SelectItemText",Tt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:c,style:s,...f}=o,r=G(re,t),l=ie(re,t),d=Ie(re,t),u=rt(re,t),[g,C]=e.useState(null),E=j(n,m=>C(m),d.onItemTextChange,m=>{var a;return(a=l.itemTextRefCallback)===null||a===void 0?void 0:a.call(l,m,d.value,d.disabled)}),y=g?.textContent,p=e.useMemo(()=>e.createElement("option",{key:d.value,value:d.value,disabled:d.disabled},y),[d.disabled,d.value,y]),{onNativeOptionAdd:$,onNativeOptionRemove:b}=u;return ne(()=>($(p),()=>b(p)),[$,b,p]),e.createElement(e.Fragment,null,e.createElement(A.span,T({id:d.textId},f,{ref:E})),d.isSelected&&r.valueNode&&!r.valueNodeHasChildren?Ee.createPortal(f.children,r.valueNode):null)}),Pt="SelectItemIndicator",It=e.forwardRef((o,n)=>{const{__scopeSelect:t,...c}=o;return Ie(Pt,t).isSelected?e.createElement(A.span,T({"aria-hidden":!0},c,{ref:n})):null}),Rt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...c}=o;return e.createElement(A.div,T({"aria-hidden":!0},c,{ref:n}))});function Re(o){return o===""||o===void 0}const _e=e.forwardRef((o,n)=>{const{value:t,...c}=o,s=e.useRef(null),f=j(n,s),r=et(t);return e.useEffect(()=>{const l=s.current,d=window.HTMLSelectElement.prototype,g=Object.getOwnPropertyDescriptor(d,"value").set;if(r!==t&&g){const C=new Event("change",{bubbles:!0});g.call(l,t),l.dispatchEvent(C)}},[r,t]),e.createElement(Te,{asChild:!0},e.createElement("select",T({},c,{ref:f,defaultValue:t})))});_e.displayName="BubbleSelect";function Ne(o){const n=Ge(o),t=e.useRef(""),c=e.useRef(0),s=e.useCallback(r=>{const l=t.current+r;n(l),function d(u){t.current=u,window.clearTimeout(c.current),u!==""&&(c.current=window.setTimeout(()=>d(""),1e3))}(l)},[n]),f=e.useCallback(()=>{t.current="",window.clearTimeout(c.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(c.current),[]),[t,s,f]}function Oe(o,n,t){const s=n.length>1&&Array.from(n).every(u=>u===n[0])?n[0]:n,f=t?o.indexOf(t):-1;let r=_t(o,Math.max(f,0));s.length===1&&(r=r.filter(u=>u!==t));const d=r.find(u=>u.textValue.toLowerCase().startsWith(s.toLowerCase()));return d!==t?d:void 0}function _t(o,n){return o.map((t,c)=>o[(n+c)%o.length])}const Nt=st,Me=it,Ot=ft,Mt=ut,Dt=pt,De=mt,kt=xt,ke=Ct,Ae=Et,At=Tt,Vt=It,Ve=Rt,Xt=Nt,Zt=Ot,Ht=e.forwardRef(({className:o,children:n,...t},c)=>_.jsxs(Me,{ref:c,className:Z("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",o),...t,children:[n,_.jsx(Mt,{asChild:!0,children:_.jsx(Xe,{className:"h-4 w-4 opacity-50"})})]}));Ht.displayName=Me.displayName;const Lt=e.forwardRef(({className:o,children:n,position:t="popper",...c},s)=>_.jsx(Dt,{children:_.jsx(De,{ref:s,className:Z("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:t,...c,children:_.jsx(kt,{className:Z("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n})})}));Lt.displayName=De.displayName;const Bt=e.forwardRef(({className:o,...n},t)=>_.jsx(ke,{ref:t,className:Z("px-2 py-1.5 text-sm font-semibold",o),...n}));Bt.displayName=ke.displayName;const Wt=e.forwardRef(({className:o,children:n,...t},c)=>_.jsxs(Ae,{ref:c,className:Z("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...t,children:[_.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:_.jsx(Vt,{children:_.jsx(Ze,{className:"h-4 w-4"})})}),_.jsx(At,{children:n})]}));Wt.displayName=Ae.displayName;const Ft=e.forwardRef(({className:o,...n},t)=>_.jsx(Ve,{ref:t,className:Z("-mx-1 my-1 h-px bg-muted",o),...n}));Ft.displayName=Ve.displayName;export{Gt as $,Xt as S,Ht as a,Zt as b,Lt as c,Wt as d};
