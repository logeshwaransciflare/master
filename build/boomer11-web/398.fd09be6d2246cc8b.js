"use strict";(self.webpackChunkboomer11_web=self.webpackChunkboomer11_web||[]).push([[398],{4398:(Te,b,r)=>{r.r(b),r.d(b,{JoinChallengeFootballModule:()=>xe,playerFactory:()=>F});var c=r(9808),d=r(2784),p=r(7489),e=r(5e3),v=r(9783),x=r(3949),Z=r(6439),k=r(3655),M=r(8750),D=r(4383),h=r(5315),f=r(845);const T=function(){return{width:"50vw"}},j=function(){return{"960px":"75vw","640px":"100vw"}};function A(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"p-dialog",1),e.NdJ("visibleChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.enableModalConfirmFlag=o)}),e.TgZ(2,"div",2)(3,"div",3),e._UZ(4,"div",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"p")(9,"span",8),e._uU(10,"Challenge Confirmation"),e.qZA()()(),e.TgZ(11,"div",9)(12,"p"),e._uU(13,"Current Balance"),e.qZA(),e.TgZ(14,"p"),e._UZ(15,"span",10),e._uU(16),e.qZA()(),e._UZ(17,"div",9),e.TgZ(18,"div",9)(19,"p"),e._uU(20,"Contest Fee"),e.qZA(),e.TgZ(21,"p"),e._UZ(22,"span",10),e._uU(23),e.qZA()()()(),e.TgZ(24,"div",11)(25,"p",12),e._uU(26,"By Joining this contest you accept to Boomer11"),e.qZA(),e.TgZ(27,"p",13),e._uU(28,"Terms & Conditions"),e.qZA()(),e.TgZ(29,"div",14)(30,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.joinChallengeEmitFn())}),e.qZA(),e.TgZ(31,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.closeDialog())}),e.qZA()()()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Akn(e.DdM(9,T)),e.Q6J("modal",!0)("closable",!1)("visible",t.enableModalConfirmFlag)("breakpoints",e.DdM(10,j))("draggable",!1),e.xp6(15),e.hij("\xa0",t.userMoneyData.total_balance," "),e.xp6(7),e.hij("\xa0",t.entryFee||"","")}}const S=function(){return{"900px":"75vw","640px":"100vw"}};function q(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"p-dialog",17),e.NdJ("visibleChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.enableModalJoinConfirmFlag=o)}),e.TgZ(2,"div",18),e._UZ(3,"img",19),e.TgZ(4,"div",20)(5,"p",21),e._uU(6,"Hurray!"),e.qZA()(),e.TgZ(7,"h2",22),e._uU(8," Great work,you have succsessfully joined a challenge "),e.qZA(),e.TgZ(9,"div",23)(10,"div",24)(11,"button",25),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.myChallenges())}),e._uU(12," See my challanges "),e.qZA()(),e.TgZ(13,"div")(14,"button",26),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.joinChallenges())}),e._uU(15," Join more challanges "),e.qZA()()()()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Akn(e.DdM(8,T)),e.Q6J("showHeader",!1)("modal",!0)("closable",!1)("visible",t.enableModalJoinConfirmFlag)("breakpoints",e.DdM(9,S))("draggable",!1)}}let N=(()=>{class i{constructor(t,n,o,a){this.location=t,this.router=n,this.footballService=o,this.route=a,this.joinChallengeEmit=new e.vpe,this.joinChallengeRefresh=new e.vpe,this.enableModalJoinConfirmFlag=!1}ngOnInit(){}ngOnChanges(t){}closeDialog(){this.enableModalConfirmFlag=!1,this.joinChallengeEmit.emit(!1)}joinChallengeEmitFn(){this.enableModalConfirmFlag=!1,this.enableModalJoinConfirmFlag=!0,this.joinChallengeEmit.emit(!0)}myChallenges(){this.enableModalJoinConfirmFlag=!1;let t=this.route.snapshot.paramMap.get("id");this.router.navigate([`football/my-challenges/${t}`])}joinChallenges(){this.fixture_id=this.footballService.savedContestData.fixture_id,this.router.navigate([`football/all-challenges/${this.fixture_id}`]),this.joinChallengeRefresh.emit(!1)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.Ye),e.Y36(d.F0),e.Y36(x.I),e.Y36(d.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["challenge-confirmation-football"]],inputs:{enableModalConfirmFlag:"enableModalConfirmFlag",userMoneyData:"userMoneyData",entryFee:"entryFee"},outputs:{joinChallengeEmit:"joinChallengeEmit",joinChallengeRefresh:"joinChallengeRefresh"},features:[e.TTD],decls:2,vars:2,consts:[[4,"ngIf"],["styleClass","challengeConfirmDialog",3,"modal","closable","visible","breakpoints","draggable","visibleChange"],[1,"wrapper"],[1,"pvt_img_wrapper"],[1,"pvt_img"],[1,"challenge-wrapper"],[1,"grid","justify-content-evenly","align-items-center",2,"width","80%","margin","0 auto"],[1,"col-12","text-center"],[1,"f-poggers"],[1,"col-4"],[1,"coin-win"],[1,"d-flex","justify-content-center","align-items-center","flex-column"],[1,""],[1,"terms"],[1,"d-flex","justify-content-center","align-items-center",2,"gap","10px"],["pButton","","type","button","label","Join Challenge",3,"click"],["pButton","","type","button","label","Cancel",3,"click"],["id","confirmdialog",3,"showHeader","modal","closable","visible","breakpoints","draggable","visibleChange"],[1,"text-center","pt-3",2,"background","#141941"],["src","/assets/images/pvt_trophy.png","height","100","width","100"],[1,"pt-3"],[2,"color","#60dcbb","font-size","30px"],[1,"py-3","text-white"],[1,"d-flex","flex-wrap","justify-content-center","pb-3"],[1,"mr-3"],["pButton","","type","button",2,"background","#1da580",3,"click"],["pButton","","type","button",3,"click"]],template:function(t,n){1&t&&(e.YNc(0,A,32,11,"ng-container",0),e.YNc(1,q,16,10,"ng-container",0)),2&t&&(e.Q6J("ngIf",n.enableModalConfirmFlag),e.xp6(1),e.Q6J("ngIf",n.enableModalJoinConfirmFlag))},dependencies:[c.O5,h.V,f.Hq],styles:[".terms[_ngcontent-%COMP%]{color:#ae2c72}.challenge-wrapper[_ngcontent-%COMP%]{background:transparent linear-gradient(115deg,#a31193 0%,#1e1340 100%) 0% 0% no-repeat padding-box;border-radius:10px;margin-bottom:10px;padding:10px;color:#fff}  .challengeConfirmDialog .p-dialog-header{padding:1rem 0 3rem}.wrapper[_ngcontent-%COMP%]{width:80%;margin:0 auto}.pvt_img[_ngcontent-%COMP%]{background:url(/assets/images/pvt_trophy.png);width:80px;height:80px;background-size:contain}.pvt_img_wrapper[_ngcontent-%COMP%]{position:absolute;border-radius:50%;border:20px solid #fff;top:-50px;margin:0 auto;text-align:center;left:0;right:0;width:120px;background:#1a2b63;z-index:2}[_nghost-%COMP%]     .p-dialog .p-dialog-content{background-color:#141941!important}"]}),i})();var y=r(1497),O=r(507),w=r(3713);const U=function(i,s){return{"":i,selected:s}};function I(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",30)(1,"h3",31),e._uU(2,"All Teams"),e.qZA(),e.TgZ(3,"div",32),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.seletAll(o.chkAll))}),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(3),e.Q6J("ngClass",e.WLB(1,U,!t.chkAll,t.chkAll))}}function P(i,s){1&i&&(e.ynx(0),e._uU(1," No data "),e.BQk())}function Q(i,s){1&i&&e._UZ(0,"div",60)}const m=function(i){return{selected:i}};function Y(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",61),e.NdJ("click",function(o){e.CHM(t);const a=e.oxw(3).$implicit,l=e.oxw(3);return e.KtG(l.select(o,a))}),e.qZA()}if(2&i){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,m,n.isClicked[t]))}}function B(i,s){if(1&i&&(e.ynx(0),e.YNc(1,Q,1,0,"div",58),e.YNc(2,Y,1,3,"div",59),e.BQk()),2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isThisJoinedTeam(t)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.isThisJoinedTeam(t))}}function E(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",61),e.NdJ("click",function(o){e.CHM(t);const a=e.oxw(3).$implicit,l=e.oxw(3);return e.KtG(l.select(o,a))}),e.qZA()}if(2&i){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,m,n.isClicked[t]))}}function H(i,s){if(1&i&&(e.ynx(0),e.YNc(1,E,1,3,"div",59),e.BQk()),2&i){const t=e.oxw(5);e.xp6(1),e.Q6J("ngIf",t.contestData&&1==t.contestData.multi)}}function G(i,s){1&i&&e._UZ(0,"div",60)}function z(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",61),e.NdJ("click",function(o){e.CHM(t);const a=e.oxw(3).$implicit,l=e.oxw(3);return e.KtG(l.select(o,a))}),e.qZA()}if(2&i){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,m,n.isClicked[t]))}}function L(i,s){if(1&i&&(e.ynx(0),e.YNc(1,G,1,0,"div",58),e.YNc(2,z,1,3,"div",59),e.BQk()),2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isThisJoinedTeam(t)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.isThisJoinedTeam(t))}}function K(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",61),e.NdJ("click",function(o){e.CHM(t);const a=e.oxw(3).$implicit,l=e.oxw(3);return e.KtG(l.select(o,a))}),e.qZA()}if(2&i){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,m,n.isClicked[t]))}}function R(i,s){if(1&i&&(e.ynx(0),e.YNc(1,K,1,3,"div",59),e.BQk()),2&i){const t=e.oxw(5);e.xp6(1),e.Q6J("ngIf",t.contestData&&1==t.contestData.multi)}}function $(i,s){1&i&&e._UZ(0,"div",63)}function V(i,s){if(1&i&&(e.ynx(0),e.YNc(1,$,1,0,"div",62),e.BQk()),2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isThisJoinedTeam(t))}}function W(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",64),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit,a=e.oxw(3);return a.isClicked=[],e.KtG(a.isClicked[o]=!0!==a.isClicked[o])}),e.qZA(),e.BQk()}if(2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngClass",e.VKq(1,m,n.isClicked[t]))}}function X(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.YNc(1,B,3,2,"ng-container",1),e.YNc(2,H,2,1,"ng-container",1),e.YNc(3,L,3,2,"ng-container",1),e.YNc(4,R,2,1,"ng-container",1),e.YNc(5,V,2,1,"ng-container",1),e.YNc(6,W,2,3,"ng-container",1),e.TgZ(7,"div",35),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw(3);return e.KtG(a.showPreviewByTeam(o))}),e.TgZ(8,"div",36)(9,"div",37),e._uU(10),e.qZA(),e.TgZ(11,"div",38),e._UZ(12,"span",39),e.qZA()(),e.TgZ(13,"div",40)(14,"div",41)(15,"div",42)(16,"div",43)(17,"span",44),e._UZ(18,"img",45),e.TgZ(19,"span",46),e._uU(20,"C"),e.qZA()(),e.TgZ(21,"span",47)(22,"span",48),e._uU(23),e.qZA(),e._uU(24),e.qZA()()(),e.TgZ(25,"div",49)(26,"div",50)(27,"span",51)(28,"span",52),e._uU(29),e.qZA(),e.TgZ(30,"span"),e._uU(31),e.qZA()(),e.TgZ(32,"span")(33,"strong"),e._uU(34,"Vs"),e.qZA()(),e.TgZ(35,"span",51)(36,"span",52),e._uU(37),e.qZA(),e.TgZ(38,"span"),e._uU(39),e.qZA()()()(),e.TgZ(40,"div",53)(41,"div",43)(42,"span"),e._UZ(43,"img",45),e.TgZ(44,"span",46),e._uU(45,"VC"),e.qZA()(),e.TgZ(46,"span",47)(47,"span",48),e._uU(48),e.qZA(),e._uU(49),e.qZA()()()()(),e.TgZ(50,"div",54)(51,"div",55)(52,"span",56),e._uU(53,"GK \xa0 "),e.TgZ(54,"span",57),e._uU(55),e.qZA()(),e.TgZ(56,"span",56),e._uU(57,"DEF \xa0 "),e.TgZ(58,"span",57),e._uU(59),e.qZA()(),e.TgZ(60,"span",56),e._uU(61,"MID \xa0 "),e.TgZ(62,"span",57),e._uU(63),e.qZA()(),e.TgZ(64,"span",56),e._uU(65,"FWD \xa0 "),e.TgZ(66,"span",57),e._uU(67),e.qZA()()()()(),e.BQk()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&0==n.contestData.multi&&n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&0==n.contestData.multi&&!n.anyTeamJoinedThisContest(n.contestData)),e.xp6(4),e.hij("Team ",t,""),e.xp6(8),e.MGl("src","https://thefantasysportsapi.com/media/teams/",n.getCaptainDetails(t)[0].squads[0].team.team_sn,".svg",e.LSH),e.xp6(5),e.Oqu(n.getCaptainDetails(t)[0].squads[0].player_api||""),e.xp6(1),e.hij(" ",n.getCaptainDetails(t)[0].squads[0].team.team_sn,""),e.xp6(5),e.hij(" ",n.getTeam1Name(t).length||""," "),e.xp6(2),e.hij(" ",n.getTeam1Name(t)[0].squads[0].team.team_sn||""," "),e.xp6(6),e.hij(" ",n.getTeam2Name(t).length||""," "),e.xp6(2),e.hij(" ",n.getTeam2Name(t)[0].squads[0].team.team_sn||""," "),e.xp6(4),e.MGl("src","https://thefantasysportsapi.com/media/teams/",n.getViceCaptainDetails(t)[0].squads[0].team.team_sn,".svg",e.LSH),e.xp6(5),e.Oqu(n.getViceCaptainDetails(t)[0].squads[0].player_api||""),e.xp6(1),e.hij(" ",n.getViceCaptainDetails(t)[0].squads[0].team.team_sn,""),e.xp6(6),e.Oqu(n.getGkCount(t)||""),e.xp6(4),e.Oqu(n.getDefCount(t)||""),e.xp6(4),e.Oqu(n.getMidCount(t)||""),e.xp6(4),e.Oqu(n.getFwdCount(t)||"")}}function ee(i,s){if(1&i&&(e.TgZ(0,"div",33)(1,"div",34),e.YNc(2,P,2,0,"ng-container",1),e.YNc(3,X,68,21,"ng-container",1),e.qZA()()),2&i){const t=s.$implicit,n=e.oxw(3);e.xp6(2),e.Q6J("ngIf",0===n.myteamsGroup[t].length),e.xp6(1),e.Q6J("ngIf",n.myteamsGroup[t].length)}}function te(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",65),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.createTeams())}),e.qZA()}}function ne(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",66),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.joinChallenge())}),e.qZA()}}function ie(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",67),e.NdJ("click",function(o){e.CHM(t);const a=e.oxw(3);return e.KtG(a.selectTeam(o))}),e.qZA()}}function ae(i,s){if(1&i&&(e.ynx(0),e.TgZ(1,"section",20)(2,"div",21)(3,"div",22)(4,"h3",23),e._uU(5,"Select Teams"),e.qZA()(),e.YNc(6,I,4,4,"div",24),e.qZA(),e.YNc(7,ee,4,2,"div",25),e.TgZ(8,"div",26),e.YNc(9,te,1,0,"button",27),e.YNc(10,ne,1,0,"button",28),e.YNc(11,ie,1,0,"button",29),e.qZA()(),e.BQk()),2&i){const t=e.oxw(2);e.xp6(6),e.Q6J("ngIf",t.contestData&&1==t.contestData.multi),e.xp6(1),e.Q6J("ngForOf",t.objectKeys(t.myteamsGroup)),e.xp6(2),e.Q6J("ngIf",!t.sixteamsCreated),e.xp6(1),e.Q6J("ngIf",!t.privateChallenge),e.xp6(1),e.Q6J("ngIf",t.privateChallenge)}}function oe(i,s){if(1&i&&(e.ynx(0),e.TgZ(1,"div",17)(2,"span",18),e._uU(3),e.qZA(),e._UZ(4,"app-auto-timer",19),e.qZA(),e.YNc(5,ae,12,5,"ng-container",1),e.BQk()),2&i){const t=e.oxw();e.xp6(3),e.hij(" ",(null==t.fixtureData?null:t.fixtureData.fixture_sh)||"",""),e.xp6(1),e.Q6J("countDown",null==t.fixtureData?null:t.fixtureData.date_time),e.xp6(1),e.Q6J("ngIf",t.enableContainer)}}function le(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"challenge-confirmation-football",68),e.NdJ("joinChallengeEmit",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.joinChallengeEmit(o))})("joinChallengeRefresh",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.joinChallengeRefresh(o))}),e.qZA(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("userMoneyData",t.userMoneyData)("entryFee",t.entryFee)("enableModalConfirmFlag",t.enableModalConfirmFlag)}}function se(i,s){}function re(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",69)(2,"create-team-preview-football",70),e.NdJ("EditTeamPreview",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.editThisTeam(o))}),e.qZA()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("previewTeamName",t.previewTeamName)("previewTeamNumber",t.previewTeamNumber)("fixtureStatus",t.fixtureStatus)("captain",t.captainId)("viceCaptain",t.viceCaptainId)("playerRight",t.previewTeamList)("team1ShortName",t.getTeam1Name(t.previewTeamNumber)[0].squads[0].team.team_sn||"")("team2ShortName",t.getTeam2Name(t.previewTeamNumber)[0].squads[0].team.team_sn||"")("team1Count",t.getTeam1Name(t.previewTeamNumber).length||"")("team2Count",t.getTeam2Name(t.previewTeamNumber).length||"")("creditAmount",t.getTotalCredits(t.previewTeamList))}}const ce=function(){return{width:"35vw"}},_e=function(){return{"960px":"75vw","640px":"100vw"}},ge=function(){return{width:"50vw",height:"100vh"}},de=function(){return{"960px":"25vw","640px":"50vw"}},pe=function(){return{background:"rgba(0,0,0,1)","overflow-y":"hidden","overflow-x":"hidden"}};let C=(()=>{class i{constructor(t,n,o,a,l,_,g,u){this.messageService=t,this.router=n,this.footballService=o,this.userService=a,this.sharedDataService=l,this.location=_,this.myteamFootball=g,this.route=u,this.options={path:"/assets/animation.json"},this._options={path:"/assets/animation2.json"},this.enableModalConfirmFlag=!1,this.dataList=[],this.sixteamsCreated=!1,this.showPreview=!1,this.previewTeamList=[],this.isClicked=[],this.myteams=[],this.objectKeys=Object.keys,this.teamsJoinedForThiscontest=[],this.previewTeamName="",this.previewTeamNumber="",this.privateChallenge=!1,this.chkAll=!1,this.chkVal=this.chkAll,this.teamVals=[],this.arrData=[],this.contestArr=[],this.joinedReward=!1,this.joinedCoupon={}}animationCreated(t){this.anim=t}animation_Created(t){this._anim=t}ngOnInit(){this.footballService.fixtureState.subscribe(t=>{t&&(this.footballService.savedContestData?(this.contestData=null,this.fixtureData=this.footballService.savedContestData.fixtureData,this.userMoneyData=this.userService.userAccountData.user.money,this.contestData=this.footballService.savedContestData,this.enableContent=!0,this.renderUserCreatedTeams()):this.enableContent=!1)}),this.privateChallenge=this.footballService._privateChallenge||JSON.parse(sessionStorage.getItem("_privateChallenge")),sessionStorage.setItem("joinURl",`${this.router.url}`)}renderUserCreatedTeams(){this.footballService.getJoinedContestFootballByFixture(this.fixtureData.id).subscribe(t=>{var n,o,a;t&&(t.success?(this.teamsJoinedForThiscontest=t.data.filter(l=>l.contest_id==this.contestData.id).flatMap(l=>l.team_id),(null===(n=this.myteams)||void 0===n?void 0:n.length)==(null===(o=this.teamsJoinedForThiscontest)||void 0===o?void 0:o.length)&&0!==(null===(a=this.teamsJoinedForThiscontest)||void 0===a?void 0:a.length)&&(this.chkAll=!0)):this.messageService.add({severity:"warn",summary:"",detail:t.message}))}),p.size(this.footballService.createdUserTeams)?(this.enableContainer=!0,6===p.size(this.footballService.createdUserTeams)&&(this.sixteamsCreated=!0),this.renderMyTeams(this.footballService.createdUserTeams)):this.enableContainer=!1}renderMyTeams(t){this.myteamsGroup={},Object.assign(this.myteamsGroup,t),this.myteams=[];let n=p.flatten(Object.values(t));this.dataList=n;for(let a=1;a<=6;a++){let l=n.filter(_=>_.team==a);l.length&&this.myteams.push(l)}}getCaptainDetails(t){return this.dataList.filter(n=>n.team==t&&"captain"===n.title)}getViceCaptainDetails(t){return this.dataList.filter(n=>n.team==t&&"vcaptain"===n.title)}getGkCount(t){return this.dataList.filter(n=>n.team==t&&"GK"===n.squads[0].player_type).length}getDefCount(t){return this.dataList.filter(n=>n.team==t&&"DEF"===n.squads[0].player_type).length}getMidCount(t){return this.dataList.filter(n=>n.team==t&&"MID"===n.squads[0].player_type).length}getFwdCount(t){return this.dataList.filter(n=>n.team==t&&"ST"===n.squads[0].player_type).length}getTeam1Name(t){const n=this.dataList.filter(l=>l.team==t);let o=p.sortBy(n,l=>l.squads[0].teamId),a=Array.from(new Set(o.flatMap(l=>l.squads[0].team_id)));return this.dataList.filter(l=>l.team==t&&l.squads[0].team_id==a[0])}getTeam2Name(t){const n=this.dataList.filter(l=>l.team==t);let o=p.sortBy(n,l=>l.squads[0].teamId),a=Array.from(new Set(o.flatMap(l=>l.squads[0].team_id)));return this.dataList.filter(l=>l.team==t&&l.squads[0].team_id==a[1])}createTeams(){this.router.navigate([`/football/team/create/${this.fixtureData.id}`]),this.footballService.teamCreateStatus="CREATE"}showPreviewByTeam(t){var n,o;this.showPreview=!0,this.previewTeamName=this.userService.user.team_name,this.previewTeamNumber=t,this.fixtureStatus=null===(n=this.fixtureData)||void 0===n?void 0:n.fixture_status,this.fixtureType=null===(o=this.fixtureData)||void 0===o?void 0:o.type,this.previewTeamList=this.dataList.filter(a=>a.team==t).map(a=>{let l=a,g=a.squads[0].player_value.split(",")[0];return a.credit=a.f_points?a.f_points:+g,l.player_type=a.squads[0].player_type,l.player_name=a.squads[0].player_name,l.team_name=a.squads[0].team.team_sn,l}),this.isPlayerLists=!0,this.captainId=this.getCaptainDetails(t)[0].id,this.viceCaptainId=this.getViceCaptainDetails(t)[0].id}getTotalCredits(t){return t.reduce((n,o)=>n+o.credit,0)}closePreviewDialog(){this.showPreview=!1,this.previewTeamList=[]}joinChallenge(){if(this.enableModalConfirmFlag=!1,this.isClicked.filter(t=>t).length){const t=this.isClicked.map((n,o)=>{if(n&&null!==n)return o}).filter(function(n){return n}).length;this.entryFee="",this.entryFee=this.contestData.entry_fee?t*parseFloat(this.contestData.entry_fee):"",this.userMoneyData.total_balance>=parseFloat(this.entryFee)?this.enableModalConfirmFlag=!0:this.messageService.add({severity:"warn",summary:"",detail:"Insufficient Coin Balance to Join league."})}else this.enableModalConfirmFlag=!1,this.messageService.add({severity:"warn",summary:"",detail:"You need to select atleast one team to proceed."})}joinChallengeEmit(t){if(t){const o=this.isClicked.map((a,l)=>{if(a&&null!==a)return l}).filter(function(a){return a}).toString();if(this.inviteID=this.footballService.getinvite(),this.inviteID)return void this.footballService.joinbyInviteCode({team_id:o,fixture_id:this.footballService.savedContestData.fixture_id,invite_code:this.inviteID}).subscribe(l=>{l.success?(this.messageService.add({severity:"success",summary:"",detail:"Contest Joined Successfully."}),this.resetall()):(this.messageService.add({severity:"warn",summary:"",detail:l.message}),this.resetall())});this.footballService.savedContestData.id?this.footballService.joinContestFootball({team_id:o,fixture_id:this.footballService.savedContestData.fixture_id,contest_id:this.footballService.savedContestData.id,rank:0,score:0,winning:0}).subscribe(l=>{l&&(l.success?(this.messageService.add({severity:"success",summary:"",detail:"Contest Joined Successfully."}),this.joined_Coupon(),this.resetall()):(this.messageService.add({severity:"warn",summary:"",detail:l.message}),this.resetall()))},l=>{console.log(l)}):this.footballService.createPrivateContest({team_id:o,fixture_id:this.footballService.savedContestData.fixture_id,contest_name:this.footballService.savedContestData.contest_name,size:this.footballService.savedContestData.size,total_prize:this.footballService.savedContestData.total_prize,prize_splitup:this.footballService.savedContestData.prize_splitup,entry_fee:this.footballService.savedContestData.entry_fee,multi:this.footballService.savedContestData.multi}).subscribe(l=>{l&&this.messageService.add(l.success?{severity:"success",summary:"",detail:l.message}:{severity:"warning",summary:"",detail:l.message})})}}isThisJoinedTeam(t){return!!t&&this.teamsJoinedForThiscontest.includes(parseFloat(t))}anyTeamJoinedThisContest(t){return!!t&&this.teamsJoinedForThiscontest.length}resetall(){this.isClicked=[],this.entryFee="",this.userService.getUserAccount().subscribe(t=>{t&&(this.userService.userAccountData=t.data,this.userMoneyData=this.userService.userAccountData.user.money)})}switchTeam(){}selectTeam(t){const o=this.isClicked.map((a,l)=>{if(a&&null!==a)return l}).filter(function(a){return a}).toString();this.footballService.savedContestData.team_id=o,this.location.back()}seletAll(t){var n,o;if((null===(n=this.myteams)||void 0===n?void 0:n.length)-(null===(o=this.teamsJoinedForThiscontest)||void 0===o?void 0:o.length))if(this.chkAll=!this.chkAll,this.chkVal=!!this.chkAll,this.chkVal){Object.keys(this.isClicked).length=0;for(let l of this.myteams)this.isClicked[l[0].team]=!0}else this.isClicked=[]}select(t,n){var o,a,l;let _=(null===(o=this.myteams)||void 0===o?void 0:o.length)-(null===(a=this.teamsJoinedForThiscontest)||void 0===a?void 0:a.length);if(this.isClicked[n])this.isClicked[n]=!1,Object.values(this.isClicked).some(u=>0==u)&&(this.chkAll=!1);else{this.isClicked[n]=!0;let g=Object.values(this.isClicked);_==g.length&&g.every(u=>1==u)&&(this.chkAll=!0)}0===(null===(l=Object.keys(this.isClicked))||void 0===l?void 0:l.length)&&(this.chkAll=!1)}joinChallengeRefresh(t){t&&this.ngOnInit()}editThisTeam(t){let n=this.route.snapshot.paramMap.get("id");this.myteamFootball.getUserTeamsByFixture(n).pipe().subscribe(o=>{let a=p.flatten(Object.values(o.data));this.dataList=a;let l={};l.team=this.dataList.filter(_=>_.team==t),l.captain=this.getCaptainDetails(t)[0].p_id,l.vcaptain=this.getViceCaptainDetails(t)[0].p_id,this.footballService.clonedTeamData=l,sessionStorage.setItem("joinURl",`${this.router.url}`),this.footballService.teamCreateStatus="EDIT",sessionStorage.setItem("joinURl",`${this.router.url}`),this.router.navigate([`/football/team/create/${n}`])})}joined_Coupon(){let t=this.route.snapshot.paramMap.get("id");this.footballService.joinedReward(t).subscribe(n=>{n.success&&(this.joinedReward=!0,this.joinedCoupon=n.data[0],setTimeout(()=>{this.anim.pause(),this._anim.pause()},1500))})}redirectTo(){this.router.navigateByUrl("/home/redeem-coins")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v.ez),e.Y36(d.F0),e.Y36(x.I),e.Y36(Z.e),e.Y36(k.g),e.Y36(c.Ye),e.Y36(M.l),e.Y36(d.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-join-challenge-football"]],decls:30,vars:30,consts:[[1,"w-80","py-5"],[4,"ngIf"],["header","Preview","styleClass","captainDialog",3,"modal","visible","dismissableMask","breakpoints","draggable","onHide","visibleChange"],["pTemplate","header"],[3,"modal","visible","breakpoints","draggable","resizable","closable","showHeader","dismissableMask","contentStyle","visibleChange"],[1,"text-center","text-white","pb-2"],[1,"box"],[3,"options","animationCreated"],[1,"font-bold",2,"color","#e19d1d"],[1,"",2,"height","75vh","position","relative"],[1,"d-flex","justify-content-center","align-item-center","asset"],[1,"d-block"],["height","80%","width","35%",1,"d-flex","justify-content-center","align-item-center",2,"margin","0 auto",3,"src"],[1,"text-center","text-white"],[2,"position","absolute","bottom","0","top","50%","left","50%","transform","translate(-50%, 0%)"],["src","/assets/images/couponBox.png","alt",""],[1,"underline","cursor-pointer",3,"click"],[1,"m-header"],[1,"f-poggers"],[1,"f-poggers","text-prime","font-weight-bold",3,"countDown"],[1,"selectTeamsSection"],[1,"row"],[1,"col"],[1,"text-white","font-bold","ml-3"],["class","col d-flex justify-content-end",4,"ngIf"],["class","carder",4,"ngFor","ngForOf"],[1,"d-flex","w-100","justify-content-center","align-items-center","gap-10"],["pButton","","type","button","label","Create Team",3,"click",4,"ngIf"],["class","joinTeam","pButton","","type","button","label","Join Challenge",3,"click",4,"ngIf"],["class","selectTeam","pButton","","type","button","label","Select Team",3,"click",4,"ngIf"],[1,"col","d-flex","justify-content-end"],[1,"text-white","font-bold","px-3","mr-5"],[1,"selectSquare1",2,"margin-right","4%",3,"ngClass","click"],[1,"carder"],[1,"teamDetails","position-relative"],[1,"contestDetails-item","cursor-pointer",3,"click"],[1,"titler"],[1,"s-title"],[1,"s-cions"],[1,"cursor-pointer"],[1,"contentler"],[1,"d-flex","justify-content-around","align-items-center",2,"gap","15px"],[1,"captain-section"],[1,"d-flex","flex-column","justify-content-center","align-items-center","position-relative"],[1,"position-relative"],["width","45",3,"src"],[1,"captainIde"],[1,"player_credit"],[1,"player_name","font-bold"],[1,"teams-section"],[1,"d-flex","justify-content-center","align-items-center",2,"gap","25px"],[1,"d-flex","flex-column","justify-content-center","align-items-center",2,"gap","8px"],[1,"roundel"],[1,"vcaptain-section"],[1,"footler"],[1,"d-flex","justify-content-between","align-items-center"],[1,"bottomplayers"],[1,"font-bold"],["class","selectSquare selected",4,"ngIf"],["class","selectSquare",3,"ngClass","click",4,"ngIf"],[1,"selectSquare","selected"],[1,"selectSquare",3,"ngClass","click"],["class","selectCircle selected",4,"ngIf"],[1,"selectCircle","selected"],[1,"selectCircle",3,"ngClass","click"],["pButton","","type","button","label","Create Team",3,"click"],["pButton","","type","button","label","Join Challenge",1,"joinTeam",3,"click"],["pButton","","type","button","label","Select Team",1,"selectTeam",3,"click"],[3,"userMoneyData","entryFee","enableModalConfirmFlag","joinChallengeEmit","joinChallengeRefresh"],[1,"wrapper"],[3,"previewTeamName","previewTeamNumber","fixtureStatus","captain","viceCaptain","playerRight","team1ShortName","team2ShortName","team1Count","team2Count","creditAmount","EditTeamPreview"]],template:function(t,n){1&t&&(e._UZ(0,"p-toast"),e.TgZ(1,"section",0),e.YNc(2,oe,6,3,"ng-container",1),e.qZA(),e.YNc(3,le,2,3,"ng-container",1),e.TgZ(4,"p-dialog",2),e.NdJ("onHide",function(){return n.closePreviewDialog()})("visibleChange",function(a){return n.showPreview=a}),e.YNc(5,se,0,0,"ng-template",3),e.YNc(6,re,3,11,"ng-container",1),e.qZA(),e.TgZ(7,"p-dialog",4),e.NdJ("visibleChange",function(a){return n.joinedReward=a}),e.TgZ(8,"section",5)(9,"div",6)(10,"ng-lottie",7),e.NdJ("animationCreated",function(a){return n.animationCreated(a)}),e.qZA()(),e.TgZ(11,"div",6)(12,"ng-lottie",7),e.NdJ("animationCreated",function(a){return n.animation_Created(a)}),e.qZA()(),e.TgZ(13,"h2"),e._uU(14,"Hurray!"),e.qZA(),e.TgZ(15,"h4"),e._uU(16,"You Have Won a Coupon For"),e.qZA(),e.TgZ(17,"h1",8),e._uU(18,"JOINING CHALLENGE"),e.qZA()(),e.TgZ(19,"section",9)(20,"div",10)(21,"div",11),e._UZ(22,"img",12),e.TgZ(23,"h3",13),e._uU(24),e.qZA()()(),e.TgZ(25,"div",14),e._UZ(26,"img",15),e.qZA()(),e.TgZ(27,"section",5)(28,"p",16),e.NdJ("click",function(){return n.redirectTo()}),e._uU(29," View My Rewards Wallets > "),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.enableContent),e.xp6(1),e.Q6J("ngIf",n.enableModalConfirmFlag),e.xp6(1),e.Akn(e.DdM(25,ce)),e.Q6J("modal",!0)("visible",n.showPreview)("dismissableMask",!0)("breakpoints",e.DdM(26,_e))("draggable",!1),e.xp6(2),e.Q6J("ngIf",n.showPreview),e.xp6(1),e.Akn(e.DdM(27,ge)),e.Q6J("modal",!0)("visible",n.joinedReward)("breakpoints",e.DdM(28,de))("draggable",!1)("resizable",!1)("closable",!0)("showHeader",!1)("dismissableMask",!0)("contentStyle",e.DdM(29,pe)),e.xp6(3),e.Q6J("options",n.options),e.xp6(2),e.Q6J("options",n._options),e.xp6(10),e.s9C("src",null==n.joinedCoupon||null==n.joinedCoupon.joined_coupon?null:n.joinedCoupon.joined_coupon.assets_url,e.LSH),e.xp6(2),e.hij(" ",null==n.joinedCoupon||null==n.joinedCoupon.joined_coupon?null:n.joinedCoupon.joined_coupon.name," "))},dependencies:[c.mk,c.sg,c.O5,D.l,h.V,v.jx,f.Hq,N,y.FN,O.M,w.e$],styles:[".m-header[_ngcontent-%COMP%]{background:#c1395b;display:flex;justify-content:center;align-items:center;color:#fff;font-size:.8em;gap:20px;width:40%;margin:10px auto;padding:5px 10px;border-radius:15px}.w-80[_ngcontent-%COMP%]{width:80%;margin:0 auto}.selectTeamsSection[_ngcontent-%COMP%]{padding:10px 0}.carder[_ngcontent-%COMP%]{margin:10px 0}.wrapper[_ngcontent-%COMP%]{min-height:200px;background:url(/assets/images/footballGround.png) repeat padding-box;background-size:100% 100%;background-repeat:no-repeat}.teamDetails[_ngcontent-%COMP%]{background:url(/assets/images/ground.png) repeat padding-box;border-radius:5px;color:#fff}.titler[_ngcontent-%COMP%]{padding:10px;background:rgb(0 0 0 / 58%);border-top-right-radius:5px;border-top-left-radius:5px}.footler[_ngcontent-%COMP%]{padding:10px;background:#fff;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.contentler[_ngcontent-%COMP%]{padding:10px;background:transparent}.s-cions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:.8em;margin:0 10px}.s-cions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.titler[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.footler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#333}span.captainIde[_ngcontent-%COMP%]{position:absolute;left:-20px;top:0;color:#000;border-radius:50%;box-sizing:content-box;width:20px;height:20px;line-height:0;display:flex;align-items:center;justify-content:center;font-size:.6em;cursor:pointer;background:white}span.player_name[_ngcontent-%COMP%]{font-size:.7rem;line-height:15px}.player_credit[_ngcontent-%COMP%]{background:white;color:#000;width:100%;border-radius:3px;font-size:.6rem;text-align:center;letter-spacing:3px;padding:5px;display:inline-grid}span.roundel[_ngcontent-%COMP%]{background:#fff;width:20px;height:20px;border-radius:50%;text-align:center;color:#212529;font-size:.7rem;font-weight:700;line-height:21px}.gap-10[_ngcontent-%COMP%]{gap:10px}.selectCircle[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;right:8px;top:10px;cursor:pointer;border:3px solid silver}.selectCircle.selected[_ngcontent-%COMP%]{background:#feb724!important}.selectSquare1[_ngcontent-%COMP%]{width:20px;height:20px;background:#fff;position:absolute;right:8px;top:10px;cursor:pointer}.selectSquare1.selected[_ngcontent-%COMP%]{background:#feb724!important}.selectSquare[_ngcontent-%COMP%]{width:20px;height:20px;background:#fff;position:absolute;right:8px;top:10px;cursor:pointer;border-radius:50%;border:3px solid silver}.selectSquare.selected[_ngcontent-%COMP%]{background:#feb724!important}.primeColor[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:.7em;cursor:pointer;background:transparent linear-gradient(91deg,#e8b652 0%,#bf335b 100%) 0% 0% no-repeat padding-box;color:#fff;border-color:transparent;padding:0 10px;border-radius:20px;line-height:10px}[_nghost-%COMP%]  .captainDialog .p-dialog-header{padding:.3rem 1rem!important;font-size:.9em}[_nghost-%COMP%]  .p-dialog-header-icon{width:1rem!important;height:1rem!important;color:#fff!important}[_nghost-%COMP%]  .p-dialog-header{display:flex;justify-content:end}.wrapper[_ngcontent-%COMP%]   .credit-bottom[_ngcontent-%COMP%]{position:inherit}.selectTeam[_ngcontent-%COMP%], .selectTeam[_ngcontent-%COMP%]:hover, .joinTeam[_ngcontent-%COMP%], .joinTeam[_ngcontent-%COMP%]:hover{background:transparent linear-gradient(122deg,#63ddbd 0%,#05916c 100%) 0% 0% no-repeat padding-box}.bottomplayers[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline}[_nghost-%COMP%]     .p-dialog{max-height:100%!important}.asset[_ngcontent-%COMP%]{animation-name:coupon;animation-duration:3s;transform:translateY(40%)}@keyframes coupon{0%{transform:translateY(80%);opacity:0}to{transform:translateY(40%);opacity:1}}.box[_ngcontent-%COMP%]{position:absolute;z-index:99;width:100%;pointer-events:none}"]}),i})();const me=[{path:"",component:C,children:[{path:":id",component:C,pathMatch:"full"},{path:"**",component:C}]}];let ue=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(me),d.Bz]}),i})();var J=r(5787),he=r(6988);let fe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,h.S,f.hJ,J.T]}),i})();var Ce=r(5171),be=r(4487),ve=r.n(be);function F(){return ve()}let xe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,he.H,h.S,f.hJ,J.T,ue,fe,y.EV,Ce.R,w.CT.forRoot({player:F})]}),i})()}}]);