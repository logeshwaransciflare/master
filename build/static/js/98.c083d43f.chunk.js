(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[98],{1465:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(1),s=n(464),c=n(515),i=n.n(c),o=n(544),l=n(736),u=n(122),d=n(516),f=n.n(d),p=n(467),j=n.n(p),b=n(489),m=n(925),h=n(659),O=n(485),g=n(478),x=n.n(g),v=n(472),y=n(471),w=n(484),z=n(473),N=n(884),_=n(486),C=n(491),T=(n(477),n(462),n(517)),k=n.n(T),L=n(474),q=n(6),P=function(e){var t=e.handlePerPage,n=e.rowsPerPage,a=e.handleFilter,r=e.searchTerm,s=[{title:Object(q.jsxs)("div",{children:[Object(q.jsx)(b.a,{size:18})," Filter"]}),content:Object(q.jsx)(v.a,{xl:12,children:Object(q.jsx)(y.a,{xl:"12",className:"d-flex align-items-sm-center justify-content justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:Object(q.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1 ml-1",children:[Object(q.jsx)(w.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(q.jsx)(z.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:r,onChange:function(e){return a(e.target.value)}})]})})})}];return Object(q.jsxs)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:[Object(q.jsx)(L.a,{data:s,type:"border",accordion:!0}),Object(q.jsx)(v.a,{className:"mt-1",children:Object(q.jsx)(y.a,{xl:"6",className:"d-flex align-items-center p-0",children:Object(q.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(q.jsx)(w.a,{for:"rows-per-page",children:"Show"}),Object(q.jsxs)(N.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:n,onChange:t,style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(q.jsx)("option",{value:"10",children:"10"}),Object(q.jsx)("option",{value:"25",children:"25"}),Object(q.jsx)("option",{value:"50",children:"50"})]}),Object(q.jsx)(w.a,{for:"rows-per-page",children:"Entries"})]})})})]})},S=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.quiz})),n=Object(r.useState)(""),c=Object(a.a)(n,2),d=c[0],p=c[1],b=Object(r.useState)([]),g=Object(a.a)(b,2),v=g[0],y=g[1],w=Object(r.useState)(1),z=Object(a.a)(w,2),T=z[0],L=z[1],S=Object(r.useState)(""),E=Object(a.a)(S,2),M=E[0],A=E[1],I=k()(f.a),D=Object(o.g)();Object(r.useEffect)((function(){e(Object(l.c)("",T))}),[T,M]),Object(r.useEffect)((function(){t.loadAllData?_.a:y(t.cric_data)}),[t.loadAllData]);i()().format("MMM Do YY");var Y=[{name:"#",minWidth:"10px",selector:"s_no",sortable:!0,cell:function(e,n){return"#".concat(t.cric_quiz_page.from+n)}},{name:"Title",minWidth:"250px",selector:"quiz_name",sortable:!0,cell:function(e){return""===e.quiz_name?"-":e.quiz_name}},{name:"caption",minWidth:"200px",selector:"quiz_coins",sortable:!0,cell:function(e){return e.quiz_coins}},{name:"asseturl",minWidth:"200px",selector:"quiz_expiry",sortable:!0,cell:function(e){return i()(e.quiz_expiry,"DD-MM-YYYY").format("DD MMM YYYY HH:MM:SS")}},{name:"entryfee",minWidth:"200px",selector:"entryfee",sortable:!0,cell:function(e){return e.quiz_coins}},{name:"Type",minWidth:"200px",selector:"type",sortable:!0,cell:function(e){return e.quiz_coins}},{name:"Status",minWidth:"138px",selector:"active",sortable:!0,cell:function(t){return Object(q.jsx)("div",{className:"column-action",children:Object(q.jsx)(N.a,{className:"custom-control-success",type:"switch",id:"success".concat(t.quiz_id),name:"success",onChange:function(){return function(t){e(Object(l.f)(t)),A(!M)}(t.quiz_id)},inline:!0,defaultChecked:"CLOSE"!==t.quiz_status})})}},{name:"Action",minWidth:"130px",selector:"action",cell:function(t){return Object(q.jsxs)("div",{className:"column-action",children:[Object(q.jsx)(m.a,{width:"17",className:"cursor-pointer",title:"Edit Feed",onClick:function(){return n=t.quiz_id,e(Object(l.e)(n)),void D.push("/quiz/edit/".concat(n));var n}}),Object(q.jsx)(h.a,{width:"17",className:"ml-2 cursor-pointer",onClick:function(){return n=t.quiz_id,I.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(t){t.value&&(e(Object(l.a)(n)),I.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}}))}));var n}})]})}}];if(Object(r.useEffect)((function(){if(d){var e=t.cric_data.filter((function(e){var t,n,a=i()(e.quiz_expiry,"DD-MM-YYYY").format("DD MMM YYYY HH:MM:SS"),r=e.quiz_id.toString().toLowerCase().startsWith(d.toLowerCase())||e.quiz_name.toString().toLowerCase().startsWith(d.toLowerCase())||(null===(t=e.quiz_coins)||void 0===t?void 0:t.toString().toLowerCase().startsWith(d.toLowerCase()))||a.toLowerCase().startsWith(d.toLowerCase()),s=e.quiz_id.toString().toLowerCase().includes(d.toLowerCase())||e.quiz_name.toString().toLowerCase().includes(d.toLowerCase())||(null===(n=e.quiz_coins)||void 0===n?void 0:n.toString().toLowerCase().includes(d.toLowerCase()))||a.toLowerCase().includes(d.toLowerCase());return r||(!r&&s?s:null)}));y(e)}else y(t.cric_data)}),[d]),t.loadAllData)return Object(q.jsx)("div",{className:"position-absolute d-flex justify-content-center align-items-center w-100 position-top-0 position-bottom-0 position-left-0 position-right-0 h-100",children:Object(q.jsx)(s.a,{blocking:!0})});console.log(t.cric_quiz_page.last_page);return Object(q.jsx)(r.Fragment,{children:Object(q.jsx)(C.a,{children:Object(q.jsx)(x.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:Y,paginationPerPage:!0,paginationDefaultPage:T,sortIcon:Object(q.jsx)(O.a,{}),className:"react-dataTable",paginationComponent:function(){var e=t.cric_quiz_page.last_page;return Object(q.jsx)(j.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==T?T-1:0,onPageChange:function(e){return function(e){L(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={q:d},t=Object.keys(e).some((function(t){return e[t].length>0}));return 0===v.length&&t?[]:v}(),subHeaderComponent:Object(q.jsx)(P,{handlePerPage:!0,rowsPerPage:!0,searchTerm:d,handleFilter:function(e){p(e)}})})})})};n(461),t.default=function(){return Object(q.jsx)("div",{className:"app-user-list",children:Object(q.jsx)(S,{})})}},457:function(e,t,n){"use strict";var a=n(0),r=n(83),s=n.n(r),c=localStorage.getItem("TOKEN"),i=s.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:c}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(a.a)(Object(a.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},460:function(e,t,n){"use strict";n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"a",(function(){return x})),n.d(t,"f",(function(){return v}));var a=n(1),r=n(123),s=n(470),c=(n(811),n(754)),i=n(886),o=n(812),l=(n(755),n(491),n(502),n(500),n(496),n(453),n(6)),u=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},f=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},p=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},j=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"danger",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},b=function(){return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"warning",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},m=function(e){return r.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},h=function(e){return r.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},O=function(e){return r.b.success(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},g=function(e){return r.b.success(Object(l.jsx)(p,{message:e}),{hideProgressBar:!0})},x=function(e){return r.b.error(Object(l.jsx)(j,{message:e}),{hideProgressBar:!0})},v=function(){return r.b.warning(Object(l.jsx)(b,{}),{hideProgressBar:!0})}},461:function(e,t,n){},462:function(e,t,n){},464:function(e,t,n){"use strict";var a=n(0),r=n(31),s=n(1),c=n(57),i=n.n(c),o=n(486),l=(n(465),n(6)),u=function(e){var t,n=e.children,c=e.blocking,o=e.loader,u=e.className,d=e.tag,f=e.overlayColor,p=d;return Object(l.jsxs)(p,{className:i()("ui-loader",(t={},Object(r.a)(t,u,u),Object(r.a)(t,"show",c),t)),children:[n,c?Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("div",Object(a.a)({className:"overlay"},c&&f?{style:{backgroundColor:f}}:{})),Object(l.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(o.a,{color:"primary"})}},465:function(e,t,n){},473:function(e,t,n){"use strict";var a=n(14),r=n(15),s=n(58),c=n(121),i=n(1),o=n.n(i),l=n(5),u=n.n(l),d=n(57),f=n.n(d),p=n(82),j={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(s.a)(n)),n.focus=n.focus.bind(Object(s.a)(n)),n}Object(c.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,s=e.type,c=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,d=e.addon,j=e.plaintext,b=e.innerRef,m=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(s)>-1,O=new RegExp("\\D","g"),g=u||("select"===s||"textarea"===s?s:"input"),x="form-control";j?(x+="-plaintext",g=u||"input"):"file"===s?x+="-file":"range"===s?x+="-range":h&&(x=d?null:"form-check-input"),m.size&&O.test(m.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=m.size,delete m.size);var v=Object(p.mapToCssModules)(f()(t,l&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,x),n);return("input"===g||u&&"function"===typeof u)&&(m.type=s),m.children&&!j&&"select"!==s&&"string"===typeof g&&"select"!==g&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),o.a.createElement(g,Object(a.a)({},m,{ref:b,className:v,"aria-invalid":l}))},t}(o.a.Component);b.propTypes=j,b.defaultProps={type:"text"},t.a=b},474:function(e,t,n){"use strict";var a=n(0),r=n(31),s=n(16),c=n(59),i=n(1),o=n(57),l=n.n(o),u=n(490),d=n(491),f=n(502),p=n(500),j=n(793),b=n(496),m=n(6),h=function(e){var t,n=e.data,o=e.type,h=e.accordion,O=e.active,g=e.toggle,x=e.titleKey,v=e.contentKey,y=e.className,w=Object(i.useState)(h?O:Object(c.a)(O)),z=Object(s.a)(w,2),N=z[0],_=z[1],C=function(e){if(h)_(e===N?null:e);else{var t=N,n=t.indexOf(e);t.includes(e)?(t.splice(n,1),_(Object(c.a)(t))):(t.push(e),_(Object(c.a)(t)))}};return Object(m.jsx)("div",{className:l()("collapse-icon",(t={},Object(r.a)(t,y,y),Object(r.a)(t,"collapse-default",!o),Object(r.a)(t,"collapse-shadow","shadow"===o),Object(r.a)(t,"collapse-border","border"===o),Object(r.a)(t,"collapse-margin","margin"===o),t)),children:n.map((function(e,t){var n,s=x?e[x]:e.title,c=v?e[v]:e.content;return Object(m.jsxs)(d.a,{className:l()("app-collapse",(n={},Object(r.a)(n,e.className,e.className),Object(r.a)(n,"open",h?N===t:N.includes(t)&&"shadow"===o),n)),children:[Object(m.jsxs)(f.a,Object(a.a)(Object(a.a)({className:l()("align-items-center",{collapsed:h?N!==t:!N.includes(t)})},"hover"===g?{onMouseEnter:function(){return C(t)}}:{onClick:function(){return C(t)}}),{},{children:[Object(m.jsx)(p.a,{className:"collapse-title",children:s}),Object(m.jsx)(u.a,{size:14})]})),Object(m.jsx)(j.a,{isOpen:h?N===t:N.includes(t),children:Object(m.jsx)(b.a,{children:c})})]},t)}))})};t.a=h,h.defaultProps={active:[],toggle:"click"}},484:function(e,t,n){"use strict";var a=n(14),r=n(15),s=n(1),c=n.n(s),i=n(5),o=n.n(i),l=n(57),u=n.n(l),d=n(82),f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),j={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,l=e.check,f=e.size,p=e.for,j=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];i.forEach((function(t,a){var r=e[t];if(delete j[t],r||""===r){var s,c=!a;if(Object(d.isObject)(r)){var i,o=c?"-":"-"+t+"-";s=m(c,t,r.size),b.push(Object(d.mapToCssModules)(u()(((i={})[s]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),n)}else s=m(c,t,r),b.push(s)}}));var h=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),n);return c.a.createElement(o,Object(a.a)({htmlFor:p},j,{className:h}))};h.propTypes=j,h.defaultProps=b,t.a=h},489:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(5),c=n.n(s);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=o(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Filter",t.a=l},490:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(5),c=n.n(s);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=o(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"18 15 12 9 6 15"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="ChevronUp",t.a=l},736:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return p}));var a=n(458),r=n(459),s=n.n(r),c=n(457),i=n(460),o=function(e,t){return function(){var n=Object(a.a)(s.a.mark((function n(a){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),a({type:"GET_ALL_DATA_INIT"}),n.next=4,c.a.get("/quiz/list?quiz_category=Cricket&page=".concat(t),{params:e}).then((function(t){a({type:"GET_CRIC_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},l=function(e,t){return function(){var n=Object(a.a)(s.a.mark((function n(a){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),a({type:"GET_ALL_DATA_INIT"}),n.next=4,c.a.get("/quiz/list?quiz_category=Football&page=".concat(t),{params:e}).then((function(t){a({type:"GET_FOOT_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},u=function(e,t){return function(){var n=Object(a.a)(s.a.mark((function n(a){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),a({type:"GET_ALL_DATA_INIT"}),n.next=4,c.a.get("/quiz/list?quiz_category=Basketball&page=".concat(t),{params:e}).then((function(t){a({type:"GET_BASK_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},d=function(e){return function(t){c.a.delete("/quiz/delete/".concat(e)).then((function(){var e,n;Object(i.c)(),t(function(){var t=Object(a.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),a({type:"GET_ALL_DATA_INIT"}),t.next=4,c.a.get("/quiz/list?page=".concat(n),{params:e}).then((function(t){a({type:"GET_ALL_DATA",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})).catch((function(e){Object(i.a)(),console.log(e)}))}},f=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"DETAILS_VIEW_INIT"}),t.next=3,c.a.put("/quiz/view/".concat(e)).then((function(e){n({type:"QUIZ_DET",data:e.data.data})})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("quiz/toggle_status/".concat(e)).then((function(e){n({type:"Quiz_TOGGLE_STATUS",data:e})})).catch((function(e){console.log(e),console.log("Error in Feed Post: ",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=98.c083d43f.chunk.js.map