import{j as e,I as h,B as g,C as T,A as M,b as E,c as U,d as I,$ as V,g as G,p as J,v as K,u as ee,h as R,D as se,k as ae,l as te,m as ne,n as re,o as le,f as ce}from"./CurrentUser.fcde08c5.js";import{r as t}from"./index.178a5b5e.js";import{u as ie,F as oe,a as S,b as C,c as A,d as y,f as D,e as p}from"./form.977b8575.js";import{A as _,a as O}from"./avatar.1f4ca894.js";import{h as Z,t as de,d as me}from"./common.1877ab42.js";import{b as he}from"./User.b32d768e.js";import{D as ue,E as xe}from"./DeepLinkDialog.a84028eb.js";import{A as je}from"./AssetDropDownCard.5f08d8b3.js";import"./fuse.a1032ea1.js";import"./index.esm.c160ed77.js";function fe(z){const{chain:o,excludedUsers:B,setChosenAccount:w}=z,[m,P]=t.useState(),[a,b]=t.useState(),[l,u]=t.useState(!1),[r,$]=t.useState();async function s(){const d=B.map(j=>j.username),x=B.map(j=>j.id);if(d.includes(m)||x.includes(m)){u(!1),b("Cannot transfer assets to this account.");return}const v=await fetch(`http://localhost:8080/api/accountLookup/${o}/${m}`,{method:"GET"});if(!v.ok){console.log({error:new Error(`${v.status} ${v.statusText}`),msg:"Couldn't find account."}),u(!1);return}const N=await v.json();if(N&&N.result){const j=N.result;u(!1),$(j);return}u(!1),b("Couldn't find account.")}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[r?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-span-1",children:"Please enter a blockchain account name"}),e.jsxs("div",{className:"col-span-1",children:[" ",e.jsx(h,{value:m||"",placeholder:"Account name or ID",onKeyDown:d=>{d.key==="Enter"&&!l&&(u(!0),s())},onChange:d=>{/^[a-zA-Z0-9.-]*$/.test(d.target.value)&&(P(d.target.value),b(),$())}}),a?e.jsx("p",{className:"text-red-500 text-xs italic",children:a||"ERROR"}):null]}),e.jsx("div",{className:"col-span-1",children:m&&!l?e.jsx(g,{onClick:()=>s(),children:"Continue"}):e.jsx(g,{disabled:!0,children:"Continue"})})]}),r?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-span-1",children:o==="bitshares"?"Proceed with the following Bitshares account?":"Proceed with the following Bitshares testnet (TEST) account?"}),e.jsx("div",{className:"col-span-1",children:e.jsx(T,{className:"mb-2 mt-1 text-center",onClick:()=>{w({name:r.name,id:r.id})},children:e.jsxs("div",{className:"grid grid-cols-4",children:[e.jsx("div",{className:"col-span-1 pt-6 pl-7",children:e.jsx(M,{size:40,name:r.name,extra:"AS",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]})}),e.jsx("div",{className:"col-span-3",children:e.jsxs(E,{children:[e.jsx(U,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:r.name}),e.jsx(I,{children:r.id})]})})]})},r.id)}),e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsx("div",{children:e.jsx(g,{variant:"outline",className:"mr-2",onClick:()=>{b(),$()},children:"Go back"})}),e.jsx("div",{className:"text-right",children:e.jsx(g,{variant:"outline",onClick:()=>{w({name:r.name,id:r.id})},children:"Proceed"})})]})})]}):null]})})}function ke(z){const o=ie({defaultValues:{account:""}}),[B,w]=t.useState(!1),[m,P]=t.useState(),[a,b]=t.useState(),[l,u]=t.useState(),[r,$]=t.useState(0);t.useState();const s=t.useSyncExternalStore(V.subscribe,V.get,()=>!0),d=t.useSyncExternalStore(G.subscribe,G.get,()=>!0),x=t.useSyncExternalStore(J.subscribe,J.get,()=>!0),v=t.useSyncExternalStore(K.subscribe,K.get,()=>!0);ee(s&&s.chain?s.chain:"bitshares",["assets","globalParams","marketSearch"]);const[N,j]=t.useState(0);t.useEffect(()=>{if(x&&x.length){const c=x.find(f=>f[0]===0),i=Z(c[1].fee,5);j(i)}},[x]);const[q,pe]=t.useState(0),[k,Q]=t.useState();t.useEffect(()=>{let c;return s&&s.id&&(c=he([s.chain,s.id]).subscribe(({data:f,error:H,loading:Y})=>{f&&!H&&!Y&&Q(f)})),()=>{c&&c()}},[s,q]);const[n,W]=t.useState(),F=t.useMemo(()=>l?d.filter(c=>c.symbol===l):[],[l,d]);t.useEffect(()=>{F&&F.length&&W(F[0])},[F]);const[X,L]=t.useState(!1);return t.useEffect(()=>{m&&P(!1)},[m]),t.useEffect(()=>{a&&L(!1)},[a]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.jsxs(T,{children:[e.jsxs(E,{children:[e.jsx(U,{children:"Transfer assets"}),e.jsxs(I,{children:[e.jsx("p",{children:"Send funds from an account you control to another BitShares account holder."}),e.jsxs("p",{className:"mt-1",children:["⛔ Doesn't yet support a memo, so don't use this form when transfering to external services.",e.jsx("br",{}),"✅ Use for simple transfers between accounts."]})]})]}),e.jsxs(R,{children:[e.jsx(oe,{...o,children:e.jsxs("form",{onSubmit:()=>{w(!0),event.preventDefault()},children:[e.jsx(S,{control:o.control,name:"account",render:({field:c})=>e.jsxs(C,{children:[e.jsx(A,{children:"Sending account"}),e.jsx(y,{children:e.jsxs("div",{className:"grid grid-cols-8 gap-2",children:[e.jsx("div",{className:"col-span-1 ml-5",children:e.jsx(M,{size:40,name:s&&s.username?s.username:"x",extra:"Sender",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]})}),e.jsx("div",{className:"col-span-7",children:e.jsx(h,{disabled:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-1 mt-1",value:`${s&&s.username?s.username:"?"} (${s&&s.id?s.id:"?"})`})})]})}),e.jsx(D,{children:"This is the account which will transfer the assets to the target recipient."}),e.jsx(p,{})]})}),e.jsx(S,{control:o.control,name:"targetAccount",render:({field:c})=>e.jsxs(C,{children:[e.jsx(A,{children:"Target account"}),e.jsx(y,{children:e.jsxs("div",{className:"grid grid-cols-8 mt-4",children:[e.jsx("div",{className:"col-span-1 ml-5",children:a&&a.name?e.jsx(M,{size:40,name:a.name,extra:"Target",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]}):e.jsx(_,{children:e.jsx(O,{children:"?"})})}),e.jsx("div",{className:"col-span-5",children:e.jsx(h,{disabled:!0,placeholder:a&&a.name?`${a.name} (${a.id})`:"Bitshares account (1.2.x)",className:"mb-1 mt-1"})}),e.jsx("div",{className:"col-span-2",children:e.jsxs(se,{open:X,onOpenChange:i=>{L(i)},children:[e.jsx(ae,{asChild:!0,children:e.jsx(g,{variant:"outline",className:"ml-3 mt-1",children:a?"Change target":"Provide target"})}),e.jsxs(te,{className:"sm:max-w-[375px] bg-white",children:[e.jsxs(ne,{children:[e.jsxs(re,{children:[!s||!s.chain?"Bitshares account search":null,s&&s.chain==="bitshares"?"Bitshares (BTS) account search":null,s&&s.chain!=="bitshares"?"Bitshares testnet (TEST) account search":null]}),e.jsx(le,{children:"Searching for an account to transfer assets to."})]}),e.jsx(fe,{chain:s&&s.chain?s.chain:"bitshares",excludedUsers:s&&s.username&&s.username.length?[s]:[],setChosenAccount:b})]})]})})]})}),e.jsx(D,{children:!a||!a.name?"This is the account which will receive your transfer.":`The user ${a.name} will receive your transfer.`}),e.jsx(p,{})]})}),e.jsx(S,{control:o.control,name:"targetAsset",render:({field:c})=>e.jsxs(C,{children:[e.jsx(A,{children:"Asset to transfer"}),e.jsx(y,{children:e.jsxs("div",{className:"grid grid-cols-8 mt-4",children:[e.jsxs("div",{className:"col-span-1 ml-5",children:[!l||!n?e.jsx(_,{children:e.jsx(O,{children:"?"})}):null,n?e.jsx(_,{children:e.jsx(O,{children:e.jsx("div",{className:"text-sm",children:n.bitasset_data_id?"MPA":"UIA"})})}):null]}),e.jsxs("div",{className:"col-span-5",children:[!l||!n?e.jsx(h,{disabled:!0,placeholder:"Bitshares asst (1.3.x)",className:"mb-1 mt-1"}):null,n?e.jsx(h,{disabled:!0,placeholder:`${n.symbol} (${n.id})`,className:"mb-1 mt-1"}):null]}),e.jsx("div",{className:"col-span-2 mt-1 ml-3",children:e.jsx(je,{assetSymbol:l??"",assetData:null,storeCallback:u,otherAsset:null,marketSearch:v,type:null})})]})}),e.jsx(D,{children:"This is the asset which will be transferred to the target account."}),e.jsx(p,{children:n&&k&&!k.map(i=>i.asset_id).includes(n.id)?`Unable to proceed, your account "${s.username}" doesn't hold any of this asset.`:null})]})}),l&&a?e.jsx(S,{control:o.control,name:"transferAmount",render:({field:c})=>e.jsxs(C,{children:[e.jsx(A,{children:`Amount of ${l??"???"} available to transfer`}),e.jsx(y,{children:e.jsx(h,{disabled:!0,label:"Amount available to transfer",value:n&&k&&k.find(i=>i.asset_id===n.id)?`${Z(k.find(i=>i.asset_id===n.id).amount,n.precision)} ${n.symbol}`:"0",className:"mb-1"})}),e.jsxs(D,{children:["This is the maximum amount of ",l," you can transfer."]}),e.jsx(p,{})]})}):null,l&&a?e.jsx(S,{control:o.control,name:"transferAmount",render:({field:c})=>e.jsxs(C,{children:[e.jsx(A,{children:`Amount of ${l??"???"} to transfer`}),e.jsx(y,{onChange:i=>{const f=i.target.value;/^[0-9]*\.?[0-9]*$/.test(f)&&$(f)},children:e.jsx(h,{label:"Amount to transfer",value:r,placeholder:r,className:"mb-1"})}),e.jsx(D,{children:"How much you're going to send to the target account."}),e.jsx(p,{})]})}):null,l&&a?e.jsx(S,{control:o.control,name:"networkFee",render:({field:c})=>e.jsxs(C,{children:[e.jsx(A,{children:"Network fee"}),e.jsx(y,{children:e.jsx(h,{disabled:!0,placeholder:`${N} BTS`,className:"mb-3 mt-3"})}),s.id===s.referrer?e.jsxs(p,{children:["Rebate: ",de(N*.8,5)," BTS (vesting)"]}):null,e.jsx(p,{})]})}):null,r?e.jsx(g,{className:"mt-5 mb-3",variant:"outline",type:"submit",children:"Submit"}):e.jsx(g,{className:"mt-5 mb-3",variant:"outline",disabled:!0,type:"submit",children:"Submit"})]})}),B?e.jsx(ue,{operationName:"transfer",username:s.username,usrChain:s.chain,userID:s.id,dismissCallback:w,headerText:`Sending ${r} ${n.symbol} (${n.id}) to ${a.name} from ${s.username}`,trxJSON:[{fee:{amount:0,asset_id:"1.3.0"},from:s.id,to:a.id,amount:{amount:me(r,n.precision).toFixed(0),asset_id:n.id},extensions:[]}]},`Sending${r}${l}to${a.name}from${s.username}`):null]})]})}),e.jsxs("div",{className:"grid grid-cols-2 mt-5 gap-5",children:[a&&a.name?e.jsx("div",{className:"col-span-1",children:e.jsxs(T,{children:[e.jsxs(E,{className:"pb-0 mb-0",children:[e.jsx(U,{children:"Double check the above details!"}),e.jsx(I,{children:"Avoid heartbreak, check your inputs!"})]}),e.jsx(R,{className:"text-sm",children:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"Before you proceed, please double check the form inputs."}),e.jsx("li",{children:"Validate the entire Beet prompt contents before you broadcast the transaction."}),e.jsx("li",{children:e.jsx(xe,{type:"text",classNameContents:"",hyperlink:`https://blocksights.info/#/accounts/${a.name}`,text:`Click here to view ${a.name}'s account on the
                        Blocksights blockchain explorer.`})})]})})]})}):null,a&&a.name?e.jsx("div",{className:"col-span-1",children:e.jsxs(T,{children:[e.jsxs(E,{className:"pb-0 mb-0",children:[e.jsx(U,{children:"Beware! Don't fall for scams!"}),e.jsx(I,{children:"Be vigilant against scammers!"})]}),e.jsx(R,{className:"text-sm",children:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2",children:[e.jsx("li",{children:"Crypto exchanges will NEVER direct message you in with special transfer instructions to follow for deposits nor withdrawals."}),e.jsx("li",{children:"Asset transfer operations are permanent and the majority of assets are irrecoverable if erroneously transferred."}),e.jsx("li",{children:"If something sounds too good to be true, then it likely is, don't fall victim to scammers tricks."})]})})]})}):null]}),e.jsx("div",{className:"grid grid-cols-1 mt-5",children:s&&s.username&&s.username.length?e.jsx(ce,{usr:s}):null})]})})}export{ke as default};
