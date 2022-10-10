(this["webpackJsonpsciflare-fantasy-react-admin"]=this["webpackJsonpsciflare-fantasy-react-admin"]||[]).push([[136],{1519:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(16),r=n(1),s=n(122),i=n(57),o=n.n(i),l=n(476),u=n(514),d=n(497),j=n.n(d),f=n(544),b=n(480),m=n(475),p=n(631),h=n(491),O=n(487),g=n(472),x=n(887),y=n(471),_=n(484),v=n(473),w=n(453),z=n(543),q=(n(469),n(477),n(6)),N=[{value:"Cricket",label:"Cricket"},{value:"Football",label:"Football"},{value:"Basketball",label:"Basketball"}];t.default=function(){var e=Object(f.j)(),t=Object(s.b)(),n=Object(r.useState)({}),i=Object(c.a)(n,2),d=i[0],T=i[1],E=e.params.id,I=Object(s.c)((function(e){return e.quiz})),A=Object(r.useState)(1),k=Object(c.a)(A,2),S=k[0],Q=k[1],R=I.isLoading,C=I.quizQuestionsData,D=I.data;console.log("question",e.params.id),console.log(D.records);var P=Object(b.c)({shouldUnregister:!1}),U=P.register,L=P.errors,B=P.handleSubmit,M=P.control,G=P.setValue,F=P.trigger;Object(r.useEffect)((function(){return E&&(t(Object(z.f)(E)),t(Object(z.c)())),function(){t(Object(z.p)())}}),[]),Object(r.useEffect)((function(){if(D.length){var e=D.filter((function(e){return e.quiz_id===+E}));e.length&&(T(e[0]),G("quiz_name",e[0].translation_quiz[0].translation_quiz_questions),G("quiz_category",{value:e[0].quiz_category,label:e[0].quiz_category}),G("quiz_expiry",e[0].quiz_expiry),G("quiz_coins",e[0].quiz_coins))}}),[JSON.stringify(D)]),Object(r.useEffect)((function(){C.length&&(Q(C.length),C.forEach((function(e,t){G("question-".concat(t),e.quiz_question),e.Answers.forEach((function(n,a){G("answer".concat(a+1,"-").concat(t),n.quiz_answer),n.quiz_answer_id===e.quiz_answer_id&&setTimeout((function(){var e=document.querySelectorAll('input[name="correct-answer-'.concat(t,'"]'));e.length&&e[a].setAttribute("checked",!0)}),100)}))})))}),[JSON.stringify(C)]);return R?Object(q.jsx)("div",{children:"Loading"}):C.length||Object.keys(d).length?Object(q.jsxs)(h.a,{className:"p-2",children:[Object(q.jsxs)(r.Fragment,{children:[Object(q.jsxs)("div",{className:"content-header",children:[Object(q.jsx)("h5",{className:"mb-0",children:"Edit Quiz Details"}),Object(q.jsx)("small",{className:"text-muted",children:"Quiz Details."})]}),Object(q.jsxs)(O.a,{onSubmit:B((function(e){console.log(e);var n={quiz_category:e.quiz_category.value,quiz_expiry:e.quiz_expiry,quiz_coins:e.quiz_coins,translation_quiz_name:e.quiz_name};t(Object(z.m)(E,n))})),children:[Object(q.jsxs)(g.a,{children:[Object(q.jsxs)(x.a,{tag:y.a,md:"6",children:[Object(q.jsx)(_.a,{className:"form-label",for:"quiz_name",children:"Name"}),Object(q.jsx)(v.a,{name:"quiz_name",id:"quiz_name",placeholder:"Quiz name",innerRef:U({required:!0}),className:o()({"is-invalid":L.quiz_name})})]}),Object(q.jsxs)(x.a,{tag:y.a,md:"6",children:[Object(q.jsx)(_.a,{className:"form-label",for:"quiz_category",children:"Quiz Category"}),Object(q.jsx)(b.a,{isClearable:!0,as:l.a,id:"quiz_category",control:M,name:"quiz_category",rules:{required:!0},options:N,className:o()("react-select",{"is-invalid":L.quiz_category}),classNamePrefix:"select",theme:m.f})]})]}),Object(q.jsxs)(g.a,{children:[Object(q.jsxs)("div",{className:"form-group form-password-toggle col-md-6",children:[Object(q.jsx)(_.a,{className:"form-label",for:"quiz_expiry",children:"Expiry"}),Object(q.jsx)(b.a,{"data-enable-time":!0,as:j.a,control:M,id:"quiz_expiry",name:"quiz_expiry",rules:{required:!0},className:o()("form-control flatpickr-input",{"is-invalid":L.quiz_expiry})})]}),Object(q.jsxs)("div",{className:"form-group form-password-toggle col-md-6",children:[Object(q.jsx)(_.a,{className:"form-label",for:"quiz_coins",children:"Quiz coins"}),Object(q.jsx)(v.a,{type:"number",name:"quiz_coins",id:"quiz_coins",innerRef:U({required:!0}),className:o()({"is-invalid":L.quiz_coins})})]})]}),Object(q.jsx)("div",{className:"d-flex justify-content-end",children:Object(q.jsx)(w.a.Ripple,{type:"submit",color:"primary",className:"btn-next",children:Object(q.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Submit Quiz Details"})})})]})]}),C.length&&Object(q.jsxs)(r.Fragment,{children:[Object(q.jsxs)("div",{className:"content-header",children:[Object(q.jsx)("h5",{className:"mb-0",children:"Edit Questions"}),Object(q.jsx)("small",{children:"Enter Questions."})]}),Object(q.jsxs)(O.a,{onSubmit:B((function(){})),children:[Object(q.jsx)(u.a,{count:S,children:function(e){return Object(q.jsxs)("li",{className:"list-unstyled",children:[Object(q.jsx)(g.a,{children:Object(q.jsxs)(x.a,{tag:y.a,md:"12",children:[Object(q.jsx)(_.a,{className:"form-label",for:"question-".concat(e),children:"Quiz question"}),Object(q.jsx)(v.a,{type:"text",id:"question-".concat(e),name:"question-".concat(e),placeholder:"Who is Lionel Messi?",innerRef:U({required:!0}),className:o()({"is-invalid":L["question-".concat(e)]})})]})}),Object(q.jsxs)(g.a,{children:[Object(q.jsxs)(x.a,{tag:y.a,md:"8",children:[Object(q.jsx)(_.a,{className:"form-label",for:"answer1-".concat(e),children:"Answer 1"}),Object(q.jsx)(v.a,{type:"text",name:"answer1-".concat(e),id:"answer1-".concat(e),placeholder:"Cricketer",innerRef:U({required:!0}),className:o()({"is-invalid":L["answer1-".concat(e)]})})]}),Object(q.jsx)(x.a,{tag:y.a,md:"4",children:Object(q.jsx)("div",{className:"d-flex height-95-per align-items-end",children:Object(q.jsx)(x.a,{check:!0,inline:!0,children:Object(q.jsxs)(_.a,{check:!0,children:[Object(q.jsx)(v.a,Object(a.a)(Object(a.a)({type:"radio",name:"correct-answer-".concat(e),defaulChecked:!0},U("correct-answer-".concat(e))),{},{value:"1"})),"Correct Answer"]})})})})]}),Object(q.jsxs)(g.a,{children:[Object(q.jsxs)(x.a,{tag:y.a,md:"8",children:[Object(q.jsx)(_.a,{className:"form-label",for:"answer2-".concat(e),children:"Answer2"}),Object(q.jsx)(v.a,{type:"text",name:"answer2-".concat(e),id:"answer2-".concat(e),placeholder:"Footballer",innerRef:U({required:!0}),className:o()({"is-invalid":L["answer2-".concat(e)]})})]}),Object(q.jsx)(x.a,{tag:y.a,md:"4",children:Object(q.jsx)("div",{className:"d-flex height-95-per align-items-end",children:Object(q.jsx)(x.a,{check:!0,inline:!0,children:Object(q.jsxs)(_.a,{check:!0,children:[Object(q.jsx)(v.a,Object(a.a)(Object(a.a)({type:"radio",name:"correct-answer-".concat(e)},U("correct-answer-".concat(e))),{},{value:"2"})),"Correct Answer"]})})})})]}),Object(q.jsxs)(g.a,{children:[Object(q.jsxs)(x.a,{tag:y.a,md:"8",children:[Object(q.jsx)(_.a,{className:"form-label",for:"answer3-".concat(e),children:"Answer 3"}),Object(q.jsx)(v.a,{type:"text",name:"answer3-".concat(e),id:"answer3-".concat(e),placeholder:"VolleyBaller",innerRef:U({required:!0}),className:o()({"is-invalid":L["answer3-".concat(e)]})})]}),Object(q.jsx)(x.a,{tag:y.a,md:"4",children:Object(q.jsx)("div",{className:"d-flex height-95-per align-items-end",children:Object(q.jsx)(x.a,{check:!0,inline:!0,children:Object(q.jsxs)(_.a,{check:!0,children:[Object(q.jsx)(v.a,Object(a.a)(Object(a.a)({type:"radio",name:"correct-answer-".concat(e)},U("correct-answer-".concat(e))),{},{value:"3"})),"Correct Answer"]})})})})]}),Object(q.jsxs)(g.a,{children:[Object(q.jsxs)(x.a,{tag:y.a,md:"8",children:[Object(q.jsx)(_.a,{className:"form-label",for:"answer4-".concat(e),children:"Answer 4"}),Object(q.jsx)(v.a,{type:"text",name:"answer4-".concat(e),id:"answer4-".concat(e),placeholder:"BasketBaller",innerRef:U({required:!0}),className:o()({"is-invalid":L["answer4-".concat(e)]})})]}),Object(q.jsx)(x.a,{tag:y.a,md:"4",children:Object(q.jsx)("div",{className:"d-flex height-95-per align-items-end",children:Object(q.jsx)(x.a,{check:!0,inline:!0,children:Object(q.jsxs)(_.a,{check:!0,children:[Object(q.jsx)(v.a,Object(a.a)(Object(a.a)({type:"radio",name:"correct-answer-".concat(e)},U("correct-answer-".concat(e))),{},{value:"4"})),"Correct Answer"]})})})})]}),Object(q.jsx)(g.a,{children:Object(q.jsx)(x.a,{tag:y.a,md:"6",children:Object(q.jsx)("div",{className:"d-flex justify-content-end",children:Object(q.jsx)(w.a.Ripple,{type:"button",color:"primary",className:"btn-next",onClick:function(){!function(e){F().then((function(n){if(n){var a=C[e];console.log(a);var c={quiz_id:a.quiz_id,quiz_question:document.getElementById("question-".concat(e)).value,quiz_question_duration:"30",quiz_question_sno:e,quiz_answer_id:a.Answers[0].quiz_answer_id,quiz_question_answers:[{quiz_answer:document.getElementById("answer1-".concat(e)).value,quiz_answer_sno:"1",quiz_answer_id:a.Answers[0].quiz_answer_id,quiz_answer_correct:"1"===document.querySelector('input[name="correct-answer-'.concat(e,'"]:checked')).value?1:0},{quiz_answer:document.getElementById("answer2-".concat(e)).value,quiz_answer_sno:"2",quiz_answer_id:a.Answers[1].quiz_answer_id,quiz_answer_correct:"2"===document.querySelector('input[name="correct-answer-'.concat(e,'"]:checked')).value?1:0},{quiz_answer:document.getElementById("answer3-".concat(e)).value,quiz_answer_sno:"3",quiz_answer_id:a.Answers[2].quiz_answer_id,quiz_answer_correct:"3"===document.querySelector('input[name="correct-answer-'.concat(e,'"]:checked')).value?1:0},{quiz_answer:document.getElementById("answer4-".concat(e)).value,quiz_answer_sno:"4",quiz_answer_id:a.Answers[3].quiz_answer_id,quiz_answer_correct:"4"===document.querySelector('input[name="correct-answer-'.concat(e,'"]:checked')).value?1:0}]};t(Object(z.n)(a.quiz_question_id,c))}}))}(e)},children:Object(q.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Submit Questions"})})})})})]},e)}}),Object(q.jsx)("div",{className:"d-flex justify-content-between",children:S<=4&&Object(q.jsxs)(w.a.Ripple,{className:"btn-icon",color:"primary",onClick:function(){5!==S&&Q(S+1)},children:[Object(q.jsx)(p.a,{size:14}),Object(q.jsx)("span",{className:"align-middle ml-25",children:"Add New Question"})]})})]})]})||""]}):Object(q.jsx)("div",{children:"Data Not Available"})}},457:function(e,t,n){"use strict";var a=n(0),c=n(83),r=n.n(c),s=localStorage.getItem("TOKEN"),i=r.a.create({baseURL:"https://fantasyapi.sciflaredev.com/admin/api",headers:{"Content-type":"application/json",Authorization:s}});i.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return Object(a.a)(Object(a.a)({},e),{},{headers:{"Content-type":"application/json",Authorization:"".concat(t)}})})),t.a=i},460:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"a",(function(){return x})),n.d(t,"f",(function(){return y}));var a=n(1),c=n(123),r=n(470),s=(n(811),n(754)),i=n(886),o=n(812),l=(n(755),n(491),n(502),n(500),n(496),n(453),n(6)),u=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(s.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},d=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(s.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},j=function(e){var t=e.message;return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(s.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})})})},f=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"success",icon:Object(l.jsx)(s.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},b=function(e){var t=e.message;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"danger",icon:Object(l.jsx)(i.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:t})]})}),Object(l.jsx)("div",{className:"toastify-body"})]})},m=function(){return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:"toastify-header",children:Object(l.jsxs)("div",{className:"title-wrapper",children:[Object(l.jsx)(r.a,{size:"sm",color:"warning",icon:Object(l.jsx)(o.a,{size:12})}),Object(l.jsx)("h6",{className:"toast-title",children:"Warning!"})]})}),Object(l.jsx)("div",{className:"toastify-body",children:Object(l.jsx)("span",{role:"img","aria-label":"toast-text",children:"\ud83d\udc4b Text Content Empty"})})]})},p=function(e){return c.b.success(Object(l.jsx)(u,{message:e}),{hideProgressBar:!0})},h=function(e){return c.b.success(Object(l.jsx)(d,{message:e}),{hideProgressBar:!0})},O=function(e){return c.b.success(Object(l.jsx)(j,{message:e}),{hideProgressBar:!0})},g=function(e){return c.b.success(Object(l.jsx)(f,{message:e}),{hideProgressBar:!0})},x=function(e){return c.b.error(Object(l.jsx)(b,{message:e}),{hideProgressBar:!0})},y=function(){return c.b.warning(Object(l.jsx)(m,{}),{hideProgressBar:!0})}},469:function(e,t,n){},471:function(e,t,n){"use strict";var a=n(14),c=n(15),r=n(1),s=n.n(r),i=n(5),o=n.n(i),l=n(57),u=n.n(l),d=n(82),j=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:j,offset:j})]),b={tag:d.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,r=e.widths,i=e.tag,o=Object(c.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,a){var c=e[t];if(delete o[t],c||""===c){var r=!a;if(Object(d.isObject)(c)){var s,i=r?"-":"-"+t+"-",j=p(r,t,c.size);l.push(Object(d.mapToCssModules)(u()(((s={})[j]=c.size||""===c.size,s["order"+i+c.order]=c.order||0===c.order,s["offset"+i+c.offset]=c.offset||0===c.offset,s)),n))}else{var f=p(r,t,c);l.push(f)}}})),l.length||l.push("col");var j=Object(d.mapToCssModules)(u()(t,l),n);return s.a.createElement(i,Object(a.a)({},o,{className:j}))};h.propTypes=b,h.defaultProps=m,t.a=h},472:function(e,t,n){"use strict";var a=n(14),c=n(15),r=n(1),s=n.n(r),i=n(5),o=n.n(i),l=n(57),u=n.n(l),d=n(82),j=o.a.oneOfType([o.a.number,o.a.string]),f={tag:d.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:j,sm:j,md:j,lg:j,xl:j},b={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,i=e.tag,o=e.form,l=e.widths,j=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];l.forEach((function(t,n){var a=e[t];if(delete j[t],a){var c=!n;f.push(c?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(d.mapToCssModules)(u()(t,r?"no-gutters":null,o?"form-row":"row",f),n);return s.a.createElement(i,Object(a.a)({},j,{className:b}))};m.propTypes=f,m.defaultProps=b,t.a=m},473:function(e,t,n){"use strict";var a=n(14),c=n(15),r=n(58),s=n(121),i=n(1),o=n.n(i),l=n(5),u=n.n(l),d=n(57),j=n.n(d),f=n(82),b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.focus=n.focus.bind(Object(r.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,s=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,m=e.innerRef,p=Object(c.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),g=u||("select"===r||"textarea"===r?r:"input"),x="form-control";b?(x+="-plaintext",g=u||"input"):"file"===r?x+="-file":"range"===r?x+="-range":h&&(x=d?null:"form-check-input"),p.size&&O.test(p.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=p.size,delete p.size);var y=Object(f.mapToCssModules)(j()(t,l&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,x),n);return("input"===g||u&&"function"===typeof u)&&(p.type=r),p.children&&!b&&"select"!==r&&"string"===typeof g&&"select"!==g&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete p.children),o.a.createElement(g,Object(a.a)({},p,{ref:m,className:y,"aria-invalid":l}))},t}(o.a.Component);m.propTypes=b,m.defaultProps={type:"text"},t.a=m},487:function(e,t,n){"use strict";var a=n(14),c=n(15),r=n(58),s=n(121),i=n(1),o=n.n(i),l=n(5),u=n.n(l),d=n(57),j=n.n(d),f=n(82),b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.submit=n.submit.bind(Object(r.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.inline,s=e.tag,i=e.innerRef,l=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.mapToCssModules)(j()(t,!!r&&"form-inline"),n);return o.a.createElement(s,Object(a.a)({},l,{ref:i,className:u}))},t}(i.Component);m.propTypes=b,m.defaultProps={tag:"form"},t.a=m},514:function(e,t,n){"use strict";var a=n(0),c=n(124),r=n(6),s=["count","tag","children"],i=function(e){for(var t=e.count,n=e.tag,i=e.children,o=Object(c.a)(e,s),l=n,u=[],d=0;d<t;d++)u.push(i(d));return Object(r.jsx)(l,Object(a.a)(Object(a.a)({},o),{},{children:u}))};i.defaultProps={tag:"div"},t.a=i},543:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"j",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"k",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"l",(function(){return O})),n.d(t,"f",(function(){return g})),n.d(t,"p",(function(){return x})),n.d(t,"m",(function(){return y})),n.d(t,"n",(function(){return _})),n.d(t,"o",(function(){return v}));var a=n(458),c=n(459),r=n.n(c),s=n(457),i=n(460),o=function(e,t){return function(){var n=Object(a.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"GET_ALL_DATA_INIT"}),n.next=3,s.a.get("/quiz/list?page=".concat(t),{params:e}).then((function(t){a({type:"GET_ALL_DATA",data:t.data.data,params:e}),console.log(t.data.data)}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var c=Object(a.a)(r.a.mark((function a(c){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:"GET_ALL_DATA_INIT"}),a.next=3,s.a.get("/quiz/list?quiz_category=Cricket&page=".concat(t,"&limit=").concat(n),{params:e}).then((function(t){c({type:"GET_CRIC_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 3:case"end":return a.stop()}}),a)})));return function(e){return c.apply(this,arguments)}}()},u=function(e,t,n){return function(){var c=Object(a.a)(r.a.mark((function a(c){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:"GET_ALL_DATA_INIT"}),a.next=3,s.a.get("/quiz/list?quiz_category=Football&page=".concat(t,"&limit=").concat(n),{params:e}).then((function(t){c({type:"GET_FOOT_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 3:case"end":return a.stop()}}),a)})));return function(e){return c.apply(this,arguments)}}()},d=function(e,t){return function(){var n=Object(a.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"GET_ALL_DATA_INIT"}),n.next=3,s.a.get("/quiz/list?quiz_category=Basketball&page=".concat(t),{params:e}).then((function(t){a({type:"GET_BASK_QUIZ",data:t.data.data,params:e}),console.log(t.data.data)}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},j=function(e){return function(t){t({type:"LANG_ID",data:e})}},f=function(e){return function(t){t({type:"LANG_ID",data:e})}},b=function(e){return function(t){t({type:"QUIZ_ENG_QUESTION",data:e})}},m=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/master/language/dropdownlist",{params:e}).then((function(t){n({type:"LANGS_ID",data:t.data,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(t){s.a.post("/quiz/add",e).then((function(e){Object(i.b)(e.data.message),t({type:"QUIZ_ADD",data:e.data})})).catch((function(e){Object(i.a)(e.message),console.log(e)}))}},h=function(e){return function(t){t({type:"ADD_QUIZ_POST_INIT"}),s.a.post("/quiz/questions/add",e).then((function(e){Object(i.b)(e.data.message),t({type:"QUIZ_QUESTION_ADD",data:e.data})})).catch((function(e){Object(i.f)(e.message),console.log(e)}))}},O=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"DETAILS_VIEW_INIT"}),t.next=3,s.a.put("/quiz/view/".concat(e)).then((function(e){n({type:"QUIZ_DET",data:e.data.data})})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(t){t({type:"QUIZ_QUESTIONS_INIT"}),s.a.get("/quiz/questions/list/".concat(e)).then((function(e){t({type:"QUIZ_QUESTIONS_DATA",data:e.data.data})})).catch((function(e){return console.log(e)}))}},x=function(){return{type:"RESET_QUIZ_QUESTIONS"}},y=function(e,t){return function(n){s.a.put("/quiz/edit/".concat(e),t).then((function(e){n({type:"QUIZ_EDIT",data:e.data})})).catch((function(e){return console.log(e)}))}},_=function(e,t){return function(n){s.a.put("/quiz/questions/edit/".concat(e),t).then((function(e){n({type:"QUIZ_EDIT_QUESTIONS",data:e.data})})).catch((function(e){return console.log(e)}))}},v=function(e,t){return function(){var n=Object(a.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.post("quiz/toggle_status/".concat(e)).then((function(e){Object(i.b)(e.data.message),console.log(t),a({type:"QUIZ_TOGGLE_STATUS",data:t})})).catch((function(e){console.log("Error in Feed Post: ",e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},631:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(5),s=n.n(r);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,s=void 0===r?24:r,l=o(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),c.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),c.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="Plus",t.a=l}}]);
//# sourceMappingURL=136.b3859656.chunk.js.map