define("appmsg/set_font_size.js",["biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","biz_wap/utils/localstorage.js"],function(e){
"use strict";
function t(e,t){
var o=[],n=document.createTreeWalker(e,1);
do{
var i=n.currentNode,a=i.getAttribute("mp-original-font-size");
a||(a=parseFloat(getComputedStyle(i).fontSize)*t,i.setAttribute("mp-original-font-size",a));
var s=i.getAttribute("mp-original-line-height");
s||(s=parseFloat(getComputedStyle(i).lineHeight)*t,i.setAttribute("mp-original-line-height",s)),
o.push([i,a,s]);
}while(n.nextNode());
o.forEach(function(e){
e[0].style.fontSize=parseFloat(e[1])*t+"px",e[0].style.lineHeight=parseFloat(e[2])*t+"px";
});
}
function o(){
var e=document.createElement("div");
e.style.fontSize="16px",document.body.appendChild(e);
var t=parseFloat(e.style.fontSize),o=parseFloat(window.getComputedStyle(e,null).getPropertyValue("font-size"));
document.body.removeChild(e);
var n=t/o;
return n;
}
function n(e){
c||"function"!=typeof e||window.top.__fontScaleChangeCbList__.push(e);
}
function i(){
window.top.__fontScaleChangeCbList__=[];
}
function a(e){
if(l.os.android){
t(e,o());
var i=new MutationObserver(function(e){
var n=o(),i=!0,a=!1,s=void 0;
try{
for(var r,l=e[Symbol.iterator]();!(i=(r=l.next()).done);i=!0){
var p=r.value;
t(p.target,n);
}
}catch(c){
a=!0,s=c;
}finally{
try{
!i&&l.return&&l.return();
}finally{
if(a)throw s;
}
}
});
return i.observe(e,{
childList:!0,
subtree:!0
}),n(function(o){
var n={
1:.8,
2:1,
3:1.1,
4:1.12,
5:1.125,
6:1.4,
7:1.55,
8:1.65
},i=n[o.fontSize]||1;
t(e,1/i),!c&&(window.top.__fontScaleBackForAndroid__=1/i),p.set("__font_scale_back_for_android__",1/i);
}),i;
}
return null;
}
var s=e("biz_wap/utils/mmversion.js"),r=e("biz_wap/jsapi/core.js"),l=e("biz_wap/utils/device.js"),p=e("biz_wap/utils/localstorage.js"),c=!1;
try{
c=!window.top.document;
}catch(d){
c=!0;
}
var f=l.os.ipad&&l.os.getNumVersion()>=13&&l.os.getNumVersion()<14;
return c||window.top.__fontScaleChangeCbList__||(window.top.__fontScaleChangeCbList__=[]),
window.top===window&&r.on("menu:setfont",function(e){
if(s.isIOS&&location.href.match(/fontScale=\d+/))if(parseFloat(e.fontScale)<=0&&(e.fontScale=100),
f)t(document.getElementsByTagName("html").item(0),e.fontScale/100),window.ipados13_font_scale=e.fontScale;else{
document.getElementsByTagName("html").item(0).style.webkitTextSizeAdjust=e.fontScale+"%";
var o=document.getElementsByTagName("iframe");
o.length&&Array.from(o).forEach(function(t){
var o=t.contentDocument;
if(o){
var n=o.getElementsByTagName("html").item(0);
n&&(n.style["-webkit-text-size-adjust"]=e.fontScale+"%");
}
});
}else if(s.isAndroid)r.invoke("setFontSizeCallback",{
fontSize:e.fontSize
});else if(s.isWindows){
var n,i=e.fontGear||2,a=["appmsg_desktop_fontsize_1","appmsg_desktop_fontsize_2","appmsg_desktop_fontsize_3","appmsg_desktop_fontsize_4","appmsg_desktop_fontsize_5","appmsg_desktop_fontsize_6"];
(n=document.body.classList).remove.apply(n,a),document.body.classList.add("appmsg_desktop_fontsize_"+i);
}
window.__fontScaleChangeCbList__.forEach(function(t){
return t(e);
});
}),{
isIPadOS13:f,
setFontSize:t,
onFontScaleChange:n,
keepNormalFontSizeForAndroid:a,
removeScaleChangeCbList:i
};
});define("appmsg/sec_load_fail_report.js",["common/comm_report.js"],function(o){
"use strict";
var i=o("common/comm_report.js");
if(window.localStorage&&window.localStorage.getItem){
var e=4500,w="loadSec-"+window.biz+"-"+window.mid+"-"+window.idx,t=window.localStorage.getItem(w);
t&&window.write_sceen_time-parseInt(t,10)>e&&(i.report(20801,{
Bizuin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
Url:window.msg_source_url||"",
Title:window.msg_title||""
}),window.localStorage.removeItem(w));
}
});define("biz_wap/ui/weui.js",["biz_wap/ui/weui_css.js"],function(e){
"use strict";
function i(){
var e=["actionSheet","alert","confirm","dialog","validate","checkIfBlur","gallery","loading","picker","datePicker","searchBar","slider","tab","toast","topTips","uploader"];
window.weui={};
for(var i=0;i<e.length;i++)!function(i){
window.weui[e[i]]=function(){
a.push({
name:e[i],
args:arguments
}),console.info(e[i]+" will be executed after weui.js loaded.");
};
}(i);
}
function n(){
var e=document.createElement("script");
e.onload=function(){
for(var e=0;e<a.length;e++)window.weui[a[e].name].apply(window,a[e].args);
},e.onerror=function(){
throw new Error("weui.js loaded fail.");
},e.src=o,document.body.appendChild(e);
}
e("biz_wap/ui/weui_css.js");
var o="https://res.wx.qq.com/t/wx_fed/cdn_libs/res/weui/1.2.5/weui.min.js",a=[];
i(),n();
});var _slicedToArray=function(){
function t(t,e){
var n=[],r=!0,o=!1,i=void 0;
try{
for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);
}catch(d){
o=!0,i=d;
}finally{
try{
!r&&u["return"]&&u["return"]();
}finally{
if(o)throw i;
}
}
return n;
}
return function(e,n){
if(Array.isArray(e))return e;
if(Symbol.iterator in Object(e))return t(e,n);
throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
}();
define("appmsg/search_image.js",[],function(){
"use strict";
function t(){
var t=window.location.href.split("?")[1];
if(t){
for(var e=t.split("&"),n=0;n<e.length;n++){
var r=e[n].split("="),o=_slicedToArray(r,2),i=o[0],a=o[1];
if("imageIndex"===i)return parseInt(a,10);
}
return"";
}
return"";
}
function e(){
var t=0;
return"undefined"!=typeof window.pageXOffset?t=window.pageXOffset:"undefined"!=typeof document.compatMode&&"BackCompat"!==document.compatMode?t=document.documentElement.scrollTop:"undefined"!=typeof document.body&&(t=document.body.scrollTop),
t;
}
function n(t){
return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+e():0;
}
function r(){
for(var t=[],e=document.getElementsByTagName("img"),n=0,r=e.length;r>n;n++){
var o=e.item(n),i=o.getAttribute("data-src");
i&&t.push(o);
}
return t;
}
function o(){
if(""!==i){
var t=r();
if(!(i>t.length)){
var e=n(t[i]);
window.scroll(0,e);
}
}
}
var i=t();
""!==i&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),"loading"!==document.readyState?o():window.addEventListener("DOMContentLoaded",function(){
o();
});
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("appmsg/index.js",["appmsg/search_image.js","biz_wap/ui/weui.js","appmsg/sec_load_fail_report.js","appmsg/set_font_size.js","biz_common/tmpl.js","cps/tpl/banner_tpl.html.js","cps/tpl/card_tpl.html.js","cps/tpl/list_tpl.html.js","biz_common/utils/string/html.js","appmsg/review_image.js","appmsg/weapp_common.js","biz_wap/utils/device.js","biz_common/dom/class.js","appmsg/log.js","biz_wap/utils/ajax.js","biz_common/dom/attr.js","appmsg/max_age.js","biz_wap/utils/mmversion.js","appmsg/test.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/moment.js","appmsg/appmsg_report.js","biz_common/utils/url/parse.js","a/mpAdAsync.js","biz_wap/utils/wapsdk.js","common/utils.js","complain/localstorage.js","appmsg/popup_report.js","appmsg/pay_report_utils.js","appmsg/loading.js","appmsg/like_profile.js","appmsg/finance_communicate.js","appmsg/topbar.js","biz_wap/utils/jsmonitor_report.js","pages/mod/bottom_modal.js","appmsg/pay_read/pay_confirm_tpl.html.js","appmsg/pay_read/buy_wecoin_btn_tpl.html.js","appmsg/related_article.js","appmsg/getForbidConfig.js","appmsg/set_article_read.js","appmsg/wxwork_hidden.js","common/color/background_color.js","common/color/light.js","common/color/dark.js","appmsg/tags_utils.js","page/appmsg_new/combo.css","page/appmsg_new/not_in_mm.css","appmsg/subscribe/subscribe.js","complain/utils/userpainter.js","appmsg/cdn_img_lib.js","appmsg/share.js","biz_common/log/jserr.js","biz_wap/ui/lazyload_img.js","appmsg/async.js","appmsg/copyright_report.js","appmsg/outer_link.js","appmsg/product.js","appmsg/page_pos.js","appmsg/iframe.js","appmsg/qqmusic.js","appmsg/voice.js","redpackage/redpacketcover.js","appmsg/search/search.js","appmsg/poi/poi.js","appmsg/autoread.js","appmsg/voicemsg.js","appmsg/weproduct.js","appmsg/weapp.js","question_answer/appmsg.js","appmsg/channel/channels.js","appmsg/profile/mp_insert_profile.js","appmsg/live.js","appmsg/minishop/minishop.js","appmsg/wxtopic.js","appmsg/cdn_speed_report.js","appmsg/appmsg_copy_report.js","appmsg/report_and_source.js","appmsg/report.js","appmsg/fereport_without_localstorage.js","appmsg/fereport.js","biz_wap/safe/mutation_observer_report.js","sougou/index.js"],function(e){
"use strict";
function t(e){
for(var t=window.location.search,o=t.substring(1,t.length).split("&"),i=0;i<o.length;i++){
var n=o[i].split("=");
if(n[0].toUpperCase()===e.toUpperCase())return n[1];
}
return"";
}
function o(){
function o(e){
if(e&&0!=e.length){
for(var t={
batch_no:j.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
total:e.length
},o=0;o<e.length;o++){
var i=e[o],n=o+1;
for(var r in i)i.hasOwnProperty(r)&&(t[r+""+n]=i[r]);
}
l({
url:"/mp/productreport?",
type:"POST",
data:t,
dataType:"json",
async:!0
});
}
}
function L(){
nt&&clearTimeout(nt),nt=setTimeout(function(){
try{
nt=null;
for(var e=0;e<F.length;e++){
var t=F[e],i=_.attr(t,"data-showed");
if("no"==i){
var n=t.getElementsByClassName("js_product_loop_content");
if(n.length>0){
n=n[0];
var r=n.getBoundingClientRect(),a=r.height||r.bottom-r.top;
if(a>0&&r.top<k.getInnerHeight()&&r.bottom>0){
t.setAttribute("data-showed","yes");
var s=n.getAttribute("data-pid");
s&&o([{
wxa_appid:n.getAttribute("data-wxaappid"),
pid:s,
type:3,
absolute_order:e+1,
appid:n.getAttribute("data-appid")||"",
templateid:n.getAttribute("data-templateid")||"",
relative_order:1*n.getAttribute("data-order"),
packid:n.getAttribute("data-packid")||""
}]);
}
}
}
}
}catch(d){}
},100);
}
function M(e){
try{
for(var d=window.pageYOffset||document.documentElement.scrollTop,c=0;c<F.length;c+=$){
var m=F[c];
if(!(m.offsetTop>d+k.getInnerHeight()+100)){
var w=_.attr(m,"data-cpsstatus");
if("hide"==w){
m.setAttribute("data-cpsstatus","loading");
for(var u=""+c,g=1,h=c+1;h<F.length&&c+$>h;h++)u=u+"%2c"+h,g++;
var b=Math.ceil(1e7*Math.random());
if(""!==t("mockcps"))var v="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+u+"&sn="+window.sn+"&mockcps="+t("mockcps");else var v="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+u+"&sn="+window.sn+"&istempurl="+(window.is_temp_url||0)+"&random="+b;
if(window.is_teenager)return void R.setSum(286024,0,1);
!function(e,t,d){
l({
url:t,
type:"GET",
dataType:"json",
async:!0,
error:function(){
try{
window.__addIdKeyReport("64469","18",d);
}catch(e){}
},
success:function(e){
try{
window.__addIdKeyReport("64469","16",e.product_list.length),e.product_list.length<d&&window.__addIdKeyReport("64469","18",d-e.product_list.length);
for(var t=0;t<e.product_list.length;t++){
e.product_list[t].data.cps_isready=!0,e.product_list[t].data.pid_type=e.product_list[t].data.pid_type||e.product_list[t].attr.pid_type;
var c=F[e.product_list[t].index],m=e.product_list[t].template_id;
"list"==m?c.innerHTML=n.tmpl(s,e.product_list[t].data):"banner"==m?c.innerHTML=n.tmpl(r,e.product_list[t].data):"card"==m&&(c.innerHTML=n.tmpl(a,e.product_list[t].data)),
e.product_list[t].weapp_username&&(e.product_list[t].attr.weapp_username=e.product_list[t].weapp_username),
e.product_list[t].weapp_version&&(e.product_list[t].attr.weapp_version=e.product_list[t].weapp_version),
c.setAttribute("data-cpsstatus","complete");
for(var w=c.getElementsByClassName("js_product_loop_content"),l=0;l<w.length;l++)for(var u in e.product_list[t].attr)w[l].setAttribute("data-"+u,e.product_list[t].attr[u]);
for(var g=c.getElementsByTagName("img"),l=0;l<g.length;l++)g[l].src=_.attr(g[l],"data-src");
!function(e,t){
if(y.on(e,"tap",".js_product_loop_content",function(i){
try{
!function(){
var n=i.delegatedTarget,r=n.getAttribute("data-wxaappid"),a=n.getAttribute("data-wxapath"),s=n.getAttribute("data-pid"),d=n.getAttribute("data-appid"),c=n.getAttribute("data-cpspackage"),m=Math.floor((new Date).getTime()/1e3)+5184e3,w=n.getAttribute("data-weapp_username"),l=n.getAttribute("data-weapp_version"),_=e.querySelector(".minishop_card_title").innerHTML;
p.jumpUrl({
cps_weapp_username:w,
cps_weapp_version:l,
privateExtraData:{
cookies:"cps_package="+encodeURIComponent(c)+"; expires="+m+"; busid=mmbiz_ad_cps; domain=*; spread=*"
},
sourceAppId:d,
appid:r,
path:a,
scene:1091,
sceneNote:[encodeURIComponent(location.href),user_name,msg_title,encodeURIComponent(s),_,a].join(":"),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&s&&o([{
wxa_appid:r,
pid:s,
type:4,
absolute_order:t+1,
appid:n.getAttribute("data-appid")||"",
templateid:n.getAttribute("data-templateid")||"",
relative_order:1*n.getAttribute("data-order"),
packid:n.getAttribute("data-packid")||""
}]);
}
});
}();
}catch(i){}
return!1;
}),f.isIOS&&location.href.match(/fontScale=\d+/)&&i.isIPadOS13){
var n=location.href.match(/fontScale=(\d+)/);
i.setFontSize(e,parseFloat(n[1])/100);
}
}(c,e.product_list[t].index);
}
L();
}catch(h){
window.__addIdKeyReport("64469","18",e.product_list.length);
}
}
});
}(u,v,g);
}
}
}
}catch(e){
console.log(e);
}
}
function H(e){
try{
it&&clearTimeout(it),it=setTimeout(function(){
M(e);
},300);
}catch(e){}
}
function J(e,t){
var o={
lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
},i=new Image;
i.onload=function(){
var o=i.width>0&&i.height>0;
t(e,o);
},i.onerror=function(){
t(e,!1);
},i.src="data:image/webp;base64,"+o[e];
}
function V(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
e.timing&&!function(){
var t=e.timing;
w("[Appmsg] dns:"+(t.domainLookupEnd-t.domainLookupStart)+"^^^ ssl:"+(0==t.secureConnectionStart?0:t.connectEnd-t.secureConnectionStart)+"^^^ tcp:"+(t.connectEnd-t.connectStart)+"^^^ request:"+(t.responseStart-t.requestStart)+"^^^ getPackageTime:"+(t.responseEnd-t.responseStart)+"^^^ domCententLoaded:"+(t.domContentLoadedEventStart-t.domLoading)+"^^^ domComplete:"+(t.domComplete-t.domLoading)+"^^^ firstViewTime:"+(real_show_page_time-t.navigationStart)+"^^^ interactiveTime:"+(page_endtime-t.navigationStart))+"^^^ ua:"+window.navigator.userAgent,
setTimeout(function(){
t.loadEventEnd&&w("[Appmsg] onload:"+(t.loadEventEnd-t.loadEventStart));
},100);
}(),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){
return this.replace(/^\s+|\s+$/g,"");
}),""==document.getElementById("js_content").innerHTML.trim()&&R.setSum(24729,94,1);
var t=Math.random();
.001>t&&document.getElementById("js_read_area3")&&document.getElementById("js_read_area3").innerText&&document.getElementById("js_read_area3").innerText.indexOf("Pageview")>-1&&R.setSum(24729,95,1),
window.__wxjs_is_wkwebview&&R.setSum(28307,67,1);
}
try{
var F=document.getElementsByTagName("mpcps");
window.__addIdKeyReport("64469","15",F.length);
for(var G=0;G<F.length;G++){
F[G].setAttribute("data-cpsstatus","hide"),F[G].setAttribute("data-showed","no");
var Z={
cps_isready:!1,
cps_state:"",
pid_type:"",
img_url:"",
title:"",
desc:"",
source_name:"",
source_logo_url:"",
is_ad:1
},tt=_.attr(F[G],"data-templateid");
window.is_teenager||("list"==tt?F[G].innerHTML=n.tmpl(s,Z,!1):"banner"==tt?F[G].innerHTML=n.tmpl(r,Z,!1):"card"==tt&&(F[G].innerHTML=n.tmpl(a,Z,!1)));
}
}catch(ot){
console.log(ot);
}
setTimeout(function(){
var e=document.getElementsByClassName("wx-edui-video_source_link");
e=Array.prototype.slice.call(e),e.forEach(function(e){
e&&e.addEventListener("click",function(){
var t=e.dataset.hitUsername;
b.invoke("profile",{
username:t
});
});
});
},500);
try{
U.init(document.getElementById("js_tags"));
}catch(ot){
console.log(ot);
}
var it=void 0,nt=null;
L(),y.on(window,"scroll",L),M(),y.on(window,"scroll",H),window.is_new_msg&&-1!=navigator.userAgent.indexOf("MicroMessenger")&&(window.title&&(window.title=window.title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
window.msg_title&&(window.msg_title=window.msg_title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
hd_head_img||x.jsmonitor({
id:115849,
key:26,
value:1
}),f.isAndroid?!function(){
var e={
userName:window.user_name,
bizNickName:window.nickname,
bizNickNameBackup:window.title,
cover:"",
title:window.msg_title,
headImg:window.hd_head_img,
digest:window.msg_desc,
reportData:{
BizUin:window.biz,
AppMsgID:1*window.mid,
ItemIndex:1*window.idx,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SessionId:window.sessionid,
ItemShowType:1*window.item_show_type
}
};
S.init(e);
var t=window.cdn_url_1_1||window.cdn_url_235_1||"",o=new Image;
t&&(o.src=t,o.onload=function(){
o.width<2048&&o.height<2048&&(e.cover=t,S.init(e)),window.topbarInited=!0;
},o.onerror=function(){
window.topbarInited=!0;
});
}():S.init({
userName:window.user_name,
bizNickName:window.nickname,
bizNickNameBackup:window.title,
title:window.msg_title,
headImg:window.hd_head_img,
cover:window.cdn_url_1_1||window.cdn_url_235_1||window.msg_cdn_url,
digest:window.msg_desc,
reportData:{
BizUin:window.biz,
AppMsgID:1*window.mid,
ItemIndex:1*window.idx,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SessionId:window.sessionid,
ItemShowType:1*window.item_show_type
}
}),y.on(window,"scroll",function(){
K||(!f.isAndroid||window.topbarInited)&&(W(0),K=!0);
}),b.invoke("createWebViewForFastLoad",{
scene:1
},function(e){
console.log(e);
}));
var rt=document.getElementsByTagName("body");
if(!rt||!rt[0])return!1;
rt=rt[0],function(){
function e(){
if(i.length)for(var e=document.documentElement.scrollTop||document.body.scrollTop,t=0;t<i.length;t++)if(1!=i[t].getAttribute("hasload")){
var o=i[t].getBoundingClientRect();
(o.top<d+e&&o.top>e||o.top+o.height>e&&o.top+o.height<d+e)&&i[t].getAttribute("href").length>0&&(i[t].setAttribute("hasload",1),
b.invoke("downloadPageDataForFastLoad",{
itemList:[{
item_show_type:i[t].getAttribute("data-itemshowtype"),
url:i[t].getAttribute("href")
}]
},function(e){
console.log(e);
}),i.splice(t,1),t--);
}
}
function t(){
for(var e=0;e<a.length;e++){
var t=a[e],o=t.getBoundingClientRect();
(o.top<=0&&o.top+o.height>=0||o.top>0&&o.top<d)&&(a.splice(e,1),e--,E.report([1,E.getRedirectType(t.parentNode.getAttribute("href")),"",img_popup?1:0,window.source,E.getUrlData(t.parentNode.getAttribute("href"))]));
}
for(var e=0;e<s.length;e++){
var t=s[e],o=t.getBoundingClientRect();
(o.top<=0&&o.top+o.height>=0||o.top>0&&o.top<d)&&(s.splice(e,1),e--,E.report([1,1,"",img_popup?1:0,window.source,t.getAttribute("data-miniprogram-appid")]));
}
}
function o(){
e(),t();
}
for(var i=[],n=document.getElementById("js_content").getElementsByTagName("a"),r=0;r<n.length;r++)null!==n[r].getAttribute("data-itemshowtype")&&i.push(n[r]);
var a=[];
Array.prototype.map.call(document.getElementById("js_content").getElementsByClassName("h5_image_link"),function(e){
e.parentNode.getAttribute("href")&&e.parentNode.getAttribute("href").length>0&&a.push(e);
});
var s=[];
Array.prototype.map.call(document.getElementById("js_content").getElementsByClassName("weapp_image_link"),function(e){
s.push(e);
});
var d=window.innerHeight||document.documentElement.clientHeight;
y.on(window,"scroll",o),o();
}(),function(){
b.on("onScreenShot",function(){
R.setSum(114217,15,1);
}),window.isPaySubscribe&&!function(){
b.on("onScreenShot",function(){
T.reportPayAppmsg(6);
});
var e=f.isWindows||f.isMac&&!f.isIOS,t=document.getElementById("js_content"),o=function(e){
"IMG"===e.target.tagName&&e.preventDefault();
};
e&&(t.addEventListener("dragstart",o),f.isWechat||t.addEventListener("contextmenu",o)),
window.isPaid||!function(){
var t="isPaid-"+window.biz+"-"+window.mid+"-"+window.idx,o=document.getElementById("js_pay_panel"),i=o.getElementsByClassName("js_pay_btn")[0],r=document.getElementById("js_pay_panel_bottom"),a=window.getComputedStyle(r),s=40+parseInt(a.paddingTop,10)+parseInt(a.paddingBottom,10),d=f.isGooglePlay;
if(f.isAndroid&&(b.invoke("handleMPPageAction",{
action:"isGPVersion"
},function(e){
console.log("GPVersion",e),e.err_msg.indexOf("ok")>-1&&(d=1*e.GPVersion);
}),"1"===window.localStorage.getItem(t)&&T.report110809(30)),e)for(var p=document.getElementsByClassName("js_pay_qrcode"),c="/mp/paysubqrcode?action=get_article_qrcode&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"#wechat_redirect",w=0,_=p.length;_>w;w++)p[w].src=c;
f.isInMiniProgram&&(m.addClass(i,"btn_disabled"),m.addClass(r.getElementsByClassName("js_pay_btn")[0],"btn_disabled")),
f.isIOS&&window.payShowIAPPrice&&!window.can_use_wecoin&&!function(){
var e=setTimeout(function(){
e=null,console.log("getIAPProductInfo timeout"),T.reportOverseaPay("",0,1,0,"",2,"");
},3e3),t=Date.now();
b.invoke("handleMPPageAction",{
action:"getIAPProductInfo",
productId:window.payProductId
},function(i){
if("number"==typeof e){
clearTimeout(e);
var n=Date.now()-t;
if(console.log("getIAPProductInfo",i,n+"ms"),-1!==i.err_msg.indexOf(":ok")){
var a=function(){
if(T.report110809(38),window.payProductId!==i.productId)return T.report110809(44),
{
v:void 0
};
var e={
USD:"$",
HKD:"HK$",
CAD:"C$",
AUD:"A$",
TWD:"NT$",
JPY:"JPY???",
EUR:"???",
SGD:"S$",
GBP:"??",
NZD:"NZ$",
MYR:"RM",
KZT:"???",
KRW:"???",
THB:"???",
PHP:"???",
TRY:"???",
MXN:"Mex$",
CNY:"???"
},t=[o.getElementsByClassName("js_pay_fee")[0],r.getElementsByClassName("js_pay_fee")[0]];
t.forEach(function(t){
var o=e[i.currencyCode]?e[i.currencyCode]:i.currencySymbol;
t.innerHTML=o+i.price.toFixed(2),t.parentNode.dataset.ready=1;
}),window.iapPriceInfo&&window.iapPriceInfo.currency_code!==i.currencyCode&&l({
url:"/mp/useriapinfo?action=update",
type:"POST",
dataType:"json",
async:!0,
data:{
country_code:i.countryCode,
currency_code:i.currencyCode,
currency_symbol:i.currencySymbol,
price:i.price,
price_format_string:i.priceFormatString,
iap_product_id:i.productId
}
}),window.oriProductFee?("CNY"!==i.currencyCode&&T.report110809(40),T.reportOverseaPay(i.currencyCode,100*i.price.toFixed(2),1,n,i.countryCode,0,i.err_msg+(i.err_desc?"__"+i.err_desc:""))):(window.IAPProductInfo=i,
window.IAPProductInfo.invokeTime=n);
}();
if("object"===("undefined"==typeof a?"undefined":_typeof(a)))return a.v;
}else T.report110809(39),T.reportOverseaPay("",0,1,0,"",1,i.err_msg+(i.err_desc?"__"+i.err_desc:""));
}
});
}(),window.jump2pay&&y.on(window,"load",function(){
window.scrollTo(0,o.getBoundingClientRect().top-k.getInnerHeight()/3);
});
var u=function(){
var e=i.getBoundingClientRect().top;
if(e+s>window.innerHeight){
if(1*window.previewPercent===0)return;
r.className="pay pay__notice pay__notice_show";
}else r.className="pay pay__notice",window.is_finished_preview=1;
};
u(),y.on(window,"scroll",u);
var g=!1,h=0,v=0,A=null,j=function(){
T.reportPayAppmsg(1),z.renderLikeProfile(["pay"]),D&&D.render&&D.render("pay"),b.invoke("handleMPPageAction",{
action:"paySuccess",
fullUrl:window.location.href,
itemShowType:item_show_type
},function(e){
g=!1,T.report110809(e.err_msg.indexOf("ok")>-1?19:20),window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem(t,"1"),
window.__second_open__?window.location.href=window.location.href+"&r="+Math.random()+"#wechat_redirect":window.location.reload();
}),window.localStorage.setItem("paySuc","1");
},I=null,x=null;
if(window.can_use_wecoin){
var E=document.createElement("div");
E.innerHTML=n.tmpl(q,{
price:wecoin_amount
});
var P=document.createElement("a");
P.innerText="??????",P.className="weui-btn weui-btn_primary",y.on(P,"tap",function(){
wecoin_amount>v?(I.hide(),setTimeout(function(){
b.invoke("buyWCCoin",{
businessId:2,
scene:4,
panelShowType:"present"
},function(e){
console.log(e),e&&e.err_msg&&(e.err_msg.indexOf("ok")>-1?(B.show(),b.invoke("getWCCoinBalance",{},function(e){
B.hide(),e&&e.err_msg&&e.err_msg.indexOf("ok")>-1&&(A.innerText=e.balance,v=e.balance,
I.show());
})):e.err_msg.indexOf("cancel")>-1?I.show():window.weui.alert("??????????????????????????????"));
});
},250)):(I.hide(),B.show("???????????????"),l({
url:"/mp/paysub?action=create_wecoin_order",
type:"POST",
dataType:"json",
data:{
__biz:window.biz,
mid:window.mid,
idx:window.idx,
sn:window.sn,
version:window.clientversion.htmlDecode(),
is_from_pc:window.jump2pay
},
async:!0,
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret)!function(){
T.report110809(13),T.report110809ForDevice(36);
var t=Math.round(new Date/1e3);
b.invoke("consumeWCCoin",{
buff:e.encode_resp_buff
},function(o){
console.log("consumeWCCoin res",o),g=!1,o&&o.err_msg&&o.err_msg.indexOf("ok")>-1?!function(){
T.reportPay(t,1,e.encode_resp_buff);
var o=function i(){
l({
url:"/mp/paysub?action=query_pay_status&product_type=1&product_id="+window.productPayPackage.product_id,
type:"GET",
dataType:"json",
success:function(e){
e&&e.base_resp&&0===e.base_resp.ret&&1*e.pay_status===1?(window.weui.toast("?????????",750),
j()):setTimeout(i,200);
}
});
};
o();
}():o&&o.err_msg&&o.err_msg.indexOf("fail")>-1&&(T.reportPay(t,3,e.encode_resp_buff,o.err_msg,o.err_code,o.err_domain),
window.weui.alert("??????????????????????????????"));
});
}();else switch(g=!1,e&&e.base_resp&&e.base_resp.ret){
case 202600:
window.weui.alert("??????????????????");
break;

case 202601:
window.weui.alert("????????????????????????????????????????????????");
break;

case 202602:
window.weui.alert("?????????????????????????????????????????????",j);
break;

case 202604:
window.weui.alert(e.appmsg_ban_reason_desc?"????????????"+e.appmsg_ban_reason_desc+"??????????????????????????????":"????????????????????????????????????????????????");
break;

case 202607:
window.weui.alert("????????????Google Play?????????????????????????????????????????????????????????????????????");
break;

case 202608:
location.replace("https://support.weixin.qq.com/update/");
break;

case 202609:
window.weui.alert("???????????????????????????????????????????????????????????????");
break;

case 202612:
window.weui.alert("???????????????????????????????????????????????????");
break;

case 202617:
window.weui.alert("??????????????????????????????"),R.setSum(232209,0,1);
break;

default:
T.report110809(14),window.weui.alert("????????????????????????????????????");
}
},
error:function(){
g=!1,window.weui.alert("??????????????????????????????");
},
complete:function(){
B.hide();
}
}));
}),I=new O(E,{
title:"",
extClass:"pay__bottom-modal",
hasBtn:!0,
btnSlot:n.tmpl(N,{}),
top:window.innerHeight-353+"px",
footerEl:P,
cb:function(){},
onHide:function(){
g=!1;
},
btnClickCb:function(){
I.hide(),setTimeout(function(){
T.reportPayAppmsg(14),b.invoke("buyWCCoin",{
businessId:2,
scene:3,
panelShowType:"present"
},function(e){
console.log(e),e&&e.err_msg&&(e.err_msg.indexOf("ok")>-1?(B.show(),b.invoke("getWCCoinBalance",{},function(e){
B.hide(),e&&e.err_msg&&e.err_msg.indexOf("ok")>-1&&(A.innerText=e.balance,v=e.balance,
I.show());
})):e.err_msg.indexOf("cancel")>-1&&I.show());
});
},250);
}
}),A=document.getElementById("js_wecoin_remain");
}
var C=function S(o,i){
if(T.report110809ForDevice(32),!f.isInMiniProgram){
if(d)return void window.weui.alert("????????????Google Play?????????????????????????????????????????????????????????????????????");
if(!i){
if(!e&&g)return;
if((f.is_wxwork||!f.isWechat)&&!e)return void window.weui.alert("???????????????????????????");
g=!0,h=new Date;
}
var n=o.currentTarget;
if(!e&&1*n.dataset.ready===0)return!i&&B.show("???????????????"),new Date-h>6e4?(B.hide(),
window.weui.alert("??????????????????????????????"),void(g=!1)):setTimeout(S,100,{
currentTarget:n
},!0);
if(T.reportPayAppmsg(9),1===window.is_transfer_msg)return window.weui.confirm("??????????????????????????????????????????????????????",{
buttons:[{
type:"default",
label:"??????"
}]
}),void(g=!1);
if(window.is_teenager)return window.weui.alert("??????????????????????????????"),R.setSum(232209,0,1),
void(g=!1);
if(window.is_temp_url)window.weui.alert("???????????????????????????????????????????????????????????????",function(){
g=!1,location.replace(""+location.origin+location.pathname+location.search+"&temp_is_paid=1"+location.hash);
});else if(e){
var r=function(){
var e="js_pay_qrcode_wrap",t=n.parentNode.getElementsByClassName("js_pay_fee_display")[0];
if("block"===t.style.display)return{
v:void 0
};
n.classList.contains("js_article_bottom")&&t.classList[n.getBoundingClientRect().top<300?"add":"remove"]("pay__notice-qrcode_bottom");
var o=function i(o){
if("none"!==t.style.display){
for(var r=o.target;!(null===r||r.classList&&r.classList.contains(e)||r===n);)r=r.parentNode;
r!==n&&(null!==r&&r.classList.contains(e)||(t.style.display="none",y.off(window,"click",i)));
}
};
y.on(window,"click",o),t.style.display="block";
}();
if("object"===("undefined"==typeof r?"undefined":_typeof(r)))return r.v;
}else{
if(f.isIOS&&f.ltVersion("8.0.8")||f.isAndroid&&f.ltVersion("8.0.8")&&window.can_use_wecoin)return void location.replace("https://support.weixin.qq.com/update/");
if(f.isIOS&&f.ltVersion("7.0.10")||f.isAndroid&&f.ltVersion("7.0.10")&&!window.can_use_wecoin)return void location.replace("https://support.weixin.qq.com/update/");
f.isAndroid&&"1"===window.localStorage.getItem(t)&&T.report110809(31),T.report110809ForDevice(34),
window.can_use_wecoin?!function(){
var e=document.createElement("div");
e.innerHTML='<div class="pay__wecoin-edu-profile">\n                  <div class="pay__wecoin-edu-title">????????????>????????????>???????????????????????????????????????????????????</div>\n                  <div class="pay__wecoin-edu-pic">\n                    <div class="pay__wecoin-edu-avatar"><img src="'+window.payEduTips.userImgUrl+'"></div>\n                    <div class="pay__wecoin-edu-nic">'+window.payEduTips.userNickname+"</div>\n                  </div>\n                </div>";
var t=document.createElement("a");
t.innerText="?????????",t.className="weui-btn weui-btn_default";
var o=function(){
x.hide(),B.show(),b.invoke("getWCCoinBalance",{},function(e){
B.hide(),e&&e.err_msg&&e.err_msg.indexOf("ok")>-1?(A.innerText=e.balance,v=e.balance,
I.show()):g=!1;
});
};
y.on(t,"tap",o),x=new O(e,{
hasHeader:!1,
top:window.innerHeight-467+"px",
footerEl:t,
extClass:"pay__edu-modal",
onHide:function(){
o();
}
}),B.show(),b.invoke("getWCCoinBalance",{},function(e){
B.hide(),console.log("getWCCoinBalance callback",e),e&&e.err_msg&&e.err_msg.indexOf("ok")>-1?e.balance>=wecoin_amount?(A.innerText=e.balance,
v=e.balance,I.show()):b.invoke("buyWCCoin",{
businessId:2,
scene:4,
panelShowType:"present"
},function(e){
console.log(e),e&&e.err_msg&&(e.err_msg.indexOf("ok")>-1?window.payEduTips.firstWecoinRecharge?x.show():(B.show(),
b.invoke("getWCCoinBalance",{},function(e){
B.hide(),e&&e.err_msg&&e.err_msg.indexOf("ok")>-1?(A.innerText=e.balance,v=e.balance,
I.show()):g=!1;
})):g=e.err_msg.indexOf("fail")>-1?!1:!1);
}):(g=!1,window.weui.alert("??????????????????????????????"));
});
}():(B.show("???????????????"),l({
url:"/mp/paysub?action=create_order",
type:"POST",
dataType:"json",
data:{
__biz:window.biz,
mid:window.mid,
idx:window.idx,
sn:window.sn,
version:window.clientversion.htmlDecode(),
is_from_pc:window.jump2pay
},
async:!0,
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret)!function(){
T.report110809(13),T.report110809ForDevice(36);
var t=Math.round(new Date/1e3);
if(f.isIOS){
var o=e.iap_info;
b.invoke("requestVirtualPayment",{
appID:o.appid,
priceLevel:o.price_level,
busiType:23,
busiId:o.busi_id,
productDesc:o.desc,
sign:o.sign,
extInfo:o.ext_info
},function(o){
console.log("requestVirtualPayment res: ",o),o.err_msg.indexOf("ok")>-1?(T.report110809(15),
T.reportPay(t,1,e.order_id),j()):o.err_msg.indexOf("cancel")>-1?(g=!1,T.report110809(28),
T.reportPay(t,2,e.order_id),console.log("pay cancel")):o.err_msg.indexOf("fail")>-1?(g=!1,
T.report110809(16),T.reportPay(t,3,e.order_id,o.err_msg,o.err_code,o.err_domain),
window.weui.alert(o.err_msg.slice(o.err_msg.indexOf("fail")+4))):(g=!1,window.weui.alert(o.err_msg));
}),window.payShowIAPPrice&&!function(){
var e=setTimeout(function(){
e=null,console.log("getIAPProductInfo timeout"),T.reportOverseaPay("",0,2,0,"",2,"");
},3e3),t=Date.now();
b.invoke("handleMPPageAction",{
action:"getIAPProductInfo",
productId:window.payProductId
},function(o){
if("number"==typeof e){
clearTimeout(e);
var i=Date.now()-t;
if(console.log("getIAPProductInfo",o,i+"ms"),-1!==o.err_msg.indexOf(":ok")){
if(T.report110809(41),window.payProductId!==o.productId)return void T.report110809(44);
window.IAPProductInfo?window.IAPProductInfo.currencyCode!==o.currencyCode&&T.report110809(43):window.oriProductFee&&"CNY"!==o.currencyCode&&T.report110809(43),
T.reportOverseaPay(o.currencyCode,100*o.price.toFixed(2),2,i,o.countryCode,0,o.err_msg+(o.err_desc?"__"+o.err_desc:""));
}else T.report110809(42),T.reportOverseaPay("",0,2,0,"",1,o.err_msg+(o.err_desc?"__"+o.err_desc:""));
}
});
}();
}else{
var i=e.midas_info;
window.h5sdk.directPay({
sandbox:!!i.sandbox,
ontimeout:function(){
g=!1,window.weui.alert("??????????????????????????????");
},
methods:{
onPayEnd:function(o,i){
console.log("directPay res: ",o,i),1===o?(T.report110809(17),T.reportPay(t,1,e.order_id,i,o),
j()):-1===o&&/:cancel$/.test(i)?(g=!1,T.report110809(29),T.reportPay(t,2,e.order_id,i,o),
console.log("pay cancel")):(g=!1,T.report110809(18),T.reportPay(t,3,e.order_id,i,o),
window.weui.alert("??????????????????????????????"));
}
}
},{
pf:i.pf,
appid:i.appid,
type:"goods",
openid:i.openid,
extend:{
hideOfferName:1
},
goodstokenurl:i.url_params,
usewxappid:"1",
wx_h5pay:0,
direct_pay_channel:"wechat"
});
}
}();else switch(g=!1,e&&e.base_resp&&e.base_resp.ret){
case 202600:
window.weui.alert("??????????????????");
break;

case 202601:
window.weui.alert("????????????????????????????????????????????????");
break;

case 202602:
window.weui.alert("?????????????????????????????????????????????",j);
break;

case 202604:
window.weui.alert(e.appmsg_ban_reason_desc?"????????????"+e.appmsg_ban_reason_desc+"??????????????????????????????":"????????????????????????????????????????????????");
break;

case 202607:
window.weui.alert("????????????Google Play?????????????????????????????????????????????????????????????????????");
break;

case 202608:
location.replace("https://support.weixin.qq.com/update/");
break;

case 202609:
window.weui.alert("???????????????????????????????????????????????????????????????");
break;

case 202612:
window.weui.alert("???????????????????????????????????????????????????");
break;

case 202617:
window.weui.alert("??????????????????????????????"),R.setSum(232209,0,1);
break;

default:
T.report110809(14),window.weui.alert("????????????????????????????????????");
}
},
error:function(){
g=!1,window.weui.alert("??????????????????????????????");
},
complete:function(){
B.hide();
}
}));
}
}
};
y.tap(i,C),y.tap(r.getElementsByClassName("js_pay_btn")[0],C);
}();
}();
}();
var at=e("complain/utils/userpainter.js");
!function(){
try{
if(anchor_tree_msg){
var e=Date.now(),t=document.getElementById("js_content"),o=anchor_tree_msg?JSON.parse(anchor_tree_msg).anchor_tree:[];
at.init(t,o),x.saveSpeeds({
sample:1,
uin:uin,
pid:"https:"==et?462:417,
speeds:{
sid:38,
time:Date.now()-e
}
}),x.send();
}
}catch(i){
"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.onError(i,{
anchor_tree_msg:anchor_tree_msg
});
}
}();
var st=/^http(s)?:\/\/mp\.weixin\.qq\.com\//g;
try{
if(top!=window&&(!top||top&&location.href&&st.test(location.href))&&!window.isSg)throw new Error("in iframe");
}catch(ot){
var dt="",pt=new Image;
pt.src=("http://mp.weixin.qq.com/mp/jsreport?key=4&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key4]"+dt+"&r="+Math.random()).substr(0,1024);
}
if(window.isInWeixinApp()&&/#rd$/.test(location.href)&&!window.isWeixinCached&&!window.__second_open__&&!f.is_wxwork){
var ct=-1!=location.href.indexOf("?")?"&":"?";
location.replace(location.href.replace(/#rd$/,ct+"rd2werd=1#wechat_redirect"));
}
var mt=e("biz_common/utils/url/parse.js");
e("appmsg/cdn_img_lib.js"),window.page_endtime=+new Date;
{
var wt=!f.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger");
-1!=navigator.userAgent.indexOf("WindowsWechat");
}
e("appmsg/share.js");
var lt=wt?null:new d({
is_https_res:is_https_res
}),_t=v(1e3*parseInt(window.modify_time)),ut=_t.format("YYYY/MM/DD"),gt=document.getElementById("js_modify_time");
if(gt&&(gt.innerHTML=ut),window.isSg||"mp.weixin.qq.com"==location.host){
var ft=e("biz_common/log/jserr.js");
ft({
key:0,
reporturl:"http://mp.weixin.qq.com/mp/jsreport?1=1",
replaceStr:/http(s)?:(.*?)js\//g
});
}
window.logs.webplog={
lossy:0,
lossless:0,
alpha:0,
animation:0,
total:0
};
var ht=-1!=navigator.userAgent.indexOf("TBS/"),yt=function(e,t){
J(e,function(e,o){
if(window.logs.webplog[e]=o?1:0,window.logs.webplog.total++,4==window.logs.webplog.total){
var i=window.logs.webplog,n=Math.random();
ht&&1>=n&&(i.lossy=i.lossless=i.alpha=1,window.logs.webplog=i);
var r=i.lossy&i.lossless&i.alpha;
t(!!r);
}
});
},bt=function(e){
for(var t=document.getElementsByTagName("img"),o=!1,i=!1,n=0,r=t.length;r>n;n++){
var a=t[n].getAttribute("data-src");
a&&a.canHevc()&&(o=!0),a&&a.isGif()&&(i=!0);
}
var s=f.gtVersion("6.5.13",!0)&&i,d=f.gtVersion("6.8.0",!0)&&o,p=!1;
try{
{
top.window.document;
}
}catch(c){
p=!0;
}
(X||navigator.userAgent.indexOf("Br_trunk")>-1)&&f.isIOS&&(s||d)&&!p?(console.info("[HEVC??????] ????????????????????????HEVC??????"),
b.invoke("imageProxyInit",{},function(t){
t.err_msg.indexOf(":ok")>-1?(Y=t.serverUrl,window.__addIdKeyReport("28307",117)):t.err_msg.indexOf(":fail")>-1&&window.__addIdKeyReport("28307",118),
e();
})):e();
},vt=function(e){
yt("lossy",e),yt("lossless",e),yt("alpha",e),yt("animation",e);
};
if(window.webp=!1,bt(function(){
vt(function(t){
function o(e){
return parseInt(e,10)||0;
}
function i(e){
(e.width<40||e.height<40)&&(o(e.style.width)<40||o(e.style.height)<40)||e.classList.add("img_loading");
}
function n(e,t,n){
(n.width<40||n.height<40)&&(o(n.style.width)<40||o(n.style.height)<40)||(n.classList.remove("img_loading"),
n.classList.contains("img_loadederror")||(n.classList.add("img_loadederror"),n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
window.__addIdKeyReport("28307",51),n.bindRetry||(n.bindRetry=!0,y.on(n,"click",function(){
return window.__addIdKeyReport("28307",66),r(n),i(n),e=e.https2http(),t.__retryload++,
t.src=mt.addParam(e,"retryload",t.__retryload,!0),!1;
}))));
}
function r(e){
e.classList.remove("img_loading"),e.classList.remove("img_loadederror");
}
window.webp=t,t&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("webp","1"),
window.logs.img={
download:{},
read:{},
load:{}
};
var a=document.getElementById("js_cover");
a&&!function(){
var e=a.getAttribute("data-src");
e&&(e.isCDN()&&(e=e.imgChange640(),t&&(e=mt.addParam(e,"tp","webp",!0)),e=mt.addParam(e,"wxfrom","5",!0),
is_https_res||Q?e=e.http2https():("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(e=e.https2http())),
setTimeout(function(){
a.onload=function(){
u(a,"height","auto","important"),u(a,"visibility","visible","important");
},a.setAttribute("src",e);
},0),window.logs.img.read[e]=!0,window.logs.img.load[e]=!0,a.removeAttribute("data-src"));
}();
var s=e("biz_wap/ui/lazyload_img.js"),d=2;
window.logs.outer_pic=0;
for(var p=document.getElementsByTagName("img"),c=0,l=p.length;l>c;c++){
{
var _=p[c].getAttribute("data-src");
p[c].getAttribute("src");
}
_&&_.isGif()&&p[c].classList.add("__bg_gif");
}
for(var g=document.getElementsByClassName("__bg_gif"),c=0,l=g.length;l>c;++c)g[c].setAttribute("data-order",c);
var h=function(e){
try{
var t=e,o=t.getAttribute("data-src");
if(!/^https?\:\/\/mmbiz\.qpic\.cn/.test(o))return;
var i=t.parentNode,n=!1;
m.hasClass(i,"js_jump_icon")&&(n=!0);
for(var r=!1;i.tagName&&"body"!=i.tagName.toLowerCase();){
if("a"==i.tagName.toLowerCase()){
var a=i.getAttribute("href")||"";
null!=a.match(/^http/)&&(r=!0);
break;
}
i=i.parentNode;
}
if(n&&!r){
var s=t.parentNode,d=s.parentNode;
if(d){
for(var p=document.createDocumentFragment();s.firstChild;)p.appendChild(s.firstChild);
d.insertBefore(p,s),d.removeChild(s);
}
}else if(!n&&r){
var c=document.createElement("span"),w=getComputedStyle(t);
"static"!=w.positon&&(c.style.position=w.positon),c.style.left=w.left,c.style.top=w.top,
c.style.right=w.right,c.style.bottom=w.bottom,c.style.margin=w.margin,m.addClass(c,"js_jump_icon"),
m.addClass(c,"h5_image_link"),t.style.position="static",t.style.margin="0px",t.parentNode.insertBefore(c,t),
c.appendChild(t),window.__addIdKeyReport("111535",0);
}
}catch(l){}
},v=function B(e){
try{
var t=e.childNodes,o=getComputedStyle(e);
(o.backgroundImage.match(/https\:\/\/mmbiz\.qpic\.cn/)||o.backgroundImage.match(/http\:\/\/mmbiz\.qpic\.cn/))&&window.__addIdKeyReport("111535",2);
for(var i=0;i<t.length;i++)"a"!=t[i].tagName.toLowerCase()&&B(t[i]);
}catch(n){}
};
try{
for(var A=document.getElementsByTagName("a"),j=0;j<A.length;j++){
var I=A.item(j),k=I.getAttribute("href")||"";
null!=k.match(/^http/)&&v(I);
}
}catch(E){}
var T=!1;
window.isCartoonCopyright||new s({
attrKey:"data-src",
imgOccupied:!0,
crossOrigin:!0,
accessibilityCallback:function(e){
b.invoke("getUserConfig",{},function(t){
t.isAccessibilityMode&&e();
});
},
lazyloadHeightWhenWifi:function(){
var e=void 0,t=1,o=1;
e=window.svr_time?new Date(1e3*window.svr_time):new Date;
var i=e.getHours();
return i>=20&&23>i&&(t=.5,o=0),{
bottom:t,
top:o
};
},
inImgRead:function(e){
e&&(window.logs.img.read[e]=!0);
},
changeSrc:function(e,t){
if(!t)return"";
var o=t;
if(t.isCDN()){
o=o.imgChange640();
var i,n=window.navigator.userAgent,r=/TBS\/([\d\.]+)/i,a=n.match(r);
a&&a[1]&&(i=parseInt(a[1]));
var s=/XWEB\/([\d\.]+)/i,d=n.match(s),p=void 0;
d&&d[1]&&(p=parseInt(d[1]));
var c=1e3,m=window.user_uin||0,l=0!==m&&Math.floor(m/100)%1e3<c,_=(i>=43305&&44206!=i||p>=16)&&o.isGif(),u=0!==m&&Math.floor(m/100)%1e3<=500,g=p>=564&&o.canHevc()&&f.gtVersion("6.8.0",!0)&&u;
l&&(_||g)?(o=mt.addParam(o,"tp","wxpic",!0),window.__addIdKeyReport("28307",91)):window.webp&&(o=mt.addParam(o,"tp","webp",!0),
window.__addIdKeyReport("28307",84)),o=mt.addParam(o,"wxfrom","5",!0),is_https_res||Q?(o=o.http2https(),
window.__addIdKeyReport("28307",77)):("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(o=o.https2http(),
window.__addIdKeyReport("28307",70));
}else try{
var r=new RegExp("^http(s)?://((mmbiz.qpic.cn/.*)|(m.qpic.cn/.*)|(mmsns.qpic.cn/.*)|(shp.qpic.cn/.*)|(wx.qlogo.cn/.*)|(mmbiz.qlogo.cn/.*)|((a|b)[0-9]*.photo.store.qq.com/.*)|(mp.weixin.qq.com/.*)|(res.wx.qq.com/.*))");
r.test(t)||(window.__addIdKeyReport("28307",9),window.logs.outer_pic++);
}catch(h){}
var y=/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g;
o=o.replace(y,"http://m.qpic.cn"),/^http(s)?:\/\/m\.qpic\.cn([\/?].*)*$/i.test(o)&&!window.webp&&(o=mt.addParam(o,"t","",!0)),
o=mt.addParam(o,"wx_lazy","1",!0);
var b=f.gtVersion("6.5.13",!0)&&!f.eqVersion("7.0.9")&&o.isGif(),v=f.gtVersion("6.8.0",!0)&&o.canHevc()&&!(f.eqVersion("7.0.9")&&o.isGif());
return Y&&(b||v)&&(window.__addIdKeyReport("28307",106),o=mt.addParam(o,"tp","wxpic",!0),
o=Y+"hevc?url="+encodeURIComponent(o)+"&type="+o.getOriginImgType()),"anonymous"==e.crossOrigin&&(o=mt.addParam(o,"wx_co","1",!0)),
window.logs.img.load[o]=!0,w("[Appmsg] image_load_event_change_src. originsrc:"+t+"  ^^^ newsrc : "+o),
e.start_load_time=+new Date,o;
},
onerror:function(e,t,o){
var i=t?t.__retryload||0:0;
if(i>=d&&n(e,t,o),e&&!(i>d)){
if(!e.isCDN()){
if(!Y)return;
if(-1==e.indexOf(Y))return;
}
var r=0==e.indexOf("https://")?7:0;
if(window.__addIdKeyReport("28307",72+r),1>=i&&window.__addIdKeyReport("28307",75+1*i+r),
e.isWxpic()?(window.__addIdKeyReport("28307",93),window.WX_BJ_REPORT&&WX_BJ_REPORT.BadJs.report("imgError:hevc",e,{
mid:"mmbizwap:imgMonitor",
view:"wap_appmsg"
}),1>=i&&window.__addIdKeyReport("28307",96+1*i)):e.isWebp()?(window.__addIdKeyReport("28307",86),
window.WX_BJ_REPORT&&WX_BJ_REPORT.BadJs.report("imgError:webp",e,{
mid:"mmbizwap:imgMonitor",
view:"wap_appmsg"
}),1>=i&&window.__addIdKeyReport("28307",89+1*i)):window.WX_BJ_REPORT&&WX_BJ_REPORT.BadJs.report("imgError",e,{
mid:"mmbizwap:imgMonitor",
view:"wap_appmsg"
}),Y&&e.indexOf(Y)>-1&&window.__addIdKeyReport("28307",108),d>i){
if(i++,t.__retryload=i,1==i&&e.indexOf("http://")>-1?(e=e.http2https(),window.__addIdKeyReport("28307",60),
window.__addIdKeyReport("28307",77)):1==i&&e.indexOf("https://")>-1?(window.__addIdKeyReport("28307",61),
window.__addIdKeyReport("28307",77)):2==i&&e.indexOf("mmbiz.qpic.cn")>-1&&(e=e.replace("mmbiz.qpic.cn","mmbiz.qlogo.cn"),
e.indexOf(!1)&&(e=e.http2https())),Y&&e.indexOf(Y)>-1){
var a=e.split("hevc?url=")[1];
a=a.split("&type")[0],a=decodeURIComponent(a),a=a.replace("tp=wxpic",""),e=a.https2http();
}
t.start_load_time=+new Date,t.src=mt.addParam(e,"retryload",i,!0);
}
window.__has_imgfailed||(window.__has_imgfailed=!0,window.__addIdKeyReport("28307",65)),
w("[Appmsg] image_load_event_on_error. src:"+e),t.setAttribute("data-fail",1);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnerror))for(var s=0,p=t.lazyLoadOnerror.length;p>s;s++)"function"==typeof t.lazyLoadOnerror[s]&&t.lazyLoadOnerror[s].call(t);
}catch(c){}
var m=10;
/tp\=webp/.test(e)&&(m=11);
var l=new Image;
l.src="http://mp.weixin.qq.com/mp/jsreport?key="+m+"&content="+(encodeURIComponent(e)+"["+uin+"]")+"&r="+Math.random();
}
},
onload:function(e,t){
if(!window.__second_open__&&!T){
var o=window.performance||window.msPerformance||window.webkitPerformance;
if(!o||!o.timing)return;
var i=window.location.protocol;
x.saveSpeeds({
uin:uin,
pid:"https:"==i?462:417,
speeds:{
sid:35,
time:Date.now()-window.performance.timing.navigationStart
}
}),x.send(),T=!0;
}
r(t),lt&&lt.bindEvent(t),t.gray&&!t.loadGif&&((t.width||t.naturalWidth)<120||(t.height||t.naturalHeight)<120?t.autoTap&&t.autoTap():t.span&&t.span.children&&t.span.children.item(0)&&(t.span.children.item(0).style.display=""));
var n=t?t.__retryload||0:0;
if(!(n>d)){
w("[Appmsg] image_load_event_onload_image. src:"+e+"  ^^^  retryloadtimes: "+n),
t.setAttribute("data-fail",0),h(t);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnload))for(var a=0,s=t.lazyLoadOnload.length;s>a;a++)"function"==typeof t.lazyLoadOnload[a]&&t.lazyLoadOnload[a].call(t);
}catch(p){}
var c=0==e.indexOf("https://")?7:0;
window.__addIdKeyReport("28307",71+c),1>=n&&window.__addIdKeyReport("28307",73+1*n+c),
e.isWxpic()?(window.__addIdKeyReport("28307",92),1>=n&&window.__addIdKeyReport("28307",94+1*n)):e.isWebp()&&(window.__addIdKeyReport("28307",85),
1>=n&&window.__addIdKeyReport("28307",87+1*n)),Y&&e.indexOf(Y)>-1&&window.__addIdKeyReport("28307",107),
window.__has_imgsucceed||(window.__has_imgsucceed=!0,window.__addIdKeyReport("28307",64)),
1==n&&e.indexOf("http://")>-1&&window.__addIdKeyReport("28307",50),1==n&&e.indexOf("https://")>-1&&window.__addIdKeyReport("28307",52);
var m=Math.random(),l=+new Date-t.start_load_time;
l&&0==e.indexOf("https://")&&.5>m?(window.__addIdKeyReport("27822",121,l),window.__addIdKeyReport("27822",122)):l&&5e-4>m&&(window.__addIdKeyReport("27822",124,l),
window.__addIdKeyReport("27822",125)),""===t.style.filter||"none"===t.style.filter||/translate(Z|3d)\(/.test(t.style.transform)||(t.style.transform+=" translateZ(0)",
t.style.webkitTransform+=" translateZ(0)");
}
},
detect:function(e){
if(e&&e.time&&e.loadList){
var t=e.time,o=e.loadList;
window.logs.img.download[t]=o;
}
},
container:document.getElementById("page-content")
});
});
}),lt){
var At=document.getElementById("js_cover");
lt.add({
container:document.getElementById("js_content"),
imgs:At?[At]:[]
});
}
e("appmsg/async.js"),!window.isSg;
var jt=e("appmsg/copyright_report.js");
!function(){
var e=document.getElementById("profileBt"),t=document.getElementById("copyright_info"),o=[];
if(e){
var i="57";
"28"==window.source&&(i="96"),"31"===window.source&&(i="103"),"30"===window.source&&(i="102"),
"29"==window.source&&(i="39"),"15"==window.source&&(i="121"),o.push({
dom:e,
username:user_name,
profileReportInfo:window.profileReportInfo||"",
scene:i
});
}
t&&source_encode_biz&&o.push({
dom:t,
source_encode_biz:source_encode_biz,
scene:"161"
});
var n=document.getElementById("js_share_headimg");
n&&o.push({
dom:n,
username:source_username,
scene:"172"
});
var r=document.getElementById("js_share_author");
r&&o.push({
dom:r,
username:source_username,
scene:"172"
});
for(var a=0,s=o.length;s>a;a++)!function(e){
y.on(e.dom,"click",function(){
if("copyright_info"==e.dom.id&&source_encode_biz){
jt.card_click_report({
scene:"0"
});
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene="+e.scene+"#wechat_redirect";
-1!=navigator.userAgent.indexOf("WindowsWechat")?location.href=t:b.invoke("profile",{
username:source_username,
scene:e.scene+""
});
}else{
if(w("[Appmsg] profile_click_before_loadprofile: username:"+e.username+", scene:"+e.scene),
A.profileReport({
hotspotjson:JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})
}),profileReportInfo){
var o=String(profileReportInfo).split("_");
3==o.length&&l({
url:"/mp/ad_biz_info?action=report&__biz="+window.biz+"&report_type=2&aid="+o[1]+"&tid="+o[2],
type:"GET",
dataType:"json",
async:!0,
success:function(){}
});
}
1==isprofileblock?b.invoke("openUrlWithExtraWebview",{
url:"https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect",
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href="https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect");
}):b.invoke("profile",{
username:e.username,
profileReportInfo:e.profileReportInfo||"",
scene:e.scene+""
},function(t){
window.__addIdKeyReport("28307","1"),w("[Appmsg] profile_click_after_loadprofile: username:"+e.username+", scene:"+e.scene+", profileReportInfo:"+e.profileReportInfo+", res.err_msg:"+t.err_msg);
});
}
return!1;
}),f.isWp&&e.dom.setAttribute("href","weixin://profile/"+e.username);
}(o[a]);
}(),function(){
function e(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
}
function t(){
var t=e();
return t?document[t]:!1;
}
function o(){
if(t())for(var e=0;e<window.originalVideoAdFrames.length;e++)window.originalVideoAdFrames[e].contentWindow.postMessage({
action:"pauseAd",
value:""
},"*");else window.originalVideoAdCurrentFrame&&window.originalVideoAdCurrentFrame.contentWindow.postMessage({
action:"playAd"
},"*");
}
document.webkitVisibilityState?document.addEventListener("webkitvisibilitychange",o,!1):document.msVisibilityState?document.addEventListener("msvisibilitychange",o,!1):document.visibilityState&&document.addEventListener("visibilitychange",o,!1);
}();
try{
!function(){
var e=document.getElementById("js_author_name");
e&&!function(){
var t="";
y.on(e,"click",function(){
return m.hasClass(e,"rich_media_meta_link")?window.is_temp_url?(window.weui.alert("???????????????????????????"),
!1):e.getAttribute("data-rewardsn")?1!=e.getAttribute("data-canreward")?!1:(t="https://mp.weixin.qq.com/mp/author?action=show&author_id="+author_id+"&rewardsn="+e.getAttribute("data-rewardsn")+"&timestamp="+e.getAttribute("data-timestamp")+"&__biz="+window.biz+"&appmsgid="+window.appmsgid+"&idx="+window.idx+"&scene=142&rscene=129&from_scene="+window.source+"&from_subscene="+window.subscene+"&from_enterid="+window.enterid+"&from_sessionid="+window.sessionid+"&is_fans="+window.isFans+"#wechat_redirect",
f.isInMiniProgram?!1:(-1!=navigator.userAgent.indexOf("MicroMessenger")&&(f.isIOS||f.isAndroid||f.isWp)?(window.__addIdKeyReport("110809","1"),
b.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
})):location.href=t,!1)):!1:!1;
});
}();
}();
}catch(ot){}
var It=e("appmsg/outer_link.js");
new It({
container:document.getElementById("js_content"),
changeHref:function(e,t){
if(!e||0!=e.indexOf("http://mp.weixin.qq.com/")&&0!=e.indexOf("https://mp.weixin.qq.com/")){
if(18==ban_scene)return"/mp/ban?action=check&__biz="+biz+"&mid="+mid+"&idx="+idx+"&scene="+ban_scene+"#wechat_redirect";
if(0!=e.indexOf("http://mp.weixinbridge.com/mp/wapredirect")&&0!=e.indexOf("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/showredpacket"))return"http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&type="+t+"&scene=0";
}else{
e=e.replace(/#rd\s*$/,""),e=e.replace(/#wechat_redirect\s*$/,""),e=e.replace(/[\?&]scene=21/,"");
var o="&";
-1==e.indexOf("?")&&(o="?"),e+=o+"scene=21#wechat_redirect";
}
return e;
}
}),e("appmsg/product.js");
var xt=e("appmsg/page_pos.js");
xt.init({
hasSpAd:!0,
disableScroll:window.isPaySubscribe&&!window.isPaid&&window.jump2pay
}),function(){
try{
var e=function(){
var e=document.getElementById("js_content");
if(!e||!e.querySelectorAll)return{
v:void 0
};
var t=function(e){
var t=e.getAttribute("class");
if(t){
for(var o=t.split(/\s+/),i=[],n=0,r=o.length;r>n;++n){
var a=o[n];
if(a&&-1!=window.whiteList.indexOf(a))i.push(a);else for(var s=0,d=window.whiteListReg.length;d>s;s++)if(window.whiteListReg[s].test(a)){
i.push(a);
break;
}
}
e.setAttribute("class",i.join(" "));
}
};
Array.prototype.forEach.call(e.querySelectorAll("*"),function(e){
if(e&&e.tagName){
var o=e.tagName.toLowerCase();
"iframe"!==o?t(e):"video_ad_iframe"===e.getAttribute("class")&&e.setAttribute("class","");
}
});
}();
if("object"===("undefined"==typeof e?"undefined":_typeof(e)))return e.v;
}catch(t){
console.error(t);
}
}(),function(){
window.originalVideoAdFrames=[],window.originalVideoAdCurrentFrame=null,window.originalVideoAdFramesUnsetList=[],
window.addEventListener("message",function(e){
var t="",o=document.getElementsByTagName("iframe");
if(e.data&&"originalVideoAdNeedData"==e.data.action&&e.data.vid)if(window.originalVideoAdFramesAdData){
window.originalVideoAdFramesAdData&&window.originalVideoAdFramesAdData[e.data.vid]&&(t=window.originalVideoAdFramesAdData[e.data.vid]);
for(var i=0;i<o.length;i++)o[i].dataset&&o[i].dataset.mpvid==e.data.vid&&o[i].contentWindow.postMessage({
action:"receiveOriginalVideoData",
vid:e.data.vid,
adData:t
},"*");
}else console.log(e.data.vid," has no ad data yet"),window.originalVideoAdFramesUnsetList.push(e.data.vid);
});
}(),window.fromWeixinCached||e("appmsg/iframe.js"),I.getAdData(window.reportVid),
e("appmsg/qqmusic.js");
var kt=e("appmsg/voice.js"),Et=[];
if(voiceList&&voiceList.voice_in_appmsg&&voiceList.voice_in_appmsg.length>0&&(Et=voiceList.voice_in_appmsg),
kt.init(Et),e("redpackage/redpacketcover.js"),e("appmsg/search/search.js"),e("appmsg/poi/poi.js"),
window.__appmsgCgiData&&1==window.__appmsgCgiData.show_msg_voice&&e("appmsg/autoread.js"),
1===window.show_msg_voice&&(console.log("load voicemsg"),e("appmsg/voicemsg.js")),
!window.__appmsgCgiData||1!=window.__appmsgCgiData.wxa_product&&1!=window.__appmsgCgiData.wxa_cps||e("appmsg/weproduct.js"),
e("appmsg/weapp.js"),document.getElementsByTagName("mp-qa").length){
var Tt=e("question_answer/appmsg.js");
Tt.renderQaCard&&Tt.renderQaCard({
mid:window.mid,
idx:window.idx,
isLogin:!!window.is_login,
userUin:window.user_uin,
biz:window.biz,
itemShowType:window.item_show_type,
sessionId:window.sessionid,
enterId:window.enterid,
scene:window.source,
subScene:window.subscene
});
}
if(document.getElementsByTagName("mpvideosnap")&&document.getElementsByTagName("mpvideosnap").length&&e("appmsg/channel/channels.js"),
document.getElementsByTagName("mpprofile")&&document.getElementsByTagName("mpprofile").length&&e("appmsg/profile/mp_insert_profile.js"),
document.getElementsByTagName("mplive").length){
var Bt=e("appmsg/live.js");
Bt.init({
biz:window.biz,
mid:window.mid,
idx:window.idx,
scene:window.source,
svrTime:window.svr_time
});
}
if(document.getElementsByTagName("mp-wxaproduct").length){
var zt=e("appmsg/minishop/minishop.js"),Pt=window.__appmsgCgiData.minishopCardData?JSON.parse(decodeURIComponent(window.__appmsgCgiData.minishopCardData)):"";
zt.init({
biz:window.biz,
mid:window.mid,
idx:window.idx,
source:1*window.source,
subscene:1*window.subscene,
enterid:1*window.enterid,
minishopCards:Pt
});
}
e("appmsg/wxtopic.js"),e("appmsg/cdn_speed_report.js");
var Ct=e("appmsg/appmsg_copy_report.js");
new Ct({
biz:window.biz,
isPaySubscribe:window.isPaySubscribe,
container:document.getElementById("js_content"),
logid:18504,
baseData:["",window.biz,window.mid,window.idx,window.location.href,window.msg_title]
}),setTimeout(function(){
window.article_improve_combo_css;
},0),setTimeout(function(){
y.tap(document.getElementById("copyright_logo"),function(){
var e="http://kf.qq.com/touch/sappfaq/150211YfyMVj150326iquI3e.html";
window.__second_open__?b.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
}),g(),h(),e("appmsg/report_and_source.js"),function(){
if(wt)!function(){
document.title=window.msg_title.htmlDecode(),m.addClass(rt,"not_in_mm");
var e=document.getElementById("js_pc_qr_code_img");
if(e){
var t=10000004,o=document.referrer;
if(0==o.indexOf("http://weixin.sogou.com")?t=10000001:0==o.indexOf("https://wx.qq.com")&&(t=10000003),
window.isSg)e.setAttribute("src",sg_qr_code.htmlDecode());else{
e.setAttribute("src","/mp/qrcode?scene="+t+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+t+"&r="+Math.random();
}
document.getElementById("js_pc_qr_code").style.display="block";
}
var n=document.getElementById("js_profile_qrcode"),r=document.getElementById("js_profile_arrow_wrp"),a=document.getElementById("profileBt");
if(n&&a&&r){
var s=function(){
var e=10000005,t=document.referrer;
0==t.indexOf("http://weixin.sogou.com")?e=10000006:0==t.indexOf("https://wx.qq.com")&&(e=10000007);
var o=document.getElementById("js_profile_qrcode_img");
if(o)if(window.isSg)o.setAttribute("src",sg_qr_code.htmlDecode());else{
o.setAttribute("src","/mp/qrcode?scene="+e+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+e+"&r="+Math.random();
}
return n.style.display="block",r.style.left=a.offsetWidth/2-8+"px",!1;
};
y.on(a,"click",s),y.on(n,"click",s),y.on(document,"click",function(e){
var t=e.target||e.srcElement;
t!=a&&t!=n&&(n.style.display="none");
});
}
}();else{
var e=document.getElementById("js_report_article3");
!!e&&(e.style.display="");
}
}(),e("appmsg/report.js");
for(var t=document.getElementsByTagName("map"),o=0,i=t.length;i>o;++o)t[o].parentNode.removeChild(t[o]);
if(jt.card_pv_report(),Math.random()<.01)try{
var n="https://js.aq.qq.com/js/aq_common.js",r=document.createElement("script");
r.src=n;
var a=document.getElementsByTagName("head")[0];
a.appendChild(r);
}catch(s){}
var d=document.getElementById("js_close_temp");
y.on(d,"click",function(){
d.parentNode.parentNode.removeChild(d.parentNode),m.removeClass(document.getElementById("js_article"),"preview_appmsg");
});
},1e3),function(){
if(c.os.ios&&"onorientationchange"in window){
var e=[],t="onorientationchange"in window?"orientationchange":"resize",o=!1,i=function(){
return 90===Math.abs(window.orientation)?1:2;
};
1!==i()||o||(T.report110809(63),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("horizontal screen report","biz: "+("function"==typeof window.atob?window.atob(window.biz):window.biz)+" | mid: "+window.mid+" | idx: "+window.idx+" | url: "+location.href,{
mid:"mmbizwap:horizontal_screen",
view:"wap_business"
}),o=!0),e.push({
ori:i(),
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
var n=(new Date).getHours();
y.on(window,t,function(){
var t=e.length-2,r=i();
P=+new Date,t>=0&&!function(){
{
var o=e[t];
o.ori;
}
e[e.length-1].istouchmove||(n>=11&&17>=n&&window.__report(63),setTimeout(function(){
window.scrollTo(0,o.scroll);
},100));
}(),e.push({
ori:r,
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
}),1!==r||o||(T.report110809(63),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("horizontal screen report","biz: "+("function"==typeof window.atob?window.atob(window.biz):window.biz)+" | mid: "+window.mid+" | idx: "+window.idx+" | url: "+location.href,{
mid:"mmbizwap:horizontal_screen",
view:"wap_business"
}),o=!0);
}),y.on(window,"scroll",function(){
var t=e.length-1,o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n=+new Date;
if(-1!=P){
if(console.log("[??????????????????]",n-P),500>n-P)return void(P=-1);
}else P=-1;
e[t].ori==i()&&(e[t].scroll=o,e[t].istouchmove=!0);
});
}
}(),w("[Appmsg] href:"+location.href+"^^^ ua:"+window.navigator.userAgent),window.addEventListener?window.addEventListener("load",V,!1):window.attachEvent&&window.attachEvent("onload",V),
e(window.moon&&moon.clearSample?"appmsg/fereport_without_localstorage.js":"appmsg/fereport.js"),
function(){
window.addEventListener&&document.getElementsByTagName("body")[0].addEventListener("copy",function(){
R.setSum(28307,18,1),f.isIOS&&R.setSum(28307,19,1),f.isAndroid&&R.setSum(28307,20,1);
},!1);
}(),function(){
window.__observer&&window.__observer_data&&e("biz_wap/safe/mutation_observer_report.js");
}(),"undefined"!=typeof isSg&&e("sougou/index.js"),setTimeout(function(){
for(var e=function(){
R.setLogs({
id:28307,
key:49,
value:1,
lc:1,
log0:"[28307_49_appmsg_fe_filter]"+encodeURIComponent(location.href)
});
},t=(window.appmsg_fe_filter||"").split(","),o=function(t,o){
try{
if(!t)return;
if(t.querySelectorAll){
var i=t.querySelectorAll("*["+o+"]");
if(i&&i.length>0){
e();
for(var n=0;n<i.length;++n)i[n]&&i[n].removeAttribute&&i[n].removeAttribute(o);
}
return;
}
var r=t.childNodes;
if(t.hasAttribute&&t.hasAttribute(o)&&e(),t.removeAttribute&&t.removeAttribute(o),
r&&r.length)for(var n=0;n<r.length;++n)filterContenteditable(r[n]);
}catch(a){}
},i=document.getElementById("js_content"),n=0;n<t.length;++n)t[n]&&o(i,t[n]);
},0),setTimeout(function(){
var e=999,t=636,o="http://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0",i=(new Date).getHours();
if(!(11>i||i>16||Math.random()<.99)){
var n=new Image;
n.onload=function(){
var o=n.naturalWidth||n.width,i=n.naturalHeight||n.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307","wifi"===window.networkType?120:123),
window.__addIdKeyReport("28307","wifi"===window.networkType?121:124);
},n.src=o;
var r=new Image;
r.onload=function(){
var o=r.naturalWidth||r.width,i=r.naturalHeight||r.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307",126),window.__addIdKeyReport("28307",127);
},r.src="https://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0";
}
},3e3);
var St=Math.random();
if(2e-4>St)try{
for(var Rt=document.getElementsByTagName("img"),Ot=window.screen.height,qt=window.screen.width,Nt=0,Dt=window.devicePixelRatio,Nt="",G=0,Lt=Rt.length;Lt>G;G++){
var Mt=Rt[G].getAttribute("data-src");
if(Mt){
var Wt=Rt[G].getBoundingClientRect();
Nt+=qt+"|"+Ot+"|"+Wt.left.toFixed(2)+"|"+(qt-Wt.right).toFixed(2)+"|"+Wt.width.toFixed(2)+"|"+Dt.toFixed(2)+"|"+Mt+";";
}
}
l({
url:"/mp/wapreport?action=img_display_report",
data:{
key:Nt
},
type:"POST",
dataType:"json",
async:!0
});
}catch(ot){}
setTimeout(function(){
C&&C.postPageHeightMessage&&C.postPageHeightMessage("updatePageHeight");
},2e3),f.isIOS&&location.href.match(/fontScale=\d+/)&&i.isIPadOS13&&setTimeout(function(){
if(!window.ipados13_font_scale){
var e=location.href.match(/fontScale=(\d+)/);
window.ipados13_font_scale=parseFloat(e[1]),i.setFontSize(document.getElementsByTagName("html").item(0),window.ipados13_font_scale/100);
}
},500);
}
e("appmsg/search_image.js"),e("biz_wap/ui/weui.js"),e("appmsg/sec_load_fail_report.js");
var i=e("appmsg/set_font_size.js"),n=e("biz_common/tmpl.js"),r=e("cps/tpl/banner_tpl.html.js"),a=e("cps/tpl/card_tpl.html.js"),s=e("cps/tpl/list_tpl.html.js");
e("biz_common/utils/string/html.js");
var d=e("appmsg/review_image.js"),p=e("appmsg/weapp_common.js"),c=e("biz_wap/utils/device.js"),m=e("biz_common/dom/class.js"),w=e("appmsg/log.js"),l=e("biz_wap/utils/ajax.js"),_=e("biz_common/dom/attr.js"),u=_.setProperty,g=e("appmsg/max_age.js"),f=e("biz_wap/utils/mmversion.js"),h=e("appmsg/test.js"),y=e("biz_common/dom/event.js"),b=e("biz_wap/jsapi/core.js"),v=e("biz_common/moment.js"),A=e("appmsg/appmsg_report.js"),j=e("biz_common/utils/url/parse.js"),I=e("a/mpAdAsync.js"),x=e("biz_wap/utils/wapsdk.js"),k=e("common/utils.js"),E=(e("complain/localstorage.js"),
e("appmsg/popup_report.js")),T=e("appmsg/pay_report_utils.js"),B=e("appmsg/loading.js"),z=e("appmsg/like_profile.js"),P=-1,C=e("appmsg/finance_communicate.js"),S=e("appmsg/topbar.js"),R=e("biz_wap/utils/jsmonitor_report.js"),O=e("pages/mod/bottom_modal.js"),q=e("appmsg/pay_read/pay_confirm_tpl.html.js"),N=e("appmsg/pay_read/buy_wecoin_btn_tpl.html.js"),D=e("appmsg/related_article.js"),L=e("appmsg/getForbidConfig.js"),M=e("appmsg/set_article_read.js"),W=M.setArticleRead,K=!1;
e("appmsg/wxwork_hidden.js");
var H=e("common/color/background_color.js"),J=e("common/color/light.js"),V=e("common/color/dark.js"),U=e("appmsg/tags_utils.js");
H.set({
bottom:[J["BG-0"],V["BG-0"]]
}),window.new_appmsg&&(e("page/appmsg_new/combo.css"),e("page/appmsg_new/not_in_mm.css")),
e("appmsg/finance_communicate.js");
var F=window.user_uin||0,G=Math.floor(F/100)%1e3,Q=0!==F&&1001>G,X=!0,Y="",$=5;
if(window.logs.pagetime.jsapi_ready_time=+new Date,window.logs.idkeys={},console.info("[????????????] ?????????:",window.biz,window.mid,window.idx),
console.info("[????????????] ????????????: ????????????",c.os.android,"??????IOS",c.os.ios,"??????????????????",window.__second_open__,"????????????",c.os.version,"??????uin",window.user_uin,"????????????????????????",f.isInMiniProgram),
w("[Appmsg] start run index.js init"),function(){
var e=(new Date).getHours(),t=function(e,t){
t=t||"",window.isSg?(t=["uin:sougou","resp:"+t].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random()+"&from=sougou"):(t=["uin:"+window.user_uin,"resp:"+t].join("|"),
(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random());
},o=function(e,t,o){
var i=e+"_"+t;
o=o||1,window.logs.idkeys[i]||(window.logs.idkeys[i]={
val:0
}),window.logs.idkeys[i].val+=o;
},i=e>=11&&17>=e&&Math.random()<1,n=function(e,o){
i&&t(e,o);
};
window.__report=t,window.__commonVideoReport=n,window.__addIdKeyReport=o;
}(),f.isAndroid&&f.gtVersion("7.0.15",1)&&k.initWebCompt(["wxAd"]),k.initWebCompt(["wxOpen"],function(t){
window.__is_support_wxOpen=t.err_msg.indexOf(":ok")>-1,document.getElementsByTagName("mpsubscribe")&&document.getElementsByTagName("mpsubscribe").length&&e("appmsg/subscribe/subscribe.js");
}),o(),!window.__second_open__){
var Z=window.performance||window.msPerformance||window.webkitPerformance;
if(!Z||!Z.timing)return;
var et=window.location.protocol;
x.saveSpeeds({
uin:uin,
pid:"https:"==et?462:417,
speeds:{
sid:34,
time:Date.now()-window.performance.timing.navigationStart
}
}),x.send(),L({
isPaySubscribe:window.isPaySubscribe
});
}
});