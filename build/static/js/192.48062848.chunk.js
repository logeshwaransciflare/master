(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[192],{1446:function(e,t,n){"use strict";n.r(t);var r=n(16),a=n(1),s=n(122),c=n(476),i=n(475),o=n(491),l=n(502),u=n(500),d=n(496),j=n(472),b=n(471),f=n(484),m=n(453),p=n(781),h=[{name:"ID",minWidth:"20px",selector:"id",sortable:!0,cell:function(e){return e.id}},{name:"Fixture Short Name",minWidth:"160px",selector:"fixture_sh",sortable:!0,cell:function(e){var t;return null===e||void 0===e||null===(t=e.fixture)||void 0===t?void 0:t.fixture_sh}},{name:"Team SN",minWidth:"160px",selector:"team_sn",sortable:!0,cell:function(e){var t;return null===(t=e.team)||void 0===t?void 0:t.team_sn}},{name:"Player_name",minWidth:"160px",selector:"p_name",sortable:!0,cell:function(e){return e.p_name}},{name:"Player Type",minWidth:"160px",selector:"player_type",sortable:!0,cell:function(e){return e.player_type}},{name:"Total Score",minWidth:"160px",selector:"total_score",sortable:!0,cell:function(e){return e.total_score}},{name:"Run Bonus",minWidth:"160px",selector:"run_bonus",sortable:!0,cell:function(e){return e.run_bonus}},{name:"Run Scored",minWidth:"160px",selector:"runs_scored",sortable:!0,cell:function(e){return e.runs_scored}},{name:"Four's hit",minWidth:"160px",selector:"fours_hit",sortable:!0,cell:function(e){return e.fours_hit}},{name:"Six's hit",minWidth:"160px",selector:"sixes_hit",sortable:!0,cell:function(e){return e.sixes_hit}},{name:"Wicket Bonus",minWidth:"160px",selector:"wicket_bonus",sortable:!0,cell:function(e){return e.wicket_bonus}},{name:"Wicket Taken",minWidth:"160px",selector:"wickets_taken",sortable:!0,cell:function(e){return e.wickets_taken}}],x=n(467),O=n.n(x),g=n(485),v=n(478),_=n.n(v),y=n(884),N=n(473),w=(n(477),n(462),n(6)),C=function(e){var t=e.handlePerPage,n=e.rowsPerPage,r=e.handleFilter,a=e.searchTerm,c=Object(s.b)(),i=Object(s.c)((function(e){return e.rep}));console.log(i.seriesid);return Object(w.jsx)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:Object(w.jsxs)(j.a,{children:[Object(w.jsx)(b.a,{xl:"6",className:"d-flex align-items-center p-0",children:Object(w.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(w.jsx)(f.a,{for:"rows-per-page",children:"Show"}),Object(w.jsxs)(y.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:n,onChange:t,style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(w.jsx)("option",{value:"10",children:"10"}),Object(w.jsx)("option",{value:"25",children:"25"}),Object(w.jsx)("option",{value:"50",children:"50"})]}),Object(w.jsx)(f.a,{for:"rows-per-page",children:"Entries"})]})}),Object(w.jsxs)(b.a,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[Object(w.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1",children:[Object(w.jsx)(f.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(w.jsx)(N.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(w.jsx)(m.a,{color:"primary",onClick:function(){return c(Object(p.f)(i.seriesid,i.fixtureid)),void console.log(i.seriesid)},children:"Download CSV"})]})]})})},k=function(){var e=Object(s.c)((function(e){return e.rep})),t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)([]),u=Object(r.a)(l,2),d=u[0],j=u[1],b=Object(a.useState)(1),f=Object(r.a)(b,2),m=f[0],p=f[1],x=Object(a.useState)(10),v=Object(r.a)(x,2),y=v[0],N=v[1];Object(a.useEffect)((function(){e.player_reports&&(j(e.player_reports),console.log(e.player_reports.length))}),[e.player_reports]),console.log(e);Object(a.useEffect)((function(){if(c){var t=e.player_reports.records.filter((function(e){var t=e.full_name.toLowerCase().startsWith(c.toLowerCase())||e.email.toLowerCase().startsWith(c.toLowerCase()),n=e.full_name.toLowerCase().includes(c.toLowerCase())||e.email.toLowerCase().includes(c.toLowerCase());return t||(!t&&n?n:null)}));j(t),p(1)}}),[c]);return Object(w.jsx)(a.Fragment,{children:Object(w.jsx)(o.a,{children:Object(w.jsx)(_.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,highlightOnHover:!0,pointerOnHover:!0,paginationServer:!0,columns:h,paginationPerPage:y,sortIcon:Object(w.jsx)(g.a,{}),paginationDefaultPage:m,className:"react-dataTable",paginationComponent:function(){var t=Number(Math.ceil(e.player_reports.record_count/y));return Object(w.jsx)(O.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==m?m-1:0,onPageChange:function(e){return function(e){p(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={q:c},t=Object.keys(e).some((function(t){return e[t].length>0}));return 0===d.length&&t?[]:d.length?d.slice((m-1)*y,m*y):void 0}(),subHeaderComponent:Object(w.jsx)(C,{handlePerPage:function(e){var t=parseInt(e.currentTarget.value);N(t),p(1)},rowsPerPage:y,searchTerm:c,handleFilter:function(e){i(e)}})})})})};t.default=function(){var e,t,n=Object(s.c)((function(e){return e.rep})),h=Object(a.useState)(0),x=Object(r.a)(h,2),O=x[0],g=x[1],v=Object(a.useState)(0),_=Object(r.a)(v,2),y=_[0],N=_[1],C=Object(a.useState)(!1),P=Object(r.a)(C,2),E=P[0],L=P[1],S=Object(a.useState)(!1),T=Object(r.a)(S,2),R=T[0],I=T[1],W=Object(a.useState)(""),z=Object(r.a)(W,2),F=z[0],A=z[1],B=Object(a.useState)(""),D=Object(r.a)(B,2),U=D[0],H=D[1],G=Object(s.b)(),M=n.series_name.map((function(e){return{value:e.series_name,label:e.series_name}})),q=n.fixture_name.map((function(e){return{value:e.fixture_name,label:e.fixture_name}})),J=n.series_name.filter((function(e){return e.series_name===F})),K=n.fixture_name.filter((function(e){return e.fixture_name===U}));console.log(n.fixture_name);console.log(n.player_reports);return console.log(null===(e=J[0])||void 0===e?void 0:e.id),console.log(null===(t=K[0])||void 0===t?void 0:t.id),Object(a.useEffect)((function(){G(Object(p.e)()),console.log(n)}),[]),Object(a.useEffect)((function(){var e;G(Object(p.d)(null===(e=J[0])||void 0===e?void 0:e.id)),console.log("now"),console.log(n.fixture_name)}),[O]),console.log(n.fixture_name),Object(w.jsxs)(o.a,{children:[Object(w.jsx)(l.a,{children:Object(w.jsx)(u.a,{tag:"h4",children:n.isloading})}),Object(w.jsxs)(d.a,{children:[Object(w.jsx)("p",{children:Object(w.jsx)("a",{className:"my-50",target:"_blank",href:"https://react-select.com/home",rel:"noopener noreferrer"})}),Object(w.jsxs)(j.a,{children:[Object(w.jsxs)(b.a,{className:"mb-1",md:"6",sm:"12",children:[Object(w.jsx)(f.a,{children:"series"}),Object(w.jsx)(c.a,{onChange:function(e){return function(e){var t,n;A(e.value),I(!0),console.log("change"),g(null===(t=J[0])||void 0===t?void 0:t.id),console.log(null===(n=J[0])||void 0===n?void 0:n.id)}(e)},theme:i.f,className:"react-select",classNamePrefix:"select",options:M,isClearable:!0})]}),Object(w.jsxs)(b.a,{className:"mb-1",md:"6",sm:"12",children:[Object(w.jsx)(f.a,{children:"fixture"}),Object(w.jsx)(c.a,{onChange:function(e){return function(e){var t,n;H(e.value),I(!1),N(null===(t=K[0])||void 0===t?void 0:t.id),console.log(null===(n=K[0])||void 0===n?void 0:n.id),console.log(y)}(e)},theme:i.f,className:"react-select",value:R?" ":y,classNamePrefix:"select",options:q||"",isClearable:!0})]})]}),Object(w.jsx)(m.a.Ripple,{color:"primary",onClick:function(e){return function(e){var t,n,r,a,s,c;e.preventDefault(),G(Object(p.g)(null===(t=J[0])||void 0===t?void 0:t.id,null===(n=K[0])||void 0===n?void 0:n.id)),G(Object(p.c)(null===(r=J[0])||void 0===r?void 0:r.id)),G(Object(p.b)(null===(a=K[0])||void 0===a?void 0:a.id)),console.log(null===(s=J[0])||void 0===s?void 0:s.id,null===(c=K[0])||void 0===c?void 0:c.id),L(!0)}(e)},children:"submit"}),E?Object(w.jsx)(k,{}):""]})]})}},457:function(e,t,n){"use strict";var r=n(0),a=n(83),s=n.n(a),c=localStorage.getItem("TOKEN"),i=s.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:c}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(r.a)(Object(r.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},460:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return x})),n.d(t,"c",(function(){return O})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return v}));var r=n(1),a=n(123),s=n(470),c=(n(811),n(754)),i=n(886),o=n(812),l=(n(755),n(491),n(502),n(500),n(496),n(453),n(6)),u=function(e){var t=e.message;return Object(l.jsx)(r.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(r.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},j=function(e){var t=e.message;return Object(l.jsx)(r.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},b=function(e){var t=e.message;return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"success",icon:Object(l.jsx)(c.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},f=function(e){var t=e.message;return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"danger",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},m=function(){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(s.a,{size:"sm",color:"warning",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},p=function(e){return a.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},h=function(e){return a.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},x=function(e){return a.b.success(Object(l.jsx)(j,{message:e}),{hideProgressBar:!0})},O=function(e){return a.b.success(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},g=function(e){return a.b.error(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},v=function(){return a.b.warning(Object(l.jsx)(m,{}),{hideProgressBar:!0})}},462:function(e,t,n){},781:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return f}));var r=n(458),a=n(459),s=n.n(a),c=n(457),i=n(460),o=function(){return function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_ALL_REPORTS_INIT"}),e.next=3,c.a.get("/cricket/series/list").then((function(e){t({type:"SERIES_NAME",data:e.data.data}),console.log(e.data.data.records,"this")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(r.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),n({type:"GET_ALL_REPORTS_INIT"}),t.next=4,c.a.get("/cricket/fixture/list/".concat(e)).then((function(e){n({type:"FIXTURE_NAME",data:e.data.data}),console.log(e.data.data)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e,t){return function(){var n=Object(r.a)(s.a.mark((function n(r){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"GET_ALL_REPORTS_INIT"}),n.next=3,c.a.get("/cricket/reports/playerReport?series_id=".concat(e,"&fixture_id=").concat(t)).then((function(e){r({type:"PLAYER_REPORT",data:e.data.data}),console.table(e.data.data)}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},d=function(e){return console.log(e),function(t){t({type:"COLLECT_SERIESID",data:e})}},j=function(e){return console.log(e),function(t){t({type:"COLLECT_FIXTUREID",data:e})}},b=function(e,t){return Object(r.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.get("/cricket/reports/playerReport?series_id=".concat(e,"&fixture_id=").concat(t,"&download=true"),{responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","cricketplayerreport.csv"),document.body.appendChild(n),n.click()}));case 2:case"end":return n.stop()}}),n)})))},f=function(e){return function(){var t=Object(r.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/seriesUpload",e).then((function(e){Object(i.b)(e.data.message),n({type:"ADD_FILE",data:e.data.message})})).catch((function(e){Object(i.a)(e.response.data.message)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=192.48062848.chunk.js.map