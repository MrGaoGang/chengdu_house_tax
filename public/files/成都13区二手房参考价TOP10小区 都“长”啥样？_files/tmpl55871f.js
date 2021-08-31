define("biz_common/dom/event.js",[],function(){
"use strict";
function t(){
return v&&(new Date).getTime()-v<200?!0:!1;
}
function e(){
return h.isPc||h.isWp?!1:!0;
}
function n(n,i,o,a){
e()?(i.tap_handler=function(e){
if(!(-1==h.tsTime||+new Date-h.tsTime>200||t())){
var n=e.changedTouches[0];
return Math.abs(h.y-n.clientY)<=5&&Math.abs(h.x-n.clientX)<=5?i.call(this,e):void 0;
}
},r(n,"touchend",a,i.tap_handler,o)):r(n,"click",a,i,o);
}
function i(t,e,n,i,o){
var a=this,c=0;
if(h.isPc||h.isWp){
var u,d,l,s=!1;
r(t,"mousedown",i,function(t){
l=!1,s=!0,u=t.clientX,d=t.clientY,c=setTimeout(function(){
l=!0,c=0,e.call(a,t);
},500),t.preventDefault();
}),r(t,"mousemove",i,function(t){
s&&c&&(Math.abs(d-t.clientY)>5||Math.abs(u-t.clientX)>5)&&(clearTimeout(c),c=0,"function"==typeof o&&o.call(a,t));
}),r(t,"mouseup",i,function(){
s=!1,clearTimeout(c);
}),r(t,"click",i,function(){
return l?!1:void 0;
});
}else r(t,"touchstart",i,function(t){
1===t.touches.length&&(c=setTimeout(function(){
c=0,e.call(a,t);
},500));
}),r(t,"touchmove",i,function(t){
if(c){
var e=t.changedTouches[0];
(Math.abs(h.y-e.clientY)>5||Math.abs(h.x-e.clientX)>5)&&(clearTimeout(c),c=0,"function"==typeof o&&o.call(a,t));
}
}),r(t,"touchend",i,function(t){
c?(clearTimeout(c),c=0):t.preventDefault();
},!0);
}
function o(t,e){
if(!t||!e||t.nodeType!=t.ELEMENT_NODE)return!1;
var n=t.webkitMatchesSelector||t.msMatchesSelector||t.matchesSelector;
return n?n.call(t,e):(e=e.substr(1),t.className.indexOf(e)>-1);
}
function a(t,e,n){
for(;t&&!o(t,e);)t=t!==n&&t.nodeType!==t.DOCUMENT_NODE&&t.parentNode;
return t;
}
function r(t,e,o,r,c,u){
var d,l,s;
return"input"==e&&h.isPc,t?("function"==typeof o&&(u=c,c=r,r=o,o=""),"string"!=typeof o&&(o=""),
t==window&&"load"==e&&/complete|loaded/.test(document.readyState)?r({
type:"load"
}):"tap"==e?n(t,r,c,o):"longtap"===e?i(t,r,c,o,u):("unload"==e&&"onpagehide"in window&&(e="pagehide"),
d=function(t){
var e=r(t);
return e===!1&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()),
e;
},o&&"."==o.charAt(0)&&(s=function(e){
var n=e.target||e.srcElement,i=a(n,o,t);
return i?(e.delegatedTarget=i,d(e)):void 0;
}),l=s||d,r[e+"_handler"]=l,t.addEventListener?void t.addEventListener(e,l,!!c):t.attachEvent?void t.attachEvent("on"+e,l,!!c):void 0)):void 0;
}
function c(t,n,i,o){
if(t){
var a,r=n;
return"tap"==r&&(e()?(r="touchend",a=i.tap_handler&&i.tap_handler.touchend_handler?i.tap_handler.touchend_handler:i):r="click"),
a||(a=i[r+"_handler"]||i),t.removeEventListener?void t.removeEventListener(r,a,!!o):t.detachEvent?void t.detachEvent("on"+r,a,!!o):void("tap"==r&&e()?(i.tap_handler&&(i.tap_handler.touchend_handler=null),
i.tap_handler=null):i[r+"_handler"]=null);
}
}
function u(){
if("hidden"in document)return"hidden";
for(var t=0;t<f.length;t++)if(f[t]+"Hidden"in document)return f[t]+"Hidden";
return null;
}
function d(){
if("visibilityState"in document)return"visibilityState";
for(var t=0;t<f.length;t++)if(f[t]+"VisibilityState"in document)return f[t]+"VisibilityState";
return null;
}
function l(t){
var e=u();
if(e){
var n=e.replace(/[H|h]idden/,"")+"visibilitychange";
document.addEventListener(n,function(){
var e="hidden"!==document[d()];
"function"==typeof t&&t(e);
},!1);
}
}
var s=navigator.userAgent,h={
isPc:/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),
isWp:/Windows\sPhone/i.test(s),
tsTime:-1
},f=["webkit","moz","ms","o"];
e()&&r(document,"touchstart",function(t){
if(1===t.touches.length){
var e=t.touches[0];
h.x=e.clientX,h.y=e.clientY,h.tsTime=+new Date;
}else h.tsTime=-1;
});
var v;
return window.addEventListener("scroll",function(){
v=(new Date).getTime();
},!0),{
on:r,
off:c,
tap:n,
longtap:i,
bindVisibilityChangeEvt:l
};
});define("appmsg/test.js",[],function(){
"use strict";
var t=[],e=function(){
"undefined"==typeof getComputedStyle&&document.body.currentStyle&&(window.getComputedStyle=function(t){
return t.currentStyle;
});
},n=function(){
for(var e="/mp/jsmonitor?idkey=",n=[],r=0,i=t.length;i>r;++r){
var o=t[r],d=o.idkey.toString()+"_"+o.order.toString()+"_"+o.num.toString();
n.push(d);
}
e+=n.join(";"),t.length>0&&((new Image).src=e);
},r=function(){
try{
e(),i(),n();
}catch(t){
console.log(t);
}
},i=function(){
var e=10,n=window.user_uin||0,r=0!==n&&Math.floor(n/100)%1e3<e;
if(r){
var i=document.getElementsByTagName("img"),o=i.length,d=document.getElementById("img-content"),u=d.offsetWidth,a=0,g=0,c=getComputedStyle(d);
a=parseInt(c.paddingLeft)+parseInt(c.paddingRight),u-=a,u||(u=window.innerWidth-30);
for(var f=0;o>f;++f){
var m=i[f].getAttribute("data-src");
if(m){
var s=1*i[f].getAttribute("data-w")||u,l=1*i[f].getAttribute("data-ratio");
l&&l>0&&s>u&&g++;
}
}
g>0&&t.push({
idkey:28307,
order:22,
num:g
});
}
};
return r;
});define("biz_wap/utils/mmversion.js",[],function(){
"use strict";
function n(){
for(var n=location.search.substring(1).split("&"),t={},i=0;i<n.length;i++){
var e=n[i].split("="),r=decodeURIComponent(e[0]);
"undefined"==typeof t[r]&&(t[r]=decodeURIComponent(e[1]));
}
return t;
}
function t(){
var n=/MicroMessenger\/([\d\.]+)/i,t=d.match(n);
return t&&t[1]?t[1]:!1;
}
function i(){
var n=/MacWechat\/([\d\.]+)/i,t=d.match(n);
return t&&t[1]?t[1]:!1;
}
function e(){
var n=/WindowsWechat\(0x(.+?)\)/i,t=d.match(n);
return t&&t[1]?t[1]:!1;
}
function r(){
var t,i=/MicroMessenger\/[\d\.]+\(0x(.+?)\)/i,e=d.match(i);
return e&&e[1]&&null!=e[1]?e[1]:!e&&/MicroMessenger\/[\d\.]+/i.test(d)&&(t=n(),t.version)?t.version:!1;
}
function s(n,e,r,s){
var o=!1;
switch(s){
case"mac":
o=i();
break;

default:
o=t();
}
if(o){
o=o.split("."),n=n.split("."),/\d+/g.test(o[o.length-1])||o.pop();
for(var a,c,u=I["cp"+e],d=0,p=Math.max(o.length,n.length);p>d;++d){
a=o[d]||0,c=n[d]||0,a=parseInt(a)||0,c=parseInt(c)||0;
var f=I.cp0(a,c);
if(!f)return u(a,c);
}
return r||0==e?!0:!1;
}
}
function o(n){
return s(n,0);
}
function a(n,t){
return s(n,1,t);
}
function c(n,t){
return s(n,-1,t);
}
function u(){
return p?"ios":g?"android":w?"mac_os":h?"windows":"unknown";
}
var d=navigator.userAgent,p=/(iPhone|iPad|iPod|iOS)/i.test(d),f=/Windows\sPhone/i.test(d),g=/(Android)/i.test(d),m=/MicroMessenger\/([\d\.]+)/i.test(d),w=/mac\sos/i.test(d),h=/windows\snt/i.test(d)&&!f,l=/MPAPP\/([\d\.]+)/i.test(d),v=/iPad/i.test(d),M=g&&/miniprogram/.test(d.toLowerCase())||"miniprogram"==window.__wxjs_environment,P=m&&/wxwork/i.test(d),I={
"cp-1":function(n,t){
return t>n;
},
cp0:function(n,t){
return n==t;
},
cp1:function(n,t){
return n>t;
}
};
return{
get:t,
getMac:i,
getWindows:e,
getInner:r,
cpVersion:s,
eqVersion:o,
gtVersion:a,
ltVersion:c,
getPlatform:u,
isWp:f,
isIOS:p,
isAndroid:g,
isInMiniProgram:M,
isWechat:m,
isMac:w,
isWindows:h,
is_wxwork:P,
isMpapp:l,
isIPad:v
};
});define("appmsg/max_age.js",["biz_wap/utils/ajax.js"],function(e){
"use strict";
function a(){
window.location.href.indexOf("clearStorage=1")>=0&&(localStorage.removeItem("max-age-storage-test"),
console.log("清除 localStorage"));
var e=1,a=window.user_uin||0,t=0!==a&&Math.floor(a/100)%1e3<e;
if(t&&(o({
type:"GET",
url:"/mp/reportcache?type=1&random="+Math.random()
}),(new Image).src="/mp/reportcache?type=2&uin="+uin,localStorage&&null==localStorage.getItem("max-age-storage-test"))){
console.log("localstorage为空");
try{
localStorage.setItem("max-age-storage-test",!0),console.log("localStorage设置成功");
}catch(r){}
o({
type:"GET",
url:"/mp/reportcache?type=3&random="+Math.random()
});
}
}
var o=e("biz_wap/utils/ajax.js");
return a;
});define("biz_common/dom/attr.js",[],function(){
"use strict";
function t(t,e,n){
return"undefined"==typeof n?t.getAttribute(e):t.setAttribute(e,n);
}
function e(t,e,n,r){
t.style.setProperty?(r=r||null,t.style.setProperty(e,n,r)):"undefined"!=typeof t.style.cssText&&(r=r?"!"+r:"",
t.style.cssText+=";"+e+":"+n+r+";");
}
return{
attr:t,
setProperty:e
};
});define("biz_wap/utils/ajax.js",["biz_common/utils/string/html.js","biz_common/utils/url/parse.js","biz_common/utils/respTypes.js","biz_wap/utils/ajax_wx.js"],function(require,exports,module,alert){
"use strict";
function reqType(e,t){
return e.url.indexOf(t)>-1&&-1===e.url.indexOf("action=")&&(!e.data||!e.data.action);
}
function logClientLog(e){
try{
var t;
/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?t="writeLog":/(Android)/i.test(navigator.userAgent)&&(t="log"),
t&&doLog(t,e);
}catch(r){
throw console.error(r),r;
}
}
function doLog(e,t){
var r,o,a={};
r=top!=window?top.window:window;
try{
o=r.WeixinJSBridge,a=r.document;
}catch(n){}
e&&o&&o.invoke?o.invoke(e,{
level:"info",
msg:"[WechatFe][ajax]"+t
}):setTimeout(function(){
a.addEventListener?a.addEventListener("WeixinJSBridgeReady",function(){
doLog(e,t);
},!1):a.attachEvent&&(a.attachEvent("WeixinJSBridgeReady",function(){
doLog(e,t);
}),a.attachEvent("onWeixinJSBridgeReady",function(){
doLog(e,t);
}));
},0);
}
function reportRt(e,t,r){
var o="";
if(r&&r.length){
var a=1e3,n=r.length,s=Math.ceil(n/a);
o=["&lc="+s];
for(var i=0;s>i;++i)o.push("&log"+i+"=[rtCheckError]["+i+"]"+encodeURIComponent(r.substr(i*a,a)));
o=o.join("");
}
var p,c="idkey="+e+"_"+t+"_1"+o+"&r="+Math.random();
if(window.ActiveXObject)try{
p=new ActiveXObject("Msxml2.XMLHTTP");
}catch(d){
try{
p=new ActiveXObject("Microsoft.XMLHTTP");
}catch(u){
p=!1;
}
}else window.XMLHttpRequest&&(p=new XMLHttpRequest);
p&&(p.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),p.setRequestHeader("cache-control","no-cache"),
p.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
p.setRequestHeader("X-Requested-With","XMLHttpRequest"),p.send(c));
}
function reportAjaxLength(e,t,r){
var o="";
if(r&&r.length){
var a=1e3,n=r.length,s=Math.ceil(n/a);
o=["&lc="+s];
for(var i=0;s>i;++i)o.push("&log"+i+"=[Ajax Length Limit]["+i+"]"+encodeURIComponent(r.substr(i*a,a)));
o=o.join("");
}
var p,c="idkey="+e+"_"+t+"_1"+o+"&r="+Math.random();
if(window.ActiveXObject)try{
p=new ActiveXObject("Msxml2.XMLHTTP");
}catch(d){
try{
p=new ActiveXObject("Microsoft.XMLHTTP");
}catch(u){
p=!1;
}
}else window.XMLHttpRequest&&(p=new XMLHttpRequest);
p&&(p.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),p.setRequestHeader("cache-control","no-cache"),
p.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
p.setRequestHeader("X-Requested-With","XMLHttpRequest"),p.send(c),(new Image).src="/mp/jsmonitor?idkey="+e+"_"+t+"_1"+o+"&r="+Math.random());
}
function Ajax(obj){
var type=(obj.type||"GET").toUpperCase(),url;
url=obj.notJoinUrl?obj.url:ajaxWx.joinUrl(obj.url),"html"==obj.f&&(url=url.replace("&f=json",""));
var mayAbort=!!obj.mayAbort,async="undefined"==typeof obj.async?!0:obj.async,xhr=new XMLHttpRequest,timer=null,data=null;
if("object"==typeof obj.data){
var d=obj.data;
data=[];
for(var k in d)d.hasOwnProperty(k)&&data.push(k+"="+encodeURIComponent(d[k]));
data=data.join("&");
}else data="string"==typeof obj.data?obj.data:null;
xhr.open(type,url,async);
var _onreadystatechange=xhr.onreadystatechange;
try{
url&&url.length>LENGTH_LIMIT&&reportAjaxLength(27613,17,"ajax get limit[length: "+url.length+"]"+url.substring(0,1024));
}catch(e){}
xhr.onreadystatechange=function(){
if("function"==typeof _onreadystatechange&&_onreadystatechange.apply(xhr),3==xhr.readyState&&obj.received&&obj.received(xhr),
4==xhr.readyState){
reqType(obj,"/mp/getappmsgext")&&(window.receiveGetAppmsgExt=xhr.status+"|"+Date.now(),
logClientLog("receive appmsgext response, status: "+xhr.status)),reqType(obj,"/mp/getappmsgad")&&(window.receiveGetAppmsgAd=xhr.status+"|"+Date.now(),
logClientLog("receive appmsgad response, status: "+xhr.status)),xhr.onreadystatechange=null;
var status=xhr.status;
if(status>=200&&400>status)try{
var responseText=xhr.responseText,resp=responseText;
if("json"==obj.dataType)try{
resp=eval("("+resp+")");
var rtId=obj.rtId,rtKey=obj.rtKey||0,rtDesc=obj.rtDesc,checkRet=!0;
if(rtId&&rtDesc&&RespTypes&&!RespTypes.check(resp,rtDesc)&&reportRt(rtId,rtKey,RespTypes.getMsg()+"[detail]"+responseText+";"+obj.url),
resp&&resp.base_resp&&1*resp.base_resp.ret!==0&&"undefined"!=typeof window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&Math.random()<.001){
var reportUrl=url;
-1!==url.indexOf("?")&&(reportUrl=url.substr(0,url.indexOf("?")),Url.getQuery("action",url)&&(reportUrl=reportUrl+"?action="+Url.getQuery("action",url))),
("/mp/getappmsgext"!==reportUrl&&"/mp/getappmsgad"!==reportUrl||"undefined"!=typeof resp.base_resp.ret)&&window.WX_BJ_REPORT.BadJs.report(reportUrl,"ret="+resp.base_resp.ret,{
mid:window.PAGE_MID,
view:"wap_retcode"
});
}
}catch(e){
return void(obj.error&&obj.error(xhr,{
type:1,
error:e
}));
}
obj.success&&obj.success(resp);
}catch(e){
throw __moon_report({
offset:MOON_AJAX_SUCCESS_OFFSET,
e:e
}),e;
}else{
try{
obj.error&&obj.error(xhr,{
type:2,
error:"status error",
status:status
});
}catch(e){
throw __moon_report({
offset:MOON_AJAX_ERROR_OFFSET,
e:e
}),e;
}
if(status||!mayAbort){
var __ajaxtest=window.__ajaxtest||"0";
__moon_report({
offset:MOON_AJAX_NETWORK_OFFSET,
log:"ajax_network_error["+status+"]["+__ajaxtest+"]: "+url+";host:"+location.host,
e:""
});
}
}
clearTimeout(timer);
try{
obj.complete&&obj.complete();
}catch(e){
throw __moon_report({
offset:MOON_AJAX_COMPLETE_OFFSET,
e:e
}),e;
}
obj.complete=null;
}
},"POST"==type&&xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
obj.noXRequestedWidthHeader||xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),
"undefined"!=typeof obj.timeout&&(timer=setTimeout(function(){
xhr.abort("timeout");
try{
obj.complete&&obj.complete();
}catch(e){
throw __moon_report({
offset:MOON_AJAX_COMPLETE_OFFSET,
e:e
}),e;
}
obj.complete=null,__moon_report({
offset:MOON_AJAX_TIMEOUT_OFFSET,
log:"ajax_timeout_error: "+url,
e:""
});
},obj.timeout));
try{
xhr.send(data);
try{
data&&data.length>LENGTH_LIMIT&&reportAjaxLength(27613,18,"ajax post limit[length: "+data.length+"]"+data.substring(0,1024));
}catch(e){}
}catch(e){
obj.error&&obj.error(xhr,{
type:3,
error:e
});
}
return reqType(obj,"/mp/getappmsgext")&&(window.startGetAppmsgExtTime=Date.now(),
logClientLog("start get appmsgext, url: ",obj.url)),reqType(obj,"/mp/getappmsgad")&&(window.startGetAppmsgAdTime=Date.now(),
logClientLog("start get appmsgad, url: ",obj.url)),xhr;
}
require("biz_common/utils/string/html.js");
var Url=require("biz_common/utils/url/parse.js"),RespTypes=require("biz_common/utils/respTypes.js"),ajaxWx=require("biz_wap/utils/ajax_wx.js"),isx5=-1!=navigator.userAgent.indexOf("TBS/"),__moon_report=window.__moon_report||function(){},MOON_AJAX_SUCCESS_OFFSET=3,MOON_AJAX_NETWORK_OFFSET=4,MOON_AJAX_ERROR_OFFSET=5,MOON_AJAX_TIMEOUT_OFFSET=6,MOON_AJAX_COMPLETE_OFFSET=7,MOON_AJAX_GET_LIMIT_4K=17,MOON_AJAX_POST_LIMIT_4K=18,LENGTH_LIMIT=4096,doc={},isAcrossOrigin=!1;
try{
doc=top.window.document;
}catch(e){
isAcrossOrigin=!0;
}
return function(){
return window.__second_open__||!isAcrossOrigin&&top.window.__second_open__?ajaxWx.ajax.apply(ajaxWx,arguments):Ajax.apply(void 0,arguments);
};
});define("appmsg/log.js",["biz_wap/utils/log.js","biz_wap/utils/mmversion.js"],function(i){
"use strict";
var s=i("biz_wap/utils/log.js"),t=i("biz_wap/utils/mmversion.js");
return function(i,n){
t.is_wxwork||s(i,n);
};
});define("biz_common/dom/class.js",[],function(){
"use strict";
function s(s,a){
return s.classList?s.classList.contains(a):s.className.match(new RegExp("(\\s|^)"+a+"(\\s|$)"));
}
function a(s,a){
s.classList?s.classList.add(a):this.hasClass(s,a)||(s.className+=" "+a);
}
function e(a,e){
if(a.classList)a.classList.remove(e);else if(s(a,e)){
var c=new RegExp("(\\s|^)"+e+"(\\s|$)");
a.className=a.className.replace(c," ");
}
}
function c(c,l){
s(c,l)?e(c,l):a(c,l);
}
return{
hasClass:s,
addClass:a,
removeClass:e,
toggleClass:c
};
});define("biz_wap/utils/device.js",[],function(){
"use strict";
function s(s){
{
var e=s.match(/MQQBrowser\/(\d+\.\d+)/i),r=s.match(/QQ\/(\d+\.(\d+)\.(\d+)\.(\d+))/i)||s.match(/V1_AND_SQ_([\d\.]+)/),i=s.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)||s.match(/MicroMessenger\/((\d+)\.(\d+))/),t=s.match(/Mac\sOS\sX\s(\d+[\.|_]\d+)/),n=s.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/),a=s.match(/Linux\s/),d=s.match(/MiuiBrowser\/(\d+\.\d+)/i),h=s.match(/MI-ONE/),c=s.match(/MI PAD/),w=s.match(/UCBrowser\/(\d+\.\d+(\.\d+\.\d+)?)/)||s.match(/\sUC\s/),u=s.match(/IEMobile(\/|\s+)(\d+\.\d+)/)||s.match(/WPDesktop/),b=s.match(/(ipod).*\s([\d_]+)/i),p=s.match(/(ipad).*\s([\d_]+)/i),v=s.match(/(iphone)\sos\s([\d_]+)/i),m=s.match(/Chrome\/(\d+\.\d+)/),f=s.match(/Mozilla.*Linux.*Android.*AppleWebKit.*Mobile Safari/),l=s.match(/(android)\s([\d\.]+)/i);
s.indexOf("HTC")>-1;
}
if(o.browser=o.browser||{},o.os=o.os||{},window.ActiveXObject){
var M=6;
(window.XMLHttpRequest||s.indexOf("MSIE 7.0")>-1)&&(M=7),(window.XDomainRequest||s.indexOf("Trident/4.0")>-1)&&(M=8),
s.indexOf("Trident/5.0")>-1&&(M=9),s.indexOf("Trident/6.0")>-1&&(M=10),o.browser.ie=!0,
o.browser.version=M;
}else s.indexOf("Trident/7.0")>-1&&(o.browser.ie=!0,o.browser.version=11);
l&&(this.os.android=!0,this.os.version=l[2]),b&&(this.os.ios=this.os.ipod=!0,this.os.version=b[2].replace(/_/g,".")),
p&&(this.os.ios=this.os.ipad=!0,this.os.version=p[2].replace(/_/g,".")),v&&(this.os.iphone=this.os.ios=!0,
this.os.version=v[2].replace(/_/g,".")),n&&(this.os.windows=!0,this.os.version=n[2]),
t&&(this.os.Mac=!0,this.os.version=t[1]),a&&(this.os.Linux=!0),s.indexOf("lepad_hls")>0&&(this.os.LePad=!0),
c&&(this.os.MIPAD=!0),e&&(this.browser.MQQ=!0,this.browser.version=e[1]),r&&(this.browser.MQQClient=!0,
this.browser.version=r[1]),i&&(this.browser.WeChat=!0,this.browser.mmversion=this.browser.version=i[1]),
d&&(this.browser.MIUI=!0,this.browser.version=d[1]),w&&(this.browser.UC=!0,this.browser.version=w[1]||0/0),
u&&(this.browser.IEMobile=!0,this.browser.version=u[2]),f&&(this.browser.AndriodBrowser=!0),
h&&(this.browser.M1=!0),m&&(this.browser.Chrome=!0,this.browser.version=m[1]),this.os.windows&&(this.os.win64="undefined"!=typeof navigator.platform&&"win64"==navigator.platform.toLowerCase()?!0:!1),
(this.os.Mac||this.os.windows||this.os.Linux)&&(this.os.pc=!0);
var g={
iPad7:"iPad; CPU OS 7",
LePad:"lepad_hls",
XiaoMi:"MI-ONE",
SonyDTV:"SonyDTV",
SamSung:"SAMSUNG",
HTC:"HTC",
VIVO:"vivo"
};
for(var O in g)this.os[O]=-1!==s.indexOf(g[O]);
o.os.phone=o.os.phone||/windows phone/i.test(s),this.os.getNumVersion=function(){
return parseFloat(o.os.version,"10");
},this.os.hasTouch="ontouchstart"in window,this.os.hasTouch&&this.os.ios&&this.os.getNumVersion()<6&&(this.os.hasTouch=!1),
o.browser.WeChat&&o.browser.version<5&&(this.os.hasTouch=!1),o.browser.getNumVersion=function(){
return parseFloat(o.browser.version,"10");
},o.browser.isFFCanOcx=function(){
return o.browser.firefox&&o.browser.getNumVersion()>=3?!0:!1;
},o.browser.isCanOcx=function(){
return!(!o.os.windows||!o.browser.ie&&!o.browser.isFFCanOcx()&&!o.browser.webkit);
},o.browser.isNotIESupport=function(){
return!!o.os.windows&&(!!o.browser.webkit||o.browser.isFFCanOcx());
},o.userAgent={},o.userAgent.browserVersion=o.browser.version,o.userAgent.osVersion=o.os.version,
delete o.userAgent.version;
}
var o={};
s.call(o,window.navigator.userAgent);
var e=function(){
var s=window.navigator.userAgent,e=null;
if(o.os.android){
if(o.browser.MQQ&&o.browser.getNumVersion()>=4.2)return!0;
if(-1!=s.indexOf("MI2"))return!0;
if(o.os.version>="4"&&(e=s.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/))&&e[1]>=4.2)return!0;
if(o.os.version>="4.1")return!0;
}
return!1;
}(),r=function(){
var s=document.createElement("video");
if("function"==typeof s.canPlayType){
if("probably"==s.canPlayType('video/mp4; codecs="mp4v.20.8"'))return!0;
if("probably"==s.canPlayType('video/mp4; codecs="avc1.42E01E"')||"probably"==s.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))return!0;
}
return!1;
}(),i=function(){
return console.info("[canSupportAutoPlay]",o.os.ios,o.os.getNumVersion()),o.os.ios&&o.os.getNumVersion()<10?!1:!0;
}();
return o.canSupportVideo=r||e,o.canSupportVideoMp4=r,o.canSupportH5Video=e,o.canSupportAutoPlay=i,
o;
});define("appmsg/weapp_common.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/jsmonitor_report.js"],function(e,p,a,n){
"use strict";
function o(e){
return e.indexOf(v)>-1?e:""+e+v;
}
function t(){
var e=navigator.userAgent.match(/MicroMessenger\/(\d+)\.(\d+)\.(\d+)/);
if(e){
var p=Number(e[1]),a=Number(e[2]),n=Number(e[3]);
p>6?h.canJumpOnTap=!0:6===p&&a>5?h.canJumpOnTap=!0:6===p&&5===a&&n>=3&&(h.canJumpOnTap=!0);
}else navigator.userAgent.match(/MicroMessenger\//)||(h.isNonWechat=!0);
r();
}
function r(){
try{
h.appidSnInfo=JSON.parse(window.weapp_sn_arr_json).weapp_card_list;
}catch(e){
h.appidSnInfo=[];
}
if(!h.appidSnInfo||0==h.appidSnInfo.length)return h.getInfoState=1,void i();
for(var p={
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
uin:window.uin||"",
key:window.key||"",
pass_ticket:window.pass_ticket||"",
weapp_num:h.appidSnInfo.length
},a={},n={},o=0;o<p.weapp_num;o++){
var t=h.appidSnInfo[o].appid,r=h.appidSnInfo[o].sn;
a[t]?a[t].push(o):(a[t]=[o],p["weapp_appid_"+o]=h.appidSnInfo[o].appid,h.appidSnDict[t]=r),
n[r]?n[r].push(o):(n[r]=[o],p["weapp_sn_"+o]=h.appidSnInfo[o].sn);
}
var c="/mp/appmsg_weapp?action=batch_get_weapp";
for(var s in p)c+="&"+s+"="+encodeURIComponent(p[s]);
g({
url:c,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
try{
if(console.log("weapp_common success:",e),h.appidInfoResp=e,e.base_resp.ret)throw new Error("Fetch weapp info but get ret="+e.base_resp.ret);
h.data={
infoMap:{},
appid:e.appid||"",
appmsg_compact_url:e.appmsg_compact_url||"",
pathArgs:"appid="+encodeURIComponent(e.appid)+(e.appmsg_compact_url?"&appmsg_compact_url="+encodeURIComponent(e.appmsg_compact_url):"")
};
for(var p=e.weapp_info,a=0;a<p.length;a++){
var n=p[a].weapp_appid;
h.data.infoMap[n]=p[a];
}
h.getInfoState=4;
}catch(o){
h.getInfoState=3,h.appidInfoCatchErr=o;
}
i();
},
error:function(){
h.getInfoState=2,i();
}
});
}
function i(){
if(1==h.getInfoState||2==h.getInfoState)for(var e=0,p=h.appInfoErrQueue.length;p>e;e++){
var a=h.appInfoErrQueue[e];
"function"==typeof a&&a({
code:h.getInfoState
});
}else if(3==h.getInfoState)for(var e=0,p=h.appInfoErrQueue.length;p>e;e++){
var a=h.appInfoErrQueue[e];
"function"==typeof a&&a({
code:h.getInfoState,
resp:h.appidInfoResp,
catchErr:h.appidInfoCatchErr
});
}else if(4==h.getInfoState)for(var e=0,p=h.appInfoSucQueue.length;p>e;e++){
var a=h.appInfoSucQueue[e];
"function"==typeof a&&a({
resp:h.appidInfoResp,
data:h.data
});
}
h.appInfoErrQueue=[],h.appInfoSucQueue=[];
}
function c(e){
console.log("getAppidInfo",h),1!=h.getInfoState&&2!=h.getInfoState||"function"!=typeof e.onError?3==h.getInfoState&&"function"==typeof e.onError?e.onError({
code:h.getInfoState,
resp:h.appidInfoResp,
catchErr:h.appidInfoCatchErr
}):4==h.getInfoState&&"function"==typeof e.onSuccess?e.onSuccess({
resp:h.appidInfoResp,
data:h.data
}):("function"==typeof e.onSuccess&&h.appInfoSucQueue.push(e.onSuccess),"function"==typeof e.onError&&h.appInfoErrQueue.push(e.onError)):e.onError({
code:h.getInfoState
});
}
function s(e,p){
var a={
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
weapp_appid:e.appid||"",
weapp_sn:h.appidSnDict[e.appid]||"",
path:e.path||""
},n="/mp/appmsg_weapp?action=get_wxa_code";
for(var o in a)n+="&"+o+"="+encodeURIComponent(a[o]);
g({
url:n,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
e.base_resp&&0===e.base_resp.ret?p&&p(e.url):p&&p();
},
error:function(){
p&&p();
}
});
}
function u(e){
if(!e)return"";
var p="",a=e.indexOf("?"),n=h.data&&h.data.pathArgs?h.data.pathArgs:"";
return p=a>=0?e.slice(0,a)+(a>0?".html":"")+e.slice(a)+"&"+n:e+(""!==e?".html?":"?")+n,
p.replace(/&amp;/g,"&");
}
function f(e){
var p="",a=e.indexOf("?");
return p=e.slice(0,a)+(a>0?".html":"")+e.slice(a);
}
function d(e){
e=e||{};
var p;
if(e.options)p=e.options,p.relativeURL&&(p.relativeURL=p.relativeURL.replace(/&amp;/g,"&"),
p.relativeURL.indexOf(".html")<0&&(p.relativeURL=u(p.relativeURL)));else if(e.appid&&(h.data||e.cps_weapp_username)){
var a;
e.cps_weapp_username?(a={},a.weapp_username=e.cps_weapp_username,a.app_version=e.cps_weapp_version):a=h.data.infoMap[e.appid],
a&&(p={
userName:a.weapp_username,
scene:e.scene,
sceneNote:e.sceneNote,
relativeURL:u(e.path)
},void 0!==a.app_version&&(p.appVersion=a.app_version),e.cps_weapp_username&&(p.relativeURL=f(e.path)));
}
p&&(e.privateExtraData&&(p.privateExtraData=e.privateExtraData),e.sourceAppId&&(p.sourceAppId=e.sourceAppId),
p.scene=p.scene||1058,p.appVersion=p.appVersion||1,p.userName=o(p.userName),console.log("weapp257",p),
h.canJumpOnTap?I.invoke("openWeApp",p,function(p){
"system:function_not_exist"===p.err_msg?h.isNonWechat?("function"!=typeof e.beforeNonWechatWarn||e.beforeNonWechatWarn()!==!1)&&_():("function"!=typeof e.beforeJumpBackupPage||e.beforeJumpBackupPage()!==!1)&&m(e.appid):"function"==typeof e.onJsapiCallback&&e.onJsapiCallback(p);
}):h.isNonWechat?("function"!=typeof e.beforeNonWechatWarn||e.beforeNonWechatWarn()!==!1)&&_():("function"!=typeof e.beforeJumpBackupPage||e.beforeJumpBackupPage()!==!1)&&m(e.appid));
}
function m(e){
location.href="https://mp.weixin.qq.com/mp/waerrpage?type=upgrade&appid="+encodeURIComponent(e)+"#wechat_redirect";
}
function _(){
setTimeout(function(){
n("请在微信内打开小程序");
},0);
}
function l(e){
var p={
userNames:[o(e)]
};
I.invoke("preloadMiniProgramContacts",p),I.invoke("preloadMiniProgramEnv",p),w.setSum(114217,2,1);
}
var g=e("biz_wap/utils/ajax.js"),I=e("biz_wap/jsapi/core.js"),w=e("biz_wap/utils/jsmonitor_report.js"),h={
canJumpOnTap:!1,
isNonWechat:!1,
data:null,
appidInfoResp:null,
appidInfoCatchErr:null,
appInfoSucQueue:[],
appInfoErrQueue:[],
appidSnInfo:[],
appidSnDict:{},
getInfoState:0
},v="@app";
return t(),{
canJumpOnTap:h.canJumpOnTap,
isNonWechat:h.isNonWechat,
getAppidInfo:c,
getAppidCode:s,
appidSnInfo:h.appidSnInfo,
getRelativeURL:u,
jumpUrl:d,
preloadMiniProgram:l
};
});function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function e(e,t){
for(var a=0;a<t.length;a++){
var i=t[a];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);
}
}
return function(t,a,i){
return a&&e(t.prototype,a),i&&e(t,i),t;
};
}();
define("appmsg/review_image.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/utils/url/parse.js","appmsg/log.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","appmsg/cdn_img_lib.js"],function(e){
"use strict";
var t=e("biz_common/dom/event.js"),a=e("biz_wap/jsapi/core.js"),i=e("biz_common/utils/url/parse.js"),o=e("appmsg/log.js"),r=e("biz_wap/utils/ajax.js"),n=e("biz_wap/utils/mmversion.js"),d=n.isIOS&&1==window._copyright_stat&&1==window.is_need_reward,s=!1;
e("appmsg/cdn_img_lib.js");
var p=function(e,t){
r({
url:"/mp/rewardappmsgreport",
data:{
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
oper:t||"",
cdn_url:e||"",
ascene:window.ascene||-1
},
type:"POST",
dataType:"json",
async:!0
});
},l=function(){
function e(t){
_classCallCheck(this,e),this.is_https_res=t.is_https_res,this.imgsSrc=[],this.detaTime=0,
((t.imgs||[]).length||t.container)&&this.add(t);
}
return _createClass(e,[{
key:"add",
value:function(e){
var a=this,i=e.imgs||[];
!!e.container&&Array.prototype.forEach.call(e.container.getElementsByTagName("img")||[],function(e){
return i.push(e);
}),i.forEach(function(e){
var t=a.getSrc(e);
null!==t&&(a.imgsSrc.push(t),a.bindEvent(e,t));
}),d&&!function(){
var e=document.getElementById("js_content"),i=0,o=0;
t.on(e,"touchstart",function(e){
return e&&e.target&&e.target.tagName&&"string"==typeof e.target.tagName&&"IMG"===e.target.tagName.toString().toUpperCase()?(a.detaTime=+new Date,
i=e.touches[0].pageX,void(o=e.touches[0].pageY)):void(a.detaTime=0);
}),t.on(e,"touchmove",function(e){
var t=e.touches[0].pageX,r=e.touches[0].pageY;
Math.abs(t-i)>10&&Math.abs(r-o)>10&&(a.detaTime=0);
}),t.on(e,"touchend",function(e){
0!=a.detaTime&&(+new Date-a.detaTime>800&&+new Date-a.detaTime<6e3?p(e.target.src,1):a.detaTime=0);
});
}();
}
},{
key:"reviewImage",
value:function(e,t,i){
var r={
current:e,
urls:this.imgsSrc,
currentInfo:{
url:e,
data:t,
pos:i
},
forbidForward:window.isPaySubscribe?1:0
};
console.log("imagePreview request",r),console.log("previewFlag",s),s||(s=!0,console.log(r),
a.invoke("imagePreview",r,function(e){
console.log("imagePreview response",e),!!window.__addIdKeyReport&&window.__addIdKeyReport("28307","2");
}),setTimeout(function(){
s=!1;
},500),o("[Appmsg] click image, src: "+e));
}
},{
key:"getSrc",
value:function(e){
if("1"!==e.getAttribute("data-disable-preview")){
var t=e.getAttribute("data-src")||e.getAttribute("src");
if(t&&0!==t.indexOf("data:")){
for(;-1!==t.indexOf("?tp=webp");)t=t.replace("?tp=webp","");
e.dataset&&e.dataset.s&&t.isCDN()&&(t=t.replace(/\/640$/,"/0"),t=t.replace(/\/640\?/,"/0?")),
t.isCDN()&&(t=i.addParam(t,"wxfrom","3",!0)),t=this.is_https_res?t.http2https():t.https2http();
var a=e.getAttribute("data-type");
return a&&(t=i.addParam(t,"wxtype",a,!0)),t;
}
}
return null;
}
},{
key:"bindEvent",
value:function(e,a){
var i=this;
void 0===a&&(a=this.getSrc(e)),"1"!=e.getAttribute("data-nopreviewclick")&&!function(a){
n.isAndroid&&e.setAttribute("data-wxsrc",a),t.on(e,"click",function(e){
if(e.stopPropagation(),!(e&&e.target&&e.target.className&&e.target.className.indexOf("img_loadederror")>-1)){
if("function"==typeof window.__addIdKeyReport&&window.__addIdKeyReport("110644",2),
window.getComputedStyle){
for(var t=e.target,o=t.getBoundingClientRect(),r=.15*o.width,s=.15*o.height,l=!0;t&&"body"!=t.nodeName.toLowerCase();){
var c=window.getComputedStyle(t,null),g=parseInt(c.getPropertyValue("opacity")),u=c.getPropertyValue("filter"),m=c.getPropertyValue("visibility"),w=c.mixBlendMode;
if(1!=g||"visible"!==m||u.indexOf("opacity")>=0||u.indexOf("blur")>=0||w&&"normal"!==w){
l=!1;
break;
}
var h=t.getBoundingClientRect();
if(("hidden"==c.overflow||"hidden"==c.overflowX||"hidden"==c.overflowY)&&(h.left-o.left>r||h.right-o.right<-1*r||h.top-o.top>s||h.bottom-o.bottom<-1*s)){
l=!1;
break;
}
t=t.parentElement;
}
if(!l){
if(console.log("don't try this again"),"function"==typeof window.__addIdKeyReport){
window.__addIdKeyReport("110644",3);
var f=new Image,b="https://badjs.weixinbridge.com/badjs?id=168&level=4&from="+encodeURIComponent(location.href)+"&msg="+encodeURIComponent(a);
f.src=b.slice(0,1024);
}
return!1;
}
}
"undefined"==typeof getComputedStyle&&(window.getComputedStyle=document.body.currentStyle?function(e){
return e.currentStyle;
}:{});
var v=e.target,y=window.getComputedStyle(v),_=v.getBoundingClientRect(),j=document.createElement("canvas");
j.style.width=y.width,j.style.height=y.height,j.width=parseFloat(y.width),j.height=parseFloat(y.height);
var C=j.getContext("2d"),F="";
C.drawImage(v,0,0,parseFloat(y.width),parseFloat(y.height));
try{
F=j.toDataURL();
}catch(e){}
n.isAndroid&&(F=""),i.reviewImage(a,F,{
x:_.left-parseFloat(y.paddingLeft)-parseFloat(y.borderLeftWidth),
y:_.top-parseFloat(y.paddingTop)-parseFloat(y.borderTopWidth),
width:_.width-parseFloat(y.paddingLeft)-parseFloat(y.paddingRight)-parseFloat(y.borderLeftWidth)-parseFloat(y.borderRightWidth),
height:_.height-parseFloat(y.paddingTop)-parseFloat(y.paddingBottom)-parseFloat(y.borderTopWidth)-parseFloat(y.borderBottomWidth)
}),d&&0==i.detaTime&&p(e.target.src,2);
}
});
}(a),e.removeAttribute("data-nopreviewclick");
}
}]),e;
}();
return l;
});define("biz_common/utils/string/html.js",[],function(){
"use strict";
return String.prototype.html=function(t){
var e,n=["&#96;","`","&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&yen;","¥","&amp;","&","&#60;","<","&#62;",">"],r=["&","&amp;","¥","&yen;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;","`","&#96;"];
e=t?r:n;
for(var o=0,i=this;o<e.length;o+=2)i=i.replace(new RegExp(e[o],"g"),e[o+1]);
return i;
},String.prototype.htmlEncode=function(){
return this.html(!0);
},String.prototype.htmlDecode=function(){
return this.html(!1);
},String.prototype.getPureText=function(){
return this.replace(/<\/?[^>]*\/?>/g,"");
},String.prototype.htmlLite=function(t){
var e=["&#96;","`","&#39;","'","&quot;",'"',"&gt;",">","&lt;","<","&amp;","&"];
t&&e.reverse();
for(var n=0,r=this;n<e.length;n+=2)r=r.replace(new RegExp(e[n],"g"),e[n+1]);
return r;
},String.prototype.htmlEncodeLite=function(){
return this.htmlLite(!0);
},String.prototype.htmlDecodeLite=function(){
return this.htmlLite(!1);
},{
htmlDecode:function(t){
return t.htmlDecode();
},
htmlEncode:function(t){
return t.htmlEncode();
},
getPureText:function(t){
return t.getPureText();
},
htmlEncodeLite:function(t){
return t.htmlEncodeLite();
},
htmlDecodeLite:function(t){
return t.htmlDecodeLite();
}
};
});define("cps/tpl/list_tpl.html.js",[],function(){
return'<# if(cps_isready == true){ #> <!--cps 数据ready-->\n    <# if(cps_state == \'no_cps\'){ #>\n        <!--违规-->\n        <section class="cps_inner cps_inner_list cps_inner_empty js_product_err_container">\n            <p>此内容因违规，暂无法查看</p>\n        </section>\n    <# } else { #>\n        <!--正常-->\n        <section class="js_list_container js_product_container<# if(pid_type == \'book\' || pid_type != \'movie\'){ #> cps_inner_book<# } #>">\n            <div role="button" class="appmsg_card_context minishop_card cps_card minishop_card_small js_product_loop_content">\n                <div class="minishop_card_hd">\n                  <span aria-label="商品，" class="minishop_card_thumb js_cover" style="background-image: url(<#=img_url#>)"></span>\n                  <# if(is_ad == 1){ #>\n                  <span class="cps_card_tag js_cps_adTag">广告</span>\n                  <# } #>\n                </div>\n                <div class="minishop_card_bd weui-flex__item">\n                    <div class="minishop_main_context <# if(typeof price === \'undefined\' || pid_type === \'book\' || pid_type === \'movie\'){ #>has_desc<# } #>">\n                        <h2 class="minishop_card_title"><#=title#></h2>\n                        <# if(typeof price === \'undefined\' || pid_type === \'book\' || pid_type === \'movie\'){ #>\n                        <p><#=desc#></p>\n                        <# } #>\n                        <div class="minishop_card_profile weui-flex">\n                            <span class="minishop_card_profile_avatar" style="background-image: url(<#=source_logo_url#>);"></span>\n                            <strong class="minishop_card_profile_nickname"><#=source_name#></strong>\n                        </div>\n                    </div>\n    \n                    <div class="minishop_extra_context weui-flex">\n                      <# if(typeof price !== \'undefined\' && pid_type !== \'book\' && pid_type !== \'movie\'){ #>\n                      <em class="minishop_card_price"><#=price#></em>\n                      <# } #>\n                      <button class="weui-btn weui-btn_mini weui-btn_orange" type="button"><# if(is_ad == 1){ #>购买<# }else{ #>详情<# } #></button>\n                    </div>\n                </div>\n            </div>\n        </section>\n    <# } #>\n<# }else{ #>\n    <section class="cps_inner cps_inner_list cps_inner_placeholder">\n        <div class="cps_inner_wrp" data-templateid="" data-pid="{{pid1}}" data-order="" data-packid="" data-wxaappid="{{wxa_appid1}}" data-wxapath="{{url_path1}}">\n            <!-- 数据加载成功模板 -->\n            <div class="cps_inner_content" role="button">\n                <figure class="cps_inner_image_container">\n                    <span width="100%" class="cps_inner_image"></span>\n                </figure>\n                <div class="cps_inner_info">\n                    <div class="cps_inner_info_hd">\n                        <h2 class="cps_inner_info_title"></h2>\n                    </div>\n                    <div class="cps_inner_info_ft"></div>\n                </div>\n            </div>\n        </div>\n    </section>\n<# } #>\n    \n\n\n';
});define("cps/tpl/card_tpl.html.js",[],function(){
return'<!--卡片类型-->\n<# if(cps_isready == true){ #> <!--cps 数据ready-->\n    <# if(cps_state == \'no_cps\'){ #>\n        <!--违规-->\n        <section class="cps_inner cps_inner_card cps_inner_empty js_product_err_container js_banner_container">\n            <p>此内容因违规，暂无法查看</p>\n        </section>\n    \n    <# } else {#>\n        <!--正常-->\n        <section class="js_product_container js_banner_container">\n            <div class="js_product_loop_content">\n                <div role="button" class="appmsg_card_context minishop_card minishop_card_large cps_card">\n                    <div class="minishop_card_hd">\n                        <span width="100%" aria-label="商品，"  class="js_cover minishop_card_thumb" style="background-image: url(<#=img_url#>);"></span>\n                        <# if(is_ad == 1){ #>\n                        <span class="cps_card_tag js_cps_adTag">广告</span>\n                        <# } #>\n                    </div>\n                    <div class="minishop_card_bd weui-flex__item">\n                        <div class="minishop_main_context">\n                            <h2 class="minishop_card_title <# if(typeof price !== \'undefined\' && pid_type !== \'book\' && pid_type !== \'movie\'){ #>line2<# } #>"><#=title#></h2> <!--通用模版带金额，title 可以显示2行-->\n                            <div class="minishop_card_profile weui-flex">\n                                <span class="minishop_card_profile_avatar" style="background-image: url(<#=source_logo_url#>);"></span>\n                                <strong class="minishop_card_profile_nickname"><#=source_name#></strong>\n                            </div>\n                        </div>\n                        <div class="minishop_extra_context weui-flex">\n                            <# if(typeof price !== \'undefined\' && pid_type !== \'book\' && pid_type !== \'movie\'){ #>\n                            <em class="minishop_card_price"><#=price#></em>\n                            <# } #>\n                            <button type="button" class="weui-btn weui-btn_mini weui-btn_orange"><# if(is_ad == 1){ #>购买<# } else { #>详情<# } #></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    \n    <# } #>\n<# }else{ #>\n    <section class="cps_inner cps_inner_card cps_inner_placeholder">\n        <div class="cps_inner_wrp">\n            <!-- 数据加载成功模板 -->\n            <div class="cps_inner_content" role="button">\n                <figure class="cps_inner_image_container">\n                    <span class="cps_inner_image"></span>\n                </figure>\n                <div class="cps_inner_info">\n                    <div class="cps_inner_info_hd">\n                        <h2 class="cps_inner_info_title"></h2>\n                    </div>\n                    <div class="cps_inner_info_ft"></div>\n                </div>\n            </div>\n        </div>\n    </section>\n<# } #>\n';
});define("cps/tpl/banner_tpl.html.js",[],function(){
return'<# if(cps_isready == true){ #> <!--cps 数据ready-->\n    <# if(cps_state == \'no_cps\'){ #>\n        <!--违规-->\n        <section class="cps_inner cps_inner_banner cps_inner_empty js_product_err_container js_banner_container">\n            <p>此内容因违规，暂无法查看</p>\n        </section>\n    \n    <# } else {#>\n        <!--正常-->\n        <section class="cps_inner cps_inner_banner js_product_container js_banner_container">\n            <div class="cps_inner_wrp js_product_loop_content">\n                <div class="cps_inner_content" role="button">\n                    <figure class="cps_inner_image_container">\n                        <span width="100%" class="js_cover cps_inner_image" style="background: url(<#=img_url#>) no-repeat center; background-size: cover;"></span>\n                    </figure>\n                    <# if(is_ad == 1){ #>\n                    <span class="cps_inner_info_adTag js_cps_adTag">广告</span>\n                    <# } #>\n                    <div class="cps_inner_info_container">\n                        <h2 class="cps_inner_info_title"><#=title#></h2>\n                        <div class="cps_inner_info">\n                            <div class="cps_inner_info_hd">\n                                <p class="cps_inner_info_desc c"><#=desc#></p>\n                                <div class="cps_inner_info_from">\n                                    <span class="cps_inner_ic_from" style="background: url(<#=source_logo_url#>) no-repeat center;\n                                    background-size: contain;"></span><#=source_name#>\n                                </div>\n                            </div>\n                            <div class="cps_inner_info_ft">\n                                <span class="cps_inner_btn_cps_info <# if(is_ad == 1){ #>buy<# } #>"><!--<i class="cps_inner_ic_miniapp"></i><# if(is_ad == 1){ #>购买<# } else { #>详情<# } #>--></span>\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </section>\n    \n    <# } #>\n<# }else{ #>\n    <section class="cps_inner cps_inner_banner cps_inner_placeholder">\n        <div class="cps_inner_wrp">\n            <!-- 数据加载成功模板 -->\n            <div class="cps_inner_content" role="button">\n                <figure class="cps_inner_image_container">\n                    <span width="100%" class="cps_inner_image"></span>\n                </figure>\n                <div class="cps_inner_info">\n                    <div class="cps_inner_info_hd">\n                        <h2 class="cps_inner_info_title"></h2>\n                        <p class="cps_inner_info_desc d"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n<# } #>\n';
});define("biz_common/tmpl.js",[],function(){
"use strict";
function e(e,n){
("undefined"==typeof n||null===n)&&(n=!0);
var t="";
return t=e.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r"),
t=n?t.replace(/\t==(.*?)#>/g,"',typeof $1 !== 'undefined' ? $1 : '','").replace(/\t=(.*?)#>/g,"', String(typeof $1 !== 'undefined' ? $1 : '').replace(/&/g,'&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ,'"):t.replace(/\t=(.*?)#>/g,"',typeof $1 !== 'undefined' ? $1 : '','"),
t=t.split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'");
}
var n=function(n,t,p){
var r=e(n,p),i=function(){};
try{
i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+r+"');}return p.join('');");
}catch(u){
n=n.replace(/\'/g,"&#39;").replace(/'/g,"&#39;"),r=e(n,p),i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+r+"');}return p.join('');");
}
return i(t);
},t=function(e,t,p){
var r=document.getElementById(e);
return r?n(r.innerHTML,t,p):"";
};
return{
render:t,
tmpl:n
};
});