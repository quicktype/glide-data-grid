import{j as r,F as i,a as s}from"./marked.esm-dbrxtycE.js";import"./index-BMVQvedj.js";import{D as p}from"./data-editor-all-ZeeWpldS.js";import{B as c,D as m,P as d,u as g,d as D}from"./utils-MADpeXg5.js";import{S as u}from"./story-utils-K2EZnGjM.js";import"./iframe-alOpk4ZG.js";import"../sb-preview/runtime.js";import"./image-window-loader-ggeJlWLo.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-wnX0bxop.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const F={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>r(u,{children:r(c,{title:"Prevent Diagonal Scroll",description:r(i,{children:s(m,{children:["Diagonal scrolling can be prevented by setting"," ",r(d,{children:"preventDiagonalScrolling"}),"."]})}),children:r(o,{})})})]},e=()=>{const{cols:o,getCellContent:l}=g(200);return r(p,{...D,getCellContent:l,columns:o,preventDiagonalScrolling:!0,rows:5e3})};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(200);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} preventDiagonalScrolling={true} rows={5000} />;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const M=["PreventDiagonalScroll"];export{e as PreventDiagonalScroll,M as __namedExportsOrder,F as default};