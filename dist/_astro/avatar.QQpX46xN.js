import{j as $,c as i}from"./utils.CoSl1RWq.js";import{r as t}from"./index.sXsv9c-e.js";import{$ as w,d as l,_ as u,f as S,j as m}from"./index.uYDp4DLV.js";const p="Avatar",[_,T]=w(p),[L,g]=_(p),N=t.forwardRef((e,r)=>{const{__scopeAvatar:a,...o}=e,[c,s]=t.useState("idle");return t.createElement(L,{scope:a,imageLoadingStatus:c,onImageLoadingStatusChange:s},t.createElement(l.span,u({},o,{ref:r})))}),h="AvatarImage",E=t.forwardRef((e,r)=>{const{__scopeAvatar:a,src:o,onLoadingStatusChange:c=()=>{},...s}=e,n=g(h,a),d=C(o),f=S(b=>{c(b),n.onImageLoadingStatusChange(b)});return m(()=>{d!=="idle"&&f(d)},[d,f]),d==="loaded"?t.createElement(l.img,u({},s,{ref:r,src:o})):null}),R="AvatarFallback",y=t.forwardRef((e,r)=>{const{__scopeAvatar:a,delayMs:o,...c}=e,s=g(R,a),[n,d]=t.useState(o===void 0);return t.useEffect(()=>{if(o!==void 0){const f=window.setTimeout(()=>d(!0),o);return()=>window.clearTimeout(f)}},[o]),n&&s.imageLoadingStatus!=="loaded"?t.createElement(l.span,u({},c,{ref:r})):null});function C(e){const[r,a]=t.useState("idle");return m(()=>{if(!e){a("error");return}let o=!0;const c=new window.Image,s=n=>()=>{o&&a(n)};return a("loading"),c.onload=s("loaded"),c.onerror=s("error"),c.src=e,()=>{o=!1}},[e]),r}const v=N,x=E,A=y,I=t.forwardRef(({className:e,...r},a)=>$.jsx(v,{ref:a,className:i("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...r}));I.displayName=v.displayName;const j=t.forwardRef(({className:e,...r},a)=>$.jsx(x,{ref:a,className:i("aspect-square h-full w-full",e),...r}));j.displayName=x.displayName;const M=t.forwardRef(({className:e,...r},a)=>$.jsx(A,{ref:a,className:i("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...r}));M.displayName=A.displayName;export{I as A,M as a};
