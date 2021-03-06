var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var a=arguments[e];
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);
}
return t;
};
define("pages_new/common_share/video/player/player_store.js",["common/comm_report.js"],function(t){
"use strict";
var e=t("common/comm_report.js");
return{
name:"mp-video-player",
namespaced:!0,
state:function(){
return{
errType:0,
errCode:0,
errMsg:"",
status:"init",
subStatus:"init",
fullscreenStatus:0,
seekingStatus:0,
refreshBtnStatus:0,
topStickyInfoStatus:0,
loadingStatus:0,
controlBarStatus:0,
coverStatus:1,
midPlayStatus:0,
resolutionEntryStatus:0,
subSettingStatus:0,
accessPlayBtnStatus:0,
touchOprStatus:0,
likeCmtStatus:0,
orientationStatus:0,
banOprStatus:0,
progressBarMark:[],
commonReportData:{
Vid:"",
BizUin:0,
MsgId:0,
ItemIdx:0,
PlayerType:0,
Scene:0,
SubScene:0,
ItemShowType:0,
EnterId:0,
SessionId:"",
ChannelId:"",
ReloadId:"",
ReloadSeq:0,
Duration:0,
OrStatus:0,
PageUrl:"",
VideoUrl:"",
IsFans:0
},
enter23439ReportExData:{
IsContinue:0,
IsWatchMore:0,
UserDanMuFlag:0,
isDanShow:0
},
play23440ReportExData:{
DeviceModel:"",
DeviceBrand:"",
OsName:"",
OsVersion:"",
NetType:0,
ScreenHeight:0,
ScreenWidth:0,
MiaoKai:0,
PlayType:0
},
perf23442ReportExData:{
DeviceModel:"",
DeviceBrand:"",
OsName:"",
OsVersion:"",
NetType:0,
ScreenHeight:0,
ScreenWidth:0,
MiaoKai:0,
EventType:0,
EventTime:0,
PreloadType:0,
Definition:0,
VideoWidth:0,
VideoHeight:0,
BufferTime:0,
BufferType:0,
DefinitionBefore:0,
VideoWidthBefore:0,
VideoHeightBefore:0,
PlayErrType:0,
Traffic:0
},
leave23443ReportExData:{
EventType:0,
EventTime:0,
PlayTime:0,
StayTime:0,
PagePlayTime:0,
PageStayTime:0,
ImmersivePlayTime:0,
ImmersiveStayTime:0
},
op23444ReportExData:{
EventType:0,
EventTime:0,
FullscreenType:0,
PauseTime:0,
BarBefore:"",
BarAfter:"",
SpeedBefore:"",
SpeedAfter:"",
DefinitionBefore:"",
DefinitionAfter:""
},
reload23445ReportExData:{
EventType:0,
FullscreenType:0,
WatchMoreSet:0,
ContinueBreakReason:0,
RecVid:"",
RecBizUin:0,
RecMsgId:0,
RecItemIdx:0,
RecSeq:0,
RecType:0,
SortId:0,
RecInfo:""
},
ad23446ReportExData:{
EventType:0,
EventTime:0,
Location:0
}
};
},
mutations:{
setError:function(t,e){
t.errType=e.type,t.errCode=e.code,t.errMsg=e.msg,t.refreshBtnStatus=e.refresh;
},
setTopStickyInfoStatus:function(t,e){
t.topStickyInfoStatus=e.status;
},
setFullscreenStatus:function(t,e){
t.fullscreenStatus=e.status,window.__video_fullscreen__=!!e.status;
},
setSeekingStatus:function(t,e){
t.seekingStatus=e.status;
},
setStatus:function(t,e){
t.status=e.status,t.subStatus=e.subStatus;
},
setLoadingStatus:function(t,e){
t.loadingStatus=e.status;
},
setControlBarStatus:function(t,e){
t.controlBarStatus=e.status;
},
setCoverStatus:function(t,e){
t.coverStatus=e.status;
},
setMidPlayStatus:function(t,e){
t.midPlayStatus=e.status;
},
setResolutionEntryStatus:function(t,e){
t.resolutionEntryStatus=e.status;
},
setSubSettingStatus:function(t,e){
t.subSettingStatus=e.status;
},
setAccessPlayBtnStatus:function(t,e){
t.accessPlayBtnStatus=e.status;
},
setTouchOprStatus:function(t,e){
t.touchOprStatus=e.status;
},
setLikeCmtStatus:function(t,e){
t.likeCmtStatus=e.status;
},
setOrientationStatus:function(t,e){
t.orientationStatus=e.status;
},
setBanOprStatus:function(t,e){
t.banOprStatus=e.status;
},
addProgressBarMark:function(t,e){
t.progressBarMark=[].concat(t.progressBarMark,e.value);
},
removeProgressBarMark:function(t,e){
for(var a=t.progressBarMark.length-1;a>-1;a--){
var r=t.progressBarMark[a];
r.id===e.id&&t.progressBarMark.splice(a,1);
}
},
clearProgressBarMark:function(t){
t.progressBarMark=[];
},
setCommonReportData:function(t,e){
t.commonReportData=_extends({},t.commonReportData,e);
},
setEnter23439ReportExData:function(t,e){
t.enter23439ReportExData=_extends({},t.enter23439ReportExData,e);
},
setPlay23440ReportExData:function(t,e){
t.play23440ReportExData=_extends({},t.play23440ReportExData,e);
},
setPerf23442ReportExData:function(t,e){
t.perf23442ReportExData=_extends({},t.perf23442ReportExData,e);
},
setLeave23443ReportExData:function(t,e){
t.leave23443ReportExData=_extends({},t.leave23443ReportExData,e);
},
setOp23444ReportExData:function(t,e){
t.op23444ReportExData=_extends({},t.op23444ReportExData,e);
},
setReload23445ReportExData:function(t,e){
t.reload23445ReportExData=_extends({},t.reload23445ReportExData,e);
},
setAd23446ReportExData:function(t,e){
t.ad23446ReportExData=_extends({},t.ad23446ReportExData,e);
}
},
actions:{
reportEnter23439:function(t,a){
var r=t.state;
e.report(23439,_extends({},r.commonReportData,r.enter23439ReportExData,a));
},
reportPlay23440:function(t,a){
var r=t.state;
e.report(23440,_extends({},r.commonReportData,r.play23440ReportExData,a));
},
reportPerf23442:function(t,a){
var r=t.state;
e.report(23442,_extends({},r.commonReportData,r.perf23442ReportExData,a));
},
reportLeave23443:function(t,a){
var r=t.state;
e.report(23443,_extends({},r.commonReportData,r.leave23443ReportExData,a));
},
reportOp23444:function(t,a){
var r=t.state;
e.report(23444,_extends({},r.commonReportData,r.op23444ReportExData,a));
},
reportReload23445:function(t,a){
var r=t.state;
e.report(23445,_extends({},r.commonReportData,r.reload23445ReportExData,a));
},
reportAd23446:function(t,a){
var r=t.state;
e.report(23446,_extends({},r.commonReportData,r.ad23446ReportExData,a));
}
}
};
});function _toConsumableArray(e){
if(Array.isArray(e)){
for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];
return i;
}
return Array.from(e);
}
function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
function _defineProperty(e,t,i){
return t in e?Object.defineProperty(e,t,{
value:i,
enumerable:!0,
configurable:!0,
writable:!0
}):e[t]=i,e;
}
var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var i=arguments[t];
for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);
}
return e;
};
define("pages_new/common_share/video/player/controller.js",["biz_wap/zepto/zepto.js","biz_wap/zepto/event.js","biz_wap/zepto/touch.js","biz_wap/ui/weui.js","biz_common/utils/string/html.js","pages_new/3rd/vue.js","pages_new/3rd/vuex.js","a/a_utils.js","pages/utils.js","pages_new/common_share/video/player/controller.html.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","biz_common/utils/url/parse.js","biz_wap/utils/ajax.js","pages/loadscript.js","appmsg/kan_report.js","common/comm_report.js","pages_new/common_share/video/player/plugins/base.js","pages_new/common_share/video/player/plugins/monitor/monitor.js","biz_wap/utils/localstorage.js","biz_common/dom/event.js","pages/report.js","pages_new/common_share/video/player/player.js","new_video/ctl.js","pages/create_txv.js","biz_wap/utils/jsmonitor_report.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/setMpInfo.js","biz_wap/jsapi/log.js","appmsg/topbar.js","common/utils.js","common/safeAreaInsets.js","pages_new/modules/utils/event_bus.js","pages_new/common_share/video/utils/immersive_data.js","pages_new/common_share/video/report.js"],function(e){
"use strict";
function t(e){
function t(r){
var o=Math.floor(Math.max(r.width,r.height));
if(o>3841)switch(1*r.format_id){
case 10002:
r=e.url_info[i["480p"].index],W.setSum(27302,6,1),t(r);
break;

case 10003:
r=e.url_info[i["270p"].index],W.setSum(27302,7,1);
}
return r;
}
for(var i={},r=0;r<e.url_info.length;r++){
var o=e.url_info[r];
switch(1*o.format_id){
case 20003:
I.isWechat&&I.isAndroid&&I.gtVersion("7.0.16",1)&&(i["1080p"]={
index:r
});
break;

case 10002:
i["720p"]={
index:r
};
break;

case 10003:
i["480p"]={
index:r
};
break;

case 10004:
i["270p"]={
index:r
};
}
}
var a=void 0;
if(pt.playerStatus&&pt.playerStatus.formatId&&"3g"!==pt.networkType&&"2g"!==pt.networkType&&1*e.is_mp_video_urgent_state!==1)switch(1*pt.playerStatus.formatId){
case 10002:
i["720p"]&&(a=e.url_info[i["720p"].index]);
break;

case 10003:
i["480p"]&&(a=e.url_info[i["480p"].index]);
break;

case 10004:
i["270p"]&&(a=e.url_info[i["270p"].index]);
}
a||("2g"===pt.networkType||1*e.is_mp_video_urgent_state===1?i["270p"]?a=e.url_info[i["270p"].index]:i["480p"]&&(a=e.url_info[i["480p"].index]):pt.isPc||"wifi"===pt.networkType?i["720p"]?a=e.url_info[i["720p"].index]:i["480p"]&&(a=e.url_info[i["480p"].index]):i["480p"]?a=e.url_info[i["480p"].index]:i["720p"]&&(a=e.url_info[i["720p"].index])),
a||(a=e.url_info[0]),a=t(a);
var n=Math.floor(a.duration_ms/1e3),s=(parseFloat(a.filesize)/1024/1024).toFixed(2);
return{
formatid:a.format_id,
time:n,
title:a.title||"",
width:a.width,
height:a.height,
file_size:a.filesize,
totalUrl:a.url,
rate:Math.round(a.filesize/1024*8/n),
flow:s,
ori_url_info:e.url_info
};
}
function i(e){
function i(){
R({
type:"GET",
dataType:"json",
timeout:3e4,
url:s,
success:function(e){
if(e&&e.base_resp&&0==e.base_resp.ret){
var i="",r=void 0;
if(e.is_mp_video_delete?(i="??????????????????????????????",r=72):e.is_mp_video_forbid?(i="???????????????????????????",
r=73):1*e.is_mp_video_transing===1?(i="???????????????????????????????????????",r=78):e.is_mp_video_checking?(i="?????????",
r=75):e.is_mp_video_check_fail?(i="????????????",r=76):1*e.is_appmsg_unauthorized===1&&(i="?????????????????????????????????????????????",
r=77),i&&"undefined"!=typeof r)return void n({
err_msg:i,
code:r
});
if(e.url_info&&e.url_info.length>0)return void a({
data:t(e)
});
n({
err_msg:pt.defaultErrorWording,
code:71
});
}else n({
err_msg:"???????????????????????????????????????",
code:74
});
},
error:function(e){
var t=void 0;
t=e?e.status>=200&&e.status<400?81:e.status>=400&&e.status<500?82:e.status>=500&&e.status<600?83:0==e.status&&4==e.readyState?84:85:80,
n({
err_msg:pt.defaultErrorWording,
code:t
});
}
});
}
var o=e.retry||1,a="function"==typeof e.onSuccess?e.onSuccess:function(){},n=function(t){
return t&&t.code>=80&&t.code<=85&&o>0?(o--,void i()):void("function"==typeof e.onError&&e.onError(t));
},s=["/mp/videoplayer?action=get_mp_video_play_url","&preview=",e.preview?"1":"0","&__biz=",e.__biz,"&mid=",e.mid,"&idx=",e.idx,"&vid=",e.vid,e.auto?"&isauto=true":""].join("");
r(i);
}
function r(e){
!pt.networkType&&I.isWechat&&(I.isIOS||I.isAndroid)?D.invoke("getNetworkType",{},function(t){
pt.networkType=pt.netTypeMap[t.err_msg]||"fail",("network_type:edge"==t.err_msg||"network_type:wwan"==t.err_msg)&&(t.detailtype||t.subtype)&&(pt.networkType=t.detailtype||t.subtype),
"function"==typeof e&&e();
}):"function"==typeof e&&e();
}
function o(e){
function t(){
P({
url:o,
timeout:3e4,
callbackName:i,
stateErrorCode:417,
callback:function(t){
var i=Date.now()-n;
t=t||{},"undefined"==typeof t.em&&(t.em=0);
var r=t.em,o=void 0;
if(!M.getQuery("channel_session_id")||61!==t.em&&62!==t.em||R({
type:"POST",
dataType:"json",
timeout:3e4,
url:"/mp/videochannel_profile_page",
data:{
action:"report_tx_video",
vid:e.vid,
status:t.em
},
success:function(e){
console.log(e);
}
}),0==t.em){
if(t.exem>0?r=-4:0==t.exem&&t.vl&&t.vl.vi&&t.vl.vi[0]&&8==t.vl.vi[0].st&&(r=t.preview>0?-5:-3),
0!=r||t.vl&&t.vl.vi&&t.vl.vi[0]||(r=-2),0==r){
var s=t.vl.vi[0];
if(o={
newVid:s.lnk,
time:Math.floor(s.td),
title:s.ti,
width:s.vw,
height:s.vh,
file_size:s.fs,
rate:Math.round(s.fs/1024*8/s.td),
flow:(parseFloat(s.fs)/1024/1024).toFixed(2)
},s.ul&&s.ul.ui&&s.ul.ui[0]){
var p=s.ul.ui[0],h=p.url+s.fn,d=t.fl,l="";
d&&d.cnt>0?(o.formatid=10003,l="??????",o.resolution="??????;(480P)".replace(/^.*;\((:?.*)P\)$/,"$1")||0,
o.format=l,o.vt=p.vt,o.totalUrl=[h,-1!=h.indexOf("?")?"&":"?","vkey=",s.fvkey,"&sdtfrom=",U.getsdtfrom(),"&type=",1==p.dt?"tflv":2==p.dt||0==p.dt?"mp4":"","&platform=",U.getPlatformType(),"&fmt=",l,"&level=",s.level,"&br=",s.br,"&sp=",s.sp].join("")):r=-2;
}
}
0==r?(U.getinfoReport({
vid:e.vid,
val:i,
val1:r,
vurl:o.totalUrl
}),e.onSuc({
data:o,
oriData:t,
c_time:i,
ret_code:r
})):(U.getinfoReport({
vid:e.vid,
val:i,
val1:r,
vurl:""
}),e.onError(-2,{
ret_code:r,
c_time:i,
err_msg:a(1*r,1*t.exem,t)
}));
}else e.onError(r,{
ret_code:r,
c_time:i,
err_msg:a(r)
});
},
onerror:function(t){
var i=void 0,r=Date.now()-n;
switch(1*t){
case 400:
i=-22;
break;

case 500:
i=-21;
break;

default:
i=-23;
}
"function"==typeof e.onError&&e.onError(i,{
ret_code:i,
c_time:r,
err_msg:a(-1)
}),U.getinfoReport({
vid:e.vid,
val:r,
val1:i,
vurl:""
});
}
});
}
var i="video_dynamic_callback",o="https://h5vv6.video.qq.com/getvinfo?vid=#vid#&dtype=1&otype=json&callback=#cid#&appVer=1&encryptVer=6.3&platform=61001&cKey=#ckey#&sdtfrom=#sdtfrom#&device=#device#&use_proxy_sdk=0";
o=o.replace("#cid#",i).replace("#vid#",e.vid).replace("#ckey#",e.ckey).replace("#sdtfrom#",U.getsdtfrom()).replace("#device#",U.getPlatformType());
var n=Date.now();
r(t);
}
function a(e,t){
var i="";
switch(1*e){
case-4:
i="??????????????????????????????????????????";
break;

case-5:
i="??????????????????????????????????????????";
break;

case-3:
i="??????????????????????????????????????????";
break;

case 61:
i="???????????????????????????????????????";
break;

case 62:
i="???????????????????????????????????????";
break;

case 63:
i="????????????????????????????????????";
break;

case 65:
i="????????????????????????????????????";
break;

case 67:
i="????????????????????????????????????";
break;

case 69:
i="????????????????????????????????????????????????????????????";
break;

case 71:
i="????????????????????????????????????";
break;

case 73:
i="????????????????????????????????????";
break;

case 74:
i="????????????????????????????????????";
break;

case 80:
switch(1*t){
case 1:
i="??????????????????IP????????????????????????????????????";
break;

case 2:
i="????????????????????????????????????";
break;

default:
i="??????????????????????????????????????????";
}
break;

case 81:
i="????????????????????????????????????";
break;

case 82:
i="????????????????????????????????????";
break;

case 83:
switch(1*t){
case-1:
i=pt.defaultErrorWording;
break;

case-2:
i="??????????????????????????????????????????";
break;

default:
i="???????????????????????????????????????????????????";
}
break;

case 84:
i="????????????????????????IP????????????????????????";
break;

default:
i=pt.defaultErrorWording;
}
return i;
}
function n(e){
var t="video_static_callback",i="https://h5vv.video.qq.com/getextinfo?otype=json&callback="+t+"&vid="+e.vid;
P({
url:i,
timeout:3e4,
callbackName:t,
callback:function(t){
if(!t||"o"!=t.s||t.vl.cnt<=0)return void("function"==typeof e.onError&&e.onError(-1));
var i=t.vl.vi[0],r={
title:i.title||"??????",
desc:1*i.desc===0?"":i.desc||"",
director:i.director||"",
leading_actor:i.leading_actor||"",
costar:i.costar||"",
time:Math.floor(i.td)||0
};
if(i.pl&&i.pl.cnt>0){
var o=i.pl.pi;
r.p400_300=o[0]?o[0].url:"",r.p140_100=o[1]?o[1].url:"",r.p120_90=o[2]?o[2].url:"",
r.p400_300=r.p400_300&&-1==r.p400_300.indexOf("http")?"http://"+r.p400_300:r.p400_300,
r.p140_100=r.p140_100&&-1==r.p140_100.indexOf("http")?"http://"+r.p140_100:r.p140_100,
r.p120_90=r.p120_90&&-1==r.p120_90.indexOf("http")?"http://"+r.p120_90:r.p120_90;
}
e.onSuc(r);
},
onerror:function(t){
"function"==typeof e.onError&&e.onError(t);
}
});
}
function s(){
var e=arguments.length<=0||void 0===arguments[0]?"cover":arguments[0],t=arguments[1],i=arguments[2],r=arguments[3],o=arguments[4],a=1,n=0,s=0,p=r,h=o,d=0,l=0,u=t,c=i,_=t/i,m=r/o;
return"cover"===e?m>=_?(a=i/o,n=(r-t/a)/2,p=t/a,h=o):(a=t/r,s=(o-i/a)/2,p=r,h=i/a):"contain"===e&&(m>=_?(a=t/r,
l=(i-o*a)/2,c=o*a):(a=i/o,d=(t-r*a)/2,u=r*a)),[n,s,p,h,d,l,u,c];
}
function p(e){
for(var t=1e8,i=0,r=0,o=e.length;o>r;r++)i=(i<<5)+i+e.charCodeAt(r);
return i%t;
}
function h(e,t){
return t?"/mp/videoplayer?action=get_mp_video_cover&vid="+e:location.protocol+"//puui.qpic.cn/qqvideo/0/"+e+"/0";
}
function d(e,t,i,r){
var o=V.get(pt.cachekey+r);
if(!o)return null;
try{
if(o=JSON.parse(o)||{},!o.time||Date.now()-pt.cacheTime>1*o.time)return m(r),o.videoInfo={
status:l(e,t,i,r)
},o;
}catch(a){
return m(r),null;
}
return o=o.videoInfo?o:{
videoInfo:{}
},o.videoInfo.status=l(e,t,i,r),o.videoInfo?o:null;
}
function l(e,t,i,r){
var o=V.get(pt.cachekey+e+t+i+r);
if(!o)return null;
try{
o=JSON.parse(o)||{};
}catch(a){
return v(e,t,i,r),null;
}
return o;
}
function u(){
var e=V.get(pt.cachekey+"playerStatus");
if(e){
try{
e=JSON.parse(e)||{};
}catch(t){
return void m("playerStatus");
}
e.playerStatus&&(pt.playerStatus=e.playerStatus,H.info("player controller: get player status cache "+JSON.stringify(pt.playerStatus)));
}
}
function c(e,t,i,r,o,a){
var n={
dynamicData:o.dynamicData||null,
coverUrl:o.coverUrl||""
};
V.set(pt.cachekey+r,JSON.stringify({
time:a||Date.now(),
videoInfo:n
})),o.status&&V.set(pt.cachekey+e+t+i+r,JSON.stringify(o.status));
}
function _(){
V.set(pt.cachekey+"playerStatus",JSON.stringify({
playerStatus:pt.playerStatus
})),D.invoke("handleMPPageAction",{
action:"setLocalData",
key:"formatId",
data:String(pt.playerStatus.formatId)
},function(e){
console.log("setLocalData"+JSON.stringify(e));
}),H.info("player controller: set player status cache "+JSON.stringify(pt.playerStatus));
}
function m(e){
V.remove(pt.cachekey+e);
}
function v(e,t,i,r){
V.remove(pt.cachekey+e+t+i+r);
}
function f(e){
window.ext_complete?e():Y.on("ext-complete",e);
}
e("biz_wap/zepto/zepto.js"),e("biz_wap/zepto/event.js"),e("biz_wap/zepto/touch.js"),
e("biz_wap/ui/weui.js"),e("biz_common/utils/string/html.js");
var g=e("pages_new/3rd/vue.js"),y=e("pages_new/3rd/vuex.js"),w=y.mapState,T=y.mapMutations,E=y.mapActions,S=e("a/a_utils.js"),b=e("pages/utils.js"),k=e("pages_new/common_share/video/player/controller.html.js"),D=e("biz_wap/jsapi/core.js"),I=e("biz_wap/utils/mmversion.js"),M=e("biz_common/utils/url/parse.js"),R=e("biz_wap/utils/ajax.js"),P=e("pages/loadscript.js"),C=e("appmsg/kan_report.js"),O=e("common/comm_report.js"),x=e("pages_new/common_share/video/player/plugins/base.js"),j=e("pages_new/common_share/video/player/plugins/monitor/monitor.js"),V=e("biz_wap/utils/localstorage.js"),z=e("biz_common/dom/event.js"),U=e("pages/report.js"),B=e("pages_new/common_share/video/player/player.js"),L=e("new_video/ctl.js"),F=e("pages/create_txv.js"),W=e("biz_wap/utils/jsmonitor_report.js"),A=e("biz_wap/jsapi/leaveReport.js"),N=e("biz_wap/utils/setMpInfo.js"),H=e("biz_wap/jsapi/log.js"),q=e("appmsg/topbar.js"),K=e("common/utils.js"),J=e("common/safeAreaInsets.js"),G=e("appmsg/topbar.js"),Q=G.setTopBarWhenVisible,Y=e("pages_new/modules/utils/event_bus.js"),Z=e("biz_wap/utils/jsmonitor_report.js"),X=e("pages_new/common_share/video/utils/immersive_data.js"),et=X.getImmersivePlayerData,tt=X.oprImmersivePlayerData,it=e("pages_new/common_share/video/report.js"),rt=it.getNetType,ot=it.getDeviceModel,at=it.getOsName,nt=it.getOsVersion,st=it.getMiaoKai,pt={
cachekey:"qqmovieStatus_",
cacheTime:6e5,
networkType:"",
isPc:/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),
defaultErrorWording:"??????????????????????????????????????????",
defaultHeadImgUrl:"http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0",
playerStatus:{
formatId:null
},
netTypeMap:{
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
},
formatIdMap:{
20003:4,
10002:3,
10003:2,
10004:1
}
},ht=["????????????",""],dt=["????????????","refresh"],lt={
1:ht.concat("135px"),
2:dt.concat("135px"),
201:ht.concat("100%"),
202:dt.concat("100%"),
203:ht.concat("135px"),
204:dt.concat("135px")
},ut="update_recommend_status",ct="submitMsgToTL",_t=200,mt=function(e,t){
var i={
origin:"mp",
isLike:e?1:0,
url:encodeURIComponent(window.msg_link.html(!1)),
content:t||""
};
D.invoke("handleHaokanAction",{
action:ct,
recommend:e?1:0,
server_data:JSON.stringify(i)
},function(e){
console.log("handleHaokanAction",e);
}),D.invoke("handleHaokanAction",{
action:ut,
permission:1,
recommend:e?1:0
},function(e){
console.log("handleHaokanAction for client",e);
});
},vt=g.extend({
template:k,
components:_defineProperty({},B.name,B),
data:function(){
return{
opt:null,
playerOpt:null,
wrapStyle:null,
videoStyle:null,
topStickyExpendWhenPaused:!1,
toastTips:""
};
},
computed:_extends({},w("mp-video-player",["errType","errCode","errMsg","banOprStatus","fullscreenStatus","orientationStatus","refreshBtnStatus","topStickyInfoStatus","commonReportData","enter23439ReportExData"]),{
innerPlugins:function(){
return this.opt&&this.opt.plugins&&this.opt.plugins.filter(function(e){
return e.type===x.TYPE_INNER;
})||[];
},
coverPlugins:function(){
return this.opt&&this.opt.plugins&&this.opt.plugins.filter(function(e){
return e.type===x.TYPE_COVER;
})||[];
},
controlPlugins:function(){
return this.opt&&this.opt.plugins&&this.opt.plugins.filter(function(e){
return e.type===x.TYPE_CONTROL;
})||[];
},
topStickyInfoWording:function(){
var e=lt[this.topStickyInfoStatus];
return e&&e[0]||"????????????";
},
topStickyInfoIconClass:function(){
var e=lt[this.topStickyInfoStatus];
return e&&e[1]||"";
},
topStickyInfoMaskWidth:function(){
var e=lt[this.topStickyInfoStatus];
return e&&e[2]||"100%";
}
}),
watch:{
banOprStatus:function(){
this.setVideoMenuItems();
},
orientationStatus:function(){
this.onOrientationStatusChange();
}
},
mounted:function(){
var e=this;
this.initController(),O.leaveReport(23443,function(){
return e.onLeaveReport23443({
event:1,
type:"leaveReport"
});
}),O.leaveReport(23443,function(){
return e.onLeaveReport23443({
type:"leaveReport"
});
}),A.addReport(function(){
return e.onKykLeaveReport({
type:"leaveReport"
});
}),A.addReport(function(){
return e.onPageUnload({
type:"leaveReport"
});
}),A.addSpecificReport("native_data",function(){
return{
video_data:{
vid:e.opt.vid,
lastPlayedTime:e.getCurrentTime(),
lastPlayedTimeExpiredTime:(Date.now()+pt.cacheTime)/1e3
}
};
}),window.addEventListener("unload",this.__onLeaveReport23443EventType1=function(){
return e.onLeaveReport23443({
event:1
});
}),window.addEventListener("unload",this.__onLeaveReport23443EventType2or3=function(){
return e.onLeaveReport23443();
}),window.addEventListener("unload",this.onKykLeaveReport),window.addEventListener("unload",this.onPageUnload),
window.addEventListener("resize",this.onPageResize),document.addEventListener("visibilitychange",this.onVisibilityChange);
},
beforeDestroy:function(){
window.addEventListener("unload",this.__onLeaveReport23443EventType1),window.addEventListener("unload",this.__onLeaveReport23443EventType2or3),
window.removeEventListener("unload",this.onKykLeaveReport),window.removeEventListener("unload",this.onPageUnload),
window.removeEventListener("resize",this.onPageResize),document.removeEventListener("visibilitychange",this.onVisibilityChange),
this.disableTopSticky();
},
methods:_extends({},T("mp-video-player",["setError","setTopStickyInfoStatus","setCommonReportData","setEnter23439ReportExData","setPlay23440ReportExData","setPerf23442ReportExData","setLeave23443ReportExData","setOp23444ReportExData","setReload23445ReportExData","setAd23446ReportExData"]),E("mp-video-player",["reportEnter23439","reportPlay23440","reportPerf23442","reportLeave23443","reportOp23444","reportReload23445","reportAd23446"]),{
initController:function(){
var e=this;
return this.opt=_extends({
bizUserName:"",
bizNickName:"",
profileTabType:2,
videoTitle:"",
headImgUrl:"",
preview:!1,
fromid:0,
oriStatus:3,
isMpVideo:0,
supportNativeFullPlayer:!0,
canShareVideo:!0,
videoMd5:"",
oriVid:"",
vid:"",
ckey:"",
width:0,
height:0,
autoplay:!1,
loop:!1,
__biz:"",
uin:"",
mid:"",
idx:"",
comment_id:"",
scene_type:0,
hitBizuin:"",
hitVid:"",
totalRange:10,
useWcSlPlayer:!1,
useImmersiveMode:!1,
useFeFullscreen:!1,
coverFit:"contain",
auto:{
loadRetryTime:0,
isShowTip:!1,
isChangeAuto:!1,
isShowSuc:!1
}
},this.$options.opt),this.opt.oriVid=this.opt.oriVid||this.opt.vid,this.opt.headImgUrl=this.opt.headImgUrl||pt.defaultHeadImgUrl,
1!=this.opt.oriStatus&&2!=this.opt.oriStatus&&(this.opt.oriStatus=3),(!I.isWechat||!I.isIOS&&!I.isAndroid||I.isIOS&&I.ltVersion("7.0.9")||I.isAndroid&&I.ltVersion("7.0.10")||I.isInMiniProgram||!this.opt.videoMd5)&&(this.opt.supportNativeFullPlayer=!1,
K.supportImmersiveMode||(this.opt.canShareVideo=!1)),this.__reportData=U.getVideoReportData(),
this.__gWidth=this.__gWidth||this.opt.width,this.__gHeight=this.__gHeight||this.opt.height,
this.__hasFirstPlayed=!1,this.__hasReport23439Enter=!1,this.__hasLeaveReport23443EventType1=!1,
this.__hasLeaveReport23443EventType2or3=!1,this.__enterTime=(new Date).getTime(),
this.__enterPageTime=this.opt.useImmersiveMode?0:this.__enterTime,this.__enterImmersiveModeTime=0,
this.__playRangeInfo=[],this.__dynamicErrMsg="",this.__isUnloaded=!1,this.__isShowTx=!1,
this.__dataCount=0,this.__targetDataCount=2,this.__coverUrl="",this.__cacheStartTs=0,
this.__initialData=null,this.__vInfo={
status:null,
coverUrl:"",
dynamicData:null
},this.hideError(),this.initLegacyPlugins(),this.initReportData(),this.initKykReportData(),
S.report115849(71),this.replaceByTxVideo()===!0?void S.report115849(70):(this.getCache(),
window.__timelineInitialData&&(this.__initialData=window.__timelineInitialData,delete window.__timelineInitialData),
this.getCoverUrl(),pt.playerStatus&&!pt.playerStatus.formatId?r(function(){
return e.getDynamicData();
}):this.getDynamicData(),et({
biz:this.opt.__biz,
mid:this.opt.mid,
idx:this.opt.idx,
vid:this.opt.vid,
onSuccess:function(t){
e.playerOpt?(e.playerOpt.readNum=t.view_num.pv,e.playerOpt.praiseNum=t.like_num.pv,
e.playerOpt.likeNum=t.seen_num.pv,e.playerOpt.isPraised=t.like_num.liked,e.playerOpt.isLiked=t.seen_num.seen):e.__immersiveData=t,
!e.opt.preview&&e.opt.useImmersiveMode&&D.invoke("handleHaokanAction",{
action:ut,
permission:1,
recommend:t.seen_num.seen?1:0
});
}
}),this.reportH265VideoSupport(),void("number"==typeof this.opt.leaveReport12710Type&&this.leaveReport12710()));
},
reload:function(){
this.playerOpt=null,this.initController();
},
destroyPlugins:function(){
this.opt.plugins=[],this.__legacyPlugins.forEach(function(e){
return e.destroy&&e.destroy();
}),this.__legacyPlugins=[],this.__blockPlugin={};
},
resetPlayer:function(){
var e=this.$refs.player;
e&&(e.__canplay=!1,e.pause(),e.showLoading(),e.preventOperating(2),e.$refs.video.currentTime=0,
e.currentTime=0);
},
reinit:function(e){
var t=this;
this.opt&&"object"===_typeof(this.opt)&&(this.$options.opt=e),delete this.__gWidth,
delete this.__gHeight,this.$nextTick(function(){
t.initController(),O.leaveReport(23443,function(){
return t.onLeaveReport23443({
event:1,
type:"leaveReport"
});
}),O.leaveReport(23443,function(){
return t.onLeaveReport23443({
type:"leaveReport"
});
}),A.addReport(function(){
return t.onKykLeaveReport({
type:"leaveReport"
});
}),A.addReport(function(){
return t.onPageUnload({
type:"leaveReport"
});
}),A.addSpecificReport("native_data",function(){
return{
video_data:{
vid:t.opt.vid,
lastPlayedTime:t.getCurrentTime(),
lastPlayedTimeExpiredTime:(Date.now()+pt.cacheTime)/1e3
}
};
});
});
},
initReportData:function(){
var e=this.__reportData;
e.mid=this.opt.mid,e.__biz=this.opt.__biz,e.idx=this.opt.idx,e.vid=this.opt.vid,
e.commentid=this.opt.comment_id,e.scene_type=this.opt.scene_type,e.auto_play=this.opt.autoplay?1:0,
e.fromid=this.opt.fromid,e.hit_bizuin=this.opt.hitBizuin,e.hit_vid=this.opt.hitVid,
this.__monitorUid=this.triggerEvent("initMonitor",64728),this.__monitorUid2=this.triggerEvent("initMonitor",110644);
},
initKykReportData:function(){
this.__videoReportInfo={
hasUnloadReport:!1,
hasApiReport:!1,
every_start_play_time:0,
every_end_play_time:0,
total_play_time:0
},this.__kanReportData={
rec_expand:b.getParam("rec_expand")||"",
scene:b.getParam("scene")||"",
report_action:1,
vid:this.opt.vid,
start_play_time:0,
end_play_time:0,
play_time:0,
has_end:0,
replay_cnt:0,
pause_cnt:0,
auto_play:this.opt.autoplay?1:0,
has_full_screen:this.fullscreenStatus?1:0
};
},
initImmersiveReportCommonData:function(){
var e=0;
try{
e=1*window.atob(this.opt.__biz);
}catch(t){}
var i=this.__vInfo.dynamicData&&this.__vInfo.dynamicData.data||{},r={
DeviceModel:ot(),
DeviceBrand:ot(),
OsName:at(),
OsVersion:nt(),
NetType:rt(),
MiaoKai:st(),
ScreenWidth:window.screen.width,
ScreenHeight:window.screen.height
},o=-1;
I.isIOS?o=1:I.isAndroid&&(o=2),this.setCommonReportData({
Vid:this.opt.vid,
BizUin:e,
MsgId:1*this.opt.mid,
ItemIdx:1*this.opt.idx,
PlayerType:K.isWcSlPage()?1:this.__isShowTx?3:2,
Scene:1*(window.scene||window.cgiData.scene||b.getParam("scene")),
SubScene:1*(window.subscene||window.cgiData.subscene||b.getParam("subscene")),
ItemShowType:this.opt.useImmersiveMode?16:1*window.real_item_show_type,
EnterId:1*window.enterid||1*window.cgiData.enterid||parseInt(Date.now()/1e3,10),
SessionId:(window.sessionid||"")+"",
ChannelId:(b.getParam("channel_session_id")||"")+"",
ReloadId:(window.reloadid||"")+"",
ReloadSeq:1*(window.reloadseq||1),
Duration:parseInt(1e3*(i.time||0)),
OrStatus:1*this.opt.oriStatus,
PageUrl:window.location.href,
VideoUrl:i.totalUrl||"",
IsFans:window.isFans?2:1,
Device:o
}),this.setPlay23440ReportExData(_extends({},r)),this.setPerf23442ReportExData(_extends({},r)),
this.setOp23444ReportExData({
FullscreenType:1
}),this.setReload23445ReportExData({
FullscreenType:1
});
},
reportH265VideoSupport:function(){
var e=this.__monitorUid2;
this.triggerEvent("setMonitor",e,{
36:1
});
var t=document.createElement("video");
if("function"==typeof t.canPlayType){
var i=t.canPlayType('video/mp4; codecs="hevc"');
("maybe"==i.toLowerCase()||"probably"==i.toLowerCase())&&this.triggerEvent("setMonitor",e,{
37:1
});
}
this.triggerEvent("sendMonitor",e);
},
getReportTypeBySceneType:function(){
return 0==this.opt.scene_type?1:1==this.opt.scene_type||2==this.opt.scene_type?2:4==this.opt.scene_type?3:7==this.opt.scene_type?4:0;
},
onPageUnload:function(e){
if(!this.__isUnloaded){
this.__isUnloaded=!0;
var t=this.__reportData;
if(0===t.videoerror?this.cacheData():this.clearCache(),this.getPlayerReportData(),
e&&"leaveReport"===e.type){
var i=[];
for(var r in t)t.hasOwnProperty(r)&&i.push(r+"="+encodeURIComponent(t[r]));
return{
reportUrl:"/mp/videoreport?",
method:"POST",
reportData:i.join("&")
};
}
U.videoreport({
data:t,
async:!1
});
}
},
onLeaveReport23443:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(!(1===e.event&&this.__hasLeaveReport23443EventType1||1!==e.event&&this.__hasLeaveReport23443EventType2or3)){
var t=this.getCurrentTimeMs(),i=this.getRealPlayTime(),r=(new Date).getTime()-this.__enterTime,o=void 0;
if(1===e.event?(this.__hasLeaveReport23443EventType1=!0,o={
EventType:1,
EventTime:t,
PlayTime:i,
StayTime:r
}):(this.__hasLeaveReport23443EventType2or3=!0,o=this.fullscreenStatus?{
EventType:3,
EventTime:t,
PagePlayTime:i,
PageStayTime:r
}:{
EventType:2,
EventTime:t,
ImmersivePlayTime:i,
ImmersiveStayTime:r
}),o){
if("leaveReport"===e.type)return _extends({},this.commonReportData,o);
this.reportLeave23443(o);
}
}
},
onKykLeaveReport:function(e){
if(e&&"leaveReport"===e.type&&!this.__videoReportInfo.hasUnloadReport||!this.__videoReportInfo.hasApiReport)if(this.__videoReportInfo.every_end_play_time=Math.round(1e3*this.getCurrentTime()),
this.__pauseTimestamp||(this.__videoReportInfo.total_play_time+=this.__videoReportInfo.every_end_play_time-this.__videoReportInfo.every_start_play_time),
this.__kanReportData.play_time=this.__videoReportInfo.total_play_time,this.__kanReportData.end_play_time=Date.parse(new Date)/1e3,
e&&"leaveReport"===e.type){
if(b.getParam("rec_expand")&&1*b.getParam("scene")===94){
this.__videoReportInfo.hasApiReport=!0,console.log("kanReportData"+JSON.stringify(this.__kanReportData));
var t=[];
for(var i in this.__kanReportData)this.__kanReportData.hasOwnProperty(i)&&t.push(i+"="+encodeURIComponent(this.__kanReportData[i]));
return{
reportUrl:"https://mp.weixin.qq.com/mp/videoreport?action=report_for_kyk",
reportData:t.join("&"),
method:"POST"
};
}
}else this.__videoReportInfo.hasUnloadReport=!0,console.log("real play time"+this.__videoReportInfo.total_play_time),
C.reportKanData(this.__kanReportData);
},
onVisibilityChange:function(){
document.hidden&&this.cacheData();
},
onPageResize:function(){
var e=this;
if(!this.__preventResize)return this.$refs.player&&this.$refs.player.isWcSlPlayer?void(this.fullscreenStatus||setTimeout(function(){
var t=$(e.$el).parent(),i=t.offset().width;
0!=i&&e.setVideoSize({
width:i
});
},0)):void(this.opt.height&&this.opt.width&&(this.__isShowTx&&this.__txPlayer?setTimeout(function(){
try{
var t=$(e.$el).parent(),i=e.opt.width/e.opt.height,r=t.offset().width,o=Math.floor(r/i);
0!=r&&(e.__gWidth=r,e.__gHeight=o,t.css({
height:o+"px"
}),e.__txPlayer.resize({
width:r,
height:o
}));
}catch(a){}
},0):setTimeout(function(){
var t=$(e.$el).parent(),i=e.opt.width/e.opt.height,r=t.offset().width,o=Math.floor(r/i);
0!=r&&(e.__gWidth=r,e.__gHeight=o,e.setVideoSize({
width:r,
height:o
}),t.css({
height:o+"px"
}));
},0)));
},
getCache:function(){
var e=d(this.opt.__biz,this.opt.mid,this.opt.idx,this.opt.vid);
if(e){
var t=this.__vInfo;
t.dynamicData=e.videoInfo.dynamicData||null,t.coverUrl=e.videoInfo.coverUrl||"",
t.status=e.videoInfo.status||null,this.__cacheStartTs=e.time||null;
}
},
cacheData:function(){
var e=this.$refs.player,t=this.__vInfo;
e&&(t.status||(t.status={}),"function"==typeof e.isEnd&&(t.status.isEnd=e.isEnd()),
"function"==typeof e.getCurTime&&(t.status.playTime=e.getCurTime()),"function"==typeof e.getPlaybackRate&&(t.status.playbackRate=e.getPlaybackRate()),
!this.__initialData&&this.__coverUrl&&(t.coverUrl=this.__coverUrl),c(this.opt.__biz,this.opt.mid,this.opt.idx,this.opt.vid,this.__vInfo,this.__cacheStartTs));
},
clearCache:function(){
m(this.opt.vid);
},
leaveReport12710:function(){
var e=this,t={
type:this.opt.leaveReport12710Type,
step:17,
useruin:this.opt.uin,
bizuin:this.opt.__biz,
mid:this.opt.mid,
idx:this.opt.idx,
vid:this.opt.vid
};
A.addReport(function(){
var i=e.getRealPlayTime();
if(!i)return!1;
var r=e.getVideoData();
return t.duration=Math.round(1e3*r.time),t.clienttime=Date.now(),t.real_play_time=i,
{
reportUrl:"https://mp.weixin.qq.com/mp/ad_video_report?action=video_play_exit_report",
reportData:Object.keys(t).map(function(e){
return e+"="+encodeURIComponent(t[e]||"");
}).join("&"),
method:"POST"
};
});
},
initLegacyPlugins:function(){
var e=this.opt.plugins||[];
this.__blockPlugin={},this.__legacyPlugins=[];
var t=new j;
t.setPlayer(this),t.init&&t.init(),this.__legacyPlugins.push(t);
for(var i=0,r=e.length;r>i;i++){
var o=e[i];
o.prototype instanceof x||(o.setPlayer(this),o.init&&o.init(),this.__legacyPlugins.push(o));
}
},
initPlugins:function(){
var e=this;
this.$refs.innerPlugins&&this.$refs.innerPlugins.forEach(function(t){
return t.initContext(e);
}),this.$refs.coverPlugins&&this.$refs.coverPlugins.forEach(function(t){
return t.initContext(e);
}),this.$refs.controlPlugins&&this.$refs.controlPlugins.forEach(function(t){
return t.initContext(e);
});
},
getCoverUrl:function(){
var e=this,t="";
if(this.__initialData&&this.__initialData.initialCover?t=this.__initialData.initialCover:this.opt.isMpVideo&&window.__mpVideoCoverUrl?(t=window.__mpVideoCoverUrl,
delete window.__mpVideoCoverUrl):this.__vInfo.coverUrl&&(t=this.__vInfo.coverUrl),
t)return this.__coverUrl=t,this.__dataCount++,this.videoDataReady(),void this.getFloatCoverBase64(this.__coverUrl);
if(this.__coverUrl=h(this.opt.vid,this.opt.isMpVideo),!this.opt.isMpVideo)return this.__dataCount++,
this.videoDataReady(),void this.getFloatCoverBase64(this.__coverUrl);
var i=1,r=function o(){
R({
type:"GET",
dataType:"json",
timeout:3e4,
url:e.__coverUrl+"&f=json",
success:function(t){
t&&t.base_resp&&0==t.base_resp.ret&&t.url&&(e.__coverUrl=t.url),e.__dataCount++,
e.videoDataReady(),e.getFloatCoverBase64(e.__coverUrl);
},
error:function(){
return i>0?(i--,void o()):(e.__dataCount++,void e.videoDataReady());
}
});
};
r();
},
getDynamicData:function(){
var e=this;
if(this.opt.isMpVideo&&window.__mpVideoTransInfo&&window.__mpVideoTransInfo.length>0)return this.__dataCount++,
this.__vInfo.dynamicData={
data:t({
url_info:window.__mpVideoTransInfo.map(function(e){
return e.url=e.url.htmlDecode(),e;
})
})
},delete window.__mpVideoTransInfo,void this.videoDataReady();
if(this.__vInfo.dynamicData){
this.__dataCount++;
var r=this.__vInfo.dynamicData;
return this.__reportData.getvinfo_ret="undefined"!=typeof r.ret_code?r.ret_code:-2,
this.__reportData.getvinfo_time=r.c_time||0,this.opt.isMpVideo&&r.data&&r.data.ori_url_info&&r.data.ori_url_info.length>0&&(this.__vInfo.dynamicData={
data:t({
url_info:r.data.ori_url_info
})
}),void this.videoDataReady();
}
var a=this.__monitorUid,n=this.__monitorUid2;
return this.opt.isMpVideo?void i({
preview:this.opt.preview,
vid:this.opt.vid,
__biz:this.opt.__biz,
mid:this.opt.mid,
idx:this.opt.idx,
auto:!(!I.isAndroid||!I.gtVersion("7.0.16",1)),
onSuccess:function(t){
e.triggerEvent("setMonitor",n,{
4:1,
5:1
}),e.triggerEvent("sendMonitor",n),e.__dataCount++,e.__vInfo.dynamicData=t,e.videoDataReady();
},
onError:function(t){
var i=t.code;
switch(e.triggerEvent("setMonitor",n,{
4:1,
6:1
}),i){
case 80:
e.triggerEvent("setMonitor",n,{
7:1,
24:1
});
break;

case 81:
e.triggerEvent("setMonitor",n,{
7:1,
25:1
});
break;

case 82:
e.triggerEvent("setMonitor",n,{
7:1,
26:1
});
break;

case 83:
e.triggerEvent("setMonitor",n,{
7:1,
27:1
});
break;

case 84:
e.triggerEvent("setMonitor",n,{
7:1,
28:1
});
break;

case 85:
e.triggerEvent("setMonitor",n,{
7:1,
29:1
});
break;

case 71:
e.triggerEvent("setMonitor",n,{
8:1
});
break;

case 72:
e.triggerEvent("setMonitor",n,{
9:1
});
break;

case 73:
e.triggerEvent("setMonitor",n,{
10:1
});
break;

case 74:
e.triggerEvent("setMonitor",n,{
11:1
});
break;

case 75:
e.triggerEvent("setMonitor",n,{
34:1
});
break;

case 76:
e.triggerEvent("setMonitor",n,{
35:1
});
}
e.triggerEvent("sendMonitor",n),e.__reportData.videoerror=i,e.__dynamicErrMsg=t.err_msg||"",
e.__reportData.duration_ms=0,e.__vInfo.dynamicData=null,e.__dataCount=e.__targetDataCount,
e.videoDataReady(),e.reportPerf23442({
EventType:4,
EventTime:e.getCurrentTimeMs(),
Definition:e.getCurrentDefinition(),
VideoWidth:e.playerOpt&&e.playerOpt.videoWidth||0,
VideoHeight:e.playerOpt&&e.playerOpt.videoHeight||0,
playErrType:i
});
}
}):void o({
vid:this.opt.vid,
ckey:this.opt.ckey,
onSuc:function(t){
if(e.triggerEvent("setMonitor",a,{
10:1,
11:1,
13:Math.min(t.c_time,6e4)
}),t.data.width&&t.data.height){
var i=Math.round(10*t.data.width/t.data.height*1);
i>20?i=20:0>i&&(i=0);
var r=41+2*i,o={};
o[r]=1,e.triggerEvent("setMonitor",a,o);
}else e.triggerEvent("setMonitor",a,{
83:1
});
e.triggerEvent("sendMonitor",a),e.__dataCount++,e.__vInfo.dynamicData=t,e.__reportData.getvinfo_ret=t.ret_code,
e.__reportData.getvinfo_time=t.c_time,e.__reportData.file_size=t.data.file_size,
e.__reportData.rate=t.data.rate,e.__reportData.resolution=t.data.resolution,e.__reportData.format=t.data.format,
e.__reportData.vt=t.data.vt,e.__reportData.video_ext=U.getsdtfrom(),e.videoDataReady();
},
onError:function(t,i){
if(e.triggerEvent("setMonitor",a,{
10:1,
12:1,
13:Math.min(i.c_time,6e4)
}),-2==t)switch(1*i.ret_code){
case-2:
e.triggerEvent("setMonitor",a,{
17:1
}),e.__reportData.videoerror=2;
break;

case-3:
e.triggerEvent("setMonitor",a,{
40:1
}),e.__reportData.videoerror=53;
break;

case-4:
e.triggerEvent("setMonitor",a,{
109:1
}),e.__reportData.videoerror=54;
break;

case-5:
e.triggerEvent("setMonitor",a,{
110:1
}),e.__reportData.videoerror=55;
break;

case 61:
e.triggerEvent("setMonitor",a,{
18:1
}),e.__reportData.videoerror=25;
break;

case 62:
e.triggerEvent("setMonitor",a,{
19:1
}),e.__reportData.videoerror=26;
break;

case 64:
e.triggerEvent("setMonitor",a,{
20:1
}),e.__reportData.videoerror=27;
break;

case 67:
e.triggerEvent("setMonitor",a,{
21:1
}),e.__reportData.videoerror=28;
break;

case 69:
e.triggerEvent("setMonitor",a,{
22:1
}),e.__reportData.videoerror=52;
break;

case 80:
e.triggerEvent("setMonitor",a,{
23:1
}),e.__reportData.videoerror=29;
break;

case 81:
e.triggerEvent("setMonitor",a,{
24:1
}),e.__reportData.videoerror=50;
break;

case 85:
e.triggerEvent("setMonitor",a,{
25:1
}),e.__reportData.videoerror=51;
break;

default:
e.triggerEvent("setMonitor",a,{
26:1
}),e.__reportData.videoerror=24;
}else{
switch(1*t){
case-22:
e.triggerEvent("setMonitor",a,{
15:1
});
break;

case-21:
e.triggerEvent("setMonitor",a,{
14:1
});
break;

case-23:
e.triggerEvent("setMonitor",a,{
16:1
});
}
e.__reportData.videoerror=-1*t;
}
e.triggerEvent("sendMonitor",a),e.__dynamicErrMsg=i.err_msg||"",e.__reportData.getvinfo_ret=i.ret_code,
e.__reportData.duration_ms=0,e.__reportData.getvinfo_time=i.c_time||0,e.__vInfo.dynamicData=null,
e.__dataCount=e.__targetDataCount,e.videoDataReady(),e.reportPerf23442({
EventType:4,
EventTime:e.getCurrentTimeMs(),
Definition:e.getCurrentDefinition(),
VideoWidth:e.playerOpt&&e.playerOpt.videoWidth||0,
VideoHeight:e.playerOpt&&e.playerOpt.videoHeight||0,
playErrType:-1*t
});
}
});
},
videoDataReady:function(){
var e=this;
this.__dataCount===this.__targetDataCount&&(this.__isShowTx?this.removeLoading():this.__vInfo.dynamicData?this.createPlayer():(this.removeLoading(),
H.error("player controller: failed to create player because no dynamic data")),f(function(){
e.initImmersiveReportCommonData(),e.__hasReport23439Enter||(e.__hasReport23439Enter=!0,
e.enter23439ReportExData.UserDanMuFlag&&e.reportEnter23439(),!e.opt.useImmersiveMode&&K.supportImmersiveMode&&e.reportPv23447());
}));
},
createPlayer:function(){
var e=this,t=this.__vInfo,i=this.__reportData,r=t.dynamicData.data;
this.__reportData.duration_ms=parseInt(1e3*r.time),this.initPlayRangeInfo({
durationMs:this.__reportData.duration_ms
}),i.vtitle=this.opt.vtitle||r.title||"";
var o=this.getReportTypeBySceneType(),a=void 0;
r.ori_url_info&&!function(){
var e={
10002:"??????",
10003:"??????",
10004:"??????",
20003:"??????"
};
a=[],r.ori_url_info.forEach(function(t){
(1*t.format_id!==20003||I.isWechat&&I.isAndroid&&I.gtVersion("7.0.16",1))&&a.push({
name:t.video_quality_wording||e[t.format_id],
formatId:t.format_id,
height:t.height,
width:t.width,
src:t.url
});
});
}();
var n=[{
rate:.5,
name:"0.5???"
},{
rate:.75,
name:"0.75???"
},{
rate:1,
name:"1.0???"
},{
rate:1.5,
name:"1.5???"
},{
rate:2,
name:"2.0???"
}],s=M.getQuery("play_time"),p=0;
this.__initialData?p=this.__initialData.initialTime||0:""!==s?p=1*s||0:t.status&&!t.status.isEnd&&(p=t.status.playTime||0),
H.info("player controller: begin to create player"),this.playerOpt={
__biz:this.opt.__biz,
mid:this.opt.mid,
idx:this.opt.idx,
bizUserName:this.opt.bizUserName,
bizNickName:this.opt.bizNickName,
profileTabType:this.opt.profileTabType,
videoTitle:i.vtitle,
videoReportType:o,
coverFit:this.opt.coverFit,
cover:this.__coverUrl,
width:this.__gWidth,
height:this.__gHeight,
videoWidth:r.width,
videoHeight:r.height,
duration:r.time,
autoplay:this.opt.autoplay,
flowNotice:this.opt.flowNotice,
flow:r.flow,
loop:this.opt.loop,
src:r.totalUrl,
formatId:r.formatid,
headImgUrl:this.opt.headImgUrl,
useWcSlPlayer:this.opt.useWcSlPlayer,
useImmersiveMode:this.opt.useImmersiveMode,
useFeFullscreen:this.opt.useFeFullscreen,
oriStatus:this.opt.oriStatus,
initialTime:p,
resolutionInfo:a,
playbackRateInfo:n,
playbackRateBtnInfoDefaultId:2,
supportNativeFullPlayer:this.opt.supportNativeFullPlayer,
canShareVideo:this.opt.canShareVideo,
videoMd5:this.opt.videoMd5,
extinfo:{
hit_bizuin:this.opt.hitBizuin,
hit_vid:this.opt.hitVid,
vid:this.opt.vid,
preview:this.opt.preview,
pageplayer:this
},
fileSize:r.file_size,
checkPlayAuthority:this.checkPlayAuthority,
readNum:this.__immersiveData&&this.__immersiveData.view_num.pv||0,
praiseNum:this.__immersiveData&&this.__immersiveData.like_num.pv||0,
likeNum:this.__immersiveData&&this.__immersiveData.seen_num.pv||0,
isPraised:this.__immersiveData&&this.__immersiveData.like_num.liked||0,
isLiked:this.__immersiveData&&this.__immersiveData.seen_num.seen||0
},this.qqVideoReport({
step:3
}),this.$nextTick(function(){
e.initPlugins(),e.triggerEvent("playerReady");
});
},
removeLoading:function(){
this.afterRemoveLoading();
},
afterRemoveLoading:function(){
if(!this.__isShowTx&&!this.__vInfo.dynamicData)if(this.opt.isMpVideo){
var e=1;
(72==this.__reportData.videoerror||73==this.__reportData.videoerror)&&(e=2),this.showError(this.__dynamicErrMsg,e);
}else this.showError(this.__dynamicErrMsg||"");
var t=this.getVideoData();
this.triggerEvent("videoReady",{
formatId:t&&t.formatid
});
},
showError:function(e,t){
e=e||pt.defaultErrorWording,this.setError({
type:t||1,
code:this.__reportData.videoerror,
msg:e,
refresh:e===pt.defaultErrorWording?1:0
}),this.disableTopSticky();
},
hideError:function(){
this.setError({
type:0,
code:0,
msg:"",
refresh:0
});
},
checkPlayAuthority:function(e){
var t=this;
this.opt.checkNoPaid?R({
type:"GET",
dataType:"json",
timeout:3e4,
url:"/mp/videoplayer?action=check_video_paid_status&__biz="+this.opt.__biz+"&mid="+this.opt.mid+"&idx="+this.opt.idx,
success:function(i){
1==!i.can_play?window.weui.confirm("???????????????????????????????????????????????????????????????",{
buttons:[{
type:"default",
label:"??????"
},{
label:"????????????",
onClick:function(){
t.opt.openArticle();
}
}]
}):"function"==typeof e.allowPlay&&e.allowPlay();
}
}):"function"==typeof e.allowPlay&&e.allowPlay();
},
onLoaded:function(){
var e=this;
setTimeout(function(){
e.removeLoading();
},0),H.info("player controller: succ created player");
},
onTimeupdate:function(e){
if(!this.__reportedTimeupdate){
this.__reportedTimeupdate=!0,L.report({
step:6,
vid:this.opt.vid,
traceid:this.getTraceId(),
orderid:this.getOrderid(),
type:this.getReportTypeBySceneType(),
fromid:this.opt.fromid
});
var t=this.$refs.player.getLog(),i=t.loadwait||0;
this.qqVideoReport({
step:6,
loadwait:i
});
}
if(!this.__reportedPv){
this.__reportedPv=!0;
var r=this.__monitorUid,o=this.__monitorUid2;
this.triggerEvent("clearMonitor",r),this.triggerEvent("clearMonitor",o),this.opt.isMpVideo?(this.triggerEvent("setMonitor",o,{
12:1,
13:1
}),this.triggerEvent("sendMonitor",o)):(this.triggerEvent("setMonitor",r,{
0:1,
1:1
}),this.triggerEvent("sendMonitor",r));
}
this.__reportData.last_ms=parseInt(1e3*e.currentTime),this.__reportData.video_play_time=parseInt(1e3*e.currentTime),
this.reportCurRangeInfo({
curTime:this.__reportData.last_ms
}),this.triggerEvent("timeupdate",e);
},
onBeginPlay:function(){
var e=this.__reportData;
e.client_time_when_play=Math.round(Date.now()/1e3),e.click_play_button=1,!this.$refs.player.autoplay&&this.recoverPlaybackRate(),
this.triggerEvent("beginPlay");
},
onDurationchange:function(){
this.$refs.player.autoplay&&this.recoverPlaybackRate();
},
onEnterFullscreen:function(){
this.$refs.player.needFeFullscreen&&K.supportImmersiveMode&&(this.__preventResize=!0,
N.currentMpInfo({
disableShowFinderLiveTopBar:!0,
isDisableMenuHeader:!0,
itemShowType:"16"
}));
},
onExitFullscreen:function(){
var e=this;
this.$refs.player.needFeFullscreen&&K.supportImmersiveMode&&(document.body.style.backgroundColor=null,
N.currentMpInfo({
disableShowFinderLiveTopBar:!1,
isDisableMenuHeader:!1,
itemShowType:window.item_show_type
}),this.__resumeResizeTimeoutId&&clearTimeout(this.__resumeResizeTimeoutId),this.__resumeResizeTimeoutId=setTimeout(function(){
e.__resumeResizeTimeoutId=null,e.__preventResize=!1;
},500));
},
onFullscreenchange:function(e){
if("immersive"===e.type||"samelayer"===e.type&&K.supportImmersiveMode||"frontend"===e.type)if(e.state){
if(document.body.style.backgroundColor="#000",("immersive"===e.type||this.$refs.player.enableWcSlPlayerFullscreenAfterOrientationChange)&&this.onEnterFullscreen(),
this.setVideoShareInfo(),this.setVideoMenuItems(),q.hideCurrentMpInfo(),this.setOp23444ReportExData({
FullscreenType:2
}),this.setReload23445ReportExData({
FullscreenType:2
}),"immersive"!==e.type){
var t=!this.opt.useImmersiveMode&&"samelayer"===e.type&&this.$refs.player&&this.$refs.player.enableWcSlPlayerFullscreenAfterOrientationChange;
this.reportOp23444({
EventType:t?15:11,
EventTime:this.getCurrentTimeMs(),
FullscreenType:t?3:2
}),this.__enterImmersiveModeTime=(new Date).getTime(),this.reportLeave23443({
EventType:2,
EventTime:this.getCurrentTimeMs(),
PagePlayTime:this.getRealPlayTime(),
PageStayTime:this.__enterImmersiveModeTime-this.__enterPageTime
});
}
"immersive"===e.type?Z.setSum(283598,0,1):"frontend"===e.type?Z.setSum(283598,1,1):Z.setSum(283598,2,1);
}else if(document.body.style.backgroundColor=null,this.recoverVideoShareInfo(),this.recoverVideoMenuItems(),
this.__enterPageTime=(new Date).getTime(),this.reportLeave23443({
EventType:3,
EventTime:this.getCurrentTimeMs(),
ImmersivePlayTime:this.getRealPlayTime(),
ImmersiveStayTime:this.__enterPageTime-this.__enterImmersiveModeTime
}),this.setOp23444ReportExData({
FullscreenType:1
}),this.setReload23445ReportExData({
FullscreenType:1
}),"immersive"!==e.type){
var t=!this.opt.useImmersiveMode&&"samelayer"===e.type&&this.$refs.player&&this.$refs.player.enableWcSlPlayerFullscreenAfterOrientationChange;
this.reportOp23444({
EventType:t?16:14,
EventTime:this.getCurrentTimeMs()
});
}
this.topStickyInfoStatus>0&&(e.state?this.$refs.player.resumeOperating():this.$refs.player.preventOperating()),
e.state&&(this.__kanReportData.has_full_screen=1),this.triggerEvent("fullscreenchange",e);
},
onOrientationStatusChange:function(){
if(this.fullscreenStatus&&this.$refs.player&&(this.opt.useImmersiveMode||!this.$refs.player.isWcSlPlayer||!this.$refs.player.enableWcSlPlayerFullscreenAfterOrientationChange)){
var e=0===this.orientationStatus?2:3;
this.setOp23444ReportExData({
FullscreenType:e
}),this.setReload23445ReportExData({
FullscreenType:e
}),this.reportOp23444({
EventType:0===this.orientationStatus?13:12,
EventTime:this.getCurrentTimeMs()
});
}
},
onShareVideo:function(){
var e=this;
if(this.opt.preview)return void window.weui.alert("?????????????????????????????????");
window.customShareSource=3,this.fullscreenStatus||this.setVideoShareInfo();
var t=function i(t){
var r=I.isIOS?!!(1*t.hasFocus):!t.hasFocus;
r||(D.remove("onWindowFocusChanged",i),e.fullscreenStatus||setTimeout(e.recoverVideoShareInfo,1e3),
setTimeout(function(){
return delete window.customShareSource;
},1e3));
};
D.on("onWindowFocusChanged",t),this.reportOp23444({
EventType:24,
EventTime:this.getCurrentTimeMs()
});
},
onPraiseVideo:function(){
return this.opt.preview?void window.weui.alert("?????????????????????????????????"):(this.playerOpt.isPraised=!this.playerOpt.isPraised,
this.playerOpt.isPraised?this.playerOpt.praiseNum++:this.playerOpt.praiseNum--,tt({
biz:this.opt.__biz,
vid:this.opt.vid,
type:this.playerOpt.isPraised?3:5,
styleType:6
}),void this.reportOp23444({
EventType:25,
EventTime:this.getCurrentTimeMs()
}));
},
onLikeVideo:function(e){
if(this.opt.preview)return void window.weui.alert("?????????????????????????????????");
var t=e&&1*e.recommend||!this.playerOpt.isLiked;
e&&e.comment?this.showToast("?????????"):!this.playerOpt.isLiked&&t?(this.playerOpt.likeNum++,
1*cgiData.item_show_type===5&&(this.$store.commit("SET_RECOMMEND_STATUS",{
hasRecommended:t
}),this.$store.commit("SET_RECOMMEND_NUM",{
recommendNum:this.playerOpt.likeNum
}))):this.playerOpt.isLiked&&!t&&(this.showToast("?????????"),this.playerOpt.likeNum--,
1*cgiData.item_show_type===5&&(this.$store.commit("SET_RECOMMEND_STATUS",{
hasRecommended:t
}),this.$store.commit("SET_RECOMMEND_NUM",{
recommendNum:this.playerOpt.likeNum
}))),this.playerOpt.isLiked=t,tt({
biz:this.opt.__biz,
vid:this.opt.vid,
mid:this.opt.mid,
idx:this.opt.idx,
comment:e&&e.comment||"",
type:t?4:6,
styleType:7,
onSuccess:function(){
mt(t,e&&e.comment||"");
},
onError:function(){
window.weui.alert(e&&e.comment&&e.comment.length>_t?"?????????????????????%s???".replace("%s",_t):"??????????????????????????????");
}
},cgiData),this.reportOp23444({
EventType:26,
EventTime:this.getCurrentTimeMs()
});
},
onOpenSourcePage:function(){
this.triggerEvent("openSourcePage"),this.reportOp23444({
EventType:20,
EventTime:this.getCurrentTimeMs()
});
},
onShowSubscribe:function(){
this.triggerEvent("showSubscribe"),this.reportOp23444({
EventType:22,
EventTime:this.getCurrentTimeMs()
});
},
onClickSubscribe:function(){
this.triggerEvent("clickSubscribe"),this.reportOp23444({
EventType:23,
EventTime:this.getCurrentTimeMs()
});
},
onFastForward:function(){
this.triggerEvent("fastForward"),this.reportOp23444({
EventType:17,
EventTime:this.getCurrentTimeMs()
});
},
onReplay:function(){
this.triggerEvent("replay");
},
onStatusChange:function(e){
var t=this.__reportData;
if("loading"!==e.status||"seeked"!==e.subStatus&&"seeking"!==e.subStatus||this.initPlayRangeInfo({
durationMs:t.duration_ms
}),"pause"===e.status?(this.computePlayTotalTimeForKyk(e),this.__kanReportData.pause_cnt+=1):"play"===e.status?this.__videoReportInfo.every_start_play_time=Math.round(1e3*e.currentTime):"end"===e.status&&(this.__videoReportInfo.every_end_play_time=Math.round(1e3*this.getCurrentTime()),
console.log("real play time"+this.__videoReportInfo.total_play_time),this.__kanReportData.play_time=this.__videoReportInfo.total_play_time,
this.__kanReportData.end_play_time=Date.parse(new Date)/1e3,this.__kanReportData.has_end=1,
C.reportKanData(this.__kanReportData)),"loading"===e.status&&"waiting"===e.subStatus){
var i=0;
"play"===e.preStatus?i=1:"loading"===e.preStatus&&"seeked"===e.preSubStatus?i=2:"loading"===e.preStatus&&"resolutionchange"===e.preSubStatus&&(i=3),
this.reportPerf23442({
EventType:2,
EventTime:this.getCurrentTimeMs(),
Definition:this.getCurrentDefinition(),
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||0,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||0,
BufferType:i
});
}
this.triggerEvent("statusChange",e);
},
onAfterReplay:function(){
this.triggerEvent("afterReplay");
},
onHandDragComplete:function(e){
this.reportOp23444({
EventType:8,
EventTime:this.getCurrentTimeMs(),
BarBefore:e.startDragVideoTime+"",
BarAfter:e.playTime+""
}),this.triggerEvent("handDragComplete",e);
},
onBarDragComplete:function(e){
this.triggerEvent("barDragComplete",e),this.reportOp23444({
EventType:7,
EventTime:this.getCurrentTimeMs(),
BarBefore:e.startDragVideoTime+"",
BarAfter:e.playTime+""
});
},
onEnd:function(){
var e=this.__vInfo,t=this.__reportData,i=e.dynamicData.data,r=this.getReportTypeBySceneType();
t.hasended=1,L.report({
step:7,
vid:this.opt.vid,
ext1:1e3*i.time,
traceid:this.getTraceId(),
orderid:this.getOrderid(),
type:r,
fromid:this.opt.fromid
}),this.opt.loop?(this.__reportedPv=!1,this.__reportData.replay=1,this.qqVideoReport({
step:3
})):this.triggerEvent("showEndContent"),this.triggerEvent("end",this.opt.loop),this.reportCurRangeInfo({
curTime:t.last_ms
}),this.initPlayRangeInfo({
durationMs:t.duration_ms
});
},
onError:function(e){
var t=this.__reportData,i=this.__monitorUid,r=this.__monitorUid2;
if(t.videoerror=!e||!e.errorcode||e.errorcode>5||e.errorcode<=0?46:e.errorcode+40,
this.opt.isMpVideo){
switch(this.__reportedPv||(this.__reportedPv=!0,this.triggerEvent("setMonitor",r,{
12:1
})),this.triggerEvent("setMonitor",r,{
14:1
}),1*e.errorcode){
case 1:
this.triggerEvent("setMonitor",r,{
15:1
});
break;

case 2:
this.triggerEvent("setMonitor",r,{
16:1
});
break;

case 3:
this.triggerEvent("setMonitor",r,{
17:1
});
break;

case 4:
this.triggerEvent("setMonitor",r,{
18:1
});
break;

case 5:
this.triggerEvent("setMonitor",r,{
19:1
});
break;

case 6:
this.triggerEvent("setMonitor",r,{
39:1
});
break;

default:
this.triggerEvent("setMonitor",r,{
20:1
});
}
this.triggerEvent("sendMonitor",r);
}else{
switch(this.__reportedPv||(this.__reportedPv=!0,this.triggerEvent("setMonitor",i,{
0:1
})),this.triggerEvent("setMonitor",i,{
2:1,
3:1
}),1*e.errorcode){
case 1:
this.triggerEvent("setMonitor",i,{
4:1
});
break;

case 2:
this.triggerEvent("setMonitor",i,{
5:1
});
break;

case 3:
this.triggerEvent("setMonitor",i,{
6:1
});
break;

case 4:
this.triggerEvent("setMonitor",i,{
7:1
});
break;

case 5:
this.triggerEvent("setMonitor",i,{
8:1
});
break;

default:
this.triggerEvent("setMonitor",i,{
9:1
});
}
this.triggerEvent("sendMonitor",i),this.triggerEvent("sendMonitor",r);
}
t.v_err_code=e.errorcode,this.showError(),this.qqVideoReport({
step:1999,
val:t.videoerror
}),this.initPlayRangeInfo({
durationMs:t.duration_ms
});
},
onFirstBufferingTime:function(e){
this.reportPerf23442({
EventType:1,
EventTime:this.getCurrentTimeMs(),
Definition:this.getCurrentDefinition(),
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||0,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||0,
BufferTime:e.bufferingTime
});
var t=void 0;
if(t=this.__hasFirstPlayed?3:this.$refs.player.autoplay?1:2,this.reportPlay23440({
PlayType:t
}),this.__kanReportData.start_play_time=Date.parse(new Date)/1e3,this.__hasFirstPlayed){
this.__kanReportData.replay_cnt+=1;
var i={
rec_expand:b.getParam("rec_expand")||"",
scene:b.getParam("scene")||"",
report_action:1,
vid:this.opt.vid,
end_play_time:0,
play_time:0,
has_end:0,
pause_cnt:0,
auto_play:this.opt.autoplay?1:0,
has_full_screen:this.fullscreenStatus?1:0
};
this.__videoReportInfo={
hasUnloadReport:!1,
hasApiReport:!1,
every_start_play_time:0,
every_end_play_time:0,
total_play_time:0
},this.__kanReportData=_extends(this.__kanReportData,i);
}else this.__hasFirstPlayed=!0;
this.triggerEvent("firstBufferingTime",e);
},
onPlayingBufferingTime:function(e){
this.reportPerf23442({
EventType:3,
EventTime:this.getCurrentTimeMs(),
Definition:this.getCurrentDefinition(),
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||0,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||0,
BufferTime:e.bufferingTime
}),this.triggerEvent("playingBufferingTime",e);
},
onFlowNotice:function(e){
this.reportPerf23442({
EventType:5,
EventTime:this.getCurrentTimeMs(),
Definition:this.getCurrentDefinition(),
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||0,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||0,
Traffic:e.flow
}),this.triggerEvent("flowNotice",e);
},
onUserplay:function(e){
this.triggerEvent("userplay",e);
var t=6;
1===e.tapType?t=4:2===e.tapType&&(t=2),this.reportOp23444({
EventType:t,
EventTime:this.getCurrentTimeMs()
});
},
onUserpause:function(e){
this.triggerEvent("userpause",_extends({
curTime:this.getCurrentTime()
},e));
var t=this.__reportData;
t.pause_num=(t.pause_num||0)+1;
var i=5;
1===e.tapType?i=3:2===e.tapType&&(i=1),this.reportOp23444({
EventType:i,
EventTime:this.getCurrentTimeMs()
});
},
onWaiting:function(e){
var t=this;
if(I.isWechat&&I.isAndroid&&I.gtVersion("7.0.16",1)){
var i={
"??????":"20003",
"??????":"10002",
"??????":"10003",
"??????":"10004"
},r={
WiFI:1,
"2G":2,
"3G":3,
"4G":4
};
e&&!function(){
for(var o=3,a=t.$refs.player,n=a.getResolutionInfo(),s=n?n.src:null,p=t.opt.auto.loadRetryTime,h=t.opt.auto.isShowTip,d=null,l=5e3,u=$(".js_auto_change_tip_mask")[0],c=void 0,_=void 0,m=t.__vInfo.dynamicData?t.__vInfo.dynamicData.data.ori_url_info.map(function(e){
var t=e.video_quality_wording,r=i[t];
return{
formatId:r,
src:e.url,
name:t
};
}):[],v=0;v<m.length;v++)"20003"===m[v].formatId&&(c=m[v].src),m[v].src===s&&(_=pt.formatIdMap[[m[v].formatId]]);
var f=function(e){
var i=$(".js_auto_change_tip")[0];
z.tap(i,function(){
t.opt.auto.isChangeAuto=!0,t.triggerEvent("autoTip",{
networkType:networkType,
DefinitionBefore:e.definitionBefore
});
});
},g=function(){
z.on(u,"tap",function(e){
e.cancelBubble=!0,a.autoChangeTip({
type:"autoChange",
option:"hide"
}),a.hideControlBar();
});
},y=function(){
d&&clearTimeout(d),d=setTimeout(function(){
a.autoChangeTip({
type:"autoChange",
option:"hide"
});
},l);
},w=function(){
a.hideControlBar(),a.autoChangeTip({
type:"autoChange",
option:"show"
}),h=!0;
var e=-1;
D.invoke("getNetworkType",{},function(t){
e=r[pt.netTypeMap[t.err_msg]]||0,("network_type:edge"==t.err_msg||"network_type:wwan"==t.err_msg)&&(t.detailtype||t.subtype)&&(e=r[t.detailtype]||r[t.subtype]);
}),f({
networkType:e,
definitionBefore:_
}),t.triggerEvent("showTip");
},T=e.action;
s!==c&&c&&(h||("changeToAuto"===T||++p>o?(w(),y(),g()):t.opt.auto.loadRetryTime+=1)),
t.opt.auto.isShowTip=h;
}();
}
},
onPlay:function(e){
var t=this;
this.opt.auto.isChangeAuto===!0&&this.opt.auto.isShowSuc===!1&&this.$refs.player.getResolutionInfo()&&this.$refs.player.getResolutionInfo().src.indexOf("m3u8")&&!function(){
var e=null,i=4e3,r=function(){
e&&clearTimeout(e),e=setTimeout(function(){
t.$refs.player.autoChangeTip({
type:"autoSuc",
option:"hide"
});
},i);
};
t.$refs.player.hideControlBar(),t.$refs.player.autoChangeTip({
type:"autoSuc",
option:"show"
}),r(),t.opt.auto.isShowSuc=!0;
}(),this.__pauseTimestamp&&(this.reportOp23444({
EventType:18,
EventTime:this.getCurrentTimeMs(),
PauseTime:Date.now()-this.__pauseTimestamp
}),delete this.__pauseTimestamp),this.triggerEvent("play",e);
},
onPause:function(e){
this.triggerEvent("pause",e),this.__pauseTimestamp=Date.now();
},
onMidPlayClick:function(){
this.reportOp23444({
EventType:19,
EventTime:this.getCurrentTimeMs()
});
},
onAfterCheckVideoFit:function(e){
var t={
97:1
};
e.needToFit===!0&&(t[98]=1,t[100]=1,e.os.ios&&(t[103]=1),e.os.android&&(t[106]=1),
e.supportObjectFit===!0&&(t[101]=1,e.os.ios&&(t[104]=1),e.os.android&&(t[107]=1)));
var i=this.__monitorUid;
this.triggerEvent("setMonitor",i,t),this.triggerEvent("sendMonitor",i);
},
onBindError:function(e){
this.triggerEvent("bindError",e);
},
onRateChange:function(e){
this.triggerEvent("rateChange",e),"changed"===e.action&&(this.cacheData(),this.reportOp23444({
EventType:9,
EventTime:this.getCurrentTimeMs(),
SpeedBefore:e.rateBefore+"",
SpeedAfter:e.rateAfter+""
}));
},
onResolutionChange:function(e){
"changed"===e.action&&(pt.playerStatus.formatId=e.infoAfter&&e.infoAfter.formatId||null,
_(),this.reportOp23444({
EventType:10,
EventTime:this.getCurrentTimeMs(),
DefinitionBefore:pt.formatIdMap[e.infoBefore.formatId]+"",
DefinitionAfter:pt.formatIdMap[e.infoAfter.formatId]+""
})),this.triggerEvent("resolutionChange",e),this.setPerf23442ReportExData({
DefinitionBefore:pt.formatIdMap[e.infoBefore.formatId],
VideoWidthBefore:e.infoBefore.width,
VideoHeightBefore:e.infoBefore.height
});
},
onBrightnessChange:function(e){
this.triggerEvent("brightnessChange",e);
},
onVolumeChange:function(e){
this.triggerEvent("volumeChange",e);
},
onProfileJump:function(e){
this.triggerEvent("profileJump",e),this.reportOp23444({
EventType:21,
EventTime:this.getCurrentTimeMs()
});
},
onProcessStateChange:function(e){
this.triggerEvent("processStateChange",e);
},
onCanplay:function(e){
this.triggerEvent("canplay",e);
},
onShowControlBar:function(e){
this.triggerEvent("showControlBar",e);
},
onHideControlBar:function(e){
this.triggerEvent("hideControlBar",e);
},
onShowMenu:function(e){
this.triggerEvent("showMenu",e);
},
triggerEvent:function(e){
for(var t=[].concat(this.$refs.innerPlugins||[],this.$refs.coverPlugins||[],this.$refs.controlPlugins||[],this.__legacyPlugins),i=this.__blockPlugin[e]||this.__blockPlugin.all,r=void 0,o=void 0,a=0,n=arguments.length,s=Array(n>1?n-1:0),p=1;n>p;p++)s[p-1]=arguments[p];
if(i&&"function"==typeof i.recv&&(r=i.recv.apply(i,[e].concat(s)),"[object Object]"==Object.prototype.toString.call(r)?(a|=r.code,
o=r.data):a|=r,1&a))return o;
for(var h=0,d=t.length;d>h;++h){
try{
var l;
r=(l=t[h]).recv.apply(l,[e].concat(s));
}catch(u){
console.error("player controller plugin error:",u,e,s);
}
if("[object Object]"==Object.prototype.toString.call(r)?(a|=r.code,o=r.data):a|=r,
2&a)break;
}
if(!(this._blockInnerHandler||4&a)){
var c=this[e+"InnerHandler"];
c&&(r=c.apply(this,[e].concat(s)),"[object Object]"==Object.prototype.toString.call(r)&&(o=r.data));
}
return 8&a||this.emitEvent.apply(this,[e.replace(/[A-Z]/g,function(e){
return"-"+e.toLowerCase();
})].concat(s)),o;
},
emitEvent:function(e){
for(var t=arguments.length,i=Array(t>1?t-1:0),r=1;t>r;r++)i[r-1]=arguments[r];
e&&this.$emit.apply(this,[e].concat(i));
},
setBlockPlugin:function(e,t){
this.__blockPlugin[e]=t;
},
replaceByTxVideo:function(){
var e=this;
if(!this.opt.ckey&&!this.opt.isMpVideo){
this.__isShowTx=!0;
var t=$(this.$el),i=t.attr("id");
i||(i="js_tx_video_container_"+Math.random(),t.attr("id",i));
var r=J&&J.top||60;
this.opt.useImmersiveMode&&(t.css("padding-top",r+"px"),t.css("padding-bottom","60px")),
D.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!0
}),F.createTxVideo({
win:window,
containerId:i,
vid:this.opt.vid,
width:this.opt.useImmersiveMode?window.screen.width:this.__gWidth,
height:this.opt.useImmersiveMode?window.screen.height-r-60:this.__gHeight,
autoplay:!1,
allowFullScreen:!0,
onSuccess:function(t){
e.__txPlayer=t.player,e.__dataCount=e.__targetDataCount,e.videoDataReady();
},
onError:function(){}
});
var o=this.__monitorUid,a=this.$store.state.cgiData;
return 1==a.is_login?this.triggerEvent("setMonitor",o,{
38:1
}):this.triggerEvent("setMonitor",o,{
39:1
}),this.triggerEvent("sendMonitor",o),!0;
}
return!1;
},
getPlayer:function(){
return this.$refs.player;
},
supportWcSlPlayer:function(){
return!!this.$refs.player&&this.$refs.player.supportWcSlPlayer();
},
initPlayRangeInfo:function(e){
function t(e,t){
for(var i=[{
start:0,
end:e,
hasReport:!1
}];;){
var r=i[i.length-1];
if(r.end>=t)break;
i.push({
start:r.end,
end:r.end+e,
hasReport:!1
});
}
return i;
}
if(!(e.durationMs<=0)){
var i=this.opt.totalRange;
this.__playRangeInfo=1e3*i>=e.durationMs?t(1e3,e.durationMs):t(Math.ceil(e.durationMs/i),e.durationMs);
}
},
reportCurRangeInfo:function(e){
var t=this.__playRangeInfo;
if(t&&0!==t.length)for(var i=t.length,r=0;i>r;r++){
var o=t[r];
if(o.start<e.curTime&&o.end>=e.curTime){
o.hasReport||(o.hasReport=!0,L.report({
step:14,
vid:this.opt.vid,
hit_bizuin:this.opt.hitBizuin,
hit_vid:this.opt.hitVid,
traceid:this.getTraceId(),
orderid:this.getOrderid(),
ori_status:this.getOriStatus(),
type:this.getReportTypeBySceneType(),
fromid:this.getFromid(),
total_range:i,
current_range:r+1,
duration:this.__reportData.duration_ms||t[i-1].end
}));
break;
}
}
},
getTraceId:function(){
return 0;
},
getOrderid:function(){
return 0;
},
getOriStatus:function(){
return this.opt.oriStatus;
},
getFromid:function(){
return this.opt.fromid;
},
qqVideoReport:function(e){
var t={
step:e.step,
loadwait:e.loadwait||0,
val:e.val||0,
vid:this.opt.vid
};
6==e.step&&(t.vt=this.__reportData.vt),U.qqvideo_common_report(t);
},
showEndContentInnerHandler:function(){
this.$refs.player.isWcSlPlayer?this.$refs.player.showCover():this.$refs.player.resetVideo(),
this.$refs.player.hideMidPlayBtn();
},
danmuPluginInitedInnerHandler:function(){
this.__hasReport23439Enter&&this.reportEnter23439();
},
getPlayerReportData:function(){
var e=this.__reportData,t=this.$refs.player;
t&&(e.play_time=this.getRealPlayTime(),e.full_screen=this.fullscreenStatus?1:0,e.quick_play=t.hasSeeked()?1:0,
e.drag_times=t.getSeekedTimes().join(":|:")),e.webviewid=L.getWebviewid();
},
pause:function(){
this.$refs.player&&this.$refs.player.pause4outer();
},
play:function(){
this.$refs.player&&this.$refs.player.play4outer();
},
topStickyInfoPlay:function(){
var e=this.$refs.player;
e&&(e.isEnd()?e.replay():e.play4outer());
},
getRealPlayTime:function(){
var e=0,t=this.$refs.player;
return t&&(e=Math.round(1e3*t.getPlayTotalTime())),e;
},
getCurrentTime:function(){
var e=0,t=this.$refs.player;
return t&&(e=t.getCurTime()),e;
},
getCurrentTimeMs:function(){
return Math.round(1e3*this.getCurrentTime());
},
getVideoData:function(){
return this.__vInfo&&this.__vInfo.dynamicData&&this.__vInfo.dynamicData.data?this.__vInfo.dynamicData.data:null;
},
getReportData:function(){
return this.__reportData;
},
extendMpReportData:function(e){
_extends(this.__reportData,e);
},
getMpReportData:function(){
return this.__reportData;
},
recoverPlaybackRate:function(){
var e=this,t=this.__vInfo.status,i=t&&t.playbackRate||1;
this.$refs.player.setPlaybackRate(i),this.$refs.player.isWcSlPlayer&&setTimeout(function(){
return e.$refs.player.setPlaybackRate(i);
},250);
},
setLoop:function(e){
this.opt&&(this.opt.loop=e),this.playerOpt&&(this.playerOpt.loop=e);
},
setAutoplay:function(e){
this.$refs.player&&(this.$refs.player.autoplay=e);
},
setVideoSize:function(e){
this.playerOpt&&("number"==typeof e.width&&(this.playerOpt.width=e.width),"number"==typeof e.height&&(this.playerOpt.height=e.height));
},
setVideoTopSticky:function(){
var e=this,t=this.$refs.player,i=-this.$el.getBoundingClientRect().top;
if(!t||0>i)return this.unsetVideoTopSticky();
var r=t.isPlay()||this.topStickyExpendWhenPaused,o=this.opt.height-3*this.opt.width/4,a=Math.max(0,Math.min(i,o)),n=r?this.opt.height-a:Math.max(this.opt.height-i,72);
this.wrapStyle={
position:"fixed",
zIndex:9,
top:0,
transition:this.__isPlayingWhenLastStick!==r?"height .2s ease-out":"height 0s",
height:n+"px"
},this.supportWcSlPlayer()&&!function(){
var i=1-a/e.opt.height,s=e.__isPlayingWhenLastStick!==r?"transform .25s":"transform 0s",p=r&&0>o?"transform-origin .25s linear":"transform-origin 0s";
(n>72||0===e.topStickyInfoStatus)&&(e.videoStyle={
bottom:0,
position:"absolute",
transition:p+", "+s,
transform:"scale3d("+i+", "+i+", 1.1)",
transformOrigin:"bottom"
}),n>72?e.resetVideoTopStickyInfo():0===e.topStickyInfoStatus&&(e.__topStickyAnimTimer=setTimeout(function(){
if(e.topStickyInfoStatus>200){
var i=135/e.opt.width;
e.videoStyle={
bottom:0,
position:"absolute",
transition:(0>o?p:"transform-origin .2s")+", transform .25s",
transform:"scale3d("+i+", "+i+", 1.1) translate(0, "+(e.opt.height*i-n)+"px)",
transformOrigin:"left bottom",
zIndex:999
},e.__topStickyAnimTimer=setTimeout(function(){
e.setTopStickyInfoStatus({
status:t.isEnd()?2:1
}),e.__topStickyAnimTimer=null;
},200),e.setTopStickyInfoStatus({
status:t.isEnd()?204:203
});
}
},200),t.preventOperating(),e.setTopStickyInfoStatus({
status:t.isEnd()?202:201
})),e.__isPlayingWhenLastStick=r;
}();
},
unsetVideoTopSticky:function(){
this.wrapStyle=null,this.supportWcSlPlayer()&&(this.videoStyle=null,this.resetVideoTopStickyInfo());
},
resetVideoTopStickyInfo:function(){
if(this.topStickyInfoStatus>0){
var e=this.$refs.player;
e&&e.resumeOperating(),this.setTopStickyInfoStatus({
status:0
}),this.__topStickyAnimTimer&&(clearTimeout(this.__topStickyAnimTimer),this.__topStickyAnimTimer=null);
}
},
enableTopSticky:function(){
this.__videoTopStickyEnabled||(window.addEventListener("scroll",this.setVideoTopSticky),
this.__videoTopStickyEnabled=!0);
},
disableTopSticky:function(){
this.__videoTopStickyEnabled&&(window.removeEventListener("scroll",this.setVideoTopSticky),
this.__videoTopStickyEnabled=!1);
},
setVideoShareInfo:function(){
if(this.playerOpt){
var e=this.$store.state.cgiData;
if("0"===window.item_show_type){
var t=["https://mp.weixin.qq.com/s?item_show_type=16","&vid=",this.opt.vid,"&__biz=",this.opt.__biz,"&mid=",this.opt.mid,"&idx=",this.opt.idx,"&sn=",e.sn||"","#wechat_redirect"].join("");
window.customShareInfo={
vid:this.opt.vid,
link:t,
img_url:this.playerOpt.cover,
img_width:"120",
img_height:"90",
forbid_msg:this.opt.preview?"?????????????????????#op#??????":e.isPaySubscribe?"?????????????????????????????????#op#":null
},N.currentMpInfo({
vid:this.opt.vid,
duration:this.playerOpt.duration,
VideoWidth:this.playerOpt&&this.playerOpt.videoWidth||120,
VideoHeight:this.playerOpt&&this.playerOpt.videoHeight||90,
videoCover:this.playerOpt.cover,
customSnapShot:I.isIOS&&this.__floatCoverBase64||"",
isMenuShowBrandInfo:0,
itemShowType:"16"
});
}else if("5"===window.item_show_type){
var t=["https://mp.weixin.qq.com/s?t=pages/video_detail_new&item_show_type=16&scene=#scene#","&vid=",this.opt.vid,"&__biz=",this.opt.__biz,"&mid=",this.opt.mid,"&idx=",this.opt.idx,"&sn=",e.sn||"","&vidsn=",e.vidsn||"","#wechat_redirect"].join("");
window.customShareInfo={
vid:this.opt.vid,
link:t,
img_url:this.playerOpt.cover,
img_width:"120",
img_height:"90",
forbid_msg:this.opt.preview?"?????????????????????#op#??????":e.isPaySubscribe?"?????????????????????????????????#op#":null
},N.currentMpInfo({
customSnapShot:I.isIOS&&this.__floatCoverBase64||"",
isMenuShowBrandInfo:0,
itemShowType:"16"
});
}
Q(!1),q.setTopBar();
}
},
recoverVideoShareInfo:function(){
this.playerOpt&&("0"===window.item_show_type?(delete window.customShareInfo,N.currentMpInfo({
vid:"",
duration:0,
videoWidth:0,
videoHeight:0,
videoCover:"",
customSnapShot:"",
isMenuShowBrandInfo:1,
itemShowType:"0"
})):"5"===window.item_show_type&&N.currentMpInfo({
customSnapShot:"",
isMenuShowBrandInfo:1,
itemShowType:"5"
}),Q(!0),q.setTopBar());
},
setVideoMenuItems:function(){
this.fullscreenStatus&&this.$refs.player&&this.$refs.player.needFeFullscreen&&K.supportImmersiveMode&&(this.opt.preview?D.invoke("hideMenuItems",{
menuList:["menuItem:share:appMessage"]
}):this.banOprStatus||this.$store.state.cgiData.isPaySubscribe?(D.invoke("hideMenuItems",{
menuList:["menuItem:share:appMessage","menuItem:share:timeline"]
}),D.invoke("handleHaokanAction",{
action:ut,
permission:0
})):(this.banOprStatus||D.invoke("showMenuItems",{
menuList:["menuItem:share:appMessage","menuItem:share:timeline"]
}),D.invoke("handleHaokanAction",{
action:ut,
permission:1,
recommend:this.playerOpt.isLiked?1:0
})));
},
recoverVideoMenuItems:function(){
this.opt.preview?D.invoke("showMenuItems",{
menuList:["menuItem:share:appMessage"]
}):(D.invoke("showMenuItems",{
menuList:["menuItem:share:appMessage","menuItem:share:timeline"]
}),D.invoke("handleHaokanAction",{
action:ut,
permission:1,
recommend:window.__article_liked__?1:0
}));
},
getFloatCoverBase64:function(e){
var t=this,i=new Image;
i.crossOrigin="anonymous",i.onload=function(){
i.onload=null,i.onerror=null;
try{
var e=i.naturalWidth||i.width,r=i.naturalHeight||i.height,o=document.createElement("canvas"),a=o.getContext("2d"),n=640,p=1280;
o.width=n,o.height=p,o.style.width=n+"px",o.style.height=p+"px";
var h=s("contain",n,p,e,r);
a.drawImage.apply(a,[i].concat(_toConsumableArray(h))),a.beginPath(),a.moveTo(n/2-50,p/2-60),
a.lineTo(n/2-50,p/2+60),a.lineTo(n/2+50,p/2),a.fillStyle="rgba(255,255,255,0.8)",
a.strokeStyle="rgba(255,255,255,0.8)",a.shadowBlur=100,a.shadowColor="rgba(0,0,0,0.5)",
a.fill(),a.closePath(),a.stroke(),t.__floatCoverBase64=o.toDataURL("image/jpeg",0),
t.__floatCoverBase64=t.__floatCoverBase64.replace("data:image/jpeg;base64,",""),
t.opt.useImmersiveMode&&t.setVideoShareInfo();
}catch(d){
t.__floatCoverBase64="",console.error(d);
}
},i.onerror=function(){
t.__floatCoverBase64="",i.onload=null,i.onerror=null;
},i.src=e;
},
showToast:function(e){
var t=this;
this.__toastTimeoutId&&clearTimeout(this.__toastTimeoutId),this.toastTips=e,this.__toastTimeoutId=setTimeout(function(){
t.__toastTimeoutId=null,t.toastTips="";
},1e3);
},
reportPv23447:function(){
var e=this.$store.state.cgiData;
R({
type:"POST",
timeout:2e3,
url:["https://mp.weixin.qq.com/s?action=report&item_show_type=16","&vid=",this.opt.vid,"&__biz=",this.opt.__biz,"&mid=",this.opt.mid,"&idx=",this.opt.idx,"&sn=",e.sn||""].join("")
});
},
computePlayTotalTimeForKyk:function(e){
this.__videoReportInfo.every_end_play_time=Math.round(1e3*e.currentTime),this.__videoReportInfo.total_play_time+=this.__videoReportInfo.every_end_play_time-this.__videoReportInfo.every_start_play_time,
console.log("real play time**********"+this.__videoReportInfo.total_play_time);
},
getCurrentDefinition:function(){
return pt.playerStatus.formatId?pt.formatIdMap[pt.playerStatus.formatId]:this.__vInfo.dynamicData?pt.formatIdMap[this.__vInfo.dynamicData.data.formatid]:0;
}
})
});
return r(),u(),{
mpVideoPlayer:vt,
getFormatTime:B._getFormatTime,
getHashByVid:p,
getCoverByVid:h,
getQQVideoStaticInfo:n
};
});function _typeof(t){
return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t;
}
define("pages_new/3rd/vuex.js",[],function(){
"use strict";
function t(t){
function e(){
var t=this.$options;
t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store);
}
var n=Number(t.version.split(".")[0]);
if(n>=2)t.mixin({
beforeCreate:e
});else{
var r=t.prototype._init;
t.prototype._init=function(t){
void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,r.call(this,t);
};
}
}
function e(t){
L&&(t._devtoolHook=L,L.emit("vuex:init",t),L.on("vuex:travel-to-state",function(e){
t.replaceState(e);
}),t.subscribe(function(t,e){
L.emit("vuex:mutation",t,e);
},{
prepend:!0
}),t.subscribeAction(function(t,e){
L.emit("vuex:action",t,e);
},{
prepend:!0
}));
}
function n(t,e){
return t.filter(e)[0];
}
function r(t,e){
if(void 0===e&&(e=[]),null===t||"object"!==("undefined"==typeof t?"undefined":_typeof(t)))return t;
var o=n(e,function(e){
return e.original===t;
});
if(o)return o.copy;
var i=Array.isArray(t)?[]:{};
return e.push({
original:t,
copy:i
}),Object.keys(t).forEach(function(n){
i[n]=r(t[n],e);
}),i;
}
function o(t,e){
Object.keys(t).forEach(function(n){
return e(t[n],n);
});
}
function i(t){
return null!==t&&"object"===("undefined"==typeof t?"undefined":_typeof(t));
}
function a(t){
return t&&"function"==typeof t.then;
}
function s(t,e){
if(!t)throw new Error("[vuex] "+e);
}
function u(t,e){
return function(){
return t(e);
};
}
function c(t,e,n){
if(f(t,n),e.update(n),n.modules)for(var r in n.modules){
if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");
c(t.concat(r),e.getChild(r),n.modules[r]);
}
}
function f(t,e){
Object.keys(q).forEach(function(n){
if(e[n]){
var r=q[n];
o(e[n],function(e,o){
s(r.assert(e),l(t,n,o,e,r.expected));
});
}
});
}
function l(t,e,n,r,o){
var i=e+" should be "+o+' but "'+e+"."+n+'"';
return t.length>0&&(i+=' in module "'+t.join(".")+'"'),i+=" is "+JSON.stringify(r)+".";
}
function p(t,e,n){
return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){
var n=e.indexOf(t);
n>-1&&e.splice(n,1);
};
}
function d(t,e){
t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),
t._modulesNamespaceMap=Object.create(null);
var n=t.state;
m(t,n,[],t._modules.root,!0),h(t,n,e);
}
function h(t,e,n){
var r=t._vm;
t.getters={},t._makeLocalGettersCache=Object.create(null);
var i=t._wrappedGetters,a={};
o(i,function(e,n){
a[n]=u(e,t),Object.defineProperty(t.getters,n,{
get:function(){
return t._vm[n];
},
enumerable:!0
});
});
var s=U.config.silent;
U.config.silent=!0,t._vm=new U({
data:{
$$state:e
},
computed:a
}),U.config.silent=s,t.strict&&w(t),r&&(n&&t._withCommit(function(){
r._data.$$state=null;
}),U.nextTick(function(){
return r.$destroy();
}));
}
function m(t,e,n,r,o){
var i=!n.length,a=t._modules.getNamespace(n);
if(r.namespaced&&(t._modulesNamespaceMap[a]&&console.error("[vuex] duplicate namespace "+a+" for the namespaced module "+n.join("/")),
t._modulesNamespaceMap[a]=r),!i&&!o){
var s=x(e,n.slice(0,-1)),u=n[n.length-1];
t._withCommit(function(){
u in s&&console.warn('[vuex] state field "'+u+'" was overridden by a module with the same name at "'+n.join(".")+'"'),
U.set(s,u,r.state);
});
}
var c=r.context=v(t,a,n);
r.forEachMutation(function(e,n){
var r=a+n;
g(t,r,e,c);
}),r.forEachAction(function(e,n){
var r=e.root?n:a+n,o=e.handler||e;
b(t,r,o,c);
}),r.forEachGetter(function(e,n){
var r=a+n;
_(t,r,e,c);
}),r.forEachChild(function(r,i){
m(t,e,n.concat(i),r,o);
});
}
function v(t,e,n){
var r=""===e,o={
dispatch:r?t.dispatch:function(n,r,o){
var i=A(n,r,o),a=i.payload,s=i.options,u=i.type;
return s&&s.root||(u=e+u,t._actions[u])?t.dispatch(u,a):void console.error("[vuex] unknown local action type: "+i.type+", global type: "+u);
},
commit:r?t.commit:function(n,r,o){
var i=A(n,r,o),a=i.payload,s=i.options,u=i.type;
return s&&s.root||(u=e+u,t._mutations[u])?void t.commit(u,a,s):void console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+u);
}
};
return Object.defineProperties(o,{
getters:{
get:r?function(){
return t.getters;
}:function(){
return y(t,e);
}
},
state:{
get:function(){
return x(t.state,n);
}
}
}),o;
}
function y(t,e){
if(!t._makeLocalGettersCache[e]){
var n={},r=e.length;
Object.keys(t.getters).forEach(function(o){
if(o.slice(0,r)===e){
var i=o.slice(r);
Object.defineProperty(n,i,{
get:function(){
return t.getters[o];
},
enumerable:!0
});
}
}),t._makeLocalGettersCache[e]=n;
}
return t._makeLocalGettersCache[e];
}
function g(t,e,n,r){
var o=t._mutations[e]||(t._mutations[e]=[]);
o.push(function(e){
n.call(t,r.state,e);
});
}
function b(t,e,n,r){
var o=t._actions[e]||(t._actions[e]=[]);
o.push(function(e){
var o=n.call(t,{
dispatch:r.dispatch,
commit:r.commit,
getters:r.getters,
state:r.state,
rootGetters:t.getters,
rootState:t.state
},e);
return a(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){
throw t._devtoolHook.emit("vuex:error",e),e;
}):o;
});
}
function _(t,e,n,r){
return t._wrappedGetters[e]?void console.error("[vuex] duplicate getter key: "+e):void(t._wrappedGetters[e]=function(t){
return n(r.state,r.getters,t.state,t.getters);
});
}
function w(t){
t._vm.$watch(function(){
return this._data.$$state;
},function(){
s(t._committing,"do not mutate vuex store state outside mutation handlers.");
},{
deep:!0,
sync:!0
});
}
function x(t,e){
return e.reduce(function(t,e){
return t[e];
},t);
}
function A(t,e,n){
return i(t)&&t.type&&(n=e,e=t,t=t.type),s("string"==typeof t,"expects string as the type, but found "+("undefined"==typeof t?"undefined":_typeof(t))+"."),
{
type:t,
payload:e,
options:n
};
}
function j(e){
return U&&e===U?void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):(U=e,
void t(U));
}
function O(t){
return M(t)?Array.isArray(t)?t.map(function(t){
return{
key:t,
val:t
};
}):Object.keys(t).map(function(e){
return{
key:e,
val:t[e]
};
}):[];
}
function M(t){
return Array.isArray(t)||i(t);
}
function $(t){
return function(e,n){
return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n);
};
}
function E(t,e,n){
var r=t._modulesNamespaceMap[n];
return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r;
}
function C(t){
void 0===t&&(t={});
var e=t.collapsed;
void 0===e&&(e=!0);
var n=t.filter;
void 0===n&&(n=function(){
return!0;
});
var o=t.transformer;
void 0===o&&(o=function(t){
return t;
});
var i=t.mutationTransformer;
void 0===i&&(i=function(t){
return t;
});
var a=t.actionFilter;
void 0===a&&(a=function(){
return!0;
});
var s=t.actionTransformer;
void 0===s&&(s=function(t){
return t;
});
var u=t.logMutations;
void 0===u&&(u=!0);
var c=t.logActions;
void 0===c&&(c=!0);
var f=t.logger;
return void 0===f&&(f=console),function(t){
var l=r(t.state);
"undefined"!=typeof f&&(u&&t.subscribe(function(t,a){
var s=r(a);
if(n(t,l,s)){
var u=G(),c=i(t),p="mutation "+t.type+u;
k(f,p,e),f.log("%c prev state","color: #9E9E9E; font-weight: bold",o(l)),f.log("%c mutation","color: #03A9F4; font-weight: bold",c),
f.log("%c next state","color: #4CAF50; font-weight: bold",o(s)),S(f);
}
l=s;
}),c&&t.subscribeAction(function(t,n){
if(a(t,n)){
var r=G(),o=s(t),i="action "+t.type+r;
k(f,i,e),f.log("%c action","color: #03A9F4; font-weight: bold",o),S(f);
}
}));
};
}
function k(t,e,n){
var r=n?t.groupCollapsed:t.group;
try{
r.call(t,e);
}catch(o){
t.log(e);
}
}
function S(t){
try{
t.groupEnd();
}catch(e){
t.log("?????? log end ??????");
}
}
function G(){
var t=new Date;
return" @ "+P(t.getHours(),2)+":"+P(t.getMinutes(),2)+":"+P(t.getSeconds(),2)+"."+P(t.getMilliseconds(),3);
}
function N(t,e){
return new Array(e+1).join(t);
}
function P(t,e){
return N("0",e-t.toString().length)+t;
}
var V="undefined"!=typeof window?window:"undefined"!=typeof global?global:{},L=V.__VUE_DEVTOOLS_GLOBAL_HOOK__,H=function(t,e){
this.runtime=e,this._children=Object.create(null),this._rawModule=t;
var n=t.state;
this.state=("function"==typeof n?n():n)||{};
},F={
namespaced:{
configurable:!0
}
};
F.namespaced.get=function(){
return!!this._rawModule.namespaced;
},H.prototype.addChild=function(t,e){
this._children[t]=e;
},H.prototype.removeChild=function(t){
delete this._children[t];
},H.prototype.getChild=function(t){
return this._children[t];
},H.prototype.hasChild=function(t){
return t in this._children;
},H.prototype.update=function(t){
this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),
t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters);
},H.prototype.forEachChild=function(t){
o(this._children,t);
},H.prototype.forEachGetter=function(t){
this._rawModule.getters&&o(this._rawModule.getters,t);
},H.prototype.forEachAction=function(t){
this._rawModule.actions&&o(this._rawModule.actions,t);
},H.prototype.forEachMutation=function(t){
this._rawModule.mutations&&o(this._rawModule.mutations,t);
},Object.defineProperties(H.prototype,F);
var T=function(t){
this.register([],t,!1);
};
T.prototype.get=function(t){
return t.reduce(function(t,e){
return t.getChild(e);
},this.root);
},T.prototype.getNamespace=function(t){
var e=this.root;
return t.reduce(function(t,n){
return e=e.getChild(n),t+(e.namespaced?n+"/":"");
},"");
},T.prototype.update=function(t){
c([],this.root,t);
},T.prototype.register=function(t,e,n){
var r=this;
void 0===n&&(n=!0),f(t,e);
var i=new H(e,n);
if(0===t.length)this.root=i;else{
var a=this.get(t.slice(0,-1));
a.addChild(t[t.length-1],i);
}
e.modules&&o(e.modules,function(e,o){
r.register(t.concat(o),e,n);
});
},T.prototype.unregister=function(t){
var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);
return r?void(r.runtime&&e.removeChild(n)):void console.warn("[vuex] trying to unregister module '"+n+"', which is not registered");
},T.prototype.isRegistered=function(t){
var e=this.get(t.slice(0,-1)),n=t[t.length-1];
return e.hasChild(n);
};
var U,D={
assert:function(t){
return"function"==typeof t;
},
expected:"function"
},R={
assert:function(t){
return"function"==typeof t||"object"===("undefined"==typeof t?"undefined":_typeof(t))&&"function"==typeof t.handler;
},
expected:'function or object with "handler" function'
},q={
getters:D,
mutations:D,
actions:R
},B=function Y(t){
var n=this;
void 0===t&&(t={}),!U&&"undefined"!=typeof window&&window.Vue&&j(window.Vue),s(U,"must call Vue.use(Vuex) before creating a store instance."),
s("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser."),
s(this instanceof Y,"store must be called with the new operator.");
var r=t.plugins;
void 0===r&&(r=[]);
var o=t.strict;
void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],
this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new T(t),
this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new U,
this._makeLocalGettersCache=Object.create(null);
var i=this,a=this,u=a.dispatch,c=a.commit;
this.dispatch=function(t,e){
return u.call(i,t,e);
},this.commit=function(t,e,n){
return c.call(i,t,e,n);
},this.strict=o;
var f=this._modules.root.state;
m(this,f,[],this._modules.root),h(this,f),r.forEach(function(t){
return t(n);
});
var l=void 0!==t.devtools?t.devtools:U.config.devtools;
l&&e(this);
},J={
state:{
configurable:!0
}
};
J.state.get=function(){
return this._vm._data.$$state;
},J.state.set=function(){
s(!1,"use store.replaceState() to explicit replace store state.");
},B.prototype.commit=function(t,e,n){
var r=this,o=A(t,e,n),i=o.type,a=o.payload,s=o.options,u={
type:i,
payload:a
},c=this._mutations[i];
return c?(this._withCommit(function(){
c.forEach(function(t){
t(a);
});
}),this._subscribers.slice().forEach(function(t){
return t(u,r.state);
}),void(s&&s.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools"))):void console.error("[vuex] unknown mutation type: "+i);
},B.prototype.dispatch=function(t,e){
var n=this,r=A(t,e),o=r.type,i=r.payload,a={
type:o,
payload:i
},s=this._actions[o];
if(!s)return void console.error("[vuex] unknown action type: "+o);
try{
this._actionSubscribers.slice().filter(function(t){
return t.before;
}).forEach(function(t){
return t.before(a,n.state);
});
}catch(u){
console.warn("[vuex] error in before action subscribers: "),console.error(u);
}
var c=s.length>1?Promise.all(s.map(function(t){
return t(i);
})):s[0](i);
return new Promise(function(t,e){
c.then(function(e){
try{
n._actionSubscribers.filter(function(t){
return t.after;
}).forEach(function(t){
return t.after(a,n.state);
});
}catch(r){
console.warn("[vuex] error in after action subscribers: "),console.error(r);
}
t(e);
},function(t){
try{
n._actionSubscribers.filter(function(t){
return t.error;
}).forEach(function(e){
return e.error(a,n.state,t);
});
}catch(r){
console.warn("[vuex] error in error action subscribers: "),console.error(r);
}
e(t);
});
});
},B.prototype.subscribe=function(t,e){
return p(t,this._subscribers,e);
},B.prototype.subscribeAction=function(t,e){
var n="function"==typeof t?{
before:t
}:t;
return p(n,this._actionSubscribers,e);
},B.prototype.watch=function(t,e,n){
var r=this;
return s("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){
return t(r.state,r.getters);
},e,n);
},B.prototype.replaceState=function(t){
var e=this;
this._withCommit(function(){
e._vm._data.$$state=t;
});
},B.prototype.registerModule=function(t,e,n){
void 0===n&&(n={}),"string"==typeof t&&(t=[t]),s(Array.isArray(t),"module path must be a string or an Array."),
s(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),
m(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state);
},B.prototype.unregisterModule=function(t){
var e=this;
"string"==typeof t&&(t=[t]),s(Array.isArray(t),"module path must be a string or an Array."),
this._modules.unregister(t),this._withCommit(function(){
var n=x(e.state,t.slice(0,-1));
U.delete(n,t[t.length-1]);
}),d(this);
},B.prototype.hasModule=function(t){
return"string"==typeof t&&(t=[t]),s(Array.isArray(t),"module path must be a string or an Array."),
this._modules.isRegistered(t);
},B.prototype.hotUpdate=function(t){
this._modules.update(t),d(this,!0);
},B.prototype._withCommit=function(t){
var e=this._committing;
this._committing=!0,t(),this._committing=e;
},Object.defineProperties(B.prototype,J);
var K=$(function(t,e){
var n={};
return M(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),
O(e).forEach(function(e){
var r=e.key,o=e.val;
n[r]=function(){
var e=this.$store.state,n=this.$store.getters;
if(t){
var r=E(this.$store,"mapState",t);
if(!r)return;
e=r.context.state,n=r.context.getters;
}
return"function"==typeof o?o.call(this,e,n):e[o];
},n[r].vuex=!0;
}),n;
}),z=$(function(t,e){
var n={};
return M(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),
O(e).forEach(function(e){
var r=e.key,o=e.val;
n[r]=function(){
for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];
var r=this.$store.commit;
if(t){
var i=E(this.$store,"mapMutations",t);
if(!i)return;
r=i.context.commit;
}
return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e));
};
}),n;
}),I=$(function(t,e){
var n={};
return M(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),
O(e).forEach(function(e){
var r=e.key,o=e.val;
o=t+o,n[r]=function(){
return!t||E(this.$store,"mapGetters",t)?o in this.$store.getters?this.$store.getters[o]:void console.error("[vuex] unknown getter: "+o):void 0;
},n[r].vuex=!0;
}),n;
}),Q=$(function(t,e){
var n={};
return M(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),
O(e).forEach(function(e){
var r=e.key,o=e.val;
n[r]=function(){
for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];
var r=this.$store.dispatch;
if(t){
var i=E(this.$store,"mapActions",t);
if(!i)return;
r=i.context.dispatch;
}
return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e));
};
}),n;
}),W=function(t){
return{
mapState:K.bind(null,t),
mapGetters:I.bind(null,t),
mapMutations:z.bind(null,t),
mapActions:Q.bind(null,t)
};
},X={
Store:B,
install:j,
version:"3.5.1",
mapState:K,
mapMutations:z,
mapGetters:I,
mapActions:Q,
createNamespacedHelpers:W,
createLogger:C
};
return X;
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("pages_new/3rd/vue.js",[],function(){
"use strict";
function e(e){
return void 0===e||null===e;
}
function t(e){
return void 0!==e&&null!==e;
}
function n(e){
return e===!0;
}
function r(e){
return e===!1;
}
function o(e){
return"string"==typeof e||"number"==typeof e||"symbol"===("undefined"==typeof e?"undefined":_typeof(e))||"boolean"==typeof e;
}
function i(e){
return null!==e&&"object"===("undefined"==typeof e?"undefined":_typeof(e));
}
function a(e){
return Xa.call(e).slice(8,-1);
}
function s(e){
return"[object Object]"===Xa.call(e);
}
function c(e){
return"[object RegExp]"===Xa.call(e);
}
function u(e){
var t=parseFloat(String(e));
return t>=0&&Math.floor(t)===t&&isFinite(e);
}
function l(e){
return t(e)&&"function"==typeof e.then&&"function"==typeof e.catch;
}
function f(e){
return null==e?"":Array.isArray(e)||s(e)&&e.toString===Xa?JSON.stringify(e,null,2):String(e);
}
function d(e){
var t=parseFloat(e);
return isNaN(t)?e:t;
}
function p(e,t){
for(var n=Object.create(null),r=e.split(","),o=0;o<r.length;o++)n[r[o]]=!0;
return t?function(e){
return n[e.toLowerCase()];
}:function(e){
return n[e];
};
}
function v(e,t){
if(e.length){
var n=e.indexOf(t);
if(n>-1)return e.splice(n,1);
}
}
function h(e,t){
return ts.call(e,t);
}
function m(e){
var t=Object.create(null);
return function(n){
var r=t[n];
return r||(t[n]=e(n));
};
}
function g(e,t){
function n(n){
var r=arguments.length;
return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t);
}
return n._length=e.length,n;
}
function y(e,t){
return e.bind(t);
}
function b(e,t){
t=t||0;
for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];
return r;
}
function _(e,t){
for(var n in t)e[n]=t[n];
return e;
}
function w(e){
for(var t={},n=0;n<e.length;n++)e[n]&&_(t,e[n]);
return t;
}
function $(){}
function x(e){
return e.reduce(function(e,t){
return e.concat(t.staticKeys||[]);
},[]).join(",");
}
function k(e,t){
if(e===t)return!0;
var n=i(e),r=i(t);
if(!n||!r)return n||r?!1:String(e)===String(t);
try{
var o=Array.isArray(e),a=Array.isArray(t);
if(o&&a)return e.length===t.length&&e.every(function(e,n){
return k(e,t[n]);
});
if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();
if(o||a)return!1;
var s=Object.keys(e),c=Object.keys(t);
return s.length===c.length&&s.every(function(n){
return k(e[n],t[n]);
});
}catch(u){
return!1;
}
}
function C(e,t){
for(var n=0;n<e.length;n++)if(k(e[n],t))return n;
return-1;
}
function A(e){
var t=!1;
return function(){
t||(t=!0,e.apply(this,arguments));
};
}
function S(e){
var t=(e+"").charCodeAt(0);
return 36===t||95===t;
}
function O(e,t,n,r){
Object.defineProperty(e,t,{
value:n,
enumerable:!!r,
writable:!0,
configurable:!0
});
}
function T(e){
if(!hs.test(e)){
var t=e.split(".");
return function(e){
for(var n=0;n<t.length;n++){
if(!e)return;
e=e[t[n]];
}
return e;
};
}
}
function M(e){
return"function"==typeof e&&/native code/.test(e.toString());
}
function j(e){
qs.push(e),zs.target=e;
}
function N(){
qs.pop(),zs.target=qs[qs.length-1];
}
function E(e){
return new Js(void 0,void 0,void 0,String(e));
}
function I(e){
var t=new Js(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);
return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,
t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,
t;
}
function D(e){
Qs=e;
}
function L(e,t){
e.__proto__=t;
}
function F(e,t,n){
for(var r=0,o=n.length;o>r;r++){
var i=n[r];
O(e,i,t[i]);
}
}
function P(e,t){
if(i(e)&&!(e instanceof Js)){
var n;
return h(e,"__ob__")&&e.__ob__ instanceof ec?n=e.__ob__:Qs&&!Ns()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new ec(e)),
t&&n&&n.vmCount++,n;
}
}
function R(e,t,n,r,o){
var i=new zs,a=Object.getOwnPropertyDescriptor(e,t);
if(!a||a.configurable!==!1){
var s=a&&a.get,c=a&&a.set;
s&&!c||2!==arguments.length||(n=e[t]);
var u=!o&&P(n);
Object.defineProperty(e,t,{
enumerable:!0,
configurable:!0,
get:function(){
var t=s?s.call(e):n;
return zs.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(t)&&V(t))),t;
},
set:function(t){
var a=s?s.call(e):n;
t===a||t!==t&&a!==a||(r&&r(),(!s||c)&&(c?c.call(e,t):n=t,u=!o&&P(t),i.notify()));
}
});
}
}
function U(t,n,r){
if((e(t)||o(t))&&Ds("Cannot set reactive property on undefined, null, or primitive value: "+t),
Array.isArray(t)&&u(n))return t.length=Math.max(t.length,n),t.splice(n,1,r),r;
if(n in t&&!(n in Object.prototype))return t[n]=r,r;
var i=t.__ob__;
return t._isVue||i&&i.vmCount?(Ds("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),
r):i?(R(i.value,n,r),i.dep.notify(),r):(t[n]=r,r);
}
function H(t,n){
if((e(t)||o(t))&&Ds("Cannot delete reactive property on undefined, null, or primitive value: "+t),
Array.isArray(t)&&u(n))return void t.splice(n,1);
var r=t.__ob__;
return t._isVue||r&&r.vmCount?void Ds("Avoid deleting properties on a Vue instance or its root $data - just set it to null."):void(h(t,n)&&(delete t[n],
r&&r.dep.notify()));
}
function V(e){
for(var t=void 0,n=0,r=e.length;r>n;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),
Array.isArray(t)&&V(t);
}
function B(e,t){
if(!t)return e;
for(var n,r,o,i=Is?Reflect.ownKeys(t):Object.keys(t),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=e[n],
o=t[n],h(e,n)?r!==o&&s(r)&&s(o)&&B(r,o):U(e,n,o));
return e;
}
function z(e,t,n){
return n?function(){
var r="function"==typeof t?t.call(n,n):t,o="function"==typeof e?e.call(n,n):e;
return r?B(r,o):o;
}:t?e?function(){
return B("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e);
}:t:e;
}
function q(e,t){
var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;
return n?J(n):n;
}
function J(e){
for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);
return t;
}
function K(e,t,n,r){
var o=Object.create(e||null);
return t?(Q(r,t,n),_(o,t)):o;
}
function W(e){
for(var t in e.components)Z(t);
}
function Z(e){
new RegExp("^[a-zA-Z][\\-\\.0-9_"+vs.source+"]*$").test(e)||Ds('Invalid component name: "'+e+'". Component names should conform to valid custom element name in html5 specification.'),
(Qa(e)||ps.isReservedTag(e))&&Ds("Do not use built-in or reserved HTML elements as component id: "+e);
}
function G(e,t){
var n=e.props;
if(n){
var r,o,i,c={};
if(Array.isArray(n))for(r=n.length;r--;)o=n[r],"string"==typeof o?(i=rs(o),c[i]={
type:null
}):Ds("props must be strings when using array syntax.");else if(s(n))for(var u in n)o=n[u],
i=rs(u),c[i]=s(o)?o:{
type:o
};else Ds('Invalid value for option "props": expected an Array or an Object, but got '+a(n)+".",t);
e.props=c;
}
}
function Y(e,t){
var n=e.inject;
if(n){
var r=e.inject={};
if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={
from:n[o]
};else if(s(n))for(var i in n){
var c=n[i];
r[i]=s(c)?_({
from:i
},c):{
from:c
};
}else Ds('Invalid value for option "inject": expected an Array or an Object, but got '+a(n)+".",t);
}
}
function X(e){
var t=e.directives;
if(t)for(var n in t){
var r=t[n];
"function"==typeof r&&(t[n]={
bind:r,
update:r
});
}
}
function Q(e,t,n){
s(t)||Ds('Invalid value for option "'+e+'": expected an Object, but got '+a(t)+".",n);
}
function et(e,t,n){
function r(r){
var o=tc[r]||rc;
s[r]=o(e[r],t[r],n,r);
}
if(W(t),"function"==typeof t&&(t=t.options),G(t,n),Y(t,n),X(t),!t._base&&(t.extends&&(e=et(e,t.extends,n)),
t.mixins))for(var o=0,i=t.mixins.length;i>o;o++)e=et(e,t.mixins[o],n);
var a,s={};
for(a in e)r(a);
for(a in t)h(e,a)||r(a);
return s;
}
function tt(e,t,n,r){
if("string"==typeof n){
var o=e[t];
if(h(o,n))return o[n];
var i=rs(n);
if(h(o,i))return o[i];
var a=os(i);
if(h(o,a))return o[a];
var s=o[n]||o[i]||o[a];
return r&&!s&&Ds("Failed to resolve "+t.slice(0,-1)+": "+n,e),s;
}
}
function nt(e,t,n,r){
var o=t[e],i=!h(n,e),a=n[e],s=ct(Boolean,o.type);
if(s>-1)if(i&&!h(o,"default"))a=!1;else if(""===a||a===as(e)){
var c=ct(String,o.type);
(0>c||c>s)&&(a=!0);
}
if(void 0===a){
a=rt(r,o,e);
var u=Qs;
D(!0),P(a),D(u);
}
return ot(o,e,a,r,i),a;
}
function rt(e,t,n){
if(!h(t,"default"))return void 0;
var r=t.default;
return i(r)&&Ds('Invalid default value for prop "'+n+'": Props with type Object/Array must use a factory function to return the default value.',e),
e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==at(t.type)?r.call(e):r;
}
function ot(e,t,n,r,o){
if(e.required&&o)return void Ds('Missing required prop: "'+t+'"',r);
if(null!=n||e.required){
var i=e.type,a=!i||i===!0,s=[];
if(i){
Array.isArray(i)||(i=[i]);
for(var c=0;c<i.length&&!a;c++){
var u=it(n,i[c]);
s.push(u.expectedType||""),a=u.valid;
}
}
if(!a)return void Ds(ut(t,n,s),r);
var l=e.validator;
l&&(l(n)||Ds('Invalid prop: custom validator check failed for prop "'+t+'".',r));
}
}
function it(e,t){
var n,r=at(t);
if(oc.test(r)){
var o="undefined"==typeof e?"undefined":_typeof(e);
n=o===r.toLowerCase(),n||"object"!==o||(n=e instanceof t);
}else n="Object"===r?s(e):"Array"===r?Array.isArray(e):e instanceof t;
return{
valid:n,
expectedType:r
};
}
function at(e){
var t=e&&e.toString().match(/^\s*function (\w+)/);
return t?t[1]:"";
}
function st(e,t){
return at(e)===at(t);
}
function ct(e,t){
if(!Array.isArray(t))return st(t,e)?0:-1;
for(var n=0,r=t.length;r>n;n++)if(st(t[n],e))return n;
return-1;
}
function ut(e,t,n){
var r='Invalid prop: type check failed for prop "'+e+'". Expected '+n.map(os).join(", "),o=n[0],i=a(t),s=lt(t,o),c=lt(t,i);
return 1===n.length&&ft(o)&&!dt(o,i)&&(r+=" with value "+s),r+=", got "+i+" ",ft(i)&&(r+="with value "+c+"."),
r;
}
function lt(e,t){
return"String"===t?'"'+e+'"':"Number"===t?""+Number(e):""+e;
}
function ft(e){
var t=["string","number","boolean"];
return t.some(function(t){
return e.toLowerCase()===t;
});
}
function dt(){
for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];
return e.some(function(e){
return"boolean"===e.toLowerCase();
});
}
function pt(e,t,n){
j();
try{
if(t)for(var r=t;r=r.$parent;){
var o=r.$options.errorCaptured;
if(o)for(var i=0;i<o.length;i++)try{
var a=o[i].call(r,e,t,n)===!1;
if(a)return;
}catch(s){
ht(s,r,"errorCaptured hook");
}
}
ht(e,t,n);
}finally{
N();
}
}
function vt(e,t,n,r,o){
var i;
try{
i=n?e.apply(t,n):e.call(t),i&&!i._isVue&&l(i)&&!i._handled&&(i.catch(function(e){
return pt(e,r,o+" (Promise/async)");
}),i._handled=!0);
}catch(a){
pt(a,r,o);
}
return i;
}
function ht(e,t,n){
if(ps.errorHandler)try{
return ps.errorHandler.call(null,e,t,n);
}catch(r){
r!==e&&mt(r,null,"config.errorHandler");
}
mt(e,t,n);
}
function mt(e,t,n){
if(Ds("Error in "+n+': "'+e.toString()+'"',t),!gs&&!ys||"undefined"==typeof console)throw e;
console.error(e);
}
function gt(){
sc=!1;
var e=ac.slice(0);
ac.length=0;
for(var t=0;t<e.length;t++)e[t]();
}
function yt(e,t){
var n;
return ac.push(function(){
if(e)try{
e.call(t);
}catch(r){
pt(r,t,"nextTick");
}else n&&n(t);
}),sc||(sc=!0,nc()),e||"undefined"==typeof Promise?void 0:new Promise(function(e){
n=e;
});
}
function bt(e){
_t(e,xc),xc.clear();
}
function _t(e,t){
var n,r,o=Array.isArray(e);
if(!(!o&&!i(e)||Object.isFrozen(e)||e instanceof Js)){
if(e.__ob__){
var a=e.__ob__.dep.id;
if(t.has(a))return;
t.add(a);
}
if(o)for(n=e.length;n--;)_t(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)_t(e[r[n]],t);
}
}
function wt(e,t){
function n(){
var e=arguments,r=n.fns;
if(!Array.isArray(r))return vt(r,null,arguments,t,"v-on handler");
for(var o=r.slice(),i=0;i<o.length;i++)vt(o[i],null,e,t,"v-on handler");
}
return n.fns=e,n;
}
function $t(t,r,o,i,a,s){
var c,u,l,f,d;
for(c in t)u=l=t[c],f=r[c],d=kc(c),e(l)?Ds('Invalid handler for event "'+d.name+'": got '+String(l),s):e(f)?(e(l.fns)&&(l=t[c]=wt(l,s)),
n(d.once)&&(l=t[c]=a(d.name,l,d.capture)),o(d.name,l,d.capture,d.passive,d.params)):l!==f&&(f.fns=l,
t[c]=f);
for(c in r)e(t[c])&&(d=kc(c),i(d.name,r[c],d.capture));
}
function xt(r,o,i){
function a(){
i.apply(this,arguments),v(s.fns,a);
}
r instanceof Js&&(r=r.data.hook||(r.data.hook={}));
var s,c=r[o];
e(c)?s=wt([a]):t(c.fns)&&n(c.merged)?(s=c,s.fns.push(a)):s=wt([c,a]),s.merged=!0,
r[o]=s;
}
function kt(n,r,o){
var i=r.options.props;
if(!e(i)){
var a={},s=n.attrs,c=n.props;
if(t(s)||t(c))for(var u in i){
var l=as(u),f=u.toLowerCase();
u!==f&&s&&h(s,f)&&Ls('Prop "'+f+'" is passed to component '+Ps(o||r)+', but the declared prop name is "'+u+'". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "'+l+'" instead of "'+u+'".'),
Ct(a,c,u,l,!0)||Ct(a,s,u,l,!1);
}
return a;
}
}
function Ct(e,n,r,o,i){
if(t(n)){
if(h(n,r))return e[r]=n[r],i||delete n[r],!0;
if(h(n,o))return e[r]=n[o],i||delete n[o],!0;
}
return!1;
}
function At(e){
for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);
return e;
}
function St(e){
return o(e)?[E(e)]:Array.isArray(e)?Tt(e):void 0;
}
function Ot(e){
return t(e)&&t(e.text)&&r(e.isComment);
}
function Tt(r,i){
var a,s,c,u,l=[];
for(a=0;a<r.length;a++)s=r[a],e(s)||"boolean"==typeof s||(c=l.length-1,u=l[c],Array.isArray(s)?s.length>0&&(s=Tt(s,(i||"")+"_"+a),
Ot(s[0])&&Ot(u)&&(l[c]=E(u.text+s[0].text),s.shift()),l.push.apply(l,s)):o(s)?Ot(u)?l[c]=E(u.text+s):""!==s&&l.push(E(s)):Ot(s)&&Ot(u)?l[c]=E(u.text+s.text):(n(r._isVList)&&t(s.tag)&&e(s.key)&&t(i)&&(s.key="__vlist"+i+"_"+a+"__"),
l.push(s)));
return l;
}
function Mt(e){
var t=e.$options.provide;
t&&(e._provided="function"==typeof t?t.call(e):t);
}
function jt(e){
var t=Nt(e.$options.inject,e);
t&&(D(!1),Object.keys(t).forEach(function(n){
R(e,n,t[n],function(){
Ds('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "'+n+'"',e);
});
}),D(!0));
}
function Nt(e,t){
if(e){
for(var n=Object.create(null),r=Is?Reflect.ownKeys(e):Object.keys(e),o=0;o<r.length;o++){
var i=r[o];
if("__ob__"!==i){
for(var a=e[i].from,s=t;s;){
if(s._provided&&h(s._provided,a)){
n[i]=s._provided[a];
break;
}
s=s.$parent;
}
if(!s)if("default"in e[i]){
var c=e[i].default;
n[i]="function"==typeof c?c.call(t):c;
}else Ds('Injection "'+i+'" not found',t);
}
}
return n;
}
}
function Et(e,t){
if(!e||!e.length)return{};
for(var n={},r=0,o=e.length;o>r;r++){
var i=e[r],a=i.data;
if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==t&&i.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(i);else{
var s=a.slot,c=n[s]||(n[s]=[]);
"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i);
}
}
for(var u in n)n[u].every(It)&&delete n[u];
return n;
}
function It(e){
return e.isComment&&!e.asyncFactory||" "===e.text;
}
function Dt(e,t,n){
var r,o=Object.keys(t).length>0,i=e?!!e.$stable:!o,a=e&&e.$key;
if(e){
if(e._normalized)return e._normalized;
if(i&&n&&n!==Ya&&a===n.$key&&!o&&!n.$hasNormal)return n;
r={};
for(var s in e)e[s]&&"$"!==s[0]&&(r[s]=Lt(t,s,e[s]));
}else r={};
for(var c in t)c in r||(r[c]=Ft(t,c));
return e&&Object.isExtensible(e)&&(e._normalized=r),O(r,"$stable",i),O(r,"$key",a),
O(r,"$hasNormal",o),r;
}
function Lt(e,t,n){
var r=function(){
var e=arguments.length?n.apply(null,arguments):n({});
return e=e&&"object"===("undefined"==typeof e?"undefined":_typeof(e))&&!Array.isArray(e)?[e]:St(e),
e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e;
};
return n.proxy&&Object.defineProperty(e,t,{
get:r,
enumerable:!0,
configurable:!0
}),r;
}
function Ft(e,t){
return function(){
return e[t];
};
}
function Pt(e,n){
var r,o,a,s,c;
if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),o=0,a=e.length;a>o;o++)r[o]=n(e[o],o);else if("number"==typeof e)for(r=new Array(e),
o=0;e>o;o++)r[o]=n(o+1,o);else if(i(e))if(Is&&e[Symbol.iterator]){
r=[];
for(var u=e[Symbol.iterator](),l=u.next();!l.done;)r.push(n(l.value,r.length)),l=u.next();
}else for(s=Object.keys(e),r=new Array(s.length),o=0,a=s.length;a>o;o++)c=s[o],r[o]=n(e[c],c,o);
return t(r)||(r=[]),r._isVList=!0,r;
}
function Rt(e,t,n,r){
var o,a=this.$scopedSlots[e];
a?(n=n||{},r&&(i(r)||Ds("slot v-bind without argument expects an Object",this),n=_(_({},r),n)),
o=a(n)||t):o=this.$slots[e]||t;
var s=n&&n.slot;
return s?this.$createElement("template",{
slot:s
},o):o;
}
function Ut(e){
return tt(this.$options,"filters",e,!0)||us;
}
function Ht(e,t){
return Array.isArray(e)?-1===e.indexOf(t):e!==t;
}
function Vt(e,t,n,r,o){
var i=ps.keyCodes[t]||n;
return o&&r&&!ps.keyCodes[t]?Ht(o,r):i?Ht(i,e):r?as(r)!==t:void 0;
}
function Bt(e,t,n,r,o){
if(n)if(i(n)){
Array.isArray(n)&&(n=w(n));
var a,s=function(i){
if("class"===i||"style"===i||es(i))a=e;else{
var s=e.attrs&&e.attrs.type;
a=r||ps.mustUseProp(t,s,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});
}
var c=rs(i),u=as(i);
if(!(c in a||u in a)&&(a[i]=n[i],o)){
var l=e.on||(e.on={});
l["update:"+i]=function(e){
n[i]=e;
};
}
};
for(var c in n)s(c);
}else Ds("v-bind without argument expects an Object or Array value",this);
return e;
}
function zt(e,t){
var n=this._staticTrees||(this._staticTrees=[]),r=n[e];
return r&&!t?r:(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),
Jt(r,"__static__"+e,!1),r);
}
function qt(e,t,n){
return Jt(e,"__once__"+t+(n?"_"+n:""),!0),e;
}
function Jt(e,t,n){
if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Kt(e[r],t+"_"+r,n);else Kt(e,t,n);
}
function Kt(e,t,n){
e.isStatic=!0,e.key=t,e.isOnce=n;
}
function Wt(e,t){
if(t)if(s(t)){
var n=e.on=e.on?_({},e.on):{};
for(var r in t){
var o=n[r],i=t[r];
n[r]=o?[].concat(o,i):i;
}
}else Ds("v-on without argument expects an Object value",this);
return e;
}
function Zt(e,t,n,r){
t=t||{
$stable:!n
};
for(var o=0;o<e.length;o++){
var i=e[o];
Array.isArray(i)?Zt(i,t,n):i&&(i.proxy&&(i.fn.proxy=!0),t[i.key]=i.fn);
}
return r&&(t.$key=r),t;
}
function Gt(e,t){
for(var n=0;n<t.length;n+=2){
var r=t[n];
"string"==typeof r&&r?e[t[n]]=t[n+1]:""!==r&&null!==r&&Ds("Invalid value for dynamic directive argument (expected string or null): "+r,this);
}
return e;
}
function Yt(e,t){
return"string"==typeof e?t+e:e;
}
function Xt(e){
e._o=qt,e._n=d,e._s=f,e._l=Pt,e._t=Rt,e._q=k,e._i=C,e._m=zt,e._f=Ut,e._k=Vt,e._b=Bt,
e._v=E,e._e=Ws,e._u=Zt,e._g=Wt,e._d=Gt,e._p=Yt;
}
function Qt(e,t,r,o,i){
var a,s=this,c=i.options;
h(o,"_uid")?(a=Object.create(o),a._original=o):(a=o,o=o._original);
var u=n(c._compiled),l=!u;
this.data=e,this.props=t,this.children=r,this.parent=o,this.listeners=e.on||Ya,this.injections=Nt(c.inject,o),
this.slots=function(){
return s.$slots||Dt(e.scopedSlots,s.$slots=Et(r,o)),s.$slots;
},Object.defineProperty(this,"scopedSlots",{
enumerable:!0,
get:function(){
return Dt(e.scopedSlots,this.slots());
}
}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Dt(e.scopedSlots,this.$slots)),
this._c=c._scopeId?function(e,t,n,r){
var i=un(a,e,t,n,r,l);
return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i;
}:function(e,t,n,r){
return un(a,e,t,n,r,l);
};
}
function en(e,n,r,o,i){
var a=e.options,s={},c=a.props;
if(t(c))for(var u in c)s[u]=nt(u,c,n||Ya);else t(r.attrs)&&nn(s,r.attrs),t(r.props)&&nn(s,r.props);
var l=new Qt(r,s,i,o,e),f=a.render.call(null,l._c,l);
if(f instanceof Js)return tn(f,r,l.parent,a,l);
if(Array.isArray(f)){
for(var d=St(f)||[],p=new Array(d.length),v=0;v<d.length;v++)p[v]=tn(d[v],r,l.parent,a,l);
return p;
}
}
function tn(e,t,n,r,o){
var i=I(e);
return i.fnContext=n,i.fnOptions=r,(i.devtoolsMeta=i.devtoolsMeta||{}).renderContext=o,
t.slot&&((i.data||(i.data={})).slot=t.slot),i;
}
function nn(e,t){
for(var n in t)e[rs(n)]=t[n];
}
function rn(r,o,a,s,c){
if(!e(r)){
var u=a.$options._base;
if(i(r)&&(r=u.extend(r)),"function"!=typeof r)return void Ds("Invalid Component definition: "+String(r),a);
var l;
if(e(r.cid)&&(l=r,r=gn(l,u),void 0===r))return mn(l,o,a,s,c);
o=o||{},nr(r),t(o.model)&&cn(r.options,o);
var f=kt(o,r,c);
if(n(r.options.functional))return en(r,f,o,a,s);
var d=o.on;
if(o.on=o.nativeOn,n(r.options.abstract)){
var p=o.slot;
o={},p&&(o.slot=p);
}
an(o);
var v=r.options.name||c,h=new Js("vue-component-"+r.cid+(v?"-"+v:""),o,void 0,void 0,void 0,a,{
Ctor:r,
propsData:f,
listeners:d,
tag:c,
children:s
},l);
return h;
}
}
function on(e,n){
var r={
_isComponent:!0,
_parentVnode:e,
parent:n
},o=e.data.inlineTemplate;
return t(o)&&(r.render=o.render,r.staticRenderFns=o.staticRenderFns),new e.componentOptions.Ctor(r);
}
function an(e){
for(var t=e.hook||(e.hook={}),n=0;n<Sc.length;n++){
var r=Sc[n],o=t[r],i=Ac[r];
o===i||o&&o._merged||(t[r]=o?sn(i,o):i);
}
}
function sn(e,t){
var n=function(n,r){
e(n,r),t(n,r);
};
return n._merged=!0,n;
}
function cn(e,n){
var r=e.model&&e.model.prop||"value",o=e.model&&e.model.event||"input";
(n.attrs||(n.attrs={}))[r]=n.model.value;
var i=n.on||(n.on={}),a=i[o],s=n.model.callback;
t(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[o]=[s].concat(a)):i[o]=s;
}
function un(e,t,r,i,a,s){
return(Array.isArray(r)||o(r))&&(a=i,i=r,r=void 0),n(s)&&(a=Tc),ln(e,t,r,i,a);
}
function ln(e,n,r,i,a){
if(t(r)&&t(r.__ob__))return Ds("Avoid using observed data object as vnode data: "+JSON.stringify(r)+"\nAlways create fresh vnode data objects in each render!",e),
Ws();
if(t(r)&&t(r.is)&&(n=r.is),!n)return Ws();
t(r)&&t(r.key)&&!o(r.key)&&Ds("Avoid using non-primitive value as key, use string/number value instead.",e),
Array.isArray(i)&&"function"==typeof i[0]&&(r=r||{},r.scopedSlots={
"default":i[0]
},i.length=0),a===Tc?i=St(i):a===Oc&&(i=At(i));
var s,c;
if("string"==typeof n){
var u;
c=e.$vnode&&e.$vnode.ns||ps.getTagNamespace(n),ps.isReservedTag(n)?(t(r)&&t(r.nativeOn)&&Ds("The .native modifier for v-on is only valid on components but it was used on <"+n+">.",e),
s=new Js(ps.parsePlatformTagName(n),r,i,void 0,void 0,e)):s=r&&r.pre||!t(u=tt(e.$options,"components",n))?new Js(n,r,i,void 0,void 0,e):rn(u,r,e,i,n);
}else s=rn(n,r,e,i);
return Array.isArray(s)?s:t(s)?(t(c)&&fn(s,c),t(r)&&dn(r),s):Ws();
}
function fn(r,o,i){
if(r.ns=o,"foreignObject"===r.tag&&(o=void 0,i=!0),t(r.children))for(var a=0,s=r.children.length;s>a;a++){
var c=r.children[a];
t(c.tag)&&(e(c.ns)||n(i)&&"svg"!==c.tag)&&fn(c,o,i);
}
}
function dn(e){
i(e.style)&&bt(e.style),i(e.class)&&bt(e.class);
}
function pn(e){
e._vnode=null,e._staticTrees=null;
var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;
e.$slots=Et(t._renderChildren,r),e.$scopedSlots=Ya,e._c=function(t,n,r,o){
return un(e,t,n,r,o,!1);
},e.$createElement=function(t,n,r,o){
return un(e,t,n,r,o,!0);
};
var o=n&&n.data;
R(e,"$attrs",o&&o.attrs||Ya,function(){
!Nc&&Ds("$attrs is readonly.",e);
},!0),R(e,"$listeners",t._parentListeners||Ya,function(){
!Nc&&Ds("$listeners is readonly.",e);
},!0);
}
function vn(e){
Xt(e.prototype),e.prototype.$nextTick=function(e){
return yt(e,this);
},e.prototype._render=function(){
var e=this,t=e.$options,n=t.render,r=t._parentVnode;
r&&(e.$scopedSlots=Dt(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;
var o;
try{
Mc=e,o=n.call(e._renderProxy,e.$createElement);
}catch(i){
if(pt(i,e,"render"),e.$options.renderError)try{
o=e.$options.renderError.call(e._renderProxy,e.$createElement,i);
}catch(i){
pt(i,e,"renderError"),o=e._vnode;
}else o=e._vnode;
}finally{
Mc=null;
}
return Array.isArray(o)&&1===o.length&&(o=o[0]),o instanceof Js||(Array.isArray(o)&&Ds("Multiple root nodes returned from render function. Render function should return a single root node.",e),
o=Ws()),o.parent=r,o;
};
}
function hn(e,t){
return(e.__esModule||Is&&"Module"===e[Symbol.toStringTag])&&(e=e.default),i(e)?t.extend(e):e;
}
function mn(e,t,n,r,o){
var i=Ws();
return i.asyncFactory=e,i.asyncMeta={
data:t,
context:n,
children:r,
tag:o
},i;
}
function gn(r,o){
if(n(r.error)&&t(r.errorComp))return r.errorComp;
if(t(r.resolved))return r.resolved;
var a=Mc;
if(a&&t(r.owners)&&-1===r.owners.indexOf(a)&&r.owners.push(a),n(r.loading)&&t(r.loadingComp))return r.loadingComp;
if(a&&!t(r.owners)){
var s=r.owners=[a],c=!0,u=null,f=null;
a.$on("hook:destroyed",function(){
return v(s,a);
});
var d=function(e){
for(var t=0,n=s.length;n>t;t++)s[t].$forceUpdate();
e&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==f&&(clearTimeout(f),f=null));
},p=A(function(e){
r.resolved=hn(e,o),c?s.length=0:d(!0);
}),h=A(function(e){
Ds("Failed to resolve async component: "+String(r)+(e?"\nReason: "+e:"")),t(r.errorComp)&&(r.error=!0,
d(!0));
}),m=r(p,h);
return i(m)&&(l(m)?e(r.resolved)&&m.then(p,h):l(m.component)&&(m.component.then(p,h),
t(m.error)&&(r.errorComp=hn(m.error,o)),t(m.loading)&&(r.loadingComp=hn(m.loading,o),
0===m.delay?r.loading=!0:u=setTimeout(function(){
u=null,e(r.resolved)&&e(r.error)&&(r.loading=!0,d(!1));
},m.delay||200)),t(m.timeout)&&(f=setTimeout(function(){
f=null,e(r.resolved)&&h("timeout ("+m.timeout+"ms)");
},m.timeout)))),c=!1,r.loading?r.loadingComp:r.resolved;
}
}
function yn(e){
return e.isComment&&e.asyncFactory;
}
function bn(e){
if(Array.isArray(e))for(var n=0;n<e.length;n++){
var r=e[n];
if(t(r)&&(t(r.componentOptions)||yn(r)))return r;
}
}
function _n(e){
e._events=Object.create(null),e._hasHookEvent=!1;
var t=e.$options._parentListeners;
t&&kn(e,t);
}
function wn(e,t){
Cc.$on(e,t);
}
function $n(e,t){
Cc.$off(e,t);
}
function xn(e,t){
var n=Cc;
return function r(){
var o=t.apply(null,arguments);
null!==o&&n.$off(e,r);
};
}
function kn(e,t,n){
Cc=e,$t(t,n||{},wn,$n,xn,e),Cc=void 0;
}
function Cn(e){
var t=/^hook:/;
e.prototype.$on=function(e,n){
var r=this;
if(Array.isArray(e))for(var o=0,i=e.length;i>o;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),
t.test(e)&&(r._hasHookEvent=!0);
return r;
},e.prototype.$once=function(e,t){
function n(){
r.$off(e,n),t.apply(r,arguments);
}
var r=this;
return n.fn=t,r.$on(e,n),r;
},e.prototype.$off=function(e,t){
var n=this;
if(!arguments.length)return n._events=Object.create(null),n;
if(Array.isArray(e)){
for(var r=0,o=e.length;o>r;r++)n.$off(e[r],t);
return n;
}
var i=n._events[e];
if(!i)return n;
if(!t)return n._events[e]=null,n;
for(var a,s=i.length;s--;)if(a=i[s],a===t||a.fn===t){
i.splice(s,1);
break;
}
return n;
},e.prototype.$emit=function(e){
var t=this,n=e.toLowerCase();
n!==e&&t._events[n]&&Ls('Event "'+n+'" is emitted in component '+Ps(t)+' but the handler is registered for "'+e+'". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "'+as(e)+'" instead of "'+e+'".');
var r=t._events[e];
if(r){
r=r.length>1?b(r):r;
for(var o=b(arguments,1),i='event handler for "'+e+'"',a=0,s=r.length;s>a;a++)vt(r[a],t,o,t,i);
}
return t;
};
}
function An(e){
var t=jc;
return jc=e,function(){
jc=t;
};
}
function Sn(e){
var t=e.$options,n=t.parent;
if(n&&!t.abstract){
for(;n.$options.abstract&&n.$parent;)n=n.$parent;
n.$children.push(e);
}
e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,
e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1;
}
function On(e){
e.prototype._update=function(e,t){
var n=this,r=n.$el,o=n._vnode,i=An(n);
n._vnode=e,n.$el=o?n.__patch__(o,e):n.__patch__(n.$el,e,t,!1),i(),r&&(r.__vue__=null),
n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el);
},e.prototype.$forceUpdate=function(){
var e=this;
e._watcher&&e._watcher.update();
},e.prototype.$destroy=function(){
var e=this;
if(!e._isBeingDestroyed){
In(e,"beforeDestroy"),e._isBeingDestroyed=!0;
var t=e.$parent;
!t||t._isBeingDestroyed||e.$options.abstract||v(t.$children,e),e._watcher&&e._watcher.teardown();
for(var n=e._watchers.length;n--;)e._watchers[n].teardown();
e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),
In(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null);
}
};
}
function Tn(e,t,n){
e.$el=t,e.$options.render||(e.$options.render=Ws,e.$options.template&&"#"!==e.$options.template.charAt(0)||e.$options.el||t?Ds("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",e):Ds("Failed to mount component: template or render function not defined.",e)),
In(e,"beforeMount");
var r;
return r=ps.performance&&dc?function(){
var t=e._name,r=e._uid,o="vue-perf-start:"+r,i="vue-perf-end:"+r;
dc(o);
var a=e._render();
dc(i),pc("vue "+t+" render",o,i),dc(o),e._update(a,n),dc(i),pc("vue "+t+" patch",o,i);
}:function(){
e._update(e._render(),n);
},new qc(e,r,$,{
before:function(){
e._isMounted&&!e._isDestroyed&&In(e,"beforeUpdate");
}
},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,In(e,"mounted")),e;
}
function Mn(e,t,n,r,o){
Nc=!0;
var i=r.data.scopedSlots,a=e.$scopedSlots,s=!!(i&&!i.$stable||a!==Ya&&!a.$stable||i&&e.$scopedSlots.$key!==i.$key),c=!!(o||e.$options._renderChildren||s);
if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=o,
e.$attrs=r.data.attrs||Ya,e.$listeners=n||Ya,t&&e.$options.props){
D(!1);
for(var u=e._props,l=e.$options._propKeys||[],f=0;f<l.length;f++){
var d=l[f],p=e.$options.props;
u[d]=nt(d,p,t,e);
}
D(!0),e.$options.propsData=t;
}
n=n||Ya;
var v=e.$options._parentListeners;
e.$options._parentListeners=n,kn(e,n,v),c&&(e.$slots=Et(o,r.context),e.$forceUpdate()),
Nc=!1;
}
function jn(e){
for(;e&&(e=e.$parent);)if(e._inactive)return!0;
return!1;
}
function Nn(e,t){
if(t){
if(e._directInactive=!1,jn(e))return;
}else if(e._directInactive)return;
if(e._inactive||null===e._inactive){
e._inactive=!1;
for(var n=0;n<e.$children.length;n++)Nn(e.$children[n]);
In(e,"activated");
}
}
function En(e,t){
if(!(t&&(e._directInactive=!0,jn(e))||e._inactive)){
e._inactive=!0;
for(var n=0;n<e.$children.length;n++)En(e.$children[n]);
In(e,"deactivated");
}
}
function In(e,t){
j();
var n=e.$options[t],r=t+" hook";
if(n)for(var o=0,i=n.length;i>o;o++)vt(n[o],e,null,e,r);
e._hasHookEvent&&e.$emit("hook:"+t),N();
}
function Dn(){
Uc=Ic.length=Dc.length=0,Lc={},Fc={},Pc=Rc=!1;
}
function Ln(){
Hc=Vc(),Rc=!0;
var e,t;
for(Ic.sort(function(e,t){
return e.id-t.id;
}),Uc=0;Uc<Ic.length;Uc++)if(e=Ic[Uc],e.before&&e.before(),t=e.id,Lc[t]=null,e.run(),
null!=Lc[t]&&(Fc[t]=(Fc[t]||0)+1,Fc[t]>Ec)){
Ds("You may have an infinite update loop "+(e.user?'in watcher with expression "'+e.expression+'"':"in a component render function."),e.vm);
break;
}
var n=Dc.slice(),r=Ic.slice();
Dn(),Rn(n),Fn(r),Es&&ps.devtools&&Es.emit("flush");
}
function Fn(e){
for(var t=e.length;t--;){
var n=e[t],r=n.vm;
r._watcher===n&&r._isMounted&&!r._isDestroyed&&In(r,"updated");
}
}
function Pn(e){
e._inactive=!1,Dc.push(e);
}
function Rn(e){
for(var t=0;t<e.length;t++)e[t]._inactive=!0,Nn(e[t],!0);
}
function Un(e){
var t=e.id;
if(null==Lc[t]){
if(Lc[t]=!0,Rc){
for(var n=Ic.length-1;n>Uc&&Ic[n].id>e.id;)n--;
Ic.splice(n+1,0,e);
}else Ic.push(e);
if(!Pc){
if(Pc=!0,!ps.async)return void Ln();
yt(Ln);
}
}
}
function Hn(e,t,n){
Jc.get=function(){
return this[t][n];
},Jc.set=function(e){
this[t][n]=e;
},Object.defineProperty(e,n,Jc);
}
function Vn(e){
e._watchers=[];
var t=e.$options;
t.props&&Bn(e,t.props),t.methods&&Gn(e,t.methods),t.data?zn(e):P(e._data={},!0),
t.computed&&Jn(e,t.computed),t.watch&&t.watch!==As&&Yn(e,t.watch);
}
function Bn(e,t){
var n=e.$options.propsData||{},r=e._props={},o=e.$options._propKeys=[],i=!e.$parent;
i||D(!1);
var a=function(a){
o.push(a);
var s=nt(a,t,n,e),c=as(a);
(es(c)||ps.isReservedAttr(c))&&Ds('"'+c+'" is a reserved attribute and cannot be used as component prop.',e),
R(r,a,s,function(){
i||Nc||Ds("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \""+a+'"',e);
}),a in e||Hn(e,"_props",a);
};
for(var s in t)a(s);
D(!0);
}
function zn(e){
var t=e.$options.data;
t=e._data="function"==typeof t?qn(t,e):t||{},s(t)||(t={},Ds("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",e));
for(var n=Object.keys(t),r=e.$options.props,o=e.$options.methods,i=n.length;i--;){
var a=n[i];
o&&h(o,a)&&Ds('Method "'+a+'" has already been defined as a data property.',e),r&&h(r,a)?Ds('The data property "'+a+'" is already declared as a prop. Use prop default value instead.',e):S(a)||Hn(e,"_data",a);
}
P(t,!0);
}
function qn(e,t){
j();
try{
return e.call(t,t);
}catch(n){
return pt(n,t,"data()"),{};
}finally{
N();
}
}
function Jn(e,t){
var n=e._computedWatchers=Object.create(null),r=Ns();
for(var o in t){
var i=t[o],a="function"==typeof i?i:i.get;
null==a&&Ds('Getter is missing for computed property "'+o+'".',e),r||(n[o]=new qc(e,a||$,$,Kc)),
o in e?o in e.$data?Ds('The computed property "'+o+'" is already defined in data.',e):e.$options.props&&o in e.$options.props&&Ds('The computed property "'+o+'" is already defined as a prop.',e):Kn(e,o,i);
}
}
function Kn(e,t,n){
var r=!Ns();
"function"==typeof n?(Jc.get=r?Wn(t):Zn(n),Jc.set=$):(Jc.get=n.get?r&&n.cache!==!1?Wn(t):Zn(n.get):$,
Jc.set=n.set||$),Jc.set===$&&(Jc.set=function(){
Ds('Computed property "'+t+'" was assigned to but it has no setter.',this);
}),Object.defineProperty(e,t,Jc);
}
function Wn(e){
return function(){
var t=this._computedWatchers&&this._computedWatchers[e];
return t?(t.dirty&&t.evaluate(),zs.target&&t.depend(),t.value):void 0;
};
}
function Zn(e){
return function(){
return e.call(this,this);
};
}
function Gn(e,t){
var n=e.$options.props;
for(var r in t)"function"!=typeof t[r]&&Ds('Method "'+r+'" has type "'+_typeof(t[r])+'" in the component definition. Did you reference the function correctly?',e),
n&&h(n,r)&&Ds('Method "'+r+'" has already been defined as a prop.',e),r in e&&S(r)&&Ds('Method "'+r+'" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'),
e[r]="function"!=typeof t[r]?$:ss(t[r],e);
}
function Yn(e,t){
for(var n in t){
var r=t[n];
if(Array.isArray(r))for(var o=0;o<r.length;o++)Xn(e,n,r[o]);else Xn(e,n,r);
}
}
function Xn(e,t,n,r){
return s(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r);
}
function Qn(e){
var t={};
t.get=function(){
return this._data;
};
var n={};
n.get=function(){
return this._props;
},t.set=function(){
Ds("Avoid replacing instance root $data. Use nested data properties instead.",this);
},n.set=function(){
Ds("$props is readonly.",this);
},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),
e.prototype.$set=U,e.prototype.$delete=H,e.prototype.$watch=function(e,t,n){
var r=this;
if(s(t))return Xn(r,e,t,n);
n=n||{},n.user=!0;
var o=new qc(r,e,t,n);
if(n.immediate)try{
t.call(r,o.value);
}catch(i){
pt(i,r,'callback for immediate watcher "'+o.expression+'"');
}
return function(){
o.teardown();
};
};
}
function er(e){
e.prototype._init=function(e){
var t=this;
t._uid=Wc++;
var n,r;
ps.performance&&dc&&(n="vue-perf-start:"+t._uid,r="vue-perf-end:"+t._uid,dc(n)),
t._isVue=!0,e&&e._isComponent?tr(t,e):t.$options=et(nr(t.constructor),e||{},t),hc(t),
t._self=t,Sn(t),_n(t),pn(t),In(t,"beforeCreate"),jt(t),Vn(t),Mt(t),In(t,"created"),
ps.performance&&dc&&(t._name=Ps(t,!1),dc(r),pc("vue "+t._name+" init",n,r)),t.$options.el&&t.$mount(t.$options.el);
};
}
function tr(e,t){
var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;
n.parent=t.parent,n._parentVnode=r;
var o=r.componentOptions;
n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,
n._componentTag=o.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns);
}
function nr(e){
var t=e.options;
if(e.super){
var n=nr(e.super),r=e.superOptions;
if(n!==r){
e.superOptions=n;
var o=rr(e);
o&&_(e.extendOptions,o),t=e.options=et(n,e.extendOptions),t.name&&(t.components[t.name]=e);
}
}
return t;
}
function rr(e){
var t,n=e.options,r=e.sealedOptions;
for(var o in n)n[o]!==r[o]&&(t||(t={}),t[o]=n[o]);
return t;
}
function or(e){
this instanceof or||Ds("Vue is a constructor and should be called with the `new` keyword"),
this._init(e);
}
function ir(e){
e.use=function(e){
var t=this._installedPlugins||(this._installedPlugins=[]);
if(t.indexOf(e)>-1)return this;
var n=b(arguments,1);
return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),
t.push(e),this;
};
}
function ar(e){
e.mixin=function(e){
return this.options=et(this.options,e),this;
};
}
function sr(e){
e.cid=0;
var t=1;
e.extend=function(e){
e=e||{};
var n=this,r=n.cid,o=e._Ctor||(e._Ctor={});
if(o[r])return o[r];
var i=e.name||n.options.name;
i&&Z(i);
var a=function(e){
this._init(e);
};
return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,
a.options=et(n.options,e),a["super"]=n,a.options.props&&cr(a),a.options.computed&&ur(a),
a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,fs.forEach(function(e){
a[e]=n[e];
}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=_({},a.options),
o[r]=a,a;
};
}
function cr(e){
var t=e.options.props;
for(var n in t)Hn(e.prototype,"_props",n);
}
function ur(e){
var t=e.options.computed;
for(var n in t)Kn(e.prototype,n,t[n]);
}
function lr(e){
fs.forEach(function(t){
e[t]=function(e,n){
return n?("component"===t&&Z(e),"component"===t&&s(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),
"directive"===t&&"function"==typeof n&&(n={
bind:n,
update:n
}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e];
};
});
}
function fr(e){
return e&&(e.Ctor.options.name||e.tag);
}
function dr(e,t){
return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:c(e)?e.test(t):!1;
}
function pr(e,t){
var n=e.cache,r=e.keys,o=e._vnode;
for(var i in n){
var a=n[i];
if(a){
var s=fr(a.componentOptions);
s&&!t(s)&&vr(n,i,r,o);
}
}
}
function vr(e,t,n,r){
var o=e[t];
!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),e[t]=null,v(n,t);
}
function hr(e){
var t={};
t.get=function(){
return ps;
},t.set=function(){
Ds("Do not replace the Vue.config object, set individual fields instead.");
},Object.defineProperty(e,"config",t),e.util={
warn:Ds,
extend:_,
mergeOptions:et,
defineReactive:R
},e.set=U,e.delete=H,e.nextTick=yt,e.observable=function(e){
return P(e),e;
},e.options=Object.create(null),fs.forEach(function(t){
e.options[t+"s"]=Object.create(null);
}),e.options._base=e,_(e.options.components,Yc),ir(e),ar(e),sr(e),lr(e);
}
function mr(e){
for(var n=e.data,r=e,o=e;t(o.componentInstance);)o=o.componentInstance._vnode,o&&o.data&&(n=gr(o.data,n));
for(;t(r=r.parent);)r&&r.data&&(n=gr(n,r.data));
return yr(n.staticClass,n.class);
}
function gr(e,n){
return{
staticClass:br(e.staticClass,n.staticClass),
"class":t(e.class)?[e.class,n.class]:n.class
};
}
function yr(e,n){
return t(e)||t(n)?br(e,_r(n)):"";
}
function br(e,t){
return e?t?e+" "+t:e:t||"";
}
function _r(e){
return Array.isArray(e)?wr(e):i(e)?$r(e):"string"==typeof e?e:"";
}
function wr(e){
for(var n,r="",o=0,i=e.length;i>o;o++)t(n=_r(e[o]))&&""!==n&&(r&&(r+=" "),r+=n);
return r;
}
function $r(e){
var t="";
for(var n in e)e[n]&&(t&&(t+=" "),t+=n);
return t;
}
function xr(e){
return wu(e)?"svg":"math"===e?"math":void 0;
}
function kr(e){
if(!gs)return!0;
if(xu(e))return!1;
if(e=e.toLowerCase(),null!=ku[e])return ku[e];
var t=document.createElement(e);
return ku[e]=e.indexOf("-")>-1?t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:/HTMLUnknownElement/.test(t.toString());
}
function Cr(e){
if("string"==typeof e){
var t=document.querySelector(e);
return t?t:(Ds("Cannot find element: "+e),document.createElement("div"));
}
return e;
}
function Ar(e,t){
var n=document.createElement(e);
return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),
n);
}
function Sr(e,t){
return document.createElementNS(bu[e],t);
}
function Or(e){
return document.createTextNode(e);
}
function Tr(e){
return document.createComment(e);
}
function Mr(e,t,n){
e.insertBefore(t,n);
}
function jr(e,t){
e.removeChild(t);
}
function Nr(e,t){
e.appendChild(t);
}
function Er(e){
return e.parentNode;
}
function Ir(e){
return e.nextSibling;
}
function Dr(e){
return e.tagName;
}
function Lr(e,t){
e.textContent=t;
}
function Fr(e,t){
e.setAttribute(t,"");
}
function Pr(e,n){
var r=e.data.ref;
if(t(r)){
var o=e.context,i=e.componentInstance||e.elm,a=o.$refs;
n?Array.isArray(a[r])?v(a[r],i):a[r]===i&&(a[r]=void 0):e.data.refInFor?Array.isArray(a[r])?a[r].indexOf(i)<0&&a[r].push(i):a[r]=[i]:a[r]=i;
}
}
function Rr(r,o){
return r.key===o.key&&(r.tag===o.tag&&r.isComment===o.isComment&&t(r.data)===t(o.data)&&Ur(r,o)||n(r.isAsyncPlaceholder)&&r.asyncFactory===o.asyncFactory&&e(o.asyncFactory.error));
}
function Ur(e,n){
if("input"!==e.tag)return!0;
var r,o=t(r=e.data)&&t(r=r.attrs)&&r.type,i=t(r=n.data)&&t(r=r.attrs)&&r.type;
return o===i||Cu(o)&&Cu(i);
}
function Hr(e,n,r){
var o,i,a={};
for(o=n;r>=o;++o)i=e[o].key,t(i)&&(a[i]=o);
return a;
}
function Vr(r){
function i(e){
return new Js(L.tagName(e).toLowerCase(),{},[],void 0,e);
}
function a(e,t){
function n(){
0===--n.listeners&&s(e);
}
return n.listeners=t,n;
}
function s(e){
var n=L.parentNode(e);
t(n)&&L.removeChild(n,e);
}
function u(e,t){
return!(t||e.ns||ps.ignoredElements.length&&ps.ignoredElements.some(function(t){
return c(t)?t.test(e.tag):t===e.tag;
})||!ps.isUnknownElement(e.tag));
}
function l(e,r,o,i,a,s,c){
if(t(e.elm)&&t(s)&&(e=s[c]=I(e)),e.isRootInsert=!a,!f(e,r,o,i)){
var l=e.data,d=e.children,p=e.tag;
t(p)?(l&&l.pre&&F++,u(e,F)&&Ds("Unknown custom element: <"+p+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',e.context),
e.elm=e.ns?L.createElementNS(e.ns,p):L.createElement(p,e),b(e),m(e,d,r),t(l)&&y(e,r),
h(o,e.elm,i),l&&l.pre&&F--):n(e.isComment)?(e.elm=L.createComment(e.text),h(o,e.elm,i)):(e.elm=L.createTextNode(e.text),
h(o,e.elm,i));
}
}
function f(e,r,o,i){
var a=e.data;
if(t(a)){
var s=t(e.componentInstance)&&a.keepAlive;
if(t(a=a.hook)&&t(a=a.init)&&a(e,!1),t(e.componentInstance))return d(e,r),h(o,e.elm,i),
n(s)&&v(e,r,o,i),!0;
}
}
function d(e,n){
t(e.data.pendingInsert)&&(n.push.apply(n,e.data.pendingInsert),e.data.pendingInsert=null),
e.elm=e.componentInstance.$el,g(e)?(y(e,n),b(e)):(Pr(e),n.push(e));
}
function v(e,n,r,o){
for(var i,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,t(i=a.data)&&t(i=i.transition)){
for(i=0;i<E.activate.length;++i)E.activate[i](Ou,a);
n.push(a);
break;
}
h(r,e.elm,o);
}
function h(e,n,r){
t(e)&&(t(r)?L.parentNode(r)===e&&L.insertBefore(e,n,r):L.appendChild(e,n));
}
function m(e,t,n){
if(Array.isArray(t)){
C(t);
for(var r=0;r<t.length;++r)l(t[r],n,e.elm,null,!0,t,r);
}else o(e.text)&&L.appendChild(e.elm,L.createTextNode(String(e.text)));
}
function g(e){
for(;e.componentInstance;)e=e.componentInstance._vnode;
return t(e.tag);
}
function y(e,n){
for(var r=0;r<E.create.length;++r)E.create[r](Ou,e);
j=e.data.hook,t(j)&&(t(j.create)&&j.create(Ou,e),t(j.insert)&&n.push(e));
}
function b(e){
var n;
if(t(n=e.fnScopeId))L.setStyleScope(e.elm,n);else for(var r=e;r;)t(n=r.context)&&t(n=n.$options._scopeId)&&L.setStyleScope(e.elm,n),
r=r.parent;
t(n=jc)&&n!==e.context&&n!==e.fnContext&&t(n=n.$options._scopeId)&&L.setStyleScope(e.elm,n);
}
function _(e,t,n,r,o,i){
for(;o>=r;++r)l(n[r],i,e,t,!1,n,r);
}
function w(e){
var n,r,o=e.data;
if(t(o))for(t(n=o.hook)&&t(n=n.destroy)&&n(e),n=0;n<E.destroy.length;++n)E.destroy[n](e);
if(t(n=e.children))for(r=0;r<e.children.length;++r)w(e.children[r]);
}
function $(e,n,r){
for(;r>=n;++n){
var o=e[n];
t(o)&&(t(o.tag)?(x(o),w(o)):s(o.elm));
}
}
function x(e,n){
if(t(n)||t(e.data)){
var r,o=E.remove.length+1;
for(t(n)?n.listeners+=o:n=a(e.elm,o),t(r=e.componentInstance)&&t(r=r._vnode)&&t(r.data)&&x(r,n),
r=0;r<E.remove.length;++r)E.remove[r](e,n);
t(r=e.data.hook)&&t(r=r.remove)?r(e,n):n();
}else s(e.elm);
}
function k(n,r,o,i,a){
var s,c,u,f,d=0,p=0,v=r.length-1,h=r[0],m=r[v],g=o.length-1,y=o[0],b=o[g],w=!a;
for(C(o);v>=d&&g>=p;)e(h)?h=r[++d]:e(m)?m=r[--v]:Rr(h,y)?(S(h,y,i,o,p),h=r[++d],
y=o[++p]):Rr(m,b)?(S(m,b,i,o,g),m=r[--v],b=o[--g]):Rr(h,b)?(S(h,b,i,o,g),w&&L.insertBefore(n,h.elm,L.nextSibling(m.elm)),
h=r[++d],b=o[--g]):Rr(m,y)?(S(m,y,i,o,p),w&&L.insertBefore(n,m.elm,h.elm),m=r[--v],
y=o[++p]):(e(s)&&(s=Hr(r,d,v)),c=t(y.key)?s[y.key]:A(y,r,d,v),e(c)?l(y,i,n,h.elm,!1,o,p):(u=r[c],
Rr(u,y)?(S(u,y,i,o,p),r[c]=void 0,w&&L.insertBefore(n,u.elm,h.elm)):l(y,i,n,h.elm,!1,o,p)),
y=o[++p]);
d>v?(f=e(o[g+1])?null:o[g+1].elm,_(n,f,o,p,g,i)):p>g&&$(r,d,v);
}
function C(e){
for(var n={},r=0;r<e.length;r++){
var o=e[r],i=o.key;
t(i)&&(n[i]?Ds("Duplicate keys detected: '"+i+"'. This may cause an update error.",o.context):n[i]=!0);
}
}
function A(e,n,r,o){
for(var i=r;o>i;i++){
var a=n[i];
if(t(a)&&Rr(e,a))return i;
}
}
function S(r,o,i,a,s,c){
if(r!==o){
t(o.elm)&&t(a)&&(o=a[s]=I(o));
var u=o.elm=r.elm;
if(n(r.isAsyncPlaceholder))return void(t(o.asyncFactory.resolved)?T(r.elm,o,i):o.isAsyncPlaceholder=!0);
if(n(o.isStatic)&&n(r.isStatic)&&o.key===r.key&&(n(o.isCloned)||n(o.isOnce)))return void(o.componentInstance=r.componentInstance);
var l,f=o.data;
t(f)&&t(l=f.hook)&&t(l=l.prepatch)&&l(r,o);
var d=r.children,p=o.children;
if(t(f)&&g(o)){
for(l=0;l<E.update.length;++l)E.update[l](r,o);
t(l=f.hook)&&t(l=l.update)&&l(r,o);
}
e(o.text)?t(d)&&t(p)?d!==p&&k(u,d,p,i,c):t(p)?(C(p),t(r.text)&&L.setTextContent(u,""),
_(u,null,p,0,p.length-1,i)):t(d)?$(d,0,d.length-1):t(r.text)&&L.setTextContent(u,""):r.text!==o.text&&L.setTextContent(u,o.text),
t(f)&&t(l=f.hook)&&t(l=l.postpatch)&&l(r,o);
}
}
function O(e,r,o){
if(n(o)&&t(e.parent))e.parent.data.pendingInsert=r;else for(var i=0;i<r.length;++i)r[i].data.hook.insert(r[i]);
}
function T(e,r,o,i){
var a,s=r.tag,c=r.data,u=r.children;
if(i=i||c&&c.pre,r.elm=e,n(r.isComment)&&t(r.asyncFactory))return r.isAsyncPlaceholder=!0,
!0;
if(!M(e,r,i))return!1;
if(t(c)&&(t(a=c.hook)&&t(a=a.init)&&a(r,!0),t(a=r.componentInstance)))return d(r,o),
!0;
if(t(s)){
if(t(u))if(e.hasChildNodes())if(t(a=c)&&t(a=a.domProps)&&t(a=a.innerHTML)){
if(a!==e.innerHTML)return"undefined"==typeof console||P||(P=!0,console.warn("Parent: ",e),
console.warn("server innerHTML: ",a),console.warn("client innerHTML: ",e.innerHTML)),
!1;
}else{
for(var l=!0,f=e.firstChild,p=0;p<u.length;p++){
if(!f||!T(f,u[p],o,i)){
l=!1;
break;
}
f=f.nextSibling;
}
if(!l||f)return"undefined"==typeof console||P||(P=!0,console.warn("Parent: ",e),
console.warn("Mismatching childNodes vs. VNodes: ",e.childNodes,u)),!1;
}else m(r,u,o);
if(t(c)){
var v=!1;
for(var h in c)if(!R(h)){
v=!0,y(r,o);
break;
}
!v&&c["class"]&&bt(c["class"]);
}
}else e.data!==r.text&&(e.data=r.text);
return!0;
}
function M(e,n,r){
return t(n.tag)?0===n.tag.indexOf("vue-component")||!u(n,r)&&n.tag.toLowerCase()===(e.tagName&&e.tagName.toLowerCase()):e.nodeType===(n.isComment?8:3);
}
var j,N,E={},D=r.modules,L=r.nodeOps;
for(j=0;j<Tu.length;++j)for(E[Tu[j]]=[],N=0;N<D.length;++N)t(D[N][Tu[j]])&&E[Tu[j]].push(D[N][Tu[j]]);
var F=0,P=!1,R=p("attrs,class,staticClass,staticStyle,key");
return function(r,o,a,s){
if(e(o))return void(t(r)&&w(r));
var c=!1,u=[];
if(e(r))c=!0,l(o,u);else{
var f=t(r.nodeType);
if(!f&&Rr(r,o))S(r,o,u,null,null,s);else{
if(f){
if(1===r.nodeType&&r.hasAttribute(ls)&&(r.removeAttribute(ls),a=!0),n(a)){
if(T(r,o,u))return O(o,u,!0),r;
Ds("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
}
r=i(r);
}
var d=r.elm,p=L.parentNode(d);
if(l(o,u,d._leaveCb?null:p,L.nextSibling(d)),t(o.parent))for(var v=o.parent,h=g(o);v;){
for(var m=0;m<E.destroy.length;++m)E.destroy[m](v);
if(v.elm=o.elm,h){
for(var y=0;y<E.create.length;++y)E.create[y](Ou,v);
var b=v.data.hook.insert;
if(b.merged)for(var _=1;_<b.fns.length;_++)b.fns[_]();
}else Pr(v);
v=v.parent;
}
t(p)?$([r],0,0):t(r.tag)&&w(r);
}
}
return O(o,u,c),o.elm;
};
}
function Br(e,t){
(e.data.directives||t.data.directives)&&zr(e,t);
}
function zr(e,t){
var n,r,o,i=e===Ou,a=t===Ou,s=qr(e.data.directives,e.context),c=qr(t.data.directives,t.context),u=[],l=[];
for(n in c)r=s[n],o=c[n],r?(o.oldValue=r.value,o.oldArg=r.arg,Kr(o,"update",t,e),
o.def&&o.def.componentUpdated&&l.push(o)):(Kr(o,"bind",t,e),o.def&&o.def.inserted&&u.push(o));
if(u.length){
var f=function(){
for(var n=0;n<u.length;n++)Kr(u[n],"inserted",t,e);
};
i?xt(t,"insert",f):f();
}
if(l.length&&xt(t,"postpatch",function(){
for(var n=0;n<l.length;n++)Kr(l[n],"componentUpdated",t,e);
}),!i)for(n in s)c[n]||Kr(s[n],"unbind",e,e,a);
}
function qr(e,t){
var n=Object.create(null);
if(!e)return n;
var r,o;
for(r=0;r<e.length;r++)o=e[r],o.modifiers||(o.modifiers=ju),n[Jr(o)]=o,o.def=tt(t.$options,"directives",o.name,!0);
return n;
}
function Jr(e){
return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".");
}
function Kr(e,t,n,r,o){
var i=e.def&&e.def[t];
if(i)try{
i(n.elm,e,n,r,o);
}catch(a){
pt(a,n.context,"directive "+e.name+" "+t+" hook");
}
}
function Wr(n,r){
var o=r.componentOptions;
if(!(t(o)&&o.Ctor.options.inheritAttrs===!1||e(n.data.attrs)&&e(r.data.attrs))){
var i,a,s,c=r.elm,u=n.data.attrs||{},l=r.data.attrs||{};
t(l.__ob__)&&(l=r.data.attrs=_({},l));
for(i in l)a=l[i],s=u[i],s!==a&&Zr(c,i,a);
(ws||xs)&&l.value!==u.value&&Zr(c,"value",l.value);
for(i in u)e(l[i])&&(mu(i)?c.removeAttributeNS(hu,gu(i)):fu(i)||c.removeAttribute(i));
}
}
function Zr(e,t,n){
e.tagName.indexOf("-")>-1?Gr(e,t,n):vu(t)?yu(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,
e.setAttribute(t,n)):fu(t)?e.setAttribute(t,pu(t,n)):mu(t)?yu(n)?e.removeAttributeNS(hu,gu(t)):e.setAttributeNS(hu,t,n):Gr(e,t,n);
}
function Gr(e,t,n){
if(yu(n))e.removeAttribute(t);else{
if(ws&&!$s&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){
var r=function o(t){
t.stopImmediatePropagation(),e.removeEventListener("input",o);
};
e.addEventListener("input",r),e.__ieph=!0;
}
e.setAttribute(t,n);
}
}
function Yr(n,r){
var o=r.elm,i=r.data,a=n.data;
if(!(e(i.staticClass)&&e(i.class)&&(e(a)||e(a.staticClass)&&e(a.class)))){
var s=mr(r),c=o._transitionClasses;
t(c)&&(s=br(s,_r(c))),s!==o._prevClass&&(o.setAttribute("class",s),o._prevClass=s);
}
}
function Xr(e){
function t(){
(a||(a=[])).push(e.slice(v,o).trim()),v=o+1;
}
var n,r,o,i,a,s=!1,c=!1,u=!1,l=!1,f=0,d=0,p=0,v=0;
for(o=0;o<e.length;o++)if(r=n,n=e.charCodeAt(o),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(o+1)||124===e.charCodeAt(o-1)||f||d||p){
switch(n){
case 34:
c=!0;
break;

case 39:
s=!0;
break;

case 96:
u=!0;
break;

case 40:
p++;
break;

case 41:
p--;
break;

case 91:
d++;
break;

case 93:
d--;
break;

case 123:
f++;
break;

case 125:
f--;
}
if(47===n){
for(var h=o-1,m=void 0;h>=0&&(m=e.charAt(h)," "===m);h--);
m&&Du.test(m)||(l=!0);
}
}else void 0===i?(v=o+1,i=e.slice(0,o).trim()):t();
if(void 0===i?i=e.slice(0,o).trim():0!==v&&t(),a)for(o=0;o<a.length;o++)i=Qr(i,a[o]);
return i;
}
function Qr(e,t){
var n=t.indexOf("(");
if(0>n)return'_f("'+t+'")('+e+")";
var r=t.slice(0,n),o=t.slice(n+1);
return'_f("'+r+'")('+e+(")"!==o?","+o:o);
}
function eo(e){
console.error("[Vue compiler]: "+e);
}
function to(e,t){
return e?e.map(function(e){
return e[t];
}).filter(function(e){
return e;
}):[];
}
function no(e,t,n,r,o){
(e.props||(e.props=[])).push(po({
name:t,
value:n,
dynamic:o
},r)),e.plain=!1;
}
function ro(e,t,n,r,o){
var i=o?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[]);
i.push(po({
name:t,
value:n,
dynamic:o
},r)),e.plain=!1;
}
function oo(e,t,n,r){
e.attrsMap[t]=n,e.attrsList.push(po({
name:t,
value:n
},r));
}
function io(e,t,n,r,o,i,a,s){
(e.directives||(e.directives=[])).push(po({
name:t,
rawName:n,
value:r,
arg:o,
isDynamicArg:i,
modifiers:a
},s)),e.plain=!1;
}
function ao(e,t,n){
return n?"_p("+t+',"'+e+'")':e+t;
}
function so(e,t,n,r,o,i,a,s){
r=r||Ya,i&&r.prevent&&r.passive&&i("passive and prevent can't be used together. Passive handler can't prevent default event.",a),
r.right?s?t="("+t+")==='click'?'contextmenu':("+t+")":"click"===t&&(t="contextmenu",
delete r.right):r.middle&&(s?t="("+t+")==='click'?'mouseup':("+t+")":"click"===t&&(t="mouseup")),
r.capture&&(delete r.capture,t=ao("!",t,s)),r.once&&(delete r.once,t=ao("~",t,s)),
r.passive&&(delete r.passive,t=ao("&",t,s));
var c;
r.native?(delete r.native,c=e.nativeEvents||(e.nativeEvents={})):c=e.events||(e.events={});
var u=po({
value:n.trim(),
dynamic:s
},a);
r!==Ya&&(u.modifiers=r);
var l=c[t];
Array.isArray(l)?o?l.unshift(u):l.push(u):c[t]=l?o?[u,l]:[l,u]:u,e.plain=!1;
}
function co(e,t){
return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t];
}
function uo(e,t,n){
var r=lo(e,":"+t)||lo(e,"v-bind:"+t);
if(null!=r)return Xr(r);
if(n!==!1){
var o=lo(e,t);
if(null!=o)return JSON.stringify(o);
}
}
function lo(e,t,n){
var r;
if(null!=(r=e.attrsMap[t]))for(var o=e.attrsList,i=0,a=o.length;a>i;i++)if(o[i].name===t){
o.splice(i,1);
break;
}
return n&&delete e.attrsMap[t],r;
}
function fo(e,t){
for(var n=e.attrsList,r=0,o=n.length;o>r;r++){
var i=n[r];
if(t.test(i.name))return n.splice(r,1),i;
}
}
function po(e,t){
return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e;
}
function vo(e,t,n){
var r=n||{},o=r.number,i=r.trim,a="$$v",s=a;
i&&(s="(typeof "+a+" === 'string'? "+a+".trim(): "+a+")"),o&&(s="_n("+s+")");
var c=ho(t,s);
e.model={
value:"("+t+")",
expression:JSON.stringify(t),
callback:"function ("+a+") {"+c+"}"
};
}
function ho(e,t){
var n=mo(e);
return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")";
}
function mo(e){
if(e=e.trim(),Xc=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Xc-1)return tu=e.lastIndexOf("."),
tu>-1?{
exp:e.slice(0,tu),
key:'"'+e.slice(tu+1)+'"'
}:{
exp:e,
key:null
};
for(Qc=e,tu=nu=ru=0;!yo();)eu=go(),bo(eu)?wo(eu):91===eu&&_o(eu);
return{
exp:e.slice(0,nu),
key:e.slice(nu+1,ru)
};
}
function go(){
return Qc.charCodeAt(++tu);
}
function yo(){
return tu>=Xc;
}
function bo(e){
return 34===e||39===e;
}
function _o(e){
var t=1;
for(nu=tu;!yo();)if(e=go(),bo(e))wo(e);else if(91===e&&t++,93===e&&t--,0===t){
ru=tu;
break;
}
}
function wo(e){
for(var t=e;!yo()&&(e=go(),e!==t););
}
function $o(e,t,n){
ou=n;
var r=t.value,o=t.modifiers,i=e.tag,a=e.attrsMap.type;
if("input"===i&&"file"===a&&ou("<"+e.tag+' v-model="'+r+'" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.',e.rawAttrsMap["v-model"]),
e.component)return vo(e,r,o),!1;
if("select"===i)Co(e,r,o);else if("input"===i&&"checkbox"===a)xo(e,r,o);else if("input"===i&&"radio"===a)ko(e,r,o);else if("input"===i||"textarea"===i)Ao(e,r,o);else{
if(!ps.isReservedTag(i))return vo(e,r,o),!1;
ou("<"+e.tag+' v-model="'+r+"\">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.",e.rawAttrsMap["v-model"]);
}
return!0;
}
function xo(e,t,n){
var r=n&&n.number,o=uo(e,"value")||"null",i=uo(e,"true-value")||"true",a=uo(e,"false-value")||"false";
no(e,"checked","Array.isArray("+t+")?_i("+t+","+o+")>-1"+("true"===i?":("+t+")":":_q("+t+","+i+")")),
so(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+i+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+o+")":o)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+ho(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+ho(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+ho(t,"$$c")+"}",null,!0);
}
function ko(e,t,n){
var r=n&&n.number,o=uo(e,"value")||"null";
o=r?"_n("+o+")":o,no(e,"checked","_q("+t+","+o+")"),so(e,"change",ho(t,o),null,!0);
}
function Co(e,t,n){
var r=n&&n.number,o='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",i="$event.target.multiple ? $$selectedVal : $$selectedVal[0]",a="var $$selectedVal = "+o+";";
a=a+" "+ho(t,i),so(e,"change",a,null,!0);
}
function Ao(e,t,n){
var r=e.attrsMap.type,o=e.attrsMap["v-bind:value"]||e.attrsMap[":value"],i=e.attrsMap["v-bind:type"]||e.attrsMap[":type"];
if(o&&!i){
var a=e.attrsMap["v-bind:value"]?"v-bind:value":":value";
ou(a+'="'+o+'" conflicts with v-model on the same element because the latter already expands to a value binding internally',e.rawAttrsMap[a]);
}
var s=n||{},c=s.lazy,u=s.number,l=s.trim,f=!c&&"range"!==r,d=c?"change":"range"===r?Lu:"input",p="$event.target.value";
l&&(p="$event.target.value.trim()"),u&&(p="_n("+p+")");
var v=ho(t,p);
f&&(v="if($event.target.composing)return;"+v),no(e,"value","("+t+")"),so(e,d,v,null,!0),
(l||u)&&so(e,"blur","$forceUpdate()");
}
function So(e){
if(t(e[Lu])){
var n=ws?"change":"input";
e[n]=[].concat(e[Lu],e[n]||[]),delete e[Lu];
}
t(e[Fu])&&(e.change=[].concat(e[Fu],e.change||[]),delete e[Fu]);
}
function Oo(e,t,n){
var r=iu;
return function o(){
var i=t.apply(null,arguments);
null!==i&&Mo(e,o,n,r);
};
}
function To(e,t,n,r){
if(Pu){
var o=Hc,i=t;
t=i._wrapper=function(e){
return e.target===e.currentTarget||e.timeStamp>=o||e.timeStamp<=0||e.target.ownerDocument!==document?i.apply(this,arguments):void 0;
};
}
iu.addEventListener(e,t,Ss?{
capture:n,
passive:r
}:n);
}
function Mo(e,t,n,r){
(r||iu).removeEventListener(e,t._wrapper||t,n);
}
function jo(t,n){
if(!e(t.data.on)||!e(n.data.on)){
var r=n.data.on||{},o=t.data.on||{};
iu=n.elm,So(r),$t(r,o,To,Mo,Oo,n.context),iu=void 0;
}
}
function No(n,r){
if(!e(n.data.domProps)||!e(r.data.domProps)){
var o,i,a=r.elm,s=n.data.domProps||{},c=r.data.domProps||{};
t(c.__ob__)&&(c=r.data.domProps=_({},c));
for(o in s)o in c||(a[o]="");
for(o in c){
if(i=c[o],"textContent"===o||"innerHTML"===o){
if(r.children&&(r.children.length=0),i===s[o])continue;
1===a.childNodes.length&&a.removeChild(a.childNodes[0]);
}
if("value"===o&&"PROGRESS"!==a.tagName){
a._value=i;
var u=e(i)?"":String(i);
Eo(a,u)&&(a.value=u);
}else if("innerHTML"===o&&wu(a.tagName)&&e(a.innerHTML)){
au=au||document.createElement("div"),au.innerHTML="<svg>"+i+"</svg>";
for(var l=au.firstChild;a.firstChild;)a.removeChild(a.firstChild);
for(;l.firstChild;)a.appendChild(l.firstChild);
}else if(i!==s[o])try{
a[o]=i;
}catch(f){}
}
}
}
function Eo(e,t){
return!e.composing&&("OPTION"===e.tagName||Io(e,t)||Do(e,t));
}
function Io(e,t){
var n=!0;
try{
n=document.activeElement!==e;
}catch(r){}
return n&&e.value!==t;
}
function Do(e,n){
var r=e.value,o=e._vModifiers;
if(t(o)){
if(o.number)return d(r)!==d(n);
if(o.trim)return r.trim()!==n.trim();
}
return r!==n;
}
function Lo(e){
var t=Fo(e.style);
return e.staticStyle?_(e.staticStyle,t):t;
}
function Fo(e){
return Array.isArray(e)?w(e):"string"==typeof e?Hu(e):e;
}
function Po(e,t){
var n,r={};
if(t)for(var o=e;o.componentInstance;)o=o.componentInstance._vnode,o&&o.data&&(n=Lo(o.data))&&_(r,n);
(n=Lo(e.data))&&_(r,n);
for(var i=e;i=i.parent;)i.data&&(n=Lo(i.data))&&_(r,n);
return r;
}
function Ro(n,r){
var o=r.data,i=n.data;
if(!(e(o.staticStyle)&&e(o.style)&&e(i.staticStyle)&&e(i.style))){
var a,s,c=r.elm,u=i.staticStyle,l=i.normalizedStyle||i.style||{},f=u||l,d=Fo(r.data.style)||{};
r.data.normalizedStyle=t(d.__ob__)?_({},d):d;
var p=Po(r,!0);
for(s in f)e(p[s])&&zu(c,s,"");
for(s in p)a=p[s],a!==f[s]&&zu(c,s,null==a?"":a);
}
}
function Uo(e,t){
if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Wu).forEach(function(t){
return e.classList.add(t);
}):e.classList.add(t);else{
var n=" "+(e.getAttribute("class")||"")+" ";
n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim());
}
}
function Ho(e,t){
if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Wu).forEach(function(t){
return e.classList.remove(t);
}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{
for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");
n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class");
}
}
function Vo(e){
if(e){
if("object"===("undefined"==typeof e?"undefined":_typeof(e))){
var t={};
return e.css!==!1&&_(t,Zu(e.name||"v")),_(t,e),t;
}
return"string"==typeof e?Zu(e):void 0;
}
}
function Bo(e){
rl(function(){
rl(e);
});
}
function zo(e,t){
var n=e._transitionClasses||(e._transitionClasses=[]);
n.indexOf(t)<0&&(n.push(t),Uo(e,t));
}
function qo(e,t){
e._transitionClasses&&v(e._transitionClasses,t),Ho(e,t);
}
function Jo(e,t,n){
var r=Ko(e,t),o=r.type,i=r.timeout,a=r.propCount;
if(!o)return n();
var s=o===Yu?el:nl,c=0,u=function(){
e.removeEventListener(s,l),n();
},l=function(t){
t.target===e&&++c>=a&&u();
};
setTimeout(function(){
a>c&&u();
},i+1),e.addEventListener(s,l);
}
function Ko(e,t){
var n,r=window.getComputedStyle(e),o=(r[Qu+"Delay"]||"").split(", "),i=(r[Qu+"Duration"]||"").split(", "),a=Wo(o,i),s=(r[tl+"Delay"]||"").split(", "),c=(r[tl+"Duration"]||"").split(", "),u=Wo(s,c),l=0,f=0;
t===Yu?a>0&&(n=Yu,l=a,f=i.length):t===Xu?u>0&&(n=Xu,l=u,f=c.length):(l=Math.max(a,u),
n=l>0?a>u?Yu:Xu:null,f=n?n===Yu?i.length:c.length:0);
var d=n===Yu&&ol.test(r[Qu+"Property"]);
return{
type:n,
timeout:l,
propCount:f,
hasTransform:d
};
}
function Wo(e,t){
for(;e.length<t.length;)e=e.concat(e);
return Math.max.apply(null,t.map(function(t,n){
return Zo(t)+Zo(e[n]);
}));
}
function Zo(e){
return 1e3*Number(e.slice(0,-1).replace(",","."));
}
function Go(n,r){
var o=n.elm;
t(o._leaveCb)&&(o._leaveCb.cancelled=!0,o._leaveCb());
var a=Vo(n.data.transition);
if(!e(a)&&!t(o._enterCb)&&1===o.nodeType){
for(var s=a.css,c=a.type,u=a.enterClass,l=a.enterToClass,f=a.enterActiveClass,p=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,g=a.enter,y=a.afterEnter,b=a.enterCancelled,_=a.beforeAppear,w=a.appear,$=a.afterAppear,x=a.appearCancelled,k=a.duration,C=jc,S=jc.$vnode;S&&S.parent;)C=S.context,
S=S.parent;
var O=!C._isMounted||!n.isRootInsert;
if(!O||w||""===w){
var T=O&&p?p:u,M=O&&h?h:f,j=O&&v?v:l,N=O?_||m:m,E=O&&"function"==typeof w?w:g,I=O?$||y:y,D=O?x||b:b,L=d(i(k)?k.enter:k);
null!=L&&Xo(L,"enter",n);
var F=s!==!1&&!$s,P=ei(E),R=o._enterCb=A(function(){
F&&(qo(o,j),qo(o,M)),R.cancelled?(F&&qo(o,T),D&&D(o)):I&&I(o),o._enterCb=null;
});
n.data.show||xt(n,"insert",function(){
var e=o.parentNode,t=e&&e._pending&&e._pending[n.key];
t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),E&&E(o,R);
}),N&&N(o),F&&(zo(o,T),zo(o,M),Bo(function(){
qo(o,T),R.cancelled||(zo(o,j),P||(Qo(L)?setTimeout(R,L):Jo(o,c,R)));
})),n.data.show&&(r&&r(),E&&E(o,R)),F||P||R();
}
}
}
function Yo(n,r){
function o(){
x.cancelled||(!n.data.show&&a.parentNode&&((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),
v&&v(a),_&&(zo(a,l),zo(a,p),Bo(function(){
qo(a,l),x.cancelled||(zo(a,f),w||(Qo($)?setTimeout(x,$):Jo(a,u,x)));
})),h&&h(a,x),_||w||x());
}
var a=n.elm;
t(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());
var s=Vo(n.data.transition);
if(e(s)||1!==a.nodeType)return r();
if(!t(a._leaveCb)){
var c=s.css,u=s.type,l=s.leaveClass,f=s.leaveToClass,p=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,g=s.leaveCancelled,y=s.delayLeave,b=s.duration,_=c!==!1&&!$s,w=ei(h),$=d(i(b)?b.leave:b);
t($)&&Xo($,"leave",n);
var x=a._leaveCb=A(function(){
a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),_&&(qo(a,f),
qo(a,p)),x.cancelled?(_&&qo(a,l),g&&g(a)):(r(),m&&m(a)),a._leaveCb=null;
});
y?y(o):o();
}
}
function Xo(e,t,n){
"number"!=typeof e?Ds("<transition> explicit "+t+" duration is not a valid number - got "+JSON.stringify(e)+".",n.context):isNaN(e)&&Ds("<transition> explicit "+t+" duration is NaN - the duration expression might be incorrect.",n.context);
}
function Qo(e){
return"number"==typeof e&&!isNaN(e);
}
function ei(n){
if(e(n))return!1;
var r=n.fns;
return t(r)?ei(Array.isArray(r)?r[0]:r):(n._length||n.length)>1;
}
function ti(e,t){
t.data.show!==!0&&Go(t);
}
function ni(e,t,n){
ri(e,t,n),(ws||xs)&&setTimeout(function(){
ri(e,t,n);
},0);
}
function ri(e,t,n){
var r=t.value,o=e.multiple;
if(o&&!Array.isArray(r))return void Ds('<select multiple v-model="'+t.expression+'"> expects an Array value for its binding, but got '+Object.prototype.toString.call(r).slice(8,-1),n);
for(var i,a,s=0,c=e.options.length;c>s;s++)if(a=e.options[s],o)i=C(r,ii(a))>-1,a.selected!==i&&(a.selected=i);else if(k(ii(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));
o||(e.selectedIndex=-1);
}
function oi(e,t){
return t.every(function(t){
return!k(t,e);
});
}
function ii(e){
return"_value"in e?e._value:e.value;
}
function ai(e){
e.target.composing=!0;
}
function si(e){
e.target.composing&&(e.target.composing=!1,ci(e.target,"input"));
}
function ci(e,t){
var n=document.createEvent("HTMLEvents");
n.initEvent(t,!0,!0),e.dispatchEvent(n);
}
function ui(e){
return!e.componentInstance||e.data&&e.data.transition?e:ui(e.componentInstance._vnode);
}
function li(e){
var t=e&&e.componentOptions;
return t&&t.Ctor.options.abstract?li(bn(t.children)):e;
}
function fi(e){
var t={},n=e.$options;
for(var r in n.propsData)t[r]=e[r];
var o=n._parentListeners;
for(var i in o)t[rs(i)]=o[i];
return t;
}
function di(e,t){
return/\d-keep-alive$/.test(t.tag)?e("keep-alive",{
props:t.componentOptions.propsData
}):void 0;
}
function pi(e){
for(;e=e.parent;)if(e.data.transition)return!0;
}
function vi(e,t){
return t.key===e.key&&t.tag===e.tag;
}
function hi(e){
e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb();
}
function mi(e){
e.data.newPos=e.elm.getBoundingClientRect();
}
function gi(e){
var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,o=t.top-n.top;
if(r||o){
e.data.moved=!0;
var i=e.elm.style;
i.transform=i.WebkitTransform="translate("+r+"px,"+o+"px)",i.transitionDuration="0s";
}
}
function yi(e,t){
var n=t?Il(t):Nl;
if(n.test(e)){
for(var r,o,i,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){
o=r.index,o>c&&(s.push(i=e.slice(c,o)),a.push(JSON.stringify(i)));
var u=Xr(r[1].trim());
a.push("_s("+u+")"),s.push({
"@binding":u
}),c=o+r[0].length;
}
return c<e.length&&(s.push(i=e.slice(c)),a.push(JSON.stringify(i))),{
expression:a.join("+"),
tokens:s
};
}
}
function bi(e,t){
var n=t.warn||eo,r=lo(e,"class");
if(r){
var o=yi(r,t.delimiters);
o&&n('class="'+r+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.',e.rawAttrsMap["class"]);
}
r&&(e.staticClass=JSON.stringify(r));
var i=uo(e,"class",!1);
i&&(e.classBinding=i);
}
function _i(e){
var t="";
return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),
t;
}
function wi(e,t){
var n=t.warn||eo,r=lo(e,"style");
if(r){
var o=yi(r,t.delimiters);
o&&n('style="'+r+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.',e.rawAttrsMap.style),
e.staticStyle=JSON.stringify(Hu(r));
}
var i=uo(e,"style",!1);
i&&(e.styleBinding=i);
}
function $i(e){
var t="";
return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),
t;
}
function xi(e,t){
var n=t?tf:ef;
return e.replace(n,function(e){
return Ql[e];
});
}
function ki(e,t){
function n(t){
d+=t,e=e.substring(t);
}
function r(){
var t=e.match(ql);
if(t){
var r={
tagName:t[1],
attrs:[],
start:d
};
n(t[0].length);
for(var o,i;!(o=e.match(Jl))&&(i=e.match(Vl)||e.match(Hl));)i.start=d,n(i[0].length),
i.end=d,r.attrs.push(i);
if(o)return r.unarySlash=o[1],n(o[0].length),r.end=d,r;
}
}
function o(e){
var n=e.tagName,r=e.unarySlash;
u&&("p"===s&&Ul(n)&&i(s),f(n)&&s===n&&i(n));
for(var o=l(n)||!!r,a=e.attrs.length,d=new Array(a),p=0;a>p;p++){
var v=e.attrs[p],h=v[3]||v[4]||v[5]||"",m="a"===n&&"href"===v[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;
d[p]={
name:v[1],
value:xi(h,m)
},t.outputSourceRange&&(d[p].start=v.start+v[0].match(/^\s*/).length,d[p].end=v.end);
}
o||(c.push({
tag:n,
lowerCasedTag:n.toLowerCase(),
attrs:d,
start:e.start,
end:e.end
}),s=n),t.start&&t.start(n,d,o,e.start,e.end);
}
function i(e,n,r){
var o,i;
if(null==n&&(n=d),null==r&&(r=d),e)for(i=e.toLowerCase(),o=c.length-1;o>=0&&c[o].lowerCasedTag!==i;o--);else o=0;
if(o>=0){
for(var a=c.length-1;a>=o;a--)(a>o||!e&&t.warn)&&t.warn("tag <"+c[a].tag+"> has no matching end tag.",{
start:c[a].start,
end:c[a].end
}),t.end&&t.end(c[a].tag,n,r);
c.length=o,s=o&&c[o-1].tag;
}else"br"===i?t.start&&t.start(e,[],!0,n,r):"p"===i&&(t.start&&t.start(e,[],!1,n,r),
t.end&&t.end(e,n,r));
}
for(var a,s,c=[],u=t.expectHTML,l=t.isUnaryTag||cs,f=t.canBeLeftOpenTag||cs,d=0;e;){
if(a=e,s&&Yl(s)){
var p=0,v=s.toLowerCase(),h=Xl[v]||(Xl[v]=new RegExp("([\\s\\S]*?)(</"+v+"[^>]*>)","i")),m=e.replace(h,function(e,n,r){
return p=r.length,Yl(v)||"noscript"===v||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),
rf(v,n)&&(n=n.slice(1)),t.chars&&t.chars(n),"";
});
d+=e.length-m.length,e=m,i(v,d-p,d);
}else{
var g=e.indexOf("<");
if(0===g){
if(Zl.test(e)){
var y=e.indexOf("-->");
if(y>=0){
t.shouldKeepComment&&t.comment(e.substring(4,y),d,d+y+3),n(y+3);
continue;
}
}
if(Gl.test(e)){
var b=e.indexOf("]>");
if(b>=0){
n(b+2);
continue;
}
}
var _=e.match(Wl);
if(_){
n(_[0].length);
continue;
}
var w=e.match(Kl);
if(w){
var $=d;
n(w[0].length),i(w[1],$,d);
continue;
}
var x=r();
if(x){
o(x),rf(x.tagName,e)&&n(1);
continue;
}
}
var k=void 0,C=void 0,A=void 0;
if(g>=0){
for(C=e.slice(g);!(Kl.test(C)||ql.test(C)||Zl.test(C)||Gl.test(C)||(A=C.indexOf("<",1),
0>A));)g+=A,C=e.slice(g);
k=e.substring(0,g);
}
0>g&&(k=e),k&&n(k.length),t.chars&&k&&t.chars(k,d-k.length,d);
}
if(e===a){
t.chars&&t.chars(e),!c.length&&t.warn&&t.warn('Mal-formatted tag at end of template: "'+e+'"',{
start:d+e.length
});
break;
}
}
i();
}
function Ci(e,t,n){
return{
type:1,
tag:e,
attrsList:t,
attrsMap:Ji(t),
rawAttrsMap:{},
parent:n,
children:[]
};
}
function Ai(e,t){
function n(e,t){
v||(v=!0,_l(e,t));
}
function r(e){
if(o(e),d||e.processed||(e=Ti(e,t)),u.length||e===s||(s.if&&(e.elseif||e.else)?(i(e),
Fi(s,{
exp:e.elseif,
block:e
})):n("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.",{
start:e.start
})),c&&!e.forbidden)if(e.elseif||e.else)Di(e,c);else{
if(e.slotScope){
var r=e.slotTarget||'"default"';
(c.scopedSlots||(c.scopedSlots={}))[r]=e;
}
c.children.push(e),e.parent=c;
}
e.children=e.children.filter(function(e){
return!e.slotScope;
}),o(e),e.pre&&(d=!1),Cl(e.tag)&&(p=!1);
for(var a=0;a<kl.length;a++)kl[a](e,t);
}
function o(e){
if(!p)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop();
}
function i(e){
("slot"===e.tag||"template"===e.tag)&&n("Cannot use <"+e.tag+"> as component root element because it may contain multiple nodes.",{
start:e.start
}),e.attrsMap.hasOwnProperty("v-for")&&n("Cannot use v-for on stateful component root element because it renders multiple elements.",e.rawAttrsMap["v-for"]);
}
_l=t.warn||eo,Cl=t.isPreTag||cs,Al=t.mustUseProp||cs,Sl=t.getTagNamespace||cs;
var a=t.isReservedTag||cs;
Ol=function(e){
return!!e.component||!a(e.tag);
},$l=to(t.modules,"transformNode"),xl=to(t.modules,"preTransformNode"),kl=to(t.modules,"postTransformNode"),
wl=t.delimiters;
var s,c,u=[],l=t.preserveWhitespace!==!1,f=t.whitespace,d=!1,p=!1,v=!1;
return ki(e,{
warn:_l,
expectHTML:t.expectHTML,
isUnaryTag:t.isUnaryTag,
canBeLeftOpenTag:t.canBeLeftOpenTag,
shouldDecodeNewlines:t.shouldDecodeNewlines,
shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,
shouldKeepComment:t.comments,
outputSourceRange:t.outputSourceRange,
start:function(e,n,o,a,l){
var f=c&&c.ns||Sl(e);
ws&&"svg"===f&&(n=Zi(n));
var v=Ci(e,n,c);
f&&(v.ns=f),t.outputSourceRange&&(v.start=a,v.end=l,v.rawAttrsMap=v.attrsList.reduce(function(e,t){
return e[t.name]=t,e;
},{})),n.forEach(function(e){
gf.test(e.name)&&_l("Invalid dynamic argument expression: attribute names cannot contain spaces, quotes, <, >, / or =.",{
start:e.start+e.name.indexOf("["),
end:e.start+e.name.length
});
}),Wi(v)&&!Ns()&&(v.forbidden=!0,_l("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <"+e+">, as they will not be parsed.",{
start:v.start
}));
for(var h=0;h<xl.length;h++)v=xl[h](v,t)||v;
d||(Si(v),v.pre&&(d=!0)),Cl(v.tag)&&(p=!0),d?Oi(v):v.processed||(Ni(v),Ii(v),Pi(v)),
s||(s=v,i(s)),o?r(v):(c=v,u.push(v));
},
end:function(e,n,o){
var i=u[u.length-1];
u.length-=1,c=u[u.length-1],t.outputSourceRange&&(i.end=o),r(i);
},
chars:function(r,o,i){
if(!c)return void(r===e?n("Component template requires a root element, rather than just text.",{
start:o
}):(r=r.trim())&&n('text "'+r+'" outside root element will be ignored.',{
start:o
}));
if(!ws||"textarea"!==c.tag||c.attrsMap.placeholder!==r){
var a=c.children;
if(r=p||r.trim()?Ki(c)?r:yf(r):a.length?f?"condense"===f&&hf.test(r)?"":" ":l?" ":"":""){
p||"condense"!==f||(r=r.replace(mf," "));
var s,u;
!d&&" "!==r&&(s=yi(r,wl))?u={
type:2,
expression:s.expression,
tokens:s.tokens,
text:r
}:" "===r&&a.length&&" "===a[a.length-1].text||(u={
type:3,
text:r
}),u&&(t.outputSourceRange&&(u.start=o,u.end=i),a.push(u));
}
}
},
comment:function(e,n,r){
if(c){
var o={
type:3,
text:e,
isComment:!0
};
t.outputSourceRange&&(o.start=n,o.end=r),c.children.push(o);
}
}
}),s;
}
function Si(e){
null!=lo(e,"v-pre")&&(e.pre=!0);
}
function Oi(e){
var t=e.attrsList,n=t.length;
if(n)for(var r=e.attrs=new Array(n),o=0;n>o;o++)r[o]={
name:t[o].name,
value:JSON.stringify(t[o].value)
},null!=t[o].start&&(r[o].start=t[o].start,r[o].end=t[o].end);else e.pre||(e.plain=!0);
}
function Ti(e,t){
Mi(e),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,ji(e),Ri(e),Hi(e),Vi(e);
for(var n=0;n<$l.length;n++)e=$l[n](e,t)||e;
return Bi(e),e;
}
function Mi(e){
var t=uo(e,"key");
if(t){
if("template"===e.tag&&_l("<template> cannot be keyed. Place the key on real elements instead.",co(e,"key")),
e.for){
var n=e.iterator2||e.iterator1,r=e.parent;
n&&n===t&&r&&"transition-group"===r.tag&&_l("Do not use v-for index as key on <transition-group> children, this is the same as not using keys.",co(e,"key"),!0);
}
e.key=t;
}
}
function ji(e){
var t=uo(e,"ref");
t&&(e.ref=t,e.refInFor=zi(e));
}
function Ni(e){
var t;
if(t=lo(e,"v-for")){
var n=Ei(t);
n?_(e,n):_l("Invalid v-for expression: "+t,e.rawAttrsMap["v-for"]);
}
}
function Ei(e){
var t=e.match(sf);
if(t){
var n={};
n.for=t[2].trim();
var r=t[1].trim().replace(uf,""),o=r.match(cf);
return o?(n.alias=r.replace(cf,"").trim(),n.iterator1=o[1].trim(),o[2]&&(n.iterator2=o[2].trim())):n.alias=r,
n;
}
}
function Ii(e){
var t=lo(e,"v-if");
if(t)e.if=t,Fi(e,{
exp:t,
block:e
});else{
null!=lo(e,"v-else")&&(e.else=!0);
var n=lo(e,"v-else-if");
n&&(e.elseif=n);
}
}
function Di(e,t){
var n=Li(t.children);
n&&n.if?Fi(n,{
exp:e.elseif,
block:e
}):_l("v-"+(e.elseif?'else-if="'+e.elseif+'"':"else")+" used on element <"+e.tag+"> without corresponding v-if.",e.rawAttrsMap[e.elseif?"v-else-if":"v-else"]);
}
function Li(e){
for(var t=e.length;t--;){
if(1===e[t].type)return e[t];
" "!==e[t].text&&_l('text "'+e[t].text.trim()+'" between v-if and v-else(-if) will be ignored.',e[t]),
e.pop();
}
}
function Fi(e,t){
e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t);
}
function Pi(e){
var t=lo(e,"v-once");
null!=t&&(e.once=!0);
}
function Ri(e){
var t;
"template"===e.tag?(t=lo(e,"scope"),t&&_l('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.',e.rawAttrsMap.scope,!0),
e.slotScope=t||lo(e,"slot-scope")):(t=lo(e,"slot-scope"))&&(e.attrsMap["v-for"]&&_l("Ambiguous combined usage of slot-scope and v-for on <"+e.tag+"> (v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.",e.rawAttrsMap["slot-scope"],!0),
e.slotScope=t);
var n=uo(e,"slot");
if(n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),
"template"===e.tag||e.slotScope||ro(e,"slot",n,co(e,"slot"))),"template"===e.tag){
var r=fo(e,vf);
if(r){
(e.slotTarget||e.slotScope)&&_l("Unexpected mixed usage of different slot syntaxes.",e),
e.parent&&!Ol(e.parent)&&_l("<template v-slot> can only appear at the root level inside the receiving component",e);
var o=Ui(r),i=o.name,a=o.dynamic;
e.slotTarget=i,e.slotTargetDynamic=a,e.slotScope=r.value||bf;
}
}else{
var s=fo(e,vf);
if(s){
Ol(e)||_l("v-slot can only be used on components or <template>.",s),(e.slotScope||e.slotTarget)&&_l("Unexpected mixed usage of different slot syntaxes.",e),
e.scopedSlots&&_l("To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots.",s);
var c=e.scopedSlots||(e.scopedSlots={}),u=Ui(s),l=u.name,f=u.dynamic,d=c[l]=Ci("template",[],e);
d.slotTarget=l,d.slotTargetDynamic=f,d.children=e.children.filter(function(e){
return e.slotScope?void 0:(e.parent=d,!0);
}),d.slotScope=s.value||bf,e.children=[],e.plain=!1;
}
}
}
function Ui(e){
var t=e.name.replace(vf,"");
return t||("#"!==e.name[0]?t="default":_l("v-slot shorthand syntax requires a slot name.",e)),
lf.test(t)?{
name:t.slice(1,-1),
dynamic:!0
}:{
name:'"'+t+'"',
dynamic:!1
};
}
function Hi(e){
"slot"===e.tag&&(e.slotName=uo(e,"name"),e.key&&_l("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.",co(e,"key")));
}
function Vi(e){
var t;
(t=uo(e,"is"))&&(e.component=t),null!=lo(e,"inline-template")&&(e.inlineTemplate=!0);
}
function Bi(e){
var t,n,r,o,i,a,s,c,u=e.attrsList;
for(t=0,n=u.length;n>t;t++)if(r=o=u[t].name,i=u[t].value,af.test(r))if(e.hasBindings=!0,
a=qi(r.replace(af,"")),a&&(r=r.replace(pf,"")),df.test(r))r=r.replace(df,""),i=Xr(i),
c=lf.test(r),c&&(r=r.slice(1,-1)),0===i.trim().length&&_l('The value for a v-bind expression cannot be empty. Found in "v-bind:'+r+'"'),
a&&(a.prop&&!c&&(r=rs(r),"innerHtml"===r&&(r="innerHTML")),a.camel&&!c&&(r=rs(r)),
a.sync&&(s=ho(i,"$event"),c?so(e,'"update:"+('+r+")",s,null,!1,_l,u[t],!0):(so(e,"update:"+rs(r),s,null,!1,_l,u[t]),
as(r)!==rs(r)&&so(e,"update:"+as(r),s,null,!1,_l,u[t])))),a&&a.prop||!e.component&&Al(e.tag,e.attrsMap.type,r)?no(e,r,i,u[t],c):ro(e,r,i,u[t],c);else if(of.test(r))r=r.replace(of,""),
c=lf.test(r),c&&(r=r.slice(1,-1)),so(e,r,i,a,!1,_l,u[t],c);else{
r=r.replace(af,"");
var l=r.match(ff),f=l&&l[1];
c=!1,f&&(r=r.slice(0,-(f.length+1)),lf.test(f)&&(f=f.slice(1,-1),c=!0)),io(e,r,o,i,f,c,a,u[t]),
"model"===r&&Gi(e,i);
}else{
var d=yi(i,wl);
d&&_l(r+'="'+i+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.',u[t]),
ro(e,r,JSON.stringify(i),u[t]),!e.component&&"muted"===r&&Al(e.tag,e.attrsMap.type,r)&&no(e,r,"true",u[t]);
}
}
function zi(e){
for(var t=e;t;){
if(void 0!==t.for)return!0;
t=t.parent;
}
return!1;
}
function qi(e){
var t=e.match(pf);
if(t){
var n={};
return t.forEach(function(e){
n[e.slice(1)]=!0;
}),n;
}
}
function Ji(e){
for(var t={},n=0,r=e.length;r>n;n++)!t[e[n].name]||ws||xs||_l("duplicate attribute: "+e[n].name,e[n]),
t[e[n].name]=e[n].value;
return t;
}
function Ki(e){
return"script"===e.tag||"style"===e.tag;
}
function Wi(e){
return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type);
}
function Zi(e){
for(var t=[],n=0;n<e.length;n++){
var r=e[n];
_f.test(r.name)||(r.name=r.name.replace(wf,""),t.push(r));
}
return t;
}
function Gi(e,t){
for(var n=e;n;)n.for&&n.alias===t&&_l("<"+e.tag+' v-model="'+t+'">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.',e.rawAttrsMap["v-model"]),
n=n.parent;
}
function Yi(e,t){
if("input"===e.tag){
var n=e.attrsMap;
if(!n["v-model"])return;
var r;
if((n[":type"]||n["v-bind:type"])&&(r=uo(e,"type")),n.type||r||!n["v-bind"]||(r="("+n["v-bind"]+").type"),
r){
var o=lo(e,"v-if",!0),i=o?"&&("+o+")":"",a=null!=lo(e,"v-else",!0),s=lo(e,"v-else-if",!0),c=Xi(e);
Ni(c),oo(c,"type","checkbox"),Ti(c,t),c.processed=!0,c.if="("+r+")==='checkbox'"+i,
Fi(c,{
exp:c.if,
block:c
});
var u=Xi(e);
lo(u,"v-for",!0),oo(u,"type","radio"),Ti(u,t),Fi(c,{
exp:"("+r+")==='radio'"+i,
block:u
});
var l=Xi(e);
return lo(l,"v-for",!0),oo(l,":type",r),Ti(l,t),Fi(c,{
exp:o,
block:l
}),a?c.else=!0:s&&(c.elseif=s),c;
}
}
}
function Xi(e){
return Ci(e.tag,e.attrsList.slice(),e.parent);
}
function Qi(e,t){
t.value&&no(e,"textContent","_s("+t.value+")",t);
}
function ea(e,t){
t.value&&no(e,"innerHTML","_s("+t.value+")",t);
}
function ta(e,t){
e&&(Tl=Af(t.staticKeys||""),Ml=t.isReservedTag||cs,ra(e),oa(e,!1));
}
function na(e){
return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""));
}
function ra(e){
if(e.static=ia(e),1===e.type){
if(!Ml(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;
for(var t=0,n=e.children.length;n>t;t++){
var r=e.children[t];
ra(r),r.static||(e.static=!1);
}
if(e.ifConditions)for(var o=1,i=e.ifConditions.length;i>o;o++){
var a=e.ifConditions[o].block;
ra(a),a.static||(e.static=!1);
}
}
}
function oa(e,t){
if(1===e.type){
if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);
if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;r>n;n++)oa(e.children[n],t||!!e.for);
if(e.ifConditions)for(var o=1,i=e.ifConditions.length;i>o;o++)oa(e.ifConditions[o].block,t);
}
}
function ia(e){
return 2===e.type?!1:3===e.type?!0:!(!e.pre&&(e.hasBindings||e.if||e.for||Qa(e.tag)||!Ml(e.tag)||aa(e)||!Object.keys(e).every(Tl)));
}
function aa(e){
for(;e.parent;){
if(e=e.parent,"template"!==e.tag)return!1;
if(e.for)return!0;
}
return!1;
}
function sa(e,t){
var n=t?"nativeOn:":"on:",r="",o="";
for(var i in e){
var a=ca(e[i]);
e[i]&&e[i].dynamic?o+=i+","+a+",":r+='"'+i+'":'+a+",";
}
return r="{"+r.slice(0,-1)+"}",o?n+"_d("+r+",["+o.slice(0,-1)+"])":n+r;
}
function ca(e){
if(!e)return"function(){}";
if(Array.isArray(e))return"["+e.map(function(e){
return ca(e);
}).join(",")+"]";
var t=Tf.test(e.value),n=Sf.test(e.value),r=Tf.test(e.value.replace(Of,""));
if(e.modifiers){
var o="",i="",a=[];
for(var s in e.modifiers)if(Ef[s])i+=Ef[s],Mf[s]&&a.push(s);else if("exact"===s){
var c=e.modifiers;
i+=Nf(["ctrl","shift","alt","meta"].filter(function(e){
return!c[e];
}).map(function(e){
return"$event."+e+"Key";
}).join("||"));
}else a.push(s);
a.length&&(o+=ua(a)),i&&(o+=i);
var u=t?"return "+e.value+"($event)":n?"return ("+e.value+")($event)":r?"return "+e.value:e.value;
return"function($event){"+o+u+"}";
}
return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}";
}
function ua(e){
return"if(!$event.type.indexOf('key')&&"+e.map(la).join("&&")+")return null;";
}
function la(e){
var t=parseInt(e,10);
if(t)return"$event.keyCode!=="+t;
var n=Mf[e],r=jf[e];
return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")";
}
function fa(e,t){
t.modifiers&&Ds("v-on without argument does not support modifiers."),e.wrapListeners=function(e){
return"_g("+e+","+t.value+")";
};
}
function da(e,t){
e.wrapData=function(n){
return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")";
};
}
function pa(e,t){
var n=new Df(t),r=e?va(e,n):'_c("div")';
return{
render:"with(this){return "+r+"}",
staticRenderFns:n.staticRenderFns
};
}
function va(e,t){
if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return ha(e,t);
if(e.once&&!e.onceProcessed)return ma(e,t);
if(e.for&&!e.forProcessed)return ba(e,t);
if(e.if&&!e.ifProcessed)return ga(e,t);
if("template"!==e.tag||e.slotTarget||t.pre){
if("slot"===e.tag)return Ea(e,t);
var n;
if(e.component)n=Ia(e.component,e,t);else{
var r;
(!e.plain||e.pre&&t.maybeComponent(e))&&(r=_a(e,t));
var o=e.inlineTemplate?null:Sa(e,t,!0);
n="_c('"+e.tag+"'"+(r?","+r:"")+(o?","+o:"")+")";
}
for(var i=0;i<t.transforms.length;i++)n=t.transforms[i](e,n);
return n;
}
return Sa(e,t)||"void 0";
}
function ha(e,t){
e.staticProcessed=!0;
var n=t.pre;
return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+va(e,t)+"}"),
t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")";
}
function ma(e,t){
if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ga(e,t);
if(e.staticInFor){
for(var n="",r=e.parent;r;){
if(r.for){
n=r.key;
break;
}
r=r.parent;
}
return n?"_o("+va(e,t)+","+t.onceId++ +","+n+")":(t.warn("v-once can only be used inside v-for that is keyed. ",e.rawAttrsMap["v-once"]),
va(e,t));
}
return ha(e,t);
}
function ga(e,t,n,r){
return e.ifProcessed=!0,ya(e.ifConditions.slice(),t,n,r);
}
function ya(e,t,n,r){
function o(e){
return n?n(e,t):e.once?ma(e,t):va(e,t);
}
if(!e.length)return r||"_e()";
var i=e.shift();
return i.exp?"("+i.exp+")?"+o(i.block)+":"+ya(e,t,n,r):""+o(i.block);
}
function ba(e,t,n,r){
var o=e.for,i=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";
return t.maybeComponent(e)&&"slot"!==e.tag&&"template"!==e.tag&&!e.key&&t.warn("<"+e.tag+' v-for="'+i+" in "+o+'">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.',e.rawAttrsMap["v-for"],!0),
e.forProcessed=!0,(r||"_l")+"(("+o+"),function("+i+a+s+"){return "+(n||va)(e,t)+"})";
}
function _a(e,t){
var n="{",r=wa(e,t);
r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),
e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');
for(var o=0;o<t.dataGenFns.length;o++)n+=t.dataGenFns[o](e);
if(e.attrs&&(n+="attrs:"+Da(e.attrs)+","),e.props&&(n+="domProps:"+Da(e.props)+","),
e.events&&(n+=sa(e.events,!1)+","),e.nativeEvents&&(n+=sa(e.nativeEvents,!0)+","),
e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=xa(e,e.scopedSlots,t)+","),
e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),
e.inlineTemplate){
var i=$a(e,t);
i&&(n+=i+",");
}
return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+Da(e.dynamicAttrs)+")"),
e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n;
}
function wa(e,t){
var n=e.directives;
if(n){
var r,o,i,a,s="directives:[",c=!1;
for(r=0,o=n.length;o>r;r++){
i=n[r],a=!0;
var u=t.directives[i.name];
u&&(a=!!u(e,i,t.warn)),a&&(c=!0,s+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?",arg:"+(i.isDynamicArg?i.arg:'"'+i.arg+'"'):"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},");
}
return c?s.slice(0,-1)+"]":void 0;
}
}
function $a(e,t){
var n=e.children[0];
if((1!==e.children.length||1!==n.type)&&t.warn("Inline-template components must have exactly one child element.",{
start:e.start
}),n&&1===n.type){
var r=pa(n,t.options);
return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){
return"function(){"+e+"}";
}).join(",")+"]}";
}
}
function xa(e,t,n){
var r=e.for||Object.keys(t).some(function(e){
var n=t[e];
return n.slotTargetDynamic||n.if||n.for||Ca(n);
}),o=!!e.if;
if(!r)for(var i=e.parent;i;){
if(i.slotScope&&i.slotScope!==bf||i.for){
r=!0;
break;
}
i.if&&(o=!0),i=i.parent;
}
var a=Object.keys(t).map(function(e){
return Aa(t[e],n);
}).join(",");
return"scopedSlots:_u(["+a+"]"+(r?",null,true":"")+(!r&&o?",null,false,"+ka(a):"")+")";
}
function ka(e){
for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);
return t>>>0;
}
function Ca(e){
return 1===e.type?"slot"===e.tag?!0:e.children.some(Ca):!1;
}
function Aa(e,t){
var n=e.attrsMap["slot-scope"];
if(e.if&&!e.ifProcessed&&!n)return ga(e,t,Aa,"null");
if(e.for&&!e.forProcessed)return ba(e,t,Aa);
var r=e.slotScope===bf?"":String(e.slotScope),o="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(Sa(e,t)||"undefined")+":undefined":Sa(e,t)||"undefined":va(e,t))+"}",i=r?"":",proxy:true";
return"{key:"+(e.slotTarget||'"default"')+",fn:"+o+i+"}";
}
function Sa(e,t,n,r,o){
var i=e.children;
if(i.length){
var a=i[0];
if(1===i.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){
var s=n?t.maybeComponent(a)?",1":",0":"";
return""+(r||va)(a,t)+s;
}
var c=n?Oa(i,t.maybeComponent):0,u=o||Ma;
return"["+i.map(function(e){
return u(e,t);
}).join(",")+"]"+(c?","+c:"");
}
}
function Oa(e,t){
for(var n=0,r=0;r<e.length;r++){
var o=e[r];
if(1===o.type){
if(Ta(o)||o.ifConditions&&o.ifConditions.some(function(e){
return Ta(e.block);
})){
n=2;
break;
}
(t(o)||o.ifConditions&&o.ifConditions.some(function(e){
return t(e.block);
}))&&(n=1);
}
}
return n;
}
function Ta(e){
return void 0!==e.for||"template"===e.tag||"slot"===e.tag;
}
function Ma(e,t){
return 1===e.type?va(e,t):3===e.type&&e.isComment?Na(e):ja(e);
}
function ja(e){
return"_v("+(2===e.type?e.expression:La(JSON.stringify(e.text)))+")";
}
function Na(e){
return"_e("+JSON.stringify(e.text)+")";
}
function Ea(e,t){
var n=e.slotName||'"default"',r=Sa(e,t),o="_t("+n+(r?","+r:""),i=e.attrs||e.dynamicAttrs?Da((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){
return{
name:rs(e.name),
value:e.value,
dynamic:e.dynamic
};
})):null,a=e.attrsMap["v-bind"];
return!i&&!a||r||(o+=",null"),i&&(o+=","+i),a&&(o+=(i?"":",null")+","+a),o+")";
}
function Ia(e,t,n){
var r=t.inlineTemplate?null:Sa(t,n,!0);
return"_c("+e+","+_a(t,n)+(r?","+r:"")+")";
}
function Da(e){
for(var t="",n="",r=0;r<e.length;r++){
var o=e[r],i=La(o.value);
o.dynamic?n+=o.name+","+i+",":t+='"'+o.name+'":'+i+",";
}
return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t;
}
function La(e){
return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");
}
function Fa(e,t){
e&&Pa(e,t);
}
function Pa(e,t){
if(1===e.type){
for(var n in e.attrsMap)if(af.test(n)){
var r=e.attrsMap[n];
if(r){
var o=e.rawAttrsMap[n];
"v-for"===n?Ua(e,'v-for="'+r+'"',t,o):"v-slot"===n||"#"===n[0]?Ba(r,n+'="'+r+'"',t,o):of.test(n)?Ra(r,n+'="'+r+'"',t,o):Va(r,n+'="'+r+'"',t,o);
}
}
if(e.children)for(var i=0;i<e.children.length;i++)Pa(e.children[i],t);
}else 2===e.type&&Va(e.expression,e.text,t,e);
}
function Ra(e,t,n,r){
var o=e.replace(Pf,""),i=o.match(Ff);
i&&"$"!==o.charAt(i.index-1)&&n('avoid using JavaScript unary operator as property name: "'+i[0]+'" in expression '+t.trim(),r),
Va(e,t,n,r);
}
function Ua(e,t,n,r){
Va(e.for||"",t,n,r),Ha(e.alias,"v-for alias",t,n,r),Ha(e.iterator1,"v-for iterator",t,n,r),
Ha(e.iterator2,"v-for iterator",t,n,r);
}
function Ha(e,t,n,r,o){
if("string"==typeof e)try{
new Function("var "+e+"=_");
}catch(i){
r("invalid "+t+' "'+e+'" in expression: '+n.trim(),o);
}
}
function Va(e,t,n,r){
try{
new Function("return "+e);
}catch(o){
var i=e.replace(Pf,"").match(Lf);
i?n('avoid using JavaScript keyword as property name: "'+i[0]+'"\n  Raw expression: '+t.trim(),r):n("invalid expression: "+o.message+" in\n\n    "+e+"\n\n  Raw expression: "+t.trim()+"\n",r);
}
}
function Ba(e,t,n,r){
try{
new Function(e,"");
}catch(o){
n("invalid function parameter expression: "+o.message+" in\n\n    "+e+"\n\n  Raw expression: "+t.trim()+"\n",r);
}
}
function za(e,t,n){
void 0===t&&(t=0),void 0===n&&(n=e.length);
for(var r=e.split(/\r?\n/),o=0,i=[],a=0;a<r.length;a++)if(o+=r[a].length+1,o>=t){
for(var s=a-Rf;a+Rf>=s||n>o;s++)if(!(0>s||s>=r.length)){
i.push(""+(s+1)+qa(" ",3-String(s+1).length)+"|  "+r[s]);
var c=r[s].length;
if(s===a){
var u=t-(o-c)+1,l=n>o?c-u:n-t;
i.push("   |  "+qa(" ",u)+qa("^",l));
}else if(s>a){
if(n>o){
var f=Math.min(n-o,c);
i.push("   |  "+qa("^",f));
}
o+=c+1;
}
}
break;
}
return i.join("\n");
}
function qa(e,t){
var n="";
if(t>0)for(;;){
if(1&t&&(n+=e),t>>>=1,0>=t)break;
e+=e;
}
return n;
}
function Ja(e,t){
try{
return new Function(e);
}catch(n){
return t.push({
err:n,
code:e
}),$;
}
}
function Ka(e){
var t=Object.create(null);
return function(n,r,o){
r=_({},r);
var i=r.warn||Ds;
delete r.warn;
try{
new Function("return 1");
}catch(a){
a.toString().match(/unsafe-eval|CSP/)&&i("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.");
}
var s=r.delimiters?String(r.delimiters)+n:n;
if(t[s])return t[s];
var c=e(n,r);
c.errors&&c.errors.length&&(r.outputSourceRange?c.errors.forEach(function(e){
i("Error compiling template:\n\n"+e.msg+"\n\n"+za(n,e.start,e.end),o);
}):i("Error compiling template:\n\n"+n+"\n\n"+c.errors.map(function(e){
return"- "+e;
}).join("\n")+"\n",o)),c.tips&&c.tips.length&&c.tips.forEach(r.outputSourceRange?function(e){
return Ls(e.msg,o);
}:function(e){
return Ls(e,o);
});
var u={},l=[];
return u.render=Ja(c.render,l),u.staticRenderFns=c.staticRenderFns.map(function(e){
return Ja(e,l);
}),c.errors&&c.errors.length||!l.length||i("Failed to generate render function:\n\n"+l.map(function(e){
var t=e.err,n=e.code;
return t.toString()+" in\n\n"+n+"\n";
}).join("\n"),o),t[s]=u;
};
}
function Wa(e){
return function(t){
function n(n,r){
var o=Object.create(t),i=[],a=[],s=function(e,t,n){
(n?a:i).push(e);
};
if(r){
if(r.outputSourceRange){
var c=n.match(/^\s*/)[0].length;
s=function(e,t,n){
var r={
msg:e
};
t&&(null!=t.start&&(r.start=t.start+c),null!=t.end&&(r.end=t.end+c)),(n?a:i).push(r);
};
}
r.modules&&(o.modules=(t.modules||[]).concat(r.modules)),r.directives&&(o.directives=_(Object.create(t.directives||null),r.directives));
for(var u in r)"modules"!==u&&"directives"!==u&&(o[u]=r[u]);
}
o.warn=s;
var l=e(n.trim(),o);
return Fa(l.ast,s),l.errors=i,l.tips=a,l;
}
return{
compile:n,
compileToFunctions:Ka(n)
};
};
}
function Za(e){
return jl=jl||document.createElement("div"),jl.innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',
jl.innerHTML.indexOf("&#10;")>0;
}
function Ga(e){
if(e.outerHTML)return e.outerHTML;
var t=document.createElement("div");
return t.appendChild(e.cloneNode(!0)),t.innerHTML;
}
var Ya=Object.freeze({}),Xa=Object.prototype.toString,Qa=p("slot,component",!0),es=p("key,ref,slot,slot-scope,is"),ts=Object.prototype.hasOwnProperty,ns=/-(\w)/g,rs=m(function(e){
return e.replace(ns,function(e,t){
return t?t.toUpperCase():"";
});
}),os=m(function(e){
return e.charAt(0).toUpperCase()+e.slice(1);
}),is=/\B([A-Z])/g,as=m(function(e){
return e.replace(is,"-$1").toLowerCase();
}),ss=Function.prototype.bind?y:g,cs=function(){
return!1;
},us=function(e){
return e;
},ls="data-server-rendered",fs=["component","directive","filter"],ds=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],ps={
optionMergeStrategies:Object.create(null),
silent:!1,
productionTip:!0,
devtools:!0,
performance:!1,
errorHandler:null,
warnHandler:null,
ignoredElements:[],
keyCodes:Object.create(null),
isReservedTag:cs,
isReservedAttr:cs,
isUnknownElement:cs,
getTagNamespace:$,
parsePlatformTagName:us,
mustUseProp:cs,
async:!0,
_lifecycleHooks:ds
},vs=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/,hs=new RegExp("[^"+vs.source+".$_\\d]"),ms="__proto__"in{},gs="undefined"!=typeof window,ys="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,bs=ys&&WXEnvironment.platform.toLowerCase(),_s=gs&&window.navigator.userAgent.toLowerCase(),ws=_s&&/msie|trident/.test(_s),$s=_s&&_s.indexOf("msie 9.0")>0,xs=_s&&_s.indexOf("edge/")>0,ks=(_s&&_s.indexOf("android")>0||"android"===bs,
_s&&/iphone|ipad|ipod|ios/.test(_s)||"ios"===bs),Cs=(_s&&/chrome\/\d+/.test(_s)&&!xs,
_s&&/phantomjs/.test(_s),_s&&_s.match(/firefox\/(\d+)/)),As={}.watch,Ss=!1;
if(gs)try{
var Os={};
Object.defineProperty(Os,"passive",{
get:function(){
Ss=!0;
}
}),window.addEventListener("test-passive",null,Os);
}catch(Ts){}
var Ms,js,Ns=function(){
return void 0===Ms&&(Ms=gs||ys||"undefined"==typeof global?!1:global.process&&"server"===global.process.env.VUE_ENV),
Ms;
},Es=gs&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Is="undefined"!=typeof Symbol&&M(Symbol)&&"undefined"!=typeof Reflect&&M(Reflect.ownKeys);
js="undefined"!=typeof Set&&M(Set)?Set:function(){
function e(){
this.set=Object.create(null);
}
return e.prototype.has=function(e){
return this.set[e]===!0;
},e.prototype.add=function(e){
this.set[e]=!0;
},e.prototype.clear=function(){
this.set=Object.create(null);
},e;
}();
var Ds=$,Ls=$,Fs=$,Ps=$,Rs="undefined"!=typeof console,Us=/(?:^|[-_])(\w)/g,Hs=function(e){
return e.replace(Us,function(e){
return e.toUpperCase();
}).replace(/[-_]/g,"");
};
Ds=function(e,t){
var n=t?Fs(t):"";
ps.warnHandler?ps.warnHandler.call(null,e,t,n):Rs&&!ps.silent&&console.error("[Vue warn]: "+e+n);
},Ls=function(e,t){
Rs&&!ps.silent&&console.warn("[Vue tip]: "+e+(t?Fs(t):""));
},Ps=function(e,t){
if(e.$root===e)return"<Root>";
var n="function"==typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e,r=n.name||n._componentTag,o=n.__file;
if(!r&&o){
var i=o.match(/([^\/\\]+)\.vue$/);
r=i&&i[1];
}
return(r?"<"+Hs(r)+">":"<Anonymous>")+(o&&t!==!1?" at "+o:"");
};
var Vs=function(e,t){
for(var n="";t;)t%2===1&&(n+=e),t>1&&(e+=e),t>>=1;
return n;
};
Fs=function(e){
if(e._isVue&&e.$parent){
for(var t=[],n=0;e;){
if(t.length>0){
var r=t[t.length-1];
if(r.constructor===e.constructor){
n++,e=e.$parent;
continue;
}
n>0&&(t[t.length-1]=[r,n],n=0);
}
t.push(e),e=e.$parent;
}
return"\n\nfound in\n\n"+t.map(function(e,t){
return""+(0===t?"---> ":Vs(" ",5+2*t))+(Array.isArray(e)?Ps(e[0])+"... ("+e[1]+" recursive calls)":Ps(e));
}).join("\n");
}
return"\n\n(found in "+Ps(e)+")";
};
var Bs=0,zs=function(){
this.id=Bs++,this.subs=[];
};
zs.prototype.addSub=function(e){
this.subs.push(e);
},zs.prototype.removeSub=function(e){
v(this.subs,e);
},zs.prototype.depend=function(){
zs.target&&zs.target.addDep(this);
},zs.prototype.notify=function(){
var e=this.subs.slice();
ps.async||e.sort(function(e,t){
return e.id-t.id;
});
for(var t=0,n=e.length;n>t;t++)e[t].update();
},zs.target=null;
var qs=[],Js=function(e,t,n,r,o,i,a,s){
this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,
this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,
this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,
this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,
this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1;
},Ks={
child:{
configurable:!0
}
};
Ks.child.get=function(){
return this.componentInstance;
},Object.defineProperties(Js.prototype,Ks);
var Ws=function(e){
void 0===e&&(e="");
var t=new Js;
return t.text=e,t.isComment=!0,t;
},Zs=Array.prototype,Gs=Object.create(Zs),Ys=["push","pop","shift","unshift","splice","sort","reverse"];
Ys.forEach(function(e){
var t=Zs[e];
O(Gs,e,function(){
for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];
var o,i=t.apply(this,n),a=this.__ob__;
switch(e){
case"push":
case"unshift":
o=n;
break;

case"splice":
o=n.slice(2);
}
return o&&a.observeArray(o),a.dep.notify(),i;
});
});
var Xs=Object.getOwnPropertyNames(Gs),Qs=!0,ec=function(e){
this.value=e,this.dep=new zs,this.vmCount=0,O(e,"__ob__",this),Array.isArray(e)?(ms?L(e,Gs):F(e,Gs,Xs),
this.observeArray(e)):this.walk(e);
};
ec.prototype.walk=function(e){
for(var t=Object.keys(e),n=0;n<t.length;n++)R(e,t[n]);
},ec.prototype.observeArray=function(e){
for(var t=0,n=e.length;n>t;t++)P(e[t]);
};
var tc=ps.optionMergeStrategies;
tc.el=tc.propsData=function(e,t,n,r){
return n||Ds('option "'+r+'" can only be used during instance creation with the `new` keyword.'),
rc(e,t);
},tc.data=function(e,t,n){
return n?z(e,t,n):t&&"function"!=typeof t?(Ds('The "data" option should be a function that returns a per-instance value in component definitions.',n),
e):z(e,t);
},ds.forEach(function(e){
tc[e]=q;
}),fs.forEach(function(e){
tc[e+"s"]=K;
}),tc.watch=function(e,t,n,r){
if(e===As&&(e=void 0),t===As&&(t=void 0),!t)return Object.create(e||null);
if(Q(r,t,n),!e)return t;
var o={};
_(o,e);
for(var i in t){
var a=o[i],s=t[i];
a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s];
}
return o;
},tc.props=tc.methods=tc.inject=tc.computed=function(e,t,n,r){
if(t&&Q(r,t,n),!e)return t;
var o=Object.create(null);
return _(o,e),t&&_(o,t),o;
},tc.provide=z;
var nc,rc=function(e,t){
return void 0===t?e:t;
},oc=/^(String|Number|Boolean|Function|Symbol)$/,ic=!1,ac=[],sc=!1;
if("undefined"!=typeof Promise&&M(Promise)){
var cc=Promise.resolve();
nc=function(){
cc.then(gt),ks&&setTimeout($);
},ic=!0;
}else if(ws||"undefined"==typeof MutationObserver||!M(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())nc="undefined"!=typeof setImmediate&&M(setImmediate)?function(){
setImmediate(gt);
}:function(){
setTimeout(gt,0);
};else{
var uc=1,lc=new MutationObserver(gt),fc=document.createTextNode(String(uc));
lc.observe(fc,{
characterData:!0
}),nc=function(){
uc=(uc+1)%2,fc.data=String(uc);
},ic=!0;
}
var dc,pc,vc=gs&&window.performance;
vc&&vc.mark&&vc.measure&&vc.clearMarks&&vc.clearMeasures&&(dc=function(e){
return vc.mark(e);
},pc=function(e,t,n){
vc.measure(e,t,n),vc.clearMarks(t),vc.clearMarks(n);
});
var hc,mc=p("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),gc=function(e,t){
Ds('Property or method "'+t+'" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',e);
},yc=function(e,t){
Ds('Property "'+t+'" must be accessed with "$data.'+t+'" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data',e);
},bc="undefined"!=typeof Proxy&&M(Proxy);
if(bc){
var _c=p("stop,prevent,self,ctrl,shift,alt,meta,exact");
ps.keyCodes=new Proxy(ps.keyCodes,{
set:function(e,t,n){
return _c(t)?(Ds("Avoid overwriting built-in modifier in config.keyCodes: ."+t),
!1):(e[t]=n,!0);
}
});
}
var wc={
has:function Kf(e,t){
var Kf=t in e,n=mc(t)||"string"==typeof t&&"_"===t.charAt(0)&&!(t in e.$data);
return Kf||n||(t in e.$data?yc(e,t):gc(e,t)),Kf||!n;
}
},$c={
get:function(e,t){
return"string"!=typeof t||t in e||(t in e.$data?yc(e,t):gc(e,t)),e[t];
}
};
hc=function(e){
if(bc){
var t=e.$options,n=t.render&&t.render._withStripped?$c:wc;
e._renderProxy=new Proxy(e,n);
}else e._renderProxy=e;
};
var xc=new js,kc=m(function(e){
var t="&"===e.charAt(0);
e=t?e.slice(1):e;
var n="~"===e.charAt(0);
e=n?e.slice(1):e;
var r="!"===e.charAt(0);
return e=r?e.slice(1):e,{
name:e,
once:n,
capture:r,
passive:t
};
});
Xt(Qt.prototype);
var Cc,Ac={
init:function(e,t){
if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){
var n=e;
Ac.prepatch(n,n);
}else{
var r=e.componentInstance=on(e,jc);
r.$mount(t?e.elm:void 0,t);
}
},
prepatch:function(e,t){
var n=t.componentOptions,r=t.componentInstance=e.componentInstance;
Mn(r,n.propsData,n.listeners,t,n.children);
},
insert:function(e){
var t=e.context,n=e.componentInstance;
n._isMounted||(n._isMounted=!0,In(n,"mounted")),e.data.keepAlive&&(t._isMounted?Pn(n):Nn(n,!0));
},
destroy:function(e){
var t=e.componentInstance;
t._isDestroyed||(e.data.keepAlive?En(t,!0):t.$destroy());
}
},Sc=Object.keys(Ac),Oc=1,Tc=2,Mc=null,jc=null,Nc=!1,Ec=100,Ic=[],Dc=[],Lc={},Fc={},Pc=!1,Rc=!1,Uc=0,Hc=0,Vc=Date.now;
if(gs&&!ws){
var Bc=window.performance;
Bc&&"function"==typeof Bc.now&&Vc()>document.createEvent("Event").timeStamp&&(Vc=function(){
return Bc.now();
});
}
var zc=0,qc=function(e,t,n,r,o){
this.vm=e,o&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,
this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,
this.cb=n,this.id=++zc,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],
this.depIds=new js,this.newDepIds=new js,this.expression=t.toString(),"function"==typeof t?this.getter=t:(this.getter=T(t),
this.getter||(this.getter=$,Ds('Failed watching path: "'+t+'" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',e))),
this.value=this.lazy?void 0:this.get();
};
qc.prototype.get=function(){
j(this);
var e,t=this.vm;
try{
e=this.getter.call(t,t);
}catch(n){
if(!this.user)throw n;
pt(n,t,'getter for watcher "'+this.expression+'"');
}finally{
this.deep&&bt(e),N(),this.cleanupDeps();
}
return e;
},qc.prototype.addDep=function(e){
var t=e.id;
this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this));
},qc.prototype.cleanupDeps=function(){
for(var e=this.deps.length;e--;){
var t=this.deps[e];
this.newDepIds.has(t.id)||t.removeSub(this);
}
var n=this.depIds;
this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,
this.newDeps=n,this.newDeps.length=0;
},qc.prototype.update=function(){
this.lazy?this.dirty=!0:this.sync?this.run():Un(this);
},qc.prototype.run=function(){
if(this.active){
var e=this.get();
if(e!==this.value||i(e)||this.deep){
var t=this.value;
if(this.value=e,this.user)try{
this.cb.call(this.vm,e,t);
}catch(n){
pt(n,this.vm,'callback for watcher "'+this.expression+'"');
}else this.cb.call(this.vm,e,t);
}
}
},qc.prototype.evaluate=function(){
this.value=this.get(),this.dirty=!1;
},qc.prototype.depend=function(){
for(var e=this.deps.length;e--;)this.deps[e].depend();
},qc.prototype.teardown=function(){
if(this.active){
this.vm._isBeingDestroyed||v(this.vm._watchers,this);
for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);
this.active=!1;
}
};
var Jc={
enumerable:!0,
configurable:!0,
get:$,
set:$
},Kc={
lazy:!0
},Wc=0;
er(or),Qn(or),Cn(or),On(or),vn(or);
var Zc=[String,RegExp,Array],Gc={
name:"keep-alive",
"abstract":!0,
props:{
include:Zc,
exclude:Zc,
max:[String,Number]
},
created:function(){
this.cache=Object.create(null),this.keys=[];
},
destroyed:function(){
for(var e in this.cache)vr(this.cache,e,this.keys);
},
mounted:function(){
var e=this;
this.$watch("include",function(t){
pr(e,function(e){
return dr(t,e);
});
}),this.$watch("exclude",function(t){
pr(e,function(e){
return!dr(t,e);
});
});
},
render:function(){
var e=this.$slots.default,t=bn(e),n=t&&t.componentOptions;
if(n){
var r=fr(n),o=this,i=o.include,a=o.exclude;
if(i&&(!r||!dr(i,r))||a&&r&&dr(a,r))return t;
var s=this,c=s.cache,u=s.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;
c[l]?(t.componentInstance=c[l].componentInstance,v(u,l),u.push(l)):(c[l]=t,u.push(l),
this.max&&u.length>parseInt(this.max)&&vr(c,u[0],u,this._vnode)),t.data.keepAlive=!0;
}
return t||e&&e[0];
}
},Yc={
KeepAlive:Gc
};
hr(or),Object.defineProperty(or.prototype,"$isServer",{
get:Ns
}),Object.defineProperty(or.prototype,"$ssrContext",{
get:function(){
return this.$vnode&&this.$vnode.ssrContext;
}
}),Object.defineProperty(or,"FunctionalRenderContext",{
value:Qt
}),or.version="2.6.12";
var Xc,Qc,eu,tu,nu,ru,ou,iu,au,su,cu=p("style,class"),uu=p("input,textarea,option,select,progress"),lu=function(e,t,n){
return"value"===n&&uu(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e;
},fu=p("contenteditable,draggable,spellcheck"),du=p("events,caret,typing,plaintext-only"),pu=function(e,t){
return yu(t)||"false"===t?"false":"contenteditable"===e&&du(t)?t:"true";
},vu=p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),hu="http://www.w3.org/1999/xlink",mu=function(e){
return":"===e.charAt(5)&&"xlink"===e.slice(0,5);
},gu=function(e){
return mu(e)?e.slice(6,e.length):"";
},yu=function(e){
return null==e||e===!1;
},bu={
svg:"http://www.w3.org/2000/svg",
math:"http://www.w3.org/1998/Math/MathML"
},_u=p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),wu=p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),$u=function(e){
return"pre"===e;
},xu=function(e){
return _u(e)||wu(e);
},ku=Object.create(null),Cu=p("text,number,password,search,email,tel,url"),Au=Object.freeze({
createElement:Ar,
createElementNS:Sr,
createTextNode:Or,
createComment:Tr,
insertBefore:Mr,
removeChild:jr,
appendChild:Nr,
parentNode:Er,
nextSibling:Ir,
tagName:Dr,
setTextContent:Lr,
setStyleScope:Fr
}),Su={
create:function(e,t){
Pr(t);
},
update:function(e,t){
e.data.ref!==t.data.ref&&(Pr(e,!0),Pr(t));
},
destroy:function(e){
Pr(e,!0);
}
},Ou=new Js("",{},[]),Tu=["create","activate","update","remove","destroy"],Mu={
create:Br,
update:Br,
destroy:function(e){
Br(e,Ou);
}
},ju=Object.create(null),Nu=[Su,Mu],Eu={
create:Wr,
update:Wr
},Iu={
create:Yr,
update:Yr
},Du=/[\w).+\-_$\]]/,Lu="__r",Fu="__c",Pu=ic&&!(Cs&&Number(Cs[1])<=53),Ru={
create:jo,
update:jo
},Uu={
create:No,
update:No
},Hu=m(function(e){
var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;
return e.split(n).forEach(function(e){
if(e){
var n=e.split(r);
n.length>1&&(t[n[0].trim()]=n[1].trim());
}
}),t;
}),Vu=/^--/,Bu=/\s*!important$/,zu=function(e,t,n){
if(Vu.test(t))e.style.setProperty(t,n);else if(Bu.test(n))e.style.setProperty(as(t),n.replace(Bu,""),"important");else{
var r=Ju(t);
if(Array.isArray(n))for(var o=0,i=n.length;i>o;o++)e.style[r]=n[o];else e.style[r]=n;
}
},qu=["Webkit","Moz","ms"],Ju=m(function(e){
if(su=su||document.createElement("div").style,e=rs(e),"filter"!==e&&e in su)return e;
for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<qu.length;n++){
var r=qu[n]+t;
if(r in su)return r;
}
}),Ku={
create:Ro,
update:Ro
},Wu=/\s+/,Zu=m(function(e){
return{
enterClass:e+"-enter",
enterToClass:e+"-enter-to",
enterActiveClass:e+"-enter-active",
leaveClass:e+"-leave",
leaveToClass:e+"-leave-to",
leaveActiveClass:e+"-leave-active"
};
}),Gu=gs&&!$s,Yu="transition",Xu="animation",Qu="transition",el="transitionend",tl="animation",nl="animationend";
Gu&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Qu="WebkitTransition",
el="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(tl="WebkitAnimation",
nl="webkitAnimationEnd"));
var rl=gs?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){
return e();
},ol=/\b(transform|all)(,|$)/,il=gs?{
create:ti,
activate:ti,
remove:function(e,t){
e.data.show!==!0?Yo(e,t):t();
}
}:{},al=[Eu,Iu,Ru,Uu,Ku,il],sl=al.concat(Nu),cl=Vr({
nodeOps:Au,
modules:sl
});
$s&&document.addEventListener("selectionchange",function(){
var e=document.activeElement;
e&&e.vmodel&&ci(e,"input");
});
var ul={
inserted:function(e,t,n,r){
"select"===n.tag?(r.elm&&!r.elm._vOptions?xt(n,"postpatch",function(){
ul.componentUpdated(e,t,n);
}):ni(e,t,n.context),e._vOptions=[].map.call(e.options,ii)):("textarea"===n.tag||Cu(e.type))&&(e._vModifiers=t.modifiers,
t.modifiers.lazy||(e.addEventListener("compositionstart",ai),e.addEventListener("compositionend",si),
e.addEventListener("change",si),$s&&(e.vmodel=!0)));
},
componentUpdated:function(e,t,n){
if("select"===n.tag){
ni(e,t,n.context);
var r=e._vOptions,o=e._vOptions=[].map.call(e.options,ii);
if(o.some(function(e,t){
return!k(e,r[t]);
})){
var i=e.multiple?t.value.some(function(e){
return oi(e,o);
}):t.value!==t.oldValue&&oi(t.value,o);
i&&ci(e,"change");
}
}
}
},ll={
bind:function(e,t,n){
var r=t.value;
n=ui(n);
var o=n.data&&n.data.transition,i=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;
r&&o?(n.data.show=!0,Go(n,function(){
e.style.display=i;
})):e.style.display=r?i:"none";
},
update:function(e,t,n){
var r=t.value,o=t.oldValue;
if(!r!=!o){
n=ui(n);
var i=n.data&&n.data.transition;
i?(n.data.show=!0,r?Go(n,function(){
e.style.display=e.__vOriginalDisplay;
}):Yo(n,function(){
e.style.display="none";
})):e.style.display=r?e.__vOriginalDisplay:"none";
}
},
unbind:function(e,t,n,r,o){
o||(e.style.display=e.__vOriginalDisplay);
}
},fl={
model:ul,
show:ll
},dl={
name:String,
appear:Boolean,
css:Boolean,
mode:String,
type:String,
enterClass:String,
leaveClass:String,
enterToClass:String,
leaveToClass:String,
enterActiveClass:String,
leaveActiveClass:String,
appearClass:String,
appearActiveClass:String,
appearToClass:String,
duration:[Number,String,Object]
},pl=function(e){
return e.tag||yn(e);
},vl=function(e){
return"show"===e.name;
},hl={
name:"transition",
props:dl,
"abstract":!0,
render:function(e){
var t=this,n=this.$slots.default;
if(n&&(n=n.filter(pl),n.length)){
n.length>1&&Ds("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent);
var r=this.mode;
r&&"in-out"!==r&&"out-in"!==r&&Ds("invalid <transition> mode: "+r,this.$parent);
var i=n[0];
if(pi(this.$vnode))return i;
var a=li(i);
if(!a)return i;
if(this._leaving)return di(e,i);
var s="__transition-"+this._uid+"-";
a.key=null==a.key?a.isComment?s+"comment":s+a.tag:o(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;
var c=(a.data||(a.data={})).transition=fi(this),u=this._vnode,l=li(u);
if(a.data.directives&&a.data.directives.some(vl)&&(a.data.show=!0),!(!l||!l.data||vi(a,l)||yn(l)||l.componentInstance&&l.componentInstance._vnode.isComment)){
var f=l.data.transition=_({},c);
if("out-in"===r)return this._leaving=!0,xt(f,"afterLeave",function(){
t._leaving=!1,t.$forceUpdate();
}),di(e,i);
if("in-out"===r){
if(yn(a))return u;
var d,p=function(){
d();
};
xt(c,"afterEnter",p),xt(c,"enterCancelled",p),xt(f,"delayLeave",function(e){
d=e;
});
}
}
return i;
}
}
},ml=_({
tag:String,
moveClass:String
},dl);
delete ml.mode;
var gl={
props:ml,
beforeMount:function(){
var e=this,t=this._update;
this._update=function(n,r){
var o=An(e);
e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,o(),t.call(e,n,r);
};
},
render:function(e){
for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,o=this.$slots.default||[],i=this.children=[],a=fi(this),s=0;s<o.length;s++){
var c=o[s];
if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))i.push(c),n[c.key]=c,
(c.data||(c.data={})).transition=a;else{
var u=c.componentOptions,l=u?u.Ctor.options.name||u.tag||"":c.tag;
Ds("<transition-group> children must be keyed: <"+l+">");
}
}
if(r){
for(var f=[],d=[],p=0;p<r.length;p++){
var v=r[p];
v.data.transition=a,v.data.pos=v.elm.getBoundingClientRect(),n[v.key]?f.push(v):d.push(v);
}
this.kept=e(t,null,f),this.removed=d;
}
return e(t,null,i);
},
updated:function(){
var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";
e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(hi),e.forEach(mi),e.forEach(gi),this._reflow=document.body.offsetHeight,
e.forEach(function(e){
if(e.data.moved){
var n=e.elm,r=n.style;
zo(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(el,n._moveCb=function o(e){
e&&e.target!==n||(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener(el,o),
n._moveCb=null,qo(n,t));
});
}
}));
},
methods:{
hasMove:function(e,t){
if(!Gu)return!1;
if(this._hasMove)return this._hasMove;
var n=e.cloneNode();
e._transitionClasses&&e._transitionClasses.forEach(function(e){
Ho(n,e);
}),Uo(n,t),n.style.display="none",this.$el.appendChild(n);
var r=Ko(n);
return this.$el.removeChild(n),this._hasMove=r.hasTransform;
}
}
},yl={
Transition:hl,
TransitionGroup:gl
};
or.config.mustUseProp=lu,or.config.isReservedTag=xu,or.config.isReservedAttr=cu,
or.config.getTagNamespace=xr,or.config.isUnknownElement=kr,_(or.options.directives,fl),
_(or.options.components,yl),or.prototype.__patch__=gs?cl:$,or.prototype.$mount=function(e,t){
return e=e&&gs?Cr(e):void 0,Tn(this,e,t);
},gs&&setTimeout(function(){
ps.devtools&&(Es?Es.emit("init",or):console[console.info?"info":"log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")),
ps.productionTip!==!1&&"undefined"!=typeof console&&console[console.info?"info":"log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
},0);
var bl,_l,wl,$l,xl,kl,Cl,Al,Sl,Ol,Tl,Ml,jl,Nl=/\{\{((?:.|\r?\n)+?)\}\}/g,El=/[-.*+?^${}()|[\]\/\\]/g,Il=m(function(e){
var t=e[0].replace(El,"\\$&"),n=e[1].replace(El,"\\$&");
return new RegExp(t+"((?:.|\\n)+?)"+n,"g");
}),Dl={
staticKeys:["staticClass"],
transformNode:bi,
genData:_i
},Ll={
staticKeys:["staticStyle"],
transformNode:wi,
genData:$i
},Fl={
decode:function(e){
return bl=bl||document.createElement("div"),bl.innerHTML=e,bl.textContent;
}
},Pl=p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Rl=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Ul=p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Hl=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Vl=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Bl="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+vs.source+"]*",zl="((?:"+Bl+"\\:)?"+Bl+")",ql=new RegExp("^<"+zl),Jl=/^\s*(\/?)>/,Kl=new RegExp("^<\\/"+zl+"[^>]*>"),Wl=/^<!DOCTYPE [^>]+>/i,Zl=/^<!\--/,Gl=/^<!\[/,Yl=p("script,style,textarea",!0),Xl={},Ql={
"&lt;":"<",
"&gt;":">",
"&quot;":'"',
"&amp;":"&",
"&#10;":"\n",
"&#9;":"	",
"&#39;":"'"
},ef=/&(?:lt|gt|quot|amp|#39);/g,tf=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,nf=p("pre,textarea",!0),rf=function(e,t){
return e&&nf(e)&&"\n"===t[0];
},of=/^@|^v-on:/,af=/^v-|^@|^:|^#/,sf=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,cf=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,uf=/^\(|\)$/g,lf=/^\[.*\]$/,ff=/:(.*)$/,df=/^:|^\.|^v-bind:/,pf=/\.[^.\]]+(?=[^\]]*$)/g,vf=/^v-slot(:|$)|^#/,hf=/[\r\n]/,mf=/\s+/g,gf=/[\s"'<>\/=]/,yf=m(Fl.decode),bf="_empty_",_f=/^xmlns:NS\d+/,wf=/^NS\d+:/,$f={
preTransformNode:Yi
},xf=[Dl,Ll,$f],kf={
model:$o,
text:Qi,
html:ea
},Cf={
expectHTML:!0,
modules:xf,
directives:kf,
isPreTag:$u,
isUnaryTag:Pl,
mustUseProp:lu,
canBeLeftOpenTag:Rl,
isReservedTag:xu,
getTagNamespace:xr,
staticKeys:x(xf)
},Af=m(na),Sf=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Of=/\([^)]*?\);*$/,Tf=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Mf={
esc:27,
tab:9,
enter:13,
space:32,
up:38,
left:37,
right:39,
down:40,
"delete":[8,46]
},jf={
esc:["Esc","Escape"],
tab:"Tab",
enter:"Enter",
space:[" ","Spacebar"],
up:["Up","ArrowUp"],
left:["Left","ArrowLeft"],
right:["Right","ArrowRight"],
down:["Down","ArrowDown"],
"delete":["Backspace","Delete","Del"]
},Nf=function(e){
return"if("+e+")return null;";
},Ef={
stop:"$event.stopPropagation();",
prevent:"$event.preventDefault();",
self:Nf("$event.target !== $event.currentTarget"),
ctrl:Nf("!$event.ctrlKey"),
shift:Nf("!$event.shiftKey"),
alt:Nf("!$event.altKey"),
meta:Nf("!$event.metaKey"),
left:Nf("'button' in $event && $event.button !== 0"),
middle:Nf("'button' in $event && $event.button !== 1"),
right:Nf("'button' in $event && $event.button !== 2")
},If={
on:fa,
bind:da,
cloak:$
},Df=function(e){
this.options=e,this.warn=e.warn||eo,this.transforms=to(e.modules,"transformCode"),
this.dataGenFns=to(e.modules,"genData"),this.directives=_(_({},If),e.directives);
var t=e.isReservedTag||cs;
this.maybeComponent=function(e){
return!!e.component||!t(e.tag);
},this.onceId=0,this.staticRenderFns=[],this.pre=!1;
},Lf=new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),Ff=new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),Pf=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g,Rf=2,Uf=Wa(function(e,t){
var n=Ai(e.trim(),t);
t.optimize!==!1&&ta(n,t);
var r=pa(n,t);
return{
ast:n,
render:r.render,
staticRenderFns:r.staticRenderFns
};
}),Hf=Uf(Cf),Vf=(Hf.compile,Hf.compileToFunctions),Bf=gs?Za(!1):!1,zf=gs?Za(!0):!1,qf=m(function(e){
var t=Cr(e);
return t&&t.innerHTML;
}),Jf=or.prototype.$mount;
return or.prototype.$mount=function(e,t){
if(e=e&&Cr(e),e===document.body||e===document.documentElement)return Ds("Do not mount Vue to <html> or <body> - mount to normal elements instead."),
this;
var n=this.$options;
if(!n.render){
var r=n.template;
if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=qf(r),r||Ds("Template element not found or is empty: "+n.template,this));else{
if(!r.nodeType)return Ds("invalid template option:"+r,this),this;
r=r.innerHTML;
}else e&&(r=Ga(e));
if(r){
ps.performance&&dc&&dc("compile");
var o=Vf(r,{
outputSourceRange:!0,
shouldDecodeNewlines:Bf,
shouldDecodeNewlinesForHref:zf,
delimiters:n.delimiters,
comments:n.comments
},this),i=o.render,a=o.staticRenderFns;
n.render=i,n.staticRenderFns=a,ps.performance&&dc&&(dc("compile end"),pc("vue "+this._name+" compile","compile","compile end"));
}
}
return Jf.call(this,e,t);
},or.compile=Vf,or;
});define("appmsg/without_iframe/video_appmsg.html.js",[],function(){
return'<div id="page-content">\n    <!--S ???????????? full_screen_mv-->\n    <div id="js_mpvedio_wrapper_<#=vid#>" style="position:relative; height: <#=video_h#>px">\n        <div class="add_bg_color appmsg_video">\n            <div id="js_video_tail_panel_<#=vid#>" class="video_tail_module video_screen_half" style="display: none;">\n                <div class="video_tail_module__hd" id="js_video_tail_hd">\n                    <div class="account_info_wrp">\n                        <div class="profile_info_wrp js_go_profile">\n                            <img class="account_avatar" src="" alt="" id="js_tail_panel_account_avatar">\n                            <div class="account_name" id="js_tail_panel_account_name"></div>\n                            <div class="subscription_info subscription_success">\n                                <div class="account_subscription_tips js_subscription_success" id="js_subscription_success"\n                                    style="display: none;">?????????</div>\n                                <i class="account_link_icon js_profile_icon" id="js_profile_icon"></i>\n                            </div>\n                        </div>\n                        <div class="btn_account_subscription js_btn_account_subscription" id="js_btn_account_subscription" style="display: none;">\n                            ??????</div>\n                    </div>\n                    <div class="opr_wrp">\n                        <span class="opr_item_wrp js_replay" id="js_replay">\n                            <i class="opr_item refresh_icon"></i>\n                            <span class="opr_item_text">??????</span>\n                        </span>\n                        <span class="opr_item_wrp share_item_wrp js_share_button" id="js_tail_share_button"\n                            style="display: none;">\n                            <i class="opr_item share_icon"></i>\n                            <span class="opr_item_text">??????</span>\n                        </span>\n                        <!--????????? ???className selected-->\n                        <span class="opr_item_wrp like_item_wrp" id="js_tail_like_button" style="display: none;">\n                            <i class="opr_item like_icon"></i>\n                            <span class="opr_item_text">???</span>\n                        </span>\n                        <!-- <span class="opr_item_wrp recommend_item_wrp" id="js_tail_channel_button"\n                            style="display: none;">\n                            <i class="opr_item video-logo_icon"></i>\n                            <span class="opr_item_text">????????????</span>\n                        </span> -->\n                    </div>\n                </div>\n\n                <!-- ??????????????? -->\n                <div class="have_expand" id="js_expand_area">\n                </div>\n\n                <!-- ???????????? -->\n                <div class="ad_area" id="js_tail_video_ad_area">\n                </div>\n            </div>\n        </div>\n        <div id="js_vue_player_<#=index#>"></div>\n    </div>\n    <!--E ???????????????-->\n    <!-- S ????????????-->\n    <div id="bottom_bar" class="interact_video" style="display:none;height: 35px;">\n        <div class="inter_opr">\n            <a id="video_detail_btn" href="javascript:;" target="_blank" class="access_original">\n                ????????????            </a>\n        </div>\n    </div>\n</div>';
});;define('page/appmsg_new/mod/album_read.css', [], function(require, exports, module) {
	return ".wx_icon_pay_tag{color:#fff;background:#fa9d3b;border-radius:2px;font-size:10px;line-height:1;padding:3px 4px}.wx_icon_pay_tag_paid{color:#fa9d3b;background:rgba(250,157,59,0.2)}@media(prefers-color-scheme:dark){.wx_icon_pay_tag{background:#c87d2f}.wx_icon_pay_tag_paid{color:rgba(250,157,59,0.6);background:rgba(250,157,59,0.2)}}.album_read_card{overflow:hidden;margin-top:16px;font-size:14px;color:rgba(0,0,0,0.9);line-height:1.4}.album_read_card .weui-flex__item{min-width:0}.album_read_card .weui-btn__word-wrp{font-size:14px;color:rgba(0,0,0,0.5)}.album_read_card .weui-btn__word-wrp:before{content:\"\\00B7\";margin-left:2px}.album_read_hd{padding:18px 16px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.album_read_hd:active{opacity:.5}.album_read_source{width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;color:rgba(0,0,0,0.5)}.album_read_source a:active{opacity:.5}.album_read_directory_access{color:#576b95;margin-left:24px}.album_read_directory_access:active{opacity:.5}.album_read_directory_access:before{content:\"\";display:inline-block;vertical-align:middle;font-size:10px;width:2em;height:2em;margin-top:-0.2em;-webkit-mask:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='20' height='20' viewBox='0 0 20 20'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath fill='%23D8D8D8' d='M0 0h20v20H0z' opacity='0'\/%3E    %3Cpath fill='%23576B95' d='M14.8 13c.11 0 .2.09.2.2v.8a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 14v-.8c0-.11.09-.2.2-.2h9.6zm0-4c.11 0 .2.09.2.2v.8a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 10v-.8c0-.11.09-.2.2-.2h9.6zm0-4c.11 0 .2.09.2.2V6a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 6v-.8c0-.11.09-.2.2-.2h9.6z'\/%3E  %3C\/g%3E%3C\/svg%3E\") no-repeat 50% 50%;mask:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='20' height='20' viewBox='0 0 20 20'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath fill='%23D8D8D8' d='M0 0h20v20H0z' opacity='0'\/%3E    %3Cpath fill='%23576B95' d='M14.8 13c.11 0 .2.09.2.2v.8a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 14v-.8c0-.11.09-.2.2-.2h9.6zm0-4c.11 0 .2.09.2.2v.8a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 10v-.8c0-.11.09-.2.2-.2h9.6zm0-4c.11 0 .2.09.2.2V6a.2.2 0 0 1-.2.2H5.2A.2.2 0 0 1 5 6v-.8c0-.11.09-.2.2-.2h9.6z'\/%3E  %3C\/g%3E%3C\/svg%3E\") no-repeat 50% 50%;-webkit-mask-size:cover;mask-size:cover;background-color:currentColor}.album_read_nav_item{position:relative;text-align:center;padding:4px 24px 20px}.album_read_nav_item:before{content:\"\";position:absolute;top:4px;bottom:20px;left:0;width:1px;background:-webkit-linear-gradient(top,rgba(0,0,0,0.03),rgba(0,0,0,0.05) 50%,rgba(0,0,0,0.03) 100%)}.album_read_nav_item:active .album_read_nav_inner{opacity:.5}.album_read_nav_item.album_read_nav_prev{text-align:left}.album_read_nav_item.album_read_nav_next{text-align:right}.album_read_nav_item:first-child:before{display:none}.album_read_nav_item:first-child:last-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:14px;padding-bottom:32px}.album_read_nav_item:first-child:last-child:before{top:14px;bottom:32px}.album_read_nav_item:first-child:last-child .album_read_nav_btn:before,.album_read_nav_item:first-child:last-child .album_read_nav_btn:after{display:none}.album_read_nav_item:first-child:last-child .album_read_nav_inner{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.album_read_nav_item:first-child:last-child .album_read_nav_inner:before,.album_read_nav_item:first-child:last-child .album_read_nav_inner:after{content:\"\";display:inline-block;vertical-align:middle;font-size:10px;margin-top:-1px;width:1em;height:2em;-webkit-mask-size:cover;mask-size:cover;background-color:currentColor;-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.album_read_nav_item:first-child:last-child.album_read_nav_prev .album_read_nav_inner:before{transform:matrix(-1,0,0,-1,0,0);-ms-transform:matrix(-1,0,0,-1,0,0);-webkit-transform:matrix(-1,0,0,-1,0,0);margin-right:8px}.album_read_nav_item:first-child:last-child.album_read_nav_prev .album_read_nav_inner:after{display:none}.album_read_nav_item:first-child:last-child.album_read_nav_next .album_read_nav_inner:before{display:none}.album_read_nav_item:first-child:last-child.album_read_nav_next .album_read_nav_inner:after{margin-left:8px}.album_read_nav_item:first-child:last-child .album_read_nav_title{-webkit-line-clamp:1;margin-top:0;-webkit-box-flex:1;-webkit-flex:1;flex:1}.album_read_nav_item:first-child:last-child .album_read_nav_title:before{content:\"\\00B7\";margin-left:4px;margin-right:4px}.album_read_nav_btn{display:block;color:rgba(0,0,0,0.9);font-weight:500}.album_read_nav_btn:before,.album_read_nav_btn:after{content:\"\";display:inline-block;vertical-align:middle;font-size:10px;margin-top:-0.2em;width:1em;height:2em;-webkit-mask-size:cover;mask-size:cover;background-color:currentColor;-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.album_read_nav_prev .album_read_nav_btn:before{transform:matrix(-1,0,0,-1,0,0);-ms-transform:matrix(-1,0,0,-1,0,0);-webkit-transform:matrix(-1,0,0,-1,0,0);margin-right:8px}.album_read_nav_prev .album_read_nav_btn:after{display:none}.album_read_nav_next .album_read_nav_btn:before{display:none}.album_read_nav_next .album_read_nav_btn:after{margin-left:8px}.album_read_nav_title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;margin-top:8px;line-height:1.2}.album_read_directory .weui-half-screen-dialog{padding:0;padding:0 constant(safe-area-inset-right) constant(safe-area-inset-bottom) constant(safe-area-inset-left);padding:0 env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}.album_read_directory .weui-half-screen-dialog__hd{padding-left:24px;padding-right:24px}.album_read_directory .weui-icon-close-thin{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);-webkit-transform:rotate(90deg);transform:rotate(90deg);width:14px}.album_read_directory .weui-btn__word-wrp{font-size:14px}.album_read_title{color:#576b95}.album_read_directory_item{color:rgba(0,0,0,0.9);line-height:1.4;padding:24px 16px;position:relative}.album_read_directory_item:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid rgba(0,0,0,0.1);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);left:16px;right:16px}.album_read_directory_item:last-child:after{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid rgba(0,0,0,0.1);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);left:16px;right:16px}.album_read_directory_item:active{background-color:rgba(0,0,0,0.05)}.album_read_directory_item .wx_icon_pay_tag{margin-left:8px;margin-top:-2px;display:inline-block;vertical-align:middle}.album_read_directory_current{background-color:rgba(0,0,0,0.05)}.album_read_directory_disabled{color:rgba(0,0,0,0.28)}@media(prefers-color-scheme:dark){.album_read_card{color:rgba(255,255,255,0.8)}.album_read_card .weui-btn__word-wrp{color:rgba(255,255,255,0.5)}.album_read_bd:before{border-top-color:rgba(255,255,255,0.05)}.album_read_directory_access{color:#7d90a9}.album_read_title{color:#7d90a9}.album_read_source{color:rgba(255,255,255,0.5)}.album_read_nav_item:before{background:-webkit-linear-gradient(top,rgba(255,255,255,0.03),rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.03) 100%)}.album_read_nav_btn{color:rgba(255,255,255,0.8)}.album_read_directory_item{color:rgba(255,255,255,0.8)}.album_read_directory_item:before{border-top-color:rgba(255,255,255,0.05)}.album_read_directory_item:active{background-color:rgba(255,255,255,0.1)}.album_read_directory_item:last-child:after{border-bottom-color:rgba(255,255,255,0.05)}.album_read_directory_current{background-color:rgba(255,255,255,0.1)}.album_read_directory_disabled{color:rgba(255,255,255,0.24)}}";
});define("appmsg/more_read_tpl.html.js",[],function(){
return'<p class="read-more__desc">???????????????</p>\n<div class="read-more__article__area">\n  <# list.forEach(function (item) { #>\n    <div class="read-more__article__item">\n      <a href="javascript:;" class="more_read_link"><#=item.title#></a>\n      <# if (item.fans_read_cnt > 0) { #>\n        <p class="read-more__article__extra"><#=item.fans_read_cnt#>???????????????</p>\n      <# } #>\n    </div>\n  <# }); #>\n</div>';
});function _defineProperty(e,s,n){
return s in e?Object.defineProperty(e,s,{
value:n,
enumerable:!0,
configurable:!0,
writable:!0
}):e[s]=n,e;
}
var _extends=Object.assign||function(e){
for(var s=1;s<arguments.length;s++){
var n=arguments[s];
for(var _ in n)Object.prototype.hasOwnProperty.call(n,_)&&(e[_]=n[_]);
}
return e;
};
define("pages_new/common_share/video/store.js",["pages_new/3rd/vue.js","pages_new/3rd/vuex.js","pages_new/modules/utils/url.js","pages_new/common_share/video/lifecycle_manager.js","pages_new/common_share/video/player/player_store.js","pages_new/common_share/video/related_video_list/related_video_list_store.js","pages_new/common_share/video/like_and_share/like_and_share_store.js","pages_new/common_share/video/topic/topic_store.js","pages_new/modules/comment/comment_store.js","pages_new/modules/reward/reward_store.js","pages_new/common_share/video/player/plugins/danmu/danmu_store.js","pages_new/common_share/video/player/plugins/popup/popup_store.js","pages_new/common_share/video/player/plugins/mid_ad/mid_ad_store.js","pages_new/common_share/video/player/plugins/after_ad/after_ad_store.js","pages_new/common_share/video/player/plugins/auto_next/auto_next_store.js"],function(e){
"use strict";
function s(){
return _extends({},window.cgiData,{
uin:window.uin,
biz:window.biz,
appmsgid:window.appmsgid,
idx:window.idx,
scene:window.scene,
subscene:window.subscene,
enterid:window.enterid,
sessionid:window.sessionid,
channel_session_id:window.channel_session_id,
real_item_show_type:window.real_item_show_type,
item_show_type:window.item_show_type,
clientversion:window.clientversion,
devicetype:window.devicetype,
continueid:window.continueid,
continueseq:window.continueseq,
reloadid:window.reloadid,
reloadseq:window.reloadseq,
exptype:window.exptype,
expsessionid:window.expsessionid,
source:window.source,
is_temp_url:window.is_temp_url,
appmsg_like_type:window.appmsg_like_type,
pass_ticket:window.pass_ticket,
passparam:window.passparam,
wxtoken:window.wxtoken,
copyright_stat:window.copyright_stat,
need_pay:window.need_pay,
is_pay_subscribe:window.is_pay_subscribe,
msg_title:window.msg_title,
msg_desc:window.msg_desc,
ct:window.ct,
ori_send_time:window.ori_send_time,
msg_link:window.msg_link,
is_login:window.is_login,
user_uin:window.user_uin,
isprofileblock:window.isprofileblock,
round_head_img:window.round_head_img,
kanyikan_video_educate_pic:window.kanyikan_video_educate_pic,
kanyikan_educate_pic:window.kanyikan_educate_pic,
appmsg_type:window.appmsg_type,
send_time:window.send_time,
isPaySubscribe:window.isPaySubscribe,
defaultAvatarUrl:window.defaultAvatarUrl
});
}
function n(){
y.forEach(function(e){
return x.registerModule(e.name,e);
});
}
function _(){
y.forEach(function(e){
return x.unregisterModule(e.name);
});
}
function i(){
j.forEach(function(e){
return x.registerModule([l.name,e.name],e);
});
}
function o(){
j.forEach(function(e){
return x.unregisterModule([l.name,e.name]);
});
}
function a(){
_(),o(),x.commit(u.SET_CGI_DATA,s()),x.commit(u.SET_URL_PARAMS,w.getParams()),n(),
i();
}
function t(e){
x.commit(u.SET_CGI_DATA,s()),x.commit(u.SET_URL_PARAMS,w.getParams()),e&&(n(),i());
}
function r(){
x.commit(u.SET_EXT_RES,{}),x.commit(u.SET_AD_RES,{}),x.commit(u.SET_CGI_DATA,{}),
x.commit(u.SET_URL_PARAMS,{});
}
var d,p=e("pages_new/3rd/vue.js"),m=e("pages_new/3rd/vuex.js"),w=e("pages_new/modules/utils/url.js"),c=e("pages_new/common_share/video/lifecycle_manager.js");
p.use(m);
var u={
SET_EXT_RES:"SET_EXT_RES",
SET_AD_RES:"SET_AD_RES",
SET_CGI_DATA:"SET_CGI_DATA",
SET_URL_PARAMS:"SET_URL_PARAMS",
SET_PRAISE_NUM:"SET_PRAISE_NUM",
SET_RECOMMEND_NUM:"SET_RECOMMEND_NUM",
SET_RECOMMEND_STATUS:"SET_RECOMMEND_STATUS",
SET_PRAISE_STATUS:"SET_PRAISE_STATUS",
SET_SUBSCRIBE_STATUS:"SET_SUBSCRIBE_STATUS",
SET_PUBLIC_RELATED_VIDEO:"SET_PUBLIC_RELATED_VIDEO"
},l=e("pages_new/common_share/video/player/player_store.js"),g=e("pages_new/common_share/video/related_video_list/related_video_list_store.js"),S=e("pages_new/common_share/video/like_and_share/like_and_share_store.js"),E=e("pages_new/common_share/video/topic/topic_store.js"),T=e("pages_new/modules/comment/comment_store.js"),f=e("pages_new/modules/reward/reward_store.js"),y=[g,S,E,T,f],R=e("pages_new/common_share/video/player/plugins/danmu/danmu_store.js"),A=e("pages_new/common_share/video/player/plugins/popup/popup_store.js"),h=e("pages_new/common_share/video/player/plugins/mid_ad/mid_ad_store.js"),v=e("pages_new/common_share/video/player/plugins/after_ad/after_ad_store.js"),P=e("pages_new/common_share/video/player/plugins/auto_next/auto_next_store.js"),j=[R,A,h,v,P],x=new m.Store({
modules:_defineProperty({},l.name,l),
state:{
extRes:{},
adRes:{},
cgiData:{},
urlParams:{}
},
mutations:(d={},_defineProperty(d,u.SET_EXT_RES,function(e,s){
e.extRes=s;
}),_defineProperty(d,u.SET_AD_RES,function(e,s){
e.adRes=s;
}),_defineProperty(d,u.SET_CGI_DATA,function(e,s){
e.cgiData=s;
}),_defineProperty(d,u.SET_URL_PARAMS,function(e,s){
e.urlParams=s;
}),_defineProperty(d,u.SET_PRAISE_NUM,function(e,s){
e.extRes.appmsgstat&&e.extRes.appmsgstat.old_like_num&&(e.extRes.appmsgstat.old_like_num=s.praiseNum);
}),_defineProperty(d,u.SET_RECOMMEND_NUM,function(e,s){
e.extRes.appmsgstat&&e.extRes.appmsgstat.like_num&&(e.extRes.appmsgstat.like_num=s.recommendNum);
}),_defineProperty(d,u.SET_RECOMMEND_STATUS,function(e,s){
e.extRes.appmsgstat&&(e.extRes.appmsgstat.liked=s.hasRecommended?1:0);
}),_defineProperty(d,u.SET_PRAISE_STATUS,function(e,s){
e.extRes.appmsgstat&&(e.extRes.appmsgstat.old_liked=s.hasPraised?1:0);
}),_defineProperty(d,u.SET_SUBSCRIBE_STATUS,function(e,s){
e.extRes.is_fans=s.hasSubscribed?1:0;
}),_defineProperty(d,u.SET_PUBLIC_RELATED_VIDEO,function(e,s){
e.cgiData.isPublicRelatedVideo=s.isPublicRelatedVideo;
}),d)
});
return c.register({
getData:a,
init:t,
destroy:r
}),x;
});var _extends=Object.assign||function(n){
for(var e=1;e<arguments.length;e++){
var t=arguments[e];
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);
}
return n;
};
define("appmsg/comment/comment_report.js",["common/comm_report.js"],function(n){
"use strict";
var e=n("common/comm_report.js"),t=void 0;
switch(1*window.item_show_type){
case 5:
t=1;
break;

case 7:
t=2;
break;

case 8:
t=3;
break;

case 10:
t=4;
break;

case 0:
case 9:
case 11:
default:
t=0;
}
return{
report22214:function(n){
return function(t){
return e.report(22214,_extends({},n,t));
};
}({
BizUin:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
AppMsgItemIdx:window.parseInt(window.idx,10)||0,
Scene:t,
EnterId:window.parseInt(window.enterid,10)||0,
CommentId64Bit:window.parseInt(window.comment_id,10)||0
}),
report22215:function(n){
return function(t){
return e.report(22215,_extends({},n,t));
};
}({
BizUin:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
AppMsgItemIdx:window.parseInt(window.idx,10)||0,
Scene:t,
EnterId:window.parseInt(window.enterid,10)||0,
CommentId64Bit:window.parseInt(window.comment_id,10)||0
})
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function e(e,t){
for(var n=0;n<t.length;n++){
var i=t[n];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);
}
}
return function(t,n,i){
return n&&e(t.prototype,n),i&&e(t,i),t;
};
}();
define("appmsg/emotion/emotion_panel.js",["widget/wx-widget/wx_emotion_panel.css","biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_common/utils/emoji_panel_data.js","biz_common/utils/emoji_data.js","biz_wap/utils/mmversion.js","appmsg/emotion/selection.js","appmsg/comment/comment_input/comment_input.js"],function(require,exports,module,alert){
"use strict";
require("widget/wx-widget/wx_emotion_panel.css");
var JSAPI=require("biz_wap/jsapi/core.js"),DomEvent=require("biz_common/dom/event.js"),panelData=require("biz_common/utils/emoji_panel_data.js"),emojiData=require("biz_common/utils/emoji_data.js"),mmversion=require("biz_wap/utils/mmversion.js"),Selection=require("appmsg/emotion/selection.js"),CommentInput=require("appmsg/comment/comment_input/comment_input.js"),emotionPanelList=[],EmotionPanel=function(){
function EmotionPanel(e){
switch(_classCallCheck(this,EmotionPanel),this.isShow=!1,this.opt=e,this.__bindEvent(),
e.type){
case"contenteditable":
this.valueKey="innerHTML",this.lastRange=null,this.__bindContenteditableEvent();
break;

default:
this.valueKey="value";
}
this.limit=e.limit,mmversion.isAndroid&&this.__initEmojiPanel(),emotionPanelList.push(this);
}
return _createClass(EmotionPanel,[{
key:"show",
value:function(){
var e=this;
this.isShow||(mmversion.isIOS?JSAPI.invoke("showSmileyPanel",{
hidden:!1,
duration:.01
},function(t){
/:ok$/.test(t.err_msg)&&(e.isShow=!0,"function"==typeof e.opt.onShow&&e.opt.onShow(t.height));
}):(this.opt.input.blur(),JSAPI.invoke("handleDeviceInfo",{
action:"hideKeyBoard"
},function(){}),setTimeout(function(){
e.panel.style.display="",e.isShow=!0,"function"==typeof e.opt.onShow&&e.opt.onShow(e.panel.offsetHeight);
},200)));
}
},{
key:"hide",
value:function(){
var e=this;
this.isShow&&(mmversion.isIOS?JSAPI.invoke("showSmileyPanel",{
hidden:!0
},function(t){
/:ok$/.test(t.err_msg)&&(e.isShow=!1,"function"==typeof e.opt.onHide&&e.opt.onHide());
}):(this.panel.style.display="none",this.isShow=!1,"function"==typeof this.opt.onHide&&this.opt.onHide(),
JSAPI.invoke("handleDeviceInfo",{
action:"hideKeyBoard"
},function(){})));
}
},{
key:"toggle",
value:function(){
this[this.isShow?"hide":"show"]();
}
},{
key:"setLimit",
value:function(e){
this.limit=e;
}
},{
key:"restoreRange",
value:function(){
if(this.lastRange)if("contenteditable"===this.opt.type){
var e=Selection.getSelection(),t=document.createRange();
t.setStart(this.lastRange.endContainer,this.lastRange.endOffset),t.setEnd(this.lastRange.endContainer,this.lastRange.endOffset),
e.removeAllRanges(),e.addRange(t);
}else{
var e=Selection.getSelection();
if(e.addRange)e.removeAllRanges(),e.addRange(this.lastRange);else{
var t=Selection.getRange();
t.setEndPoint&&(t.setEndPoint("EndToEnd",this.lastRange),t.setEndPoint("StartToStart",this.lastRange)),
t.select();
}
}else if("contenteditable"===this.opt.type){
var e=Selection.getSelection();
e.selectAllChildren(this.opt.input),e.collapseToEnd();
}else{
var n=this.opt.input,i=n.value.length;
n.setSelectionRange(i,i);
}
this.__saveRange();
}
},{
key:"__bindEvent",
value:function(){
var e=this;
DomEvent.on(this.opt.input,"touchstart",function(){
e.hide();
});
}
},{
key:"__bindContenteditableEvent",
value:function(){
var e=this;
DomEvent.on(this.opt.input,"input",function(){
e.__saveRange();
}),DomEvent.on(this.opt.input,"keyup",function(){
e.__saveRange();
}),DomEvent.on(this.opt.input,"mouseup",function(){
e.__saveRange();
});
var t=null;
DomEvent.on(this.opt.input,"paste",function(){
t&&clearTimeout(t),t=setTimeout(function(){
Selection.setCursorToEnd(CommentInput.FilterNode(e.opt.input,!0)),e.__saveRange();
},10);
});
}
},{
key:"__saveRange",
value:function(e){
this.lastRange=e||Selection.getRange();
}
},{
key:"__getContent",
value:function(e,t){
return this.opt.input[this.valueKey].substring(e,t);
}
},{
key:"__setInputValue",
value:function(e,t){
var n=this,i=this.opt.input;
if(this.opt.vueOpt){
var o=this.opt.vueOpt;
o.instance[o.key]=e,o.instance.$nextTick(function(){
n.__setSelectionRange(t);
});
}else i[this.valueKey]=e,this.__setSelectionRange(t);
}
},{
key:"__setSelectionRange",
value:function(e){
var t=this.opt.input;
if("contenteditable"===this.opt.type){
var n=(e||t.childNodes.length-1+"_").split("_").map(function(e,n,i){
return 1===n&&""===e?t.childNodes[1*i[0]].nodeValue.length:+e;
});
this.__saveRange({
endContainer:t.childNodes[n[0]],
endOffset:n[1]
});
}else t.setSelectionRange(e,e);
}
},{
key:"__insertContent",
value:function(e){
var t=this;
if(this.opt.input){
var n=this.opt.input,i="",o="",a=void 0,s=void 0;
"contenteditable"===this.opt.type?!function(){
var l=-1;
Array.prototype.forEach.call(n.childNodes,function(e,n){
t.lastRange?-1===l?e===t.lastRange.endContainer?1===e.nodeType?(l=n+1,i+=e.outerHTML):(l=n,
i+=e.nodeValue.slice(0,t.lastRange.endOffset),o+=e.nodeValue.slice(t.lastRange.endOffset)):i+=1===e.nodeType?e.outerHTML:e.nodeValue:o+=1===e.nodeType?e.outerHTML:e.nodeValue:i+=1===e.nodeType?e.outerHTML:e.nodeValue;
}),a=i+e+o,s=t.lastRange&&-1!==l?l+"_"+(t.lastRange.endOffset+e.length):"";
}():(i=this.__getContent(0,n.selectionStart),o=this.__getContent(n.selectionEnd),
a=i+e+o,s=n.selectionStart+e.length);
var l=this.opt.counter?this.opt.counter(a):a.length;
if(0!==this.limit&&l>this.limit)return;
this.__setInputValue(EmotionPanel.__filterContent(a),s);
}
}
},{
key:"__delContent",
value:function(){
var e=this;
if(this.opt.input){
var t=this.opt.input,n="",i="";
if("contenteditable"===this.opt.type){
var o=function(){
var o=-1;
if(e.lastRange?Array.prototype.some.call(t.childNodes,function(t){
return o++,t===e.lastRange.endContainer?!0:!1;
}):o=t.childNodes.length-1,-1===o)return{
v:void 0
};
var a=t.childNodes[o];
if(1===a.nodeType)if(t.removeChild(a),0===t.childNodes.length)e.lastRange=null;else{
var s=o,l=void 0;
o?(s--,l=3===t.childNodes[s].nodeType?t.childNodes[s].nodeValue.length:0):l=0,e.__saveRange({
endContainer:t.childNodes[s],
endOffset:l
});
}else{
var r=a.nodeValue;
if(r){
if(0===o&&0===e.lastRange.endOffset)return{
v:void 0
};
e.lastRange?(n=r.slice(0,e.lastRange.endOffset),i=r.slice(e.lastRange.endOffset)):(n=r,
i="");
var u=EmotionPanel.__delEmojiText(n,i),l=void 0;
null===u.value?(l=e.lastRange.endOffset-1,a.nodeValue=n.substring(0,n.length-1)+i):(l=e.lastRange.endOffset-u.length,
a.nodeValue=u.value),e.__saveRange({
endContainer:t.childNodes[o],
endOffset:l
});
}else if(o){
t.removeChild(a);
var c=t.childNodes[o-1];
e.__saveRange({
endContainer:c,
endOffset:3===c.nodeType?c.nodeValue.length:0
}),e.__delContent();
}
}
}();
if("object"===("undefined"==typeof o?"undefined":_typeof(o)))return o.v;
}else{
n=this.__getContent(0,t.selectionStart),i=this.__getContent(t.selectionEnd);
var a=void 0,s=void 0;
if(t.selectionStart===t.selectionEnd){
var l=EmotionPanel.__delEmojiText(n,i);
null===l.value?(a=n.substring(0,n.length-1)+i,s=t.selectionStart-1):(a=l.value,s=t.selectionStart-l.length);
}else a=n+i,s=t.selectionStart;
this.__setInputValue(EmotionPanel.__filterContent(a),s);
}
}
}
},{
key:"__initEmojiPanel",
value:function(){
for(var e=this,t=16,n=7,i=34,o=[],a={},s=[],l=0;l<panelData.length;l++)for(var r=0;r<emojiData.length;r++)if(emojiData[r].id===panelData[l]){
s[l]=emojiData[r];
break;
}
for(var l=0;n>l;l++)for(var r=0;t>r;r++){
var u=l*t+r;
s[u]&&o.push({
name:s[u].style,
title:s[u].emoji?s[u].emoji:s[u].cn,
bp:"background-position: 0 -"+u*i+"px;",
id:s[u].id
});
}
for(var l=0;l<s.length;l++)a[s[l].style]=s[l].emoji||s[l].cn;
var c=document.createDocumentFragment();
this.panel=document.createElement("ul"),this.panel.className="comment_primary_emotion_list_mobile comment__emoji__panel",
this.panel.style.display="none",c.appendChild(this.panel),o.forEach(function(t,n){
var i=document.createElement("li"),o=document.createElement("span");
i.className="comment_primary_emotion_item js_emotion_item",i.setAttribute("data-index",n),
o.className="comment_primary_emotion",o.setAttribute("style",t.bp),o.setAttribute("text-name",t.name),
o.setAttribute("role","button"),o.setAttribute("title",t.title),i.appendChild(o),
e.panel.appendChild(i);
}),document.body.appendChild(this.panel);
var h=void 0;
DomEvent.on(this.panel,"touchstart",function(e){
h=e.changedTouches[0].clientY;
}),DomEvent.on(this.panel,"touchmove",function(t){
var n=t.changedTouches[0].clientY,i=e.panel.scrollTop,o=e.panel.scrollHeight,a=e.panel.clientHeight;
(.5>i&&n>h||.5>o-i-a&&h>n)&&t.preventDefault(),"function"==typeof e.opt.onTouchmove&&e.opt.onTouchmove(t);
}),DomEvent.on(this.panel,"click",function(t){
if(console.log("click",t),"comment_primary_emotion"===t.target.className){
var n=t.target.getAttribute("text-name"),i=a[n];
i&&e.__insertContent(i),"function"==typeof e.opt.onChange&&e.opt.onChange({
type:"emotion",
value:n,
text:i
});
}
});
}
}],[{
key:"__filterContent",
value:function(e){
var t=e;
return t;
}
},{
key:"__getEmojiText",
value:function __getEmojiText(emoji){
for(var i=0;i<emojiData.length;i++){
var e=emojiData[i];
switch(emoji){
case e.cn:
return e.emoji||e.cn;

case e.hk:
return e.emoji||e.hk;

case e.us:
return e.emoji||e.us;

case e.emoji:
return e.emoji;

case e.code:
return e.emoji||e.cn;

default:
if(!mmversion.isIOS&&e.code.startsWith("\\ue"))try{
var c=eval("'"+e.code+"'");
if(emoji===c)return e.emoji||e.cn;
}catch(err){}
}
}
return"";
}
},{
key:"__delEmojiText",
value:function(e,t){
for(var n=null,i=0;i<emojiData.length;i++){
var o=emojiData[i];
if(o.cn&&e.endsWith(o.cn)){
n=o.cn.length;
break;
}
if(o.hk&&e.endsWith(o.hk)){
n=o.hk.length;
break;
}
if(o.us&&e.endsWith(o.us)){
n=o.us.length;
break;
}
if(o.emoji&&e.endsWith(o.emoji)){
n=o.emoji.length;
break;
}
}
return{
value:null===n?null:e.substring(0,e.length-n)+t,
length:n
};
}
}]),EmotionPanel;
}();
return mmversion.isIOS&&!function(){
var e=function(e,t,n){
"function"==typeof n&&n(),"function"==typeof e.opt.onChange&&e.opt.onChange(t);
};
JSAPI.on("onGetSmiley",function(t){
emotionPanelList.some(function(n){
if(n.isShow){
switch(t.smiley){
case"[DELETE_EMOTION]":
e(n,{
type:"action",
value:"del"
},function(){
n.__delContent();
});
break;

case"[DONE_EMOTION]":
e(n,{
type:"action",
value:"done"
},function(){
n.isShow=!1;
});
break;

default:
var i=EmotionPanel.__getEmojiText(t.smiley);
e(n,{
type:"emotion",
value:t.smiley,
text:i
},function(){
i&&n.__insertContent(i);
});
}
return!0;
}
return!1;
});
});
}(),EmotionPanel;
});function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function e(e,t){
for(var n=0;n<t.length;n++){
var i=t[n];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);
}
}
return function(t,n,i){
return n&&e(t.prototype,n),i&&e(t,i),t;
};
}();
define("common/fixed_input.js",["biz_common/dom/event.js"],function(e){
"use strict";
var t=e("biz_common/dom/event.js"),n=function(){
function e(n){
var i=this;
switch(_classCallCheck(this,e),this.hackStatus=!0,n.type){
case"contenteditable":
this.valueKey="innerHTML";
break;

default:
this.valueKey="value";
}
this.input=n.input,this.placeholder=this.input.cloneNode(),this.placeholder.removeAttribute("id"),
this.placeholder.style.display="none","function"==typeof n.onCreate&&n.onCreate(this.placeholder),
t.on(this.input,"focus",function(e){
if(i.hackStatus){
var t=i.input.scrollTop;
i.input.style.padding=0,i.input.style.height=0,i.placeholder.style.display="",i.placeholder.scrollTop=t,
setTimeout(function(){
i.input.style.removeProperty("padding"),i.input.style.removeProperty("height"),i.placeholder.style.display="none";
},300);
}
"function"==typeof n.onFocus&&n.onFocus(e);
}),t.on(this.input,"input",function(e){
i.placeholder[i.valueKey]=i.input[i.valueKey],"function"==typeof n.onInput&&n.onInput(e);
}),this.input.insertAdjacentElement("afterend",this.placeholder);
}
return _createClass(e,[{
key:"setInput",
value:function(e){
this.input[this.valueKey]=e,this.setPlaceholder(e);
}
},{
key:"setPlaceholder",
value:function(e){
this.placeholder[this.valueKey]=e;
}
},{
key:"enableHack",
value:function(){
this.hackStatus=!0;
}
},{
key:"disableHack",
value:function(){
this.hackStatus=!1;
}
}]),e;
}();
return n;
});define("appmsg/comment/comment_length.js",["pages/utils.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js"],function(e){
"use strict";
var t=e("pages/utils.js"),i=e("biz_wap/utils/mmversion.js"),s=e("biz_wap/utils/device.js"),n=i.is_wxwork,r=s.os.pc&&!n;
return{
remindWordCount:10,
getLength:function(e){
return e=t.trim(e),r&&(e=e.replace(/<br\/>/g,"").replace(/\n/g,"")||""),Math.ceil(e.replace(/[^\x00-\xff]/g,"**").length/2);
},
getLimit:function(e){
return"comment"===e?600:140;
}
};
});function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function t(t,e){
for(var n=0;n<e.length;n++){
var i=e[n];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i);
}
}
return function(e,n,i){
return n&&t(e.prototype,n),i&&t(e,i),e;
};
}();
define("appmsg/comment/comment_input/comment_input.js",["biz_common/dom/event.js","pages/utils.js","appmsg/emotion/selection.js","common/utils.js","appmsg/emotion/dom.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","biz_common/tmpl.js","appmsg/comment/comment_input/comment_input.html.js","appmsg/emotion/emotion_pc.js","appmsg/emotion/emotion.js"],function(t){
"use strict";
var e=t("biz_common/dom/event.js"),n=t("pages/utils.js"),i=t("appmsg/emotion/selection.js"),o=t("common/utils.js"),s=t("appmsg/emotion/dom.js"),a=t("biz_wap/utils/device.js"),m=t("biz_wap/utils/mmversion.js"),l=t("biz_common/tmpl.js"),r=t("appmsg/comment/comment_input/comment_input.html.js"),u=a.os.pc&&!m.is_wxwork,d=t(u?"appmsg/emotion/emotion_pc.js":"appmsg/emotion/emotion.js").Emotion,c="comment_primary_counter_warn",p="comment_primary_input_editing",h=o.getInnerHeight(),g=function(t,e){
for(var n=["&#96;","`","&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&yen;","??","&amp;","&"],i=["&","&amp;","??","&yen;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;","`","&#96;"],o=e?i:n,s=0;s<o.length;s+=2)t=t.replace(new RegExp(o[s],"g"),o[s+1]);
return t;
},v=function(){
function t(e){
var i=this;
_classCallCheck(this,t),this.type=e.type||"comment",this.placeholder=e.placeholder,
this.length=e.length,this.onChange=e.onChange,this.onSubmit=e.onSubmit,this.onShow=e.onShow,
this.onHide=e.onHide,this.onBlur=e.onBlur,this.onClick=e.onClick,this.dom={},this.renderEl=null,
this.target=null,this.value="",this.lastRange=null,this.isShow=!1,this.params=null;
var o=document.createElement("div");
o.innerHTML=l.tmpl(r,{
deviceIsPc:u,
placeholder:this.placeholder,
submitText:e.submitText,
length:this.length,
iconEmotionSwitch:window.icon_emotion_switch,
iconEmotionSwitchActive:window.icon_emotion_switch_active,
iconEmotionSwitchPrimary:window.icon_emotion_switch_primary,
iconEmotionSwitchActivePrimary:window.icon_emotion_switch_active_primary
},!1);
var a=n.qs(".js_wrp",o);
this.dom={
wrp:a,
input:n.qs(".js_input",a),
placeholder:n.qs(".js_placeholder",a),
emotionWrp:n.qs(".js_emotion_wrp",a),
submit:n.qs(".js_submit",a),
counter:n.qs(".js_counter",a),
counterLen:n.qs(".js_counter_len",a)
},document.body.appendChild(a),this.emotion=new d(u?{
emotionSwitch:this.dom.emotionWrp,
input:this.dom.input,
submit:this.dom.submit,
tool:n.qs(".js_tool",a),
onSelect:function(t){
i.insertHTML('<img src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single '+t.name+'" alt="mo-'+t.title+'">'),
i.emotion.emotionPanelMove();
}
}:{
emotionPanel:s(n.qs(".js_emotion_panel")),
inputArea:s(this.dom.input),
emotionPanelArrowWrp:s(n.qs(".js_emotion_panel_arrow_wrp")),
emotionSwitcher:s(this.dom.emotionWrp),
emotionSlideWrapper:s(n.qs(".js_slide_wrapper")),
emotionNavBar:s(n.qs(".js_navbar")),
submitBtn:s(this.dom.submit),
inputEmotion:function(){
i.dom.submit.disabled=0===n.trim(i.dom.input.value).length;
}
}),this.bindEvent();
}
return _createClass(t,[{
key:"bindEvent",
value:function(){
var o=this;
e.tap(this.dom.submit,function(t){
t.preventDefault(),"function"==typeof o.onSubmit&&o.onSubmit(o.params);
}),u?!function(){
a.os.Mac&&e.on(window,"blur",function(){
o.dom.input&&"none"!==o.dom.input.display&&""!==o.dom.input.innerHTML&&o.blur();
}),e.on(o.dom.input,"focus",function(){
o.dom.wrp.classList.add(p);
}),e.on(o.dom.input,"blur",function(){
o.dom.wrp.classList.remove(p);
}),e.on(o.dom.input,"input",function(){
o.inputHandler();
}),e.tap(o.dom.input,function(){
o.emotion.hide(),"function"==typeof o.onClick&&o.onClick();
}),e.on(o.dom.input,"keyup",function(){
o.saveRange(),o.save();
}),e.on(o.dom.input,"keydown",function(t){
return 13===t.keyCode?(o.saveRange(),o.insertHTML("<br/>"),o.saveRange(),!1):!0;
}),e.on(o.dom.input,"mouseup",function(){
o.saveRange(),o.save();
});
var s=null;
e.on(o.dom.input,"paste",function(){
s&&clearTimeout(s),s=setTimeout(function(){
return i.setCursorToEnd(t.FilterNode(o.dom.input,!0)),o.saveRange(),o.save(),!1;
},10);
}),e.on(document,"click",function(t){
if(o.isShow){
var e=t.target;
n.isParent(e,o.target)||n.isParent(e,o.dom.wrp)||""!==n.trim(o.dom.input.innerHTML)?!o.emotion.isShow||n.isParent(e,o.emotion.dom.emotionPanel)||n.isParent(e,o.dom.emotionWrp)||o.emotion.hide():o.hide();
}
},!1);
}():!function(){
var t=["??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","[]","??????","{}","()","<>"],i=!1;
e.on(o.dom.input,"input",function(e){
o.dom.submit.disabled=0===n.trim(o.dom.input.value).length,a.os.ios&&e.data&&t.indexOf(e.data)>-1&&(i=!0);
}),a.os.ios&&(e.on(o.dom.input,"click",function(){
i&&(o.blur(),o.focus(),i=!1),"function"==typeof o.onClick&&o.onClick();
}),window.__second_open__&&e.on(o.dom.input,"blur",function(){
"function"==typeof o.onBlur&&o.onBlur();
}));
}();
}
},{
key:"inputHandler",
value:function(){
var t=this.dom.input.innerHTML;
""===t||"<br>"===t?(this.dom.placeholder.style.display="",this.dom.input.innerHTML=""):this.dom.placeholder.style.display="none";
}
},{
key:"show",
value:function(t){
var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
t!==this.renderEl&&("append"===e.renderType?t.appendChild(this.dom.wrp):t.insertAdjacentElement("afterend",this.dom.wrp),
this.renderEl=t),this.target=e.target||t,void 0!==e.placeholder&&e.placeholder!==this.placeholder&&(this.dom.placeholder.innerHTML=e.placeholder,
this.placeholder=e.placeholder),this.params=e.params||null,this.dom.wrp.style.display="";
var n=this.dom.wrp.getBoundingClientRect();
n.top+n.height>=h&&window.scrollTo(0,window.scrollY+n.height),this.dom.input.innerHTML=e.text||"",
this.isShow=!0,u&&(this.inputHandler(),this.lastRange=null,this.save()),this.focus(),
"function"==typeof this.onShow&&this.onShow(t,this.dom.input);
}
},{
key:"hide",
value:function(){
this.isShow=!1,this.dom.wrp.style.display="none",this.emotion.hide(),"function"==typeof this.onHide&&this.onHide(this.target,this.params),
this.params=null;
}
},{
key:"focus",
value:function(){
this.dom.input.focus();
}
},{
key:"blur",
value:function(){
this.dom.input.blur();
}
},{
key:"hideEmotionPannel",
value:function(){
this.emotion.hidePannel();
}
},{
key:"getInput",
value:function(){
return this.dom.input;
}
},{
key:"getSubmit",
value:function(){
return this.dom.submit;
}
},{
key:"saveRange",
value:function(){
this.lastRange=i.getRange();
}
},{
key:"restoreRange",
value:function(){
if(this.lastRange){
var t=i.getSelection();
if(t.addRange)t.removeAllRanges(),t.addRange(this.lastRange);else{
var e=i.getRange();
e.setEndPoint&&(e.setEndPoint("EndToEnd",this.lastRange),e.setEndPoint("StartToStart",this.lastRange)),
e.select();
}
}
}
},{
key:"save",
value:function(){
if(document.execCommand("AutoUrlDetect",!1,!1),this.value=this.emotion.textFilter(g(this.getAfterFilterNodeHtml())),
u){
var t=n.trim(this.value).replace(/(<br\/>)|\n/g,"").length;
this.dom.counterLen.innerText=t,t>this.length?(this.dom.counter.style.display="",
this.dom.counter.classList.add(c),this.dom.submit.disabled=!0):1>t?(this.dom.counter.style.display="none",
this.dom.counter.classList.remove(c),this.dom.submit.disabled=!0):t>=this.length-10?(this.dom.counter.style.display="",
this.dom.counter.classList.remove(c),this.dom.submit.disabled=!1):(this.dom.counter.style.display="none",
this.dom.counter.classList.remove(c),this.dom.submit.disabled=!1);
}
"function"==typeof this.onChange&&this.onChange(this.renderEl,this.dom.input);
}
},{
key:"insertHTML",
value:function(t){
this.focus(),this.dom.input.scrollTop=this.dom.input.scrollHeight,this.restoreRange();
var e=i.getRange();
if(e){
if(e.createContextualFragment){
t+='<img style="width:1px;height:1px;"></img>';
var n=e.createContextualFragment(t),o=n.lastChild,s=i.getSelection();
e.deleteContents(),e.insertNode(n),e.setStartBefore(o),e.setEndAfter(o),s.removeAllRanges(),
s.addRange(e),document.execCommand("Delete",!1,null);
}else e.pasteHTML&&t&&(e.pasteHTML(t),e.select(),e.collapse&&e.collapse(!1));
this.saveRange(),this.save();
}
}
},{
key:"getAfterFilterNodeHtml",
value:function(){
var e=document.createElement("div");
return e.innerHTML=this.dom.input.innerHTML,t.FilterNode(e),e.innerHTML;
}
}],[{
key:"FilterNode",
value:function(t,e){
for(var n=null,i=t.childNodes.length-1;i>=0;i--){
var o=t.childNodes[i];
switch(o.nodeType){
case 1:
var s=o.nodeName.toUpperCase();
if("BR"!==s){
var a=void 0,m=!1;
if("IMG"===s&&o.classList.contains("icon_emotion_single")?a=o:(a=o.textContent||o.innerText||"",
m=!0),a){
var l=m?document.createTextNode(a):a;
e&&!n&&(n=l),t.replaceChild(l,o);
}else t.removeChild(o);
}
break;

case 3:
break;

default:
t.removeChild(o);
}
}
return e?n:void 0;
}
}]),t;
}();
return v;
});