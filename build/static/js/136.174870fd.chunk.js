(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[136],{1441:function(e,t,n){},1442:function(e,t,n){},1492:function(e,t,n){"use strict";n.r(t);var r=n(17),c=n(1),a=n(120),s=n(510),i=n(499),o=n.n(i),u=(n(500),n(548)),d=n.n(u),l=(n(1441),n(1442),n(457)),j=(n(497),n(482)),b=n(468),f=n(467),p=n(469),O=n(464),m=n(465),h=n(445),x=n(563),v=n(6),g=function(){var e=Object(a.c)((function(e){return e.corporateteams})),t=Object(c.useState)(null),n=Object(r.a)(t,2),i=n[0],u=n[1],g=Object(c.useState)(null),y=Object(r.a)(g,2),N=y[0],w=y[1],R=Object(c.useState)(!1),_=Object(r.a)(R,1)[0],E=Object(a.b)(),T=new o.a({meta:{type:"avatar"},restrictions:{maxNumberOfFiles:1},autoProceed:!0});T.use(d.a),T.on("file-added",(function(e,t){console.log(e.data.lastModified),console.log(e.data),console.log(T),console.log(t),w(t),u(e.data)}));return console.log(e),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{breadCrumbTitle:"Corporate Squad",breadCrumbActive:"squad"}),Object(v.jsx)(j.a,{}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(b.a,{children:Object(v.jsx)(f.a,{tag:"h4",children:"Squad"})}),Object(v.jsxs)(p.a,{children:[Object(v.jsxs)(O.a,{children:[Object(v.jsx)(m.a,{className:"mb-1",md:"6",sm:"12"}),Object(v.jsx)(m.a,{className:"mb-1",md:"6",sm:"12"})]}),Object(v.jsx)(O.a,{className:"wrapper-add",children:Object(v.jsx)(m.a,{className:"add-post-edit",children:Object(v.jsxs)("div",{className:"mt-4 ".concat(_?"img-error-post":""),children:[Object(v.jsx)(s.a,{uppy:T,locale:{strings:{dropHereOr:"Drop file or %{browse}",browse:"browse"}}}),null!==N?Object(v.jsx)("img",{className:"rounded mt-2",src:N,alt:"avatar"}):null,N&&Object(v.jsx)("div",{className:"uploaded-files",children:Object(v.jsx)("img",{src:N,className:"post-preview"})})]})})}),Object(v.jsx)("div",{className:"mt-3",children:Object(v.jsx)(h.a.Ripple,{color:"primary",onClick:function(e){return function(e){e.preventDefault();var t=new FormData;t.append("file",i),E(Object(x.a)(t))}(e)},children:"submit"})})]})]})]})};n(455),t.default=function(){return Object(v.jsx)("div",{className:"app-user-list",children:Object(v.jsx)(g,{})})}},451:function(e,t,n){"use strict";var r=n(0),c=n(80),a=n.n(c),s=localStorage.getItem("TOKEN"),i=a.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:s}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(r.a)(Object(r.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},454:function(e,t,n){"use strict";n.d(t,"e",(function(){return O})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return x})),n.d(t,"a",(function(){return v})),n.d(t,"f",(function(){return g}));var r=n(1),c=n(121),a=n(463),s=(n(471),n(472)),i=n(786),o=n(474),u=(n(475),n(482),n(468),n(467),n(469),n(445),n(6)),d=function(e){var t=e.message;return Object(u.jsx)(r.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(a.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})})})},l=function(e){var t=e.message;return Object(u.jsx)(r.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(a.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})})})},j=function(e){var t=e.message;return Object(u.jsx)(r.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(a.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})})})},b=function(e){var t=e.message;return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(a.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})}),Object(u.jsx)("div",{className:"toastify-body"})]})},f=function(e){var t=e.message;return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(a.a,{size:"sm",color:"danger",icon:Object(u.jsx)(i.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})}),Object(u.jsx)("div",{className:"toastify-body"})]})},p=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(a.a,{size:"sm",color:"warning",icon:Object(u.jsx)(o.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(u.jsx)("div",{className:"toastify-body",children:Object(u.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},O=function(e){return c.b.success(Object(u.jsx)(d,{message:e}),{hideProgressBar:!0})},m=function(e){return c.b.success(Object(u.jsx)(l,{message:e}),{hideProgressBar:!0})},h=function(e){return c.b.success(Object(u.jsx)(j,{message:e}),{hideProgressBar:!0})},x=function(e){return c.b.success(Object(u.jsx)(b,{message:e}),{hideProgressBar:!0})},v=function(e){return c.b.error(Object(u.jsx)(f,{message:e}),{hideProgressBar:!0})},g=function(){return c.b.warning(Object(u.jsx)(p,{}),{hideProgressBar:!0})}},455:function(e,t,n){},457:function(e,t,n){"use strict";var r=n(458),c=n(480),a=n(481),s=n(6);t.a=function(e){var t=e.breadCrumbTitle,n=e.breadCrumbParent,i=e.breadCrumbParent2,o=e.breadCrumbParent3,u=e.breadCrumbActive;return Object(s.jsx)("div",{className:"content-header row",children:Object(s.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(s.jsx)("div",{className:"row breadcrumbs-top",children:Object(s.jsxs)("div",{className:"col-12",children:[t?Object(s.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(s.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(s.jsxs)(c.a,{children:[Object(s.jsx)(a.a,{tag:"li",children:Object(s.jsx)(r.b,{to:"/",children:"Home"})}),n?Object(s.jsx)(a.a,{tag:"li",className:"text-primary",children:Object(s.jsx)(r.b,{to:"/".concat(n),children:n})}):"",i?Object(s.jsx)(a.a,{tag:"li",className:"text-primary",children:i}):"",o?Object(s.jsx)(a.a,{tag:"li",className:"text-primary",children:o}):"",Object(s.jsx)(a.a,{tag:"li",active:!0,children:u})]})})]})})})})}},497:function(e,t,n){},563:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"p",(function(){return u})),n.d(t,"q",(function(){return d})),n.d(t,"n",(function(){return l})),n.d(t,"o",(function(){return j})),n.d(t,"k",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"l",(function(){return p})),n.d(t,"j",(function(){return O})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return h})),n.d(t,"m",(function(){return x})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"h",(function(){return y})),n.d(t,"a",(function(){return N}));var r=n(452),c=n(453),a=n(451),s=n(454),i=function(e){return function(t){t({type:"CRIC_CONTEST_FROM",data:e})}},o=function(e){return function(t){t({type:"CRIC_CONTEST_TO",data:e})}},u=function(e){return function(t){t({type:"CRIC_WINNER_FROM",data:e})}},d=function(e){return function(t){t({type:"CRIC_WINNER_TO",data:e})}},l=function(e){return function(t){t({type:"CRIC_QUIZ_FROM",data:e})}},j=function(e){return function(t){t({type:"CRIC_QUIZ_TO",data:e})}},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var s=Object(c.a)(Object(r.a)().mark((function c(s){var i;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s({type:"GET_ALL_REPORTS_INIT"}),i=t&&n?"/cricket/reports/winnerReport?from=".concat(t,"&to=").concat(n,"&page=").concat(e):"/cricket/reports/winnerReport?page=".concat(e),r.next=4,a.a.get(i).then((function(e){console.log(e),s({type:"GET_ALL_WINNERS_REPORTS",data:e.data.data})}));case 4:case"end":return r.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var s=Object(c.a)(Object(r.a)().mark((function c(s){var i;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s({type:"GET_ALL_REPORTS_INIT"}),i=t&&n?"/cricket/reports/quizReport?from=".concat(t,"&to=").concat(n,"&page=").concat(e):"/cricket/reports/quizReport?page=".concat(e),r.next=4,a.a.get(i).then((function(e){s({type:"GET_ALL_QUIZ_REPORTS",data:e.data.data})}));case 4:case"end":return r.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},p=function(){return Object(c.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.get("/cricket/reports/winnerReport?download=true",{responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","winnerReport.csv"),document.body.appendChild(n),n.click()}));case 2:case"end":return e.stop()}}),e)})))},O=function(){return Object(c.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.get("/cricket/reports/quizReport?download=true",{responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","file.csv"),document.body.appendChild(n),n.click()}));case 2:case"end":return e.stop()}}),e)})))},m=function(){return function(){var e=Object(c.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_ALL_REPORTS_INIT"}),e.next=3,a.a.get("/cricket/series/list").then((function(e){t({type:"SERIES_NAME",data:e.data.data}),console.log(e.data.data.records,"this")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),n({type:"GET_ALL_REPORTS_INIT"}),t.next=4,a.a.get("/cricket/fixture/list/".concat(e)).then((function(e){n({type:"FIXTURE_NAME",data:e.data.data}),console.log(e.data.data)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var n=Object(c.a)(Object(r.a)().mark((function n(c){return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c({type:"GET_ALL_REPORTS_INIT"}),n.next=3,a.a.get("/cricket/reports/playerReport?series_id=".concat(e,"&fixture_id=").concat(t)).then((function(e){c({type:"PLAYER_REPORT",data:e.data.data}),console.table(e.data.data)}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return console.log(e),function(t){t({type:"COLLECT_SERIESID",data:e})}},g=function(e){return console.log(e),function(t){t({type:"COLLECT_FIXTUREID",data:e})}},y=function(e,t){return Object(c.a)(Object(r.a)().mark((function n(){return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.get("/cricket/reports/playerReport?series_id=".concat(e,"&fixture_id=").concat(t,"&download=true"),{responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","cricketplayerreport.csv"),document.body.appendChild(n),n.click()}));case 2:case"end":return n.stop()}}),n)})))},N=function(e){return function(){var t=Object(c.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.post("/squadUpload",e).then((function(e){Object(s.b)(e.data.message),n({type:"ADD_FILE",data:e.data.message})})).catch((function(e){console.log("Error in Feed Post: ",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=136.174870fd.chunk.js.map