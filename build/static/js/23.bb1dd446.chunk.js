(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[23],{464:function(e,r,t){"use strict";var n=t(15),o=t(16),a=t(1),i=t.n(a),s=t(5),l=t.n(s),c=t(117),u=t.n(c),f=t(79),p=l.a.oneOfType([l.a.number,l.a.string]),y={tag:f.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},v={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var r=e.className,t=e.cssModule,a=e.noGutters,s=e.tag,l=e.form,c=e.widths,p=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),y=[];c.forEach((function(r,t){var n=e[r];if(delete p[r],n){var o=!t;y.push(o?"row-cols-"+n:"row-cols-"+r+"-"+n)}}));var v=Object(f.mapToCssModules)(u()(r,a?"no-gutters":null,l?"form-row":"row",y),t);return i.a.createElement(s,Object(n.a)({},p,{className:v}))};g.propTypes=y,g.defaultProps=v,r.a=g},465:function(e,r,t){"use strict";var n=t(15),o=t(16),a=t(1),i=t.n(a),s=t(5),l=t.n(s),c=t(117),u=t.n(c),f=t(79),p=l.a.oneOfType([l.a.number,l.a.string]),y=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),v={tag:f.tagPropType,xs:y,sm:y,md:y,lg:y,xl:y,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},d=function(e,r,t){return!0===t||""===t?e?"col":"col-"+r:"auto"===t?e?"col-auto":"col-"+r+"-auto":e?"col-"+t:"col-"+r+"-"+t},h=function(e){var r=e.className,t=e.cssModule,a=e.widths,s=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),c=[];a.forEach((function(r,n){var o=e[r];if(delete l[r],o||""===o){var a=!n;if(Object(f.isObject)(o)){var i,s=a?"-":"-"+r+"-",p=d(a,r,o.size);c.push(Object(f.mapToCssModules)(u()(((i={})[p]=o.size||""===o.size,i["order"+s+o.order]=o.order||0===o.order,i["offset"+s+o.offset]=o.offset||0===o.offset,i)),t))}else{var y=d(a,r,o);c.push(y)}}})),c.length||c.push("col");var p=Object(f.mapToCssModules)(u()(r,c),t);return i.a.createElement(s,Object(n.a)({},l,{className:p}))};h.propTypes=v,h.defaultProps=g,r.a=h},467:function(e,r,t){"use strict";var n=t(15),o=t(16),a=t(1),i=t.n(a),s=t(5),l=t.n(s),c=t(117),u=t.n(c),f=t(79),p={tag:f.tagPropType,className:l.a.string,cssModule:l.a.object},y=function(e){var r=e.className,t=e.cssModule,a=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),l=Object(f.mapToCssModules)(u()(r,"card-title"),t);return i.a.createElement(a,Object(n.a)({},s,{className:l}))};y.propTypes=p,y.defaultProps={tag:"div"},r.a=y},468:function(e,r,t){"use strict";var n=t(15),o=t(16),a=t(1),i=t.n(a),s=t(5),l=t.n(s),c=t(117),u=t.n(c),f=t(79),p={tag:f.tagPropType,className:l.a.string,cssModule:l.a.object},y=function(e){var r=e.className,t=e.cssModule,a=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),l=Object(f.mapToCssModules)(u()(r,"card-header"),t);return i.a.createElement(a,Object(n.a)({},s,{className:l}))};y.propTypes=p,y.defaultProps={tag:"div"},r.a=y},486:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="ChevronDown",r.a=c},530:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Plus",r.a=c},569:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("circle",{cx:"12",cy:"12",r:"1"}),o.a.createElement("circle",{cx:"12",cy:"5",r:"1"}),o.a.createElement("circle",{cx:"12",cy:"19",r:"1"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="MoreVertical",r.a=c},597:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("polyline",{points:"3 6 5 6 21 6"}),o.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Trash",r.a=c},720:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.a.createElement("polyline",{points:"14 2 14 8 20 8"}),o.a.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),o.a.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),o.a.createElement("polyline",{points:"10 9 9 9 8 9"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="FileText",r.a=c},728:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Calendar",r.a=c},877:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("polyline",{points:"21 8 21 21 3 21 3 8"}),o.a.createElement("rect",{x:"1",y:"3",width:"22",height:"5"}),o.a.createElement("line",{x1:"10",y1:"12",x2:"14",y2:"12"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Archive",r.a=c},878:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),o.a.createElement("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Briefcase",r.a=c},879:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),o.a.createElement("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="DollarSign",r.a=c},880:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),o.a.createElement("polyline",{points:"16 6 12 2 8 6"}),o.a.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"15"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Share",r.a=c},881:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),o.a.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),o.a.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Printer",r.a=c},882:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("rect",{x:"3",y:"3",width:"7",height:"7"}),o.a.createElement("rect",{x:"14",y:"3",width:"7",height:"7"}),o.a.createElement("rect",{x:"14",y:"14",width:"7",height:"7"}),o.a.createElement("rect",{x:"3",y:"14",width:"7",height:"7"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Grid",r.a=c},883:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),o.a.createElement("polyline",{points:"13 2 13 9 20 9"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="File",r.a=c},884:function(e,r,t){"use strict";var n=t(1),o=t.n(n),a=t(449),i=t.n(a);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,i=void 0===a?24:a,c=l(e,["color","size"]);return o.a.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),o.a.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Copy",r.a=c}}]);
//# sourceMappingURL=23.bb1dd446.chunk.js.map