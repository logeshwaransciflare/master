(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[159],{1596:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n(1),s=n(459),i=n(494),r=n.n(i),o=n(495),l=n.n(o),u=n(629),d=n(120),j=n(507),b=(n(476),n(456),n(508)),m=n.n(b),f=n(462),p=n.n(f),h=n(569),g=n(826),O=n(655),x=n(486),v=n(478),y=n.n(v),N=n(784),C=n(799),w=n(968),D=n(803),_=n(812),L=n(482),k=n(464),E=n(465),T=n(483),S=n(466),A=n(6),z=function(){var e,t,n=Object(d.b)(),i=Object(d.c)((function(e){return e.ads})),o=Object(j.g)(),b=l()(r.a),f=Object(c.useState)(1),v=Object(a.a)(f,2),z=v[0],P=v[1],I=Object(c.useState)(10),F=Object(a.a)(I,2),W=F[0],B=F[1],Y=Object(c.useState)(""),R=Object(a.a)(Y,2),G=R[0],M=R[1],q=Object(c.useState)([]),K=Object(a.a)(q,2),J=K[0],U=K[1],Z=Object(c.useState)(!1),H=Object(a.a)(Z,2),V=H[0],Q=H[1];Object(c.useEffect)((function(){n(Object(u.e)(z))}),[z,i.toggle_data]),console.log(z);var X=[{name:"#",minWidth:"20px",sortable:!0,cell:function(e,t){var n,a;return"#".concat((null===(n=i.adData)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.from)+t)}},{name:"Name",minWidth:"20px",selector:"name",sortable:!0,cell:function(e){return e.name}},{name:"Type",minWidth:"20px",selector:"feed_id",sortable:!0,cell:function(e){return 1===e.type?"Video":2===e.type?"Image":3===e.type?"Gif":"-"}},{name:"Expiry Date",minWidth:"20px",selector:"expirydate",sortable:!0,cell:function(e){return m()(e.expiry_date,"YYYY-MM-DD").format("DD MMM YYYY")}},{name:"Redirecting Screen",minWidth:"20px",selector:"redirectingscreen",sortable:!0,cell:function(e){var t;return Object(A.jsx)("a",{href:null===e||void 0===e||null===(t=e.cta)||void 0===t?void 0:t.url,target:"_blank",children:e.cta.url?e.cta.url:"-"})}},{name:"Frequency",minWidth:"20px",selector:"frequency",sortable:!0,cell:function(e){return e.playing_time}},{name:"Status",minWidth:"138px",selector:"active",sortable:!0,cell:function(e){return Object(A.jsx)("div",{className:"column-action",children:Object(A.jsx)(N.a,{className:"custom-control-success",type:"switch",id:"success".concat(e.id),name:"success",onChange:function(){return t=e.id,Q(!V),void n(Object(u.c)(t,V));var t},inline:!0,defaultChecked:0!==e.status})})}},{name:"Action",minWidth:"138px",selector:"active",sortable:!0,cell:function(e){return Object(A.jsxs)(C.a,{children:[Object(A.jsx)(w.a,{className:"pr-1",tag:"span",children:Object(A.jsx)(h.a,{size:15})}),Object(A.jsxs)(D.a,{right:!0,children:[Object(A.jsxs)(_.a,{className:"cursor-pointer w-100",title:"Edit Feed",onClick:function(){return t=e.id,o.push("/manage_ad/edit/".concat(t)),void n(Object(u.d)(t));var t},children:[Object(A.jsx)(g.a,{width:"17"}),Object(A.jsx)("span",{className:"align-middle ml-50",children:"Edit"})]}),Object(A.jsxs)(_.a,{className:"cursor-pointer w-100",title:"Add Feed",onClick:function(){return t=e.id,b.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(e){e.value&&(n(Object(u.b)(t)),b.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}}))}));var t},children:[Object(A.jsx)(O.a,{width:"17"}),Object(A.jsx)("span",{className:"align-middle ml-50",children:"Delete"})]})]})]})}}];console.log(null===(e=i.adData)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.last_page);console.log(i.adData);return i.isloading?Object(A.jsx)("div",{className:"position-absolute d-flex justify-content-center align-items-center w-100 position-top-0 position-bottom-0 position-left-0 position-right-0 h-100",children:Object(A.jsx)(s.a,{blocking:!0})}):(console.log(i,(function(e){var t=e.target.value,n=[];M(t),t.length&&(n=i.get_cricket_prize.data.filter((function(e){var n,a,c,s,i,r,o=(null===(n=e.name)||void 0===n?void 0:n.toString().toLowerCase().startsWith(t.toLowerCase()))||(null===(a=e.caption)||void 0===a?void 0:a.toString().toLowerCase().startsWith(t.toLowerCase()))||(null===(c=e.type)||void 0===c?void 0:c.toLowerCase().startsWith(t.toLowerCase())),l=(null===(s=e.name)||void 0===s?void 0:s.toString().toLowerCase().includes(t.toLowerCase()))||(null===(i=e.caption)||void 0===i?void 0:i.toString().toLowerCase().includes(t.toLowerCase()))||(null===(r=e.type)||void 0===r?void 0:r.toLowerCase().includes(t.toLowerCase()));return o||(!o&&l?l:null)})),U(n))})),Object(A.jsx)(c.Fragment,{children:Object(A.jsxs)(L.a,{children:[Object(A.jsx)(k.a,{className:"mx-0 mt-1 mb-50",children:Object(A.jsx)(E.a,{sm:"6",children:Object(A.jsxs)("div",{className:"d-flex align-items-center",children:[Object(A.jsx)(T.a,{for:"sort-select",children:"show"}),Object(A.jsxs)(S.a,{className:"dataTable-select",type:"select",id:"sort-select",value:W,onChange:function(e){return function(e){B(parseInt(e.target.value))}(e)},children:[Object(A.jsx)("option",{value:10,children:"10"}),Object(A.jsx)("option",{value:50,children:"50"}),Object(A.jsx)("option",{value:100,children:"100"})]}),Object(A.jsx)(T.a,{for:"sort-select",children:"entries"})]})})}),Object(A.jsx)(y.a,{noHeader:!0,pagination:!0,paginationServer:!0,className:"react-dataTable",columns:X,sortIcon:Object(A.jsx)(x.a,{size:10}),paginationComponent:function(){var e,t,n,a,c,s=null!==(e=i.adData)&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.length?null===(a=i.adData)||void 0===a||null===(c=a.data)||void 0===c?void 0:c.last_page:1;return Object(A.jsx)(p.a,{previousLabel:"",nextLabel:"",breakLabel:"...",pageCount:s,marginPagesDisplayed:2,pageRangeDisplayed:2,activeClassName:"active",forcePage:0!==z?z-1:0,onPageChange:function(e){return function(e){P(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"})},data:function(){var e,t,n,a,c,s;return(null===(e=i.adData)||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.length)>0?G.length?J:null===(a=i.adData)||void 0===a||null===(c=a.data)||void 0===c||null===(s=c.data)||void 0===s?void 0:s.slice(0,W):[]}()})]})}))},P=Object(c.memo)(z);n(455),t.default=function(){return Object(A.jsx)("div",{className:"app-user-list",children:Object(A.jsx)(P,{})})}},451:function(e,t,n){"use strict";var a=n(0),c=n(80),s=n.n(c),i=localStorage.getItem("TOKEN"),r=s.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:i}});r.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(a.a)(Object(a.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=r},454:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"a",(function(){return x})),n.d(t,"f",(function(){return v}));var a=n(1),c=n(121),s=n(463),i=(n(471),n(472)),r=n(786),o=n(474),l=(n(475),n(482),n(468),n(467),n(469),n(445),n(6)),u=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},j=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},b=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},m=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"danger",icon:Object(l.jsx)(r.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},f=function(){return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"warning",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},p=function(e){return c.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},h=function(e){return c.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},g=function(e){return c.b.success(Object(l.jsx)(j,{message:e}),{hideProgressBar:!0})},O=function(e){return c.b.success(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},x=function(e){return c.b.error(Object(l.jsx)(m,{message:e}),{hideProgressBar:!0})},v=function(){return c.b.warning(Object(l.jsx)(f,{}),{hideProgressBar:!0})}},455:function(e,t,n){},456:function(e,t,n){},459:function(e,t,n){"use strict";var a=n(0),c=n(30),s=n(1),i=n(119),r=n.n(i),o=n(485),l=(n(460),n(6)),u=function(e){var t,n=e.children,i=e.blocking,o=e.loader,u=e.className,d=e.tag,j=e.overlayColor,b=d;return Object(l.jsxs)(b,{className:r()("ui-loader",(t={},Object(c.a)(t,u,u),Object(c.a)(t,"show",i),t)),children:[n,i?Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("div",Object(a.a)({className:"overlay"},i&&j?{style:{backgroundColor:j}}:{})),Object(l.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(o.a,{color:"primary"})}},460:function(e,t,n){},629:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"f",(function(){return b}));var a=n(452),c=n(453),s=n(451),i=n(454),r=function(e){return function(t){s.a.post("/ads",e).then((function(n){Object(i.b)(n.data.message),t({type:"ADD_ADS",data:n}),console.log(e)})).catch((function(){return console.log(e)}))}},o=function(e){return function(t){s.a.get("/ads?page=".concat(e)).then((function(e){t({type:"GET_AD_DATA",data:e.data}),console.log(e)})).catch((function(e){return console.log(e)}))}},l=function(e){return function(t){t({type:"SPINNER"}),s.a.get("/ads/".concat(e)).then((function(e){t({type:"EDIT_AD_DATA",data:e.data.data}),console.log(e.data)})).catch((function(e){return console.log(e)}))}},u=function(e,t){return function(n){n({type:"SPINNER"}),s.a.patch("/ads/".concat(e),t).then((function(e){n({type:"EDIT_AD_DATA",data:e.data.data}),console.log(e.data)})).catch((function(e){return console.log(e)}))}},d=function(e){return function(t){return s.a.delete("/ads/".concat(e)).then((function(n){console.log(e),t({type:"DELETE_AD",data:n.data.data}),t(o())}))}},j=function(e,t){return function(){var n=Object(c.a)(Object(a.a)().mark((function n(c){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c({type:"GET_ALL_CRICKET_CONTEST_PRIZE"}),n.next=3,s.a.post("ads/toggle_status/".concat(e)).then((function(){Object(i.b)("successfully updated"),c({type:"AD_TOGGLE_STATUS",data:t})})).catch((function(e){Object(i.a)("error"),console.log("Error in Feed Post: ",e)}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(e){return console.log(e),function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/prizes/list?page=".concat(e)).then((function(e){n({type:"GET_PRIZE_LIST",data:e.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=159.6315b7aa.chunk.js.map