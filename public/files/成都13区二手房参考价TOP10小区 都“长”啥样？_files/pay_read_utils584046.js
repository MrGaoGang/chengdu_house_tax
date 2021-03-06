define("biz_common/utils/cookie.js",[],function(){
"use strict";
var e={
get:function(e){
if(""==e)return"";
var t=new RegExp(e+"=([^;]*)"),n=document.cookie.match(t);
return n&&n[1]||"";
},
set:function(e,t,n){
var o=new Date;
return o.setDate(o.getDate()+(n||1)),n=o.toGMTString(),document.cookie=e+"="+t+";expires="+n,
!0;
}
};
return e;
});define("appmsg/open_url_with_webview.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var r=e("biz_wap/jsapi/core.js"),n=-1!=navigator.userAgent.indexOf("WindowsWechat"),i=function(e,i){
if(n)return location.href=e,!1;
i=i||{};
var o=i.sample||0;
o*=1e3;
var t=window.user_uin||0,s=0!==t&&Math.floor(t/100)%1e3<o;
return s?void r.invoke("openUrlWithExtraWebview",{
url:e,
openType:i.openType||1,
scene:i.scene||"",
bizUsername:i.user_name||""
},function(e){
e&&"openUrlWithExtraWebview:ok"===e.err_msg?i.resolve&&i.resolve():i.reject&&i.reject();
}):void(i.reject&&i.reject());
};
return i;
});var _extends=Object.assign||function(e){
for(var i=1;i<arguments.length;i++){
var n=arguments[i];
for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);
}
return e;
};
define("appmsg/album_keep_read.js",["page/appmsg_new/mod/album_read.css","biz_common/dom/event.js","biz_common/dom/class.js","pages/mod/bottom_modal.js","biz_wap/utils/openUrl.js","pages/utils.js","biz_wap/utils/ajax.js","common/comm_report.js","common/utils.js","biz_common/dom/offset.js","biz_wap/utils/wapsdk.js"],function(e){
"use strict";
function i(e,i){
v.jsmonitor({
id:223326,
key:e,
value:i
});
}
function n(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
b.report(21277,_extends({},x,e));
}
function t(){
function e(){
if(!t){
var e=w.getOffset(h).offsetTop,o=f.getScrollTop();
o+f.getInnerHeight()>=e+a&&e+a>=o&&(n({
ActionType:1
}),i(11),t=!0);
}
}
var t=void 0,a=h.offsetHeight/2;
f.bindDebounceScrollEvent(e),e();
}
function a(){
var e=window.appmsg_album_info;
if(e.link){
var i=e.link.replace("#wechat_redirect","&subscene=159&subscene="+window.source+"&scenenote="+encodeURIComponent(window.location.href)+"&nolastread=1#wechat_redirect");
_.openUrlWithExtraWebview(i.htmlDecode());
}
}
function o(e){
e&&c.on(e,"click","."+y.itemClassName,function(e){
var i=e.delegatedTarget;
if(!u.hasClass(i,"album_read_directory_current")){
var t=void 0;
t=i.dataset.url.includes("#")?i.dataset.url.replace("#",T+"&scene=190#"):i.dataset.url+(T+"&scene=190"),
n({
ActionType:5,
Url:t
}),p.jumpUrl(t,!0),u.addClass(i,"album_read_directory_disabled");
}
});
}
function s(){
var e=document.createElement("div"),i=document.createElement("span");
return i.setAttribute("role","option"),i.innerHTML='<span aria-label="?????????">#</span>'+window.appmsg_album_info.title,
e.appendChild(i),e.innerHTML;
}
function r(e){
g({
type:"GET",
url:"/mp/appmsgalbum?action=paging&__biz="+window.biz+"&album_id="+y.albumId+"&cur_msgid="+y.msgid+"&cur_itemidx="+y.idx+"&count="+y.pageCount,
timeout:5e3,
dataType:"json",
success:function(i){
i.base_resp&&0===i.base_resp.ret&&e(i.getalbum_resp);
},
error:function(){
console.log("[error]");
}
});
}
function l(){
function e(e){
var i=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],n=arguments.length<=2||void 0===arguments[2]?!0:arguments[2],t=document.createDocumentFragment();
if(_)if(i){
h=1;
for(var a=0;a<e.length;a++)if(e[a].msgid.toString()===y.msgid.toString()&&e[a].itemidx.toString()===y.idx.toString()){
h=a;
break;
}
e.forEach(function(e,i){
e.index=p?c-(i-h):c+(i-h);
});
}else e.forEach(n?function(e,i){
e.index=p?v.index-i-1:v.index+i+1;
}:function(i,n){
i.index=p?w.index+(e.length-n):w.index-(e.length-n);
});
return e.forEach(function(e){
var i=document.createElement("div");
if(u.addClass(i,y.itemClassName),e.msgid.toString()===window.mid.toString()&&e.itemidx.toString()===window.idx.toString()?u.addClass(i,"album_read_directory_current"):1===e.user_read_status&&u.addClass(i,"album_read_directory_disabled"),
i.innerText=_?e.index+"."+e.title:e.title,i.setAttribute("data-url",e.url),i.setAttribute("role","option"),
e.is_paid){
var n="?????????";
i.innerHTML+='<span class="wx_icon_pay_tag wx_icon_pay_tag_paid">'+n+"</span>";
}else if(e.is_pay_subscribe){
var a="??????";
i.innerHTML+='<span class="wx_icon_pay_tag">'+a+"</span>";
}
t.appendChild(i);
}),t;
}
function t(e){
1*e.reverse_continue_flag||(b=!1),1*e.continue_flag||(f=!1);
}
var l=document.createElement("div");
l.style.position="relative",l.setAttribute("role","listbox");
var d=[],c=void 0,_=void 0,p=void 0,b=!0,f=!0,w=void 0,v=void 0,h=1,x={
extClass:"album_read_directory",
hasBtn:!0,
btnSlot:'<div id="js_topic_detail" class="weui-btn__word-wrp">\n                  <span class="weui-btn__word">??????</span>\n                  <i class="weui_right_arrow"></i>\n                </div>',
title:s(),
btnClickCb:function(){
n({
ActionType:6
}),i(15),a();
},
cb:function(){
r(function(i){
j.hideLoading(),p=i.base_info.is_reverse,c=i.base_info.cur_article_num,_=c?1:0,l.appendChild(e(i.article_list,!0)),
w=i.article_list[0],v=i.article_list[i.article_list.length-1],t(i),f||j.showEndLine();
var n=l.childNodes[h];
setTimeout(function(){
n.offsetTop+n.clientHeight>j.contentAreaWrp.clientHeight&&j.scrollTo(0,l.offsetHeight);
},200);
});
},
onShow:function(){
n({
ActionType:4
}),i(14);
},
onPullUpLoad:function(){
f&&(j.showPullUpLoading(),g({
type:"GET",
url:"/mp/appmsgalbum?action=paging&__biz="+window.biz+"&album_id="+y.albumId+"&begin_msgid="+v.msgid+"&begin_itemidx="+v.itemidx+"&count="+y.pageCount,
timeout:5e3,
dataType:"json",
success:function(i){
j.hidePullUpLoading();
var n=i.base_resp&&1*i.base_resp.ret;
if(0===n){
var a=i.getalbum_resp.article_list;
t(i.getalbum_resp),l.appendChild(e(a,!1,!0)),d=d.concat(a),j.finishPullUpLoad(),
v=d[d.length-1],1*i.getalbum_resp.continue_flag||j.showEndLine();
}
},
error:function(){}
}));
},
onPullDownLoad:function(){
b&&(j.showPullDownLoading(),g({
type:"GET",
url:"/mp/appmsgalbum?action=paging&__biz="+window.biz+"&album_id="+y.albumId+"&begin_msgid="+w.msgid+"&begin_itemidx="+w.itemidx+"&count="+y.pageCount+"&isbackward=1",
timeout:5e3,
dataType:"json",
success:function(i){
j.hidePullDownLoading();
var n=i.base_resp&&1*i.base_resp.ret;
if(0===n){
var a=i.getalbum_resp.article_list,o=i.getalbum_resp.continue_flag;
i.getalbum_resp.continue_flag=i.getalbum_resp.reverse_continue_flag,i.getalbum_resp.reverse_continue_flag=o,
t(i.getalbum_resp);
var s=e(a,!1,!1),r=l.firstChild;
l.insertBefore(s,r),d=a.concat(d),j.scrollTo(0,r.offsetTop-69),j.finishPullDownLoad(),
w=d[0];
}
},
error:function(){}
}));
}
};
window.appmsg_album_info.size<=4&&(x.top=screen.height/2-(screen.height-window.innerHeight)+"px"),
j=new m(l,x),j.showLoading(),j.show(),o(l);
}
function d(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=document.getElementById("js_album_directory");
c.on(t,"click",function(){
j?j.show():l();
});
var a=document.getElementById("js_album_prev"),o=document.getElementById("js_album_next");
e.pre_article_link?c.on(a,"click",function(){
var t=void 0;
n({
ActionType:2,
SubActionType:1
}),i(12),t=e.pre_article_link.includes("#")?e.pre_article_link.replace("#",T+"&scene=189#"):e.pre_article_link+(T+"&scene=189"),
location.href=t.replace(/&amp;/g,"&");
}):a.parentNode.removeChild(a),e.next_article_link?c.on(o,"click",function(){
var t=void 0;
n({
ActionType:2,
SubActionType:2
}),i(13),t=e.next_article_link.includes("#")?e.next_article_link.replace("#",T+"&scene=189#"):e.next_article_link+(T+"&scene=189"),
location.href=t.replace(/&amp;/g,"&");
}):o.parentNode.removeChild(o);
}
e("page/appmsg_new/mod/album_read.css");
var c=e("biz_common/dom/event.js"),u=e("biz_common/dom/class.js"),m=e("pages/mod/bottom_modal.js"),_=e("biz_wap/utils/openUrl.js"),p=e("pages/utils.js"),g=e("biz_wap/utils/ajax.js"),b=e("common/comm_report.js"),f=e("common/utils.js"),w=e("biz_common/dom/offset.js"),v=e("biz_wap/utils/wapsdk.js"),h=document.getElementById("js_album_keep_read"),y={
link:window.appmsg_album_info.link,
albumId:window.appmsg_album_info.id,
msgid:window.mid,
idx:window.idx,
pageCount:10,
itemClassName:"album_read_directory_item"
},x={
MsgId:1*y.msgid,
ItemIdx:1*y.idx,
BizUin:window.biz,
Itemshowtype:1*window.item_show_type,
SessionId:window.sessionid,
EnterId:1*window.enterid,
Scene:1*window.source,
SubScene:1*window.subscene,
Albumid:y.albumId,
Albumtype:window.appmsg_album_info.type,
Title:window.appmsg_album_info.title
},j=void 0,T="&cur_album_id="+y.albumId;
return{
init:function(e){
h&&(e.pre_article_link||e.next_article_link)&&(document.getElementById("js_album_keep_read_title").innerHTML=window.appmsg_album_info.title,
document.getElementById("js_album_keep_read_size").innerHTML=window.appmsg_album_info.size,
document.getElementById("js_album_keep_read_pre_title").innerHTML=e.pre_article_title||"",
document.getElementById("js_album_keep_read_next_title").innerHTML=e.next_article_title||"",
h.style.display="block",d(e),t());
}
};
});define("appmsg/more_read.js",["biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/ajax.js","appmsg/more_read_tpl.html.js","biz_wap/utils/openUrl.js","biz_common/dom/event.js","biz_wap/utils/jsmonitor_report.js","common/utils.js"],function(n){
"use strict";
function i(n){
for(var i=r.getInnerHeight(),e=document.documentElement.clientWidth||window.innerWidth,t=document.body.scrollHeight||document.body.offsetHeight,s=document.body.scrollTop||document.documentElement.scrollTop,m=[],a=0;a<l.length;a++){
var w=[l[a].bizuin||window.biz||"",l[a].mid||"",l[a].idx||""].join("_");
m.push(w);
}
m=m.join("#");
var p=c[n.index].getBoundingClientRect(),h="fans_read_cnt="+l[n.index].fans_read_cnt,g={
act:n.action||0,
bizuin:window.biz||"",
msgid:window.mid||"",
idx:window.idx||"",
scene:window.source||"",
sub_scene:window.subscene||"",
get_a8_key_scene:window.ascene||"",
screen_height:i,
screen_width:e,
screen_num:Math.ceil(t/i),
action_screen_num:Math.ceil((p.top+p.height+s)/i),
start_time_ms:_,
action_time_ms:Date.now(),
more_msg:m,
a_bizuin:l[n.index].bizuin||window.biz||"",
a_msgid:l[n.index].mid||"",
a_idx:l[n.index].idx||"",
rank:n.index+1,
tip:h,
session_id:u
};
o({
url:"/mp/appmsgreport?action=more_read",
type:"POST",
data:g,
timeout:2e3,
async:!1,
mayAbort:!0
});
var b=1===n.action?4:5;
d.setSum(110809,b,1);
}
function e(){
if(l){
for(var n=0,t=r.getInnerHeight(),o=0;o<c.length;o++)if(c[o].dataset.show)n++;else{
var s=c[o].getBoundingClientRect();
s.top+s.height<t&&(c[o].dataset.show=1,i({
action:1,
index:o
}));
}
n>=c.length&&a.off(window,"scroll",e);
}
}
n("biz_common/utils/string/html.js");
var t=n("biz_common/tmpl.js"),o=n("biz_wap/utils/ajax.js"),s=n("appmsg/more_read_tpl.html.js"),m=n("biz_wap/utils/openUrl.js"),a=n("biz_common/dom/event.js"),d=n("biz_wap/utils/jsmonitor_report.js"),r=n("common/utils.js"),l=null,c=null,_=Date.now(),u=""+_+"_"+Math.random().toString(36).substring(2);
return a.on(window,"scroll",e),function(n,e){
l=e,n.innerHTML=t.tmpl(s,{
list:l
},!1),c=n.getElementsByClassName("more_read_link");
for(var o=0;o<c.length;o++)a.on(c[o],"click",function(n){
return function(){
window.__second_open__?m.openUrlWithExtraWebview(l[n].link.htmlDecode()):window.location.href=l[n].link.htmlDecode(),
i({
action:2,
index:n
});
};
}(o));
n.style.display="";
};
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);
}
return e;
};
define("appmsg/comment.js",["biz_wap/ui/weui.js","biz_common/utils/string/html.js","biz_common/utils/wxgspeedsdk.js","appmsg/comment_report.js","biz_wap/utils/device.js","biz_common/utils/url/parse.js","biz_wap/jsapi/core.js","common/utils.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/tmpl.js","biz_wap/utils/fakehash.js","appmsg/log.js","appmsg/comment/comment_tpl.html.js","appmsg/comment/comment_write.html.js","appmsg/comment/comment_write_old.html.js","pages/utils.js","biz_wap/utils/mmversion.js","common/comm_report.js","appmsg/set_font_size.js","biz_wap/utils/jsmonitor_report.js","common/keyboard.js","appmsg/comment/comment_write_dialog/comment_write_dialog.js","appmsg/comment/comment_list/comment_list.js","appmsg/comment/comment_dialog/comment_dialog.js","appmsg/comment/comment_input/comment_input.js","appmsg/comment/comment_length.js","common/fixed_input.js","appmsg/emotion/emotion_panel.js","pages/scrollY.js","appmsg/comment/comment_report.js","appmsg/rec_report_key.js","pages_new/common_share/video/store.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js"),e("biz_common/utils/string/html.js");
var t=e("biz_common/utils/wxgspeedsdk.js"),n=e("appmsg/comment_report.js"),o=e("biz_wap/utils/device.js"),i=e("biz_common/utils/url/parse.js"),s=e("biz_wap/jsapi/core.js"),m=e("common/utils.js"),a=e("biz_common/dom/event.js"),c=e("biz_wap/utils/ajax.js"),r=e("biz_common/tmpl.js"),l=e("biz_wap/utils/fakehash.js"),d=e("appmsg/log.js"),p=e("appmsg/comment/comment_tpl.html.js"),u=e("appmsg/comment/comment_write.html.js"),_=e("appmsg/comment/comment_write_old.html.js"),g=e("pages/utils.js"),w=e("biz_wap/utils/mmversion.js"),y=e("common/comm_report.js"),f=e("appmsg/set_font_size.js"),I=e("biz_wap/utils/jsmonitor_report.js"),b=e("common/keyboard.js"),h=e("appmsg/comment/comment_write_dialog/comment_write_dialog.js"),v=e("appmsg/comment/comment_list/comment_list.js"),C=e("appmsg/comment/comment_dialog/comment_dialog.js"),j=e("appmsg/comment/comment_input/comment_input.js"),k=e("appmsg/comment/comment_length.js"),L=e("common/fixed_input.js"),D=e("appmsg/emotion/emotion_panel.js"),T=e("pages/scrollY.js"),S=e("appmsg/comment/comment_report.js"),x=S.report22214,A=e("appmsg/rec_report_key.js"),R=A.RecActionType,F=A.reportRecAction,P=!window.isPaySubscribe||window.isPaySubscribe&&window.isPaid,E=k.getLimit("comment"),B=0;
try{
B=1*window.atob(window.biz);
}catch(z){}
var W={
BizUin:B,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0
},H={
bizuin:B,
msgid:window.parseInt(window.mid,10)||0,
itemidx:window.parseInt(window.idx,10)||0,
scene:window.parseInt(window.source,10)||0
},M=!1,O=void 0,N=void 0,U=void 0,q=void 0,V=!1,K=[],Y={},G=0,J=Date.now(),Q=[],$=null,X=!1,Z=!1,et=!1,tt=!1,nt=!1,ot=null,it=null,st=null,mt={
isVoiceover:!1,
commentCount:"",
scrollCount:0,
nickName:"???",
headImg:"",
offset:0,
commentId:window.comment_id,
onlyFansCanComment:0,
onlyFansDaysCanComment:0,
isFans:0,
isFansDays:0,
replyFlag:0,
reportData:{
scene:0,
idkey:"",
moreList:27,
repeatList:25,
errList:18,
handleList:26,
addCommentErr:19,
errComment:18,
repeatContent:24,
repeatContentID:23
},
contentIDs:[],
canC2CReply:!1,
cmtFixedInput:null,
cmtDialog:null,
cmtList:null,
myList:null,
articleContent:null,
curCmtAddBtn:null
},at=100,ct=location.href,rt=w.is_wxwork,lt=o.os.pc&&!rt,dt="comment_editing",pt="my_comment_empty_data",ut="weui-btn_disabled",_t="discuss_form_write_show",gt="icon_discuss_keyboard",wt="????????????",yt=navigator.userAgent.indexOf("MicroMessenger")>-1,ft=g.getId("js_cmt_area"),It=ct.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1;
s.invoke("getUserConfig",{},function(e){
/:ok$/.test(e.err_msg)&&e.isAccessibilityMode&&(mt.isVoiceover=!0,mt.cmtFixedInput&&mt.cmtFixedInput.disableHack());
});
var bt={
vertical:0,
horizontal:0
};
0===window.orientation||180===window.orientation?(bt.vertical=m.getInnerHeight(),
bt.horizontal=screen.width-(screen.height-bt.vertical)):(bt.horizontal=m.getInnerHeight(),
bt.vertical=screen.width-(screen.height-bt.horizontal+60));
var ht=g.getId("activity-name")||"";
ht&&(ht=g.trim(ht.innerText)||""),window.pageCommentReportData&&window.pageCommentReportData.idkey&&(It&&console.log("init reportData"),
mt.reportData=window.pageCommentReportData),"undefined"!=typeof window.comment_id?mt.commentId=window.comment_id:window.cgiData&&"undefined"!=typeof window.cgiData.comment_id&&(mt.commentId=window.cgiData.comment_id),
yt||(ft&&(ft.style.display="none"),mt.commentId=0),It&&console.info("[????????????] ??????ID:",mt.commentId);
var vt=function(){
return w.isWechat?w.isInMiniProgram?0:b.canUseKeyboard?2:(w.isIOS||w.isAndroid)&&(w.gtVersion("7.0.8")||m.isNativePage())?2:0:0;
}(),Ct=function(e,t){
e&&(e.style.display=t||"block");
},jt=function(e){
e&&(e.style.display="none");
},kt=function(e){
if(!e)return!1;
var t=m.getScrollTop(),n=e.offsetTop;
return t+m.getInnerHeight()>n&&n>=t;
},Lt=function(e,n){
Math.random()<.999||(t.saveSpeeds({
uin:window.uin,
pid:"https:"===window.location.protocol?18:9,
speeds:[{
sid:29,
time:e
},{
sid:30,
time:n
}]
}),t.send());
},Dt=function(e){
var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];
if("undefined"!=typeof e)if(mt.reportData.idkey)I.setSum(mt.reportData.idkey,e,1);else{
var n=new Image,o=Math.random();
n.src="/mp/jsreport?key="+e+"&content="+t+"&r="+o;
}
},Tt=function(){
Array.prototype.forEach.call(g.getByClass("js_more_reply"),function(e){
var t=e.dataset.myId;
-1===Q.indexOf(t)&&kt(e)&&(y.report(19462,_extends({
PersonalCommentId:parseInt(t,10)||0,
CommentId:parseInt(mt.commentId,10)||0,
actiontype:1,
wording:"??????N???",
number:parseInt(e.dataset.num,10)||0,
devicetype:lt?1:2
},H)),Q.push(t));
});
},St=function(){
if(!(2>G)){
var e=m.getInnerHeight();
[mt.myList.getItemList(),mt.cmtList.getItemList()].forEach(function(t,n){
var o=mt[n?"cmtList":"myList"];
t.some(function(t){
if(!t.isExposed){
var i=t.getBoundingClientRect(),s=.5*i.height;
if(i.bottom>s&&i.top<e-s){
t.isExposed=!0;
var m=t.dataset,a={
PersonalCommentId:1*m.myId,
ReplyId:0,
IsPopup:0,
IsReplyOther:0,
CommentReplyType:n?1:2
};
if(m.replyId){
var c=o.getData({
type:"reply",
contentId:m.contentId,
replyId:1*m.replyId
});
a.ReplyId=c.reply_id,a.IsReplyOther=c.to_nick_name&&c.to_content?1:0;
}
x(a);
}else if(i.top>=e-s)return!0;
}
return!1;
});
});
}
},xt=function(){
N||(N=!0,new n({
comment_id:mt.commentId,
appmsgid:window.appmsgid,
idx:window.idx,
item_show_type:window.item_show_type||0,
biz:window.biz
}),Tt());
},At=function sn(){
try{
kt(Y.loading)&&V&&(I.setLogs({
id:28307,
key:45,
value:1,
lc:1,
log0:""
}),a.off(window,"scroll",sn));
}catch(e){
console.error(e);
}
},Rt=function(){
var e=function(e,t,n){
mt.onlyFansDaysCanComment&&0===mt.isFansDays?((t||e).innerHTML="?????????????????????7??????????????????",
Ct(e),t&&Ct(t)):mt.onlyFansCanComment&&0===mt.isFans?((t||e).innerHTML="???????????????????????????????????????",
Ct(e),t&&Ct(t)):P&&(lt?(Ct(Y.commentPC),Ct(Y.inputPC)):(t&&(jt(t),Ct(e)),Ct(n)));
};
return function(){
if(!rt){
var t=g.qs(".js_cmt_nofans_mine",ft),n=g.qs(".js_cmt_nofans_elected",ft),o=g.qs(".js_cmt_nofans_single",ft),i=g.qs(".js_cmt_nofans_single_inner",o),s=g.qs(".js_cmt_addbtn",o);
mt.myList.count?(jt(n),jt(n.nextElementSibling),jt(o),jt(i),jt(s),e(t,null,t.nextElementSibling)):mt.cmtList.count?(jt(t),
jt(t.nextElementSibling),jt(o),jt(i),jt(s),e(n,null,n.nextElementSibling)):(jt(t),
jt(t.nextElementSibling),jt(n),jt(n.nextElementSibling),e(o,i,s));
}
};
}(),Ft=function(){
mt.myList.showAll(),St(),Y.mylistFolder&&(Y.mylistFolder.parentNode.removeChild(Y.mylistFolder),
Y.mylistFolder=null);
},Pt=function(){
var e=!0,t=!0,n=!1,o=null,i=null,s=null,m=function(e){
e&&window.scrollTo(0,e.getBoundingClientRect().top+g.getScrollTop()-6);
};
return function(a,c){
if(Rt(),e&&window.goContentId&&!c&&a)if(!window.onload_endtime||new Date-window.onload_endtime<1e3){
if(Z&&(null===o&&(o=null!==mt.myList.getData({
contentId:window.goContentId
})),o))return void("none"!==ft.style.display&&(Ft(),m(""!==window.goReplyId?mt.myList.getReply(window.goContentId,1*window.goReplyId):mt.myList.getComment(window.goContentId)),
e=!1));
X&&(null===i&&(s=mt.cmtList.getData({
contentId:window.goContentId
}),i=null!==s),i&&(t&&""!==window.goReplyId&&(s.reply_new.reply_total_cnt&&s.reply_new.reply_total_cnt!==s.reply_new.reply_list.length?mt.cmtDialog.showDialog(mt.cmtList.getData({
contentId:window.goContentId
}),1*window.goReplyId):n=!0,t=!1),Z&&(m(n?mt.cmtList.getReply(window.goContentId,1*window.goReplyId):mt.cmtList.getComment(window.goContentId)),
e=!1)));
}else e=!1;
};
}(),Et=function(e){
var n=Date.now(),o=e.resp,i=e.loadTime,s=e.forceRefresh,m=e.notFirstRender;
if(mt.onlyFansCanComment=o.only_fans_can_comment,mt.isFans=o.is_fans,window.isPaySubscribe&&!window.isPaid&&(mt.canC2CReply=!1),
mt.replyFlag=mt.canC2CReply?o.reply_flag:0,Dt(mt.reportData.handleList,encodeURIComponent(JSON.stringify({
comment_id:mt.commentId,
offset:mt.offset,
url:ct
}))),1!==o.enabled?(ft&&(ft.style.display="none"),o.elected_comment=[],o.elected_comment_total_cnt=0):ft&&(ft.style.display="block"),
0===mt.offset){
mt.headImg=o.logo_url,mt.nickName=o.nick_name,s&&(mt.contentIDs=[]);
var a=o.elected_comment;
a&&a.length?(Ct(Y.main),mt.cmtList.render(a),o.elected_comment_total_cnt<=10&&Ct(Y.statement),
U||"5"!==window.item_show_type||(U=!0,Math.random()<.1&&(t.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:27,
time:Date.now()-window.logs.pagetime.page_begin
}]
}),t.send()))):jt(Y.main),X=!0,Pt(s,m);
var c=ft.getBoundingClientRect().y;
location.href.indexOf("scrolltodown")>-1&&c&&window.scrollTo(0,c-25);
}else{
var a=o.elected_comment;
a&&a.length&&mt.cmtList.add({
data:a
});
}
0===o.elected_comment_total_cnt?(mt.offset=-1,jt(Y.loading),jt(Y.statement)):mt.offset+at>=o.elected_comment_total_cnt?(mt.offset=-1,
jt(Y.loading),Ct(Y.statement)):mt.offset+=o.elected_comment.length,window.ipados13_font_scale&&f.setFontSize(Y.main,window.ipados13_font_scale/100),
xt(),g.setTwoTabHeight("js_comment_content"),i&&Lt(i,Date.now()-n);
},Bt=function(e){
if(mt.commentId=window.comment_id,0!==Number(mt.commentId)){
var t=e.notFirstRender,n=e.forceRefresh,o=e.cb;
n=n===!0,n&&(mt.offset=0);
var s=m.getScrollTop(),r=document.documentElement.scrollHeight;
if(!(V||-1===mt.offset||mt.offset>0&&r-s-m.getInnerHeight()>500)){
if("number"==typeof mt.commentCount&&0===mt.commentCount&&!n)return void Et({
resp:{
enabled:1,
elected_comment:[],
elected_comment_total_cnt:0,
my_comment:[],
only_fans_can_comment:mt.onlyFansCanComment,
is_fans:mt.isFans,
logo_url:mt.headImg,
nick_name:mt.nickName
}
});
var l=i.join("/mp/appmsg_comment",{
action:"getcomment",
scene:mt.reportData.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:mt.commentId,
offset:mt.offset,
limit:at,
send_time:window.send_time
},!0),p=+new Date;
V=!0,Ct(Y.loading),At();
try{
mt.scrollCount++,n&&(K=[]),mt.scrollCount>1&&!n&&Dt(mt.reportData.moreList,encodeURIComponent(l)),
K.indexOf(l)>-1&&Dt(mt.reportData.repeatList,encodeURIComponent(l)),K.push(l);
}catch(u){
console.error(u);
}
It&&console.info("[????????????] ????????????????????????:",l),d("[Appmsg comment] start get comment data, url:"+l),
c({
url:l,
dataType:"json",
success:function(e){
var i=e.base_resp&&e.base_resp.ret;
0===i?o&&o({
resp:e,
forceRefresh:n,
notFirstRender:t,
loadTime:Date.now()-p
}):Dt(mt.reportData.errList,"type:resperr;url:"+encodeURIComponent(l)+";ret="+i),
d("[Appmsg comment] get comment success");
},
error:function(){
Dt(mt.reportData.errList,"type:ajaxerr;url:"+encodeURIComponent(l)),d("[Appmsg comment] get comment ajax error");
},
complete:function(){
V=!1,jt(Y.loading),a.off(window,"scroll",At);
}
});
}
}
},zt=function(e){
var t=v.validContent(e);
return t.valid&&lt&&(t.content=$.value),t;
},Wt=!1,Ht=function(e){
var t=e.content,n=e.successBegin,o=e.successEnd,s=e.fail,m=e.complete;
Wt||!function(){
Wt=!0,O!==t&&(J=Date.now());
var e=i.join("/mp/appmsg_comment",{
action:"addcomment",
scene:mt.reportData.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:mt.commentId,
sn:window.sn
},!0);
c({
url:e,
data:{
content:t,
title:ht,
head_img:mt.headImg,
nickname:mt.nickName,
client_id:J
},
type:"POST",
dataType:"json",
success:function(i){
switch("function"==typeof n&&n(),+i.ret){
case 0:
var m={
content:t,
nick_name:mt.nickName,
create_time:Date.now()/1e3|0,
is_elected:0,
logo_url:mt.headImg,
like_status:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:i.my_id,
content_id:i.content_id,
reply_new:{
reply_list:[]
},
needAnimation:!0
};
return Ct(Y.mylistContainer),Ct(Y.mylistFooter),mt.myList.add({
data:[m],
mode:"unshift"
}),void("function"==typeof o&&o());

case-6:
window.weui.alert("??????????????????????????????????????????");
break;

case-7:
window.weui.alert("????????????????????????????????????????????????");
break;

case-10:
window.weui.alert("??????????????????"+E+"???");
break;

case-15:
window.weui.alert("???????????????");
break;

case-18:
window.weui.alert("??????????????????????????????????????????");
break;

default:
O=t,window.weui.alert("????????????????????????");
}
Dt(mt.reportData.addCommentErr,"type:resperr;url:"+encodeURIComponent(e)+";ret="+i.ret),
"function"==typeof s&&s();
},
error:function(t){
console.log(t),Dt(mt.reportData.addCommentErr,"type:ajaxerr;url:"+encodeURIComponent(e)),
"function"==typeof s&&s();
},
complete:function(){
Wt=!1,"function"==typeof m&&m();
}
});
}();
},Mt=function(){
var e=$.getSubmit(),t=$.getInput();
if(e.disabled!==!0){
var n=zt(lt?$.value:t.value),o=n.valid,i=n.content;
o&&(e.disabled=!0,Ht({
content:i,
successBegin:function(){
!lt&&$.hideEmotionPannel();
},
successEnd:function(){
lt?($.hide(),Ct(Y.inputPC)):t.value="";
},
complete:function(){
""!==t.value&&(e.disabled=!1);
}
}));
}
},Ot=function(){
var e=i.join("/mp/appmsg_comment",{
action:"getmycomment",
scene:mt.reportData.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:mt.commentId
},!0);
0===G&&(G=1,Array.prototype.forEach.call(Y.myCmtLoading,Ct),c({
url:e,
dataType:"json",
success:function(t){
var n=t.base_resp&&t.base_resp.ret;
if(0===n){
G=2;
var o=t.my_comment;
o&&o.length&&(Ct(Y.mylistContainer),Ct(Y.mylistFooter),mt.myList.render(o),mt.myList.getIsOversize()&&Ct(Y.mylistFolder));
}else G=0,Dt(mt.reportData.errComment,"type:resperr;url:"+encodeURIComponent(e)+";ret="+n);
Z=!0,Pt(!0,!1);
},
error:function(){
G=0,Dt(mt.reportData.errComment,"type:ajaxerr;url:"+encodeURIComponent(e));
},
complete:function(){
Array.prototype.forEach.call(Y.myCmtLoading,jt);
}
}));
},Nt=function(){
return{
enterEditing:function(){
et=!0,b.canUseCancel;
},
leaveEditing:function(){
et&&(et=!1,b.canUseCancel&&w.isAndroid&&document.body.style.removeProperty("margin-bottom"));
}
};
}(),Ut=Nt.leaveEditing,qt=function(){
switch(vt){
case 2:
mt.cmtWriteDialog.show();
break;

case 1:
s.invoke("handleMPPageAction",{
action:"writeComment",
title:ht,
comment_id:mt.commentId,
style:"white"
});
}
return vt;
},Vt=function(e){
M=!0,q=m.getScrollTop(),!lt&&jt(Y.article),mt.myList.changeContainer(Y.mylistOld),
Ft(),Ct(Y.mine),document.body.classList[mt.myList.count?"remove":"add"](pt),window.__second_open__&&o.os.ios&&Ct(Y.fakebar),
window.scrollTo(0,0),Ot(),!e&&setTimeout(function(){
return $.focus();
},3);
},Kt=function(){
M=!1,mt.myList.changeContainer(Y.mylist),jt(Y.mine),Ct(Y.article),window.scrollTo(0,q),
$.blur(),document.body.classList.remove(dt),document.body.classList.remove(pt);
},Yt=function(t,n){
if(1*window.item_show_type===5){
var i=e("pages_new/common_share/video/store.js");
i.dispatch("mp-video-player/auto-next-plugin/cancelAutoNextWhenTipsShowed",6);
}
switch(t&&t.preventDefault(),qt()){
case 2:
y.report(19048,_extends({
EventType:1,
IsFans:mt.isFans,
CommentPageType:3
},W));
break;

case 1:
y.report(19048,_extends({
EventType:1,
IsFans:mt.isFans,
CommentPageType:2
},W));
break;

case 0:
default:
if(m.isNativePage()||document.body.classList.add(dt),n)return It&&console.log("FakeHash on comment"),
void Vt();
t.preventDefault(),window.__second_open__&&o.os.ios?Vt():(It&&console.log("push comment"),
l.push("comment")),y.report(19048,_extends({
EventType:1,
IsFans:mt.isFans,
CommentPageType:1
},W));
}
},Gt=w.isAndroid?30:0,Jt=function(e,t){
if(tt){
var n=Y.commentWriteArea.getBoundingClientRect(),o=n.bottom,i=bt[0===window.orientation||180===window.orientation?"vertical":"horizontal"],s=o-(i-e)-(t?0:Gt),a=Math.abs(s),c=g.getScrollTop(),r=document.body.scrollHeight-c-i;
s>r?document.body.style.marginBottom=(document.body.style.marginBottom?parseInt(document.body.style.marginBottom,10):0)+s-r+"px":0>s&&a>c&&(mt.articleContent.style.marginTop=(mt.articleContent.style.marginTop?parseInt(mt.articleContent.style.marginTop,10):0)+a-c+"px");
var l={
distance:s,
end:w.isAndroid?function(){
var n=Y.commentWriteArea.getBoundingClientRect().bottom,o=m.getInnerHeight()-(t?e:0);
n!==o&&T.start({
distance:n-o,
duration:.1
});
}:null
};
150>a?l.speed=300:l.duration=.3,T.start(l);
}
},Qt=function(e){
e=e||k.getLength(Y.input.value),Y.cmtTips.innerHTML=e>=E-k.remindWordCount&&E>e?"???????????????"+(E-e)+"??????":e===E?"??????"+E+"???????????????":e>E?"?????????"+(e-E)+"???":"";
},$t=function(){
var e=k.getLength(Y.input.value);
e&&E>=e?(Y.cmtSubmitBtn.classList.remove(ut),Y.cmtSubmitBtn.disabled=!1,Y.cmtSubmitBtn.title=""):(Y.cmtSubmitBtn.classList.add(ut),
Y.cmtSubmitBtn.disabled=!0,Y.cmtSubmitBtn.title=wt),Qt();
},Xt=function(){
!nt&&Y.cmtEmotionBtn.classList.remove(gt),Y.cmtEmotionBtn.setAttribute("aria-pressed",!1),
b.lastData.keyboard&&!nt&&Jt(b.lastData.keyboard);
},Zt=function(e){
Y.input.blur(),tt=!1,document.body.style.removeProperty("margin-bottom"),mt.articleContent.style.removeProperty("margin-top"),
mt.cmtEmotionPanel.hide(),Y.commentWriteArea.style.height=0,Y.commentWriteArea.classList.remove(_t),
Y.commentWriteArea.setAttribute("aria-hidden","true"),st&&(clearTimeout(st),st=null),
e===!0?jt(Y.commentWriteMask):st=setTimeout(function(){
jt(Y.commentWriteMask),st=null;
},500),w.isIOS&&s.invoke("handleMPPageAction",{
action:"opInputAccessoryView",
show:!0
}),mt.isVoiceover&&mt.curCmtAddBtn&&(mt.curCmtAddBtn.setAttribute("tabindex","-1"),
mt.curCmtAddBtn.focus(),mt.curCmtAddBtn=null);
},en=function(){
var e=Y.cmtSubmitBtn.classList;
if(!e.contains(ut)){
var t=zt(Y.input.value),n=t.valid,o=t.content;
n&&(mt.cmtWriteDialog.disableSubmit(),e.add(ut),Y.cmtSubmitBtn.disabled=!0,Y.cmtSubmitBtn.title=wt,
Ht({
content:o,
successEnd:function(){
mt.cmtFixedInput.setInput(""),setTimeout(function(){
nt=!1,Zt();
},10);
},
fail:function(){
e.remove(ut),Y.cmtSubmitBtn.disabled=!1,Y.cmtSubmitBtn.title="";
}
}));
}
},tn=function(){
a.on(Y.mylistFolder,"click",Ft),a.on(window,"scroll",At),a.on(window,"scroll",Tt),
a.bindVisibilityChangeEvt(function(e){
e&&!kt(Y.cmtContainer)&&Bt({
notFirstRender:!0,
forceRefresh:!0,
cb:Et
}),w.isIOS&&"hidden"===document.visibilityState&&Zt(!0);
});
var e=function t(){
Y.mylistFolder?kt(Y.mylistFolder)&&(y.report(19462,_extends({
CommentId:parseInt(mt.commentId,10)||0,
actiontype:1,
wording:"??????????????????",
number:mt.myList.count,
devicetype:1
},H)),a.off(window,"scroll",t)):a.off(window,"scroll",t);
};
a.on(window,"scroll",e),e(),m.bindDebounceScrollEvent(St),lt?a.tap(Y.inputPC,function(){
jt(Y.inputPC),$.show(Y.inputPC);
}):!function(){
b.onGetKeyboardHeight(function(e){
var t=e.keyboard;
it&&(clearTimeout(it),it=null),!nt&&Jt(t);
}),a.on(ft,"click",function(e){
var t=e.target;
if(t.classList.contains("js_cmt_addbtn")){
mt.curCmtAddBtn=t;
var n=window.getComputedStyle(Y.commentWriteAreaInner),o=n.marginTop,i=n.marginBottom;
tt=!0,nt=!1,Y.commentWriteArea.style.height=Y.commentWriteAreaInner.offsetHeight+parseInt(o,10)+parseInt(i,10)+"px",
Y.commentWriteArea.classList.add(_t),Y.commentWriteArea.setAttribute("aria-hidden","false"),
Ct(Y.commentWriteMask),mt.isVoiceover||(it=setTimeout(function(){
mt.isVoiceover=!0,mt.cmtFixedInput.disableHack();
},1e3)),w.isIOS?(s.invoke("handleMPPageAction",{
action:"opInputAccessoryView",
show:!1
}),Y.input.focus()):setTimeout(function(){
return Y.input.focus();
});
}
});
var e=null;
switch(a.on(Y.input,"touchstart",function(t){
nt=!1,Y.cmtEmotionBtn.classList.remove(gt),w.isAndroid?setTimeout(function(){
return Y.input.focus();
}):Y.input.focus(),e=1===t.touches.length?t.touches[0]:null;
}),a.on(Y.input,"paste",function(e){
var t=e.clipboardData.getData("text"),n=k.getLength(t),o=k.getLength(Y.input.value);
if(o+n>E){
e.preventDefault();
for(var i=E-o,s="",m=0,a=t.length;a>m&&i>0&&(i-=/[^\x00-\xff]/.test(t[m])?1:.5,!(0>i));m++)s+=t[m];
var c=Y.input,r=c.value.substring(0,c.selectionStart),l=c.value.substring(c.selectionEnd),d=c.selectionStart+s.length;
c.value=r+s+l,mt.cmtFixedInput.setPlaceholder(c.value),$t(),c.scrollTop=c.scrollHeight,
c.setSelectionRange(d,d);
}
}),a.on(Y.input,"keydown",function(e){
if(!e.altKey&&!e.ctrlKey)switch(e.keyCode){
case 8:
case 9:
case 12:
case 16:
case 17:
case 18:
case 20:
case 27:
case 33:
case 34:
case 35:
case 36:
case 37:
case 38:
case 39:
case 40:
case 45:
case 46:
case 144:
case 175:
case 174:
case 179:
case 173:
case 172:
case 180:
case 170:
break;

default:
k.getLength(Y.input.value)>=E&&e.preventDefault();
}
}),a.on(Y.cmtCancel,"click",Zt),a.on(Y.commentWriteMask,"touchstart",Zt),a.on(Y.cmtWriteTitle,"touchstart",function(e){
return e.preventDefault();
}),Y.commentWriteAreaInner.addEventListener("touchmove",function(t){
if(t.target===Y.input)if(null===e)t.preventDefault();else{
var n=t.changedTouches[0].clientY-e.clientY;
(Y.input.scrollTop<=0&&n>0||Y.input.scrollTop>=Y.input.scrollHeight-Y.input.offsetHeight&&0>n)&&t.preventDefault();
}else t.preventDefault();
},{
passive:!1
}),w.isAndroid?a.on(window,"resize",function(){
setTimeout(function(){
if(tt){
var e=0===window.orientation||180===window.orientation?"vertical":"horizontal",t=bt[e],n=m.getInnerHeight();
t>n?Xt():(!nt&&Zt(),n>t&&(bt[e]=n));
}
},300);
}):a.on(Y.input,"blur",function(){
ot=setTimeout(function(){
!mt.isVoiceover&&Zt(),ot=null;
});
}),a.on(Y.cmtEmotionBtn,"click",function(){
ot&&(clearTimeout(ot),ot=null),mt.cmtEmotionPanel.isShow?(nt=!1,w.isAndroid?setTimeout(function(){
return Y.input.focus();
}):Y.input.focus()):(Y.cmtEmotionBtn.classList.add(gt),Y.cmtEmotionBtn.setAttribute("aria-pressed",!0),
nt=!0,Y.input.blur()),mt.cmtEmotionPanel.toggle();
}),a.on(Y.cmtSubmitBtn,"click",function(){
ot&&(clearTimeout(ot),ot=null),en();
}),a.on(Y.keyboardTool,"touchstart",function(e){
var t=e.target;
t===Y.cmtEmotionBtn||t===Y.cmtSubmitBtn&&!t.classList.contains(ut)||e.preventDefault();
}),vt){
case 2:
break;

case 1:
m.listenMpPageAction(function(e){
"deleteComment"===e.action&&mt.cmtList.remove({
myId:e.personal_comment_id
}),"deleteCommentReply"===e.action&&mt.cmtList.remove({
type:"reply",
myId:e.personal_comment_id,
replyId:e.replyId
}),"praiseComment"===e.action&&(e.reply_id&&0!==e.reply_id?(mt.cmtList.setLikeInfo({
type:"reply",
myId:e.personal_comment_id,
replyId:e.reply_id,
likeStatus:e.is_like
}),mt.cmtDialog.setReplyLikeInfo({
myId:e.personal_comment_id,
replyId:e.reply_id,
likeStatus:e.is_like
})):mt.cmtList.setLikeInfo({
myId:e.personal_comment_id,
likeStatus:e.is_like
}));
});
break;

case 0:
Y.goback&&a.on(Y.goback,"click",function(e){
e.preventDefault(),Kt(),jt(Y.fakebar);
}),o.os.ios&&window.__second_open__&&!function(){
var e=null,t=null;
a.on(window,"orientationchange",function(){
"none"!==Y.fakebar.style.display&&(clearTimeout(e),e=setTimeout(function(){
window.innerWidth!==parseFloat(getComputedStyle(Y.fakebar).width)&&(clearTimeout(t),
Y.mine.style.height=m.getInnerHeight()+"px",window.scrollBy&&window.scrollBy(0,1),
t=setTimeout(function(){
window.scrollBy&&window.scrollBy(0,-1),Y.mine.style.height="";
},100));
},50));
});
}();
}
}();
},nn=function(e){
if(mt.canC2CReply=0!==(256&e.test_flag),mt.onlyFansCanComment=e.only_fans_can_comment,
mt.nickName=e.nick_name,mt.isFans=e.is_fans,mt.headImg=e.logo_url,mt.commentCount=e.comment_count,
mt.onlyFansDaysCanComment=e.only_fans_days_can_comment,mt.isFansDays=e.is_fans_days,
mt.articleContent=e.articleContent||g.getId("img-content"),window._has_comment=!0,
console.log("inwechat",yt,"commentid",mt.commentId),!yt||0===Number(mt.commentId))return void(window._has_comment=!1);
var t=g.getId("js_cmt_container");
ft&&(t.insertAdjacentHTML("afterbegin",r.tmpl(u,{
deviceIsPc:lt,
cmtSubmitTitle:wt
})),mt.cmtWriteDialog=new h({
globalData:mt,
canC2CReply:mt.canC2CReply,
onSubmit:function(e){
var t=zt(e),n=t.valid,o=t.content;
n&&(mt.cmtWriteDialog.disableSubmit(),Ht({
content:o,
successEnd:function(){
mt.cmtWriteDialog.hide(),mt.cmtWriteDialog.setInputValue(""),F(R.kComment);
},
fail:function(){
mt.cmtWriteDialog.enableSubmit();
}
}));
}
}),ft.innerHTML=r.tmpl(p,{
isWxWork:rt
})),lt?document.body.classList.add("pages_skin_pc"):0===vt&&document.body.insertAdjacentHTML("beforeend",r.tmpl(_,{
textPageTitle:1*window.item_show_type===10?g.getId("js_text_content").innerHTML.replace(/<(\/?)(?=((a(\s|>))|(\/a))).*?>/g,""):window.msg_title.html(1)
},!1)),Y={
article:g.getId("js_article"),
mine:g.getId("js_cmt_mine"),
main:g.getId("js_cmt_main"),
goback:g.getId("js_cmt_goback"),
list:g.getId("js_cmt_list"),
mylistContainer:g.getId("js_my_list_container"),
mylist:g.getId("js_my_list"),
mylistFolder:g.getId("js_my_list_folder"),
mylistFooter:g.getId("js_my_list_footer"),
mylistOld:g.getId("js_my_list_old"),
morelist:g.getId("js_cmt_morelist"),
loading:g.getId("js_cmt_loading"),
fakebar:g.getId("js_fake_bar"),
statement:g.getId("js_cmt_statement"),
myCmtLoading:g.qsAll(".js_mycmt_loading"),
cmtContainer:t,
commentPC:g.getId("js_comment_pc"),
inputPC:g.getId("js_cmt_input_pc"),
containerPC:g.getId("js_cmt_container_pc"),
addbtnPC:g.getId("js_cmt_addbtn_pc"),
emotionSwitchPC:g.getId("js_emotion_wrp_pc"),
inputHolder:g.getId("js_cmt_input_holder"),
commentWriteArea:g.getId("js_cmt_write_area"),
updateDialog:g.getId("js_update_dialog"),
updateCancel:g.getId("js_update_cancel"),
updateConfirm:g.getId("js_update_confirm"),
deleteReplyPanel:g.getId("js_delete_reply_panel"),
deleteReplyConfirm:g.getId("js_delete_reply_confirm"),
deleteReplyCancel:g.getId("js_delete_reply_cancel"),
cmtDialog:g.getId("js_cmt_dialog")
},Y.commentWriteArea&&(Y.commentWriteMask=Y.commentWriteArea.nextElementSibling,
Y.commentWriteAreaInner=g.qs(".js_cmt_write_area_inner",Y.commentWriteArea),Y.cmtWriteTitle=g.qs(".js_title",Y.commentWriteAreaInner),
Y.cmtCancel=g.qs(".js_cancel",Y.commentWriteAreaInner),Y.input=g.qs(".js_cmt_input",Y.commentWriteAreaInner),
Y.keyboardTool=g.qs(".js_keyboard_tool",Y.commentWriteAreaInner),Y.cmtEmotionBtn=g.qs(".js_emotion_btn",Y.keyboardTool),
Y.cmtSubmitBtn=g.qs(".js_cmt_submit_btn",Y.keyboardTool),Y.cmtTips=g.qs(".js_cmt_tips",Y.keyboardTool)),
lt||(mt.cmtFixedInput=new L({
input:Y.input,
onFocus:function(){
w.isIOS&&Xt();
},
onInput:$t
}),mt.isVoiceover&&mt.cmtFixedInput.disableHack(),mt.cmtEmotionPanel=new D({
input:Y.input,
limit:E,
counter:function(e){
return k.getLength(e);
},
onChange:function(e){
var t=e.type,n=e.value;
return"action"===t&&"done"===n?void en():($t(),mt.cmtFixedInput.setPlaceholder(Y.input.value),
void(nt=!0));
},
onShow:function(e){
tt?Jt(e,!0):mt.cmtEmotionPanel.hide();
},
onTouchmove:function(e){
e.stopPropagation();
}
})),mt.cmtDialog=new C({
globalData:mt,
canAddComment:P,
onGetReplyList:function(e,t){
t.filter(function(e){
return 2===e.is_from;
}).forEach(function(t){
mt.cmtList.setLikeInfo({
type:"reply",
contentId:e,
replyId:t.reply_id,
likeStatus:t.reply_like_status,
likeNum:t.reply_like_num
});
});
}
}),mt.cmtList=new v({
globalData:mt,
container:Y.list,
type:"elected",
canAddComment:P,
onPraise:function(e,t,n,o,i){
!mt.canC2CReply&&mt.myList.setLikeInfo({
type:e,
contentId:t,
replyId:n,
likeStatus:o,
likeNum:i
}),mt.cmtDialog.setReplyLikeInfo({
contentId:t,
replyId:n,
likeStatus:o,
likeNum:i
});
},
onRender:function(){
St();
},
onAdd:function(e,t,n,o,i){
!mt.canC2CReply&&mt.myList.add({
data:e,
mode:t,
type:n,
contentId:o,
pos:i
}),St();
},
onRemove:function(e,t,n){
!mt.canC2CReply&&mt.myList.remove({
type:e,
contentId:t,
replyId:n.reply_id
}),St();
},
onEmpty:function(e){
"comment"===e&&(jt(Y.main),jt(Y.statement),Rt());
},
beforeShowKeyboard:function(){
Ut();
}
}),mt.myList=new v({
globalData:mt,
container:Y.mylist,
type:"mine",
canAddComment:P,
onPraise:function(e,t,n,o,i){
!mt.canC2CReply&&mt.cmtList.setLikeInfo({
type:e,
contentId:t,
replyId:n,
likeStatus:o,
likeNum:i
});
},
onRender:function(){
St();
},
onAdd:function(e,t,n,o,i){
!mt.canC2CReply&&"reply"===n&&mt.cmtList.add({
data:e,
mode:t,
type:n,
contentId:o,
pos:i
}),St(),Ft(),Rt();
},
onRemove:function(e,t,n){
Y.mylistFolder&&mt.myList.showTopItems()&&Ft(),!mt.canC2CReply&&mt.cmtList.remove({
type:e,
contentId:t,
replyId:n.reply_id
}),St();
},
onEmpty:function(){
jt(Y.mylistContainer),jt(Y.mylistFooter),M&&document.body.classList.add(pt),Rt();
},
beforeShowKeyboard:function(){
Ut();
}
}),window.cl=mt.cmtList,window.ml=mt.myList,0===vt&&window.__second_open__&&o.os.ios&&(Y.mine.style.marginBottom=getComputedStyle(Y.fakebar).height),
!e.notAutoGetComment&&Bt({
forceRefresh:!0,
cb:Et
}),"1"===i.getQuery("js_my_comment")&&(1===vt?qt():0!==vt||lt||Vt(!0)),Ot(),tn(),
lt?$=new j({
placeholder:"???????????????????????????????????????????????????",
submitText:"??????",
length:E,
onSubmit:Mt,
onHide:function(){
Ct(Y.inputPC);
}
}):0===vt&&($=new j({
placeholder:"???????????????????????????????????????????????????",
submitText:"??????",
length:E,
onSubmit:Mt,
onClick:function(){
window.__second_open__&&jt(Y.fakebar);
},
onBlur:function(){
"none"!==Y.mine.style.display&&Ct(Y.fakebar);
}
}),$.show(g.getId("js_comment_input_old"),{
renderType:"append"
}));
},on=function(){
lt||0!==vt||(l.on("comment",function(){
Yt(null,!0);
}),l.on("article",function(){
It&&console.log("FakeHash on article"),Kt();
}),l.on(function(e){
"comment"===e&&Kt();
}));
};
return on(),{
initComment:nn,
getCommentData:Bt,
renderComment:Et
};
});define("appmsg/like_and_share.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/jsapi/core.js","pages/utils.js","appmsg/retry_ajax.js","appmsg/set_font_size.js","common/comm_report.js","appmsg/related_article.js","appmsg/like_profile.js","common/utils.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","appmsg/appmsg_report.js","appmsg/rec_report_key.js"],function(e,i,o,t){
"use strict";
var n=e("biz_common/dom/event.js"),s=e("biz_common/dom/class.js"),r=e("biz_wap/jsapi/core.js"),a=e("pages/utils.js"),m=a.formatReadNum,l=e("appmsg/retry_ajax.js"),d=e("appmsg/set_font_size.js"),c=e("common/comm_report.js"),p=e("appmsg/related_article.js"),_=e("appmsg/like_profile.js"),w=e("common/utils.js"),k=e("biz_wap/utils/device.js"),u=e("biz_wap/utils/mmversion.js"),g=e("appmsg/appmsg_report.js"),h=e("appmsg/rec_report_key.js"),j=h.RecActionType,b=h.reportRecAction,f=function(e){
return document.getElementById(e);
},v=function(e){
e.style.display="block";
},y={
likeNum:0,
isLike:0,
likeDom:f("like_old"),
likeNumDom:f("likeNum_old"),
shareDom:f("js_bottom_share"),
collectDom:f("js_bottom_collect"),
oprRightDom:f("js_bottom_opr_right"),
shareBottomBtn:f("js_bottom_share_btn"),
likeBottomBtn:f("js_bottom_zan_btn"),
similarZanCard:f("js_similar_video_card"),
overflowFontScale:1
},B=function(e){
_&&_.renderLikeProfile&&_.renderLikeProfile(e);
},D=function(){
var e=0,i=/(?:\?|&)search_click_id=([^&]*)(?:&|$)/.exec(window.location.search);
try{
e=1*window.atob(window.biz);
}catch(o){}
var t={
BizUin:e,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0,
EventType:4,
search_click_id:i?i[1]:0
};
c.report(19048,t);
},N=function(){
setTimeout(function(){
s.removeClass(y.oprRightDom,"sns_opr_overflow");
var e=y.oprRightDom.querySelectorAll(".js_media_tool_meta"),i=f("js_toobar3").getBoundingClientRect().width,o=0;
if(e&&e.length){
f("js_like_wording").textContent="??????",f("js_parise_wording").textContent="???";
for(var t=0;t<e.length;t++)o+=e[t].getBoundingClientRect().width;
if(console.log("benchmarkWidth",i,o),e.length>1&&(i-o)/(e.length-1)<20){
f("js_like_wording").textContent="",f("js_parise_wording").textContent="";
for(var n=0,t=0;t<e.length;t++)n+=e[t].getBoundingClientRect().width;
(i-n)/(e.length-1)<20&&s.addClass(y.oprRightDom,"sns_opr_overflow");
}
}
},50);
},z=function(){
s.addClass(y.likeDom,"praised"),y.likeNum++;
var e=y.likeNumDom.innerHTML;
("10???+"!==e||"100k+"!==e)&&(y.likeNumDom.innerHTML=m(y.likeNum)),y.likeNumDom.style.display="",
p&&p.render&&p.render("praise"),B(["like"]),y.likeBottomBtn.setAttribute("aria-describedby","js_a11y_zan_btn_tips");
},L=function(){
s.removeClass(y.likeDom,"praised"),y.likeNum--;
var e=y.likeNumDom.innerHTML;
y.likeNum>=0&&"10???+"!==e&&"100k+"!==e&&(y.likeNumDom.innerHTML=m(y.likeNum)),0===y.likeNum&&(y.likeNumDom.style.display="none"),
y.likeBottomBtn.removeAttribute("aria-describedby");
},x=[],I=function(e){
"function"==typeof e&&x.push(e);
},C=function(e){
y.isLike=y.isLike?0:1,y.isLike?z():L();
var i=/(?:\?|&)search_click_id=([^&]*)(?:&|$)/.exec(window.location.search);
l({
url:"/mp/appmsg_like?__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&like="+y.isLike+"&f=json&appmsgid="+window.appmsgid+"&itemidx="+window.itemidx,
data:{
scene:window.source,
appmsg_like_type:1,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
is_temp_url:window.is_temp_url||0,
style:e||0,
exptype:window.exptype||"",
expsessionid:window.expsessionid||"",
search_click_id:i?i[1]:0
},
type:"POST"
}),x.forEach(function(e){
e(y.isLike,y.likeNum);
});
},S=function(e){
return y.likeBottomBtn&&y.likeBottomBtn.disabled===!0?void 0:window.is_temp_url?void("5"!==window.item_show_type||!w.isNativePage()||k.os.pc?window.weui.alert("???????????????????????????"):t("???????????????????????????")):void C(e);
};
n.on(y.likeDom,"click",function(){
S(),b(j.kLike,y.isLike?1:0);
}),n.on(y.shareDom,"click",function(){
y.shareBottomBtn&&y.shareBottomBtn.disabled===!0||(D(),r.invoke("handleMPPageAction",{
action:"share"
}),B(["share"]),b(j.kShare));
}),n.on(y.collectDom,"click",function(){
r.invoke("handleMPPageAction",{
action:"doFavorite"
}),p&&p.render&&p.render("favorite"),B(["collect"]),g.shareReport({
link:window.msg_link||window.cgiData&&window.cgiData.msg_link,
action_type:24,
share_source:2
}),b(j.kFavorite);
});
var R=function(){
N(),d.onFontScaleChange(N),window.addEventListener("resize",N);
},T=function(e){
var i=e.shareShow,o=e.likeShow,t=e.likeNum,n=e.isLike,r=e.shareGray,a=e.likeGray;
y.likeNum=t,y.isLike=n,i&&y.shareDom&&(k.os.pc?k.os.windows&&u.getInner()>="63010000"&&v(y.shareDom):v(y.shareDom)),
r&&y.shareBottomBtn&&(y.shareBottomBtn.disabled=!0),o&&y.likeDom&&v(y.likeDom),a&&y.likeBottomBtn&&(y.likeBottomBtn.disabled=!0),
o&&y.likeNumDom&&0!==t&&(y.likeNumDom.innerHTML=m(y.likeNum),y.likeNumDom.style.display="",
n&&(s.addClass(y.likeDom,"praised"),y.likeBottomBtn.setAttribute("aria-describedby","js_a11y_zan_btn_tips"))),
(u.isWechat&&(k.os.iphone&&u.getInner()>"17001000"||k.os.android&&u.getInner()>"27001300")||k.os.windows&&u.getInner()>="63010000")&&v(y.collectDom),
R(),x.forEach(function(e){
e(y.isLike,y.likeNum);
});
};
return{
initLikeShareDom:T,
triggerLike:S,
onLikeChange:I,
renderProfile:B
};
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js","appmsg/log.js","complain/tips.js","appmsg/retry_ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","common/utils.js","appmsg/loading.js","appmsg/like_and_share.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","pages/utils.js","appmsg/related_article.js","appmsg/rec_report_key.js"],function(require,exports,module,alert){
"use strict";
function qs(e){
return document.getElementById(e);
}
function showAppToast(e,i){
JSAPI.invoke("handleMPPageAction",{
action:"showToast",
wording:e||"",
status:i||"success"
});
}
function initLikeEvent(opt){
function show(e){
e.style.display="";
}
function hide(e){
e.style.display="none";
}
function vShow(e){
e.style.visibility="visible";
}
function vHide(e){
e.style.visibility="hidden";
}
function clear(e){
e.value="";
}
function showLoading(){
commonUtils.isNativePage()?showAppToast("?????????","loading"):Loading.show("?????????");
}
function hideLoading(){
commonUtils.isNativePage()?showAppToast("","dismissloading"):Loading.hide();
}
function showToast(e){
commonUtils.isNativePage()?showAppToast(e):(el_toastMsg.innerHTML=e,show(el_likeToast),
setTimeout(function(){
hide(el_likeToast);
},1e3));
}
function alert2(e){
"5"!==window.item_show_type||!commonUtils.isNativePage()||Device.os.pc?window.weui.alert(e):alert(e);
}
function failAlert(e){
return e&&e.length>maxLikeCommentWord?void alert2("?????????????????????%s???".replace("%s",maxLikeCommentWord)):void alert2("??????????????????????????????");
}
function isAppCommentAvailable(){
return mmversion.isWechat?Device.os.ipad?!1:mmversion.isInMiniProgram?!1:mmversion.isIOS&&mmversion.gtVersion("7.0.8")?!0:mmversion.isAndroid&&mmversion.gtVersion("7.0.8")?!0:commonUtils.isNativePage()&&(mmversion.isIOS||mmversion.isAndroid)?!0:!1:!1;
}
var scrollTop,el_like=opt.likeAreaDom,el_likeNum=opt.likeNumDom,showType=opt.showType,prompted=opt.prompted,haokanLock=!1,startY,jumpWowLock=!1,el_likeToast=qs("js_like_toast"),el_likeBtn=qs("js_like_btn"),el_toastMsg=qs("js_toast_msg"),el_likeEducate=qs("js_like_educate"),el_friend_like=qs("js_friend_like_area"),el_go_wow=qs("js_go_wow"),el_likeComment=qs("js_like_comment"),el_bcommentPanel2=qs("js_comment_panel"),el_bcommentPanel2Wrp=qs("js_comment_wrp"),el_likeCommentShare=qs("js_like_comment_share"),el_likeCommentText=qs("js_comment_text"),el_commentCancel=qs("js_comment_cancel"),el_commentConfirm=qs("js_comment_confirm"),el_commentErrorMsg=qs("js_like_comment_msg"),el_commentCurrentCount=qs("js_like_current_cnt"),el_commentArea=qs("js_comment_area"),el_panelLikeTitle=qs("js_panel_like_title"),el_wowClosePanel=qs("wow_close_inform"),el_wowCloseAck=qs("wow_close_ack"),el_alertPanel=qs("js_alert_panel"),el_alertContent=qs("js_alert_content"),el_alertConfirm=qs("js_alert_confirm");
if(el_like&&el_likeNum){
window.appmsg_like_type&&2===window.appmsg_like_type?jsmonitorReport.setSum(114217,0,1):window.appmsg_like_type&&1===window.appmsg_like_type&&jsmonitorReport.setSum(114217,1,1);
var like_report=function(){
var e=el_like.getAttribute("like"),i=el_likeNum.innerHTML,t=parseInt(e)?parseInt(e):0,o=t?0:1,n=parseInt(i)?parseInt(i):0,s=opt.appmsgid||opt.mid,l=opt.itemidx||opt.idx;
if(reportRecAction(RecActionType.kSeen,o),t){
if(1!==appmsg_like_type)return void sendRecommendAjax(0);
Class.removeClass(el_like,opt.className),el_like.setAttribute("like",0),n>0&&"100000+"!==i&&(el_likeNum.innerHTML=n-1==0?"???":n-1);
}else if(1===appmsg_like_type)el_like.setAttribute("like",1),Class.addClass(el_like,opt.className),
"100000+"!==i&&(el_likeNum.innerHTML=n+1);else if(2===appmsg_like_type)return void initRecommendPanel();
var a=/(?:\?|&)search_click_id=([^&]*)(?:&|$)/.exec(window.location.search);
RetryAjax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+o+"&f=json&appmsgid="+s+"&itemidx="+l,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
action_type:o?1:2,
device_type:window.devicetype,
exptype:window.exptype||"",
expsessionid:window.expsessionid||"",
search_click_id:a?a[1]:0
},
type:"POST"
});
},initRecommendPanel=function(){
sendRecommendAjax(1,"",1);
},isBeenUnvisible=function(e){
function i(){
return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
}
return e.offsetTop+el_likeComment.offsetHeight-i()>=commonUtils.getInnerHeight()?!0:!1;
},disableMove=function(){
document.addEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.addEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.addEventListener("touchmove",preventText,!1);
},enableMove=function(){
document.removeEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.removeEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.removeEventListener("touchmove",preventText,!1);
},preventMove=function(e){
var i=e.target;
"TEXTAREA"!==i.tagName&&"BUTTON"!==i.tagName&&(e.preventDefault(),e.stopPropagation());
},getTouchStart=function(e){
var i=e.targetTouches||[];
if(i.length>0){
var t=i[0]||{};
startY=t.clientY;
}
},preventText=function(e){
var i=!1,t=e.changedTouches,o=this.scrollTop,n=this.offsetHeight,s=this.scrollHeight;
if(t.length>0){
var l=t[0]||{},a=l.clientY;
i=a>startY&&0>=o?!1:startY>a&&o+n>=s?!1:!0,i||e.preventDefault();
}
},isShow=function(e){
return"none"===e.style.display||"hidden"===e.style.visibility?!1:""===e.style.display||"block"===e.style.display||"visible"===e.style.visibility?!0:void 0;
},validataComment=function(e,i){
var t=e.value.replace(/^\s+|\s+$/g,"");
sendRecommendAjax(1,t,i);
},showEducatePanel=function(e,i,t){
show(el_likeComment),el_likeComment.focus();
var o=window.source||window.cgiData&&window.cgiData.source||0;
return o&&(o=parseInt(o,10),94===o)?void(e&&5===e&&hide(el_likeComment)):void(i||(show(el_likeEducate),
t&&t>0&&(el_friend_like.innerHTML="%s??????????????????,".replace("%s",t),document.getElementById("js_friend_like_word").innerText="??????????????????-?????????????????????",
show(el_friend_like)),1===showType&&(hide(el_go_wow),hide(el_likeCommentShare)),
isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment),educateExpose()));
},setBtnLike=function(){
el_like.setAttribute("like",1),Class.addClass(el_likeBtn,opt.className),realLikeNum+=1;
var e=el_likeNum.innerHTML;
"10???+"!==e&&(el_likeNum.innerHTML=formatReadNum(realLikeNum)),el_likeBtn.setAttribute("aria-describedby","js_a11y_like_btn_tips"),
renderProfile(["zaikan"]);
},setLike2Status=function(e,i,t){
var o="?????? ";
switch(showType){
case 1:
switch(prompted){
case 0:
showEducatePanel(e,i,t),show(el_likeComment),el_likeComment.focus(),prompted=1;
break;

case 1:
hide(el_likeEducate),showToast(o);
}
setBtnLike();
break;

case 2:
switch(hide(el_bcommentPanel2),el_bcommentPanel2Wrp.setAttribute("aria-hidden","true"),
el_likeCommentShare.focus(),clear(el_likeCommentText),prompted){
case 0:
showEducatePanel(e,i,t),5===e&&hide(el_likeCommentShare);
break;

case 1:
(4===e||5===e)&&showToast(4===e?"?????????":o);
}
5!==e&&(4===e&&"none"!==el_likeEducate.style.display?hide(el_likeCommentShare):4===e?hide(el_likeComment):(show(el_commentArea),
show(el_likeCommentShare),1===prompted&&hide(el_likeEducate),show(el_likeComment),
el_likeComment.focus(),isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment))),
4!==e&&setBtnLike(),prompted=1;
}
enableMove(),commonUtils.isNativePage()&&JSAPI.invoke("handleHaokanAction",{
action:"closeComment"
}),log("[Appmsg] zaikan set like success");
},unsetLike2Status=function(e){
1===e?setTimeout(function(){
alert2(" ?????????????????????????????????");
},20):showToast("?????????"),2===showType&&isShow(el_likeComment)&&hide(el_likeComment);
var i=el_likeNum.innerHTML;
Class.removeClass(el_likeBtn,opt.className),el_like.setAttribute("like",0),el_likeComment&&hide(el_likeComment),
realLikeNum-=1,realLikeNum>=0&&"10???+"!==i&&(el_likeNum.innerHTML=formatReadNum(realLikeNum)),
el_likeBtn.removeAttribute("aria-describedby"),log("[Appmsg] zaikan set unlike success");
},sendRecommendAjax=function sendRecommendAjax(like,comment,type,clientType){
if(!haokanLock){
log("[Appmsg] prepare to send appmsg like request"),showLoading();
var appmsgid=opt.appmsgid||opt.mid,itemidx=opt.itemidx||opt.idx;
haokanLock=!0;
var action_type;
like?(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(12),action_type=type):(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(13),
action_type=2);
var searchClickId=/(?:\?|&)search_click_id=([^&]*)(?:&|$)/.exec(window.location.search);
ajax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
comment:comment?comment:"",
prompted:1,
style:clientType||showType,
action_type:action_type,
passparam:window.passparam,
request_id:(new Date).getTime(),
device_type:window.devicetype,
exptype:window.exptype||"",
expsessionid:window.expsessionid||"",
search_click_id:searchClickId?searchClickId[1]:0
},
type:"POST",
success:function success(res){
haokanLock=!1;
var data=eval("("+res+")");
hideLoading(),log("[Appmsg] success send appmsglike like "+like+" return value is "+JSON.stringify(res)),
0==data.base_resp.ret?(like?(setLike2Status(type,data.is_eu_user,data.friend_like_num),
relatedArticles&&relatedArticles.render&&relatedArticles.render("like")):unsetLike2Status(data.has_comment),
connectWithApp(like,comment,clientType)):failAlert(comment);
},
error:function(){
hideLoading(),failAlert(),haokanLock=!1;
}
});
}
};
JSAPI.on("menu:haokan",function(e){
if(!(window.__video_need_fe_fullscreen__&&window.__video_fullscreen__&&commonUtils.supportImmersiveMode)){
if(window.is_temp_url)return void alert2("???????????????????????????");
var i=0===parseInt(e.recommend)?0:1;
if(0===i)sendRecommendAjax(i,"",2,clientShowType);else{
var t="";
t=e.comment;
var o=1===e.scene?4:5;
sendRecommendAjax(i,t,o,clientShowType);
}
}
});
var connectWithApp=function(e,i){
var t={
origin:"mp",
isLike:e?1:0,
url:encodeURIComponent(msg_link.html(!1)),
content:i?i:""
};
JSAPI.invoke("handleHaokanAction",{
action:actionString,
recommend:e?1:0,
server_data:JSON.stringify(t)
},function(e){
console.log("handleHaokanAction",e);
}),JSAPI.invoke("handleHaokanAction",{
action:actionForClient,
permission:1,
recommend:e?1:0
},function(e){
console.log("handleHaokanAction for client",e);
}),window.__article_liked__=e;
},goWoW=function(){
jumpWowLock||(jumpToWowClickReport(),jumpWowLock=!0,JSAPI.invoke("handleHaokanAction",{
action:"jumpToWow",
extParams:JSON.stringify({
autoDropLoad:!0
})
},function(e){
jumpWowLock=!1,console.log("jumpToWow",e),e.err_msg&&"handleHaokanAction:fail_entrance_not_open"===e.err_msg?show(el_wowClosePanel):"handleHaokanAction:fail  action not support"===e.err_msg||"handleHaokanAction:fail, action not support"===e.err_msg?alert2("??????????????????????????????????????????"):"handleHaokanAction:ok"===e.err_msg&&hide(el_likeComment),
JSAPI.invoke("handleHaokanAction",{
action:actionString,
server_data:JSON.stringify({
origin:"mp",
autoDropLoad:!0
})
},function(e){
console.log("sendAutoDropLoad",e);
});
}));
},likeClickReport=function(){
ajax({
url:"/mp/appmsgreport?action=appmsglikeclickcomment&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
});
},likeExpose=function e(){
var i=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,t=qs("like3").offsetTop,o=opt.appmsgid||opt.mid,n=opt.itemidx||opt.idx;
i+commonUtils.getInnerHeight()>t&&t>=i&&(ajax({
url:"/mp/appmsgreport?action=appmsglikeexposure&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+o+"&itemidx="+n,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
}),DomEvent.off(window,"scroll",e));
},educateExpose=function i(){
var e=(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,
opt.appmsgid||opt.mid),t=opt.itemidx||opt.idx,o=window.item_show_type,n=window.enterid||window.cgiData&&window.cgiData.enterid||"";
el_likeEducate&&"none"!=el_likeEducate.style.display&&commonUtils.getInnerHeight()>el_likeEducate.getBoundingClientRect().top&&el_likeEducate.getBoundingClientRect().top+el_likeEducate.getBoundingClientRect().height>0&&(ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,t,window.source,window.subscene,1,o,sessionid,n]
},
async:!1,
timeout:2e3
}),DomEvent.off(window,"scroll",i));
},jumpToWowClickReport=function(){
var e=opt.appmsgid||opt.mid,i=opt.itemidx||opt.idx,t=window.enterid||window.cgiData&&window.cgiData.enterid||"";
ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,i,window.source,window.subscene,2,window.item_show_type,sessionid,t]
},
async:!1,
timeout:2e3
});
};
DomEvent.on(el_alertConfirm,"click",function(){
el_alertPanel.style.display="none";
}),DomEvent.on(el_like,"click",function(e){
if(el_likeBtn.disabled!==!0){
if(window.is_temp_url)return void alert2("???????????????????????????");
var i=el_like.getBoundingClientRect();
return log("[Appmsg zaikan location] top: "+i.top+" left: "+i.left+" bottom: "+i.bottom+" right: "+i.right),
log("[Appmsg zaikan click] clientX: "+e.clientX+" clientY: "+e.clientY),e.currentTarget.classList.contains("js_disabled")?!1:(like_report(e),
!1);
}
}),DomEvent.on(el_wowCloseAck,"click",function(){
hide(el_wowClosePanel);
}),DomEvent.on(qs("js_mask_2"),"mousedown",function(){
hide(el_bcommentPanel2),el_bcommentPanel2Wrp.setAttribute("aria-hidden","true"),
el_likeCommentShare.focus(),clear(el_likeCommentText),vHide(el_commentErrorMsg),
enableMove();
}),DomEvent.on(el_commentConfirm,"mousedown",function(){
validataComment(el_likeCommentText,4);
}),DomEvent.on(el_commentCancel,"mousedown",function(){
hide(el_bcommentPanel2),el_bcommentPanel2Wrp.setAttribute("aria-hidden","true"),
el_likeCommentShare.focus(),clear(el_likeCommentText),vHide(el_commentErrorMsg),
enableMove();
}),DomEvent.on(el_likeCommentShare,"click",function(){
return commonUtils.isNativePage()?void JSAPI.invoke("handleHaokanAction",{
action:"writeComment",
style:"white"
}):(scrollTop=document.body.scrollTop||document.documentElement.scrollTop,1*window.item_show_type===10&&(el_panelLikeTitle.innerHTML=window.msg_title.replace(/<(\/?)(?=((a(\s|>))|(\/a))).*?>/g,"")),
show(el_bcommentPanel2),el_bcommentPanel2Wrp.setAttribute("aria-hidden","false"),
el_bcommentPanel2Wrp.focus(),el_likeCommentText.focus(),el_commentConfirm.setAttribute("disabled","disabled"),
disableMove(),void likeClickReport());
}),DomEvent.on(el_likeCommentText,"focus",function(){}),DomEvent.on(el_likeCommentText,"blur",function(){
window.scrollTo(0,scrollTop);
}),DomEvent.on(window,"scroll",likeExpose),DomEvent.on(window,"scroll",educateExpose),
DomEvent.on(el_go_wow,"click",goWoW);
var scrollToShow=function(e){
e.scrollIntoView(!1);
};
DomEvent.on(el_likeCommentText,"input",function(e){
var i=el_likeCommentText.value.replace(/^\s+|\s+$/g,"");
i.length>maxLikeCommentWord?(el_commentCurrentCount.innerHTML=i.length,vShow(el_commentErrorMsg)):vHide(el_commentErrorMsg),
i.length>0&&i.length<=maxLikeCommentWord?el_commentConfirm.removeAttribute("disabled"):el_commentConfirm.setAttribute("disabled","disabled"),
Device.os.ios&&e.data&&doubleInputChar.indexOf(e.data)>-1&&(focusTag=!0);
}),DomEvent.on(el_likeCommentText,"click",function(){
Device.os.ios&&focusTag&&(el_likeCommentText.blur(),el_likeCommentText.focus(),focusTag=!1);
});
}
}
function showLikeNum(e){
var i=e||{};
if(i.show){
var t=i.likeAreaDom,o=i.likeNumDom,n=document.getElementById("js_like_btn");
t&&(t.style.display=i.likeAreaDisplayValue,t.style.visibility="",i.liked&&(1===appmsg_like_type?Class.addClass(t,i.className):Class.addClass(n,i.className)),
t.setAttribute("like",i.liked?"1":"0"),i.liked&&n.setAttribute("aria-describedby","js_a11y_like_btn_tips"),
i.likeGray&&(n.disabled=!0));
var s=1===appmsg_like_type?"???":"";
realLikeNum=i.likeNum||s,1===appmsg_like_type?(parseInt(realLikeNum)>1e5?realLikeNum="100000+":"",
o&&(o.innerHTML=realLikeNum)):2===appmsg_like_type&&(o.innerHTML=formatReadNum(realLikeNum));
}
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),Base64=require("biz_common/base64.js"),jsmonitorReport=require("biz_wap/utils/jsmonitor_report.js"),log=require("appmsg/log.js"),Tips=require("complain/tips.js"),RetryAjax=require("appmsg/retry_ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),actionString="submitMsgToTL",actionForClient="update_recommend_status",mmversion=require("biz_wap/utils/mmversion.js"),commonUtils=require("common/utils.js"),Loading=require("appmsg/loading.js"),_require=require("appmsg/like_and_share.js"),renderProfile=_require.renderProfile,realLikeNum,clientShowType=5,Device=require("biz_wap/utils/device.js"),payReportUtils=require("appmsg/pay_report_utils.js"),_require2=require("pages/utils.js"),formatReadNum=_require2.formatReadNum,relatedArticles=require("appmsg/related_article.js"),_require3=require("appmsg/rec_report_key.js"),RecActionType=_require3.RecActionType,reportRecAction=_require3.reportRecAction,maxLikeCommentWord=200,focusTag=!1,doubleInputChar=["??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","[]","??????","{}","()","<>"];
return{
initLikeEvent:initLikeEvent,
showLikeNum:showLikeNum
};
});define("appmsg/read.js",["pages/utils.js","biz_wap/utils/device.js"],function(e){
"use strict";
function i(e){
var i=e||{},n=1586325600,d="undefined"!=typeof window.ct?parseInt(window.ct,10):0;
if(i.show){
var s=i.readAreaDom,o=i.readNumDom;
s&&(s.style.display=i.readAreaDisplayValue);
var r=i.readNum||1,w=window.ori_send_time||window.cgiData&&window.cgiData.ori_send_time||0,p=/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),m=1566025200,u=1565971200,_=a.os.ios||p?m:u;
parseInt(w,10)>_&&window.item_show_type&&"5"===window.item_show_type&&(n>d?("en"!==window.LANG&&(document.getElementById("readTxt").innerText="??????"),
r=i.videouv||0):("en"!==window.LANG&&(document.getElementById("readTxt").innerText="??????"),
r=i.readNum||0)),1===window.appmsg_like_type?(parseInt(r,10)>1e5?r="100000+":"",
o&&(o.innerHTML=r)):2===window.appmsg_like_type&&(o.innerHTML=t(r),""===o.innerHTML&&(o.innerHTML="0"));
}
}
var n=e("pages/utils.js"),t=n.formatReadNum,a=e("biz_wap/utils/device.js");
return{
showReadNum:i
};
});define("pages_new/modules/utils/event_bus.js",[],function(){
"use strict";
function n(n,e){
delete i[n],e&&delete o[n];
}
function e(n,e,t){
"function"==typeof e&&(t?(o[n]||(o[n]=[]),o[n].push(e)):(i[n]||(i[n]=[]),i[n].push(e)));
}
function t(e){
for(var t=arguments.length,f=Array(t>1?t-1:0),u=1;t>u;u++)f[u-1]=arguments[u];
o[e]&&o[e].forEach(function(n){
"function"==typeof n&&n.apply(void 0,f);
}),i[e]&&(i[e].forEach(function(n){
"function"==typeof n&&n.apply(void 0,f);
}),n(e));
}
function f(n,e,t){
if("function"==typeof e)if(t&&o[n]){
var f=o[n].indexOf(e);
-1!==f&&o[n].splice(f,1);
}else if(i[n]){
var f=i[n].indexOf(e);
-1!==f&&i[n].splice(f,1);
}
}
var i={},o={};
return{
on:e,
emit:t,
remove:f,
clean:n
};
});define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">?????????????????????</div>\n            <p class="share_appmsg_desc">?????????????????????????????????????????????????????????</p>\n        </div>\n    </a>\n</div>\n';
});define("appmsg/appmsgext.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js","biz_common/utils/wxgspeedsdk.js","biz_common/utils/url/parse.js"],function(e){
"use strict";
function i(e){
var i={
biz:"",
appmsg_type:"",
mid:"",
sn:"",
album_id:"",
idx:"",
scene:"",
title:"",
ct:"",
abtest_cookie:"",
devicetype:"",
version:"",
is_need_ticket:0,
is_need_ad:0,
comment_id:"",
is_need_reward:0,
both_ad:0,
reward_uin_count:0,
send_time:"",
msg_daily_idx:"",
is_original:0,
is_only_read:0,
req_id:"",
pass_ticket:"",
is_temp_url:0,
more_read_type:0,
rtId:"",
rtKey:"",
appmsg_like_type:1,
related_video_sn:"",
vid:"",
is_pay_subscribe:0,
pay_subscribe_uin_count:0,
has_red_packet_cover:0,
related_video_num:e.isPublicRelatedVideo?10:5,
album_video_num:5,
onSuccess:function(){},
onError:function(){}
};
for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o]);
console.info("[(????????????????????????) ????????????]: ",new Date),t({
url:"/mp/getappmsgext?f=json&mock="+n.getQuery("mock"),
data:{
r:Math.random(),
__biz:i.biz,
appmsg_type:i.appmsg_type,
mid:i.mid,
sn:i.sn,
idx:i.idx,
scene:i.scene,
title:encodeURIComponent(i.title.htmlDecode()),
ct:i.ct,
abtest_cookie:i.abtest_cookie,
devicetype:i.devicetype.htmlDecode(),
version:i.version.htmlDecode(),
is_need_ticket:i.is_need_ticket,
is_need_ad:i.is_need_ad,
comment_id:i.comment_id,
is_need_reward:i.is_need_reward,
both_ad:i.both_ad,
reward_uin_count:i.is_need_reward?i.reward_uin_count:0,
send_time:i.send_time,
msg_daily_idx:i.msg_daily_idx,
is_original:i.is_original,
is_only_read:i.is_only_read,
req_id:i.req_id,
pass_ticket:i.pass_ticket,
is_temp_url:i.is_temp_url,
item_show_type:i.item_show_type,
tmp_version:1,
more_read_type:i.more_read_type,
appmsg_like_type:i.appmsg_like_type,
related_video_sn:i.related_video_sn,
related_video_num:i.related_video_num,
vid:i.vid,
is_pay_subscribe:i.is_pay_subscribe,
pay_subscribe_uin_count:i.pay_subscribe_uin_count,
has_red_packet_cover:i.has_red_packet_cover,
album_id:0x11fd1c7c75070000,
album_video_num:i.album_video_num,
cur_album_id:window.appmsg_album_info?window.appmsg_album_info.id:"",
is_public_related_video:i.isPublicRelatedVideo,
encode_info_by_base64:i.encodeInfoByBase64
},
type:"POST",
dataType:"json",
rtId:i.rtId,
rtKey:i.rtKey,
rtDesc:_,
async:!0,
success:function(e){
if(console.info("[(????????????????????????) ????????????]: ",new Date,e),s("[Appmsg] success get async data"),
"function"==typeof i.onSuccess&&i.onSuccess(e),e)try{
s("[Appmsg] success get async data, async data is: "+JSON.stringify(e));
}catch(t){}else s("[Appmsg] success get async data, async data is empty");
if(!d&&"5"===window.item_show_type){
var _=Date.now()-window.logs.pagetime.page_begin;
if(d=!0,Math.random()>.1)return;
a.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:29,
time:_
}]
}),a.send();
}
},
error:function(){
s("[Appmsg] error get async data, biz="+i.biz+", mid="+i.mid),"function"==typeof i.onError&&i.onError();
},
complete:function(){
"function"==typeof i.onComplete&&i.onComplete();
}
});
}
var s=e("appmsg/log.js"),t=e("biz_wap/utils/ajax.js"),_=e("rt/appmsg/getappmsgext.rt.js"),a=e("biz_common/utils/wxgspeedsdk.js"),n=e("biz_common/utils/url/parse.js"),d=void 0;
return{
getData:i
};
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">??????: <#=source_nickname#></span>\n</span>    ';
});define("pages/video_ctrl.js",[],function(){
"use strict";
function i(i){
i=i||window;
var n=i.cgiData;
return n&&2==n.ori_status&&1==n.is_mp_video&&(n.nick_name||n.hit_username)?!0:!1;
}
function n(i){
return i=i||window,!1;
}
function t(){
return!1;
}
function e(){
return-1!=w.indexOf("&dd=1")?!1:"54"==r.appmsg_type?!1:!0;
}
function o(){
var i;
if(parent==window)i=window;else try{
{
r.__videoDefaultRatio;
}
i=r;
}catch(n){
i=window;
}
var t=i.__videoDefaultRatio||16/9;
return"54"==i.appmsg_type?t:t;
}
var r=window.withoutIframe?window:window.parent.window,w=window.location.href;
return{
showPauseTips:e,
showVideoLike:t,
showVideoDetail:n,
showReprint:i,
getRatio:o
};
});define("pages/create_txv.js",["biz_wap/utils/jsmonitor_report.js","biz_wap/utils/ajax_load_js.js","pages/loadscript.js"],function(e){
"use strict";
function o(){
"function"!=typeof window.__createTxVideo&&(window.__createTxVideo=function(e){
n(e);
});
}
function n(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError),
r.Load({
url:a.jsUrl,
version:a.jsVersion,
useCache:!0,
win:e.win,
onSuccess:function(s){
2!=s.code&&3!=s.code||0!=s.queueIndex||(i.setSum("64728","111",1),i.setSum("64728","112",1));
var u=e.win||window,c=!0;
if(u.Txp&&"function"==typeof u.Txp.Player?(c=!0,0==s.queueIndex&&(2==s.code?i.setSum("64728","116",1):3==s.code&&i.setSum("64728","117",1))):(c=!1,
0==s.queueIndex&&(2==s.code?i.setSum("64728","114",1):3==s.code&&i.setSum("64728","115",1))),
c){
var d=t({
win:u,
options:e
});
n({
player:d
});
}else r.ClearCache({
win:u,
version:a.jsVersion,
url:a.jsUrl
}),o();
},
onError:function(o){
0==o.queueIndex&&(i.setSum("64728","111",1),i.setSum("64728","118",1),51==o.code?i.setSum("64728","119",1):52==o.code?i.setSum("64728","120",1):53==o.code&&i.setSum("64728","121",1)),
s(e);
}
});
}
function t(e){
var o=e.win||window,n=e.options,t=new o.Txp.Player({
containerId:n.containerId,
vid:n.vid,
width:n.width,
height:n.height,
autoplay:n.autoplay===!0?!0:!1,
allowFullScreen:n.allowFullScreen===!0?!0:!1,
chid:17
});
return t;
}
function s(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError);
var s=a.jsUrl;
s+=-1==s.indexOf("?")?"?"+a.customerParam+"="+a.jsVersion:"&"+a.customerParam+"="+a.jsVersion,
u({
win:e.win,
url:s,
timeout:1e4,
type:"JS",
callback:function(){
i.setSum("64728","122",1);
var s=e.win||window;
if(s.Txp&&"function"==typeof s.Txp.Player){
i.setSum("64728","124",1);
var r=t({
win:e.win,
options:e
});
n({
player:r
});
}else i.setSum("64728","123",1),o();
},
onerror:function(e){
switch(i.setSum("64728","122",1),1*e){
case 400:
a.jsLoadState=4,i.setSum("64728","125",1);
break;

case 500:
a.jsLoadState=5,i.setSum("64728","126",1);
break;

default:
a.jsLoadState=6,i.setSum("64728","127",1);
}
o();
}
});
}
var i=e("biz_wap/utils/jsmonitor_report.js"),r=e("biz_wap/utils/ajax_load_js.js"),u=e("pages/loadscript.js"),a={
customerParam:"wxv",
jsUrl:"//vm.gtimg.cn/tencentvideo/txp/js/iframe/api.js?",
jsVersion:"v1"
};
return{
createTxVideo:n,
createGlobalFunc:o
};
});define("appmsg/pay_read/pay_read_utils.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","common/utils.js","pages/utils.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var t=e("biz_wap/jsapi/core.js"),i=e("biz_common/dom/event.js"),n=e("biz_common/dom/class.js"),a=e("biz_wap/utils/mmversion.js"),o=e("biz_wap/utils/device.js"),r=e("appmsg/pay_report_utils.js"),s=e("common/utils.js"),d=e("pages/utils.js"),w=function(e){
var t=arguments.length<=1||void 0===arguments[1]?document:arguments[1];
return t.querySelector(e);
},c=window.payFreeGift,f=function(){
for(var e=Object.create(null),t=1;6>t;t++)e[t]=s.once(r.reportSend.bind(null,t));
return function(t){
return e[t]();
};
}(),u=document.documentElement&&document.documentElement.clientWidth||window.innerWidth;
try{
var l=w("#img-content");
if(l){
var p=l.getBoundingClientRect();
p.width&&(u=p.width);
}
}catch(_){
console.error(_);
}
var m=32,g=8,y='<div class="pay__tag-reward js_reward"></div>',h={
dom:{
payFee:[w("#js_pay_panel .js_pay_fee"),w("#js_pay_panel_bottom .js_pay_fee")],
wrap:w("#js_pay_wall_wrap"),
payNum:w("#js_pay_num"),
rewardNumWrap:w("#js_pay_reward_num_wrap"),
rewardNum:w("#js_pay_reward_num"),
wall:w("#js_pay_wall"),
sendTips:w("#js_pay_preview_tips"),
giftBar:w("#js_pay_gift_bar"),
giftBarTitle:w("#js_pay_gift_bar_title"),
sendGift:w("#js_send_pay_gift")
},
perLine:null,
data:{}
},v=function(e){
e&&(/^http/.test(e)||(e=location.protocol+"//"+location.host+e),e.indexOf("#")<0&&(e+="#wechat_redirect"),
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(a.isIOS||a.isAndroid||a.isWp)?t.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1===t.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e);
},b=function(){
var e=h.dom,t=h.data,i=parseInt(t.pay_cnt,10);
e.payNum.innerHTML=i>=1e4||t.is_pay_cnt_cut?"en"===window.LANG?"10k+":"1???+":i+"",
t.rewardTotal?(e.rewardNum.innerHTML=t.rewardTotal+(t.rewardTotalCut?"+":""),e.rewardNumWrap.style.display=""):e.rewardNumWrap.style.display="none";
for(var n=3*h.perLine,a="",o=0,r=t.pay_head_imgs.length;r>o;o++){
var s=t.reward_status_list?t.reward_status_list[o]:0;
if(a+='<div class="pay__avatar-wrp"><img alt="" src="'+t.pay_head_imgs[o]+'">'+(s?y:"")+"</div>",
o>=n-1)break;
}
e.wall.innerHTML=a;
},j=function(){
var e=h.dom;
i.tap(e.payNum,function(){
v("/mp/paysub?action=evaluate_show_page&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&link="+encodeURIComponent(window.msg_link)+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&is_fans="+window.isFans);
}),i.tap(e.rewardNum,function(){
var e=(Math.ceil((s.getInnerHeight()-188)/42)+1)*Math.floor((u-15)/42);
v("/mp/reward?act=getrewardheads&__biz="+window.biz+"&appmsgid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&offset=0&count="+e+"&source=1");
}),i.tap(e.sendGift,function(){
if(o.os.iphone||o.os.ipad||o.os.android){
var t=h.data.gift_url.html(),i="",a=t.indexOf("#");
-1!==a&&(i=t.substring(a),t=t.substring(0,a)),f(n.hasClass(e.giftBar,"pay__gift-send_static")?5:3),
v(t+"&sessionid="+window.sessionid+"&enterid="+window.enterid+"&scene="+window.source+"&subscene="+window.subscene+i);
}else window.weui.alert("??????????????????????????????");
});
},B=function(e,t,o){
if(window.isPaySubscribe){
var s=h.dom;
if(e=JSON.parse(JSON.stringify(e)),window.can_use_wecoin?window.isPaid||(e.wecoin_amount?s.payFee.forEach(function(t){
t.innerHTML=""+e.wecoin_amount,t.parentNode.dataset.ready=1;
}):e.fee&&s.payFee.forEach(function(t){
t.innerHTML=""+e.fee/10,t.parentNode.dataset.ready=1;
})):(!e.fee||window.isPaid||window.IAPProductInfo||!function(){
var t=Math.floor(e.fee/100);
s.payFee.forEach(function(e){
!window.iapPriceInfo.currency_symbol&&(e.innerHTML="???"+t+".00"),e.parentNode.dataset.ready=1;
});
}(),a.isIOS&&e.fee&&(window.IAPProductInfo?("CNY"!==window.IAPProductInfo.currencyCode&&r.report110809(40),
r.reportOverseaPay(window.IAPProductInfo.currencyCode,100*window.IAPProductInfo.price.toFixed(2),1,window.IAPProductInfo.invokeTime,window.IAPProductInfo.countryCode,0,window.IAPProductInfo.err_msg+(window.IAPProductInfo.err_desc?"__"+window.IAPProductInfo.err_desc:""))):window.oriProductFee=Math.floor(e.fee/100))),
e.pay_cnt){
if(e.is_paid&&!c){
e.pay_head_imgs.unshift(e.my_head_img),e.reward_status_list instanceof Array?e.reward_status_list.unshift(e.my_reward_status):e.reward_status_list=[e.my_reward_status];
var w=3*h.perLine;
e.pay_head_imgs.length>w&&(e.pay_head_imgs=e.pay_head_imgs.slice(0,w));
}
e.rewardTotal=t.rewardTotal,e.rewardTotalCut=t.rewardTotalCut,h.data=e,s.wrap.style.height="",
s.wrap.style.marginTop="",s.wrap.style.visibility="visible",b(),!o&&j();
}else s.wrap.style.display="none";
if(s.giftBar)if(window.payGiftsCount-e.gifted_count>0&&!c){
s.giftBar.style.display="";
var u=window.localStorage.getItem("paySuc"),l=h.dom.giftBar.getBoundingClientRect(),p=l.top;
"1"===u&&p>window.innerHeight?!function(){
window.localStorage.setItem("paySuc","0"),h.dom.giftBar.className="pay__gift-send show",
h.dom.giftBarTitle.innerText="????????????????????????????????????",f(2);
var e=8+window.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--sab")),t=0,a=0,o=!1,r=0,s=function(e){
n.hasClass(h.dom.giftBar,"show")&&(o=!0,r=e.touches[0].clientY,t=a);
},d=function(i){
i.preventDefault();
var s=i.touches[0].clientY,d=s-r;
n.hasClass(h.dom.giftBar,"show")&&o&&(d+t>=0&&e>=d+t?(h.dom.giftBar.style.transform="translate3d(0, "+(d+t)+"px, 0)",
a=d+t):d+t>e?(h.dom.giftBar.style.transform="translate3d(0, "+e+"px, 0)",a=e):0>d+t&&(h.dom.giftBar.style.transform="translate3d(0, 0, 0)",
a=0));
},w=function p(){
o=!1,n.hasClass(h.dom.giftBar,"show")&&a===e&&(h.dom.giftBar.className="pay__gift-send",
i.off(h.dom.giftBar,"touchstart",s),i.off(h.dom.giftBar,"touchmove",d),i.off(h.dom.giftBar,"touchend",p));
},c=window.scrollY,u=window.innerHeight/3,l=function _(){
var e=h.dom.wrap.getBoundingClientRect(),t=e.top+e.height-48;
t<=window.innerHeight?(h.dom.giftBarTitle.innerText="????????????????????????????????????",h.dom.giftBar.className="pay__gift-send pay__gift-send_static",
h.dom.giftBar.style.transform="translate3d(0, 0, 0)",i.off(h.dom.giftBar,"touchstart",s),
i.off(h.dom.giftBar,"touchmove",d),i.off(h.dom.giftBar,"touchend",w),i.off(window,"scroll",_),
f(4)):window.scrollY-c>u&&(h.dom.giftBar.className="pay__gift-send");
};
i.on(window,"scroll",l),i.on(h.dom.giftBar,"touchstart",s),i.on(h.dom.giftBar,"touchmove",d),
i.on(h.dom.giftBar,"touchend",w);
}():!n.hasClass(h.dom.giftBar,"show")&&p<=window.innerHeight&&(h.dom.giftBar.className="pay__gift-send pay__gift-send_static",
f(4));
}else s.giftBar.style.display="none";
s.sendTips&&!function(){
var e=function t(){
return d.checkExposedStatus(s.sendTips)?(console.log("report send tips."),f(1),i.off(window,"scroll",t),
!0):!1;
};
e()||i.on(window,"scroll",e);
}();
}
},I=function(){
if(!window.isPaySubscribe)return 0;
if(null===h.perLine){
var e=m+g;
h.perLine=Math.floor(.8*u/e),h.dom.wall.parentNode.style.width=h.perLine*e-g+"px";
}
return h.perLine;
};
return{
init:B,
getCountPerLine:I
};
});