(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[209],{1510:function(t,e,n){"use strict";n.r(e);var a=n(452),c=n(0),r=n(453),o=n(17),i=n(482),s=n(468),l=n(467),u=n(469),d=n(484),f=n(464),j=n(465),b=n(787),p=n(483),O=n(466),h=n(784),m=n(445),v=n(477),E=n(470),_=n(1),x=n(531),g=n(120),C=(n(461),n(457)),T=n(6),y=[{value:"Fashion",label:"Fashion"},{value:"Coupon",label:"Coupon"},{value:"Electronics",label:"Electronics"}];e.default=function(){var t=Object(g.b)(),e=Object(g.c)((function(t){return t.contestsprizes})).view_cricket_contest_prize;console.log(e);var n=Object(_.useState)(),I=Object(o.a)(n,2),N=I[0],R=I[1];Object(_.useEffect)((function(){t(x.o)}),[e]),Object(_.useEffect)((function(){R({contest_id:null===e||void 0===e?void 0:e.contest_id,name:null===e||void 0===e?void 0:e.name,caption:null===e||void 0===e?void 0:e.caption,type:null===e||void 0===e?void 0:e.type,value:null===e||void 0===e?void 0:e.value,prize_rank:null===e||void 0===e?void 0:e.prize_rank,assets_url:null===e||void 0===e?void 0:e.assets_url})}),[e]),console.log(null===e||void 0===e?void 0:e.contest_id),console.log(N);var S=function(t){return new Promise((function(e,n){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){e(a.result)},a.onerror=function(t){n(t)}}))},L=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e){var n,r;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.target.files[0],t.next=3,S(n);case 3:r=t.sent,R(Object(c.a)(Object(c.a)({},N),{},{assets_url:r}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(C.a,{breadCrumbTitle:"Football Contestsprize",breadCrumbParent:"footballcontestprize",breadCrumbActive:"Edit"}),Object(T.jsxs)(i.a,{children:[Object(T.jsx)(s.a,{children:Object(T.jsx)(l.a,{tag:"h4",children:"Edit Football Contest Prizes"})}),Object(T.jsx)(u.a,{children:Object(T.jsx)(d.a,{children:Object(T.jsxs)(f.a,{children:[Object(T.jsx)(j.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"EmailVertical",children:"ID"}),Object(T.jsx)(O.a,{type:"number",name:"Email",id:"EmailVertical",value:null===N||void 0===N?void 0:N.contest_id,onChange:function(t){return R(Object(c.a)(Object(c.a)({},N),{},{contest_id:t.target.value}))},placeholder:"Enter No of ID "})]})}),Object(T.jsx)(j.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{children:"Name"}),Object(T.jsx)(O.a,{type:"text",name:"name",id:"nameVertical",value:null===N||void 0===N?void 0:N.name,onChange:function(t){return R(Object(c.a)(Object(c.a)({},N),{},{name:t.target.value}))},placeholder:"Enter Product Name"})]})}),Object(T.jsx)(j.a,{children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"nameVertical",children:"Caption"}),Object(T.jsx)(O.a,{type:"text",name:"name",id:"nameVertical",value:null===N||void 0===N?void 0:N.caption,onChange:function(t){return R(Object(c.a)(Object(c.a)({},N),{},{caption:t.target.value}))},placeholder:"Enter Product Name"})]})}),Object(T.jsx)(j.a,{children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"nameVertical",children:"Category"}),Object(T.jsx)(v.a,{theme:E.f,className:"react-select",classNamePrefix:"select",defaultValue:y[0],onChange:function(t){return function(t){R(Object(c.a)(Object(c.a)({},N),{},{type:t.value}))}(t)},options:y,isClearable:!1})]})}),Object(T.jsx)(j.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"EmailVertical",children:"coins"}),Object(T.jsx)(O.a,{type:"number",name:"Email",id:"EmailVertical",value:null===N||void 0===N?void 0:N.value,onChange:function(t){return R(Object(c.a)(Object(c.a)({},N),{},{value:t.target.value}))},placeholder:"Enter No of Coins "})]})}),Object(T.jsx)(j.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"EmailVertical",children:"Prize Rank"}),Object(T.jsx)(O.a,{type:"number",name:"Email",id:"EmailVertical",value:null===N||void 0===N?void 0:N.prize_rank,onChange:function(t){return R(Object(c.a)(Object(c.a)({},N),{},{prize_rank:t.target.value}))},placeholder:"Enter No of ID "})]})}),Object(T.jsx)(j.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"exampleCustomFileBrowser",children:"Custom File Input"}),Object(T.jsx)(h.a,{type:"file",id:"exampleCustomFileBrowser",name:"customFile",onChange:function(t){return L(t)}})]})}),Object(T.jsx)(j.a,{sm:"12",children:Object(T.jsx)(b.a,{className:"d-flex mb-0",children:Object(T.jsx)(m.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(n){return function(n){n.preventDefault(),console.log(N),t(Object(x.g)(e.id,N))}(n)},children:"Submit"})})})]})})})]})]})}},451:function(t,e,n){"use strict";var a=n(0),c=n(80),r=n.n(c),o=localStorage.getItem("TOKEN"),i=r.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:o}});i.interceptors.request.use((function(t){var e=localStorage.getItem("TOKEN");return Object(a.a)(Object(a.a)({},t),{},{headers:{"Content-type":"application/json",Authorization:"".concat(e)}})})),e.a=i},457:function(t,e,n){"use strict";var a=n(458),c=n(480),r=n(481),o=n(6);e.a=function(t){var e=t.breadCrumbTitle,n=t.breadCrumbParent,i=t.breadCrumbParent2,s=t.breadCrumbParent3,l=t.breadCrumbActive;return Object(o.jsx)("div",{className:"content-header row",children:Object(o.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(o.jsx)("div",{className:"row breadcrumbs-top",children:Object(o.jsxs)("div",{className:"col-12",children:[e?Object(o.jsx)("h2",{className:"content-header-title float-left mb-0",children:e}):"",Object(o.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(o.jsxs)(c.a,{children:[Object(o.jsx)(r.a,{tag:"li",children:Object(o.jsx)(a.b,{to:"/",children:"Home"})}),n?Object(o.jsx)(r.a,{tag:"li",className:"text-primary",children:Object(o.jsx)(a.b,{to:"/".concat(n),children:n})}):"",i?Object(o.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",s?Object(o.jsx)(r.a,{tag:"li",className:"text-primary",children:s}):"",Object(o.jsx)(r.a,{tag:"li",active:!0,children:l})]})})]})})})})}},461:function(t,e,n){},531:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"i",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"n",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"k",(function(){return j})),n.d(e,"b",(function(){return b})),n.d(e,"o",(function(){return p})),n.d(e,"g",(function(){return O})),n.d(e,"e",(function(){return h})),n.d(e,"j",(function(){return m})),n.d(e,"l",(function(){return v})),n.d(e,"m",(function(){return E}));var a=n(452),c=n(453),r=n(451),o=function(){return{type:"CLEAR_DATA"}},i=function(t){return function(){var e=Object(c.a)(Object(a.a)().mark((function e(n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"GET_ALL_CRICKET_CONTEST_PRIZE"}),e.next=3,r.a.get("cricket/contest_prizes/list?page=".concat(t)).then((function(t){n({type:"CRICKET_CONTESTS_PRIZR",data:t.data.data})})).catch((function(){n({type:"GET_ALL_USERS_FAIL"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},s=function(t){return function(e){r.a.post("/cricket/contest_prizes/list",t).then((function(t){e({type:"CRICKET_CONTEST_PRIZE_ADD",data:t.data.data}),console.log(t.data.data)})).catch((function(t){console.log(t)}))}},l=function(t){return function(e){r.a.post("/cricket/contest_prizes/add",t).then((function(t){e({type:"ADD_CRICKET_CONTEST_PRIZE",data:t.data}),console.log(t)})).catch((function(t){return console.log(t)}))}},u=function(t){return function(e){r.a.put("/cricket/contest_prizes/view/".concat(t)).then((function(n){console.log(t),e({type:"VIEW_RICKET_CONTESTS_PRIZE",data:n.data}),console.log("this one",n.data)}))}},d=function(t){return function(e){r.a.put("/cricket/contest_prizes/edit/".concat(t)).then((function(n){console.log(t),e({type:"EDIT_RICKET_CONTESTS_PRIZE",data:n.data}),console.log("this one",n.data)}))}},f=function(t){return function(e){return r.a.delete("cricket/contest_prizes/delete/".concat(t)).then((function(n){console.log(t),e({type:"DELETE_PRIZE",data:n.data}),e(i())}))}},j=function(t){return function(){var e=Object(c.a)(Object(a.a)().mark((function e(n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"GET_ALL_CRICKET_CONTEST_PRIZE"}),e.next=3,r.a.get("/football/contest_prizes/list?page=".concat(t)).then((function(t){n({type:"FOOTBALL_CONTESTS_PRIZR",data:t.data.data})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(t){return function(e){r.a.post("/football/contest_prizes/add",t).then((function(t){e({type:"ADD_FOOTBALL_CONTEST_PRIZE",data:t.data})})).catch((function(t){return console.log(t)}))}},p=function(t){return function(e){r.a.put("/football/contest_prizes/view/".concat(t)).then((function(n){console.log(t),e({type:"VIEW_FOOTBALL_CONTESTS_PRIZE",data:n.data}),console.log("this one",n.data)}))}},O=function(t){return function(e){r.a.put("/football/contest_prizes/edit/".concat(t)).then((function(n){console.log(t),e({type:"EDIT_FOOTBALL_CONTESTS_PRIZE",data:n.data}),console.log("this one",n.data)}))}},h=function(t){return function(e){return r.a.delete("football/contest_prizes/delete/".concat(t)).then((function(n){console.log(t),e({type:"DELETE_PRIZE",data:n.data}),e(i())}))}},m=function(t){return function(e){r.a.post("/football/contest_prizes/list",t).then((function(t){e({type:"FOOTBALL_CONTEST_PRIZE_ADD",data:t.data.data}),console.log(t.data.data)})).catch((function(t){console.log(t)}))}},v=function(t){return console.log(t),function(){var e=Object(c.a)(Object(a.a)().mark((function e(n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("/cricket/series/list?page=".concat(t)).then((function(t){n({type:"CRICKET_SERIES_TOTAL",data:t.data}),console.log(t.data,"this")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(t){return function(){var e=Object(c.a)(Object(a.a)().mark((function e(n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("/football/series/list?page=".concat(t)).then((function(t){n({type:"FOOTBALL_SERIES_TOTAL",data:t.data}),console.log(t.data.data.records,"this")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=209.277d242d.chunk.js.map