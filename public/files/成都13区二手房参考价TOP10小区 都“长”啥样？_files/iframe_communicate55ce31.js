define("appmsg/related_article_tpl.html.js",[],function(){
return'<div class="relate_mod_transition function_mod js_related_area" style="opacity: 1; overflow: hidden; height: 0; margin: 0;">\n  <div class="function_mod_index js_related_main">\n      <div class="function_hd js_related_title">\n        <# if (type === \'share\') { #> <!-- 分享 -->\n          分享此内容的人还喜欢        <# } else if (type === \'favorite\') { #> <!-- 收藏 -->\n          收藏此内容的人还喜欢        <# } else if (type === \'praise\' || type === \'like\') { #> <!-- 点赞/在看 -->\n          喜欢此内容的人还喜欢        <# } else { #> <!-- 其它 -->\n          喜欢此内容的人还喜欢        <# } #>\n      </div>\n      <div class="function_bd">\n          <div class="relate_article_list relate_article_placeholder js_related_placeholder">\n              <div class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box_placeholder"></div></div>\n              <div class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box_placeholder"></div></div>\n              <div class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box_placeholder"></div></div>\n          </div>\n          <div class="relate_article_index_list relate_article_list js_related_list" style="height: auto;"></div>\n      </div>\n  </div>\n</div>\n';
});define("common/navShadow.js",["biz_wap/jsapi/core.js"],function(a){
"use strict";
var n=a("biz_wap/jsapi/core.js"),o="navShadowKey_",c="",t=null;
return n.on("onNavShadowClick",function(a){
c&&a.traceId===c&&"function"==typeof t&&t();
}),{
show:function(){
var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e={
action:"showNavShadow",
color:a.color||"#000000",
alpha:a.alpha||.6
};
a.onClick&&(t=a.onClick,c||(c=o+1*new Date,e.traceId=c)),n.invoke("handleMPPageAction",e,function(n){
/:ok$/.test(n.err_msg)?"function"==typeof a.callback&&a.callback(!0):"function"==typeof a.callback&&a.callback(!1);
});
},
hide:function(){
var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
c="",t=null,n.invoke("handleMPPageAction",{
action:"hideNavShadow"
},function(n){
/:ok$/.test(n.err_msg)?"function"==typeof a.callback&&a.callback(!0):"function"==typeof a.callback&&a.callback(!1);
});
}
};
});define("pages/mod/bottom_modal.html.js",[],function(){
return'<div role="dialog" aria-modal="true" aria-hidden="true" tabindex="0" class="wx_bottom_modal_wrp <#=extClass#>">\n  <div class="weui-half-screen-dialog wx_bottom_modal js_bottom_modal_content">\n    <# if (hasHeader) { #>\n      <div class="weui-half-screen-dialog__hd__wrp">\n        <div class="weui-half-screen-dialog__hd js_bottom_modal_hd">\n          <div class="weui-half-screen-dialog__hd__side">\n            <button class="weui-icon-btn js_close_bottom_modal weui-wa-hotarea">返回<i class="weui-icon-close-thin"></i></button>\n          </div>\n\n          <div class="weui-half-screen-dialog__hd__main">\n            <strong class="weui-half-screen-dialog__title js_bottom_modal_title">标题</strong>\n          </div>\n\n          <div class="weui-half-screen-dialog__hd__side">\n            <# if (hasBtn) { #>\n              <# if (btnSlot) { #>\n                <div role="button" class="js_submit_bottom_modal weui-wa-hotarea">\n                  <#==btnSlot#>\n                </div>\n              <# } else { #>\n                <button class="weui-btn weui-btn_primary weui-btn_xmini js_submit_bottom_modal weui-wa-hotarea"><#=btnText#></button>\n              <# } #>\n            <# } #>\n            <button class="weui-icon-btn" style="display:none;">更多<i class="weui-icon-more"></i></button>\n          </div>\n        </div>\n      </div>\n    <# } #>\n    <div class="weui-half-screen-dialog__bd js_bottom_modal_bd">\n      <div role="alert" class="wx_bottom_modal_msg_wrp js_modal_loading" style="display: none;">\n        <div class="wx_bottom_modal_msg">\n          <i class="weui-loading" role="img" aria-label="加载中"></i>\n        </div>\n      </div>\n      <!-- 上下拉加载loading -->\n      <div role="alert" class="weui-loadmore js_pull_loading" style="display: none;">\n        <i class="weui-loading"></i>\n        <span class="weui-loadmore__tips">正在加载</span>\n      </div>\n\n      <!-- 加载完成的dom，插到js_bottom_modal_bd下 -->\n      <div role="option" class="weui-loadmore weui-loadmore_line weui-loadmore_dot js_modal_end_line" style="display: none;">\n        <div class="weui-hidden_abs">已无更多数据</div>\n        <span class="weui-loadmore__tips"></span>\n      </div>\n    </div>\n    <# if (hasFooter) { #>\n      <div class="weui-half-screen-dialog__ft js_bottom_modal_ft"></div>\n    <# } #>\n  </div>\n  <# if (hasMask) { #>\n    <!-- 透明mask，用于防止点透 -->\n    <div class="wx_bottom_modal_mask_fixed js_bottom_modal_mask_not_click"></div>\n\n    <!-- 有底色的mask -->\n    <div class="weui-mask wx_bottom_modal_mask js_bottom_modal_mask"></div>\n  <# } #>\n</div>\n';
});;define('widget/wx-widget/wx_bottom_modal.css', [], function(require, exports, module) {
	return ".weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}body{--weui-BTN-DISABLED-FONT-COLOR:rgba(0,0,0,0.2)}body[data-weui-theme='dark']{--weui-BTN-DISABLED-FONT-COLOR:rgba(255,255,255,0.2)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DISABLED-FONT-COLOR:rgba(255,255,255,0.2)}}body{--weui-BTN-DEFAULT-BG:#f2f2f2}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-BG:rgba(255,255,255,0.08)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-BG:rgba(255,255,255,0.08)}}body{--weui-BTN-DEFAULT-COLOR:#06ae56}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-COLOR:rgba(255,255,255,0.8)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-COLOR:rgba(255,255,255,0.8)}}body{--weui-BTN-DEFAULT-ACTIVE-BG:#e6e6e6}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-ACTIVE-BG:rgba(122,122,122,0.1536)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-ACTIVE-BG:rgba(122,122,122,0.1536)}}body{--weui-DIALOG-LINE-COLOR:rgba(0,0,0,0.1)}body[data-weui-theme='dark']{--weui-DIALOG-LINE-COLOR:rgba(255,255,255,0.1)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-DIALOG-LINE-COLOR:rgba(255,255,255,0.1)}}body{--weui-BG-0:#ededed;--weui-BG-1:#f7f7f7;--weui-BG-2:#fff;--weui-BG-3:#f7f7f7;--weui-BG-4:#4c4c4c;--weui-BG-5:#fff;--weui-FG-0:rgba(0,0,0,0.9);--weui-FG-HALF:rgba(0,0,0,0.9);--weui-FG-1:rgba(0,0,0,0.5);--weui-FG-2:rgba(0,0,0,0.3);--weui-FG-3:rgba(0,0,0,0.1);--weui-RED:#fa5151;--weui-ORANGE:#fa9d3b;--weui-YELLOW:#ffc300;--weui-GREEN:#91d300;--weui-LIGHTGREEN:#95ec69;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1485ee;--weui-PURPLE:#6467f0;--weui-WHITE:#fff;--weui-LINK:#576b95;--weui-TEXTGREEN:#06ae56;--weui-FG:black;--weui-BG:white;--weui-TAG-TEXT-ORANGE:#fa9d3b;--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:#06ae56;--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:#10aeff;--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(0,0,0,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(0,0,0,0.05)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-FG-0:rgba(255,255,255,0.8);--weui-FG-HALF:rgba(255,255,255,0.6);--weui-FG-1:rgba(255,255,255,0.5);--weui-FG-2:rgba(255,255,255,0.3);--weui-FG-3:rgba(255,255,255,0.05);--weui-RED:#fa5151;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-WHITE:rgba(255,255,255,0.8);--weui-LINK:#7d90a9;--weui-TEXTGREEN:#259c5c;--weui-FG:white;--weui-BG:black;--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(255,255,255,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(255,255,255,0.05)}}body[data-weui-theme='dark']{--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-FG-0:rgba(255,255,255,0.8);--weui-FG-HALF:rgba(255,255,255,0.6);--weui-FG-1:rgba(255,255,255,0.5);--weui-FG-2:rgba(255,255,255,0.3);--weui-FG-3:rgba(255,255,255,0.05);--weui-RED:#fa5151;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-TEXTGREEN:#259c5c;--weui-FG:white;--weui-BG:black;--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(255,255,255,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(255,255,255,0.05)}body{--weui-BG-COLOR-ACTIVE:#ececec}body[data-weui-theme='dark']{--weui-BG-COLOR-ACTIVE:#282828}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BG-COLOR-ACTIVE:#282828}}.weui-half-screen-dialog{position:fixed;left:0;right:0;bottom:0;max-height:75%;z-index:5000;line-height:1.4;background-color:#fff;background-color:var(--weui-BG-2);border-top-left-radius:12px;border-top-right-radius:12px;overflow:hidden;padding:0 24px;padding:0 calc(24px + constant(safe-area-inset-right)) constant(safe-area-inset-bottom) calc(24px + constant(safe-area-inset-left));padding:0 calc(24px + env(safe-area-inset-right)) env(safe-area-inset-bottom) calc(24px + env(safe-area-inset-left))}@media only screen and (max-height:558px){.weui-half-screen-dialog{max-height:none}}.weui-half-screen-dialog__hd{font-size:8px;height:8em;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-half-screen-dialog__hd .weui-icon-btn{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.weui-half-screen-dialog__hd .weui-icon-btn:active{opacity:.5}.weui-half-screen-dialog__hd__side{position:relative;left:-8px}.weui-btn__word-wrp{font-size:15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;right:2px}.weui-btn__word-wrp:active{opacity:.5}.weui-btn__word{color:rgba(0,0,0,0.5)}.weui_right_arrow{display:inline-block;vertical-align:middle;font-size:10px;width:1em;height:2em;margin-left:4px;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='10' height='20' viewBox='0 0 10 20'%3E  %3Cpath fill-opacity='.5' fill-rule='evenodd' d='M2.045 5.484l.884-.884 4.816 4.816a.83.83 0 0 1 0 1.177l-4.816 4.816-.884-.884 4.52-4.52-4.52-4.521z'\/%3E%3C\/svg%3E\")}.weui-half-screen-dialog__hd__main{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-half-screen-dialog__hd__side+.weui-half-screen-dialog__hd__main{text-align:center;padding:0 40px}.weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side{right:-8px;left:auto}.weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side .weui-icon-btn{right:0}.weui-half-screen-dialog__title{display:block;color:rgba(0,0,0,0.9);color:var(--weui-FG-0);font-weight:700;font-size:15px}.weui-half-screen-dialog__subtitle{display:block;color:rgba(0,0,0,0.5);color:var(--weui-FG-1);font-size:10px}.weui-half-screen-dialog__bd{word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-top:4px;padding-bottom:40px;font-size:14px;color:rgba(0,0,0,0.9);color:var(--weui-FG-0)}.weui-half-screen-dialog__desc{font-size:17px;font-weight:700;color:rgba(0,0,0,0.9);color:var(--weui-FG-0);line-height:1.4}.weui-half-screen-dialog__tips{padding-top:16px;font-size:14px;color:rgba(0,0,0,0.3);color:var(--weui-FG-2);line-height:1.4}.weui-half-screen-dialog__ft{padding:0 24px 32px;text-align:center}.weui-half-screen-dialog__ft .weui-btn:nth-last-child(n+2),.weui-half-screen-dialog__ft .weui-btn:nth-last-child(n+2)+.weui-btn{display:inline-block;vertical-align:top;margin:0 8px;width:120px}@media(prefers-color-scheme:dark){.weui-btn__word{color:rgba(255,255,255,0.5)}.weui_right_arrow{background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='10' height='20' viewBox='0 0 10 20'%3E  %3Cpath fill='%23FFFFFF' fill-opacity='.5' fill-rule='evenodd' d='M2.045 5.484l.884-.884 4.816 4.816a.83.83 0 0 1 0 1.177l-4.816 4.816-.884-.884 4.52-4.52-4.52-4.521z'\/%3E%3C\/svg%3E\")}}.weui-loadmore.weui-loadmore_line .weui-loadmore__tips{padding:0 8px}.weui-loadmore.weui-loadmore_dot{width:68px}.weui-loadmore.weui-loadmore_dot .weui-loadmore__tips{padding:0 8px}.weui-loadmore_default.weui-loadmore{width:auto;line-height:1.4;margin:0 56px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.weui-loadmore_default.weui-loadmore_line{margin-top:0;margin-bottom:0;border:0}.weui-loadmore_default.weui-loadmore_line:before,.weui-loadmore_default.weui-loadmore_line:after{content:\"\";width:24px;height:1px;background:rgba(0,0,0,0.1)}.weui-loadmore_default.weui-loadmore_line .weui-loadmore__tips{top:auto;padding:0 8px;background:transparent;color:rgba(0,0,0,0.3);line-height:inherit}.weui-loadmore_default.weui-loadmore_dot{margin-top:0;margin-bottom:0}.weui-loadmore_default.weui-loadmore_dot .weui-loadmore__tips{line-height:.5}@media(prefers-color-scheme:dark){.weui-loadmore_default.weui-loadmore_line:before,.weui-loadmore_default.weui-loadmore_line:after{background:rgba(255,255,255,0.05)}.weui-loadmore_default.weui-loadmore_line .weui-loadmore__tips{color:rgba(255,255,255,0.3)}}.wx_page_no_scroll{height:100%;overflow:hidden}.wx_bottom_modal{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;top:100%;-webkit-transition:top .3s;transition:top .3s;visibility:hidden}.wx_bottom_modal .weui-half-screen-dialog__hd__side{min-width:64px}.wx_bottom_modal .weui-half-screen-dialog__hd__side+.weui-half-screen-dialog__hd__main{padding:0}.wx_bottom_modal .weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side{text-align:right}.wx_bottom_modal .weui-btn__word-wrp{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-tap-highlight-color:rgba(0,0,0,0)}.wx_bottom_modal.weui-half-screen-dialog{max-height:none;overflow:initial}.wx_bottom_modal .weui-half-screen-dialog__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;position:relative;-ms-scroll-chaining:none;overscroll-behavior:contain}.wx_bottom_modal .album_keep_read_item{pointer-events:auto!important}.wx_bottom_modal_wrp>.wx_bottom_modal_mask_fixed,.wx_bottom_modal_wrp>.weui-mask{visibility:hidden}.wx_bottom_modal_show>.wx_bottom_modal_mask_fixed,.wx_bottom_modal_show>.weui-mask{visibility:visible}.wx_bottom_modal_show .weui-half-screen-dialog{top:100%}.wx_bottom_modal_show.wx_bottom_modal_right .weui-half-screen-dialog{top:auto;-webkit-transform:translateX(0);transform:translateX(0)}.wx_bottom_modal_right .weui-half-screen-dialog{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.wx_bottom_modal_form .wx_bottom_modal{-webkit-transition:none;transition:none;opacity:0}.wx_bottom_modal_msg_wrp{height:100%}.wx_bottom_modal_msg{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:20px;box-sizing:border-box;color:rgba(0,0,0,0.9);font-size:14px}.wx_bottom_modal_msg .weui-loading{width:20px;height:20px}.weui-mask.wx_bottom_modal_mask{top:-100px}.wx_bottom_modal_mask_fixed{width:100%;height:100%;position:fixed;top:0;background-color:transparent}.weui-half-screen-dialog_headline .weui-half-screen-dialog__hd__wrp .weui-half-screen-dialog__hd{margin-bottom:-1px}.weui-half-screen-dialog_headline .weui-half-screen-dialog__hd__wrp:after{content:\"\";display:block;height:1px;background:rgba(0,0,0,0.1);-webkit-transform:scaleY(0.5);transform:scaleY(0.5);-webkit-transform-origin:0 100%;transform-origin:0 100%;position:relative;bottom:0;z-index:1}@media(prefers-color-scheme:dark){.wx_bottom_modal .weui-loadmore__tips{color:rgba(255,255,255,0.5)}.wx_bottom_modal_msg{color:rgba(255,255,255,0.8)}.weui-half-screen-dialog_headline .weui-half-screen-dialog__hd__wrp:after{background:rgba(255,255,255,0.05)}}";
});define("biz_common/utils/monitor.js",[],function(){
"use strict";
function t(t,r){
if(null===t)return{};
for(var o={},e=Object.keys(t),n=0;n<e.length;n++){
var i=e[n];
r.indexOf(i)>=0||(o[i]=t[i]);
}
return o;
}
function r(t){
var r=[],o=null;
for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.push(o+"="+encodeURIComponent(t[o]));
return r.join("&");
}
var o=[],e="/mp/jsmonitor?#wechat_redirect",n={};
return window.__monitor?window.__monitor:(n._reportOptions={
idkey:{}
},n.getReportData=function(t){
t=t||{};
var r,e,i=n._reportOptions.idkey||{},p=null;
try{
for(p in i)Object.prototype.hasOwnProperty.call(i,p)&&i[p]&&o.push(p+"_"+i[p]);
}catch(a){
return!1;
}
if(0===o.length)return!1;
try{
var c=n._reportOptions;
if(null!==c&&void 0!==c)for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(r[e]=c[e]);
}catch(a){
r={};
}
return r.idkey=o.join(";"),r.t=Math.random(),t.remove!==!1&&(o=[],n._reportOptions={
idkey:{}
}),r;
},n.setLogs=function(r){
var o=r.id,e=r.key,i=r.value,p=t(r,["id","key","value"]),a=n._reportOptions.idkey||{},c=o+"_"+e;
a[c]?a[c]+=i:a[c]=i,n._reportOptions.idkey=a;
try{
if(null!==p&&void 0!==p)for(var s in p)Object.prototype.hasOwnProperty.call(p,s)&&(n._reportOptions[s]=p[s]);
}catch(u){
console.log(u);
}
return n;
},n.setAvg=function(t,r,o){
var e=n._reportOptions.idkey||{},i=t+"_"+r,p=t+"_"+(r-1);
return e[i]?e[i]+=o:e[i]=o,e[p]?e[p]+=1:e[p]=1,n._reportOptions.idkey=e,n;
},n.setSum=function(t,r,o){
var e=n._reportOptions.idkey,i=t+"_"+r;
return e[i]?e[i]+=o:e[i]=o,n._reportOptions.idkey=e,n;
},n.send=function(t,o,i){
t!==!1&&(t=!0);
var p=n.getReportData();
i=i||"",p&&(o&&o instanceof Function?o({
url:i+e,
type:"POST",
mayAbort:!0,
data:p,
async:t,
timeout:2e3
}):(new Image).src=i+"/mp/jsmonitor?"+r(p)+"#wechat_redirect");
},window.__monitor=n,n);
});define("biz_wap/utils/setMpInfo.js",["biz_wap/jsapi/core.js"],function(n,r,t){
"use strict";
function e(n,r){
a(i,n),o.invoke("currentMpInfo",i,r);
}
var o=n("biz_wap/jsapi/core.js"),i={},a=null;
a="function"==typeof Object.assign?Object.assign:function(){
var n=Array.prototype.slice.call(arguments);
if(null==n[0])throw new TypeError("Cannot convert undefined or null to object");
for(var r=Object(n[0]),t=1;t<n.length;t++){
var e=n[t];
if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);
}
return r;
},t.exports={
currentMpInfo:e
};
});var _extends=Object.assign||function(e){
for(var n=1;n<arguments.length;n++){
var t=arguments[n];
for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);
}
return e;
};
define("pages/utils.js",["appmsg/appmsg_report.js","biz_common/utils/emoji_data.js","pages/version4video.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","album/utils/report.js","common/utils.js","biz_common/utils/url/parse.js","appmsg/i18n.js"],function(e){
"use strict";
function n(e){
if(!e)return null;
var n=location.href.match(new RegExp("(\\?|&)"+e+"=([^&]+)"));
return n?n[2].split("#")[0]:null;
}
function t(e){
if(window.hasChannelTwoTab&&C.isNewNativePage()){
var n=void 0;
n=document.getElementById("tab").offsetTop-window.minHeight;
var t=document.body.offsetHeight,i=z+n;
if(i>t){
var o=n+z-document.body.offsetHeight,r=document.createElement("div");
r.setAttribute("class","empty_comment_element"),r.style.cssText="height: "+o+"px;",
document.getElementById(e).appendChild(r);
}
window.minMountHeight=i;
}
}
function i(){
S.on(window,"load",function(){
!window.__networkType&&A.inWechat&&!function(){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
I.invoke("getNetworkType",{},function(n){
window.__networkType=e[n.err_msg];
});
}();
},!1);
}
function o(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
appId:e.appId,
img_url:e.img_url,
img_width:e.img_width,
img_height:e.img_height,
link:e.link.replace(/<br\/>/g,"\n"),
desc:e.desc.replace(/<br\/>/g,"\n"),
title:e.title
};
i(),/#wechat_redirect/.test(n.link)||(n.link+="#wechat_redirect");
var t="",o={
url:n.link,
actionType:0
},r=B;
e.isAlbum?(t="album",n=_extends({
album_id:e.album_id,
album_type:e.album_type
},n),o=_extends({
albumId:e.album_id,
albumType:e.album_type
},o)):"function"==typeof e.shareReport&&(r=function(n,t){
return e.shareReport(t.actionType);
}),I.on("menu:share:appmessage",function(e){
var i=void 0;
e&&"favorite"===e.scene?(i=24,n.link=V(n.link,"scene",Q[1])):(i=1,n.link=V(n.link,"scene",Q[0])),
o.url=n.link,o.actionType=i,r(t,o),I.invoke("sendAppMessage",n);
}),I.on("menu:share:timeline",function(){
n.link=V(n.link,"scene",Q[2]),o.url=n.link,o.actionType=2,r(t,o),I.invoke("shareTimeline",n);
}),I.on("menu:share:weiboApp",function(){
n.link=V(n.link,"scene",Q[3]),o.url=n.link,o.actionType=3,r(t,o),I.invoke("shareWeiboApp",{
img_url:n.img_url,
link:n.link,
title:n.title
});
}),I.on("menu:share:facebook",function(){
n.link=V(n.link,"scene",Q[4]),o.url=n.link,o.actionType=7,r(t,o),I.invoke("shareFB",n);
}),I.on("menu:share:QZone",function(){
n.link=V(n.link,"scene",Q[5]),o.url=n.link,o.actionType=5,r(t,o),I.invoke("shareQZone",n);
}),I.on("menu:share:qq",function(){
n.link=V(n.link,"scene",Q[6]),o.url=n.link,o.actionType=5,r(t,o),I.invoke("shareQQ",n);
}),I.on("menu:share:email",function(){
n.link=V(n.link,"scene",Q[7]),o.url=n.link,o.actionType=5,r(t,o),I.invoke("sendEmail",{
content:n.link,
title:n.title
});
});
}
function r(e){
for(var n=window.location.href,t=n.indexOf("?"),i=n.substr(t+1),o=i.split("&"),r=0;r<o.length;r++){
var a=o[r].split("=");
if(a[0].toUpperCase()==e.toUpperCase())return a[1];
}
return"";
}
function a(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2];
T.isWechat&&(T.isIOS||T.isAndroid)?I.invoke("profile",n,t):location.href="/mp/profile_ext?action=home&__biz="+e.biz+"&scene="+e.scene+"#wechat_redirect";
}
function s(e,n){
I.invoke("createWebViewForFastLoad",{
scene:1
},function(){
e.forEach(function(e){
I.invoke("downloadPageDataForFastLoad",{
itemList:[{
item_show_type:5,
url:e[n]
}]
},function(e){
console.log(e);
});
});
});
}
function c(e,n,t){
var i=void 0;
return function(){
var o=this,r=arguments,a=function(){
i=null,t||e.apply(o,r);
},s=t&&!i;
clearTimeout(i),i=setTimeout(a,n),s&&e.apply(o,r);
};
}
function l(e){
var n=parseInt(e,10),t=0,i=0;
n>60&&(t=parseInt(n/60,10),n=parseInt(n%60,10),t>60&&(i=parseInt(t/60,10),t=parseInt(t%60,10))),
10>n&&(n="0"+n);
var o=":"+n;
return t>0?(10>t&&(t="0"+t),o=t+o):o="00"+o,i>0&&(0===parseInt(i,10)?i="":10>i&&(i="0"+i),
o=""+i+":"+o),o;
}
function u(e){
if("en"===window.LANG)return O.dealLikeReadShow_en(e);
var n="";
if(parseInt(e,10)>1e5)n="10万+";else if(parseInt(e,10)>1e4&&parseInt(e,10)<=1e5){
var t=""+parseInt(e,10)/1e4,i=t.indexOf(".");
n=-1===i?t+"万":t.substr(0,i)+"."+t.charAt(i+1)+"万";
}else n=0===parseInt(e,10)?"":e||"";
return n;
}
function d(e,n){
var t=void 0,i=void 0;
return function(){
var o=this,r=arguments,a=+new Date;
t&&t+n>a?(clearTimeout(i),i=setTimeout(function(){
t=a,e.apply(o,r);
},n)):(t=a,e.apply(o,r));
};
}
function m(){
var e=0,n=0,t=0;
return document.body&&(n=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),
e=n-t>0?n:t;
}
function p(){
var e=0,n=void 0,t=void 0;
return document.body&&(n=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),
e=n-t>0?n:t;
}
function g(){
var e=0;
return e="CSS1Compat"===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight;
}
function h(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=location.origin+"/mp/videochannel_profile_page?biz_username="+encodeURIComponent(e.userName)+"&sessionid="+e.sessionId+"&__biz="+e.biz+"&scene="+e.scene+"&subscene="+e.subscene+"&channel_session_id="+e.channelSessionId+"#wechat_redirect";
R(n,!0);
}
function f(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.albumLink.replace("#wechat_redirect","")+("&scene="+e.scene+"&is_first_screen=1&subscene="+e.subscene+"&vid="+e.vid+"&count="+(e.pageCount?e.pageCount:3)+"&from_msgid="+(e.curMsgid?e.curMsgid:"")+"&from_itemidx="+(e.curItemidx?e.curItemidx:"")+"&scenenote="+e.scenenote+"#wechat_redirect");
R(n,!0);
}
function w(e){
return e.getBoundingClientRect().top;
}
function v(e){
return e.getBoundingClientRect().height;
}
function _(){
return m()+g()+30>=p();
}
function b(e,n){
return M.getQuery("__biz",e)+"_"+M.getQuery("mid",e)+"_"+M.getQuery("idx",e)+"_"+n;
}
function k(e,n){
var t="en"===window.LANG,i=t?"k":"万",o="",r=1e4*n,a=t?10*n:n;
if(e=parseInt(e,10),e>r)o=a+i+"+";else if(e>=1e4&&r>=e){
var s=""+(t?e/1e3:e/1e4),c=s.indexOf(".");
o=-1===c?s+i:s.substr(0,c)+"."+s.charAt(c+1)+i;
}else o=e;
return o||0;
}
function y(e,n){
if(n.useSwitchVideo||C.isNativePage())I.invoke("handleMPPageAction",_extends({
action:"switchVideo",
scene:n.clickScene,
channelSessionId:window.channel_session_id,
landingType:window.isFromVideoChannel?1:2,
subscene:n.clickSubScene
},e),function(e){
console.log(JSON.stringify(e));
});else if(n.isWcSlPlayerTailIframe&&window.top!==window)window.parent.postMessage({
__wcSlPlayerLoadTailRelateVideo__:e.url
},document.location.protocol+"//mp.weixin.qq.com");else if(!window.__failConfigWxOpen&&C.isWcSlPage())n.leaveReport(),
C.loadNewPageKeepingHistoryStackIfSecOpen(e.url);else{
console.log("==================JSAPI.invoke openWebViewUseFastLoad",window.__failConfigWxOpen,C.isWcSlPage());
var t=n.target.getElementsByClassName("js_relate_cover_img")[0],i=window.getComputedStyle(t),o=t.getBoundingClientRect(),r=document.createElement("canvas");
r.style.width=i.width,r.style.height=i.height,r.width=parseFloat(i.width),r.height=parseFloat(i.height);
var a=r.getContext("2d"),s="";
try{
a.drawImage(t,0,0,o.width,o.height),s=r.toDataURL();
}catch(c){
console.error(c);
}
T.isAndroid&&(s=""),I.invoke("openWebViewUseFastLoad",_extends({
scene:n.clickScene,
item_show_type:5,
openType:0,
subscene:n.clickSubScene,
channelSessionId:window.channel_session_id,
currentInfo:{
url:e.cover,
data:s,
pos:{
x:o.left-parseFloat(i.paddingLeft)-parseFloat(i.borderLeftWidth),
y:o.top-parseFloat(i.paddingTop)-parseFloat(i.borderTopWidth),
width:o.width-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth),
height:o.height-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)
}
}
},e),function(t){
console.log(t),t&&t.err_msg&&-1===t.err_msg.indexOf("ok")&&I.invoke("openUrlWithExtraWebview",{
url:e.url,
openType:1
},function(t){
t&&t.err_msg&&-1===t.err_msg.indexOf("ok")&&(n.leaveReport(),window.location.href=e.url);
});
});
}
}
var x=e("appmsg/appmsg_report.js"),W=e("biz_common/utils/emoji_data.js"),j=e("pages/version4video.js"),T=e("biz_wap/utils/mmversion.js"),I=e("biz_wap/jsapi/core.js"),S=e("biz_common/dom/event.js"),E=e("album/utils/report.js"),C=e("common/utils.js"),M=e("biz_common/utils/url/parse.js"),O=e("appmsg/i18n.js"),z=C.getInnerHeight(),F=C.getInnerWidth(),A={
inWechat:j.device.inWechat,
windowWechat:/WindowsWechat/i.test(navigator.userAgent),
macWechat:/wechat.*mac os/i.test(navigator.userAgent),
emojiImg:'<img src="https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single #style#" alt="#name#">',
emojiDataMap:{}
};
!function(){
for(var e=0,n=W.length;n>e;e++){
var t=W[e];
t.cn&&!A.emojiDataMap[t.cn]&&(A.emojiDataMap[t.cn]={
index:e
}),t.hk&&!A.emojiDataMap[t.hk]&&(A.emojiDataMap[t.hk]={
index:e
}),t.us&&!A.emojiDataMap[t.us]&&(A.emojiDataMap[t.us]={
index:e
});
}
}();
var P=function(e){
return/\[[^\[\]]+\]/.test(e)?e.replace(/\[[^\[\]]+\]/g,function(e){
if(A.emojiDataMap[e]&&W[A.emojiDataMap[e].index]){
var n=W[A.emojiDataMap[e].index];
return A.emojiImg.replace("#name#",e).replace("#style#",n.style);
}
return e;
}):e;
},R=function(e,n){
A.inWechat?A.windowWechat||A.macWechat?window.parent.location.href=e:I.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(n===!0?window.parent.open(e):window.parent.location.href=e);
}):n===!0?window.open(e):location.href=e;
},N=function(){
!A.inWechat||A.windowWechat||A.macWechat?window.close():I.invoke("closeWindow",function(e){
-1==e.err_msg.indexOf("ok")&&window.close();
});
},L=function(e){
return document.getElementById(e);
},B=function(e){
var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
"album"===e&&E.shareReport(n);
},H=function(e,n){
return(n||document).getElementsByClassName(e);
},q=function(e){
return(""+(e||"")).replace(/^\s+|\s+$/g,"");
},D=function(e,n){
return(n||document).querySelector(e);
},U=function(e,n){
return(n||document).querySelectorAll(e);
},V=function(e,n,t){
var i=new RegExp(n+"=[^&]*","gi"),o=n+"="+t;
return i.test(e)?e.replace(i,o):e.replace(/(#.*)?$/,""+(e.indexOf("?")>-1?"&":"?")+o+"$1");
},Q=[1,24,2,3,43,22,23,5],G=null,$=function(e){
var t=e.$container;
t&&!T.isInMiniProgram&&(G&&S.off(t,"tap",G),S.on(t,"tap",".js_go_profile",G=function(t){
var i=t.delegatedTarget;
i&&!function(){
var t=i.getAttribute("data-biz")||e.biz||window.biz||"";
if("function"==typeof e.beforeGo2Profile&&e.beforeGo2Profile(i),1==window.isprofileblock)I.invoke("openUrlWithExtraWebview",{
url:"https://mp.weixin.qq.com/mp/profileblock?__biz="+t+"#wechat_redirect",
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href="https://mp.weixin.qq.com/mp/profileblock?__biz="+t+"#wechat_redirect");
});else{
var o=i.getAttribute("data-scene")||e.profile_scene||"";
x.profileReport({
isnew:0,
title:e.title||"",
item_show_type:e.item_show_type||""
}),console.log("channelSessionId"+n("channel_session_id")),I.invoke("profile",{
username:e.user_name,
profileReportInfo:"",
scene:o+"",
channelSessionId:n("channel_session_id"),
subscene:e.subscene,
tabType:e.tabType||1
},function(){});
}
}();
}));
},J=function(e){
var n=arguments.length<=1||void 0===arguments[1]?.5:arguments[1],t=arguments.length<=2||void 0===arguments[2]?"vertical":arguments[2],i=arguments.length<=3||void 0===arguments[3]?window:arguments[3];
if(!e)return!1;
var o=!1,r=0,a=0,s=!1,c=!1,l=i===i.window?F:i.getBoundingClientRect().width,u=i===i.window?z:i.getBoundingClientRect().height;
switch("number"==typeof n?(r=n,a=n):(r=n.vertical,a=n.horizontal),t){
case"vertical":
s=!0;
break;

case"horizontal":
c=!0;
break;

case"all":
s=!0,c=!0;
}
var d=e.getBoundingClientRect();
if(s){
var m=d.height*r;
d.bottom>m&&d.top<u-m&&(o=!0);
}
if(!c)return o;
if(s&&!o)return o;
var p=d.width*a;
return o=d.right>p&&d.left<l-p?!0:!1;
},Z=function(e,n){
for(;e;){
if(e===n)return!0;
e=e.parentNode;
}
return!1;
},K=function(e){
var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t=arguments.length<=2||void 0===arguments[2]?"webview":arguments[2];
if(e){
/^http/.test(e)||(e=location.protocol+"//"+location.host+e);
var i=(-1===e.indexOf("?")?"?":"&")+Object.keys(n).map(function(e){
return e+"="+n[e];
}).join("&"),o=e.indexOf("#");
switch(-1===o?e+=i+"#wechat_redirect":e=e.slice(0,o)+i+e.slice(o),t){
case"webview":
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(T.isIOS||T.isAndroid||T.isWp)?I.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(n){
-1===n.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
break;

case"href":
default:
location.href=e;
}
}
},X=function(e){
if(!e.length)return{};
var n=e.indexOf("?"),t={};
return n>-1&&e.slice(n+1,e.indexOf("#")>-1?e.indexOf("#"):void 0).split("&").forEach(function(e){
if(e){
var n=e.indexOf("=");
n>-1?t[e.slice(0,n)]=e.slice(n+1):t[e]="";
}
}),t;
},Y=function(){
var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
if("number"!=typeof e||"number"!=typeof n)throw new Error(e+" and "+n+" should be a number.");
var t={
value:0,
unit:""
},i=1e4,o=["","万","亿","万亿"],r=0;
return"en"===window.LANG&&(i=1e3,o=["","k","m","b"]),i>e?(t.value=e,t.unit=""):(r=Math.floor(Math.log(e)/Math.log(i)),
t.value=(e/Math.pow(i,r)).toFixed(n),t.unit=o[r]),t.value+t.unit;
},en=function(e){
e=e||document.body;
var n=document.createElement("div");
n.style.width="1000em",e.appendChild(n);
var t=n.offsetWidth/1e3;
return e.removeChild(n),t;
},nn=function(){
var e=document.createElement("style");
return e.innerHTML="* { -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }",
{
enableSelect:function(){
document.head.contains(e)&&document.head.removeChild(e);
},
disableSelect:function(){
document.head.appendChild(e);
}
};
}(),tn=nn.enableSelect,on=nn.disableSelect;
return{
jumpUrl:R,
closeWin:N,
trim:q,
getId:L,
qs:D,
qsAll:U,
inWechat:A.inWechat,
windowWechat:A.windowWechat,
macWechat:A.macWechat,
emojiFormat:P,
getParam:n,
go2ProfileEvent:$,
prepareNativePage:s,
debounce:c,
throttle:d,
formatReadNum:u,
formatSeconds:l,
setTwoTabHeight:t,
getByClass:H,
getScrollTop:m,
getScrollHeight:p,
getWindowHeight:g,
shareMessage:o,
getElementTop:w,
formatAlbumnReadNum:k,
getElementHeight:v,
getQuery:r,
openAllVideoPage:h,
getNetWorkType:i,
getMoreVideoInfo:b,
isPageEnd:_,
openAlbumPage:f,
switchVideo:y,
checkExposedStatus:J,
isParent:Z,
goUrl:K,
getUrlParamsMap:X,
numFormat2Unit:Y,
goProfile:a,
getDefaultFontSize:en,
enableSelect:tn,
disableSelect:on
};
});define("appmsg/like_profile_tpl.html.js",[],function(){
return'<!-- 关注 -->\n<!-- 显示：去掉wx_follow_hide，并获取function_mod_inner的高度，赋值给function_mod即可-->\n<div class="wx_follow_context wx_follow_hide" id="js_like_profile_bar">\n    <div class="function_mod js_function_mod">\n        <div class="function_mod_inner js_function_mod_inner">\n        <div class="function_hd">关注以获取最新消息</div>\n        <div class="function_bd">\n            <div class="wx_follow_media weui-flex">\n            <div class="wx_follow_hd">\n                <img class="wx_follow_avatar" src="{roundHeadImg}" alt="">\n\n            </div>\n            <div class="wx_follow_bd weui-flex__item">\n                <div class="wx_follow_nickname" role="link"\n                  id="js_wx_follow_nickname"\n                  aria-labelledby="js_wx_follow_nickname"\n                  aria-describedby="js_wx_follow_tips"\n                  >{nickname}</div>\n                <div class="wx_follow_tips" id="js_wx_follow_tips" aria-hidden="true">\n                    {if orignalNum}\n                    <span class="wx_follow_tips_meta">{orignalNum}篇原创内容</span>\n                    {/if}\n                    {if friendSubscribeCount}\n                    <span class="wx_follow_tips_meta">{friendSubscribeCount}位朋友关注</span>\n                    {/if}\n                </div>\n            </div>\n            <div class="wx_follow_ft">\n                <button class="weui-btn weui-btn_primary weui-btn_xmini weui-wa-hotarea" type="button" id="js_focus">关注</button>\n                <button class="weui-btn weui-btn_primary weui-btn_xmini weui-btn_disabled" type="button" id="js_already_focus" style="display: none;">已关注</button>\n            </div>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n';
});define("biz_common/template-2.0.1-cmd.js",[],function(){
"use strict";
var e=function(n,t){
return e["object"==typeof t?"render":"compile"].apply(e,arguments);
};
return window.template=e,function(e,n){
e.version="2.0.1",e.openTag="<#",e.closeTag="#>",e.isEscape=!0,e.isCompress=!1,e.parser=null,
e.render=function(e,n){
var t=r(e);
return void 0===t?o({
id:e,
name:"Render Error",
message:"No Template"
}):t(n);
},e.compile=function(n,r){
function a(t){
try{
return new l(t)+"";
}catch(i){
return u?(i.id=n||r,i.name="Render Error",i.source=r,o(i)):e.compile(n,r,!0)(t);
}
}
var c=arguments,u=c[2],s="anonymous";
"string"!=typeof r&&(u=c[1],r=c[0],n=s);
try{
var l=i(r,u);
}catch(p){
return p.id=n||r,p.name="Syntax Error",o(p);
}
return a.prototype=l.prototype,a.toString=function(){
return l.toString();
},n!==s&&(t[n]=a),a;
},e.helper=function(n,t){
e.prototype[n]=t;
},e.onerror=function(e){
var t="[template]:\n"+e.id+"\n\n[name]:\n"+e.name;
e.message&&(t+="\n\n[message]:\n"+e.message),e.line&&(t+="\n\n[line]:\n"+e.line,
t+="\n\n[source]:\n"+e.source.split(/\n/)[e.line-1].replace(/^[\s\t]+/,"")),e.temp&&(t+="\n\n[temp]:\n"+e.temp),
n.console&&console.error(t);
};
var t={},r=function(r){
var o=t[r];
if(void 0===o&&"document"in n){
var i=document.getElementById(r);
if(i){
var a=i.value||i.innerHTML;
return e.compile(r,a.replace(/^\s*|\s*$/g,""));
}
}else if(t.hasOwnProperty(r))return o;
},o=function(n){
function t(){
return t+"";
}
return e.onerror(n),t.toString=function(){
return"{Template Error}";
},t;
},i=function(){
e.prototype={
$render:e.render,
$escape:function(e){
return"string"==typeof e?e.replace(/&(?![\w#]+;)|[<>"']/g,function(e){
return{
"<":"&#60;",
">":"&#62;",
'"':"&#34;",
"'":"&#39;",
"&":"&#38;"
}[e];
}):e;
},
$string:function(e){
return"string"==typeof e||"number"==typeof e?e:"function"==typeof e?e():"";
}
};
var n=Array.prototype.forEach||function(e,n){
for(var t=this.length>>>0,r=0;t>r;r++)r in this&&e.call(n,this[r],r,this);
},t=function(e,t){
n.call(e,t);
},r="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",o=/\/\*(?:.|\n)*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|'[^']*'|"[^"]*"|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g,i=/[^\w$]+/g,a=new RegExp(["\\b"+r.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),c=/\b\d[^,]*/g,u=/^,+|,+$/g,s=function(e){
return e=e.replace(o,"").replace(i,",").replace(a,"").replace(c,"").replace(u,""),
e=e?e.split(/,+/):[];
};
return function(n,r){
function o(n){
return g+=n.split(/\n/).length-1,e.isCompress&&(n=n.replace(/[\n\r\t\s]+/g," ")),
n=n.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n"),n=w[1]+"'"+n+"'"+w[2],
n+"\n";
}
function i(n){
var t=g;
if(p?n=p(n):r&&(n=n.replace(/\n/g,function(){
return g++,"$line="+g+";";
})),0===n.indexOf("=")){
var o=0!==n.indexOf("==");
if(n=n.replace(/^=*|[\s;]*$/g,""),o&&e.isEscape){
var i=n.replace(/\s*\([^\)]+\)/,"");
$.hasOwnProperty(i)||/^(include|print)$/.test(i)||(n="$escape($string("+n+"))");
}else n="$string("+n+")";
n=w[1]+n+w[2];
}
return r&&(n="$line="+t+";"+n),a(n),n+"\n";
}
function a(e){
e=s(e),t(e,function(e){
h.hasOwnProperty(e)||(c(e),h[e]=!0);
});
}
function c(e){
var n;
"print"===e?n=O:"include"===e?(y.$render=$.$render,n=j):(n="$data."+e,$.hasOwnProperty(e)&&(y[e]=$[e],
n=0===e.indexOf("$")?"$helpers."+e:n+"===undefined?$helpers."+e+":"+n)),m+=e+"="+n+",";
}
var u=e.openTag,l=e.closeTag,p=e.parser,f=n,d="",g=1,h={
$data:!0,
$helpers:!0,
$out:!0,
$line:!0
},$=e.prototype,y={},m="var $helpers=this,"+(r?"$line=0,":""),v="".trim,w=v?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],b=v?"if(content!==undefined){$out+=content;return content}":"$out.push(content);",O="function(content){"+b+"}",j="function(id,data){if(data===undefined){data=$data}var content=$helpers.$render(id,data);"+b+"}";
t(f.split(u),function(e){
e=e.split(l);
var n=e[0],t=e[1];
1===e.length?d+=o(n):(d+=i(n),t&&(d+=o(t)));
}),f=d,r&&(f="try{"+f+"}catch(e){e.line=$line;throw e}"),f="'use strict';"+m+w[0]+f+"return new String("+w[3]+")";
try{
var E=new Function("$data",f);
return E.prototype=y,E;
}catch(T){
throw T.temp="function anonymous($data) {"+f+"}",T;
}
};
}();
e.openTag="{",e.closeTag="}",e.parser=function(n){
n=n.replace(/^\s/,"");
var t=n.split(" "),r=t.shift(),o=e.keywords,i=o[r];
return i&&o.hasOwnProperty(r)?(t=t.join(" "),n=i.call(n,t)):e.prototype.hasOwnProperty(r)?(t=t.join(","),
n="=="+r+"("+t+");"):(n=n.replace(/[\s;]*$/,""),n="="+n),n;
},e.keywords={
"if":function(e){
return"if("+e+"){";
},
"else":function(e){
return e=e.split(" "),e="if"===e.shift()?" if("+e.join(" ")+")":"","}else"+e+"{";
},
"/if":function(){
return"}";
},
each:function(e){
e=e.split(" ");
var n=e[0]||"$data",t=e[1]||"as",r=e[2]||"$value",o=e[3]||"$index",i=r+","+o;
return"as"!==t&&(n="[]"),"$each("+n+",function("+i+"){";
},
"/each":function(){
return"});";
},
echo:function(e){
return"print("+e+");";
},
include:function(e){
e=e.split(" ");
var n=e[0],t=e[1],r=n+(t?","+t:"");
return"include("+r+");";
}
},e.helper("$each",function(e,n){
var t=Array.isArray||function(e){
return"[object Array]"===Object.prototype.toString.call(e);
};
if(t(e))for(var r=0,o=e.length;o>r;r++)n.call(e,e[r],r,e);else for(r in e)n.call(e,e[r],r);
});
}(e,window),e;
});define("tpl/appmsg/loading.html.js",[],function(){
return'<div style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class="weui-loading weui-icon_toast"></i>\n    <p class="weui-toast__content js_loading_content"></p>\n  </div>\n</div>';
});define("biz_common/base64.js",[],function(r,t,n){
"use strict";
var e,c="2.1.9";
if("undefined"!=typeof n&&n.exports)try{}catch(o){}
var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=function(r){
for(var t={},n=0,e=r.length;e>n;n++)t[r.charAt(n)]=n;
return t;
}(u),h=String.fromCharCode,i=function(r){
if(r.length<2){
var t=r.charCodeAt(0);
return 128>t?r:2048>t?h(192|t>>>6)+h(128|63&t):h(224|t>>>12&15)+h(128|t>>>6&63)+h(128|63&t);
}
var t=65536+1024*(r.charCodeAt(0)-55296)+(r.charCodeAt(1)-56320);
return h(240|t>>>18&7)+h(128|t>>>12&63)+h(128|t>>>6&63)+h(128|63&t);
},f=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,A=function(r){
return r.replace(f,i);
},d=function(r){
var t=[0,2,1][r.length%3],n=r.charCodeAt(0)<<16|(r.length>1?r.charCodeAt(1):0)<<8|(r.length>2?r.charCodeAt(2):0),e=[u.charAt(n>>>18),u.charAt(n>>>12&63),t>=2?"=":u.charAt(n>>>6&63),t>=1?"=":u.charAt(63&n)];
return e.join("");
},g=function(r){
return r.replace(/[\s\S]{1,3}/g,d);
},s=e?function(r){
return(r.constructor===e.constructor?r:new e(r)).toString("base64");
}:function(r){
return g(A(r));
},C=function(r,t){
return t?s(String(r)).replace(/[+\/]/g,function(r){
return"+"==r?"-":"_";
}).replace(/=/g,""):s(String(r));
},l=function(r){
return C(r,!0);
},p=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),S=function(r){
switch(r.length){
case 4:
var t=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),n=t-65536;
return h((n>>>10)+55296)+h((1023&n)+56320);

case 3:
return h((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));

default:
return h((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1));
}
},b=function(r){
return r.replace(p,S);
},v=function(r){
var t=r.length,n=t%4,e=(t>0?a[r.charAt(0)]<<18:0)|(t>1?a[r.charAt(1)]<<12:0)|(t>2?a[r.charAt(2)]<<6:0)|(t>3?a[r.charAt(3)]:0),c=[h(e>>>16),h(e>>>8&255),h(255&e)];
return c.length-=[0,0,2,1][n],c.join("");
},F=function(r){
return r.replace(/[\s\S]{1,4}/g,v);
},j=e?function(r){
return(r.constructor===e.constructor?r:new e(r,"base64")).toString();
}:function(r){
return b(F(r));
},m=function(r){
return j(String(r).replace(/[-_]/g,function(r){
return"-"==r?"+":"/";
}).replace(/[^A-Za-z0-9\+\/]/g,""));
};
return{
VERSION:c,
atob:F,
btoa:g,
fromBase64:m,
toBase64:C,
utob:A,
encode:C,
encodeURI:l,
btou:b,
decode:m
};
});define("biz_wap/jsapi/log.js",["biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js"],function(i){
"use strict";
function o(i,o){
o=e+" "+o+" location:["+location.href+"]",n.isWechat&&n.isAndroid?r.invoke("log",{
level:i,
msg:o
}):n.isWechat&&(n.isIOS||n.isMac)&&r.invoke("writeLog",{
level:i,
msg:o
});
}
var r=i("biz_wap/jsapi/core.js"),n=i("biz_wap/utils/mmversion.js"),e="__wap__",a={
info:function(){
o("info",Array.prototype.join.apply(arguments));
},
warn:function(){
o("warn",Array.prototype.join.apply(arguments));
},
error:function(){
o("error",Array.prototype.join.apply(arguments));
},
debug:function(){
o("debug",Array.prototype.join.apply(arguments));
}
};
return a.log=a.info,a;
});define("biz_wap/utils/storage.js",[],function(){
"use strict";
function t(t){
if(!t)throw"require function name.";
this.key=t,this.init();
}
var e="__WXLS__",n=window.localStorage||{
getItem:function(){},
setItem:function(){},
removeItem:function(){},
key:function(){},
length:0
};
return t.getItem=function(t){
return t=e+t,n.getItem(t);
},t.setItem=function(i,r){
i=e+i;
for(var a=3;a--;)try{
n.setItem(i,r);
break;
}catch(o){
t.clear();
}
},t.clear=function(){
var t,i;
for(t=n.length-1;t>=0;t--)i=n.key(t),0==i.indexOf(e)&&n.removeItem(i);
},t.prototype={
constructor:t,
init:function(){
this.check();
},
getData:function(){
var e=t.getItem(this.key)||"{}";
try{
e=JSON.parse(e);
}catch(n){
e={};
}
return e;
},
check:function(){
var e,n,i=this.getData(),r={},a=+new Date;
for(e in i)n=i[e],+n.exp>a&&(r[e]=n);
t.setItem(this.key,JSON.stringify(r));
},
set:function(e,n,i){
var r=this.getData();
r[e]={
val:n,
exp:i||+new Date
},t.setItem(this.key,JSON.stringify(r));
},
get:function(t){
var e=this.getData();
return e=e[t],e?e.val||null:null;
},
remove:function(e){
var n=this.getData();
n[e]&&delete n[e],t.setItem(this.key,JSON.stringify(n));
}
},t;
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var s=arguments[t];
for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);
}
return e;
};
define("appmsg/without_iframe/iframe_communicate.js",[],function(){
"use strict";
function e(e){
var t=e.type;
/^mpvideo_/.test(t)||(t="mpvideo_"+t);
var s={
data:e.data,
type:t
};
window.postMessage(s,document.location.protocol+"//mp.weixin.qq.com");
}
function t(t){
var s=t.type;
/^broadcast_/.test(s)||(s="broadcast_"+s),e({
type:s,
data:t.data
});
}
function s(e){
var t=e.vid,s=e.type;
/^mpvideo_/.test(s)&&(s=s.replace(/^mpvideo_/,"")),t||console.error("error not found vid"),
r.postMessageEvt[t]||(r.postMessageEvt[t]={}),r.postMessageEvt[t][s]||(r.postMessageEvt[t][s]=[]),
r.postMessageEvt[t][s].push({
func:e.func
});
}
function a(e){
var t=e.vid,s=e.type,o=e.data;
t?r.postMessageEvt[t]&&r.postMessageEvt[t][s]&&r.postMessageEvt[t][s].forEach(function(e){
var t=e.func;
return t(o||{});
}):Object.keys(r.postMessageEvt).forEach(function(t){
a(_extends({},e,{
vid:t
}));
});
}
function o(e){
var t=e.vid,s=e.type;
if(t){
/^mpvideo_/.test(s)&&(s=s.replace(/^mpvideo_/,""));
var a=void 0;
a=r.postMessageEvt[t]&&r.postMessageEvt[t][s]?r.postMessageEvt[t][s]||[]:[];
for(var o=0;o<a.length;o++)a[o].func===e.func&&(a.splice(o,1),o--);
}
}
var r={
postMessageEvt:{}
};
return{
broadcastMessage:t,
postMessage:e,
addListener:s,
removeListener:o,
triggerListener:a
};
});