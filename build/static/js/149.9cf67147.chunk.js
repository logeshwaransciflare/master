(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[149],{1445:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(1),s=a(122),i=a(476),o=a(475),c=a(491),l=a(502),u=a(500),d=a(496),p=a(472),f=a(471),b=a(484),m=a(453),g=a(705),h=[{name:"ID",minWidth:"20px",selector:"id",sortable:!0,cell:function(e){return e.id}},{name:"Fixture Short Name",minWidth:"160px",selector:"fixture_sh",sortable:!0,cell:function(e){var t;return null===e||void 0===e||null===(t=e.fixture)||void 0===t?void 0:t.fixture_sh}},{name:"Team SN",minWidth:"160px",selector:"team_sn",sortable:!0,cell:function(e){var t;return null===(t=e.team)||void 0===t?void 0:t.team_sn}},{name:"Player_name",minWidth:"160px",selector:"p_name",sortable:!0,cell:function(e){return e.p_name}},{name:"Player Type",minWidth:"160px",selector:"player_type",sortable:!0,cell:function(e){return e.player_type}},{name:"Total Score",minWidth:"160px",selector:"total_score",sortable:!0,cell:function(e){return e.total_score}},{name:"Run Bonus",minWidth:"160px",selector:"run_bonus",sortable:!0,cell:function(e){return e.run_bonus}},{name:"Run Scored",minWidth:"160px",selector:"runs_scored",sortable:!0,cell:function(e){return e.runs_scored}},{name:"Four's hit",minWidth:"160px",selector:"fours_hit",sortable:!0,cell:function(e){return e.fours_hit}},{name:"Six's hit",minWidth:"160px",selector:"sixes_hit",sortable:!0,cell:function(e){return e.sixes_hit}},{name:"Wicket Bonus",minWidth:"160px",selector:"wicket_bonus",sortable:!0,cell:function(e){return e.wicket_bonus}},{name:"Wicket Taken",minWidth:"160px",selector:"wickets_taken",sortable:!0,cell:function(e){return e.wickets_taken}}],v=a(467),j=a.n(v),x=a(485),O=a(478),y=a.n(O),C=a(884),N=a(473),k=(a(477),a(462),a(6)),P=function(e){var t=e.handlePerPage,a=e.rowsPerPage,n=e.handleFilter,r=e.searchTerm,i=Object(s.b)(),o=Object(s.c)((function(e){return e.rep}));console.log(o.seriesid);return Object(k.jsx)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(f.a,{xl:"6",className:"d-flex align-items-center p-0",children:Object(k.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(k.jsx)(b.a,{for:"rows-per-page",children:"Show"}),Object(k.jsxs)(C.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(k.jsx)("option",{value:"10",children:"10"}),Object(k.jsx)("option",{value:"25",children:"25"}),Object(k.jsx)("option",{value:"50",children:"50"})]}),Object(k.jsx)(b.a,{for:"rows-per-page",children:"Entries"})]})}),Object(k.jsxs)(f.a,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[Object(k.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1",children:[Object(k.jsx)(b.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(k.jsx)(N.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:r,onChange:function(e){return n(e.target.value)}})]}),Object(k.jsx)(m.a,{color:"primary",onClick:function(){return i(Object(g.h)(o.seriesid,o.fixtureid)),void console.log(o.seriesid)},children:"Download CSV"})]})]})})},w=function(){var e=Object(s.c)((function(e){return e.rep})),t=Object(r.useState)(""),a=Object(n.a)(t,2),i=a[0],o=a[1],l=Object(r.useState)([]),u=Object(n.a)(l,2),d=u[0],p=u[1],f=Object(r.useState)(1),b=Object(n.a)(f,2),m=b[0],g=b[1],v=Object(r.useState)(10),O=Object(n.a)(v,2),C=O[0],N=O[1];Object(r.useEffect)((function(){e.player_reports&&(p(e.player_reports),console.log(e.player_reports.length))}),[e.player_reports]),console.log(e);Object(r.useEffect)((function(){if(i){var t=e.player_reports.records.filter((function(e){var t=e.full_name.toLowerCase().startsWith(i.toLowerCase())||e.email.toLowerCase().startsWith(i.toLowerCase()),a=e.full_name.toLowerCase().includes(i.toLowerCase())||e.email.toLowerCase().includes(i.toLowerCase());return t||(!t&&a?a:null)}));p(t),g(1)}}),[i]);return Object(k.jsx)(r.Fragment,{children:Object(k.jsx)(c.a,{children:Object(k.jsx)(y.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,highlightOnHover:!0,pointerOnHover:!0,paginationServer:!0,columns:h,paginationPerPage:C,sortIcon:Object(k.jsx)(x.a,{}),paginationDefaultPage:m,className:"react-dataTable",paginationComponent:function(){var t=Number(Math.ceil(e.player_reports.record_count/C));return Object(k.jsx)(j.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==m?m-1:0,onPageChange:function(e){return function(e){g(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={q:i},t=Object.keys(e).some((function(t){return e[t].length>0}));return 0===d.length&&t?[]:d.length?d.slice((m-1)*C,m*C):void 0}(),subHeaderComponent:Object(k.jsx)(P,{handlePerPage:function(e){var t=parseInt(e.currentTarget.value);N(t),g(1)},rowsPerPage:C,searchTerm:i,handleFilter:function(e){o(e)}})})})})};t.default=function(){var e,t,a=Object(s.c)((function(e){return e.rep})),h=Object(r.useState)(0),v=Object(n.a)(h,2),j=v[0],x=v[1],O=Object(r.useState)(0),y=Object(n.a)(O,2),C=y[0],N=y[1],P=Object(r.useState)(!1),L=Object(n.a)(P,2),_=L[0],E=L[1],T=Object(r.useState)(!1),R=Object(n.a)(T,2),S=R[0],z=R[1],D=Object(r.useState)(""),B=Object(n.a)(D,2),I=B[0],A=B[1],W=Object(r.useState)(""),H=Object(n.a)(W,2),F=H[0],M=H[1],G=Object(s.b)(),V=a.series_name.map((function(e){return{value:e.series_name,label:e.series_name}})),q=a.fixture_name.map((function(e){return{value:e.fixture_name,label:e.fixture_name}})),U=a.series_name.filter((function(e){return e.series_name===I})),K=a.fixture_name.filter((function(e){return e.fixture_name===F}));console.log(a.fixture_name);console.log(a.player_reports);return console.log(null===(e=U[0])||void 0===e?void 0:e.id),console.log(null===(t=K[0])||void 0===t?void 0:t.id),Object(r.useEffect)((function(){G(Object(g.g)()),console.log(a)}),[]),Object(r.useEffect)((function(){var e;G(Object(g.e)(null===(e=U[0])||void 0===e?void 0:e.id)),console.log("now"),console.log(a.fixture_name)}),[j]),console.log(a.fixture_name),Object(k.jsxs)(c.a,{children:[Object(k.jsx)(l.a,{children:Object(k.jsx)(u.a,{tag:"h4",children:a.isloading})}),Object(k.jsxs)(d.a,{children:[Object(k.jsx)("p",{children:Object(k.jsx)("a",{className:"my-50",target:"_blank",href:"https://react-select.com/home",rel:"noopener noreferrer"})}),Object(k.jsxs)(p.a,{children:[Object(k.jsxs)(f.a,{className:"mb-1",md:"6",sm:"12",children:[Object(k.jsx)(b.a,{children:"series"}),Object(k.jsx)(i.a,{onChange:function(e){return function(e){var t,a;A(e.value),z(!0),console.log("change"),x(null===(t=U[0])||void 0===t?void 0:t.id),console.log(null===(a=U[0])||void 0===a?void 0:a.id)}(e)},theme:o.f,className:"react-select",classNamePrefix:"select",options:V,isClearable:!0})]}),Object(k.jsxs)(f.a,{className:"mb-1",md:"6",sm:"12",children:[Object(k.jsx)(b.a,{children:"fixture"}),Object(k.jsx)(i.a,{onChange:function(e){return function(e){var t,a;M(e.value),z(!1),N(null===(t=K[0])||void 0===t?void 0:t.id),console.log(null===(a=K[0])||void 0===a?void 0:a.id),console.log(C)}(e)},theme:o.f,className:"react-select",value:S?" ":C,classNamePrefix:"select",options:q||"",isClearable:!0})]})]}),Object(k.jsx)(m.a.Ripple,{color:"primary",onClick:function(e){return function(e){var t,a,n,r,s,i;e.preventDefault(),G(Object(g.i)(null===(t=U[0])||void 0===t?void 0:t.id,null===(a=K[0])||void 0===a?void 0:a.id)),G(Object(g.c)(null===(n=U[0])||void 0===n?void 0:n.id)),G(Object(g.b)(null===(r=K[0])||void 0===r?void 0:r.id)),console.log(null===(s=U[0])||void 0===s?void 0:s.id,null===(i=K[0])||void 0===i?void 0:i.id),E(!0)}(e)},children:"submit"}),_?Object(k.jsx)(w,{}):""]})]})}},457:function(e,t,a){"use strict";var n=a(0),r=a(83),s=a.n(r),i=localStorage.getItem("TOKEN"),o=s.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:i}});o.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(n.a)(Object(n.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=o},460:function(e,t,a){"use strict";a.d(t,"e",(function(){return g})),a.d(t,"b",(function(){return h})),a.d(t,"d",(function(){return v})),a.d(t,"c",(function(){return j})),a.d(t,"a",(function(){return x})),a.d(t,"f",(function(){return O}));var n=a(1),r=a(123),s=a(470),i=(a(811),a(754)),o=a(886),c=a(812),l=(a(755),a(491),a(502),a(500),a(496),a(453),a(6)),u=function(e){var t=e.message;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},p=function(e){var t=e.message;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},f=function(e){var t=e.message;return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},b=function(e){var t=e.message;return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"danger",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},m=function(){return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"warning",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},g=function(e){return r.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},h=function(e){return r.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},v=function(e){return r.b.success(Object(l.jsx)(p,{message:e}),{hideProgressBar:!0})},j=function(e){return r.b.success(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},x=function(e){return r.b.error(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},O=function(){return r.b.warning(Object(l.jsx)(m,{}),{hideProgressBar:!0})}},462:function(e,t,a){},467:function(e,t,a){(function(n){var r;e.exports=(r=a(1),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,s,i){if(i!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),s=n.n(r),i=n(0),o=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,i=e.activeClassName,o=e.activeLinkClassName,l=e.getEventListener,u=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,f=e.ariaLabel||"Page "+n+(p?" "+p:""),b=null;return r&&(b="page",f=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==o&&(a=a+" "+o):a=o),s.a.createElement("li",{className:t},s.a.createElement("a",c({role:"button",className:a,href:d,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},l(u)),n))};l.propTypes={pageSelectedHandler:o.a.func.isRequired,selected:o.a.bool.isRequired,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,extraAriaContext:o.a.string,href:o.a.string,ariaLabel:o.a.string,page:o.a.number.isRequired,getEventListener:o.a.func.isRequired};var u=l;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var p=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,o=a||"break";return s.a.createElement("li",{className:o},s.a.createElement("a",d({className:n,role:"button",tabIndex:"0",onKeyPress:r},i(r)),t))};p.propTypes={breakLabel:o.a.oneOfType([o.a.string,o.a.node]),breakClassName:o.a.string,breakLinkClassName:o.a.string,breakHandler:o.a.func.isRequired,getEventListener:o.a.func.isRequired};var f=p;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=O(e);if(t){var r=O(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,n,r=v(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(x(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(x(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),y(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(x(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),y(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(x(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,o=a.breakLabel,c=a.breakClassName,l=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var d=0;d<r;d++)e.push(t.getPageElement(d));else{var p,b,m,g=n/2,h=n-g;u>r-n/2?g=n-(h=r-u):u<n/2&&(h=n-(g=u));var v=function(e){return t.getPageElement(e)};for(p=0;p<r;p++)(b=p+1)<=i||b>r-i||p>=u-g&&p<=u+h?e.push(v(p)):o&&e[e.length-1]!==m&&(m=s.a.createElement(f,{key:p,breakLabel:o,breakClassName:c,breakLinkClassName:l,breakHandler:t.handleBreakClick.bind(null,p),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,o=a.activeLinkClassName,c=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,i=e.previousClassName,o=e.previousLinkClassName,c=e.previousAriaLabel,l=e.prevRel,u=e.nextLabel,d=e.nextClassName,p=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,g=this.state.selected,h=i+(0===g?" ".concat(t):""),v=d+(g===a-1?" ".concat(t):""),j=0===g?"true":"false",x=g===a-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:h},s.a.createElement("a",m({className:o,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":c,rel:l},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:v},s.a.createElement("a",m({className:p,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),n&&g(t,n),i}(r.Component);y(C,"propTypes",{pageCount:o.a.number.isRequired,pageRangeDisplayed:o.a.number.isRequired,marginPagesDisplayed:o.a.number.isRequired,previousLabel:o.a.node,previousAriaLabel:o.a.string,prevRel:o.a.string,nextLabel:o.a.node,nextAriaLabel:o.a.string,nextRel:o.a.string,breakLabel:o.a.oneOfType([o.a.string,o.a.node]),hrefBuilder:o.a.func,onPageChange:o.a.func,initialPage:o.a.number,forcePage:o.a.number,disableInitialCallback:o.a.bool,containerClassName:o.a.string,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,previousClassName:o.a.string,nextClassName:o.a.string,previousLinkClassName:o.a.string,nextLinkClassName:o.a.string,disabledClassName:o.a.string,breakClassName:o.a.string,breakLinkClassName:o.a.string,extraAriaContext:o.a.string,ariaLabelBuilder:o.a.func,eventListener:o.a.string}),y(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(9))},473:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(58),i=a(121),o=a(1),c=a.n(o),l=a(5),u=a.n(l),d=a(57),p=a.n(d),f=a(82),b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,i=e.bsSize,o=e.valid,l=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,m=e.innerRef,g=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),j=u||("select"===s||"textarea"===s?s:"input"),x="form-control";b?(x+="-plaintext",j=u||"input"):"file"===s?x+="-file":"range"===s?x+="-range":h&&(x=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var O=Object(f.mapToCssModules)(p()(t,l&&"is-invalid",o&&"is-valid",!!i&&"form-control-"+i,x),a);return("input"===j||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof j&&"select"!==j&&(Object(f.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(j,Object(n.a)({},g,{ref:m,className:O,"aria-invalid":l}))},t}(c.a.Component);m.propTypes=b,m.defaultProps={type:"text"},t.a=m},484:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),i=a.n(s),o=a(5),c=a.n(o),l=a(57),u=a.n(l),d=a(82),p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,l=e.check,p=e.size,f=e.for,b=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];o.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,i=!n;if(Object(d.isObject)(r)){var o,c=i?"-":"-"+t+"-";s=g(i,t,r.size),m.push(Object(d.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o))),a)}else s=g(i,t,r),m.push(s)}}));var h=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!l&&"form-check-label",!!p&&"col-form-label-"+p,m,!!m.length&&"col-form-label"),a);return i.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:h}))};h.propTypes=b,h.defaultProps=m,t.a=h},485:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(5),i=a.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,s=e.size,i=void 0===s?24:s,l=c(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="ChevronDown",t.a=l},705:function(e,t,a){"use strict";a.d(t,"g",(function(){return c})),a.d(t,"e",(function(){return l})),a.d(t,"i",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"h",(function(){return f})),a.d(t,"a",(function(){return b})),a.d(t,"d",(function(){return m})),a.d(t,"f",(function(){return g}));var n=a(458),r=a(459),s=a.n(r),i=a(457),o=a(460),c=function(){return function(){var e=Object(n.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_ALL_REPORTS_INIT"}),e.next=3,i.a.get("/cricket/series/list").then((function(e){t({type:"SERIES_NAME",data:e.data.data}),console.log(e.data.data.records,"this")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(n.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),a({type:"GET_ALL_REPORTS_INIT"}),t.next=4,i.a.get("/cricket/fixture/list/".concat(e)).then((function(e){a({type:"FIXTURE_NAME",data:e.data.data}),console.log(e.data.data)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e,t){return function(){var a=Object(n.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"GET_ALL_REPORTS_INIT"}),a.next=3,i.a.get("/cricket/reports/playerReport?series_id=".concat(e,"&fixture_id=").concat(t)).then((function(e){n({type:"PLAYER_REPORT",data:e.data.data}),console.table(e.data.data)}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e){return console.log(e),function(t){t({type:"COLLECT_SERIESID",data:e})}},p=function(e){return console.log(e),function(t){t({type:"COLLECT_FIXTUREID",data:e})}},f=function(e,t){return Object(n.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.get("/cricket/reports/playerReport?series_id=".concat(e,"&fixture_id=").concat(t,"&download=true"),{responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download","cricketplayerreport.csv"),document.body.appendChild(a),a.click()}));case 2:case"end":return a.stop()}}),a)})))},b=function(e){return function(){var t=Object(n.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/fixtureUpload",e).then((function(e){Object(o.b)(e.data.message),a({type:"ADD_FILE",data:e.data.message})})).catch((function(e){Object(o.a)(e.response.data.message)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(e){i.a.get("cricket/team/list").then((function(t){return e({type:"GET_CRICKET_TEAMS",data:t.data.data.data})})).catch((function(e){return console.log(e)}))}},g=function(){return function(e){i.a.get("football/team/list").then((function(t){return e({type:"GET_FOOTBALL_TEAMS",data:t.data.data.data})})).catch((function(e){return console.log(e)}))}}}}]);
//# sourceMappingURL=149.9cf67147.chunk.js.map