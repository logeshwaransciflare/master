(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[208],{1509:function(e,t,n){"use strict";n.r(t);var a=n(452),c=n(453),r=n(0),o=n(17),i=n(482),s=n(468),u=n(467),l=n(469),d=n(484),j=n(464),f=n(465),b=n(787),p=n(483),O=n(466),h=n(445),m=n(457),x=n(477),_=n(470),E=n(1),v=n(531),g=n(120),C=(n(461),n(479)),T=n(6),y=[{value:"Fashion",label:"Fashion"},{value:"Coupon",label:"Coupon"},{value:"Electronics",label:"Electronics"}];t.default=function(){var e=Object(C.c)({defaultValues:{reactSelect:null}}),t=e.register,n=e.errors,R=e.handleSubmit,I=e.control,S=Object(E.useState)(!1),N=Object(o.a)(S,2),A=N[0],L=N[1],z=Object(g.b)(),P=Object(E.useState)({contest_id:"",name:"",prize_rank:"",caption:"",value:"",type:"",assets_url:""}),k=Object(o.a)(P,2),w=k[0],D=k[1],F=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){t(a.result)},a.onerror=function(e){n(e)}}))},Z=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],e.next=3,F(n);case 3:c=e.sent,D(Object(r.a)(Object(r.a)({},w),{},{assets_url:c}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)(E.Fragment,{children:[Object(T.jsx)(m.a,{breadCrumbTitle:"Football Contestsprize",breadCrumbParent:"contestsprize",breadCrumbActive:"Add"}),Object(T.jsxs)(i.a,{children:[Object(T.jsx)(s.a,{children:Object(T.jsx)(u.a,{tag:"h4",children:"Add Cricket Contest Prizes"})}),Object(T.jsx)(l.a,{children:Object(T.jsx)(d.a,{onSubmit:R((function(e){e.preventDefault(),L(!0),z(Object(v.b)(w))})),children:Object(T.jsxs)(j.a,{children:[Object(T.jsx)(f.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"id",children:"ID"}),Object(T.jsx)(O.a,{type:"number",name:"id",id:"id",innerRef:t({required:!0}),invalid:n.id&&!0,value:w.contest_id,onChange:function(e){return D(Object(r.a)(Object(r.a)({},w),{},{contest_id:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(T.jsx)(f.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"name",children:"Name"}),Object(T.jsx)(O.a,{type:"text",name:"name",id:"name",innerRef:t({required:!0}),invalid:n.name&&!0,value:w.name,onChange:function(e){return D(Object(r.a)(Object(r.a)({},w),{},{name:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(T.jsx)(f.a,{children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"caption",children:"Caption"}),Object(T.jsx)(O.a,{type:"text",name:"caption",id:"caption",innerRef:t({required:!0}),invalid:n.caption&&!0,value:w.caption,onChange:function(e){return D(Object(r.a)(Object(r.a)({},w),{},{caption:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(T.jsx)(f.a,{children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"nameVertical",children:"Category"}),Object(T.jsx)(C.a,{control:I,render:function(e){var t=Object.assign({},e.field);return Object(T.jsx)(x.a,Object(r.a)(Object(r.a)({},t),{},{defaultValue:y[0],onChange:function(e){return function(e){L(!1),console.log(A),D(Object(r.a)(Object(r.a)({},w),{},{type:e.value}))}(e)},options:y,theme:_.f,classNamePrefix:"select"}))},name:"reactSelect"})]})}),Object(T.jsx)(f.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"caption",children:"coins"}),Object(T.jsx)(O.a,{type:"number",name:"coins",id:"caption",innerRef:t({required:!0}),invalid:n.coins&&!0,value:w.value,onChange:function(e){return D(Object(r.a)(Object(r.a)({},w),{},{value:e.target.value}))},placeholder:"Enter No of Coins "})]})}),Object(T.jsx)(f.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"prize",children:"Prize Rank"}),Object(T.jsx)(O.a,{type:"number",name:"prize",id:"prize",innerRef:t({required:!0}),invalid:n.prize&&!0,value:w.prize_rank,onChange:function(e){return D(Object(r.a)(Object(r.a)({},w),{},{prize_rank:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(T.jsx)(f.a,{sm:"12",children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(p.a,{for:"customFile",children:"Custom File Input"}),Object(T.jsx)(O.a,{type:"file",id:"customFile",name:"customFile",innerRef:t({required:!0}),invalid:n.customFile&&!0,onChange:function(e){return Z(e)}})]})}),Object(T.jsx)(f.a,{sm:"12",children:Object(T.jsxs)(b.a,{className:"d-flex mb-0",children:[Object(T.jsx)(h.a.Ripple,{className:"mr-1",color:"primary",type:"submit",children:"Submit"}),Object(T.jsx)(h.a.Ripple,{outline:!0,color:"secondary",type:"reset",onClick:function(e){return function(e){e.preventDefault(),D({contest_id:"",name:"",caption:"",value:"",assets_url:""})}(e)},children:"Reset"})]})})]})})})]})]})}},451:function(e,t,n){"use strict";var a=n(0),c=n(80),r=n.n(c),o=localStorage.getItem("TOKEN"),i=r.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:o}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(a.a)(Object(a.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},457:function(e,t,n){"use strict";var a=n(458),c=n(480),r=n(481),o=n(6);t.a=function(e){var t=e.breadCrumbTitle,n=e.breadCrumbParent,i=e.breadCrumbParent2,s=e.breadCrumbParent3,u=e.breadCrumbActive;return Object(o.jsx)("div",{className:"content-header row",children:Object(o.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(o.jsx)("div",{className:"row breadcrumbs-top",children:Object(o.jsxs)("div",{className:"col-12",children:[t?Object(o.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(o.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(o.jsxs)(c.a,{children:[Object(o.jsx)(r.a,{tag:"li",children:Object(o.jsx)(a.b,{to:"/",children:"Home"})}),n?Object(o.jsx)(r.a,{tag:"li",className:"text-primary",children:Object(o.jsx)(a.b,{to:"/".concat(n),children:n})}):"",i?Object(o.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",s?Object(o.jsx)(r.a,{tag:"li",className:"text-primary",children:s}):"",Object(o.jsx)(r.a,{tag:"li",active:!0,children:u})]})})]})})})})}},461:function(e,t,n){},531:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"n",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"k",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"o",(function(){return p})),n.d(t,"g",(function(){return O})),n.d(t,"e",(function(){return h})),n.d(t,"j",(function(){return m})),n.d(t,"l",(function(){return x})),n.d(t,"m",(function(){return _}));var a=n(452),c=n(453),r=n(451),o=function(){return{type:"CLEAR_DATA"}},i=function(e){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"GET_ALL_CRICKET_CONTEST_PRIZE"}),t.next=3,r.a.get("cricket/contest_prizes/list?page=".concat(e)).then((function(e){n({type:"CRICKET_CONTESTS_PRIZR",data:e.data.data})})).catch((function(){n({type:"GET_ALL_USERS_FAIL"})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},s=function(e){return function(t){r.a.post("/cricket/contest_prizes/list",e).then((function(e){t({type:"CRICKET_CONTEST_PRIZE_ADD",data:e.data.data}),console.log(e.data.data)})).catch((function(e){console.log(e)}))}},u=function(e){return function(t){r.a.post("/cricket/contest_prizes/add",e).then((function(e){t({type:"ADD_CRICKET_CONTEST_PRIZE",data:e.data}),console.log(e)})).catch((function(e){return console.log(e)}))}},l=function(e){return function(t){r.a.put("/cricket/contest_prizes/view/".concat(e)).then((function(n){console.log(e),t({type:"VIEW_RICKET_CONTESTS_PRIZE",data:n.data}),console.log("this one",n.data)}))}},d=function(e){return function(t){r.a.put("/cricket/contest_prizes/edit/".concat(e)).then((function(n){console.log(e),t({type:"EDIT_RICKET_CONTESTS_PRIZE",data:n.data}),console.log("this one",n.data)}))}},j=function(e){return function(t){return r.a.delete("cricket/contest_prizes/delete/".concat(e)).then((function(n){console.log(e),t({type:"DELETE_PRIZE",data:n.data}),t(i())}))}},f=function(e){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"GET_ALL_CRICKET_CONTEST_PRIZE"}),t.next=3,r.a.get("/football/contest_prizes/list?page=".concat(e)).then((function(e){n({type:"FOOTBALL_CONTESTS_PRIZR",data:e.data.data})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(t){r.a.post("/football/contest_prizes/add",e).then((function(e){t({type:"ADD_FOOTBALL_CONTEST_PRIZE",data:e.data})})).catch((function(e){return console.log(e)}))}},p=function(e){return function(t){r.a.put("/football/contest_prizes/view/".concat(e)).then((function(n){console.log(e),t({type:"VIEW_FOOTBALL_CONTESTS_PRIZE",data:n.data}),console.log("this one",n.data)}))}},O=function(e){return function(t){r.a.put("/football/contest_prizes/edit/".concat(e)).then((function(n){console.log(e),t({type:"EDIT_FOOTBALL_CONTESTS_PRIZE",data:n.data}),console.log("this one",n.data)}))}},h=function(e){return function(t){return r.a.delete("football/contest_prizes/delete/".concat(e)).then((function(n){console.log(e),t({type:"DELETE_PRIZE",data:n.data}),t(i())}))}},m=function(e){return function(t){r.a.post("/football/contest_prizes/list",e).then((function(e){t({type:"FOOTBALL_CONTEST_PRIZE_ADD",data:e.data.data}),console.log(e.data.data)})).catch((function(e){console.log(e)}))}},x=function(e){return console.log(e),function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("/cricket/series/list?page=".concat(e)).then((function(e){n({type:"CRICKET_SERIES_TOTAL",data:e.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("/football/series/list?page=".concat(e)).then((function(e){n({type:"FOOTBALL_SERIES_TOTAL",data:e.data}),console.log(e.data.data.records,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=208.5a2ef309.chunk.js.map