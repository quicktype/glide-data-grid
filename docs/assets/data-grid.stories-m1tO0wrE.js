import{j as i}from"./marked.esm-dbrxtycE.js";import{r as m}from"./index-BMVQvedj.js";import{B as b}from"./story-utils-K2EZnGjM.js";import{C as d,Q as g,O as v,G as r,m as c,g as h,P as I}from"./image-window-loader-lKUISrIQ.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./iframe-9FFu--7X.js";import"../sb-preview/runtime.js";const B={title:"Subcomponents/DataGrid",decorators:[n=>i("div",{children:i(b,{width:1800,height:1e3,children:i("div",{style:{position:"relative"},children:i(n,{})})})})]},Y={columns:d.empty(),rows:d.empty(),current:void 0},w=n=>{if(n.kind!==r.Custom)return I.find(e=>e.kind===n.kind)};function l(){let n=0;const[e,o]=m.useState(0);return m.useEffect(()=>{let t=0;const a=()=>{o(O=>O+1),t=window.requestAnimationFrame(a)};return a(),()=>window.cancelAnimationFrame(t)},[]),i(g,{getCellRenderer:w,width:1800,height:1e3,cellXOffset:0,drawHeader:void 0,drawCell:void 0,experimental:void 0,onHeaderIndicatorClick:()=>{},headerIcons:void 0,isDraggable:void 0,onCanvasBlur:()=>{},onCanvasFocused:()=>{},onCellFocused:()=>{},onContextMenu:()=>{},onDragEnd:()=>{},onDragLeave:()=>{},onDragOverCell:()=>{},onDragStart:()=>{},onDrop:()=>{},onItemHovered:()=>{},onKeyDown:()=>{},onKeyUp:()=>{},onMouseDown:()=>{},onMouseMoveRaw:()=>{},onMouseUp:()=>{},resizeColumn:void 0,smoothScrollX:void 0,smoothScrollY:void 0,allowResize:void 0,canvasRef:void 0,disabledRows:void 0,eventTargetRef:void 0,fillHandle:void 0,fixedShadowX:void 0,fixedShadowY:void 0,getGroupDetails:void 0,getRowThemeOverride:void 0,highlightRegions:void 0,imageWindowLoader:new v,onHeaderMenuClick:void 0,prelightCells:void 0,translateX:void 0,translateY:void 0,dragAndDropState:void 0,drawFocusRing:!0,isFocused:!0,cellYOffset:e,isFilling:!1,onMouseMove:()=>{},groupHeaderHeight:0,accessibilityHeight:50,enableGroups:!1,selection:Y,rows:1e5,headerHeight:44,rowHeight:34,columns:["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven"].map(t=>({title:t,width:122+(n+=10)})),getCellContent:([t,a])=>({kind:r.Text,displayData:`${t},${a} Testing things that are way too long`,data:`${t},${a} Testing things that are way too long`,allowOverlay:!1,owned:!0}),freezeColumns:0,firstColAccessible:!0,verticalBorder:()=>!0,freezeTrailingRows:0,hasAppendRow:!1,isResizing:!1,isDragging:!1,theme:c(h()),resizeIndicator:"full"})}function s(){let n=0;return i(g,{getCellRenderer:w,width:1800,height:1e3,cellXOffset:0,isFocused:!0,resizeIndicator:"full",drawHeader:void 0,drawCell:void 0,experimental:void 0,headerIcons:void 0,isDraggable:void 0,onCanvasBlur:()=>{},onCanvasFocused:()=>{},onHeaderIndicatorClick:()=>{},onCellFocused:()=>{},onContextMenu:()=>{},onDragEnd:()=>{},onDragLeave:()=>{},onDragOverCell:()=>{},onDragStart:()=>{},onDrop:()=>{},onItemHovered:()=>{},onKeyDown:()=>{},onKeyUp:()=>{},onMouseDown:()=>{},onMouseMoveRaw:()=>{},onMouseUp:()=>{},smoothScrollX:void 0,resizeColumn:void 0,smoothScrollY:void 0,allowResize:void 0,canvasRef:void 0,disabledRows:void 0,eventTargetRef:void 0,fillHandle:void 0,fixedShadowX:void 0,fixedShadowY:void 0,getGroupDetails:void 0,getRowThemeOverride:void 0,highlightRegions:void 0,imageWindowLoader:new v,onHeaderMenuClick:void 0,prelightCells:void 0,translateX:void 0,translateY:void 0,dragAndDropState:void 0,drawFocusRing:!0,onMouseMove:()=>{},accessibilityHeight:50,isFilling:!1,cellYOffset:0,groupHeaderHeight:34,enableGroups:!1,rows:1e3,headerHeight:44,rowHeight:34,columns:["One","Two","Three","Four","Five","Six","Seven"].map(e=>({title:e,width:122+(n+=10)})),getCellContent:([e,o])=>({kind:r.Text,displayData:`${e},${o} Testing things that are way too long`,data:`${e},${o} Testing things that are way too long`,allowOverlay:!1,owned:!0}),selection:{current:{cell:[2,2],range:{x:2,y:2,width:1,height:1},rangeStack:[]},columns:d.empty(),rows:d.empty()},freezeColumns:0,firstColAccessible:!0,verticalBorder:()=>!0,freezeTrailingRows:0,hasAppendRow:!1,isResizing:!1,isDragging:!1,theme:c(h())})}function u(){let n=0;return i(g,{getCellRenderer:w,onMouseMove:()=>{},width:1800,height:1e3,cellXOffset:0,cellYOffset:0,isFocused:!0,resizeIndicator:"full",resizeColumn:void 0,drawHeader:void 0,drawCell:void 0,experimental:void 0,headerIcons:void 0,isDraggable:void 0,onCanvasBlur:()=>{},onCanvasFocused:()=>{},onCellFocused:()=>{},onContextMenu:()=>{},onDragEnd:()=>{},onHeaderIndicatorClick:()=>{},onDragLeave:()=>{},onDragOverCell:()=>{},onDragStart:()=>{},onDrop:()=>{},onItemHovered:()=>{},onKeyDown:()=>{},onKeyUp:()=>{},onMouseDown:()=>{},onMouseMoveRaw:()=>{},onMouseUp:()=>{},smoothScrollX:void 0,smoothScrollY:void 0,allowResize:void 0,canvasRef:void 0,disabledRows:void 0,eventTargetRef:void 0,fillHandle:void 0,fixedShadowX:void 0,fixedShadowY:void 0,getGroupDetails:void 0,getRowThemeOverride:void 0,highlightRegions:void 0,imageWindowLoader:new v,onHeaderMenuClick:void 0,prelightCells:void 0,translateX:void 0,translateY:void 0,dragAndDropState:void 0,drawFocusRing:!0,groupHeaderHeight:34,accessibilityHeight:50,isFilling:!1,enableGroups:!1,rows:1e3,headerHeight:44,rowHeight:34,columns:["One","Two","Three","Four","Five","Six","Seven"].map(e=>({title:e,width:122+(n+=10)})),getCellContent:([e,o])=>({kind:r.Text,displayData:`${e},${o} Testing things that are way too long`,data:`${e},${o} Testing things that are way too long`,allowOverlay:!1,owned:!0}),selection:{current:void 0,rows:d.fromSingleSelection([2,4]),columns:d.empty()},freezeColumns:0,firstColAccessible:!0,verticalBorder:()=>!0,freezeTrailingRows:0,hasAppendRow:!1,isResizing:!1,isDragging:!1,theme:c(h())})}const f=()=>{let n=0;return i(g,{getCellRenderer:w,onMouseMove:()=>{},width:1800,height:1e3,cellXOffset:0,cellYOffset:0,isFocused:!0,resizeIndicator:"full",resizeColumn:void 0,drawHeader:void 0,experimental:void 0,headerIcons:void 0,isDraggable:void 0,onCanvasBlur:()=>{},onCanvasFocused:()=>{},onHeaderIndicatorClick:()=>{},onCellFocused:()=>{},onContextMenu:()=>{},onDragEnd:()=>{},onDragLeave:()=>{},onDragOverCell:()=>{},onDragStart:()=>{},onDrop:()=>{},onItemHovered:()=>{},onKeyDown:()=>{},onKeyUp:()=>{},onMouseDown:()=>{},onMouseMoveRaw:()=>{},onMouseUp:()=>{},smoothScrollX:void 0,smoothScrollY:void 0,allowResize:void 0,canvasRef:void 0,disabledRows:void 0,eventTargetRef:void 0,fillHandle:void 0,fixedShadowX:void 0,fixedShadowY:void 0,getGroupDetails:void 0,getRowThemeOverride:void 0,highlightRegions:void 0,imageWindowLoader:new v,onHeaderMenuClick:void 0,prelightCells:void 0,translateX:void 0,translateY:void 0,dragAndDropState:void 0,drawCell:void 0,drawFocusRing:!0,accessibilityHeight:50,isFilling:!1,groupHeaderHeight:34,enableGroups:!1,rows:1e3,headerHeight:44,rowHeight:34,columns:["One","Two","Three","Four","Five","Six","Seven"].map(e=>({title:e,width:122+(n+=10)})),getCellContent:([e,o])=>({kind:r.Text,displayData:`${e},${o} Testing things that are way too long`,data:`${e},${o} Testing things that are way too long`,allowOverlay:!1,owned:!0}),selection:{current:void 0,rows:d.empty(),columns:d.fromSingleSelection([2,4])},freezeColumns:0,firstColAccessible:!0,verticalBorder:()=>!0,freezeTrailingRows:0,hasAppendRow:!1,isResizing:!1,isDragging:!1,theme:c(h())})};var p,C,R;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`function Simplenotest() {
  let x = 0;
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    let handle = 0;
    const cb = () => {
      setY(cv => cv + 1);
      handle = window.requestAnimationFrame(cb);
    };
    cb();
    return () => window.cancelAnimationFrame(handle);
  }, []);
  return <DataGrid getCellRenderer={getCellRenderer} width={1800} height={1000} cellXOffset={0} drawHeader={undefined} drawCell={undefined} experimental={undefined} onHeaderIndicatorClick={() => undefined} headerIcons={undefined} isDraggable={undefined} onCanvasBlur={() => undefined} onCanvasFocused={() => undefined} onCellFocused={() => undefined} onContextMenu={() => undefined} onDragEnd={() => undefined} onDragLeave={() => undefined} onDragOverCell={() => undefined} onDragStart={() => undefined} onDrop={() => undefined} onItemHovered={() => undefined} onKeyDown={() => undefined} onKeyUp={() => undefined} onMouseDown={() => undefined} onMouseMoveRaw={() => undefined} onMouseUp={() => undefined} resizeColumn={undefined} smoothScrollX={undefined} smoothScrollY={undefined} allowResize={undefined} canvasRef={undefined} disabledRows={undefined} eventTargetRef={undefined} fillHandle={undefined} fixedShadowX={undefined} fixedShadowY={undefined} getGroupDetails={undefined} getRowThemeOverride={undefined} highlightRegions={undefined} imageWindowLoader={new ImageWindowLoaderImpl()} onHeaderMenuClick={undefined} prelightCells={undefined} translateX={undefined} translateY={undefined} dragAndDropState={undefined} drawFocusRing={true} isFocused={true} cellYOffset={y} isFilling={false} onMouseMove={() => undefined} groupHeaderHeight={0} accessibilityHeight={50} enableGroups={false} selection={emptyGridSelection} rows={100_000} headerHeight={44} rowHeight={34} columns={["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"].map(t => ({
    title: t,
    width: 122 + (x += 10)
  }))} getCellContent={([col, row]) => ({
    kind: GridCellKind.Text,
    displayData: \`\${col},\${row} Testing things that are way too long\`,
    data: \`\${col},\${row} Testing things that are way too long\`,
    allowOverlay: false,
    owned: true
  })} freezeColumns={0} firstColAccessible={true} verticalBorder={() => true} freezeTrailingRows={0} hasAppendRow={false} isResizing={false} isDragging={false} theme={mergeAndRealizeTheme(getDataEditorTheme())} resizeIndicator={"full"} />;
}`,...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var D,S,H;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`function SelectedCellnotest() {
  let x = 0;
  return <DataGrid getCellRenderer={getCellRenderer} width={1800} height={1000} cellXOffset={0} isFocused={true} resizeIndicator="full" drawHeader={undefined} drawCell={undefined} experimental={undefined} headerIcons={undefined} isDraggable={undefined} onCanvasBlur={() => undefined} onCanvasFocused={() => undefined} onHeaderIndicatorClick={() => undefined} onCellFocused={() => undefined} onContextMenu={() => undefined} onDragEnd={() => undefined} onDragLeave={() => undefined} onDragOverCell={() => undefined} onDragStart={() => undefined} onDrop={() => undefined} onItemHovered={() => undefined} onKeyDown={() => undefined} onKeyUp={() => undefined} onMouseDown={() => undefined} onMouseMoveRaw={() => undefined} onMouseUp={() => undefined} smoothScrollX={undefined} resizeColumn={undefined} smoothScrollY={undefined} allowResize={undefined} canvasRef={undefined} disabledRows={undefined} eventTargetRef={undefined} fillHandle={undefined} fixedShadowX={undefined} fixedShadowY={undefined} getGroupDetails={undefined} getRowThemeOverride={undefined} highlightRegions={undefined} imageWindowLoader={new ImageWindowLoaderImpl()} onHeaderMenuClick={undefined} prelightCells={undefined} translateX={undefined} translateY={undefined} dragAndDropState={undefined} drawFocusRing={true} onMouseMove={() => undefined} accessibilityHeight={50} isFilling={false} cellYOffset={0} groupHeaderHeight={34} enableGroups={false} rows={1000} headerHeight={44} rowHeight={34} columns={["One", "Two", "Three", "Four", "Five", "Six", "Seven"].map(t => ({
    title: t,
    width: 122 + (x += 10)
  }))} getCellContent={([col, row]) => ({
    kind: GridCellKind.Text,
    displayData: \`\${col},\${row} Testing things that are way too long\`,
    data: \`\${col},\${row} Testing things that are way too long\`,
    allowOverlay: false,
    owned: true
  })} selection={{
    current: {
      cell: [2, 2],
      range: {
        x: 2,
        y: 2,
        width: 1,
        height: 1
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  }} freezeColumns={0} firstColAccessible={true} verticalBorder={() => true} freezeTrailingRows={0} hasAppendRow={false} isResizing={false} isDragging={false} theme={mergeAndRealizeTheme(getDataEditorTheme())} />;
}`,...(H=(S=s.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var T,y,x;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`function SelectedRownotest() {
  let x = 0;
  return <DataGrid getCellRenderer={getCellRenderer} onMouseMove={() => undefined} width={1800} height={1000} cellXOffset={0} cellYOffset={0} isFocused={true} resizeIndicator="full" resizeColumn={undefined} drawHeader={undefined} drawCell={undefined} experimental={undefined} headerIcons={undefined} isDraggable={undefined} onCanvasBlur={() => undefined} onCanvasFocused={() => undefined} onCellFocused={() => undefined} onContextMenu={() => undefined} onDragEnd={() => undefined} onHeaderIndicatorClick={() => undefined} onDragLeave={() => undefined} onDragOverCell={() => undefined} onDragStart={() => undefined} onDrop={() => undefined} onItemHovered={() => undefined} onKeyDown={() => undefined} onKeyUp={() => undefined} onMouseDown={() => undefined} onMouseMoveRaw={() => undefined} onMouseUp={() => undefined} smoothScrollX={undefined} smoothScrollY={undefined} allowResize={undefined} canvasRef={undefined} disabledRows={undefined} eventTargetRef={undefined} fillHandle={undefined} fixedShadowX={undefined} fixedShadowY={undefined} getGroupDetails={undefined} getRowThemeOverride={undefined} highlightRegions={undefined} imageWindowLoader={new ImageWindowLoaderImpl()} onHeaderMenuClick={undefined} prelightCells={undefined} translateX={undefined} translateY={undefined} dragAndDropState={undefined} drawFocusRing={true} groupHeaderHeight={34} accessibilityHeight={50} isFilling={false} enableGroups={false} rows={1000} headerHeight={44} rowHeight={34} columns={["One", "Two", "Three", "Four", "Five", "Six", "Seven"].map(t => ({
    title: t,
    width: 122 + (x += 10)
  }))} getCellContent={([col, row]) => ({
    kind: GridCellKind.Text,
    displayData: \`\${col},\${row} Testing things that are way too long\`,
    data: \`\${col},\${row} Testing things that are way too long\`,
    allowOverlay: false,
    owned: true
  })} selection={{
    current: undefined,
    rows: CompactSelection.fromSingleSelection([2, 4]),
    columns: CompactSelection.empty()
  }} freezeColumns={0} firstColAccessible={true} verticalBorder={() => true} freezeTrailingRows={0} hasAppendRow={false} isResizing={false} isDragging={false} theme={mergeAndRealizeTheme(getDataEditorTheme())} />;
}`,...(x=(y=u.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var M,F,z;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  let x = 0;
  return <DataGrid getCellRenderer={getCellRenderer} onMouseMove={() => undefined} width={1800} height={1000} cellXOffset={0} cellYOffset={0} isFocused={true} resizeIndicator="full" resizeColumn={undefined} drawHeader={undefined} experimental={undefined} headerIcons={undefined} isDraggable={undefined} onCanvasBlur={() => undefined} onCanvasFocused={() => undefined} onHeaderIndicatorClick={() => undefined} onCellFocused={() => undefined} onContextMenu={() => undefined} onDragEnd={() => undefined} onDragLeave={() => undefined} onDragOverCell={() => undefined} onDragStart={() => undefined} onDrop={() => undefined} onItemHovered={() => undefined} onKeyDown={() => undefined} onKeyUp={() => undefined} onMouseDown={() => undefined} onMouseMoveRaw={() => undefined} onMouseUp={() => undefined} smoothScrollX={undefined} smoothScrollY={undefined} allowResize={undefined} canvasRef={undefined} disabledRows={undefined} eventTargetRef={undefined} fillHandle={undefined} fixedShadowX={undefined} fixedShadowY={undefined} getGroupDetails={undefined} getRowThemeOverride={undefined} highlightRegions={undefined} imageWindowLoader={new ImageWindowLoaderImpl()} onHeaderMenuClick={undefined} prelightCells={undefined} translateX={undefined} translateY={undefined} dragAndDropState={undefined} drawCell={undefined} drawFocusRing={true} accessibilityHeight={50} isFilling={false} groupHeaderHeight={34} enableGroups={false} rows={1000} headerHeight={44} rowHeight={34} columns={["One", "Two", "Three", "Four", "Five", "Six", "Seven"].map(t => ({
    title: t,
    width: 122 + (x += 10)
  }))} getCellContent={([col, row]) => ({
    kind: GridCellKind.Text,
    displayData: \`\${col},\${row} Testing things that are way too long\`,
    data: \`\${col},\${row} Testing things that are way too long\`,
    allowOverlay: false,
    owned: true
  })} selection={{
    current: undefined,
    rows: CompactSelection.empty(),
    columns: CompactSelection.fromSingleSelection([2, 4])
  }} freezeColumns={0} firstColAccessible={true} verticalBorder={() => true} freezeTrailingRows={0} hasAppendRow={false} isResizing={false} isDragging={false} theme={mergeAndRealizeTheme(getDataEditorTheme())} />;
}`,...(z=(F=f.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const U=["Simplenotest","SelectedCellnotest","SelectedRownotest","SelectedColumnnotest"];export{s as SelectedCellnotest,f as SelectedColumnnotest,u as SelectedRownotest,l as Simplenotest,U as __namedExportsOrder,B as default};
