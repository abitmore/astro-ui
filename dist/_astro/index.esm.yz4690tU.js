import{_ as Z}from"./index.uYDp4DLV.js";import{r as R}from"./index.sXsv9c-e.js";function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t,e){return(W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function tt(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,W(t,e)}var U=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function et(t,e){return!!(t===e||U(t)&&U(e))}function rt(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!et(t[r],e[r]))return!1;return!0}function E(t,e){void 0===e&&(e=rt);var r,n,o=[],i=!1;return function(){for(var l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return i&&r===this&&e(l,o)||(n=t.apply(this,l),i=!0,r=this,o=l),n}}var it="object"==typeof performance&&"function"==typeof performance.now,$=it?function(){return performance.now()}:function(){return Date.now()};function q(t){cancelAnimationFrame(t.id)}function ot(t,e){var r=$();var n={id:requestAnimationFrame((function o(){$()-r>=e?t.call(null):n.id=requestAnimationFrame(o)}))};return n}var F=-1;function H(t){if(void 0===t&&(t=!1),-1===F||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(e),F=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return F}var C=null;function j(t){if(void 0===t&&(t=!1),null===C||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var n=document.createElement("div"),o=n.style;return o.width="100px",o.height="100px",e.appendChild(n),document.body.appendChild(e),e.scrollLeft>0?C="positive-descending":(e.scrollLeft=1,C=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),C}return C}var nt=150,at=function(t,e){return t};function lt(t){var e,r=t.getItemOffset,n=t.getEstimatedTotalSize,o=t.getItemSize,i=t.getOffsetForIndexAndAlignment,l=t.getStartIndexForOffset,s=t.getStopIndexForStartIndex,a=t.initInstanceProps,c=t.shouldResetStyleCacheOnItemSizeChange,u=t.validateProps;return(e=function(t){function e(e){var n;return(n=t.call(this,e)||this)._instanceProps=a(n.props,A(n)),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:A(n),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=E((function(t,e,r,o){return n.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:r,visibleStopIndex:o})})),n._callOnScroll=void 0,n._callOnScroll=E((function(t,e,r){return n.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:r})})),n._getItemStyle=void 0,n._getItemStyle=function(t){var e,i=n.props,l=i.direction,s=i.itemSize,a=i.layout,u=n._getItemStyleCache(c&&s,c&&a,c&&l);if(u.hasOwnProperty(t))e=u[t];else{var f=r(n.props,t,n._instanceProps),d=o(n.props,t,n._instanceProps),h="horizontal"===l||"horizontal"===a,p="rtl"===l,m=h?f:0;u[t]=e={position:"absolute",left:p?void 0:m,right:p?m:void 0,top:h?0:f,height:h?"100%":d,width:h?d:"100%"}}return e},n._getItemStyleCache=void 0,n._getItemStyleCache=E((function(t,e,r){return{}})),n._onScrollHorizontal=function(t){var e=t.currentTarget,r=e.clientWidth,o=e.scrollLeft,i=e.scrollWidth;n.setState((function(t){if(t.scrollOffset===o)return null;var e=n.props.direction,l=o;if("rtl"===e)switch(j()){case"negative":l=-o;break;case"positive-descending":l=i-r-o}return l=Math.max(0,Math.min(l,i-r)),{isScrolling:!0,scrollDirection:t.scrollOffset<l?"forward":"backward",scrollOffset:l,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(t){var e=t.currentTarget,r=e.clientHeight,o=e.scrollHeight,i=e.scrollTop;n.setState((function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,o-r));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(t){var e=n.props.outerRef;n._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&q(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=ot(n._resetIsScrolling,nt)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n}tt(e,t),e.getDerivedStateFromProps=function(t,e){return st(t,e),u(t),null};var f=e.prototype;return f.scrollTo=function(t){t=Math.max(0,t),this.setState((function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},f.scrollToItem=function(t,e){void 0===e&&(e="auto");var r=this.props,n=r.itemCount,o=r.layout,l=this.state.scrollOffset;t=Math.max(0,Math.min(t,n-1));var s=0;if(this._outerRef){var a=this._outerRef;s="vertical"===o?a.scrollWidth>a.clientWidth?H():0:a.scrollHeight>a.clientHeight?H():0}this.scrollTo(i(this.props,t,e,l,this._instanceProps,s))},f.componentDidMount=function(){var t=this.props,e=t.direction,r=t.initialScrollOffset,n=t.layout;if("number"==typeof r&&null!=this._outerRef){var o=this._outerRef;"horizontal"===e||"horizontal"===n?o.scrollLeft=r:o.scrollTop=r}this._callPropsCallbacks()},f.componentDidUpdate=function(){var t=this.props,e=t.direction,r=t.layout,n=this.state,o=n.scrollOffset;if(n.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===r)if("rtl"===e)switch(j()){case"negative":i.scrollLeft=-o;break;case"positive-ascending":i.scrollLeft=o;break;default:var l=i.clientWidth,s=i.scrollWidth;i.scrollLeft=s-l-o}else i.scrollLeft=o;else i.scrollTop=o}this._callPropsCallbacks()},f.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&q(this._resetIsScrollingTimeoutId)},f.render=function(){var t=this.props,e=t.children,r=t.className,o=t.direction,i=t.height,l=t.innerRef,s=t.innerElementType,a=t.innerTagName,c=t.itemCount,u=t.itemData,f=t.itemKey,d=void 0===f?at:f,h=t.layout,p=t.outerElementType,m=t.outerTagName,v=t.style,g=t.useIsScrolling,S=t.width,_=this.state.isScrolling,I="horizontal"===o||"horizontal"===h,y=I?this._onScrollHorizontal:this._onScrollVertical,O=this._getRangeToRender(),b=O[0],w=O[1],x=[];if(c>0)for(var C=b;C<=w;C++)x.push(R.createElement(e,{data:u,key:d(C,u),index:C,isScrolling:g?_:void 0,style:this._getItemStyle(C)}));var z=n(this.props,this._instanceProps);return R.createElement(p||m||"div",{className:r,onScroll:y,ref:this._outerRefSetter,style:Z({position:"relative",height:i,width:S,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:o},v)},R.createElement(s||a||"div",{children:x,ref:l,style:{height:I?"100%":z,pointerEvents:_?"none":void 0,width:I?z:"100%"}}))},f._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],r=t[1],n=t[2],o=t[3];this._callOnItemsRendered(e,r,n,o)}if("function"==typeof this.props.onScroll){var i=this.state,l=i.scrollDirection,s=i.scrollOffset,a=i.scrollUpdateWasRequested;this._callOnScroll(l,s,a)}},f._getRangeToRender=function(){var t=this.props,e=t.itemCount,r=t.overscanCount,n=this.state,o=n.isScrolling,i=n.scrollDirection,a=n.scrollOffset;if(0===e)return[0,0,0,0];var c=l(this.props,a,this._instanceProps),u=s(this.props,c,a,this._instanceProps),f=o&&"backward"!==i?1:Math.max(1,r),d=o&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,c-f),Math.max(0,Math.min(e-1,u+d)),c,u]},e}(R.PureComponent)).defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var st=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},dt=lt({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,r,n,o,i){var l=t.direction,s=t.height,a=t.itemCount,c=t.itemSize,u=t.layout,f=t.width,d="horizontal"===l||"horizontal"===u?f:s,h=Math.max(0,a*c-d),p=Math.min(h,e*c),m=Math.max(0,e*c-d+c+i);switch("smart"===r&&(r=n>=m-d&&n<=p+d?"auto":"center"),r){case"start":return p;case"end":return m;case"center":var v=Math.round(m+(p-m)/2);return v<Math.ceil(d/2)?0:v>h+Math.floor(d/2)?h:v;default:return n>=m&&n<=p?n:n<m?m:p}},getStartIndexForOffset:function(t,e){var r=t.itemCount,n=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(e/n)))},getStopIndexForStartIndex:function(t,e,r){var n=t.direction,o=t.height,i=t.itemCount,l=t.itemSize,s=t.layout,a=t.width,c=e*l,u="horizontal"===n||"horizontal"===s?a:o,f=Math.ceil((u+r-c)/l);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});export{dt as F};