import{$ as t,p as n,q as o,u as h,j as e,C as x,b,c as g,d as p,h as S,f as C}from"./CurrentUser.fcde08c5.js";import{r as a}from"./index.178a5b5e.js";import{D as j}from"./DeepLinkDialog.a84028eb.js";import{h as $}from"./common.1877ab42.js";function y(_){const s=a.useSyncExternalStore(t.subscribe,t.get,()=>!0),r=a.useSyncExternalStore(n.subscribe,n.get,()=>!0),i=a.useSyncExternalStore(o.subscribe,o.get,()=>!0);h(s&&s.chain?s.chain:"bitshares",["bitAssetData","globalParams"]);const[w,l]=a.useState(0);a.useEffect(()=>{if(r&&r.length){const d=r.find(f=>f[0]===3),m=$(d[1].fee,5);l(m)}},[r]);const[c,u]=a.useState(!1);return a.useState(""),a.useState(0),a.useState(""),a.useState(0),console.log({bitAssetData:i}),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs(x,{children:[e.jsxs(b,{children:[e.jsx(g,{children:"💵 Lend smartcoins"}),e.jsx(p,{children:"Issue collateralized debt"})]}),e.jsx(S,{children:"Create form"})]}),c?e.jsx(j,{operationName:"call_order_update",username:s.username,usrChain:s.chain,userID:s.id,dismissCallback:u,headerText:`Borrowing ${finalBorrowAmount} ${foundAsset.symbol} from ${relevantOffer.owner_name} (${relevantOffer.owner_account})`,trxJSON:[{funding_account:s.id,delta_collateral:{amount:1,asset_id:"1.3.x"},delta_debt:{amount:1,asset_id:"1.3.x"},extensions:[]}]},`Borrowing${finalBorrowAmount}${foundAsset.symbol}from${relevantOffer.owner_name}(${relevantOffer.owner_account})`):null]}),e.jsx("div",{className:"grid grid-cols-1 mt-5",children:s&&s.username&&s.username.length?e.jsx(C,{usr:s}):null})]})})}export{y as default};
