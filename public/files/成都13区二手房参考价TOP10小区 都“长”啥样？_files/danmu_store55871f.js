define("appmsg/emotion/emotion.html.js",[],function(){
return'<# (function() { #>\n  <# for (var pageIdx = 0, count = 1; pageIdx < pageCount; pageIdx++) { #>\n    <ul class="emotion_list" style="float: left; width: <#=width#>px; padding-left: <#=gap#>px; padding-right: 0;">\n      <# for (var emotionIdx = 0; emotionIdx < onePageCount; emotionIdx++, count++) { #>\n        <# if (count > emotionsCount) break; #>\n        <li class="emotion_item js_emotion_item" data-index="<#=count#>" style="width: <#=emotionLiSize#>px; height: <#=emotionLiSize#>px;">\n          <i class="icon_emotion icon<#=count#>" style="background-position: 0px <#=(1 - count) * emotionSize#>px;"></i>\n        </li>\n      <# } #>\n\n      <li class="emotion_item del js_emotion_item" data-index="-1" style="width: <#=emotionLiSize#>px; height: <#=emotionLiSize#>px; right: <#=gap#>px;">\n        <i class="icon_emotion del"></i>\n      </li>\n    </ul>\n  <# } #>\n<# })(); #>';
});define("biz_common/utils/emoji_panel_data.js",[],function(){
"use strict";
return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"17_1",18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,54,300,301,302,303,304,305,306,307,204,205,202,206,212,211,313,314,315,316,317,318,319,320,321,322,323,330,329,328,327,326,325,65,66,67,78,79,80,81,82,83,84,85,89,309,310,56,57,60,68,63,64,55,70,74,75,76,311,77,209,324,215,62,308,92,93,94,95];
});function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function e(e,t){
for(var n=0;n<t.length;n++){
var a=t[n];
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a);
}
}
return function(t,n,a){
return n&&e(t.prototype,n),a&&e(t,a),t;
};
}();
define("appmsg/emotion/textarea.js",["appmsg/emotion/dom.js","appmsg/emotion/caret.js","biz_common/dom/class.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js"],function(e){
"use strict";
function t(e){
for(var t=0,n=l.length;n>t;t++)if(l[t]===e)return!0;
return!1;
}
for(var n=e("appmsg/emotion/dom.js"),a=e("appmsg/emotion/caret.js"),i=e("biz_common/dom/class.js"),s=e("biz_common/utils/emoji_data.js"),r=e("biz_common/utils/emoji_panel_data.js"),o={},l=[],u=0;u<s.length;u++){
var c=s[u];
o[c.id]=c;
}
for(var u=0;u<r.length;u++)l.push(o[r[u]].cn);
var m=function(){
function e(t){
_classCallCheck(this,e),this.textarea=t.inputArea,this.submitBtn=t.submitBtn,this.makeTextAreaFast(),
this.listenDelete();
}
return _createClass(e,[{
key:"insertEmotion",
value:function(e){
var t=this.textarea.el[0],i=a.get(t),s=t.value;
s=s.slice(0,i)+e+s.slice(i),t.value=s,a.set(t,i+e.length+1),t.blur(),n.later(function(){
t.blur();
}),this.setBtn(s);
}
},{
key:"makeTextAreaFast",
value:function(){
var e="translate3d(0, 0, 0)";
this.textarea.css({
webkitTransform:e,
transform:e
});
}
},{
key:"listenDelete",
value:function(){
var e=this,t=8;
this.textarea.on("keydown",function(n){
n.keyCode===t&&e.deleteEmotion(!0)&&n.preventDefault();
});
}
},{
key:"deleteEmotion",
value:function(e){
function i(){
var e=r-1;
0>e&&(e=0);
var t=o.slice(0,e),n=o.slice(r);
s.value=t+n,a.set(s,e);
}
var s=this.textarea.el[0],r=a.get(s),o=s.value,l=4,u=r-l;
0>u&&(u=0,l=r-u);
var c=o.slice(u,r),m=c.match(/\[([\u4e00-\u9fa5\w]+)\]$/g);
if(m){
var f=m[0],v=l-f.length,h=f.replace("[","").replace("]","");
if(t(h)){
var b=c.replace(f,""),d=o.slice(0,u)+b+o.slice(r);
s.value=d,a.set(s,u+v);
}else{
if(e)return!1;
i();
}
}else{
if(e)return!1;
i();
}
return e?(s.focus(),n.later(function(){
s.focus();
})):(s.blur(),n.later(function(){
s.blur();
})),this.setBtn(s.value),!0;
}
},{
key:"setBtn",
value:function(e){
if(this.submitBtn){
var t=this.submitBtn.el[0];
e.length<1?i.addClass(t,"btn_disabled"):i.removeClass(t,"btn_disabled");
}
}
},{
key:"inputEmotion",
value:function(e,t){
-1===e?this.deleteEmotion(t):this.insertEmotion(l[e-1]);
}
}]),e;
}();
return m;
});define("appmsg/emotion/nav.js",["appmsg/emotion/dom.js"],function(n){
"use strict";
function t(n,t){
o.each(t,function(o,a){
a===n?t[a].attr("class","emotion_nav current"):t[a].attr("class","emotion_nav");
});
}
var o=n("appmsg/emotion/dom.js");
return{
activeNav:t
};
});define("appmsg/emotion/common.js",[],function(){
"use strict";
return{
EMOTIONS_COUNT:117,
EMOTION_LI_SIZE:36,
EMOTION_SIZE:23.37
};
});function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function t(t,e){
for(var i=0;i<e.length;i++){
var n=e[i];
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);
}
}
return function(e,i,n){
return i&&t(e.prototype,i),n&&t(e,n),e;
};
}();
define("appmsg/emotion/slide.js",["appmsg/emotion/nav.js"],function(t){
"use strict";
function e(t){
return t.touches&&t.touches.length>0?t.touches[0].clientX:t.clientX;
}
var i=t("appmsg/emotion/nav.js"),n=300,a=!1,r=void 0,s=!1,o=function(){
function t(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
_classCallCheck(this,t),this.currentPage=0,this.distX=0,this.opt=e,this.wrapper=e.emotionSlideWrapper,
this.commonWidth=e.commonWidth,r=-e.wrapperWidth+this.commonWidth,this.listenAndSlide();
var i="translate3d(0, 0, 0)";
this.wrapper.css({
webkitTransform:i,
transform:i
});
}
return _createClass(t,[{
key:"moveWrapper",
value:function(){
var t=this.commonWidth,e=t/4,i=-this.currentPage*t+this.distX;
i>e?i=e:r-e>i&&(i=r-e);
var n="translate3d("+i+"px, 0, 0)";
this.wrapper.css({
webkitTransform:n,
transform:n
});
}
},{
key:"addAnimation",
value:function(){
var t="all 0.3s ease";
this.wrapper.css({
transition:t,
webkitTransition:t
});
}
},{
key:"removeAnimation",
value:function(){
var t=this.wrapper.el[0].style;
t.transition="",t.webkitTransition="";
}
},{
key:"animateTo",
value:function(t){
var e=this;
a=!0,this.addAnimation(),this.moveWrapper(),setTimeout(function(){
a=!1,e.removeAnimation();
},n),i.activeNav(t,this.opt.navs);
}
},{
key:"slideToCertainPage",
value:function(){
var t=this.commonWidth,e=55,i=parseInt(this.distX/t,10),n=this.distX%t;
this.currentPage-=i,Math.abs(n)>e&&(this.currentPage-=Math.abs(n)/n*1),this.currentPage>this.opt.pageCount-1?this.currentPage=this.opt.pageCount-1:this.currentPage<0&&(this.currentPage=0),
this.distX=0,this.animateTo(this.currentPage);
}
},{
key:"listenAndSlide",
value:function(){
var t=this,i=void 0,n=void 0,r=function(n){
n.preventDefault(),n.stopPropagation(),a||(s=!0,i=e(n),t.isMoved=!1);
},o=function(){
a||(s=!1,t.slideToCertainPage());
},u=function(r){
r.preventDefault(),r.stopPropagation(),!a&&s&&(n=e(r),t.distX=n-i,t.moveWrapper(),
Math.abs(t.distX)>6&&(t.isMoved=!0));
};
this.wrapper.on("touchstart",r),this.wrapper.on("mousedown",r),this.wrapper.on("touchmove",u),
this.wrapper.on("mousemove",u),this.wrapper.on("touchend",o),this.wrapper.on("mouseup",o);
}
}]),t;
}();
return o;
});define("pages/audition_tpl.html.js",[],function(){
return'<div id="js_music_dialog">\n    <div class="weui-mask"></div>\n    <div class="weui-dialog">\n        <div class="weui-dialog__bd"><#=msg#></div>\n        <div class="weui-dialog__ft">\n            <a href="javascript:void(0);" class="weui-dialog__btn weui-dialog__btn_primary js_submit">我知道了</a>\n        </div>\n    </div>\n</div>';
});define("pages/musicUrlReport.js",["biz_wap/utils/ajax.js"],function(s){
"use strict";
var e=s("biz_wap/utils/ajax.js"),r=function(){
var s=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=[""];
r.push(1*s.type===1?1:2),r.push(s.songid||""),r.push(s.musicid||""),r.push(s.jumpurlkey||""),
r.push(""),r.push(s.kugouParams||"");
for(var t=encodeURIComponent(s.responseData||""),u=2e3,a=parseInt(t.length/u,10),p=0;a>=p;p++){
var n=t.substr(p*u,u);
n&&r.push(n);
}
e({
url:"/mp/webcommreport?action=report",
type:"POST",
data:{
logid:18027,
buffer:r.join(",")
}
});
};
return{
reportRespData:r
};
});define("pages/music_report_conf.js",[],function(){
"use strict";
return{
m_pv:"28306_0",
m_wx_pv:"28306_1",
m_h5_pv:"28306_2",
m_unload_wx_pv:"28306_3",
v_pv:"28306_4",
v_wx_pv:"28306_5",
v_h5_pv:"28306_6",
v_unload_wx_pv:"28306_7",
force_h5:"28306_30",
m_h5_err_total:"28306_31",
m_h5_err_1:"28306_32",
m_h5_err_2:"28306_33",
m_h5_err_3:"28306_34",
m_h5_err_4:"28306_35",
m_h5_err_5:"28306_36",
v_h5_err_total:"28306_37",
v_h5_err_1:"28306_38",
v_h5_err_2:"28306_39",
v_h5_err_3:"28306_40",
v_h5_err_4:"28306_41",
v_h5_err_5:"28306_42",
m_wx_pv_2:"28306_43",
v_wx_pv_2:"28306_44",
m_wx_pv_1:"28306_50",
v_wx_pv_1:"28306_55",
m_wx_err_1:"28306_58",
m_wx_err_2:"28306_59",
v_wx_err_1:"28306_60",
v_wx_err_2:"28306_61",
v_stoped_android:"59288_1",
v_stoped_ios:"59288_0",
v_paused_android:"59288_7",
v_paused_ios:"59288_6",
m_stoped_android:"59288_3",
m_stoped_ios:"59288_2",
m_paused_android:"59288_9",
m_paused_ios:"59288_8",
k_stoped_android:"59288_5",
k_stoped_ios:"59288_4",
k_paused_android:"59288_11",
k_paused_ios:"59288_10",
k_pv:"28306_66",
k_wx_pv:"28306_67",
k_h5_pv:"28306_69",
k_unload_wx_pv:"28306_71",
k_h5_err_total:"28306_72",
k_h5_err_1:"28306_74",
k_h5_err_2:"28306_75",
k_h5_err_3:"28306_76",
k_h5_err_4:"28306_77",
k_h5_err_5:"28306_78",
k_wx_pv_1:"28306_79",
k_wx_pv_2:"28306_81",
k_wx_err_1:"28306_83",
k_wx_err_2:"28306_85",
aac_pv:"28306_104",
ios_aac_err_1:"28306_106",
ios_aac_err_2:"28306_108",
android_aac_err_1:"28306_110",
android_aac_err_2:"28306_112",
v_seek_err:"28306_114",
android_aac_err_3:"28306_116",
ios_aac_err_3:"28306_118",
QMClient_pv:"62866_0",
QMClient_play:"62866_1",
QMClient_js_num:"62866_2",
QMClient_js_suc:"62866_3",
QMClient_js_err:"62866_5",
QMClient_js_timeout:"62866_7",
QMClient_js_network:"62866_9"
};
});define("pages/report.js",["biz_wap/utils/ajax.js","pages/version4video.js"],function(e){
"use strict";
function i(e){
var i=["/mp/pagereport?type=","undefined"==typeof e.type?1:e.type,"&comment_id=",e.comment_id||"","&voiceid=",e.voiceid||"","&action=",e.action,"&__biz=",s.biz||"","&mid=",s.mid||"","&idx=",s.idx||"","&scene=",s.scene||"","&t=",Math.random()].join("");
_({
type:"GET",
url:i,
timeout:2e4
});
}
function t(e){
_({
type:"POST",
url:"/mp/videoreport?",
timeout:5e3,
async:e.async===!0?!0:!1,
data:e.data
});
}
function o(e){
for(var i=JSON.parse(JSON.stringify(e.data)),t=[],o=0,n=i.seek_position.length;n>o;o++){
var a=i.seek_position[o];
if(a&&a.length>0){
var d=a.join("#");
t.push(d||"");
}else t.push("");
}
i.seek_position=t;
for(var r=[],o=0,n=i.seek_loaded.length;n>o;o++){
var a=i.seek_loaded[o];
if(a&&a.length>0){
var d=a.join(",");
r.push(d||"");
}else r.push("");
}
i.seek_loaded=r;
for(var p=[],c=30;i.musicid.length>0;){
var a={};
for(var o in i)i.hasOwnProperty(o)&&("[object Array]"==Object.prototype.toString.call(i[o])?(a[o]=i[o].splice(0,c),
a[o]=a[o].join("mtitle"==o?";#":";")):a[o]=i[o]);
p.push(a);
}
return p;
}
function n(e){
var i=window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",t=encodeURIComponent(s.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),o=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=1009&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=",d(),"&val=","undefined"!=typeof e.val?e.val:"","&val1=","undefined"!=typeof e.val1?e.val1:"","&vurl=",encodeURIComponent(e.vurl),"&t=",Math.random(),"&url=",t,"&wx_openid=",i].join(""),n=new Image;
n.src=o.substr(0,1024);
}
function a(e){
if(3==e.step||6==e.step||1999==e.step){
var i=window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",t=encodeURIComponent(s.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),o=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=",e.step,"&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=",d(),"&loadwait=","undefined"!=typeof e.loadwait?e.loadwait:"","&val=","undefined"!=typeof e.val?e.val:"","&t=",Math.random(),"&url=",t,"undefined"!=typeof e.vt&&""!==e.vt&&6==e.step?"&vt="+e.vt:"","&wx_openid=",i].join(""),n=new Image;
n.src=o.substr(0,1024);
}
}
function d(){
var e=v.device;
return e.ipad?60101:e.is_android_phone?60301:e.iphone?60401:e.is_android_tablet?60501:"";
}
function r(){
var e=v.device;
return e.ipad?"v4010":e.is_android_phone&&v.isUseProxy()?"v5060":e.is_android_phone?"v5060":e.iphone&&v.isUseProxy()?"v3060":e.iphone?"v3060":e.is_android_tablet?"v6010":"";
}
function p(e){
var i={
mid:window.mid||0,
__biz:window.biz||0,
idx:window.idx||0,
musicid:[],
hasended:[],
commentid:[],
scene_type:e.type||0,
mtitle:[],
detail_click:[],
app_btn_kv:0,
app_btn_click:0,
app_btn_type:0,
errorcode:[],
seek:[],
seek_position:[],
duration2:[],
play_duration2:[],
play_last_time:[],
local_time:[],
seek_loaded:[]
};
return i;
}
function c(){
var e={
videoerror:0,
like_kv_vid:"",
like_click_vid:"",
like_kv_alginfo:"",
like_click_alginfo:"",
tad:"",
page:0,
like_click_type:0,
iplat:2,
ptype:1,
rtype:"",
getvinfo_ret:-1,
getvinfo_time:0,
v_err_code:0,
loadwait:0,
hasended:0,
last_ms:0,
duration_ms:0,
app_btn_kv:0,
app_btn_click:0,
app_btn_type:0,
mid:"",
__biz:"",
idx:"",
detail_click:0,
vtitle:"",
vid:"",
commentid:"",
scene_type:0,
replay:0,
full_screen:0,
quick_play:0,
ad_play_time:-1,
video_play_time:-1,
click_play_button:0,
traceid:"",
webviewid:"",
orderid:0,
play_time:0,
client_time_when_play:Math.round(+new Date/1e3),
drag_times:"",
pause_num:0,
h5_profile:0,
to_article:0,
desc_more_click:0,
desc_more_show:0,
fromid:0,
openid:window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",
file_size:0,
rate:0,
resolution:0,
format:"",
vt:"",
video_ext:"unknown",
content_url:s.location.href,
auto_play:0,
ori_status:3,
hit_bizuin:"",
sessionid:window.sessionid||"",
hit_vid:""
};
return e;
}
function l(e,i,t){
var o=0,n=[],a={};
if(i&&"[object String]"==Object.prototype.toString.call(i))o=1,"img"==t&&(i=encodeURIComponent(i)),
n.push("log0="+i),a.log0=i;else if(i&&"[object Array]"==Object.prototype.toString.call(i)){
o=i.length;
for(var d=0;o>d;d++){
var r="img"==t?encodeURIComponent(i[d]):i[d];
n.push("log"+d+"="+r),a["log"+d]=r;
}
}
if("img"==t){
var p=new Image,c="//mp.weixin.qq.com/mp/jsmonitor?idkey="+e;
o>0&&(c+="&lc="+o+"&"+n.join("&")),c+="&t="+Math.random(),p.src=c;
}else{
var l={};
o>0&&(l=a),l.idkey=e,l.lc=o,_({
type:"POST",
url:"//mp.weixin.qq.com/mp/jsmonitor?",
timeout:1e4,
data:l,
dataType:"json"
});
}
}
var s=window.withoutIframe?window:window.parent.window,_=e("biz_wap/utils/ajax.js"),v=e("pages/version4video.js");
try{
{
s.location.href;
}
}catch(m){
s=window;
}
return{
report:i,
videoreport:t,
getPlatformType:d,
getsdtfrom:r,
getinfoReport:n,
qqvideo_common_report:a,
musicreport:o,
getMusicReportData:p,
getVideoReportData:c,
logReport:l
};
});define("pages/player_adaptor.js",["pages/music_player.js","biz_wap/utils/jsmonitor_report.js","pages/loadscript.js","pages/music_report_conf.js"],function(t){
"use strict";
function i(t,i){
0!=t.type&&1!=t.type||!p.inQMClient?"function"==typeof i.callback&&i.callback(new a.init(t)):(p.initPlayerQueue.push(e("QMClient",t,i)),
n("QMClient"));
}
function e(t,i,e){
var n=p.config[t].func;
return function(t,i,e,n){
return function(){
"function"==typeof window[i]?"function"==typeof n.callback&&n.callback(new o(e,{
type:t
})):"function"==typeof n.callback&&n.callback(new a.init(e));
};
}(t,n,i,e);
}
function n(t){
var i=p.config[t];
if(1!=i.jsLoadState){
if(2==i.jsLoadState||3==i.jsLoadState)return void r();
i.jsLoadState=1;
var e=+new Date,n=l[t+"_js_num"];
n&&(n=n.split("_"),u.setSum(n[0],n[1],1)),c({
url:i.jsLink,
timeout:1e4,
type:"JS",
callback:function(){
+new Date-e;
2==i.jsLoadState,r();
var n=l[t+"_js_suc"];
n&&(n=n.split("_"),u.setSum(n[0],n[1],1));
},
onerror:function(n){
+new Date-e;
i.jsLoadState=3,r();
var s=l[t+"_js_err"],o=l[t+"_js_timeout"],a=l[t+"_js_network"];
if(s&&o&&a)switch(s=s.split("_"),o=o.split("_"),a=a.split("_"),u.setSum(s[0],s[1],1),
1*n){
case 400:
u.setSum(a[0],a[1],1);
break;

case 500:
u.setSum(o[0],o[1],1);
}
}
});
}
}
function r(){
for(var t=0,i=p.initPlayerQueue.length;i>t;t++)"function"==typeof p.initPlayerQueue[t]&&p.initPlayerQueue[t]();
p.initPlayerQueue=[];
}
function s(){
for(var t in p.config)"function"==typeof p[t+"EvInit"]&&p[t+"EvInit"]();
}
function o(t,i){
if(this.opt=t,this.opt2=i,this._g={
_blockPlugin:{},
playType:"-1"
},"QMClient"==i.type&&p.inQMClient){
var e=p.config[i.type];
e.playerObj||(p.config[i.type].playerObj=new window[e.func]),this._g.playType=i.type,
this.player=e.playerObj,this._initPlugins(),this._bindQMEvent();
}
}
var a=t("pages/music_player.js"),u=t("biz_wap/utils/jsmonitor_report.js"),c=t("pages/loadscript.js"),l=t("pages/music_report_conf.js"),p={
debug:location.href.indexOf("_qqclient=1")>0?!0:!1,
config:{
QMClient:{
func:"Player",
playerObj:null,
jsLink:"https://imgcache.qq.com/music/h5/player/player.js?max_age=604800&v=1",
jsLoadState:-1
}
},
inQMClient:!1,
initPlayerQueue:[]
};
return p.QMClientEvInit=function(){
if(p.inQMClient=window.navigator.userAgent.indexOf("QQMusic/")>0||p.debug?!0:!1,
p.inQMClient&&window.msg_cdn_url&&window.msg_title){
var t=window.location.href,i=a.getQuery("scene",t);
i&&(t=t.replace("&scene="+i,"").replace("?scene="+i,"")),t=t.replace(/#rd$/,"").replace(/#wechat_redirect$/,""),
-1==t.indexOf("?")&&(t+="?"),t+="&scene=112#wechat_redirect";
var e=function(t){
window.WebViewJavascriptBridge?t():document.addEventListener("WebViewJavascriptBridgeReady",t);
},n=(window.msg_title||"").html(!1),r=(window.msg_desc||"").html(!1);
e(function(){
M.client.invoke("ui","setActionBtn",{
type:"icon",
content:"share"
},function(){
M.client.invoke("other","callShareWeb",{
imgUrl:window.msg_cdn_url,
link:t,
title:n,
desc:r
});
});
});
}
},s(),o.prototype={
_initPlugins:function(){
this.opt.plugins||(this.opt.plugins=[]);
for(var t=this.opt.plugins,i=0,e=t.length;e>i;++i){
var n=t[i];
n.setPlayer(this),!!n.init&&n.init();
}
},
_trigger:function(t,i){
var e=this.opt,n=this._g,r=e.plugins,s=n._blockPlugin[t]||n._blockPlugin.all,o=0;
if(s&&"function"==typeof s.recv&&(o|=s.recv(t,i),1&o))return!1;
for(var a=0,u=r.length;u>a&&(o|=r[a].recv(t,i),!(2&o));++a);
if(!(4&o)){
var c=this["__"+t+"Handler"];
c&&c.call(this,i);
}
8&o||this.__triggerOutside(t,i);
},
__triggerOutside:function(){
var t=arguments,i=t[0];
if(i){
i=i.substr(0,1).toUpperCase()+i.substr(1);
var e=this.opt["on"+i];
"function"==typeof e&&e.apply(this,t);
}
},
_setBlockPlugin:function(t,i){
this._g._blockPlugin[t]=i;
},
_bindQMEvent:function(){
var t=this;
this.player.on("play",function(i){
i&&i.song&&i.song.mid==t.opt.mid?(t._trigger("statusChange",1),t._trigger("QMClientPlay")):t._trigger("statusChange",3);
}),this.player.on("pause",function(i){
i&&i.song&&i.song.mid==t.opt.mid&&t._trigger("statusChange",2);
}),this.player.on("stop",function(i){
i&&i.song&&i.song.mid==t.opt.mid&&t._trigger("statusChange",3);
});
},
play:function(){
"QMClient"==this._g.playType&&this.player.play(this.opt.mid);
},
pause:function(){
this.player.pause();
},
stop:function(){
this.player.stop();
},
getDuration:function(){
return this.opt.duration?this.opt.duration:"QMClient"==this._g.playType?this.player.duration||0:0;
},
getCurTime:function(){
return"QMClient"==this._g.playType?this.player.currentTime||0:0;
},
surportSeekRange:function(){
return!1;
},
getSrc:function(){
return"";
},
destory:function(){},
seek:function(){},
setDuration:function(){},
setSrc:function(){}
},{
create:i,
inQMClient:p.inQMClient
};
});var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var i=arguments[e];
for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);
}
return t;
};
define("pages/music_player.js",["biz_wap/utils/mmversion.js","pages/report.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","pages/version4video.js","biz_wap/utils/jsmonitor_report.js","appmsg/log.js"],function(t){
"use strict";
function e(){
x.hasInit||(x.hasInit=!0,d(),c("onBackgroundAudioStateChange"),c("onTingAudioStateChanged"),
r());
}
function i(t){
var i=this;
e(),this._o={
plugins:[],
protocal:"",
wxIndex:0,
type:0,
src:"",
jsapi2Src:"",
mid:"",
autoPlay:!1,
duration:0,
needVioceMutex:!0,
title:"",
allowPause:!1,
singer:"",
epname:"",
coverImgUrl:"",
webUrl:"",
musicbar_url:"",
fileSize:0,
onStatusChange:function(){},
onTimeupdate:function(){},
onError:function(){},
onUpdateSeekRange:function(){},
albumId:"",
audioList:[],
playAudioId:"",
speedList:[],
articleCoverCdnUrl1_1:"",
albumInfo:{},
tingExtInfo:{}
},this._extend(t),this._o.audioList.length&&this._o.audioList.forEach(function(t){
t.srcId=x.wxtag+i._o.albumId+"_"+t.audioId;
}),this._status=-1,this._g={
mutexKey:"",
jsapiSrcId:"",
hasCheckPlay:!1,
playTimeoutId:null,
stateChangeCallback:{},
_blockPlugin:{},
hasInitH5Event:!1,
h5Event:{},
totalPlayTime:0,
hasPlayedDuration:0
},this._initPlugins(),this._fixAndroidSizeLimit(),0!==x.surportType&&(this._initData(),
this._synPlayStatus());
}
function o(t){
P.invoke("musicPlay",{
app_id:"a",
title:"微信公众平台",
singer:"微信公众平台",
epname:"微信公众平台",
coverImgUrl:"http://res.wx.qq.com/mpres/htmledition/images/favicon.ico",
dataUrl:x.ev,
lowbandUrl:x.ev,
webUrl:"http://mp.weixin.qq.com/s?"
},function(e){
"function"==typeof t&&t(e);
});
}
function a(t){
n({
cur:t,
stopCur:!1
});
}
function n(t){
function e(){
if(x.mutexCount==s&&(s=0,x.mutexCount=0,"function"==typeof a)){
var t=0;
1==x.surportType?t=2e3:3==x.surportType&&(t=0),setTimeout(function(){
a();
},t);
}
}
if(0!=x.mutexCount)return void setTimeout(function(){
n(t);
},200);
var i=t.cur,o=t.stopCur===!0?!0:!1,a=t.callback,s=0;
for(var u in x.mutexPlayers)for(var r=0,d=x.mutexPlayers[u].length;d>r;r++)s++;
for(var u in x.mutexPlayers)for(var r=0,d=x.mutexPlayers[u].length;d>r;r++){
var l=x.mutexPlayers[u][r];
if(l&&l!==i){
var p=l.getSurportType(),c="";
2!=p||1!=l._status&&4!=l._status?1!=p&&3!=p||1!=l._status&&2!=l._status&&4!=l._status||(c="stop"):c=l._o.allowPause?"pause":"stop",
c&&"function"==typeof l[c]?l[c](o,function(){
x.mutexCount++,e();
}):(x.mutexCount++,e());
}else x.mutexCount++,e();
}
}
function s(){
return x.surportType;
}
function u(t,e){
return new i(t,e);
}
function r(){
x.surportType>0&&x.isAndroidLow&&window.addEventListener("canplay",function(t){
t.target&&"function"==typeof t.target.play&&t.target.play();
},!0);
}
function d(){
x.jsapiGlobalEvent={
error:_,
pause:y,
stop:h,
play:g,
preempted:h,
waiting:f
};
}
function l(t){
return"&"+x.wxtag+"="+t;
}
function p(t,e){
e=e||"info";
var i="[musicplay]"+t+"[location:"+location.href+"]";
I(i,e);
}
function c(t){
P.on(t,function(t){
if(t.state){
var e;
t.albumId?(e=t.albumId,t.srcId=""):t.srcId&&t.audioId&&(e=t.srcId.match(new RegExp(x.wxtag+"(.*?)_"+t.audioId)))?(e=e[1],
t.srcId="",t.albumId=e):(e=v(x.wxtag,t.src)||"",e&&(e=l(e)));
var i=x.mutexPlayers[t.src]||x.mutexPlayers2[t.src]||x.mutexPlayers[e];
if(i){
var o;
if(t.srcId)for(var a=0,n=i.length;n>a;a++)i[a]._g.jsapiSrcId==t.srcId&&(o=i[a]);else if(1==i.length)o=i[0];else for(var a=0,n=i.length;n>a;a++)if(-1!=i[a]._status&&0!=i[a]._status&&3!=i[a]._status){
o=i[a];
break;
}
if(o&&o._g.stateChangeCallback){
t.albumId===o._o.albumId&&t.audioId!==o.getPlayAudioId()&&(o.setPlayAudioId(t.audioId),
o._initJsapiData());
var s=t.state,u=!1;
"ended"===s&&(s="stop",u=!0),"wait"==s&&(s="waiting");
var r=!1,d=JSON.stringify(t||{});
if("error"==s){
o.jsapiLog("onBackgroundAudioStateChange error;res:"+d);
for(var p in o._g.stateChangeCallback)o._g.stateChangeCallback.hasOwnProperty(p)&&"function"==typeof o._g.stateChangeCallback[p]&&(r=!0,
o._g.stateChangeCallback[p](-1,t.errMsg||""),o._g.stateChangeCallback[p]=null);
}else"function"==typeof o._g.stateChangeCallback[s]&&(x.debug,o.jsapiLog("onBackgroundAudioStateChange "+s+";res:"+d),
r=!0,o._g.stateChangeCallback[s](0),o._g.stateChangeCallback[s]=null);
r||"function"!=typeof x.jsapiGlobalEvent[s]||(o.jsapiLog("onBackgroundAudioStateChange "+s+" unHandle;res:"+d),
"stop"===s?x.jsapiGlobalEvent[s](t,o,u):x.jsapiGlobalEvent[s](t,o));
}
}
}
});
}
function _(t,e){
e.stop(!1),e._trigger("jsapi2PlayingErr");
}
function h(t,e,i){
e.stop(!1,null,t,i),e._trigger("jsapi2PlayingStop");
}
function y(t,e){
e.pause(!1,null,!0),e._trigger("jsapi2PlayingPause");
}
function g(t,e){
1!=e._status&&e.resume(!1,null,!0);
}
function f(t,e){
e.onload();
}
function m(){
for(var t in x.mutexPlayers)if(x.mutexPlayers.hasOwnProperty(t))for(var e=0,i=x.mutexPlayers[t].length;i>e;e++){
var o=x.mutexPlayers[t][e];
if(o&&1==o._status&&(1==o._surportType||3==o._surportType)){
o._trigger("unloadPlaying");
break;
}
}
}
function v(t){
var e=arguments[1]||window.location.search,i=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),o=e.substr(e.indexOf("?")+1).match(i);
return null!=o?o[2]:"";
}
function S(t,e,i){
function o(t,e){
for(;x.synPlayStatusArr.length>0;){
var i=x.synPlayStatusArr.shift();
i&&"function"==typeof i[t]&&i[t](e);
}
}
x.synPlayStatusArr.push({
_t:t,
onSuccess:e,
onError:i
}),x.synPlayStatusId&&clearTimeout(x.synPlayStatusId),x.synPlayStatusId=setTimeout(function(){
t._jsapi_getMusicPlayerState({
onSuccess:function(t){
o("onSuccess",t);
},
onError:function(t){
o("onError",t);
}
});
},0);
}
function A(t){
var e=1*t;
x.playbackRate=isNaN(e)?1:e;
}
function T(){
return x.playbackRate;
}
var b=t("biz_wap/utils/mmversion.js"),P=(t("pages/report.js"),t("biz_common/dom/event.js"),
t("biz_wap/jsapi/core.js")),k=t("pages/version4video.js"),I=(t("biz_wap/utils/jsmonitor_report.js"),
t("appmsg/log.js")),x={
hasInit:!1,
synPlayStatusId:null,
synPlayStatusArr:[],
inWechat:!k.device.inWechat||k.device.inWindowWechat||k.device.inMacWechat?!1:!0,
mutexCount:0,
ev:0!=window._empty_v.indexOf(window.location.protocol)?"http:"+window._empty_v:window._empty_v,
debug:location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,
_playtype:1*v("_playtype")||0,
isAndroidLow:/android\s2\.3/i.test(navigator.userAgent),
isAndroid:b.isAndroid,
surportType:"addEventListener"in window?2:0,
mutexPlayers:{},
mutexPlayers2:{},
wxtag:"__wxtag__",
playbackRate:1,
autoplayAudioList:[],
autoplayAudioListLen:10
};
return i.prototype._initPlugins=function(){
for(var t=this._o.plugins,e=0,i=t.length;i>e;++e){
var o=t[e];
o.setPlayer(this),!!o.init&&o.init();
}
},i.prototype._trigger=function(t,e){
var i=this._o,o=this._g,a=i.plugins,n=o._blockPlugin[t]||o._blockPlugin.all,s=0;
if(n&&"function"==typeof n.recv&&(s|=n.recv(t,e),1&s))return!1;
for(var u=0,r=a.length;r>u&&(s|=a[u].recv(t,e),!(2&s));++u);
if(!(4&s)){
var d=this["__"+t+"Handler"];
d&&d.call(this,e);
}
8&s||this.__triggerOutside(t,e);
},i.prototype.__triggerOutside=function(){
var t=arguments,e=t[0];
if(e){
e=e.substr(0,1).toUpperCase()+e.substr(1);
var i=this._o["on"+e];
"function"==typeof i&&i.apply(this,t);
}
},i.prototype._setBlockPlugin=function(t,e){
this._g._blockPlugin[t]=e;
},i.prototype._synPlayStatus=function(){
function t(t){
if(s&&clearTimeout(s),n.hasCheckPlay===!0,n.hasCheckPlay=!0,o._surportType=3,x.surportType=3,
A(t.playbackRate),!!x.debug&&console.log("_synPlayStatus mutexKey:"+n.mutexKey),
t&&t.audioListState)try{
t.audioListState=JSON.parse(t.audioListState),t.albumId=t.audioListState.albumId;
}catch(i){}
if(a.albumId){
if(t.albumId&&a.albumId===t.albumId){
var u="waiting"==t.playState||"seeked"==t.playState||"seeking"==t.playState||"play"==t.playState;
o._onAlbumSync({
action:"updatePlayStatus",
isPlay:u
});
}else o._onAlbumSync({
action:"updatePlayStatus",
isPlay:!1
});
e(t);
}else if(t.src&&(a.src==t.src||t.src.indexOf(n.mutexKey)>=0)){
if(t.srcId){
if(t.srcId!=n.jsapiSrcId)return;
}else if(x.mutexPlayers[n.mutexKey].length>1&&x.mutexPlayers[n.mutexKey][0]!==o)return;
e(t);
}
}
function e(t){
o._initJsapiData({
curTime:t.currentTime,
bufferedPercent:t.bufferedPercent,
starTime:+new Date-1e3*t.currentTime
}),o._trigger("jsapi2Begin2Play",t);
var e=o.jsApiData,i="waiting"==t.playState||"seeked"==t.playState||"seeking"==t.playState||"play"==t.playState;
!t.paused||i?(o._onPlay(null,t),o._analogUpdateTime()):(o._onTimeupdate(null,e.curTime),
o._onPause()),o._getMusicPlayerState();
}
function i(){
s&&clearTimeout(s),n.hasCheckPlay!==!0&&(n.hasCheckPlay=!0,o._o.autoPlay&&o.play());
}
var o=this,a=this._o,n=this._g;
if(!x.inWechat||1*x._playtype>0)return n.hasCheckPlay=!0,void(o._o.autoPlay&&o.play());
var s;
S(o,t,i);
+new Date;
s=setTimeout(function(){
i();
},a.syncTimeout||1e4);
},i.prototype._fixAndroidSizeLimit=function(){
if(!(1*x._playtype>0)&&x.isAndroid){
var t=this._o;
!t.fileSize||t.fileSize>300||b.gtVersion("6.3.28",!0)||(this._trigger("androidForceH5"),
this._g._playtype=2);
}
},i.prototype._createAutoAndPlay=function(){
function t(){
function t(){
e._h5Audio.src=e._o.albumId&&e._o.playAudioId?e.getPlayAudioOpt().src:e._o.src;
}
e._trigger("h5Begin2Play"),e._h5Audio=document.createElement("audio"),e._initH5Data(!0),
e._H5bindEvent(!0),e._h5Audio.setAttribute("style","height:0;width:0;display:none"),
e._h5Audio.setAttribute("autoplay",""),e._status=0,e._onLoading(),x.isAndroidLow?(t(),
document.body.appendChild(e._h5Audio),e._h5Audio.load()):(document.body.appendChild(e._h5Audio),
setTimeout(function(){
t(),e._h5Audio.playbackRate=e._o.isAudio?x.playbackRate:1,e._h5Audio.play();
},0)),e._surportType=2;
}
var e=this;
x.inWechat?this._stopJsapiPlay(!0,function(){
t();
}):t();
},i.prototype._destoryH5Audio=function(){
this._h5Audio&&(-1!=this._status&&"function"==typeof this._h5Audio.pause&&this._h5Audio.pause(),
document.body.removeChild(this._h5Audio),this._h5Audio=null,this._status=-1);
},i.prototype._onLoading=function(t){
this._status=4;
try{
a(this);
}catch(t){}
"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._endCountTime();
},i.prototype._onPlay=function(){
{
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
}
this._status=1;
try{
a(this);
}catch(t){}
"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t,this._status),
this._startCountTime();
},i.prototype._onPause=function(t){
this._status=2,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._endCountTime();
},i.prototype._onAlbumSync=function(t){
"function"==typeof this._o.onAlbumSync&&this._o.onAlbumSync.call(this,t||{});
},i.prototype.getAudioListState=function(t,e){
var i=function(t){
if(t&&t.audioListState){
if("string"==typeof t.audioListState)try{
t.audioListState=JSON.parse(t.audioListState);
}catch(i){
t.audioListState={};
}
e(t.audioListState);
}
};
this.isTingSupportType()?P.invoke("getTingAudioState",{
albumId:t
},function(e){
/:ok$/.test(e.err_msg)?i(e):P.invoke("getBackgroundAudioState",{
albumId:t
},function(t){
i(t);
});
}):P.invoke("getBackgroundAudioState",{
albumId:t
},function(t){
i(t);
});
},i.prototype._onEnd=function(t){
var e=this,i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],a=i.audioId,n=void 0===a?"":a,s=x.autoplayAudioList[x.autoplayAudioList.length-1];
if(this._status=3,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status),
this._endCountTime(),o?this.updatePlayedDuration(0):this.updatePlayedDuration(),
this._o.albumId&&o&&s&&s.audioId===n){
var u=this._o.audioList&&this._o.audioList.findIndex(function(t){
return t.audioId===n;
});
u>-1&&!function(){
x.autoplayAudioList=e._o.audioList.slice(u+1,u+1+x.autoplayAudioListLen);
var t=e._o.audioList[u+1],i={
albumId:e._o.albumId+"",
playAudioId:t.audioId,
audioList:x.autoplayAudioList
};
e.isTingSupportType()?P.invoke("setTingAudioState",_extends({},i,{
albumName:e._o.albumInfo.albumName,
albumUrl:e._o.albumInfo.albumUrl,
username:e._o.userName||"",
extInfo:JSON.stringify(t.tingExtInfo||{})
}),function(t){
/:ok$/.test(t.err_msg)||P.invoke("setBackgroundAudioState",i);
}):P.invoke("setBackgroundAudioState",i);
}();
}
},i.prototype._onLoadedmetadata=function(t){
"function"==typeof this._o.onLoadedmetadata&&this._o.onLoadedmetadata.call(this,t||{});
},i.prototype._onUpdateSeekRange=function(t){
this.surportSeekRange()&&(t=Math.max(t,0),t=Math.min(t,100),"function"==typeof this._o.onUpdateSeekRange&&this._o.onUpdateSeekRange.call(this,t));
},i.prototype._onTimeupdate=function(t,e,i){
"function"!=typeof this._o.onTimeupdate||i||this._o.onTimeupdate.call(this,t||{},e),
e>0&&this._startCountTime();
},i.prototype._onError=function(t,e){
this._status=-1,"function"==typeof this._o.onError&&this._o.onError.call(this,t||{},e);
},i.prototype._initH5Event=function(){
var t=this,e=this._o,i=this._g;
if(!t._g.hasInitH5Event){
t._g.hasInitH5Event=!0;
var o=i.h5Event;
o.canplaythrough=function(e){
t._h5Audio&&(!!x.debug&&console.log("h5 canplaythrough"),t._h5Data.firstCanplaythrough=!0,
t._onPlay(e),t._onUpdateSeekRange(t._h5Data.downloadDuration||0));
},o.play=function(e){
t._h5Audio&&(!!x.debug&&console.log("h5 "+e.type),t._h5Data.firstCanplaythrough===!0&&(t._onPlay(e),
t._onUpdateSeekRange(t._h5Data.downloadDuration||0)));
},o.ended=function(e){
t._h5Audio&&(!!x.debug&&console.log("h5 ended"),t._onUpdateSeekRange(t._h5Data.downloadDuration),
t._onEnd(e));
},o.pause=function(e){
t._h5Audio&&(!!x.debug&&console.log("h5 pause"),t._o.allowPause!==!0||0==t._h5Audio.currentTime?t._onEnd(e):t._onPause(e));
},o.waiting=function(e){
t._h5Audio&&(!!x.debug&&console.log("h5 "+e.type),(1==t._status||2==t._status||4==t._status)&&t._onLoading(e));
};
var a,n=100;
o.seeking=function(e){
t._h5Audio&&(!!x.debug&&console.log("h5 "+e.type),(1==t._status||2==t._status||4==t._status)&&t._onLoading(e),
a=setTimeout(function(){
!!x.debug&&console.log("seek loading Timeout excute"),a=null,t._trigger("seekNeed2Load");
},n));
},o.seeked=function(e){
t._h5Audio&&(!!x.debug&&console.log("h5 seeked"),(1==t._status||2==t._status||4==t._status)&&(t._onPlay(e),
t._h5Audio.play()),a&&(clearTimeout(a),a=null,t._trigger("seekNotNeed2Load")));
},o.error=function(e){
var i=1*e.target.error.code||5;
(1>i||i>5)&&(i=5),t._trigger("h5Error",{
code:i
}),t._onError(e,{
type:1,
code:i
}),t._destoryH5Audio();
},o.timeupdate=function(i){
t._h5Audio&&((1==t._status||4==t._status)&&t._onUpdateSeekRange(t._getH5DownloadDuration()),
1==t._status&&t._onTimeupdate(i,t._h5Audio.currentTime),"undefined"!=typeof e.duration&&1*e.duration>0&&t._h5Audio.currentTime>=e.duration&&t._h5Stop());
},o.loadedmetadata=function(e){
t._h5Audio&&t._onLoadedmetadata(e);
};
}
},i.prototype._H5bindEvent=function(t){
var e=(this._o,this._g),i={
canplaythrough:"canplaythrough",
play:"play",
playing:"play",
ended:"ended",
pause:"pause",
seeking:"seeking",
waiting:"waiting",
seeked:"seeked",
error:"error"
};
try{
for(var o in i)i.hasOwnProperty(o)&&this._h5Audio.removeEventListener(o,e.h5Event[i[o]]);
this._h5Audio.removeEventListener("timeupdate",e.h5Event.timeupdate),this._h5Audio.removeEventListener("loadedmetadata",e.h5Event.loadedmetadata);
}catch(a){}
if(t){
for(var o in i)i.hasOwnProperty(o)&&this._h5Audio.addEventListener(o,e.h5Event[i[o]],!1);
"function"==typeof this._o.onTimeupdate&&this._h5Audio.addEventListener("timeupdate",e.h5Event.timeupdate,!1),
"function"==typeof this._o.onLoadedmetadata&&this._h5Audio.addEventListener("loadedmetadata",e.h5Event.loadedmetadata,!1);
}
},i.prototype._initData=function(){
var t=this._o;
this._createMutexKey(),x.mutexPlayers[this._g.mutexKey]?x.mutexPlayers[this._g.mutexKey].push(this):x.mutexPlayers[this._g.mutexKey]=[this],
t.jsapi2Src&&t.jsapi2Src!=t.src&&(x.mutexPlayers2[t.jsapi2Src]?x.mutexPlayers2[t.jsapi2Src].push(this):x.mutexPlayers2[t.jsapi2Src]=[this]),
this._initH5Event();
},i.prototype._createMutexKey=function(){
if(this._o.albumId)this._g.mutexKey=this._o.albumId,this._g.jsapiSrcId=x.wxtag+"_"+this._o.wxIndex;else{
var t=this._o.mid||"";
this._o.src?(this._g.mutexKey=this._o.src,this._g.jsapiSrcId=x.wxtag+"_"+this._o.wxIndex):(this._g.mutexKey=l(t),
this._g.jsapiSrcId=this._g.mutexKey+"_"+this._o.wxIndex);
}
},i.prototype._extend=function(t){
for(var e in t)this._o[e]=t[e];
},i.prototype._initH5Data=function(t){
this._h5Data={
firstCanplaythrough:t===!0?!1:!0,
downloadDuration:0,
lastPlaytime:null
};
},i.prototype._initJsapiData=function(t){
t=t||{},this.jsApiData&&(this.jsApiData.updateTimeoutId&&clearTimeout(this.jsApiData.updateTimeoutId),
this.jsApiData.getStatusId&&clearTimeout(this.jsApiData.getStatusId)),this.jsApiData={
getStatusId:null,
getStatusTime:t.getStatusTime||2500,
updateTimeoutId:null,
seeking:!1,
starTime:t.starTime||+new Date,
curTime:t.curTime||0,
bufferedPercent:t.bufferedPercent||0,
duration:this._o.duration||t.duration||void 0,
lastPlaytime:null,
albumId:"",
audioId:""
};
},i.prototype._getMusicPlayerState=function(){
var t=this,e=t._o,i=t.jsApiData;
i&&i.getStatusId&&clearTimeout(i.getStatusId),t._jsapi_getMusicPlayerState({
onSuccess:function(o){
if(o&&o.audioListState&&"string"==typeof o.audioListState)try{
o.audioListState=JSON.parse(o.audioListState),o.albumId=o.audioListState.albumId;
}catch(a){
o.audioListState={};
}
(o.albumId&&o.albumId===e.albumId||o.src==e.jsapi2Src||o.src==e.src)&&(i.curTime=o.currentTime,
i.starTime=+new Date-1e3*o.currentTime,i.bufferedPercent=o.bufferedPercent,i.albumId=o.albumId||"",
i.audioId=o.audioId||"",(1==t._status||2==t._status||4==t._status)&&(i.getStatusId=setTimeout(function(){
t._getMusicPlayerState();
},i.getStatusTime)),t._onUpdateSeekRange(i.bufferedPercent),1==o.paused&&1==t._status?(x.debug&&console.log("_getMusicPlayerState force syn"),
t._pauseJsapiPlay(!1)):0==o.paused&&2==t._status&&(x.debug&&console.log("_getMusicPlayerState force syn"),
t._resumeJsapiPlay(!1))),t._o.onMusicPlayerInfo&&t._o.onMusicPlayerInfo(o);
},
onError:function(){
i.getStatusId=setTimeout(function(){
t._getMusicPlayerState();
},i.getStatusTime);
}
});
},i.prototype._analogUpdateTime=function(t){
var e=this,i=e.jsApiData;
if(i){
if(i.updateTimeoutId&&clearTimeout(i.updateTimeoutId),1==e._status||2==e._status){
if(1==e._status&&(i.curTime=1*((+new Date-i.starTime)/1e3).toFixed(2)),i.curTime>=i.duration)return e._stopJsapiPlay(!1),
!0;
e._onTimeupdate(null,i.curTime,t);
}
return i.updateTimeoutId=setTimeout(function(){
e._analogUpdateTime();
},1e3),!1;
}
},i.prototype._jsapi_getMusicPlayerState=function(t){
var e=this,i=e._o,o=function(e){
if(!!x.debug&&console.log("getBackgroundAudioState log: "+JSON.stringify(e||{})),
/:ok$/.test(e.err_msg)){
if(e.paused=1*e.paused,e.currentTime=e.currentTime?(1*e.currentTime).toFixed(2):0,
e.buffered){
var o=Math.floor(e.buffered/i.duration*100);
o=Math.max(o,0),o=Math.min(o,100),e.bufferedPercent=o;
}else e.bufferedPercent=0;
"function"==typeof t.onSuccess&&t.onSuccess(e);
}else"function"==typeof t.onError&&t.onError(e);
};
this.isTingSupportType()?P.invoke("getTingAudioState",{},function(t){
/:ok$/.test(t.err_msg)?o(t):P.invoke("getBackgroundAudioState",{},function(t){
o(t);
});
}):P.invoke("getBackgroundAudioState",{},function(t){
o(t);
});
},i.prototype._jsapi_musicPlay=function(t){
if(this._h5Audio&&this._destoryH5Audio(),2==x._playtype)return void("function"==typeof t.onError&&t.onError({}));
var e=this,i=this._o;
this.jsapiLog("jsapi_musicPlay"),P.invoke("musicPlay",{
app_id:"a",
title:i.title,
singer:i.singer,
epname:i.epname,
coverImgUrl:i.coverImgUrl,
dataUrl:i.src,
lowbandUrl:i.src,
webUrl:i.webUrl
},function(o){
!!x.debug&&console.log("playlog:"+JSON.stringify(o||{})),o.err_msg.indexOf("ok")>=0?(e._trigger("jsapi1Begin2Play"),
e._surportType=1,x.surportType=1,e._initJsapiData(),e._onPlay(),"undefined"!=typeof i.duration&&1*i.duration>0&&e._analogUpdateTime(),
e._onUpdateSeekRange(0),"function"==typeof t.onSuccess&&t.onSuccess(o)):"function"==typeof t.onError&&t.onError(o);
});
},i.prototype._jsapi_setBackgroundAudioState=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this._h5Audio&&this._destoryH5Audio(),console.log("_playtype",x._playtype);
var e=t.onSuccess,i=t.onError,o=t.needStartMusicUI,a=t.playAudioId,n=t.playbackRate,s=t.startTime,u=void 0===s?0:s;
if("function"!=typeof e&&(e=function(){}),"function"!=typeof i&&(i=function(){}),
1*x._playtype>0){
var r={};
return r.err_code=1,void i(r);
}
var d=this,l=d._o,p=d._g;
console.log("invoke set setBackgroundAudioState with param",l),this.jsapiLog("jsapi_setBackgroundAudioState"),
n&&A(n);
var c=void 0,_=void 0;
if(l.albumId){
d.setPlayAudioId(a),l.audioList.forEach(function(t){
t.audioId===a?(t.stopTime>=0&&t.stopTime<t.duration&&(t.startTime=t.stopTime),t.stopTime>=t.duration&&(t.startTime=0)):t.startTime=0,
t.isaac&&(t.src+="&voice_type=1"),t.playbackRate=x.playbackRate;
});
var h=l.audioList&&l.audioList.findIndex(function(t){
return t.audioId===a;
}),y={};
h>-1?(y=l.audioList[h],x.autoplayAudioList=l.audioList.slice(h,h+x.autoplayAudioListLen)):x.autoplayAudioList=[],
c={
albumId:l.albumId,
playAudioId:a,
audioList:x.autoplayAudioList
},_=_extends({},c,{
albumName:l.albumInfo.albumName,
albumUrl:l.albumInfo.albumUrl,
username:l.userName||"",
extInfo:JSON.stringify(y.tingExtInfo||{})
});
}else c={
protocol:l.protocal||"",
src:l.jsapi2Src||l.src,
lowbandUrl:l.jsapi2Src||l.src,
title:l.title,
epname:l.epname,
singer:l.singer,
srcId:p.jsapiSrcId,
coverImgUrl:l.coverImgUrl,
webUrl:l.webUrl,
musicbar_url:l.musicbar_url||"",
needStartMusicUI:1*o>0?1:0,
playbackRate:l.isAudio?x.playbackRate:1,
startTime:u
},_={
audioList:[_extends({},c,{
audioId:p.jsapiSrcId,
singer:l.singer.endsWith("的语音")?l.singer.substring(0,l.singer.length-3):l.singer,
coverImgUrl:l.articleCoverCdnUrl1_1?l.articleCoverCdnUrl1_1:l.coverImgUrl
})],
albumId:l.albumInfo.albumId+"",
albumName:l.albumInfo.albumName,
albumUrl:l.albumInfo.albumUrl,
username:l.userName||"",
extInfo:JSON.stringify(l.tingExtInfo||{})
};
var g=function(t){
if(!!x.debug&&console.log("setBackgroundAudioState log: "+JSON.stringify(t||{})),
t.err_msg.indexOf("ok")>=0){
var a=1*d._status;
!o||1!==a&&2!==a&&4!==a?(e("waiting"),p.stateChangeCallback.play=function(t,o){
0==t?e("play"):0!==t&&i({
err_code:2,
err_msg:o||""
});
}):e();
}else t=t||{},t.err_code=1,i(t);
};
this.isTingSupportType()?P.invoke("setTingAudioState",_,function(t){
/:ok$/.test(t.err_msg)?g(t):P.invoke("setBackgroundAudioState",c,function(t){
g(t);
});
}):P.invoke("setBackgroundAudioState",c,function(t){
g(t);
});
},i.prototype._jsapi_operateBackgroundAudio=function(t){
var e=this,i=e._o,o=e._g,a=1*t.position||0,n=t.type;
this.jsapiLog("jsapi_operateBackgroundAudio;param:"+JSON.stringify(t||{}));
var s={
operationType:n,
currentTime:a
},u=function(e){
!!x.debug&&console.log("operateBackgroundAudio "+n+", position: "+a+", log: "+JSON.stringify(e||{})),
-1===e.err_msg.indexOf("ok")&&("function"==typeof t.onError&&t.onError(e),"seek"===n?(o.stateChangeCallback.seeking=null,
o.stateChangeCallback.seeked=null):o.stateChangeCallback[n]=null);
};
this.isTingSupportType()?P.invoke("operateTingAudio",_extends({},s,{
audioId:i.albumId?i.playAudioId:o.jsapiSrcId,
albumId:i.albumInfo.albumId+""
}),function(t){
/:ok$/.test(t.err_msg)?u(t):P.invoke("operateBackgroundAudio",s,function(t){
u(t);
});
}):P.invoke("operateBackgroundAudio",s,function(t){
u(t);
}),"seek"==n?(o.stateChangeCallback.seeking=function(e,i){
0==e&&"function"==typeof t.onSuccess?t.onSuccess("seeking",a):0!=e&&"function"==typeof t.onError&&t.onError({
err_msg:i||""
});
},o.stateChangeCallback.seeked=function(e,i){
0==e&&"function"==typeof t.onSuccess?t.onSuccess("seeked",a):0!=e&&"function"==typeof t.onError&&t.onError({
err_msg:i||""
});
}):o.stateChangeCallback[n]=function(e,i){
0==e&&"function"==typeof t.onSuccess?t.onSuccess():0!=e&&"function"==typeof t.onError&&t.onError({
err_msg:i||""
});
};
},i.prototype._jsapiPlay=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=this,i=(this._o,
this._g);
console.log("supporttype",x.surportType);
var o=t.onError,a=t.onSuccess,n=t.needStartMusicUI,s=t.playAudioId,u=t.playbackRate,r=t.startTime,d=t.isDoubleSpeed;
"function"!=typeof o&&(o=function(){}),"function"!=typeof a&&(a=function(){}),1==x.surportType?n?o():this._jsapi_musicPlay({
onError:function(){
e._h5Play({
playAudioId:s
});
}
}):this._jsapi_setBackgroundAudioState({
playAudioId:s,
needStartMusicUI:n,
playbackRate:u,
startTime:r||i.hasPlayedDuration,
onSuccess:function(t){
"waiting"===t?(e._trigger("jsapi2Begin2Play",t),e._initJsapiData(),e._surportType=3,
x.surportType=3,e._onLoading()):"play"===t&&(e._initJsapiData(),e._onPlay(),e._analogUpdateTime(!!d),
e._getMusicPlayerState(),e._trigger("jsapi2PlaySuccess")),"function"==typeof a&&(a(),
a=null,o=null);
},
onError:function(t){
t&&1==t.err_code&&!n?e._jsapi_musicPlay({
onError:function(){
e._h5Play({
playAudioId:s
});
}
}):(n||e._h5Play({
playAudioId:s
}),e._trigger("jsapi2Begin2PlayErr")),"function"==typeof o&&(o(),o=null,a=null);
}
});
},i.prototype._getJsapiDownloadSec=function(){
this._getMusicPlayerState();
var t=Math.floor(this._o.duration*this.jsApiData.bufferedPercent/100);
return!!x.debug&&console.log("downloadSec:"+t),t;
},i.prototype._jsapiSeek=function(t){
function e(){
a.seeking=!1,i._onPlay(),a.starTime=+new Date-1e3*x.seekingPosition,i._analogUpdateTime(),
i._getMusicPlayerState();
}
var i=this,o=this._g,a=(this._o,this.jsApiData),n=parseInt(t,10);
this._o.duration&&n>=this._o.duration&&(n=this._o.duration-1),a.getStatusId&&clearTimeout(a.getStatusId),
a.updateTimeoutId&&clearTimeout(a.updateTimeoutId),a.seekWaitId&&clearTimeout(a.seekWaitId),
a.seeking=!0;
var s,u,r=100;
x.seekingPosition=n,a.starTime=+new Date-1e3*x.seekingPosition,console.log("begin to seek to",n),
this._jsapi_operateBackgroundAudio({
type:"seek",
position:n,
onError:function(){
i._trigger("seekErr"),!!x.debug&&console.log("seek callback fail"),a.seeking=!1,
i._analogUpdateTime(),i._getMusicPlayerState();
},
onSuccess:function(t){
console.log("jsapi seek res is ",t),"seeking"==t?(!!x.debug&&console.log("seeking callback success"),
a.seeking=!0,o.stateChangeCallback.play=function(){
console.log("seeked to play"),s&&(clearTimeout(s),s=null),e();
},u=setTimeout(function(){
u=null,i._trigger("seekNeed2Load");
},r)):"seeked"==t&&((2==i._status||4==i._status)&&(s=setTimeout(function(){
!!x.debug&&console.log("setTimeout to play"),o.stateChangeCallback.play=null,a.seeking=!1,
a.curTime=n,i._resumeJsapiPlay(!0);
},1e3)),u&&(clearTimeout(u),u=null,i._trigger("seekNotNeed2Load")));
}
}),i._getMusicPlayerState();
},i.prototype._resumeJsapiPlay=function(t,e){
function i(t){
var e=o.jsApiData;
e.starTime=+new Date-1e3*e.curTime,o._onPlay(),o._analogUpdateTime(),o._getMusicPlayerState(),
"function"==typeof t&&t();
}
var o=this;
1==this._surportType?this._jsapiPlay():3==this._surportType&&(t?this._jsapi_operateBackgroundAudio({
type:"play",
onError:function(){
o._stopJsapiPlay(!1,function(){
o.play();
});
},
onSuccess:function(){
i(e);
}
}):i(e));
},i.prototype._pauseJsapiPlay=function(t,e,i){
function o(t){
var e=a.jsApiData;
a._analogUpdateTime(),a._getMusicPlayerState(),e&&(e.updateTimeoutId=null),t===!0&&e&&e.getStatusId&&clearTimeout(e.getStatusId),
1==a._status&&a._onPause();
}
var a=this;
return 2==a._status?(o(e),void("function"==typeof i&&i())):void(1==this._surportType?this._stopJsapiPlay(t,i):3==this._surportType&&(t?this._jsapi_operateBackgroundAudio({
type:"pause",
onSuccess:function(){
o(e),"function"==typeof i&&i();
},
onError:function(){
a._stopJsapiPlay(!0,i);
}
}):(o(e),"function"==typeof i&&i())));
},i.prototype._stopJsapiPlay=function(t,e,i,a){
function n(t,e){
s._onTimeupdate(null,0),s._onUpdateSeekRange(0),s._onEnd(null,e,a),s._initJsapiData(),
"function"==typeof t&&t();
}
{
var s=this;
s.jsApiData;
}
t?1==s._surportType?o(function(){
n(e);
}):s._jsapi_operateBackgroundAudio({
type:"stop",
onSuccess:function(){
n(e,i);
},
onError:function(){
n(e,i);
}
}):n(e,i);
},i.prototype._getH5DownloadSec=function(){
var t=Math.floor(this._o.duration*this._getH5DownloadDuration()/100);
return!!x.debug&&console.log("h5 downloadSec:"+t),t;
},i.prototype._getH5DownloadDuration=function(){
if(!this._h5Audio)return 0;
if(this._h5Data.downloadDuration>=100)return 100;
var t=this._h5Audio.buffered,e=t.end(t.length-1);
return this._h5Data.downloadDuration=this._o.albumId&&this._o.playAudioId?parseInt(e/this.getPlayAudioOpt().duration*100,10):parseInt(e/this._o.duration*100,10),
this._h5Data.downloadDuration;
},i.prototype._h5Play=function(t){
0!==x.surportType&&(this.jsapiLog("h5Play"),this.setPlayAudioId(t.playAudioId),this._h5Audio?(this._h5Audio.ended||this._h5Audio.paused)&&(this._trigger("h5Begin2Play"),
this._initH5Data(),this._onLoading(),this._H5bindEvent(!0),this._h5Audio.currentTime=0):this._createAutoAndPlay());
},i.prototype._h5Resume=function(){
this._h5Audio&&(this._h5Audio.playbackRate=x.playbackRate,this._h5Audio.play());
},i.prototype._h5Stop=function(){
this._h5Audio&&(this._onUpdateSeekRange(0),this._onEnd(),this._H5bindEvent(!1),this._h5Audio.pause(),
this._h5Audio.currentTime=0,this._initH5Data());
},i.prototype._h5Seek=function(t){
if(this._h5Audio){
var e=(this._h5Data,parseInt(t,10));
e=Math.min(e,this._o.duration),!!x.debug&&console.log("h5 seek position:"+e),this._h5Audio.currentTime=e;
}
},i.prototype._startCountTime=function(){
1!=this._surportType&&3!=this._surportType||!this.jsApiData?this._h5Audio&&this._h5Data&&null===this._h5Data.lastPlaytime&&(this._h5Data.lastPlaytime=this._h5Audio.currentTime):null===this.jsApiData.lastPlaytime&&(this.jsApiData.lastPlaytime=this.jsApiData.curTime);
},i.prototype._endCountTime=function(){
if(1!=this._surportType&&3!=this._surportType||!this.jsApiData){
if(this._h5Audio&&this._h5Data){
var t=this._h5Audio,e=this._h5Data;
t.currentTime>0&&t.currentTime>e.lastPlaytime&&null!==e.lastPlaytime&&(this._g.totalPlayTime+=t.currentTime-e.lastPlaytime),
e.lastPlaytime=null;
}
}else{
var i=this.jsApiData;
i.curTime>0&&i.curTime>i.lastPlaytime&&null!==i.lastPlaytime&&(this._g.totalPlayTime+=i.curTime-i.lastPlaytime),
i.lastPlaytime=null;
}
},i.prototype._delMutexPlayers=function(){
var t=this._o,e=this._g.mutexKey,i=x.mutexPlayers[e];
if(i){
for(var o=0,a=i.length;a>o;o++)if(i[o]===this){
i.splice(o,1);
break;
}
if(0==i.length)try{
delete x.mutexPlayers[e];
}catch(n){}
}
if(t.jsapi2Src&&x.mutexPlayers2[t.jsapi2Src]){
for(var s=x.mutexPlayers2[t.jsapi2Src],o=0,a=s.length;a>o;o++)if(s[o]===this){
s.splice(o,1);
break;
}
if(0==s.length)try{
delete x.mutexPlayers2[t.jsapi2Src];
}catch(n){}
}
},i.prototype.resetPlayTotalTime=function(){
this._g.totalPlayTime=0;
},i.prototype.getPlayTotalTime=function(){
return this._endCountTime(),this._g.totalPlayTime;
},i.prototype.surportSeekRange=function(){
return 1==x._playtype?!1:2==this._surportType||3==this._surportType?!0:!1;
},i.prototype.setSrc=function(t){
-1==t.indexOf("?")&&(t+="?"),t+=l(this._o.mid),this._o.src=t,this._delMutexPlayers(),
this._g.mutexKey=this._o.src,x.mutexPlayers[this._g.mutexKey]?x.mutexPlayers[this._g.mutexKey].push(this):x.mutexPlayers[this._g.mutexKey]=[this];
},i.prototype.getSrc=function(){
return this._o.src||"";
},i.prototype.setDuration=function(t){
this._o.duration=t||0;
},i.prototype.getSurportType=function(){
return this._surportType||0;
},i.prototype.getPlayStatus=function(){
return this._status;
},i.prototype.getCurTime=function(){
return 1!=this._surportType&&3!=this._surportType||!this.jsApiData?this._h5Audio?this._h5Audio.currentTime:0:this.jsApiData.curTime||0;
},i.prototype.getDuration=function(){
return this._o.duration||void 0;
},i.prototype.pause=function(t,e,i){
return i===!0||this._o.allowPause?void(1==this._surportType||3==this._surportType?this._pauseJsapiPlay(t===!1?!1:!0,!1,function(){
"function"==typeof e&&e();
},function(){
"function"==typeof e&&e();
}):2==this._surportType&&this._h5Audio&&"function"==typeof this._h5Audio.pause&&(this._h5Audio.pause(),
"function"==typeof e&&e())):void this.stop(t,e);
},i.prototype.stop=function(t,e,i,o){
return 1==this._surportType||3==this._surportType?void this._stopJsapiPlay(t===!1?!1:!0,e,i,o):(2==this._surportType&&this._h5Audio&&this._h5Stop(),
void("function"==typeof e&&e()));
},i.prototype.destory=function(){
this.stop(),this._h5Audio&&(document.body.removeChild(this._h5Audio),this._h5Audio=null),
this._delMutexPlayers();
},i.prototype.resume=function(t,e,i){
(i===!0||2==this._status&&this._o.allowPause)&&(2==this._surportType&&this._h5Audio?this._h5Resume():x.inWechat&&this._resumeJsapiPlay(t===!1?!1:!0));
},i.prototype.onload=function(){
this._onLoading();
},i.prototype.jsapiLog=function(t,e){
try{
var i=this._o,o={
type:i.type,
src:i.src,
mid:i.mid,
protocal:i.protocal,
webUrl:i.webUrl,
musicbar_url:i.musicbar_url
},a="["+JSON.stringify(o)+"]"+t;
p(a,e);
}catch(n){}
},i.prototype.openStartMusicUI=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=t.onError,i=t.onSuccess;
"function"!=typeof e&&(e=function(){}),"function"!=typeof i&&(i=function(){}),b.isWechat&&(b.isIOS||b.isAndroid)&&b.gtVersion("7.0.5",!0)?this._jsapiPlay({
needStartMusicUI:!0,
onError:function(){
e();
},
onSuccess:function(){
i();
}
}):e();
},i.prototype.play=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=this,i=this._g,o=t.playAudioId;
if(e._o.src||e._o.albumId){
if(2==e._status&&e._o.allowPause){
if(e._o.src)return void e.resume();
if(e._o.playAudioId&&e._o.playAudioId===o)return void e.resume();
}
return i.playTimeoutId&&clearTimeout(i.playTimeoutId),i.hasCheckPlay?void(x.inWechat?this._jsapiPlay({
playAudioId:o
}):0!=x.surportType&&this._h5Play({
playAudioId:o
})):void(i.playTimeoutId=setTimeout(function(){
e.play();
},1e3));
}
},i.prototype.seek=function(t){
{
var e=this;
this._g;
}
if(1==e._status||2==e._status||4==e._status)return 3==this._surportType?(this._endCountTime(),
void this._jsapiSeek(t)):2==this._surportType&&this._h5Audio?(this._endCountTime(),
void this._h5Seek(t)):void 0;
},i.prototype.getBackgroundAudioState=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=function(e){
!!x.debug&&console.log("getBackgroundAudioState log: "+JSON.stringify(e||{})),/:ok$/.test(e.err_msg)?(e.paused=1*e.paused,
"function"==typeof t.success&&t.success(e)):"function"==typeof t.error&&t.error(e);
};
this.isTingSupportType()?P.invoke("getTingAudioState",{},function(t){
/:ok$/.test(t.err_msg)?e(t):P.invoke("getBackgroundAudioState",{},function(t){
e(t);
});
}):P.invoke("getBackgroundAudioState",{},function(t){
e(t);
});
},i.prototype.setOption=function(t){
this._extend(t),t.duration&&this.jsApiData&&(this.jsApiData.duration=t.duration);
},i.prototype.reverseList=function(t){
this._o.audioList.reverse(),this.update(t);
},i.prototype.update=function(t){
if(1===this._status||4===this._status){
var e=this._o.playAudioId;
this._o.audioList.forEach(function(i){
i.startTime=t&&e&&i.audioId===e?t:0;
});
var i=this._o.audioList&&this._o.audioList.findIndex(function(t){
return t.audioId===e;
}),o={};
if(i>-1){
x.autoplayAudioList=this._o.audioList.slice(i,i+x.autoplayAudioListLen);
var a=this._o.audioList[i];
o=a.tingExtInfo;
}else x.autoplayAudioList=[];
var n={
albumId:this._o.albumId+"",
playAudioId:this._o.playAudioId||this.jsApiData.audioId,
audioList:x.autoplayAudioList
};
this.isTingSupportType()?P.invoke("setTingAudioState",_extends({},n,{
albumName:this._o.albumInfo.albumName,
albumUrl:this._o.albumInfo.albumUrl,
username:this._o.userName,
extInfo:JSON.stringify(o)
}),function(t){
/:ok$/.test(t.err_msg)||P.invoke("setBackgroundAudioState",n);
}):P.invoke("setBackgroundAudioState",n);
}
},i.prototype.getPlayAudioOpt=function(t){
if(t=t||this._o.playAudioId,!t)return null;
for(var e=0;e<this._o.audioList.length;e++)if(this._o.audioList[e].audioId===t)return this._o.audioList[e];
},i.prototype.getPlayAudioId=function(){
return this._o.playAudioId;
},i.prototype.setPlayAudioId=function(t){
this._o.playAudioId=t;
},i.prototype.doubleSpeed=function(t){
var e=t.succCallback,i=t.pcCallback,o=this,a=o._o.speedList;
x.inWechat?o.getBackgroundAudioState({
success:function(t){
var i=t.playbackRate,n=t.currentTime,s=a.findIndex(function(t){
return t===+i;
}),u=a[(s+1)%a.length];
o._jsapiPlay({
isDoubleSpeed:!0,
playbackRate:u,
startTime:+n,
onSuccess:function(){
x.isAndroid&&o.seek(+n),e();
}
});
}
}):!function(){
var t=o._h5Audio.playbackRate,n=a.findIndex(function(e){
return e===+t;
}),s=a[(n+1)%a.length];
A(s),o._h5Audio.playbackRate=s,o._h5Audio.play(),i(),e();
}();
},i.prototype.updatePlayedDuration=function(t){
return"undefined"!=typeof t?void(this._g.hasPlayedDuration=t):void(this._g.hasPlayedDuration=this.getCurTime());
},i.prototype.isTingSupportType=function(){
var t=this._o.type;
return 2===t||3===t||4===t||10===t;
},{
isAndroid:x.isAndroid,
init:u,
triggerUnloadPlaying:m,
getSurportType:s,
getQuery:v,
getPlaybackRate:T
};
});define("biz_wap/zepto/zepto.js",[],function(){
"use strict";
var t=function(){
function t(t){
return null==t?String(t):J[W.call(t)]||"object";
}
function n(n){
return"function"==t(n);
}
function e(t){
return null!=t&&t==t.window;
}
function i(t){
return null!=t&&t.nodeType==t.DOCUMENT_NODE;
}
function r(n){
return"object"==t(n);
}
function o(t){
return r(t)&&!e(t)&&Object.getPrototypeOf(t)==Object.prototype;
}
function s(t){
return t instanceof Array;
}
function u(t){
return"number"==typeof t.length;
}
function c(t){
return P.call(t,function(t){
return null!=t;
});
}
function a(t){
return t.length>0?C.fn.concat.apply([],t):t;
}
function l(t){
return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase();
}
function f(t){
return t in M?M[t]:M[t]=new RegExp("(^|\\s)"+t+"(\\s|$)");
}
function h(t,n){
return"number"!=typeof n||z[l(t)]?n:n+"px";
}
function p(t){
var n,e;
return j[t]||(n=L.createElement(t),L.body.appendChild(n),e=getComputedStyle(n,"").getPropertyValue("display"),
n.parentNode.removeChild(n),"none"==e&&(e="block"),j[t]=e),j[t];
}
function d(t){
return"children"in t?$.call(t.children):C.map(t.childNodes,function(t){
return 1==t.nodeType?t:void 0;
});
}
function g(t,n,e){
for(E in n)e&&(o(n[E])||s(n[E]))?(o(n[E])&&!o(t[E])&&(t[E]={}),s(n[E])&&!s(t[E])&&(t[E]=[]),
g(t[E],n[E],e)):n[E]!==x&&(t[E]=n[E]);
}
function m(t,n){
return null==n?C(t):C(t).filter(n);
}
function v(t,e,i,r){
return n(e)?e.call(t,i,r):e;
}
function y(t,n,e){
null==e?t.removeAttribute(n):t.setAttribute(n,e);
}
function b(t,n){
var e=t.className,i=e&&e.baseVal!==x;
return n===x?i?e.baseVal:e:void(i?e.baseVal=n:t.className=n);
}
function w(t){
var n;
try{
return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(n=Number(t))?/^[\[\{]/.test(t)?C.parseJSON(t):t:n):t;
}catch(e){
return t;
}
}
function N(t,n){
n(t);
for(var e in t.childNodes)N(t.childNodes[e],n);
}
var x,E,C,O,T,S,A=[],$=A.slice,P=A.filter,L=window.document,j={},M={},z={
"column-count":1,
columns:1,
"font-weight":1,
"line-height":1,
opacity:1,
"z-index":1,
zoom:1
},Z=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,B=/^(?:body|html)$/i,R=/([A-Z])/g,V=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],H=L.createElement("table"),I=L.createElement("tr"),U={
tr:L.createElement("tbody"),
tbody:H,
thead:H,
tfoot:H,
td:I,
th:I,
"*":L.createElement("div")
},_=/complete|loaded|interactive/,D=/^[\w-]*$/,J={},W=J.toString,X={},Y=L.createElement("div"),G={
tabindex:"tabIndex",
readonly:"readOnly",
"for":"htmlFor",
"class":"className",
maxlength:"maxLength",
cellspacing:"cellSpacing",
cellpadding:"cellPadding",
rowspan:"rowSpan",
colspan:"colSpan",
usemap:"useMap",
frameborder:"frameBorder",
contenteditable:"contentEditable"
};
X.matches=function(t,n){
if(!n||!t||1!==t.nodeType)return!1;
var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;
if(e)return e.call(t,n);
var i,r=t.parentNode,o=!r;
return o&&(r=Y).appendChild(t),i=~X.qsa(r,n).indexOf(t),o&&Y.removeChild(t),i;
},T=function(t){
return t.replace(/-+(.)?/g,function(t,n){
return n?n.toUpperCase():"";
});
},S=function(t){
return P.call(t,function(n,e){
return t.indexOf(n)==e;
});
},X.fragment=function(t,n,e){
var i,r,s;
return q.test(t)&&(i=C(L.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(k,"<$1></$2>")),
n===x&&(n=Z.test(t)&&RegExp.$1),n in U||(n="*"),s=U[n],s.innerHTML=""+t,i=C.each($.call(s.childNodes),function(){
s.removeChild(this);
})),o(e)&&(r=C(i),C.each(e,function(t,n){
V.indexOf(t)>-1?r[t](n):r.attr(t,n);
})),i;
},X.Z=function(t,n){
t=t||[];
for(var e in C.fn)t[e]=C.fn[e];
return t.selector=n||"",t;
},X.isZ=function(t){
return t instanceof X.Z;
},X.init=function(t,e){
var i;
if(!t)return X.Z();
if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Z.test(t))i=X.fragment(t,RegExp.$1,e),
t=null;else{
if(e!==x)return C(e).find(t);
i=X.qsa(L,t);
}else{
if(n(t))return C(L).ready(t);
if(X.isZ(t))return t;
if(s(t))i=c(t);else if(r(t))i=[t],t=null;else if(Z.test(t))i=X.fragment(t.trim(),RegExp.$1,e),
t=null;else{
if(e!==x)return C(e).find(t);
i=X.qsa(L,t);
}
}
return X.Z(i,t);
},C=function(t,n){
return X.init(t,n);
},C.extend=function(t){
var n,e=$.call(arguments,1);
return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){
g(t,e,n);
}),t;
},X.qsa=function(t,n){
var e,r="#"==n[0],o=!r&&"."==n[0],s=r||o?n.slice(1):n,u=D.test(s);
return i(t)&&u&&r?(e=t.getElementById(s))?[e]:[]:1!==t.nodeType&&9!==t.nodeType?[]:$.call(u&&!r?o?t.getElementsByClassName(s):t.getElementsByTagName(n):t.querySelectorAll(n));
},C.contains=function(t,n){
return t!==n&&t.contains(n);
},C.type=t,C.isFunction=n,C.isWindow=e,C.isArray=s,C.isPlainObject=o,C.isEmptyObject=function(t){
var n;
for(n in t)return!1;
return!0;
},C.inArray=function(t,n,e){
return A.indexOf.call(n,t,e);
},C.camelCase=T,C.trim=function(t){
return null==t?"":String.prototype.trim.call(t);
},C.uuid=0,C.support={},C.expr={},C.map=function(t,n){
var e,i,r,o=[];
if(u(t))for(i=0;i<t.length;i++)e=n(t[i],i),null!=e&&o.push(e);else for(r in t)e=n(t[r],r),
null!=e&&o.push(e);
return a(o);
},C.each=function(t,n){
var e,i;
if(u(t)){
for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t;
}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;
return t;
},C.grep=function(t,n){
return P.call(t,n);
},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){
J["[object "+n+"]"]=n.toLowerCase();
}),C.fn={
forEach:A.forEach,
reduce:A.reduce,
push:A.push,
sort:A.sort,
indexOf:A.indexOf,
concat:A.concat,
map:function(t){
return C(C.map(this,function(n,e){
return t.call(n,e,n);
}));
},
slice:function(){
return C($.apply(this,arguments));
},
ready:function(t){
return _.test(L.readyState)&&L.body?t(C):L.addEventListener("DOMContentLoaded",function(){
t(C);
},!1),this;
},
get:function(t){
return t===x?$.call(this):this[t>=0?t:t+this.length];
},
toArray:function(){
return this.get();
},
size:function(){
return this.length;
},
remove:function(){
return this.each(function(){
null!=this.parentNode&&this.parentNode.removeChild(this);
});
},
each:function(t){
return A.every.call(this,function(n,e){
return t.call(n,e,n)!==!1;
}),this;
},
filter:function(t){
return n(t)?this.not(this.not(t)):C(P.call(this,function(n){
return X.matches(n,t);
}));
},
add:function(t,n){
return C(S(this.concat(C(t,n))));
},
is:function(t){
return this.length>0&&X.matches(this[0],t);
},
not:function(t){
var e=[];
if(n(t)&&t.call!==x)this.each(function(n){
t.call(this,n)||e.push(this);
});else{
var i="string"==typeof t?this.filter(t):u(t)&&n(t.item)?$.call(t):C(t);
this.forEach(function(t){
i.indexOf(t)<0&&e.push(t);
});
}
return C(e);
},
has:function(t){
return this.filter(function(){
return r(t)?C.contains(this,t):C(this).find(t).size();
});
},
eq:function(t){
return-1===t?this.slice(t):this.slice(t,+t+1);
},
first:function(){
var t=this[0];
return t&&!r(t)?t:C(t);
},
last:function(){
var t=this[this.length-1];
return t&&!r(t)?t:C(t);
},
find:function(t){
var n,e=this;
return n="object"==typeof t?C(t).filter(function(){
var t=this;
return A.some.call(e,function(n){
return C.contains(n,t);
});
}):1==this.length?C(X.qsa(this[0],t)):this.map(function(){
return X.qsa(this,t);
});
},
closest:function(t,n){
var e=this[0],r=!1;
for("object"==typeof t&&(r=C(t));e&&!(r?r.indexOf(e)>=0:X.matches(e,t));)e=e!==n&&!i(e)&&e.parentNode;
return C(e);
},
parents:function(t){
for(var n=[],e=this;e.length>0;)e=C.map(e,function(t){
return(t=t.parentNode)&&!i(t)&&n.indexOf(t)<0?(n.push(t),t):void 0;
});
return m(n,t);
},
parent:function(t){
return m(S(this.pluck("parentNode")),t);
},
children:function(t){
return m(this.map(function(){
return d(this);
}),t);
},
contents:function(){
return this.map(function(){
return $.call(this.childNodes);
});
},
siblings:function(t){
return m(this.map(function(t,n){
return P.call(d(n.parentNode),function(t){
return t!==n;
});
}),t);
},
empty:function(){
return this.each(function(){
this.innerHTML="";
});
},
pluck:function(t){
return C.map(this,function(n){
return n[t];
});
},
show:function(){
return this.each(function(){
"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName));
});
},
replaceWith:function(t){
return this.before(t).remove();
},
wrap:function(t){
var e=n(t);
if(this[0]&&!e)var i=C(t).get(0),r=i.parentNode||this.length>1;
return this.each(function(n){
C(this).wrapAll(e?t.call(this,n):r?i.cloneNode(!0):i);
});
},
wrapAll:function(t){
if(this[0]){
C(this[0]).before(t=C(t));
for(var n;(n=t.children()).length;)t=n.first();
C(t).append(this);
}
return this;
},
wrapInner:function(t){
var e=n(t);
return this.each(function(n){
var i=C(this),r=i.contents(),o=e?t.call(this,n):t;
r.length?r.wrapAll(o):i.append(o);
});
},
unwrap:function(){
return this.parent().each(function(){
C(this).replaceWith(C(this).children());
}),this;
},
clone:function(){
return this.map(function(){
return this.cloneNode(!0);
});
},
hide:function(){
return this.css("display","none");
},
toggle:function(t){
return this.each(function(){
var n=C(this);
(t===x?"none"==n.css("display"):t)?n.show():n.hide();
});
},
prev:function(t){
return C(this.pluck("previousElementSibling")).filter(t||"*");
},
next:function(t){
return C(this.pluck("nextElementSibling")).filter(t||"*");
},
html:function(t){
return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(n){
var e=this.innerHTML;
C(this).empty().append(v(this,t,n,e));
});
},
text:function(t){
return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){
this.textContent=t===x?"":""+t;
});
},
attr:function(t,n){
var e;
return"string"==typeof t&&n===x?0==this.length||1!==this[0].nodeType?x:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(e=this[0].getAttribute(t))&&t in this[0]?this[0][t]:e:this.each(function(e){
if(1===this.nodeType)if(r(t))for(E in t)y(this,E,t[E]);else y(this,t,v(this,n,e,this.getAttribute(t)));
});
},
removeAttr:function(t){
return this.each(function(){
1===this.nodeType&&y(this,t);
});
},
prop:function(t,n){
return t=G[t]||t,n===x?this[0]&&this[0][t]:this.each(function(e){
this[t]=v(this,n,e,this[t]);
});
},
data:function(t,n){
var e=this.attr("data-"+t.replace(R,"-$1").toLowerCase(),n);
return null!==e?w(e):x;
},
val:function(t){
return 0===arguments.length?this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){
return this.selected;
}).pluck("value"):this[0].value):this.each(function(n){
this.value=v(this,t,n,this.value);
});
},
offset:function(t){
if(t)return this.each(function(n){
var e=C(this),i=v(this,t,n,e.offset()),r=e.offsetParent().offset(),o={
top:i.top-r.top,
left:i.left-r.left
};
"static"==e.css("position")&&(o.position="relative"),e.css(o);
});
if(0==this.length)return null;
var n=this[0].getBoundingClientRect();
return{
left:n.left+window.pageXOffset,
top:n.top+window.pageYOffset,
width:Math.round(n.width),
height:Math.round(n.height)
};
},
css:function(n,e){
if(arguments.length<2){
var i=this[0],r=getComputedStyle(i,"");
if(!i)return;
if("string"==typeof n)return i.style[T(n)]||r.getPropertyValue(n);
if(s(n)){
var o={};
return C.each(s(n)?n:[n],function(t,n){
o[n]=i.style[T(n)]||r.getPropertyValue(n);
}),o;
}
}
var u="";
if("string"==t(n))e||0===e?u=l(n)+":"+h(n,e):this.each(function(){
this.style.removeProperty(l(n));
});else for(E in n)n[E]||0===n[E]?u+=l(E)+":"+h(E,n[E])+";":this.each(function(){
this.style.removeProperty(l(E));
});
return this.each(function(){
this.style.cssText+=";"+u;
});
},
index:function(t){
return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0]);
},
hasClass:function(t){
return t?A.some.call(this,function(t){
return this.test(b(t));
},f(t)):!1;
},
addClass:function(t){
return t?this.each(function(n){
O=[];
var e=b(this),i=v(this,t,n,e);
i.split(/\s+/g).forEach(function(t){
C(this).hasClass(t)||O.push(t);
},this),O.length&&b(this,e+(e?" ":"")+O.join(" "));
}):this;
},
removeClass:function(t){
return this.each(function(n){
return t===x?b(this,""):(O=b(this),v(this,t,n,O).split(/\s+/g).forEach(function(t){
O=O.replace(f(t)," ");
}),void b(this,O.trim()));
});
},
toggleClass:function(t,n){
return t?this.each(function(e){
var i=C(this),r=v(this,t,e,b(this));
r.split(/\s+/g).forEach(function(t){
(n===x?!i.hasClass(t):n)?i.addClass(t):i.removeClass(t);
});
}):this;
},
scrollTop:function(t){
if(this.length){
var n="scrollTop"in this[0];
return t===x?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){
this.scrollTop=t;
}:function(){
this.scrollTo(this.scrollX,t);
});
}
},
scrollLeft:function(t){
if(this.length){
var n="scrollLeft"in this[0];
return t===x?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){
this.scrollLeft=t;
}:function(){
this.scrollTo(t,this.scrollY);
});
}
},
position:function(){
if(this.length){
var t=this[0],n=this.offsetParent(),e=this.offset(),i=B.test(n[0].nodeName)?{
top:0,
left:0
}:n.offset();
return e.top-=parseFloat(C(t).css("margin-top"))||0,e.left-=parseFloat(C(t).css("margin-left"))||0,
i.top+=parseFloat(C(n[0]).css("border-top-width"))||0,i.left+=parseFloat(C(n[0]).css("border-left-width"))||0,
{
top:e.top-i.top,
left:e.left-i.left
};
}
},
offsetParent:function(){
return this.map(function(){
for(var t=this.offsetParent||L.body;t&&!B.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;
return t;
});
}
},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){
var n=t.replace(/./,function(t){
return t[0].toUpperCase();
});
C.fn[t]=function(r){
var o,s=this[0];
return r===x?e(s)?s["inner"+n]:i(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(n){
s=C(this),s.css(t,v(this,r,n,s[t]()));
});
};
}),F.forEach(function(n,e){
var i=e%2;
C.fn[n]=function(){
var n,r,o=C.map(arguments,function(e){
return n=t(e),"object"==n||"array"==n||null==e?e:X.fragment(e);
}),s=this.length>1;
return o.length<1?this:this.each(function(t,n){
r=i?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null,o.forEach(function(t){
if(s)t=t.cloneNode(!0);else if(!r)return C(t).remove();
N(r.insertBefore(t,n),function(t){
null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML);
});
});
});
},C.fn[i?n+"To":"insert"+(e?"Before":"After")]=function(t){
return C(t)[n](this),this;
};
});
for(var K in C.fn)X.Z[K]=C.fn[K];
return X.uniq=S,X.deserializeValue=w,C.zepto=X,C;
}();
window.Zepto=t,void 0===window.$&&(window.$=t);
});define("pages_new/common_share/video/player/plugins/danmu/danmu_store.js",[],function(){
"use strict";
return{
name:"danmu-plugin",
namespaced:!0,
state:function(){
return{
inputStatus:0,
danmuInfo:null
};
},
mutations:{
setInputStatus:function(n,t){
n.inputStatus=t.value;
},
setDanmuInfo:function(n,t){
n.danmuInfo=t;
}
}
};
});