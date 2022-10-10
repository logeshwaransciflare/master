(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[110],{1535:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(16),c=a(491),s=a(502),i=a(500),o=a(496),u=a(487),l=a(472),d=a(471),f=a(887),b=a(484),p=a(473),j=a(453),h=a(497),m=a.n(h),O=a(463),x=a(476),g=a(475),v=a(1),_=a(519),y=a(520),T=a(122),E=(a(469),a(480)),N=a(6),A=[{value:"ODI",label:"ODI"},{value:"T20I",label:"T20I"},{value:"WOMANODI",label:"WOMANODI"}],w=[{value:"1",label:"Live"},{value:"2",label:"Upcomming"},{value:"3",label:"Completed"},{value:"4",label:"cancelled"}],R=[{value:"1",label:"Active"},{value:"0",label:"InActive"}],L={reactFlatpickr:null};t.default=function(){var e,t,a,h=Object(T.b)(),I=Object(E.c)({defaultValues:L}),C=I.register,F=I.errors,S=I.handleSubmit,k=Object(v.useState)({fixture_name:"",series_name:"",fixture_api_id:"",fixture_api:"",fixture_sh:"",date_time:"",fixture_status:"",venue:"",type:"",series_id:"",team_a:"",team_b:"",active:""}),D=Object(r.a)(k,2),P=D[0],B=D[1],M=Object(T.c)((function(e){return e.fix})),z=Object(T.c)((function(e){return e.banner}));console.log(z);Object(v.useEffect)((function(){h(Object(y.g)()),h(Object(_.v)())}),[]);var U=null===(e=z.football_name)||void 0===e?void 0:e.map((function(e){return{value:e.id,label:e.series_name}})),G=null===(t=M.football_teams)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.map((function(e){return{value:e.id,label:e.team_name}}));return Object(N.jsxs)(v.Fragment,{children:[Object(N.jsx)(O.a,{breadCrumbTitle:"Football Fixture",breadCrumbParent:"footballfixture",breadCrumbActive:"Add"}),Object(N.jsxs)(c.a,{children:[Object(N.jsx)(s.a,{children:Object(N.jsx)(i.a,{tag:"h4",children:"Add Football Fixture"})}),Object(N.jsx)(o.a,{children:Object(N.jsx)(u.a,{onSubmit:S((function(){h(Object(_.r)(P))})),children:Object(N.jsxs)(l.a,{children:[Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"fixture_name",children:"Fixture Name"}),Object(N.jsx)(p.a,{type:"text",name:"fixture_name",id:"fixture_name",innerRef:C({required:!0}),invalid:F.fixture_name&&!0,value:P.fixture_name,onChange:function(e){return B(Object(n.a)(Object(n.a)({},P),{},{fixture_name:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"apiId",children:"Fixture Api Id"}),Object(N.jsx)(p.a,{type:"number",name:"apiId",id:"apiId",innerRef:C({required:!0}),invalid:F.apiId&&!0,value:P.fixture_api_id,onChange:function(e){return B(Object(n.a)(Object(n.a)({},P),{},{fixture_api_id:e.target.value}))},placeholder:"Enter No of ID ",onWheel:function(e){return e.target.blur()}})]})}),Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"series",children:"Series Name"}),Object(N.jsx)(p.a,{type:"name",name:"series",id:"series",innerRef:C({required:!0}),invalid:F.series&&!0,value:P.series_name,onChange:function(e){return B(Object(n.a)(Object(n.a)({},P),{},{series_name:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"api",children:"Fixture Api"}),Object(N.jsx)(p.a,{type:"Fixturename",name:"api",id:"api",innerRef:C({required:!0}),invalid:F.api&&!0,value:P.fixture_api,onChange:function(e){return B(Object(n.a)(Object(n.a)({},P),{},{fixture_api:e.target.value}))},placeholder:"Enter No of ID "})]})}),Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"fixture",children:"Fixture Sh"}),Object(N.jsx)(p.a,{type:"text",name:"fixture",id:"fixture",innerRef:C({required:!0}),invalid:F.fixture&&!0,value:P.fixture_sh,onChange:function(e){return B(Object(n.a)(Object(n.a)({},P),{},{fixture_sh:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"reactFlatpickr",children:"Date & Time"}),Object(N.jsx)(m.a,{"data-enable-time":!0,id:"picker",tag:m.a,name:"picker",value:P.expires_at,onChange:function(e){return function(e){var t=new Date(e),a="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()," ").concat(t.getHours(),":").concat(t.getMinutes());B(Object(n.a)(Object(n.a)({},P),{},{date_time:a}))}(e)},className:"form-control",options:{enableTime:!0,dateFormat:"Y-M-d H:i:s",minDate:"today",time_24hr:!0}})]})}),Object(N.jsx)(d.a,{className:"mb-1",md:"4",sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"type",children:"Status"}),Object(N.jsx)(x.a,{theme:g.f,className:"react-select",classNamePrefix:"select",Value:P.fixture_status,onChange:function(e){return t=e,void B(Object(n.a)(Object(n.a)({},P),{},{fixture_status:t.value}));var t},options:w,isClearable:!1})]})}),Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"venue",children:"venue "}),Object(N.jsx)(p.a,{type:"text",name:"venue",id:"venue",innerRef:C({required:!0}),invalid:F.venue&&!0,value:P.venue,onChange:function(e){return B(Object(n.a)(Object(n.a)({},P),{},{venue:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"type",children:"type"}),Object(N.jsx)(x.a,{theme:g.f,className:"react-select",classNamePrefix:"select",defaultValue:A[0],onChange:function(e){return function(e){B(Object(n.a)(Object(n.a)({},P),{},{type:e.value}))}(e)},options:A,isClearable:!1})]})}),Object(N.jsxs)(d.a,{className:"mb-1",md:"4",sm:"12",children:[Object(N.jsx)(b.a,{children:"Football Series"}),Object(N.jsx)(x.a,{isClearable:!1,theme:g.f,className:"react-select",classNamePrefix:"select",options:U,menuPortalTarget:document.querySelector("body"),onChange:function(e){var t;t=e,B(Object(n.a)(Object(n.a)({},P),{},{series_id:t.value}))}})]}),Object(N.jsxs)(d.a,{className:"mb-1",md:"4",sm:"12",children:[Object(N.jsx)(b.a,{children:"Team A"}),Object(N.jsx)(x.a,{isClearable:!1,theme:g.f,className:"react-select",menuPortalTarget:document.querySelector("body"),classNamePrefix:"select",options:G,onChange:function(e){var t;t=e,B(Object(n.a)(Object(n.a)({},P),{},{team_a:t.value}))}})]}),Object(N.jsxs)(d.a,{className:"mb-1",md:"4",sm:"12",children:[Object(N.jsx)(b.a,{children:"Team B"}),Object(N.jsx)(x.a,{isClearable:!1,menuPortalTarget:document.querySelector("body"),theme:g.f,className:"react-select",classNamePrefix:"select",options:G,onChange:function(e){var t;t=e,B(Object(n.a)(Object(n.a)({},P),{},{team_b:t.value}))}})]}),Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{for:"type",children:"Active"}),Object(N.jsx)(x.a,{theme:g.f,className:"react-select",classNamePrefix:"select",Value:P.active,onChange:function(e){return t=e,void B(Object(n.a)(Object(n.a)({},P),{},{active:t.value}));var t},options:R,isClearable:!1})]})}),Object(N.jsx)(d.a,{sm:"12",children:Object(N.jsxs)(f.a,{className:"d-flex mb-0",children:[Object(N.jsx)(j.a.Ripple,{className:"mr-1",color:"primary",type:"submit",children:"Submit"}),Object(N.jsx)(j.a.Ripple,{outline:!0,color:"secondary",type:"reset",onClick:function(e){B({fixture_name:"",series_name:"",fixture_api_id:"",fixture_api:"",fixture_sh:"",date_time:"",fixture_status:"",venue:"",type:"",series_id:"",team_a:"",team_b:"",active:""})},children:"Reset"})]})})]})})})]})]})}},457:function(e,t,a){"use strict";var n=a(0),r=a(83),c=a.n(r),s=localStorage.getItem("TOKEN"),i=c.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:s}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(n.a)(Object(n.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},460:function(e,t,a){"use strict";a.d(t,"e",(function(){return h})),a.d(t,"b",(function(){return m})),a.d(t,"d",(function(){return O})),a.d(t,"c",(function(){return x})),a.d(t,"a",(function(){return g})),a.d(t,"f",(function(){return v}));var n=a(1),r=a(123),c=a(470),s=(a(811),a(754)),i=a(886),o=a(812),u=(a(755),a(491),a(502),a(500),a(496),a(453),a(6)),l=function(e){var t=e.message;return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(c.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(c.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})})})},f=function(e){var t=e.message;return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(c.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})})})},b=function(e){var t=e.message;return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(c.a,{size:"sm",color:"success",icon:Object(u.jsx)(s.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})}),Object(u.jsx)("div",{className:"toastify-body"})]})},p=function(e){var t=e.message;return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(c.a,{size:"sm",color:"danger",icon:Object(u.jsx)(i.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:t})]})}),Object(u.jsx)("div",{className:"toastify-body"})]})},j=function(){return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("div",{className:"toastify-header",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(c.a,{size:"sm",color:"warning",icon:Object(u.jsx)(o.a,{size:12})}),Object(u.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(u.jsx)("div",{className:"toastify-body",children:Object(u.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},h=function(e){return r.b.success(Object(u.jsx)(l,{message:e}),{hideProgressBar:!0})},m=function(e){return r.b.success(Object(u.jsx)(d,{message:e}),{hideProgressBar:!0})},O=function(e){return r.b.success(Object(u.jsx)(f,{message:e}),{hideProgressBar:!0})},x=function(e){return r.b.success(Object(u.jsx)(b,{message:e}),{hideProgressBar:!0})},g=function(e){return r.b.error(Object(u.jsx)(p,{message:e}),{hideProgressBar:!0})},v=function(){return r.b.warning(Object(u.jsx)(j,{}),{hideProgressBar:!0})}},463:function(e,t,a){"use strict";var n=a(466),r=a(481),c=a(482),s=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,i=e.breadCrumbParent2,o=e.breadCrumbParent3,u=e.breadCrumbActive;return Object(s.jsx)("div",{className:"content-header row",children:Object(s.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(s.jsx)("div",{className:"row breadcrumbs-top",children:Object(s.jsxs)("div",{className:"col-12",children:[t?Object(s.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(s.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(s.jsxs)(r.a,{children:[Object(s.jsx)(c.a,{tag:"li",children:Object(s.jsx)(n.b,{to:"/",children:"Home"})}),a?Object(s.jsx)(c.a,{tag:"li",className:"text-primary",children:Object(s.jsx)(n.b,{to:"/".concat(a),children:a})}):"",i?Object(s.jsx)(c.a,{tag:"li",className:"text-primary",children:i}):"",o?Object(s.jsx)(c.a,{tag:"li",className:"text-primary",children:o}):"",Object(s.jsx)(c.a,{tag:"li",active:!0,children:u})]})})]})})})})}},469:function(e,t,a){},471:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(1),s=a.n(c),i=a(5),o=a.n(i),u=a(57),l=a.n(u),d=a(82),f=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:f,offset:f})]),p={tag:d.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:o.a.string,cssModule:o.a.object,widths:o.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},m=function(e){var t=e.className,a=e.cssModule,c=e.widths,i=e.tag,o=Object(r.a)(e,["className","cssModule","widths","tag"]),u=[];c.forEach((function(t,n){var r=e[t];if(delete o[t],r||""===r){var c=!n;if(Object(d.isObject)(r)){var s,i=c?"-":"-"+t+"-",f=h(c,t,r.size);u.push(Object(d.mapToCssModules)(l()(((s={})[f]=r.size||""===r.size,s["order"+i+r.order]=r.order||0===r.order,s["offset"+i+r.offset]=r.offset||0===r.offset,s)),a))}else{var b=h(c,t,r);u.push(b)}}})),u.length||u.push("col");var f=Object(d.mapToCssModules)(l()(t,u),a);return s.a.createElement(i,Object(n.a)({},o,{className:f}))};m.propTypes=p,m.defaultProps=j,t.a=m},472:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(1),s=a.n(c),i=a(5),o=a.n(i),u=a(57),l=a.n(u),d=a(82),f=o.a.oneOfType([o.a.number,o.a.string]),b={tag:d.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,a=e.cssModule,c=e.noGutters,i=e.tag,o=e.form,u=e.widths,f=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];u.forEach((function(t,a){var n=e[t];if(delete f[t],n){var r=!a;b.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var p=Object(d.mapToCssModules)(l()(t,c?"no-gutters":null,o?"form-row":"row",b),a);return s.a.createElement(i,Object(n.a)({},f,{className:p}))};j.propTypes=b,j.defaultProps=p,t.a=j},473:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(58),s=a(121),i=a(1),o=a.n(i),u=a(5),l=a.n(u),d=a(57),f=a.n(d),b=a(82),p={children:l.a.node,type:l.a.string,size:l.a.oneOfType([l.a.number,l.a.string]),bsSize:l.a.string,valid:l.a.bool,invalid:l.a.bool,tag:b.tagPropType,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),plaintext:l.a.bool,addon:l.a.bool,className:l.a.string,cssModule:l.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(c.a)(a)),a.focus=a.focus.bind(Object(c.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.type,s=e.bsSize,i=e.valid,u=e.invalid,l=e.tag,d=e.addon,p=e.plaintext,j=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),m=["radio","checkbox"].indexOf(c)>-1,O=new RegExp("\\D","g"),x=l||("select"===c||"textarea"===c?c:"input"),g="form-control";p?(g+="-plaintext",x=l||"input"):"file"===c?g+="-file":"range"===c?g+="-range":m&&(g=d?null:"form-check-input"),h.size&&O.test(h.size)&&(Object(b.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var v=Object(b.mapToCssModules)(f()(t,u&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,g),a);return("input"===x||l&&"function"===typeof l)&&(h.type=c),h.children&&!p&&"select"!==c&&"string"===typeof x&&"select"!==x&&(Object(b.warnOnce)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(x,Object(n.a)({},h,{ref:j,className:v,"aria-invalid":u}))},t}(o.a.Component);j.propTypes=p,j.defaultProps={type:"text"},t.a=j},481:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(1),s=a.n(c),i=a(5),o=a.n(i),u=a(57),l=a.n(u),d=a(82),f={tag:d.tagPropType,listTag:d.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},b=function(e){var t=e.className,a=e.listClassName,c=e.cssModule,i=e.children,o=e.tag,u=e.listTag,f=e["aria-label"],b=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.mapToCssModules)(l()(t),c),j=Object(d.mapToCssModules)(l()("breadcrumb",a),c);return s.a.createElement(o,Object(n.a)({},b,{className:p,"aria-label":f}),s.a.createElement(u,{className:j},i))};b.propTypes=f,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=b},482:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(1),s=a.n(c),i=a(5),o=a.n(i),u=a(57),l=a.n(u),d=a(82),f={tag:d.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.active,i=e.tag,o=Object(r.a)(e,["className","cssModule","active","tag"]),u=Object(d.mapToCssModules)(l()(t,!!c&&"active","breadcrumb-item"),a);return s.a.createElement(i,Object(n.a)({},o,{className:u,"aria-current":c?"page":void 0}))};b.propTypes=f,b.defaultProps={tag:"li"},t.a=b},487:function(e,t,a){"use strict";var n=a(14),r=a(15),c=a(58),s=a(121),i=a(1),o=a.n(i),u=a(5),l=a.n(u),d=a(57),f=a.n(d),b=a(82),p={children:l.a.node,inline:l.a.bool,tag:b.tagPropType,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),className:l.a.string,cssModule:l.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(c.a)(a)),a.submit=a.submit.bind(Object(c.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.inline,s=e.tag,i=e.innerRef,u=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),l=Object(b.mapToCssModules)(f()(t,!!c&&"form-inline"),a);return o.a.createElement(s,Object(n.a)({},u,{ref:i,className:l}))},t}(i.Component);j.propTypes=p,j.defaultProps={tag:"form"},t.a=j},519:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"j",(function(){return u})),a.d(t,"g",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"k",(function(){return f})),a.d(t,"c",(function(){return b})),a.d(t,"y",(function(){return p})),a.d(t,"e",(function(){return j})),a.d(t,"l",(function(){return h})),a.d(t,"r",(function(){return m})),a.d(t,"d",(function(){return O})),a.d(t,"z",(function(){return x})),a.d(t,"f",(function(){return g})),a.d(t,"m",(function(){return v})),a.d(t,"h",(function(){return _})),a.d(t,"i",(function(){return y})),a.d(t,"w",(function(){return T})),a.d(t,"x",(function(){return E})),a.d(t,"n",(function(){return N})),a.d(t,"p",(function(){return A})),a.d(t,"t",(function(){return w})),a.d(t,"o",(function(){return R})),a.d(t,"s",(function(){return L})),a.d(t,"u",(function(){return I})),a.d(t,"q",(function(){return C})),a.d(t,"v",(function(){return F}));var n=a(458),r=a(459),c=a.n(r),s=a(457),i=a(460),o=function(){return{type:"CLEAR_DATA"}},u=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/cricket/fixture/list?page=".concat(e)).then((function(e){a({type:"CRICKET_FIXTURE",data:e.data.data})})).catch((function(){a({type:"GET_ALL_USERS_FAIL"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e,t),a.next=3,s.a.get("/cricket/fixture/show/".concat(e,"?page=").concat(t)).then((function(e){n({type:"CRICKET_FIXTURE_SHOW",data:e.data.data}),console.log(e.data.data)})).catch((function(){n({type:"GET_ALL_USERS_FAIL"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/cricket/contests/show/".concat(e)).then((function(e){a({type:"CRICKET_CONTEST_SHOW",data:e.data.data})})).catch((function(){a({type:"GET_ALL_USERS_FAIL"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(t){s.a.post("/cricket/fixture/add",e).then((function(e){Object(i.b)(e.data.message),t({type:"CRICKETFIXTURE_ADD",data:e.data})})).catch((function(e){Object(i.a)(e.response.data.message)}))}},b=function(e){return function(t){return s.a.delete("cricket/fixture/delete/".concat(e)).then((function(e){Object(i.b)("successfully deleted"),t({type:"DELETE_CRICKET_FIXTURE",data:e.data.data}),t(u())})).catch((function(){Object(i.a)("error")}))}},p=function(e,t){return function(a){s.a.put("/cricket/fixture/view/".concat(e)).then((function(e){Object(i.b)(e.data.message),console.log(e.data.data),a({type:"VIEW_FIXTURE",data:e.data,prizesEdit:t}),console.log("this one",e.data)})).catch((function(e){Object(i.a)(e.response.data.message)}))}},j=function(e,t){return function(a){s.a.put("/cricket/fixture/edit/".concat(e),t).then((function(e){console.log(e),Object(i.b)(e.data.message),a({type:"EDIT_FIXTURES",data:e.data}),console.log("this one",e.data)})).catch((function(e){Object(i.a)(e.response.data.message)}))}},h=function(e){return function(t){s.a.post("/cricket/fixture/list",e).then((function(e){t({type:"CRICKET_FIXTURE_ADD",data:e.data}),console.log(e.data.data)})).catch((function(e){console.log(e)}))}},m=function(e){return function(t){s.a.post("/football/fixture/add",e).then((function(e){Object(i.b)(e.data.message),t({type:"FOOTBALLFIXTURE_ADD",data:e.data})})).catch((function(e){return console.log(e)}))}},O=function(e){return function(t){return s.a.delete("football/fixture/delete/".concat(e)).then((function(e){var a;Object(i.a)("successfully deleted"),t({type:"DELETE_FOOTBALL_FIXTURE",data:e.data.data}),t(function(){var e=Object(n.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/football/fixture/list?page=".concat(a)).then((function(e){t({type:"FOOTBALL_FIXTURE",data:e.data.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})).catch((function(){Object(i.a)("error")}))}},x=function(e,t){return function(a){s.a.put("/football/fixture/view/".concat(e)).then((function(e){console.log(e.data.data),Object(i.b)(e.data.message),a({type:"VIEW_FOOTBALL_FIXTURE",data:e.data,prizesEdit:t}),console.log("this one",e.data)}))}},g=function(e,t){return function(a){s.a.put("/football/fixture/edit/".concat(e),t).then((function(e){Object(i.b)(e.data.message),a({type:"EDIT_FOOTBALL_FIXTURES",data:e.data}),console.log("this one",e.data)}))}},v=function(e){return function(t){s.a.post("/football/fixture/list",e).then((function(e){t({type:"FOOTBALL_FIXTURE_ADD",data:e.data}),console.log(e.data.data)})).catch((function(e){console.log(e)}))}},_=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.post("/cricket/fixture/toggle_active/".concat(e)).then((function(){Object(i.b)("Successfully Updated"),n({type:"FIXTURE_TOGGLE_STATUS",data:t})})).catch((function(e){Object(i.a)(e.message?e.message:"error")}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},y=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.post("/football/fixture/toggle_active/".concat(e)).then((function(e){Object(i.b)(e.data.message),n({type:"FIXTURE_FOOTBALL_TOGGLE_STATUS",data:t})})).catch((function(e){console.log("Error in Feed Post: ",e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var r=Object(n.a)(c.a.mark((function n(r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.get("/cricket/fixture/list?page=".concat(e,"&type=").concat(t,"&fixture_status=").concat(a)).then((function(e){r({type:"SEARCH_CRICKET_FIXTURE",data:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return r.apply(this,arguments)}}()},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var r=Object(n.a)(c.a.mark((function n(r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.get("/football/fixture/list?page=".concat(e,"&type=").concat(t,"&fixture_status=").concat(a)).then((function(e){r({type:"SEARCH_FOOTBALL_FIXTURE",data:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return r.apply(this,arguments)}}()},N=function(e){return console.log(e),function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/cricket/series/list?page=".concat(e)).then((function(e){a({type:"CRICKET_SERIES_TOTAL",data:e.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return function(){var l=Object(n.a)(c.a.mark((function n(l){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l({type:"SET_DOWNLOAD_ON"}),n.next=3,s.a.get(o&&u?"/cricket/fixture/list?series_id=".concat(e,"&fixture_id=").concat(t,"&type=").concat(a,"&fixture_status=").concat(r,"&from=").concat(o,"&to=").concat(u,"&download=true"):"/cricket/reports/contestReport?download=true",{responseType:"blob"}).then((function(e){Object(i.b)("succesfully downloaded");var t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download","cricketFixture.csv"),document.body.appendChild(a),a.click(),l({type:"SET_DOWNLOAD_OFF"})})).catch((function(){l({type:"SET_DOWNLOAD_OFF"}),Object(i.a)("Download Failed")}));case 3:case"end":return n.stop()}}),n)})));return function(e){return l.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return function(){var u=Object(n.a)(c.a.mark((function n(u){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u({type:"SET_DOWNLOAD_ON"}),n.next=3,s.a.get(r&&o?"/football/fixture/list?series_id=".concat(e,"&fixture_id=").concat(t,"&fixture_status=").concat(a,"&from=").concat(r,"&to=").concat(o,"&download=true"):"/cricket/reports/contestReport?download=true",{responseType:"blob"}).then((function(e){Object(i.b)("succesfully downloaded");var t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download","footbalFixture.csv"),document.body.appendChild(a),a.click(),u({type:"SET_DOWNLOAD_OFF"})})).catch((function(){u({type:"SET_DOWNLOAD_OFF"}),Object(i.a)("Download Failed")}));case 3:case"end":return n.stop()}}),n)})));return function(e){return u.apply(this,arguments)}}()},R=function(e){return function(t){t({type:"GET_CRICKET_DATE_RANGE",data:e})}},L=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/football/series/list?page=".concat(e)).then((function(e){a({type:"FOOTBALL_SERIES_TOTAL",data:e.data}),console.log(e.data.data.records,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return console.log(e),function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/football/series/list?page=".concat(e)).then((function(e){a({type:"FOOTBALL_SERIES_TOTAL",data:e.data.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/cricket/team/list?page=".concat(e)).then((function(e){a({type:"GET_CRICKET_TEAMS",data:e.data.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/football/team/list?page=".concat(e)).then((function(e){a({type:"GET_FOOTBALL_TEAMS",data:e.data.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},520:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"g",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"i",(function(){return f})),a.d(t,"a",(function(){return b})),a.d(t,"j",(function(){return p})),a.d(t,"c",(function(){return j})),a.d(t,"f",(function(){return h})),a.d(t,"h",(function(){return m}));var n=a(458),r=a(459),c=a.n(r),s=a(457),i=a(460),o=function(){return function(){var e=Object(n.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/cricket/series/list").then((function(e){t({type:"CRICKET_SERIES_NAME",data:e.data.data}),console.log(e.data.data,"this")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},u=function(){return function(){var e=Object(n.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/football/series/list").then((function(e){t({type:"FOOTBAL_SERIES_NAME",data:e.data.data}),console.log(e.data.data,"this")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"GET_ALL_BANNER_DATA_INIT"}),a.next=3,s.a.post("/banner/toggle_active/".concat(e)).then((function(e){Object(i.b)(e.data.message),n({type:"BANNER_TOGGLE_STATUS",data:t}),console.log(t)})).catch((function(e){Object(i.a)(e.message),console.log("Error in Feed Post: ",e)}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var a=Object(n.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"GET_ALL_BANNER_DATA_INIT"}),a.next=3,s.a.get("/banner/list?page=".concat(e,"&sports=cricket&limit=").concat(t)).then((function(e){n({type:"GET_ALL_BANNER_TYPE",data:e.data.data})})).catch((function(){n({type:"GET_ALL_BANNER_DATA_FAIL"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var a=Object(n.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"GET_ALL_BANNER_DATA_INIT"}),a.next=3,s.a.get("/banner/list?page=".concat(e,"&sports=football&limit=").concat(t)).then((function(e){console.log(e.data.data),n({type:"GET_FOOTBALL_BANNER_LIST",data:e.data.data})})).catch((function(){n({type:"GET_ALL_BANNER_DATA_FAIL"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(t){s.a.post("/banner/add",e).then((function(e){Object(i.b)(e.data.message),t({type:"BANNER_ADD",data:e.data})})).catch((function(e){Object(i.a)(e.message)}))}},p=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_ALL_BANNER_DATA_INIT"}),t.next=3,s.a.get("/banner/".concat(e)).then((function(e){Object(i.b)(e.data.message),console.log("Respont : ",e),a({type:"GET_BANNER_VIEW",data:e.data.data})})).catch((function(e){console.log("Error in View banner: ",e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"GET_ALL_BANNER_DATA_INIT"}),a.next=3,s.a.post("/banner/update/".concat(e),t).then((function(e){Object(i.b)(e.data.message),console.log("Respont : ",e),n({type:"EDIT_BANNER_POST",data:e.data})})).catch((function(e){Object(i.a)(e.message)}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},h=function(e){return console.log(e),function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/cricket/series/list?page=".concat(e)).then((function(e){a({type:"CRICKET_SERIES_TOTAL",data:e.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return console.log(e),function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/football/series/list?page=".concat(e)).then((function(e){a({type:"FOOTBALL_SERIES_TOTAL",data:e.data}),console.log(e.data,"this")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=110.0258136e.chunk.js.map