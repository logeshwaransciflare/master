(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[80],{1530:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(119),s=n.n(r),o=n(477),c=n(489),i=n.n(c),l=n(470),u=n(479),f=n(676),d=n(120),p=n(484),b=n(464),j=n(787),m=n(465),g=n(483),O=n(466),h=n(445),y=n(506),v=(n(461),n(476),n(6)),x=[{value:"Cricket",label:"Cricket"},{value:"Football",label:"Football"},{value:"Basketball",label:"Basketball"}],z=[{value:"1",label:"English"},{value:"2",label:"Arabic"}];t.default=function(e){var t=e.stepper,n=Object(d.b)(),r=Object(u.c)({}),c=r.register,N=r.errors,w=r.handleSubmit,T=r.control,_=r.trigger;return Object(v.jsxs)(a.Fragment,{children:[Object(v.jsx)("div",{className:"content-header",children:Object(v.jsx)("h5",{className:"mb-0",children:"Quiz Details"})}),Object(v.jsxs)(p.a,{onSubmit:w((function(e){console.log(e);var a={quiz_coins:e.quiz_coins,quiz_expiry:e.quiz_expiry[0],quiz_category:e.quiz_category.value,translation_quiz:[{master_language_id:e.quiz_lang.value,translation_quiz_name:e.quiz_name}]};n(Object(y.b)(a)),n(Object(y.e)(e.quiz_lang.value)),_(),console.log(a),t.next()})),children:[Object(v.jsxs)(b.a,{children:[Object(v.jsxs)(j.a,{tag:m.a,md:"6",children:[Object(v.jsx)(g.a,{className:"form-label",for:"quiz_name",children:"quiz_name"}),Object(v.jsx)(O.a,{name:"quiz_name",id:"quiz_name",placeholder:"Quiz name",innerRef:c({required:!0}),className:s()({"is-invalid":N.quiz_name})})]}),Object(v.jsxs)(j.a,{tag:m.a,md:"3",children:[Object(v.jsx)(g.a,{className:"form-label",for:"quiz_lang",children:"Quiz lang"}),Object(v.jsx)(u.a,{isClearable:!0,as:o.a,id:"quiz_lang",control:T,name:"quiz_lang",rules:{required:!0},options:z,className:s()("react-select",{"is-invalid":N.quiz_lang}),classNamePrefix:"select",theme:l.f})]}),Object(v.jsxs)(j.a,{tag:m.a,md:"3",children:[Object(v.jsx)(g.a,{className:"form-label",for:"quiz_category",children:"Quiz Category"}),Object(v.jsx)(u.a,{isClearable:!0,as:o.a,id:"quiz_category",control:T,name:"quiz_category",rules:{required:!0},options:x,className:s()("react-select",{"is-invalid":N.quiz_category}),classNamePrefix:"select",theme:l.f})]})]}),Object(v.jsxs)(b.a,{children:[Object(v.jsxs)("div",{className:"form-group form-password-toggle col-md-6",children:[Object(v.jsx)(g.a,{className:"form-label",for:"quiz_expiry",children:"Expiry"}),Object(v.jsx)(u.a,{"data-enable-time":!0,placeholder:"Select...",as:i.a,control:T,id:"quiz_expiry",name:"quiz_expiry",rules:{required:!0},className:s()("form-control flatpickr-input",{"is-invalid":N.quiz_expiry})})]}),Object(v.jsxs)("div",{className:"form-group form-password-toggle col-md-6",children:[Object(v.jsx)(g.a,{className:"form-label",for:"quiz_coins",children:"Quiz coins"}),Object(v.jsx)(O.a,{type:"number",placeholder:"Select...",name:"quiz_coins",id:"quiz_coins",innerRef:c({required:!0}),className:s()({"is-invalid":N.quiz_coins})})]})]}),Object(v.jsx)("div",{className:"d-flex justify-content-end",children:Object(v.jsxs)(h.a.Ripple,{type:"submit",color:"primary",className:"btn-next",children:[Object(v.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),Object(v.jsx)(f.a,{size:14,className:"align-middle ml-sm-25 ml-0"})]})})]})]})}},451:function(e,t,n){"use strict";var a=n(0),r=n(80),s=n.n(r),o=localStorage.getItem("TOKEN"),c=s.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:o}});c.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(a.a)(Object(a.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=c},454:function(e,t,n){"use strict";n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return y})),n.d(t,"f",(function(){return v}));var a=n(1),r=n(121),s=n(463),o=(n(471),n(472)),c=n(786),i=n(474),l=(n(475),n(482),n(468),n(467),n(469),n(445),n(6)),u=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},f=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},p=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},b=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"danger",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},j=function(){return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"warning",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},m=function(e){return r.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},g=function(e){return r.b.success(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},O=function(e){return r.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},h=function(e){return r.b.success(Object(l.jsx)(p,{message:e}),{hideProgressBar:!0})},y=function(e){return r.b.error(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},v=function(){return r.b.warning(Object(l.jsx)(j,{}),{hideProgressBar:!0})}},461:function(e,t,n){},464:function(e,t,n){"use strict";var a=n(15),r=n(16),s=n(1),o=n.n(s),c=n(5),i=n.n(c),l=n(117),u=n.n(l),f=n(79),d=i.a.oneOfType([i.a.number,i.a.string]),p={tag:f.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,n=e.cssModule,s=e.noGutters,c=e.tag,i=e.form,l=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,n){var a=e[t];if(delete d[t],a){var r=!n;p.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(f.mapToCssModules)(u()(t,s?"no-gutters":null,i?"form-row":"row",p),n);return o.a.createElement(c,Object(a.a)({},d,{className:b}))};j.propTypes=p,j.defaultProps=b,t.a=j},465:function(e,t,n){"use strict";var a=n(15),r=n(16),s=n(1),o=n.n(s),c=n(5),i=n.n(c),l=n(117),u=n.n(l),f=n(79),d=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),b={tag:f.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,s=e.widths,c=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];s.forEach((function(t,a){var r=e[t];if(delete i[t],r||""===r){var s=!a;if(Object(f.isObject)(r)){var o,c=s?"-":"-"+t+"-",d=m(s,t,r.size);l.push(Object(f.mapToCssModules)(u()(((o={})[d]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o)),n))}else{var p=m(s,t,r);l.push(p)}}})),l.length||l.push("col");var d=Object(f.mapToCssModules)(u()(t,l),n);return o.a.createElement(c,Object(a.a)({},i,{className:d}))};g.propTypes=b,g.defaultProps=j,t.a=g},466:function(e,t,n){"use strict";var a=n(15),r=n(16),s=n(56),o=n(118),c=n(1),i=n.n(c),l=n(5),u=n.n(l),f=n(117),d=n.n(f),p=n(79),b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},j=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(s.a)(n)),n.focus=n.focus.bind(Object(s.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,s=e.type,o=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,f=e.addon,b=e.plaintext,j=e.innerRef,m=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,O=new RegExp("\\D","g"),h=u||("select"===s||"textarea"===s?s:"input"),y="form-control";b?(y+="-plaintext",h=u||"input"):"file"===s?y+="-file":"range"===s?y+="-range":g&&(y=f?null:"form-check-input"),m.size&&O.test(m.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=m.size,delete m.size);var v=Object(p.mapToCssModules)(d()(t,l&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,y),n);return("input"===h||u&&"function"===typeof u)&&(m.type=s),m.children&&!b&&"select"!==s&&"string"===typeof h&&"select"!==h&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),i.a.createElement(h,Object(a.a)({},m,{ref:j,className:v,"aria-invalid":l}))},t}(i.a.Component);j.propTypes=b,j.defaultProps={type:"text"},t.a=j},467:function(e,t,n){"use strict";var a=n(15),r=n(16),s=n(1),o=n.n(s),c=n(5),i=n.n(c),l=n(117),u=n.n(l),f=n(79),d={tag:f.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,n=e.cssModule,s=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(f.mapToCssModules)(u()(t,"card-title"),n);return o.a.createElement(s,Object(a.a)({},c,{className:i}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},468:function(e,t,n){"use strict";var a=n(15),r=n(16),s=n(1),o=n.n(s),c=n(5),i=n.n(c),l=n(117),u=n.n(l),f=n(79),d={tag:f.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,n=e.cssModule,s=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(f.mapToCssModules)(u()(t,"card-header"),n);return o.a.createElement(s,Object(a.a)({},c,{className:i}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},469:function(e,t,n){"use strict";var a=n(15),r=n(16),s=n(1),o=n.n(s),c=n(5),i=n.n(c),l=n(117),u=n.n(l),f=n(79),d={tag:f.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,n=e.cssModule,s=e.innerRef,c=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(f.mapToCssModules)(u()(t,"card-body"),n);return o.a.createElement(c,Object(a.a)({},i,{className:l,ref:s}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},471:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(449),o=n.n(s);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,o=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Bell",t.a=l},472:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(449),o=n.n(s);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,o=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Check",t.a=l},474:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(449),o=n.n(s);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,o=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),r.a.createElement("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),r.a.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="AlertTriangle",t.a=l},475:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(449),o=n.n(s);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,o=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Info",t.a=l},482:function(e,t,n){"use strict";var a=n(15),r=n(16),s=n(1),o=n.n(s),c=n(5),i=n.n(c),l=n(117),u=n.n(l),f=n(79),d={tag:f.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,n=e.cssModule,s=e.color,c=e.body,i=e.inverse,l=e.outline,d=e.tag,p=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(f.mapToCssModules)(u()(t,"card",!!i&&"text-white",!!c&&"card-body",!!s&&(l?"border":"bg")+"-"+s),n);return o.a.createElement(d,Object(a.a)({},b,{className:j,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},484:function(e,t,n){"use strict";var a=n(15),r=n(16),s=n(56),o=n(118),c=n(1),i=n.n(c),l=n(5),u=n.n(l),f=n(117),d=n.n(f),p=n(79),b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},j=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(s.a)(n)),n.submit=n.submit.bind(Object(s.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,s=e.inline,o=e.tag,c=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.mapToCssModules)(d()(t,!!s&&"form-inline"),n);return i.a.createElement(o,Object(a.a)({},l,{ref:c,className:u}))},t}(c.Component);j.propTypes=b,j.defaultProps={tag:"form"},t.a=j},506:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"i",(function(){return i})),n.d(t,"k",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"l",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"m",(function(){return O})),n.d(t,"g",(function(){return h})),n.d(t,"q",(function(){return y})),n.d(t,"n",(function(){return v})),n.d(t,"o",(function(){return x})),n.d(t,"p",(function(){return z}));var a=n(452),r=n(453),s=n(451),o=n(454),c=function(e,t){return function(){var n=Object(r.a)(Object(a.a)().mark((function n(r){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),r({type:"GET_ALL_DATA_INIT"}),n.next=4,s.a.get("/quiz/list?page=".concat(t),{params:e}).then((function(t){r({type:"GET_ALL_DATA",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},i=function(e,t){return function(){var n=Object(r.a)(Object(a.a)().mark((function n(r){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),r({type:"GET_ALL_DATA_INIT"}),n.next=4,s.a.get("/quiz/list?quiz_category=Cricket&page=".concat(t),{params:e}).then((function(t){r({type:"GET_CRIC_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},l=function(e,t){return function(){var n=Object(r.a)(Object(a.a)().mark((function n(r){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),r({type:"GET_ALL_DATA_INIT"}),n.next=4,s.a.get("/quiz/list?quiz_category=Football&page=".concat(t),{params:e}).then((function(t){r({type:"GET_FOOT_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},u=function(e,t){return function(){var n=Object(r.a)(Object(a.a)().mark((function n(r){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),r({type:"GET_ALL_DATA_INIT"}),n.next=4,s.a.get("/quiz/list?quiz_category=Basketball&page=".concat(t),{params:e}).then((function(t){r({type:"GET_BASK_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},f=function(e){return function(t){t({type:"LANG_ID",data:e})}},d=function(e){return function(t){t({type:"LANG_ID",data:e})}},p=function(e){return function(t){t({type:"QUIZ_ENG_QUESTION",data:e})}},b=function(){return function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/master/country/dropdownlist").then((function(e){t({type:"LANGS_ID",data:e.data}),console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(t){s.a.post("/quiz/add",e).then((function(e){console.log(e),Object(o.b)(e.data.message),t({type:"QUIZ_ADD",data:!0})})).catch((function(){Object(o.a)("failed to add")}))}},m=function(e){return function(t){t({type:"ADD_QUIZ_POST_INIT"}),s.a.post("/quiz/questions/add",e).then((function(e){Object(o.b)(e.data.message),t({type:"QUIZ_QUESTION_ADD",data:e.data}),console.log(e.data)})).catch((function(){Object(o.f)("failed to add")}))}},g=function(e){return function(t){s.a.delete("/quiz/delete/".concat(e)).then((function(){Object(o.c)("successfully delete"),t(c())})).catch((function(e){Object(o.a)("error"),console.log(e)}))}},O=function(e){return function(){var t=Object(r.a)(Object(a.a)().mark((function t(n){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"DETAILS_VIEW_INIT"}),t.next=3,s.a.put("/quiz/view/".concat(e)).then((function(e){n({type:"QUIZ_DET",data:e.data.data})})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(t){t({type:"QUIZ_QUESTIONS_INIT"}),s.a.get("/quiz/questions/list/".concat(e)).then((function(e){t({type:"QUIZ_QUESTIONS_DATA",data:e.data.data})})).catch((function(e){return console.log(e)}))}},y=function(){return{type:"RESET_QUIZ_QUESTIONS"}},v=function(e,t){return function(n){s.a.put("/quiz/edit/".concat(e),t).then((function(e){n({type:"QUIZ_EDIT",data:e.data})})).catch((function(e){return console.log(e)}))}},x=function(e,t){return function(n){s.a.put("/quiz/questions/edit/".concat(e),t).then((function(e){n({type:"QUIZ_EDIT_QUESTIONS",data:e.data})})).catch((function(e){return console.log(e)}))}},z=function(e,t){return function(){var n=Object(r.a)(Object(a.a)().mark((function n(r){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,s.a.post("quiz/toggle_status/".concat(e)).then((function(e){Object(o.b)(e.data.message),r({type:"QUIZ_TOGGLE_STATUS",data:t})})).catch((function(e){Object(o.a)("error"),console.log(e),console.log("Error in Feed Post: ",e)}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},676:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(449),o=n.n(s);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,o=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="ArrowRight",t.a=l}}]);
//# sourceMappingURL=80.4616a736.chunk.js.map