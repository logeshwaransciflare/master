"use strict";(self.webpackChunkboomer11_web=self.webpackChunkboomer11_web||[]).push([[496],{1496:(pe,b,r)=>{r.r(b),r.d(b,{JoinChallengeBasketballModule:()=>de});var g=r(9808),d=r(9238),m=r(7489),e=r(5e3),v=r(9783),x=r(2158),J=r(6439),T=r(3655),Z=r(3589),M=r(4383),p=r(5315),u=r(845);const k=function(){return{width:"50vw"}},D=function(){return{"960px":"75vw","640px":"100vw"}};function B(a,l){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"p-dialog",1),e.NdJ("visibleChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.enableModalConfirmFlag=o)}),e.TgZ(2,"div",2)(3,"div",3),e._UZ(4,"div",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"p")(9,"span",8),e._uU(10,"Challenge Confirmation"),e.qZA()()(),e.TgZ(11,"div",9)(12,"p"),e._uU(13,"Current Balance"),e.qZA(),e.TgZ(14,"p"),e._UZ(15,"span",10),e._uU(16),e.qZA()(),e._UZ(17,"div",9),e.TgZ(18,"div",9)(19,"p"),e._uU(20,"Contest Fee"),e.qZA(),e.TgZ(21,"p"),e._UZ(22,"span",10),e._uU(23),e.qZA()()()(),e.TgZ(24,"div",11)(25,"p",12),e._uU(26,"By Joining this contest you accept to Boomer11"),e.qZA(),e.TgZ(27,"p",13),e._uU(28,"Terms & Conditions"),e.qZA()(),e.TgZ(29,"div",14)(30,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.joinChallengeEmitFn())}),e.qZA(),e.TgZ(31,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.closeDialog())}),e.qZA()()()(),e.BQk()}if(2&a){const t=e.oxw();e.xp6(1),e.Akn(e.DdM(8,k)),e.Q6J("modal",!0)("closable",!1)("visible",t.enableModalConfirmFlag)("breakpoints",e.DdM(9,D)),e.xp6(15),e.hij("\xa0",t.userMoneyData.total_balance," "),e.xp6(7),e.hij("\xa0",t.entryFee||"","")}}const S=function(){return{"900px":"75vw","640px":"100vw"}};function A(a,l){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"p-dialog",17),e.NdJ("visibleChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.enableModalJoinConfirmFlag=o)}),e.TgZ(2,"div",18),e._UZ(3,"img",19),e.TgZ(4,"div",20)(5,"p",21),e._uU(6,"Hurray!"),e.qZA()(),e.TgZ(7,"h2",22),e._uU(8," Great work,you have succsessfully joined a challenge "),e.qZA(),e.TgZ(9,"div",23)(10,"div",24)(11,"button",25),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.myChallenges())}),e._uU(12," See my challanges "),e.qZA()(),e.TgZ(13,"div")(14,"button",26),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.joinChallenges())}),e._uU(15," Join more challanges "),e.qZA()()()()(),e.BQk()}if(2&a){const t=e.oxw();e.xp6(1),e.Akn(e.DdM(7,k)),e.Q6J("showHeader",!1)("modal",!0)("closable",!1)("visible",t.enableModalJoinConfirmFlag)("breakpoints",e.DdM(8,S))}}let F=(()=>{class a{constructor(t,n,o,i,s){this.location=t,this.router=n,this.footballService=o,this.sharedDataService=i,this.route=s,this.joinChallengeEmit=new e.vpe,this.refreshComponent=new e.vpe,this.enableModalJoinConfirmFlag=!1}ngOnInit(){}ngOnChanges(t){}closeDialog(){this.enableModalConfirmFlag=!1,this.joinChallengeEmit.emit(!1)}joinChallengeEmitFn(){this.enableModalConfirmFlag=!1,this.enableModalJoinConfirmFlag=!0,this.joinChallengeEmit.emit(!0)}myChallenges(){this.enableModalJoinConfirmFlag=!1,this.refreshComponent.emit(!0)}joinChallenges(){this.fixture_id=this.footballService.savedContestData.fixture_id,this.router.navigate([`basketball/all-challenges/${this.fix_Id}`]),this.refreshComponent.emit(!1)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(g.Ye),e.Y36(d.F0),e.Y36(x.d),e.Y36(T.g),e.Y36(d.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["challenge-confirmation-basketball"]],inputs:{enableModalConfirmFlag:"enableModalConfirmFlag",userMoneyData:"userMoneyData",entryFee:"entryFee",fix_Id:["fixture_Id","fix_Id"]},outputs:{joinChallengeEmit:"joinChallengeEmit",refreshComponent:"refreshComponent"},features:[e.TTD],decls:2,vars:2,consts:[[4,"ngIf"],["styleClass","challengeConfirmDialog",3,"modal","closable","visible","breakpoints","visibleChange"],[1,"wrapper"],[1,"pvt_img_wrapper"],[1,"pvt_img"],[1,"challenge-wrapper"],[1,"grid","justify-content-evenly","align-items-center",2,"width","80%","margin","0 auto"],[1,"col-12","text-center"],[1,"f-poggers"],[1,"col-4"],[1,"coin-win"],[1,"d-flex","justify-content-center","align-items-center","flex-column"],[1,""],[1,"terms"],[1,"d-flex","justify-content-center","align-items-center",2,"gap","10px"],["pButton","","type","button","label","Join Challenge",3,"click"],["pButton","","type","button","label","Cancel",3,"click"],["id","confirmdialog",3,"showHeader","modal","closable","visible","breakpoints","visibleChange"],[1,"text-center","pt-3",2,"background","#141941"],["src","/assets/images/pvt_trophy.png","height","100","width","100"],[1,"pt-3"],[2,"color","#60dcbb","font-size","30px"],[1,"py-3","text-white"],[1,"d-flex","flex-wrap","justify-content-center","pb-3"],[1,"mr-3"],["pButton","","type","button",2,"background","#1da580",3,"click"],["pButton","","type","button",3,"click"]],template:function(t,n){1&t&&(e.YNc(0,B,32,10,"ng-container",0),e.YNc(1,A,16,9,"ng-container",0)),2&t&&(e.Q6J("ngIf",n.enableModalConfirmFlag),e.xp6(1),e.Q6J("ngIf",n.enableModalJoinConfirmFlag))},dependencies:[g.O5,p.V,u.Hq],styles:[".terms[_ngcontent-%COMP%]{color:#ae2c72}.challenge-wrapper[_ngcontent-%COMP%]{background:transparent linear-gradient(115deg,#a31193 0%,#1e1340 100%) 0% 0% no-repeat padding-box;border-radius:10px;margin-bottom:10px;padding:10px;color:#fff}  .challengeConfirmDialog .p-dialog-header{padding:1rem 0 3rem}.wrapper[_ngcontent-%COMP%]{width:80%;margin:0 auto}.pvt_img[_ngcontent-%COMP%]{background:url(/assets/images/pvt_trophy.png);width:80px;height:80px;background-size:contain}.pvt_img_wrapper[_ngcontent-%COMP%]{position:absolute;border-radius:50%;border:20px solid #fff;top:-50px;margin:0 auto;text-align:center;left:0;right:0;width:120px;background:#1a2b63;z-index:2}"]}),a})();var y=r(1497),j=r(5553);const q=function(a,l){return{"":a,selected:l}};function N(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"div",17)(1,"h3",18),e._uU(2,"All Teams"),e.qZA(),e.TgZ(3,"div",19),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return o.chkAll=!o.chkAll,e.KtG(o.seletAll(o.chkAll))}),e.qZA()()}if(2&a){const t=e.oxw(3);e.xp6(3),e.Q6J("ngClass",e.WLB(1,q,!t.chkAll,t.chkAll))}}function I(a,l){1&a&&(e.ynx(0),e._uU(1," No data "),e.BQk())}function U(a,l){1&a&&e._UZ(0,"div",46)}const h=function(a){return{selected:a}};function P(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"div",47),e.NdJ("click",function(o){e.CHM(t);const i=e.oxw(3).$implicit,s=e.oxw(3);return s.isClicked[i]=!0!==s.isClicked[i],s.chkVal=!0!==s.isClicked[i],e.KtG(s.select(o,i))}),e.qZA()}if(2&a){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,h,n.isClicked[t]||n.chkAll))}}function O(a,l){if(1&a&&(e.ynx(0),e.YNc(1,U,1,0,"div",44),e.YNc(2,P,1,3,"div",45),e.BQk()),2&a){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isThisJoinedTeam(t)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.isThisJoinedTeam(t))}}function Q(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"div",47),e.NdJ("click",function(o){e.CHM(t);const i=e.oxw(3).$implicit,s=e.oxw(3);return s.isClicked[i]=!0!==s.isClicked[i],s.chkVal=!0!==s.isClicked[i],e.KtG(s.select(o,i))}),e.qZA()}if(2&a){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,h,n.isClicked[t]||n.chkAll))}}function Y(a,l){if(1&a&&(e.ynx(0),e.YNc(1,Q,1,3,"div",45),e.BQk()),2&a){const t=e.oxw(5);e.xp6(1),e.Q6J("ngIf",t.contestData&&1==t.contestData.multi)}}function G(a,l){1&a&&e._UZ(0,"div",49)}function E(a,l){if(1&a&&(e.ynx(0),e.YNc(1,G,1,0,"div",48),e.BQk()),2&a){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isThisJoinedTeam(t))}}function L(a,l){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",50),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit,i=e.oxw(3);return i.isClicked=[],e.KtG(i.isClicked[o]=!0!==i.isClicked[o])}),e.qZA(),e.BQk()}if(2&a){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngClass",e.VKq(1,h,n.isClicked[t]))}}function z(a,l){if(1&a){const t=e.EpF();e.ynx(0),e.YNc(1,O,3,2,"ng-container",1),e.YNc(2,Y,2,1,"ng-container",1),e.YNc(3,E,2,1,"ng-container",1),e.YNc(4,L,2,3,"ng-container",1),e.TgZ(5,"div",22),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,i=e.oxw(3);return e.KtG(i.showPreviewByTeam(o))}),e.TgZ(6,"div",23)(7,"div",24),e._uU(8),e.qZA(),e.TgZ(9,"div",25)(10,"span",26),e._UZ(11,"i",27),e.qZA()()(),e.TgZ(12,"div",28)(13,"div",29)(14,"div",30)(15,"div",31)(16,"span",32),e._UZ(17,"img",33),e.TgZ(18,"span",34),e._uU(19,"SP"),e.qZA()(),e.TgZ(20,"span",35),e._uU(21),e.qZA(),e.TgZ(22,"span",36),e._uU(23),e.qZA()()(),e.TgZ(24,"div",37)(25,"div",38)(26,"span",39)(27,"span",40),e._uU(28),e.qZA(),e.TgZ(29,"span"),e._uU(30),e.qZA()(),e.TgZ(31,"span")(32,"strong"),e._uU(33,"Vs"),e.qZA()(),e.TgZ(34,"span",39)(35,"span",40),e._uU(36),e.qZA(),e.TgZ(37,"span"),e._uU(38),e.qZA()()()(),e.TgZ(39,"div",41)(40,"div",31)(41,"span"),e._UZ(42,"img",33),e.TgZ(43,"span",34),e._uU(44,"PP"),e.qZA()(),e.TgZ(45,"span",35),e._uU(46),e.qZA(),e.TgZ(47,"span",36),e._uU(48),e.qZA()()()()(),e.TgZ(49,"div",42)(50,"div",43)(51,"span"),e._uU(52),e.qZA(),e.TgZ(53,"span"),e._uU(54),e.qZA(),e.TgZ(55,"span"),e._uU(56),e.qZA(),e.TgZ(57,"span"),e._uU(58),e.qZA(),e.TgZ(59,"span"),e._uU(60),e.qZA()()()(),e.BQk()}if(2&a){const t=e.oxw().$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&0==n.contestData.multi&&n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&0==n.contestData.multi&&!n.anyTeamJoinedThisContest(n.contestData)),e.xp6(4),e.hij("Team ",t,""),e.xp6(9),e.MGl("src","https://thefantasysportsapi.com/media/teams/",n.getCaptainDetails(t)[0].squads[0].team.team_sn,".svg",e.LSH),e.xp6(4),e.Oqu(n.getCaptainDetails(t)[0].squads[0].player_api||""),e.xp6(2),e.Oqu(n.getCaptainDetails(t)[0].squads[0].team.team_sn),e.xp6(5),e.hij(" ",n.getTeam1Name(t).length||""," "),e.xp6(2),e.hij(" ",n.getTeam1Name(t)[0].squads[0].team.team_sn||""," "),e.xp6(6),e.hij(" ",n.getTeam2Name(t).length||""," "),e.xp6(2),e.hij(" ",n.getTeam2Name(t)[0].squads[0].team.team_sn||""," "),e.xp6(4),e.MGl("src","https://thefantasysportsapi.com/media/teams/",n.getViceCaptainDetails(t)[0].squads[0].team.team_sn,".svg",e.LSH),e.xp6(4),e.Oqu(n.getViceCaptainDetails(t)[0].squads[0].player_api||""),e.xp6(2),e.Oqu(n.getViceCaptainDetails(t)[0].squads[0].team.team_sn),e.xp6(4),e.hij("PG: ",n.getGkCount(t)||"",""),e.xp6(2),e.hij("SG: ",n.getDefCount(t)||"",""),e.xp6(2),e.hij("SF: ",n.getMidCount(t)||"",""),e.xp6(2),e.hij("PF: ",n.getFwdCount(t)||"",""),e.xp6(2),e.hij("C: ",n.getCenterCount(t)||"","")}}function H(a,l){if(1&a&&(e.TgZ(0,"div",20)(1,"div",21),e.YNc(2,I,2,0,"ng-container",1),e.YNc(3,z,61,20,"ng-container",1),e.qZA()()),2&a){const t=l.$implicit,n=e.oxw(3);e.xp6(2),e.Q6J("ngIf",0===n.myteamsGroup[t].length),e.xp6(1),e.Q6J("ngIf",n.myteamsGroup[t].length)}}function K(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",51),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.createTeams())}),e.qZA()}}function $(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",52),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.joinChallenge())}),e.qZA()}}function V(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",53),e.NdJ("click",function(o){e.CHM(t);const i=e.oxw(3);return e.KtG(i.selectTeam(o))}),e.qZA()}}function R(a,l){if(1&a&&(e.ynx(0),e.TgZ(1,"section",7)(2,"div",8)(3,"div",9)(4,"h3",10),e._uU(5,"Select Teams"),e.qZA()(),e.YNc(6,N,4,4,"div",11),e.qZA(),e.YNc(7,H,4,2,"div",12),e.TgZ(8,"div",13),e.YNc(9,K,1,0,"button",14),e.YNc(10,$,1,0,"button",15),e.YNc(11,V,1,0,"button",16),e.qZA()(),e.BQk()),2&a){const t=e.oxw(2);e.xp6(6),e.Q6J("ngIf",t.contestData&&1==t.contestData.multi),e.xp6(1),e.Q6J("ngForOf",t.objectKeys(t.myteamsGroup)),e.xp6(2),e.Q6J("ngIf",!t.sixteamsCreated),e.xp6(1),e.Q6J("ngIf",!t.privateChallenge),e.xp6(1),e.Q6J("ngIf",t.privateChallenge)}}function W(a,l){if(1&a&&(e.ynx(0),e.TgZ(1,"div",4)(2,"span",5),e._uU(3),e.qZA(),e._UZ(4,"app-auto-timer",6),e.qZA(),e.YNc(5,R,12,5,"ng-container",1),e.BQk()),2&a){const t=e.oxw();e.xp6(3),e.hij(" ",(null==t.fixtureData?null:t.fixtureData.fixture_sh)||"",""),e.xp6(1),e.Q6J("countDown",null==t.fixtureData?null:t.fixtureData.date_time),e.xp6(1),e.Q6J("ngIf",t.enableContainer)}}function X(a,l){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"challenge-confirmation-basketball",54),e.NdJ("joinChallengeEmit",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.joinChallengeEmit(o))})("refreshComponent",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.refreshSameComponent(o))}),e.qZA(),e.BQk()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("userMoneyData",t.userMoneyData)("entryFee",t.entryFee)("enableModalConfirmFlag",t.enableModalConfirmFlag)("fixture_Id",t.fix_Id)}}function ee(a,l){}function te(a,l){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",55)(2,"basketball-preview",56),e.NdJ("EditTeamPreview",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.editThisTeam(o))}),e.qZA()(),e.BQk()}if(2&a){const t=e.oxw();e.xp6(2),e.Q6J("previewTeamName",t.previewTeamName)("previewTeamNumber",t.previewTeamNumber)("fixtureStatus",t.fixtureStatus)("captain",t.captainId)("viceCaptain",t.viceCaptainId)("playerRight",t.previewTeamList)("team1ShortName",t.getTeam1Name(t.previewTeamNumber)[0].squads[0].team.team_sn||"")("team2ShortName",t.getTeam2Name(t.previewTeamNumber)[0].squads[0].team.team_sn||"")("team1Count",t.getTeam1Name(t.previewTeamNumber).length||"")("team2Count",t.getTeam2Name(t.previewTeamNumber).length||"")("creditAmount",t.getTotalCredits(t.previewTeamList))}}const ne=function(){return{width:"35vw"}},ae=function(){return{"960px":"75vw","640px":"100vw"}};let f=(()=>{class a{constructor(t,n,o,i,s,c,_,C){this.messageService=t,this.router=n,this.footballService=o,this.userService=i,this.route=s,this.sharedDataService=c,this.location=_,this.myTeamsbasketball=C,this.enableModalConfirmFlag=!1,this.dataList=[],this.sixteamsCreated=!1,this.showPreview=!1,this.previewTeamList=[],this.isClicked=[],this.myteams=[],this.objectKeys=Object.keys,this.teamsJoinedForThiscontest=[],this.previewTeamName="",this.previewTeamNumber="",this.privateChallenge=!1,this.chkAll=!1,this.chkVal=this.chkAll,this.teamVals=[],this.arrData=[]}ngOnInit(){this.footballService.fixtureState.subscribe(t=>{t&&(this.footballService.savedContestData?(this.contestData=null,this.fixtureData=this.footballService.savedContestData.fixtureData,this.userMoneyData=this.userService.userAccountData.user.money,this.contestData=this.footballService.savedContestData,this.enableContent=!0,this.renderUserCreatedTeams()):this.enableContent=!1,sessionStorage.setItem("joinURl",`${this.router.url}`))}),this.fix_Id=this.route.snapshot.paramMap.get("id"),this.privateChallenge=this.footballService._privateChallenge}refreshSameComponent(t){t&&this.ngOnInit()}renderUserCreatedTeams(){this.footballService.getJoinedContestBasketballByFixture(this.fixtureData.id).subscribe(t=>{var n,o;t&&(t.success?(this.teamsJoinedForThiscontest=t.data.filter(i=>i.contest_id==this.contestData.id).flatMap(i=>i.team_id),(null===(n=this.myteams)||void 0===n?void 0:n.length)==(null===(o=this.teamsJoinedForThiscontest)||void 0===o?void 0:o.length)&&(this.chkAll=!0)):this.messageService.add({severity:"warn",summary:"",detail:t.message}))}),m.size(this.footballService.createdUserTeams)?(this.enableContainer=!0,6===m.size(this.footballService.createdUserTeams)&&(this.sixteamsCreated=!0),this.renderMyTeams(this.footballService.createdUserTeams)):this.enableContainer=!1}renderMyTeams(t){this.myteamsGroup={},Object.assign(this.myteamsGroup,t),this.myteams=[];let n=m.flatten(Object.values(t));this.dataList=n;for(let i=1;i<=6;i++){let s=n.filter(c=>c.team==i);s.length&&this.myteams.push(s)}console.log(this.myteamsGroup)}getCaptainDetails(t){return console.log("CdataList",this.dataList),this.dataList.filter(n=>n.team==t&&"captain"===n.title)}getViceCaptainDetails(t){return this.dataList.filter(n=>n.team==t&&"vcaptain"===n.title)}getGkCount(t){return this.dataList.filter(n=>n.team==t&&"PG"===n.squads[0].player_type).length}getDefCount(t){return this.dataList.filter(n=>n.team==t&&"SG"===n.squads[0].player_type).length}getMidCount(t){return this.dataList.filter(n=>n.team==t&&"SF"===n.squads[0].player_type).length}getFwdCount(t){return this.dataList.filter(n=>n.team==t&&"PF"===n.squads[0].player_type).length}getCenterCount(t){return this.dataList.filter(n=>n.team==t&&"C"===n.squads[0].player_type).length}getTeam1Name(t){const n=this.dataList.filter(s=>s.team==t);let o=m.sortBy(n,s=>s.squads[0].teamId),i=Array.from(new Set(o.flatMap(s=>s.squads[0].team_id)));return this.dataList.filter(s=>s.team==t&&s.squads[0].team_id==i[0])}getTeam2Name(t){const n=this.dataList.filter(s=>s.team==t);let o=m.sortBy(n,s=>s.squads[0].teamId),i=Array.from(new Set(o.flatMap(s=>s.squads[0].team_id)));return this.dataList.filter(s=>s.team==t&&s.squads[0].team_id==i[1])}createTeams(){sessionStorage.setItem("joinURl",`${this.router.url}`),this.router.navigate([`/basketball/team/create/${this.fixtureData.id}`])}showPreviewByTeam(t){var n,o;this.showPreview=!0,this.previewTeamName=this.userService.user.team_name,this.previewTeamNumber=t,this.fixtureStatus=null===(n=this.fixtureData)||void 0===n?void 0:n.fixture_status,this.fixtureType=null===(o=this.fixtureData)||void 0===o?void 0:o.type,this.previewTeamList=this.dataList.filter(i=>i.team==t).map(i=>{let s=i,_=i.squads[0].player_value.split(",")[0];return i.credit=i.f_points?i.f_points:+_,s.player_type=i.squads[0].player_type,s.player_name=i.squads[0].player_name,s.team_name=i.squads[0].team.team_sn,s}),this.isPlayerLists=!0,this.captainId=this.getCaptainDetails(t)[0].id,this.viceCaptainId=this.getViceCaptainDetails(t)[0].id}getTotalCredits(t){return t.reduce((n,o)=>n+o.credit,0)}closePreviewDialog(){this.showPreview=!1,this.previewTeamList=[]}joinChallenge(){if(this.enableModalConfirmFlag=!1,this.isClicked.filter(t=>t).length){const t=this.isClicked.map((n,o)=>{if(n&&null!==n)return o}).filter(function(n){return n}).length;this.entryFee="",this.entryFee=this.contestData.entry_fee?t*parseFloat(this.contestData.entry_fee):"",this.userMoneyData.total_balance>=parseFloat(this.entryFee)?this.enableModalConfirmFlag=!0:this.messageService.add({severity:"warn",summary:"",detail:"Insufficient Coin Balance to Join league."})}else this.enableModalConfirmFlag=!1,this.messageService.add({severity:"warn",summary:"",detail:"You need to select atleast one team to proceed."})}joinChallengeEmit(t){if(t){const o=this.isClicked.map((i,s)=>{if(i&&null!==i)return s}).filter(function(i){return i}).toString();if(console.log(o),console.log(this.footballService.savedContestData),this.inviteID=this.footballService.getinvite(),this.inviteID)return void this.footballService.joinbyInviteCode({team_id:o,fixture_id:this.footballService.savedContestData.fixture_id,invite_code:this.inviteID}).subscribe(s=>{s.success?(this.messageService.add({severity:"success",summary:"",detail:"Contest Joined Successfully."}),this.resetall()):(this.messageService.add({severity:"warn",summary:"",detail:s.message}),this.resetall())});this.footballService.savedContestData.id?this.footballService.joinContestBasketball({team_id:o,fixture_id:this.footballService.savedContestData.fixture_id,contest_id:this.footballService.savedContestData.id,rank:0,score:0,winning:0}).subscribe(s=>{s&&(s.success?(this.messageService.add({severity:"success",summary:"",detail:"Contest Joined Successfully."}),this.resetall()):(this.messageService.add({severity:"warn",summary:"",detail:s.message}),this.resetall()))},s=>{console.log(s)}):this.footballService.createPrivateContest({team_id:o,fixture_id:this.footballService.savedContestData.fixture_id,contest_name:this.footballService.savedContestData.contest_name,size:this.footballService.savedContestData.size,total_prize:this.footballService.savedContestData.total_prize,prize_splitup:this.footballService.savedContestData.prize_splitup,entry_fee:this.footballService.savedContestData.entry_fee,multi:this.footballService.savedContestData.multi}).subscribe(s=>{s&&(s.success?(console.log(s),this.messageService.add({severity:"success",summary:"",detail:s.message})):this.messageService.add({severity:"warning",summary:"",detail:s.message}))})}}isThisJoinedTeam(t){return!!t&&(console.log("joined",this.teamsJoinedForThiscontest),this.teamsJoinedForThiscontest.includes(parseFloat(t)))}anyTeamJoinedThisContest(t){return!!t&&this.teamsJoinedForThiscontest.length}resetall(){this.isClicked=[],this.entryFee="",this.userService.getUserAccount().subscribe(t=>{t&&(this.userService.userAccountData=t.data,this.userMoneyData=this.userService.userAccountData.user.money)})}getData(){console.log("king")}switchTeam(){}selectTeam(t){const o=this.isClicked.map((i,s)=>{if(i&&null!==i)return s}).filter(function(i){return i}).toString();this.footballService.savedContestData.team_id=o,this.location.back()}seletAll(t){this.myteams.forEach((n,o)=>{this.isClicked[o]=!this.isClicked[o]})}select(t,n){this.isClicked.forEach((o,i)=>{var s,c,_;if(this.isClicked[i]){this.isClicked[i]=!0;let C=(null===(s=this.myteams)||void 0===s?void 0:s.length)-(null===(c=this.teamsJoinedForThiscontest)||void 0===c?void 0:c.length);(null===(_=this.isClicked)||void 0===_?void 0:_.length)==C+1&&this.isClicked.every(me=>1==me)&&(this.chkAll=!0)}else this.isClicked[i]=!1,this.chkAll=this.isClicked[i]})}editThisTeam(t){let n=this.route.snapshot.paramMap.get("id");this.myTeamsbasketball.getBasketballUserTeamsByFixture(n).pipe().subscribe(o=>{let i=m.flatten(Object.values(o.data));this.dataList=i;let s={};s.team=this.dataList.filter(c=>c.team==t),s.captain=this.getCaptainDetails(t)[0].p_id,s.vcaptain=this.getViceCaptainDetails(t)[0].p_id,this.footballService.clonedTeamData=s,sessionStorage.setItem("joinURl",`${this.router.url}`),this.footballService.teamCreateStatus="EDIT",sessionStorage.setItem("joinURl",`${this.router.url}`),this.router.navigate([`/basketball/team/create/${n}`])})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(v.ez),e.Y36(d.F0),e.Y36(x.d),e.Y36(J.e),e.Y36(d.gz),e.Y36(T.g),e.Y36(g.Ye),e.Y36(Z.m))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-join-challenge-basketball"]],decls:7,vars:11,consts:[[1,"w-80","py-5"],[4,"ngIf"],["header","Preview","styleClass","captainDialog",3,"modal","visible","dismissableMask","breakpoints","onHide","visibleChange"],["pTemplate","header"],[1,"m-header"],[1,"f-poggers"],[1,"f-poggers","text-prime","font-weight-bold",3,"countDown"],[1,"selectTeamsSection"],[1,"row"],[1,"col"],[1,"text-white","font-bold"],["class","col d-flex justify-content-end",4,"ngIf"],["class","carder",4,"ngFor","ngForOf"],[1,"d-flex","w-100","justify-content-center","align-items-center","gap-10"],["pButton","","type","button","label","Create Team",3,"click",4,"ngIf"],["pButton","","type","button","label","Join Challenge",3,"click",4,"ngIf"],["pButton","","type","button","label","Select Team",3,"click",4,"ngIf"],[1,"col","d-flex","justify-content-end"],[1,"text-white","font-bold","px-3"],[1,"selectSquare",2,"margin-right","4%",3,"ngClass","click"],[1,"carder"],[1,"teamDetails","position-relative"],[1,"contestDetails-item","cursor-pointer",3,"click"],[1,"titler"],[1,"s-title"],[1,"s-cions"],[1,"cursor-pointer"],[1,"pi","pi-eye",2,"font-size","1rem"],[1,"contentler"],[1,"d-flex","justify-content-around","align-items-center",2,"gap","15px"],[1,"captain-section"],[1,"d-flex","flex-column","justify-content-center","align-items-center","position-relative"],[1,"position-relative"],["width","30",3,"src"],[1,"captainIde"],[1,"player_name"],[1,"player_credit","text-white"],[1,"teams-section"],[1,"d-flex","justify-content-center","align-items-center",2,"gap","25px"],[1,"d-flex","flex-column","justify-content-center","align-items-center",2,"gap","8px"],[1,"roundel"],[1,"vcaptain-section"],[1,"footler"],[1,"d-flex","justify-content-between","align-items-center"],["class","selectSquare selected",4,"ngIf"],["class","selectSquare",3,"ngClass","click",4,"ngIf"],[1,"selectSquare","selected"],[1,"selectSquare",3,"ngClass","click"],["class","selectCircle selected",4,"ngIf"],[1,"selectCircle","selected"],[1,"selectCircle",3,"ngClass","click"],["pButton","","type","button","label","Create Team",3,"click"],["pButton","","type","button","label","Join Challenge",3,"click"],["pButton","","type","button","label","Select Team",3,"click"],[3,"userMoneyData","entryFee","enableModalConfirmFlag","fixture_Id","joinChallengeEmit","refreshComponent"],[1,"wrapper"],[3,"previewTeamName","previewTeamNumber","fixtureStatus","captain","viceCaptain","playerRight","team1ShortName","team2ShortName","team1Count","team2Count","creditAmount","EditTeamPreview"]],template:function(t,n){1&t&&(e._UZ(0,"p-toast"),e.TgZ(1,"section",0),e.YNc(2,W,6,3,"ng-container",1),e.qZA(),e.YNc(3,X,2,4,"ng-container",1),e.TgZ(4,"p-dialog",2),e.NdJ("onHide",function(){return n.closePreviewDialog()})("visibleChange",function(i){return n.showPreview=i}),e.YNc(5,ee,0,0,"ng-template",3),e.YNc(6,te,3,11,"ng-container",1),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.enableContent),e.xp6(1),e.Q6J("ngIf",n.enableModalConfirmFlag),e.xp6(1),e.Akn(e.DdM(9,ne)),e.Q6J("modal",!0)("visible",n.showPreview)("dismissableMask",!0)("breakpoints",e.DdM(10,ae)),e.xp6(2),e.Q6J("ngIf",n.showPreview))},dependencies:[v.jx,g.mk,g.sg,g.O5,M.l,p.V,u.Hq,F,y.FN,j.V],styles:[".m-header[_ngcontent-%COMP%]{background:#c1395b;display:flex;justify-content:center;align-items:center;color:#fff;font-size:.8em;gap:20px;width:40%;margin:10px auto;padding:5px 10px;border-radius:15px}.w-80[_ngcontent-%COMP%]{width:80%;margin:0 auto}.selectTeamsSection[_ngcontent-%COMP%]{padding:10px 0}.carder[_ngcontent-%COMP%]{margin:10px 0}.wrapper[_ngcontent-%COMP%]{background:url(/assets/images/basketball-ground.png) repeat padding-box;min-height:200px;background-repeat:no-repeat;background-size:100% 100%}.teamDetails[_ngcontent-%COMP%]{background:url(/assets/images/basketball-ground.png) repeat padding-box;border-radius:5px;color:#fff}.titler[_ngcontent-%COMP%]{padding:10px;background:rgb(0 0 0 / 58%);border-top-right-radius:5px;border-top-left-radius:5px}.footler[_ngcontent-%COMP%]{padding:10px;background:#fff;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.contentler[_ngcontent-%COMP%]{padding:10px;background:transparent}.s-cions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:.8em;margin:0 10px}.s-cions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.titler[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.footler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#333}span.captainIde[_ngcontent-%COMP%]{position:absolute;right:-20px;top:0;color:#fff;border-radius:50%;box-sizing:content-box;width:20px;height:20px;line-height:0;display:flex;align-items:center;justify-content:center;font-size:.6em;cursor:pointer;background:transparent linear-gradient(256deg,#e53161 0%,#f68f3b 100%) 0% 0% no-repeat padding-box}span.player_name[_ngcontent-%COMP%]{font-size:.7rem;line-height:15px}.player_credit[_ngcontent-%COMP%]{background:rgb(0 0 0 / 58%);width:100%;border-radius:3px;font-size:.6rem;text-align:center;letter-spacing:3px;padding:5px 0}span.roundel[_ngcontent-%COMP%]{background:#fff;width:20px;height:20px;border-radius:50%;text-align:center;color:#212529;font-size:.7rem;font-weight:700;line-height:21px}.gap-10[_ngcontent-%COMP%]{gap:10px}.selectCircle[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;right:-30px;top:10px;cursor:pointer}.selectCircle.selected[_ngcontent-%COMP%]{background:#feb724!important}.selectSquare[_ngcontent-%COMP%]{width:20px;height:20px;background:#fff;position:absolute;right:-30px;top:10px;cursor:pointer}.selectSquare.selected[_ngcontent-%COMP%]{background:#feb724!important}.primeColor[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:.7em;cursor:pointer;background:transparent linear-gradient(91deg,#e8b652 0%,#bf335b 100%) 0% 0% no-repeat padding-box;color:#fff;border-color:transparent;padding:0 10px;border-radius:20px;line-height:10px}  .captainDialog .p-dialog-header{padding:.3rem 1rem!important;font-size:.9em}  .p-dialog-header-icon{width:1rem!important;height:1rem!important;color:#fff!important}.wrapper[_ngcontent-%COMP%]   .credit-bottom[_ngcontent-%COMP%]{position:inherit}"]}),a})();const ie=[{path:"",component:f,children:[{path:":id",component:f,pathMatch:"full"},{path:"**",component:f}]}];let oe=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[d.Bz.forChild(ie),d.Bz]}),a})();var w=r(5787),se=r(6988),le=r(3640),re=r(3725);let ce=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.ez,p.S,u.hJ,w.T]}),a})();var ge=r(160),_e=r(5445);let de=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[le.y,re.LU,g.ez,se.H,p.S,u.hJ,w.T,oe,ce,y.EV,ge.W,_e.B]}),a})()}}]);