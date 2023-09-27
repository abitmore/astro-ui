import{$ as Z,j as e,I as P,A as ue,C as me,d as de,B as d,f as he}from"./AccountSelect.951be928.js";import{r as t}from"./index.d1e52ae9.js";import{u as fe,F as be,a as _,b as k,c as S,d as y,e as w,S as pe,f as xe,g as Ne,h as ge,i as je}from"./form.8d8a1d55.js";import{F as _e,D as ke,b as Se,f as ye,g as ee}from"./common.def03558.js";function Ce(){const x=fe({defaultValues:{account:""}}),[o,te]=t.useState();t.useEffect(()=>Z.subscribe(a=>{te(a)}),[Z]);const[$,I]=t.useState(""),[i,J]=t.useState(""),[h,se]=t.useState(),[b,ae]=t.useState();t.useEffect(()=>{async function s(){const a=await fetch(`http://localhost:8080/cache/pools/${o.chain}`,{method:"GET"});if(!a.ok){console.log({error:new Error(`${response.status} ${response.statusText}`),msg:"Couldn't generate deeplink."});return}const n=await a.json();n&&se(n)}o&&o.chain&&s()},[o]),t.useEffect(()=>{async function s(){const a=await fetch(`http://localhost:8080/cache/poolAssets/${o.chain}`,{method:"GET"});if(!a.ok){console.log({error:new Error(`${response.status} ${response.statusText}`),msg:"Couldn't generate deeplink."});return}const n=await a.json();n&&ae(n)}o&&o.chain&&s()},[o]);const[u,A]=t.useState(0),[N,L]=t.useState(0),[m,R]=t.useState(),[l,v]=t.useState(""),[c,C]=t.useState("");t.useEffect(()=>{if(h&&i&&b){const s=h.find(r=>r.id===i);R(s);const a=b.find(r=>r.id===s.asset_a_id),n=b.find(r=>r.id===s.asset_b_id);v(a),C(n),A(1)}},[i,b]),t.useEffect(()=>{if(l&&c&&m){let s=function(){if(p===0)return 0;if(p>0)return Math.min(Number(H),Math.ceil(Number(u)*Number(B)*(Number(p)/1e4)))},a=function(){if(M===0)return 0;if(M>0)return Math.min(Number(Q),Math.ceil(Number(u)*Number(E)*(Number(M)/1e4)))},n=function(){return typeof g>"u"&&p>0?Number(p)/1e4:typeof g>"u"&&p===0?0:Number(g)/1e4};console.log("Calculating the amount the user can buy");let r=Number(m.balance_a),B=Number(10**l.precision),j=Number(m.balance_b),E=Number(10**c.precision);const p=l.market_fee_percent,M=c.market_fee_percent,H=l.max_market_fee,Q=c.max_market_fee,g=m.taker_fee_percent;let W=Number(n()),O;if(l.id===m.asset_a_id){let f=Number(j)-Math.ceil(Number(j)*Number(r)/(Number(r)+(Number(u)*Number(B)-Number(s())))),T=Number(f)*Number(g)/1e4;O=(Number(f)-Math.floor(Number(T))-Math.ceil(Math.min(Number(Q),Math.ceil(Number(f)*Number(W)))))/Number(E)}else{let f=Number(r)-Math.ceil(Number(r)*Number(j)/(Number(j)+(Number(u)*Number(E)-Number(a())))),T=Number(f)*Number(g)/1e4;O=(Number(f)-Math.floor(Number(T))-Math.ceil(Math.min(Number(H),Math.ceil(Number(f)*Number(W)))))/Number(B)}L(O)}},[u,l,c]);const[V,q]=t.useState(!1),ne=()=>{V||(q(!0),setTimeout(()=>{q(!1)},1e4))},[D,U]=t.useState(""),[oe,z]=t.useState(),[F,G]=t.useState(!1);t.useEffect(()=>{if($){async function s(){G(!0);const a=[{account:o.id,pool:i,amount_to_sell:{amount:ee(u,l.precision),asset_id:l.id},min_to_receive:{amount:ee(N,c.precision),asset_id:c.id},extensions:[]}];z(a);const n=await fetch(`http://localhost:8080/api/deeplink/${o.chain}/liquidity_pool_exchange`,{method:"POST",body:JSON.stringify(a)});if(!n.ok){console.log({error:new Error(`${n.status} ${n.statusText}`),msg:"Couldn't generate deeplink."});return}const r=await n.json();r&&r.result&&r.result.generatedDeepLink&&U(r.result.generatedDeepLink),G(!1)}s()}},[$,l,c]);const[re,le]=t.useState();t.useEffect(()=>{le(e.jsx(P,{value:N??0,disabled:!0,className:"mb-3"}))},[N]);const[K,X]=t.useState(!1),[ie,Y]=t.useState("default_pool_key");if(t.useEffect(()=>{Y(`pool_key${Date.now()}`)},[i]),!o||!o.id||!o.id.length)return e.jsx(ue,{});const ce=({index:s,style:a})=>{const n=h[s];return e.jsx(je,{value:n.id,style:a,children:`${n.id} - ${n.share_asset_symbol} - ${n.asset_a_symbol}:${n.asset_b_symbol}`})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container mx-auto mt-5 mb-5",children:e.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.jsx(me,{className:"p-2",children:e.jsxs(de,{children:[h?null:e.jsx("p",{children:"Loading pool data"}),b?null:e.jsx("p",{children:"Loading asset data"}),h&&b?e.jsxs(e.Fragment,{children:[e.jsx(be,{...x,children:e.jsxs("form",{onSubmit:()=>{I(!0),X(!0),event.preventDefault()},children:[e.jsx(_,{control:x.control,name:"account",render:({field:s})=>e.jsxs(k,{children:[e.jsx(S,{children:"Account"}),e.jsx(y,{children:e.jsx(P,{disabled:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-3 mt-3",value:`${o.username} (${o.id})`})}),e.jsx(w,{})]})}),e.jsx(_,{control:x.control,name:"pool",render:({field:s})=>e.jsxs(k,{children:[e.jsx(S,{children:"Pool"}),e.jsx(y,{onValueChange:a=>{J(a)},children:e.jsxs(pe,{children:[e.jsx(xe,{className:"mb-3",children:e.jsx(Ne,{placeholder:m?`${m.id} - ${m.share_asset_symbol} - ${m.asset_a_symbol}:${m.asset_b_symbol}`:"Select a pool.."})}),e.jsx(ge,{className:"bg-white",children:e.jsx(_e,{height:150,itemCount:h.length,itemSize:35,className:"w-full",initialScrollOffset:h.map(a=>a.id).indexOf(i)*35,children:ce})})]},ie)}),e.jsx(w,{})]})}),i?e.jsx(e.Fragment,{children:e.jsx(_,{control:x.control,name:"sellAmount",render:({field:s})=>e.jsxs(k,{children:[e.jsx(S,{children:`Amount of ${l?l.symbol:"???"} to sell:`}),e.jsx(y,{onChange:a=>{const n=a.target.value;/^[0-9]*\.?[0-9]*$/.test(n)&&A(n)},children:e.jsx(P,{label:`Amount of ${l?l.symbol:"???"} to sell`,value:u,placeholder:u,className:"mb-3"})}),e.jsx(w,{})]})})}):null,i?e.jsx(e.Fragment,{children:e.jsx(_,{control:x.control,name:"buyAmount",render:({field:s})=>e.jsxs(k,{children:[e.jsx(S,{children:`Amount of ${c?c.symbol:"???"} you'll receive:`}),e.jsx(y,{children:re}),e.jsx(w,{})]})})}):null,!i||!u||!N||F!==!1?e.jsx(d,{className:"mt-5 mb-3",variant:"outline",disabled:!0,type:"submit",children:"Submit"}):e.jsx(d,{className:"mt-5 mb-3",variant:"outline",type:"submit",children:"Submit"})]})}),K&&$&&D&&e.jsx(ke,{open:K,onOpenChange:s=>{s||(I(""),U(""),z(),J(""),A(0),L(0),R(),v(""),C(""),Y(`pool_key${Date.now()}`)),X(s)},children:e.jsx(Se,{className:"sm:max-w-[425px] bg-white",children:e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"scroll-m-20 text-2xl font-extrabold tracking-tight",children:["Exchanging ",u," ",l.symbol," for ",N," ",c.symbol]}),e.jsx("h3",{className:"scroll-m-20 text-1xl font-semibold tracking-tight mb-3 mt-1",children:"Your requested Bitshares pool exchange operation is ready!"}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsx(d,{color:"gray",className:"w-full",onClick:()=>{ye(JSON.stringify(oe))},variant:"outline",children:"Copy operation JSON"}),V?e.jsx(d,{variant:"outline",disabled:!0,children:"Downloading..."}):e.jsx("a",{href:`data:text/json;charset=utf-8,${D}`,download:"pool_exchange.json",target:"_blank",rel:"noreferrer",onClick:ne,children:e.jsx(d,{variant:"outline",className:"w-full",children:"Download Beet operation JSON"})}),e.jsx("a",{href:`rawbeet://api?chain=BTS&request=${D}`,children:e.jsx(d,{variant:"outline",className:"w-full",children:"Trigger raw Beet deeplink"})})]})]})})}),i&&!F?e.jsx(d,{variant:"outline",mt:"xl",onClick:()=>{const s=l;v(c),C(s)},children:"Swap buy/sell"}):null,i&&F?e.jsx(d,{variant:"outline",mt:"xl",disabled:!0,children:"Swap buy/sell"}):null,i?e.jsx("a",{href:`https://blocksights.info/#/pools/${i}${o.chain!=="bitshares"?"?network=testnet":""}`,target:"_blank",children:e.jsx(d,{variant:"outline",className:"ml-2",children:"Blocksights pool explorer"})}):null]}):null]})})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(d,{className:"mt-5",onClick:()=>{he(),setBalances(),setOpenOrders(),setActivity(),setRetrievedBalanceAssets()},children:"Switch account/chain"})})]})}export{Ce as default};
