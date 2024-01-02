import{u as Ce,l as ye,j as e,i as we}from"./utils.CoSl1RWq.js";import{r as a}from"./index.sXsv9c-e.js";import{F as ae}from"./index.esm.yz4690tU.js";import{u as Se,F as $e,a as D,b as C,c as y,d as w,e as j,f as k}from"./form.O_r1isSb.js";import{$ as ie,C as J,a as W,b as G,c as K,e as ne,f as Te}from"./users.R3-HkUNM.js";import{l as ke,n as ve,o as Fe,p as Ne,q as _e}from"./dialog.8HOXxM8G.js";import{h as v,T as Be,a as Ee,c as R,d as oe,b as ce}from"./common.1hfIZstp.js";import{B as L}from"./button._UsuMLkQ.js";import{I as S}from"./input.LAd1ue8h.js";import{f as de,g as me,d as ue,e as be,u as Ae}from"./Init.zlIhPQa1.js";import{b as Re,d as Le}from"./User.D7H4eiaX.js";import{D as Ie}from"./DeepLinkDialog.euDoZ0lZ.js";import{E as I}from"./ExternalLink.su8-pHSR.js";import"./index.uYDp4DLV.js";import"./index.QjywInIh.js";import"./index.0G9Tm10-.js";import"./index.sg5Asqa-.js";function is(s){const{t:r,i18n:l}=Ce(ye.get(),{i18n:we}),i=Se({defaultValues:{account:""}}),t=a.useSyncExternalStore(ie.subscribe,ie.get,(()=>!0)),n=a.useSyncExternalStore(de.subscribe,de.get,(()=>!0)),o=a.useSyncExternalStore(me.subscribe,me.get,(()=>!0)),d=a.useSyncExternalStore(ue.subscribe,ue.get,(()=>!0)),c=a.useSyncExternalStore(be.subscribe,be.get,(()=>!0)),m=a.useMemo((()=>t&&t.chain?t.chain:"bitshares"),[t]);Ae(m??"bitshares",["assets","globalParams"]);const x=a.useMemo((()=>m&&(n||o)?"bitshares"===m?n:o:[]),[n,o,m]),b=a.useMemo((()=>m&&(d||c)?"bitshares"===m?d:c:[]),[d,c,m]),[h,u]=a.useState(0);a.useEffect((()=>{if(b&&b.length){const e=b.find((e=>73===e[0])),s=v(e[1].fee,5);u(s)}}),[b]);const[p,g]=a.useState();a.useEffect((()=>{let e;return t&&t.id&&(e=Re([t.chain,t.id]).subscribe((({data:e,error:s,loading:r})=>{e&&!s&&!r&&g(e)}))),()=>{e&&e()}}),[t]);const[f,$]=a.useState();function N({style:s,res:l,type:n}){const o=x.find((e=>e.id===l.debt_asset)),d=x.find((e=>e.id===l.collateral_asset)),c=v(l.debt_amount,o.precision),m=v(l.collateral_amount,d.precision),b=((new Date(l?.latest_repay_time)-new Date)/36e5).toFixed(2);let u="";if(b<24)u=` ${b} hours`;else{const e=(b/24).toString().split(".")[0],s=24*parseFloat(`0.${(b/24).toString().split(".")[1]}`),r=60*parseFloat(`0.${s.toString().split(".")[1]}`);u=` ${e} days ${s.toFixed(0)} hours ${r.toFixed(0)} mins`}const[g,f]=a.useState(!1),[$,N]=a.useState(!1),[_,F]=a.useState(),E=a.useMemo((()=>{if(_&&c&&m)return _/c*m}),[_,c,m]),R=a.useMemo((()=>_&&l&&o?(_/100*(l.fee_rate/1e4)).toFixed(o.precision):0),[_,l,o]),T=a.useMemo((()=>_&&R&&o?(parseFloat(_)+parseFloat(R)).toFixed(o.precision):0),[_,R,o]),A=a.useMemo((()=>{if(p&&p.length&&o){const e=p.find((e=>e.asset_id===o.id));if(e)return v(e.amount,o.precision)}return 0}),[p,o]),[M,B]=a.useState(),[O,P]=a.useState();return a.useEffect((()=>{const e=setTimeout((()=>{P(M)}),1e3);return()=>clearTimeout(e)}),[M]),a.useEffect((()=>{if(!O||!c||!o)return;const e=v(1,o.precision);if(O>c)F(c),B(c);else if(O<e)F(e),B(e);else if(O.toString().split(".").length>1&&O.toString().split(".")[1].length>o.precision){const e=parseFloat(O).toFixed(o.precision);F(e),B(e)}else F(O)}),[O,c,o]),e.jsx("div",{style:{...s},children:e.jsxs(J,{className:"ml-2 mr-2 pb-3",onClick:()=>{},children:[e.jsxs(W,{className:"pb-1",children:[e.jsxs(G,{children:[r("CreditDeals.dealNo"),e.jsx(I,{classnamecontents:"text-blue-500",type:"text",text:l.id.replace("1.22.",""),hyperlink:`https://blocksights.info/#/objects/${l.id}`}),r("CreditDeals.with"),e.jsx(I,{classnamecontents:"text-blue-500",type:"text",text:"borrower"===n?l.offer_owner:l.borrower,hyperlink:`https://blocksights.info/#/accounts/${"borrower"===n?l.offer_owner:l.borrower}`})]}),e.jsxs(K,{children:[r("borrower"===n?"CreditDeals.borrowed":"CreditDeals.lent"),":",e.jsxs("b",{children:[` ${c} ${o.symbol}`," (",e.jsx(I,{classnamecontents:"text-blue-500",type:"text",text:l.debt_asset,hyperlink:`https://blocksights.info/#/assets/${l.debt_asset}`}),")"]}),e.jsx("br",{}),r("CreditDeals.loanCollateral"),e.jsxs("b",{children:[` ${m} ${d.symbol}`," (",e.jsx(I,{classnamecontents:"text-blue-500",type:"text",text:l.collateral_asset,hyperlink:`https://blocksights.info/#/assets/${l.collateral_asset}`}),")"]}),e.jsx("br",{}),r("borrower"===n?"CreditDeals.borrower":"CreditDeals.lender"),":",e.jsx("b",{children:` ${c*(l.fee_rate/1e4)} ${o.symbol} (${l.fee_rate/1e4}%)`}),e.jsx("br",{}),r("CreditDeals.remainingTime"),e.jsxs("b",{children:[u," (",l.latest_repay_time,")"]})]})]}),"borrower"===n?e.jsxs(Te,{className:"pb-0 mt-2",children:[e.jsx(L,{onClick:()=>f(!0),children:r("CreditDeals.repayLoan")}),e.jsx("a",{href:`/dex/index.html?market=${o.symbol}_${d.symbol}`,children:e.jsx(L,{className:"ml-2",children:r("CreditDeals.trade",{symbol:o.symbol})})}),g?e.jsx(ke,{open:g,onOpenChange:e=>{f(e)},children:e.jsx(ve,{className:"sm:max-w-[900px] bg-white",children:e.jsxs(Fe,{children:[e.jsx(Ne,{children:r("CreditDeals.dialogTitle",{id:l.id})}),e.jsx(_e,{children:r("CreditDeals.description")}),e.jsx($e,{...i,children:e.jsxs("form",{onSubmit:()=>{N(!0),event.preventDefault()},className:"gaps-5",children:[e.jsx(D,{control:i.control,name:"account",render:({field:s})=>e.jsxs(C,{children:[e.jsx(y,{children:r("CreditDeals.account")}),e.jsx(w,{children:e.jsx(S,{disabled:!0,readOnly:!0,placeholder:"Bitshares account",className:"mb-3 mt-3",value:`${t.username} (${t.id})`})}),e.jsx(j,{})]})}),e.jsx(D,{control:i.control,name:"balance",render:({field:s})=>e.jsxs(C,{children:[e.jsx(y,{children:r("CreditDeals.balance",{symbol:o.symbol})}),e.jsx(w,{children:e.jsx(S,{disabled:!0,readOnly:!0,className:"mb-3 mt-3",value:`${A} ${o.symbol}`})}),e.jsx(j,{})]})}),e.jsx(D,{control:i.control,name:"repayAmount",render:({field:s})=>e.jsxs(C,{children:[e.jsx(y,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[e.jsx("div",{className:"col-span-1",children:r("CreditDeals.repayAmount",{symbol:o.symbol})}),e.jsx("div",{className:"col-span-1 text-right",children:r("CreditDeals.remainingDebt",{amount:c,symbol:o.symbol})})]})}),e.jsx(k,{children:r("CreditDeals.repayDesc")}),e.jsx(w,{onChange:e=>{const s=e.target.value;/^[0-9]*\.?[0-9]*$/.test(s)&&B(s)},children:e.jsx(S,{label:r("CreditDeals.repayAmount",{symbol:o.symbol}),className:"mb-3",value:M??"",placeholder:c})}),e.jsx(j,{})]})}),e.jsx(D,{control:i.control,name:"collateralRedemtionAmount",render:({field:s})=>e.jsxs(C,{children:[e.jsx(y,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[e.jsx("div",{className:"col-span-1",children:r("CreditDeals.redeemCollateral")}),e.jsx("div",{className:"col-span-1 text-right",children:r("CreditDeals.remainingCollateral",{amount:m,symbol:d.symbol})})]})}),e.jsx(k,{children:r("CreditDeals.collateralRedemption",{symbol:d.symbol})}),e.jsx(w,{children:e.jsx(S,{label:r("CreditDeals.repayAmount",{symbol:o.symbol}),value:E&&m?`${E??"?"} ${d.symbol} (${(E/m*100).toFixed(2)}%)`:"0",disabled:!0,readOnly:!0,className:"mb-3"})}),e.jsx(j,{})]})}),_?e.jsx(D,{control:i.control,name:"loanFee",render:({field:s})=>e.jsxs(C,{children:[e.jsx(y,{children:e.jsx("div",{className:"mt-2",children:r("CreditDeals.loanLabel")})}),e.jsx(k,{children:r("CreditDeals.loanDesc")}),e.jsx(w,{children:e.jsx(S,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:`${R} (${o.symbol}) (${l.fee_rate/1e4}% fee)`})}),e.jsx(j,{})]})}):null,_?e.jsx(D,{control:i.control,name:"finalRepayment",render:({field:s})=>e.jsxs(C,{children:[e.jsx(y,{children:e.jsx("div",{className:"mt-2",children:r("CreditDeals.finalPaymentLabel")})}),e.jsx(k,{children:r("CreditDeals.finalPaymentDesc",{symbol:d.symbol})}),e.jsx(w,{children:e.jsx(S,{disabled:!0,placeholder:"0",className:"mb-3 mt-3",value:`${T} (${o.symbol}) (debt + ${l.fee_rate/1e4}% fee)`})}),A<T?e.jsx(j,{children:r("CreditDeals.finalPaymentWarning",{symbol:o.symbol})}):null]})}):null,e.jsx(D,{control:i.control,name:"networkFee",render:({field:s})=>e.jsxs(C,{children:[e.jsx(y,{children:e.jsx("div",{className:"mt-2",children:r("CreditDeals:networkFee")})}),e.jsx(k,{children:r("CreditDeals:networkFeeDesc")}),e.jsx(w,{children:e.jsx(S,{disabled:!0,placeholder:`${h} BTS`,className:"mb-3 mt-3"})}),t.id===t.referrer?e.jsx(j,{children:r("CreditDeals:rebate",{fee:.8*h,chain:"bitshares"===t.chain?"BTS":"TEST"})}):null,e.jsx(j,{})]})}),!E||!_||A<T?e.jsx(L,{className:"mt-5 mb-3",variant:"outline",disabled:!0,type:"submit",children:r("CreditDeals:submit")}):e.jsx(L,{className:"mt-5 mb-3",variant:"outline",type:"submit",children:r("CreditDeals:submit")})]})}),$?e.jsx(Ie,{operationName:"credit_deal_repay",username:t.username,usrChain:t.chain,userID:t.id,dismissCallback:N,headerText:r("CreditDeals:deepLink",{finalRepayAmount:_,debtAsset:o.symbol,collateralAsset:d.symbol}),trxJSON:[{account:t.id,deal_id:l.id,repay_amount:{amount:ce(_,o.precision),asset_id:o.id},credit_fee:{amount:ce(R,o.precision),asset_id:o.id},extensions:[]}]},`Repaying${_}${o.symbol}toclaimback${d.symbol}`):null]})})}):null]}):null]})},`acard-${l.id}`)}a.useEffect((()=>{let e;return t&&t.id&&(e=Le([t.chain,t.id]).subscribe((({data:e,error:s,loading:r})=>{e&&!s&&!r&&$(e)}))),()=>{e&&e()}}),[t]);const _={backgroundColor:"#252526",color:"white"},[F,E]=a.useState("borrowings");return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.jsxs(J,{children:[e.jsxs(W,{children:[e.jsx(G,{children:r("CreditDeals:card.title")}),e.jsx(K,{children:r("CreditDeals:card.description")})]}),e.jsx(ne,{children:e.jsxs(Be,{defaultValue:"borrowings",className:"w-full",children:[e.jsxs(Ee,{className:"grid w-full grid-cols-2 gap-2",children:["borrowings"===F?e.jsx(R,{value:"borrowings",style:_,children:r("CreditDeals:card.viewingBorrowings")}):e.jsx(R,{value:"borrowings",onClick:()=>E("borrowings"),children:r("CreditDeals:card.viewBorrowings")}),"lendings"===F?e.jsx(R,{value:"lendings",style:_,children:r("CreditDeals:card.viewingLendings")}):e.jsx(R,{value:"lendings",onClick:()=>E("lendings"),children:r("CreditDeals:card.viewLendings")})]}),e.jsxs(oe,{value:"borrowings",children:[f&&f.borrowerDeals&&f.borrowerDeals.length?e.jsx(ae,{height:500,itemCount:f.borrowerDeals.length,itemSize:225,className:"w-full",children:({index:s,style:r})=>{let l=f.borrowerDeals[s];return l?e.jsx(N,{style:r,res:l,type:"borrower"}):null}}):null,f&&f.borrowerDeals&&!f.borrowerDeals.length?r("CreditDeals:card.noBorrowers"):null,f&&f.borrowerDeals?null:r("CreditDeals:card.loading")]}),e.jsxs(oe,{value:"lendings",children:[f&&f.ownerDeals&&f.ownerDeals.length?e.jsx(ae,{height:500,itemCount:f.ownerDeals.length,itemSize:165,className:"w-full",children:({index:s,style:r})=>{let l=f.ownerDeals[s];return l?e.jsx(N,{style:r,res:l,type:"lender"}):null}}):null,f&&f.ownerDeals&&!f.ownerDeals.length?r("CreditDeals:card.noLendings"):null,f&&f.ownerDeals?null:r("CreditDeals:card.loading")]})]})})]})}),e.jsx("div",{className:"grid grid-cols-1 gap-3 mt-5",children:e.jsxs(J,{children:[e.jsxs(W,{className:"pb-0",children:[e.jsx(G,{children:r("borrowings"===F?"CreditDeals:risks.borrowerTitle":"CreditDeals:risks.lenderTitle")}),e.jsx(K,{children:r("CreditDeals:risks.description")})]}),e.jsx(ne,{className:"text-sm",children:e.jsxs("ul",{className:"ml-2 list-disc [&>li]:mt-2 pl-2",children:["borrowings"===F?e.jsx("li",{children:r("CreditDeals:risks.borrower.risk1",{username:t?.username})}):e.jsx("li",{children:r("CreditDeals:risks.lender.risk1",{username:t?.username})}),"borrowings"===F?e.jsx("li",{children:r("CreditDeals:risks.borrower.risk2")}):e.jsx("li",{children:r("CreditDeals:risks.lender.risk2")}),"lendings"===F?e.jsx("li",{children:r("CreditDeals:risks.lender.risk3",{username:t?.username})}):null,"borrowings"===F?e.jsx("li",{children:r("CreditDeals:risks.borrower.risk3")}):e.jsx("li",{children:r("CreditDeals:risks.lender.risk4")})]})})]})})]})})}export{is as default};