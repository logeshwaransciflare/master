(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[24],{451:function(e,t,a){"use strict";var r=a(0),n=a(80),s=a.n(n),i=localStorage.getItem("TOKEN"),o=s.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:i}});o.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(r.a)(Object(r.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=o},454:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"b",(function(){return h})),a.d(t,"d",(function(){return v})),a.d(t,"c",(function(){return j})),a.d(t,"a",(function(){return y})),a.d(t,"f",(function(){return O}));var r=a(1),n=a(121),s=a(463),i=(a(471),a(472)),o=a(786),c=a(474),l=(a(475),a(482),a(468),a(467),a(469),a(445),a(6)),u=function(e){var t=e.message;return Object(l.jsx)(r.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},p=function(e){var t=e.message;return Object(l.jsx)(r.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(r.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},f=function(e){var t=e.message;return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},b=function(e){var t=e.message;return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"danger",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},g=function(){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"warning",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},m=function(e){return n.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},h=function(e){return n.b.success(Object(l.jsx)(p,{message:e}),{hideProgressBar:!0})},v=function(e){return n.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},j=function(e){return n.b.success(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},y=function(e){return n.b.error(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},O=function(){return n.b.warning(Object(l.jsx)(g,{}),{hideProgressBar:!0})}},455:function(e,t,a){},456:function(e,t,a){},459:function(e,t,a){"use strict";var r=a(0),n=a(30),s=a(1),i=a(119),o=a.n(i),c=a(485),l=(a(460),a(6)),u=function(e){var t,a=e.children,i=e.blocking,c=e.loader,u=e.className,p=e.tag,d=e.overlayColor,f=p;return Object(l.jsxs)(f,{className:o()("ui-loader",(t={},Object(n.a)(t,u,u),Object(n.a)(t,"show",i),t)),children:[a,i?Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("div",Object(r.a)({className:"overlay"},i&&d?{style:{backgroundColor:d}}:{})),Object(l.jsx)("div",{className:"loader",children:c})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(c.a,{color:"primary"})}},460:function(e,t,a){},462:function(e,t,a){(function(r){var n;e.exports=(n=a(1),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var r=a(3);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,s,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,r){"use strict";r.r(a);var n=r(1),s=r.n(n),i=r(0),o=r.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,n=e.selected,i=e.activeClassName,o=e.activeLinkClassName,l=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+r+(d?" "+d:""),b=null;return n&&(b="page",f=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==o&&(a=a+" "+o):a=o),s.a.createElement("li",{className:t},s.a.createElement("a",c({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},l(u)),r))};l.propTypes={pageSelectedHandler:o.a.func.isRequired,selected:o.a.bool.isRequired,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,extraAriaContext:o.a.string,href:o.a.string,ariaLabel:o.a.string,page:o.a.number.isRequired,getEventListener:o.a.func.isRequired};var u=l;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,i=e.getEventListener,o=a||"break";return s.a.createElement("li",{className:o},s.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},i(n)),t))};d.propTypes={breakLabel:o.a.oneOfType([o.a.string,o.a.node]),breakClassName:o.a.string,breakLinkClassName:o.a.string,breakHandler:o.a.func.isRequired,getEventListener:o.a.func.isRequired};var f=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=O(e);if(t){var n=O(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,r,n=v(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),x(y(t=n.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),x(y(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),x(y(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),x(y(t),"getEventListener",(function(e){return x({},t.props.eventListener,e)})),x(y(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),x(y(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),x(y(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,i=a.marginPagesDisplayed,o=a.breakLabel,c=a.breakClassName,l=a.breakLinkClassName,u=t.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(t.getPageElement(p));else{var d,b,g,m=r/2,h=r-m;u>n-r/2?m=r-(h=n-u):u<r/2&&(h=r-(m=u));var v=function(e){return t.getPageElement(e)};for(d=0;d<n;d++)(b=d+1)<=i||b>n-i||d>=u-m&&d<=u+h?e.push(v(d)):o&&e[e.length-1]!==g&&(g=s.a.createElement(f,{key:d,breakLabel:o,breakClassName:c,breakLinkClassName:l,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(g))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,n=a.pageLinkClassName,i=a.activeClassName,o=a.activeLinkClassName,c=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:n,activeClassName:i,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,n=e.previousLabel,i=e.previousClassName,o=e.previousLinkClassName,c=e.previousAriaLabel,l=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,m=this.state.selected,h=i+(0===m?" ".concat(t):""),v=p+(m===a-1?" ".concat(t):""),j=0===m?"true":"false",y=m===a-1?"true":"false";return s.a.createElement("ul",{className:r},s.a.createElement("li",{className:h},s.a.createElement("a",g({className:o,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":c,rel:l},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),s.a.createElement("li",{className:v},s.a.createElement("a",g({className:d,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":y,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&m(t.prototype,a),r&&m(t,r),i}(n.Component);x(C,"propTypes",{pageCount:o.a.number.isRequired,pageRangeDisplayed:o.a.number.isRequired,marginPagesDisplayed:o.a.number.isRequired,previousLabel:o.a.node,previousAriaLabel:o.a.string,prevRel:o.a.string,nextLabel:o.a.node,nextAriaLabel:o.a.string,nextRel:o.a.string,breakLabel:o.a.oneOfType([o.a.string,o.a.node]),hrefBuilder:o.a.func,onPageChange:o.a.func,initialPage:o.a.number,forcePage:o.a.number,disableInitialCallback:o.a.bool,containerClassName:o.a.string,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,previousClassName:o.a.string,nextClassName:o.a.string,previousLinkClassName:o.a.string,nextLinkClassName:o.a.string,disabledClassName:o.a.string,breakClassName:o.a.string,breakLinkClassName:o.a.string,extraAriaContext:o.a.string,ariaLabelBuilder:o.a.func,eventListener:o.a.string}),x(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(10))},467:function(e,t,a){"use strict";var r=a(15),n=a(16),s=a(1),i=a.n(s),o=a(5),c=a.n(o),l=a(117),u=a.n(l),p=a(79),d={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),c=Object(p.mapToCssModules)(u()(t,"card-title"),a);return i.a.createElement(s,Object(r.a)({},o,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},468:function(e,t,a){"use strict";var r=a(15),n=a(16),s=a(1),i=a.n(s),o=a(5),c=a.n(o),l=a(117),u=a.n(l),p=a(79),d={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),c=Object(p.mapToCssModules)(u()(t,"card-header"),a);return i.a.createElement(s,Object(r.a)({},o,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},469:function(e,t,a){"use strict";var r=a(15),n=a(16),s=a(1),i=a.n(s),o=a(5),c=a.n(o),l=a(117),u=a.n(l),p=a(79),d={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,o=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(p.mapToCssModules)(u()(t,"card-body"),a);return i.a.createElement(o,Object(r.a)({},c,{className:l,ref:s}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},485:function(e,t,a){"use strict";var r=a(15),n=a(16),s=a(1),i=a.n(s),o=a(5),c=a.n(o),l=a(117),u=a.n(l),p=a(79),d={tag:p.tagPropType,type:c.a.string,size:c.a.string,color:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.string},f=function(e){var t=e.className,a=e.cssModule,s=e.type,o=e.size,c=e.color,l=e.children,d=e.tag,f=Object(n.a)(e,["className","cssModule","type","size","color","children","tag"]),b=Object(p.mapToCssModules)(u()(t,!!o&&"spinner-"+s+"-"+o,"spinner-"+s,!!c&&"text-"+c),a);return i.a.createElement(d,Object(r.a)({role:"status"},f,{className:b}),l&&i.a.createElement("span",{className:Object(p.mapToCssModules)("sr-only",a)},l))};f.propTypes=d,f.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=f},486:function(e,t,a){"use strict";var r=a(1),n=a.n(r),s=a(449),i=a.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,s=e.size,i=void 0===s?24:s,l=c(e,["color","size"]);return n.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="ChevronDown",t.a=l},634:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"e",(function(){return p})),a.d(t,"f",(function(){return d}));var r=a(452),n=a(453),s=a(451),i=a(454),o=function(e,t){return function(){var a=Object(n.a)(Object(r.a)().mark((function a(n){return Object(r.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t),n({type:"GET_ALL_DATA_INIT"}),a.next=4,s.a.get("/quiz/list?quiz_category=Cricket&page=".concat(t),{params:e}).then((function(t){n({type:"GET_CRIC_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},c=function(e,t){return function(){var a=Object(n.a)(Object(r.a)().mark((function a(n){return Object(r.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t),n({type:"GET_ALL_DATA_INIT"}),a.next=4,s.a.get("/quiz/list?quiz_category=Football&page=".concat(t),{params:e}).then((function(t){n({type:"GET_FOOT_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},l=function(e,t){return function(){var a=Object(n.a)(Object(r.a)().mark((function a(n){return Object(r.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t),n({type:"GET_ALL_DATA_INIT"}),a.next=4,s.a.get("/quiz/list?quiz_category=Basketball&page=".concat(t),{params:e}).then((function(t){n({type:"GET_BASK_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(t){s.a.delete("/quiz/delete/".concat(e)).then((function(){var e,a;Object(i.c)(),t(function(){var t=Object(n.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),n({type:"GET_ALL_DATA_INIT"}),t.next=4,s.a.get("/quiz/list?page=".concat(a),{params:e}).then((function(t){n({type:"GET_ALL_DATA",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})).catch((function(e){Object(i.a)(),console.log(e)}))}},p=function(e){return function(){var t=Object(n.a)(Object(r.a)().mark((function t(a){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"DETAILS_VIEW_INIT"}),t.next=3,s.a.put("/quiz/view/".concat(e)).then((function(e){a({type:"QUIZ_DET",data:e.data.data})})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(n.a)(Object(r.a)().mark((function t(a){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("quiz/toggle_status/".concat(e)).then((function(e){a({type:"Quiz_TOGGLE_STATUS",data:e})})).catch((function(e){console.log(e),console.log("Error in Feed Post: ",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},965:function(e,t,a){"use strict";a.r(t);var r=a(17),n=a(1),s=a(459),i=[{name:"ID",minWidth:"20px",selector:"quiz_id",sortable:!0,cell:function(e){return e.quiz_id}},{name:"Name",minWidth:"250px",selector:"quiz_name",sortable:!0,cell:function(e){return e.quiz_name}},{name:"Coins",minWidth:"200px",selector:"quiz_coins",sortable:!0,cell:function(e){return e.quiz_coins}},{name:"Expiry",minWidth:"200px",selector:"quiz_expiry",sortable:!0,cell:function(e){return e.quiz_expiry}}],o=a(634),c=a(120),l=a(462),u=a.n(l),p=a(486),d=a(478),f=a.n(d),b=a(464),g=a(465),m=a(483),h=a(784),v=a(466),j=a(485),y=a(482),O=(a(476),a(456),a(6)),x=function(e){var t=e.handlePerPage,a=e.rowsPerPage,r=e.handleFilter,n=e.searchTerm;return Object(O.jsx)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(g.a,{xl:"6",className:"d-flex align-items-center p-0",children:Object(O.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(O.jsx)(m.a,{for:"rows-per-page",children:"Show"}),Object(O.jsxs)(h.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(O.jsx)("option",{value:"10",children:"10"}),Object(O.jsx)("option",{value:"25",children:"25"}),Object(O.jsx)("option",{value:"50",children:"50"})]}),Object(O.jsx)(m.a,{for:"rows-per-page",children:"Entries"})]})}),Object(O.jsx)(g.a,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:Object(O.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1",children:[Object(O.jsx)(m.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(O.jsx)(v.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:n,onChange:function(e){return r(e.target.value)}})]})})]})})},C=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.quiz})),a=Object(n.useState)(""),l=Object(r.a)(a,2),d=l[0],b=l[1],g=Object(n.useState)([]),m=Object(r.a)(g,2),h=m[0],v=m[1],C=Object(n.useState)(1),N=Object(r.a)(C,2),L=N[0],w=N[1];Object(n.useEffect)((function(){e(Object(o.b)(L))}),[L]),Object(n.useEffect)((function(){t.loadAllData?j.a:v(t.bask_data)}),[t.loadAllData]);if(Object(n.useEffect)((function(){if(d){var e=t.bask_data.filter((function(e){var t,a,r,n,s=e.id.toString().toLowerCase().startsWith(d.toLowerCase())||e.prize_rank.toString().toLowerCase().startsWith(d.toLowerCase())||(null===(t=e.contest_name)||void 0===t?void 0:t.toLowerCase().startsWith(d.toLowerCase()))||e.contest_prize_type.toLowerCase().startsWith(d.toLowerCase())||e.contest_prize_caption.toLowerCase().startsWith(d.toLowerCase())||(null===(a=e.contest_prize_value)||void 0===a?void 0:a.toString().toLowerCase().startsWith(d.toLowerCase())),i=e.id.toString().toLowerCase().startsWith(d.toLowerCase())||e.prize_rank.toString().toLowerCase().startsWith(d.toLowerCase())||(null===(r=e.contest_name)||void 0===r?void 0:r.toLowerCase().startsWith(d.toLowerCase()))||e.contest_prize_type.toLowerCase().startsWith(d.toLowerCase())||e.contest_prize_caption.toLowerCase().startsWith(d.toLowerCase())||(null===(n=e.contest_prize_value)||void 0===n?void 0:n.toString().toLowerCase().startsWith(d.toLowerCase()));return s||(!s&&i?i:null)}));v(e),w(1)}else v(t.bask_data)}),[d]),t.loadAllData)return Object(O.jsx)("div",{className:"position-absolute d-flex justify-content-center align-items-center w-100 position-top-0 position-bottom-0 position-left-0 position-right-0 h-100",children:Object(O.jsx)(s.a,{blocking:!0})});console.log(t.bask_quiz_page.last_page);return Object(O.jsx)(n.Fragment,{children:Object(O.jsx)(y.a,{children:Object(O.jsx)(f.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:i,paginationPerPage:!0,paginationDefaultPage:L,sortIcon:Object(O.jsx)(p.a,{}),className:"react-dataTable",paginationComponent:function(){var e=t.bask_quiz_page.last_page;return Object(O.jsx)(u.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==L?L-1:0,onPageChange:function(e){return function(e){w(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={q:d},t=Object.keys(e).some((function(t){return e[t].length>0}));return 0===h.length&&t?[]:h}(),subHeaderComponent:Object(O.jsx)(x,{handlePerPage:!0,rowsPerPage:!0,searchTerm:d,handleFilter:function(e){b(e)}})})})})};a(455),t.default=function(){return Object(O.jsx)("div",{className:"app-user-list",children:Object(O.jsx)(C,{})})}}}]);
//# sourceMappingURL=24.c0671638.chunk.js.map