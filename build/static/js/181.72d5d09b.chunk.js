(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[181],{1538:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(16),r=a(491),i=a(502),o=a(500),l=a(496),u=a(487),s=a(472),d=a(471),p=a(887),j=a(484),f=a(473),b=a(453),h=a(1),m=a(641),O=a(122),v=a(463),x=a(476),y=a(475),g=(a(469),a(6)),_=[{value:"Bowler",label:"Bowler"},{value:"Wicket Keeper",label:"Wicket Keeper"},{value:"Batsman",label:"Batsman"},{value:"All Rounder",label:"All Rounder"}];t.default=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.squad})).cricket_view_squad;console.log(t);var a=Object(h.useState)(),A=Object(c.a)(a,2),E=A[0],C=A[1];Object(h.useEffect)((function(){e(m.d)}),[t]),Object(h.useEffect)((function(){C({player_api:null===t||void 0===t?void 0:t.player_api,player_api_id:null===t||void 0===t?void 0:t.player_api_id,player_name:null===t||void 0===t?void 0:t.player_name,team_id:null===t||void 0===t?void 0:t.team_id,player_type:null===t||void 0===t?void 0:t.player_type,player_value:null===t||void 0===t?void 0:t.player_value,active:null===t||void 0===t?void 0:t.active})}),[t]),console.log(null===t||void 0===t?void 0:t.player_api),console.log(E);return Object(g.jsxs)(h.Fragment,{children:[Object(g.jsx)(v.a,{breadCrumbTitle:"Cricket Squad",breadCrumbParent:"cricketsquad",breadCrumbActive:"Edit"}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(i.a,{children:Object(g.jsx)(o.a,{tag:"h4",children:"Edit Cricket squad"})}),Object(g.jsx)(l.a,{children:Object(g.jsx)(u.a,{children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(d.a,{sm:"12",children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(j.a,{children:"Player Api"}),Object(g.jsx)(f.a,{type:"text",name:"name",id:"nameVertical",value:null===E||void 0===E?void 0:E.player_api,onChange:function(e){return C(Object(n.a)(Object(n.a)({},E),{},{player_api:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(g.jsx)(d.a,{sm:"12",children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(j.a,{for:"EmailVertical",children:"Player Api Id"}),Object(g.jsx)(f.a,{type:"number",name:"Email",id:"EmailVertical",value:null===E||void 0===E?void 0:E.player_api_id,onChange:function(e){return C(Object(n.a)(Object(n.a)({},E),{},{player_api_id:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(g.jsx)(d.a,{sm:"12",children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(j.a,{for:"EmailVertical",children:"Player Name"}),Object(g.jsx)(f.a,{type:"Fixturename",name:"Email",id:"EmailVertical",value:null===E||void 0===E?void 0:E.player_name,onChange:function(e){return C(Object(n.a)(Object(n.a)({},E),{},{player_name:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(g.jsx)(d.a,{sm:"12",children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(j.a,{children:"Team Id"}),Object(g.jsx)(f.a,{type:"text",name:"name",id:"nameVertical",value:null===E||void 0===E?void 0:E.team_id,onChange:function(e){return C(Object(n.a)(Object(n.a)({},E),{},{team_id:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(g.jsx)(d.a,{sm:"12",children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(j.a,{for:"nameVertical",children:"player Type"}),Object(g.jsx)(x.a,{theme:y.f,className:"react-select",classNamePrefix:"select",defaultValue:_[0],onChange:function(e){return function(e){C(Object(n.a)(Object(n.a)({},E),{},{player_type:e.value}))}(e)},options:_,isClearable:!1})]})}),Object(g.jsx)(d.a,{sm:"12",children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(j.a,{for:"nameVertical",children:"player_value"}),Object(g.jsx)(f.a,{type:"text",name:"name",id:"nameVertical",value:null===E||void 0===E?void 0:E.player_value,onChange:function(e){return C(Object(n.a)(Object(n.a)({},E),{},{player_value:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(g.jsx)(d.a,{sm:"12",children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(j.a,{for:"nameVertical",children:"Active"}),Object(g.jsx)(f.a,{type:"text",name:"name",id:"nameVertical",value:null===E||void 0===E?void 0:E.active,onChange:function(e){return C(Object(n.a)(Object(n.a)({},E),{},{active:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(g.jsx)(d.a,{sm:"12",children:Object(g.jsx)(p.a,{className:"d-flex mb-0",children:Object(g.jsx)(b.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(a){return function(a){a.preventDefault(),console.log(E),e(Object(m.c)(t.id,E))}(a)},children:"Submit"})})})]})})})]})]})}},457:function(e,t,a){"use strict";var n=a(0),c=a(83),r=a.n(c),i=localStorage.getItem("TOKEN"),o=r.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:i}});o.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(n.a)(Object(n.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=o},463:function(e,t,a){"use strict";var n=a(466),c=a(481),r=a(482),i=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,o=e.breadCrumbParent2,l=e.breadCrumbParent3,u=e.breadCrumbActive;return Object(i.jsx)("div",{className:"content-header row",children:Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[t?Object(i.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(c.a,{children:[Object(i.jsx)(r.a,{tag:"li",children:Object(i.jsx)(n.b,{to:"/",children:"Home"})}),a?Object(i.jsx)(r.a,{tag:"li",className:"text-primary",children:Object(i.jsx)(n.b,{to:"/".concat(a),children:a})}):"",o?Object(i.jsx)(r.a,{tag:"li",className:"text-primary",children:o}):"",l?Object(i.jsx)(r.a,{tag:"li",className:"text-primary",children:l}):"",Object(i.jsx)(r.a,{tag:"li",active:!0,children:u})]})})]})})})})}},469:function(e,t,a){},641:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"g",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return d})),a.d(t,"h",(function(){return p})),a.d(t,"i",(function(){return j})),a.d(t,"j",(function(){return f})),a.d(t,"f",(function(){return b})),a.d(t,"e",(function(){return h})),a.d(t,"m",(function(){return m})),a.d(t,"n",(function(){return O})),a.d(t,"k",(function(){return v})),a.d(t,"l",(function(){return x}));var n=a(458),c=a(459),r=a.n(c),i=a(457),o=function(){return{type:"CLEAR_DATA"}},l=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/cricket/squad/list?page=".concat(e)).then((function(e){a({type:"CRICKET_SQUAD",data:e.data.data})})).catch((function(){a({type:"GET_ALL_USERS_FAIL"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(t){i.a.post("/cricket/squad/add",e).then((function(e){t({type:"CRICKET_SQUAD_ADD",data:e.data})})).catch((function(e){return console.log(e)}))}},s=function(e,t){return function(a){i.a.put("/cricket/squad/view/".concat(e)).then((function(e){console.log(e.data.data),a({type:"CRICKET_SQUAD_VIEW",data:e.data,prizesEdit:t}),console.log("this one",e.data)}))}},d=function(e,t){return function(a){i.a.put("/cricket/squad/edit/".concat(e),t).then((function(e){console.log(e),a({type:"CRICKET_SQUAD_EDIT",data:e.data}),console.log("this one",e.data)}))}},p=function(e){return function(t){i.a.post("/cricket/squad/list",e).then((function(e){t({type:"CRICKET_SQUAD_ADD",data:e.data}),console.log(e.data.data)})).catch((function(e){console.log(e)}))}},j=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/football/squad/list?page=".concat(e)).then((function(e){a({type:"FOOTBALL_SQUAD",data:e.data.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(t){i.a.post("/football/squad/list",e).then((function(e){t({type:"FOOTBALL_SQUAD_ADD",data:e.data}),console.log(e.data.data)})).catch((function(e){console.log(e)}))}},b=function(e,t){return function(a){i.a.put("/football/squad/view/".concat(e)).then((function(e){console.log(e.data.data),a({type:"FOOTBALL_SQUAD_VIEW",data:e.data,prizesEdit:t}),console.log("this one",e.data)}))}},h=function(e,t){return function(a){i.a.put("/football/squad/edit/".concat(e),t).then((function(e){console.log(e),a({type:"FOOTBALL_SQUAD_EDIT",data:e.data}),console.log("this one",e.data)}))}},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var c=Object(n.a)(r.a.mark((function n(c){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.get("/cricket/squad/list?page=".concat(e,"&player_name=").concat(t,"&player_type=").concat(a)).then((function(e){console.log("Ajith",e.data),c({type:"SEARCH_CRICKET_SQUAD",data:e.data.data})})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return c.apply(this,arguments)}}()},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var c=Object(n.a)(r.a.mark((function n(c){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.get("/football/squad/list?page=".concat(e,"&player_name=").concat(t,"&player_type=").concat(a)).then((function(e){console.log("Ajith",e.data),c({type:"SEARCH_FOOTBALL_SQUAD",data:e.data.data})})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return c.apply(this,arguments)}}()},v=function(e){return console.log(e),function(){var t=Object(n.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/cricket/series/list?page=".concat(e)).then((function(e){a({type:"CRICKET_SERIES_TOTAL",data:e.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/football/series/list?page=".concat(e)).then((function(e){a({type:"FOOTBALL_SERIES_TOTAL",data:e.data}),console.log(e.data.data.records,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=181.72d5d09b.chunk.js.map