(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[77],{1568:function(e,t,a){"use strict";a.r(t);var n=a(16),s=a(1),r=a(464),c=a(463),o=a(669),i=a(122),l=a(467),u=a.n(l),d=a(925),b=a(659),f=a(489),p=a(485),j=a(478),m=a.n(j),h=a(486),g=a(472),O=a(471),v=a(484),x=a(473),y=a(491),w=a(502),N=a(884),C=a(516),T=a.n(C),z=a(517),E=a.n(z),P=a(544),_=(a(477),a(462),a(474)),k=a(6),L=function(){return Object(k.jsx)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75"})},M=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.prizemaster}));console.log(t.get_football_prize.data);var a=Object(s.useState)(""),l=Object(n.a)(a,2),j=l[0],C=l[1],z=Object(s.useState)([]),M=Object(n.a)(z,2),S=M[0],R=M[1],I=Object(s.useState)(1),A=Object(n.a)(I,2),F=A[0],B=A[1],W=Object(s.useState)(""),D=Object(n.a)(W,2),K=D[0],G=D[1],Z=E()(T.a),U=Object(P.g)();Object(s.useEffect)((function(){e(Object(o.f)(F,K))}),[F]),Object(s.useEffect)((function(){e(Object(o.f)(F,K))}),[K]),Object(s.useEffect)((function(){t.isloader?h.a:R(t.get_football_prize.data)}),[t.isloader]),console.log(S),console.log(t.get_football_prize.data);var H=[{name:"#",minWidth:"10px",selector:"#",cell:function(e,a){return"#".concat(t.get_football_prize.from+a)}},{name:"name",minWidth:"20px",selector:"name",sortable:!0,cell:function(e){return e.name}},{name:"caption",minWidth:"20px",selector:"caption",sortable:!0,cell:function(e){return e.caption}},{name:"type",minWidth:"20px",selector:"type",sortable:!0,cell:function(e){return e.type}},{name:"Action",minWidth:"138px",selector:"active",cell:function(t){return Object(k.jsxs)("div",{className:"column-action",children:[Object(k.jsx)(d.a,{width:"17",className:"cursor-pointer",title:"Edit Feed",onClick:function(){return function(t){U.push("/footballprizemaster/edit/".concat(t.id)),e(Object(o.h)(t.id))}(t.id)}}),Object(k.jsx)(b.a,{width:"17",className:"ml-2 cursor-pointer",title:"Add Feed",onClick:function(){return a=t.id,Z.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(t){t.value&&(e(Object(o.d)(a)),console.log(a),Z.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}}))}));var a}})]})}}],Y=function(e){C(e)};if(Object(s.useEffect)((function(){if(j){var e=t.cricket_series.filter((function(e){var t,a,n,s,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return e?new Intl.DateTimeFormat("en-GB",t).format(new Date(e)):e}(e.date_time),c=e.id.toString().toLowerCase().startsWith(j.toLowerCase())||(null===(t=e.series_name)||void 0===t?void 0:t.toLowerCase().startsWith(j.toLowerCase()))||(null===(a=status)||void 0===a?void 0:a.toString().toLowerCase().startsWith(j.toLowerCase()))||e.type.toLowerCase().startsWith(j.toLowerCase())||(null===r||void 0===r?void 0:r.toLowerCase().startsWith(j.toLowerCase())),o=e.id.toString().toLowerCase().includes(j.toLowerCase())||(null===(n=e.series_name)||void 0===n?void 0:n.toLowerCase().includes(j.toLowerCase()))||(null===(s=status)||void 0===s?void 0:s.toString().toLowerCase().includes(j.toLowerCase()))||e.type.toLowerCase().includes(j.toLowerCase())||(null===r||void 0===r?void 0:r.toLowerCase().includes(j.toLowerCase()));return c||(!c&&o?o:null)}));R(e)}else R(t.get_football_prize.data)}),[j]),t.isloader)return Object(k.jsx)("div",{className:"position-absolute d-flex justify-content-center align-items-center w-100 position-top-0 position-bottom-0 position-left-0 position-right-0 h-100",children:Object(k.jsx)(r.a,{blocking:!0})});console.log(t);var q=function(){var e=t.get_football_prize.last_page;return Object(k.jsx)(u.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==F?F-1:0,onPageChange:function(e){return function(e){B(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},J=[{title:Object(k.jsxs)("div",{children:[Object(k.jsx)(f.a,{size:18})," Filter"]}),content:Object(k.jsx)(g.a,{xl:12,children:Object(k.jsx)(O.a,{xl:"12",className:"d-flex align-items-sm-center justify-content justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:Object(k.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1 ml-1",children:[Object(k.jsx)(v.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(k.jsx)(x.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:j,onChange:function(e){return Y(e.target.value)}})]})})})}];return Object(k.jsxs)(s.Fragment,{children:[Object(k.jsx)(c.a,{breadCrumbTitle:"Football prizemaster",breadCrumbActive:"List"}),Object(k.jsx)(_.a,{data:J,type:"border",accordion:!0,className:"mb-1"}),Object(k.jsxs)(y.a,{children:[Object(k.jsx)(w.a,{children:Object(k.jsx)(O.a,{xl:"12",className:"d-flex align-items-center p-0",children:Object(k.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(k.jsx)(v.a,{for:"rows-per-page",children:"Show"}),Object(k.jsxs)(N.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:K,onChange:function(e){return G(e.target.value)},style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(k.jsx)("option",{value:"10",children:"10"}),Object(k.jsx)("option",{value:"50",children:"50"}),Object(k.jsx)("option",{value:"100",children:"100"})]}),Object(k.jsx)(v.a,{for:"rows-per-page",children:"Entries"})]})})}),Object(k.jsx)(m.a,{noHeader:!0,responsive:!0,paginationServer:!0,columns:H,paginationPerPage:!0,paginationDefaultPage:F,sortIcon:Object(k.jsx)(p.a,{}),className:"react-dataTable",paginationComponent:q,data:function(){var e={q:j},t=Object.keys(e).some((function(t){return e[t].length>0}));return 0===(null===S||void 0===S?void 0:S.length)&&t?[]:S}(),subHeaderComponent:Object(k.jsx)(L,{handlePerPage:!0,rowsPerPage:!0,searchTerm:j,handleFilter:Y})})]}),Object(k.jsx)(q,{})]})};a(461),t.default=function(){return Object(k.jsx)("div",{className:"app-user-list",children:Object(k.jsx)(M,{})})}},457:function(e,t,a){"use strict";var n=a(0),s=a(83),r=a.n(s),c=localStorage.getItem("TOKEN"),o=r.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:c}});o.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(n.a)(Object(n.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=o},460:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"b",(function(){return h})),a.d(t,"d",(function(){return g})),a.d(t,"c",(function(){return O})),a.d(t,"a",(function(){return v})),a.d(t,"f",(function(){return x}));var n=a(1),s=a(123),r=a(470),c=(a(811),a(754)),o=a(886),i=a(812),l=(a(755),a(491),a(502),a(500),a(496),a(453),a(6)),u=function(e){var t=e.message;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},b=function(e){var t=e.message;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},f=function(e){var t=e.message;return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},p=function(e){var t=e.message;return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"danger",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},j=function(){return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"warning",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},m=function(e){return s.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},h=function(e){return s.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},g=function(e){return s.b.success(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},O=function(e){return s.b.success(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},v=function(e){return s.b.error(Object(l.jsx)(p,{message:e}),{hideProgressBar:!0})},x=function(){return s.b.warning(Object(l.jsx)(j,{}),{hideProgressBar:!0})}},461:function(e,t,a){},462:function(e,t,a){},463:function(e,t,a){"use strict";var n=a(466),s=a(481),r=a(482),c=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,o=e.breadCrumbParent2,i=e.breadCrumbParent3,l=e.breadCrumbActive;return Object(c.jsx)("div",{className:"content-header row",children:Object(c.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(c.jsx)("div",{className:"row breadcrumbs-top",children:Object(c.jsxs)("div",{className:"col-12",children:[t?Object(c.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(c.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(r.a,{tag:"li",children:Object(c.jsx)(n.b,{to:"/",children:"Home"})}),a?Object(c.jsx)(r.a,{tag:"li",className:"text-primary",children:Object(c.jsx)(n.b,{to:"/".concat(a),children:a})}):"",o?Object(c.jsx)(r.a,{tag:"li",className:"text-primary",children:o}):"",i?Object(c.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",Object(c.jsx)(r.a,{tag:"li",active:!0,children:l})]})})]})})})})}},464:function(e,t,a){"use strict";var n=a(0),s=a(31),r=a(1),c=a(57),o=a.n(c),i=a(486),l=(a(465),a(6)),u=function(e){var t,a=e.children,c=e.blocking,i=e.loader,u=e.className,d=e.tag,b=e.overlayColor,f=d;return Object(l.jsxs)(f,{className:o()("ui-loader",(t={},Object(s.a)(t,u,u),Object(s.a)(t,"show",c),t)),children:[a,c?Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",Object(n.a)({className:"overlay"},c&&b?{style:{backgroundColor:b}}:{})),Object(l.jsx)("div",{className:"loader",children:i})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(i.a,{color:"primary"})}},465:function(e,t,a){},471:function(e,t,a){"use strict";var n=a(14),s=a(15),r=a(1),c=a.n(r),o=a(5),i=a.n(o),l=a(57),u=a.n(l),d=a(82),b=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),p={tag:d.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.widths,o=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,n){var s=e[t];if(delete i[t],s||""===s){var r=!n;if(Object(d.isObject)(s)){var c,o=r?"-":"-"+t+"-",b=m(r,t,s.size);l.push(Object(d.mapToCssModules)(u()(((c={})[b]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c)),a))}else{var f=m(r,t,s);l.push(f)}}})),l.length||l.push("col");var b=Object(d.mapToCssModules)(u()(t,l),a);return c.a.createElement(o,Object(n.a)({},i,{className:b}))};h.propTypes=p,h.defaultProps=j,t.a=h},472:function(e,t,a){"use strict";var n=a(14),s=a(15),r=a(1),c=a.n(r),o=a(5),i=a.n(o),l=a(57),u=a.n(l),d=a(82),b=i.a.oneOfType([i.a.number,i.a.string]),f={tag:d.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,o=e.tag,i=e.form,l=e.widths,b=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];l.forEach((function(t,a){var n=e[t];if(delete b[t],n){var s=!a;f.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var p=Object(d.mapToCssModules)(u()(t,r?"no-gutters":null,i?"form-row":"row",f),a);return c.a.createElement(o,Object(n.a)({},b,{className:p}))};j.propTypes=f,j.defaultProps=p,t.a=j},473:function(e,t,a){"use strict";var n=a(14),s=a(15),r=a(58),c=a(121),o=a(1),i=a.n(o),l=a(5),u=a.n(l),d=a(57),b=a.n(d),f=a(82),p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,c=e.bsSize,o=e.valid,l=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,j=e.innerRef,m=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,g=new RegExp("\\D","g"),O=u||("select"===r||"textarea"===r?r:"input"),v="form-control";p?(v+="-plaintext",O=u||"input"):"file"===r?v+="-file":"range"===r?v+="-range":h&&(v=d?null:"form-check-input"),m.size&&g.test(m.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=m.size,delete m.size);var x=Object(f.mapToCssModules)(b()(t,l&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,v),a);return("input"===O||u&&"function"===typeof u)&&(m.type=r),m.children&&!p&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),i.a.createElement(O,Object(n.a)({},m,{ref:j,className:x,"aria-invalid":l}))},t}(i.a.Component);j.propTypes=p,j.defaultProps={type:"text"},t.a=j},474:function(e,t,a){"use strict";var n=a(0),s=a(31),r=a(16),c=a(59),o=a(1),i=a(57),l=a.n(i),u=a(490),d=a(491),b=a(502),f=a(500),p=a(793),j=a(496),m=a(6),h=function(e){var t,a=e.data,i=e.type,h=e.accordion,g=e.active,O=e.toggle,v=e.titleKey,x=e.contentKey,y=e.className,w=Object(o.useState)(h?g:Object(c.a)(g)),N=Object(r.a)(w,2),C=N[0],T=N[1],z=function(e){if(h)T(e===C?null:e);else{var t=C,a=t.indexOf(e);t.includes(e)?(t.splice(a,1),T(Object(c.a)(t))):(t.push(e),T(Object(c.a)(t)))}};return Object(m.jsx)("div",{className:l()("collapse-icon",(t={},Object(s.a)(t,y,y),Object(s.a)(t,"collapse-default",!i),Object(s.a)(t,"collapse-shadow","shadow"===i),Object(s.a)(t,"collapse-border","border"===i),Object(s.a)(t,"collapse-margin","margin"===i),t)),children:a.map((function(e,t){var a,r=v?e[v]:e.title,c=x?e[x]:e.content;return Object(m.jsxs)(d.a,{className:l()("app-collapse",(a={},Object(s.a)(a,e.className,e.className),Object(s.a)(a,"open",h?C===t:C.includes(t)&&"shadow"===i),a)),children:[Object(m.jsxs)(b.a,Object(n.a)(Object(n.a)({className:l()("align-items-center",{collapsed:h?C!==t:!C.includes(t)})},"hover"===O?{onMouseEnter:function(){return z(t)}}:{onClick:function(){return z(t)}}),{},{children:[Object(m.jsx)(f.a,{className:"collapse-title",children:r}),Object(m.jsx)(u.a,{size:14})]})),Object(m.jsx)(p.a,{isOpen:h?C===t:C.includes(t),children:Object(m.jsx)(j.a,{children:c})})]},t)}))})};t.a=h,h.defaultProps={active:[],toggle:"click"}},481:function(e,t,a){"use strict";var n=a(14),s=a(15),r=a(1),c=a.n(r),o=a(5),i=a.n(o),l=a(57),u=a.n(l),d=a(82),b={tag:d.tagPropType,listTag:d.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},f=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,o=e.children,i=e.tag,l=e.listTag,b=e["aria-label"],f=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.mapToCssModules)(u()(t),r),j=Object(d.mapToCssModules)(u()("breadcrumb",a),r);return c.a.createElement(i,Object(n.a)({},f,{className:p,"aria-label":b}),c.a.createElement(l,{className:j},o))};f.propTypes=b,f.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=f},482:function(e,t,a){"use strict";var n=a(14),s=a(15),r=a(1),c=a.n(r),o=a(5),i=a.n(o),l=a(57),u=a.n(l),d=a(82),b={tag:d.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,r=e.active,o=e.tag,i=Object(s.a)(e,["className","cssModule","active","tag"]),l=Object(d.mapToCssModules)(u()(t,!!r&&"active","breadcrumb-item"),a);return c.a.createElement(o,Object(n.a)({},i,{className:l,"aria-current":r?"page":void 0}))};f.propTypes=b,f.defaultProps={tag:"li"},t.a=f},484:function(e,t,a){"use strict";var n=a(14),s=a(15),r=a(1),c=a.n(r),o=a(5),i=a.n(o),l=a(57),u=a.n(l),d=a(82),b=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:b,order:b,offset:b})]),p={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},j={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,l=e.check,b=e.size,f=e.for,p=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),j=[];o.forEach((function(t,n){var s=e[t];if(delete p[t],s||""===s){var r,c=!n;if(Object(d.isObject)(s)){var o,i=c?"-":"-"+t+"-";r=m(c,t,s.size),j.push(Object(d.mapToCssModules)(u()(((o={})[r]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o))),a)}else r=m(c,t,s),j.push(r)}}));var h=Object(d.mapToCssModules)(u()(t,!!r&&"sr-only",!!l&&"form-check-label",!!b&&"col-form-label-"+b,j,!!j.length&&"col-form-label"),a);return c.a.createElement(i,Object(n.a)({htmlFor:f},p,{className:h}))};h.propTypes=p,h.defaultProps=j,t.a=h},486:function(e,t,a){"use strict";var n=a(14),s=a(15),r=a(1),c=a.n(r),o=a(5),i=a.n(o),l=a(57),u=a.n(l),d=a(82),b={tag:d.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},f=function(e){var t=e.className,a=e.cssModule,r=e.type,o=e.size,i=e.color,l=e.children,b=e.tag,f=Object(s.a)(e,["className","cssModule","type","size","color","children","tag"]),p=Object(d.mapToCssModules)(u()(t,!!o&&"spinner-"+r+"-"+o,"spinner-"+r,!!i&&"text-"+i),a);return c.a.createElement(b,Object(n.a)({role:"status"},f,{className:p}),l&&c.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",a)},l))};f.propTypes=b,f.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=f},489:function(e,t,a){"use strict";var n=a(1),s=a.n(n),r=a(5),c=a.n(r);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,c=void 0===r?24:r,l=i(e,["color","size"]);return s.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Filter",t.a=l},490:function(e,t,a){"use strict";var n=a(1),s=a.n(n),r=a(5),c=a.n(r);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,c=void 0===r?24:r,l=i(e,["color","size"]);return s.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("polyline",{points:"18 15 12 9 6 15"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="ChevronUp",t.a=l},669:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"f",(function(){return d})),a.d(t,"g",(function(){return b})),a.d(t,"h",(function(){return f})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return j}));var n=a(458),s=a(459),r=a.n(s),c=a(457),o=a(460),i=function(e){return function(t){c.a.post("/cricket/contest_prizes/add_prize",e).then((function(e){Object(o.b)(e.data.message),t({type:"ADD_PRIZE_MASTER_CRICKET",data:e.data})})).catch((function(e){return Object(o.a)(e.message)}))}},l=function(e){return function(t){c.a.post("/football/contest_prizes/add_prize",e).then((function(e){Object(o.b)(e.data.message),t({type:"ADD_PRIZE_MASTER_FOOTBALL",data:e.data})})).catch((function(e){return Object(o.a)(e.message)}))}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var a=Object(n.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"GET_SPINNER"}),a.next=3,c.a.get("cricket/contest_prizes/prize_list?page=".concat(e,"limit=").concat(t)).then((function(e){n({type:"PRIZE_MASTER_CRICKET",data:e.data.data}),console.log(e.data.data.data)})).catch((function(){n({type:"GET_ALL_USERS_FAIL"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var a=Object(n.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"GET_SPINNER"}),a.next=3,c.a.get("football/contest_prizes/prize_list?page=".concat(e,"limit=").concat(t)).then((function(e){n({type:"PRIZE_MASTER_CRICKET_FOOTBALL",data:e.data.data}),console.log(e.data.data.data)})).catch((function(){n({type:"GET_ALL_USERS_FAIL"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.put("/cricket/view/".concat(e)).then((function(e){a({type:"PRIZE_DETAILS_CRICKET",data:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.put("/foootball/view/".concat(e)).then((function(e){a({type:"PRIZE_DETAILS_CRICKET",data:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){c.a.delete("/cricket/".concat(e)).then((function(){Object(o.c)()})).catch((function(e){Object(o.a)(),console.log(e)}))}},j=function(e){return function(){c.a.delete("/football/".concat(e)).then((function(){Object(o.c)()})).catch((function(e){Object(o.a)(),console.log(e)}))}}}}]);
//# sourceMappingURL=77.13984976.chunk.js.map