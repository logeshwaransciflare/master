(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[183],{1512:function(e,a,t){"use strict";t.r(a);var r=t(17),s=t(1),c=t(464),n=t(465),l=t(511),o=t(445),i=t(457),u=t(824),b=t(512),d=t(6);a.default=function(){var e=Object(s.useState)(0),a=Object(r.a)(e,2),m=a[0],j=a[1],p=0===m?Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(6),t.e(67)]).then(t.bind(null,1468))})):1===m?Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(6),t.e(69)]).then(t.bind(null,1469))})):2===m?Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(6),t.e(68)]).then(t.bind(null,1470))})):Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(146),t.e(200)]).then(t.bind(null,1471))}));return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(i.a,{breadCrumbTitle:"Cricket Report",breadCrumbActive:"Cricket Report"}),Object(d.jsx)(c.a,{children:Object(d.jsx)(n.a,{md:12,sm:12,children:Object(d.jsxs)(l.a,{className:"mb-1",children:[Object(d.jsxs)(o.a,{outline:!0,color:"primary",onClick:function(){return j(0)},active:0===m,children:[Object(d.jsx)(u.a,{size:14}),Object(d.jsx)("span",{className:"align-middle ml-25",children:"Contest Report"})]}),Object(d.jsxs)(o.a,{outline:!0,color:"primary",onClick:function(){return j(1)},active:1===m,children:[Object(d.jsx)(b.a,{size:14}),Object(d.jsx)("span",{className:"align-middle ml-25",children:"WinnerReport"})]}),Object(d.jsxs)(o.a,{outline:!0,color:"primary",onClick:function(){return j(2)},active:2===m,children:[Object(d.jsx)(b.a,{size:14}),Object(d.jsx)("span",{className:"align-middle ml-25",children:"Quiz Report"})]}),Object(d.jsxs)(o.a,{outline:!0,color:"primary",onClick:function(){return j(3)},active:3===m,children:[Object(d.jsx)(b.a,{size:14}),Object(d.jsx)("span",{className:"align-middle ml-25",children:"Player Report"})]})]})})}),Object(d.jsx)(s.Suspense,{children:Object(d.jsx)(p,{})})]})}},457:function(e,a,t){"use strict";var r=t(458),s=t(480),c=t(481),n=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,l=e.breadCrumbParent2,o=e.breadCrumbParent3,i=e.breadCrumbActive;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[a?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(s.a,{children:[Object(n.jsx)(c.a,{tag:"li",children:Object(n.jsx)(r.b,{to:"/",children:"Home"})}),t?Object(n.jsx)(c.a,{tag:"li",className:"text-primary",children:Object(n.jsx)(r.b,{to:"/".concat(t),children:t})}):"",l?Object(n.jsx)(c.a,{tag:"li",className:"text-primary",children:l}):"",o?Object(n.jsx)(c.a,{tag:"li",className:"text-primary",children:o}):"",Object(n.jsx)(c.a,{tag:"li",active:!0,children:i})]})})]})})})})}},464:function(e,a,t){"use strict";var r=t(15),s=t(16),c=t(1),n=t.n(c),l=t(5),o=t.n(l),i=t(117),u=t.n(i),b=t(79),d=o.a.oneOfType([o.a.number,o.a.string]),m={tag:b.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,l=e.tag,o=e.form,i=e.widths,d=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,t){var r=e[a];if(delete d[a],r){var s=!t;m.push(s?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var j=Object(b.mapToCssModules)(u()(a,c?"no-gutters":null,o?"form-row":"row",m),t);return n.a.createElement(l,Object(r.a)({},d,{className:j}))};p.propTypes=m,p.defaultProps=j,a.a=p},465:function(e,a,t){"use strict";var r=t(15),s=t(16),c=t(1),n=t.n(c),l=t(5),o=t.n(l),i=t(117),u=t.n(i),b=t(79),d=o.a.oneOfType([o.a.number,o.a.string]),m=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:d,offset:d})]),j={tag:b.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:o.a.string,cssModule:o.a.object,widths:o.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.widths,l=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(a,r){var s=e[a];if(delete o[a],s||""===s){var c=!r;if(Object(b.isObject)(s)){var n,l=c?"-":"-"+a+"-",d=f(c,a,s.size);i.push(Object(b.mapToCssModules)(u()(((n={})[d]=s.size||""===s.size,n["order"+l+s.order]=s.order||0===s.order,n["offset"+l+s.offset]=s.offset||0===s.offset,n)),t))}else{var m=f(c,a,s);i.push(m)}}})),i.length||i.push("col");var d=Object(b.mapToCssModules)(u()(a,i),t);return n.a.createElement(l,Object(r.a)({},o,{className:d}))};g.propTypes=j,g.defaultProps=p,a.a=g},480:function(e,a,t){"use strict";var r=t(15),s=t(16),c=t(1),n=t.n(c),l=t(5),o=t.n(l),i=t(117),u=t.n(i),b=t(79),d={tag:b.tagPropType,listTag:b.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},m=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,l=e.children,o=e.tag,i=e.listTag,d=e["aria-label"],m=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(b.mapToCssModules)(u()(a),c),p=Object(b.mapToCssModules)(u()("breadcrumb",t),c);return n.a.createElement(o,Object(r.a)({},m,{className:j,"aria-label":d}),n.a.createElement(i,{className:p},l))};m.propTypes=d,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},481:function(e,a,t){"use strict";var r=t(15),s=t(16),c=t(1),n=t.n(c),l=t(5),o=t.n(l),i=t(117),u=t.n(i),b=t(79),d={tag:b.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,l=e.tag,o=Object(s.a)(e,["className","cssModule","active","tag"]),i=Object(b.mapToCssModules)(u()(a,!!c&&"active","breadcrumb-item"),t);return n.a.createElement(l,Object(r.a)({},o,{className:i,"aria-current":c?"page":void 0}))};m.propTypes=d,m.defaultProps={tag:"li"},a.a=m},511:function(e,a,t){"use strict";var r=t(15),s=t(16),c=t(1),n=t.n(c),l=t(5),o=t.n(l),i=t(117),u=t.n(i),b=t(79),d={tag:b.tagPropType,"aria-label":o.a.string,className:o.a.string,cssModule:o.a.object,role:o.a.string,size:o.a.string,vertical:o.a.bool},m=function(e){var a=e.className,t=e.cssModule,c=e.size,l=e.vertical,o=e.tag,i=Object(s.a)(e,["className","cssModule","size","vertical","tag"]),d=Object(b.mapToCssModules)(u()(a,!!c&&"btn-group-"+c,l?"btn-group-vertical":"btn-group"),t);return n.a.createElement(o,Object(r.a)({},i,{className:d}))};m.propTypes=d,m.defaultProps={tag:"div",role:"group"},a.a=m},512:function(e,a,t){"use strict";var r=t(1),s=t.n(r),c=t(449),n=t.n(c);function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=Object(r.forwardRef)((function(e,a){var t=e.color,r=void 0===t?"currentColor":t,c=e.size,n=void 0===c?24:c,i=o(e,["color","size"]);return s.a.createElement("svg",l({ref:a,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),s.a.createElement("path",{d:"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"}))}));i.propTypes={color:n.a.string,size:n.a.oneOfType([n.a.string,n.a.number])},i.displayName="Dribbble",a.a=i}}]);
//# sourceMappingURL=183.dc498ad6.chunk.js.map