(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[117],{1581:function(e,t,a){"use strict";a.r(t);var c=a(16),n=a(1),s=a(724),r=a(122),i=a(467),l=a.n(i),o=a(859),j=a(896),d=a(650),u=a(925),b=a(489),m=a(485),O=a(478),f=a.n(O),p=a(464),h=a(884),x=a(900),g=a(1049),v=a(904),N=a(914),y=a(472),_=a(471),w=a(484),T=a(473),S=a(491),E=a(502),P=(a(477),a(462),a(544)),A=a(474),C=a(6),D=function(){},k=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.feeds})),a=Object(P.g)(),i=Object(n.useState)(""),O=Object(c.a)(i,2),k=O[0],F=O[1],L=Object(n.useState)([]),z=Object(c.a)(L,2),I=z[0],W=z[1],B=Object(n.useState)(1),G=Object(c.a)(B,2),K=G[0],R=G[1],H=Object(n.useState)(!1),J=Object(c.a)(H,2),q=J[0],U=J[1],M=Object(n.useState)(""),Q=Object(c.a)(M,2),V=Q[0],X=Q[1],Y=Object(n.useState)(""),Z=Object(c.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)({value:"",label:"Select Role"}),ae=Object(c.a)(te,1)[0],ce=Object(n.useState)({value:"",label:"Select Plan"}),ne=Object(c.a)(ce,1)[0],se=Object(n.useState)({value:"",label:"Select Status",number:0}),re=Object(c.a)(se,1)[0];Object(n.useEffect)((function(){e(Object(s.f)(K,V))}),[K,t.toggle_data]),Object(n.useEffect)((function(){e(Object(s.f)(1,V))}),[V]),Object(n.useEffect)((function(){t.feedAllData&&W(t.feedAllData)}),[JSON.stringify(t.feedAllData)]),console.log(t);console.log(t);var ie=[{name:"Sno",minWidth:"10px",selector:"s_no",cell:function(e,a){return"#".concat(t.wall_page.from+a)}},{name:"Image",minWidth:"200px",selector:"feed_image",cell:function(e){return Object(C.jsx)("img",{src:e.feed_image,style:{height:"50px",width:"150px"}})}},{name:"Type",minWidth:"160px",selector:"feed_type",sortable:!0,cell:function(e){return e.feed_type}},{name:"Engagement",minWidth:"160px",selector:"feed_comments",sortable:!0,cell:function(e){return Object(C.jsx)("div",{style:{cursor:"pointer"},className:"user-name text-truncate mb-0",children:Object(C.jsxs)("div",{className:"d-flex",children:[Object(C.jsxs)("div",{className:"pr-2",children:[Object(C.jsx)(o.a,{width:"14"})," ",e.feed_comments]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(j.a,{width:"14"})," ",e.feed_likes]})]})})}},{name:"Date & Time",minWidth:"200px",selector:"updated_on",sortable:!0,cell:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return e?new Intl.DateTimeFormat("en-GB",t).format(new Date(e)):e}(e.updated_on)}},{name:"Status",minWidth:"138px",selector:"feed_id",sortable:!0,cell:function(t){return Object(C.jsx)("div",{className:"column-action",children:Object(C.jsx)(h.a,{className:"custom-control-success",type:"switch",id:"success".concat(t.feed_id),name:"success",onChange:function(){return function(t){e(Object(s.a)(t,q)),U(!q)}(t.feed_id)},inline:!0,defaultChecked:"DL"!==t.status})})}},{name:"Actionss",minWidth:"138px",selector:"active",cell:function(t){return Object(C.jsxs)(x.a,{children:[Object(C.jsx)(g.a,{className:"pr-1",tag:"span",children:Object(C.jsx)(d.a,{size:15})}),Object(C.jsx)(v.a,{right:!0,children:Object(C.jsxs)(N.a,{tag:"a",className:"w-100",onClick:function(){return function(t){e(Object(s.e)(t)),a.push("/walls/edit/".concat(t.feed_id))}(t)},children:[Object(C.jsx)(u.a,{size:15}),Object(C.jsx)("span",{className:"align-middle ml-50",children:"Edit"})]})})]})}}];if(t.loadFeedAll)return Object(C.jsx)("div",{className:"position-absolute d-flex justify-content-center align-items-center w-100 position-top-0 position-bottom-0 position-left-0 position-right-0 h-100",children:Object(C.jsx)(p.a,{blocking:!0})});console.log(t.feedAllData),console.log(t.wall_page);var le=function(){var e=t.wall_page.last_page;return Object(C.jsx)(l.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==K?K-1:0,onPageChange:function(e){return function(e){R(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})};console.log($);var oe=[{title:Object(C.jsxs)("div",{children:[Object(C.jsx)(b.a,{size:18})," Filter"]}),content:Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(y.a,{xl:12,children:Object(C.jsx)(_.a,{xl:"12",className:"d-flex align-items-sm-center justify-content  flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:Object(C.jsxs)("div",{className:"align-items-center mb-sm-0 mb-1 mr-1 ml-1",children:[Object(C.jsx)(w.a,{children:"Search:"}),Object(C.jsx)(T.a,{id:"search-invoice",className:"w-100",type:"text",value:$,placeholder:"search",onChange:function(e){return t=e.target.value,R(1),void ee(t);var t}})]})})})})}];return Object(C.jsxs)(n.Fragment,{children:[Object(C.jsx)(A.a,{data:oe,type:"border",accordion:!0,className:"mb-1"}),Object(C.jsxs)(S.a,{children:[Object(C.jsx)(E.a,{children:Object(C.jsx)(_.a,{xl:"12",className:"d-flex align-items-center p-0",children:Object(C.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(C.jsx)(w.a,{for:"rows-per-page",children:"Show"}),Object(C.jsxs)(h.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:V,onChange:function(e){return X(e.target.value)},style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(C.jsx)("option",{value:"10",children:"10"}),Object(C.jsx)("option",{value:"50",children:"50"}),Object(C.jsx)("option",{value:"100",children:"100"})]}),Object(C.jsx)(w.a,{for:"rows-per-page",children:"Entries"})]})})}),Object(C.jsx)(f.a,{noHeader:!0,responsive:!0,paginationServer:!0,columns:ie,sortIcon:Object(C.jsx)(m.a,{}),className:"react-dataTable",paginationPerPage:!0,paginationDefaultPage:K,paginationComponent:le,data:function(){var e={role:ae.value,currentPlan:ne.value,status:re.value,q:k},t=Object.keys(e).some((function(t){return e[t].length>0}));return 0===I.length&&t?[]:I}(),subHeaderComponent:Object(C.jsx)(D,{toggleSidebar:function(){return a.push("/walls_add")},rowsPerPage:!0,searchTerm:k,handleFilter:function(e){F(e)}})})]}),0===I.length?"":Object(C.jsx)(le,{})]})},F=(a(461),a(463));t.default=function(){return Object(C.jsxs)("div",{className:"app-user-list",children:[Object(C.jsx)(F.a,{breadCrumbTitle:"Wall",breadCrumbActive:"List"}),Object(C.jsx)(k,{})]})}},457:function(e,t,a){"use strict";var c=a(0),n=a(83),s=a.n(n),r=localStorage.getItem("TOKEN"),i=s.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:r}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(c.a)(Object(c.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},460:function(e,t,a){"use strict";a.d(t,"e",(function(){return f})),a.d(t,"b",(function(){return p})),a.d(t,"d",(function(){return h})),a.d(t,"c",(function(){return x})),a.d(t,"a",(function(){return g})),a.d(t,"f",(function(){return v}));var c=a(1),n=a(123),s=a(470),r=(a(811),a(754)),i=a(886),l=a(812),o=(a(755),a(491),a(502),a(500),a(496),a(453),a(6)),j=function(e){var t=e.message;return Object(o.jsx)(c.Fragment,{children:Object(o.jsx)("div",{className:"toastify-header",children:Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)(s.a,{size:"sm",color:"success",icon:Object(o.jsx)(r.a,{size:12})}),Object(o.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(o.jsx)(c.Fragment,{children:Object(o.jsx)("div",{className:"toastify-header",children:Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)(s.a,{size:"sm",color:"success",icon:Object(o.jsx)(r.a,{size:12})}),Object(o.jsx)("h6",{className:"toast-title",children:t})]})})})},u=function(e){var t=e.message;return Object(o.jsx)(c.Fragment,{children:Object(o.jsx)("div",{className:"toastify-header",children:Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)(s.a,{size:"sm",color:"success",icon:Object(o.jsx)(r.a,{size:12})}),Object(o.jsx)("h6",{className:"toast-title",children:t})]})})})},b=function(e){var t=e.message;return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("div",{className:"toastify-header",children:Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)(s.a,{size:"sm",color:"success",icon:Object(o.jsx)(r.a,{size:12})}),Object(o.jsx)("h6",{className:"toast-title",children:t})]})}),Object(o.jsx)("div",{className:"toastify-body"})]})},m=function(e){var t=e.message;return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("div",{className:"toastify-header",children:Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)(s.a,{size:"sm",color:"danger",icon:Object(o.jsx)(i.a,{size:12})}),Object(o.jsx)("h6",{className:"toast-title",children:t})]})}),Object(o.jsx)("div",{className:"toastify-body"})]})},O=function(){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("div",{className:"toastify-header",children:Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)(s.a,{size:"sm",color:"warning",icon:Object(o.jsx)(l.a,{size:12})}),Object(o.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(o.jsx)("div",{className:"toastify-body",children:Object(o.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},f=function(e){return n.b.success(Object(o.jsx)(j,{message:e}),{hideProgressBar:!0})},p=function(e){return n.b.success(Object(o.jsx)(d,{message:e}),{hideProgressBar:!0})},h=function(e){return n.b.success(Object(o.jsx)(u,{message:e}),{hideProgressBar:!0})},x=function(e){return n.b.success(Object(o.jsx)(b,{message:e}),{hideProgressBar:!0})},g=function(e){return n.b.error(Object(o.jsx)(m,{message:e}),{hideProgressBar:!0})},v=function(){return n.b.warning(Object(o.jsx)(O,{}),{hideProgressBar:!0})}},461:function(e,t,a){},462:function(e,t,a){},463:function(e,t,a){"use strict";var c=a(466),n=a(481),s=a(482),r=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,i=e.breadCrumbParent2,l=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(r.jsx)("div",{className:"content-header row",children:Object(r.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(r.jsx)("div",{className:"row breadcrumbs-top",children:Object(r.jsxs)("div",{className:"col-12",children:[t?Object(r.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(n.a,{children:[Object(r.jsx)(s.a,{tag:"li",children:Object(r.jsx)(c.b,{to:"/",children:"Home"})}),a?Object(r.jsx)(s.a,{tag:"li",className:"text-primary",children:Object(r.jsx)(c.b,{to:"/".concat(a),children:a})}):"",i?Object(r.jsx)(s.a,{tag:"li",className:"text-primary",children:i}):"",l?Object(r.jsx)(s.a,{tag:"li",className:"text-primary",children:l}):"",Object(r.jsx)(s.a,{tag:"li",active:!0,children:o})]})})]})})})})}},464:function(e,t,a){"use strict";var c=a(0),n=a(31),s=a(1),r=a(57),i=a.n(r),l=a(486),o=(a(465),a(6)),j=function(e){var t,a=e.children,r=e.blocking,l=e.loader,j=e.className,d=e.tag,u=e.overlayColor,b=d;return Object(o.jsxs)(b,{className:i()("ui-loader",(t={},Object(n.a)(t,j,j),Object(n.a)(t,"show",r),t)),children:[a,r?Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("div",Object(c.a)({className:"overlay"},r&&u?{style:{backgroundColor:u}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=j,j.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.a,{color:"primary"})}},465:function(e,t,a){},474:function(e,t,a){"use strict";var c=a(0),n=a(31),s=a(16),r=a(59),i=a(1),l=a(57),o=a.n(l),j=a(490),d=a(491),u=a(502),b=a(500),m=a(793),O=a(496),f=a(6),p=function(e){var t,a=e.data,l=e.type,p=e.accordion,h=e.active,x=e.toggle,g=e.titleKey,v=e.contentKey,N=e.className,y=Object(i.useState)(p?h:Object(r.a)(h)),_=Object(s.a)(y,2),w=_[0],T=_[1],S=function(e){if(p)T(e===w?null:e);else{var t=w,a=t.indexOf(e);t.includes(e)?(t.splice(a,1),T(Object(r.a)(t))):(t.push(e),T(Object(r.a)(t)))}};return Object(f.jsx)("div",{className:o()("collapse-icon",(t={},Object(n.a)(t,N,N),Object(n.a)(t,"collapse-default",!l),Object(n.a)(t,"collapse-shadow","shadow"===l),Object(n.a)(t,"collapse-border","border"===l),Object(n.a)(t,"collapse-margin","margin"===l),t)),children:a.map((function(e,t){var a,s=g?e[g]:e.title,r=v?e[v]:e.content;return Object(f.jsxs)(d.a,{className:o()("app-collapse",(a={},Object(n.a)(a,e.className,e.className),Object(n.a)(a,"open",p?w===t:w.includes(t)&&"shadow"===l),a)),children:[Object(f.jsxs)(u.a,Object(c.a)(Object(c.a)({className:o()("align-items-center",{collapsed:p?w!==t:!w.includes(t)})},"hover"===x?{onMouseEnter:function(){return S(t)}}:{onClick:function(){return S(t)}}),{},{children:[Object(f.jsx)(b.a,{className:"collapse-title",children:s}),Object(f.jsx)(j.a,{size:14})]})),Object(f.jsx)(m.a,{isOpen:p?w===t:w.includes(t),children:Object(f.jsx)(O.a,{children:r})})]},t)}))})};t.a=p,p.defaultProps={active:[],toggle:"click"}},724:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return j})),a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return b}));var c=a(458),n=a(459),s=a.n(n),r=a(457),i=a(460),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var a=Object(c.a)(s.a.mark((function a(c){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:"GET_ALL_WALL_DATA_INIT"}),a.next=3,r.a.get("/feeds/list?page=".concat(e,"&limit=").concat(t)).then((function(e){console.log(e),c({type:"GET_ALL_WALL_POST",data:e.data.data})})).catch((function(){c({type:"GET_ALL_WALL_DATA_FAIL"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},o=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a({type:"ADD_FEED_POST_INIT"}),null!==e.feed_content){t.next=5;break}Object(i.a)("Eror"),t.next=7;break;case 5:return t.next=7,r.a.post("/feeds/add",e).then((function(e){Object(i.b)(e.data.message),a({type:"ADD_FEED_POST",data:e.data.message})})).catch((function(e){Object(i.a)(e.response.data.message),console.log("Error in Feed Post: ",e),a({type:"ADD_FEED_POST_FAIL"})}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(){return{type:"RESET_ADD_POST"}},d=function(e){return{type:"EDIT_POST_DATA",data:e}},u=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(c){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:"EDIT_POST_INIT"}),a.next=3,r.a.put("/feeds/edit/".concat(e),t).then((function(e){console.log(e),Object(i.d)(e.data.message),console.log("Respont : ",e),c({type:"EDIT_FEED_POST",data:e.data.message})})).catch((function(e){console.log(e),Object(i.a)(e.data.message),console.log("Error in Feed Post: ",e),c({type:"EDIT_POST_FAIL"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(c){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.post("feeds/toggle_status/".concat(e)).then((function(e){Object(i.b)(e.data.message),console.log(e),c({type:"FEED_TOGGLE_STATUS",data:t})})).catch((function(e){console.log(e),console.log("Error in Feed Post: ",e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=117.9e5e593d.chunk.js.map