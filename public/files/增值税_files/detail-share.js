//myColor is create by Yanghan,Jmrb.com
// writeCookie
function writeCookie(name, value, expires)
{
  var expire = "";
  if(expires != null)
  {
    expire = new Date((new Date()).getTime() + expires * 3600000);
    expire = "; expires=" + expire.toGMTString();
  }
  document.cookie = name + "=" + escape(value) + expire;
}

//readCookie
function readCookie(name)
{
  var cookieValue = "";
  var search = name + "=";
  if(document.cookie.length > 0)
  {
    offset = document.cookie.indexOf(search);
    if (offset != -1)
    {
      offset += search.length;
      end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      cookieValue = unescape(document.cookie.substring(offset, end))
    }
  }
  return cookieValue;
}

//setColor
function setColor(color_val) {
	document.getElementById('myTable').style.backgroundColor = color_val;
    writeCookie("bgColor_cookie", color_val, 24)
}

//getColor
function getColor() {
  myTable.style.backgroundColor = "#FFFFFF";
	var bg_color = readCookie("bgColor_cookie");
	if (bg_color != null) {
    	myTable.style.backgroundColor = bg_color
		//alert(bg_color);
	}
}

//setFontSize
function setFont(size_val) {
	document.getElementById('myFont').style.fontSize = size_val+"px";
	writeCookie("fontSize_cookis", size_val, 24)
}

//getFontSize
function getFontSize() {
	myFont.style.fontSize = "14px";
  var size = readCookie("fontSize_cookis");
	//alert(size);
	if (size != "") {
		myFont.style.fontSize = size+"px";
		}
}

function interceptString(str, len) {
  if(!str || !len) {
    return '';
  }
  //预期计数：中文2字节，英文1字节 
  var a = 0;
  //循环计数 
  var i = 0;
  //临时字串 
  var temp = '';
  for (i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 255) {
      //按照预期计数增加2 
      a += 2;
    } else {
      a++;
    }
    //如果增加计数后长度大于限定长度，就直接返回临时字符串 
    if(a > len) {
	  return temp + "…";
	}
    //将当前内容加到临时字符串 
    temp += str.charAt(i);
  }
  //如果全部是单字节字符，就直接返回源字符串 
  return str;
}

function cleanHtml(html) {
  html = html.replace(/<[^>].*?>/g,"");
  //html = html.replace(/<[^>]+>|\s|\&[a-zA-Z]+\;/g,'')
  return html;
}

function shareToSina(url, title, pic) {
	window.open("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(url) + "&appkey=&title=" + encodeURIComponent(title) + "&pic=" + encodeURIComponent(pic) + "&ralateUid=&language=","_blank");
}

function shareToQQ(url, title ,pic) {
	window.open("http://share.v.t.qq.com/index.php?c=share&a=index&title=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url) + "&appkey=&site=&pic=" + encodeURIComponent(pic), "_blank");
}

function shareToRenren(url, title, pic) {
	window.open("http://share.renren.com/share/buttonshare.do?link=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title), "_blank");
}

function shareToWeixin(url) {
	var qrcode = document.getElementById("_qrcode");
	var iframe = document.getElementById("_qrcode_iframe");
	if (qrcode.style.display == "none") {
		qrcode.style.display = "";
		
		var form = document.createElement("form");
		form.action = "/inc/createQRCode.action";
		form.target = "_qrcode_iframe";
		document.body.appendChild(form);
		
		var input = document.createElement("input");
		input.name = "width";
		input.value = "4";		
		form.appendChild(input);
		
		input = document.createElement("input");
		input.name = "content";
		input.value = url;		
		form.appendChild(input);
		
		form.submit();
		//iframe.src = "/inc/qrCode.action?content=" + encodeURIComponent(url) + "&width=4";
	}
	else qrcode.style.display = "none";
}

function closeQrcode() {
	document.getElementById("_qrcode").style.display = "none";
}