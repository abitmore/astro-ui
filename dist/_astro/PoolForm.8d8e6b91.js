import{$ as be,u as Ke,p as pe,q as je,r as fe,s as Ne,j as e,I as w,C as g,b as k,c as B,d as $,g as y,D as _e,k as ge,B as I,l as ye,m as Se,n as De,o as ve,f as Qe,i as Ye,t as Ge}from"./CurrentUser.6e688dc0.js";import{r as l}from"./index.178a5b5e.js";import{u as We,F as Ze,a as es,b as A,c as C,d as F,e as P,f as D}from"./form.b3a2449f.js";import{F as te}from"./index.esm.7854a70a.js";import{T as ss,a as as,b as H,c as we,S as ts}from"./scroll-area.35e00caf.js";import{S as ls,a as rs,b as is,c as ns,d as j,P as cs,M as le,e as os}from"./MarketAssetCard.45ed5257.js";import{h as re,b as ke}from"./common.6cf182e8.js";import{a as ie,b as Be}from"./Market.e3992e0f.js";import{c as ds,a as ms}from"./Pools.63986217.js";function gs(){const S=We({defaultValues:{account:""}}),[o,E]=l.useState(""),r=l.useSyncExternalStore(be.subscribe,be.get,()=>!0);Ke(r&&r.chain?r.chain:"bitshares");const _=l.useSyncExternalStore(pe.subscribe,pe.get,()=>!0),h=l.useSyncExternalStore(je.subscribe,je.get,()=>!0),U=l.useSyncExternalStore(fe.subscribe,fe.get,()=>!0),J=l.useSyncExternalStore(Ne.subscribe,Ne.get,()=>!0),[ne,$e]=l.useState(0);l.useEffect(()=>{if(J&&J.parameters){const n=J.parameters.current_fees.parameters.find(t=>t[0]===63);$e(re(n[1].fee,5))}},[J]);const[K,Ae]=l.useState(),[z,ce]=l.useState("asset");l.useEffect(()=>{if(!h||!h.length)return;const a=new Ze(h??[],{includeScore:!0,threshold:.2,keys:z==="asset"?["asset_a_symbol","asset_b_symbol"]:["share_asset_symbol"]});Ae(a)},[h,z]);const[Q,Ce]=l.useState(),[T,Y]=l.useState(),[Fe,oe]=l.useState(!1);l.useEffect(()=>{if(K&&Q){const a=K.search(Q);Y(a)}},[K,Q]);const de=({index:a,style:n})=>{const t=T[a].item;return e.jsxs("div",{style:{...n},className:"grid grid-cols-12",onClick:()=>{E(t.id),oe(!1),Y()},children:[e.jsx("div",{className:"col-span-2",children:t.id}),e.jsx("div",{className:"col-span-3",children:t.share_asset_symbol}),e.jsxs("div",{className:"col-span-3",children:[t.asset_a_symbol," (",t.asset_a_id,")"]}),e.jsxs("div",{className:"col-span-3",children:[t.asset_b_symbol," (",t.asset_b_id,")"]}),e.jsxs("div",{className:"col-span-1",children:[t.taker_fee_percent/100,"%"]})]},`acard-${t.id}`)},me={backgroundColor:"#252526",color:"white"};l.useEffect(()=>{async function a(){if(window.location.search){console.log("Parsing url params");const n=new URLSearchParams(window.location.search),t=Object.fromEntries(n.entries()),c=t&&t.pool?t.pool:null;if(!c||!c.length){console.log("Invalid pool parameters"),E("1.19.0");return}if(c&&c.length&&!c.includes("1.19.")){console.log("Invalid pool parameters"),E("1.19.0");return}if(!(h&&h.length?h.map(m=>m.id):[]).includes(c)){console.log("Replacing unknown pool with first pool in list"),E("1.19.0");return}E(c)}}h&&h.length&&a()},[h]);const[f,G]=l.useState(0),[u,W]=l.useState(),[s,Z]=l.useState(""),[i,ee]=l.useState("");l.useEffect(()=>{if(h&&o&&_){const a=h.find(c=>c.id===o);W(a);const n=_.find(c=>c.id===a.asset_a_id),t=_.find(c=>c.id===a.asset_b_id);Z(n),ee(t),G(1)}},[o,_]);const[d,he]=l.useState();l.useEffect(()=>{let a;return r&&r.chain&&u&&(a=ds([r.chain,u.id]).subscribe(({data:t,error:c,loading:N})=>{if(t&&!c&&!N){let m=t;m.asset_a_symbol=s.symbol,m.asset_a_precision=s.precision,m.asset_b_symbol=i.symbol,m.asset_b_precision=i.precision,m.share_asset_symbol=u.share_asset_symbol,m.readable_balance_a=`${re(m.balance_a,s.precision)} ${s.symbol}`,m.readable_balance_b=`${re(m.balance_b,i.precision)} ${i.symbol}`,m.share_asset_details=_.find(R=>R.id===m.share_asset),he(m)}})),()=>{a&&a()}},[r,u,s,i,_]);const[Pe,Ee]=l.useState(null),[Te,Me]=l.useState(null),[Ie,Le]=l.useState(null),[Re,Oe]=l.useState(null),[qe,Ue]=l.useState(null);l.useEffect(()=>{let a,n,t,c,N;if(r&&r.id&&s&&i&&u){a=ie([r.chain,s.id.replace("1.3.","2.3.")]).subscribe(({data:x,error:p,loading:b})=>{x&&!p&&!b&&Ee(x)}),n=ie([r.chain,i.id.replace("1.3.","2.3.")]).subscribe(({data:x,error:p,loading:b})=>{x&&!p&&!b&&Me(x)});const v=_.find(x=>x.symbol===u.share_asset_symbol);t=ie([r.chain,v.id.replace("1.3.","2.3.")]).subscribe(({data:x,error:p,loading:b})=>{x&&!p&&!b&&Le(x)}),s.bitasset_data_id&&(c=Be([r.chain,s.bitasset_data_id]).subscribe(({data:p,error:b,loading:O})=>{p&&!b&&!O&&Oe(p)})),i.bitasset_data_id&&(N=Be([r.chain,i.bitasset_data_id]).subscribe(({data:p,error:b,loading:O})=>{p&&!b&&!O&&Ue(p)}))}return()=>{a&&a(),n&&n(),t&&t(),c&&c(),N&&N()}},[r,s,i,u,_]);const[q,Je]=l.useState();l.useEffect(()=>{let a;return r&&r.id&&s&&i&&(a=ms([r.chain,r.id]).subscribe(({data:t,error:c,loading:N})=>{t&&!c&&!N&&Je(t)})),()=>{a&&a()}},[r,s,i]);const L=l.useMemo(()=>{if(s&&i&&d){let a=function(){if(v===0)return 0;if(v>0)return Math.min(Number(x),Math.ceil(Number(f)*Number(N)*(Number(v)/1e4)))},n=function(){if(X===0)return 0;if(X>0)return Math.min(Number(p),Math.ceil(Number(f)*Number(R)*(Number(X)/1e4)))},t=function(){return typeof b>"u"&&v>0?Number(v)/1e4:typeof b>"u"&&v===0?0:Number(b)/1e4};console.log("Calculating the amount the user can buy");let c=Number(d.balance_a),N=Number(10**s.precision),m=Number(d.balance_b),R=Number(10**i.precision);const v=s.market_fee_percent,X=i.market_fee_percent,x=s.max_market_fee,p=i.max_market_fee,b=d.taker_fee_percent;let O=Number(t()),se;if(s.id===u.asset_a_id){let M=Number(m)-Math.ceil(Number(m)*Number(c)/(Number(c)+(Number(f)*Number(N)-Number(a())))),ae=Number(M)*Number(b)/1e4;se=(Number(M)-Math.floor(Number(ae))-Math.ceil(Math.min(Number(p),Math.ceil(Number(M)*Number(O)))))/Number(R)}else{let M=Number(c)-Math.ceil(Number(c)*Number(m)/(Number(m)+(Number(f)*Number(R)-Number(n())))),ae=Number(M)*Number(b)/1e4;se=(Number(M)-Math.floor(Number(ae))-Math.ceil(Math.min(Number(x),Math.ceil(Number(M)*Number(O)))))/Number(N)}return se}},[f,s,i,d]),[ze,ue]=l.useState();l.useEffect(()=>{ue(e.jsx(w,{value:L??0,disabled:!0,className:"mb-3"}))},[L]);const[V,xe]=l.useState(!1),[Ve,Xe]=l.useState("default_pool_key");l.useEffect(()=>{o&&o.length&&window.history.replaceState({},"",`?pool=${o}`),Xe(`pool_key${Date.now()}`)},[o]);const He=({index:a,style:n})=>{const t=h[a];return e.jsx(os,{value:t.id,style:n,children:`${t.id} - ${t.share_asset_symbol} - ${t.asset_a_symbol}:${t.asset_b_symbol}`})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.jsxs(g,{className:"p-2",children:[e.jsxs(k,{children:[e.jsx(B,{children:"Bitshares Liquidity Pool Exchange"}),e.jsx($,{children:"Easily swap between Bitshares assets using one of these user created liquidity pools."})]}),e.jsxs(y,{children:[h?null:e.jsx("p",{children:"Loading pool data"}),_?null:e.jsx("p",{children:"Loading asset data"}),h&&_?e.jsxs(e.Fragment,{children:[e.jsx(es,{...S,children:e.jsxs("form",{onSubmit:()=>{xe(!0),event.preventDefault()},children:[e.jsx(A,{control:S.control,name:"account",render:({field:a})=>e.jsxs(C,{children:[e.jsx(F,{children:"Account"}),e.jsx(P,{children:e.jsx(w,{disabled:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-3 mt-3",value:`${r.username} (${r.id})`})}),e.jsx(D,{})]})}),e.jsx(A,{control:S.control,name:"pool",render:({field:a})=>e.jsxs(C,{children:[e.jsx(F,{children:e.jsxs("div",{className:"grid grid-cols-2 mt-3",children:[e.jsx("div",{className:"mt-1",children:"Liquidity pool"}),e.jsx("div",{className:"text-gray-500 text-right",children:e.jsxs(_e,{open:Fe,onOpenChange:n=>{n||Y(),oe(n)},children:[e.jsx(ge,{asChild:!0,children:e.jsx(I,{className:"h-5 p-3",children:"Search"})}),e.jsxs(ye,{className:"sm:max-w-[900px] bg-white",children:[e.jsxs(Se,{children:[e.jsx(De,{children:"Search for a liquidity pool"}),e.jsx(ve,{children:"Select a search result to proceed with your desired asset swap."})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsxs(ss,{defaultValue:"asset",children:[e.jsxs(as,{className:"grid max-w-[400px] grid-cols-2 mb-1 gap-3",children:[z==="asset"?e.jsx(H,{style:me,value:"asset",children:"Swappable assets"}):e.jsx(H,{value:"asset",onClick:()=>ce("asset"),children:"Swappable assets"}),z==="share"?e.jsx(H,{style:me,value:"share",children:"Pool share asset"}):e.jsx(H,{value:"share",onClick:()=>ce("share"),children:"Pool share asset"})]}),e.jsx(w,{name:"assetSearch",placeholder:"Enter search text",className:"mb-3 max-w-[400px]",onChange:n=>{Ce(n.target.value)}}),e.jsx(we,{value:"share",children:T&&T.length?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsx("div",{className:"col-span-2",children:"ID"}),e.jsx("div",{className:"col-span-3",children:e.jsx("b",{children:"Share asset"})}),e.jsx("div",{className:"col-span-3",children:"Asset A"}),e.jsx("div",{className:"col-span-3",children:"Asset B"}),e.jsx("div",{className:"col-span-1",children:"Taker Fee"})]}),e.jsx(te,{height:400,itemCount:T.length,itemSize:45,className:"w-full",children:de})]}):null}),e.jsx(we,{value:"asset",children:T&&T.length?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsx("div",{className:"col-span-2",children:"ID"}),e.jsx("div",{className:"col-span-3",children:"Share asset"}),e.jsx("div",{className:"col-span-3",children:e.jsx("b",{children:"Asset A"})}),e.jsx("div",{className:"col-span-3",children:e.jsx("b",{children:"Asset B"})}),e.jsx("div",{className:"col-span-1",children:"Taker Fee"})]}),e.jsx(te,{height:400,itemCount:T.length,itemSize:45,className:"w-full",children:de})]}):null})]})})})]})]})})]})}),e.jsx(P,{onValueChange:n=>{E(n)},children:e.jsxs(ls,{children:[e.jsx(rs,{className:"mb-3",children:e.jsx(is,{placeholder:u?`${u.id} - ${u.share_asset_symbol} - ${u.asset_a_symbol}:${u.asset_b_symbol}`:"Select a pool.."})}),e.jsx(ns,{className:"bg-white",children:h&&h.length?e.jsx(te,{height:150,itemCount:h.length,itemSize:35,className:"w-full",initialScrollOffset:h.map(n=>n.id).indexOf(o)*35,children:He}):null})]},Ve)}),e.jsx(D,{})]})}),e.jsx("div",{className:"grid grid-cols-2 gap-5 mt-5 mb-5",children:o?e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(y,{children:e.jsx(A,{control:S.control,name:"balanceA",render:({field:a})=>e.jsxs(C,{children:[e.jsxs(F,{children:["Swappable ",s.symbol," (",s.id,")"]}),e.jsx(P,{children:d?e.jsx(w,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:d.readable_balance_a}):e.jsx(j,{className:"h-4 w-[250px]"})}),e.jsx(D,{})]})})})}),e.jsx(g,{children:e.jsx(y,{children:e.jsx(A,{control:S.control,name:"balanceB",render:({field:a})=>e.jsxs(C,{children:[e.jsxs(F,{children:["Swappable ",i.symbol," (",i.id,")"]}),e.jsx(P,{children:d?e.jsx(w,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:d.readable_balance_b}):e.jsx(j,{className:"h-4 w-[250px]"})}),e.jsx(D,{})]})})})})]}):null}),o&&o.length?e.jsx(e.Fragment,{children:e.jsx(A,{control:S.control,name:"sellAmount",render:({field:a})=>e.jsxs(C,{children:[e.jsx(F,{children:`Amount of ${s?s.symbol:"???"} to swap`}),e.jsx(P,{onChange:n=>{const t=n.target.value;/^[0-9]*\.?[0-9]*$/.test(t)&&G(t)},children:e.jsx(w,{label:`Amount of ${s?s.symbol:"???"} to swap`,value:f,placeholder:f,className:"mb-3"})}),e.jsx(D,{})]})})}):null,f&&d&&d.taker_fee_percent?e.jsx(e.Fragment,{children:e.jsx(A,{control:S.control,name:"marketFee",render:({field:a})=>e.jsxs(C,{children:[e.jsx(F,{children:"Pool fee"}),e.jsx(P,{children:e.jsx(w,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:`${(d.taker_fee_percent/1e4*f).toFixed(s.precision)} (${s.symbol}) (${d.taker_fee_percent/100}% fee)`})}),e.jsx(D,{})]})})}):null,u?e.jsx(A,{control:S.control,name:"networkFee",render:({field:a})=>e.jsxs(C,{children:[e.jsx(F,{children:"Network fee"}),e.jsx(P,{children:e.jsx(w,{disabled:!0,placeholder:`${ne} BTS`,className:"mb-3 mt-3"})}),r.id===r.referrer?e.jsxs(D,{children:["Rebate: ",ne*.8," BTS (vesting)"]}):null,e.jsx(D,{})]})}):null,d?e.jsx(e.Fragment,{children:e.jsx(A,{control:S.control,name:"buyAmount",render:({field:a})=>e.jsxs(C,{children:[e.jsx(F,{children:`Amount of ${i?i.symbol:"???"} you'll receive`}),e.jsx(P,{children:ze}),e.jsx(D,{})]})})}):null,!o||!f||!L||V!==!1?e.jsx(I,{className:"mt-5 mb-3",variant:"outline",disabled:!0,type:"submit",children:"Submit"}):e.jsx(I,{className:"mt-5 mb-3",variant:"outline",type:"submit",children:"Submit"})]})}),V?e.jsx(DeepLinkDialog,{operationName:"liquidity_pool_exchange",username:r.username,usrChain:r.chain,userID:r.id,dismissCallback:xe,headerText:`Exchanging ${f} ${s.symbol} for ${L} ${i.symbol}`,trxJSON:[{account:r.id,pool:o,amount_to_sell:{amount:ke(f,s.precision),asset_id:s.id},min_to_receive:{amount:ke(L,i.precision),asset_id:i.id},extensions:[]}]},`Exchanging${f}${s.symbol}for${L}${i.symbol}`):null,o&&!V?e.jsx(I,{variant:"outline",mt:"xl",onClick:()=>{const a=s;Z(i),ee(a)},children:"Swap buy/sell"}):null,o&&V?e.jsx(I,{variant:"outline",mt:"xl",disabled:!0,children:"Swap buy/sell"}):null,o?e.jsx("a",{href:`https://blocksights.info/#/pools/${o}${r.chain!=="bitshares"?"?network=testnet":""}`,target:"_blank",children:e.jsx(I,{variant:"outline",className:"ml-2",children:"Blocksights pool explorer"})}):null,d?e.jsxs(_e,{children:[e.jsx(ge,{asChild:!0,children:e.jsx(I,{className:"ml-2",variant:"outline",children:"Pool JSON"})}),e.jsxs(ye,{className:"sm:max-w-[550px] bg-white",children:[e.jsxs(Se,{children:[e.jsx(De,{children:"Liquidity Pool JSON"}),e.jsx(ve,{children:"Check out the details returned by the network for this pool"})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(ts,{className:"h-72 rounded-md border",children:e.jsx("pre",{children:JSON.stringify(d,null,2)})})})})]})]}):null]}):null]})]})}),s&&i?e.jsx(cs,{assetA:s.symbol,assetAData:s,assetB:i.symbol,assetBData:i}):null,e.jsxs("div",{className:"grid grid-cols-2 gap-5 mt-5",children:[o?e.jsx("div",{className:"grid grid-cols-1 gap-3",children:q&&d?e.jsxs(e.Fragment,{children:[e.jsx(le,{asset:i.symbol,assetData:i,assetDetails:Te,bitassetData:qe,marketSearch:U,chain:r.chain,usrBalances:q,type:"buy"}),e.jsx(le,{asset:s.symbol,assetData:s,assetDetails:Pe,bitassetData:Re,marketSearch:U,chain:r.chain,usrBalances:q,type:"sell"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(B,{children:"Quote asset"}),e.jsx($,{className:"text-lg",children:"Loading..."})]}),e.jsx(y,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"}),e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"})]})})]}),e.jsxs(g,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(B,{children:"Base asset"}),e.jsx($,{className:"text-lg",children:"Loading..."})]}),e.jsx(y,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"}),e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"})]})})]})]})}):null,e.jsx("div",{className:"grid grid-cols-1 gap-3",children:o&&s&&i?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:`/dex/index.html?market=${s.symbol}_${i.symbol}`,children:e.jsxs(g,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(B,{children:"Trade on the Dex instead?"}),e.jsxs($,{className:"text-sm",children:["Market: ",s.symbol,"/",i.symbol]})]}),e.jsx(y,{className:"text-sm pb-2",children:"You can manually create limit orders for trading pairs of your choice on the Bitshares DEX"})]})}),e.jsx("a",{href:`/dex/index.html?market=${u?.share_asset_symbol}_${s.symbol!=="BTS"?"BTS":s.symbol}`,children:e.jsxs(g,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(B,{children:"Purchase stake in this pool?"}),e.jsxs($,{className:"text-sm",children:["Share asset: ",u?.share_asset_symbol]})]}),e.jsx(y,{className:"text-sm pb-2",children:"Receive swap fee yield over time by owning a stake in the pool via a market limit order."})]})}),e.jsx("a",{href:`/stake/index.html?pool=${o}`,children:e.jsxs(g,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(B,{children:"Stake assets in this pool?"}),e.jsxs($,{className:"text-sm",children:["Share asset: ",u?.share_asset_symbol]})]}),e.jsx(y,{className:"text-sm pb-2",children:"Earn swap fees on assets staked in liquidity pools minus a small pool defined withdrawal fee."})]})}),e.jsx("a",{href:"/borrow/index.html",children:e.jsxs(g,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(B,{children:"Need to borrow some assets?"}),e.jsxs($,{className:"text-sm",children:["Borrow ",s.symbol," or ",i.symbol]})]}),e.jsx(y,{className:"text-sm pb-2",children:"DEX users lend assets at user defined rates. Borrow from DEX participants, with user defined rates."})]})}),d&&U&&q?e.jsx(le,{asset:d.share_asset_symbol,assetData:d.share_asset_details,assetDetails:Ie,bitassetData:null,marketSearch:U,chain:r.chain,usrBalances:q,type:"pool"}):e.jsxs(g,{children:[e.jsxs(k,{className:"pb-2 pt-4",children:[e.jsx(B,{children:"Pool share asset"}),e.jsx($,{className:"text-lg",children:"Loading..."})]}),e.jsx(y,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"}),e.jsx(j,{className:"h-4 w-[250px]"}),e.jsx(j,{className:"h-4 w-[200px]"})]})})]})]}):null})]})]}),r&&r.username&&r.username.length?e.jsx(Qe,{usr:r,resetCallback:()=>{Ye(),E(""),W(),he(),window.history.replaceState({},"","/pool/index.html"),Ge(),G(0),W(),Z(""),ee(""),setDeeplink(""),setTRXJSON(),ue()}}):null]})}export{gs as default};