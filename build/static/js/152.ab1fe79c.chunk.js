(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[152],{1507:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t(16),r=t(491),c=t(502),o=t(500),i=t(496),l=t(487),u=t(472),d=t(471),f=t(887),b=t(484),p=t(473),j=t(884),m=t(453),h=t(1),O=t(6);a.default=function(){var e=Object(h.useState)({name:"",caption:"",value:"",category:"",expires_at:"",prizes_share:"",coins:"",no_of_stock:"",image:""}),a=Object(n.a)(e,2),t=a[0],g=a[1];return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(c.a,{children:Object(O.jsx)(o.a,{tag:"h4",children:"Edit Prize"})}),Object(O.jsx)(i.a,{children:Object(O.jsx)(l.a,{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{for:"nameVertical",children:"Name"}),Object(O.jsx)(p.a,{type:"text",name:"name",id:"nameVertical",value:t.name,onChange:function(e){return g(Object(s.a)(Object(s.a)({},t),{},{name:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{for:"nameVertical",children:"Caption"}),Object(O.jsx)(p.a,{type:"text",name:"name",id:"nameVertical",value:t.caption,onChange:function(e){return g(Object(s.a)(Object(s.a)({},t),{},{caption:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{for:"nameVertical",children:"Value"}),Object(O.jsx)(p.a,{type:"text",name:"name",id:"nameVertical",value:t.value,onChange:function(e){return g(Object(s.a)(Object(s.a)({},t),{},{value:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{for:"nameVertical",children:"Category"}),Object(O.jsx)(p.a,{type:"text",name:"name",id:"nameVertical",value:t.category,onChange:function(e){return g(Object(s.a)(Object(s.a)({},t),{},{category:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{for:"nameVertical",children:"Expires_at"}),Object(O.jsx)(p.a,{type:"text",name:"name",id:"nameVertical",value:t.expires_at,onChange:function(e){return g(Object(s.a)(Object(s.a)({},t),{},{expires_at:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{for:"nameVertical",children:"prizes_share"}),Object(O.jsx)(p.a,{type:"text",name:"name",id:"nameVertical",value:t.prizes_share,onChange:function(e){return g(Object(s.a)(Object(s.a)({},t),{},{prizes_share:e.target.value}))},placeholder:"Enter Product Name"})]})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{for:"EmailVertical",children:"coins"}),Object(O.jsx)(p.a,{type:"number",name:"Email",id:"EmailVertical",value:t.coins,onChange:function(e){return g(Object(s.a)(Object(s.a)({},t),{},{coins:e.target.value}))},placeholder:"Enter No of Coins "})]})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{for:"mobileVertical",children:"No of Stocks"}),Object(O.jsx)(p.a,{type:"number",name:"mobile",id:"mobileVertical",value:t.no_of_stock,onChange:function(e){return g(Object(s.a)(Object(s.a)({},t),{},{no_of_stock:e.target.value}))},placeholder:"Enter No of stocks"})]})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsx)(f.a,{})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{for:"exampleCustomFileBrowser",children:"Custom File Input"}),Object(O.jsx)(j.a,{type:"file",id:"exampleCustomFileBrowser",name:"customFile",value:t.image,onChange:function(e){return g(Object(s.a)(Object(s.a)({},t),{},{image:e.target.value}))}})]})}),Object(O.jsx)(d.a,{sm:"12",children:Object(O.jsxs)(f.a,{className:"d-flex mb-0",children:[Object(O.jsx)(m.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),console.log(t)}(e)},children:"Submit"}),Object(O.jsx)(m.a.Ripple,{outline:!0,color:"secondary",type:"reset",onClick:function(e){return function(e){e.preventDefault(),console.log("click"),g({name:"",caption:"",value:"",category:"",expires_at:"",prizes_share:"",coins:"",no_of_stock:"",image:""})}(e)},children:"Reset"})]})})]})})})]})}},471:function(e,a,t){"use strict";var s=t(14),n=t(15),r=t(1),c=t.n(r),o=t(5),i=t.n(o),l=t(57),u=t.n(l),d=t(82),f=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),p={tag:d.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(a,s){var n=e[a];if(delete i[a],n||""===n){var r=!s;if(Object(d.isObject)(n)){var c,o=r?"-":"-"+a+"-",f=m(r,a,n.size);l.push(Object(d.mapToCssModules)(u()(((c={})[f]=n.size||""===n.size,c["order"+o+n.order]=n.order||0===n.order,c["offset"+o+n.offset]=n.offset||0===n.offset,c)),t))}else{var b=m(r,a,n);l.push(b)}}})),l.length||l.push("col");var f=Object(d.mapToCssModules)(u()(a,l),t);return c.a.createElement(o,Object(s.a)({},i,{className:f}))};h.propTypes=p,h.defaultProps=j,a.a=h},472:function(e,a,t){"use strict";var s=t(14),n=t(15),r=t(1),c=t.n(r),o=t(5),i=t.n(o),l=t(57),u=t.n(l),d=t(82),f=i.a.oneOfType([i.a.number,i.a.string]),b={tag:d.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,i=e.form,l=e.widths,f=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];l.forEach((function(a,t){var s=e[a];if(delete f[a],s){var n=!t;b.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var p=Object(d.mapToCssModules)(u()(a,r?"no-gutters":null,i?"form-row":"row",b),t);return c.a.createElement(o,Object(s.a)({},f,{className:p}))};j.propTypes=b,j.defaultProps=p,a.a=j},473:function(e,a,t){"use strict";var s=t(14),n=t(15),r=t(58),c=t(121),o=t(1),i=t.n(o),l=t(5),u=t.n(l),d=t(57),f=t.n(d),b=t(82),p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:b.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},j=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,o=e.valid,l=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,j=e.innerRef,m=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),g=u||("select"===r||"textarea"===r?r:"input"),x="form-control";p?(x+="-plaintext",g=u||"input"):"file"===r?x+="-file":"range"===r?x+="-range":h&&(x=d?null:"form-check-input"),m.size&&O.test(m.size)&&(Object(b.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=m.size,delete m.size);var v=Object(b.mapToCssModules)(f()(a,l&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,x),t);return("input"===g||u&&"function"===typeof u)&&(m.type=r),m.children&&!p&&"select"!==r&&"string"===typeof g&&"select"!==g&&(Object(b.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),i.a.createElement(g,Object(s.a)({},m,{ref:j,className:v,"aria-invalid":l}))},a}(i.a.Component);j.propTypes=p,j.defaultProps={type:"text"},a.a=j},484:function(e,a,t){"use strict";var s=t(14),n=t(15),r=t(1),c=t.n(r),o=t(5),i=t.n(o),l=t(57),u=t.n(l),d=t(82),f=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),p={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:i.a.array},j={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,l=e.check,f=e.size,b=e.for,p=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),j=[];o.forEach((function(a,s){var n=e[a];if(delete p[a],n||""===n){var r,c=!s;if(Object(d.isObject)(n)){var o,i=c?"-":"-"+a+"-";r=m(c,a,n.size),j.push(Object(d.mapToCssModules)(u()(((o={})[r]=n.size||""===n.size,o["order"+i+n.order]=n.order||0===n.order,o["offset"+i+n.offset]=n.offset||0===n.offset,o))),t)}else r=m(c,a,n),j.push(r)}}));var h=Object(d.mapToCssModules)(u()(a,!!r&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,j,!!j.length&&"col-form-label"),t);return c.a.createElement(i,Object(s.a)({htmlFor:b},p,{className:h}))};h.propTypes=p,h.defaultProps=j,a.a=h},487:function(e,a,t){"use strict";var s=t(14),n=t(15),r=t(58),c=t(121),o=t(1),i=t.n(o),l=t(5),u=t.n(l),d=t(57),f=t.n(d),b=t(82),p={children:u.a.node,inline:u.a.bool,tag:b.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},j=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,c=e.tag,o=e.innerRef,l=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(b.mapToCssModules)(f()(a,!!r&&"form-inline"),t);return i.a.createElement(c,Object(s.a)({},l,{ref:o,className:u}))},a}(o.Component);j.propTypes=p,j.defaultProps={tag:"form"},a.a=j},491:function(e,a,t){"use strict";var s=t(14),n=t(15),r=t(1),c=t.n(r),o=t(5),i=t.n(o),l=t(57),u=t.n(l),d=t(82),f={tag:d.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,i=e.inverse,l=e.outline,f=e.tag,b=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(d.mapToCssModules)(u()(a,"card",!!i&&"text-white",!!o&&"card-body",!!r&&(l?"border":"bg")+"-"+r),t);return c.a.createElement(f,Object(s.a)({},p,{className:j,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},496:function(e,a,t){"use strict";var s=t(14),n=t(15),r=t(1),c=t.n(r),o=t(5),i=t.n(o),l=t(57),u=t.n(l),d=t(82),f={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,i=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-body"),t);return c.a.createElement(o,Object(s.a)({},i,{className:l,ref:r}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},500:function(e,a,t){"use strict";var s=t(14),n=t(15),r=t(1),c=t.n(r),o=t(5),i=t.n(o),l=t(57),u=t.n(l),d=t(82),f={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-title"),t);return c.a.createElement(r,Object(s.a)({},o,{className:i}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},502:function(e,a,t){"use strict";var s=t(14),n=t(15),r=t(1),c=t.n(r),o=t(5),i=t.n(o),l=t(57),u=t.n(l),d=t(82),f={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-header"),t);return c.a.createElement(r,Object(s.a)({},o,{className:i}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=152.ab1fe79c.chunk.js.map