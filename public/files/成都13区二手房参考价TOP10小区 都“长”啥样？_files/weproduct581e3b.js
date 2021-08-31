define("biz_wap/safe/mutation_observer_report.js",[],function(){
"use strict";
window.addEventListener&&window.addEventListener("load",function(){
window.__moonsafe_mutation_report_keys||(window.__moonsafe_mutation_report_keys={});
var e=window.moon&&moon.moonsafe_id||29715,o=window.moon&&moon.moonsafe_key||0,t=[],n={},r=function(e){
return"[object Array]"==Object.prototype.toString.call(e);
},s=function(e,o,s){
s=s||1,n[e]||(n[e]=0),n[e]+=s,o&&(r(o)?t=t.concat(o):t.push(o)),setTimeout(function(){
a();
},1500);
},a=function(){
var r=[],s=t.length,i=["r="+Math.random()];
for(var c in n)n.hasOwnProperty(c)&&r.push(e+"_"+(1*c+1*o)+"_"+n[c]);
for(var c=0;s>c&&!(c>=10);++c)i.push("log"+c+"="+encodeURIComponent(t[c]));
if(!(0==r.length&&i.length<=1)){
var _,d="idkey="+r.join(";")+"&lc="+(i.length-1)+"&"+i.join("&");
if(window.ActiveXObject)try{
_=new ActiveXObject("Msxml2.XMLHTTP");
}catch(w){
try{
_=new ActiveXObject("Microsoft.XMLHTTP");
}catch(f){
_=!1;
}
}else window.XMLHttpRequest&&(_=new XMLHttpRequest);
_&&(_.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),_.setRequestHeader("cache-control","no-cache"),
_.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
_.setRequestHeader("X-Requested-With","XMLHttpRequest"),_.onreadystatechange=function(){
4===_.readyState&&(t.length>10?(t=t.slice(10),a()):(t=[],n={}));
},t=[],n={},_.send(d));
}
};
try{
if(!window.__observer)return;
var i=window.__observer_data;
if(window.__observer.takeRecords){
var c=window.__observer.takeRecords();
if(c&&c.length){
i.count++;
var _=new Date;
c.forEach(function(e){
for(var o=e.addedNodes,t=0;t<o.length;t++){
var n=o[t];
if("SCRIPT"===n.tagName){
var r=n.src;
!r||/qq\.com/.test(r)||/weishi\.com/.test(r)||i.list.push(r);
}
}
}),i.exec_time+=new Date-_;
}
}
window.__observer.disconnect();
for(var d=window.__moonsafe_mutation_report_keys.observer||2,w=window.__moonsafe_mutation_report_keys.script_src||8,f=window.__moonsafe_mutation_report_keys.setattribute||9,u=window.__moonsafe_mutation_report_keys.ajax||10,m=25,v=0;v<i.list.length;v++){
var l=i.list[v],h=["[moonsafe][observer][url]:"+location.href,"[moonsafe][observer][src]:"+l,"[moonsafe][observer][ua]:"+navigator.userAgent];
i.list.length==v+1&&(h.push("[moonsafe][observer][count]:"+i.count),h.push("[moonsafe][observer][exec_time]:"+i.exec_time+"ms")),
s(d,h),"inlinescript_without_nonce"==l&&s(m,h);
}
var p=window.__danger_src;
if(p)for(var y=[{
key:"xmlhttprequest",
idkey:u
},{
key:"script_src",
idkey:w
},{
key:"script_setAttribute",
idkey:f
}],v=0;v<y.length;v++){
var b=y[v].key,g=p[b];
if(g&&g.length)for(var k=0;k<g.length;k++){
var h=["[moonsafe]["+b+"][url]:"+location.href,"[moonsafe]["+b+"][src]:"+g[k],"[moonsafe]["+b+"][ua]:"+navigator.userAgent];
s(y[v].idkey,h);
}
}
}catch(q){
var R=3,h=["[moonsafe][observer][exception]:"+q];
s(R,h);
}
},!1);
});define("appmsg/fereport.js",["biz_wap/utils/wapsdk.js","biz_common/utils/http.js","appmsg/log.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function i(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var i,n=e.timing,o=0,r=0,u=window.location.protocol,p=Math.random(),_=1>2*p,c=1>25*p,l=1>100*p,g=1>250*p,f=1>1e3*p,v=1>1e4*p,S=!0;
"https:"==u?(o=18,r=27,S=!1):"http:"==u&&(o=9,r=19);
var B=window.__wxgspeeds||{};
if(B&&B.moonloadtime&&B.moonloadedtime){
var h=B.moonloadedtime-B.moonloadtime;
i=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
s.saveSpeeds({
sample:21==i||22==i&&f?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:i,
time:h
},
user_define:m
});
}
B&&B.mod_downloadtime&&s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:24,
time:B.mod_downloadtime
},
user_define:m
});
var b=n.domContentLoadedEventStart-n.navigationStart;
if(b>3e3&&(s.setBasicTime({
sample:l&&S||c&&!S?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:r
}),w.setLogs({
id:28307,
key:28,
value:1,
lc:1,
log0:window.encodeURIComponent(location.href)
})),0==window.optimizing_flag?s.setBasicTime({
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:467
}):1==window.optimizing_flag?s.setBasicTime({
sample:l,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:468
}):2==window.optimizing_flag&&s.setBasicTime({
sample:l,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:469
}),s.setBasicTime({
sample:g&&S||l&&!S?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o
}),t.htmlSize){
var I=t.htmlSize/(n.responseEnd-n.connectStart);
s.saveSpeeds({
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:25,
time:Math.round(I)
},
user_define:m
});
}
if(B&&B.combo_times)for(var R=1;R<B.combo_times.length;R++)s.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:26,
time:B.combo_times[R]-B.combo_times[R-1]
},
user_define:m
});
if(B&&B.mod_num){
var C=B.hit_num/B.mod_num;
s.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:[{
sid:27,
time:Math.round(100*C)
},{
sid:28,
time:Math.round(1e3*C)
}],
user_define:m
});
}
var U=window.logs.pagetime.jsapi_ready_time-n.navigationStart;
s.saveSpeeds(156==o||155==o?{
sample:_,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:31,
time:U
},
user_define:m
}:{
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:31,
time:U
},
user_define:m
}),s.send(),window.setTimeout(function(){
window.__moonclientlog&&d("[moon] "+window.__moonclientlog.join(" ^^^ "));
},250),window.setTimeout(function(){
window.onBridgeReadyTime&&(i=window.WeixinJSBridge&&window.WeixinJSBridge._createdByScriptTag?33:32,
s.saveSpeeds({
sample:v,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:i,
time:window.onBridgeReadyTime-n.navigationStart
},
user_define:m
}),s.send());
},5e3);
}
}
function n(e){
for(var i=[],n=new DataView(e),o=0;o<n.byteLength;o+=4){
var s=n.getUint32(o),t=s.toString(16),d="00000000",a=(d+t).slice(-d.length);
i.push(a);
}
return i.join("");
}
function o(e,i){
var o=new TextEncoder("utf-8").encode(e),s=crypto.subtle||crypto.webkitSubtle;
return s.digest(i,o).then(function(e){
return n(e);
});
}
var s=e("biz_wap/utils/wapsdk.js"),t=e("biz_common/utils/http.js"),d=e("appmsg/log.js"),a=e("biz_common/base64.js"),w=e("biz_wap/utils/jsmonitor_report.js"),m=a.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
i(),function(){
try{
var e=Math.random(),i=window.localStorage,n=[],t=[];
for(var d in i)-1!=d.indexOf("__MOON__")&&window.moon_map[d.substr(8)]&&n.push(i[d]);
if(window.crypto){
var w="";
w=.5>e?"SHA-256":"SHA-1";
for(var r=(new Date).getTime(),u=0;u<n.length;u++)t.push(o(n[u],w));
Promise.all(t).then(function(){
var i=(new Date).getTime(),n=i-r;
s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:108,
speeds:{
sid:.5>e?21:23,
time:n
},
user_define:m
}),s.send();
});
}else s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:108,
speeds:{
sid:24,
time:1
},
user_define:m
}),s.send();
}catch(p){}
}();
});define("appmsg/fereport_without_localstorage.js",["biz_wap/utils/wapsdk.js","biz_common/utils/http.js","appmsg/log.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function i(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var i,m=e.timing,w=0,p=0,u=window.location.protocol,r=Math.random(),_=1>2*r,l=1>25*r,c=1>100*r,g=1>250*r,f=1>1e3*r,S=1>1e4*r,B=!0;
"https:"==u?(w=462,p=464,B=!1):"http:"==u&&(w=417,p=463);
var v=window.__wxgspeeds||{};
if(v&&v.moonloadtime&&v.moonloadedtime){
var I=v.moonloadedtime-v.moonloadtime;
i=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
o.saveSpeeds({
sample:21==i||22==i&&f?1:0,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:i,
time:I
},
user_define:a
});
}
v&&v.mod_downloadtime&&o.saveSpeeds({
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:24,
time:v.mod_downloadtime
},
user_define:a
});
var R=m.domContentLoadedEventStart-m.navigationStart;
if(R>3e3&&(o.setBasicTime({
sample:c&&B||l&&!B?1:0,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:p
}),t.setLogs({
id:28307,
key:28,
value:1,
lc:1,
log0:encodeURIComponent(location.href)
})),0==window.optimizing_flag?o.setBasicTime({
sample:f,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:473
}):1==window.optimizing_flag?o.setBasicTime({
sample:c,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:474
}):2==window.optimizing_flag&&o.setBasicTime({
sample:c,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:475
}),o.setBasicTime({
sample:g&&B||c&&!B?1:0,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w
}),n.htmlSize){
var b=n.htmlSize/(m.responseEnd-m.connectStart);
o.saveSpeeds({
sample:f,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:25,
time:Math.round(b)
},
user_define:a
});
}
if(v&&v.combo_times)for(var h=1;h<v.combo_times.length;h++)o.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:26,
time:v.combo_times[h]-v.combo_times[h-1]
},
user_define:a
});
if(v&&v.mod_num){
var j=v.hit_num/v.mod_num;
o.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:[{
sid:27,
time:Math.round(100*j)
},{
sid:28,
time:Math.round(1e3*j)
}],
user_define:a
});
}
var C=window.logs.pagetime.jsapi_ready_time-m.navigationStart;
o.saveSpeeds(156==w||155==w?{
sample:_,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:31,
time:C
},
user_define:a
}:{
sample:f,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:31,
time:C
},
user_define:a
}),o.send(),window.setTimeout(function(){
window.__moonclientlog&&s("[moon] "+window.__moonclientlog.join(" ^^^ "));
},250),window.setTimeout(function(){
window.onBridgeReadyTime&&(i=window.WeixinJSBridge&&window.WeixinJSBridge._createdByScriptTag?33:32,
o.saveSpeeds({
sample:S,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:i,
time:window.onBridgeReadyTime-m.navigationStart
},
user_define:a
}),o.send());
},5e3);
}
}
var o=e("biz_wap/utils/wapsdk.js"),n=e("biz_common/utils/http.js"),s=e("appmsg/log.js"),d=e("biz_common/base64.js"),t=e("biz_wap/utils/jsmonitor_report.js"),a=d.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
i();
});define("appmsg/report.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","common/utils.js","appmsg/cdn_img_lib.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function t(){
var t=(e("biz_wap/utils/mmversion.js"),e("biz_common/utils/report.js"),e("biz_wap/utils/jsmonitor_report.js")),r=!1,s=window.performance||window.msPerformance||window.webkitPerformance;
return function(){
return;
}(),s&&s.timing&&s.timing.navigationStart?(r=s.timing.navigationStart,function(){
return;
}(),function(){
function e(){
if(-1==n.indexOf("NetType/"))return!1;
for(var e=["2G","cmwap","cmnet","uninet","uniwap","ctwap","ctnet"],t=0,i=e.length;i>t;++t)if(-1!=n.indexOf(e[t]))return!0;
return!1;
}
var i=window.performance&&window.performance.timing,a=write_sceen_time-r,s=first_sceen__time-r,d=page_endtime-r,g=(window.onload_endtime||+new Date)-r;
-1!=navigator.userAgent.indexOf("MicroMessenger")&&(a=real_show_page_time-r,s=real_show_page_time-r);
var m=window.logs.jsapi_ready_time?window.logs.jsapi_ready_time-r:void 0,p=window.logs.a8key_ready_time?window.logs.a8key_ready_time-r:void 0,w=i&&i.connectEnd-i.connectStart,c=i&&i.secureConnectionStart&&i.connectEnd-i.secureConnectionStart,u=i&&i.domainLookupEnd&&i.domainLookupStart&&i.domainLookupEnd-i.domainLookupStart;
if(window.logs.pagetime.wtime=a,window.logs.pagetime.ftime=s,window.logs.pagetime.ptime=d,
window.logs.pagetime.onload_time=g,window.logs.pagetime.jsapi_ready_time=m,window.logs.pagetime.a8key_ready_time=p,
need_report_cost?o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["1|1|"+d,"1|2|"+s,"1|3|"+g,"1|4|"+m,"1|5|"+p,"1|6|"+w,"1|7|"+c,"1|8|"+u].join(";")
}
}):Math.random()<.01&&o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["#1|1|"+d,"1|2|"+s,"1|3|"+g,"1|4|"+m,"1|5|"+p,"1|6|"+w,"1|7|"+c,"1|8|"+u].join(";")
}
}),need_report_cost&&s>3e3){
var _=new Image,l=(new Date).getTime();
_.onload=function(){
var e=(new Date).getTime()-l,t=(new Date).getTime(),i=new Image;
i.onload=function(){
var i=(new Date).getTime()-t;
o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["^2|1|"+e,"2|2|"+i].join(";")
}
});
},i.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
},_.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
}
if(!(Math.random()>.2||0>g||0>a||0>s||0>d)){
if(m&&t.setAvg(27822,15,m),p&&t.setAvg(27822,17,p),d>=15e3)return void t.setAvg(27822,29,d);
t.setAvg(27822,1,d).setAvg(27822,3,g).setAvg(27822,5,s),window.isWeixinCached&&t.setAvg(27822,19,d),
e()?(t.setAvg(27822,9,d),window.isWeixinCached&&t.setAvg(27822,23,d)):"wifi"==networkType?(t.setAvg(27822,7,d),
window.isWeixinCached&&t.setAvg(27822,21,d)):"2g/3g"==networkType?(t.setAvg(27822,11,d),
window.isWeixinCached&&t.setAvg(27822,25,d)):"4g"==networkType?(t.setAvg(27822,14,d),
window.isWeixinCached&&t.setAvg(27822,26,d)):(t.setAvg(27822,13,d),window.isWeixinCached&&t.setAvg(27822,28,d)),
window.moon&&moon.clearSample&&(t.setAvg(27822,71,d),e()?t.setAvg(27822,73,d):"wifi"==networkType?t.setAvg(27822,75,d):"2g/3g"==networkType?t.setAvg(27822,77,d):"4g"==networkType?t.setAvg(27822,78,d):t.setAvg(27822,79,d)),
w&&t.setAvg(27822,65,w),c&&t.setAvg(27822,67,c),u&&t.setAvg(27822,69,u);
}
}(),function(){
window.logs.jsapi_ready_fail&&t.setSum(24729,55,window.logs.jsapi_ready_fail);
}(),function(){
var e=document.getElementById("js_toobar3"),t=document.getElementById("page-content");
if(t&&!(Math.random()>.1)){
var n=function o(){
var n=window.pageYOffset||document.documentElement.scrollTop,r=e.offsetTop;
if(n+a.getInnerHeight()>=r){
for(var d,g,m=t.getElementsByTagName("img"),p={},w=[],c=0,u=0,_=0,l=0,f=m.length;f>l;++l){
var v=m[l];
d=v.getAttribute("data-src")||v.getAttribute("src"),g=v.getAttribute("src"),d&&(d.isCDN()?u++:_++,
c++,p[g]={});
}
if(w.push("1="+1e3*c),w.push("2="+1e3*u),w.push("3="+1e3*_),s.getEntries){
var y=s.getEntries(),h=window.logs.img.download,k=[0,0,0],A=[0,0,0];
c=u=0;
for(var l=0,j=y.length;j>l;++l){
var T=y[l],b=T.name;
b&&"img"==T.initiatorType&&p[b]&&(b.isCDN()&&(A[0]+=T.duration,u++),k[0]+=T.duration,
c++,p[b]={
startTime:T.startTime,
responseEnd:T.responseEnd
});
}
k[0]>0&&c>0&&(k[2]=k[0]/c),A[0]>0&&u>0&&(A[2]=A[0]/u);
for(var l in h)if(h.hasOwnProperty(l)){
for(var M=h[l],x=0,E=0,C=0,z=0,S=0,f=M.length;f>S;++S){
var d=M[S];
if(p[d]&&p[d].startTime&&p[d].responseEnd){
var D=p[d].startTime,I=p[d].responseEnd;
x=Math.max(x,I),E=E?Math.min(E,D):D,d.isCDN()&&(C=Math.max(x,I),z=E?Math.min(E,D):D);
}
}
k[1]+=Math.round(x-E),A[1]+=Math.round(C-z);
}
for(var W=4,N=7,l=0;3>l;l++)k[l]=Math.round(k[l]),A[l]=Math.round(A[l]),k[l]>0&&(w.push(W+l+"="+k[l]),
"wifi"==networkType?w.push(W+l+6+"="+k[l]):("2g/3g"==networkType||"4g"==networkType)&&w.push(W+l+12+"="+k[l])),
A[l]>0&&(w.push(N+l+"="+A[l]),"wifi"==networkType?w.push(N+l+6+"="+A[l]):("2g/3g"==networkType||"4g"==networkType)&&w.push(N+l+12+"="+A[l]));
}
i.off(window,"scroll",o,!1);
}
};
i.on(window,"scroll",n,!1);
}
}(),void function(){
if(!(Math.random()>.001)){
var e=document.createElement("iframe"),t=[600,800,1e3,1200,1500,2e3,3e3,5e3,1e4,18e3],i=Math.ceil(10*Math.random())-1,n=uin+mid+idx+Math.ceil(1e3*Math.random())+(new Date).getTime();
e.style.display="none",e.id="js_ajax",e.setAttribute("data-time",i),e.src="/mp/iframetest?action=page&traceid="+n+"&devicetype="+devicetype+"&timeout="+t[i];
var o=document.getElementById("js_article");
o.appendChild(e);
}
}()):!1;
}
var i=e("biz_common/dom/event.js"),n=navigator.userAgent,o=e("biz_wap/utils/ajax.js"),a=e("common/utils.js");
e("appmsg/cdn_img_lib.js"),i.on(window,"load",function(){
if(""==networkType&&window.isInWeixinApp()){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(i){
networkType=e[i.err_msg],("network_type:edge"==i.err_msg||"network_type:wwan"==i.err_msg)&&(i.detailtype&&"4g"==i.detailtype||i.subtype&&"4g"==i.subtype)&&(networkType="4g"),
t();
});
}else t();
},!1);
});define("appmsg/report_and_source.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","appmsg/articleReport.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","appmsg/log.js","appmsg/open_url_with_webview.js","biz_wap/jsapi/core.js"],function(e,i,o,t){
"use strict";
function n(){
var e=window.location.protocol+"//",i=_.indexOf("://")<0?e+_:_;
if(-1!=i.indexOf("mp.weixin.qq.com/s")||-1!=i.indexOf("mp.weixin.qq.com/mp/appmsg/show")||-1!=i.indexOf("mp.weixin.qq.com/mp/homepage")||-1!=i.indexOf("mp.weixin.qq.com/mp/profile_ext")){
var o=i.split("#");
i=p.addParam(o[0],"scene",25,!0)+(o[1]?"#"+o[1]:""),i=i.replace(/#rd$/g,"#wechat_redirect");
}else i=e+"mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(_);
try{
if("mp.weixin.qq.com"!=top.window.location.host)return window.top.open(i,"_blank"),
!1;
}catch(t){}
var n=location.search.replace("wx_header","del_wx_header"),s={
url:"/mp/advertisement_report"+n+"&report_type=3&action_type=0&url="+encodeURIComponent(_)+"&ascene="+encodeURIComponent(window.ascene||-1)+"&__biz="+biz+"&r="+Math.random()+"&exptype="+window.exptype+"&expsessionid="+window.expsessionid,
type:"GET",
mayAbort:!0,
async:!1
},r=c.isInMiniProgram?0:1;
return s.timeout=2e3,s.complete=function(){
d(i,{
sample:r,
scene:60,
user_name:user_name,
reject:function(){
location.href=i;
}
});
},m(s),!1;
}
e("biz_common/utils/string/html.js");
var s=e("biz_common/dom/event.js"),p=e("biz_common/utils/url/parse.js"),r=e("appmsg/articleReport.js"),m=e("biz_wap/utils/ajax.js"),c=e("biz_wap/utils/mmversion.js"),a=e("appmsg/log.js"),l=msg_title.htmlDecode(),_=msg_source_url.htmlDecode(),d=e("appmsg/open_url_with_webview.js"),w=e("biz_wap/jsapi/core.js");
r.init({
dom:document.getElementById("js_report_article3"),
title:l,
link:window.msg_link
});
var u=document.getElementById("js_view_source");
s.on(u,"click",function(e){
var i=u.getBoundingClientRect();
return a("[Appmsg viewsource location] top: "+i.top+" left: "+i.left+" bottom: "+i.bottom+" right: "+i.right),
a("[Appmsg viewsource click] clientX: "+e.clientX+" clientY: "+e.clientY),n(),!1;
});
});define("appmsg/appmsg_copy_report.js",["biz_wap/utils/ajax.js","biz_common/dom/event.js"],function(t){
"use strict";
var e=t("biz_wap/utils/ajax.js"),n=t("biz_common/dom/event.js"),i=function(t,e){
var n=!1,i=t;
if(t===e)n=!0;else for(;i.parentNode&&(i=i.parentNode,1!==i.nodeType||"body"!==i.tagName.toLowerCase());)if(i===e){
n=!0;
break;
}
return n;
},o=function(t){
this.biz=t.biz,this.logid=t.logid,this.baseData=t.baseData,this.isPaySubscribe=t.isPaySubscribe,
this.container=t.container,this.totalLength=this.container.innerText.length,this.initEvent();
};
return o.prototype.initEvent=function(){
var t=this;
n.on(document,"copy",function(){
var e=[].concat(t.baseData),n=t.getContentData().trim();
n.length&&(e.push(t.totalLength),e.push(""),e.push(n.length),e.push(t.isPaySubscribe),
t.report(e.join(",")));
});
},o.prototype.getContentData=function(){
var t=document.getSelection(),e=this.container,n="";
if(t&&t.rangeCount){
var o=t.getRangeAt(0);
if(!o.collapsed){
var a=o.startContainer,r=o.startOffset,s=o.endContainer,c=o.endOffset,p=i(a,e),u=i(s,e);
if(p&&u)n=o.toString();else if(p||u){
var f=document.createRange();
f.setStart(a,r),f.setEnd(s,c),!u&&f.setEndAfter(e),!p&&f.setStartBefore(e),n=f.toString();
}else if(t.containsNode&&t.containsNode(e,!0)){
var f=document.createRange();
f.setEndAfter(e),f.setStartBefore(e),n=f.toString();
}
}
}
return n;
},o.prototype.report=function(t){
var n=this.biz,i=this.logid;
e({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+n,
type:"POST",
data:{
logid:i,
buffer:t
},
async:!1,
timeout:2e3
});
},o;
});define("appmsg/cdn_speed_report.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function t(){
function e(e){
var t=[];
for(var n in e)t.push(n+"="+encodeURIComponent(e[n]||""));
return t.join("&");
}
if(networkType){
var t=window.performance||window.msPerformance||window.webkitPerformance;
if(t&&"undefined"!=typeof t.getEntries){
var n,i,a=100,o=document.getElementsByTagName("img"),p=o.length,s=navigator.userAgent,g=!1;
/micromessenger\/(\d+\.\d+)/i.test(s),i=RegExp.$1;
for(var w=0,m=o.length;m>w;w++)if(n=parseInt(100*Math.random()),!(n>a)){
var d=o[w].getAttribute("src");
if(d&&!(d.indexOf("mp.weixin.qq.com")>=0)){
for(var f,_=t.getEntries(),u=0;u<_.length;u++)if(f=_[u],f.name==d){
var c=o[w].getAttribute("data-fail");
r({
type:"POST",
url:"/mp/appmsgpicreport?__biz="+biz+"#wechat_redirect",
data:e({
rnd:Math.random(),
uin:uin,
version:version,
client_version:i,
device:navigator.userAgent,
time_stamp:parseInt(+new Date/1e3),
url:d,
img_size:o[w].fileSize||0,
user_agent:navigator.userAgent,
net_type:networkType,
appmsg_id:window.appmsgid||"",
sample:p>100?100:p,
delay_time:parseInt(f.duration),
from:window.isSg?"sougou":"",
fail:c
})
}),g=!0;
break;
}
if(g)break;
}
}
}
}
}
var n=e("biz_common/dom/event.js"),i=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/ajax.js"),a={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
i.invoke("getNetworkType",{},function(e){
networkType=a[e.err_msg],("network_type:edge"==e.err_msg||"network_type:wwan"==e.err_msg)&&(e.detailtype&&"4g"==e.detailtype||e.subtype&&"4g"==e.subtype)&&(networkType="4g"),
t();
}),n.on(window,"load",t,!1);
});define("appmsg/wxtopic.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","appmsg/topic_tpl.html.js"],function(t){
"use strict";
function e(t){
t.parentNode.removeChild(t);
}
function i(t,e){
var i=c;
e.img_url||(e.img_url=topic_default_img);
for(var o in e){
var a=new RegExp("{"+o+"}","g");
i=i.replace(a,e[o]);
}
var p=document.createElement("span");
p.className="db topic_area",p.innerHTML=i,t.parentNode.insertBefore(p,t),t.parentNode.removeChild(t),
r.tap(p,function(){
var e=location.protocol+"//mp.weixin.qq.com/mp/topic?action=topic_detail_page&topic_id="+t.getAttribute("data-topic-id")+"&topic_type="+t.getAttribute("data-topic-type")+"&sn="+t.getAttribute("data-topic-sn")+"&scene=101#wechat_redirect";
n.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t&&-1!==t.err_msg.indexOf(":ok")||(location.href=e);
});
});
}
function o(t){
var o={
topic_id:t.getAttribute("data-topic-id"),
topic_type:t.getAttribute("data-topic-type"),
sn:t.getAttribute("data-topic-sn"),
biz:biz
};
p({
url:"/mp/topic?action=get_topic_info",
type:"post",
data:o,
success:function(o){
if(console.log(o),o=JSON.parse(o),0!=o.base_resp.ret)return void e(t);
var a={
title:o.title,
author:o.author||(o.leading_actor?o.leading_actor.replace(/\$\$/g," / "):"-"),
img_url:o.img_url,
msg_num:o.msg_num
};
i(t,a);
},
error:function(){
e(t);
}
});
}
function a(){
var t=document.getElementsByTagName("wxtopic");
t[0]&&o(t[0]);
}
var p=t("biz_wap/utils/ajax.js"),n=t("biz_wap/jsapi/core.js"),r=t("biz_common/dom/event.js"),c=t("appmsg/topic_tpl.html.js");
a();
});var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var o=arguments[e];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);
}
return t;
};
define("appmsg/minishop/minishop.js",["biz_common/utils/string/html.js","appmsg/minishop/minishop_tpl.html.js","biz_common/dom/event.js","appmsg/weapp_common.js","biz_wap/utils/ajax.js","biz_common/tmpl.js","common/utils.js","pages/player_tips.js","biz_wap/utils/mmversion.js","common/comm_report.js","biz_common/base64.js"],function(t){
"use strict";
t("biz_common/utils/string/html.js");
var e=t("appmsg/minishop/minishop_tpl.html.js"),o=t("biz_common/dom/event.js"),n=t("appmsg/weapp_common.js"),a=t("biz_wap/utils/ajax.js"),r=t("biz_common/tmpl.js"),i=t("common/utils.js"),s=t("pages/player_tips.js"),p=t("biz_wap/utils/mmversion.js"),m=t("common/comm_report.js"),d=t("biz_common/base64.js"),c=!1,u=navigator.userAgent.match(/MicroMessenger\/(\d+)\.(\d+)\.(\d+)/);
if(u){
var g=Number(u[1]),l=Number(u[2]),h=Number(u[3]);
g>6?c=!0:6===g&&l>5?c=!0:6===g&&5===l&&h>=3&&(c=!0);
}
var f={
tagName:"mp-wxaproduct",
isWechat:(p.isAndroid||p.isIOS)&&p.isWechat&&!p.isWxwork,
isWindowsWechat:-1!==window.navigator.userAgent.indexOf("WindowsWechat"),
screen_height:i.getInnerHeight(),
canJumpOnTap:c,
commonReportData:{},
minishopDom:[],
appmsgType:1*window.appmsg_type||9
},b=function(){
return document.documentElement.scrollTop||document.body.scrollTop;
},w=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
f.isWechat||f.isWindowsWechat?f.canJumpOnTap?n.jumpUrl({
options:{
userName:t.username,
scene:1058,
sceneNote:encodeURIComponent(location.href),
relativeURL:t.path
},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(t){
"openWeApp:ok"===t.err_msg||console.error(t.err_msg);
}
}):console.log("cant jumpOnTap"):new s({
msg:"请使用微信打开。"
});
},v=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=t.dom,n=t.minishopInfo;
o.on(e,"tap",function(t){
t.stopPropagation(),t.preventDefault(),m.report(22042,_extends({},f.commonReportData,{
ActionType:2,
toWxaAppId:n.appid,
CardType:"large"===n.cardtype?1:0,
ProductId:n.productId,
isMassSend:f.appmsgType
})),w(n);
},!0),o.on(e,"click",function(t){
t.preventDefault(),t.stopPropagation();
},!0);
},_=function(){
for(var t=0;t<f.minishopDom.length;t++){
var e=f.minishopDom[t];
if(1*e.getAttribute("data-hasreport")!==1){
var o=b(),n=e.getAttribute("data-wxaproduct-productid")||"0",a=e.getAttribute("data-wxaproduct-appid")||"",r=e.getAttribute("data-wxaproduct-cardtype")||"mini";
e.clientHeight+e.offsetTop>=o+e.clientHeight/2&&e.clientHeight+e.offsetTop<=o+e.clientHeight/2+f.screen_height&&(e.setAttribute("data-hasreport",1),
m.report(22042,_extends({},f.commonReportData,{
ActionType:1,
toWxaAppId:a,
CardType:"large"===r?1:0,
ProductId:n,
isMassSend:f.appmsgType
})));
}
}
};
o.on(window,"scroll",_);
var j=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
t.node&&t.data&&t.data.headimg&&!function(){
var o=function(t){
var o=t.node,n=t.data;
return function(){
var t=document.createElement("div");
t.innerHTML=r.tmpl(e,n,!0).replace(/>\s*</g,"><").replace(/^\s+/,"").replace(/\s+$/,"");
var a=t.firstChild;
o.parentNode.insertBefore(a,o.nextSibling);
var i=o.parentNode.querySelector('[data-preloadingid="'+n.productId+'"]');
i&&i.parentNode.removeChild(i),v({
dom:a,
minishopInfo:n
}),f.minishopDom.push(a),_();
};
}(t),n=function(){
this.onload=null,this.onerror=null,o();
},a=new Image;
a.onload=n,a.onerror=n,a.src=t.data.headimg;
}();
},I=function(){
for(var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=document.querySelectorAll(f.tagName),o=0,n=e.length;n>o;o++){
var a=e[o],r=decodeURIComponent(a.getAttribute("data-wxaproduct-productid")||""),i=t.find(function(t){
return t.product_id===r;
})||{},s={
productId:r,
title:a.getAttribute("data-wxaproduct-title")||"",
price:decodeURIComponent(a.getAttribute("data-wxaproduct-price")||""),
headimg:decodeURIComponent(a.getAttribute("data-wxaproduct-headimg")||""),
cardtype:decodeURIComponent(a.getAttribute("data-wxaproduct-cardtype")||""),
avatar:i.avatar||"",
nickname:i.nickname||"",
appid:i.appid||decodeURIComponent(a.getAttribute("data-wxaproduct-appid")||""),
path:i.path||"",
username:i.username||""
};
j({
data:s,
node:a
});
}
},y=function A(t){
a({
url:"/mp/wapwxaproduct?action=batch_get_product&product_ids="+JSON.stringify({
list:t
}),
type:"GET",
dataType:"json",
success:function(t){
t&&t.base_resp&&1*t.base_resp.ret===0&&"[object Array]"===Object.prototype.toString.call(t.product_list)&&I(t.product_list);
},
error:function(e){
f.retry?(f.retry--,A(t)):console.error(e);
}
});
},x=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
t.minishopCards&&(f.commonReportData={
BizUin:1*d.decode(t.biz),
MsgId:window.parseInt(t.mid,10)||0,
ItemIdx:window.parseInt(t.idx,10)||0,
Scene:window.parseInt(t.source,10)||0,
SubScene:window.parseInt(t.subscene,10)||0,
EnterId:window.parseInt(t.enterid,10)||0
},y(t.minishopCards.list),_());
};
return{
init:x
};
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var o=arguments[t];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);
}
return e;
};
define("appmsg/live.js",["biz_common/dom/event.js","appmsg/weapp_common.js","biz_common/moment.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/tmpl.js","appmsg/appmsg_live_tpl.html.js","biz_wap/utils/wapsdk.js","common/utils.js","biz_common/dom/offset.js","common/comm_report.js"],function(e){
"use strict";
function t(e,t){
g.jsmonitor({
id:223326,
key:e,
value:t
});
}
function o(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
f.report(21032,_extends({
MsgId:1*z.mid,
ItemIdx:1*z.idx,
BizUin:z.biz,
PreScene:1*z.scene,
ActionType:1e4
},e));
}
function n(e){
var t=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
return e=Number(e),null===e?0:isNaN(e)?"-":((isNaN(t)||null===t)&&(t=1),e>9999e8?"9990%s".replace("%s","亿+"):e>99999499?Number((e/1e8).toFixed(t))+"亿":e>=1e4?Number((e/1e4).toFixed(t))+"万":e);
}
function s(){
function e(){
if(h.length)for(var e=0;e<h.length;e++){
var n=h[e];
if(!n.cardExposed){
var s=_.getOffset(n).offsetTop,i=v.getScrollTop();
i+v.getInnerHeight()>=s&&i<=s+n.offsetHeight&&(t(9),o({
SubActionType:1,
RoomId:n.liveInfo.room_id
}),n.cardExposed=!0);
}
}
}
m.on(document.body,"tap","."+j,function(e){
var n=e.delegatedTarget.liveInfo,s=encodeURIComponent(location.href);
t(10),o({
SubActionType:2,
RoomId:n.room_id
}),107!==n.status&&r.jumpUrl({
options:{
userName:"gh_9dcc2ce385c1",
appId:"wx60422b707e49ff2e",
relativeURL:"pages/player/player?roomId="+n.room_id+"&roomAppId="+n.room_appid+"&sceneNote="+s+"&preScene="+z.scene,
openType:2
}
});
}),v.bindDebounceScrollEvent(e),e();
}
function i(){
for(var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=0;t<e.length;t++){
var o="",i="",a="",m="",r=e[t],d=r.status;
if(104!==d){
var c=101===d||105===d||106===d,g=103===d||107===d;
if(c)o="直播中",i="正在直播: ",a="进入直播";else if(0===d||102===d){
o="直播",i="即将直播: ",a="开播提醒";
var v=z.svrTime?new Date(1e3*z.svrTime):new Date,_=v.getFullYear(),f=v.getMonth(),j=v.getDate(),h=new Date(_,f,j,0,0,0).getTime(),w=h+864e5,y=1e3*r.begin_time,I=new Date(y).getFullYear()!==_,x=y>=h&&w>y,T=y>=w&&w+864e5>y,N=void 0;
N=x?"今天":T?"明天":I?"YYYY年M月D日":"M月D日";
var S=l(y).format(N+" HH:MM");
m=S+" 开播";
}else g&&(o="直播结束",i="直播已结束: ",a="查看直播");
(c||g)&&(m=n(r.view_count)+" 观看");
var D=document.getElementsByClassName(""+b+r.room_id)[0];
D&&(D.liveInfo=r,D.innerHTML=p.tmpl(u,{
tagStatusWord:o,
liveStatusWord:i,
btnStatusWord:a,
statusInfoWord:m,
showEntryBtn:107!==d,
title:""+i+r.room_name,
desc:r.nickname+"的直播",
cover:r.cover,
isInLive:c,
isEnd:g,
likeCount:n(r.like_count),
liveDeleted:1===r.room_status
}));
}
}
s();
}
function a(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(h.length){
_extends(z,e);
for(var t=[],o=0;o<h.length;o++)t.push(h[o].dataset.id),d.addClass(h[o],j),d.addClass(h[o],""+b+h[o].dataset.id);
c({
url:"/mp/getappmsglive",
type:"POST",
dataType:"json",
data:{
__biz:e.biz,
mid:e.mid,
idx:e.idx,
scene:e.scene,
live_id:t.join(",")
},
success:function(e){
e&&e.live_info&&e.live_info.length&&i(e.live_info);
}
});
}
}
var m=e("biz_common/dom/event.js"),r=e("appmsg/weapp_common.js"),l=e("biz_common/moment.js"),d=e("biz_common/dom/class.js"),c=e("biz_wap/utils/ajax.js"),p=e("biz_common/tmpl.js"),u=e("appmsg/appmsg_live_tpl.html.js"),g=e("biz_wap/utils/wapsdk.js"),v=e("common/utils.js"),_=e("biz_common/dom/offset.js"),f=e("common/comm_report.js"),j="js_live_card",b="js_live_card_",h=document.getElementsByTagName("mplive"),z={};
return{
init:a
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("appmsg/profile/mp_insert_profile.js",["biz_common/tmpl.js","appmsg/profile/mp_profile_tpl.html.js","biz_common/dom/event.js","common/utils.js","common/comm_report.js","appmsg/profile/ban_alert_tpl.html.js","appmsg/appmsg_card.js","biz_wap/utils/mmversion.js","pages/utils.js"],function(e){
"use strict";
function t(e){
try{
return 1*window.atob(e);
}catch(t){}
return 0;
}
function n(e,n,i,o){
p.report(22316,{
BizUin:t(window.biz),
AppMsgID:window.parseInt(window.mid,10)||0,
ItemIndex:window.parseInt(window.idx,10)||0,
Itemshowtype:0,
SessionId:window.sessionid+"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:1*window.source,
Subscene:1*window.subscene,
ActionType:e,
toBizuin:t(n),
isBizBan:1*i,
isMassSend:1*window.appmsg_type,
CardType:o
});
}
function i(){
if(g&&g.length&&_.length===g.length)return void d.off(window,"scroll",i);
for(var e=0;e<g.length;e++){
var t=g[e],o=t.querySelector(".js_wx_profile_card");
if(o&&o.getBoundingClientRect().top>0&&o.getBoundingClientRect().top+o.getBoundingClientRect().height/2<=m.getInnerHeight()){
var r=o.getAttribute("data-id"),s=o.getAttribute("data-index");
if(-1===_.indexOf(s)){
_.push(s);
var a=o.getAttribute("data-isban"),p=1*t.getAttribute("data-from");
n(0,r,a,p);
}
}
}
}
function o(e,t,i,o,r){
e.addEventListener("click",function(){
if(n(1,i,o,r),o){
var e=function(){
var e=document.getElementById("js_profile_ban");
return"none"===e.style.display&&(e.style.display="block",setTimeout(function(){
e.style.display="none";
},2e3)),{
v:void 0
};
}();
if("object"===("undefined"==typeof e?"undefined":_typeof(e)))return e.v;
}
!u.isWechat||u.is_wxwork?window.weui.alert("请在微信内打开"):f.goProfile({
biz:i,
scene:124
},{
username:t,
scene:"200"
});
});
var s=e.querySelector(".js_wx_profile_card");
c.addAppmsgCardTouchEvent(s);
}
function r(){
var e=document.getElementById("js_content");
if(e){
g=document.getElementsByTagName("mpprofile")||[];
for(var t=window.mp_profile,n=0;n<g.length;n++){
var r=g[n],d=r.getAttribute("data-id"),m=1*r.getAttribute("data-from"),p=t[n],c=document.querySelector('[data-preloadingid="'+d+'"]');
c&&r.parentNode.removeChild(c),p?(r.innerHTML=s.tmpl(a,{
index:n,
id:p.fakeid,
round_head_img:p.round_head_img,
nickname:p.nickname.htmlDecode(),
alias:p.alias.htmlDecode(),
signature:p.signature.htmlDecode(),
original_num:p.original_num,
isban:p.is_biz_ban
}),o(r,p.username,p.fakeid,p.is_biz_ban,m)):r.innerHTML="";
}
i();
var u=document.createElement("div");
u.innerHTML=s.tmpl(l,{}),document.body.appendChild(u);
}
}
var s=e("biz_common/tmpl.js"),a=e("appmsg/profile/mp_profile_tpl.html.js"),d=e("biz_common/dom/event.js"),m=e("common/utils.js"),p=e("common/comm_report.js"),l=e("appmsg/profile/ban_alert_tpl.html.js"),c=e("appmsg/appmsg_card.js"),u=e("biz_wap/utils/mmversion.js"),f=e("pages/utils.js"),g=[],_=[];
d.on(window,"scroll",i),r();
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);
}
return e;
};
define("appmsg/channel/channels.js",["biz_common/tmpl.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","appmsg/appmsg_card.js","appmsg/channel/video_snap_tpl.html.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","pages/utils.js","common/utils.js","common/comm_report.js","appmsg/channel/time_format.js","appmsg/channel/report_live.js","biz_common/dom/class.js"],function(e,t,n,i){
"use strict";
function o(){
return!N.isWechat||F.os.pc||N.is_wxwork?!1:N.isIOS&&N.ltVersion("7.0.15",!1)?!1:N.isAndroid&&window.clientversion<="27001337"?!1:N.isAndroid&&window.clientversion>"2700135F"&&window.clientversion<"27001400"?!1:!0;
}
function a(){
return!N.isWechat||F.os.pc||N.is_wxwork?!1:N.isAndroid&&window.clientversion<"2700143c"?!1:N.isIOS&&window.clientversion<"17001228"?!1:!0;
}
function r(){
return!N.isWechat||F.os.pc||N.is_wxwork?!1:N.isAndroid&&window.clientversion<"2700143c"?!1:N.isIOS&&window.clientversion<"17001228"?!1:!0;
}
function s(){
return F.os.pc?N.isMac&&N.cpVersion("3.1.0",1,!0,"mac")?!0:N.isWindows&&N.getWindows()>="63030000"?!0:!1:!1;
}
function d(e,t,n){
D.report(21146,{
BizUin:X,
AppMsgID:window.parseInt(window.mid,10)||0,
ItemIndex:window.parseInt(window.idx,10)||0,
ExportId:t||"",
Action:e,
Username:n||"",
Scene:window.parseInt(window.scene,10)||0,
Subscene:window.parseInt(window.subscene,10)||0,
EnterId:window.parseInt(window.enterid,10)||0
});
}
function c(e){
return"live"===e?void(N.isAndroid&&window.clientversion<"2700143c"||N.isIOS&&window.clientversion<"17001228"?window.weui.alert("请升级微信客户端版本后查看"):N.isWechat&&F.os.pc?window.weui.alert("当前版本暂不支持查看，请在手机上查看"):N.isInMiniProgram?window.weui.alert("暂不支持从小程序进入直播间"):(!N.isWechat||N.is_wxwork)&&i("请在微信内打开")):(("1"===e||0===e)&&N.isInMiniProgram&&window.weui.alert("暂不支持从小程序进入视频号"),
N.isAndroid&&window.clientversion>"2700135F"&&window.clientversion<"27001400"?void window.weui.alert("当前版本暂不支持查看"):(N.isWechat&&F.os.pc?window.weui.alert("当前版本暂不支持查看，请在手机上查看"):(!N.isWechat||N.is_wxwork)&&i("请在微信内打开"),
void(!N.isWechat||F.os.pc||N.is_wxwork||B.jumpUrl("https://support.weixin.qq.com/update/",!0))));
}
function u(e){
if(r()){
var t={
action:"openFinderProfile",
finderUserName:e,
commentScene:5,
reportExtraInfo:JSON.stringify({
scenenote:{
bizUin:X,
msgid:window.parseInt(window.mid,10)||0,
idx:window.parseInt(window.idx,10)||0,
scene:window.parseInt(window.scene,10)||0,
enterid:window.parseInt(window.enterid,10)||0,
action:5,
status:Q,
actionTS:Math.ceil(Date.now()/1e3)
}
})
};
W.invoke("openFinderView",{
extInfo:t
},function(e){
console.log("openFinderView",e);
});
}else c("profile");
}
function l(e,t){
if(a())W.invoke("openFinderView",{
extInfo:{
action:"autoOpenFinderLive",
finderUserName:e,
commentScene:5,
reportExtraInfo:JSON.stringify({
scenenote:{
bizUin:X,
msgid:window.parseInt(window.mid,10)||0,
idx:window.parseInt(window.idx,10)||0,
scene:window.parseInt(window.scene,10)||0,
enterid:window.parseInt(window.enterid,10)||0,
action:4,
status:Q,
actionTS:Math.ceil(Date.now()/1e3)
}
})
}
},function(e){
console.log("openFinderLive",e);
});else if(s())if(t){
var n=window.location.protocol||"https:";
t=encodeURIComponent(t);
var i=n+("//channels.weixin.qq.com/web/pages/live?eid="+t);
W.invoke("openUrlWithExtraWebview",{
url:i,
openType:1
},function(e){
console.log("openUrlWithExtraWebview",e);
});
}else c();else c("live");
}
function p(e,t,n,i,a){
if(d(2,e,n),o()){
var r={
action:"openFinderFeed",
feedID:e,
nonceID:t,
notGetReleatedList:9===i?"1":0,
shareScene:11,
requestScene:16,
reportExtraInfo:JSON.stringify({
mp:{
scene:1
}
})
};
W.invoke("openFinderView",{
extInfo:r
},function(e){
console.log("openFinderDetailView",e);
});
}else if(s())if(a){
var u=window.location.protocol||"https:";
a=encodeURIComponent(a);
var l=u+("//channels.weixin.qq.com/web/pages/feed?eid="+a);
W.invoke("openUrlWithExtraWebview",{
url:l,
openType:1
},function(e){
console.log("openUrlWithExtraWebview",e);
});
}else c(i);else d(3,e,n),c(i);
}
function w(e){
return H.filter(function(t){
return t.export_id===e;
});
}
function m(e){
return J.filter(function(t){
return t.notice_id===e;
});
}
function _(e){
var t=e.parentNode;
if(t){
var n=t.getAttribute("data-id"),i=w(n),o=void 0;
i&&i.length>0&&(o=i[0]);
var a=o&&o.nonce_id?o.nonce_id:t.getAttribute("data-nonceid"),r=o&&o.flag||0,s=o&&o.username?o.username:t.getAttribute("data-username"),d=o&&o.media_type?o.media_type:t.getAttribute("data-mediatype"),c=o&&o.export_id;
0===r&&p(n,a,s,d,c);
}
}
function v(){
for(var e=document.getElementsByClassName("js_wechannel_img_card"),t=function(t){
var n=e[t];
z.on(n,"tap",function(){
_(n);
}),O.addAppmsgCardTouchEvent(n);
},n=0;n<e.length;n++)t(n);
}
function g(){
for(var e=document.getElementsByClassName("js_wechannel_video_card"),t=function(t){
var n=e[t];
z.on(n,"tap",function(){
_(n);
}),O.addAppmsgCardTouchEvent(n);
},n=0;n<e.length;n++)t(n);
}
function f(e){
var t=m(e);
t&&t.length>0&&(t=t[0]);
var n=t.status,i=t.reservation;
return 0===n?0===i?1:2:1===n?5:2===n?3:3===n?4:1;
}
function h(){
for(var e=document.getElementsByClassName("js_wechannel_live_card"),t=function(e){
var t=e.currentTarget,n=t.getAttribute("data-username"),i=t.getAttribute("data-noticeid");
V.report(5,i,n,f(i)),Q=f(i),u(n);
},n=0;n<e.length;n++){
var i=e[n];
z.on(i,"tap",t),O.addAppmsgCardTouchEvent(i,".js_channel_btn_operation");
}
}
function b(e,t,n){
return N.is_wxwork||!N.isWechat?void window.weui.alert("请在微信内操作"):void q({
url:"/mp/appmsg_video_snap?action=reserve_live",
type:"POST",
dataType:"json",
async:!0,
data:{
username:e,
notice_id:t,
reserve_status:n
},
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret){
for(var i=document.querySelectorAll('.js_channel_btn_operation[data-noticeid="'+t+'"]'),o=0;o<i.length;o++){
var a=i[o];
a.setAttribute("data-reservation",1===n?1:0),a.querySelector(".js_channel_btn_operation_wording").innerHTML=1===n?"已预约":"预约",
1===n?L.addClass(a,"weui-btn_disabled"):L.removeClass(a,"weui-btn_disabled");
}
var r=m(t);
r&&r.length>0&&r.forEach(function(e){
e.reservation=1===n?1:0;
});
}else window.weui.alert("系统繁忙，请稍后再试");
},
error:function(){
window.weui.alert("操作失败");
}
});
}
function y(){
for(var e=document.getElementsByClassName("js_channel_btn_operation"),t=function(e){
var t=e.currentTarget,n=t.getAttribute("data-noticeid"),i=t.getAttribute("data-username"),o="";
return J instanceof Array&&J.forEach(function(e){
e.notice_id===n&&(o=e.export_id);
}),V.report(4,n,i,f(n)),Q=f(n),l(i,o),!1;
},n=function(n){
var i=e[n],o=parseInt(i.getAttribute("data-status"),10);
2===o?z.on(i,"tap",t):0===o&&z.on(i,"tap",function(){
if(window.is_temp_url)return window.weui.alert("预览状态下无法操作"),!1;
var e=i.getAttribute("data-noticeid"),t=i.getAttribute("data-reservation"),n=i.getAttribute("data-username");
return"0"===t?V.report(2,e,n,f(e)):V.report(3,e,n,f(e)),b(n,e,"0"===t?1:2,i),!1;
});
},i=0;i<e.length;i++)n(i);
}
function j(){
if(P&&P.length&&G.length===P.length)return void z.off(window,"scroll",j);
for(var e=0;e<P.length;e++){
var t=P[e],n=t.firstChild;
if(n&&n.getBoundingClientRect().top>0&&n.getBoundingClientRect().top+n.getBoundingClientRect().height/2<=M.getInnerHeight()){
var i=t.getAttribute("data-id")||t.getAttribute("data-noticeid"),o=t.getAttribute("data-username"),a=t.getAttribute("data-type");
-1===G.indexOf(i)&&(G.push(i),"live"===a?V.report(1,i,o,f(i)):d(1,i,o));
}
}
}
function A(e,t,n,i){
for(var o=document.querySelectorAll('.js_wechannel_live_card[data-noticeid="'+e+'"]'),a=0;a<o.length;a++){
var r=o[a],s=r.querySelector('.js_channel_btn_operation[data-noticeid="'+e+'"]'),d=R.getStatusWording(t,n),c=R.getStatusDesc(i,t);
s&&(s.querySelector(".js_channel_btn_operation_wording").innerHTML=d,s.setAttribute("data-reservation",n),
s.setAttribute("data-status",t),r.querySelector(".js_wechannel_live_desc").innerHTML=c,
0!==t&&2!==t||0!==n?L.addClass(s,"weui-btn_disabled"):L.removeClass(s,"weui-btn_disabled"),
s.querySelector(".js_wechannnel_live").style.display=2===t?"block":"none");
}
}
function I(){
for(var e={
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
uin:window.uin||"",
key:window.key||"",
pass_ticket:window.pass_ticket||"",
video_snap_num:J.length
},t=0;t<J.length;t++){
var n=J[t].notice_id,i=J[t].username;
e["notice_id_"+t]=n,e["username_"+t]=i;
}
var o="/mp/appmsg_video_snap?action=batch_get_flag_info";
for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(o+="&"+a+"="+encodeURIComponent(e[a]));
q({
url:o,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret&&e.live_info&&e.live_info.length>0)for(var t=0;t<e.live_info.length;t++){
var n=e.live_info[t],i=m(n.notice_id);
if(i&&i.length>0){
var o=i[0];
(n.status!==o.status||n.reservation!==o.reservation)&&(o.reservation=n.reservation,
o.status=n.status,A(n.notice_id,n.status,n.reservation,o.start_time));
}
}
},
error:function(){}
});
}
function x(){
z.bindVisibilityChangeEvt(function(e){
e&&I();
});
}
function S(){
v(),g(),y(),h(),x(),z.on(window,"scroll",j);
}
function k(){
var e=document.getElementById("js_content");
if(e){
P=e.getElementsByTagName("mpvideosnap")||[];
for(var t=0;t<P.length;t++){
var n=P[t],i=n.getAttribute("data-id")||n.getAttribute("data-noticeid")||"",o=n.getAttribute("data-type")||"video",a=void 0;
if("live"===o){
var r=n.getAttribute("data-noticeid")||"",s=m(r),d=s.length>0?s[0]:{};
a={
snapType:"live",
headImgUrl:d.head_url||n.getAttribute("data-headimgurl")||"",
nickname:d.nickname||n.getAttribute("data-nickname")||"",
desc:R.getStatusDesc(d.start_time,d.status)||n.getAttribute("data-desc")||"",
reservation:d.reservation||0,
status:d.status||0,
username:d.username||n.getAttribute("data-username")||"",
noticeid:d.notice_id||n.getAttribute("data-noticeid")||"",
liveWording:R.getStatusWording(d.status||0,d.reservation||0),
flag:1===d.spam_flag||2===d.spam_flag?1:0
},K.push({
noticeid:d.notice_id||n.getAttribute("data-noticeid")||"",
status:d.status||0
});
}else{
var s=w(i),c=s.length>0?s[0]:{},u=4===c.media_type||9===c.media_type?"video":"image";
a={
snapType:c&&c.media_type?u:n.getAttribute("data-type"),
url:c.feed_cover_url||c.feed_thumb_url||n.getAttribute("data-url")||"",
headImgUrl:c.head_url||n.getAttribute("data-headimgurl")||"",
nickname:c.nickname||n.getAttribute("data-nickname")||"",
desc:c.feed_desc||n.getAttribute("data-desc")||"",
flag:c.flag||0
},"image"===a.snapType&&(a=_extends(a,{
imgCount:parseInt(c.media_num||"0",10)||parseInt(n.getAttribute("data-imgcount")||"0",10)||0
}));
}
var l=document.createElement("div");
l.innerHTML=T.tmpl(U,a),l.firstElementChild&&n.appendChild(l.firstElementChild);
var p=document.querySelector('[data-preloadingid="'+i+'"]');
p&&n.parentNode.removeChild(p);
}
j(),S();
}
}
function E(){
var e=[];
try{
e=JSON.parse(window.video_snap_json).list;
}catch(t){
console.log(t);
}
for(var n={},i={
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
uin:window.uin||"",
key:window.key||"",
pass_ticket:window.pass_ticket||""
},o=0;o<e.length;o++){
var a=e[o].export_id||e[o].notice_id,r=e[o].username;
n[a]?n[a].push(o):(n[a]=[o],e[o].export_id?i["exportid_"+o]=a:e[o].notice_id&&(i["notice_id_"+o]=a),
i["username_"+o]=r);
}
i.video_snap_num=Object.keys(n).length;
var s="/mp/appmsg_video_snap?action=batch_get_video_snap";
for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(s+="&"+d+"="+encodeURIComponent(i[d]));
q({
url:s,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
e&&e.base_resp&&0===e.base_resp.ret&&(H=e.video_snap_info||[],J=e.live_info||[]),
k();
},
error:function(){
k();
}
});
}
function C(){
E();
}
var T=e("biz_common/tmpl.js"),z=e("biz_common/dom/event.js"),W=e("biz_wap/jsapi/core.js"),O=e("appmsg/appmsg_card.js"),U=e("appmsg/channel/video_snap_tpl.html.js"),q=e("biz_wap/utils/ajax.js"),N=e("biz_wap/utils/mmversion.js"),F=e("biz_wap/utils/device.js"),B=e("pages/utils.js"),M=e("common/utils.js"),D=e("common/comm_report.js"),R=e("appmsg/channel/time_format.js"),V=e("appmsg/channel/report_live.js"),L=e("biz_common/dom/class.js"),P=[],H=[],J=[],G=[],K=[],Q=1,X=0;
try{
X=1*window.atob(window.biz);
}catch(Y){}
C();
});var _extends=Object.assign||function(e){
for(var n=1;n<arguments.length;n++){
var t=arguments[n];
for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);
}
return e;
};
define("question_answer/appmsg.js",["biz_common/utils/string/html.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","pages/utils.js","biz_common/tmpl.js","question_answer/qa_card.html.js","question_answer/answer_item.html.js","question_answer/reply_item.html.js","question_answer/write_answer_reply.html.js","biz_common/utils/url/parse.js","biz_common/dom/class.js","pages/mod/bottom_modal.js","appmsg/emotion/emotion.js","appmsg/emotion/dom.js","common/comm_report.js","biz_wap/utils/device.js","common/utils.js","biz_common/dom/offset.js","biz_wap/utils/wapsdk.js"],function(e){
"use strict";
function n(e,n){
var t=arguments.length<=2||void 0===arguments[2]?0:arguments[2];
return e.getElementsByClassName(n)[t];
}
function t(e){
var n=void 0;
if(window.qnaCardData)try{
n=JSON.parse(window.qnaCardData);
var t=n.list;
if(t&&t.length)for(var s=0;s<t.length;s++)if(e===t[s].question_id)return t[s].qna_sn;
}catch(a){
console.error(a);
}
return"";
}
function s(e){
e&&(e.style.display="none");
}
function a(e){
e&&(e.style.display="block");
}
function o(e,n){
Q.jsmonitor({
id:223326,
key:e,
value:n
});
}
function i(){
window.weui.topTips("系统错误，请稍后再试");
}
function r(){
return A.os.ios?1:A.os.android?2:-1;
}
function l(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
R.report(20883,_extends({
Device:r(),
MsgId:1*fn.mid,
ItemIdx:1*fn.idx,
BizUin:$.biz,
ItemShowType:1*$.itemShowType,
SessionId:$.sessionId,
EnterId:1*$.enterId,
Scene:1*$.scene,
SubScene:1*$.subScene,
QaId:J.dataset.id
},e));
}
function _(e,n,t){
var s={
replyListHtml:"",
replyList:document.createDocumentFragment()
};
return e&&e.reply_list&&e.reply_list.length&&(s.leftReplyCount=e.left_reply_cnt,
s.leftReplyTips="余下%s条回复".replace("%s",e.left_reply_cnt),e.reply_list.forEach(function(e){
e.canOp=t,e.content=e.content.htmlEncode(),e.content=U.encode(e.content),e.likeNumFormated=H.formatReadNum(e.like_num),
e.replyStatus=void 0===e.reply_status?1:e.reply_status,e.isLogin=G;
var n=document.createElement("div");
n.innerHTML=k.tmpl(x,e,!1),s.replyListHtml+=n.innerHTML,s.replyList.appendChild(n.firstChild);
})),s;
}
function d(e,n){
var t=arguments.length<=2||void 0===arguments[2]?"":arguments[2],s={
answerListHtml:"",
fragment:document.createDocumentFragment()
};
return e.forEach(function(e){
e.likeNumFormated=H.formatReadNum(e.like_num),e.canOp=n,e.answer_sn=e.answer_sn||"",
e.content=e.content.htmlEncode(),e.oriContent=e.content,e.content=U.encode(e.content),
e.isLogin=G;
var a=_(e.reply_info,e.answer_id,n,t);
_extends(e,a);
var o=document.createElement("div");
o.innerHTML=k.tmpl(B,e,!1),s.answerListHtml+=o.innerHTML,s.fragment.appendChild(o.firstChild);
}),t===cn?nn+=_n:t===dn&&(en+=_n),s;
}
function c(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=_extends({
action:e.action,
limit:_n,
offset:e.offset
},fn);
E({
url:P.join("/mp/qna",n),
dataType:"json",
success:function(n){
var t=void 0;
n&&(t=n.qna_info?n.qna_info.answer_info:n.answer_info,e.successCb(t,n));
},
complete:function(){
e.complete&&e.complete();
}
});
}
function p(e,n){
for(var t=0;e.offsetParent&&e!==n;)t+=e.offsetTop,e=e.offsetParent;
return t;
}
function m(e,t,a){
var o=e.dataset.answerid,i=a?p(e,V.getScrollEle()):0;
E({
url:P.join("/mp/qna",_extends({
action:"get_more_reply",
answer_id:o,
answer_sn:e.dataset.answersn,
limit:10
},fn)),
dataType:"json",
success:function(r){
if(r&&r.reply_info&&r.reply_info.reply_list&&r.reply_info.reply_list.length){
var l=_(r.reply_info,o,!0,t);
l.replyListHtml?(n(e.parentNode,"js_qa_reply_list").appendChild(l.replyList),l.leftReplyCount?e.innerHTML=l.leftReplyTips:s(e),
a&&V.scrollTo(0,i-48)):s(e);
}
}
});
}
function u(e){
var t=n(X,"js_get_more_reply_"+e);
t&&m(t,dn,!0);
}
function f(){
S.on(X,"tap",".js_get_more_reply",function(e){
var n=e.delegatedTarget;
m(n,dn);
});
}
function w(){
return n(Z,"js_qa_input");
}
function y(){
var e=w();
return(e.value||e.innerHTML).trim();
}
function g(){
y()?Y.enableBtn():Y.disableBtn();
}
function v(){
var e=w();
S.on(Z,"tap",".js_get_more_reply",function(e){
var n=e.delegatedTarget;
m(n,cn);
}),S.on(e,"input",g),S.on(e,"tap",function(){
Y.scrollTo(0,0);
});
}
function j(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
c({
action:e.action,
offset:e.offset,
successCb:function(t,s){
if(t&&t.answer_list&&t.answer_list.length){
var o=void 0,i=void 0;
"get_my_answer"===e.action?(o=cn,i=Z,a(n(Z,"js_qa_write_head"))):(o=dn,i=X);
var r=n(i,"js_qa_qna_answer_list");
r.appendChild(d(t.answer_list,!0,o).fragment);
}
e.cb&&e.cb(t,s);
}
});
}
function b(){
if(Z){
var e="回复: %s".replace("%s",U.encode(ln)),t=n(Z,"js_reply_top_content");
sn?(t.innerHTML=e,a(t)):s(t);
}
}
function h(e){
n(Z,"js_alert_toast_word").innerHTML=e,a(n(Z,"js_alert_toast")),setTimeout(function(){
s(n(Z,"js_alert_toast"));
},800);
}
function q(){
for(var e=0,n=X.getElementsByClassName("js_qa_list_item"),t=0;t<n.length&&n[t].getBoundingClientRect().y<F.getInnerHeight();t++)e++;
e>tn&&(tn=e);
}
function T(e,t){
if(V)return V.show(),void(e&&t&&u(t));
var a=void 0;
X=J.firstChild.cloneNode(!0);
var o=n(X,"qa__list-more"),i=n(X,"js_qa_write_answer");
o&&s(o),i&&M.addClass(i,mn),n(X,"js_qa_qna_answer_list").innerHTML="",V=new O(X,{
title:"读者讨论",
extClass:"qa__card",
onPullUpLoad:function(){
a>0&&(V.showPullUpLoading(),j({
action:"get_more_answer",
offset:en,
cb:function(e,n){
V.hidePullUpLoading(),e.left_answer_cnt||0!==n.base_resp.ret?V.finishPullUpLoad():V.showEndLine();
}
}));
},
cb:function(){
j({
action:"get_more_answer",
offset:en,
cb:function(s){
if(e&&t)u(t);else{
var o=K.dataset.count,i=n(X,"js_qa_list_item",o),r=p(i,V.getScrollEle());
V.scrollTo(0,r-96);
}
a=s.left_answer_cnt,a||V.showEndLine();
}
});
},
onScroll:function(){
q();
},
onHide:function(){
q(),l({
EventType:3,
Exposure:tn
}),tn=0;
}
}),V.show(),f();
}
function L(e){
var t=void 0,o=sn?"写回复":"参与讨论";
return Y?(b(),Y.setTitle(o),Y.setCloseBtnStyle(e?"back":"close"),void Y.show(!0,w())):(Z=document.createElement("div"),
Z.innerHTML=k.tmpl(I,{}),Y=new O(Z,{
title:o,
top:un,
extClass:"qa__card qa__card_write",
hasBtn:!0,
disableTransition:!0,
innerScrollList:[w()],
onPullUpLoad:function(){
t>0&&(Y.showPullUpLoading(),j({
action:"get_my_answer",
offset:nn,
cb:function(e,n){
Y.hidePullUpLoading(),e.left_answer_cnt||0!==n.base_resp.ret?Y.finishPullUpLoad():Y.showEndLine();
}
}));
},
onHide:function(){
w().blur();
},
onScroll:function(e){
"up"===e&&w().blur();
},
cb:function(){
j({
action:"get_my_answer",
offset:nn,
cb:function(e){
t=e.left_answer_cnt,t||Y.showEndLine();
}
});
},
btnClickCb:function(){
Y.disableBtn();
var e=sn?"add_reply":"add_answer";
a(n(Z,"js_loading_toast")),E({
url:"/mp/qna?action="+e,
type:"POST",
dataType:"json",
data:_extends({
answer_id:on,
answer_sn:rn,
content:y(),
my_reply_cnt:an+1,
ignore_tips:1
},fn),
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret){
if(a(n(Z,"js_sended_toast")),setTimeout(function(){
s(n(Z,"js_sended_toast"));
},800),w().value="",Y.disableBtn(),sn&&e.reply_info&&e.reply_info.reply_list){
var t=_(e.reply_info,on,!0).replyList,o=n(Z,"js_qa_reply_list_"+on);
o.appendChild(t.cloneNode(!0)),a(n(o.parentNode,"js_write_reply")),s(n(o.parentNode.parentNode,"js_write_reply"));
}else if(!sn&&e.answer_info&&e.answer_info.answer_list){
var r=n(Z,"js_qa_qna_answer_list");
r.insertBefore(d(e.answer_info.answer_list,!0).fragment,r.firstChild),a(n(Z,"js_qa_write_head"));
}
}else Y.enableBtn(),168003===e.base_resp.ret||168007===e.base_resp.ret?h("内容涉嫌违反平台协议或法规政策"):168004===e.base_resp.ret?h("关注该公众号才能参与讨论"):168005===e.base_resp.ret?h("关注该公众号3天及以上才能参与讨论"):168008===e.base_resp.ret||168009===e.base_resp.ret?h("字数不能多于"+(sn?140:600)):i();
},
error:function(){
i(),Y.enableBtn();
},
complete:function(){
s(n(Z,"js_loading_toast")),w().blur();
}
});
},
makeFakeInputEle:function(){
var e=w(),n=e.cloneNode();
n.id="tmp_input",n.style.top=0,n.style.position="absolute",e.parentNode.insertBefore(n,e),
n.value=e.value,n.scrollTop=e.scrollTop;
},
removeInputEle:function(){
var e=document.getElementById("tmp_input");
e&&e.parentNode.removeChild(e);
},
makeInputEleBigger:function(){
var e=w(),n="1000px";
e.style.borderTop="solid "+n+" transparent",e.style.position="relative",e.style.top="-"+n;
}
}),b(),Y.disableBtn(),Y.setCloseBtnStyle(e?"back":"close"),Y.show(!0,w()),v(),void new U.Emotion({
emotionPanel:D("#js_qa_emotion_panel"),
inputArea:D(w()),
emotionPanelArrowWrp:D("#js_qa_emotion_panel_arrow_wrp"),
emotionSwitcher:D("#js_qa_emotion_switch"),
emotionSlideWrapper:D("#js_qa_emotion_slide_wrapper"),
emotionNavBar:D("#js_qa_emotion_navbar"),
inputEmotion:function(){
g();
}
}));
}
function C(){
function e(){
if(!t){
var e=J.firstChild,n=W.getOffset(e).offsetTop,s=F.getScrollTop();
s+F.getInnerHeight()>=n&&s<=n+e.offsetHeight&&(l({
EventType:1
}),o("0"),t=!0);
}
}
var t=void 0;
S.on(J,"tap",".js_get_more_reply",function(e){
var n=e.delegatedTarget,t=n.dataset.answerid;
wn[t]?T():(T(!0,t),wn[t]=!0);
}),S.on(document.body,"click",".js_qa_write_answer",function(e){
sn=!1,L(M.hasClass(e.delegatedTarget,mn)),o(2);
}),S.on(document.body,"click",".js_write_reply",function(e){
var t=e.delegatedTarget,s=t.parentNode.parentNode;
if(on=t.dataset.answerid,rn=t.dataset.answersn,s){
var a=s.getElementsByClassName("js_qa_reply_content");
an=s.getElementsByClassName("js_qa_my_reply").length,ln=a.length?a[a.length-1].innerHTML:n(s,"js_qa_item_content").innerHTML;
}
sn=on,sn&&(L(!0),o(3));
}),S.on(K,"click",function(){
T(),l({
EventType:2
}),o(1);
}),S.on(document.body,"tap",".js_qa_like",function(e){
var t=e.delegatedTarget,s=M.hasClass(t,pn);
M.toggleClass(t,pn);
var a=n(t,"js_like_num"),i=parseInt(a.dataset.num,10)||0,r=i+(s?-1:1);
r=r>=0?r:0,a.innerHTML=H.formatReadNum(r),a.dataset.num=r,o("2"===t.dataset.type?6:5),
E({
url:"/mp/qna?action=like",
type:"POST",
data:_extends({
like_type:t.dataset.type,
op:s?2:1,
answer_id:t.dataset.id,
reply_id:t.dataset.id
},fn)
});
}),S.on(document.body,"tap",".js_delete_answer",function(e){
var n=e.delegatedTarget;
o(7),setTimeout(function(){
window.weui.confirm("确定删除讨论内容吗？",{
buttons:[{
label:"取消",
type:"default"
},{
label:"删除",
type:"primary",
onClick:function(){
E({
url:"/mp/qna?action=del_answer",
type:"POST",
dataType:"json",
data:_extends({
answer_id:n.dataset.id
},fn),
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret){
var t=n.parentNode.parentNode.parentNode.parentNode;
t&&M.hasClass(t,"js_qa_list_item")&&t.parentNode.removeChild(t);
}else i();
}
});
}
}]
});
},50);
}),S.on(document.body,"tap",".js_delete_reply",function(e){
var t=e.delegatedTarget;
o(8),setTimeout(function(){
window.weui.confirm("确定删除回复吗？",{
buttons:[{
label:"取消",
type:"default"
},{
label:"删除",
type:"primary",
onClick:function(){
E({
url:"/mp/qna?action=del_reply",
type:"POST",
dataType:"json",
data:_extends({
reply_id:t.dataset.id
},fn),
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret){
var o=t.parentNode.parentNode.parentNode;
if(o&&M.hasClass(o,"js_qa_reply_item")){
var r=o.parentNode;
r.removeChild(o),r.children.length||(s(r.parentNode),s(n(r.parentNode,"js_write_reply")),
a(n(r.parentNode.parentNode,"js_write_reply")));
}
}else i();
}
});
}
}]
});
},50);
}),F.bindDebounceScrollEvent(e),e();
}
function N(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
fn.mid=e.mid,fn.idx=e.idx,$.userUin=e.userUin,$.biz=e.biz,$.itemShowType=e.itemShowType,
$.enterId=e.enterId,$.scene=e.scene,$.subScene=e.subScene,$.sessionId=e.sessionId,
G=e.isLogin,c({
action:"get_qna_info",
successCb:function(e,t){
var s=void 0,a=void 0,i=void 0,r=void 0,l=t.base_resp.ret,_=168001===l,c=t.qna_info&&t.qna_info.question_info;
return _?void(J.innerHTML=k.tmpl(z,{
qaDeleted:_
})):void(0===l&&("1"===P.getQuery("js_my_answer")&&(L(),o(4)),e&&e.answer_list&&e.answer_list.length&&(i=d(e.answer_list,!1).answerListHtml,
a=e.answer_list.length,e.left_answer_cnt&&(s="余下%s条讨论内容".replace("%s",e.left_answer_cnt))),
1===c.can_answer_type&&0===t.qna_info.is_fans?r="作者已设置关注后才可参与讨论":2===c.can_answer_type&&0===t.qna_info.is_fans_days&&(r="作者已设置关注3天后才可参与讨论"),
J.innerHTML=k.tmpl(z,{
qaDeleted:_,
answerCount:a,
leftAnswerCnt:s,
answerListStr:i,
disableAnswerWord:r,
title:U.encode(c.question_title.htmlEncode()),
nickname:c.biz_info.nickname,
isLogin:G
}),K=n(J,"js_more_answer_entry"),C()));
}
});
}
e("biz_common/utils/string/html.js");
var E=e("biz_wap/utils/ajax.js"),S=e("biz_common/dom/event.js"),H=e("pages/utils.js"),k=e("biz_common/tmpl.js"),z=e("question_answer/qa_card.html.js"),B=e("question_answer/answer_item.html.js"),x=e("question_answer/reply_item.html.js"),I=e("question_answer/write_answer_reply.html.js"),P=e("biz_common/utils/url/parse.js"),M=e("biz_common/dom/class.js"),O=e("pages/mod/bottom_modal.js"),U=e("appmsg/emotion/emotion.js"),D=e("appmsg/emotion/dom.js"),R=e("common/comm_report.js"),A=e("biz_wap/utils/device.js"),F=e("common/utils.js"),W=e("biz_common/dom/offset.js"),Q=e("biz_wap/utils/wapsdk.js"),J=document.getElementsByTagName("mp-qa")[0];
if(!J)return{};
var G=void 0,K=void 0,V=void 0,X=void 0,Y=void 0,Z=void 0,$={},en=0,nn=0,tn=0,sn=void 0,an=void 0,on=void 0,rn=void 0,ln="",_n=10,dn="answerList",cn="myAnswerList",pn="praised",mn="modalWriteAnswerClass",un="25px",fn={
__biz:J.dataset.bizuin,
question_id:J.dataset.id,
qna_sn:t(J.dataset.id)
},wn={};
return{
renderQaCard:N
};
});function _toConsumableArray(e){
if(Array.isArray(e)){
for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];
return n;
}
return Array.from(e);
}
define("appmsg/weapp.js",["biz_common/utils/string/html.js","pages/weapp_tpl.html.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/tmpl.js","biz_common/dom/class.js","biz_wap/utils/device.js","appmsg/weapp_common.js","common/utils.js","biz_wap/utils/mmversion.js","biz_common/base64.js","appmsg/popup_report.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function t(e,t,n){
var o=new Image;
o.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=106&content="+n+",biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(t.toString())+"&r="+Math.random()).substr(0,1024);
}
function n(e,t,n,o,i,a,p){
y({
url:"/mp/appmsgreport?action=appmsg_weapp_report",
data:{
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
weapp_appid:e||"",
weapp_pos:t||0,
weapp_title:o||0,
weapp_nickname:n||0,
type:i||0,
scene:window.source||-1,
weapp_type:a,
is_confirm:p||0,
ascene:window.ascene||-1
},
type:"POST",
dataType:"json",
async:!0,
success:function(){}
});
}
function o(e){
var t=e.innerHTML,n=/<img.*src=[\'\"]/,o=/background-image:(\s*)url\(/,i=/background:[^;"']+url\(/;
return n.test(t)||o.test(t)||i.test(t)?!0:!1;
}
function i(){
return!0;
}
function a(){
var e=c("js_content");
if(!e)return!1;
R=e.getElementsByTagName("mp-weapp")||[],z=e.getElementsByTagName("mp-miniprogram")||[],
x=[];
for(var t=e.getElementsByTagName("a"),n=0,o=t.length;o>n;n++){
var i=t[n],a=i.getAttribute("data-miniprogram-appid");
a&&x.push(i);
}
return R.length<=0&&z.length<=0&&0==x.length?!1:B&&0!=B.length?!0:(window.__addIdKeyReport&&window.__addIdKeyReport("27613","52",1),
!1);
}
function p(e){
return e=e||"",e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function r(e,t,o,i,a){
n(e,t,o,i,4,a),window.__addIdKeyReport&&window.__addIdKeyReport("28307",103);
}
function s(e,t,o,i,a){
n(e,t,o,i,5,a);
}
function d(){
function e(e){
e.preventDefault();
}
function a(e){
e&&(l=setTimeout(function(){
e.style.display="none",c=-1;
},100));
}
window.reportWeappid=[];
for(var d=0;d<B.length;d++)window.reportWeappid.push(B[d].appid);
var m=function(){};
h.on(document.getElementById("js_minipro_dialog_ok"),"click",function(t){
t.stopPropagation(),t.preventDefault(),document.querySelector("body").removeEventListener("touchmove",e);
var n=document.getElementById("js_minipro_dialog");
m&&m(),document.getElementById("js_minipro_dialog").style.display="none",C.report([4,1,"",img_popup?1:0,window.source,n._appid]);
}),h.on(document.getElementById("js_minipro_dialog_cancel"),"click",function(t){
t.stopPropagation(),t.preventDefault(),document.querySelector("body").removeEventListener("touchmove",e);
var o=document.getElementById("js_minipro_dialog");
o.style.display="none",n(o._appid,o._i,o._nickname,o._title,3,1,1),window.__addIdKeyReport&&window.__addIdKeyReport("28307",116),
C.report([3,1,"",img_popup?1:0,window.source,o._appid]);
});
var l,c,y=j.os.pc,E=document.getElementById("js_pc_weapp_code"),R=document.getElementById("js_pc_weapp_code_img"),z=document.getElementById("js_pc_weapp_code_des");
y&&(h.on(E,"mouseenter",function(){
clearTimeout(l);
}),h.on(E,"mouseleave",function(){
a(E);
})),I.getAppidInfo({
onSuccess:function(j){
console.log("WeappCommon.getAppidInfo onsuccess");
var x=j.data.infoMap;
if(!x)return void(window.__addIdKeyReport&&window.__addIdKeyReport("27613","52",1));
for(d=0;d<K.length;d++)(function(d){
window.__addIdKeyReport("111535",1);
var k=K[d].appid,A=K[d].path,B=K[d].imageUrl,T=K[d].title,N=K[d].elem,q=x[k];
if(!q)return void(window.__addIdKeyReport&&window.__addIdKeyReport("27613","52",1));
var S=N.tagName.toLowerCase(),W=N.firstChild&&1==N.firstChild.nodeType&&"IMG"===N.firstChild.tagName;
if(W=W||N.firstElementChild&&"IMG"===N.firstElementChild.tagName,"a"!=S)N.innerHTML=v.tmpl(w,{
imageUrl:p(B),
title:p(T),
nickname:p(q.nickname),
avatar:p(q.logo_url)
},!1);else{
if(W){
var L=N.firstChild;
L&&b.addClass(N,"weapp_image_link");
}else b.addClass(N,"weapp_text_link");
N.setAttribute("href","");
}
if(j.resp&&j.resp.weapp_info&&j.resp.weapp_info.length)for(var U=0;U<j.resp.weapp_info.length;U++){
var M=N.getElementsByClassName("guarantee_icon")[0];
if(j.resp.weapp_info[U].weapp_appid===k&&1===j.resp.weapp_info[U].has_guarantee_flag){
M&&b.addClass(M,"show");
break;
}
}
h.on(N,"tap",function(){
if(m=function(){
var e=W?1:"a"==S?2:0,o=+(window.__weapp_scene__||1058),i="";
switch(e){
case 0:
i=T;
break;

case 1:
i=encodeURIComponent(N.querySelector("img").dataset.src);
break;

case 2:
i=N.innerHTML;
}
return I.jumpUrl({
sceneNote:[encodeURIComponent(location.href),cgiData.user_name||user_name,cgiData.msg_title||msg_title].concat(_toConsumableArray(1058===o?[e,i,A]:[])).join(":"),
appid:k,
path:A,
scene:window.__weapp_scene__||1058,
beforeNonWechatWarn:function(){
s(k,d,q.nickname,T,e);
},
beforeJumpBackupPage:function(){
r(k,d,q.nickname,T,e);
},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",102),
t(107,new Error(e.err_msg),"");
}
}),window.__addIdKeyReport&&window.__addIdKeyReport("28307",100),n(k,d,q.nickname,T,3,e,W?2:0),
W&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",115),!1;
},W&&C.report([2,1,"",img_popup?1:0,window.source,k]),(W||b.hasClass(N,"weapp_text_link")&&(o(N)||i(N)))&&img_popup){
document.getElementById("js_minipro_dialog_head").innerText="即将打开小程序",document.getElementById("js_minipro_dialog_body").innerText=q.nickname;
var a=document.getElementById("js_minipro_dialog");
return a.style.display="block",document.querySelector("body").addEventListener("touchmove",e,{
passive:!1
}),a._appid=k,a._i=d,a._nickname=q.nickname,a._title=T,n(k,d,q.nickname,T,3,1,0),
I.canJumpOnTap&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",114),!1;
}
return m();
},"a"==S),h.on(N,"click",function(e){
e.preventDefault(),e.stopPropagation();
},"a"==S),y&&(h.on(N,"mouseenter",function(){
function e(e){
function t(){
if(!l&&c===d){
E.style.display="block",l=!0;
var e=E.offsetHeight,t=E.offsetWidth;
"a"!=S||W?n>t?(f(E,"right-center"),E.style.left=n-t-m+"px",E.style.top=o+"px"):(f(E),
E.style.top=o+s-e-m+"px",E.style.left=n+r-t-m+"px"):(E.style.left=i>n+r/2-t/2?i+"px":n+r/2+t/2>i+a?i+a-t+"px":n+r/2-t/2+"px",
p>e?(f(E,"down-center"),E.style.top=o-e-m+"px"):(f(E,"up-center"),E.style.top=o+s-m+"px"));
}
}
if(e){
var n=u(N),o=_(W?N.firstElementChild:N),i=u(N.parentNode),a=N.parentNode.offsetWidth,p=N.getBoundingClientRect().top,r=W?N.firstElementChild.offsetWidth:N.offsetWidth,s=W?N.firstElementChild.offsetHeight:N.offsetHeight,m=8,l=!1;
z.innerText=g(q.nickname,48),R.onload=t,R.src=e,(R.complete||R.width)&&t();
}
}
clearTimeout(l),c!==d&&(E.style.display="none",c=d,I.getAppidCode({
appid:k,
path:A
},e));
}),h.on(N,"mouseleave",function(){
a(E);
}));
})(d);
var A=null,B=function(){
A=null;
for(var e=0;e<T.length;e++){
var t=T[e].elem,o=t.tagName.toLowerCase(),i=t.firstChild&&1==t.firstChild.nodeType,a=i?1:"a"==o?2:0,p=T[e].elem.getBoundingClientRect();
if(p.top<k.getInnerHeight()&&p.bottom>0){
setTimeout(function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307",101);
},0);
var r=T[e].appid;
r&&x[r]&&x[r].nickname&&n(r,e,x[r].nickname,T[e].title,2,a),T.splice(e--,1);
}
}
};
B(),h.on(window,"scroll",function(){
A||(A=setTimeout(B,100));
});
},
onError:function(e){
3==e.code&&t(106,e.catchErr,"parsing weapp info error");
}
});
}
function m(){
for(var e=0,t=0;t<z.length+R.length;t++){
var n=t<z.length,o=n?z[t]:R[t-z.length],i=o.getAttribute(n?"data-miniprogram-appid":"data-weapp-appid")||"",a=o.getAttribute(n?"data-miniprogram-path":"data-weapp-path")||"",p=o.getAttribute(n?"data-miniprogram-imageUrl":"data-weapp-imageUrl")||"",r=o.getAttribute(n?"data-miniprogram-title":"data-weapp-title")||"",s=document.createElement("span");
o.setAttribute("class",""),s.setAttribute("class","weapp_display_element js_weapp_display_element"),
s.setAttribute("role","link"),K.push({
appid:i,
path:a,
imageUrl:p,
title:r,
elem:s
}),T.push({
appid:i,
elem:s,
title:r
}),o.parentNode.insertBefore(s,o.nextSibling),l(p)||e++;
}
for(var t=0;t<x.length;t++){
var d=x[t];
K.push({
appid:d.getAttribute("data-miniprogram-appid"),
path:d.getAttribute("data-miniprogram-path")||"",
elem:d
});
}
e>0&&E.setSum(64469,33,e);
}
function l(e){
for(var t,n=[/^http(s)?:\/\/mmbiz\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmbiz\.qlogo\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmsns\.qpic\.cn([\/?].*)*$/i],o=0;t=n[o++];)if(t.test(e))return!0;
return!1;
}
function c(e){
return document.getElementById(e);
}
function u(e){
for(var t=0;e;)t+=e.offsetLeft,e=e.offsetParent;
return t;
}
function _(e){
for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;
return t;
}
function f(e,t){
for(var n=0;3>n;n++)b.removeClass(e,"weui-desktop-popover_pos-up-"+N[n]),b.removeClass(e,"weui-desktop-popover_pos-down-"+N[n]),
b.removeClass(e,"weui-desktop-popover_pos-left-"+q[n]),b.removeClass(e,"weui-desktop-popover_pos-right-"+q[n]);
b.removeClass(e,"weui-desktop-popover_hide-arrow"),t?b.addClass(e,"weui-desktop-popover_pos-"+t):b.addClass(e,"weui-desktop-popover_hide-arrow");
}
function g(e,t){
var n=/[^\x00-\xff]/g;
if(e.replace(n,"**").length>t)for(var o=Math.floor(t/2),i=o,a=e.length;a>i;i++)if(e.substring(0,i).replace(n,"**").length>=t)return e.substring(0,i)+"...";
return e;
}
e("biz_common/utils/string/html.js");
var w=e("pages/weapp_tpl.html.js"),y=e("biz_wap/utils/ajax.js"),h=e("biz_common/dom/event.js"),v=e("biz_common/tmpl.js"),b=e("biz_common/dom/class.js"),j=e("biz_wap/utils/device.js"),I=e("appmsg/weapp_common.js"),k=e("common/utils.js"),C=(e("biz_wap/utils/mmversion.js"),
e("biz_common/base64.js"),e("appmsg/popup_report.js")),E=e("biz_wap/utils/jsmonitor_report.js"),R=null,z=null,x=null,A={},K=[],B=I.appidSnInfo,T=[];
if(a()){
m(),d();
var N=["left","center","right"],q=["top","center","bottom"];
return A;
}
});define("appmsg/weproduct.js",["appmsg/weapp_common.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/url/parse.js","biz_wap/utils/jsmonitor_report.js","common/utils.js"],function(t){
"use strict";
function e(){
if(console.log("weproduct init"),"function"==typeof document.getElementsByClassName){
var t=document.getElementsByClassName("js_product_container");
t&&t.length>0&&(a(t),d.getAppidInfo({
onSuccess:function(e){
g.data=e.data,o(t);
}
})),r();
}
}
function a(t){
try{
for(var e=0,a=t.length;a>e;e++){
var o=t[e];
if(o.className.indexOf("js_list_container")>=0){
var i=o.querySelector("img.js_cover");
if(i){
var r=i.parentNode.getBoundingClientRect();
i.style.setProperty("width",r.width+"px","important"),i.style.setProperty("height",r.height+"px","important"),
i.style.setProperty("background-size","unset","important"),"0"==i.getAttribute("data-fail")?n.call(i):i.getAttribute("data-fail")||(i.lazyLoadOnload=i.lazyLoadOnload||[],
i.lazyLoadOnload.push(n));
}
}
}
}catch(p){}
}
function n(){
var t=this.parentNode;
if(t){
var e=document.createElement("span");
e.className=this.className,e.style.background='url("'+this.src+'") no-repeat center',
t.insertBefore(e,this),t.removeChild(this);
}
}
function o(t){
for(var e=0,a=t.length;a>e;e++)!function(t,e){
s.on(t,"tap",".js_product_loop_content",function(t){
var a=t.delegatedTarget,n=a.getAttribute("data-wxaappid"),o=a.getAttribute("data-wxapath"),i=a.getAttribute("data-pid"),r=a.getAttribute("data-appid"),s=a.querySelector(".cps_inner_info_title").innerHTML;
return d.jumpUrl({
privateExtraData:{
cookies:"cps_package=123456; expires=1538286412; busid=mmbiz_ad_cps; domain=*"
},
sourceAppId:r,
appid:n,
path:o,
scene:1091,
sceneNote:[encodeURIComponent(location.href),user_name,msg_title,encodeURIComponent(i),s,o].join(":"),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(t){
if("openWeApp:ok"===t.err_msg&&i){
var o=a.getAttribute("data-pidtype"),r=2;
2==o&&(r=4),p([{
wxa_appid:n,
pid:i,
type:r,
absolute_order:e+1,
appid:a.getAttribute("data-appid")||"",
templateid:a.getAttribute("data-templateid")||"",
relative_order:1*a.getAttribute("data-order"),
packid:a.getAttribute("data-packid")||""
}]);
}
}
}),!1;
});
}(t[e],e);
var n=document.getElementsByClassName("js_product_loop_content");
if(n&&n.length>0&&m.getInnerHeight()){
for(var e=0;e<n.length;e++)g.pvele.push(n[e]);
i(),s.on(window,"scroll",i);
}
}
function i(){
g.checkInScreenId&&clearTimeout(g.checkInScreenId),g.checkInScreenId=setTimeout(function(){
g.checkInScreenId=null;
for(var t=[],e=0;e<g.pvele.length;e++){
var a=g.pvele[e],n=a.getBoundingClientRect(),o=n.height||n.bottom-n.top;
if(o>0&&n.top<m.getInnerHeight()&&n.bottom>0){
var r=a.getAttribute("data-pid");
if(r){
var d=a.getAttribute("data-pidtype"),c=1;
2==d&&(c=3),t.push({
wxa_appid:a.getAttribute("data-wxaappid"),
pid:r,
type:c,
absolute_order:e+1,
appid:a.getAttribute("data-appid")||"",
templateid:a.getAttribute("data-templateid")||"",
relative_order:1*a.getAttribute("data-order"),
packid:a.getAttribute("data-packid")||""
});
}
g.pvele.splice(e--,1);
}
}
p(t),0==g.pvele.length&&(s.off(window,"scroll",i),i=null);
},100);
}
function r(){
setTimeout(function(){
var t=document.getElementsByClassName("js_product_loop_content").length,e=document.getElementsByClassName("js_product_err_container").length;
u.setSum("64469","15",t+e),u.setSum("64469","16",t),u.setSum("64469","18",e);
},0);
}
function p(t){
if(t&&0!=t.length){
for(var e={
batch_no:l.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
total:t.length
},a=0;a<t.length;a++){
var n=t[a],o=a+1;
for(var i in n)n.hasOwnProperty(i)&&(e[i+""+o]=n[i]);
}
c({
url:"/mp/productreport?",
type:"POST",
data:e,
dataType:"json",
async:!0
});
}
}
var d=t("appmsg/weapp_common.js"),s=t("biz_common/dom/event.js"),c=t("biz_wap/utils/ajax.js"),l=t("biz_common/utils/url/parse.js"),u=t("biz_wap/utils/jsmonitor_report.js"),m=t("common/utils.js"),g={
pvele:[],
checkInScreenId:null,
reportRandom:Math.random()
};
e();
});