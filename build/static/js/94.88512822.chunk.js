(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[94],{1407:function(e,t,a){},1532:function(e,t,a){"use strict";a.r(t);var c=a(17),n=a(1),s=a(479),r=a(120),i=a(482),o=a(468),l=a(467),d=a(469),j=a(464),u=a(465),b=a(484),f=a(787),O=a(483),m=a(445),h=a(499),p=a.n(h),x=a(620),g=a(765),v=a(962),N=a(119),_=a.n(N),y=a(959),E=a.n(y),P=(a(960),a(625),a(510)),w=a(459),D=a(507),T=a(619),S=(a(500),a(497),a(1407),a(457)),C=(a(461),a(6));t.default=function(){var e=Object(D.g)(),t=Object(r.b)(),a=Object(r.c)((function(e){return e.feeds})),h=Object(s.c)(),N=h.register,y=h.errors,A=h.handleSubmit,L=h.reset,F=Object(n.useState)(""),k=Object(c.a)(F,2),I=k[0],z=k[1],B=Object(n.useState)((function(){var e;return x.EditorState.createWithContent(x.ContentState.createFromBlockArray(Object(x.convertFromHTML)(null===a||void 0===a||null===(e=a.editPostData)||void 0===e?void 0:e.feed_content)))})),R=Object(c.a)(B,2),W=R[0],G=R[1],H=Object(n.useState)(null),U=Object(c.a)(H,2),q=U[0],J=U[1],K=function(e){return{__html:E.a.sanitize(e)}},M=Object(n.useState)((function(){var e,t;return x.EditorState.createWithContent(x.ContentState.createFromBlockArray(Object(x.convertFromHTML)(null!==a&&void 0!==a&&null!==(e=a.editPostData)&&void 0!==e&&e.arabic_feed_content?null===a||void 0===a||null===(t=a.editPostData)||void 0===t?void 0:t.arabic_feed_content:"")))})),Q=Object(c.a)(M,2),V=Q[0],X=Q[1],Y=Object(n.useState)(null),Z=Object(c.a)(Y,2),$=Z[0],ee=Z[1];Object(n.useEffect)((function(){Object.keys(a.editPostData)?z(a.editPostData.feed_image):e.replace("/walls")}),[JSON.stringify(a.editPostData)]),console.log(a),Object(n.useEffect)((function(){a.editSuccessData&&(L(),G(""),z(""))}),[a.editSuccessData]);var te=new p.a({meta:{type:"avatar"},autoProceed:!0,restrictions:{maxNumberOfFiles:1,allowedFileTypes:["image/*"]}});te.on("file-added",(function(e){var t=new FileReader;t.readAsDataURL(e.data),t.onloadend=function(){var e=t.result;z(e)}}));var ae=K(q).__html,ce=ae.length<20?null:ae,ne=K($).__html,se=ne.length<20?null:ne,re=function(){if(I){var e={feed_type:"Post",feed_content:ce,arabic_feed_content:se,feed_image:I},c=function(e,t){var a=document.createElement("canvas");a.width=e.width,a.height=e.height;var c=t.split(".");return a.toDataURL("image/".concat(c[c.length-1])).replace(/^data:image\/(png|jpg);base64,/,"")}(document.getElementById("post-img-prev-id"),a.editPostData.feed_image);console.log("Base 64 : ",c),t(Object(T.e)(a.editPostData.feed_id,e))}};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(S.a,{breadCrumbTitle:"Walls",breadCrumbParent:"Walls",breadCrumbActive:"Edit"}),Object(C.jsxs)(i.a,{children:[Object(C.jsx)(o.a,{children:Object(C.jsx)(l.a,{tag:"h4",children:"Edit Post"})}),Object(C.jsx)(d.a,{children:Object(C.jsx)(j.a,{className:"wrapper-add-post",children:Object(C.jsx)(u.a,{className:"add-post-edit",children:Object(C.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),a.editPostLoader||A(re)()},children:[Object(C.jsx)("div",{className:"form-label-group add-feed-textarea",children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(O.a,{className:"form-label",for:"post_content",children:Object(C.jsx)("h4",{children:"Post Content English"})}),Object(C.jsx)(g.Editor,{name:"post_content",id:"post_content",editorState:W,onEditorStateChange:function(e){G(e),function(){var e=Object(v.a)(W.getCurrentContent());J(e)}()},wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",innerRef:N({required:!0}),className:_()({"is-invalid":y.editorState})})]})}),Object(C.jsx)("div",{className:"form-label-group add-feed-textarea",children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(O.a,{className:"form-label",for:"post_content",children:Object(C.jsx)("h3",{children:"Post Content Arabic"})}),Object(C.jsx)(g.Editor,{name:"post_content",id:"post_content",editorState:V,onEditorStateChange:function(e){X(e),function(){var e=Object(v.a)(V.getCurrentContent());ee(e)}()},wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",innerRef:N({required:!0}),className:_()({"is-invalid":y.editorState})})]})}),Object(C.jsx)(P.a,{uppy:te,locale:{strings:{dropHereOr:"Drop Image or %{browse}",browse:"browse"}}}),I&&Object(C.jsx)("div",{className:"uploaded-files",children:Object(C.jsx)("img",{src:I,className:"post-preview",id:"post-img-prev-id"})}),Object(C.jsx)(f.a,{className:"mt-3",children:Object(C.jsxs)("div",{className:"d-flex justify-content-start",children:[Object(C.jsx)(m.a.Ripple,{type:"submit",color:"primary",disabled:a.editPostLoader,className:"btn-next",children:Object(C.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Edit Post"})}),a.editPostLoader&&Object(C.jsx)("div",{className:"ml-2 mt-2",children:Object(C.jsx)(w.a,{blocking:!0})})]})})]})})})})]})]})}},451:function(e,t,a){"use strict";var c=a(0),n=a(80),s=a.n(n),r=localStorage.getItem("TOKEN"),i=s.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:r}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(c.a)(Object(c.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},454:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"b",(function(){return h})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return x})),a.d(t,"a",(function(){return g})),a.d(t,"f",(function(){return v}));var c=a(1),n=a(121),s=a(463),r=(a(471),a(472)),i=a(786),o=a(474),l=(a(475),a(482),a(468),a(467),a(469),a(445),a(6)),d=function(e){var t=e.message;return Object(l.jsx)(c.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(r.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},j=function(e){var t=e.message;return Object(l.jsx)(c.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(r.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},u=function(e){var t=e.message;return Object(l.jsx)(c.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(r.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},b=function(e){var t=e.message;return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(r.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},f=function(e){var t=e.message;return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"danger",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},O=function(){return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"warning",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},m=function(e){return n.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},h=function(e){return n.b.success(Object(l.jsx)(j,{message:e}),{hideProgressBar:!0})},p=function(e){return n.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},x=function(e){return n.b.success(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},g=function(e){return n.b.error(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},v=function(){return n.b.warning(Object(l.jsx)(O,{}),{hideProgressBar:!0})}},457:function(e,t,a){"use strict";var c=a(458),n=a(480),s=a(481),r=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,i=e.breadCrumbParent2,o=e.breadCrumbParent3,l=e.breadCrumbActive;return Object(r.jsx)("div",{className:"content-header row",children:Object(r.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(r.jsx)("div",{className:"row breadcrumbs-top",children:Object(r.jsxs)("div",{className:"col-12",children:[t?Object(r.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(n.a,{children:[Object(r.jsx)(s.a,{tag:"li",children:Object(r.jsx)(c.b,{to:"/",children:"Home"})}),a?Object(r.jsx)(s.a,{tag:"li",className:"text-primary",children:Object(r.jsx)(c.b,{to:"/".concat(a),children:a})}):"",i?Object(r.jsx)(s.a,{tag:"li",className:"text-primary",children:i}):"",o?Object(r.jsx)(s.a,{tag:"li",className:"text-primary",children:o}):"",Object(r.jsx)(s.a,{tag:"li",active:!0,children:l})]})})]})})})})}},459:function(e,t,a){"use strict";var c=a(0),n=a(30),s=a(1),r=a(119),i=a.n(r),o=a(485),l=(a(460),a(6)),d=function(e){var t,a=e.children,r=e.blocking,o=e.loader,d=e.className,j=e.tag,u=e.overlayColor,b=j;return Object(l.jsxs)(b,{className:i()("ui-loader",(t={},Object(n.a)(t,d,d),Object(n.a)(t,"show",r),t)),children:[a,r?Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("div",Object(c.a)({className:"overlay"},r&&u?{style:{backgroundColor:u}}:{})),Object(l.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(o.a,{color:"primary"})}},460:function(e,t,a){},461:function(e,t,a){},497:function(e,t,a){},619:function(e,t,a){"use strict";a.d(t,"g",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return d})),a.d(t,"f",(function(){return j})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return b}));var c=a(452),n=a(453),s=a(451),r=a(454),i=function(e){return function(){var t=Object(n.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_ALL_WALL_DATA_INIT"}),t.next=3,s.a.get("/feeds/list?page=".concat(e)).then((function(e){console.log(e),a({type:"GET_ALL_WALL_POST",data:e.data.data})})).catch((function(){a({type:"GET_ALL_WALL_DATA_FAIL"})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},o=function(e){return function(){var t=Object(n.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("/feeds/delete/".concat(e)).then((function(){Object(r.a)("successfully deleted"),a(i())})).catch((function(e){Object(r.a)("error"),a((function(e){e({type:"WALL_DELETE"})})),console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(n.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a({type:"ADD_FEED_POST_INIT"}),null!==e.feed_content){t.next=5;break}Object(r.a)("Eror"),t.next=7;break;case 5:return t.next=7,s.a.post("/feeds/add",e).then((function(e){Object(r.b)(e.data.message),a({type:"ADD_FEED_POST",data:e.data.message})})).catch((function(e){Object(r.a)(e.response.data.message),console.log("Error in Feed Post: ",e),a({type:"ADD_FEED_POST_FAIL"})}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(){return{type:"RESET_ADD_POST"}},j=function(e){return{type:"EDIT_POST_DATA",data:e}},u=function(e,t){return function(){var a=Object(n.a)(Object(c.a)().mark((function a(n){return Object(c.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"EDIT_POST_INIT"}),a.next=3,s.a.put("/feeds/edit/".concat(e),t).then((function(e){console.log(e),Object(r.d)(e.data.message),console.log("Respont : ",e),n({type:"EDIT_FEED_POST",data:e.data.message})})).catch((function(e){console.log(e),Object(r.a)(e.data.message),console.log("Error in Feed Post: ",e),n({type:"EDIT_POST_FAIL"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(n.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("feeds/toggle_status/".concat(e)).then((function(e){Object(r.b)("successfully updated"),console.log(e),a({type:"FEED_TOGGLE_STATUS",data:e}),a(i())})).catch((function(e){Object(r.a)("error"),console.log(e),console.log("Error in Feed Post: ",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},625:function(e,t,a){}}]);
//# sourceMappingURL=94.88512822.chunk.js.map