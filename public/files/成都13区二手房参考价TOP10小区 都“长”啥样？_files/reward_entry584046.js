function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var o=arguments[e];
for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);
}
return t;
},_createClass=function(){
function t(t,e){
for(var o=0;o<e.length;o++){
var i=e[o];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i);
}
}
return function(e,o,i){
return o&&t(e.prototype,o),i&&t(e,i),e;
};
}();
define("appmsg/comment/comment_dialog/comment_dialog.js",["biz_common/dom/event.js","pages/utils.js","biz_wap/utils/ajax.js","biz_common/utils/url/parse.js","biz_wap/utils/mmversion.js","biz_wap/utils/jsmonitor_report.js","pages/mod/bottom_modal.js","appmsg/comment/comment_list/comment_list.js","biz_common/tmpl.js","appmsg/comment/comment_dialog/c2c_not_support_dialog.html.js","appmsg/comment/comment_dialog/comment_dialog.html.js","biz_wap/utils/device.js","pages/scrollY.js","appmsg/set_font_size.js","appmsg/comment/comment_report.js"],function(t){
"use strict";
var e=t("biz_common/dom/event.js"),o=t("pages/utils.js"),i=t("biz_wap/utils/ajax.js"),n=t("biz_common/utils/url/parse.js"),a=t("biz_wap/utils/mmversion.js"),s=t("biz_wap/utils/jsmonitor_report.js"),l=t("pages/mod/bottom_modal.js"),p=t("appmsg/comment/comment_list/comment_list.js"),c=t("biz_common/tmpl.js"),r=t("appmsg/comment/comment_dialog/c2c_not_support_dialog.html.js"),d=t("appmsg/comment/comment_dialog/comment_dialog.html.js"),m=t("biz_wap/utils/device.js"),u=t("pages/scrollY.js"),y=t("appmsg/set_font_size.js"),g=t("appmsg/comment/comment_report.js"),_=g.report22214,h=m.os.pc,f=10,L="https://itunes.apple.com/cn/app/id414478124?mt=8&ls=1",v="https://support.weixin.qq.com/update/",D="page_no_scroll",b="weui-half-screen-dialog_headline",j=function(t){
return window.weui.alert(t,{
className:"weui-pop-zindex-primary"
});
},k=function(){
function t(e){
_classCallCheck(this,t),this.initDialog(e),this.initNotSupportDialog();
}
return _createClass(t,[{
key:"initDialog",
value:function(t){
var i=this;
this.globalData=t.globalData,this.replyData={},this.myId2ContentIdMap={},this.replyListData=null,
this.cmtData=null,this.onGetReplyList=t.onGetReplyList;
var n=document.createElement("div");
n.innerHTML=c.tmpl(d,{
deviceIsPc:h
});
var s=o.qs(".js_bd",n),r=function(){
i.replyListData&&i.replyListData.continue_flag&&i.getReplyList({
success:function(t){
i.replyList.add({
data:t,
type:"reply",
cmtData:i.cmtData
}),i.ending&&(i.ending.style.display=i.replyListData.continue_flag?"none":""),i.dialog.finishPullUpLoad();
},
getNextPage:!0
});
},m=function(){
i.replyListData.scrollTop=i.getScrollTop(),i.replyListData.exposedStatus={
comment:[],
reply:[]
},[i.commentList.getItemList(),i.replyList.getItemList()].forEach(function(t,e){
var o=i.replyListData.exposedStatus[e?"reply":"comment"];
t.forEach(function(t){
t.isExposed&&o.push(t.dataset[e?"replyId":"contentId"]);
});
}),i.replyListData=null,i.cmtData=null,i.dialog.finishPullUpLoad(),o.enableSelect();
};
this.dialogTop=-1,this.dialogBottom=-1,this.canCheckExposedStatus=!1;
var u=null,g=null;
if(h)!function(){
n=o.qs(".js_comment_dialog_pc",n),document.body.appendChild(n);
var t=o.qs(".js_bd_main",s),a=!1;
i.dialog={
pullingUpLock:!1,
show:function(){
n.style.display="",document.body.classList.add(D),i.canCheckExposedStatus=!0,i.checkExposedStatus();
},
hide:function(){
m(),n.style.display="none",document.body.classList.remove(D);
},
scrollTo:function(){
s.scrollTo.apply(s,arguments);
},
getScrollEle:function(){
return s;
},
finishPullUpLoad:function(){
this.pullingUpLock=!1;
},
checkReachBoundary:function(){
a&&0!==s.scrollTop||(a=!0,setTimeout(function(){
a=!1;
},50),setTimeout(function(){
!i.dialog.pullingUpLock&&s.scrollTop+s.offsetHeight+100>t.offsetHeight&&(r(),i.dialog.pullingUpLock=!0);
},100));
}
},e.on(o.qs(".js_close",n),"click",function(){
i.hideDialog();
}),e.on(s,"scroll",function(){
i.dialog.checkReachBoundary(),i.checkExposedStatus();
});
}();else{
this.dialog=new l(s,{
top:"16px",
title:"留言",
extClass:"discuss_more_dialog_wrp weui-half-screen-dialog_wrp",
scroll2Hide:!0,
sideslip2Hide:!0,
onPullUpLoad:r,
onHide:m,
onShowAfterAnimation:function(){
i.canCheckExposedStatus=!0,i.checkExposedStatus();
},
onScroll:function(){
i.dialog.contentArea.classList[i.dialog.contentAreaWrp.scrollTop>0?"add":"remove"](b),
i.checkExposedStatus();
}
});
var _=o.qs(".js_reply_btn",s);
this.replyWrp=_.parentNode,u=function(){
i.replyWrp.style.display="none";
},g=function(){
i.replyWrp.style.display="";
},e.on(_,"click",function(t){
!i.globalData.isVoiceover&&u(),i.commentList.commentReply("comment",i.commentList.getItemList()[0],i.commentList.data[0],null,t.target.classList.contains("js_emotion_btn"));
}),y.onFontScaleChange(function(){
return i.setBdPaddingBottom();
}),a.isIOS&&e.on(document,"visibilitychange",function(){
"hidden"===document.visibilityState&&i.dialog.hide(!0);
});
}
this.bd=s,this.loading=o.qs(".js_loading",s),this.ending=o.qs(".js_end",s),this.empty=o.qs(".js_empty",s),
this.placeholder=o.qs(".js_placeholder",s),this.commentList=new p({
globalData:t.globalData,
container:o.qs(".js_comment_list",s),
type:"comment",
canAddComment:t.canAddComment,
onPraise:function(t,e,o,n,a){
i.globalData.cmtList.setLikeInfo({
type:t,
contentId:e,
likeStatus:n,
likeNum:a,
force:!0
});
},
onRender:function(){
i.replyListData&&i.replyListData.exposedStatus&&!function(){
var t=i.replyListData.exposedStatus.comment;
i.commentList.getItemList().forEach(function(e){
t.indexOf(e.dataset.contentId)>-1&&(e.isExposed=!0);
});
}(),i.checkExposedStatus();
},
onRemove:function(t,e){
i.globalData.cmtList.remove({
type:t,
contentId:e
});
},
onEmpty:function(){
i.hideDialog();
},
onKeyboardShow:u,
onKeyboardHide:g,
onCanNotReply:g
}),this.replyList=new p({
globalData:t.globalData,
container:o.qs(".js_reply_list",s),
type:"reply",
canAddComment:t.canAddComment,
onPraise:function(t,e,o,n,a){
i.globalData.cmtList.setLikeInfo({
type:t,
contentId:e,
replyId:o,
likeStatus:n,
likeNum:a
});
},
onRender:function(){
i.replyListData&&i.replyListData.exposedStatus&&!function(){
var t=i.replyListData.exposedStatus.reply;
i.replyList.getItemList().forEach(function(e){
t.indexOf(e.dataset.replyId)>-1&&(e.isExposed=!0);
});
}(),i.checkExposedStatus();
},
onAdd:function(t,e,o,n){
i.globalData.cmtList.updateReplyLen({
newCnt:i.cmtData.reply_new.reply_total_cnt,
contentId:n
}),i.checkExposedStatus();
},
onRemove:function(t,e,o){
var n=i.cmtData.reply_new.reply_total_cnt;
i.globalData.cmtList.remove({
type:t,
contentId:e,
replyId:o.reply_id
}),i.cmtData.reply_new.reply_total_cnt=n,i.globalData.cmtList.updateReplyLen({
newCnt:n,
contentId:e
}),i.checkExposedStatus(),i.dialog.checkReachBoundary(!1,!0);
},
onEmpty:function(t){
"reply"===t&&(i.empty.style.display="");
},
onKeyboardShow:u,
onKeyboardHide:g,
onCanNotReply:g
});
}
},{
key:"showDialog",
value:function(t,e){
var i=this;
o.disableSelect(),this.cmtData=t;
var n=t.content_id;
this.replyListData=this.replyData[n]||null,this.getReplyList({
success:function(){
var t=i.replyListData.reply_list;
t.length?(i.empty.style.display="none",i.replyList.render(t,i.cmtData),i.ending&&(i.ending.style.display=i.replyListData.continue_flag?"none":"")):i.empty.style.display="",
i.dialog.scrollTo(0,i.replyListData.scrollTop||0),setTimeout(function(){
i.dialog.finishPullUpLoad();
},300);
},
topReplyId:e
}),this.commentList.render([t]),this.placeholder&&(this.placeholder.innerHTML="回复 "+p.sliceNickname(t.nick_name)+"："),
this.dialog.show(),this.setBdPaddingBottom();
}
},{
key:"hideDialog",
value:function(){
this.dialog.hide();
}
},{
key:"setAriaHidden",
value:function(t){
this.dialog.setAriaHidden(t);
}
},{
key:"addReply",
value:function(t){
var e=t.data,o=t.mode,i=void 0===o?"push":o,n=t.replyId,a=this.replyListData.reply_list,s=0;
n&&!a.some(function(t){
return s++,t.reply_id===n;
})&&(s=-1),this.replyListData.reply_list="push"===i?s>0&&s<a.length?a.slice(0,s).concat(e,a.slice(s)):a.concat(e):s>0&&s<=a.length?a.slice(0,s-1).concat(e,a.slice(s-1)):e.concat(a);
}
},{
key:"addReplyAndRender",
value:function(t){
this.addReply(t),this.replyList.add({
data:t.data,
mode:t.mode,
type:"reply",
cmtData:this.cmtData,
pos:t.replyId
});
}
},{
key:"removeReply",
value:function(t){
var e=this.replyListData.reply_list,o=-1;
e.some(function(e){
return o++,e.reply_id===t;
})&&e.splice(o,1);
}
},{
key:"getReplyList",
value:function(t){
var e=this,o=t.success,a=t.getNextPage,s=void 0===a?!1:a,l=t.cmtData,p=void 0===l?this.cmtData:l,c=t.topReplyId,r=p.content_id;
new Promise(function(t,o){
var a=!0;
if(s||(null!==e.replyListData?(a=!1,t()):e.replyData[r]&&(e.replyListData=e.replyData[r],
a=!1,t())),a){
e.loading.style.display="",!s&&e.replyList.empty();
var l={
action:"getcommentreply",
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:e.globalData.commentId,
content_id:r,
id:p.id,
limit:f,
offset:s?e.replyListData.offset:0,
max_reply_id:s?e.replyListData.max_reply_id:p.reply_new.max_reply_id
};
void 0!==c&&(l.top_reply_id=c),i({
url:n.join("/mp/appmsg_comment",l,!0),
dataType:"json",
success:function(i){
if(i&&i.base_resp&&0===i.base_resp.ret){
var n=i.reply_list||{
reply_list:[]
};
s&&void 0!==e.replyListData.topReplyId&&(c=e.replyListData.topReplyId),void 0!==c&&(n.reply_list=n.reply_list.filter(function(t,e){
return!s&&0===e||t.reply_id!==c;
})),s?_extends(e.replyListData,{
max_reply_id:n.max_reply_id,
reply_list:e.replyListData.reply_list.concat(n.reply_list),
continue_flag:i.continue_flag,
offset:e.replyListData.offset+f
}):(n.continue_flag=i.continue_flag,n.offset=f,void 0!==c&&(n.topReplyId=c),e.replyData[r]=n,
e.myId2ContentIdMap[p.my_id]=r,e.replyListData=n),t(n.reply_list),"function"==typeof e.onGetReplyList&&e.onGetReplyList(r,n.reply_list);
}else o();
},
error:function(t){
console.error(t),o();
},
complete:function(){
e.loading.style.display="none";
}
});
}
}).then(o,function(){
j("系统错误，请稍后重试");
});
}
},{
key:"setReplyLikeInfo",
value:function(t){
var e=t.contentId,o=t.replyId,i=t.myId,n=t.likeStatus,a=t.likeNum;
void 0===e&&(e=this.myId2ContentIdMap[i]);
var s=this.replyData[e];
if(s){
var l=p.getDataByKey(s.reply_list,"reply_id",o);
l&&(l.reply_like_status=n,"number"!=typeof a&&(a=l.reply_like_num+(n?1:-1)),l.reply_like_num=a);
}
}
},{
key:"scrollY",
value:function(t,e){
var o={
el:this.dialog.contentAreaWrp,
y:t
};
e?o.speed=300:o.duration=.3,u.start(o);
}
},{
key:"setMarginBottom",
value:function(t){
this.bd.style.marginBottom=t+"px";
}
},{
key:"checkExposedStatus",
value:function(){
var t=this;
if(this.canCheckExposedStatus){
if(-1===this.dialogTop||-1===this.dialogBottom){
var e=this.dialog.getScrollEle().getBoundingClientRect();
this.dialogTop=e.top,this.dialogBottom=e.bottom;
}
[this.commentList.getItemList(),this.replyList.getItemList()].forEach(function(e,o){
var i=t[o?"replyList":"commentList"];
e.some(function(e){
if(!e.isExposed){
var o=e.getBoundingClientRect(),n=.5*o.height;
if(o.bottom>t.dialogTop+n&&o.top<t.dialogBottom-n){
e.isExposed=!0;
var a=e.dataset,s={
PersonalCommentId:1*a.myId,
ReplyId:0,
IsPopup:1,
IsReplyOther:0,
CommentReplyType:1
};
if(a.replyId){
var l=i.getData({
type:"reply",
contentId:a.contentId,
replyId:1*a.replyId
});
s.ReplyId=l.reply_id,s.IsReplyOther=l.to_nick_name&&l.to_content?1:0;
}
_(s);
}else if(o.top>=t.dialogBottom-n)return!0;
}
return!1;
});
});
}
}
},{
key:"getScrollTop",
value:function(){
return this.dialog.getScrollEle().scrollTop;
}
},{
key:"setBdPaddingBottom",
value:function(){
this.replyWrp&&(this.bd.style.paddingBottom=this.replyWrp.offsetHeight+"px");
}
},{
key:"initNotSupportDialog",
value:function(){
var t=this,i=document.createElement("div");
i.innerHTML=c.tmpl(r,{
comment_c2c_not_support_img:window.comment_c2c_not_support_img
});
var n=o.qs(".js_bd",i),p=o.qs(".js_ft",i);
this.notSupportDialog=new l(n,{
top:"16px",
hasHeader:!1,
footerEl:p,
extClass:"weui-half-screen-dialog_wrp"
}),i=null,e.tap(o.qs(".js_close",p),function(){
t.notSupportDialog.hide();
}),e.tap(o.qs(".js_update",p),function(){
s.setSum(110809,52,1),o.jumpUrl(a.isIOS?L:v,!0),t.notSupportDialog.hide();
});
}
},{
key:"showNotSupportDialog",
value:function(){
this.notSupportDialog.show();
}
}]),t;
}();
return k;
});function _defineProperty(e,t,n){
return t in e?Object.defineProperty(e,t,{
value:n,
enumerable:!0,
configurable:!0,
writable:!0
}):e[t]=n,e;
}
function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}
var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);
}
return e;
},_createClass=function(){
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
define("appmsg/comment/comment_list/comment_list.js",["biz_wap/ui/weui.js","biz_common/utils/string/html.js","biz_wap/jsapi/core.js","appmsg/i18n.js","biz_common/utils/url/parse.js","biz_wap/utils/ajax.js","appmsg/retry_ajax.js","biz_common/dom/event.js","pages/utils.js","common/utils.js","biz_wap/utils/openUrl.js","common/keyboard.js","common/actionSheet.js","common/navShadow.js","biz_wap/utils/jsmonitor_report.js","biz_common/tmpl.js","appmsg/comment/comment_list/comment_item.html.js","appmsg/comment/comment_list/item.html.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/emotion/emotion_pc.js","appmsg/emotion/emotion.js","appmsg/comment/comment_input/comment_input.js","appmsg/comment/comment_write_dialog/comment_write_dialog.js","pages/scrollY.js","appmsg/comment/comment_report.js","appmsg/comment/comment_length.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js"),e("biz_common/utils/string/html.js");
var t=e("biz_wap/jsapi/core.js"),n=e("appmsg/i18n.js"),i=e("biz_common/utils/url/parse.js"),o=e("biz_wap/utils/ajax.js"),a=e("appmsg/retry_ajax.js"),l=e("biz_common/dom/event.js"),r=e("pages/utils.js"),s=e("common/utils.js"),c=e("biz_wap/utils/openUrl.js"),m=e("common/keyboard.js"),p=e("common/actionSheet.js"),d=e("common/navShadow.js"),u=e("biz_wap/utils/jsmonitor_report.js"),y=e("biz_common/tmpl.js"),_=e("appmsg/comment/comment_list/comment_item.html.js"),f=e("appmsg/comment/comment_list/item.html.js"),g=e("biz_wap/utils/mmversion.js"),h=g.is_wxwork,v=g.isWechat,D=v&&!h,b=e("biz_wap/utils/device.js"),k=b.os.pc&&!h,w=e(k?"appmsg/emotion/emotion_pc.js":"appmsg/emotion/emotion.js"),L=e("appmsg/comment/comment_input/comment_input.js"),C=e("appmsg/comment/comment_write_dialog/comment_write_dialog.js"),I=e("pages/scrollY.js"),j=e("appmsg/comment/comment_report.js"),R=j.report22215,T=e("appmsg/comment/comment_length.js"),P="praised",S="js_item",x="js_comment_item",E="js_reply_item",N="js_comment_praise",H="js_reply_praise",M="praise_num",A="js_comment_del",z="js_reply_del",W="js_comment_main",B="js_extend_comment",K="discuss_media_active",O="js_can_reply",V="js_reply_btn",q="js_folder",F="wx_scroll_tansition",U="wx_margin_top_tansition",Y="js_comment_reply_pc",Q="js_reply_reply_pc",G="js_input_pc",X="js_dropdown",Z="js_comment_complain",$="js_reply_complain",J="commenting",et="openning",tt="comment_primary_input_multiline",nt=2,it=T.getLimit("reply"),ot=s.getInnerHeight(),at=60,lt=g.isAndroid&&m.canUseCancel,rt=m.onlyUseH5Keyboard,st=g.isAndroid?33:0,ct=r.getId("js_article"),mt=r.getId("activity-name")||"";
mt&&(mt=r.trim(mt.innerText)||"");
var pt=function(e){
return window.weui.alert(e,{
className:"weui-pop-zindex-primary"
});
},dt=function(){
var e=null,t=null;
return function(n){
null===e&&null===t&&(e=document.createElement("input"),e.setAttribute("aria-hidden","true"),
e.style.cssText="position: absolute; left: -999999px;",e.readOnly=!0,document.body.appendChild(e),
t=document.createElement("button"),t.setAttribute("aria-hidden","true"),t.style.cssText="position: absolute; left: -999999px;",
document.body.appendChild(t),l.on(t,"click",function(){
document.queryCommandEnabled("copy")?(document.execCommand("copy"),window.weui.toast("复制成功",750)):pt("复制失败");
})),e.value=n,e.select(),e.setSelectionRange(0,n.length),t.click();
};
}(),ut=function(){
return g.isWechat?g.isInMiniProgram?0:m.canUseKeyboard?2:g.isIOS&&(g.gtVersion("7.0.12")||s.isNativePage())?2:g.isAndroid&&(g.gtVersion("7.0.13")||s.isNativePage())?2:0:0;
}(),yt=function(e){
return e.replace("‮","");
},_t=function(e){
var t=document.createElement("div");
return t.innerHTML=e,Array.prototype.forEach.call(r.qsAll("div.discuss_message_content",t),function(e){
e.innerHTML=w.encode(e.innerHTML);
}),Array.prototype.forEach.call(r.qsAll("p.js_to_content",t),function(e){
e.innerHTML=w.encode(e.innerHTML);
}),t;
},ft=function(){
var e=null,t=null,n=null;
return function(i){
e||(e=r.getId("js_warning_toast"),t=r.qs(".js_content",e)),t.innerHTML=i,n?clearTimeout(n):e.style.display="",
n=setTimeout(function(){
e.style.display="none",n=null;
},750);
};
}(),gt=function(e){
return function(t){
var n=t.logo_url||e;
t.logo_url=n.indexOf("wx.qlogo.cn")>-1?n.replace(/\/132$/,"/96"):n;
};
}("http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0"),ht=function(){
function e(t){
var n=this;
switch(_classCallCheck(this,e),this.data=[],this.count=0,this.globalData=t.globalData,
this.renderContainer=t.container,this.container=document.createElement("div"),this.renderContainer.appendChild(this.container),
this.type=t.type,this.cmtData=null,this.canAddComment=t.canAddComment,this.onPraise=t.onPraise,
this.onRender=t.onRender,this.onAdd=t.onAdd,this.onRemove=t.onRemove,this.onEmpty=t.onEmpty,
this.onKeyboardShow=t.onKeyboardShow,this.onKeyboardHide=t.onKeyboardHide,this.beforeShowKeyboard=t.beforeShowKeyboard,
this.onCanNotReply=t.onCanNotReply,this.replyLock=!1,this.isShowAll="mine"!==t.type,
this.openningDropdown=null,this.curReplyEl=null,this.itemList=[],this.type){
case"elected":
this.scene=0;
break;

default:
this.scene="";
}
this.inputInitHeight=0,this.inputInitWidth=0,this.inputValue={},this.input=k?new L({
type:"reply",
placeholder:"留言被公众号精选后，将对所有人可见",
submitText:"回复",
length:it,
onChange:function(e,t){
if(n.inputInitHeight&&t.offsetHeight>n.inputInitHeight)e.classList.add(tt);else if(t.childNodes.length){
var i=document.createRange();
i.selectNodeContents(t.childNodes[0]),i.getBoundingClientRect().width>n.inputInitWidth?e.classList.add(tt):e.classList.remove(tt);
}else e.classList.remove(tt);
},
onSubmit:function(e){
var t=e.type,i=e.cmtData,o=e.replyData,a=e.key;
n.sendReply({
cnt:n.input.value,
type:t,
cmtData:i,
replyData:o,
success:function(){
n.inputValue[a]="";
}
});
},
onShow:function(e,t){
""===n.input.value&&(n.inputInitHeight=t.offsetHeight,n.inputInitWidth=t.offsetWidth-20);
},
onHide:function(e,t){
var i=t.key;
e.parentNode.classList.remove(J),n.inputValue[i]=n.input.value;
}
}):null,this.commentWriteDialog=new C({
globalData:this.globalData,
type:"elected"===this.type||"mine"===this.type?"reply":"dialog",
canC2CReply:this.globalData.canC2CReply,
onSubmit:function(e,t){
n.commentWriteDialog.disableSubmit(),n.sendReply({
cnt:e,
type:t.type,
cmtData:t.cmtData,
replyData:t.replyData,
success:function(){
n.commentWriteDialog.hide(),n.commentWriteDialog.setInputValue(""),n.inputValue[t.key]="";
},
fail:function(){
n.commentWriteDialog.enableSubmit();
}
});
},
onHide:function(e,t){
"comment"!==n.type&&(n.inputValue[t.key]=e,n.commentWriteDialog.setInputValue("")),
"elected"!==n.type&&"mine"!==n.type&&(r.disableSelect(),n.globalData.cmtDialog.setAriaHidden(!1));
}
}),this.bindEvent();
}
return _createClass(e,[{
key:"bindEvent",
value:function(){
var e,t,n=this,i=(e={},_defineProperty(e,N,function(e){
var t=e.cmtData;
n.praiseComment("comment",t);
}),_defineProperty(e,H,function(e){
var t=e.cmtData,i=e.replyData;
n.praiseComment("reply",t,i);
}),_defineProperty(e,A,function(e){
var t=e.cmtData;
n.delComment("comment",t);
}),_defineProperty(e,z,function(e){
var t=e.cmtData,i=e.replyData;
n.delComment("reply",t,i);
}),_defineProperty(e,B,function(e){
var t=e.cmtData;
n.globalData.cmtDialog.showDialog(t);
}),_defineProperty(e,q,function(e){
var t=e.el;
t.parentNode.classList.add("wx_folder_unfold");
}),e),o=function(e){
var t=e.e,n=e.el;
"newDiscuss"===t.animationName&&n.classList.remove("discuss_new_show");
};
this.delegatedContainer("animationend",(t={},_defineProperty(t,W,function(e){
return o(e);
}),_defineProperty(t,E,function(e){
return o(e);
}),t)),k?!function(){
var e,t;
_extends(i,(e={},_defineProperty(e,Y,function(e){
var t=e.el,i=e.cmtData,o=e.cmtEl;
n.commentReplyPC("comment",t,o,i);
}),_defineProperty(e,Q,function(e){
var t=e.el,i=e.cmtData,o=e.replyData,a=e.replyEl;
n.commentReplyPC("reply",t,a,i,o);
}),_defineProperty(e,X,function(e){
var t=e.el,i=t.parentNode;
n.openningDropdown!==i?(i.classList.add(et),n.openningDropdown=i):(i.classList.remove(et),
n.openningDropdown=null);
}),_defineProperty(e,Z,function(e){
var t=e.cmtData;
n.complain("comment",t);
}),_defineProperty(e,$,function(e){
var t=e.cmtData,i=e.replyData;
n.complain("reply",t,i);
}),e));
var o=function(){
n.openningDropdown.classList.remove(et),n.openningDropdown=null;
};
l.on(document,"click",function(e){
n.openningDropdown&&!r.isParent(e.target,n.openningDropdown)&&o();
},!1);
var a=function(e){
var t=e.e,i=e.el;
n.openningDropdown&&t.target===i&&o();
};
n.delegatedContainer("mouseout",(t={},_defineProperty(t,W,function(e){
return a(e);
}),_defineProperty(t,E,function(e){
return a(e);
}),t));
}():D&&!function(){
var e,t,o,a,s,c=function(e,t){
var i=t.e,o=t.el,a=t.cmtData,l=t.replyData;
o.classList.contains(O)&&(i.preventDefault(),n.commentReply(e,o,a,l));
};
_extends(i,(e={},_defineProperty(e,W,function(e){
return c("comment",e);
}),_defineProperty(e,E,function(e){
return c("reply",e);
}),_defineProperty(e,V,function(e){
var t=e.el,n=t.dataset.type,i=e.e.currentTarget;
for(t=t.parentNode;t&&t!==i&&!t.classList.contains(O);)t=t.parentNode;
e.el=t,c(n,e);
}),e));
var p=null,d=null,u=null,y=!1,_=function(){
var e=function(e,t){
p=setTimeout(function(){
e.classList.add(K),p=null;
},t);
};
return function(t){
var i=t.e,o=t.el;
("elected"===n.type||"mine"===n.type)&&(d=setTimeout(function(){
r.disableSelect(),d=null;
},100)),u=o,1===i.touches.length&&e(o,o.classList.contains(O)?100:200);
};
}();
n.delegatedContainer("touchstart",(t={},_defineProperty(t,W,function(e){
return _(e);
}),_defineProperty(t,E,function(e){
return _(e);
}),t));
var f=function(){
var e=function(e){
e.classList.remove(K),p&&(clearTimeout(p),p=null),y&&(y=!1);
};
return function(t){
var i=t.el;
("elected"===n.type||"mine"===n.type)&&setTimeout(function(){
r.enableSelect();
},300),u=null,i.classList.contains(O)?setTimeout(function(){
return e(i);
},500):e(i);
};
}();
n.delegatedContainer("touchend",(o={},_defineProperty(o,W,function(e){
return f(e);
}),_defineProperty(o,E,function(e){
return f(e);
}),o));
var g=function(e,t){
var i=t.e,o=t.el,a=t.cmtData,l=t.replyData;
R({
opType:1,
PersonalCommentId:a.my_id,
ReplyId:"reply"===e?l.reply_id:0
}),n.showActionSheet(e,a,l),o.classList.remove(K),i.preventDefault(),y=!0;
},h=function(e){
var t=e.el;
p?(clearTimeout(p),p=null):t.classList.remove(K),d&&clearTimeout(d);
};
n.delegatedContainer("longtap",(a={},_defineProperty(a,W,function(e){
return g("comment",e);
}),_defineProperty(a,E,function(e){
return g("reply",e);
}),a),(s={},_defineProperty(s,W,function(e){
return h(e);
}),_defineProperty(s,E,function(e){
return h(e);
}),s)),l.on(document,"contextmenu",function(e){
u&&r.isParent(e.target,u)&&(e.preventDefault(),("elected"===n.type||"mine"===n.type)&&r.enableSelect());
}),2===ut&&m.onGetKeyboardHeight(function(e){
var t=e.keyboard;
n.curReplyEl&&n.scroll2Reply(t);
});
}(),this.delegatedContainer("click",i);
}
},{
key:"render",
value:function(e,t){
var n=this;
this.data=e,"reply"!==this.type?this.container.innerHTML=_t(this.getCommentListHTML(e)).innerHTML:(this.cmtData=t,
this.container.innerHTML=_t(this.getReplyListHTML(e,t)).innerHTML),this.itemList=Array.prototype.slice.call(r.qsAll("."+S,this.container)),
"comment"===this.type&&!function(){
var e=r.qs(".js_folder_area",n.container),t=r.qs(".js_content",e);
setTimeout(function(){
t.style.cssText="-webkit-line-clamp: 5;",setTimeout(function(){
t.style.cssText="-webkit-line-clamp: 10;",r.qs(".js_fake_content",e).offsetHeight>t.offsetHeight&&(r.qs("."+q,e).style.display="");
},0);
},0);
}(),"function"==typeof this.onRender&&this.onRender();
}
},{
key:"empty",
value:function(){
this.container.innerHTML="";
}
},{
key:"changeContainer",
value:function(){
var e=arguments.length<=0||void 0===arguments[0]?this.renderContainer:arguments[0];
e&&e!==this.renderContainer&&(this.renderContainer=e,this.renderContainer.appendChild(this.container));
}
},{
key:"add",
value:function(e){
var t=this,n=e.data,i=e.mode,o=void 0===i?"push":i,a=e.type,l=void 0===a?"comment":a,s=e.cmtData,c=e.contentId,m=e.myId,p=e.pos;
if(n.length){
var d=void 0,u=void 0,y=void 0,_=void 0,f=void 0;
"comment"===l?(d="getCommentListHTML",u="content_id",y=this,_="data",f=this.container):(d="getReplyListHTML",
u="reply_id","reply"!==this.type?(s||(s=this.getData(void 0!==c?{
contentId:c
}:{
myId:m
})),s&&(y=s.reply_new,_="reply_list",f=r.qs(".js_reply_list",this.getComment(s.content_id).parentNode))):(s||(s=this.cmtData),
s&&(y=this,_="data",f=this.container))),f&&!function(){
var e=y[_],i=0;
p&&!e.some(function(e){
return i++,e[u]===p;
})&&(i=-1);
var a=!1;
if("push"===o){
if(i>0&&i<e.length){
if(e[i][u]!==n[0][u]){
var r=t.getItemFrag(d,n,s),c=r.frag,m=r.itemList,g="comment"===l?t.getCommentIdx(p):t.getReplyIdx(s.content_id,p);
t.itemList=t.itemList.slice(0,g+1).concat(m,t.itemList.slice(g+1)),f.insertBefore(c,t.itemList[g].nextElementSibling),
y[_]=e.slice(0,i).concat(n,e.slice(i)),a=!0;
}
}else if(!e.length||e[e.length-1][u]!==n[n.length-1][u]){
var h=t.getItemFrag(d,n,s),c=h.frag,m=h.itemList;
if("reply"===l&&"reply"!==t.type){
var g=t.getCommentIdx(s.content_id)+y[_].length;
t.itemList=t.itemList.slice(0,g+1).concat(m,t.itemList.slice(g+1));
}else t.itemList=t.itemList.concat(m);
f.appendChild(c),y[_]=e.concat(n),a=!0;
}
}else if(i>0&&i<=e.length){
if(2>i||e[i-2][u]!==n[n.length-1][u]){
var v=t.getItemFrag(d,n,s),c=v.frag,m=v.itemList,g="comment"===l?t.getCommentIdx(p):t.getReplyIdx(s.content_id,p);
t.itemList=t.itemList.slice(0,g).concat(m,t.itemList.slice(g)),f.insertBefore(c,t.itemList[g]),
y[_]=e.slice(0,i-1).concat(n,e.slice(i-1)),a=!0;
}
}else if(e.length){
if(e[0][u]!==n[0][u]){
var D=t.getItemFrag(d,n,s),c=D.frag,m=D.itemList;
if("reply"===l&&"reply"!==t.type){
var g=t.getCommentIdx(s.content_id);
t.itemList=t.itemList.slice(0,g+1).concat(m,t.itemList.slice(g+1));
}else t.itemList=m.concat(t.itemList);
f.insertBefore(c,f.firstChild),y[_]=n.concat(e),a=!0;
}
}else{
var b=t.getItemFrag(d,n,s),c=b.frag,m=b.itemList;
if("reply"===l&&"reply"!==t.type){
var g=t.getCommentIdx(s.content_id);
t.itemList=t.itemList.slice(0,g+1).concat(m,t.itemList.slice(g+1));
}else t.itemList=m.concat(t.itemList);
f.appendChild(c),y[_]=n.concat(e),a=!0;
}
a&&"function"==typeof t.onAdd&&t.onAdd(n,o,l,s?s.content_id:"",p);
}();
}
}
},{
key:"remove",
value:function(t){
var n=this,i=t.type,o=void 0===i?"comment":i,a=t.cmtData,l=t.replyData,r=t.contentId,s=t.replyId,c=t.myId;
a||(a=this.getData(void 0!==r?{
contentId:r
}:{
myId:c
})),a&&!function(){
var t=void 0,i=void 0,r=void 0,c=void 0;
if("comment"===o?(t=n.data,i="content_id",r=a.content_id,c=n.getCommentIdx(a.content_id)):("reply"!==n.type?t=a.reply_new.reply_list:(a=n.cmtData,
t=n.data),l||(l=e.getDataByKey(t,"reply_id",s)),l&&(i="reply_id",r=l.reply_id,c=n.getReplyIdx(a.content_id,l.reply_id),
n.globalData.canC2CReply&&"mine"!==n.type&&n.updateReplyLen({
newCnt:--a.reply_new.reply_total_cnt,
cmtData:a
}),n.globalData.canC2CReply&&"elected"===n.type&&n.globalData.cmtDialog.getReplyList({
success:function(){
n.globalData.cmtDialog.removeReply(l.reply_id);
},
cmtData:a
}))),r){
var m=-1;
if(t.some(function(e,t){
return e[i]===r?(m=t,!0):!1;
}),m>-1){
n.count--;
var p=t.splice(m,1)[0],d=void 0;
"comment"===o?(d=n.itemList.splice(c,p.reply_new.reply_list.length+1)[0].parentNode,
n.count-=p.reply_new.reply_list.length):d=n.itemList.splice(c,1)[0],d.parentNode.removeChild(d),
"function"==typeof n.onRemove&&n.onRemove(o,a.content_id,p),"function"==typeof n.onEmpty&&("comment"===o&&0===n.itemList.length||"reply"===o&&0===a.reply_new.reply_total_cnt)&&n.onEmpty(o);
}
}
}();
}
},{
key:"getData",
value:function(t){
var n=t.type,i=void 0===n?"comment":n,o=t.contentId,a=t.replyId,l=t.myId;
if("reply"===this.type)return"comment"===i?this.cmtData:e.getDataByKey(this.data,"reply_id",a);
var r=void 0;
return r=void 0===o?e.getDataByKey(this.data,"my_id",l):e.getDataByKey(this.data,"content_id",o),
"comment"===i?r:e.getDataByKey(r.reply_new.reply_list,"reply_id",a);
}
},{
key:"getItemList",
value:function(){
return this.itemList;
}
},{
key:"getCommentIdx",
value:function(e){
var t=0;
return this.data.some(function(n){
return n.content_id===e?!0:(t+=n.reply_new.reply_list.length+1,!1);
})?t:-1;
}
},{
key:"getComment",
value:function(e){
if("reply"===this.type)return null;
var t=this.getCommentIdx(e);
return t>-1&&t<this.itemList.length?this.itemList[t]:null;
}
},{
key:"getReplyIdx",
value:function(e,t){
var n=0;
if("reply"===this.type){
if(this.data.some(function(e){
return e.reply_id===t?!0:(n++,!1);
}))return n;
}else if(this.data.some(function(i){
return i.content_id===e?(n++,i.reply_new.reply_list.some(function(e){
return e.reply_id===t?!0:(n++,!1);
}),!0):(n+=i.reply_new.reply_list.length+1,!1);
}))return n;
return-1;
}
},{
key:"getReply",
value:function(e,t){
var n=this.getReplyIdx(e,t);
return n>-1&&n<this.itemList.length?this.itemList[n]:null;
}
},{
key:"setLikeInfo",
value:function(t){
var n=t.type,i=void 0===n?"comment":n,o=t.cmtData,a=t.replyData,l=t.contentId,s=t.replyId,c=t.myId,m=t.likeStatus,p=t.likeNum,d=t.force;
if(o||(o=this.getData(void 0!==l?{
contentId:l
}:{
myId:c
})),o){
var u=void 0,y=void 0,_=void 0;
"comment"===i?(u=o,y="like_status",_="like_num"):(a||(a=e.getDataByKey(o.reply_new.reply_list,"reply_id",s)),
a&&(u=a,y="reply_like_status",_="reply_like_num")),u&&(d||u[y]!==m&&("number"!=typeof p||u[_]!==p))&&(u[y]=m,
"number"!=typeof p&&(p=u[_]+(m?1:-1)),u[_]=p,e.changeLikeStatus("comment"===i?r.qs("."+N,this.getComment(o.content_id)):r.qs("."+H,this.getReply(o.content_id,a.reply_id)),m,p),
"function"==typeof this.onPraise&&this.onPraise(i,o.content_id,"reply"===i?a.reply_id:"",m,p));
}
}
},{
key:"updateReplyLen",
value:function(e){
var t=e.newCnt,n=e.cmtData,i=e.contentId,o=e.myId;
if(n||(n=this.getData(void 0!==i?{
contentId:i
}:{
myId:o
})),n){
var a=this.getComment(n.content_id);
if(a){
var l=r.qs(".js_more_reply",a.parentNode);
l&&(l.style.display=0===t||t===n.reply_new.reply_list.length?"none":"",r.qs(".js_reply_length",l).innerHTML=t);
}
}
}
},{
key:"getCommentListHTML",
value:function(e){
var t=this,n={},i="";
return e.forEach(function(o){
i+=t.getCommentItemHTML(o,t.count++).replace("<mp-reply-list></mp-reply-list>",t.getReplyListHTML(o.reply_new.reply_list,o));
try{
if(t.globalData.reportData&&t.globalData.contentIDs){
var a=o.nick_name+o.content,l=!1,r=t.globalData.reportData.repeatContentID;
n[a]&&(l=!0,r=t.globalData.reportData.repeatContent),t.globalData.contentIDs.indexOf(o.content_id)>-1&&(l=!0,
r=t.globalData.reportData.repeatContentID),t.globalData.contentIDs.push(o.content_id),
n[a]=!0,l&&t.myReport(r,encodeURIComponent(JSON.stringify({
comment_id:t.globalData.commentId,
content_id:o.content_id,
offset:t.globalData.offset,
length:e.length,
url:location.href
})));
}
}catch(s){
console.error(s);
}
}),i;
}
},{
key:"getReplyListHTML",
value:function(e,t){
var n=this;
return e.map(function(e){
return n.getReplyItemHTML(e,t,n.count++);
}).join("");
}
},{
key:"getCommentItemHTML",
value:function(t){
t.time=e.dateToString(t.create_time),t.status="",gt(t),t.content=t.content.htmlDecodeLite().htmlEncodeLite(),
t.nick_name=yt(t.nick_name.htmlDecodeLite().htmlEncodeLite()),t.is_from_friend=t.is_from_friend||0,
t.is_from_me="mine"===this.type?1:t.is_from_me||0,t.is_from_author=!1,t.is_from=t.is_from||0,
t.reply_new=t.reply_new||{
reply_list:[]
},t.is_elected="elected"===this.type?1:t.is_elected,t.report_elected=t.is_elected||0,
t.report_friend=t.is_from_friend||0,t.scene=this.scene,t.like_num_format=e.formatLikeNum(t.like_num);
var n={
item:t,
deviceIsPc:k,
isWxWork:h,
type:this.type,
itemType:"comment",
isOversize:!this.isShowAll&&this.getIsOversize(),
supportReply:D,
canC2CReply:this.globalData.canC2CReply
};
return y.tmpl(_,n,!1).replace("<mp-comment-item></mp-comment-item>",y.tmpl(f,n,!1));
}
},{
key:"getReplyItemHTML",
value:function(t,n){
return t.time=e.dateToString(t.create_time),t.content=(t.content||"").htmlDecodeLite().htmlEncodeLite(),
t.is_from_me=1===t.is_from,t.is_from_author=2===t.is_from,t.reply_like_status=t.reply_like_status||0,
t.reply_like_num=t.reply_like_num||0,t.reply_like_num_format=e.formatLikeNum(t.reply_like_num),
t.reply_is_elected="reply"===this.type?1:t.reply_is_elected||0,t.to_reply_del_flag=t.to_reply_del_flag||0,
t.to_nick_name=e.sliceNickname(t.to_nick_name||""),t.to_content=(t.to_content||"").htmlDecodeLite().htmlEncodeLite(),
t.author_like_status=!!t.author_like_status,"mine"===this.type&&1===t.is_from?(!t.nick_name&&(t.nick_name=this.globalData.nickName),
!t.logo_url&&(t.logo_url=this.globalData.headImg)):t.nick_name=yt(t.nick_name.htmlDecodeLite().htmlEncodeLite()),
gt(t),y.tmpl(f,{
item:t,
deviceIsPc:k,
isWxWork:h,
type:this.type,
content_id:n.content_id,
my_id:n.my_id,
itemType:"reply",
isOversize:!this.isShowAll&&this.getIsOversize(),
supportReply:D,
canC2CReply:this.globalData.canC2CReply
},!1);
}
},{
key:"getItemFrag",
value:function(e,t,n){
for(var i=document.createDocumentFragment(),o=[],a=_t(this[e](t,n)).childNodes;a.length;){
var l=a[0];
1===l.nodeType&&o.push(l.classList.contains(S)?l:r.qs("."+S,l)),i.appendChild(l);
}
return{
frag:i,
itemList:o
};
}
},{
key:"getIsOversize",
value:function(){
return this.count>nt;
}
},{
key:"delegatedContainer",
value:function(t,n,i){
var o=this,a=function(t){
var n;
t=_extends((n={},_defineProperty(n,N,null),_defineProperty(n,H,null),_defineProperty(n,A,null),
_defineProperty(n,z,null),_defineProperty(n,B,null),_defineProperty(n,W,null),_defineProperty(n,E,null),
_defineProperty(n,q,null),_defineProperty(n,V,null),n),t);
var i=Object.keys(t);
return function(n){
for(var a=n.target,l="",r=function(e){
return 1===a.nodeType&&a.classList.contains(e)?(l=e,!0):!1;
};a&&a!==n.currentTarget&&!i.some(r);)a=a.parentNode;
if(l&&"function"==typeof t[l]){
for(var s=null,c=null,m=null,p=null,d=a,u=d.classList;d&&!u.contains(x)&&!u.contains(E);)d=d.parentNode,
u=d.classList;
if(u.contains(x))s=o.getData({
contentId:d.dataset.contentId
}),m=d;else if(p=d,"reply"===o.type)s=o.cmtData,c=e.getDataByKey(o.data,"reply_id",1*d.dataset.replyId);else{
for(var y=1*d.dataset.replyId;d&&!d.classList.contains(x);)d=d.parentNode;
s=o.getData({
contentId:d.dataset.contentId
}),m=d,c=e.getDataByKey(s.reply_new.reply_list,"reply_id",y);
}
t[l]({
e:n,
el:a,
cmtData:s,
replyData:c,
cmtEl:m,
replyEl:p
});
}
};
};
l.on(this.container,t,a(n),!1,"longtap"===t?a(i):null);
}
},{
key:"praiseComment",
value:function(e,t,n){
var i="/mp/appmsg_comment?action=",o={
comment_id:this.globalData.commentId,
content_id:t.content_id,
item_show_type:window.item_show_type||0,
scene:t.scene
},l=void 0,r=void 0;
"comment"===e?(l=t.like_status?0:1,r=t.like_num+(t.like_status?-1:1),i+="likecomment",
o.appmsgid=window.appmsgid):(l=n.reply_like_status?0:1,r=n.reply_like_num+(n.reply_like_status?-1:1),
i+="like_reply",o.reply_id=n.reply_id),this.setLikeInfo({
type:e,
cmtData:t,
replyData:n,
likeStatus:l,
likeNum:r
}),o.like=l,a({
type:"POST",
url:i,
data:o
});
}
},{
key:"delComment",
value:function(e,t,n){
var a=this;
setTimeout(function(){
window.weui.confirm("comment"===e?"确定删除留言吗？":"确定删除回复吗？",{
className:"weui-pop-zindex-primary",
buttons:[{
label:"取消",
type:"default"
},{
label:"删除",
type:"primary",
onClick:function(){
var l={
scene:a.globalData.reportData.scene,
appmsgid:window.appmsgid,
my_id:t.my_id,
comment_id:a.globalData.commentId,
content_id:t.content_id
};
"comment"===e?l.action="delete":(l.action="deletecommentreply",l.reply_id=n.reply_id),
o({
url:i.join("/mp/appmsg_comment",l,!0),
dataType:"json",
success:function(i){
0===i.ret?a.remove({
type:e,
cmtData:t,
replyData:n
}):pt("删除失败，请重试");
},
error:function(){
pt("网络错误，请重试");
}
});
}
}]
});
},100);
}
},{
key:"commentReply",
value:function(n,i,o,a,l){
var s=this;
if(this.checkReplyQualification(o)){
var c="comment"===n&&o.is_from_me||"reply"===n&&o.is_from_me&&(1===a.is_from||2===a.is_from);
if(2===ut)!function(){
var t=void 0,c=void 0,p=void 0;
"comment"===n?(t=""+o.content_id,c=o.nick_name,p=o.content):(t=o.content_id+"_"+a.reply_id,
c=a.nick_name,p=a.content),"function"==typeof s.beforeShowKeyboard&&s.beforeShowKeyboard();
var d="comment"===s.type||"reply"===s.type;
i&&(d||lt||rt)&&(s.curReplyEl=i,m.lastData.keyboard&&s.scroll2Reply(m.lastData.keyboard)),
r.enableSelect(),g.isIOS&&s.globalData.isVoiceover?s.commentReplyByDialog(n,o,a,t,c,p,d):m.show({
mask:!0,
disableScroll:d||lt||rt,
text:s.inputValue[t]||"",
placeholder:s.globalData.canC2CReply?"回复 "+e.sliceNickname(c)+"：":"回复被精选后，对所有人可见",
maxLength:it,
showRemindWordCount:T.remindWordCount,
disableScrollAdjustment:d,
scrollContentY:i&&!d?r.getScrollTop()+i.getBoundingClientRect().bottom+92:0,
toggleEmotion:l,
success:function(e){
s.submitReply(e,n,o,a,t);
},
cancel:function(e){
s.inputValue[t]=e;
},
show:s.onKeyboardShow,
fail:function(){
s.globalData.isVoiceover=!0,s.globalData.cmtFixedInput.disableHack(),s.commentReplyByDialog(n,o,a,t,c,p,d);
},
hide:function(e,i){
if(d&&r.disableSelect(),"DONE_EMOTION"===i&&s.submitReply(e,n,o,a,t),delete s.curReplyEl.dataset.bottom,
s.curReplyEl=null,d)s.globalData.cmtDialog.setMarginBottom(0);else if(lt)document.body.style.removeProperty("margin-bottom");else if(rt)if(ct.classList.remove(F),
ct.style.removeProperty("transform"),ct.dataset.distance){
var l=r.getScrollTop()-1*ct.dataset.distance;
delete ct.dataset.distance,document.documentElement.scrollTop=l,document.body.scrollTop=l;
}else s.globalData.articleContent.classList.remove(U),s.globalData.articleContent.style.removeProperty("margin-top"),
document.documentElement.scrollTop=0,document.body.scrollTop=0;
"function"==typeof s.onKeyboardHide&&s.onKeyboardHide();
},
showEmotionPanel:function(e){
s.scroll2Reply(e,!0);
},
hideEmotionPanel:function(){
m.lastData.keyboard&&s.scroll2Reply(m.lastData.keyboard);
}
});
}();else if(1===ut&&c){
var p=void 0;
p="comment"===n?o.content:a.content,t.invoke("handleMPPageAction",{
action:"writeCommentReply",
title:mt,
comment_id:this.globalData.commentId,
style:"white",
personal_comment_id:""+o.my_id,
reply_content:p||""
});
}else u.setSum(110809,51,1),this.globalData.cmtDialog.showNotSupportDialog();
}
}
},{
key:"commentReplyByDialog",
value:function(e,t,n,i,o,a,l){
"comment"!==this.type&&(this.inputValue[i]&&r.trim(this.inputValue[i])?(this.commentWriteDialog.setInputValue(this.inputValue[i]),
this.commentWriteDialog.enableSubmit()):(this.commentWriteDialog.setInputValue(""),
this.commentWriteDialog.disableSubmit())),l&&(r.enableSelect(),this.globalData.cmtDialog.setAriaHidden(!0)),
this.commentWriteDialog.show({
nickName:o,
toContent:a,
params:{
type:e,
cmtData:t,
replyData:n,
key:i
}
});
}
},{
key:"submitReply",
value:function(e,t,n,i,o){
var a=this;
this.sendReply({
cnt:e,
type:t,
cmtData:n,
replyData:i,
success:function(){
a.inputValue[o]="";
}
});
}
},{
key:"commentReplyPC",
value:function(e,t,n,i,o){
if(this.checkReplyQualification(i)){
if(this.input.isShow&&(this.input.hide(),t===this.input.target))return;
t.parentNode.classList.add(J);
var a=void 0,l=void 0;
"comment"===e?(a=""+i.content_id,l=i.nick_name):(a=i.content_id+"_"+o.reply_id,l=o.nick_name),
this.input.show(r.qs("."+G,n),{
target:t,
renderType:"append",
text:this.inputValue[a],
placeholder:this.globalData.canC2CReply?"回复 "+l+"：":"回复被精选后，对所有人可见",
params:{
type:e,
cmtData:i,
replyData:o,
key:a
}
});
}
}
},{
key:"checkReplyQualification",
value:function(e){
var t=this.globalData.replyFlag;
if(1===t)return ft("回复已被关闭"),!1;
if(e.is_from_me)return!0;
if(0===t)ft("作者已设置其他人不能回复");else if(3!==t||this.globalData.isFans){
if(4!==t||this.globalData.isFansDays)return!0;
ft("作者已设置关注7天后才可回复");
}else ft("作者已设置关注后才可以回复");
return"function"==typeof this.onCanNotReply&&this.onCanNotReply(),!1;
}
},{
key:"sendReply",
value:function(t){
var n=this,i=t.cnt,a=t.type,l=t.cmtData,r=t.replyData,s=t.success,c=t.fail,m=e.validContent(i,"reply"),p=m.valid,d=m.content;
p&&!this.replyLock&&(this.replyLock=!0,o({
url:"/mp/appmsg_comment?action=addcommentreply",
data:{
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:this.globalData.commentId,
sn:window.sn,
title:mt,
nickname:this.globalData.nickName,
head_img:this.globalData.headImg,
content:d,
enterid:window.enterid,
my_id:l.my_id,
scene:this.globalData.reportData.scene,
to_reply_id:"reply"===a?r.reply_id:"",
content_id:l.content_id
},
type:"POST",
dataType:"json",
success:function(t){
switch(+t.ret){
case 0:
k&&n.input.hide(),n.globalData.canC2CReply&&"mine"!==n.type&&n.updateReplyLen({
newCnt:++l.reply_new.reply_total_cnt,
cmtData:l
});
var i={
content:d,
create_time:Math.floor(new Date/1e3),
reply_id:t.reply_id,
reply_like_num:0,
reply_like_status:0,
nick_name:n.globalData.nickName,
logo_url:n.globalData.headImg,
to_content:"reply"===a?r.content:"",
to_nick_name:e.sliceNickname("reply"===a?r.nick_name:""),
is_from:1,
to_reply_del_flag:0,
reply_is_elected:n.globalData.canC2CReply?1:0,
needAnimation:!0
};
switch(n.type){
case"elected":
n.add({
data:[i],
type:"reply",
cmtData:l,
pos:"reply"===a&&r.reply_id,
mode:"reply"===a?"push":"unshift"
}),n.globalData.canC2CReply&&n.globalData.cmtDialog.getReplyList({
success:function(){
n.globalData.cmtDialog.addReply({
data:[i],
mode:"unshift"
});
},
cmtData:l
});
break;

case"comment":
n.globalData.cmtDialog.addReplyAndRender({
data:[i],
mode:"unshift"
});
break;

case"reply":
n.globalData.cmtDialog.addReplyAndRender({
data:[i],
replyId:r.reply_id
});
break;

case"mine":
n.add({
data:[i],
cmtData:l,
type:"reply"
});
}
return void("function"==typeof s&&s());

case-6:
pt("你回复的太频繁了，休息一下吧");
break;

case-7:
pt("你还未关注该公众号，不能参与回复");
break;

case-10:
pt("字数不能多于"+it+"个");
break;

case-15:
pt("回复已关闭");
break;

case-18:
pt("你在此留言的回复次数已达上限");
break;

case-20:
pt("你还未关注该公众号7天，不能参与回复");
break;

case 167003:
pt("你还未付费，不能参与回复");
break;

default:
pt("系统错误，请重试");
}
"function"==typeof c&&c();
},
error:function(e){
console.error(e),"function"==typeof c&&c();
},
complete:function(){
n.replyLock=!1;
}
}));
}
},{
key:"showAll",
value:function(){
this.isShowAll||(this.itemList.forEach(function(e){
e.style.display="",e.classList.contains(W)&&(e.parentNode.style.display="");
}),this.isShowAll=!0);
}
},{
key:"showTopItems",
value:function(){
var e=arguments.length<=0||void 0===arguments[0]?2:arguments[0];
return this.itemList.length>e?(this.itemList.some(function(t,n){
return e>n?(t.classList.contains(W)&&(t.parentNode.style.display=""),t.style.display="",
!1):!0;
}),!1):!0;
}
},{
key:"showActionSheet",
value:function(e,n,i){
var o=this;
p.show({
buttons:[{
label:"复制",
onClick:function(){
R({
opType:2,
PersonalCommentId:n.my_id,
ReplyId:"reply"===e?i.reply_id:0
});
var o=("comment"===e?n:i).content;
t.invoke("handleMPPageAction",{
action:"setClipboardData",
text:o
},function(e){
/:ok$/.test(e.err_msg)?window.weui.toast("复制成功",750):window.navigator.clipboard&&window.navigator.clipboard.writeText?window.navigator.clipboard.writeText(o).then(function(){
window.weui.toast("复制成功",750);
},function(){
dt(o);
}):dt(o);
});
}
},{
label:"投诉",
onClick:function(){
R({
opType:3,
PersonalCommentId:n.my_id,
ReplyId:"reply"===e?i.reply_id:0
}),o.complain(e,n,i);
}
}],
onClose:function(){
("comment"===o.type||"reply"===o.type)&&d.show({
onClick:function(){
o.globalData.cmtDialog.hideDialog();
}
});
}
});
}
},{
key:"complain",
value:function(e,t,n){
var i={
comment:1,
reply:2
},o="/mp/report?action=getcommentcomplain&comment_id="+this.globalData.commentId+"&content_id="+t.content_id+"&type="+i[e]+"&url="+encodeURIComponent(window.location.href);
"reply"===e&&(o+="&reply_id="+n.reply_id),o+="#wechat_redirect",c.openUrlWithExtraWebview(o);
}
},{
key:"scroll2Reply",
value:function(e,t){
var n=this;
if(!g.isIOS||!this.globalData.isVoiceover)if("comment"===this.type||"reply"===this.type){
var i=this.globalData.cmtDialog,o=e+at-(t?0:st),a=ot-this.curReplyEl.getBoundingClientRect().bottom-o;
i.setMarginBottom(o),i.scrollY(i.getScrollTop()-a,Math.abs(a)<150);
}else if(lt){
var o=e+at-st,a=ot-this.curReplyEl.getBoundingClientRect().bottom-o,l={
y:r.getScrollTop()-a,
end:g.isAndroid?function(){
var e=n.curReplyEl.getBoundingClientRect().bottom,t=s.getInnerHeight();
e+at!==t&&I.start({
distance:e+at-t,
duration:.1
});
}:null
};
Math.abs(a)<150?l.speed=300:l.duration=.3,document.body.style.marginBottom=o+"px",
I.start(l);
}else if(rt){
var o=e+at-st,c=void 0;
this.curReplyEl.dataset.bottom?c=1*this.curReplyEl.dataset.bottom:(c=this.curReplyEl.getBoundingClientRect().bottom,
this.curReplyEl.dataset.bottom=c);
var a=ot-c-o,m=r.getScrollTop();
ct.classList.add(F),a>m?(this.globalData.articleContent.classList.add(U),this.globalData.articleContent.style.marginTop=a-m+"px",
ct.style.transform="translateY("+m+"px)"):(ct.style.transform="translateY("+a+"px)",
ct.dataset.distance=a);
}
}
},{
key:"myReport",
value:function(e){
var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];
"undefined"!=typeof e&&(this.globalData.reportData.idkey?u.setSum(this.globalData.reportData.idkey,e,1):(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random());
}
}],[{
key:"formatLikeNum",
value:function(e){
return e=parseInt(e,10)>=1e4?(e/1e4).toFixed(1)+"万":e,"en"===window.LANG?n.dealLikeReadShow_en(e):e;
}
},{
key:"dateToString",
value:function(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var i=t/1e3-e,o=n/1e3-e,a=new Date(n).getFullYear(),l=new Date(1e3*e);
return 3600>i?Math.ceil(i/60)+"分钟前":86400>o?Math.floor(i/60/60)+"小时前":172800>o?"昨天":604800>o?Math.floor(o/24/60/60)+"天前":l.getFullYear()===a?l.getMonth()+1+"月"+l.getDate()+"日":l.getFullYear()+"年"+(l.getMonth()+1)+"月"+l.getDate()+"日";
}
},{
key:"validContent",
value:function(e){
var t=arguments.length<=1||void 0===arguments[1]?"comment":arguments[1],n=T.getLength(e);
if(0===n)return pt("comment"===t?"留言不能为空":"回复不能为空"),{
valid:!1
};
var i=T.getLimit(t);
return n>i?(pt("字数不能多于"+i+"个"),{
valid:!1
}):{
valid:!0,
content:e
};
}
},{
key:"getDataByKey",
value:function(e,t,n){
var i=null;
return e.some(function(e){
return e[t]===n?(i=e,!0):!1;
}),i;
}
},{
key:"changeLikeStatus",
value:function(t,n,i){
var o=r.qs("."+M,t);
o.innerHTML=0>=i?"":e.formatLikeNum(i),t.classList[n?"add":"remove"](P);
}
},{
key:"sliceNickname",
value:function(e){
for(var t=arguments.length<=1||void 0===arguments[1]?6:arguments[1],n="",i=0,o=e.length,a=0;o>i&&t>a;i++)/\w/.test(e[i])?(a+=.5,
n+=e[i]):(a++,t>=a&&(n+=e[i]));
return n+(o>i?"...":"");
}
}]),e;
}();
return ht;
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
define("appmsg/comment/comment_write_dialog/comment_write_dialog.js",["biz_common/dom/event.js","pages/utils.js","biz_common/tmpl.js","biz_wap/utils/mmversion.js","pages/mod/bottom_modal.js","appmsg/comment/comment_write_dialog/comment_write_dialog.html.js","common/navShadow.js","common/keyboard.js","appmsg/emotion/emotion.js","appmsg/emotion/emotion_panel.js","appmsg/comment/comment_length.js"],function(t){
"use strict";
var e=t("biz_common/dom/event.js"),n=t("pages/utils.js"),i=t("biz_common/tmpl.js"),o=t("biz_wap/utils/mmversion.js"),s=t("pages/mod/bottom_modal.js"),a=t("appmsg/comment/comment_write_dialog/comment_write_dialog.html.js"),l=t("common/navShadow.js"),c=t("common/keyboard.js"),u=t("appmsg/emotion/emotion.js"),r=t("appmsg/emotion/emotion_panel.js"),m=t("appmsg/comment/comment_length.js"),p=function(t){
var e=document.createElement("div");
return e.innerHTML=t,Array.prototype.forEach.call(n.qsAll(".js_to_content",e),function(t){
t.innerHTML=u.encode(t.innerHTML);
}),e;
},h="discuss_write_dialog_android_onfocus",d=[],g=0,b={};
Object.defineProperty(b,"keyboardHeight",{
set:function(t){
d.some(function(e){
return e.dialog.getShowStatus()?(e.bd.setAttribute("style","padding-bottom: "+t+"px; padding-bottom: calc("+t+"px - constant(safe-area-inset-bottom)); padding-bottom: calc("+t+"px - env(safe-area-inset-bottom));"),
!0):!1;
});
}
}),o.isAndroid&&!function(){
var t=document.documentElement.clientHeight||document.body.clientHeight;
e.on(window,"resize",function(){
d.some(function(e){
if(e.dialog.getShowStatus()&&!e.emotionPanel.isShow){
var n=document.documentElement.clientHeight||document.body.clientHeight;
return n===t?e.dialog.getRootEle().classList.remove(h):e.dialog.getRootEle().classList.add(h),
!0;
}
return!1;
});
});
}();
var f=!1;
c.onGetKeyboardHeight(function(t){
var e=t.keyboard;
f&&(o.isIOS?b.keyboardHeight=e:e&&(g=e,b.keyboardHeight=g),document.body.style.height=window.screen.availHeight-e+"px");
});
var y=function(){
function t(c){
var u=this;
_classCallCheck(this,t),d.push(this),this.globalData=c.globalData,this.type=c.type||"comment",
this.limit=m.getLimit(this.type),this.params=null;
var p=document.createElement("div"),h=void 0;
h="comment"===this.type?"留言被公众号精选后，将对所有人可见":c.canC2CReply?"回复将对所有人可见":"回复被公众号精选后，将对所有人可见",
p.innerHTML=i.tmpl(a,{
type:this.type,
placeholder:h
}),this.bd=n.qs(".js_bd",p),this.input=n.qs(".js_input",this.bd);
var y=function(){
u.emotionPanel.hide(),u.input.blur(),"function"==typeof c.onHide&&c.onHide(u.getInputValue(),u.params);
},v={
top:"16px",
extClass:"discuss_write_dialog_wrp",
hasBtn:!0,
innerScrollList:[this.input],
btnClickCb:function(){
u.input.blur(),"function"==typeof c.onSubmit&&c.onSubmit(u.getInputValue(),u.params);
},
onHide:y
};
switch(this.type){
case"comment":
v.title="写留言",v.btnText="提交";
break;

case"dialog":
v.title="写回复",v.btnText="回复",v.transparentMask=!0,v.animationType="right",v.onHide=function(){
l.show({
onClick:function(){
u.globalData.cmtDialog.hideDialog();
}
}),y();
};
break;

case"reply":
v.title="写回复",v.btnText="回复";
}
this.dialog=new s(this.bd,v),this.dialog.disableBtn(),"dialog"===this.type&&this.dialog.setCloseBtnStyle("back"),
this.replyTo=n.qs(".js_reply_to",this.bd),this.placeholder=n.qs(".js_placeholder",this.bd),
this.toolbar=n.qs(".js_toolbar",this.bd),this.emotion=n.qs(".js_emotion_btn",this.toolbar),
this.inputTips=n.qs(".js_input_tips",this.toolbar),this.toolBar=this.emotion.parentNode,
e.on(this.input,"input",function(){
u.onInputChange();
}),e.on(this.input,"paste",function(t){
var e=t.clipboardData.getData("text"),n=m.getLength(e),i=m.getLength(u.getInputValue());
if(i+n>u.limit){
t.preventDefault();
for(var o=u.limit-i,s="",a=0,l=e.length;l>a&&o>0&&(o-=/[^\x00-\xff]/.test(e[a])?1:.5,
!(0>o));a++)s+=e[a];
u.input.value+=s,u.onInputChange(),u.input.scrollTop=u.input.scrollHeight;
}
}),e.on(this.input,"keydown",function(t){
if(!t.altKey&&!t.ctrlKey)switch(t.keyCode){
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
m.getLength(u.getInputValue())>=u.limit&&t.preventDefault();
}
}),e.on(this.input,"focus",function(){
f=!0,document.body.style.overflow="hidden";
var t=u.input.scrollTop;
u.input.style.height=0,u.input.style.flex="none",u.placeholder.style.display="",
u.placeholder.scrollTop=t;
var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
setTimeout(function(){
u.input.style.removeProperty("height"),u.input.style.removeProperty("flex"),u.placeholder.style.display="none",
u.dialog.getBdEle().scrollTop=0,document.documentElement.scrollTop=e,document.body.scrollTop=e;
},300);
}),e.on(this.input,"blur",function(){
f=!1,document.body.style.removeProperty("overflow"),document.body.style.removeProperty("height");
}),e.on(this.emotion,"click",function(){
u.emotionPanel.isShow?o.isAndroid?setTimeout(function(){
u.input.focus();
}):u.input.focus():u.input.blur(),u.emotionPanel.toggle();
}),this.emotionPanel=new r({
input:this.input,
limit:this.limit,
counter:function(t){
return m.getLength(t);
},
onChange:function(t){
var e=t.type,n=t.value;
("action"!==e||"done"!==n)&&u.onInputChange();
},
onShow:function(t){
b.keyboardHeight=t;
},
onHide:function(){
o.isAndroid&&(b.keyboardHeight=g);
}
});
}
return _createClass(t,[{
key:"show",
value:function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this.setReplyTo(t.nickName,t.toContent),this.params=t.params,this.dialog.show();
}
},{
key:"hide",
value:function(){
this.dialog.hide();
}
},{
key:"onInputChange",
value:function(){
var t=m.getLength(this.getInputValue());
this[t&&t<=this.limit?"enableSubmit":"disableSubmit"](),this.placeholder.value=this.getInputValue(),
this.setInputTips(t);
}
},{
key:"getInputValue",
value:function(){
return this.input.value;
}
},{
key:"setInputValue",
value:function(t){
this.input.value=t,this.onInputChange();
}
},{
key:"enableSubmit",
value:function(){
this.dialog.enableBtn();
}
},{
key:"disableSubmit",
value:function(){
this.dialog.disableBtn();
}
},{
key:"setReplyTo",
value:function(t,e){
t&&e&&(this.replyTo.innerHTML=p("<span>"+t+'</span>:&nbsp;<span class="js_to_content">'+e+"</span>").innerHTML);
}
},{
key:"setInputTips",
value:function(t){
t=t||m.getLength(this.getInputValue()),this.inputTips.innerHTML=t>=this.limit-m.remindWordCount&&t<this.limit?"还可以输入"+(this.limit-t)+"个字":t===this.limit?"达到"+this.limit+"字输入上限":t>this.limit?"已超出"+(t-this.limit)+"字":"";
}
}]),t;
}();
return y;
});function _typeof(n){
return n&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n;
}
define("common/keyboard.js",["biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js","pages/bottom_input_bar.js","common/utils.js"],function(n){
"use strict";
var e=n("biz_wap/jsapi/core.js"),t=n("biz_common/dom/event.js"),o=n("biz_wap/utils/mmversion.js"),i=n("pages/bottom_input_bar.js"),s=n("common/utils.js"),a=o.getInner(),r={
vertical:0,
horizontal:0
};
0===window.orientation||180===window.orientation?(r.vertical=s.getInnerHeight(),
r.horizontal=screen.width-(screen.height-r.vertical)):(r.horizontal=s.getInnerHeight(),
r.vertical=screen.width-(screen.height-r.horizontal+60));
var c=!1,d=!1,l=!0;
o.isIOS&&o.gtVersion("7.0.16")?(c=!0,d=!0):o.isAndroid&&(o.gtVersion("7.0.18")&&"27001634">a||a>="28000038")&&(c=!0,
d=a>="27001700");
var u={
keyboard:0,
input:0
},f=[],p=!1,h=null,y=!1,m=null,b=null,w=null;
c&&(d&&(h=document.createElement("div"),h.style.cssText="width: 100%; height: 100%; position: fixed; top: 0; background-color: transparent; z-index: 99999999; display: none;",
document.body.appendChild(h),t.on(h,"touchmove",function(n){
y&&n.preventDefault();
})),s.listenStateChange({
cb:function(n){
"onDestroy"===n.state&&(h&&(h.style.display="none"),"function"==typeof b&&b(""),
"function"==typeof w&&w(""));
}
}));
var g=function(){
return c?!0:(console.log("Not support keyboard."),!1);
},v=function(n,e){
f.length&&f.forEach(function(t){
"function"==typeof t&&t({
keyboard:n,
input:e,
updateKeyboard:u.keyboard!==n,
updateInput:u.input!==e
});
}),u.keyboard=n,u.input=e;
};
return{
canUseKeyboard:c,
canUseCancel:d,
onlyUseH5Keyboard:l,
lastData:u,
onGetKeyboardHeight:function(n){
-1===f.indexOf(n)&&(p||(p=!0,o.isIOS||!window.__second_open__?e.on("onGetKeyboardHeight",function(n){
return v(n.height,n.inputHeight);
}):t.on(window,"resize",function(){
var n=0===window.orientation||180===window.orientation?"vertical":"horizontal",e=r[n],t=s.getInnerHeight();
e>t?v(e-t,60):t>e&&(r[n]=t);
})),f.push(n));
},
offGetKeyboardHeight:function(n){
var e=f.indexOf(n);
e>-1&&f.splice(e,1);
},
show:function(n){
if(g()||n.forceFallback||n.forceFallbackIfUnsupport){
if(b=n.cancel,w=n.hide,l||n.forceFallback){
var t=function(){
m||(m=new i);
var e=!1;
return m.addListener("submit",function(){
e=!0,"function"==typeof n.success&&n.success(m.getContent());
}),m.addListener("hide",function(n){
var t=m.getContent();
e||"function"==typeof b&&b(t),"function"==typeof w&&w(t,n),e=!1;
}),m.addListener("show",function(){
"function"==typeof n.show&&n.show();
}),m.addListener("input",function(){
"function"==typeof n.input&&n.input(m.getContent());
}),m.addListener("fail",function(){
"function"==typeof n.fail&&n.fail();
}),m.addListener("showEmotionPanel",function(e){
"function"==typeof n.showEmotionPanel&&n.showEmotionPanel(e);
}),m.addListener("hideEmotionPanel",function(){
"function"==typeof n.hideEmotionPanel&&n.hideEmotionPanel();
}),m.setContent(n.text||""),m.setLimit(n.maxLength||0),m.setPlaceholder(n.placeholder||""),
m.show(n.toggleEmotion,n.isFullscreen,n.isLandscape),{
v:void 0
};
}();
if("object"===("undefined"==typeof t?"undefined":_typeof(t)))return t.v;
}
var o={
text:n.text||"",
placeholder:n.placeholder||"",
maxLength:n.maxLength||0,
showRemindWordCount:n.showRemindWordCount||0,
disableScrollAdjustment:void 0===n.disableScrollAdjustment?!0:n.disableScrollAdjustment
};
n.scrollContentY&&(o.scrollContentY=n.scrollContentY),n.mask&&h&&(h.style.display=""),
y=!!n.disableScroll,e.invoke("showKeyboard",o,function(e){
switch(h&&(h.style.display="none"),e.err_msg){
case"showKeyboard:ok":
"function"==typeof n.success&&n.success(e.text);
break;

case"showKeyboard:cancel":
"function"==typeof b&&b(e.text);
}
"function"==typeof w&&w(e.text);
}),"function"==typeof n.show&&n.show();
}
},
hide:function(){
l&&m&&m.hide();
}
};
});define("appmsg/comment/comment_write_old.html.js",[],function(){
return'<!-- 旧版写留言 -->\n<div id="js_cmt_mine" class="discuss_container_wrp" style="display:none;">\n  <div class="discuss_container editing access">\n    <div class="discuss_container_inner">\n      <div class="discuss_container_hd">\n        <h2 class="discuss_rich_media_title"><#=textPageTitle#></h2> <!-- 标题要转义 -->\n        <span id="log"></span>\n\n        <div id="js_comment_input_old" class="dicuss_form_area">\n          <!-- 这里放input组件 -->\n        </div>\n      </div>\n      <div class="discuss_container_bd">\n        <!-- 标题 -->\n        <div class="rich_media_extra_title_wrp weui-flex">\n          <div class="weui-flex__item">\n            <strong class="rich_media_extra_title">我的留言</strong>\n          </div>\n        </div>\n\n        <div class="discuss_list_wrp">\n          <ul class="discuss_list" id="js_my_list_old"></ul>\n        </div>\n\n        <!-- 留言加载中 -->\n        <div class="js_mycmt_loading">\n          <div class="weui-loadmore weui-loadmore_default">\n            <i class="weui-loading"></i>\n            <span class="weui-loadmore__tips">正在加载</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- 秒开下的底部导航条 -->\n<div class="weui-webview-nav" style="display: none;" id="js_fake_bar">\n  <button class="weui-webview-nav__btn_goback" id="js_cmt_goback">goback</button>\n  <button class="weui-webview-nav__btn_forward weui-webview-nav__btn_disabled" disabled="disabled">forward</button>\n</div>\n';
});define("appmsg/comment/comment_write.html.js",[],function(){
return'<# if (!deviceIsPc) { #>\n  <!-- 手机端写留言 -->\n  <div role="dialog" aria-modal="true" aria-hidden="true" id="js_cmt_write_area" class="discuss_form_write_area">\n    <div class="js_cmt_write_area_inner discuss_form_write_mod">\n      <div class="rich_media_extra_title_wrp weui-flex">\n        <div class="weui-flex__item js_title">\n          <strong class="rich_media_extra_title">写留言</strong>\n        </div>\n        <a class="js_cancel weui-wa-hotarea" href="javascript:;">取消</a>\n      </div>\n      <textarea class="discuss_form_write_input js_cmt_input" placeholder="留言精选后，将对所有人可见"></textarea>\n      <div class="js_keyboard_tool">\n        <div class="discuss_form_write_tool weui-flex">\n          <div class="weui-flex__item">\n            <span class="discuss_form_write_tips js_cmt_tips"></span>\n          </div>\n          <a class="icon_discuss_emotion js_emotion_btn weui-wa-hotarea" role="button" aria-pressed="false" href="javascript:;">表情</a>\n          <button disabled class="weui-btn weui-btn_primary weui-btn_xmini weui-btn_disabled js_cmt_submit_btn weui-wa-hotarea discuss_form_write_btn" type="button" title="<#=cmtSubmitTitle#>">留言</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="weui-mask_transparent" style="display:none;"></div>\n<# } else { #>\n  <!-- pc端写留言 -->\n  <div class="comment_primary_area" id="js_comment_pc" style="display: none">\n    <div class="comment_primary_form" id="js_cmt_addbtn_pc">\n      <div class="comment_primary_form_bd comment_primary_input_multiline" id="js_cmt_panel_pc">\n        <div class="comment_primary_input_default" id="js_cmt_input_pc" style="display: none">写下你的留言</div>\n      </div>\n    </div>\n  </div>\n<# } #>\n';
});define("appmsg/comment/comment_tpl.html.js",[],function(){
return'<!-- 我的留言 -->\n<div class="discuss_container my_discuss_container" id="js_my_list_container" style="display: none;">\n  <div class="rich_media_extra_title_wrp weui-flex">\n    <div class="weui-flex__item">\n      <strong class="rich_media_extra_title">我的留言</strong>\n    </div>\n    <# if (!isWxWork) { #>\n      <p class="tips_global js_cmt_nofans_mine" style="display: none;">作者已设置关注后才可以留言</p>\n      <a class="js_cmt_addbtn weui-wa-hotarea" href="javascript:;" style="display: none;" role="button">写留言</a>\n    <# } #>\n  </div>\n\n  <div class="discuss_list_wrp">\n    <ul class="discuss_list" id="js_my_list"></ul>\n  </div>\n\n  <!-- 留言加载中 -->\n  <div class="js_mycmt_loading" role="alert">\n    <div class="weui-loadmore weui-loadmore_default">\n      <i class="weui-loading"></i>\n      <span class="weui-loadmore__tips">正在加载</span>\n    </div>\n  </div>\n\n  <!-- 默认收起，展开加weui-fold-tips_unfold -->\n  <div id="js_my_list_folder" role="button" class="weui-fold-tips weui-wa-hotarea_before" style="display: none;">展开我的留言</div> <!-- 默认隐藏，如果溢出了再显示 -->\n\n  <!-- 默认隐藏，等我的留言渲染好之后再显示 -->\n  <div id="js_my_list_footer" style="display: none;">\n    <div class="my_dicuss_list_end_tips weui-loadmore weui-loadmore_default weui-loadmore_line">\n      <span class="weui-loadmore__tips">\n        以上留言被精选后，将对所有人可见      </span>\n    </div>\n  </div>\n</div>\n\n<!-- 精选留言 -->\n<div class="discuss_container star_discuss_container" id="js_cmt_main" style="display: none;">\n  <div class="rich_media_extra_title_wrp weui-flex">\n    <div class="weui-flex__item">\n      <strong class="rich_media_extra_title">精选留言</strong>\n    </div>\n    <# if (!isWxWork) { #>\n      <p class="tips_global js_cmt_nofans_elected" style="display: none;">作者已设置关注后才可以留言</p>\n      <a class="js_cmt_addbtn weui-wa-hotarea" href="javascript:;" style="display: none;" role="button">写留言</a>\n    <# } #>\n  </div>\n  <div class="discuss_list_wrp">\n    <ul class="discuss_list" id="js_cmt_list"></ul>\n  </div>\n</div>\n\n<# if (!isWxWork) { #>\n  <div class="discuss_container discuss_data_empty js_cmt_nofans_single" style="display: none;">\n    <div class="rich_media_extra_title_wrp tc">\n      <div class="tips_global js_cmt_nofans_single_inner" style="display: none;">作者已设置关注后才可以留言</div>\n      <a class="js_cmt_addbtn weui-wa-hotarea" style="display: none;" href="javascript:;" role="button">写留言</a>\n    </div>\n  </div>\n<# } #>\n\n<div id="js_cmt_loading" role="alert">\n  <div class="weui-loadmore weui-loadmore_default">\n    <i class="weui-loading"></i>\n    <span class="weui-loadmore__tips">正在加载</span>\n  </div>\n</div>\n\n<div role="option" id="js_cmt_statement" style="display: none;">\n  <div class="weui-loadmore weui-loadmore_default weui-loadmore_line weui-loadmore_dot">\n    <div class="weui-hidden_abs">已无更多数据</div>\n    <span class="weui-loadmore__tips"></span>\n  </div>\n</div>\n\n<!-- warning toast -->\n<div role="alert" class="discuss_warn_toast weui-toast__wrp" id="js_warning_toast" style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast weui-toast_text-more">\n    <i class="weui-icon-warn weui-icon_toast"></i>\n    <p class="weui-toast__content js_content"></p>\n  </div>\n</div>\n';
});define("biz_wap/utils/fakehash.js",["biz_common/dom/event.js"],function(t){
"use strict";
function s(t){
t=t||location.hash.substr(1);
var s,o,e,i,r=!1,c=[];
for(s=0;s<h.length;s++)o=h[s],e=o[0],i=o[1],e!==a?("string"==typeof e&&e===t||e instanceof RegExp&&e.test(t))&&(i(n),
r=!0):c.push(i);
if(!r)for(s=0;s<c.length;s++)c[s](n,t);
n=t;
}
var o=t("biz_common/dom/event.js"),h=[],a="__default_hash__",n=location.hash.substr(1);
return o.on(window,"popstate",function(t){
var o=a;
t.state&&t.state.hash&&(o=t.state.hash),s(o);
}),o.on(window,"hashchange",s),o.on(window,"load",function(){
history.state&&history.state.hash&&s(history.state.hash);
}),{
val:function(){
return history.state&&history.state.hash||location.hash.substr(1);
},
push:function(t){
history.pushState?(history.pushState({
hash:t
},document.title,location.href),s(t)):location.hash=t;
},
replace:function(t){
history.replaceState?(history.replaceState({
hash:t
},document.title,location.href),s(t)):this.push(t);
},
on:function(t,s){
"function"==typeof t&&(s=t,t=a),h.push([t,s]);
}
};
});define("appmsg/comment_report.js",["biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_wap/utils/storage.js","common/utils.js","biz_common/dom/offset.js"],function(e){
"use strict";
function t(){
if(!n&&(n=!0,setTimeout(function(){
n=!1;
},20),o||(o=document.getElementById("js_cmt_area")))){
var e=c.getInnerHeight(),t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,i=o.querySelectorAll(".js_comment_item");
if(m=p.getOffset(o).offsetTop,i.length)for(var s=0;s<i.length&&m+i[s].offsetTop<t+e;s++)1!=i[s].getAttribute("data-hasreport")&&(i[s].setAttribute("data-hasreport",1),
_.data.push({
content_id:i[s].dataset.content_id,
is_elected_comment:1,
is_friend_comment:1*i[s].dataset.friend,
scene:1
}));
d.set("comment_expose",_,Date.now()+6048e5);
}
}
var o,m,n,i=e("biz_wap/utils/ajax.js"),s=e("biz_common/dom/event.js"),a=e("biz_wap/utils/storage.js"),c=e("common/utils.js"),d=new a("comment_expose"),p=e("biz_common/dom/offset.js"),_={
data:[],
appmsgid:"",
comment_id:"",
idx:"",
item_show_type:0,
biz:""
},r=function(e){
e&&e.data&&e.data.length&&(u(e),d.remove("comment_expose"));
},u=function(e){
i({
type:"post",
url:"/mp/appmsg_comment?action=exposurecomment",
data:{
comment_id:e.comment_id,
appmsgid:e.appmsgid,
idx:e.idx,
item_show_type:e.item_show_type,
__biz:e.biz,
data:JSON.stringify(e.data)
},
async:!1,
timeout:2e3
});
};
s.on(window,"scroll",t),s.on(window,"unload",function(){
r(_);
}),s.on(window,"load",function(){
var e=d.getData("comment_expose");
e&&e.comment_expose&&e.comment_expose.val&&e.comment_expose.val.appmsgid&&r(e.comment_expose.val),
t();
});
var f=function(e){
_.comment_id=e.comment_id,_.appmsgid=e.appmsgid,_.idx=e.idx,_.item_show_type=e.item_show_type||0,
_.biz=e.biz,setTimeout(function(){
t();
});
};
return f;
});define("appmsg/retry_ajax.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(require,exports,module,alert){
"use strict";
function Retry_ajax(e){
checkAjaxDo(e),e&&(e.success=function(a){
dealWithSucceed(a,e);
},e.error=function(){
dealWithFailed(e);
}),ajax(e);
}
function checkAjaxDo(e){
var a=isContainExceptLike(e,failedQueue),i=isContainAjax(e,failedQueue);
-1===i&&a>-1&&failedQueue.splice(a,1);
}
function isContainExceptLike(e,a){
var i=-1;
for(var r in a){
var t=a[r];
if(e.url||-1!=e.url.indexOf("&like=")||-1!=t.url.indexOf("&like=")){
if(!(e.url.indexOf("&like=")>-1&&t.url.indexOf("&like=")>-1))continue;
if(removeLikeParam(e.url)!==removeLikeParam(t.url))continue;
}else if(!t.url||t.url!==e.url)continue;
if(e.data&&t.data){
var u=e.data,n=t.data;
if(!isEqualExceptLike(u,n))continue;
}
i=r;
break;
}
return i;
}
function isContainAjax(e,a){
var i=-1;
for(var r in a){
var t=a[r];
if(e.url&&t.url&&e.url==t.url){
if(e.data&&t.data){
var u=e.data,n=t.data;
if(!isEqual(u,n))continue;
}
i=r;
break;
}
}
return i;
}
function removeLikeParam(e){
var a=e.indexOf("&like="),i=e.substring(0,a)+e.substring(a+7);
return i;
}
function isEqualExceptLike(e,a){
var i=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(a);
if(i.length!=r.length)return!1;
for(var t=0;t<i.length;t++){
var u=i[t];
if("like"!==u&&e[u]!==a[u])return!1;
}
return!0;
}
function isEqual(e,a){
var i=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(a);
if(i.length!=r.length)return!1;
for(var t=0;t<i.length;t++){
var u=i[t];
if(e[u]!==a[u])return!1;
}
return!0;
}
function dealWithSucceed(res,obj){
try{
var data=eval("("+res+")");
}catch(e){
var data=!1;
}
if(data&&data.base_resp&&0===data.base_resp.ret){
var findIndex=isContainExceptLike(obj,failedQueue);
findIndex>-1&&failedQueue.splice(findIndex,1);
}else dealWithFailed(obj);
}
function dealWithFailed(e){
var a=isContainExceptLike(e,failedQueue);
if(-1===a){
if(e.failedTimes=1,failedQueue.length>=MAX_QUEUE_LEN)return;
failedQueue.push(e);
}else{
var i=isContainAjax(e,failedQueue);
if(i>-1){
if(failedQueue[a].failedTimes++,e.failedTimes=failedQueue[a].failedTimes,e.failedTimes>MAX_FAILED_TIMES)return void failedQueue.splice(i,1);
}else failedQueue.splice(i,1),e.failedTimes=1,failedQueue.push(e);
}
Retry_ajax(e);
}
var ajax=require("biz_wap/utils/ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),failedQueue=[],MAX_FAILED_TIMES=2,MAX_QUEUE_LEN=20;
return Retry_ajax;
});define("complain/tips.js",["biz_common/utils/string/html.js","biz_common/dom/event.js"],function(t){
"use strict";
t("biz_common/utils/string/html.js");
var i=t("biz_common/dom/event.js"),o={
tipsTimeoutId:null,
tipsDom:document.getElementById("tips")
},s={
showErrTips:function(t,i){
var s=i||o.tipsDom;
return t===!1?void(s.style.display="none"):(this.resetTips(),s.innerHTML=t.htmlEncode(),
s.style.display="block",clearTimeout(o.tipsTimeoutId),void(o.tipsTimeoutId=setTimeout(function(){
s.style.display="none";
},4e3)));
},
resetTips:function(t){
setTimeout(function(){
var i=t||o.tipsDom;
i&&(i.style.top=document.body.scrollTop+"px");
},0);
}
};
return i.on(window,"scroll",function(){
s.resetTips();
}),s;
});define("pages/loadscript.js",[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var o="number"!=typeof t.retry?1:t.retry,n=t.win||window,r=n.document,a=r.createElement("script"),d=t.type||"JSONP",i=r.head||r.getElementsByTagName("head")[0]||r.documentElement,l=t.callbackName,u="uninitialized",c="undefined"==typeof t.successCode?200:t.successCode,s="undefined"==typeof t.timeoutCode?500:t.timeoutCode,f="undefined"==typeof t.stateErrorCode?400:t.stateErrorCode,m="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,p=!1,y=null;
"JSONP"!=d&&"JS"!=d&&(d="JSONP");
var C="";
C="JSONP"==d?t.url+"&t="+Math.random():t.url;
var h=function(e){
a&&!p&&(p=!0,y&&(clearTimeout(y),y=null),a.onload=a.onreadystatechange=a.onerror=null,
i&&a.parentNode&&i.removeChild(a),a=null,l&&-1==l.indexOf(".")&&(window[l]=null),
"JS"==d&&e==c&&"loaded"==u&&"function"==typeof t.callback?t.callback():e!=c&&"loaded"!=u&&"function"==typeof t.onerror&&t.onerror(e));
};
if(l&&"function"==typeof t.callback&&"JSONP"==d){
var w=l;
-1==l.indexOf(".")&&(l=window[l]?l+e.counter++:l,window[l]=function(){
u="loaded",t.callback.apply(null,arguments);
}),C=C.replace("="+w,"="+l);
}
a.onload=a.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&("JS"==d&&(u="loaded"),
h("loaded"==u?c:f));
},a.onerror=function(){
return o>0?(t.retry=o-1,y&&(clearTimeout(y),y=null),void e(t)):void h(m);
},t.timeout&&(y=setTimeout(function(){
h(s);
},parseInt(t.timeout,10))),u="loading",a.charset="utf-8",setTimeout(function(){
a.src=C;
try{
i.insertBefore(a,i.lastChild);
}catch(e){}
},0);
}
return e;
});define("biz_wap/utils/ajax_load_js.js",["biz_wap/utils/ajax.js","biz_wap/utils/localstorage.js"],function(e){
"use strict";
function n(e){
var n=d(e.url,e.version),o=function(){},i=function(){};
if("function"==typeof e.onSuccess&&(o=e.onSuccess),"function"==typeof e.onError&&(i=e.onError),
c(e.win,n))return void o({
code:1,
queueIndex:0
});
if(e.useCache){
var a=u(e.url,e.version);
if(a&&t({
win:e.win,
funcStr:a,
useCache:!1,
url:e.url,
version:e.version
}),c(e.win,n))return void o({
code:2,
queueIndex:0
});
}
if(S.callbackQueue.push({
options:e,
onSuccess:o,
onError:i
}),"undefined"==typeof S.jsLoadState[n]&&(S.jsLoadState[n]=-1),-1==S.jsLoadState[n]){
var s=e.url;
s+=-1==s.indexOf("?")?"?"+S.customerParam+"="+e.version:"&"+S.customerParam+"="+e.version,
r({
originUrl:e.url,
version:e.version,
url:s,
key:n
});
}
}
function r(e){
S.jsLoadState[e.key]=1,w({
url:e.url,
notJoinUrl:!0,
timeout:1e4,
type:"POST",
dataType:"text",
noXRequestedWidthHeader:!0,
success:function(n){
if(1==S.jsLoadState[e.key]){
S.jsLoadState[e.key]=-1;
var r=!0;
r=n?t({
win:null,
funcStr:n,
useCache:!0,
url:e.originUrl,
version:e.version
}):!1,o(r?{
code:3,
type:"suc",
funcStr:n
}:{
code:51,
type:"err"
});
}
},
error:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:52,
type:"err"
}));
},
complete:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:53,
type:"err"
}));
}
});
}
function t(e){
var n=e.win||window,r=!0;
try{
n.eval(e.funcStr),r=!0;
}catch(t){
r=!1;
}
return r?(s({
url:e.url,
version:e.version,
win:n
}),e.useCache&&a(e.url,e.version,e.funcStr),!0):(l({
url:e.url,
version:e.version,
win:n
}),i(e.url),!1);
}
function o(e){
for(var n=0,r=S.callbackQueue.length;r>n;n++){
var o=S.callbackQueue[n],u=o.options,i=u.win,a=d(u.url,u.version);
"suc"==e.type?(e.funcStr&&!c(i,a)&&t({
win:i,
funcStr:e.funcStr,
useCache:!1,
url:u.url,
version:u.version
}),o.onSuccess({
code:e.code,
queueIndex:n
})):o.onError({
code:e.code,
queueIndex:n
});
}
S.callbackQueue=[];
}
function u(e,n){
var r=f(e),t=y.get(r);
if(!t)return null;
var o;
try{
o=JSON.parse(t);
}catch(u){}
if(o){
var a=+new Date,c=1*o.time;
return a-c>S.lsTimeout||o.version!=n||!o.func?(i(e),null):o.func;
}
}
function i(e){
var n=f(e);
y.remove(n);
}
function a(e,n,r){
var t={
version:n,
func:r,
time:+new Date
},o=f(e);
try{
y.set(o,JSON.stringify(t));
}catch(u){}
}
function c(e,n){
return e=e||window,e[S.winCacheKey]&&e[S.winCacheKey][n]&&e[S.winCacheKey][n].state===!0?!0:!1;
}
function s(e){
var n=d(e.url,e.version),r=e.win||window;
r[S.winCacheKey]||(r[S.winCacheKey]={}),r[S.winCacheKey][n]||(r[S.winCacheKey][n]={}),
r[S.winCacheKey][n].state=!0;
}
function l(e){
var n=d(e.url,e.version),r=e.win||window;
if(r[S.winCacheKey]&&r[S.winCacheKey][n])try{
delete r[S.winCacheKey][n];
}catch(t){}
}
function f(e){
return encodeURIComponent(e);
}
function d(e,n){
return encodeURIComponent(e)+"_"+n||"";
}
function v(e){
l(e),i(e.url);
}
var w=e("biz_wap/utils/ajax.js"),y=e("biz_wap/utils/localstorage.js"),S={
jsLoadState:{},
winCacheKey:"__loadExternalJsStates__",
lsTimeout:1728e5,
customerParam:"wxv",
callbackQueue:[]
};
return{
ClearCache:v,
Load:n
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var r=arguments[t];
for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);
}
return e;
};
define("appmsg/reward_entry.js",["biz_wap/ui/weui.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","appmsg/appmsgext.js","appmsg/open_url_with_webview.js","common/utils.js","biz_wap/utils/device.js","appmsg/loading.js","common/comm_report.js","appmsg/pay_read/pay_read_utils.js","biz_wap/utils/jsmonitor_report.js","appmsg/rec_report_key.js","appmsg/like_profile.js","appmsg/related_article.js"],function(e,t,r,a){
"use strict";
function n(e){
e&&(e.style.display="block");
}
function i(e){
e&&(e.style.display="none");
}
function d(e){
v.getData({
biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
pass_ticket:window.pass_ticket,
scene:H.scene,
title:H.title,
ct:ct,
devicetype:H.devicetype,
version:H.version,
is_need_reward:H.is_need_reward,
reward_uin_count:H.is_need_reward?3*u:0,
send_time:H.send_time||"",
item_show_type:window.item_show_type||"",
rtId:H.appmsgextRtId,
rtKey:H.appmsgextRtKey,
is_pay_subscribe:window.isPaySubscribe,
pay_subscribe_uin_count:window.isPaySubscribe?3*k.getCountPerLine():0,
onSuccess:function(t){
t&&(e||(R.rewardLink&&m.off(R.rewardLink,"click",U),R.authorAvatarLink&&m.off(R.authorAvatarLink,"click",J),
W=[],o({
reward_total:t.reward_total_count,
reward_head_imgs:t.reward_head_imgs||[],
can_reward:t.can_reward,
timestamp:t.timestamp,
reward_author_head:t.reward_author_head,
rewardsn:t.rewardsn,
can_whisper:t.can_whisper
})),t.appmsgact&&t.appmsgact.reward_before&&(S.renderLikeProfile(["reward"]),z&&z.render&&z.render("reward")),
console.log("reloadRewardData:",t,e),k.init(t.pay_subscribe_info,{
rewardTotal:t.reward_total_count,
rewardTotalCut:t.is_reward_total_count_cut
},!0));
},
onError:function(){}
});
}
function s(e,t,r){
if("link"===r){
var n="#wechat_redirect";
e=e.replace(n,"&__tc=1"+n);
}
var i=function(){
Y.src=t+"&qrcode_timestamp="+1*new Date+"#wechat_redirect";
},d=null;
return function(t){
if(t.preventDefault(),"link"===r&&H.is_teenager)return weui.alert("青少年模式下不可赞赏"),
void T.setSum(232209,0,1);
if("0"==H.user_can_reward)return void a("你已成为该公众号的黑名单用户，暂时无法赞赏。");
if(B(L.kReward),H.isWindowsWechat){
var n=function(){
var e="js_author_reward_qrcode",t="reward_pop_show",r=document.getElementById(e);
if(r.classList.contains(t))return{
v:void 0
};
i(),d=setInterval(i,12e4),r.classList[R.rewardLink.getBoundingClientRect().top<222?"add":"remove"]("reward_pop_bottom"),
r.classList.add(t);
var a=function n(a){
if(r.classList.contains(t)){
for(var i=a.target;null!==i&&i.id!==e;)i=i.parentNode;
(null===i||i.id!==e)&&(r.classList.remove(t),clearInterval(d),d=null,m.off(window,"click",n));
}
};
setTimeout(function(){
m.on(window,"click",a);
},1);
}();
if("object"===("undefined"==typeof n?"undefined":_typeof(n)))return n.v;
}else"avatar"===r&&window.__addIdKeyReport?window.__addIdKeyReport(H.likeHeadId,H.likeHeadKey):window.__addIdKeyReport&&window.__addIdKeyReport(H.likeBtnId,H.likeBtnKey),
f.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t.err_msg.indexOf(":ok")>-1||(location.href=e);
});
};
}
function o(e){
var t=window.innerWidth||document.documentElement.innerWidth,r=(Math.ceil((b.getInnerHeight()-188)/42)+1)*Math.floor((t-15)/42);
_="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+r+"&source=1#wechat_redirect";
var a="#wechat_redirect",o="";
o="https://mp.weixin.qq.com/mp/author?action=show&__biz="+biz+"&appmsgid="+mid+"&timestamp="+e.timestamp+"&author_id="+H.author_id+"&idx="+idx+"&scene="+H.authorPageScene+"&rscene="+H.authorPageRscene+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&from_enterid="+window.enterid+"&from_sessionid="+window.sessionid+"&is_fans="+e.isFans,
e.rewardsn&&(o+="&rewardsn="+e.rewardsn),o+=a,-1==navigator.userAgent.indexOf("Android")||H.author_id||(o="https://mp.weixin.qq.com/bizmall/reward?act=showpage&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1&rewardsn="+e.rewardsn+a);
var p=R.rewardLink,v=R.authorAvatarLink;
if(!X&&b.listenStateChange({
cb:function(e){
if("onResume"==e.state_change||"onResume"==e.state)if(p){
var t=(new Date).valueOf();
if(-1!=navigator.userAgent.indexOf("Android")&&localStorage.getItem("lastOnresumeTime")&&t-parseInt(localStorage.getItem("lastOnresumeTime"))<=M)return;
localStorage.setItem("lastOnresumeTime",t),g.isAndroid&&!H.author_id&&f.invoke("setNavigationBarColor",{
actionCode:"1"
}),d();
}else d(!0);
}
}),X=!0,p){
var x="/mp/authorreward?action=getqrcode&author_id="+H.author_id+"&rewardsn="+e.rewardsn+"&timestamp="+e.timestamp+"&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&size=160";
if(U=s(o,x,"link"),J=s(o,x,"avatar"),m.on(p,"click",U),H.author_id&&1==e.can_reward&&v&&m.on(v,"click",J),
1==e.can_reward&&H.author_id&&R.reward){
n(document.getElementById("js_reward_author")),n(R.authorAvatarLink),R.rewardAuthorHead&&R.rewardAuthorHead.setAttribute("src",e.reward_author_head),
R.reward.classList.add("reward_area_primary");
var j=R.rewardLinkText;
j&&(j.innerText="喜欢作者",Math.random()<.05?j.innerText="稀罕作者":Math.random()>.05&&Math.random()<.1&&(j.innerText="钟意作者")),
R.rewardTotalText&&(R.rewardTotalText.innerText="人喜欢"),H.isWindowsWechat&&R.reward.classList.add("reward_area_win"),
!b.isNativePage()&&e.can_whisper?G():$();
}
}
A=e.reward_head_imgs;
var I=c();
R.reward&&(H.author_id||g.isAndroid)&&1==e.can_reward?(n(R.reward),m.on(window,"load",function(){
l&&(m.off(window,"scroll",l),m.on(window,"scroll",l));
})):i(R.reward);
var k=document.getElementById("js_reward_inner");
!window.isPaySubscribe&&k&&I>0&&n(k);
var T=[].concat(A),E=document.getElementById("js_reward_total");
if(K=16*u,W=[].concat(A),E)if(E.innerText=e.reward_total,H.isWindowsWechat){
var L=E.parentNode;
L.dataset.hasEvent||!function(){
var t=document.getElementById("js_reward_pagination"),r=t.getElementsByClassName("js_reward_pagination_curpage")[0],a=Math.ceil(e.reward_total/K),d=1,s=!0,o=document.getElementById("js_reward_list"),c=function(t,r){
for(var n=(t-1)*K,i=s?3*u:0,d=document.createDocumentFragment(),c=n+i,l=t===a?e.reward_total:t*K;l>c;c++)w(d,r?window.defaultAvatarUrl:W[c]);
return!s&&(o.innerHTML=""),o.appendChild(d),s=!1,r?function(){
for(var e=o.getElementsByClassName("reward_user_avatar"),t=i,r=e.length;r>t;t++)e[t].firstElementChild.src=W[n+t];
}:!1;
};
r.innerHTML=d,t.getElementsByClassName("js_reward_pagination_totalpage")[0].innerHTML=a;
var l="/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&count="+K,p=null,_=function(t){
var r=W.length;
e.reward_total>r&&t*K>r?(p=null,p=c(t,!0),h({
url:l+"&offset="+(t-1)*K+"#wechat_redirect",
type:"GET",
success:function(e){
try{
e=JSON.parse(e),e.reward_heads=JSON.parse(e.reward_heads).reward_heads;
}catch(t){
e={};
}
e.base_resp&&0===e.base_resp.ret&&(e.reward_heads.forEach(function(e){
var t=T.indexOf(e);
t>-1?T.splice(t,1):W.push(e);
}),"function"==typeof p&&p());
}
})):c(t);
};
I<e.reward_total&&!function(){
R.reward.classList.add("reward_avatar_overflow");
for(var w=o.children[0];1!==w.nodeType;)w=reward.nextElementSibling;
var c=getComputedStyle(w),l=w.offsetHeight+parseInt(c.marginBottom)+parseInt(c.marginTop);
D=function(t){
o.style.height="fold"===t?3*l+"px":a>d?l*Math.ceil(K/u)+"px":l*Math.ceil(e.reward_total%K/u)+"px";
},D("fold"),m.on(L,"click",function(){
R.reward.classList.contains("reward_avatar_unfold")?(R.reward.classList.remove("reward_avatar_unfold"),
a>1&&i(t),D("fold")):(1===d&&s&&_(d),R.reward.classList.add("reward_avatar_unfold"),
a>1&&n(t),D("unfold"));
}),a>1&&m.on(t,"click",function(e){
var t=e.target;
if(t.classList.contains("js_reward_pagination_prev")){
if(d--,r.innerHTML=d,_(d),1===d&&(t.disabled=!0),d===a-1){
for(;t&&!t.classList.contains("js_reward_pagination_next");)t=t.nextElementSibling;
t&&(t.disabled=!1),D("unfold");
}
}else if(t.classList.contains("js_reward_pagination_next")&&(d++,r.innerHTML=d,_(d),
d===a&&(t.disabled=!0,D("unfold")),2===d)){
for(;t&&!t.classList.contains("js_reward_pagination_prev");)t=t.previousElementSibling;
t&&(t.disabled=!1);
}
});
}(),L.dataset.hasEvent=1;
}();
}else E.setAttribute("data-href",_),E.getAttribute("data-hasevent")||(m.on(E,"click",function(){
var e=E.getAttribute("data-href");
return y(e,{
sample:1,
reject:function(){
location.href=e;
}
}),!1;
}),E.setAttribute("data-hasevent",1));
}
function w(e,t){
var r=document.createElement("span");
r.className="reward_user_avatar";
var a=new Image;
return a.onload=function(){
window.logs&&window.logs.reward_heads_total++,a.onload=a.onerror=null;
},a.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
a.onload=a.onerror=null;
},a.src=t,r.appendChild(a),e.appendChild(r),r;
}
function c(e){
var t=W.length?W:A;
if(t.length){
var r=document.getElementById("js_reward_list"),a=0,n=document.createDocumentFragment();
if(r){
var i=R.reward.classList.contains("reward_avatar_unfold");
if("function"==typeof D&&D(i?"unfold":"fold"),!e){
for(var d=0,s=t.length;s>d&&(a++,w(n,t[d]),i||a!==3*u)&&a!==(K||16*u);++d);
a>u&&(r.className+=" tl"),r.innerHTML="",r.appendChild(n);
}
}
return a;
}
}
function l(){
if(R.reward){
var e=window.pageYOffset||document.documentElement.scrollTop;
if(e+b.getInnerHeight()>R.reward.offsetTop){
var t="__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&item_show_type="+item_show_type;
window.cgiData&&window.cgiData.vid&&(t+="&vid="+cgiData.vid),h({
type:"GET",
url:"/bizmall/reward?act=report&"+t,
async:!0
}),m.off(window,"scroll",l),l=null;
}
}
}
function p(e){
"undefined"!=typeof e.scene&&(H.scene=e.scene),"undefined"!=typeof e.is_need_reward&&(H.is_need_reward=e.is_need_reward),
"undefined"!=typeof e.title&&(H.title=e.title),"undefined"!=typeof e.author_id&&(H.author_id=e.author_id),
"undefined"!=typeof e.user_can_reward&&(H.user_can_reward=e.user_can_reward),"undefined"!=typeof e.appmsgextRtId&&(H.appmsgextRtId=e.appmsgextRtId),
"undefined"!=typeof e.appmsgextRtKey&&(H.appmsgextRtKey=e.appmsgextRtKey),"undefined"!=typeof e.likeHeadId&&(H.likeHeadId=e.likeHeadId),
"undefined"!=typeof e.likeHeadKey&&(H.likeHeadKey=e.likeHeadKey),"undefined"!=typeof e.likeBtnId&&(H.likeBtnId=e.likeBtnId),
"undefined"!=typeof e.likeBtnKey&&(H.likeBtnKey=e.likeBtnKey),"undefined"!=typeof e.authorPageScene&&(H.authorPageScene=e.authorPageScene),
"undefined"!=typeof e.authorPageRscene&&(H.authorPageRscene=e.authorPageRscene),
"undefined"!=typeof e.devicetype&&(H.devicetype=e.devicetype),"undefined"!=typeof e.version&&(H.version=e.version),
"undefined"!=typeof e.send_time&&(H.send_time=e.send_time);
}
e("biz_wap/ui/weui.js");
var u,_,m=e("biz_common/dom/event.js"),h=e("biz_wap/utils/ajax.js"),f=e("biz_wap/jsapi/core.js"),g=e("biz_wap/utils/mmversion.js"),v=e("appmsg/appmsgext.js"),y=e("appmsg/open_url_with_webview.js"),b=e("common/utils.js"),x=e("biz_wap/utils/device.js"),j=e("appmsg/loading.js"),I=e("common/comm_report.js"),k=e("appmsg/pay_read/pay_read_utils.js"),T=e("biz_wap/utils/jsmonitor_report.js"),E=e("appmsg/rec_report_key.js"),L=E.RecActionType,B=E.reportRecAction,S=e("appmsg/like_profile.js"),z=e("appmsg/related_article.js"),H={
scene:window.source||"",
is_need_reward:!1,
is_teenager:window.is_teenager,
title:window.msg_title||"",
author_id:window.author_id||"",
user_can_reward:!0,
appmsgextRtId:"",
appmsgextRtKey:"",
likeHeadId:"110809",
likeHeadKey:"2",
likeBtnId:"110809",
likeBtnKey:"3",
authorPageScene:"142",
authorPageRscene:"128",
devicetype:window.devicetype||"",
version:window.version||"",
send_time:window.send_time||"",
isWindowsWechat:-1!==window.navigator.userAgent.indexOf("WindowsWechat"),
whisperMaxLen:40,
focusTag:!1,
doubleInputChar:["“”","‘’","（）","《》","〈〉","「」","『』","〔〕","【】","［］","[]","｛｝","{}","()","<>"],
sendLock:!1
},R={
reward:document.getElementById("js_reward_area"),
rewardLink:document.getElementById("js_reward_link"),
authorAvatarLink:document.getElementById("js_reward_avatar"),
rewardAuthorHead:document.getElementById("js_reward_author_head"),
rewardLinkText:document.getElementById("js_reward_link_text"),
rewardTotalText:document.getElementById("js_reward_total_text"),
whisperWrap:document.getElementById("js_reward_whisper"),
whisperDialogShow:document.getElementById("js_show_whisper_dialog"),
whisperDialogHide:document.getElementById("js_hide_whisper_dialog"),
whisperDialogMask:document.getElementById("js_whisper_dialog_mask"),
whisperDialog:document.getElementById("js_reward_whisper_dialog"),
whisperTextarea:document.getElementById("js_whisper_text"),
whisperMsg:document.getElementById("js_whisper_msg"),
whisperCnt:document.getElementById("js_whisper_current_cnt"),
whisperSend:document.getElementById("js_whisper_send")
},A=[],M=500,D=null,K=0,W=[];
window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0);
var C,O=function(e){
var t=e.target;
"TEXTAREA"!==t.tagName&&"BUTTON"!==t.tagName&&(e.preventDefault(),e.stopPropagation());
},P=function(e){
var t=e.targetTouches||[];
if(t.length>0){
var r=t[0]||{};
C=r.clientY;
}
},N=function(e){
var t=!1,r=e.changedTouches,a=this.scrollTop,n=this.offsetHeight,i=this.scrollHeight;
if(r.length>0){
var d=r[0]||{},s=d.clientY;
t=s>C&&0>=a?!1:C>s&&a+n>=i?!1:!0,t||e.preventDefault();
}
},q=function(){
document.addEventListener("touchmove",O,{
passive:!1
}),R.whisperTextarea.addEventListener("touchstart",P,{
passive:!1
}),R.whisperTextarea.addEventListener("touchmove",N,!1);
},F=function(){
document.removeEventListener("touchmove",O,{
passive:!1
}),R.whisperTextarea.removeEventListener("touchstart",P,{
passive:!1
}),R.whisperTextarea.removeEventListener("touchmove",N,!1);
},U=function(){},J=function(){},Y=document.getElementById("js_author_reward_qrcode_img"),G=function(){
return n(R.whisperWrap);
},$=function(){
return i(R.whisperWrap);
},X=!1,Q=function(e){
var t=0;
try{
t=1*window.atob(window.biz);
}catch(r){}
var a={
BizUin:t,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0,
IsFans:1*e||0
},d=function(e){
return weui.alert(e&&e>H.whisperMaxLen?"悄悄话不可以超过字":"网络异常，请稍后重试");
},s=function(){
if(!R.whisperSend.disabled&&!H.sendLock){
H.sendLock=!0,I.report(19048,_extends({
EventType:3
},a)),j.show("发送中");
var e=R.whisperTextarea.value.replace(/^\s+|\s+$/g,"");
h({
url:"/mp/author?action=whisper",
data:{
__biz:window.biz||window.__biz,
mid:window.mid||window.appmsgid,
idx:window.idx,
content:e,
scene:window.source,
subscene:window.subscene,
enterid:window.enterid,
sessionid:window.sessionid
},
type:"POST",
success:function(t){
try{
t=JSON.parse(t);
}catch(r){
t={};
}
H.sendLock=!1,j.hide(),t&&t.base_resp&&0===t.base_resp.ret?(o(),$(),weui.toast("已发送",1e3)):d(e.length);
},
error:function(){
H.sendLock=!1,j.hide(),d();
}
});
}
},o=function(){
i(R.whisperDialog),R.whisperTextarea.value="",R.whisperSend.disabled=!0,F();
};
m.on(R.whisperDialogShow,"click",function(){
I.report(19048,_extends({
EventType:2
},a)),n(R.whisperDialog),R.whisperTextarea.focus(),q();
}),m.on(R.whisperDialogHide,"mousedown",o),m.on(R.whisperDialogMask,"mousedown",o),
m.on(R.whisperTextarea,"input",function(e){
var t=e.target.value.replace(/^\s+|\s+$/g,"").length;
t>H.whisperMaxLen?(R.whisperSend.disabled=!0,R.whisperCnt.innerHTML=t,R.whisperMsg.style.visibility="visible"):(R.whisperSend.disabled=0===t,
R.whisperMsg.style.visibility="hidden"),x.os.ios&&e.data&&H.doubleInputChar.indexOf(e.data)>-1&&(H.focusTag=!0);
}),m.on(R.whisperTextarea,"click",function(e){
if(x.os.ios&&H.focusTag){
var t=e.target;
t.blur(),t.focus(),H.focusTag=!1;
}
}),m.on(R.whisperSend,"mousedown",s);
};
return{
handle:function(e,t){
u=t,p(e),1==e.can_reward&&H.author_id&&R.reward&&Q(e.isFans),o(e);
},
render:function(e){
u=e,c(!0);
},
bindWhisperEvent:Q,
showWhisperWrap:G
};
});