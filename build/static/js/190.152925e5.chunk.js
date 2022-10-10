(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[190],{1439:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(1),r=a(516),s=a.n(r),i=a(517),l=a.n(i),o=a(897),u=a(925),b=a(659),d=a(6),j={CLOSE:"light-warning",OPEN:"light-success"},m=a(458),p=a(459),f=a.n(p),h=a(457),g=function(e){return function(){var t=Object(m.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/quiz/list",{params:e}).then((function(t){a({type:"GET_ALL_DATA",data:t.data,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=a(122),O=a(475),v=a(476),N=a(467),C=a.n(N),S=a(485),y=a(478),w=a.n(y),k=a(472),z=a(471),P=a(484),q=a(884),_=a(473),L=a(453),T=a(491),A=a(502),E=a(500),B=a(496),F=(a(477),a(462),a(544)),W=[{value:"",label:"Select Category"},{value:"Cricket",label:"Cricket"},{value:"Football",label:"Football"},{value:"Basketball",label:"Basketball"}],I=l()(s.a),D=function(e){var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,r=e.searchTerm;return Object(d.jsx)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:Object(d.jsxs)(k.a,{children:[Object(d.jsx)(z.a,{xl:"6",className:"d-flex align-items-center p-0",children:Object(d.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(d.jsx)(P.a,{for:"rows-per-page",children:"Show"}),Object(d.jsxs)(q.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"25",children:"25"}),Object(d.jsx)("option",{value:"50",children:"50"})]}),Object(d.jsx)(P.a,{for:"rows-per-page",children:"Entries"})]})}),Object(d.jsxs)(z.a,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1",children:[Object(d.jsx)(P.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(d.jsx)(_.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(d.jsx)(L.a.Ripple,{color:"primary",onClick:t,children:"Add"})]})]})})},H=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.quiz})),a=Object(F.g)(),r=Object(c.useState)(""),s=Object(n.a)(r,2),i=s[0],l=s[1],m=Object(c.useState)([]),p=Object(n.a)(m,2),f=p[0],N=p[1],y=Object(c.useState)(1),P=Object(n.a)(y,2),q=P[0],_=P[1],L=Object(c.useState)(10),H=Object(n.a)(L,2),R=H[0],J=H[1],K=Object(c.useState)({value:"",label:"Select Category"}),Y=Object(n.a)(K,2),G=Y[0],M=Y[1],Q=Object(c.useState)({value:"",label:"Select Role"}),U=Object(n.a)(Q,1)[0],V=Object(c.useState)({value:"",label:"Select Plan"}),X=Object(n.a)(V,1)[0],Z=Object(c.useState)({value:"",label:"Select Status",number:0}),$=Object(n.a)(Z,1)[0];Object(c.useEffect)((function(){var t={};G.value&&(t={quiz_category:G.value}),e(g(t))}),[e,t.data.record_count,G.value]),Object(c.useEffect)((function(){t.data.records&&N(t.data.records)}),[t.data.records]);var ee=Object(c.useCallback)(function(e){return[{name:"ID",minWidth:"320px",selector:"id",sortable:!0,cell:function(e){return e.quiz_id}},{name:"Name",minWidth:"320px",selector:"email",sortable:!0,cell:function(e){return e.quiz_name}},{name:"No of players",minWidth:"320px",selector:"email",sortable:!0,cell:function(e){return e.quiz_name}},{name:"No of Quizes",minWidth:"320px",selector:"email",sortable:!0,cell:function(e){return e.quiz_name}},{name:"Status",minWidth:"138px",selector:"status",sortable:!0,cell:function(e){return Object(d.jsx)(o.a,{className:"text-capitalize",color:j[e.quiz_status],pill:!0,children:e.quiz_status})}},{name:"Action",minWidth:"130px",selector:"action",cell:function(t){return Object(d.jsxs)("div",{className:"column-action",children:[Object(d.jsx)("a",{href:"/quiz/edit/".concat(t.quiz_id),children:Object(d.jsx)(u.a,{width:"17",className:"cursor-pointer"})}),Object(d.jsx)(b.a,{width:"17",className:"ml-2 cursor-pointer",onClick:function(){return e(t.quiz_id)}})]})}}]}((function(t){return I.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(a){a.value&&(e(function(e){return function(t){h.a.delete("/quiz/delete/".concat(e)).then((function(){t(g())})).catch((function(e){return console.log(e)}))}}(t)),I.fire({icon:"success",title:"Deleted!",text:"deleted successfully",customClass:{confirmButton:"btn btn-success"}}))}))})),[]);return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsxs)(T.a,{children:[Object(d.jsx)(A.a,{children:Object(d.jsx)(E.a,{tag:"h4",children:"Search Filter"})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(k.a,{children:Object(d.jsx)(z.a,{md:"3",children:Object(d.jsx)(v.a,{isClearable:!1,theme:O.f,className:"react-select",classNamePrefix:"select",options:W,value:G,onChange:function(e){M(e)}})})})})]}),Object(d.jsx)(T.a,{children:Object(d.jsx)(w.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:ee,sortIcon:Object(d.jsx)(S.a,{}),className:"react-dataTable",paginationPerPage:R,paginationDefaultPage:q,paginationComponent:function(){var e=Number(Math.ceil(t.data.record_count/R));return Object(d.jsx)(C.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==q?q-1:0,onPageChange:function(e){return function(e){_(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={role:U.value,currentPlan:X.value,status:$.value,q:i},t=Object.keys(e).some((function(t){return e[t].length>0}));return 0===f.length&&t?[]:f.length?f.slice((q-1)*R,q*R):void 0}(),subHeaderComponent:Object(d.jsx)(D,{toggleSidebar:function(){return a.push("/quiz_add")},handlePerPage:function(e){var t=parseInt(e.currentTarget.value);J(t),_(1)},rowsPerPage:R,searchTerm:i,handleFilter:function(e){l(e)}})})})]})};a(461),t.default=function(){return Object(d.jsx)("div",{className:"app-user-list",children:Object(d.jsx)(H,{})})}},457:function(e,t,a){"use strict";var n=a(0),c=a(83),r=a.n(c),s=localStorage.getItem("TOKEN"),i=r.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:s}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(n.a)(Object(n.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},461:function(e,t,a){},462:function(e,t,a){}}]);
//# sourceMappingURL=190.152925e5.chunk.js.map