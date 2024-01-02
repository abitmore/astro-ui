import{j as x,c as D}from"./utils.CoSl1RWq.js";import{r as e}from"./index.sXsv9c-e.js";import{$ as I,a as h,_ as p,b as C,g as M,c as m,i as y,d as T}from"./index.uYDp4DLV.js";import{$ as k}from"./index.0G9Tm10-.js";import{$ as N,h as S,c as j,a as K,b as z}from"./dialog.8HOXxM8G.js";import{$ as G}from"./button._UsuMLkQ.js";import{$ as O,a as L,b as H,c as U}from"./index.nCjDGh3z.js";const E="Popover",[_,ue]=I(E,[O]),P=O(),[V,l]=_(E),Z=o=>{const{__scopePopover:s,children:a,open:d,defaultOpen:c,onOpenChange:t,modal:r=!1}=o,n=P(s),f=e.useRef(null),[u,b]=e.useState(!1),[v=!1,i]=y({prop:d,defaultProp:c,onChange:t});return e.createElement(H,n,e.createElement(V,{scope:s,contentId:G(),triggerRef:f,open:v,onOpenChange:i,onOpenToggle:e.useCallback(()=>i(g=>!g),[i]),hasCustomAnchor:u,onCustomAnchorAdd:e.useCallback(()=>b(!0),[]),onCustomAnchorRemove:e.useCallback(()=>b(!1),[]),modal:r},a))},q="PopoverTrigger",B=e.forwardRef((o,s)=>{const{__scopePopover:a,...d}=o,c=l(q,a),t=P(a),r=C(s,c.triggerRef),n=e.createElement(T.button,p({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":w(c.open)},d,{ref:r,onClick:m(o.onClick,c.onOpenToggle)}));return c.hasCustomAnchor?n:e.createElement(U,p({asChild:!0},t),n)}),R="PopoverPortal",[J,Q]=_(R,{forceMount:void 0}),W=o=>{const{__scopePopover:s,forceMount:a,children:d,container:c}=o,t=l(R,s);return e.createElement(J,{scope:s,forceMount:a},e.createElement(h,{present:a||t.open},e.createElement(N,{asChild:!0,container:c},d)))},$="PopoverContent",X=e.forwardRef((o,s)=>{const a=Q($,o.__scopePopover),{forceMount:d=a.forceMount,...c}=o,t=l($,o.__scopePopover);return e.createElement(h,{present:d||t.open},t.modal?e.createElement(Y,p({},c,{ref:s})):e.createElement(ee,p({},c,{ref:s})))}),Y=e.forwardRef((o,s)=>{const a=l($,o.__scopePopover),d=e.useRef(null),c=C(s,d),t=e.useRef(!1);return e.useEffect(()=>{const r=d.current;if(r)return S(r)},[]),e.createElement(j,{as:M,allowPinchZoom:!0},e.createElement(A,p({},o,{ref:c,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(o.onCloseAutoFocus,r=>{var n;r.preventDefault(),t.current||(n=a.triggerRef.current)===null||n===void 0||n.focus()}),onPointerDownOutside:m(o.onPointerDownOutside,r=>{const n=r.detail.originalEvent,f=n.button===0&&n.ctrlKey===!0,u=n.button===2||f;t.current=u},{checkForDefaultPrevented:!1}),onFocusOutside:m(o.onFocusOutside,r=>r.preventDefault(),{checkForDefaultPrevented:!1})})))}),ee=e.forwardRef((o,s)=>{const a=l($,o.__scopePopover),d=e.useRef(!1),c=e.useRef(!1);return e.createElement(A,p({},o,{ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r;if((r=o.onCloseAutoFocus)===null||r===void 0||r.call(o,t),!t.defaultPrevented){var n;d.current||(n=a.triggerRef.current)===null||n===void 0||n.focus(),t.preventDefault()}d.current=!1,c.current=!1},onInteractOutside:t=>{var r,n;(r=o.onInteractOutside)===null||r===void 0||r.call(o,t),t.defaultPrevented||(d.current=!0,t.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const f=t.target;((n=a.triggerRef.current)===null||n===void 0?void 0:n.contains(f))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&c.current&&t.preventDefault()}}))}),A=e.forwardRef((o,s)=>{const{__scopePopover:a,trapFocus:d,onOpenAutoFocus:c,onCloseAutoFocus:t,disableOutsidePointerEvents:r,onEscapeKeyDown:n,onPointerDownOutside:f,onFocusOutside:u,onInteractOutside:b,...v}=o,i=l($,a),g=P(a);return K(),e.createElement(z,{asChild:!0,loop:!0,trapped:d,onMountAutoFocus:c,onUnmountAutoFocus:t},e.createElement(k,{asChild:!0,disableOutsidePointerEvents:r,onInteractOutside:b,onEscapeKeyDown:n,onPointerDownOutside:f,onFocusOutside:u,onDismiss:()=>i.onOpenChange(!1)},e.createElement(L,p({"data-state":w(i.open),role:"dialog",id:i.contentId},g,v,{ref:s,style:{...v.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function w(o){return o?"open":"closed"}const oe=Z,te=B,ce=W,F=X,le=oe,$e=te,re=e.forwardRef(({className:o,align:s="center",sideOffset:a=4,...d},c)=>x.jsx(ce,{children:x.jsx(F,{ref:c,align:s,sideOffset:a,className:D("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...d})}));re.displayName=F.displayName;export{le as P,$e as a,re as b};
