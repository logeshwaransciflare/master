(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[211],{1515:function(e,t,a){"use strict";a.r(t);var r=a(16),s=a(1),n=a(472),o=a(471),c=a(548),l=a(453),i=a(927),u=a(549),d=a(6);t.default=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),b=t[0],f=t[1],m=0===b?Object(s.lazy)((function(){return Promise.all([a.e(1),a.e(7),a.e(158),a.e(189)]).then(a.bind(null,1438))})):1===b?Object(s.lazy)((function(){return Promise.all([a.e(1),a.e(7),a.e(159),a.e(190)]).then(a.bind(null,1439))})):Object(s.lazy)((function(){return a.e(210).then(a.bind(null,1472))}));return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(n.a,{children:Object(d.jsx)(o.a,{md:6,sm:12,children:Object(d.jsxs)(c.a,{className:"mb-1",children:[Object(d.jsxs)(l.a,{outline:!0,color:"primary",onClick:function(){return f(0)},active:0===b,children:[Object(d.jsx)(i.a,{size:14}),Object(d.jsx)("span",{className:"align-middle ml-25",children:"Cricket"})]}),Object(d.jsxs)(l.a,{outline:!0,color:"primary",onClick:function(){return f(1)},active:1===b,children:[Object(d.jsx)(u.a,{size:14}),Object(d.jsx)("span",{className:"align-middle ml-25",children:"Football"})]}),Object(d.jsxs)(l.a,{outline:!0,color:"primary",onClick:function(){return f(2)},active:2===b,children:[Object(d.jsx)(u.a,{size:14}),Object(d.jsx)("span",{className:"align-middle ml-25",children:"Basketball"})]})]})})}),Object(d.jsx)(s.Suspense,{children:Object(d.jsx)(m,{})})]})}},471:function(e,t,a){"use strict";var r=a(14),s=a(15),n=a(1),o=a.n(n),c=a(5),l=a.n(c),i=a(57),u=a.n(i),d=a(82),b=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),m={tag:d.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,n=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(t,r){var s=e[t];if(delete l[t],s||""===s){var n=!r;if(Object(d.isObject)(s)){var o,c=n?"-":"-"+t+"-",b=j(n,t,s.size);i.push(Object(d.mapToCssModules)(u()(((o={})[b]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o)),a))}else{var f=j(n,t,s);i.push(f)}}})),i.length||i.push("col");var b=Object(d.mapToCssModules)(u()(t,i),a);return o.a.createElement(c,Object(r.a)({},l,{className:b}))};g.propTypes=m,g.defaultProps=p,t.a=g},472:function(e,t,a){"use strict";var r=a(14),s=a(15),n=a(1),o=a.n(n),c=a(5),l=a.n(c),i=a(57),u=a.n(i),d=a(82),b=l.a.oneOfType([l.a.number,l.a.string]),f={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,c=e.tag,l=e.form,i=e.widths,b=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(t,a){var r=e[t];if(delete b[t],r){var s=!a;f.push(s?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.mapToCssModules)(u()(t,n?"no-gutters":null,l?"form-row":"row",f),a);return o.a.createElement(c,Object(r.a)({},b,{className:m}))};p.propTypes=f,p.defaultProps=m,t.a=p},548:function(e,t,a){"use strict";var r=a(14),s=a(15),n=a(1),o=a.n(n),c=a(5),l=a.n(c),i=a(57),u=a.n(i),d=a(82),b={tag:d.tagPropType,"aria-label":l.a.string,className:l.a.string,cssModule:l.a.object,role:l.a.string,size:l.a.string,vertical:l.a.bool},f=function(e){var t=e.className,a=e.cssModule,n=e.size,c=e.vertical,l=e.tag,i=Object(s.a)(e,["className","cssModule","size","vertical","tag"]),b=Object(d.mapToCssModules)(u()(t,!!n&&"btn-group-"+n,c?"btn-group-vertical":"btn-group"),a);return o.a.createElement(l,Object(r.a)({},i,{className:b}))};f.propTypes=b,f.defaultProps={tag:"div",role:"group"},t.a=f},549:function(e,t,a){"use strict";var r=a(1),s=a.n(r),n=a(5),o=a.n(n);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,i=l(e,["color","size"]);return s.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),s.a.createElement("path",{d:"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"}))}));i.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},i.displayName="Dribbble",t.a=i}}]);
//# sourceMappingURL=211.70943996.chunk.js.map