import{$ as t,u as m,j as e,C as x,b as u,c as p,d as g,k as j,f as v}from"./CurrentUser.5db6b464.js";import{r as c}from"./index.178a5b5e.js";import{c as b}from"./Market.1ee534bb.js";function M(N){const s=c.useSyncExternalStore(t.subscribe,t.get,()=>!0);m(s&&s.chain?s.chain:"bitshares",[]);const[a,d]=c.useState();c.useEffect(()=>{let r;if(s&&s.chain&&s.chain.length){let l;try{l=b(s.chain)}catch(i){console.log(i);return}r=l?l.subscribe(({data:i,loading:o,error:h})=>{i&&!h&&!o&&d(i)}):null}return()=>{r&&r()}},[s]);const n=c.useMemo(()=>{if(a&&a.length)return a.map(r=>e.jsx("a",{href:`/dex/index.html?market=${r.pair.replace("/","_")}`,children:e.jsx("div",{className:"col-span-1 border-b-2",children:e.jsxs("div",{className:"grid grid-cols-3 gap-1",children:[e.jsx("div",{className:"col-span-1",children:r.pair}),e.jsx("div",{className:"col-span-1",children:r["24h_volume"]}),e.jsx("div",{className:"col-span-1",children:r.nb_operations})]})})},r.pair.replace("/","_")))},[a]);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto mt-5 mb-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.jsxs(x,{children:[e.jsxs(u,{children:[e.jsx(p,{children:"Featured market trading pairs"}),e.jsxs(g,{children:["These market trading pairs are the highest volume in the last 24 hours.",e.jsx("br",{}),"Click on a market trading pair below to go to its market page."]})]}),e.jsx(j,{children:n&&n.length?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1",children:e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"grid grid-cols-3 gap-1 text-center border-b-2",children:[e.jsx("div",{className:"col-span-1",children:e.jsx("b",{children:"Market trading pair"})}),e.jsx("div",{className:"col-span-1",children:e.jsx("b",{children:"24 Hour volume"})}),e.jsx("div",{className:"col-span-1",children:e.jsx("b",{children:"Trades"})})]})})}),e.jsx("div",{className:"grid grid-cols-1 gap-2 text-center",children:n})]}):null})]})}),e.jsx("div",{className:"grid grid-cols-1 mt-5",children:s&&s.username&&s.username.length?e.jsx(v,{usr:s}):null})]})})}export{M as default};