(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[36],{1307:function(t,e,n){},451:function(t,e,n){"use strict";var a=n(0),c=n(80),r=n.n(c),s=localStorage.getItem("TOKEN"),i=r.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:s}});i.interceptors.request.use((function(t){var e=localStorage.getItem("TOKEN");return Object(a.a)(Object(a.a)({},t),{},{headers:{"Content-type":"application/json",Authorization:"".concat(e)}})})),e.a=i},454:function(t,e,n){"use strict";n.d(e,"e",(function(){return O})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return x})),n.d(e,"a",(function(){return g})),n.d(e,"f",(function(){return v}));var a=n(1),c=n(121),r=n(463),s=(n(471),n(472)),i=n(786),o=n(474),u=(n(475),n(482),n(468),n(467),n(469),n(445),n(6)),l=function(t){var e=t.message;return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(r.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:e})]})})})},d=function(t){var e=t.message;return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(r.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:e})]})})})},j=function(t){var e=t.message;return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(r.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:e})]})})})},b=function(t){var e=t.message;return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(r.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:e})]})}),Object(u.jsx)("div",{className:"toastify-body"})]})},f=function(t){var e=t.message;return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(r.a,{size:"sm",color:"danger",icon:Object(u.jsx)(i.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:e})]})}),Object(u.jsx)("div",{className:"toastify-body"})]})},p=function(){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(r.a,{size:"sm",color:"warning",icon:Object(u.jsx)(o.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(u.jsx)("div",{className:"toastify-body",children:Object(u.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},O=function(t){return c.b.success(Object(u.jsx)(l,{message:t}),{hideProgressBar:!0})},h=function(t){return c.b.success(Object(u.jsx)(d,{message:t}),{hideProgressBar:!0})},m=function(t){return c.b.success(Object(u.jsx)(j,{message:t}),{hideProgressBar:!0})},x=function(t){return c.b.success(Object(u.jsx)(b,{message:t}),{hideProgressBar:!0})},g=function(t){return c.b.error(Object(u.jsx)(f,{message:t}),{hideProgressBar:!0})},v=function(){return c.b.warning(Object(u.jsx)(p,{}),{hideProgressBar:!0})}},457:function(t,e,n){"use strict";var a=n(458),c=n(480),r=n(481),s=n(6);e.a=function(t){var e=t.breadCrumbTitle,n=t.breadCrumbParent,i=t.breadCrumbParent2,o=t.breadCrumbParent3,u=t.breadCrumbActive;return Object(s.jsx)("div",{className:"content-header row",children:Object(s.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(s.jsx)("div",{className:"row breadcrumbs-top",children:Object(s.jsxs)("div",{className:"col-12",children:[e?Object(s.jsx)("h2",{className:"content-header-title float-left mb-0",children:e}):"",Object(s.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(s.jsxs)(c.a,{children:[Object(s.jsx)(r.a,{tag:"li",children:Object(s.jsx)(a.b,{to:"/",children:"Home"})}),n?Object(s.jsx)(r.a,{tag:"li",className:"text-primary",children:Object(s.jsx)(a.b,{to:"/".concat(n),children:n})}):"",i?Object(s.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",o?Object(s.jsx)(r.a,{tag:"li",className:"text-primary",children:o}):"",Object(s.jsx)(r.a,{tag:"li",active:!0,children:u})]})})]})})})})}},459:function(t,e,n){"use strict";var a=n(0),c=n(30),r=n(1),s=n(119),i=n.n(s),o=n(485),u=(n(460),n(6)),l=function(t){var e,n=t.children,s=t.blocking,o=t.loader,l=t.className,d=t.tag,j=t.overlayColor,b=d;return Object(u.jsxs)(b,{className:i()("ui-loader",(e={},Object(c.a)(e,l,l),Object(c.a)(e,"show",s),e)),children:[n,s?Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("div",Object(a.a)({className:"overlay"},s&&j?{style:{backgroundColor:j}}:{})),Object(u.jsx)("div",{className:"loader",children:o})]}):null]})};e.a=l,l.defaultProps={tag:"div",blocking:!1,loader:Object(u.jsx)(o.a,{color:"primary"})}},460:function(t,e,n){},501:function(t,e,n){"use strict";var a=n(0),c=n(126),r=n(6),s=["count","tag","children"],i=function(t){for(var e=t.count,n=t.tag,i=t.children,o=Object(c.a)(t,s),u=n,l=[],d=0;d<e;d++)l.push(i(d));return Object(r.jsx)(u,Object(a.a)(Object(a.a)({},o),{},{children:l}))};i.defaultProps={tag:"div"},e.a=i},506:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"i",(function(){return o})),n.d(e,"k",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return j})),n.d(e,"j",(function(){return b})),n.d(e,"l",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return O})),n.d(e,"c",(function(){return h})),n.d(e,"m",(function(){return m})),n.d(e,"g",(function(){return x})),n.d(e,"q",(function(){return g})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return N})),n.d(e,"p",(function(){return y}));var a=n(452),c=n(453),r=n(451),s=n(454),i=function(t,e){return function(){var n=Object(c.a)(Object(a.a)().mark((function n(c){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),c({type:"GET_ALL_DATA_INIT"}),n.next=4,r.a.get("/quiz/list?page=".concat(e),{params:t}).then((function(e){c({type:"GET_ALL_DATA",data:e.data.data,params:t}),console.log(e.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},o=function(t,e){return function(){var n=Object(c.a)(Object(a.a)().mark((function n(c){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),c({type:"GET_ALL_DATA_INIT"}),n.next=4,r.a.get("/quiz/list?quiz_category=Cricket&page=".concat(e),{params:t}).then((function(e){c({type:"GET_CRIC_QUIZ",data:e.data.data,params:t}),console.log(e.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},u=function(t,e){return function(){var n=Object(c.a)(Object(a.a)().mark((function n(c){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),c({type:"GET_ALL_DATA_INIT"}),n.next=4,r.a.get("/quiz/list?quiz_category=Football&page=".concat(e),{params:t}).then((function(e){c({type:"GET_FOOT_QUIZ",data:e.data.data,params:t}),console.log(e.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},l=function(t,e){return function(){var n=Object(c.a)(Object(a.a)().mark((function n(c){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),c({type:"GET_ALL_DATA_INIT"}),n.next=4,r.a.get("/quiz/list?quiz_category=Basketball&page=".concat(e),{params:t}).then((function(e){c({type:"GET_BASK_QUIZ",data:e.data.data,params:t}),console.log(e.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},d=function(t){return function(e){e({type:"LANG_ID",data:t})}},j=function(t){return function(e){e({type:"LANG_ID",data:t})}},b=function(t){return function(e){e({type:"QUIZ_ENG_QUESTION",data:t})}},f=function(){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(e){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("/master/country/dropdownlist").then((function(t){e({type:"LANGS_ID",data:t.data}),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(t){return function(e){r.a.post("/quiz/add",t).then((function(t){console.log(t),Object(s.b)(t.data.message),e({type:"QUIZ_ADD",data:!0})})).catch((function(){Object(s.a)("failed to add")}))}},O=function(t){return function(e){e({type:"ADD_QUIZ_POST_INIT"}),r.a.post("/quiz/questions/add",t).then((function(t){Object(s.b)(t.data.message),e({type:"QUIZ_QUESTION_ADD",data:t.data}),console.log(t.data)})).catch((function(){Object(s.f)("failed to add")}))}},h=function(t){return function(e){r.a.delete("/quiz/delete/".concat(t)).then((function(){Object(s.c)("successfully delete"),e(i())})).catch((function(t){Object(s.a)("error"),console.log(t)}))}},m=function(t){return function(){var e=Object(c.a)(Object(a.a)().mark((function e(n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"DETAILS_VIEW_INIT"}),e.next=3,r.a.put("/quiz/view/".concat(t)).then((function(t){n({type:"QUIZ_DET",data:t.data.data})})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(t){return function(e){e({type:"QUIZ_QUESTIONS_INIT"}),r.a.get("/quiz/questions/list/".concat(t)).then((function(t){e({type:"QUIZ_QUESTIONS_DATA",data:t.data.data})})).catch((function(t){return console.log(t)}))}},g=function(){return{type:"RESET_QUIZ_QUESTIONS"}},v=function(t,e){return function(n){r.a.put("/quiz/edit/".concat(t),e).then((function(t){n({type:"QUIZ_EDIT",data:t.data})})).catch((function(t){return console.log(t)}))}},N=function(t,e){return function(n){r.a.put("/quiz/questions/edit/".concat(t),e).then((function(t){n({type:"QUIZ_EDIT_QUESTIONS",data:t.data})})).catch((function(t){return console.log(t)}))}},y=function(t,e){return function(){var n=Object(c.a)(Object(a.a)().mark((function n(c){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,r.a.post("quiz/toggle_status/".concat(t)).then((function(t){Object(s.b)(t.data.message),c({type:"QUIZ_TOGGLE_STATUS",data:e})})).catch((function(t){Object(s.a)("error"),console.log(t),console.log("Error in Feed Post: ",t)}));case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}},919:function(t,e,n){"use strict";var a=n(30),c=n(17),r=n(1),s=n(1305),i=n.n(s),o=n(119),u=n.n(o),l=n(675),d=(n(1306),n(1307),n(6)),j=Object(r.forwardRef)((function(t,e){var n,s=t.type,o=t.className,l=t.steps,j=t.separator,b=t.options,f=t.instance,p=Object(r.useState)(0),O=Object(c.a)(p,2),h=O[0],m=O[1],x=null;Object(r.useEffect)((function(){x=new i.a(e.current,b),e.current.addEventListener("shown.bs-stepper",(function(t){m(t.detail.indexStep)})),f&&f(x)}),[]);return Object(d.jsxs)("div",{ref:e,className:u()("bs-stepper",(n={},Object(a.a)(n,o,o),Object(a.a)(n,"vertical","vertical"===s),Object(a.a)(n,"vertical wizard-modern","modern-vertical"===s),Object(a.a)(n,"wizard-modern","modern-horizontal"===s),n)),children:[Object(d.jsx)("div",{className:"bs-stepper-header",children:l.map((function(t,e){return Object(d.jsxs)(r.Fragment,{children:[0!==e&&e!==l.length?Object(d.jsx)("div",{className:"line",children:j}):null,Object(d.jsx)("div",{className:u()("step",{crossed:h>e,active:e===h}),"data-target":"#".concat(t.id),children:Object(d.jsxs)("button",{type:"button",className:"step-trigger",children:[Object(d.jsx)("span",{className:"bs-stepper-box",children:t.icon?t.icon:e+1}),Object(d.jsxs)("span",{className:"bs-stepper-label",children:[Object(d.jsx)("span",{className:"bs-stepper-title",children:t.title}),t.subtitle?Object(d.jsx)("span",{className:"bs-stepper-subtitle",children:t.subtitle}):null]})]})})]},t.id)}))}),Object(d.jsx)("div",{className:"bs-stepper-content",children:l.map((function(t,e){return Object(d.jsx)("div",{className:u()("content",{"active dstepper-block":h===e}),id:t.id,children:t.content},t.id)}))})]})}));j.displayName="Wizard",e.a=j,j.defaultProps={type:"horizontal",separator:Object(d.jsx)(l.a,{size:17}),options:{}}}}]);
//# sourceMappingURL=36.0e15eb68.chunk.js.map