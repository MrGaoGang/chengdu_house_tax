define("pages_new/common_share/video/report.js",["pages/utils.js","biz_wap/jsapi/core.js","common/utils.js","biz_wap/utils/localstorage.js","biz_wap/utils/device.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/wapsdk.js","biz_common/base64.js"],function(e){
"use strict";
function i(e){
switch(e.EventType){
case 1:
E=e.StartTime;
break;

case 10:
z=e.StartTime;
break;

case 12:
M=e.StartTime;
break;

case 13:
O=e.StartTime;
break;

case 14:
P=e.StartTime;
break;

case 15:
if(!E)return;
var i=e.EndTime,n=z-E,t=i-E,o=i-z,a=e.extInfo,s=0===a.playCount&&a.previousCompletedSize>0,d=s?.2:D;
if(z&&n>0){
var r=window.__second_open__?21:24;
s&&(r=window.__second_open__?29:31),l.saveSpeeds({
sample:d,
uin:S,
pid:h,
speeds:{
sid:r,
time:n
}
});
}
if(t>0){
var r=window.__second_open__?22:25;
s&&(r=window.__second_open__?27:28),l.saveSpeeds({
sample:d,
uin:S,
pid:h,
speeds:{
sid:r,
time:t
}
}),console.log("[Video Save Speed] enterToPlayTime: "+t+" sid: "+r);
}
if(z&&o>0){
var r=window.__second_open__?23:26;
s&&(r=window.__second_open__?30:32),l.saveSpeeds({
sample:d,
uin:S,
pid:h,
speeds:{
sid:r,
time:o
}
});
}
M&&z&&l.saveSpeeds({
sample:D,
uin:S,
pid:h,
speeds:{
sid:34,
time:M-z
}
}),O&&M&&l.saveSpeeds({
sample:D,
uin:S,
pid:h,
speeds:{
sid:35,
time:O-M
}
}),i&&P&&l.saveSpeeds({
sample:D,
uin:S,
pid:h,
speeds:{
sid:36,
time:i-P
}
}),l.send(),E=0,console.log("[system]","是否预加载: "+s),console.log("[system]","extInfo: "+JSON.stringify(a));
}
}
function n(e){
l.saveSpeeds({
sample:e.sample||D,
uin:S,
pid:h,
speeds:{
sid:e.sid,
time:e.time
}
});
}
function t(){
var e=0,i=window.networkType;
switch(i||(i=navigator.userAgent.match(/NetType\/(.*?)(\s|$)/),i=i&&i[1]&&i[1].toLowerCase()),
i){
case"wifi":
e=1;
break;

case"2g":
e=2;
break;

case"3g":
e=3;
break;

case"2g/3g":
e=3;
break;

case"4g":
e=4;
}
return e;
}
function o(){
if(void 0===f){
var e=navigator.userAgent.match(/Mozilla.*?\((.*?)\)(\s|$)/);
f=e&&e[1]||"unknown";
}
return f;
}
function a(){
return void 0===b&&(b=["ios","android","windows","Mac"].filter(function(e){
return u.os[e];
})[0]||"unknown"),b;
}
function s(){
return void 0===k&&(k=u.os.version||"unknown"),k;
}
function d(){
return void 0===T&&(T=window.__second_open__?1:0),T;
}
function r(e){
"number"!=typeof e.StartTime&&(e.StartTime=Date.now()),"number"!=typeof e.EndTime&&(e.EndTime=Date.now()),
I.push({
type:5,
item:Object.keys(e).map(function(i){
return{
key:i,
val:e[i]+""
};
})
}),i(e);
}
function p(){
window.top===window&&(I=[],v.addReport(function(e){
if(!c.isWcSlPage())return!1;
window.__second_open__&&window.__second_open_auth_time__&&r({
EventType:6,
StartTime:window.__second_open_auth_time__,
EndTime:window.__second_open_auth_time__
}),e||r({
EventType:2
});
var i=navigator.userAgent.match(/Language\/(.*?)(\s|$)/),n={
type:5,
item:[{
key:"DeviceModel",
val:o()
},{
key:"DeviceBrand",
val:o()
},{
key:"OsName",
val:a()
},{
key:"OsVersion",
val:s()
},{
key:"LanguageVersion",
val:i&&i[1]||"unknown"
},{
key:"NetType",
val:t()+""
},{
key:"EnterId",
val:1*(window.enterid||window.cgiData.enterid||parseInt(Date.now()/1e3,10))+""
},{
key:"EnterPageId",
val:1*(window.enterid||window.cgiData.enterid||parseInt(Date.now()/1e3,10))+""
},{
key:"AppMsgUrl",
val:window.location.href
},{
key:"Vid",
val:window.cgiData.vid
},{
key:"Scene",
val:1*(window.scene||window.cgiData.scene||_.getParam("scene"))+""
},{
key:"SubScene",
val:1*(window.subscene||window.cgiData.subscene||_.getParam("subscene"))+""
}]
},d=I;
return I=[],{
reportUrl:"https://mp.weixin.qq.com/mp/videoh5report",
reportData:JSON.stringify({
report:d,
comm_fields:n
}),
method:"POST"
};
}));
}
var _=e("pages/utils.js"),w=e("biz_wap/jsapi/core.js"),c=e("common/utils.js"),m=e("biz_wap/utils/localstorage.js"),u=e("biz_wap/utils/device.js"),v=e("biz_wap/jsapi/leaveReport.js"),l=e("biz_wap/utils/wapsdk.js"),g=e("biz_common/base64.js").toBase64,y="function"==typeof window.btoa?window.btoa:g,f=void 0,b=void 0,k=void 0,T=void 0,S="";
try{
S=window.encodeURIComponent(y(window.user_uin));
}catch(j){
S="";
}
var h=2181,D=.02;
l.setBasicTime({
sample:D,
uin:S,
pid:h
});
var E=0,z=0,M=0,O=0,P=0,I=[];
return w.invoke("handleMPPageAction",{
action:"getEnterTime"
},function(e){
var i=e.clickTimeMs,n=m.get("__get_enter_video_common_time__");
i+""!==n?(m.set("__get_enter_video_common_time__",i),console.log("[Video Enter Time]",i)):i=0,
r({
EventType:1,
MiaoKai:d(),
StartTime:i||window.enter_time||Date.now(),
EndTime:i||window.enter_time||Date.now()
});
}),window.addEventListener("load",function(){
r({
EventType:7
});
}),p(),{
saveSpeedsForVideo:n,
init19735Report:p,
add19735ExtData:r,
getNetType:t,
getDeviceModel:o,
getOsName:a,
getOsVersion:s,
getMiaoKai:d
};
});define("pages_new/common_share/video/utils/immersive_data.js",["biz_wap/jsapi/log.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function i(e){
o({
url:"/mp/immersive_player?action=get_player_data&__biz="+(e.biz||"")+"&mid="+(e.mid||"")+"&idx="+(e.idx||"")+"&vid="+(e.vid||"")+"&item_show_type="+window.real_item_show_type,
dataType:"json",
timeout:3e4,
type:"GET",
success:function(i){
if(console.info("[沉浸式播放器数据响应请求]: ",i),s.info("[Player] success get immersive data"),
i&&i.base_resp&&0===i.base_resp.ret?"function"==typeof e.onSuccess&&e.onSuccess(i):"function"==typeof e.onError&&e.onError(),
i)try{
s.info("[Player] success get immersive data, immersive data is: "+JSON.stringify(i));
}catch(t){}else s.info("[Player] success get immersive data, immersive data is empty");
},
error:function(){
"function"==typeof e.onError&&e.onError();
},
complete:function(){
"function"==typeof e.onComplete&&e.onComplete();
}
});
}
function t(e){
var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t="/mp/immersive_player?action=op&type="+(e.type||0)+"&__biz="+(e.biz||"")+"&mid="+(e.mid||"")+"&idx="+(e.idx||"")+"&vid="+(e.vid||"")+"&appmsgid="+(e.mid||"")+"&passparam="+(window.passparam||"")+"&reuqest_id="+Date.now();
o({
url:t,
dataType:"json",
timeout:3e4,
data:{
is_temp_url:i.is_temp_url||0,
scene:i.source,
subscene:i.subscene,
appmsg_like_type:i.appmsg_like_type,
item_show_type:window.real_item_show_type,
client_version:i.clientversion,
comment:e.comment?e.comment:"",
prompted:1,
style:e.styleType,
passparam:i.passparam||"",
request_id:(new Date).getTime(),
device_type:i.devicetype||"",
exptype:i.exptype||"",
expsessionid:i.expsessionid||""
},
type:"POST",
success:function(i){
console.log("operate immersive player data",e,i),i&&i.base_resp&&0===i.base_resp.ret?"function"==typeof e.onSuccess&&e.onSuccess(i):"function"==typeof e.onError&&e.onError();
},
error:function(){
"function"==typeof e.onError&&e.onError();
},
complete:function(){
"function"==typeof e.onComplete&&e.onComplete();
}
});
}
var s=e("biz_wap/jsapi/log.js"),o=e("biz_wap/utils/ajax.js");
return{
getImmersivePlayerData:i,
oprImmersivePlayerData:t
};
});define("common/safeAreaInsets.js",["biz_wap/jsapi/core.js","biz_wap/utils/device.js"],function(t){
"use strict";
function e(){
return h=a.os.android?"":"CSS"in window&&"function"==typeof CSS.supports?CSS.supports("top: env(safe-area-inset-top)")?"env":CSS.supports("top: constant(safe-area-inset-top)")?"constant":"":"";
}
function n(t){
p.length||setTimeout(function(){
var t={};
p.forEach(function(e){
t[e]=f[e];
}),p.length=0,u.forEach(function(e){
e(t);
});
},0),p.push(t);
}
function o(){
function t(t,e){
var n=t.style;
Object.keys(e).forEach(function(t){
var o=e[t];
n[t]=o;
});
}
function o(t){
t?r.push(t):r.forEach(function(t){
t();
});
}
function i(e,i){
var r=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),p=100,u=1e4,l={
position:"absolute",
width:p+"px",
height:"200px",
boxSizing:"border-box",
overflow:"hidden",
paddingBottom:h+"(safe-area-inset-"+i+")"
};
t(r,l),t(s,l),t(a,{
transition:"0s",
animation:"none",
width:"400px",
height:"400px"
}),t(d,{
transition:"0s",
animation:"none",
width:"250%",
height:"250%"
}),r.appendChild(a),s.appendChild(d),e.appendChild(r),e.appendChild(s),o(function(){
function t(){
this.scrollTop!==(this===r?e:o)&&(r.scrollTop=u,s.scrollTop=u,e=r.scrollTop,o=s.scrollTop,
n(i));
}
r.scrollTop=u,s.scrollTop=u;
var e=r.scrollTop,o=s.scrollTop;
r.addEventListener("scroll",t,c),s.addEventListener("scroll",t,c);
});
var v=getComputedStyle(r);
Object.defineProperty(f,i,{
configurable:!0,
get:function(){
return parseFloat(v.paddingBottom);
}
});
}
if(h="string"==typeof h?h:e(),!h)return void d.forEach(function(t){
f[t]=0;
});
var r=[],c=!1;
try{
var s=Object.defineProperty({},"passive",{
get:function(){
c={
passive:!0
};
}
});
window.addEventListener("test",null,s);
}catch(a){}
var p=document.createElement("div");
t(p,{
position:"absolute",
left:"0",
top:"0",
width:"0",
height:"0",
zIndex:"-1",
overflow:"hidden",
visibility:"hidden"
}),d.forEach(function(t){
i(p,t);
}),document.body.appendChild(p),o(),l=!0;
}
function i(t){
return l||o(),f[t];
}
function r(t){
e()&&(l||o(),"function"==typeof t&&u.push(t));
}
function c(t){
var e=u.indexOf(t);
e>=0&&u.splice(e,1);
}
var s=t("biz_wap/jsapi/core.js"),a=t("biz_wap/utils/device.js"),d=["top","left","right","bottom"],f={},p=[],u=[],l=void 0,h=void 0,v=!1;
return a.os.android&&s.invoke("handleDeviceInfo",{
action:"getSafeAreaInsets"
},function(t){
-1!==t.err_msg.indexOf(":ok")?(f.top=t.top,f.left=t.left,f.right=window.screen.width-t.right,
f.bottom=window.screen.height-t.bottom,v=!0):d.forEach(function(t){
f[t]=0;
}),l=!0;
}),{
get support(){
return 0!==("string"==typeof h?h:e()).length||v;
},
get top(){
return i("top");
},
get left(){
return i("left");
},
get right(){
return i("right");
},
get bottom(){
return i("bottom");
},
onChange:r,
offChange:c
};
});function _typeof(e){
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
for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);
}
return e;
};
define("pages_new/common_share/video/player/player.js",["page/pages/video_new.css","biz_wap/zepto/zepto.js","pages_new/3rd/vue.js","pages_new/3rd/vuex.js","biz_wap/jsapi/log.js","pages_new/common_share/video/player/player.html.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","new_video/ctl.js","pages/version4video.js","biz_wap/jsapi/core.js","new_video/plugin/util.js","biz_wap/utils/jsmonitor_report.js","common/utils.js","biz_wap/utils/ajax.js","appmsg/set_font_size.js","pages_new/modules/toast/toast.js","biz_wap/utils/openUrl.js","biz_common/utils/url/parse.js","pages/utils.js","common/safeAreaInsets.js"],function(e){
"use strict";
e("page/pages/video_new.css"),e("biz_wap/zepto/zepto.js");
var t=e("pages_new/3rd/vue.js"),i=e("pages_new/3rd/vuex.js"),s=i.mapState,o=i.mapMutations;
t.config.ignoredElements=["wx-open-video"];
var n=e("biz_wap/jsapi/log.js"),a=e("pages_new/common_share/video/player/player.html.js"),r=e("biz_wap/utils/device.js"),h=e("biz_wap/utils/mmversion.js"),u=e("new_video/ctl.js"),l=e("pages/version4video.js"),d=e("biz_wap/jsapi/core.js"),c=e("new_video/plugin/util.js"),p=e("biz_wap/utils/jsmonitor_report.js"),g=e("common/utils.js"),_=e("biz_wap/utils/ajax.js"),f=e("appmsg/set_font_size.js"),m=e("pages_new/modules/toast/toast.js"),v=e("biz_wap/utils/openUrl.js"),y=e("biz_common/utils/url/parse.js"),S=e("pages/utils.js"),T=S.formatReadNum,w={
timeupdateCacheCount:3,
loadingTimeout:18e4,
showAutoTipsTimeout:3e3,
outerWidth:Math.min(window.outerWidth,window.outerHeight),
screenWidth:Math.min(window.screen.width,window.screen.height),
screenLength:Math.max(window.screen.width,window.screen.height),
wcSlPlayerSupport:!1,
allPlayersOfPage:{},
statusDefine:{
init:1,
play:1,
pause:1,
loading:1,
end:1,
error:1
},
subStatusDefine:{
init:1,
play:1,
playing:1,
waiting:1,
stalled:1,
seeking:1,
seeked:1,
preload:1,
resolutionchange:1
},
nettypeMap:{
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
},
cellType:["2g","3g","4g","2g/3g"],
supportSubscribe:(r.os.iphone||r.os.ipad)&&h.isWechat&&h.gtVersion("7.0.15",1)||r.os.android&&h.isWechat&&h.gtVersion("7.0.17",1),
showFullscreenMenu:(r.os.iphone||r.os.ipad)&&h.isWechat&&h.gtVersion("7.0.16",1)||r.os.android&&h.isWechat&&h.gtVersion("7.0.18",1),
menuPlaybackRateIcon:{
light:"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",
dark:"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"
},
menuResolutionIcon:{
light:"iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAAEi6oPRAAAAAXNSR0IArs4c6QAAA0FJREFUeAHtWz2S1TAMfjDMMHCCpeYKdEDJKagXTkBBxQ4NDReA+t2CkqWjp+IaMFSL5I08jp8UOf59ycozxoksS58+K7aT5R0Otcq9ydBNikFUwvqVUfYGSInROdzcD6TkOhAdvuDNg1ASXXs3NNoLIsURtymYSMfhc+GOQHrr03NHoLyAwUQ6TNdmREvxLQXhxoW5S8pZBjlDWexyhgiZ1oqplxUSeMsdpwG1/uYMhMlXMo2hnex8cAC4LeAX8PB94uJNDicUGrd9Ldlz40qeNdE4IRIVhI5iRDPH1ULjZk2IwItnSEiaY2iWfJIh1hspW2sMbJeBI0DH9O5Z0adYCIioULlj5i9lBcEBXGFXEk5xjSx1kcXNCQGEdY2fZN1UQE3Y4FCmTFk3MAgwlSEumCayEYDwPUF6UIYwJIJBylNyqHRqFgHExrmEJQNPQflvPKDy/SOw93uy6bBwgLD/PdSHk2Lr5h84+NTaidk3BowBY8AYqMUAt3XQXlbLR4odjyM+D+EeNqJ4vzEg2lBxp0fUrSv6wUJ+xQPan1u95v+eHG+0A5qUT37Oa0PWAJE/ei+j+2ZtKqC3zRBEhuOkjrr73xogjXMth5o9TRIwmzKJGZKPYAgXW2nBFbcOAty9HcHQYpBnB0h77BejSewU84UbP4qhaw4MynowtGpxlQB9BrDvpCgqytHPYnkFvbRO9GzRryscndj5fOrv0fwAJ996ODIfxoAxYAwYA8aAMWAMGAPbZoA7vHIR4YH2GVT/4ZZT2qgM/9r7E2rWARqJ6fnaMdoXxjsr0gsiKcWvQUfo+AC11xd+wtGifQxGP0J9HRjHeFdl0hUMCGf1IjC2h8snUXxXcVClH2Hw/1yHBGrXsf+zvy8l6MXZR1gIsJSg0D39HQ13RqmG+pu4rklQ6pFhE8QQyJoEkc1dtUaQMp3aOUgZ7tYaTWfT/ZZByvQZQUaQ+4F5eIBVKJl3WwbN+Ti5M4JOKJkL7gJB+Hhll9JtPttxxYH0+2KJiJclvvZA0GUJAdrYPRDU9B1w7RqEX+H2VNR4tAzCD9phod9XhbI9XcfxJsV2BK3woLXXa4zTijFgDBgDxoAxYAzcHQb+A8TbERMpxGRsAAAAAElFTkSuQmCC",
dark:"iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAACMklEQVR4Ae2bO07DQBCGbYQQV6EDiSJHcAm38B2ghDsQiXuQI6QLXVoKDoHSmH8lr7SPrGcdu9jHv5LlzOwj83+ZsZ1o0zRsJEACJEACJEACJEACJEACJEACJJAYgTYmnmEYNhh3h+MmZnxmY06I99i27f5c3CIgwHnDxO7c5MJ8O0B6dTVduQ7THjOnBjhKdjfqNRE0k4AwUpVVTc3Tey2od685Xxi/xfEnzMuh+xZB9jjMCnH1NhIgV+gWdfrrOnO1UVIfDiBPilRi7oQSMsfUJOqZC8hcvIrXc0vMgoIU/YTj3nJOGCjPx4nuJLuWZlA0nCTVRwS1FFDEW+Q9ZFGJOdJ/YB9Gn/iE7sxN1lwT0AHXmPdklV4YGEtMALcmoGLKymS2JiBz3WJeE5DwURIQAQkEhG5mkABo0XNQjt+tBB5eNzPIQ2I7CMjm4VkE5CGxHQRk8/AsAvKQ2I5FdzF7qTQt/Or5gsiedXRz77zMIE0ucCagABjtJiBNInAmoAAY7SYgTSJwrgHQENAe5a4BUBSI0KDsn4PwnKM3PYUy5SEkPsafPSCIfIoReukYlphArjZA3wIPrzv7Epv73cojIDhqyyABh989F5Da11dSE/XMLbF+3Ncnbl3LgKKC00txSoDULnSzdTDUUWpz9Yr7pI+lkgjo8vROXoNwh9hjoV1gsdLc6q8ISq/Voras4Lqzwawq/8xi0aJBAiRAAiRAAiRAAiRAAiRAAiRAAikQ+AfRfUIyNXGRbAAAAABJRU5ErkJggg=="
}
};
try{
w._debug=window.location.href.indexOf("&_debug=1")>0;
}catch(b){
w._debug=!1;
}
var A=h.getInner();
window.parent===window&&h.isWechat&&!h.isInMiniProgram&&(r.os.iphone&&h.gtVersion("7.0.15",1)&&r.os.getNumVersion()>=10.3||r.os.android&&(A>"27001037"&&"27001060">A||A>="27001100")&&r.os.getNumVersion()>=5)&&(w.wcSlPlayerSupport=!0,
console.log("the client supports wcslplayer"));
var P=function(e){
return w._debug&&console.log(e);
},k=function(e,t){
var i=document.createElement("div");
return e in i.style?(i.style[e]=t,i.style[e]===t):!1;
},I=function(e){
var t=0,i=0,s=0;
return.5>e&&(e=0),e=Math.floor(e),t=Math.floor(e/3600),i=Math.floor((e-3600*t)/60),
s=e-3600*t-60*i,0!=t?(10>t&&(t="0"+t),t+=":"):t="",10>i&&(i="0"+i),10>s&&(s="0"+s),
t+i+":"+s;
},F=function(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
},C=function(){
var e=F();
return e?document[e]:!1;
},B={
name:"mp-video-player",
template:a,
props:{
opt:{
type:Object,
"default":function(){
return{};
}
},
wrapStyle:{
type:Object,
"default":function(){
return null;
}
},
videoStyle:{
type:Object,
"default":function(){
return null;
}
}
},
components:_defineProperty({},m.name,m),
data:function(){
var e=g.__useWcSlPlayer=this.supportWcSlPlayer()&&this.opt.useWcSlPlayer;
return console.log("use wcslplayer",e),{
id:Date.now()+"_"+Math.floor(Math.random()*Math.floor(Date.now())),
isImmersiveMode:g.supportImmersiveMode&&this.opt.useImmersiveMode,
isFeFullscreen:g.supportImmersiveMode&&this.opt.useFeFullscreen,
supportImmersiveMode:g.supportImmersiveMode,
isWcSlPlayer:e,
autoplay:!!this.opt.autoplay,
initialTime:this.opt.initialTime,
resolutionInfoIdx:0,
playbackRateInfoIdx:0,
showDefaultPlaybackRate:!1,
showFullscreenMenu:w.showFullscreenMenu,
mustHideFullScreen:!!r.browser.M1,
isAndroid:r.os.android,
isIPad:r.os.ipad,
removeVideo:!1,
fitVideo:!1,
currentTime:0,
videoDuration:0,
bufferedPercent:0,
touchToastSeperator:"/",
touchToastPercent:0,
touchToastCurVal:0,
touchToastTotalVal:0,
autoResolutionTipsStatus:0,
androidLandscapeFullOrientation:0,
fontSizeObserver:null,
enableWcSlPlayerFullscreenAfterOrientationChange:!0,
wcSlPlayerTransitionDuration:this.opt.useImmersiveMode?250:0,
longTouchPlaybackRatePrevValue:0,
likedCommentTipsStatus:0,
subscribeStatus:0,
snapshot:"",
topTips:"",
useQuic:!1,
compare1:null,
compare2:null
};
},
computed:_extends({},s("mp-video-player",["fullscreenStatus","seekingStatus","status","subStatus","loadingStatus","controlBarStatus","coverStatus","banOprStatus","midPlayStatus","resolutionEntryStatus","subSettingStatus","accessPlayBtnStatus","touchOprStatus","orientationStatus","progressBarMark"]),{
src:function E(){
var E=this.opt.src;
return this.opt.extinfo&&this.opt.extinfo.vid&&(E+="&vid="+this.opt.extinfo.vid+"&format_id="+this.opt.formatId),
E+="&support_redirect=0&mmversion="+h.get(),this.useQuic?E.replace("mpvideo.qpic.cn","wxsnsdy.wxs.qq.com/130/20210/snssvpdownload/SH/reserved"):E;
},
coverFit:function(){
return this.opt.coverFit;
},
cover:function(){
return this.opt.cover;
},
width:function(){
return Math.min(this.opt.width||300,w.screenWidth);
},
height:function(){
return Math.min(this.opt.height||300,w.screenLength);
},
ratio:function(){
return this.width/this.height;
},
videoWidth:function(){
return this.opt.videoWidth||300;
},
videoHeight:function(){
return this.opt.videoHeight||300;
},
videoRatio:function(){
return this.videoWidth/this.videoHeight;
},
isLandscape:function(){
return 1===this.orientationStatus;
},
needFeFullscreen:function(){
return window.__video_need_fe_fullscreen__=this.isWcSlPlayer||this.isFeFullscreen||this.isImmersiveMode,
window.__video_need_fe_fullscreen__;
},
display:function(){
return this.opt.autoHide?"none":"block";
},
title:function(){
return this.opt.videoTitle||"";
},
headImgUrl:function(){
return this.opt.headImgUrl||"";
},
nickname:function(){
return this.opt.bizNickName||"未命名公众号";
},
readNum:function(){
return T(this.opt.readNum);
},
praiseNum:function(){
return T(this.opt.praiseNum);
},
likeNum:function(){
return T(this.opt.likeNum);
},
isPraised:function(){
return!!this.opt.isPraised;
},
isLiked:function(){
return!!this.opt.isLiked;
},
oriStatus:function(){
return this.opt.oriStatus;
},
canShareVideo:function(){
return!!this.opt.canShareVideo;
},
isInPaySubscribe:function(){
return!!this.$store.state.cgiData.isPaySubscribe;
},
playbackRateInfo:function(){
return this.opt.playbackRateInfo;
},
maxPlaybackRateInfo:function(){
var e=void 0;
return this.playbackRateInfo&&this.playbackRateInfo.length&&this.playbackRateInfo.forEach(function(t){
(!e||t.rate>e.rate)&&(e=t);
}),e;
},
resolutionInfo:function(){
return this.opt.resolutionInfo&&this.opt.resolutionInfo.length?[].concat(this.opt.resolutionInfo):[];
},
flowNum:function(){
return this.opt.flow>=100?this.opt.flow:0;
},
duration:function(){
return"number"==typeof this.opt.duration?this.opt.duration:this.videoDuration;
},
progressPercent:function(){
var e=this.currentTime/this.duration;
return e=Math.ceil(100*e),e=Math.max(e,0),e=Math.min(e,100);
},
playbackRateName:function(){
var e=this.playbackRateInfo[this.playbackRateInfoIdx];
return!this.showDefaultPlaybackRate&&1===e.rate||this.longTouchPlaybackRatePrevValue?"倍速":e&&e.name||"倍速";
},
resolutionName:function(){
var e=this.resolutionInfo[this.resolutionInfoIdx];
return e&&e.name||"清晰度";
},
formatCurrentTime:function(){
return I(this.currentTime);
},
formatDuration:function(){
return I(this.duration);
},
wrapPresentStyle:function(){
if(this.fullscreenStatus&&this.needFeFullscreen){
var e={
width:(this.isLandscape?w.screenLength:w.screenWidth)+2+"px",
height:(this.isLandscape?w.screenWidth:w.screenLength)+"px",
position:"fixed",
padding:"0 1px",
left:"-1px",
top:0,
zIndex:4e3
};
return r.os.android&&this.isLandscape&&90===this.androidLandscapeFullOrientation&&(e.right="-1px",
delete e.left),e;
}
return _extends({
display:this.display,
width:this.width+"px",
height:this.height+"px"
},this.wrapStyle);
},
videoPresentStyle:function(){
return this.isImmersiveMode?{
display:"block",
width:this.width+"px",
height:this.height+"px"
}:this.fullscreenStatus?{
width:(this.isLandscape?w.screenLength:w.screenWidth)+"px",
height:(this.isLandscape?w.screenWidth:w.screenLength)+"px"
}:_extends({
display:"block",
width:this.width+"px",
height:this.height+"px"
},this.videoStyle);
},
changeFullSwitchStyle:function(){
return{
bottom:(w.screenLength-Math.min(w.screenLength,w.screenWidth/this.videoRatio))/2+16+"px"
};
}
}),
watch:{
src:function(e,t){
e!==t&&this.initPlayer();
}
},
mounted:function(){
var e=this;
this.initPlayer(),this.mountedTime=(new Date).getTime(),this.firstLoadingTime=0,
w.allPlayersOfPage[this.id]=this,d.on("onNetWorkChange",this.onNetworkChange),d.on("menu:haokan",this.onLikedCommentWrite),
document.body.addEventListener("mousemove",this.onProgressMouseMove),document.body.addEventListener("mouseup",this.onProgressMouseUp),
document.addEventListener("visibilitychange",this.onVisibilityChange),r.os.iphone||r.os.android?(window.addEventListener("orientationchange",this.onOrientationChange),
r.os.android?d.on("onOrientationsChange",this.onAndroidOrientationChange):(this.isFeFullscreen||this.isWcSlPlayer&&!this.isImmersiveMode)&&window.addEventListener("resize",this.onWindowResize)):r.os.ipad&&this.isFeFullscreen&&(this.onIPadOrientationChange(),
window.addEventListener("orientationchange",this.onIPadOrientationChange)),!g.supportImmersiveMode&&this.isWcSlPlayer&&r.os.iphone&&d.on("onPageStateChange",this.onIOSPageStateChange),
this.isImmersiveMode&&(this.setFullscreenStatus({
status:1
}),this.handleFullscreenChange({
state:!0,
type:"immersive"
}),d.invoke("setNavigationBarButtons",{
right:{
color:"#FFFFFFCC",
disableMinimizeBlock:!0
}
}),d.on("onNavigationBarRightButtonClick",this.onShowFullscreenMenu)),this.needFeFullscreen&&(window.addEventListener("unload",this.exitFullscreen),
d.on("onMPCustomMenuItemClick",this.onFullscreenMenuClick),this.isFeFullscreen&&r.os.android&&d.on("onExitFullscreen",this.__onAndroidExitFullscreen=function(){
return e.exitFullscreen({
directExit:!0
});
})),this.canShareVideo&&this.opt.supportNativeFullPlayer&&!this.needFeFullscreen&&(this.__jsapiFullscreenErrCnt=0,
setTimeout(this.getCoverBase64,1e3),d.on("onMPPageAction",this.onIOSJsapiExitFullscreen));
},
beforeDestroy:function(){
delete w.allPlayersOfPage[this.id],d.remove("onNetWorkChange",this.onNetworkChange),
d.remove("menu:haokan",this.onLikedCommentWrite),document.body.removeEventListener("mousemove",this.onProgressMouseMove),
document.body.removeEventListener("mouseup",this.onProgressMouseUp),document.removeEventListener("visibilitychange",this.onVisibilityChange),
r.os.iphone||r.os.android?(window.removeEventListener("orientationchange",this.onOrientationChange),
r.os.android?d.remove("onOrientationsChange",this.onAndroidOrientationChange):(this.isFeFullscreen||this.isWcSlPlayer&&!this.isImmersiveMode)&&window.removeEventListener("resize",this.onWindowResize)):r.os.ipad&&this.isFeFullscreen&&window.removeEventListener("orientationchange",this.onIPadOrientationChange),
!g.supportImmersiveMode&&this.isWcSlPlayer&&r.os.iphone&&d.remove("onPageStateChange",this.onIOSPageStateChange),
this.isImmersiveMode&&d.remove("onNavigationBarRightButtonClick",this.onShowFullscreenMenu),
this.needFeFullscreen&&(window.removeEventListener("unload",this.exitFullscreen),
d.remove("onMPCustomMenuItemClick",this.onFullscreenMenuClick),this.isFeFullscreen&&r.os.android&&d.remove("onExitFullscreen",this.__onAndroidExitFullscreen)),
this.canShareVideo&&this.opt.supportNativeFullPlayer&&!this.needFeFullscreen&&d.remove("onMPPageAction",this.onIOSJsapiExitFullscreen),
this.fontSizeObserver&&this.fontSizeObserver.disconnect();
},
methods:_extends({},o("mp-video-player",["setFullscreenStatus","setSeekingStatus","setStatus","setLoadingStatus","setControlBarStatus","setCoverStatus","setMidPlayStatus","setResolutionEntryStatus","setSubSettingStatus","setAccessPlayBtnStatus","setTouchOprStatus","setBanOprStatus","setOrientationStatus"]),{
initPlayer:function(){
var e=this;
if(this.isWcSlPlayer&&(this.useQuic&&p.setSum(237895,0,1),this.compare1&&p.setSum(237895,1,1),
this.compare2&&p.setSum(237895,2,1),p.setSum(221515,1,1),p.setSum(221515,r.os.android?6:5,1)),
!this.opt.src)return this.changeStatus({
status:"error",
subStatus:"5"
}),void this.emitEvent("error",{
errorcode:5
});
this.initData(),this.preventOperating(2),this.__inited?(this.currentTime=0,this.showCover(),
this.showLoading(),this.hideMidPlayBtn()):(this.setFullscreenStatus({
status:0
}),this.setSeekingStatus({
status:0
})),d.invoke("getNetworkType",{},function(t){
var i=w.nettypeMap[t.err_msg]||"fail";
("network_type:edge"==t.err_msg||"network_type:wwan"==t.err_msg)&&(t.detailtype&&w.cellType.indexOf(t.detailtype)>-1||t.subtype&&w.cellType.indexOf(t.subtype)>-1)&&(i=t.detailtype||t.subtype),
e.__lastNetworkType={
networkType:i,
simType:t.simtype
};
});
var t={
needToFit:!1,
supportObjectFit:!1,
os:r.os
};
if(this.width&&this.height&&this.videoWidth&&this.videoHeight){
var i=Math.abs(this.width/this.height-this.videoWidth/this.videoHeight);
.1>=i&&(t.needToFit=!0,k("objectFit","fill")&&(t.supportObjectFit=!0,this.fitVideo=!0));
}
this.triggerEvent("afterCheckVideoFit",t),this.triggerEvent("loading",this.opt),
this.__inited||this.preventFontSizeChange(),this.__inited=!0;
},
initData:function(){
this.log={
hasended:0,
lastsec:0,
duration:0,
video_error:0
},this.__hasBegunPlaying=!1,this.__canplay=!1,this.__seekedTimes=[],this.__playingBufferingStartTime=null,
this.__hasEmittedDurationchange=!1,this.__userPlayTime=!1,this.__replaySec=null,
this.__playQueue=[],this.__lastPlayTime=0,this.__totalPlayTime=0,this.__serialTimeupdateCache=[],
this.__enableTimeupdateLog=!0,this.__isUserPause=!1,this.__pauseNetType=null,this.__hasReportedBeginPlay=!1,
this.__fallbackFromWcSlVideoToH5Player=!1;
var e=1,t=this.$store.state.cgiData.user_uin||0;
if(this.__pageVideo_canSample=0!==t&&Math.floor(t/100)%1e3<e,this.__pageVideo_count=0,
this.__pageVideo_time=0,this.__pageVideo_velocity=0,this.__pageVideo_lastDistance=0,
this.__pageVideo_videoTmpTime=0,this.__pageVideo_startDragVideoTime=0,this.__pageVideo_hasReported=!1,
this.__pageVideo_canTouchForward=!0,this.__pageVideo_isTouchMoveUpNDown=!1,this.__pageVideo_firstTouch=!1,
this.__pageVideo_touchForwardId=null,this.playbackRateInfo&&this.playbackRateInfo.length)for(var i=0;i<this.playbackRateInfo.length;i++){
var s=this.playbackRateInfo[i];
if(1===s.rate){
this.playbackRateInfoIdx=i;
break;
}
}
if(this.resolutionInfo&&this.resolutionInfo.length)for(var i=0;i<this.resolutionInfo.length;i++){
var s=this.resolutionInfo[i];
if(s.src===this.opt.src){
this.resolutionInfoIdx=i;
break;
}
}
if(this.isWcSlPlayer&&this.resolutionInfo&&this.resolutionInfo.length)for(var i=0;i<this.resolutionInfo.length;i++)if(this.resolutionInfo[i].src.indexOf("m3u8")>-1){
this.__autoResolutionIdx=i;
break;
}
},
addSerialTimeupdate:function(){
if(this.$refs.video){
var e=this.$refs.video.currentTime,t=this.__serialTimeupdateCache.length;
e>0&&(0===t||this.__serialTimeupdateCache[t-1].currentTime!=e)&&(this.__serialTimeupdateCache.length>=w.timeupdateCacheCount&&this.__serialTimeupdateCache.shift(),
this.__serialTimeupdateCache.push({
currentTime:e,
timeStamp:Date.now()
}));
}
},
checkPlayBySerialTimeupdate:function(){
if(this.__serialTimeupdateCache.length<w.timeupdateCacheCount)return!1;
var e=this.__serialTimeupdateCache.length,t=this.__serialTimeupdateCache[e-1],i=this.__serialTimeupdateCache[e-w.timeupdateCacheCount];
return t.timeStamp-i.timeStamp<2500?!0:!1;
},
startCountTime:function(){
var e=this.$refs.video;
e&&null===this.__lastPlayTime&&(this.__lastPlayTime=e.currentTime);
},
endCountTime:function(){
var e=this.$refs.video;
e&&e.currentTime>this.__lastPlayTime&&null!==this.__lastPlayTime&&(this.__totalPlayTime+=e.currentTime-this.__lastPlayTime,
this.__lastPlayTime=null);
},
pauseOtherPlayersOfPage:function(){
var e=this;
Object.keys(w.allPlayersOfPage).forEach(function(t){
e.id!==t&&(w.allPlayersOfPage[t].pause(),w.allPlayersOfPage[t].showMidPlayBtn(),
w.allPlayersOfPage[t].hideControlBar());
});
},
onVideoDurationchange:function(){
var e=this.$refs.video;
if(e&&!this.__hasEmittedDurationchange){
this.__hasEmittedDurationchange=!0,e.duration&&1!==e.duration&&(this.videoDuration=e.duration);
var t=Date.now()-this.log.loadwait_start;
this.log.loadwait=t,this.log.duration=this.duration,this.triggerEvent("durationchange",{
loadwait:t
});
}
},
onLoadedmetadata:function(){
if(this.onVideoDurationchange(),this.__playQueue&&this.__playQueue.length>0){
var e=this.__playQueue[0].sec;
this.__playQueue=[],this.play(e);
}
},
onTimeupdate:function(){
var e=this.$refs.video;
if(e){
if(this.__hasBegunPlaying&&!this.__canplay)return this.showLoading(),!1;
null!==this.__replaySec&&(P(this.id+":timeupdate __replaySec"),e.pause(),e.currentTime=this.__replaySec,
this.__lastPlayTime=this.__replaySec,e.play(),this.__replaySec=null),this.onVideoDurationchange();
var t=e.currentTime;
t>0&&(this.startCountTime(),this.addSerialTimeupdate(),"loading"===this.status&&"seeking"===this.subStatus||!this.checkPlayBySerialTimeupdate()||0!==this.loadingStatus&&this.hideLoading(),
this.seekingStatus||1===this.touchOprStatus||(this.currentTime=t),(t>60||this.duration-t<.5)&&this.showSubscribeBtn(),
this.hideCover(),this.triggerEvent("timeupdate",{
currentTime:t
}),this.afterFirstLoaded());
}
},
onProgress:function(){
var e=this.$refs.video;
if(e){
var t=this.duration,i=this.currentTime/t,s=i;
this.isWcSlPlayer&&e.buffered?s=e.buffered.percent:e.buffered&&e.buffered.length>0&&e.buffered.end&&t&&(s=e.buffered.end(0)/t,
s=Math.max(i,Math.ceil(parseInt(100*s)))),s>98&&(s=100),this.bufferedPercent=s;
}
},
onCanplay:function(){
var e=this.$refs.video;
null!==this.__replaySec&&(e.currentTime=1*(1*this.__replaySec).toFixed(4),this.__lastPlayTime=this.__replaySec,
this.__replaySec=null),this.__canplay=!0,this.triggerEvent("canplay");
},
onEnded:function(){
P("player inner is end:"+this.isEnd()),this.isEnd()&&this.onVideoEnded();
},
onVideoEnded:function(){
this.changeStatus({
status:"end",
subStatus:""
}),this.endCountTime(),this.triggerEvent("end"),this.opt.loop&&(this.__canplay=!0,
this.__firstPlayStart=Date.now(),this.__userPlayTime=!0,this.__hasBegunPlaying=!0,
this.$refs.video.play(),this.videoCtlReport({
step:9
}),this.changeStatus({
status:"loading",
subStatus:"seeked"
}));
},
onSeeked:function(){
var e=this.$refs.video;
(0===this.seekingStatus||201===this.seekingStatus)&&(this.changeStatus({
status:"loading",
subStatus:"seeked"
}),1===this.__statusBeforeSeek?e.play():3===this.__statusBeforeSeek?(this.hideLoading(),
this.changeStatus({
status:"play",
subStatus:"playing"
})):(2===this.__statusBeforeSeek||4===this.__statusBeforeSeek)&&(this.hideLoading(),
this.changeStatus({
status:"pause",
subStatus:""
})),delete this.__statusBeforeSeek),P("video seeked event");
},
onSeeking:function(){
P("seeking,__hasBegunPlaying:"+this.__hasBegunPlaying),this.__hasBegunPlaying&&(this.changeStatus({
status:"loading",
subStatus:"seeking"
}),this.showLoading());
},
onWaiting:function(){
var e=this,t=this.$refs.video;
if(P("waiting,__hasBegunPlaying:"+this.__hasBegunPlaying),this.__hasBegunPlaying){
this.changeStatus({
status:"loading",
subStatus:"waiting"
}),this.showLoading(),this.jsapiLog("waiting counting begin"),this.__loadingTimeoutId&&clearTimeout(this.__loadingTimeoutId);
var i=t.currentTime;
this.__loadingTimeoutId=setTimeout(function(){
if(t.currentTime===i){
if(e.isWcSlPlayer)return void p.setSum(221515,r.os.android?15:14,1);
e.changeStatus({
status:"error",
subStatus:"6"
}),e.emitEvent("error",{
errorcode:6
});
}
},w.loadingTimeout),this.__waitingTimeoutId&&(clearTimeout(this.__waitingTimeoutId),
this.__waitingTimeoutId=null);
var s=0;
try{
for(var o in w.allPlayersOfPage)if(w.allPlayersOfPage.hasOwnProperty(o)&&s++,s>1)break;
}catch(n){}
!this.isWcSlPlayer&&s>1&&(this.__waitingTimeoutId=setTimeout(function(){
if(0===t.readyState&&(!t.error||0===t.error.code)){
e.__waitingTimeoutId&&(clearTimeout(e.__waitingTimeoutId),e.__waitingTimeoutId=null);
var i=t.src;
e.showLoading(),e.showCover(),t.pause(),t.src=i,t.load(),t.play(),P(e.id+":waiting timer");
}
},1e4)),"number"==typeof this.__autoResolutionIdx?(this.__autoTipsShowTimeoutId||clearTimeout(this.__autoTipsShowTimeoutId),
this.__autoTipsShowTimeoutId=setTimeout(function(){
t.currentTime===i&&e.triggerEvent("waiting",{
action:"changeToAuto"
});
},w.showAutoTipsTimeout),this.triggerEvent("waiting",{
action:"normalLoading"
})):this.triggerEvent("waiting");
}
},
onPlay:function(e){
P(this.id+":play playing"),this.changeStatus({
status:"play",
subStatus:e.type
}),this.pauseOtherPlayersOfPage(),this.hidePlayControl(),this.startCountTime(),this.triggerEvent("play"),
this.isWcSlPlayer&&this.__canplay&&this.hideLoading();
},
onPause:function(){
P(this.id+":video pause event"),this.changeStatus({
status:"pause",
subStatus:""
}),this.endCountTime(),this.triggerEvent("pause");
},
onError:function(e){
var t=this;
if(this.isWcSlPlayer){
this.useQuic&&(p.setSum(237895,3,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e.detail&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:UseQuicError",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e.detail),{
mid:"mmbizwap:quic_Monitor",
view:"wap_business"
})),this.compare1&&p.setSum(237895,4,1),this.compare2&&p.setSum(237895,5,1),this.changeStatus({
status:"error",
subStatus:"3",
errorMsg:e.detail
}),p.setSum(221515,3,1),p.setSum(221515,r.os.android?10:9,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e.detail&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:Error",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e.detail));
var i=function(){
return t.triggerEvent("error",{
errorcode:3,
error:e.detail
});
};
return void(this.fullscreenStatus&&!this.isImmersiveMode||this.isImmersiveMode&&this.isLandscape?(this.enableWcSlPlayerFullscreenAfterOrientationChange=!0,
this.exitFullscreen(),setTimeout(i,250)):i());
}
if(this.$refs.video.error){
var s=this.$refs.video.error.code,o=this.$refs.video.error.message;
this.changeStatus({
status:"error",
subStatus:s||"",
errorMsg:o||""
});
var n="/mp/ad_video_report?action=report_video_play_error",a=encodeURIComponent(this.$refs.video.baseURI);
o+="|"+this.src,o=encodeURIComponent(o),_({
type:"GET",
dataType:"json",
timeout:3e4,
url:n+"&errorCode="+s+"&videoUrl="+a+"&errorMsg="+o,
success:function(){},
error:function(){}
});
var h=function(){
return t.triggerEvent("error",{
errorcode:s
});
};
this.isFeFullscreen&&this.fullscreenStatus?(this.exitFullscreen(),this.isLandscape?setTimeout(function(){
t.exitFullscreen(),setTimeout(h,250);
},250):setTimeout(h,250)):h();
}
},
onFullscreenchange:function(e){
var t=void 0,i="h5";
return this.isWcSlPlayer?(t=e.detail.fullscreen,i="samelayer"):t="webkitbeginfullscreen"===e.type?!0:"webkitendfullscreen"===e.type?!1:document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen,
this.isImmersiveMode&&(this.setOrientationStatus({
status:t?1:0
}),t=!0,i="immersive"),!this.isWcSlPlayer||1!==this.fullscreenStatus||!t||e.detail.options&&e.detail.options.triggerEvent?(this.handleFullscreenChange({
state:t,
type:i
}),void(!this.isImmersiveMode&&this.isWcSlPlayer&&!t&&(this.enableWcSlPlayerFullscreenAfterOrientationChange=!0))):void this.setVideoFullPortraitAlign();
},
handleFullscreenChange:function(e){
var t=e.state,i=e.type;
t?(this.isImmersiveMode||this.setFullscreenStatus({
status:1
}),this.showDefaultPlaybackRate=!1,this.showResolutionEntry(),this.setVideoFullPortraitAlign(),
d.invoke("handleDeviceInfo",{
action:"setKeepScreenOn",
enable:!0
},function(){})):(this.isImmersiveMode||this.setFullscreenStatus({
status:0
}),1!==this.$refs.video.playbackRate&&(this.showDefaultPlaybackRate=!0),this.hideResolutionEntry(),
this.hideSubSetting(),this.resetVideoFullPortraitAlign(),d.invoke("handleDeviceInfo",{
action:"setKeepScreenOn",
enable:!1
},function(){}),h.isIOS&&setTimeout(function(){
d.invoke("setNavigationBarColor",{
wxcolor:{
light:"#FFFFFF",
dark:"#191919"
},
alpha:1
}),d.invoke("handleDeviceInfo",{
action:"enableFullScreenLayout",
enable:!1
});
},50)),this.isEnd()||(t&&this.isWcSlPlayer&&this.isLandscape?(this.showControlBar(),
this.hideControlBarAfterTimeout()):this.hideControlBar()),this.triggerEvent("fullscreenchange",{
state:t,
type:i
});
},
setVideoFullPortraitAlign:function(){
var e=this;
this.fullscreenStatus&&!this.isLandscape&&!function(){
for(var t=e.$refs.video,i=e.$refs.poster,s=h.isIOS&&w.screenLength>=812?34:0,o=Math.min(w.screenLength,w.screenWidth/e.videoRatio),n=[0,56+s,84+s,150+s,190+s],a=1;a<n.length;a++)if(.55*w.screenLength-o/2<n[a]){
var u=function(){
for(var s=0,h=a-1;h>=0&&(s=(w.screenLength-o)/2-n[h],!(o/2-s<w.screenLength/2));h--);
return s+="px",i&&(i.style.marginTop=s),t&&!function(){
t.parentElement.style.opacity=0;
var i=function o(){
t.style.marginTop=s,t.parentElement.style.opacity=null,t.removeEventListener("loadedmetadata",o);
};
e.isImmersiveMode&&!e.__hasEmittedDurationchange&&r.os.iphone?t.addEventListener("loadedmetadata",i):i();
}(),"break";
}();
if("break"===u)break;
}
}();
},
resetVideoFullPortraitAlign:function(){
var e=this.$refs.video,t=this.$refs.poster;
e&&(e.style.marginTop=""),t&&(t.style.marginTop="");
},
getSafeAreaInsets:function(){
if(r.os.android){
var t=e("common/safeAreaInsets.js");
return{
top:t.top,
left:t.left,
right:t.right,
bottom:t.bottom
};
}
return{
top:0,
left:0,
right:0,
bottom:0
};
},
onBinderror:function(e){
this.fallbackFromWcSlVideoToH5Player(),p.setSum(221515,4,1),p.setSum(221515,r.os.android?12:11,1),
window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e.detail&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:BindError",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e.detail)),
this.triggerEvent("bindError",{
error:e.detail
});
},
onResolutionchange:function(){
this.changeStatus({
status:"loading",
subStatus:"resolutionchange"
});
var e=this.isWcSlPlayer?this.$refs.video.resolutionSrc:this.$refs.video.src,t=this.resolutionInfo.filter(function(t){
return t.src===e;
})[0];
this.triggerEvent("resolutionChange",{
action:"changed",
infoBefore:this.__resolutionInfoBeforeChange,
infoAfter:t
});
},
onRatechange:function(){
this.triggerEvent("rateChange",{
action:"changed",
rateBefore:this.__playbackRateBeforeChange,
rateAfter:this.$refs.video.playbackRate
});
},
onProcessstatechange:function(e){
this.triggerEvent("processStateChange",{
event:e.detail.event,
playerType:e.detail.playerType,
timeStamp:e.detail.__timestamp,
data:e.detail
});
},
onJumpProfile:function(){
var e=this;
if(1!==this.$store.state.cgiData.isprofileblock){
var t=function(){
d.invoke("profile",{
username:e.opt.bizUserName,
tabType:e.opt.profileTabType||2,
scene:203,
subscene:12
},function(){
e.triggerEvent("profileJump",{
scene:"fullscreen"
});
});
};
h.isIOS&&this.isLandscape?(this.exitFullscreen(),setTimeout(t,250)):t();
}
},
onShowFullscreenMenu:function(){
if(this.fullscreenStatus&&this.needFeFullscreen){
var e=[];
0===this.banOprStatus&&this.playbackRateInfo&&this.playbackRateInfo.length&&e.push({
id:"playbackRate",
title:this.playbackRateName,
iconData:w.menuPlaybackRateIcon.dark
}),0===this.banOprStatus&&this.resolutionInfo&&this.resolutionInfo.length&&e.push({
id:"resolution",
title:this.resolutionName,
iconData:w.menuResolutionIcon.dark
}),d.invoke("handleMPPageAction",{
action:"showMenu",
style:"dark",
forbidFlag:3,
menuItems:e
}),this.triggerEvent("showMenu",{
fullScreen:1
});
}
},
onFullscreenMenuClick:function(e){
switch(e.id){
case"playbackRate":
this.onPlaybackRateEntryClick();
break;

case"resolution":
this.onResolutionEntryClick();
}
},
checkIfOutsideTouchSafeInset:function(e,t){
return this.fullscreenStatus&&this.isLandscape?80>t||t>window.innerHeight-80:30>e||e>window.innerWidth-30;
},
showSeekingStatus:function(){
var e=this;
this.seekingStatus||(this.__setSeekingStatusTimeoutId&&clearTimeout(this.__setSeekingStatusTimeoutId),
this.setSeekingStatus({
status:101
}),this.__setSeekingStatusTimeoutId=setTimeout(function(){
e.setSeekingStatus({
status:1
}),e.showControlBar();
},100));
},
hideSeekingStatus:function(){
var e=this;
this.seekingStatus&&(this.__setSeekingStatusTimeoutId&&clearTimeout(this.__setSeekingStatusTimeoutId),
this.setSeekingStatus({
status:201
}),this.__setSeekingStatusTimeoutId=setTimeout(function(){
e.setSeekingStatus({
status:0
}),e.hideControlBarAfterTimeout();
},100));
},
showTouchHorizontalOprBar:function(e){
this.currentTime=e,this.showSeekingStatus(),this.setTouchOprStatus({
status:1
}),this.touchToastSeperator="/",this.touchToastPercent=100*e/this.duration,this.touchToastCurVal=I(e),
this.touchToastTotalVal=this.formatDuration;
},
showTouchVerticalOprBar:function(e,t){
t=Math.min(t,1),t=Math.max(t,0),this.setTouchOprStatus({
status:2
}),this.touchToastSeperator=":",this.touchToastPercent=100*t,this.touchToastCurVal=e,
this.touchToastTotalVal=parseInt(100*t,10)+"%";
},
hideTouchOprBar:function(){
this.hideSeekingStatus(),this.setTouchOprStatus({
status:0
});
},
touchMoveHorizontally:function(e){
var t=e.changedTouches[0].clientX,i=e.changedTouches[0].clientY;
this.__pageVideo_touchForwardId&&(clearTimeout(this.__pageVideo_touchForwardId),
this.__pageVideo_touchForwardId=null),this.__pageVideo_firstTouch=!1;
var s=Date.now(),o=s-this.__pageVideo_lastTime,n=t-this.__pageVideo_lastPos.x,a=i-this.__pageVideo_lastPos.y,r=Math.sqrt(Math.pow(n,2)+Math.pow(a,2))+this.__pageVideo_lastDistance,h=Math.min(Math.ceil(r/o),6),u=this.duration;
this.__pageVideo_time=Math.floor(.1*r+.2*h*h*h)*Math.ceil(u/500),this.__pageVideo_lastDistance=0===this.__pageVideo_time?r:0,
0>n&&(this.__pageVideo_time=-this.__pageVideo_time),this.__pageVideo_videoTmpTime+=this.__pageVideo_time,
this.__pageVideo_videoTmpTime<0&&(this.__pageVideo_videoTmpTime=0),this.__pageVideo_videoTmpTime>u&&(this.__pageVideo_videoTmpTime=1*u),
this.showTouchHorizontalOprBar(this.__pageVideo_videoTmpTime),e.preventDefault(),
this.__pageVideo_lastPos={
x:t,
y:i
},this.__pageVideo_lastTime=s;
},
touchMoveVertically:function(e){
var t=this;
this.isWcSlPlayer&&this.fullscreenStatus?!function(){
var i=e.changedTouches[0].clientX,s=e.changedTouches[0].clientY;
t.__pageVideo_isTouchMoveUpNDown=!0;
var o=(t.width/t.height>1?Math.max:Math.min)(window.screen.height,window.screen.width),n=parseInt(2*(t.__pageVideo_lastPos.y-s)/o*100);
n&&(n/=100,t.__pageVideo_startPos.x<o/2?(n=t.$refs.video.brightness+n,t.$refs.video.brightness=n,
t.showTouchVerticalOprBar("亮度",n),t.__setBrightnessChangeEventEmitTimeoutId&&clearTimeout(t.__setBrightnessChangeEventEmitTimeoutId),
t.__setBrightnessChangeEventEmitTimeoutId=setTimeout(function(){
t.__setBrightnessChangeEventEmitTimeoutId=null,t.triggerEvent("brightnessChange",{
value:n,
touch:!0
});
},1e3)):(n=t.$refs.video.volume+n,t.$refs.video.volume=n,t.showTouchVerticalOprBar("音量",n),
t.__setVolumeChangeEventEmitTimeoutId&&clearTimeout(t.__setVolumeChangeEventEmitTimeoutId),
t.__setVolumeChangeEventEmitTimeoutId=setTimeout(function(){
t.__setVolumeChangeEventEmitTimeoutId=null,t.triggerEvent("volumeChange",{
value:n,
touch:!0
});
},1e3)),t.__pageVideo_lastPos={
x:i,
y:s
});
}():this.__pageVideo_canTouchForward=!1,this.__pageVideo_firstTouch=!1;
},
checkIfUntouchable:function(e){
var t=$(e);
return t.parents("div.js_progress_bar,div.js_controll,div.js_video_fullscreen_profile").length||t.hasClass("js_progress_bar")||t.hasClass("js_controll")||t.hasClass("js_video_fullscreen_profile");
},
onPageVideoTouchStart:function(e){
var t=this;
1==e.targetTouches.length&&(this.isEnd()||this.checkIfUntouchable(e.changedTouches[0].target)||this.opt.blockTouchVideo||0!==this.midPlayStatus||(this.__pageVideo_touchForwardId&&(clearTimeout(this.__pageVideo_touchForwardId),
this.__pageVideo_touchForwardId=null),this.__pageVideo_startTime=this.__pageVideo_lastTime=new Date,
this.__pageVideo_startPos=this.__pageVideo_lastPos={
x:e.targetTouches[0].clientX,
y:e.targetTouches[0].clientY
},this.setTouchOprStatus({
status:0
}),this.__pageVideo_firstTouch=!0,this.__pageVideo_canTouchForward=!0,this.__pageVideo_startDragVideoTime=this.__pageVideo_videoTmpTime=this.getCurTime(),
this.__pageVideo_longTouchPlaybackRateForwardId&&(clearTimeout(this.__pageVideo_longTouchPlaybackRateForwardId),
this.__pageVideo_longTouchPlaybackRateForwardId=null),this.maxPlaybackRateInfo&&this.isPlay()&&!this.checkIfOutsideTouchSafeInset(e.targetTouches[0].clientX,e.targetTouches[0].clientY)&&(this.__pageVideo_longTouchPlaybackRateForwardId=setTimeout(function(){
t.longTouchPlaybackRatePrevValue=t.$refs.video.playbackRate,t.setPlaybackRate(t.maxPlaybackRateInfo.rate),
t.__pageVideo_longTouchPlaybackRateForwardId=null,t.__pageVideo_canTouchForward=!1,
t.triggerEvent("fastForward");
},500)),document.body.style.webkitUserSelect="none",document.body.style.userSelect="none"));
},
onPageVideoTouchMove:function(e){
if(this.fullscreenStatus&&e.preventDefault(),this.__pageVideo_canTouchForward&&1==e.targetTouches.length&&!(this.isEnd()||this.checkIfUntouchable(e.changedTouches[0].target)||this.checkIfOutsideTouchSafeInset(e.targetTouches[0].clientX,e.targetTouches[0].clientY)||this.opt.blockTouchVideo||0!==this.midPlayStatus)){
var t=e.changedTouches[0].clientX,i=e.changedTouches[0].clientY,s=Math.abs(t-this.__pageVideo_startPos.x),o=Math.abs(i-this.__pageVideo_startPos.y);
this.__pageVideo_isTouchMoveUpNDown||this.__pageVideo_firstTouch&&(o>=20||o>s)||(e.preventDefault(),
s>=20&&0===this.banOprStatus&&this.touchMoveHorizontally(e)),this.__pageVideo_longTouchPlaybackRateForwardId&&(clearTimeout(this.__pageVideo_longTouchPlaybackRateForwardId),
this.__pageVideo_longTouchPlaybackRateForwardId=null);
}
},
onPageVideoTouchEnd:function(e){
var t=this;
if(0!==this.touchOprStatus&&!this.__pageVideo_isTouchMoveUpNDown){
if(this.__statusBeforeSeek=this.isPlay()?3:4,this.__pageVideo_touchForwardId=setTimeout(function(){
t.play(t.__pageVideo_videoTmpTime);
},0),this.__pageVideo_canSample&&(p.setSum(28307,29,1),!this.__pageVideo_hasReported)){
var i={
x:e.changedTouches[0].clientX,
y:e.changedTouches[0].clientY
},s=i.x-this.__pageVideo_startPos.x,o=i.y-this.__pageVideo_startPos.y,n=parseInt(Math.sqrt(Math.pow(s,2)+Math.pow(o,2))),a=parseInt(180*Math.atan2(o,s)/Math.PI);
a>=-30&&30>=a||a>=150&&180>=a||a>=-180&&-150>=a||p.setSum(28307,35,1),p.setSum(28307,31,1),
p.setSum(28307,33,n),p.setSum(28307,34,this.__pageVideo_velocity),this.__pageVideo_hasReported=!0;
}
this.videoCtlReport({
step:13
}),this.triggerEvent("handDragComplete",{
playTime:this.__pageVideo_videoTmpTime,
startDragVideoTime:this.__pageVideo_startDragVideoTime
}),e.preventDefault();
}
this.hideTouchOprBar(),this.__pageVideo_time=0,this.__pageVideo_firstTouch=!1,this.__pageVideo_canTouchForward=!0,
this.__pageVideo_isTouchMoveUpNDown=!1,this.__pageVideo_count=0,this.longTouchPlaybackRatePrevValue&&(this.setPlaybackRate(this.longTouchPlaybackRatePrevValue),
this.longTouchPlaybackRatePrevValue=0,e.preventDefault()),this.__pageVideo_longTouchPlaybackRateForwardId&&(clearTimeout(this.__pageVideo_longTouchPlaybackRateForwardId),
this.__pageVideo_longTouchPlaybackRateForwardId=null),setTimeout(function(){
document.body.style.webkitUserSelect="",document.body.style.userSelect="";
},50);
},
onPageVideoClick:function(e){
if(!this.checkIfIgnorePageVideoClick(e)&&!this.isEnd()&&0===this.touchOprStatus){
var t=this.needFeFullscreen&&this.fullscreenStatus&&!this.isLandscape&&0===this.subSettingStatus;
if(t||this.__pageVideo_lastTouchVideoTs&&Date.now()-this.__pageVideo_lastTouchVideoTs<300)return this.clickPlaySwitch(t?1:2),
delete this.__pageVideo_lastTouchVideoTs,void e.preventDefault();
this.__pageVideo_lastTouchVideoTs=Date.now(),this.triggerEvent("touchVideo");
}
},
checkIfIgnorePageVideoClick:function(e){
var t=function(t){
return t&&(e.target===t||t.contains(e.target));
};
return t(this.$refs.controlBar)||t(this.$refs.featureBar)||t(this.$refs.profileInfo)||t(this.$refs.navigationBar)||t(this.$refs.subSettingMenu)?!0:!1;
},
firstPlay:function(){
var e=this,t=function(){
e.changeStatus({
status:"loading",
subStatus:"preload"
});
var t=2;
e.__hasReportedBeginPlay?t=9:1*e.$store.state.cgiData.media_source===0&&(t=11),e.videoCtlReport({
step:t
}),e.__hasReportedBeginPlay=!0,e.triggerEvent("readyBeginPlay");
};
"function"==typeof this.opt.checkPlayAuthority?this.opt.checkPlayAuthority({
allowPlay:t
}):t(),this.showLoading();
},
onMidPlayBtnClick:function(){
var e=this;
this.__hasBegunPlaying?(this.play(),this.hideMidPlayBtn()):this.firstPlay(),this.$refs.ariaSwitch&&(this.$refs.ariaSwitch.focus(),
r.os.android&&setTimeout(function(){
e.$refs.ariaSwitch.setAttribute("role","checkbox"),e.$refs.ariaSwitch.focus();
},100)),this.triggerEvent("midPlayClick",this.__hasBegunPlaying);
},
onPlaySwitchClick:function(){
this.clickPlaySwitch();
},
onFullscreenSwitchClick:function(e){
this.isWcSlPlayer?this.fullscreenStatus?this.exitFullscreen():this.enterFullscreen():(this.fullscreenStatus?this.exitFullscreen():(p.setSum(28307,56,1),
this.enterFullscreen()),e.preventDefault()),e.stopPropagation();
},
onProgressTouchStart:function(e){
var t=e.changedTouches[0];
this.onPointerDownHandler(e,t.pageX,t.pageY);
},
onProgressTouchMove:function(e){
if(this.seekingStatus){
var t=e.changedTouches[0];
this.onPointerMoveHandler(e,t.pageX,t.pageY);
}
},
onProgressTouchEnd:function(e){
if(this.seekingStatus){
var t=e.changedTouches[0];
this.onPointerUpHandler(e,t.pageX,t.pageY);
}
},
onProgressMouseDown:function(e){
this.onPointerDownHandler(e,e.pageX||e.clientX,e.pageY||e.clientY);
},
onProgressMouseMove:function(e){
this.seekingStatus&&this.onPointerMoveHandler(e,e.pageX||e.clientX,e.pageY||e.clientY);
},
onProgressMouseUp:function(e){
this.seekingStatus&&this.onPointerUpHandler(e,e.pageX||e.clientX,e.pageY||e.clientY);
},
onPointerDownHandler:function(e,t,i){
0===this.banOprStatus&&(e.preventDefault(),this.__statusBeforeSeek=this.isPlay()?1:2,
this.__seekingData={
x1:t,
y1:i,
startTime:this.$refs.video.currentTime
},this.pause(),this.showControlBar(),this.showSeekingStatus(),h.isIOS&&!this.fullscreenStatus&&d.invoke("handleDeviceInfo",{
action:"disableInteractivePop",
disable:!0
}));
},
onPointerMoveHandler:function(e,t,i){
this.__hasSeeked=!0,this.__seekingData||(this.__seekingData={
startTime:this.$refs.video.currentTime
}),this.__seekingData.x2=t,this.__seekingData.y2=i;
var s=this.$refs.progressBar.getBoundingClientRect().width,o=parseInt(window.getComputedStyle(this.$refs.playedBar).paddingLeft)||0,n=(t-o-this.$refs.playedBar.getBoundingClientRect().left)/s,a=1*(this.duration*n).toFixed(4);
a>this.duration&&(a=this.duration-.1);
var r="undefined"==typeof this.__seekingData.dragTime,h=Math.abs(1*a-1*this.__seekingData.dragTime);
(r||h>=.5)&&(this.__seekingData.dragTime=a,P("onPointerMoveHandler set currentTime, dragTime:"+a+" currentTime:"+this.$refs.video.currentTime),
this.currentTime=a),e&&e.preventDefault();
},
onPointerUpHandler:function(e,t,i){
e.preventDefault(),this.__seekingData&&"undefined"!=typeof this.__seekingData.dragTime||this.onPointerMoveHandler(null,t,i);
var s=this.__seekingData.startTime,o=this.__seekingData.dragTime;
o===this.$refs.video.currentTime&&(o-=.1),this.__seekingData.startTime&&this.__seekedTimes.push(Math.round(1e3*this.__seekingData.startTime)+":#:"+Math.round(1e3*o)),
P("onPointerUpHandler dragTime:"+o+" currentTime:"+this.$refs.video.currentTime),
this.__seekingData=null,this.isEnd()||(this.showLoading(),this.play(o),this.videoCtlReport({
step:13
}),this.triggerEvent("barDragComplete",{
playTime:o,
startDragVideoTime:s
})),this.hideSeekingStatus(),this.hideControlBarAfterTimeout(),h.isIOS&&!this.fullscreenStatus&&d.invoke("handleDeviceInfo",{
action:"disableInteractivePop",
disable:!1
});
},
onPlaybackRateEntryClick:function(){
if(this.fullscreenStatus)this.hideControlBar(),this.showSubSetting(2),this.triggerEvent("rateChange",{
action:"show"
});else{
var e=this.playbackRateInfoIdx;
this.$refs.video.playbackRate<this.playbackRateInfo[this.opt.playbackRateBtnInfoDefaultId].rate||e>=this.playbackRateInfo.length-1||0>=e?e=this.opt.playbackRateBtnInfoDefaultId:e++;
var t=this.playbackRateInfo[e].rate;
this.showControlBar(),this.hideControlBarAfterTimeout(),this.setPlaybackRate(t,e),
this.showDefaultPlaybackRate=!0,this.triggerEvent("rateChange",{
action:"select"
});
}
},
onPlaybackRateSelect:function(e){
var t=this.playbackRateInfo[e].rate;
if(this.setPlaybackRate(t,e),this.hideSubSettingAfterTimeout(),this.triggerEvent("rateChange",{
action:"select"
}),this.showControlBar(),this.isPlay()&&this.hideControlBarAfterTimeout(),this.fullscreenStatus){
var i=this.playbackRateInfo[e].name;
this.showTopTips("切换到%s速播放".replace("%s",i));
}
},
setPlaybackRate:function(e,t){
if(this.$refs.video.playbackRate!==e&&(this.__playbackRateBeforeChange=this.$refs.video.playbackRate,
this.$refs.video.playbackRate=e,this.isWcSlPlayer||this.isPlay()||this.$refs.video.play()),
t)this.playbackRateInfoIdx=t;else for(var i=0;i<this.playbackRateInfo.length;i++)if(e===this.playbackRateInfo[i].rate){
this.playbackRateInfoIdx=i;
break;
}
},
onResolutionEntryClick:function(){
this.hideControlBar(),this.showSubSetting(1),this.triggerEvent("resolutionChange",{
action:"show"
});
},
onResolutionSelect:function(e){
if(this.setResolution(e),this.hideSubSettingAfterTimeout(),this.triggerEvent("resolutionChange",{
action:"select"
}),this.showControlBar(),this.isPlay()&&this.hideControlBarAfterTimeout(),this.fullscreenStatus&&!this.isLandscape){
var t=this.resolutionInfo[e].name;
this.showTopTips("切换到%s播放".replace("%s",t));
}
},
onAutoResolutionTipsClick:function(){
"number"==typeof this.__autoResolutionIdx&&(this.autoResolutionTipsStatus=0,this.setResolution(this.__autoResolutionIdx),
this.triggerEvent("resolutionChange",{
action:"select"
}),this.isPause()?this.showControlBar():this.hideControlBar());
},
onIPadOrientationChange:function(){
var e=this;
90===window.orientation||-90===window.orientation?this.setOrientationStatus({
status:1
}):(this.setOrientationStatus({
status:0
}),this.setVideoFullPortraitAlign()),setTimeout(function(){
e.fullscreenStatus&&!e.isImmersiveMode&&d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!0,
showStatusBar:!1,
hideBottomBar:!0
});
},250);
},
onAndroidOrientationChange:function(e){
var t=this;
if(this.fullscreenStatus&&e&&!e.sysLock&&!this.isImmersiveMode){
var i=function(){
d.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:e.newOrientation,
lock:!0
});
var i=t.$refs.video;
t.isWcSlPlayer&&i.requestFullscreen(e.newOrientation,{
updateStyleOnly:!0
});
};
-1!==[90,-90].indexOf(e.newOrientation)?(this.setOrientationStatus({
status:1
}),i()):1===this.orientationStatus&&0===e.newOrientation&&(this.setOrientationStatus({
status:0
}),this.setVideoFullPortraitAlign(),i());
}
},
onWindowResize:function(){
this.videoRatio<=1||this.fullscreenStatus&&(this.isLandscape||w.outerWidth===window.outerWidth?this.isLandscape&&w.outerWidth===window.outerWidth&&(this.setOrientationStatus({
status:0
}),this.setVideoFullPortraitAlign(),this.isWcSlPlayer&&!this.enableWcSlPlayerFullscreenAfterOrientationChange&&this.$refs.video.requestFullscreen(0,{
updateStyleOnly:!0
})):(this.setOrientationStatus({
status:1
}),this.isWcSlPlayer&&!this.enableWcSlPlayerFullscreenAfterOrientationChange&&this.$refs.video.requestFullscreen(90,{
updateStyleOnly:!0
})));
},
onOrientationChange:function(){
var e=this;
this.videoRatio<=1||(setTimeout(function(){
e.isLandscape||90!==window.orientation&&-90!==window.orientation?e.isLandscape&&0===window.orientation&&(e.setOrientationStatus({
status:0
}),e.setVideoFullPortraitAlign(),e.isWcSlPlayer&&!e.enableWcSlPlayerFullscreenAfterOrientationChange&&e.fullscreenStatus&&e.$refs.video.requestFullscreen(0,{
updateStyleOnly:!0
})):(e.setOrientationStatus({
status:1
}),e.isWcSlPlayer&&!e.enableWcSlPlayerFullscreenAfterOrientationChange&&e.fullscreenStatus&&e.$refs.video.requestFullscreen(90,{
updateStyleOnly:!0
}));
},250),!this.isImmersiveMode&&this.isWcSlPlayer&&this.enableWcSlPlayerFullscreenAfterOrientationChange&&(r.os.iphone?this.fullscreenStatus||90!==window.orientation&&-90!==window.orientation?this.fullscreenStatus&&0===window.orientation&&this.exitFullscreen():this.$refs.video.requestFullscreen(window.orientation):this.androidLandscapeFullOrientation=this.fullscreenStatus&&90===window.orientation?90:0));
},
onIOSPageStateChange:function(e){
!this.fullscreenStatus&&e&&e.active&&(d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!0
}),d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!1
}),d.invoke("setNavigationBarColor",{
wxcolor:{
light:"#FFFFFF",
dark:"#191919"
},
alpha:1
}));
},
onVisibilityChange:function(){
return this.isWcSlPlayer?void(C()||!r.os.iphone||this.isImmersiveMode||!this.fullscreenStatus||this.isLandscape||d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!0,
orientation:0,
animate:!1
})):void(C()?this.hasBegunPlaying()&&this.isPlay()&&(this.pause4outer(),this.__pausedWhenInvisible=!0):this.__pausedWhenInvisible&&(delete this.__pausedWhenInvisible,
this.hasBegunPlaying()&&!this.isEnd()&&this.play4outer()));
},
onNetworkChange:function(e){
e&&(e.networkType||(e.networkType=e.netType),e.networkType&&e.simType&&(this.__lastNetworkType&&this.__lastNetworkType.networkType===e.networkType&&this.__lastNetworkType.simType===e.simType||(c.isMobileNetwork(e.networkType)&&1!==e.simType&&this.__lastNetworkType&&("wifi"===this.__lastNetworkType.networkType||c.isNoneNetwork(this.__lastNetworkType.networkType))&&(this.__isUserPause=!1,
this.__pauseNetType=null,!this.isPlay()&&!this.isEnd()&&this.isPause()&&this.hasBegunPlaying()?(this.__isUserPause=!0,
this.__pauseNetType=this.__lastNetworkType.networkType):this.isPlay()&&("wifi"===this.__lastNetworkType.networkType&&c.isVideoNeedFlowNotice(this.opt.flow,2)||c.isNoneNetwork(this.__lastNetworkType.networkType)&&c.isVideoNeedFlowNotice(this.opt.flow,4))&&this.showFlowNotice()),
this.__lastNetworkType={
networkType:e.networkType,
simType:e.simType
})));
},
setResolution:function(e){
var t=this;
this.resolutionInfoIdx!==e&&!function(){
var i=t.resolutionInfo[t.resolutionInfoIdx],s=t.resolutionInfo[e],o=t.$refs.video;
t.isWcSlPlayer?o.resolutionSrc=s.src:!function(){
o.pause(),t.setSnapshot();
var e=o.currentTime,i=o.playbackRate;
t.$nextTick(function(){
o.src=s.src,o.play(),t.play(e),t.setPlaybackRate(i),t.onResolutionchange();
});
}(),t.__resolutionInfoBeforeChange=i,t.resolutionInfoIdx=e;
}();
},
setSnapshot:function(){
if(!this.isWcSlPlayer)try{
var e=this.$refs.video,t=document.createElement("canvas"),i=t.getContext("2d");
t.width=e.videoWidth,t.height=e.videoHeight,i.drawImage(e,0,0,t.width,t.height),
this.snapshot=t.toDataURL("image/jpeg",0);
}catch(s){
this.snapshot="",console.error(s);
}
},
showLoading:function(){
var e=this;
this.__hasShownLoading&&this.$refs.video&&this.$refs.video.currentTime>1||(this.__hasShownLoading=!0,
this.__resetShowingLoadingTimeoutId&&(clearTimeout(this.__resetShowingLoadingTimeoutId),
delete this.__resetShowingLoadingTimeoutId),this.__resetShowingLoadingTimeoutId=setTimeout(function(){
e.__hasShownLoading=!1;
},1e3),this.__showingLoadingTimeoutId&&(clearTimeout(this.__showingLoadingTimeoutId),
delete this.__showingLoadingTimeoutId),this.__showingLoadingTimeoutId=setTimeout(function(){
e.__firstShowLoadingTime||(e.__firstShowLoadingTime=(new Date).getTime()),e.setLoadingStatus({
status:1
});
},800));
},
hideLoading:function(){
this.setLoadingStatus({
status:0
}),this.firstLoadingTime||(this.firstLoadingTime=this.__firstShowLoadingTime?(new Date).getTime()-this.__firstShowLoadingTime:0),
this.__showingLoadingTimeoutId&&(clearTimeout(this.__showingLoadingTimeoutId),delete this.__showingLoadingTimeoutId),
this.snapshot&&(this.snapshot="");
},
showControlBar:function(){
1!==this.controlBarStatus&&(this.__touchVideoTimeoutId&&(clearTimeout(this.__touchVideoTimeoutId),
delete this.__touchVideoTimeoutId),this.__hidingControlBarTimeoutId&&(clearTimeout(this.__hidingControlBarTimeoutId),
delete this.__hidingControlBarTimeoutId),this.__userPlayTime||this.setControlBarStatus({
status:1
}),this.triggerEvent("showControlBar"));
},
hideControlBar:function(){
var e=this;
0===this.controlBarStatus||101===this.controlBarStatus||this.$refs.ariaSwitch.checked||(this.__hidingControlBarTimeoutId&&clearTimeout(this.__hidingControlBarTimeoutId),
this.setControlBarStatus({
status:101
}),this.__hidingControlBarTimeoutId=setTimeout(function(){
e.setControlBarStatus({
status:0
}),e.showDefaultPlaybackRate=!1,e.triggerEvent("hideControlBar");
},100),this.hideLikedCommentTips());
},
triggerAriaSwitch:function(){
this.$refs.ariaSwitch.checked?this.showControlBar():this.hideControlBar();
},
hideControlBarAfterTimeout:function(){
var e=this;
this.__touchVideoTimeoutId&&clearTimeout(this.__touchVideoTimeoutId),this.__touchVideoTimeoutId=setTimeout(function(){
return e.seekingStatus?void e.hideControlBarAfterTimeout():void(e.isPlay()&&e.hideControlBar());
},5e3);
},
showLikedCommentTips:function(){
1!==this.likedCommentTipsStatus&&(this.likedCommentTipsStatus=1);
},
hideLikedCommentTips:function(){
var e=this;
1===this.likedCommentTipsStatus&&(this.likedCommentTipsStatus=101,setTimeout(function(){
return e.likedCommentTipsStatus=0;
},100));
},
showCover:function(){
this.setCoverStatus({
status:1
});
},
hideCover:function(){
this.setCoverStatus({
status:0
});
},
showMidPlayBtn:function(){
this.setMidPlayStatus({
status:1
});
},
hideMidPlayBtn:function(){
this.setMidPlayStatus({
status:0
});
},
showSubscribeBtn:function(){
var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0];
!window.isFans&&w.supportSubscribe&&(0===this.subscribeStatus&&1===e||1===this.subscribeStatus&&2===e)&&(this.subscribeStatus=e,
1===e&&this.triggerEvent("showSubscribe"));
},
hideSubscribeBtn:function(){
this.subscribeStatus&&(this.subscribeStatus=0);
},
changeFullscreenOrientation:function(){
var e=this;
if(this.isFeFullscreen)return void d.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:90,
lock:!!r.os.android
},function(t){
-1!==t.err_msg.indexOf(":ok")&&(e.showControlBar(),e.hideControlBarAfterTimeout());
});
var t=this.$refs.video;
this.isWcSlPlayer&&t.requestFullscreen(90);
},
enterFullscreen:function(){
var e=this;
if(!this.fullscreenStatus)return this.triggerEvent("enterFullscreen"),this.isFeFullscreen?(this.handleFullscreenChange({
state:!0,
type:"frontend"
}),void(h.isIOS?setTimeout(function(){
d.invoke("setNavigationBarColor",{
color:"#000000",
alpha:0
}),d.invoke("handleDeviceInfo",{
action:"enableFullScreenLayout",
enable:!0
}),d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!0,
orientation:0,
animate:!1,
showStatusBar:!r.os.ipad,
hideBottomBar:!0
},function(t){
-1!==t.err_msg.indexOf(":ok")&&(h.isIOS&&d.invoke("handleDeviceInfo",{
action:"disableInteractivePop",
disable:!0
}),r.os.ipad&&e.onIPadOrientationChange());
});
},30):d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!0,
orientation:0
}))):this.isWcSlPlayer?(this.enableWcSlPlayerFullscreenAfterOrientationChange=!1,
void(h.isIOS?(this.setFullscreenStatus({
status:1
}),d.invoke("setNavigationBarColor",{
color:"#000000",
alpha:0
}),setTimeout(function(){
d.invoke("handleDeviceInfo",{
action:"enableFullScreenLayout",
enable:!0
}),d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!0,
orientation:0,
animate:!1,
showStatusBar:!r.os.ipad,
hideBottomBar:!0
}),setTimeout(function(){
return e.$refs.video.requestFullscreen(0,{
triggerEvent:!0
});
},50);
},50)):this.$refs.video.requestFullscreen(0,{
triggerEvent:!0
}))):void this.callJsapiFullscreen();
},
exitFullscreen:function(){
var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
return this.fullscreenStatus?((!this.isLandscape||r.os.ipad||t.directExit)&&this.triggerEvent("exitFullscreen"),
this.isFeFullscreen?void(!this.isLandscape||r.os.ipad||t.directExit?h.isIOS?(this.setFullscreenStatus({
status:101
}),setTimeout(function(){
d.invoke("setNavigationBarColor",{
wxcolor:{
light:"#FFFFFF",
dark:"#191919"
},
alpha:1
});
},150),setTimeout(function(){
d.invoke("handleDeviceInfo",{
action:"enableFullScreenLayout",
enable:!1
}),d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!1,
orientation:0,
animate:!1
},function(t){
-1!==t.err_msg.indexOf(":ok")&&(h.isIOS&&d.invoke("handleDeviceInfo",{
action:"disableInteractivePop",
disable:!1
}),e.handleFullscreenChange({
state:!1,
type:"frontend"
}));
});
},100)):(this.handleFullscreenChange({
state:!1,
type:"frontend"
}),d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!1,
orientation:0
})):d.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!!r.os.android
})):this.isWcSlPlayer?void(!this.isLandscape||this.enableWcSlPlayerFullscreenAfterOrientationChange||t.directExit?this.isLandscape&&this.isImmersiveMode||!h.isIOS?this.$refs.video.exitFullscreen():(this.setFullscreenStatus({
status:101
}),setTimeout(function(){
d.invoke("setNavigationBarColor",{
wxcolor:{
light:"#FFFFFF",
dark:"#191919"
},
alpha:1
});
},150),setTimeout(function(){
d.invoke("handleDeviceInfo",{
action:"enableFullScreenLayout",
enable:!1
}),d.invoke("handleDeviceInfo",{
action:"enableFullScreen",
enable:!1,
orientation:0,
animate:!1
},function(){
e.$refs.video.exitFullscreen();
});
},100)):this.$refs.video.requestFullscreen()):void(document.webkitExitFullscreen&&(document.webkitExitFullscreen(),
this.hideLoading()))):void 0;
},
callH5Fullscreen:function(){
this.__jsapiFullscreenTimeoutId&&(clearTimeout(this.__jsapiFullscreenTimeoutId),
this.__jsapiFullscreenTimeoutId=null);
var e=this.$refs.video;
e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.webkitEnterFullscreen&&e.webkitEnterFullscreen();
},
callJsapiFullscreen:function(){
var e=this;
if(this.__jsapiFullscreenTimeoutId&&(clearTimeout(this.__jsapiFullscreenTimeoutId),
this.__jsapiFullscreenTimeoutId=null),!this.opt.supportNativeFullPlayer||this.__jsapiFullscreenErrCnt>=2)return void this.callH5Fullscreen();
r.os.android||this.pause4outer({
triggerEvent:!1
});
var t=this.$refs.video,i=this.$store.state.cgiData,s=window.source||"",o=window.msg_link.html(!1),n=window.user_name||(i?i.username||i.user_name:"")||"",a=window.nickname||(i?i.nick_name:"")||"",h="";
if(r.os.ios){
var u=document.createElement("canvas"),l=u.getContext("2d");
u.style.width=this.opt.videoWidth+"px",u.width=this.opt.videoWidth,u.style.height=this.opt.videoHeight+"px",
u.height=this.opt.videoHeight,l.drawImage(t,0,0,this.opt.videoWidth,this.opt.videoHeight),
h=u.toDataURL("image/jpeg",1);
}
var c=t.getBoundingClientRect(),p={
left:c.left,
top:c.top,
height:c.bottom-c.top,
width:c.right-c.left
},g=this.opt.extinfo,_=g&&g.vid||"",f={
action:"enterEmbedMpVideo",
mpBizUin:this.opt.__biz||"",
mpAppMsgId:this.opt.mid||"",
mpIndex:this.opt.idx||"",
mpUrl:o,
bizUsrName:n,
bizNickName:a,
videoUrl:y.addParam(this.opt.src,"video_md5",this.opt.videoMd5||""),
videoTitle:this.opt.videoTitle,
videoCurrTime:this.getCurTime(),
videoWidth:this.opt.videoWidth,
videoHeight:this.opt.videoHeight,
videoThumbUrl:this.opt.cover,
videoDuration:1*this.opt.duration,
videoVid:_,
playerX:p.left,
playerY:p.top,
playerWidth:p.width,
playerHeight:p.height,
subscene:1*s,
headImgUrl:this.opt.headImgUrl,
currFrameData:h,
forbidForward:this.opt.canShareVideo?0:1
};
h&&(this.__jsapiFullscreenTimeoutId=setTimeout(function(){
e.setFullscreenStatus({
status:0
});
},2e3)),d.invoke("handleMPPageAction",f,function(t){
e.__jsapiFullscreenTimeoutId&&(clearTimeout(e.__jsapiFullscreenTimeoutId),e.__jsapiFullscreenTimeoutId=null),
/:ok$/.test(t.err_msg)?(e.setFullscreenStatus({
status:1
}),e.handleFullscreenChange({
state:!0,
type:"jsapi"
})):(e.setFullscreenStatus({
status:0
}),r.os.android||e.play4outer(0/0,{
triggerEvent:!1
}),e.__jsapiFullscreenErrCnt++);
}),r.os.android&&(window.CustomFullscreenApi&&"function"==typeof window.CustomFullscreenApi._customEnterFullscreen&&window.CustomFullscreenApi._customEnterFullscreen(!0),
this.callH5Fullscreen());
},
onIOSJsapiExitFullscreen:function(e){
if(e&&"onExitMpVideoFullPage"===e.action){
var t=this.opt.extinfo,i=t&&t.vid||"";
if(i&&i===e.videoVid&&(this.setFullscreenStatus({
status:0
}),!r.os.android)){
var s=1*e.videoCurrTime;
s=-1===s?0/0:s;
var o=this.duration;
parseInt(o,10)===parseInt(s,10)||s>o?this.onVideoEnded():(this.__statusBeforeSeek=1,
this.play4outer(s,{
triggerEvent:!1
})),this.handleFullscreenChange({
state:!1,
type:"jsapi"
});
}
}
},
preventFontSizeChange:function(){
var e=this;
r.os.iphone?this.$el.style.webkitTextSizeAdjust="none":r.os.android?this.fontSizeObserver=f.keepNormalFontSizeForAndroid(this.$el):r.os.ipad&&(f.isIPadOS13?f.onFontScaleChange(function(){
return f.setFontSize(e.$el,1);
}):this.$el.style.webkitTextSizeAdjust="none");
},
showResolutionEntry:function(){
this.setResolutionEntryStatus({
status:1
});
},
hideResolutionEntry:function(){
this.setResolutionEntryStatus({
status:0
});
},
showSubSetting:function(e){
this.__hideSubSettingTimeoutId&&clearTimeout(this.__hideSubSettingTimeoutId),this.setSubSettingStatus({
status:e
});
},
hideSubSetting:function(){
this.setSubSettingStatus({
status:0
});
},
hideSubSettingAfterTimeout:function(){
var e=this;
if(0!==this.subSettingStatus){
this.__hideSubSettingTimeoutId&&clearTimeout(this.__hideSubSettingTimeoutId);
var t=this.subSettingStatus;
this.setSubSettingStatus({
status:100+t
}),this.__hideSubSettingTimeoutId=setTimeout(function(){
e.setSubSettingStatus({
status:0
}),1===t?e.triggerEvent("resolutionChange",{
action:"hide"
}):2===t&&e.triggerEvent("rateChange",{
action:"hide"
});
},250);
}
},
clickPlaySwitch:function(e,t){
0===this.banOprStatus&&(this.isPlay()?(e||this.videoCtlReport({
step:12
}),this.pause4outer({
tapType:e,
triggerEvent:t
})):this.play4outer(0/0,{
tapType:e
}));
},
preventOperating:function(e){
this.setBanOprStatus({
status:e||1
});
},
resumeOperating:function(){
this.setBanOprStatus({
status:0
});
},
jsapiLog:function(e){
var t=["vid:","videosrc:"];
this.opt&&this.opt.extinfo&&this.opt.extinfo.vid&&(t[0]+=this.opt.extinfo.vid),this.$refs.video&&this.$refs.video.src&&(t[1]+=this.$refs.video.src),
n.info("videoplayer "+e+";"+t.join(";"));
},
triggerEvent:function(e,t){
var i=this;
if("timeupdate"!==e||"timeupdate"===e&&this.__enableTimeupdateLog){
"timeupdate"===e&&(this.__enableTimeupdateLog=!1,setTimeout(function(){
i.__enableTimeupdateLog=!0;
},5e3));
try{
var s="",o=Object.prototype.toString.call(t);
s="[object String]"===o?t:"[object Object]"===o||"[object Array]"===o?JSON.stringify(t):"no params",
this.jsapiLog("trigger:"+e+";arg:"+s+";");
}catch(n){}
}
var a=this[e+"InnerHandler"];
a&&a.call(this,t),this.emitEvent(e.replace(/[A-Z]/g,function(e){
return"-"+e.toLowerCase();
}),t);
},
emitEvent:function(e){
for(var t=arguments.length,i=Array(t>1?t-1:0),s=1;t>s;s++)i[s-1]=arguments[s];
this.$refs.video&&e&&this.$emit.apply(this,[e].concat(i));
},
errorInnerHandler:function(){
this.isWcSlPlayer||this.$refs.video.removeAttribute("src");
},
loadingInnerHandler:function(e){
this.triggerEvent("ready",e);
},
readyInnerHandler:function(e){
this.triggerEvent("loaded",e);
},
loadedInnerHandler:function(e){
var t=this.$store.state.cgiData.iframeIdx,i=document.getElementById("js_mp_video_container_"+t),s=i&&i.getAttribute("__sec_open_auto_play__");
return(e&&e.autoplay||this.autoplay||s)&&l.device.inWechat?(s&&i.removeAttribute("__sec_open_auto_play__"),
this.videoCtlReport({
step:15
}),this.__hasReportedBeginPlay=!0,void this.triggerEvent("readyBeginPlay",e)):void this.setBeginPlayStatus();
},
readyBeginPlayInnerHandler:function(e){
var t=this;
this.__dontReset&&(this.__dontReset=!1),(!this.isWcSlPlayer||!this.autoplay)&&"number"==typeof this.initialTime&&this.initialTime>0&&this.initialTime<.99*this.duration&&setTimeout(function(){
return t.play(t.initialTime);
},0),this.triggerEvent("beginPlay",e),this.isWcSlPlayer||null!==this.__replaySec&&0!==this.__replaySec||!r.os.ios||(this.$refs.video.currentTime=.1);
},
beginPlayInnerHandler:function(e){
var t=this,i=this.$refs.video,s=function(){
t.__firstPlayStart=Date.now(),t.__userPlayTime=!0,t.__hasBegunPlaying=!0,t.showCover(),
t.hideMidPlayBtn(),t.showLoading(),t.opt.flowNotice&&t.firstLoadedFlowNoticeJudge();
};
setTimeout(function(){
try{
if(t.__continueSec&&(t.__replaySec=t.__continueSec,t.__continueSec=null),t.jsapiLog("set continue:"+t.__replaySec),
t.isWcSlPlayer)e&&e.replay?(t.setControlBarStatus({
status:0
}),t.__canplay=!0,t.__statusBeforeSeek=1,t.bufferedPercent=0,t.currentTime=0,i.currentTime=0):t.autoplay||(t.__canplay=!0,
i.play()),s();else{
var o=i.play();
"object"===("undefined"==typeof o?"undefined":_typeof(o))?o.then(function(){
s();
}).catch(function(e){
("AbortError"===e.name||"NotAllowedError"===e.name)&&(t.setBeginPlayStatus(),t.__dontReset=!0,
p.setSum(114217,16,1));
}):s();
}
}catch(n){
t.jsapiLog("play error:"+n.toString());
}
});
},
replayInnerHandler:function(){
this.videoCtlReport({
step:9
}),this.afterReplay();
},
endInnerHandler:function(){
this.setAccessPlayBtnStatus({
status:3
}),this.__canplay=!1,this.__hasBegunPlaying=!1,this.hidePlayControl(),this.hideTouchOprBar(),
this.hideSubSettingAfterTimeout(),this.autoChangeTip({
type:"autoChange",
option:"hide"
}),this.autoChangeTip({
type:"autoSuc",
option:"hide"
});
},
touchVideoInnerHandler:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
return this.opt.blockTouchVideo||this.seekingStatus||this.__userPlayTime?!1:!this.__canplay||this.isEnd()&&this.opt.hideControlBarAtEnd?void this.hideControlBar():(e.isShow===!0||0===this.controlBarStatus?this.showControlBar():this.hideControlBar(),
this.isPlay()&&this.hideControlBarAfterTimeout(),void this.hideSubSettingAfterTimeout());
},
firstLoadedFlowNoticeJudge:function(){
l.device.inWechat&&this.__lastNetworkType&&this.__lastNetworkType.networkType&&this.__lastNetworkType.simType&&c.isMobileNetwork(this.__lastNetworkType.networkType)&&1!==this.__lastNetworkType.simType&&c.isVideoNeedFlowNotice(this.opt.flow,this.flowNum?5:1)&&this.showFlowNotice();
},
showTopTips:function(e){
var t=this;
this.__topTipsTimeoutId&&clearTimeout(this.__topTipsTimeoutId),this.topTips=e,this.__topTipsTimeoutId=setTimeout(function(){
t.__topTipsTimeoutId=null,t.topTips="";
},3500);
},
showFlowNotice:function(){
var e=this.flowNum?2:1;
this.videoCtlReport({
step:16,
noticeType:e
}),this.triggerEvent("flowNotice",{
flow:parseInt(1024*this.opt.flow),
noticeType:e
}),this.showTopTips(this.flowNum?"正在使用流量播放，该视频预计消耗"+this.flowNum+"M":"当前为非Wi-Fi环境，请注意流量消耗");
},
hidePlayControl:function(){
this.__isUserPause&&l.device.inWechat&&("wifi"===this.__pauseNetType&&c.isVideoNeedFlowNotice(this.opt.flow,3)||c.isNoneNetwork(this.__pauseNetType)&&c.isVideoNeedFlowNotice(this.opt.flow,4)?this.showFlowNotice():(this.__isUserPause=!1,
this.__pauseNetType=null)),this.hideMidPlayBtn(),this.hideControlBarAfterTimeout();
},
showPlayControl:function(){
this.isEnd()||this.showControlBar();
},
reinitVideo:function(){
var e=this;
this.__canplay=!1,this.removeVideo=!0,this.$nextTick(function(){
e.removeVideo=!1,e.$nextTick(function(){
return e.triggerEvent("loading");
});
});
},
fallbackFromWcSlVideoToH5Player:function(){
console.error("fallback from wcslplayer to h5player",this.$refs.video.error),this.jsapiLog("fallback from wcslplayer to h5player: "+this.$refs.video.error),
g.__useWcSlPlayer=this.isWcSlPlayer=!1,this.__fallbackFromWcSlVideoToH5Player=!0,
this.reinitVideo();
},
afterReplay:function(){
this.__hasBegunPlaying=!0,this.__userPlayTime=!0,this.__firstPlayStart=Date.now(),
this.showLoading(),this.play(),this.triggerEvent("afterReplay");
},
supportWcSlPlayer:function(){
return window.__failConfigWxOpen?!1:this.__fallbackFromWcSlVideoToH5Player?!1:w.wcSlPlayerSupport;
},
videoCtlReport:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=this.opt.extinfo;
if(t){
var i={
step:e.step,
vid:t.vid,
hit_bizuin:t.hit_bizuin,
hit_vid:t.hit_vid,
traceid:t.pageplayer.getTraceId(),
orderid:t.pageplayer.getOrderid(),
ori_status:t.pageplayer.getOriStatus(),
type:"undefined"!=typeof this.opt.videoReportType?this.opt.videoReportType:-1,
fromid:t.pageplayer.getFromid()
};
e.step>=16?(i.remind_traffic_size=parseInt(1024*this.opt.flow),i.traffic_reminder_type=e.noticeType,
u.commReport(i)):u.report(i);
}
},
replay:function(){
this.hideMidPlayBtn(),this.triggerEvent("readyBeginPlay",{
replay:!0
}),this.triggerEvent("replay");
},
resetVideo:function(){
this.initialTime=0,this.showCover(),this.reinitVideo();
},
changeStatus:function(e){
var t=this;
if(w.statusDefine[e.status]&&(!e.subStatus||w.subStatusDefine[e.subStatus]||"error"===e.status)&&(this.status!==e.status||this.subStatus!==e.subStatus)){
var i=0;
"end"===e.status||"error"===e.status?(this.__playingBufferingStartTime=null,this.__userPlayTime=!1):"pause"===e.status?this.__playingBufferingStartTime=null:"play"===e.status&&"playing"===e.subStatus&&null!==this.__playingBufferingStartTime?(i=Date.now()-this.__playingBufferingStartTime,
this.__playingBufferingStartTime=null):this.__hasBegunPlaying&&this.__canplay&&!this.__userPlayTime&&"loading"===e.status&&"waiting"===e.subStatus&&null===this.__playingBufferingStartTime&&(this.__playingBufferingStartTime=Date.now());
var s=this.status,o=this.subStatus;
this.setStatus({
status:e.status,
subStatus:e.subStatus
});
var n=["player statusChange, preStatus:",s,"; status:",this.status,"; preSubStatus:",o,"; subStatus:",this.subStatus,"; video_duration:",this.$refs.video?this.$refs.video.duration:"0","; getvinfo_duration:",this.duration,"; current_time:",this.$refs.video?this.$refs.video.currentTime:"0","; play_total_time:",this.getPlayTotalTime()].join("");
this.jsapiLog(n),"error"===e.status&&window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&(this.jsapiLog("client api get video begin: "+this.src),
this.src?d.invoke("request",{
url:this.src,
method:"GET",
data:{},
header:{
Range:"bytes=0-1"
}
},function(i){
t.jsapiLog("client api get video end: "+t.src);
var s=/^https?:\/\/\[/.test(t.src)?"Player ipv6: error":"Player ipv4: error",o="errorCode: "+e.subStatus+"; errorMsg: "+e.errorMsg+"; src: "+t.src+"; "+(window.__second_open__?"secopen":"h5")+"; res: "+JSON.stringify(i);
window.WX_BJ_REPORT.BadJs.report(s,o);
}):window.WX_BJ_REPORT.BadJs.report("Player ipv4: error","errorCode: "+e.subStatus+"; errorMsg: "+e.errorMsg+"; src: "+this.src+"; "+(window.__second_open__?"secopen":"h5")+";")),
P(n),this.triggerEvent("statusChange",{
currentTime:this.$refs.video&&this.$refs.video.currentTime,
preStatus:s,
preSubStatus:o,
status:this.status,
subStatus:this.subStatus
}),i&&(this.triggerEvent("playingBufferingTime",{
bufferingTime:i
}),this.useQuic&&(p.setSum(237895,15,i),p.setSum(237895,18,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:UseQuicBufferingTime",(window.__second_open__?"secopen:":"h5:")+i,{
mid:"mmbizwap:quic_Monitor",
view:"wap_business"
})),this.compare1&&(p.setSum(237895,16,i),p.setSum(237895,19,1)),this.compare2&&(p.setSum(237895,17,i),
p.setSum(237895,20,1)));
}
},
play:function(e){
var t=this.$refs.video;
if(!this.isEnd()){
if(this.isWcSlPlayer&&t&&null==t.readyState)return void("number"!=typeof this.initialTime?this.__playQueue[0]={
sec:e
}:(this.__lastPlayTime=e,this.currentTime=e));
if(!t||0===t.readyState)return void(this.__playQueue[0]={
sec:e
});
e*=1;
try{
if(isNaN(e)||"number"!=typeof e)this.__canplay&&this.isPause()||0===t.currentTime?t.play():t.currentTime=0;else{
var i=this.duration;
e>=i&&(e=i-1),0>e&&(e=0),e=1*(1*e).toFixed(4),this.__lastPlayTime=e,this.currentTime=e,
t.currentTime===e?t.play():t.currentTime=e;
}
}catch(s){
0===t.currentTime?t.play():t.currentTime=0,console.error(s);
}
}
},
pause:function(){
var e=this.$refs.video;
e&&null!=e.readyState&&0!==e.readyState&&(this.__replaySec=null,this.__waitingTimeoutId&&(clearTimeout(this.__waitingTimeoutId),
this.__waitingTimeoutId=null),e.pause(),P(this.id+":pause function"));
},
play4outer:function(e){
var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
this.play(e),t.triggerEvent!==!1&&this.triggerEvent("userplay",{
tapType:t.tapType||0
}),this.hidePlayControl();
},
pause4outer:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this.hideLoading(),this.pause(),e.triggerEvent!==!1&&this.triggerEvent("userpause",{
tapType:e.tapType||0
}),this.hideControlBar(),this.showPlayControl();
},
afterFirstLoaded:function(){
this.__userPlayTime&&(this.__userPlayTime=!1,this.reportRealLoadingTime(),this.resumeOperating(),
this.isWcSlPlayer||this.triggerEvent("touchVideo",{
isShow:!0
}));
},
reportRealLoadingTime:function(){
var e=parseInt(Date.now()-this.__firstPlayStart);
console.info("[视频点击播放耗时]",e),this.triggerEvent("firstBufferingTime",{
bufferingTime:e,
initialTime:this.initialTime
}),this.useQuic&&(p.setSum(237895,9,e),e>3e5&&window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:UseQuicfirstPlayTime",(window.__second_open__?"secopen:":"h5:")+e,{
mid:"mmbizwap:quic_Monitor",
view:"wap_business"
})),this.compare1&&p.setSum(237895,10,e),this.compare2&&p.setSum(237895,11,e);
},
hasSeeked:function(){
return!!this.__hasSeeked;
},
getCurTime:function(){
return this.$refs.video&&this.$refs.video.currentTime||0;
},
getPlaybackRate:function(){
return this.$refs.video&&this.$refs.video.playbackRate||1;
},
getResolutionInfo:function(){
var e=this;
if(this.$refs.video){
var t=function(){
var t=e.isWcSlPlayer?e.$refs.video.resolutionSrc:e.$refs.video.src;
return{
v:e.resolutionInfo?e.resolutionInfo.filter(function(e){
return e.src===t;
})[0]:null
};
}();
if("object"===("undefined"==typeof t?"undefined":_typeof(t)))return t.v;
}
},
getSeekedTimes:function(){
return this.__seekedTimes;
},
getPlayTotalTime:function(){
return this.endCountTime(),this.__totalPlayTime;
},
getLog:function(){
var e=this.log||{};
return{
hasended:e.hasended,
last_ms:Math.floor(1e3*(e.lastsec||0)),
duration_ms:Math.floor(1e3*(e.duration||0)),
video_error:e.video_error||0,
video_error_code:e.video_error_code||0,
loadwait:e.loadwait||0
};
},
isPlay:function(){
return this.$refs.video?!this.$refs.video.paused&&!this.isEnd():!1;
},
isPause:function(){
return this.$refs.video?!!this.$refs.video.paused:!0;
},
isEnd:function(){
return this.$refs.video?!!this.$refs.video.ended:!1;
},
hasBegunPlaying:function(){
return this.__hasBegunPlaying;
},
setBeginPlayStatus:function(){
var e=this;
this.showMidPlayBtn(),setTimeout(function(){
e.hideLoading();
});
},
autoChangeTip:function(e){
var t=this,i=void 0;
switch(e.type){
case"autoChange":
i=".js_auto_change_tip";
break;

case"autoSuc":
i=".js_auto_change_suc_tip";
break;

default:
i=null;
}
switch(e.option){
case"show":
$(this.$el).find(".video__top-tips__mask").removeClass("video__top-tips__showOut").addClass("video__top-tips__showIn"),
$(this.$el).find(".js_auto_change_tip_mask").show(),$(this.$el).find(i).show();
break;

case"hide":
$(this.$el).find(".video__top-tips__mask").removeClass("video__top-tips__showIn").addClass("video__top-tips__showOut"),
setTimeout(function(){
$(t.$el).find(i).hide(),$(t.$el).find(".js_auto_change_tip_mask").hide();
},500);
}
},
showToast:function(e,t){
this.$refs.toast.open(e,t);
},
shareVideo:function(){
return this.opt.extinfo&&this.opt.extinfo.preview?void window.weui.alert("预览状态下无法分享视频"):void(this.canShareVideo&&((this.needFeFullscreen||r.os.ipad)&&g.supportImmersiveMode?(d.invoke("handleMPPageAction",{
action:"share"
}),this.triggerEvent("shareVideo")):this.opt.supportNativeFullPlayer&&this.callJsapiShareVideo("shareEmbedMpVideo")));
},
praiseVideo:function(){
return this.opt.extinfo&&this.opt.extinfo.preview?void window.weui.alert("预览状态下无法点赞视频"):void this.triggerEvent("praiseVideo");
},
likeVideo:function(){
return this.opt.extinfo&&this.opt.extinfo.preview?void window.weui.alert("预览状态下无法在看视频"):this.isInPaySubscribe?void window.weui.alert("付费图文内视频暂不支持在看"):(this.triggerEvent("likeVideo"),
void(this.isLiked?(this.showControlBar(),this.hideControlBarAfterTimeout(),this.showLikedCommentTips()):this.hideLikedCommentTips()));
},
writeLikedComment:function(){
d.invoke("handleHaokanAction",{
action:"shareToGoodLook"
});
},
onLikedCommentWrite:function(e){
return this.opt.extinfo&&this.opt.extinfo.preview?void window.weui.alert("预览状态下无法在看视频"):this.isInPaySubscribe?void window.weui.alert("付费图文内视频暂不支持在看"):void(this.fullscreenStatus&&this.needFeFullscreen&&g.supportImmersiveMode&&this.triggerEvent("likeVideo",e));
},
openSourcePage:function(){
this.isImmersiveMode?v.openUrlWithExtraWebview(location.href.replace("#rd","").replace("item_show_type=16","").replace(/&scene=\d*/,"")+"&scene=206#rd"):this.exitFullscreen(),
this.triggerEvent("openSourcePage");
},
clickSubscribe:function(){
var e=this;
!window.isFans&&w.supportSubscribe&&1===this.subscribeStatus&&(d.invoke("addContact",{
webtype:"1",
username:this.opt.bizUserName,
scenenote:location.href||"",
scene:203,
subscene:10
},function(t){
t.err_msg.indexOf("ok")>-1&&(e.showSubscribeBtn(2),window.isFans=1);
}),this.triggerEvent("clickSubscribe"));
},
callJsapiShareVideo:function(e){
var t=this;
if(!this.__loadingCoverBase64){
var i=function(){
var i=t.$store.state.cgiData,s=window.msg_link.html(!1),o=window.user_name||(i?i.username||i.user_name:"")||"",n=window.nickname||(i?i.nick_name:"")||"",a=t.opt.extinfo,r=a&&a.vid||"",h={
action:e,
mpUrl:s,
bizUsrName:o,
bizNickName:n,
videoVid:r,
videoUrl:y.addParam(t.opt.src,"video_md5",t.opt.videoMd5||""),
videoThumbUrl:t.opt.cover,
videoThumbData:t.__coverBase64,
videoTitle:t.opt.videoTitle,
videoDuration:1*t.opt.duration
};
d.invoke("handleMPPageAction",h,function(){});
};
this.__loadingCoverBase64=!0,this.getCoverBase64(function(){
t.__loadingCoverBase64=!1,i();
});
}
},
getCoverBase64:function(e){
var t=this;
this.__coverBase64?"function"==typeof e&&e({
cover64:this.__coverBase64||""
}):!function(){
var i=new Image;
i.crossOrigin="anonymous",i.onload=function(){
i.onload=null,i.onerror=null;
try{
var s=i.naturalWidth||i.width,o=i.naturalHeight||i.height,n=document.createElement("canvas"),a=n.getContext("2d");
n.width=s,n.height=o,n.style.width=s+"px",n.style.height=o+"px",a.drawImage(i,0,0,s,o),
t.__coverBase64=n.toDataURL("image/jpeg",1);
}catch(r){
console.error(r),t.jsapiLog("jsapi shareEmbedMpVideo error: "+r.toString()),t.__coverBase64="";
}
"function"==typeof e&&e({
cover64:t.__coverBase64
});
},i.onerror=function(){
this.onload=null,this.onerror=null,"function"==typeof e&&e({
cover64:""
});
},i.src=t.cover;
}();
}
}),
_getFormatTime:I
};
return B;
});define("pages_new/common_share/video/player/plugins/monitor/monitor.js",["pages_new/common_share/video/player/plugins/base_legacy.js","biz_wap/utils/jsmonitor_report.js","appmsg/log.js"],function(t){
"use strict";
function r(){
this._g={
reportData:{},
uid:+new Date,
random:Math.random(),
_debug:a
};
}
var o=t("pages_new/common_share/video/player/plugins/base_legacy.js"),e=t("biz_wap/utils/jsmonitor_report.js"),i=t("appmsg/log.js"),a=void 0;
try{
a=window.parent.window.location.href.indexOf("&vconsole=1")>0;
}catch(n){
a=window.location.href.indexOf("&vconsole=1")>0;
}
return o.inherit(r,o.Class),r.prototype.destroy=function(){
this.setUnblockEvt("initMonitor");
},r.prototype.init=function(){
this.setBlockEvt("initMonitor");
},r.prototype.getuid=function(){
return++this._g.uid;
},r.prototype.initDataByUid=function(t,r){
var o=this._g.reportData;
!r&&o[t]&&o[t].radio&&(r=o[t].radio),this._g.reportData[t]={
data:{},
radio:r||1
};
},r.prototype.initMonitorHandler=function(t,r,o){
var e=this.getuid()+"_"+r;
return this.initDataByUid(e,o),{
data:e,
code:7
};
},r.prototype.minusMonitorHandler=function(t,r,e){
var i=this._g.reportData[r];
if(!i||!e)return o.BASE_BITSET;
i=i.data;
for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(i[a]||(i[a]={
key:a,
value:0
}),i[a].value=Math.max(0,i[a].value-e[a]||1));
return o.BASE_BITSET;
},r.prototype.setMonitorHandler=function(t,r,e){
var i=this._g.reportData[r];
if(!i||!e)return o.BASE_BITSET;
i=i.data;
for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(i[a]||(i[a]={
key:a,
value:0
}),i[a].value=e[a]||1);
return o.BASE_BITSET;
},r.prototype.plusMonitorHandler=function(t,r,e){
var i=this._g.reportData[r];
if(!i||!e)return o.BASE_BITSET;
i=i.data;
for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(i[a]||(i[a]={
key:a,
value:0
}),i[a].value=i[a].value+e[a]||1);
return o.BASE_BITSET;
},r.prototype.clearMonitorHandler=function(t,r){
return this.initDataByUid(r),o.BASE_BITSET;
},r.prototype.sendMonitorHandler=function(t,r){
if(!r||-1===r.indexOf("_"))return o.BASE_BITSET;
var a=this._g.reportData[r];
if(!a)return o.BASE_BITSET;
if(this._g.random>a.radio&&!this._g._debug)return o.BASE_BITSET;
a=a.data;
var n=(r+"").split("_")[1];
for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){
var p=a[s];
p.value&&e.setSum(n,p.key,p.value);
}
return i("[Video] "+JSON.stringify(a)),this.initDataByUid(r),o.BASE_BITSET;
},r;
});define("pages_new/common_share/video/player/plugins/base.js",["pages_new/3rd/vue.js"],function(n){
"use strict";
var t=n("pages_new/3rd/vue.js"),e=t.extend({
data:function(){
return{
controller:null
};
},
methods:{
initContext:function(n){
this.controller=n,"function"==typeof this.initPlugin&&this.initPlugin();
},
setBlockEvt:function(n){
this.controller.setBlockPlugin(n,this);
},
setUnblockEvt:function(n){
this.controller.setBlockPlugin(n,null);
},
recv:function(){
for(var n=arguments.length,t=Array(n),i=0;n>i;i++)t[i]=arguments[i];
var r=this[t[0]+"Handler"];
if("function"==typeof r){
var o=r.apply(this,t);
return"undefined"==typeof o||null===o?e.CONTINUE:o;
}
return e.CONTINUE;
}
}
});
return e.TYPE_INNER=0,e.TYPE_COVER=1,e.TYPE_CONTROL=2,e.CONTINUE=0,e.BLOCK_ALL_LOGIC=1,
e.BLOCK_REST_PLUGINS=2,e.BLOCK_INNER_LOGIC=4,e.BLOCK_TRIGGER_OUT=8,e;
});define("pages_new/common_share/video/player/controller.html.js",[],function(){
return'<div :class="[\'mp-video-player\', fullscreenStatus === 101 ? \'opr_fade_out\' : \'\']">\n  <mp-video-player\n    v-if="errType === 0 && playerOpt"\n    ref="player"\n    :opt="playerOpt"\n    :wrap-style="wrapStyle"\n    :video-style="videoStyle"\n    @loaded="onLoaded"\n    @timeupdate="onTimeupdate"\n    @begin-play="onBeginPlay"\n    @durationchange="onDurationchange"\n    @fullscreenchange="onFullscreenchange"\n    @status-change="onStatusChange"\n    @after-replay="onAfterReplay"\n    @hand-drag-complete="onHandDragComplete"\n    @bar-drag-complete="onBarDragComplete"\n    @end="onEnd"\n    @error="onError"\n    @first-buffering-time="onFirstBufferingTime"\n    @playing-buffering-time="onPlayingBufferingTime"\n    @flow-notice="onFlowNotice"\n    @userplay="onUserplay"\n    @userpause="onUserpause"\n    @waiting="onWaiting"\n    @play="onPlay"\n    @pause="onPause"\n    @mid-play-click="onMidPlayClick"\n    @after-check-video-fit="onAfterCheckVideoFit"\n    @bind-error="onBindError"\n    @rate-change="onRateChange"\n    @resolution-change="onResolutionChange"\n    @brightness-change="onBrightnessChange"\n    @volume-change="onVolumeChange"\n    @profile-jump="onProfileJump"\n    @process-state-change="onProcessStateChange"\n    @canplay="onCanplay"\n    @show-control-bar="onShowControlBar"\n    @hide-control-bar="onHideControlBar"\n    @show-menu="onShowMenu"\n    @replay="onReplay"\n    @share-video="onShareVideo"\n    @praise-video="onPraiseVideo"\n    @like-video="onLikeVideo"\n    @open-source-page="onOpenSourcePage"\n    @show-subscribe="onShowSubscribe"\n    @click-subscribe="onClickSubscribe"\n    @enter-fullscreen="onEnterFullscreen"\n    @exit-fullscreen="onExitFullscreen"\n    @fast-forward="onFastForward"\n  >\n    <template #inner>\n      <component ref="innerPlugins" v-for="(plugin, idx) in innerPlugins" :key="idx" :is="plugin"></component>\n      <!-- 暂停吸顶提示 BEGIN -->\n      <div v-show="topStickyInfoStatus && !fullscreenStatus" class="video_poster__info__play"\n        :style="{ zIndex: topStickyInfoStatus > 200 ? -2 : \'\' }"\n        @click="topStickyInfoPlay"\n      ><i :class="topStickyInfoIconClass"></i></div>\n      <div v-show="topStickyInfoStatus && !fullscreenStatus" class="video_poster__info"\n        :style="{ zIndex: topStickyInfoStatus > 200 ? -2 : \'\' }"\n        @click="topStickyInfoPlay"\n      >\n        <p class="video_poster__info__title" style="font-size: 17px;">{{topStickyInfoWording}}</p>\n        <p class="video_poster__info__desc" style="font-size: 12px;">{{playerOpt && playerOpt.videoTitle || \'\'}}</p>\n      </div>\n      <div v-show="topStickyInfoStatus && !fullscreenStatus" class="video_poster__info__mask"\n        :style="{ width: topStickyInfoMaskWidth }"\n      ></div>\n      <!-- 暂停吸顶提示 END -->\n    </template>\n    <template #cover>\n      <component ref="coverPlugins" v-for="(plugin, idx) in coverPlugins" :key="idx" :is="plugin"></component>\n    </template>\n    <template #control>\n      <component ref="controlPlugins" v-for="(plugin, idx) in controlPlugins" :key="idx" :is="plugin"></component>\n    </template>\n  </mp-video-player>\n  <div v-else-if="errType === 1" class="wrp_pop_tips wx_video_error_box js_error_box">\n    <div class="wx_video_error_msg js_error_area">\n      <p role="heading">{{errMsg}}</p>\n      <i v-if="!opt.isMpVideo" class="wx_video_error_code">错误码：{{errCode}}</i>\n      <a v-if="refreshBtnStatus !== 0" class="wx_video_error_msg_btn js_video_errormsg_btn" role="button" href="javascript:void(0);" @click="reload">\n        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAqCAMAAADhynmdAAAAQlBMVEUAAACcnJycnJycnJyoqKicnJycnJycnJycnJycnJyfn5+cnJydnZ2enp6kpKSdnZ2cnJyenp6cnJycnJycnJybm5t8KrXMAAAAFXRSTlMAyeb3CNp3tJRvHIEtJhBgqztWRJ+p5TqGAAABCklEQVQ4y5WTi27DIAxFAUMhgTzX8/+/urB2pdKI0x0pSoRuruyLbf7gF3PBaDE6X44LyY0D1SJQsfd9PpMM/CJx60v8SmV1HMSi1lKyA1n0jnwWSO08l04uJbxpBmTrpDtbGB6fmxC6Tc4BHv9aZDJdJsHW9w43Jez9x8T5M4l31WZsJn2bsYY+nUum2lQkGIVANPZ4FCLWOJImSTgjZE2SkU9crmu57mj9JBc93Qzj9R1d3HSG5bN5MRsnUzcGKK8Ns02z+Da7rYQE4bUE2PG1C6kVnkCyf0pwX8/jwbyxCLhcHpKTFkvkwK3pRmXtRrVFoTGYLvN+t0EUl0qrRaF1pFBz0anp/ptvNB4SY1XDAVMAAAAASUVORK5CYII=" alt="" class="wx_video_error_refresh">\n        刷新      </a>\n    </div>\n    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIXRSTlMAOx20pMJbzBQNTDGTh2ohLCZmeUF2hEmXCFdxUquef4yHE17nAAACnklEQVRIx9WW2xqiIBSFRc1AUATJU1a+/1MOm0NYKvnNXM260ZLftRcbqCQinOLI0yiY/iXKuUZPjx5Fk+6RhF1yHiVF0wC6IZfr9fqIkpRqdNyQ9AoiUU8g+YZ8Xn96YmNKvkhkLMskKgEo/yJzaxkXeZsGsjeWKEIFU/FBZgA+D5yEwGtTgR0J18lYUvdcLZ1YkUjLf+a0saYYSG/J3Hury+WSkTCjCETtF6Mvd8QGJMZSWIfsAlKhWGRl5zQ1ZNBDgy/zzvvFavWUK7SyTRs+rsiUZS/4LHIHyo8VgBx7vDkKx2WhPS7dD1Q6cNlu2dTa0gMys4bz/vJR6ph8ADgcVcSVUkfnhzJTc6gRj8fbCOHk30UI2KC+V4gKjskJQqC5frFHli0kafogFIfFkAXVCSqdAFVR8pmtVCWiXCtaarbWpGtQAYx7sjf2GCbfjFRQpH7lTLucveSMBE7+Z6VqViT2/PVs0d7hPk9TUcTaUuVaT8k/f/v6SXOgyG7InZaSvM8vj/309LrbvpSAORDH2/kWGyHhm/u5AYUc8qdFBRRrsV749bRv6I5x1OY50GZUUxQz9aGplAXZcOQ1DL3vwsTyvHQ2YWgjZV2rDTmxYRjUuoBvcQDr7QRLBiiNzJ4BawG3FLtTmEMGBigTRyC2oIKht1vbwLWrKmXKBZal+yApDGhm4q5JCVdNdrZeQBe8B44WnE2NGmxrR1bCvMugHdkhSwMWI9wjIGeosnPlJmNrst6PQrpeFkBSyAmkdD016DYqAVC6HHcNtnCPgazcuytAd5IqB/qYtq4bkP7vnEaL3W4KH9/HhKBAKl8XFUlMIWYIek4hZgh6UtjHBLVA4pPkCKRf9jOQ5Kwp1UvPDyb3qkPJaRG8Ln7f8Q8Bki/Kj5IYnQAAAABJRU5ErkJggg==" class="wx_video_error_loading js_video_errormsg_loading" style="display:none;">\n  </div>\n  <div v-else-if="errType === 2" class="wrp_pop_tips wx_video_msg_primary js_error_box">\n    <div class="wx_video_msg_primary_inner">\n      <i class="weui-icon-info weui-icon_msg"></i>\n      <p class="wx_video_msg_primary_text">{{errMsg}}</p>\n    </div>\n  </div>\n  <div v-show="toastTips">\n    <div class="weui-mask_transparent"></div>\n    <div class="weui-toast" :style="{ top: orientationStatus === 0 ? \'45%\' : \'\' }">\n      <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n      <p class="weui-toast__content">{{toastTips}}</p>\n    </div>\n  </div>\n</div>';
});define("biz_wap/zepto/touch.js",["biz_wap/zepto/zepto.js"],function(e){
"use strict";
e("biz_wap/zepto/zepto.js"),function(e){
function t(e,t,o,n){
return Math.abs(e-t)>=Math.abs(o-n)?e-t>0?"Left":"Right":o-n>0?"Up":"Down";
}
function o(){
p=null,g.last&&(g.el&&"function"==typeof g.el.trigger&&g.el.trigger("longTap"),g={});
}
function n(){
p&&clearTimeout(p),p=null;
}
function i(){
a&&clearTimeout(a),l&&clearTimeout(l),c&&clearTimeout(c),p&&clearTimeout(p),a=l=c=p=null,
g={};
}
function r(e){
return("touch"==e.pointerType||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary;
}
function u(e,t){
return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t;
}
var a,l,c,p,s,g={},f=750;
e(document).ready(function(){
var w,y,T,h,d=0,m=0;
"MSGesture"in window&&(s=new MSGesture,s.target=document.body),e(document).bind("MSGestureEnd",function(e){
var t=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;
t&&g.el&&"function"==typeof g.el.trigger&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t));
}).on("touchstart MSPointerDown pointerdown",function(t){
(!(h=u(t,"down"))||r(t))&&(T=h?t:t.touches[0],t.touches&&1===t.touches.length&&g.x2&&(g.x2=void 0,
g.y2=void 0),w=Date.now(),y=w-(g.last||w),g.el=e("tagName"in T.target?T.target:T.target.parentNode),
a&&clearTimeout(a),g.x1=T.pageX,g.y1=T.pageY,y>0&&250>=y&&(g.isDoubleTap=!0),g.last=w,
p=setTimeout(o,f),s&&h&&s.addPointer(t.pointerId));
}).on("touchmove MSPointerMove pointermove",function(e){
(!(h=u(e,"move"))||r(e))&&(T=h?e:e.touches[0],n(),g.x2=T.pageX,g.y2=T.pageY,d+=Math.abs(g.x1-g.x2),
m+=Math.abs(g.y1-g.y2));
}).on("touchend MSPointerUp pointerup",function(o){
(!(h=u(o,"up"))||r(o))&&(n(),g.x2&&Math.abs(g.x1-g.x2)>30||g.y2&&Math.abs(g.y1-g.y2)>30?c=setTimeout(function(){
g.el&&"function"==typeof g.el.trigger&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t(g.x1,g.x2,g.y1,g.y2))),
g={};
},0):"last"in g&&(30>d&&30>m?l=setTimeout(function(){
var t=e.Event("tap");
t.cancelTouch=i,g.el&&"function"==typeof g.el.trigger&&g.el.trigger(t),g.isDoubleTap?(g.el&&g.el.trigger("doubleTap"),
g={}):a=setTimeout(function(){
a=null,g.el&&g.el.trigger("singleTap"),g={};
},250);
},0):g={}),d=m=0);
}).on("touchcancel MSPointerCancel pointercancel",i),e(window).on("scroll",i);
}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){
e.fn[t]=function(e){
return this.on(t,e);
};
});
}(Zepto);
});define("biz_wap/zepto/event.js",["biz_wap/zepto/zepto.js"],function(e){
"use strict";
e("biz_wap/zepto/zepto.js"),function(e){
function n(e){
return e._zid||(e._zid=d++);
}
function t(e,t,o,u){
if(t=r(t),t.ns)var a=i(t.ns);
return(g[n(e)]||[]).filter(function(e){
return!(!e||t.e&&e.e!=t.e||t.ns&&!a.test(e.ns)||o&&n(e.fn)!==n(o)||u&&e.sel!=u);
});
}
function r(e){
var n=(""+e).split(".");
return{
e:n[0],
ns:n.slice(1).sort().join(" ")
};
}
function i(e){
return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)");
}
function o(e,n){
return e.del&&!y&&e.e in E||!!n;
}
function u(e){
return b[e]||y&&E[e]||e;
}
function a(t,i,a,s,f,d,l){
var v=n(t),h=g[v]||(g[v]=[]);
i.split(/\s/).forEach(function(n){
if("ready"==n)return e(document).ready(a);
var i=r(n);
i.fn=a,i.sel=f,i.e in b&&(a=function(n){
var t=n.relatedTarget;
return!t||t!==this&&!e.contains(this,t)?i.fn.apply(this,arguments):void 0;
}),i.del=d;
var v=d||a;
i.proxy=function(e){
if(e=c(e),!e.isImmediatePropagationStopped()){
e.customData=s;
var n=v.apply(t,e._args==p?[e]:[e].concat(e._args));
return n===!1&&(e.preventDefault(),e.stopPropagation()),n;
}
},i.i=h.length,h.push(i),"addEventListener"in t&&t.addEventListener(u(i.e),i.proxy,o(i,l));
});
}
function s(e,r,i,a,s){
var c=n(e);
(r||"").split(/\s/).forEach(function(n){
t(e,n,i,a).forEach(function(n){
delete g[c][n.i],"removeEventListener"in e&&e.removeEventListener(u(n.e),n.proxy,o(n,s));
});
});
}
function c(n,t){
return(t||!n.isDefaultPrevented)&&(t||(t=n),e.each(_,function(e,r){
var i=t[e];
n[e]=function(){
return this[r]=P,i&&i.apply(t,arguments);
},n[r]=z;
}),(t.defaultPrevented!==p?t.defaultPrevented:"returnValue"in t?t.returnValue===!1:t.getPreventDefault&&t.getPreventDefault())&&(n.isDefaultPrevented=P)),
n;
}
function f(e){
var n,t={
originalEvent:e
};
for(n in e)w.test(n)||e[n]===p||(t[n]=e[n]);
return c(t,e);
}
var p,d=(e.zepto.qsa,1),l=Array.prototype.slice,v=e.isFunction,h=function(e){
return"string"==typeof e;
},g={},m={},y="onfocusin"in window,E={
focus:"focusin",
blur:"focusout"
},b={
mouseenter:"mouseover",
mouseleave:"mouseout"
};
m.click=m.mousedown=m.mouseup=m.mousemove="MouseEvents",e.event={
add:a,
remove:s
},e.proxy=function(t,r){
if(v(t)){
var i=function(){
return t.apply(r,arguments);
};
return i._zid=n(t),i;
}
if(h(r))return e.proxy(t[r],t);
throw new TypeError("expected function");
},e.fn.bind=function(e,n,t){
return this.on(e,n,t);
},e.fn.unbind=function(e,n){
return this.off(e,n);
},e.fn.one=function(e,n,t,r){
return this.on(e,n,t,r,1);
};
var P=function(){
return!0;
},z=function(){
return!1;
},w=/^([A-Z]|returnValue$|layer[XY]$)/,_={
preventDefault:"isDefaultPrevented",
stopImmediatePropagation:"isImmediatePropagationStopped",
stopPropagation:"isPropagationStopped"
};
e.fn.delegate=function(e,n,t){
return this.on(n,e,t);
},e.fn.undelegate=function(e,n,t){
return this.off(n,e,t);
},e.fn.live=function(n,t){
return e(document.body).delegate(this.selector,n,t),this;
},e.fn.die=function(n,t){
return e(document.body).undelegate(this.selector,n,t),this;
},e.fn.on=function(n,t,r,i,o){
var u,c,d=this;
return n&&!h(n)?(e.each(n,function(e,n){
d.on(e,t,r,n,o);
}),d):(h(t)||v(i)||i===!1||(i=r,r=t,t=p),(v(r)||r===!1)&&(i=r,r=p),i===!1&&(i=z),
d.each(function(p,d){
o&&(u=function(e){
return s(d,e.type,i),i.apply(this,arguments);
}),t&&(c=function(n){
var r,o=e(n.target).closest(t,d).get(0);
return o&&o!==d?(r=e.extend(f(n),{
currentTarget:o,
liveFired:d
}),(u||i).apply(o,[r].concat(l.call(arguments,1)))):void 0;
}),a(d,n,i,r,t,c||u);
}));
},e.fn.off=function(n,t,r){
var i=this;
return n&&!h(n)?(e.each(n,function(e,n){
i.off(e,t,n);
}),i):(h(t)||v(r)||r===!1||(r=t,t=p),r===!1&&(r=z),i.each(function(){
s(this,n,r,t);
}));
},e.fn.trigger=function(n,t){
return n=h(n)||e.isPlainObject(n)?e.Event(n):c(n),n._args=t,this.each(function(){
"dispatchEvent"in this?this.dispatchEvent(n):e(this).triggerHandler(n,t);
});
},e.fn.triggerHandler=function(n,r){
var i,o;
return this.each(function(u,a){
i=f(h(n)?e.Event(n):n),i._args=r,i.target=a,e.each(t(a,n.type||n),function(e,n){
return o=n.proxy(i),i.isImmediatePropagationStopped()?!1:void 0;
});
}),o;
},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){
e.fn[n]=function(e){
return e?this.bind(n,e):this.trigger(n);
};
}),["focus","blur"].forEach(function(n){
e.fn[n]=function(e){
return e?this.bind(n,e):this.each(function(){
try{
this[n]();
}catch(e){}
}),this;
};
}),e.Event=function(e,n){
h(e)||(n=e,e=n.type);
var t=document.createEvent(m[e]||"Events"),r=!0;
if(n)for(var i in n)"bubbles"==i?r=!!n[i]:t[i]=n[i];
return t.initEvent(e,r,!0),c(t);
};
}(Zepto);
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var o=arguments[t];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);
}
return e;
};
define("pages_new/common_share/video/player/plugins/auto_next/auto_next_store.js",["biz_wap/jsapi/log.js","pages/utils.js","common/comm_report.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
var t=e("biz_wap/jsapi/log.js"),o=e("pages/utils.js"),n=e("common/comm_report.js"),s=e("biz_wap/utils/jsmonitor_report.js");
return{
name:"auto-next-plugin",
namespaced:!0,
state:function(){
return{
autoNextStatus:0
};
},
getters:{
nextVideo:function(e,t,o){
var n=o.extRes;
if(n.related_tag_video&&n.related_tag_video.length)for(var s=0;s<n.related_tag_video.length;s++){
var a=n.related_tag_video[s];
if(1!==a.user_read_status)return{
source:1,
vid:a.vid,
url:a.url,
recInfo:a.rec_info,
title:a.title||"更多精彩视频",
cover:a.cover||"",
headImg:a.head_img_url||"",
bizNickName:a.srcDisplayName||""
};
}
return null;
},
report17149Data:function(e,t,n){
var s=n.cgiData,a=n.extRes;
return{
BizUserName:s.biz,
MsgId:1*s.mid,
Idx:1*s.idx,
EnterId:s.enterid,
VideoId:s.vid,
Scene:s.scene,
Subscene:1*s.subscene,
SessionIdStr:s.sessionid,
ChannelSessionId:s.channel_session_id,
ContinueId:s.continueid+"",
ReloadId:s.reloadid+"",
Device:s.devicetype,
ContinueSource:t.nextVideo&&t.nextVideo.source||0,
MoreVideosInfo:t.nextVideo&&o.getMoreVideoInfo(t.nextVideo.url,t.nextVideo.vid)||"",
VideoRecommendType:a.video_recommend_type||0,
MoreVideoSortId:a.more_video_sort_id||0,
MoreVideosSeq:s.continueseq,
MoreVideoRecInfo:t.nextVideo&&t.nextVideo.recInfo||""
};
}
},
mutations:{
setAutoNextStatus:function(e,t){
e.autoNextStatus=t.value;
}
},
actions:{
cancelAutoNext:function(e,o){
var n=e.commit,s=e.state,a=e.dispatch;
0===s.autoNextStatus?(n("setAutoNextStatus",{
value:4
}),console.log("[AutoNext Plugin] Cancel autonext for reason "+o+" before tips show"),
t.info("cancel autonext for reason "+o+" before tips show")):a("cancelAutoNextWhenTipsShowed",o);
},
resumeAutoNext:function(e){
var o=e.commit,n=e.state;
4===n.autoNextStatus&&(o("setAutoNextStatus",{
value:0
}),console.log("[AutoNext Plugin] Resume autonext"),t.info("resume autonext"));
},
cancelAutoNextWhenTipsShowed:function(e,o){
var n=e.dispatch,a=e.state;
if(1===a.autoNextStatus){
n("hideTips");
var i=function(){
s.setSum(221764,28,1),n("report17149",{
EventType:87,
ContinueBreakReason:o
});
};
3===o?setTimeout(i):i(),console.log("[AutoNext Plugin] Cancel autonext for reason "+o+" when tips showed"),
t.info("cancel autonext for reason "+o+" when tips showed");
}
},
showTips:function(e){
var t=e.dispatch,o=e.commit,n=e.state;
0===n.autoNextStatus&&(o("setAutoNextStatus",{
value:1
}),s.setSum(221764,25,1),t("report17149",{
EventType:86
}));
},
hideTips:function(e){
var t=e.commit,o=e.state;
1===o.autoNextStatus&&t("setAutoNextStatus",{
value:3
});
},
report17149:function(e,t){
var o=e.getters,s=_extends({},o.report17149Data,t);
n.report(17149,s);
}
}
};
});define("pages_new/common_share/video/player/plugins/after_ad/after_ad_store.js",[],function(){
"use strict";
return{
name:"after-ad-plugin",
namespaced:!0,
state:function(){
return{
afterAdStatus:0
};
},
mutations:{
setAfterAdStatus:function(t,e){
t.afterAdStatus=e.value;
}
}
};
});