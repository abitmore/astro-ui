import{u as S,l as T,j as e,i as b}from"./utils.CoSl1RWq.js";import{r as c}from"./index.sXsv9c-e.js";import{F as k}from"./fuse.aCsZfKX4.js";import{F as y}from"./index.esm.yz4690tU.js";import{C as N,a as F,b as R,c as B}from"./users.R3-HkUNM.js";import{l as I,m as v,n as z}from"./dialog.8HOXxM8G.js";import{I as E}from"./input.LAd1ue8h.js";import{B as O}from"./button._UsuMLkQ.js";function U(s){const{assetSymbol:t,assetData:a,storeCallback:n,otherAsset:r,marketSearch:l,type:i,size:o,chain:m}=s,{t:d,i18n:h}=S(T.get(),{i18n:b});let u;u=l&&l.length?r?l.filter((e=>e.s!==r&&e.s!==t)):l.filter((e=>e.s!==t)):[];const p=new k(u,{includeScore:!0,keys:["id","s","u"]}),[x,g]=c.useState(),[j,f]=c.useState(),[C,D]=c.useState(!1);c.useEffect((()=>{if(x){const e=p.search(x);f(e)}}),[x]);return e.jsxs(I,{open:C,onOpenChange:e=>{e||f(),D(e)},children:[e.jsx(v,{asChild:!0,children:e.jsxs(O,{variant:"outline",className:(o&&"small"===o?"h-5 ":"")+"p-3",onClick:()=>D(!0),children:[t?null:d("AssetDropDownCard:select"),!o&&t?d("AssetDropDownCard:change"):null,o&&t&&t.length<12?t:null,o&&t&&t.length>=12?a.id:null]})}),e.jsx(z,{className:"sm:max-w-[425px] bg-white",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-2xl font-extrabold tracking-tight",children:t?d("AssetDropDownCard:replacing",{assetSymbol:t}):d("AssetDropDownCard:selecting")}),e.jsxs("h4",{className:"text-md font-bold tracking-tight",children:[i?null:d("AssetDropDownCard:noType"),i&&"base"===i?d("AssetDropDownCard:baseType"):null,i&&"quote"===i?d("AssetDropDownCard:quoteType"):null]}),e.jsx(E,{name:"assetSearch",placeholder:d("AssetDropDownCard:search"),onChange:e=>{g(e.target.value)}}),j&&j.length?e.jsx(e.Fragment,{children:e.jsx(y,{height:200,itemCount:j.length,itemSize:70,className:"w-full",children:({index:s,style:t})=>{const a=j[s];return e.jsx("div",{style:{...t,marginBottom:"10px",paddingRight:"10px"},children:e.jsx(N,{style:{marginBottom:"2px"},onClick:()=>{setTimeout((()=>{n(a.item.s)}),0),D(!1)},children:e.jsxs(F,{className:"p-3",children:[e.jsxs(R,{className:"h-3",children:[a.item.s," (",a.item.id,")"]}),e.jsx(B,{children:d("AssetDropDownCard:issued",{user:a.item.u})})]})},`acard-${a.item.id}`)})}})}):null]})})]})}export{U as A};