(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[164],{1525:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(16),c=a(491),i=a(502),s=a(500),o=a(496),l=a(487),u=a(472),d=a(471),f=a(887),b=a(484),j=a(473),h=a(453),m=a(497),p=a.n(m),O=a(463),v=a(476),g=a(475),x=a(1),_=a(567),E=a(122),y=(a(469),a(6)),T=[{value:"1",label:"Live"},{value:"2",label:"Upcoming"},{value:"3",label:"Completed"},{value:"4",label:"Cancelled"}],C=[{value:"ODI",label:"ODI"},{value:"T20I",label:"T20I"},{value:"WOMANODI",label:"WOMANODI"},{value:"T20",label:"T20"}];t.default=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.series})).view_football_series;console.log(t);var a=Object(x.useState)(),m=Object(r.a)(a,2),N=m[0],S=m[1];Object(x.useEffect)((function(){e(_.l)}),[t]),Object(x.useEffect)((function(){S({series_name:null===t||void 0===t?void 0:t.series_name,series_api_id:null===t||void 0===t?void 0:t.series_api_id,series_sh:null===t||void 0===t?void 0:t.series_sh,date_time:null===t||void 0===t?void 0:t.date_time,series_status:null===t||void 0===t?void 0:t.series_status,series_logo:null===t||void 0===t?void 0:t.series_logo,type:null===t||void 0===t?void 0:t.type,active:null===t||void 0===t?void 0:t.active})}),[t]),console.log(null===t||void 0===t?void 0:t.series_name),console.log(N);return Object(y.jsxs)(x.Fragment,{children:[Object(y.jsx)(O.a,{breadCrumbTitle:"Football Series",breadCrumbParent:"Footballseries",breadCrumbActive:"Edit"}),Object(y.jsxs)(c.a,{children:[Object(y.jsx)(i.a,{children:Object(y.jsx)(s.a,{tag:"h4",children:"Edit Football Series"})}),Object(y.jsx)(o.a,{children:Object(y.jsx)(l.a,{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(f.a,{children:[Object(y.jsx)(b.a,{for:"EmailVertical",children:"series Name"}),Object(y.jsx)(j.a,{type:"name",name:"Email",id:"EmailVertical",value:null===N||void 0===N?void 0:N.series_name,onChange:function(e){return S(Object(n.a)(Object(n.a)({},N),{},{series_name:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(f.a,{children:[Object(y.jsx)(b.a,{children:"series_api_id"}),Object(y.jsx)(j.a,{type:"number",name:"name",id:"nameVertical",value:null===N||void 0===N?void 0:N.series_api_id,onChange:function(e){return S(Object(n.a)(Object(n.a)({},N),{},{series_api_id:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(y.jsx)(d.a,{children:Object(y.jsxs)(f.a,{children:[Object(y.jsx)(b.a,{for:"nameVertical",children:"series_sh"}),Object(y.jsx)(j.a,{type:"text",name:"name",id:"nameVertical",value:null===N||void 0===N?void 0:N.series_sh,onChange:function(e){return S(Object(n.a)(Object(n.a)({},N),{},{series_sh:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(f.a,{children:[Object(y.jsx)(b.a,{for:"date-time-picker",children:"date Time"}),Object(y.jsx)(p.a,{"data-enable-time":!0,id:"date-time-picker",className:"form-control",value:null===N||void 0===N?void 0:N.date_time,options:{enableTime:!0,dateFormat:"Y-m-d H:i:s",defaultDate:N?N.date_time:new Date},onChange:function(e,t){var a=e[0];S(Object(n.a)(Object(n.a)({},N),{},{date_time:t})),console.log({firstDate:a,dateStr:t})}})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(f.a,{children:[Object(y.jsx)(b.a,{for:"nameVertical",children:"series_status"}),Object(y.jsx)(v.a,{theme:g.f,className:"react-select",classNamePrefix:"select",defaultValue:T[0],onChange:function(e){return function(e){S(Object(n.a)(Object(n.a)({},N),{},{series_status:e.value}))}(e)},options:T,isClearable:!1})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(f.a,{children:[Object(y.jsx)(b.a,{for:"EmailVertical",children:"Series Logo"}),Object(y.jsx)(j.a,{type:"number",name:"Email",id:"EmailVertical",value:null===N||void 0===N?void 0:N.series_logo,onChange:function(e){return S(Object(n.a)(Object(n.a)({},N),{},{series_logo:e.target.value}))},placeholder:"Enter No of Coins "})]})}),Object(y.jsx)(d.a,{children:Object(y.jsxs)(f.a,{children:[Object(y.jsx)(b.a,{for:"nameVertical",children:"Type"}),Object(y.jsx)(v.a,{theme:g.f,className:"react-select",classNamePrefix:"select",defaultValue:C[0],onChange:function(e){return function(e){S(Object(n.a)(Object(n.a)({},N),{},{type:e.value}))}(e)},options:C,isClearable:!1})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsxs)(f.a,{children:[Object(y.jsx)(b.a,{for:"EmailVertical",children:"Active"}),Object(y.jsx)(j.a,{type:"number",name:"Email",id:"EmailVertical",value:null===N||void 0===N?void 0:N.active,onChange:function(e){return S(Object(n.a)(Object(n.a)({},N),{},{active:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(y.jsx)(d.a,{sm:"12",children:Object(y.jsx)(f.a,{className:"d-flex mb-0",children:Object(y.jsx)(h.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(a){return function(a){a.preventDefault(),console.log(N),e(Object(_.e)(t.id,N))}(a)},children:"Submit"})})})]})})})]})]})}},457:function(e,t,a){"use strict";var n=a(0),r=a(83),c=a.n(r),i=localStorage.getItem("TOKEN"),s=c.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:i}});s.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(n.a)(Object(n.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=s},463:function(e,t,a){"use strict";var n=a(466),r=a(481),c=a(482),i=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,s=e.breadCrumbParent2,o=e.breadCrumbParent3,l=e.breadCrumbActive;return Object(i.jsx)("div",{className:"content-header row",children:Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[t?Object(i.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(c.a,{tag:"li",children:Object(i.jsx)(n.b,{to:"/",children:"Home"})}),a?Object(i.jsx)(c.a,{tag:"li",className:"text-primary",children:Object(i.jsx)(n.b,{to:"/".concat(a),children:a})}):"",s?Object(i.jsx)(c.a,{tag:"li",className:"text-primary",children:s}):"",o?Object(i.jsx)(c.a,{tag:"li",className:"text-primary",children:o}):"",Object(i.jsx)(c.a,{tag:"li",active:!0,children:l})]})})]})})})})}},469:function(e,t,a){},484:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(1),i=a.n(c),s=a(5),o=a.n(s),l=a(57),u=a.n(l),d=a(82),f=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),j={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},p=function(e){var t=e.className,a=e.cssModule,c=e.hidden,s=e.widths,o=e.tag,l=e.check,f=e.size,b=e.for,j=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];s.forEach((function(t,n){var r=e[t];if(delete j[t],r||""===r){var c,i=!n;if(Object(d.isObject)(r)){var s,o=i?"-":"-"+t+"-";c=m(i,t,r.size),h.push(Object(d.mapToCssModules)(u()(((s={})[c]=r.size||""===r.size,s["order"+o+r.order]=r.order||0===r.order,s["offset"+o+r.offset]=r.offset||0===r.offset,s))),a)}else c=m(i,t,r),h.push(c)}}));var p=Object(d.mapToCssModules)(u()(t,!!c&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),a);return i.a.createElement(o,Object(n.a)({htmlFor:b},j,{className:p}))};p.propTypes=j,p.defaultProps=h,t.a=p},487:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(58),i=a(121),s=a(1),o=a.n(s),l=a(5),u=a.n(l),d=a(57),f=a.n(d),b=a(82),j={children:u.a.node,inline:u.a.bool,tag:b.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(c.a)(a)),a.submit=a.submit.bind(Object(c.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.inline,i=e.tag,s=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(b.mapToCssModules)(f()(t,!!c&&"form-inline"),a);return o.a.createElement(i,Object(n.a)({},l,{ref:s,className:u}))},t}(s.Component);h.propTypes=j,h.defaultProps={tag:"form"},t.a=h},567:function(e,t,a){"use strict";a.d(t,"h",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"l",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"a",(function(){return f})),a.d(t,"k",(function(){return b})),a.d(t,"d",(function(){return j})),a.d(t,"i",(function(){return h})),a.d(t,"j",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"c",(function(){return O}));var n=a(458),r=a(459),c=a.n(r),i=a(457),s=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_ALL_SERIES_INIT"}),t.next=3,i.a.get("/football/series/list?page=".concat(e)).then((function(e){a({type:"GET_FOOTBALL_SERIES",data:e.data.data})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},o=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/football/series/add",e).then((function(e){a({type:"FOOTBALL_SERIES_ADD",data:e.data.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(e,t){return function(a){i.a.put("/football/series/view/".concat(e)).then((function(e){console.log(e.data.data),a({type:"VIEW_FOOTBALL_SERIES",data:e.data,seriesView:t}),console.log("this one",e.data)}))}},u=function(e,t){return function(a){i.a.put("/football/series/edit/".concat(e),t).then((function(e){console.log(e),a({type:"EDIT_FOOTBALL_SERIES",data:e.data}),console.log("this one",e.data)}))}},d=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_ALL_SERIES_INIT"}),t.next=3,i.a.get("/cricket/series/list?page=".concat(e)).then((function(e){a({type:"GET_CRICKET_SERIES",data:e.data.data})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/cricket/series/add",e).then((function(e){a({type:"CRICKET_SERIES_ADD",data:e.data.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e,t){return function(a){i.a.put("/cricket/series/view/".concat(e)).then((function(e){console.log(e.data.data),a({type:"VIEW_CRICKET_SERIES",data:e.data,seriesView:t}),console.log("this one",e.data)}))}},j=function(e,t){return function(a){i.a.put("/cricket/series/edit/".concat(e),t).then((function(e){console.log(e),a({type:"EDIT_CRICKET_SERIES",data:e.data}),console.log("this one",e.data)}))}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return function(){var o=Object(n.a)(c.a.mark((function n(o){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.get("/cricket/series/list?page=".concat(e,"&series_name=").concat(t,"&type=").concat(a,"&series_status=").concat(r,"&limit=").concat(s)).then((function(e){o({type:"SEARCH_CRICKET_USERS",data:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return o.apply(this,arguments)}}()},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return function(){var s=Object(n.a)(c.a.mark((function n(s){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.get("/football/series/list?page=".concat(e,"&series_name=").concat(t,"&series_status=").concat(a,"&limit=").concat(r)).then((function(e){s({type:"SEARCH_FOOTBALL_USERS",data:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return s.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"GET_DATA_PERPAGE",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(e){e({type:"CLEAR_DATA"})}}}}]);
//# sourceMappingURL=164.3eece42d.chunk.js.map