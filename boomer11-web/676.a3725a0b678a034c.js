"use strict";(self.webpackChunkboomer11_web=self.webpackChunkboomer11_web||[]).push([[676],{8676:(be,b,l)=>{l.r(b),l.d(b,{JoinChallengeCricketModule:()=>xe,playerFactory:()=>Z});var d=l(9808),m=l(3807),p=l(7489),C=l(5439),D=l(1158),e=l(5e3),T=l(9783),k=l(445),j=l(6439),A=l(3655),S=l(6581),F=l(5532),N=l(4383),u=l(5315),h=l(845),q=l(2673);const y=function(){return{width:"50vw"}},O=function(){return{"960px":"75vw","640px":"100vw"}};function U(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"p-dialog",1),e.NdJ("visibleChange",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.enableModalConfirmFlag=a)}),e.TgZ(2,"div",2)(3,"div",3),e._UZ(4,"div",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"p")(9,"span",8),e._uU(10,"Challenge Confirmation"),e.qZA()()(),e.TgZ(11,"div",9)(12,"p"),e._uU(13,"Current Balance"),e.qZA(),e.TgZ(14,"p"),e._UZ(15,"span",10),e._uU(16),e.qZA()(),e._UZ(17,"div",9),e.TgZ(18,"div",9)(19,"p"),e._uU(20,"Contest Fee"),e.qZA(),e.TgZ(21,"p"),e._UZ(22,"span",10),e._uU(23),e.qZA()()()(),e.TgZ(24,"div",11)(25,"p",12),e._uU(26,"By Joining this contest you accept to Boomer11"),e.qZA(),e.TgZ(27,"p",13),e._uU(28,"Terms & Conditions"),e.qZA()(),e.TgZ(29,"div",14)(30,"button",15),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.joinChallengeEmitFn())}),e.qZA(),e.TgZ(31,"button",16),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.closeDialog())}),e.qZA()()()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Akn(e.DdM(9,y)),e.Q6J("modal",!0)("closable",!1)("visible",t.enableModalConfirmFlag)("breakpoints",e.DdM(10,O))("draggable",!1),e.xp6(15),e.hij("\xa0",t.userMoneyData.total_balance," "),e.xp6(7),e.hij("\xa0",t.entryFee||"","")}}const I=function(){return{"900px":"75vw","640px":"100vw"}};function P(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"p-dialog",17),e.NdJ("visibleChange",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.enableModalJoinConfirmFlag=a)}),e.TgZ(2,"div",18),e._UZ(3,"img",19),e.TgZ(4,"div",20)(5,"p",21),e._uU(6,"Hurray!"),e.qZA()(),e.TgZ(7,"h2",22),e._uU(8," Great work,you have succsessfully joined a challenge "),e.qZA(),e.TgZ(9,"div",23)(10,"div",24)(11,"button",25),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.myChallenges())}),e._uU(12," See my challanges "),e.qZA()(),e.TgZ(13,"div")(14,"button",26),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.joinChallenges())}),e._uU(15," Join more challanges "),e.qZA()()()()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Akn(e.DdM(8,y)),e.Q6J("showHeader",!1)("modal",!0)("closable",!1)("visible",t.enableModalJoinConfirmFlag)("breakpoints",e.DdM(9,I))("draggable",!1)}}let B=(()=>{class i{constructor(t,n,a,o){this.location=t,this.cricketService=n,this.router=a,this.route=o,this.joinChallengeEmit=new e.vpe,this.joinChallengeRefresh=new e.vpe,this.enableModalJoinConfirmFlag=!1}ngOnInit(){}ngOnChanges(t){}closeDialog(){this.enableModalConfirmFlag=!1,this.joinChallengeEmit.emit(!1)}joinChallengeEmitFn(){this.enableModalConfirmFlag=!1,this.joinChallengeEmit.emit(!0)}myChallenges(){this.enableModalJoinConfirmFlag=!1;let t=this.route.snapshot.paramMap.get("id");this.router.navigate([`cricket/my-challenges/${t}`])}joinChallenges(){this.fixture_id=this.cricketService.savedContestData.fixture_id,this.router.navigate([`cricket/all-challenges/${this.fixture_id}`]),this.joinChallengeRefresh.emit(!1)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.Ye),e.Y36(k.D),e.Y36(m.F0),e.Y36(m.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["challenge-confirmation-cricket"]],inputs:{enableModalConfirmFlag:"enableModalConfirmFlag",userMoneyData:"userMoneyData",entryFee:"entryFee",enableModalJoinConfirmFlag:"enableModalJoinConfirmFlag"},outputs:{joinChallengeEmit:"joinChallengeEmit",joinChallengeRefresh:"joinChallengeRefresh"},features:[e.TTD],decls:2,vars:2,consts:[[4,"ngIf"],["styleClass","challengeConfirmDialog",3,"modal","closable","visible","breakpoints","draggable","visibleChange"],[1,"wrapper"],[1,"pvt_img_wrapper"],[1,"pvt_img"],[1,"challenge-wrapper"],[1,"grid","justify-content-evenly","align-items-center",2,"width","80%","margin","0 auto","margin-top","10%"],[1,"col-12","text-center"],[1,"f-poggers"],[1,"col-4"],[1,"coin-win"],[1,"d-flex","justify-content-center","align-items-center","flex-column"],[1,""],[1,"terms"],[1,"d-flex","justify-content-center","align-items-center",2,"gap","10px"],["pButton","","type","button","label","Join Challenge",3,"click"],["pButton","","type","button","label","Cancel",3,"click"],["id","confirmdialog",3,"showHeader","modal","closable","visible","breakpoints","draggable","visibleChange"],[1,"text-center","pt-3",2,"background","#141941"],["src","/assets/images/pvt_trophy.png","height","100","width","100"],[1,"pt-3"],[2,"color","#60dcbb","font-size","30px"],[1,"py-3","text-white"],[1,"d-flex","flex-wrap","justify-content-center","pb-3"],[1,"mr-3"],["pButton","","type","button",2,"background","#1da580",3,"click"],["pButton","","type","button",3,"click"]],template:function(t,n){1&t&&(e.YNc(0,U,32,11,"ng-container",0),e.YNc(1,P,16,10,"ng-container",0)),2&t&&(e.Q6J("ngIf",n.enableModalConfirmFlag),e.xp6(1),e.Q6J("ngIf",n.enableModalJoinConfirmFlag))},dependencies:[d.O5,u.V,h.Hq],styles:[".terms[_ngcontent-%COMP%]{color:#ae2c72}.challenge-wrapper[_ngcontent-%COMP%]{background:transparent linear-gradient(115deg,#a31193 0%,#1e1340 100%) 0% 0% no-repeat padding-box;border-radius:10px;margin-bottom:10px;padding:10px;color:#fff}  .challengeConfirmDialog .p-dialog-header{padding:1rem 0 3rem}.wrapper[_ngcontent-%COMP%]{width:80%;margin:0 auto}.pvt_img[_ngcontent-%COMP%]{background:url(/assets/images/pvt_trophy.png);width:80px;height:80px;background-size:contain}.pvt_img_wrapper[_ngcontent-%COMP%]{position:absolute;border-radius:50%;border:20px solid #fff;top:-50px;margin:0 auto;text-align:center;left:0;right:0;width:120px;background:#1a2b63;z-index:2}[_nghost-%COMP%]     .p-dialog .p-dialog-content{background:#141941}"]}),i})();var w=l(1497),J=l(3713);const Y=function(i,r){return{"":i,selected:r}};function Q(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",30)(1,"h3",31),e._uU(2,"All Teams"),e.qZA(),e.TgZ(3,"div",32),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.seletAll(a.chkAll))}),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(3),e.Q6J("ngClass",e.WLB(1,Y,!t.chkAll,t.chkAll))}}function H(i,r){1&i&&(e.ynx(0),e._uU(1," No data "),e.BQk())}function E(i,r){1&i&&e._UZ(0,"div",59)}const f=function(i){return{selected:i}};function z(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",60),e.NdJ("click",function(a){e.CHM(t);const o=e.oxw(3).$implicit,s=e.oxw(3);return e.KtG(s.select(a,o))}),e.qZA()}if(2&i){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,f,n.isClicked[t]))}}function L(i,r){if(1&i&&(e.ynx(0),e.YNc(1,E,1,0,"div",57),e.YNc(2,z,1,3,"div",58),e.BQk()),2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isThisJoinedTeam(t)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.isThisJoinedTeam(t))}}function G(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",60),e.NdJ("click",function(a){e.CHM(t);const o=e.oxw(3).$implicit,s=e.oxw(3);return e.KtG(s.select(a,o))}),e.qZA()}if(2&i){const t=e.oxw(3).$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,f,n.isClicked[t]))}}function R(i,r){if(1&i&&(e.ynx(0),e.YNc(1,G,1,3,"div",58),e.BQk()),2&i){const t=e.oxw(5);e.xp6(1),e.Q6J("ngIf",t.contestData&&1==t.contestData.multi)}}function K(i,r){1&i&&e._UZ(0,"div",62)}function $(i,r){if(1&i&&(e.ynx(0),e.YNc(1,K,1,0,"div",61),e.BQk()),2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isThisJoinedTeam(t))}}function V(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",63),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2).$implicit,o=e.oxw(3);return o.isClicked=[],e.KtG(o.isClicked[a]=!0!==o.isClicked[a])}),e.qZA(),e.BQk()}if(2&i){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngClass",e.VKq(1,f,n.isClicked[t]))}}function W(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.YNc(1,L,3,2,"ng-container",1),e.YNc(2,R,2,1,"ng-container",1),e.YNc(3,$,2,1,"ng-container",1),e.YNc(4,V,2,3,"ng-container",1),e.TgZ(5,"div",35),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,o=e.oxw(3);return e.KtG(o.showPreviewByTeam(a))}),e.TgZ(6,"div",36)(7,"div",37),e._uU(8),e.qZA(),e._UZ(9,"div",38),e.qZA(),e.TgZ(10,"div",39)(11,"div",40)(12,"div",41)(13,"div",42)(14,"span",43),e._UZ(15,"img",44),e.TgZ(16,"span",45),e._uU(17,"C"),e.qZA()(),e.TgZ(18,"span",46)(19,"span",47),e._uU(20),e.qZA(),e._uU(21),e.qZA()()(),e.TgZ(22,"div",48)(23,"div",49)(24,"span",50)(25,"span",51),e._uU(26),e.qZA(),e.TgZ(27,"span"),e._uU(28),e.qZA()(),e.TgZ(29,"span")(30,"strong"),e._uU(31,"Vs"),e.qZA()(),e.TgZ(32,"span",50)(33,"span",51),e._uU(34),e.qZA(),e.TgZ(35,"span"),e._uU(36),e.qZA()()()(),e.TgZ(37,"div",52)(38,"div",42)(39,"span"),e._UZ(40,"img",44),e.TgZ(41,"span",45),e._uU(42,"VC"),e.qZA()(),e.TgZ(43,"span",46)(44,"span",47),e._uU(45),e.qZA(),e._uU(46),e.qZA()()()()(),e.TgZ(47,"div",53)(48,"div",54)(49,"span",55),e._uU(50,"WK \xa0 "),e.TgZ(51,"span",56),e._uU(52),e.qZA()(),e.TgZ(53,"span",55),e._uU(54,"BAT \xa0 "),e.TgZ(55,"span",56),e._uU(56),e.qZA()(),e.TgZ(57,"span",55),e._uU(58,"AR \xa0 "),e.TgZ(59,"span",56),e._uU(60),e.qZA()(),e.TgZ(61,"span",55),e._uU(62,"BOWL \xa0 "),e.TgZ(63,"span",56),e._uU(64),e.qZA()()()()(),e.BQk()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&1==n.contestData.multi&&!n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&0==n.contestData.multi&&n.anyTeamJoinedThisContest(n.contestData)),e.xp6(1),e.Q6J("ngIf",n.contestData&&0==n.contestData.multi&&!n.anyTeamJoinedThisContest(n.contestData)),e.xp6(4),e.hij("Team ",t,""),e.xp6(7),e.MGl("src","https://thefantasysportsapi.com/media/teams/",n.getCaptainDetails(t)[0].squads[0].team.team_sn,".svg",e.LSH),e.xp6(5),e.Oqu(n.getCaptainDetails(t)[0].squads[0].player_api||""),e.xp6(1),e.hij(" ",n.getCaptainDetails(t)[0].squads[0].team.team_sn,""),e.xp6(5),e.hij(" ",n.getTeam1Name(t).length||""," "),e.xp6(2),e.hij(" ",n.getTeam1Name(t)[0].squads[0].team.team_sn||""," "),e.xp6(6),e.hij(" ",n.getTeam2Name(t).length||""," "),e.xp6(2),e.hij(" ",n.getTeam2Name(t)[0].squads[0].team.team_sn||""," "),e.xp6(4),e.MGl("src","https://thefantasysportsapi.com/media/teams/",n.getViceCaptainDetails(t)[0].squads[0].team.team_sn,".svg",e.LSH),e.xp6(5),e.Oqu(n.getViceCaptainDetails(t)[0].squads[0].player_api||""),e.xp6(1),e.hij(" ",n.getViceCaptainDetails(t)[0].squads[0].team.team_sn,""),e.xp6(6),e.Oqu(n.getWkCount(t)||""),e.xp6(4),e.Oqu(n.getBatCount(t)||""),e.xp6(4),e.hij(" ",n.getArCount(t)||"",""),e.xp6(4),e.Oqu(n.getBowlCount(t)||"")}}function X(i,r){if(1&i&&(e.TgZ(0,"div",33)(1,"div",34),e.YNc(2,H,2,0,"ng-container",1),e.YNc(3,W,65,19,"ng-container",1),e.qZA()()),2&i){const t=r.$implicit,n=e.oxw(3);e.xp6(2),e.Q6J("ngIf",0===n.myteamsGroup[t].length),e.xp6(1),e.Q6J("ngIf",n.myteamsGroup[t].length)}}function ee(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",64),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.createTeams())}),e.qZA()}}function te(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",65),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.joinChallenge())}),e.qZA()}}function ne(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",66),e.NdJ("click",function(a){e.CHM(t);const o=e.oxw(3);return e.KtG(o.selectTeam(a))}),e.qZA()}}function ie(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"section",20)(2,"div",21)(3,"div",22)(4,"h3",23),e._uU(5,"Select Teams"),e.qZA()(),e.YNc(6,Q,4,4,"div",24),e.qZA(),e.YNc(7,X,4,2,"div",25),e.TgZ(8,"div",26),e.YNc(9,ee,1,0,"button",27),e.YNc(10,te,1,0,"button",28),e.YNc(11,ne,1,0,"button",29),e.qZA()(),e.BQk()),2&i){const t=e.oxw(2);e.xp6(6),e.Q6J("ngIf",t.contestData&&1==t.contestData.multi),e.xp6(1),e.Q6J("ngForOf",t.objectKeys(t.myteamsGroup)),e.xp6(2),e.Q6J("ngIf",!t.sixteamsCreated),e.xp6(1),e.Q6J("ngIf",!t.privateChallenge),e.xp6(1),e.Q6J("ngIf",t.privateChallenge)}}function ae(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",17)(2,"span",18),e._uU(3),e.qZA(),e._UZ(4,"app-auto-timer",19),e.qZA(),e.YNc(5,ie,12,5,"ng-container",1),e.BQk()),2&i){const t=e.oxw();e.xp6(3),e.hij(" ",(null==t.fixtureData?null:t.fixtureData.fixture_sh)||"",""),e.xp6(1),e.Q6J("countDown",null==t.fixtureData?null:t.fixtureData.date_time),e.xp6(1),e.Q6J("ngIf",t.enableContainer)}}function oe(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"challenge-confirmation-cricket",67),e.NdJ("joinChallengeEmit",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.joinChallengeEmit(a))})("joinChallengeRefresh",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.joinChallengeRefresh(a))}),e.qZA(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("userMoneyData",t.userMoneyData)("entryFee",t.entryFee)("enableModalConfirmFlag",t.enableModalConfirmFlag)("enableModalJoinConfirmFlag",t.enableModalJoinConfirmFlag)}}function se(i,r){}function re(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",68)(2,"cricket-preview",69),e.NdJ("EditTeamPreview",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.editThisTeam(a))}),e.qZA()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("fixtureStatus",t.fixtureStatus)("previewTeamName",t.previewTeamName)("previewTeamNumber",t.previewTeamNumber)("captain",t.captainId)("viceCaptain",t.viceCaptainId)("playerRight",t.previewTeamList)("team1ShortName",t.getTeam1Name(t.previewTeamNumber)[0].squads[0].team.team_sn||"")("team2ShortName",t.getTeam2Name(t.previewTeamNumber)[0].squads[0].team.team_sn||"")("team1Count",t.getTeam1Name(t.previewTeamNumber).length||"")("team2Count",t.getTeam2Name(t.previewTeamNumber).length||"")("creditAmount",t.getTotalCredits(t.previewTeamList))}}const le=function(){return{width:"35vw"}},ce=function(){return{"960px":"75vw","640px":"100vw"}},ge=function(){return{width:"50vw",height:"100vh"}},de=function(){return{"960px":"25vw","640px":"50vw"}},_e=function(){return{background:"rgba(0,0,0,1)","overflow-y":"hidden","overflow-x":"hidden"}};let v=(()=>{class i{constructor(t,n,a,o,s,c,g,_,x){this.messageService=t,this.router=n,this.cricketService=a,this.userService=o,this.sharedDataService=s,this.location=c,this.footerService=g,this.route=_,this.myTeamsCricket=x,this.options={path:"/assets/animation.json"},this._options={path:"/assets/animation2.json"},this.__options={path:"/assets/animation3.json"},this.enableModalConfirmFlag=!1,this.dataList=[],this.sixteamsCreated=!1,this.showPreview=!1,this.previewTeamList=[],this.enableModalJoinConfirmFlag=!1,this.isClicked=[],this.myteams=[],this.objectKeys=Object.keys,this.teamsJoinedForThiscontest=[],this.previewTeamName="",this.previewTeamNumber="",this.privateChallenge=!1,this.chkAll=!1,this.chkVal=!1,this.teamVals=[],this.arrData=[],this.checkedVal=!1,this.joinedReward=!1,this.joinedCoupon={}}animationCreated(t){this.anim=t}animation_Created(t){this._anim=t}animation__Created(t){this.__anim=t}ngOnInit(){this.footerService.footerHide=!1,this.userService.getUserAccount().subscribe(t=>{this.cricketService.fixtureState.subscribe(n=>{n&&(this.savedContest=this.cricketService.savedContestData||JSON.parse(sessionStorage.getItem("savedContest")),this.savedContest?(this.contestData=null,this.fixtureData=this.savedContest.fixtureData,this.userMoneyData=t.data.user.money,this.contestData=this.savedContest,this.cricketService.savedContestData=this.contestData,this.enableContent=!0,this.renderUserCreatedTeams(),this.privateChallenge=this.cricketService._privateChallenge||JSON.parse(sessionStorage.getItem("_privateChallenge"))):this.enableContent=!1)})}),sessionStorage.setItem("joinURl",`${this.router.url}`)}fixture_Data(t){return t.map(a=>{const o=new Date,s=D(new Date(a.date_time)).tz(this.userService.userTimeZone);a.date_time=s._d;const c=C(a.date_time,"YYYY-MM-DD HH:mm:ss").diff(C(o,"DD/MM/YYYY HH:mm:ss")),g=C.duration(c);return a.enableTimer=g.get("ms")>0,a})[0]}renderUserCreatedTeams(){this.cricketService.getJoinedContestCricketByFixture(this.fixtureData.id).subscribe(n=>{var a,o,s;if(n)if(n.success){let c=this.contestData.contest_id?this.contestData.contest_id:this.contestData.id;this.teamsJoinedForThiscontest=n.data.filter(g=>g.contest_id==c).flatMap(g=>g.team_id),this.chkAll=(null===(a=this.myteams)||void 0===a?void 0:a.length)==(null===(o=this.teamsJoinedForThiscontest)||void 0===o?void 0:o.length)&&0!==(null===(s=this.teamsJoinedForThiscontest)||void 0===s?void 0:s.length)}else this.messageService.add({severity:"warn",summary:"",detail:n.message})});let t=this.cricketService.createdUserTeams;p.size(t)?(this.enableContainer=!0,6===p.size(t)&&(this.sixteamsCreated=!0),this.renderMyTeams(t)):this.enableContainer=!1}renderMyTeams(t){this.myteamsGroup={},Object.assign(this.myteamsGroup,t),this.myteams=[];let n=p.flatten(Object.values(t));this.dataList=n;for(let o=1;o<=6;o++){let s=n.filter(c=>c.team==o);s.length&&this.myteams.push(s)}}getCaptainDetails(t){return this.dataList.filter(n=>n.team==t&&"captain"===n.title)}getViceCaptainDetails(t){return this.dataList.filter(n=>n.team==t&&"vcaptain"===n.title)}getWkCount(t){return this.dataList.filter(n=>n.team==t&&"Wicket Keeper"===n.squads[0].player_type).length}getBatCount(t){return this.dataList.filter(n=>n.team==t&&"Batsman"===n.squads[0].player_type).length}getArCount(t){return this.dataList.filter(n=>n.team==t&&"All Rounder"===n.squads[0].player_type).length}getBowlCount(t){return this.dataList.filter(n=>n.team==t&&"Bowler"===n.squads[0].player_type).length}getTeam1Name(t){const n=this.dataList.filter(s=>s.team==t);let a=p.sortBy(n,s=>s.squads[0].teamId),o=Array.from(new Set(a.flatMap(s=>s.squads[0].team_id)));return this.dataList.filter(s=>s.team==t&&s.squads[0].team_id==o[0])}getTeam2Name(t){const n=this.dataList.filter(s=>s.team==t);let a=p.sortBy(n,s=>s.squads[0].teamId),o=Array.from(new Set(a.flatMap(s=>s.squads[0].team_id)));return this.dataList.filter(s=>s.team==t&&s.squads[0].team_id==o[1])}createTeams(){sessionStorage.setItem("joinURl",`${this.router.url}`),this.router.navigate([`/cricket/team/create/${this.fixtureData.id}`]),this.cricketService.teamCreateStatus="CREATE"}showPreviewByTeam(t){var n,a;this.showPreview=!0,this.previewTeamName=this.userService.user.team_name,this.previewTeamNumber=t,this.fixtureStatus=null===(n=this.fixtureData)||void 0===n?void 0:n.fixture_status,this.fixtureType=null===(a=this.fixtureData)||void 0===a?void 0:a.type,this.previewTeamList=this.dataList.filter(o=>o.team==t).map(o=>{let s=o,c=o.squads[0].player_value.split(",");return o.credit=o.f_points?o.f_points:"TEST"==this.fixtureType?+c[0]:"ODI"==this.fixtureType?+c[1]:+c[2],s.player_type=o.squads[0].player_type,s.player_name=o.squads[0].player_name,s.team_name=o.squads[0].team.team_sn,s}),this.isPlayerLists=!0,this.captainId=this.getCaptainDetails(t)[0].id,this.viceCaptainId=this.getViceCaptainDetails(t)[0].id}getTotalCredits(t){return t.reduce((n,a)=>n+a.credit,0)}closePreviewDialog(){this.showPreview=!1,this.previewTeamList=[]}joinChallengeRefresh(t){t&&this.ngOnInit()}joinChallenge(){if(this.enableModalConfirmFlag=!1,this.isClicked.filter(t=>t).length){const t=this.isClicked.map((n,a)=>{if(n&&null!==n)return a}).filter(function(n){return n}).length;this.entryFee="",this.entryFee=this.contestData.entry_fee?t*parseFloat(this.contestData.entry_fee):"",this.userMoneyData.total_balance>=parseFloat(this.entryFee)?this.enableModalConfirmFlag=!0:this.messageService.add({severity:"warn",summary:"",detail:"Insufficient Coin Balance to Join league."})}else this.enableModalConfirmFlag=!1,this.messageService.add({severity:"warn",summary:"",detail:"You need to select atleast one team to proceed."})}joinChallengeEmit(t){if(t){const a=this.isClicked.map((o,s)=>{if(o&&null!==o)return s}).filter(function(o){return o}).toString();if(this.inviteID=this.cricketService.getinvite(),this.inviteID)return void this.cricketService.joinbyInviteCode({team_id:a,fixture_id:this.contestData.fixture_id,invite_code:this.inviteID}).subscribe(s=>{s.success?(this.messageService.add({severity:"success",summary:"",detail:"Contest Joined Successfully."}),this.enableModalJoinConfirmFlag=!0,this.joined_Coupon(),this.resetall()):(this.messageService.add({severity:"warn",summary:"",detail:s.message}),this.enableModalJoinConfirmFlag=!1,this.resetall())});if(this.contestData.id){const o={team_id:a,fixture_id:Number(this.contestData.fixture_id),contest_id:this.contestData.contest_id||this.contestData.id,rank:0,score:0,winning:0};this.cricketService.joinContestCricket(o).subscribe(s=>{s&&(s.success?(this.messageService.add({severity:"success",summary:"",detail:"Contest Joined Successfully."}),this.enableModalJoinConfirmFlag=!0,s.data[0].inviteCoupon&&this.joined_Coupon(),this.resetall()):(this.enableModalJoinConfirmFlag=!1,this.messageService.add({severity:"warn",summary:"",detail:s.message}),this.resetall()))},s=>{})}else this.cricketService.createPrivateContest({team_id:a,fixture_id:this.contestData.fixture_id,contest_name:this.contestData.contest_name,size:this.contestData.size,total_prize:this.contestData.total_prize,prize_splitup:this.contestData.prize_splitup,entry_fee:this.contestData.entry_fee,multi:this.contestData.multi}).subscribe(s=>{s&&(s.success?(this.messageService.add({severity:"success",summary:"",detail:s.message}),this.enableModalJoinConfirmFlag=!0):(this.enableModalJoinConfirmFlag=!1,this.messageService.add({severity:"warning",summary:"",detail:s.message})))})}}isThisJoinedTeam(t){return!!t&&this.teamsJoinedForThiscontest.includes(parseFloat(t))}anyTeamJoinedThisContest(t){return!!t&&this.teamsJoinedForThiscontest.length}resetall(){this.isClicked=[],this.entryFee="",this.userService.getUserAccount().subscribe(t=>{t&&(this.userService.userAccountData=t.data,this.userMoneyData=this.userService.userAccountData.user.money)})}selectTeam(t){var n;const o=this.isClicked.map((s,c)=>{if(s&&null!==s)return c}).filter(function(s){return s}).toString();this.contestData.team_id=o,this.location.back(),6==(null===(n=this.teamsJoinedForThiscontest)||void 0===n?void 0:n.length)&&this.isClicked.forEach(s=>{this.isClicked[s]=this.chkAll})}seletAll(t){var n,a;if((null===(n=this.myteams)||void 0===n?void 0:n.length)-(null===(a=this.teamsJoinedForThiscontest)||void 0===a?void 0:a.length))if(this.chkAll=!this.chkAll,this.chkVal=!!this.chkAll,this.chkVal){Object.keys(this.isClicked).length=0;for(let s of this.myteams)this.isClicked[s[0].team]=!0}else this.isClicked=[]}select(t,n){var a,o,s;let c=(null===(a=this.myteams)||void 0===a?void 0:a.length)-(null===(o=this.teamsJoinedForThiscontest)||void 0===o?void 0:o.length);if(this.isClicked[n])this.isClicked[n]=!1,Object.values(this.isClicked).some(_=>0==_)&&(this.chkAll=!1);else{this.isClicked[n]=!0;let g=Object.values(this.isClicked);c==g.length&&g.every(_=>1==_)&&(this.chkAll=!0)}0===(null===(s=Object.keys(this.isClicked))||void 0===s?void 0:s.length)&&(this.chkAll=!1)}editThisTeam(t){let n=this.route.snapshot.paramMap.get("id");this.myTeamsCricket.getUserTeamsByFixture(n,"cricket").pipe().subscribe(a=>{let o=p.flatten(Object.values(a.data));this.dataList=o;let s={};s.team=this.dataList.filter(c=>c.team==t),s.captain=this.getCaptainDetails(t)[0].p_id,s.vcaptain=this.getViceCaptainDetails(t)[0].p_id,this.cricketService.clonedTeamData=s,sessionStorage.setItem("joinURl",`${this.router.url}`),this.cricketService.teamCreateStatus="EDIT",sessionStorage.setItem("joinURl",`${this.router.url}`),this.router.navigate([`/cricket/team/create/${n}`])})}joined_Coupon(){let t=this.route.snapshot.paramMap.get("id");this.cricketService.joinedReward(t).subscribe(n=>{n.success&&(this.joinedReward=!0,this.joinedCoupon=n.data[0],setTimeout(()=>{this.anim.pause(),this._anim.pause()},1500),setTimeout(()=>{this.__anim.pause()},2e3))})}redirectTo(){sessionStorage.setItem("couponIndex","2"),this.router.navigateByUrl("/home/rewards/coupon-won")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.ez),e.Y36(m.F0),e.Y36(k.D),e.Y36(j.e),e.Y36(A.g),e.Y36(d.Ye),e.Y36(S.L),e.Y36(m.gz),e.Y36(F.k))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-join-challenge-cricket"]],decls:33,vars:34,consts:[[1,"w-80","py-5"],[4,"ngIf"],["header","Preview","styleClass","captainDialog",3,"modal","dismissableMask","visible","breakpoints","draggable","onHide","visibleChange"],["pTemplate","header"],[3,"modal","visible","breakpoints","responsive","draggable","resizable","closable","showHeader","dismissableMask","contentStyle","visibleChange"],[1,"text-center","text-white","pb-2"],[1,"box"],[3,"options","animationCreated"],[1,"font-bold",2,"color","#e19d1d"],[1,"",2,"height","72vh","position","relative"],[1,"d-flex","justify-content-center","align-item-center","asset"],[1,"d-block"],["height","80%","width","35%",1,"d-flex","justify-content-center","align-item-center",2,"margin","0 auto",3,"src"],[1,"text-center","text-white"],[2,"position","absolute","bottom","0","top","50%","left","50%","transform","translate(-50%, 0%)"],["src","/assets/images/couponBox.png","alt",""],[1,"underline","cursor-pointer","font-bold",3,"click"],[1,"m-header"],[1,"f-poggers"],[1,"f-poggers","text-prime","font-weight-bold",3,"countDown"],[1,"selectTeamsSection"],[1,"row"],[1,"col"],[1,"text-white","font-bold","ml-3"],["class","col d-flex justify-content-end",4,"ngIf"],["class","carder",4,"ngFor","ngForOf"],[1,"d-flex","w-100","justify-content-center","align-items-center","gap-10"],["pButton","","type","button","label","Create Team",3,"click",4,"ngIf"],["class","joinTeam","pButton","","type","button","label","Join Challenge",3,"click",4,"ngIf"],["class","selectTeam","pButton","","type","button","label","Select Team",3,"click",4,"ngIf"],[1,"col","d-flex","justify-content-end"],[1,"text-white","font-bold","px-3","mr-5"],[1,"selectSquare1",2,"margin-right","4%",3,"ngClass","click"],[1,"carder"],[1,"teamDetails","position-relative"],[1,"contestDetails-item","cursor-pointer",3,"click"],[1,"titler"],[1,"s-title"],[1,"s-cions"],[1,"contentler"],[1,"d-flex","justify-content-around","align-items-center",2,"gap","15px"],[1,"captain-section"],[1,"d-flex","flex-column","justify-content-center","align-items-center","position-relative"],[1,"position-relative"],["width","45",3,"src"],[1,"captainIde"],[1,"player_credit"],[1,"player_name","font-bold"],[1,"teams-section"],[1,"d-flex","justify-content-center","align-items-center",2,"gap","25px"],[1,"d-flex","flex-column","justify-content-center","align-items-center",2,"gap","8px"],[1,"roundel"],[1,"vcaptain-section"],[1,"footler"],[1,"d-flex","justify-content-between","align-items-center"],[1,"bottomplayers"],[1,"font-bold"],["class","selectSquare selected",4,"ngIf"],["class","selectSquare",3,"ngClass","click",4,"ngIf"],[1,"selectSquare","selected"],[1,"selectSquare",3,"ngClass","click"],["class","selectCircle selected",4,"ngIf"],[1,"selectCircle","selected"],[1,"selectCircle",3,"ngClass","click"],["pButton","","type","button","label","Create Team",3,"click"],["pButton","","type","button","label","Join Challenge",1,"joinTeam",3,"click"],["pButton","","type","button","label","Select Team",1,"selectTeam",3,"click"],[3,"userMoneyData","entryFee","enableModalConfirmFlag","enableModalJoinConfirmFlag","joinChallengeEmit","joinChallengeRefresh"],[1,"wrapper"],[3,"fixtureStatus","previewTeamName","previewTeamNumber","captain","viceCaptain","playerRight","team1ShortName","team2ShortName","team1Count","team2Count","creditAmount","EditTeamPreview"]],template:function(t,n){1&t&&(e._UZ(0,"p-toast"),e.TgZ(1,"section",0),e.YNc(2,ae,6,3,"ng-container",1),e.qZA(),e.YNc(3,oe,2,4,"ng-container",1),e.TgZ(4,"p-dialog",2),e.NdJ("onHide",function(){return n.closePreviewDialog()})("visibleChange",function(o){return n.showPreview=o}),e.YNc(5,se,0,0,"ng-template",3),e.YNc(6,re,3,11,"ng-container",1),e.qZA(),e.TgZ(7,"p-dialog",4),e.NdJ("visibleChange",function(o){return n.joinedReward=o}),e.TgZ(8,"div")(9,"section",5)(10,"div",6)(11,"ng-lottie",7),e.NdJ("animationCreated",function(o){return n.animationCreated(o)}),e.qZA()(),e.TgZ(12,"div",6)(13,"ng-lottie",7),e.NdJ("animationCreated",function(o){return n.animation_Created(o)}),e.qZA()(),e.TgZ(14,"div",6)(15,"ng-lottie",7),e.NdJ("animationCreated",function(o){return n.animation__Created(o)}),e.qZA()(),e.TgZ(16,"h2"),e._uU(17,"Hurray!"),e.qZA(),e.TgZ(18,"h4"),e._uU(19,"You Have Won a Coupon For"),e.qZA(),e.TgZ(20,"h1",8),e._uU(21,"JOINING CHALLENGE"),e.qZA()(),e.TgZ(22,"section",9)(23,"div",10)(24,"div",11),e._UZ(25,"img",12),e.TgZ(26,"h3",13),e._uU(27),e.qZA()()(),e.TgZ(28,"div",14),e._UZ(29,"img",15),e.qZA()(),e.TgZ(30,"section",5)(31,"p",16),e.NdJ("click",function(){return n.redirectTo()}),e._uU(32," View My Rewards Wallets > "),e.qZA()()()()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.enableContent),e.xp6(1),e.Q6J("ngIf",n.enableModalConfirmFlag),e.xp6(1),e.Akn(e.DdM(29,le)),e.Q6J("modal",!0)("dismissableMask",!0)("visible",n.showPreview)("breakpoints",e.DdM(30,ce))("draggable",!1),e.xp6(2),e.Q6J("ngIf",n.showPreview),e.xp6(1),e.Akn(e.DdM(31,ge)),e.Q6J("modal",!0)("visible",n.joinedReward)("breakpoints",e.DdM(32,de))("responsive",!0)("draggable",!1)("resizable",!1)("closable",!0)("showHeader",!0)("dismissableMask",!0)("contentStyle",e.DdM(33,_e)),e.xp6(1),e.Udp("background","rgba(0,0,0,1)"),e.xp6(3),e.Q6J("options",n.options),e.xp6(2),e.Q6J("options",n._options),e.xp6(2),e.Q6J("options",n.__options),e.xp6(10),e.s9C("src",null==n.joinedCoupon||null==n.joinedCoupon.joined_coupon?null:n.joinedCoupon.joined_coupon.assets_url,e.LSH),e.xp6(2),e.hij(" ",null==n.joinedCoupon||null==n.joinedCoupon.joined_coupon?null:n.joinedCoupon.joined_coupon.name," "))},dependencies:[d.mk,d.sg,d.O5,N.l,u.V,T.jx,h.Hq,q.O,B,w.FN,J.e$],styles:[".m-header[_ngcontent-%COMP%]{background:#c1395b;display:flex;justify-content:center;align-items:center;color:#fff;font-size:.8em;gap:20px;width:40%;margin:10px auto;padding:5px 10px;border-radius:15px}.w-80[_ngcontent-%COMP%]{width:80%;margin:0 auto}.selectTeamsSection[_ngcontent-%COMP%]{padding:10px 0}.carder[_ngcontent-%COMP%]{margin:10px 0}.wrapper[_ngcontent-%COMP%]{min-height:200px;background:url(/assets/images/cricketGround.png) repeat padding-box;background-size:100% 100%;background-repeat:no-repeat}.teamDetails[_ngcontent-%COMP%]{background:url(/assets/images/ground.png) repeat padding-box;border-radius:5px;color:#fff}.titler[_ngcontent-%COMP%]{padding:10px;background:rgb(0 0 0 / 58%);border-top-right-radius:5px;border-top-left-radius:5px}.footler[_ngcontent-%COMP%]{padding:10px;background:#fff;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.contentler[_ngcontent-%COMP%]{padding:10px;background:transparent}.s-cions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:.8em;margin:0 10px}.s-cions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.titler[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.footler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#333}span.captainIde[_ngcontent-%COMP%]{position:absolute;left:-20px;top:0;color:#000;border-radius:50%;box-sizing:content-box;width:20px;height:20px;line-height:0;display:flex;align-items:center;justify-content:center;font-size:.6em;cursor:pointer;background:white}span.player_name[_ngcontent-%COMP%]{font-size:.7rem;line-height:15px}.player_credit[_ngcontent-%COMP%]{background:white;color:#000;width:100%;border-radius:3px;font-size:.6rem;text-align:center;letter-spacing:3px;padding:5px;display:inline-grid}span.roundel[_ngcontent-%COMP%]{background:#fff;width:20px;height:20px;border-radius:50%;text-align:center;color:#212529;font-size:.7rem;font-weight:700;line-height:21px}.gap-10[_ngcontent-%COMP%]{gap:10px}.selectCircle[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;right:8px;top:10px;cursor:pointer;border:3px solid silver}.selectCircle.selected[_ngcontent-%COMP%]{background:#feb724!important}.selectSquare[_ngcontent-%COMP%]{width:20px;height:20px;background:#fff;position:absolute;right:8px;top:10px;cursor:pointer;border-radius:50%;border:3px solid silver}.selectSquare.selected[_ngcontent-%COMP%]{background:#feb724!important}.selectSquare1[_ngcontent-%COMP%]{width:20px;height:20px;background:#fff;position:absolute;right:8px;top:10px;cursor:pointer}.selectSquare1.selected[_ngcontent-%COMP%]{background:#feb724!important}.primeColor[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:.7em;cursor:pointer;background:transparent linear-gradient(91deg,#e8b652 0%,#bf335b 100%) 0% 0% no-repeat padding-box;color:#fff;border-color:transparent;padding:0 10px;border-radius:20px;line-height:10px}[_nghost-%COMP%]  .captainDialog .p-dialog-header{padding:.3rem 1rem!important;font-size:.9em}[_nghost-%COMP%]  .p-dialog-header{display:flex;justify-content:end}[_nghost-%COMP%]  .p-dialog-header-icon{width:1rem!important;height:1rem!important;color:#fff!important}[_nghost-%COMP%]  .p-dialog .p-dialog-header .p-dialog-header-close-icon{color:#fff!important}.selectTeam[_ngcontent-%COMP%], .selectTeam[_ngcontent-%COMP%]:hover, .joinTeam[_ngcontent-%COMP%], .joinTeam[_ngcontent-%COMP%]:hover{background:transparent linear-gradient(122deg,#63ddbd 0%,#05916c 100%) 0% 0% no-repeat padding-box}.bottomplayers[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline}[_nghost-%COMP%]     .p-dialog{max-height:100%!important}.asset[_ngcontent-%COMP%]{animation-name:coupon;animation-duration:3s;transform:translateY(40%)}@keyframes coupon{0%{transform:translateY(80%);opacity:0}to{transform:translateY(40%);opacity:1}}.box[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background:rgba(0,0,0,1);padding:0!important}"]}),i})();const me=[{path:"",component:v,children:[{path:":id",component:v,pathMatch:"full"},{path:"**",component:v}]}];let pe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.Bz.forChild(me),m.Bz]}),i})();var ue=l(6988),he=l(4996),M=l(5787);let Ce=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,u.S,h.hJ,M.T]}),i})();var fe=l(4487),ve=l.n(fe);function Z(){return ve()}let xe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,ue.H,u.S,h.hJ,M.T,he.z,pe,Ce,w.EV,J.CT.forRoot({player:Z})]}),i})()}}]);