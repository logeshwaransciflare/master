(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[158],{1576:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n(1),s=n(459),r=n(494),i=n.n(r),o=n(495),l=n.n(o),u=n(507),d=n(721),j=n(120),b=(n(476),n(456),n(462)),f=n.n(b),m=n(826),p=n(655),h=n(486),O=n(478),g=n.n(O),v=n(482),x=n(464),C=n(465),w=n(483),N=n(466),y=n(6),_=function(){var e=Object(j.b)(),t=Object(u.g)(),n=Object(j.c)((function(e){return e.prizemaster})),r=l()(i.a),o=Object(c.useState)(1),b=Object(a.a)(o,2),O=b[0],_=b[1],L=Object(c.useState)(10),z=Object(a.a)(L,2),S=z[0],k=z[1],E=Object(c.useState)(""),T=Object(a.a)(E,2),I=T[0],P=T[1],R=Object(c.useState)([]),A=Object(a.a)(R,2),F=A[0],B=A[1];Object(c.useEffect)((function(){e(Object(d.d)(O))}),[O]),console.log(n.get_football_prize.data);var W=[{name:"Sno",minWidth:"10px",selector:"s_no",sortable:!0,cell:function(e,t){return n.get_football_prize.from+t}},{name:"name",minWidth:"20px",selector:"feed_id",sortable:!0,cell:function(e){return e.name}},{name:"caption",minWidth:"20px",selector:"feed_id",sortable:!0,cell:function(e){return e.caption}},{name:"type",minWidth:"20px",selector:"feed_id",sortable:!0,cell:function(e){return e.type}},{name:"Active",minWidth:"138px",selector:"active",sortable:!0,cell:function(n){return Object(y.jsxs)("div",{className:"column-action",children:[Object(y.jsx)(m.a,{width:"17",className:"cursor-pointer",title:"Edit Feed",onClick:function(){return a=n.id,e(Object(d.f)(a)),void t.push("/footballprizemaster/edit/".concat(a));var a}}),Object(y.jsx)(p.a,{width:"17",className:"ml-2 cursor-pointer",title:"Add Feed",onClick:function(){return t=n.id,r.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(n){n.value&&(e(Object(d.b)(t)),r.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}}))}));var t}})]})}}];console.log(n.get_football_prize.data);return n.isloading?Object(y.jsx)("div",{className:"position-absolute d-flex justify-content-center align-items-center w-100 position-top-0 position-bottom-0 position-left-0 position-right-0 h-100",children:Object(y.jsx)(s.a,{blocking:!0})}):(console.log(n),Object(y.jsx)(c.Fragment,{children:Object(y.jsxs)(v.a,{children:[Object(y.jsxs)(x.a,{className:"mx-0 mt-1 mb-50",children:[Object(y.jsx)(C.a,{sm:"6",children:Object(y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(y.jsx)(w.a,{for:"sort-select",children:"show"}),Object(y.jsxs)(N.a,{className:"dataTable-select",type:"select",id:"sort-select",value:S,onChange:function(e){return function(e){k(parseInt(e.target.value))}(e)},children:[Object(y.jsx)("option",{value:10,children:"10"}),Object(y.jsx)("option",{value:50,children:"50"}),Object(y.jsx)("option",{value:100,children:"100"})]}),Object(y.jsx)(w.a,{for:"sort-select",children:"entries"})]})}),Object(y.jsxs)(C.a,{className:"d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1",sm:"6",children:[Object(y.jsx)(w.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(y.jsx)(N.a,{className:"dataTable-filter",type:"text",bsSize:"sm",id:"search-input",value:I,onChange:function(e){var t=e.target.value,a=[];P(t),t.length&&(a=n.get_football_prize.data.filter((function(e){var n,a,c,s,r,i,o,l,u,d;console.log(e);var j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return e?new Intl.DateTimeFormat("en-GB",t).format(new Date(e)):e}(e.transaction_time),b=(null===(n=e.amount)||void 0===n?void 0:n.toString().toLowerCase().startsWith(t.toLowerCase()))||(null===(a=e.balance)||void 0===a?void 0:a.toString().toLowerCase().startsWith(t.toLowerCase()))||(null===(c=e.debit_credit)||void 0===c?void 0:c.toLowerCase().startsWith(t.toLowerCase()))||(null===j||void 0===j?void 0:j.toString().toLowerCase().startsWith(t.toLowerCase()))||(null===(s=e.transaction_type)||void 0===s?void 0:s.toLowerCase().startsWith(t.toLowerCase()))||(null===(r=e.txn_id.toLowerCase())||void 0===r?void 0:r.startsWith(t.toLowerCase())),f=(null===(i=e.amount)||void 0===i?void 0:i.toString().toLowerCase().includes(t.toLowerCase()))||(null===(o=e.balance)||void 0===o?void 0:o.toString().toLowerCase().includes(t.toLowerCase()))||(null===(l=e.debit_credit)||void 0===l?void 0:l.toLowerCase().includes(t.toLowerCase()))||(null===j||void 0===j?void 0:j.toString().toLowerCase().includes(t.toLowerCase()))||(null===(u=e.transaction_type)||void 0===u?void 0:u.toLowerCase().includes(t.toLowerCase()))||(null===(d=e.txn_id)||void 0===d?void 0:d.toLowerCase().includes(t.toLowerCase()));return b||(!b&&f?f:null)})),B(a))}})]})]}),Object(y.jsx)(g.a,{noHeader:!0,pagination:!0,paginationServer:!0,className:"react-dataTable",columns:W,sortIcon:Object(y.jsx)(h.a,{size:10}),paginationComponent:function(){var e=n.get_football_prize.last_page;return Object(y.jsx)(f.a,{previousLabel:"",nextLabel:"",breakLabel:"...",pageCount:e,marginPagesDisplayed:2,pageRangeDisplayed:2,activeClassName:"active",forcePage:0!==O?O-1:0,onPageChange:function(e){return function(e){_(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"})},data:function(){var e,t;return(null===(e=n.get_football_prize.data)||void 0===e?void 0:e.length)>0?I.length?F:null===(t=n.get_football_prize.data)||void 0===t?void 0:t.slice(0,S):[]}()})]})}))},L=Object(c.memo)(_);n(455),t.default=function(){return Object(y.jsx)("div",{className:"app-user-list",children:Object(y.jsx)(L,{})})}},451:function(e,t,n){"use strict";var a=n(0),c=n(80),s=n.n(c),r=localStorage.getItem("TOKEN"),i=s.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:r}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(a.a)(Object(a.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},454:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"a",(function(){return v})),n.d(t,"f",(function(){return x}));var a=n(1),c=n(121),s=n(463),r=(n(471),n(472)),i=n(786),o=n(474),l=(n(475),n(482),n(468),n(467),n(469),n(445),n(6)),u=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(r.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(r.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},j=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(r.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},b=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(r.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},f=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"danger",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},m=function(){return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"warning",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},p=function(e){return c.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},h=function(e){return c.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},O=function(e){return c.b.success(Object(l.jsx)(j,{message:e}),{hideProgressBar:!0})},g=function(e){return c.b.success(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},v=function(e){return c.b.error(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},x=function(){return c.b.warning(Object(l.jsx)(m,{}),{hideProgressBar:!0})}},455:function(e,t,n){},456:function(e,t,n){},459:function(e,t,n){"use strict";var a=n(0),c=n(30),s=n(1),r=n(119),i=n.n(r),o=n(485),l=(n(460),n(6)),u=function(e){var t,n=e.children,r=e.blocking,o=e.loader,u=e.className,d=e.tag,j=e.overlayColor,b=d;return Object(l.jsxs)(b,{className:i()("ui-loader",(t={},Object(c.a)(t,u,u),Object(c.a)(t,"show",r),t)),children:[n,r?Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("div",Object(a.a)({className:"overlay"},r&&j?{style:{backgroundColor:j}}:{})),Object(l.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(o.a,{color:"primary"})}},460:function(e,t,n){},721:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(452),c=n(453),s=n(451),r=n(454),i=function(e){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"GET_SPINNER"}),t.next=3,s.a.get("cricket/contest_prizes/prize_list?page=".concat(e)).then((function(e){n({type:"PRIZE_MASTER_CRICKET",data:e.data.data}),console.log(e.data.data.data)})).catch((function(){n({type:"GET_ALL_USERS_FAIL"})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},o=function(e){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"GET_SPINNER"}),t.next=3,s.a.get("football/contest_prizes/prize_list?page=".concat(e)).then((function(e){n({type:"PRIZE_MASTER_CRICKET_FOOTBALL",data:e.data.data}),console.log(e.data.data.data)})).catch((function(){n({type:"GET_ALL_USERS_FAIL"})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("/cricket/view/".concat(e)).then((function(e){n({type:"PRIZE_DETAILS_CRICKET",data:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("/foootball/view/".concat(e)).then((function(e){n({type:"PRIZE_DETAILS_CRICKET",data:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){s.a.delete("/cricket/".concat(e)).then((function(){Object(r.c)()})).catch((function(e){Object(r.a)(),console.log(e)}))}},j=function(e){return function(){s.a.delete("/football/".concat(e)).then((function(){Object(r.c)()})).catch((function(e){Object(r.a)(),console.log(e)}))}}}}]);
//# sourceMappingURL=158.3795abac.chunk.js.map