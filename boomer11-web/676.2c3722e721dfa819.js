"use strict";(self.webpackChunkboomer11_web=self.webpackChunkboomer11_web||[]).push([[676],{8676:(de,x,c)=>{c.r(x),c.d(x,{JoinChallengeCricketModule:()=>_e});var g=c(9808),p=c(9238),m=c(7489),e=c(5e3),k=c(9783),b=c(445),J=c(6439),Z=c(3655),D=c(6581),M=c(5532),S=c(4383),u=c(5315),h=c(845),A=c(2673);const T=function(){return{width:"50vw"}},j=function(){return{"960px":"75vw","640px":"100vw"}};function q(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"p-dialog",1),e.NdJ("visibleChange",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.enableModalConfirmFlag=a)}),e.TgZ(2,"div",2)(3,"div",3),e._UZ(4,"div",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"p")(9,"span",8),e._uU(10,"Challenge Confirmation"),e.qZA()()(),e.TgZ(11,"div",9)(12,"p"),e._uU(13,"Current Balance"),e.qZA(),e.TgZ(14,"p"),e._UZ(15,"span",10),e._uU(16),e.qZA()(),e._UZ(17,"div",9),e.TgZ(18,"div",9)(19,"p"),e._uU(20,"Contest Fee"),e.qZA(),e.TgZ(21,"p"),e._UZ(22,"span",10),e._uU(23),e.qZA()()()(),e.TgZ(24,"div",11)(25,"p",12),e._uU(26,"By Joining this contest you accept to Boomer11"),e.qZA(),e.TgZ(27,"p",13),e._uU(28,"Terms & Conditions"),e.qZA()(),e.TgZ(29,"div",14)(30,"button",15),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.joinChallengeEmitFn())}),e.qZA(),e.TgZ(31,"button",16),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.closeDialog())}),e.qZA()()()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Akn(e.DdM(9,T)),e.Q6J("modal",!0)("closable",!1)("visible",t.enableModalConfirmFlag)("breakpoints",e.DdM(10,j))("draggable",!1),e.xp6(15),e.hij("\xa0",t.userMoneyData.total_balance," "),e.xp6(7),e.hij("\xa0",t.entryFee||"","")}}const F=function(){return{"900px":"75vw","640px":"100vw"}};function N(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"p-dialog",17),e.NdJ("visibleChange",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.enableModalJoinConfirmFlag=a)}),e.TgZ(2,"div",18),e._UZ(3,"img",19),e.TgZ(4,"div",20)(5,"p",21),e._uU(6,"Hurray!"),e.qZA()(),e.TgZ(7,"h2",22),e._uU(8," Great work,you have succsessfully joined a challenge "),e.qZA(),e.TgZ(9,"div",23)(10,"div",24)(11,"button",25),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.myChallenges())}),e._uU(12," See my challanges "),e.qZA()(),e.TgZ(13,"div")(14,"button",26),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.joinChallenges())}),e._uU(15," Join more challanges "),e.qZA()()()()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Akn(e.DdM(8,T)),e.Q6J("showHeader",!1)("modal",!0)("closable",!1)("visible",t.enableModalJoinConfirmFlag)("breakpoints",e.DdM(9,F))("draggable",!1)}}let O=(()=>{class i{constructor(t,n,a){this.location=t,this.cricketService=n,this.router=a,this.joinChallengeEmit=new e.vpe,this.joinChallengeRefresh=new e.vpe,this.enableModalJoinConfirmFlag=!1}ngOnInit(){}ngOnChanges(t){}closeDialog(){this.enableModalConfirmFlag=!1,this.joinChallengeEmit.emit(!1)}joinChallengeEmitFn(){this.enableModalConfirmFlag=!1,this.enableModalJoinConfirmFlag=!0,this.joinChallengeEmit.emit(!0)}myChallenges(){this.enableModalJoinConfirmFlag=!1,this.joinChallengeRefresh.emit(!0)}joinChallenges(){this.fixture_id=this.cricketService.savedContestData.fixture_id,this.router.navigate([`cricket/all-challenges/${this.fixture_id}`]),this.joinChallengeRefresh.emit(!1)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.Ye),e.Y36(b.D),e.Y36(p.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["challenge-confirmation-cricket"]],inputs:{enableModalConfirmFlag:"enableModalConfirmFlag",userMoneyData:"userMoneyData",entryFee:"entryFee"},outputs:{joinChallengeEmit:"joinChallengeEmit",joinChallengeRefresh:"joinChallengeRefresh"},features:[e.TTD],decls:2,vars:2,consts:[[4,"ngIf"],["styleClass","challengeConfirmDialog",3,"modal","closable","visible","breakpoints","draggable","visibleChange"],[1,"wrapper"],[1,"pvt_img_wrapper"],[1,"pvt_img"],[1,"challenge-wrapper"],[1,"grid","justify-content-evenly","align-items-center",2,"width","80%","margin","0 auto"],[1,"col-12","text-center"],[1,"f-poggers"],[1,"col-4"],[1,"coin-win"],[1,"d-flex","justify-content-center","align-items-center","flex-column"],[1,""],[1,"terms"],[1,"d-flex","justify-content-center","align-items-center",2,"gap","10px"],["pButton","","type","button","label","Join Challenge",3,"click"],["pButton","","type","button","label","Cancel",3,"click"],["id","confirmdialog",3,"showHeader","modal","closable","visible","breakpoints","draggable","visibleChange"],[1,"text-center","pt-3",2,"background","#141941"],["src","/assets/images/pvt_trophy.png","height","100","width","100"],[1,"pt-3"],[2,"color","#60dcbb","font-size","30px"],[1,"py-3","text-white"],[1,"d-flex","flex-wrap","justify-content-center","pb-3"],[1,"mr-3"],["pButton","","type","button",2,"background","#1da580",3,"click"],["pButton","","type","button",3,"click"]],template:function(t,n){1&t&&(e.YNc(0,q,32,11,"ng-container",0),e.YNc(1,N,16,10,"ng-container",0)),2&t&&(e.Q6J("ngIf",n.enableModalConfirmFlag),e.xp6(1),e.Q6J("ngIf",n.enableModalJoinConfirmFlag))},dependencies:[g.O5,u.V,h.Hq],styles:[".terms[_ngcontent-%COMP%]{color:#ae2c72}.challenge-wrapper[_ngcontent-%COMP%]{background:transparent linear-gradient(115deg,#a31193 0%,#1e1340 100%) 0% 0% no-repeat padding-box;border-radius:10px;margin-bottom:10px;padding:10px;color:#fff}  .challengeConfirmDialog .p-dialog-header{padding:1rem 0 3rem}.wrapper[_ngcontent-%COMP%]{width:80%;margin:0 auto}.pvt_img[_ngcontent-%COMP%]{background:url(/assets/images/pvt_trophy.png);width:80px;height:80px;background-size:contain}.pvt_img_wrapper[_ngcontent-%COMP%]{position:absolute;border-radius:50%;border:20px solid #fff;top:-50px;margin:0 auto;text-align:center;left:0;right:0;width:120px;background:#1a2b63;z-index:2}[_nghost-%COMP%]     .p-dialog .p-dialog-content{background:#141941!important}"]}),i})();var y=c(1497);const I=function(i,s){return{"":i,selected:s}};function U(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",17)(1,"h3",18),e._uU(2,"All Teams"),e.qZA(),e.TgZ(3,"div",19),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(3);return a.chkAll=!a.chkAll,e.KtG(a.seletAll(a.chkAll))}),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(3),e.Q6J("ngClass",e.WLB(1,I,!t.chkAll,t.chkAll))}}function P(i,s){1&i&&(e.ynx(0),e._uU(1," No data "),e.BQk())}function B(i,s){1&i&&e._UZ(0,"div",44)}const f=function(i){return{selected:i}};function Q(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",45),e.NdJ("click",function(a){e.CHM(t);const o=e.oxw(3).$implicit,r=e.oxw(3);return e.KtG(r.select(a,o))}),e.qZA()}if(2&i){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,f,n.isClicked[t]))}}function Y(i,s){if(1&i&&(e.ynx(0),e.YNc(1,B,1,0,"div",42),e.YNc(2,Q,1,3,"div",43),e.BQk()),2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isThisJoinedTeam(t)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.isThisJoinedTeam(t))}}function E(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",45),e.NdJ("click",function(a){e.CHM(t);const o=e.oxw(3).$implicit,r=e.oxw(3);return e.KtG(r.select(a,o))}),e.qZA()}if(2&i){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,f,n.isClicked[t]))}}function H(i,s){if(1&i&&(e.ynx(0),e.YNc(1,E,1,3,"div",43),e.BQk()),2&i){const t=e.oxw(5);e.xp6(1),e.Q6J("ngIf",t.contestData&&1==t.contestData.multi)}}function L(i,s){1&i&&e._UZ(0,"div",47)}function z(i,s){if(1&i&&(e.ynx(0),e.YNc(1,L,1,0,"div",46),e.BQk()),2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isThisJoinedTeam(t))}}function G(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",48),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2).$implicit,o=e.oxw(3);return o.isClicked=[],e.KtG(o.isClicked[a]=!0!==o.isClicked[a])}),e.qZA(),e.BQk()}if(2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngClass",e.VKq(1,f,n.isClicked[t]))}}function K(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.YNc(1,Y,3,2,"ng-container",1),e.YNc(2,H,2,1,"ng-container",1),e.YNc(3,z,2,1,"ng-container",1),e.YNc(4,G,2,3,"ng-container",1),e.TgZ(5,"div",22),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,o=e.oxw(3);return e.KtG(o.showPreviewByTeam(a))}),e.TgZ(6,"div",23)(7,"div",24),e._uU(8),e.qZA(),e._UZ(9,"div",25),e.qZA(),e.TgZ(10,"div",26)(11,"div",27)(12,"div",28)(13,"div",29)(14,"span",30),e._UZ(15,"img",31),e.TgZ(16,"span",32),e._uU(17,"C"),e.qZA()(),e.TgZ(18,"span",33),e._uU(19),e.qZA(),e.TgZ(20,"span",34),e._uU(21),e.qZA()()(),e.TgZ(22,"div",35)(23,"div",36)(24,"span",37)(25,"span",38),e._uU(26),e.qZA(),e.TgZ(27,"span"),e._uU(28),e.qZA()(),e.TgZ(29,"span")(30,"strong"),e._uU(31,"Vs"),e.qZA()(),e.TgZ(32,"span",37)(33,"span",38),e._uU(34),e.qZA(),e.TgZ(35,"span"),e._uU(36),e.qZA()()()(),e.TgZ(37,"div",39)(38,"div",29)(39,"span"),e._UZ(40,"img",31),e.TgZ(41,"span",32),e._uU(42,"VC"),e.qZA()(),e.TgZ(43,"span",33),e._uU(44),e.qZA(),e.TgZ(45,"span",34),e._uU(46),e.qZA()()()()(),e.TgZ(47,"div",40)(48,"div",41)(49,"span"),e._uU(50),e.qZA(),e.TgZ(51,"span"),e._uU(52),e.qZA(),e.TgZ(53,"span"),e._uU(54),e.qZA(),e.TgZ(55,"span"),e._uU(56),e.qZA()()()(),e.BQk()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&0==n.contestData.multi&&n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&0==n.contestData.multi&&!n.anyTeamJoinedThisContest(n.contestData)),e.xp6(4),e.hij("Team ",t,""),e.xp6(7),e.MGl("src","https://thefantasysportsapi.com/media/teams/",n.getCaptainDetails(t)[0].squads[0].team.team_sn,".svg",e.LSH),e.xp6(4),e.Oqu(n.getCaptainDetails(t)[0].squads[0].player_api||""),e.xp6(2),e.Oqu(n.getCaptainDetails(t)[0].squads[0].team.team_sn),e.xp6(5),e.hij(" ",n.getTeam1Name(t).length||""," "),e.xp6(2),e.hij(" ",n.getTeam1Name(t)[0].squads[0].team.team_sn||""," "),e.xp6(6),e.hij(" ",n.getTeam2Name(t).length||""," "),e.xp6(2),e.hij(" ",n.getTeam2Name(t)[0].squads[0].team.team_sn||""," "),e.xp6(4),e.MGl("src","https://thefantasysportsapi.com/media/teams/",n.getViceCaptainDetails(t)[0].squads[0].team.team_sn,".svg",e.LSH),e.xp6(4),e.Oqu(n.getViceCaptainDetails(t)[0].squads[0].player_api||""),e.xp6(2),e.Oqu(n.getViceCaptainDetails(t)[0].squads[0].team.team_sn),e.xp6(4),e.hij("WK: ",n.getWkCount(t)||"",""),e.xp6(2),e.hij("BAT: ",n.getBatCount(t)||"",""),e.xp6(2),e.hij("AR: ",n.getArCount(t)||"",""),e.xp6(2),e.hij("BOWL: ",n.getBowlCount(t)||"","")}}function R(i,s){if(1&i&&(e.TgZ(0,"div",20)(1,"div",21),e.YNc(2,P,2,0,"ng-container",1),e.YNc(3,K,57,19,"ng-container",1),e.qZA()()),2&i){const t=s.$implicit,n=e.oxw(3);e.xp6(2),e.Q6J("ngIf",0===n.myteamsGroup[t].length),e.xp6(1),e.Q6J("ngIf",n.myteamsGroup[t].length)}}function $(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",49),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.createTeams())}),e.qZA()}}function V(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",50),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.joinChallenge())}),e.qZA()}}function W(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",51),e.NdJ("click",function(a){e.CHM(t);const o=e.oxw(3);return e.KtG(o.selectTeam(a))}),e.qZA()}}function X(i,s){if(1&i&&(e.ynx(0),e.TgZ(1,"section",7)(2,"div",8)(3,"div",9)(4,"h3",10),e._uU(5,"Select Teams"),e.qZA()(),e.YNc(6,U,4,4,"div",11),e.qZA(),e.YNc(7,R,4,2,"div",12),e.TgZ(8,"div",13),e.YNc(9,$,1,0,"button",14),e.YNc(10,V,1,0,"button",15),e.YNc(11,W,1,0,"button",16),e.qZA()(),e.BQk()),2&i){const t=e.oxw(2);e.xp6(6),e.Q6J("ngIf",t.contestData&&1==t.contestData.multi),e.xp6(1),e.Q6J("ngForOf",t.objectKeys(t.myteamsGroup)),e.xp6(2),e.Q6J("ngIf",!t.sixteamsCreated),e.xp6(1),e.Q6J("ngIf",!t.privateChallenge),e.xp6(1),e.Q6J("ngIf",t.privateChallenge)}}function ee(i,s){if(1&i&&(e.ynx(0),e.TgZ(1,"div",4)(2,"span",5),e._uU(3),e.qZA(),e._UZ(4,"app-auto-timer",6),e.qZA(),e.YNc(5,X,12,5,"ng-container",1),e.BQk()),2&i){const t=e.oxw();e.xp6(3),e.hij(" ",(null==t.fixtureData?null:t.fixtureData.fixture_sh)||"",""),e.xp6(1),e.Q6J("countDown",null==t.fixtureData?null:t.fixtureData.date_time),e.xp6(1),e.Q6J("ngIf",t.enableContainer)}}function te(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"challenge-confirmation-cricket",52),e.NdJ("joinChallengeEmit",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.joinChallengeEmit(a))})("joinChallengeRefresh",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.joinChallengeRefresh(a))}),e.qZA(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("userMoneyData",t.userMoneyData)("entryFee",t.entryFee)("enableModalConfirmFlag",t.enableModalConfirmFlag)}}function ne(i,s){}function ie(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",53)(2,"cricket-preview",54),e.NdJ("EditTeamPreview",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.editThisTeam(a))}),e.qZA()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("fixtureStatus",t.fixtureStatus)("previewTeamName",t.previewTeamName)("previewTeamNumber",t.previewTeamNumber)("captain",t.captainId)("viceCaptain",t.viceCaptainId)("playerRight",t.previewTeamList)("team1ShortName",t.getTeam1Name(t.previewTeamNumber)[0].squads[0].team.team_sn||"")("team2ShortName",t.getTeam2Name(t.previewTeamNumber)[0].squads[0].team.team_sn||"")("team1Count",t.getTeam1Name(t.previewTeamNumber).length||"")("team2Count",t.getTeam2Name(t.previewTeamNumber).length||"")("creditAmount",t.getTotalCredits(t.previewTeamList))}}const ae=function(){return{width:"35vw"}},oe=function(){return{"960px":"75vw","640px":"100vw"}};let C=(()=>{class i{constructor(t,n,a,o,r,l,_,d,v){this.messageService=t,this.router=n,this.cricketService=a,this.userService=o,this.sharedDataService=r,this.location=l,this.footerService=_,this.route=d,this.myTeamsCricket=v,this.enableModalConfirmFlag=!1,this.dataList=[],this.sixteamsCreated=!1,this.showPreview=!1,this.previewTeamList=[],this.isClicked=[],this.myteams=[],this.objectKeys=Object.keys,this.teamsJoinedForThiscontest=[],this.previewTeamName="",this.previewTeamNumber="",this.privateChallenge=!1,this.chkAll=!1,this.chkVal=!1,this.teamVals=[],this.arrData=[],this.checkedVal=!1}ngOnInit(){this.footerService.footerHide=!1,this.cricketService.fixtureState.subscribe(t=>{t&&(this.cricketService.savedContestData?(this.contestData=null,this.fixtureData=this.cricketService.savedContestData.fixtureData,this.userMoneyData=this.userService.userAccountData.user.money,this.contestData=this.cricketService.savedContestData,this.enableContent=!0,this.renderUserCreatedTeams(),this.privateChallenge=this.cricketService._privateChallenge):this.enableContent=!1)}),sessionStorage.setItem("joinURl",`${this.router.url}`)}renderUserCreatedTeams(){this.cricketService.getJoinedContestCricketByFixture(this.fixtureData.id).subscribe(t=>{var n,a;if(t)if(t.success){let o=this.contestData.contest_id?this.contestData.contest_id:this.contestData.id;this.teamsJoinedForThiscontest=t.data.filter(r=>r.contest_id==o).flatMap(r=>r.team_id),this.chkAll=(null===(n=this.myteams)||void 0===n?void 0:n.length)==(null===(a=this.teamsJoinedForThiscontest)||void 0===a?void 0:a.length)}else this.messageService.add({severity:"warn",summary:"",detail:t.message})}),m.size(this.cricketService.createdUserTeams)?(this.enableContainer=!0,6===m.size(this.cricketService.createdUserTeams)&&(this.sixteamsCreated=!0),this.renderMyTeams(this.cricketService.createdUserTeams)):this.enableContainer=!1}renderMyTeams(t){this.myteamsGroup={},Object.assign(this.myteamsGroup,t),this.myteams=[];let n=m.flatten(Object.values(t));this.dataList=n;for(let o=1;o<=6;o++){let r=n.filter(l=>l.team==o);r.length&&this.myteams.push(r)}}getCaptainDetails(t){return this.dataList.filter(n=>n.team==t&&"captain"===n.title)}getViceCaptainDetails(t){return this.dataList.filter(n=>n.team==t&&"vcaptain"===n.title)}getWkCount(t){return this.dataList.filter(n=>n.team==t&&"Wicket Keeper"===n.squads[0].player_type).length}getBatCount(t){return this.dataList.filter(n=>n.team==t&&"Batsman"===n.squads[0].player_type).length}getArCount(t){return this.dataList.filter(n=>n.team==t&&"All Rounder"===n.squads[0].player_type).length}getBowlCount(t){return this.dataList.filter(n=>n.team==t&&"Bowler"===n.squads[0].player_type).length}getTeam1Name(t){const n=this.dataList.filter(r=>r.team==t);let a=m.sortBy(n,r=>r.squads[0].teamId),o=Array.from(new Set(a.flatMap(r=>r.squads[0].team_id)));return this.dataList.filter(r=>r.team==t&&r.squads[0].team_id==o[0])}getTeam2Name(t){const n=this.dataList.filter(r=>r.team==t);let a=m.sortBy(n,r=>r.squads[0].teamId),o=Array.from(new Set(a.flatMap(r=>r.squads[0].team_id)));return this.dataList.filter(r=>r.team==t&&r.squads[0].team_id==o[1])}createTeams(){sessionStorage.setItem("joinURl",`${this.router.url}`),this.router.navigate([`/cricket/team/create/${this.fixtureData.id}`]),this.cricketService.teamCreateStatus="CREATE"}showPreviewByTeam(t){var n,a;this.showPreview=!0,this.previewTeamName=this.userService.user.team_name,this.previewTeamNumber=t,this.fixtureStatus=null===(n=this.fixtureData)||void 0===n?void 0:n.fixture_status,this.fixtureType=null===(a=this.fixtureData)||void 0===a?void 0:a.type,this.previewTeamList=this.dataList.filter(o=>o.team==t).map(o=>{let r=o,l=o.squads[0].player_value.split(",");return o.credit=o.f_points?o.f_points:"TEST"==this.fixtureType?+l[0]:"ODI"==this.fixtureType?+l[1]:+l[2],r.player_type=o.squads[0].player_type,r.player_name=o.squads[0].player_name,r.team_name=o.squads[0].team.team_sn,r}),this.isPlayerLists=!0,this.captainId=this.getCaptainDetails(t)[0].id,this.viceCaptainId=this.getViceCaptainDetails(t)[0].id}getTotalCredits(t){return t.reduce((n,a)=>n+a.credit,0)}closePreviewDialog(){this.showPreview=!1,this.previewTeamList=[]}joinChallengeRefresh(t){t&&this.ngOnInit()}joinChallenge(){if(this.enableModalConfirmFlag=!1,this.isClicked.filter(t=>t).length){const t=this.isClicked.map((n,a)=>{if(n&&null!==n)return a}).filter(function(n){return n}).length;this.entryFee="",this.entryFee=this.contestData.entry_fee?t*parseFloat(this.contestData.entry_fee):"",this.userMoneyData.total_balance>=parseFloat(this.entryFee)?this.enableModalConfirmFlag=!0:this.messageService.add({severity:"warn",summary:"",detail:"Insufficient Coin Balance to Join league."})}else this.enableModalConfirmFlag=!1,this.messageService.add({severity:"warn",summary:"",detail:"You need to select atleast one team to proceed."})}joinChallengeEmit(t){if(t){const a=this.isClicked.map((o,r)=>{if(o&&null!==o)return r}).filter(function(o){return o}).toString();if(this.inviteID=this.cricketService.getinvite(),this.inviteID)return void this.cricketService.joinbyInviteCode({team_id:a,fixture_id:this.cricketService.savedContestData.fixture_id,invite_code:this.inviteID}).subscribe(r=>{r.success?(this.messageService.add({severity:"success",summary:"",detail:"Contest Joined Successfully."}),this.resetall()):(this.messageService.add({severity:"warn",summary:"",detail:r.message}),this.resetall())});this.cricketService.savedContestData.id?this.cricketService.joinContestCricket({team_id:a,fixture_id:this.cricketService.savedContestData.fixture_id,contest_id:this.cricketService.savedContestData.id,rank:0,score:0,winning:0}).subscribe(r=>{r&&(r.success?(this.messageService.add({severity:"success",summary:"",detail:"Contest Joined Successfully."}),this.resetall()):(this.messageService.add({severity:"warn",summary:"",detail:r.message}),this.resetall()))},r=>{}):this.cricketService.createPrivateContest({team_id:a,fixture_id:this.cricketService.savedContestData.fixture_id,contest_name:this.cricketService.savedContestData.contest_name,size:this.cricketService.savedContestData.size,total_prize:this.cricketService.savedContestData.total_prize,prize_splitup:this.cricketService.savedContestData.prize_splitup,entry_fee:this.cricketService.savedContestData.entry_fee,multi:this.cricketService.savedContestData.multi}).subscribe(r=>{r&&this.messageService.add(r.success?{severity:"success",summary:"",detail:r.message}:{severity:"warning",summary:"",detail:r.message})})}}isThisJoinedTeam(t){return!!t&&this.teamsJoinedForThiscontest.includes(parseFloat(t))}anyTeamJoinedThisContest(t){return!!t&&this.teamsJoinedForThiscontest.length}resetall(){this.isClicked=[],this.entryFee="",this.userService.getUserAccount().subscribe(t=>{t&&(this.userService.userAccountData=t.data,this.userMoneyData=this.userService.userAccountData.user.money)})}selectTeam(t){var n;const o=this.isClicked.map((r,l)=>{if(r&&null!==r)return l}).filter(function(r){return r}).toString();this.cricketService.savedContestData.team_id=o,this.location.back(),6==(null===(n=this.teamsJoinedForThiscontest)||void 0===n?void 0:n.length)&&this.isClicked.forEach(r=>{this.isClicked[r]=this.chkAll})}seletAll(t){if(this.chkAll=this.chkAll,this.chkVal=!!this.chkAll,this.chkVal){Object.keys(this.isClicked).length=0;for(let n of this.myteams)this.isClicked[n[0].team]=!0}else this.isClicked=[]}select(t,n){var a,o,r;let l=(null===(a=this.myteams)||void 0===a?void 0:a.length)-(null===(o=this.teamsJoinedForThiscontest)||void 0===o?void 0:o.length);if(this.isClicked[n])this.isClicked[n]=!1,Object.values(this.isClicked).some(d=>0==d)&&(this.chkAll=!1);else{this.isClicked[n]=!0;let _=Object.values(this.isClicked);l==_.length&&_.every(d=>1==d)&&(this.chkAll=!0)}0===(null===(r=Object.keys(this.isClicked))||void 0===r?void 0:r.length)&&(this.chkAll=!1)}editThisTeam(t){let n=this.route.snapshot.paramMap.get("id");this.myTeamsCricket.getUserTeamsByFixture(n,"cricket").pipe().subscribe(a=>{let o=m.flatten(Object.values(a.data));this.dataList=o;let r={};r.team=this.dataList.filter(l=>l.team==t),r.captain=this.getCaptainDetails(t)[0].p_id,r.vcaptain=this.getViceCaptainDetails(t)[0].p_id,this.cricketService.clonedTeamData=r,sessionStorage.setItem("joinURl",`${this.router.url}`),this.cricketService.teamCreateStatus="EDIT",sessionStorage.setItem("joinURl",`${this.router.url}`),this.router.navigate([`/cricket/team/create/${n}`])})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(k.ez),e.Y36(p.F0),e.Y36(b.D),e.Y36(J.e),e.Y36(Z.g),e.Y36(g.Ye),e.Y36(D.L),e.Y36(p.gz),e.Y36(M.k))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-join-challenge-cricket"]],decls:7,vars:12,consts:[[1,"w-80","py-5"],[4,"ngIf"],["header","Preview","styleClass","captainDialog",3,"modal","dismissableMask","visible","breakpoints","draggable","onHide","visibleChange"],["pTemplate","header"],[1,"m-header"],[1,"f-poggers"],[1,"f-poggers","text-prime","font-weight-bold",3,"countDown"],[1,"selectTeamsSection"],[1,"row"],[1,"col"],[1,"text-white","font-bold","ml-3"],["class","col d-flex justify-content-end",4,"ngIf"],["class","carder",4,"ngFor","ngForOf"],[1,"d-flex","w-100","justify-content-center","align-items-center","gap-10"],["pButton","","type","button","label","Create Team",3,"click",4,"ngIf"],["pButton","","type","button","label","Join Challenge",3,"click",4,"ngIf"],["pButton","","type","button","label","Select Team",3,"click",4,"ngIf"],[1,"col","d-flex","justify-content-end"],[1,"text-white","font-bold","px-3","mr-5"],[1,"selectSquare1",2,"margin-right","4%",3,"ngClass","click"],[1,"carder"],[1,"teamDetails","position-relative"],[1,"contestDetails-item","cursor-pointer",3,"click"],[1,"titler"],[1,"s-title"],[1,"s-cions"],[1,"contentler"],[1,"d-flex","justify-content-around","align-items-center",2,"gap","15px"],[1,"captain-section"],[1,"d-flex","flex-column","justify-content-center","align-items-center","position-relative"],[1,"position-relative"],["width","30",3,"src"],[1,"captainIde"],[1,"player_name"],[1,"player_credit","text-white"],[1,"teams-section"],[1,"d-flex","justify-content-center","align-items-center",2,"gap","25px"],[1,"d-flex","flex-column","justify-content-center","align-items-center",2,"gap","8px"],[1,"roundel"],[1,"vcaptain-section"],[1,"footler"],[1,"d-flex","justify-content-between","align-items-center"],["class","selectSquare selected",4,"ngIf"],["class","selectSquare",3,"ngClass","click",4,"ngIf"],[1,"selectSquare","selected"],[1,"selectSquare",3,"ngClass","click"],["class","selectCircle selected",4,"ngIf"],[1,"selectCircle","selected"],[1,"selectCircle",3,"ngClass","click"],["pButton","","type","button","label","Create Team",3,"click"],["pButton","","type","button","label","Join Challenge",3,"click"],["pButton","","type","button","label","Select Team",3,"click"],[3,"userMoneyData","entryFee","enableModalConfirmFlag","joinChallengeEmit","joinChallengeRefresh"],[1,"wrapper"],[3,"fixtureStatus","previewTeamName","previewTeamNumber","captain","viceCaptain","playerRight","team1ShortName","team2ShortName","team1Count","team2Count","creditAmount","EditTeamPreview"]],template:function(t,n){1&t&&(e._UZ(0,"p-toast"),e.TgZ(1,"section",0),e.YNc(2,ee,6,3,"ng-container",1),e.qZA(),e.YNc(3,te,2,3,"ng-container",1),e.TgZ(4,"p-dialog",2),e.NdJ("onHide",function(){return n.closePreviewDialog()})("visibleChange",function(o){return n.showPreview=o}),e.YNc(5,ne,0,0,"ng-template",3),e.YNc(6,ie,3,11,"ng-container",1),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.enableContent),e.xp6(1),e.Q6J("ngIf",n.enableModalConfirmFlag),e.xp6(1),e.Akn(e.DdM(10,ae)),e.Q6J("modal",!0)("dismissableMask",!0)("visible",n.showPreview)("breakpoints",e.DdM(11,oe))("draggable",!1),e.xp6(2),e.Q6J("ngIf",n.showPreview))},dependencies:[g.mk,g.sg,g.O5,S.l,u.V,k.jx,h.Hq,A.O,O,y.FN],styles:[".m-header[_ngcontent-%COMP%]{background:#c1395b;display:flex;justify-content:center;align-items:center;color:#fff;font-size:.8em;gap:20px;width:40%;margin:10px auto;padding:5px 10px;border-radius:15px}.w-80[_ngcontent-%COMP%]{width:80%;margin:0 auto}.selectTeamsSection[_ngcontent-%COMP%]{padding:10px 0}.carder[_ngcontent-%COMP%]{margin:10px 0}.wrapper[_ngcontent-%COMP%]{min-height:200px;background:url(/assets/images/cricketGround.png) repeat padding-box;background-size:100% 100%;background-repeat:no-repeat}.teamDetails[_ngcontent-%COMP%]{background:url(/assets/images/ground.png) repeat padding-box;border-radius:5px;color:#fff}.titler[_ngcontent-%COMP%]{padding:10px;background:rgb(0 0 0 / 58%);border-top-right-radius:5px;border-top-left-radius:5px}.footler[_ngcontent-%COMP%]{padding:10px;background:#fff;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.contentler[_ngcontent-%COMP%]{padding:10px;background:transparent}.s-cions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:.8em;margin:0 10px}.s-cions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.titler[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.footler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#333}span.captainIde[_ngcontent-%COMP%]{position:absolute;right:-20px;top:0;color:#fff;border-radius:50%;box-sizing:content-box;width:20px;height:20px;line-height:0;display:flex;align-items:center;justify-content:center;font-size:.6em;cursor:pointer;background:transparent linear-gradient(256deg,#e53161 0%,#f68f3b 100%) 0% 0% no-repeat padding-box}span.player_name[_ngcontent-%COMP%]{font-size:.7rem;line-height:15px}.player_credit[_ngcontent-%COMP%]{background:rgb(0 0 0 / 58%);width:100%;border-radius:3px;font-size:.6rem;text-align:center;letter-spacing:3px;padding:5px 0}span.roundel[_ngcontent-%COMP%]{background:#fff;width:20px;height:20px;border-radius:50%;text-align:center;color:#212529;font-size:.7rem;font-weight:700;line-height:21px}.gap-10[_ngcontent-%COMP%]{gap:10px}.selectCircle[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;right:-30px;top:10px;cursor:pointer}.selectCircle.selected[_ngcontent-%COMP%]{background:#feb724!important}.selectSquare[_ngcontent-%COMP%]{width:20px;height:20px;background:#fff;position:absolute;right:8px;top:10px;cursor:pointer;border-radius:50%;border:3px solid silver}.selectSquare.selected[_ngcontent-%COMP%]{background:#feb724!important}.selectSquare1[_ngcontent-%COMP%]{width:20px;height:20px;background:#fff;position:absolute;right:8px;top:10px;cursor:pointer}.selectSquare1.selected[_ngcontent-%COMP%]{background:#feb724!important}.primeColor[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:.7em;cursor:pointer;background:transparent linear-gradient(91deg,#e8b652 0%,#bf335b 100%) 0% 0% no-repeat padding-box;color:#fff;border-color:transparent;padding:0 10px;border-radius:20px;line-height:10px}  .captainDialog .p-dialog-header{padding:.3rem 1rem!important;font-size:.9em}  .p-dialog-header{display:flex;justify-content:end}  .p-dialog-header-icon{width:1rem!important;height:1rem!important;color:#fff!important}  .p-dialog .p-dialog-header .p-dialog-header-close-icon{color:#fff!important}"]}),i})();const re=[{path:"",component:C,children:[{path:":id",component:C,pathMatch:"full"},{path:"**",component:C}]}];let se=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz.forChild(re),p.Bz]}),i})();var ce=c(6988),le=c(4996),w=c(5787);let ge=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,u.S,h.hJ,w.T]}),i})(),_e=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,ce.H,u.S,h.hJ,w.T,le.z,se,ge,y.EV]}),i})()}}]);