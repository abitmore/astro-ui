import{I as ve,J as _e,u as e,K as $e,P as Ce}from"./button.GNxhEuHR.js";import{r as a}from"./index.ebYJtNMn.js";import{u as Ae,F as De,a as p,b,c as S,d as f,e as g,f as T}from"./form.K-qcZ4h1.js";import{F as ye}from"./index.esm.awlXaKq2.js";import{$ as X,g as Y,h as Z,i as ee,j as se,k as te,l as ne,u as Be,C as le,b as ae,c as re,d as ie,m as ce,A as Te,I as o,f as Pe}from"./CurrentUser.-qj3GEkM.js";import{A as Oe,a as Ee}from"./avatar.My1CVBdg.js";import{P as w,a as M,b as R}from"./popover.6F0wszCH.js";import{L as A,D as ke}from"./DeepLinkDialog.ItBmpkBJ.js";import"./User.s08ijyOS.js";import{c as Ie,a as we}from"./Assets.V2CieyEL.js";import{h as F,g as Me,b as H}from"./common.8EOjqkfr.js";import"./ExternalLink.dfYCZp39.js";import"./index.JRs5YgGT.js";function ss(s){const{t:l,i18n:n}=ve(_e.get(),{i18n:Ce}),t=Ae({defaultValues:{account:""}}),r=a.useSyncExternalStore(X.subscribe,X.get,(()=>!0)),i=a.useSyncExternalStore(Y.subscribe,Y.get,(()=>!0)),d=a.useSyncExternalStore(Z.subscribe,Z.get,(()=>!0)),c=a.useSyncExternalStore(ee.subscribe,ee.get,(()=>!0)),m=a.useSyncExternalStore(se.subscribe,se.get,(()=>!0)),x=a.useSyncExternalStore(te.subscribe,te.get,(()=>!0)),j=a.useSyncExternalStore(ne.subscribe,ne.get,(()=>!0)),h=a.useMemo((()=>r&&r.chain?r.chain:"bitshares"),[r]);Be(h??"bitshares",["bitAssetData","globalParams","marketSearch"]);const u=a.useMemo((()=>h&&(i||d)?"bitshares"===h?i:d:[]),[i,d,h]),N=a.useMemo((()=>h&&(x||j)?"bitshares"===h?x:j:[]),[x,j,h]),v=a.useMemo((()=>h&&(c||m)?"bitshares"===h?c:m:[]),[c,m,h]),[$,_]=a.useState(),[y,C]=a.useState(),[O,D]=a.useState(),[E,B]=a.useState(0),[P,k]=a.useState(0);a.useEffect((()=>{if(N&&N.length){const e=N.find((e=>45===e[0])),s=N.find((e=>17===e[0])),l=F(e[1].fee,5),n=F(s[1].fee,5);B(l),k(n)}}),[N]);const I=a.useMemo((()=>{if(v&&v.length&&window.location.search){const e=new URLSearchParams(window.location.search),s=Object.fromEntries(e.entries()),l=s&&s.id?s.id:null;return!l||!l.length||l&&!l.includes("1.3.")?void console.log("Invalid parameter"):(v&&v.length?v.map((e=>e.id)):[]).includes(l)?l:void console.log("Invalid parameter")}}),[v]),q=a.useMemo((()=>I&&I.length&&v?v.find((e=>e.id===I)):null),[I,v]),J=a.useMemo((()=>q&&u?u.find((e=>e.assetID===q.id)):null),[q,u]),L=a.useMemo((()=>{if(J&&u)return v.find((e=>e.id===J.collateral))}),[J,u]),G=a.useMemo((()=>{if(y&&y.current_feed&&L&&q)return parseFloat((F(parseInt(y.current_feed.settlement_price.quote.amount),L.p)/F(parseInt(y.current_feed.settlement_price.base.amount),q.p)).toFixed(L.p))}),[y,q,L]),z=a.useMemo((()=>{if($&&q&&L){return{finalSettlementFund:F(parseInt(y.settlement_fund),L.p),finalSettlementPrice:parseFloat((1/(F(y.settlement_price.quote.amount,L.p)/F(y.settlement_price.base.amount,q.p))).toFixed(q.p))}}}),[y,q,L]),K=a.useMemo((()=>{if(y&&q&&L){return{_debt:F(parseInt(y.individual_settlement_debt),q.p),_fund:F(parseInt(y.individual_settlement_fund),L.p)}}}),[y,q,L]);a.useEffect((()=>{let e;return J&&J&&r&&r.chain&&(e=Ie([r.chain,q.id,J.collateral,J.id]).subscribe((({data:e,error:s,loading:l})=>{e&&!s&&!l&&(_(e[0]),D(e[1]),C(e[2]))}))),()=>{e&&e()}}),[q,J,r]);const[U,V]=a.useState();a.useEffect((()=>{let e;return q&&r&&r.chain&&(e=we([r.chain,q.id]).subscribe((({data:e,error:s,loading:l})=>{e&&!s&&!l&&V(e)}))),()=>{e&&e()}}),[q,r]);const Q=a.useMemo((()=>{if($){const e=Me($.options.flags);return Object.keys(e).includes("disable_collateral_bidding")}}),[$]),[W,de]=a.useState(0),[oe,me]=a.useState(0),[xe,je]=a.useState(0),[he,pe]=a.useState(0),[ue,be]=a.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs(le,{children:[e.jsxs(ae,{children:[e.jsx(re,{children:l("Settlement:smartcoinSettlementFormTitle")}),e.jsx(ie,{children:z&&z.finalSettlementFund?l("Settlement:bidOnGlobalSettlementFundsDescription"):l("Settlement:forceSettleAssetsDescription")})]}),e.jsxs(ce,{children:[e.jsx(De,{...t,children:e.jsxs("form",{onSubmit:e=>{be(!0),e.stopPropagation(),e.preventDefault()},children:[e.jsx(p,{control:t.control,name:"account",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:z&&z.finalSettlementFund?l("Settlement:biddingAccount"):l("Settlement:assetSettlingAccount")}),e.jsx(f,{children:e.jsxs("div",{className:"grid grid-cols-8 mt-4",children:[e.jsx("div",{className:"col-span-1 ml-5",children:r&&r.username?e.jsx(Te,{size:40,name:r.username,extra:"Target",expression:{eye:"normal",mouth:"open"},colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]}):e.jsx(Oe,{children:e.jsx(Ee,{children:"?"})})}),e.jsx("div",{className:"col-span-7",children:e.jsx(o,{disabled:!0,placeholder:"Bitshares account (1.2.x)",className:"mb-3",value:`${r.username} (${r.id})`,readOnly:!0})})]})}),e.jsx(g,{})]})}),e.jsx(p,{control:t.control,name:"selectedAsset",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:selectedAsset")}),e.jsx(f,{children:e.jsx("span",{className:"grid grid-cols-8",children:e.jsx("span",{className:"col-span-6",children:e.jsx(o,{disabled:!0,placeholder:"Bitshares smartcoin (1.3.x)",className:"mb-1",value:`${q?q.s:""} (${q?q.id:""})`,readOnly:!0})})})}),e.jsx(g,{})]})}),e.jsx(p,{control:t.control,name:"currentFeedPrice",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:currentFeedPrice")})," ",e.jsx(f,{children:e.jsx("span",{className:"grid grid-cols-8",children:e.jsx("span",{className:"col-span-6",children:q&&L?e.jsx(o,{disabled:!0,className:"mb-1",value:`${G?(1/G).toFixed(q.p):0} ${q?q.s:""}/${L?L.s:""}`,readOnly:!0}):e.jsx(o,{disabled:!0,className:"mb-1",value:"",readOnly:!0})})})}),e.jsx(g,{})]})}),z&&z.finalSettlementFund?e.jsxs(e.Fragment,{children:[e.jsx(p,{control:t.control,name:"settlementPrice",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:finalSettlementPrice")})," ",e.jsx(f,{children:e.jsx("span",{className:"grid grid-cols-8",children:e.jsx("span",{className:"col-span-6",children:e.jsx(o,{disabled:!0,className:"mb-1",value:`${z.finalSettlementPrice} ${q.s}/${L.s}`,readOnly:!0})})})}),e.jsx(g,{})]})}),e.jsx(p,{control:t.control,name:"fundsAvailable",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:settlementFundsAvailable")})," ",e.jsx(f,{children:e.jsx("span",{className:"grid grid-cols-8",children:e.jsx("span",{className:"col-span-6",children:e.jsx(o,{disabled:!0,className:"mb-1",value:`${z.finalSettlementFund} ${L.s}`,readOnly:!0})})})}),e.jsx(g,{})]})}),e.jsx(p,{control:t.control,name:"fundingRatio1",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:fundingRatio")}),e.jsx(f,{children:e.jsxs("span",{className:"grid grid-cols-8",children:[e.jsx("span",{className:"col-span-2 mb-1",children:e.jsx(o,{disabled:!0,value:`${(1/G/z.finalSettlementPrice*100).toFixed(2)} %`,readOnly:!0})}),e.jsx("span",{className:"col-span-2 text-red-500",children:e.jsx(o,{disabled:!0,value:`-${(100-1/G/z.finalSettlementPrice*100).toFixed(2)}%`,readOnly:!0})})]})}),e.jsx(g,{})]})}),e.jsx(p,{control:t.control,name:"additionalCollateral",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:additionalCollateral")}),e.jsx(T,{children:l("Settlement:additionalCollateralDescription",{asset:q.s})}),e.jsx(f,{children:e.jsxs("span",{className:"grid grid-cols-12",children:[e.jsx("span",{className:"col-span-8",children:e.jsx(o,{placeholder:xe?`${xe} ${L.s}`:`0 ${L.s}`,readOnly:!0,disabled:!0,className:"mb-3"})}),e.jsx("span",{className:"col-span-4 ml-3",children:e.jsxs(w,{children:[e.jsx(M,{children:e.jsx("span",{className:"inline-block border border-grey rounded pl-4 pb-1 pr-4",children:e.jsx(A,{children:l("Settlement:changeAmount")})})}),e.jsxs(R,{children:[e.jsx(A,{children:l("Settlement:provideNewAmount")}),e.jsx(o,{placeholder:xe,className:"mb-2 mt-1",onChange:e=>{const s=e.target.value;s&&s.length&&/^[0-9]*\.?[0-9]*$/.test(s)&&je(parseFloat(s).toFixed(L.p))}})]})]})})]})})]})}),e.jsx(p,{control:t.control,name:"debtCovered",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:totalDebtCoveredByBid")}),e.jsx(T,{children:l("Settlement:totalDebtCoveredByBidDescription")}),e.jsx(f,{children:e.jsxs("span",{className:"grid grid-cols-12",children:[e.jsx("span",{className:"col-span-8",children:e.jsx(o,{placeholder:he?`${he} ${q.s}`:`0 ${q.s}`,readOnly:!0,disabled:!0,className:"mb-3"})}),e.jsx("span",{className:"col-span-4 ml-3",children:e.jsxs(w,{children:[e.jsx(M,{children:e.jsx("span",{className:"inline-block border border-grey rounded pl-4 pb-1 pr-4",children:e.jsx(A,{children:l("Settlement:changeTotal")})})}),e.jsxs(R,{children:[e.jsx(A,{children:l("Settlement:provideNewTotal")}),e.jsx(o,{placeholder:he,className:"mb-2 mt-1",onChange:e=>{const s=e.target.value;s&&s.length&&/^[0-9]*\.?[0-9]*$/.test(s)&&pe(parseFloat(s).toFixed(q.p))}})]})]})})]})})]})})]}):null,K&&(K._debt||K._fund)?e.jsxs(e.Fragment,{children:[e.jsx(p,{control:t.control,name:"isd",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:individualSettlementDebt")})," ",e.jsx(f,{children:e.jsx("span",{className:"grid grid-cols-8",children:e.jsx("span",{className:"col-span-6",children:e.jsx(o,{disabled:!0,className:"mb-1",value:`${K._debt} ${q.s}`,readOnly:!0})})})}),e.jsx(g,{})]})}),e.jsx(p,{control:t.control,name:"isf",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:individualSettlementFund")})," ",e.jsx(f,{children:e.jsx("span",{className:"grid grid-cols-8",children:e.jsx("span",{className:"col-span-6",children:e.jsx(o,{disabled:!0,className:"mb-1",value:`${K._fund} ${L.s}`,readOnly:!0})})})}),e.jsx(g,{})]})}),e.jsx(p,{control:t.control,name:"fundingRatio2",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:fundingRatio")}),e.jsx(f,{children:e.jsxs("span",{className:"grid grid-cols-8",children:[e.jsx("span",{className:"col-span-2 mb-1",children:e.jsx(o,{disabled:!0,value:`${(K._debt*G/K._fund*100).toFixed(2)} %`,readOnly:!0})}),e.jsx("span",{className:"col-span-2 text-red-500",children:e.jsx(o,{disabled:!0,value:`-${(100-K._debt*G/K._fund*100).toFixed(2)}%`,readOnly:!0})})]})}),e.jsx(g,{})]})}),e.jsx(p,{control:t.control,name:"ForceSettleAmount",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:forceSettleAmount")}),e.jsx(T,{children:l("Settlement:forceSettleAmountDescription")}),e.jsx(f,{children:e.jsxs("span",{className:"grid grid-cols-12",children:[e.jsx("span",{className:"col-span-8",children:e.jsx(o,{placeholder:W?`${W} ${q.s}`:`0 ${q.s}`,readOnly:!0,disabled:!0,className:"mb-3"})}),e.jsx("span",{className:"col-span-4 ml-3",children:e.jsxs(w,{children:[e.jsx(M,{children:e.jsx("span",{className:"inline-block border border-grey rounded pl-4 pb-1 pr-4",children:e.jsx(A,{children:l("Settlement:changeAmount")})})}),e.jsxs(R,{children:[e.jsx(A,{children:l("Settlement:provideNewForceSettleAmount")}),e.jsx(o,{placeholder:W,className:"mb-2 mt-1",onChange:e=>{const s=e.target.value;if(s&&s.length&&/^[0-9]*\.?[0-9]*$/.test(s)){de(parseFloat(s).toFixed(q.p));const e=parseFloat((K._debt/K._fund*s).toFixed(L.p));me(e)}}})]})]})})]})}),W&&K._debt&&W>K._debt?e.jsx(g,{children:l("Settlement:forceSettleAmountExceedsDebt")}):null]})}),e.jsx(p,{control:t.control,name:"totalReceiving",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:totalAmountReceive")}),e.jsx(T,{children:l("Settlement:totalAmountReceiveDescription",{asset:q.s})}),e.jsx(f,{children:e.jsxs("span",{className:"grid grid-cols-12",children:[e.jsx("span",{className:"col-span-8",children:e.jsx(o,{placeholder:oe?`${oe} ${L.s}`:`0 ${L.s}`,readOnly:!0,disabled:!0,className:"mb-1"})}),e.jsx("span",{className:"col-span-4 ml-3",children:e.jsxs(w,{children:[e.jsx(M,{children:e.jsx("span",{className:"inline-block border border-grey rounded pl-4 pb-1 pr-4",children:e.jsx(A,{children:l("Settlement:changeTotal")})})}),e.jsxs(R,{children:[e.jsx(A,{children:l("Settlement:provideNewTotalAmount")}),e.jsx(o,{placeholder:oe,className:"mb-2 mt-1",onChange:e=>{const s=e.target.value;s&&s.length&&/^[0-9]*\.?[0-9]*$/.test(s)&&(me(parseFloat(s).toFixed(L.p)),de((s/G).toFixed(q.p)))}})]})]})})]})}),e.jsx(g,{children:l("Settlement:payingPremium",{premium:(100-K._debt*G/K._fund*100).toFixed(2)})})]})})]}):null,e.jsx(p,{control:t.control,name:"fee",render:({field:s})=>e.jsxs(b,{children:[e.jsx(S,{children:l("Settlement:networkFee")}),e.jsx(T,{children:l("Settlement:operation",{operation:z&&z.finalSettlementFund?45:17})}),e.jsx(f,{children:e.jsx("span",{className:"grid grid-cols-8",children:e.jsx("span",{className:"col-span-6",children:e.jsx(o,{disabled:!0,className:"mb-1",value:`${z&&z.finalSettlementFund?E:P} ${"Bitshares"===r.chain?"BTS":"TEST"}`,readOnly:!0})})})}),e.jsx(g,{})]})}),y&&y.options.extensions.force_settle_fee_percent?e.jsx(g,{children:l("Settlement:additionalForceSettlementFee",{fee:y.options.extensions.force_settle_fee_percent/100})}):null,e.jsx($e,{className:"mt-5 mb-3",type:"submit",children:l("Settlement:submit")}),Q?e.jsx(g,{children:l("Settlement:collateralBiddingDisabled")}):null]})}),z&&(!z||z.finalSettlementFund)||K&&(!K||K._debt&&K._fund)?null:"No settlement funds available"]})]}),U&&U.length?e.jsxs(le,{children:[e.jsxs(ae,{children:[e.jsx(re,{children:l("Settlement:existingCollateralBids")}),e.jsx(ie,{children:l("Settlement:existingCollateralBidsDescription")})]}),e.jsxs(ce,{children:[e.jsxs("div",{className:"grid grid-cols-5",children:[e.jsx("div",{className:"col-span-1",children:l("Settlement:bidder")}),e.jsx("div",{className:"col-span-1",children:l("Settlement:collateral")}),e.jsx("div",{className:"col-span-1",children:l("Settlement:debt")}),e.jsx("div",{className:"col-span-1",children:l("Settlement:bidPrice")}),e.jsx("div",{className:"col-span-1",children:l("Settlement:ratio")})]}),e.jsx(ye,{height:500,itemCount:U.length,itemSize:225,className:"w-full",children:({index:s,style:l})=>{const n=U[s],t=F(n.bid.base.amount,L.p),a=F(n.bid.quote.amount,q.p),r=parseFloat((t/a).toFixed(L.p)),i=parseFloat((1/G/r*100).toFixed(2));return e.jsxs("div",{className:"grid grid-cols-4 text-sm",style:l,children:[e.jsx("div",{className:"col-span-1",children:n.bidder}),e.jsx("div",{className:"col-span-1",children:t}),e.jsx("div",{className:"col-span-1",children:a}),e.jsx("div",{className:"col-span-1",children:r}),e.jsx("div",{className:"col-span-1",children:i})]})}})]})]}):null,ue?e.jsx(ke,{operationName:z&&z.finalSettlementFund?"bid_collateral":"asset_settle",username:r.username,usrChain:r.chain,userID:r.id,dismissCallback:be,headerText:z&&z.finalSettlementFund?l("Settlement:biddingOnDebt",{asset:q.s,collateral:L.s}):l("Settlement:settlingFor",{forceSettleAmount:W,asset:q.s,totalReceiving:oe,collateral:L.s}),trxJSON:[z&&z.finalSettlementFund?{bidder:r.id,additional_collateral:{amount:H(xe,L.p),asset_id:L.id},debt_covered:{amount:H(he,q.p),asset_id:q.id},extensions:[]}:{account:r.id,amount:{amount:H(W,q.p),asset_id:q.id},extensions:[]}]},z&&z.finalSettlementFund?`bidCollateral${L.s}Debt${q.s}`:`Settling${W}${q.s}for${oe}${L.s}`):null]}),e.jsx("div",{className:"grid grid-cols-1 mt-5",children:r&&r.username&&r.username.length?e.jsx(Pe,{usr:r}):null})]})})}export{ss as default};