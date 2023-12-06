import{u as e,I as J}from"./button.py8r9pgQ.js";import{r as t}from"./index.vR8cGMCg.js";import{u as Fe,F as ke,a as d,b as u,c as m,d as h,f as x,e as v}from"./form.GftYXjjA.js";import{F as Ee}from"./index.esm.8fBdem9M.js";import{$ as ae,m as te,n as le,o as ne,p as oe,t as ie,v as ce,u as De,C as X,b as G,c as K,d as de,k as Q,A as ue,I as g,l as me,f as Me}from"./CurrentUser.RIfKambw.js";import{S as he,a as xe,b as fe,c as je,d as L}from"./select.tdaGh0LQ.js";import{A as C,a as A}from"./avatar.R1pvOsLd.js";import{h as S,e as pe}from"./common.X_7DDhag.js";import{c as Ie}from"./User.yt9xOv9l.js";import{D as Pe}from"./DeepLinkDialog.EofcCPWO.js";import{E as Re}from"./ExternalLink.T2a5i_k0.js";import"./index.f2GGseSc.js";import"./index.7dNGbZe0.js";import"./index.TKWSAka7.js";function Oe(Z){var c=new Date(Z),i=new Date,T=c-i,B=Math.round(T/1e3/60/60);return B}function es(Z){const c=Fe({defaultValues:{account:""}}),i=t.useSyncExternalStore(ae.subscribe,ae.get,()=>!0),T=t.useSyncExternalStore(te.subscribe,te.get,()=>!0),B=t.useSyncExternalStore(le.subscribe,le.get,()=>!0),V=t.useSyncExternalStore(ne.subscribe,ne.get,()=>!0),U=t.useSyncExternalStore(oe.subscribe,oe.get,()=>!0),q=t.useSyncExternalStore(ie.subscribe,ie.get,()=>!0),Y=t.useSyncExternalStore(ce.subscribe,ce.get,()=>!0),f=t.useMemo(()=>i&&i.chain?i.chain:"bitshares",[i]);De(f??"bitshares",["assets","globalParams","offers"]);const $=t.useMemo(()=>f&&(T||B)?f==="bitshares"?T:B:[],[T,B,f]),P=t.useMemo(()=>f&&(V||U)?f==="bitshares"?V:U:[],[V,U,f]),R=t.useMemo(()=>f&&(q||Y)?f==="bitshares"?q:Y:[],[q,Y,f]),[ee,be]=t.useState(0);t.useEffect(()=>{if(P&&P.length){const r=P.find(o=>o[0]===72),n=S(r[1].fee,5);be(n)}},[P]);const[se,re]=t.useState(!1),[l,ge]=t.useState(null),[s,ye]=t.useState(null);t.useEffect(()=>{async function r(){const n=new URLSearchParams(window.location.search),b=Object.fromEntries(n.entries()).id;if(b){const _=R.find(I=>I.id===b);return _||null}else return console.log("Credit offer parameter not found"),null}R&&R.length&&r().then(n=>{if(!n){re(!0);return}const o=$.find(b=>b.id===n.asset_type);re(!1),ge(o),ye(n)})},[R]);const[z,ve]=t.useState(),[F,we]=t.useState([]);t.useEffect(()=>{let r;return i&&i.id&&(r=Ie([i.chain,i.id]).subscribe(({data:o,error:b,loading:_})=>{o&&!b&&!_&&(we(o.map(I=>I.asset_id)),ve(o))})),()=>{r&&r()}},[i]);const[j,_e]=t.useState(null),k=t.useMemo(()=>s&&s.acceptable_collateral?s.acceptable_collateral.map(r=>r[0]).map(r=>$.find(o=>o.id===r)):[],[s,$]),$e=({index:r,style:n})=>{const o=k[r];return e.jsx(L,{value:o.id,style:n,children:`${o.symbol} (${o.id})`})},N=t.useMemo(()=>s&&l?S(s.current_balance,l.precision):0,[s,l]),E=t.useMemo(()=>s&&l?S(s.min_deal_amount,l.precision):1,[s,l]),[H,O]=t.useState(E??1),[w,Ne]=t.useState(0),[p,D]=t.useState();t.useEffect(()=>{const r=setTimeout(()=>{Ne(H)},1e3);return()=>clearTimeout(r)},[H]),t.useEffect(()=>{if(!N){D(0);return}if(w)if(w>N)D(N),O(N);else if(w<E)D(E),O(E);else if(w.toString().split(".").length>1&&w.toString().split(".")[1].length>l.precision){const r=parseFloat(w).toFixed(l.precision);D(r),O(r)}else D(w)},[w,N]);const a=t.useMemo(()=>{if(j&&F&&$&&z){const r=$.find(o=>o.id===j),n=z.find(o=>o.asset_id===j);return{amount:n?S(n.amount,r.precision):0,holding:F.includes(j),symbol:r.symbol,precision:r.precision,id:r.id,isBitasset:!!r.bitasset_data_id}}},[j,F,$,z]),Se=t.useMemo(()=>{if(s){let r=s.max_duration_seconds/3600,n=new Date;n.setHours(n.getHours()+r);let o=`${n.getDate()}/${n.getMonth()+1}/${n.getFullYear()}`;return r>24?`${Math.floor(r/24)} days (due by ${o})`:`${r.toFixed(r<1?2:0)} hours (due by ${o})`}},[s]),Ce=t.useMemo(()=>{if(s){const r=Oe(s.auto_disable_time);let n=new Date(s.auto_disable_time),o=`${n.getDate()}/${n.getMonth()+1}/${n.getFullYear()}`;return r>24?`${Math.floor(r/24)} days (on ${o})`:`${r.toFixed(r<1?2:0)} hours (on ${o})`}},[s]),M=t.useMemo(()=>{if(p&&a&&s){let r=0;const n=s.acceptable_collateral.find(_=>_[0]===a.id),o=n[1].base,b=n[1].quote;if(b.asset_id===a.id){const _=S(b.amount,a.precision)/S(o.amount,$.find(I=>I.id===o.asset_id).precision);r+=p*_}return r.toFixed(a.precision)}},[p,a,s]),[Ae,W]=t.useState(!1),[y,Te]=t.useState(),Be=t.useMemo(()=>{if(y){if(y==="no_auto_repayment")return 0;if(y==="only_full_repayment")return 1;if(y==="allow_partial_repayment")return 2}},[y]);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[se?e.jsxs(X,{children:[e.jsxs(G,{className:"pb-1 mb-3 mt-3",children:[e.jsx(K,{children:"Sorry, couldn't find your requested credit offer"}),e.jsxs(de,{className:"pt-2",children:["The credit offer is either not active, or doesn't exist.",e.jsx("br",{}),"Check your URL parameters and try again."]})]}),e.jsx(Q,{children:e.jsx("a",{href:"/offers/index.html",children:e.jsx(J,{variant:"",className:"h-6",children:"Return to credit offer overview"})})})]}):null,se?null:e.jsxs(X,{children:[e.jsxs(G,{className:"pb-1",children:[e.jsx(K,{children:s?e.jsxs(e.Fragment,{children:["🏦 Viewing offer #",s.id," created by"," ",s.owner_name??"?"," (",s.owner_account,")"]}):"loading terms of offer..."}),e.jsxs(de,{children:["This is an user created credit offer on the Bitshares DEX.",e.jsx("br",{}),"Thoroughly read the terms of the offer before proceeding to Beet."]})]}),e.jsx(Q,{children:e.jsx("div",{className:"grid grid-cols-1 gap-2 mt-3",children:e.jsx("div",{className:"col-span-1",children:e.jsx(ke,{...c,children:e.jsxs("form",{onSubmit:()=>{W(!0),event.preventDefault()},children:[e.jsx(d,{control:c.control,name:"borrowerAccount",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:"Borrowing account"}),e.jsx(h,{children:e.jsxs("div",{className:"grid grid-cols-8 mt-4",children:[e.jsx("div",{className:"col-span-1 ml-5",children:i&&i.username?e.jsx(ue,{size:40,name:i.username,extra:"Target",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]}):e.jsx(C,{children:e.jsx(A,{children:"?"})})}),e.jsx("div",{className:"col-span-7",children:e.jsx(g,{disabled:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-1 mt-1",value:i?`${i.username} (${i.id})`:"",readOnly:!0})})]})}),e.jsx(x,{children:"The account which will broadcast the credit offer accept operation."}),e.jsx(v,{})]})}),e.jsx(d,{control:c.control,name:"lenderAccount",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:e.jsxs("div",{className:"grid grid-cols-2 mt-4",children:[e.jsx("div",{className:"col-span-1",children:"Lending account"}),e.jsx("div",{className:"col-span-1 text-right",children:s?e.jsx(Re,{classnamecontents:"text-blue-500",type:"text",text:`View ${s.owner_name}'s account`,hyperlink:`https://blocksights.info/#/accounts/${s.owner_name}`}):null})]})}),e.jsx(h,{children:e.jsxs("div",{className:"grid grid-cols-8 mt-4",children:[e.jsx("div",{className:"col-span-1 ml-5",children:s&&s.owner_name?e.jsx(ue,{size:40,name:s.owner_name,extra:"Target",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]}):e.jsx(C,{children:e.jsx(A,{children:"?"})})}),e.jsx("div",{className:"col-span-7",children:e.jsx(g,{disabled:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-1 mt-1",value:s?`${s.owner_name} (${s.owner_account})`:"",readOnly:!0})})]})}),e.jsx(x,{children:`This is the user from whom you'll be borrowing ${l?.symbol} from.`}),e.jsx(v,{})]})}),e.jsx(d,{control:c.control,name:"amountAvailable",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:l&&s?`Amount of ${l.symbol} (
                                      ${s.asset_type}) available to
                                      borrow from this lender`:"loading..."}),e.jsx(h,{children:e.jsxs("div",{className:"grid grid-cols-8 mt-4",children:[e.jsx("div",{className:"col-span-1 ml-5",children:l?e.jsx(C,{children:e.jsx(A,{children:e.jsx("div",{className:"text-sm",children:l.bitasset_data_id?"MPA":"UIA"})})}):e.jsx(C,{children:e.jsx(A,{children:"?"})})}),e.jsx("div",{className:"col-span-7",children:e.jsx(g,{disabled:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-1 mt-1",value:s&&l?`${S(s.current_balance,l.precision)} ${l.symbol}`:"loading...",readOnly:!0})})]})}),e.jsx(x,{children:`${s?.owner_name} is generously offering to lend you this much ${l?.symbol}, assuming you agree to their terms.`})]})}),e.jsx(d,{control:c.control,name:"backingCollateral",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("div",{className:"grid grid-cols-2 mt-3",children:e.jsx("div",{className:"mt-1",children:"Backing collateral for credit deal"})})}),e.jsx(h,{children:e.jsxs("div",{className:"grid grid-cols-8",children:[e.jsx("div",{className:"col-span-1 ml-5 mt-1",children:l?e.jsx(C,{children:e.jsx(A,{children:e.jsxs("div",{className:"text-sm",children:[a?null:"?",a&&a.isBitasset?"MPA":null,a&&!a.isBitasset?"UIA":null]})})}):e.jsx(C,{children:e.jsx(A,{children:"?"})})}),e.jsx("div",{className:"col-span-7 mt-2",children:e.jsxs(he,{onValueChange:n=>{_e(n)},children:[e.jsx(xe,{className:"mb-1",children:e.jsx(fe,{placeholder:a?`${a.symbol} (${a.id})`:"Select your backing collateral.."})}),e.jsx(je,{className:"bg-white",children:k&&k.length?e.jsx(Ee,{height:100,itemCount:k.length,itemSize:35,className:"w-full",initialScrollOffset:j?k.map(n=>n.id).indexOf(j.id)*35:0,children:$e}):null})]})})]})}),e.jsx(x,{children:`To borrow ${a?.symbol} from ${s?.owner_name}, choose between the above accepted backing collateral assets.`}),F&&j&&!F.includes(j)?e.jsx(v,{children:"Account doesn't hold this backing collateral asset."}):null]})}),e.jsx(d,{control:c.control,name:"borrowAmount",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-1 mt-5",children:[e.jsx("div",{className:"col-span-1",children:`Amount of ${l?l.symbol:"?"} you plan on borrowing`}),e.jsx("div",{className:"col-span-1 text-right",children:`Available: ${E??"?"} to ${N??"?"} ${l?.symbol}`})]})}),N?e.jsx(h,{onChange:n=>{const o=n.target.value;/^[0-9]*\.?[0-9]*$/.test(o)&&O(o)},children:e.jsx(g,{value:H,className:"mb-3"})}):e.jsx(h,{children:e.jsx(g,{disabled:!0,value:0,className:"mb-3",readOnly:!0})}),e.jsx(x,{children:`Input the amount of ${l?.symbol} you'd like to borrow from ${s?.owner_name}.`}),e.jsx(v,{})]})}),e.jsx(d,{control:c.control,name:"repayMethod",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("div",{className:"grid grid-cols-2 mt-3",children:e.jsx("div",{className:"mt-1",children:"Credit offer repay method"})})}),e.jsx(h,{children:e.jsxs(he,{onValueChange:n=>{Te(n)},children:[e.jsx(xe,{className:"mb-1",children:e.jsx(fe,{placeholder:"Select your repay method.."})}),e.jsxs(je,{className:"bg-white",children:[e.jsx(L,{value:"no_auto_repayment",children:"No auto repayment"}),e.jsx(L,{value:"only_full_repayment",children:"Only full repayment"}),e.jsx(L,{value:"allow_partial_repayment",children:"Allow partial repayment"})]})]})}),e.jsx(x,{children:"Select between the different repayment methods."}),y?e.jsxs(v,{children:[y==="no_auto_repayment"?"You will not automatically repay this loan.":null,y==="only_full_repayment"?"You will automatically repay this loan in full when your account balance is sufficient.":null,y==="allow_partial_repayment"?"You will automatically repay this loan as much as possible using your available account balance.":null]}):null]})}),j?e.jsx(d,{control:c.control,name:"requiredCollateralAmount",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-1 mt-5",children:[e.jsx("div",{className:"col-span-1",children:"Required collateral"}),e.jsx("div",{className:"col-span-1 text-right",children:a?`Your current balance: ${a.amount} ${a.symbol}`:"Loading balance..."})]})}),e.jsx(h,{children:e.jsx(g,{disabled:!0,value:`${M??"0"} ${a?a.symbol:""}`,className:"mb-3",readOnly:!0})}),e.jsx(x,{children:p&&l?`In order to borrow ${p??""} ${l?l.symbol:""} you'll
                                need to provide the following amount of collateral to
                                secure the deal.`:"Enter a valid borrow amount to calculate required collateral."}),a&&a.holding&&a.amount<M?e.jsx(v,{children:`Your account has an insufficient ${a.symbol} balance. You'll need at least ${(M-a.amount).toFixed(a.precision)} more ${a.symbol}.`}):null,a&&!a.holding?e.jsx(v,{children:"Your account does not hold this asset. Try another form of backing collateral if possible."}):null]})}):null,e.jsx(d,{control:c.control,name:"repayPeriod",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("div",{className:"grid grid-cols-2 gap-1 mt-5",children:e.jsx("div",{className:"col-span-1",children:"Repay period"})})}),e.jsx(h,{children:e.jsx(g,{disabled:!0,value:Se??"loading...",className:"mb-3",readOnly:!0})}),e.jsx(x,{children:"The maximum duration of the credit deal; repay the loan within this period to avoid loss of collateral."})]})}),e.jsx(d,{control:c.control,name:"offerValidity",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("div",{className:"grid grid-cols-2 gap-1 mt-5",children:e.jsx("div",{className:"col-span-1",children:"Credit offer expiry"})})}),e.jsx(h,{children:e.jsx(g,{disabled:!0,value:Ce??"Loading...",className:"mb-3",readOnly:!0})}),e.jsx(x,{children:"When this offer will no longer exist."})]})}),e.jsx(d,{control:c.control,name:"estimatedFee",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-1 mt-5",children:[e.jsx("div",{className:"col-span-1",children:"Estimated borrow fee"}),e.jsx("div",{className:"col-span-1 text-right",children:s?`${s.fee_rate/1e4}% of borrowed
                                    amount`:"Loading borrow fee.."})]})}),e.jsx(h,{children:e.jsx(g,{disabled:!0,value:p?`${p*.01} ${l?l.symbol:"?"}`:`0 ${l?l.symbol:"?"}`,className:"mb-3",readOnly:!0})}),e.jsx(x,{children:`This is how much ${l?l.symbol:"?"} that ${s?s.owner_name:"?"} will earn once this deal has completed.`}),e.jsx(v,{})]})}),e.jsx(d,{control:c.control,disabled:!0,name:"fee",render:({field:r})=>e.jsxs(u,{children:[e.jsx(m,{children:"Network fee"}),e.jsx(g,{disabled:!0,value:`${ee??"?"} BTS`,label:"fees",readOnly:!0}),e.jsx(x,{children:"The cost to broadcast your credit deal operation onto the network."}),i&&i.id===i.referrer?e.jsxs(v,{children:["LTM rebate: ",.8*ee," BTS (vesting)"]}):null]})})]})})})})}),e.jsx(me,{children:a&&!a.holding||a&&a.holding&&a.amount<M?e.jsx(J,{disabled:!0,children:"Submit"}):e.jsx(J,{onClick:()=>W(!0),children:"Submit"})})]})]}),Ae?e.jsx(Pe,{operationName:"credit_offer_accept",username:i.username,usrChain:i.chain,userID:i.id,dismissCallback:W,headerText:`Borrowing ${p} ${l.symbol} from ${s.owner_name} (${s.owner_account})`,trxJSON:[{borrower:i.id,offer_id:s.id,borrow_amount:{amount:pe(p,l.precision),asset_id:l.id},collateral:{amount:pe(M,a.precision),asset_id:a.id},max_fee_rate:s.fee_rate,min_duration_seconds:s.max_duration_seconds,extensions:{auto_repay:Be??0}}]},`Borrowing${p}${l.symbol}from${s.owner_name}(${s.owner_account})`):null,e.jsx("div",{className:"grid grid-cols-1 mt-5",children:e.jsxs(X,{children:[e.jsx(G,{children:e.jsx(K,{children:"Risks of Peer-to-Peer Loans"})}),e.jsxs(Q,{className:"text-sm",children:["Peer-to-peer lending involves certain risks, including:",e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2 pl-2",children:[e.jsx("li",{children:"Collateral Risk: As a borrower, you may fail to repay the loan on time, forfeiting the loan collateral in full."}),e.jsx("li",{children:"Liquidity Risk: If you sell the assets you borrow, it may not be possible to re-acquire the assets in time to repay the loan, or you may do so at a loss."}),e.jsx("li",{children:"Platform Risk: If an asset's owner company goes out of business and ceases an exchange backed asset's operation, you could lose funds."}),e.jsx("li",{children:"User Risk: As credit offers are fully user generated, you could be interacting with untrustworthy assets or users who put funds at risk."}),e.jsx("li",{children:"Network Risk: Whilst blockchain downtime is very rare, it's a risk to consider when creating credit deals which span a period of time. Auto loan repay methods are available to offset such risk."})]})]}),e.jsx(me,{className:"text-sm",children:"Please consider these risks and thoroughly evaluate the terms of offers before proceeding with a credit deal."})]})}),e.jsx("div",{className:"grid grid-cols-1 mt-5",children:i&&i.username&&i.username.length?e.jsx(Me,{usr:i}):null})]})})}export{es as default};