(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[195],{1551:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(17),r=a(482),i=a(468),s=a(467),o=a(469),l=a(484),u=a(464),d=a(465),j=a(787),b=a(483),f=a(466),h=a(445),p=a(1),O=a(457),m=a(536),x=a(120),v=a(477),g=a(470),y=(a(461),a(6)),_=[{value:"Bowler",label:"Bowler"},{value:"Wicket Keeper",label:"Wicket Keeper"},{value:"Batsman",label:"Batsman"},{value:"All Rounder",label:"All Rounder"}];t.default=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.squad})).football_view_squad;console.log(t);var a=Object(p.useState)(),E=Object(c.a)(a,2),N=E[0],A=E[1];Object(p.useEffect)((function(){e(m.h)}),[t]),Object(p.useEffect)((function(){A({player_api:null===t||void 0===t?void 0:t.player_api,player_api_id:null===t||void 0===t?void 0:t.player_api_id,player_name:null===t||void 0===t?void 0:t.player_name,team_id:null===t||void 0===t?void 0:t.team_id,player_type:null===t||void 0===t?void 0:t.player_type,player_value:null===t||void 0===t?void 0:t.player_value,active:null===t||void 0===t?void 0:t.active})}),[t]),console.log(null===t||void 0===t?void 0:t.player_api),console.log(N);return Object(y.jsxs)(p.Fragment,{children:[Object(y.jsx)(O.a,{breadCrumbTitle:"Football Squad",breadCrumbParent:"footballsquad",breadCrumbActive:"Edit"}),Object(y.jsxs)(r.a,{children:[Object(y.jsx)(i.a,{children:Object(y.jsx)(s.a,{tag:"h4",children:"Edit Cricket squad"})}),Object(y.jsx)(o.a,{children:Object(y.jsx)(l.a,{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(b.a,{children:"Player Api"}),Object(y.jsx)(f.a,{type:"text",name:"name",id:"nameVertical",value:null===N||void 0===N?void 0:N.player_api,onChange:function(e){return A(Object(n.a)(Object(n.a)({},N),{},{player_api:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(b.a,{for:"EmailVertical",children:"Player Api Id"}),Object(y.jsx)(f.a,{type:"number",name:"Email",id:"EmailVertical",value:null===N||void 0===N?void 0:N.player_api_id,onChange:function(e){return A(Object(n.a)(Object(n.a)({},N),{},{player_api_id:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(b.a,{for:"EmailVertical",children:"Player Name"}),Object(y.jsx)(f.a,{type:"Fixturename",name:"Email",id:"EmailVertical",value:null===N||void 0===N?void 0:N.player_name,onChange:function(e){return A(Object(n.a)(Object(n.a)({},N),{},{player_name:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(b.a,{children:"Team Id"}),Object(y.jsx)(f.a,{type:"text",name:"name",id:"nameVertical",value:null===N||void 0===N?void 0:N.team_id,onChange:function(e){return A(Object(n.a)(Object(n.a)({},N),{},{team_id:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(b.a,{for:"nameVertical",children:"player Type"}),Object(y.jsx)(v.a,{theme:g.f,className:"react-select",classNamePrefix:"select",defaultValue:_[0],onChange:function(e){return function(e){A(Object(n.a)(Object(n.a)({},N),{},{player_type:e.value}))}(e)},options:_,isClearable:!1})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(b.a,{for:"nameVertical",children:"player_value"}),Object(y.jsx)(f.a,{type:"text",name:"name",id:"nameVertical",value:null===N||void 0===N?void 0:N.player_value,onChange:function(e){return A(Object(n.a)(Object(n.a)({},N),{},{player_value:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(b.a,{for:"nameVertical",children:"Active"}),Object(y.jsx)(f.a,{type:"text",name:"name",id:"nameVertical",value:null===N||void 0===N?void 0:N.active,onChange:function(e){return A(Object(n.a)(Object(n.a)({},N),{},{active:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsx)(j.a,{className:"d-flex mb-0",children:Object(y.jsx)(h.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(a){return function(a){a.preventDefault(),console.log(N),e(Object(m.g)(t.id,N))}(a)},children:"Submit"})})})]})})})]})]})}},451:function(e,t,a){"use strict";var n=a(0),c=a(80),r=a.n(c),i=localStorage.getItem("TOKEN"),s=r.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:i}});s.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(n.a)(Object(n.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=s},454:function(e,t,a){"use strict";a.d(t,"e",(function(){return p})),a.d(t,"b",(function(){return O})),a.d(t,"d",(function(){return m})),a.d(t,"c",(function(){return x})),a.d(t,"a",(function(){return v})),a.d(t,"f",(function(){return g}));var n=a(1),c=a(121),r=a(463),i=(a(471),a(472)),s=a(786),o=a(474),l=(a(475),a(482),a(468),a(467),a(469),a(445),a(6)),u=function(e){var t=e.message;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},j=function(e){var t=e.message;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},b=function(e){var t=e.message;return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},f=function(e){var t=e.message;return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"danger",icon:Object(l.jsx)(s.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},h=function(){return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"warning",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},p=function(e){return c.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},O=function(e){return c.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},m=function(e){return c.b.success(Object(l.jsx)(j,{message:e}),{hideProgressBar:!0})},x=function(e){return c.b.success(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},v=function(e){return c.b.error(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},g=function(){return c.b.warning(Object(l.jsx)(h,{}),{hideProgressBar:!0})}},457:function(e,t,a){"use strict";var n=a(458),c=a(480),r=a(481),i=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,s=e.breadCrumbParent2,o=e.breadCrumbParent3,l=e.breadCrumbActive;return Object(i.jsx)("div",{className:"content-header row",children:Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[t?Object(i.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(c.a,{children:[Object(i.jsx)(r.a,{tag:"li",children:Object(i.jsx)(n.b,{to:"/",children:"Home"})}),a?Object(i.jsx)(r.a,{tag:"li",className:"text-primary",children:Object(i.jsx)(n.b,{to:"/".concat(a),children:a})}):"",s?Object(i.jsx)(r.a,{tag:"li",className:"text-primary",children:s}):"",o?Object(i.jsx)(r.a,{tag:"li",className:"text-primary",children:o}):"",Object(i.jsx)(r.a,{tag:"li",active:!0,children:l})]})})]})})})})}},461:function(e,t,a){},536:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"i",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return j})),a.d(t,"j",(function(){return b})),a.d(t,"k",(function(){return f})),a.d(t,"l",(function(){return h})),a.d(t,"f",(function(){return p})),a.d(t,"h",(function(){return O})),a.d(t,"g",(function(){return m})),a.d(t,"o",(function(){return x})),a.d(t,"p",(function(){return v})),a.d(t,"m",(function(){return g})),a.d(t,"n",(function(){return y}));var n=a(452),c=a(453),r=a(451),i=a(454),s=function(){return{type:"CLEAR_DATA"}},o=function(e){return function(){var t=Object(c.a)(Object(n.a)().mark((function t(a){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("/cricket/squad/list?page=".concat(e)).then((function(e){a({type:"CRICKET_SQUAD",data:e.data.data})})).catch((function(){a({type:"GET_ALL_USERS_FAIL"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(t){r.a.post("/cricket/squad/add",e).then((function(e){t({type:"CRICKET_SQUAD_ADD",data:e.data})})).catch((function(e){return console.log(e)}))}},u=function(e){return function(t){return r.a.delete("cricket/squad/delete/".concat(e)).then((function(e){Object(i.a)("successfully deleted"),t({type:"DELETE_SQUAD",data:e.data}),t(o())})).catch((function(){Object(i.a)("error")}))}},d=function(e,t){return function(a){r.a.put("/cricket/squad/view/".concat(e)).then((function(e){console.log(e.data.data),a({type:"CRICKET_SQUAD_VIEW",data:e.data,prizesEdit:t}),console.log("this one",e.data)}))}},j=function(e,t){return function(a){r.a.put("/cricket/squad/edit/".concat(e),t).then((function(e){console.log(e),a({type:"CRICKET_SQUAD_EDIT",data:e.data}),console.log("this one",e.data)}))}},b=function(e){return function(t){r.a.post("/cricket/squad/list",e).then((function(e){t({type:"CRICKET_SQUAD_ADD",data:e.data}),console.log(e.data.data)})).catch((function(e){console.log(e)}))}},f=function(e){return function(){var t=Object(c.a)(Object(n.a)().mark((function t(a){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("/football/squad/list?page=".concat(e)).then((function(e){a({type:"FOOTBALL_SQUAD",data:e.data.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(t){r.a.post("/football/squad/add",e).then((function(e){t({type:"FOOTBALL_SQUAD_ADD",data:e.data}),console.log(e.data.data)})).catch((function(e){console.log(e)}))}},p=function(e){return function(t){return r.a.delete("football/squad/delete/".concat(e)).then((function(e){Object(i.a)("successfully deleted"),t({type:"DELETE_SQUAD",data:e.data}),t(o())})).catch((function(){Object(i.a)("error")}))}},O=function(e,t){return function(a){r.a.put("/football/squad/view/".concat(e)).then((function(e){console.log(e.data.data),a({type:"FOOTBALL_SQUAD_VIEW",data:e.data,prizesEdit:t}),console.log("this one",e.data)}))}},m=function(e,t){return function(a){r.a.put("/football/squad/edit/".concat(e),t).then((function(e){console.log(e),a({type:"FOOTBALL_SQUAD_EDIT",data:e.data}),console.log("this one",e.data)}))}},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var i=Object(c.a)(Object(n.a)().mark((function c(i){return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.get("/cricket/squad/list?page=".concat(e,"&player_name=").concat(t,"&player_type=").concat(a)).then((function(e){console.log("Ajith",e.data),i({type:"SEARCH_CRICKET_SQUAD",data:e.data.data})})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),c)})));return function(e){return i.apply(this,arguments)}}()},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var i=Object(c.a)(Object(n.a)().mark((function c(i){return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.get("/football/squad/list?page=".concat(e,"&player_name=").concat(t,"&player_type=").concat(a)).then((function(e){console.log("Ajith",e.data),i({type:"SEARCH_FOOTBALL_SQUAD",data:e.data.data})})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),c)})));return function(e){return i.apply(this,arguments)}}()},g=function(e){return console.log(e),function(){var t=Object(c.a)(Object(n.a)().mark((function t(a){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("/cricket/series/list?page=".concat(e)).then((function(e){a({type:"CRICKET_SERIES_TOTAL",data:e.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(Object(n.a)().mark((function t(a){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("/football/series/list?page=".concat(e)).then((function(e){a({type:"FOOTBALL_SERIES_TOTAL",data:e.data}),console.log(e.data.data.records,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=195.0763560a.chunk.js.map