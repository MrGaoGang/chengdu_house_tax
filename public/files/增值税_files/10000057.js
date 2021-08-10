try
{	
	var _$tVersion = '20161011';
	var _Sauthor;
	var _Scount_iframe = true;
	var _Sload_time;
	var _Spage_type;
	var _Spage_pic;
	var _Spage_id;
	var _$tformlist = '';
	var _$tformdetails = {};
	var _$tformfielddetails = {};
	var _$twebsite = _$tpartner_website = '10000057';
	var _Spartner_website_id;
	var _Schannel_website_id;
	var _Schannel_webshop_id;
	var _Spageformjs = false;
	var _Sorder_encode_url;
	var _$tchkdomain = '';
	if (_Scount_iframe === true)
	{
		var _$tdocument = top.window.document;
	}
	else
	{
		var _$tdocument = window.document;
	}
	var _$tdocumentbody = _$tdocument.getElementsByTagName('body')[0];
	var _$tprotocol = _$tdocument.location.protocol;
	var _trackDataType;
	var _trackData = _trackData || [];
	var _$tiserror = 0;
	var _$terrorcode = '';
	var _$tflashid = 'yfx_n_r_u';
	var _$tcounturl = '//10.1.231.85:8025/phpstat/';
	var _$tcounturl_proxy = '//171.221.172.149:8025/phpstat/';
	var _$tmediumsource = _$tmediumsourcefirst = _$tkeywordsource = _$tedmemail = _$tkeywordkey = '';
	var _$tstarttime = _$ttimestart = _$tloadtime = _$tdowntime = _$tgettime = (new Date()).getTime();
	window.onerror =  function(msg, url, line, column) {
		_$terrorcode = "msg["+msg+"]#line["+line+"]#column["+column+"]";
		return true;
    };
	function _$tunicode(s){
	   var len=s.length;
	   var rs=0;
	   for(var i=0;i<len;i++){
			  rs+= parseInt(s.charCodeAt(i)%10);
	   }
	   return rs;
	}
	function _$treadmapcookie(name)
	{
		var cV = end = '';
		var v = name + '=';
		if (_$tdocument.cookie) 
		{
			var p = _$tdocument.cookie.indexOf(v);
			if (p > -1) {
				p += v.length;
				end = _$tdocument.cookie.indexOf(";", p);
				if (end == -1) {end = _$tdocument.cookie.length;};
				cV = _$tdocument.cookie.substring(p, end);
			}
			return cV;
		}
	}
	function _$tsplitdomain(gethost)
	{
		var pattern = new Array();
		var domain  = '';
		var isdomain  = 0;
		var domainlen = 0;
		pattern['.com.cn']	= 4;
		pattern['.net.cn']	= 4;
		pattern['.gov.cn']	= 4;
		pattern['.org.cn']	= 4;
		pattern['.com']	= 3;
		pattern['.net']	= 3;
		pattern['.org']	= 3;
		pattern['.gov']	= 3;
		pattern['.cc']	= 3;
		pattern['.biz']	= 3;
		pattern['.info']= 3;
		pattern['.cn']	= 3;
		pattern['.hk']	= 3;			
		for( var dk in pattern )
		{
			if( gethost.indexOf(dk) > -1 )
			{
				isdomain = 1;
				domainlen = parseInt(pattern[dk]);
				break;
			}
		}
		if( isdomain == 1 )
		{
			var s = gethost.split('.');
			if( s.length >= (domainlen) )
			{
				s[0] = '';
				domain = (s.join('.')).substr(1);
			}
			else
			{
				domain = gethost;
			}
		}
		else
		{
			domain = gethost;
		}
		return domain;
	}
	function _$tgetservercookie(ghostvar,gtype)
	{
		var _$turl = _$tcounturl + '/getcookie.js.php';
		var _$tobj = _$tdocument.createElement('script');
		_$tobj.type = 'text/javascript';
		_$tobj.async = true;
		_$tobj.id = 'getcookie_id';
		_$tobj.charset = 'utf-8';
		var _$tdurl = _$turl + '?website=' + _$twebsite + '&prefix=_$t&jsprefix=yfx_&domain=' + ghostvar + '&type=' + gtype + '&rand=' + Math.random();
		_$tdocument.getElementsByTagName('head').item(0).appendChild(_$tobj);
		_$tdocument.getElementById('getcookie_id').src = _$tdurl;
	}
	(function() {
		var CHARS = '01234567891357924680'.split('');
		Math.uuid = function (len, radix) 
		{
			var chars = CHARS, uuid = [], i;
			radix = radix || chars.length;

			if (len)
			{
				for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random()*radix)];
			}
			return uuid.join('');
		};
	})();
	function _$tflash_cookie()
	{
		var f=0;
		var v=0;
		var swf;
		var ie = _$tuseragent.match(/msie ([\d.]+)/);
		if(ie)
		{
			try {
			swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if(swf) 
			{
				f=1;
				var vs=swf.GetVariable("$version");
				v=parseInt(vs.split(" ")[1].split(",")[0]);
			}
			}
			catch (e) {
			}
		}
		else
		{
			if (navigator.plugins && navigator.plugins.length > 0)
			{
				swf=navigator.plugins["Shockwave Flash"];
				if (swf)
				{
					f=1;
					var ws = swf.description.split(" ");
					for (var i = 0; i < ws.length; ++i)
					{
						if (isNaN(parseInt(ws[i]))) continue;
						v = parseInt(ws[i]);
					}
				}
			}
		}
		return {f:f,v:v};
	}	
	var _$trandomid = _$tstarttime;
	var _$tuseragent = navigator.userAgent.toLowerCase();
	var _$ttelphone = /(nokia|sony|ericsson|moto|samsung|htc|sgh|lg|sharp|philips|panasonic|alcatel|lenovo|iphone|ipod|ipad|blackberry|meizu|android|netfront|symbian|ucweb|windowsce|palm|operamini|openwave|nexusone|playstation|nintendo|symbianos|dangerhiptop|dopod|midp)/.exec(_$tuseragent);
	_$ttelphone = _$ttelphone === null ? '' : _$ttelphone[0];
	var _$tflashok = _$tflash_cookie();
	var _$tphpstat_flash_object;
	function _$tdownloadflash(){

		"use strict";
		var counter = 0;	
		var alpnum = /[^a-z0-9_]/ig;

		window.phpstatCookie = function(config){
			config = config || {};
			var defaults = {
				swf_url: _$tcounturl_proxy+'/cookie/storage.swf',
				namespace: 'namespace_phpstat',
				debug: true,
				timeout: 10,
				onready: null,
				onerror: null
			};
			var key;
			for(key in defaults){
				if(defaults.hasOwnProperty(key)){
					if(!config.hasOwnProperty(key)){
						config[key] = defaults[key];
					}
				}
			}
			function _$tdiv(visible){
				var d = _$tdocument.createElement('div');
					d.id = "phpstat_js_div_id_10000057";
				var s = (_$tfgid('phpstat_js_id_10000057')||_$tfgid('phpstat_js_id')); 
				if (s)
				{				
					d.async = true; 
					s.parentNode.insertBefore(d, s);
				}
				return d;
			}
			var swfContainer = _$tdiv(config.debug);
			config.namespace = config.namespace.replace(alpnum, '_');
			this.config = config;		
			function _$tfid(){
				return "phpstatCookie_" + config.namespace + "_" +  (counter++);
			}
			function _$tfgid(id){
				return _$tdocument.getElementById(id);
			}
			phpstatCookie[config.namespace] = this;
			
			var swfName = _$tfid();
				
			var flashvars = "logfn=phpstatCookie." + config.namespace + ".log&amp;" + 
				"onload=phpstatCookie." + config.namespace + ".onload&amp;" + 
				"onerror=phpstatCookie." + config.namespace + ".onerror&amp;" + 
				"LSOName=" + config.namespace;
				
			swfContainer.innerHTML = '<object height="1" width="1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + 
				swfName + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' +
				'	<param value="' + config.swf_url + '" name="movie">' + 
				'	<param value="' + flashvars + '" name="FlashVars">' +
				'	<param value="always" name="allowScriptAccess">' +
				'	<embed height="1" align="middle" width="1" pluginspage="http://www.macromedia.com/go/getflashplayer" ' +
				'flashvars="' + flashvars + '" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" loop="false" play="true" ' +
				'name="' + swfName + '" bgcolor="#ffffff" src="' + config.swf_url + '">' +
				'</object>';
			
			this.swf = _$tdocument[swfName] || window[swfName];
			
			this._timeout = setTimeout(function(){
				if(config.onerror){
					config.onerror();
				}
			}, config.timeout * 1000);
		};

		phpstatCookie.prototype = {
	  
			version: "1.5",
			ready: false,
			set: function(key, value){
				this._checkReady();
				this.swf.set(key, value);
			},
			get: function(key){
				this._checkReady();
				return this.swf.get(key);
			},
			getAll: function(){
				this._checkReady();
				var data = this.swf.getAll();
				if(data.__flashBugFix){
					delete data.__flashBugFix;
				}
				return data;
			},
			clear: function(key){
				this._checkReady();
				this.swf.clear(key);
			},
			_checkReady: function(){
			},
			"onload": function(){
				var that = this;
				setTimeout(function(){
				  clearTimeout(that._timeout);
				  that.ready = true;
				  that.set('__flashBugFix','1');
				  if(that.config.onready){
					that.config.onready();
				  }
				}, 0);
			},
			onerror: function(){
				clearTimeout(this._timeout);
				if(this.config.onerror){
					this.config.onerror();
				}
			}
			
		};
	}
	var _$tisdownloadflash = 0;
	if(_$tflashok.v >= 88 && _$tdocument.location.hash.toString().indexOf('clickmapcode') <= -1 && typeof(_$tdocumentbody) !== 'undefined' && _$ttelphone === '' && _$treadmapcookie('yfxm') === '')
	{
		_$tisdownloadflash = 1;
	}
	if(_$tisdownloadflash === 1)
	{
		_$tdownloadflash();
	}
	var _$tclienturl = new Array();
	;
	var _$tthehostname = _$tdocument.location.hostname;
	var _$tgetclienthost;
	for (_$tgetclienthost in _$tclienturl) {
		if (_$tgetclienthost == _$tthehostname) {
			_$tcounturl_proxy = _$tclienturl[_$tgetclienthost];
			break
		}
	}
	function _$tphpstat(cookietype,serverclientcookie) {
		var _$tdoimgerr_1 = 1;
		var _$treferrer = _$tdocument.referrer;
		var _$ttitle = _$tdocument.title;
		var _$thashcode = _$tdocument.location.hash;
		var _$tlanguage = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language);
		var _$tcolor = screen.colorDepth;
		var _$tclientwidth = _$tdocument.documentElement.clientWidth;
		var _$tclientheight = _$tdocument.documentElement.clientHeight;
		var _$tscrollheight = _$tdocument.documentElement.scrollHeight;
		var _$tscreensize = screen.width + '*' + screen.height;
		var _$tlastmodify = new Date(_$tdocument.lastModified).getTime();
		var _$tcookie = navigator.cookieEnabled ? 1 : 0;
		var _$tutm_replace = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','utm_id','ca_kid','ca_source'];
		var _$tutm_pmf_replace = ['pmf_group','pmf_medium','pmf_source','pmf_keyword','pmf_advname','pmf_id','pmf_id','pmf_group'];
		var _$tbdu_replace = ['hmsr','hmmd','hmpl','hmci','hmkw','hmid'];
		var _$tbdu_pmf_replace = ['pmf_group','pmf_medium','pmf_source','pmf_keyword','pmf_advname','pmf_id'];
		var _$tsearchkey = ['baidu','google','yahoo','baidu','soso','sogou','youdao','bing','haosou','sm','so'];var _$tkeyword = ['wd','q','p','word','w','query','q','q','q','q','so'];var _$tsearchtype = ['default','default','default','default','default','default','default','default','default','default','default'];var _$tkeywordrelated = ['bs','','','bs','bs','','lq','','','','so'];;
		var _$thostname = _$tdocument.location.hostname + (_$tdocument.location.port.length > 0 ? ':' + _$tdocument.location.port : '');
		var _$thostname_no_port = _$tdocument.location.hostname;
		var _$tcounturl_logcount = _$tcounturl_proxy + '/logcount.php';
		var _$tfirsttime;
		var _$tlasttime;
		var _$tnlasttime;
		var _$tvisittime;
		var _$tf_l_v_ck = 0;
		var _$treturncount;
		var _$tusercookie;
		var _$tsetusercookie;
		var _$tserusercookie;
		var _$tusername;
		var _$tuserid;
		var _$tuserregtime;
		var _$tuserage;
		var _$tusersex;
		var _$tdomain = '';
		var _$trefid = new Array();		
		var _$tf_l_v_time = new Array();	
		var _$tgtd = window._trackData;
		_$trefid['phptag_recom_id'] = '';
		_$tdomain	= _$tgethost(_$thostname_no_port);
		_Sauthor	= _$ttypeof(_Sauthor);
		_Spage_type	= _$ttypeof(_Spage_type);
		_Spage_pic	= _$ttypeof(_Spage_pic);
		_Spage_id	= _$ttypeof(_Spage_id);
		if (typeof(_Sload_time) == 'undefined') {
			_$tdowntime = 0
		} else {
			_$tstarttime = parseInt(_Sload_time);
			_$tdowntime = _$tdowntime - parseInt(_Sload_time)
		}
		_$tfirsttime = _$tgettimestr('f_t_');
		if (_$tfirsttime === '') {
			_$tfirsttime = _$tgettime;
			_$tf_l_v_ck = 1;
		}
			
		if( _$tgtd && _$tgtd.length )
		{
			for(var _$tk in _$tgtd)
			{
				if( !isNaN(_$tk) )
				{
					for(var _$tkk in _$tgtd[_$tk])
					{
						if( _$tgtd[_$tk]['0'] == 'userset' && _$tgtd[_$tk]['1'] == 'userid' && _$tgtd[_$tk]['2'].length )
						{		
							_$tuserid = _$tgtd[_$tk]['2'];
							_$tsetflashcookie('yfx_s_u_id', _$tgtd[_$tk]['2'], 3650, _$tdomain, '');
						}
						if( _$tgtd[_$tk]['0'] == 'userset' && _$tgtd[_$tk]['1'] == 'username' && _$tgtd[_$tk]['2'].length )
						{				
							_$tusername = _$tgtd[_$tk]['2'];	
							_$tsetflashcookie('yfx_s_u_name', _$tgtd[_$tk]['2'], 3650, _$tdomain, '');
						}
						if( _$tgtd[_$tk]['0'] == 'userset' && _$tgtd[_$tk]['1'] == 'age' && _$tgtd[_$tk]['2'].length )
						{					
							_$tuserage = _$tgtd[_$tk]['2'];
							_$tsetflashcookie('yfx_s_u_age', _$tgtd[_$tk]['2'], 3650, _$tdomain, '');
						}
						if( _$tgtd[_$tk]['0'] == 'userset' && _$tgtd[_$tk]['1'] == 'sex' && _$tgtd[_$tk]['2'].length )
						{				
							_$tusersex = _$tgtd[_$tk]['2'];	
							_$tsetflashcookie('yfx_s_u_sex', _$tgtd[_$tk]['2'], 3650, _$tdomain, '');
						}
						if( _$tgtd[_$tk]['0'] == 'userset' && _$tgtd[_$tk]['1'] == 'cookie' && _$tgtd[_$tk]['2'].length )
						{			
							_$tsetusercookie = _$tgtd[_$tk]['2'];		
							_$tsetflashcookie('yfx_s_c_g_u_id', _$tgtd[_$tk]['2'], 3650, _$tdomain, '');
						}
						if( _$tgtd[_$tk]['0'] == 'userregtime' && _$tgtd[_$tk]['1'] == 'regtime' && _$tgtd[_$tk]['2'].length )
						{					
							_$tuserregtime = _$tgtd[_$tk]['2'];	
							_$tsetflashcookie('yfx_s_u_reg', _$tgtd[_$tk]['2'], 3650, _$tdomain, '');
						}
					}
				}
			}
		}
		_$treturncount   = _$tgettimestr('r_c_');
		_$treturncount	= _$treturncount === '' ? 0 : _$treturncount; 
		_$tusername		= _$tusername || (_$treadflashcookie('PHPSTATNULLCOOKIE') ? _$treadflashcookie('PHPSTATNULLCOOKIE') : (_$treadflashcookie('yfx_s_u_name')?_$treadflashcookie('yfx_s_u_name'):_$treadflashcookie('yfx_s_u_id')));	
		_$tuserid		= _$tuserid || (_$treadflashcookie('PHPSTATNULLCOOKIE') ? _$treadflashcookie('PHPSTATNULLCOOKIE') : (_$treadflashcookie('yfx_s_u_id')?_$treadflashcookie('yfx_s_u_id'):_$treadflashcookie('yfx_s_u_name')));	
		_$tuserage		= _$tuserage || (_$treadflashcookie('PHPSTATNULLCOOKIE') ? _$treadflashcookie('PHPSTATNULLCOOKIE') : _$treadflashcookie('yfx_s_u_age'));
		_$tuserregtime	= _$tuserregtime || (_$treadflashcookie('PHPSTATNULLCOOKIE') ? _$treadflashcookie('PHPSTATNULLCOOKIE') : _$treadflashcookie('yfx_s_u_reg'));	
		_$tusersex		= _$tusersex || (_$treadflashcookie('PHPSTATNULLCOOKIE') ? _$treadflashcookie('PHPSTATNULLCOOKIE') : _$treadflashcookie('yfx_s_u_sex'));
		_$tsetusercookie	= _$tsetusercookie || _$treadflashcookie('yfx_s_c_g_u_id');
		_$tusercookie	= _$tsetusercookie || _$treadflashcookie('yfx_c_g_u_id');
		_$tserusercookie	= serverclientcookie || _$treadflashcookie('yfx_c_c_g_u_id');
		if( _$tsetusercookie === '' )
		{
			if (_$tusercookie === '' && _$tserusercookie === '' ) {
				_$tusercookie = _$tunique();
				_$tsetflashcookie('yfx_c_g_u_id', _$tusercookie, 3650, _$tdomain, '');
			}
			if (_$tserusercookie && _$tserusercookie !== _$tusercookie) {
				_$tusercookie = _$tserusercookie;
				_$tsetflashcookie('yfx_c_g_u_id', _$tserusercookie, 3650, _$tdomain, '');
			}
		}
		else if( _$tsetusercookie )
		{
			_$tusercookie = '_ck_'+_$tsetusercookie;
			_$tserusercookie = '_ck_'+_$tsetusercookie;
		}
		_$tlasttime = _$tnlasttime = _$tgettimestr('r_t_');
		if (_$tlasttime === '') {
			_$tlasttime = _$tnlasttime = _$tgettime;
			_$tf_l_v_ck = 1;
		}
		if (_$tgettime - _$tlasttime >= 43200000) {
			_$tnlasttime = _$tgettime;
			_$treturncount++;
			_$tf_l_v_ck = 1;
		} else {
			_$treturncount = _$treturncount
		}
		_$tvisittime = _$tgettimestr('v_t_');
		if (_$tvisittime === '' || (_$tgettime - _$tvisittime) >= 1800000) {
			_$tvisittime = _$tgettime;
			_$tf_l_v_ck = 1;
		}
		if( _$tf_l_v_ck > 0 )
		{
			_$tf_l_v_time['0'] = 'f_t_'+_$tfirsttime;
			_$tf_l_v_time['1'] = 'r_t_'+_$tnlasttime;
			_$tf_l_v_time['2'] = 'v_t_'+_$tvisittime;
			_$tf_l_v_time['3'] = 'r_c_'+_$treturncount;
			_$tsetflashcookie('yfx_f_l_v_t', _$tf_l_v_time.join('__'), 3650, _$tdomain, '');
		}
		_$tvisittime = '_vk' + _$tvisittime;
		function _$tgethost(gethost)
		{
			var _$tpattern = new Array();
			var _$tisdomain  = 0;
			var _$tdomainlen = 0;
			_$tpattern['.com.cn']	= 4;
			_$tpattern['.net.cn']	= 4;
			_$tpattern['.gov.cn']	= 4;
			_$tpattern['.org.cn']	= 4;
			_$tpattern['.com']	= 3;
			_$tpattern['.net']	= 3;
			_$tpattern['.org']	= 3;
			_$tpattern['.gov']	= 3;
			_$tpattern['.cc']	= 3;
			_$tpattern['.biz']	= 3;
			_$tpattern['.info']	= 3;
			_$tpattern['.cn']	= 3;
			_$tpattern['.hk']	= 3;			
			for( var $dk in _$tpattern )
			{
				if( gethost.indexOf($dk) > -1 )
				{
					_$tisdomain = 1;
					_$tdomainlen = parseInt(_$tpattern[$dk]);
					break;
				}
			}
			if( _$tdomain.length <= 0 )
			{
				if( _$tisdomain == 1 )
				{
					var s = gethost.split('.');
					if( s.length >= (_$tdomainlen) )
					{
						s[0] = '';
						_$tdomain = (s.join('.')).substr(1);
					}
					else
					{
						_$tdomain = gethost;
					}
				}
				else
				{
					_$tdomain = gethost;
				}
				return _$tdomain;

			}
			else
			{
				return gethost;
			}
		}
		function _$tgt() {
			return (new Date()).getTime();
		}
		function _$tencode(s){
			return (typeof(encodeURIComponent)=="function")?encodeURIComponent(s):escape(s);
		}
		function _$tdecode(s){
			return (typeof(decodeURIComponent)=="function")?decodeURIComponent(s):unescape(s);
		} 
		function _$tid(id)
		{
			return _$tdocument.getElementById(id);
		}
		function _$tname(name)
		{
			return _$tdocument.getElementsByName(name);
		}
		function _$tunique() {
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			var H = T.getHours();
			var I = T.getMinutes();
			var S = T.getSeconds();
			var MS = T.getMilliseconds();
			Y = Y < 1900 ? Y + 1900 : Y;
			Y = (Y - 2000) <= 0 ? '10' : (Y - 2000);
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			H = H < 10 ? '0'+''+H : H;
			I = I < 10 ? '0'+''+I : I;
			S = S < 10 ? '0'+''+S : S;
			MS = (MS + 999)+'';
			return '_ck'+Y+''+M+''+D+''+H+''+I+''+S+''+MS.substr(0,3)+''+Math.uuid(14,14);
		}
		function _$tgetYMD()
		{
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			Y = Y < 1900 ? Y + 1900 : Y;
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			return Y+'-'+M+'-'+D;
		}
		function _$tgettimestr(id)
		{
			id = id || 'f_t_';	
			var flvt_ret = '';
			var flvt_arr = _$treadflashcookie('yfx_f_l_v_t').split('__');
			for(var vk in flvt_arr)
			{
				var vkv = _$ttypeof(flvt_arr[vk]);
				if(vkv && vkv.indexOf(id) > -1)
				{
					flvt_ret = vkv.replace(id, '');
				}
			}
			return flvt_ret;
		}
		function _$treadflashcookie(name) 
		{
			var cV = fcV = '';
			if ( !_$tphpstat_flash_object && !_$tcookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$tphpstat_flash_object) 
			{
				fcV = _$ttypeof(_$tphpstat_flash_object.get(name));
			}
			if (_$tcookie) 
			{
				cV = _$ttypeof(_$treadcookie(name));
				if( cV !== fcV && fcV )
				{
					cV = fcV;
					_$tsetcookie(name, fcV, 3650, _$tdomain, '');
				}
				if( fcV === '' && cV && _$tphpstat_flash_object )
				{
					_$tsetflashcookie(name, cV, 3650, _$tdomain, '');
				}
			}
			return cV;
		}
		function _$treadcookie(name)
		{
			var cV = end = '';
			var v = 'yfx_cookie_group_'+_$twebsite+'=';
				v = name+'_'+_$twebsite+'=';
			if (_$tcookie) 
			{
				var p = _$tdocument.cookie.indexOf(v);
				if (p > -1) {
					p += v.length;
					end = _$tdocument.cookie.indexOf(";", p);
					if (end == -1) {end = _$tdocument.cookie.length;};
					cV = _$tdecode(_$tdocument.cookie.substring(p, end));
				}
				if( name != 'yfx_get_cookie_group' && 0 )
				cV = _$tgetgroupcookie(cV,name);
				return _$ttypeof(cV);
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$tsetflashcookie(name, gv, h, d, t) 
		{
			if ( !_$tphpstat_flash_object && !_$tcookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$tphpstat_flash_object) {
				_$tphpstat_flash_object.set(name, gv);
			}
			if (_$tcookie)
			{
				_$tsetcookie(name, gv, h, d, t);
			}
		}
		function _$tsetcookie(name, gv, h, d, t) 
		{
			var v = '';
			if (_$tcookie) {
				v = new Date(_$tgt() + parseInt(h)*24*60*60*1000);
				v = '; expires=' + v.toGMTString();
				if( t == '' && 0 )
				{
					gv = _$tsetgroupcookie(name, gv);
					name = 'yfx_cookie_group_'+_$twebsite;
				}
				name = name+'_'+_$twebsite;
				_$tdocument.cookie = name + '=' + _$tencode(gv) + v + ';domain='+d+';path=/;';
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$tgetgroupcookie(jsonname,name)
		{
			var returnstr = '';
			var groupcookie = new Array();
			groupcookie = _$tdecode(jsonname).split('|:|');
			for( var jk in groupcookie )
			{
				var gcs = _$ttypeof(groupcookie[jk]);
				if( gcs.indexOf(name+'=') >= 0 )
				{
					returnstr = gcs.substring((name+'=').length);break;
				}
			}
			return _$ttypeof(returnstr) || '';
		}

		function _$tsetgroupcookie(name,value)
		{
			var jsonname = _$treadcookie('yfx_get_cookie_group') || '';
			if( jsonname.indexOf(name+'=') < 0 )
			{
				jsonname = jsonname + '|:|' + name + '=' + _$ttypeof(value);
			}
			else
			{
				var groupcookie = new Array();
				groupcookie = _$tdecode(jsonname).split('|:|');
				for( var jk in groupcookie )
				{
					groupcookie[jk] = _$ttypeof(groupcookie[jk]);
					if( groupcookie[jk].indexOf(name+'=') >= 0 )
					{
						groupcookie[jk] = name + '=' + _$ttypeof(value);
					}
				}
				jsonname = groupcookie.join('|:|');
			}
			return jsonname;
		}
		function _$ttestnull(r)
		{
			if( typeof(r) === null || r === null )
			{
				return false;
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		function _$tteststr(r)
		{
			if( typeof(r) === null || r === null )
			{
				return '';
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return '';
			}
			else if( r === '' )
			{
				return '';
			}
			else
			{
				return r;
			}
		}
		function _$tgeturlparam(u) {
			var i = 0,j = 0;
			var h = '',p = '';
			if ((i = u.indexOf("://")) < 0 && u.length > 0) {return {h:u,p:''}};
			u = u.substring(i + 3);
			h = u.substring(0, u.indexOf('/'));
			if ((i = u.indexOf("/")) > -1) {			
				if ((j = u.indexOf('#clickmapcode=')) > -1) 
				{
					p = u.substring(i, j);
				}
				else
				{
					p = u.substring(i);
				}
			};
			return {h:h,p:p}
		}
		function _$tgeturlkey(u,k)
		{
			var i,j,h='';
			if ((i = u.indexOf('?'+k+'=')) > -1 || (i = u.indexOf('&'+k+'=')) > -1)
			{
				h = u.substring(i+2+k.length);
				j = h.indexOf('&');
				j = j <= 0 ? h.length : j;
				{
					h = h.substring(0,j);
				}
			}
			return h;
		}
		function _$tgetkeyword(u,b) {
			var v,dv,i, j, h, k, rk, e, ek, f, p = 10;
			u = u.toLowerCase();
			h = _$tgeturlparam(u).h;
			if( b == '_' ){b = '';}
			for (var ii = 0; ii < _$tsearchkey.length; ii++) {
				if (h.toLowerCase().indexOf('.'+_$tsearchkey[ii].toLowerCase()+'.') > -1) {
					if ((i = u.indexOf('?' + _$tkeyword[ii] + '=')) > -1 || (i = u.indexOf('&' + _$tkeyword[ii] + '=')) > -1) {
						k = u.substring(i + _$tkeyword[ii].length + 2);
						if(_$tsearchtype[ii]=='default')
						{_$tkeywordsource = _$tsearchkey[ii]+b+'::'+k;}
						_$tkeywordkey = k;
						v = '&KW=' + k + '&WC=' + _$tsearchtype[ii] + '&WP=' + _$tsearchkey[ii]+b;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							if(_$tsearchtype[ii]=='default')
							{_$tkeywordsource = _$tsearchkey[ii]+b+'::'+k;}
							_$tkeywordkey = k;
							v = '&KW=' + k + '&WC=' + _$tsearchtype[ii] + '&WP=' + _$tsearchkey[ii]+b
						}
					}
					if ((i = u.indexOf('?' + _$tkeywordrelated[ii] + '=')) > -1 || (i = u.indexOf('&' + _$tkeywordrelated[ii] + '=')) > -1) {
						k = u.substring(i + _$tkeywordrelated[ii].length + 2);
						rk = '&RW=' + k;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							rk = '&RW=' + k
						}
					}
				}
			};
			v = v ? v : dv;
			if (_$ttypeof(v) === '') {return '';}
			else if (rk) {return v + rk;}
			else {return v}
		}
		function _$treplace_utm(s)
		{
			if( s.indexOf('pmf_source=') <= -1 )
			{
				if( s.indexOf('utm_source=') > -1 )
				{
					for (var ii = 0; ii < _$tutm_replace.length; ii++) {
						s = s.replace(_$tutm_replace[ii]+'=', _$tutm_pmf_replace[ii]+'=');
					}
				}
				else if( s.indexOf('hmsr=') > -1 )
				{
					for (var ii = 0; ii < _$tbdu_replace.length; ii++) {
						s = s.replace(_$tbdu_replace[ii]+'=', _$tbdu_pmf_replace[ii]+'=');
					}
				}
			}
			return s;
		}
		function _$tgetmap(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#clickmapcode=') > -1) {
				c = u.substring(14);
				s = c.split('|');
				s[2] = s[2] === '' ? _$twebsite : s[2];
				_$tsetcookie('yfxm', s[0], 1, _$tdomain, '');
				_$tsetcookie('yfxm_t', s[1], 1, _$tdomain, '');
				_$tsetcookie('yfxm_code', s[2], 1, _$tdomain, '');
				_$tsetcookie('yfxm_site', s[3], 1, _$tdomain, '');
				_$tsetcookie('yfxm_p', s[4], 1, _$tdomain, '');
				_$tsetcookie('yfxm_s_d', s[5], 1, _$tdomain, '');
				_$tsetcookie('yfxm_e_d', s[6], 1, _$tdomain, '');
				_$tsetcookie('yfxm_sv', s[7], 1, _$tdomain, '');
				_$tsetcookie('yfxm_p_g', s[8], 1, _$tdomain, '');
				_$tsetcookie('yfxm_p_c', s[9], 1, _$tdomain, '');
				_$tsetcookie('yfxm_c', s[10], 1, _$tdomain, '');
				_$tsetcookie('yfxm_e', s[11], 1, _$tdomain, '');
				_$tsetcookie('yfxm_o', s[12], 1, _$tdomain, '');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else if (_$treadcookie('yfxm') && _$treadcookie('yfxm_code') && _$treadcookie('yfxm_site')) {
				s[0] = _$treadcookie('yfxm');
				s[1] = _$treadcookie('yfxm_t');
				s[2] = _$treadcookie('yfxm_code');
				s[3] = _$treadcookie('yfxm_site');
				s[4] = _$treadcookie('yfxm_p');
				s[5] = _$treadcookie('yfxm_s_d');
				s[6] = _$treadcookie('yfxm_e_d');
				s[7] = _$treadcookie('yfxm_sv');
				s[8] = _$treadcookie('yfxm_p_g');
				s[9] = _$treadcookie('yfxm_p_c');
				s[10] = _$treadcookie('yfxm_c');
				s[11] = _$treadcookie('yfxm_e');
				s[12] = _$treadcookie('yfxm_o');
				s[13] = _$treadcookie('yfxm_h_h');
				s[14] = _$treadcookie('yfxm_h_p');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else {return {
				a: '',
				b: '',
				c: '',
				d: '',
				e: '',
				f: '',
				g: '',
				h: '',
				i: '',
				j: '',
				p: '',
				q: '',
				r: '',
				ht: '',
				pu: ''
			}}
		}
		function _$tgettag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#tagcontent=') > -1) {
				c = u.substring(12);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1]
				}
			}
			else
			{
				return {
					a: '',
					b: ''
				}
			}
		}
		function _$tgetpagetag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#pagecontent=') > -1) {
				c = u.substring(13);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1],
					c: s[2]
				}
			}
			else
			{
				return {
					a: '',
					b: '',
					c: ''
				}
			}
		}
		function _$tjsgif(gs) {
			if( _$tis_can_record == 0 )
			{
				return;
			}
			var gif = new Image();
			gif.onload = function () {
				gif.onload = null;
				_$tdoimgerr_1 = 1;
			};
			gif.onerror = function () {
				_$tjsgif(gs);_$tdoimgerr_1++;
			};
			if( _$tdoimgerr_1 <= 2 )
			{
				gif.src = gs;
			};
		}
		function _$tparseurl(u) {
			var p = new Array();
			u = u + '&phpstat';
			var c = u.replace(/^\?/,'').split('&');
			for (var b = 0; b < c.length; b++) {
				var e = c[b].split('=');
				p[e[0]] = e[1];
			}
			return p;
		}
		function _$ttypeof(tp)
		{
			var rp=tp;
			if( tp === null ){rp = '';}
			else if( typeof(tp) === 'undefined' ){rp = '';}
			else if( typeof(tp) === 'object' ){rp = '';}
			else if( typeof(tp) === 'function' ){rp = '';}
			return rp;
		}
		function _$tsetfirst(fvar, nvalue)
		{
			if( _$ttypeof(fvar) == '' )
			{			
				_$tsetcookie('yfx_mr_f', nvalue, 30, _$tdomain, '');
			}
		}		
		var _$tjava = 0;
		if (navigator.javaEnabled()) {_$tjava = '1';}
		var _$tbrowser = /(weibo|micromessenger)/.exec(_$tuseragent);
		if (!_$tbrowser) {_$tbrowser = /(firefox|360se|sogou|lbbrowser|bidubrowser|tencenttraveler|theworld|maxthon|opera|ucweb|konqueror|lynx|greenbrowser|netcaptor|netscape|safari|chrome)/.exec(_$tuseragent);}
		if (!_$tbrowser) {_$tbrowser = /(msie) ([0-9\.]*)[^;)]/.exec(_$tuseragent);}
		_$tbrowser = _$tbrowser === null ? 'other' : _$tbrowser[0];
		var _$tsystem = /(windows nt|windows|unix|linux|sunos|bsd|redhat|macintosh) ([0-9\.]*)[^;)]/.exec(_$tuseragent);
		_$tsystem = _$tsystem === null ? 'other' : _$tsystem[0];
		var _$talexa			= (_$tuseragent.indexOf('alexa') !== -1) === false ? '0' : '1';
		var _$tflash			= _$tflashok.f;
		var _$tpathname		= _$tdocument.location.pathname;
		var _$tfreferrer		= _$tgeturlparam(_$treferrer);
		var _$tfreferrerhost = _$tfreferrer.h;
		var _$tref			= _$tencode(_$tfreferrer.p);
		var _$tmapcode		= _$tgetmap(_$thashcode);
		var _$ttagcode		= _$tgettag(_$thashcode);
		var _$tpagecode		= _$tgetpagetag(_$thashcode);
		var _$tsearch		= _$treplace_utm(_$tdocument.location.search);
		if( _$thashcode && 0 )
		{
			_$tsearch		= _$tsearch + _$thashcode;
		}
		_$tpathname			= _$tencode(_$tpathname + _$tsearch);
		_$tpartner_website	= _$treadflashcookie('yfx_p');
		_$tmediumsource		= _$treadflashcookie('yfx_mr');
		_$tmediumsourcefirst	= _$treadflashcookie('yfx_mr_f');
		_$tedmemail			= _$treadflashcookie('yfx_e');
		var _$tis_can_record = 1;
		var _$tparseurlarr	= _$tparseurl(_$tsearch);
		var _$tpmf_key		= _$ttypeof(_$tparseurlarr['k']);
		var _$tpmf_from		= _$ttypeof(_$tparseurlarr['f']);
		var _$tpmf_key_macth = _$ttypeof(_$tparseurlarr['m']);
		var _$tpmf_key_word  = _$ttypeof(_$tparseurlarr['w']);
		var _$tpmf_key_id	= _$ttypeof(_$tparseurlarr['kid']);
		var _$tpmf_key_tid	= _$ttypeof(_$tparseurlarr['tid']);
		var _$tpmf_gclid		= _$ttypeof(_$tparseurlarr['gclid']);
		var _$tpmf_bdclkid	= _$ttypeof(_$tparseurlarr['bdclkid']);
		var _$tpmf_group		= _$ttypeof(_$tparseurlarr['pmf_group']);
		var _$tpmf_medium	= _$ttypeof(_$tparseurlarr['pmf_medium']);
		var _$tpmf_source	= _$ttypeof(_$tparseurlarr['pmf_source']);
		var _$tpmf_match		= _$ttypeof(_$tparseurlarr['pmf_match']);
		var _$tpmf_keyword	= _$ttypeof(_$tparseurlarr['pmf_keyword']);
		var _$tpmf_advname	= _$ttypeof(_$tparseurlarr['pmf_advname']);
		var _$tpmf_partner	= _$ttypeof(_$tparseurlarr['pmf_partner']);
		var _$tpmf_email		= _$ttypeof(_$tparseurlarr['pmf_email']);
		var _$tpmf_area		= _$ttypeof(_$tparseurlarr['pmf_area']);
		var _$tpmf_id		= _$ttypeof(_$tparseurlarr['pmf_id']);
		var _$tpmf_tid		= _$ttypeof(_$tparseurlarr['pmf_tid']);
		var _$tpmf_tui_id	= _$tpmf_tid ? _$tpmf_tid : _$tpmf_key_tid;
		if (_$tpmf_tui_id) {
			_$tsetflashcookie('yfx_f_id', _$tpmf_tui_id, 3650, _$tdomain, '');
		}
		else
		{
			_$tpmf_tui_id = _$treadflashcookie('yfx_f_id');
		}
		if(_$tpagecode.a && _$tpagecode.b && _$tpagecode.c)
		{
			var ac = 'pageab_'+_$tpagecode.a+'_'+_$tpagecode.c;
			_$tsetflashcookie('yfx_p_ab_' + _$tpagecode.a, _$tpagecode.c, 30, _$tdomain, 'new');
			_trackData.push(['addclick','HTML',ac,_$tpagecode.c]);
		}
		if (_$tmapcode.a && _$tmapcode.b && _$tmapcode.c) 
		{
			_$tis_can_record = 0;
		}
		else if ( _$thashcode.indexOf('#visitorplay') > -1 )
		{
			_$tis_can_record = 0;
		}
		else if ( _$thashcode.indexOf('#onlinevisitor') > -1 )
		{
			_$tis_can_record = 0;
		}
		else if ( _$tpathname.indexOf('fromclickhot') > -1 )
		{
			_$tis_can_record = 0;
		}
		if( _$tpmf_medium && _$tpmf_medium.indexOf('market_type_') <= -1 )
		{
			_$tpmf_medium = "market_type_"+_$tpmf_medium;
		}
		var _$tpstac			= _$ttypeof(_$tparseurlarr['pstac']);
		if( ( _$tpmf_medium && _$tpmf_source ) || ( ( _$tpmf_gclid || _$tpmf_bdclkid ) && _$tpmf_key !== 'ppc' ) )
		{
			_$tpmf_key = 'ppc';
		}
		var _$tpmf_channel = _$tpmf_medium;
		var _$tsearchkeyword  = _$tgetkeyword(_$treferrer,'_'+_$tpmf_key);
		if (_$tpmf_medium && _$tpmf_source) {
			_$tmediumsource = _$tpmf_group+'::'+_$tpmf_medium+'::'+_$tpmf_source+'::'+_$tkeywordsource+'::'+_$tpmf_match+'::'+_$tpmf_keyword+'::'+_$tfreferrerhost+'::'+_$tpmf_id+'::pmf_from_adv';
			_$tsetflashcookie('yfx_mr', _$tmediumsource, 3650, _$tdomain, '');
			_$tsetfirst(_$tmediumsourcefirst, _$tmediumsource);
			_$tsetflashcookie('yfx_key', _$tkeywordkey, 3650, _$tdomain, '');
		}
		else if (_$tpmf_key && _$tpmf_from && _$tmediumsource.indexOf('pmf_from_adv') <= -1) {
			_$tpmf_channel = 'market_type_paid_search';
			_$tmediumsource = _$tpmf_group+'::market_type_paid_search::::'+_$tkeywordsource+'::'+_$tpmf_key_macth+'::'+_$tpmf_key_word+'::'+_$tfreferrerhost+'::'+_$tpmf_key_id+'_'+_$tpmf_from+'_'+_$tpmf_key+'::pmf_from_paid_search';
			_$tsetflashcookie('yfx_mr', _$tmediumsource, 3650, _$tdomain, '');
			_$tsetfirst(_$tmediumsourcefirst, _$tmediumsource);
			_$tsetflashcookie('yfx_key', _$tkeywordkey, 3650, _$tdomain, '');
		}
		else if (_$tkeywordsource && _$tmediumsource.indexOf('pmf_from_paid_search') <= -1 ) {
			_$tpmf_channel = 'market_type_free_search';
			_$tmediumsource = _$tpmf_group+'::market_type_free_search::::'+_$tkeywordsource+'::::::'+_$tfreferrerhost+'::::pmf_from_free_search';
			_$tsetflashcookie('yfx_mr', _$tmediumsource, 3650, _$tdomain, '');
			_$tsetfirst(_$tmediumsourcefirst, _$tmediumsource);
			_$tsetflashcookie('yfx_key', _$tkeywordkey, 3650, _$tdomain, '');
		}
		_$tkeywordkey = _$treadcookie('yfx_key');
		if (_$tpmf_partner) {
			_$tpartner_website = _$tpmf_partner;
			_$tsetflashcookie('yfx_p', _$tpartner_website, 3650, _$tdomain, '')
		}
		if (_$tpmf_email) {
			_$tedmemail = _$tpmf_group+'::'+_$tpmf_medium+'::'+_$tpmf_source+'::'+_$tpmf_email+'::'+_$tpmf_area+'::pmf_from_edm';
			_$tsetflashcookie('yfx_e', _$tedmemail, 3650, _$tdomain, '')
		}
		_$tmediumsourcefirst = _$tmediumsourcefirst == _$tmediumsource ? 'same' : _$tmediumsource;
		var _$tcourl = _$tcounturl_logcount + '?WS=' + _$twebsite + '&RD=common&SWS='+_$tteststr(_$tpartner_website)+'&SWSID='+_$tteststr(_Schannel_website_id)+'&SWSPID='+_$tteststr(_Schannel_webshop_id)+'&JSVER=' + _$tVersion + '&TDT='+_$tteststr(_trackDataType)+'&UC=' + _$tusercookie + '&LUC=' + (_$tserusercookie==_$tusercookie?'same':_$tserusercookie) + '&VUC=' + _$tvisittime + '&FS=' + _$tfreferrerhost + '&RF=' + _$tencode(_$tref) + '&PS=' + _$thostname + '&PU=' + _$tpathname + _$tsearchkeyword + '&PT=' + _Spage_type + '&PER=' + _$tiserror + '&PC=' + _$tencode(_Spage_pic) + '&PI=' + _Spage_id + '&LM=' + _$tlastmodify + '&LG=' + _$tlanguage + '&CL=' + _$tcolor + '&CK=' + _$tcookie + '&SS=' + _$tscreensize + '&SCW=' + _$tclientwidth + '&SCH=' + _$tclientheight + '&SSH=' + _$tscrollheight + '&FT=' + _$tfirsttime + '&LT=' + _$tlasttime + '&DL=' + _$tdowntime + '&FL='+_$tflash+'&CKT='+cookietype+'&JV='+_$tjava+'&AL=' + _$talexa + '&SY=' + _$tencode(_$tsystem) + '&BR=' + _$tencode(_$tbrowser) + '&TZ=' + (new Date()).getTimezoneOffset() / 60 + '&AU=' + _Sauthor + '&UN=' + _$tencode(_$tusername) + '&UID=' + _$tencode(_$tuserid) + '&URT=' + _$tencode(_$tuserregtime) + '&UA=' + _$tencode(_$tuserage) + '&US=' + _$tencode(_$tusersex) + '&TID=' + _$tencode(_$tpmf_tui_id) + '&MT=' + _$ttelphone + '&FMSRC='+_$tencode(_$tmediumsourcefirst)+'&MSRC='+_$tencode(_$tmediumsource)+'&MSCH=&EDM='+_$tencode(_$tedmemail)+'&RC=' + _$treturncount + '&SHPIC=&MID=' + _$trandomid + '&TT=' + _$tencode(_$ttitle) + "&CHK=" + _$tunicode(_$twebsite+_$trandomid) + "&SHT=" + _$tdomain + "&RDM=" + Math.random();
		var _$tclickhotokstr = true;
		function _$tcreatejs()
		{
			if (_$tmapcode.a && _$tmapcode.b && _$tmapcode.c) 
			{
				_$tclickhotokstr = false;
				var _$turl = _$tcounturl + '/clickareamap.js.php';
				var _$tobj = _$tdocument.createElement('script');
				_$tobj.type = 'text/javascript';
				_$tobj.async = true;
				_$tobj.id = 'clickareamap_id';
				_$tobj.charset = 'utf-8';
				
				var _$tpage_site = _$thostname;
				var _$tpath_name = _$tpathname;
				if(_$tpathname.indexOf('clickhotcount')>-1 && _$tmapcode.ht && _$tmapcode.pu)
				{
					_$tpage_site = _$tmapcode.ht;
					_$tpath_name = _$tmapcode.pu;
				}	
				var _$tdurl = _$turl + '?jsprefix=yfx_&clicktype=' + _$tmapcode.a + '&areatype=' + _$tmapcode.b + '&website=' + _$tmapcode.d + '&server=' + _$tmapcode.h + '&starttime=' + _$treadcookie('yfxm_s_d') + '&endtime=' + _$treadcookie('yfxm_e_d') + '&fromtype=' + _$treadcookie('yfxm_f') + '&pagesite=' + _$tpage_site + '&pageurl=' + _$tpath_name + '&pagegroup=' + _$tmapcode.i + '&rand=' + Math.random() + '&clickmapcode=' + _$tmapcode.c+'&clickmapposition=' + _$tmapcode.e+'&counturl='+_$tencode(_$tcounturl)+'&type='+_$tmapcode.j+'&chose='+_$tmapcode.p+'&first='+_$tmapcode.q+'&order='+_$tmapcode.r + '&hashcode=' + _$tencode(_$thashcode.substr(1));
				_$tdocument.getElementsByTagName('head').item(0).appendChild(_$tobj);
				setTimeout("_$tdocument.getElementById('clickareamap_id').src='"+_$tdurl+"'; ",1500);
			}

			if ( [_ONLINE_VISITE_] )
			{
				var _$turl = _$tcounturl + '/onlinevisite.js.php';
				var _$tobj = _$tdocument.createElement('script');
				_$tobj.type = 'text/javascript';
				_$tobj.async = true;
				_$tobj.id = 'onlinevisite_id';
				_$tobj.charset = 'utf-8';
				var _$tdurl = _$turl + '?counturl=' + _$tencode(_$tcounturl) + '&WS='+ _$twebsite + '&CK=' + _$tencode(_$tusercookie) +'&UN=' + _$tencode(_$tusername) +'&clientw='+_$tclientwidth+'&clienth='+_$tclientheight+'&platform='+_$tsystem + '&rand=' + Math.random();
				_$tdocument.getElementsByTagName('head').item(0).appendChild(_$tobj);
				setTimeout("_$tdocument.getElementById('onlinevisite_id').src='"+_$tdurl+"'; ",1600);
			}
			if ( _$thashcode.indexOf('#visitorplay') > -1 )
			{
				if ( _$thashcode.indexOf('|dtest') > -1 )
				var _$turl = '//test.yeefx.cn/phpstat/visitorplay.js.php';
				else
				var _$turl = _$tcounturl + '/visitorplay.js.php';
				var _$tobj = _$tdocument.createElement('script');
				_$tobj.type = 'text/javascript';
				_$tobj.async = true;
				_$tobj.id = 'visitorplay_id';
				_$tobj.charset = 'utf-8';
				var _$tdurl = _$turl + '?counturl=' + _$tencode(_$tcounturl) + '&WS='+ _$twebsite + '&pagesite=' + _$thostname + '&pageurl=' + _$tpathname + '&hashcode=' + _$tencode(_$thashcode.substr(1)) + '&width=' + _$tclientwidth + '&rand=' + Math.random();
				_$tdocument.getElementsByTagName('head').item(0).appendChild(_$tobj);
				setTimeout("_$tdocument.getElementById('visitorplay_id').src='"+_$tdurl+"'; ",1700);
			}
			if ( _$thashcode.indexOf('#onlinevisitor') > -1 )
			{
				if ( _$thashcode.indexOf('|dtest') > -1 )
				var _$turl = '//test.yeefx.cn/phpstat/onlinevisitor.js.php';
				else
				var _$turl = _$tcounturl + '/onlinevisitor.js.php';
				var _$tobj = _$tdocument.createElement('script');
				_$tobj.type = 'text/javascript';
				_$tobj.async = true;
				_$tobj.id = 'onlinevisitor_id';
				_$tobj.charset = 'utf-8';
				var _$tdurl = _$turl + '?counturl=' + _$tencode(_$tcounturl) + '&WS='+ _$twebsite + '&pagesite=' + _$thostname + '&pageurl=' + _$tpathname + '&height=' + _$tclientheight + '&hashcode=' + _$tencode(_$thashcode.substr(1)) + '&rand=' + Math.random();
				_$tdocument.getElementsByTagName('head').item(0).appendChild(_$tobj);
				setTimeout("_$tdocument.getElementById('onlinevisitor_id').src='"+_$tdurl+"'; ",1800);
			}

			if( false )
			{
				if (_$ttagcode.a && _$ttagcode.b)
				{
					var _$tturl = _$tcounturl_proxy + '/optimizer.js.php';
					var _$ttobj = _$tdocument.createElement('script');
					_$ttobj.type = 'text/javascript';
					_$ttobj.async = true;
					_$ttobj.id = 'tagcode_id';
					_$ttobj.charset = 'utf-8';
					var _$tdurl = _$tturl + '?abtype=test&website=' + _$twebsite + '&abtestid=' + _$ttagcode.a + '&tagcheckcode=' + _$ttagcode.b + "&rand="+Math.random();
					_$tdocument.getElementsByTagName('head').item(0).appendChild(_$ttobj);
					setTimeout("_$tdocument.getElementById('tagcode_id').src='"+_$tdurl+"'; ",1900);
				}
				else
				{
					var _$tturl = _$tcounturl_proxy + '/optimizer.js.php';
					var _$ttobj = _$tdocument.createElement('script');
					_$ttobj.type = 'text/javascript';
					_$ttobj.async = true;
					_$ttobj.id = 'tagcode_id';
					_$ttobj.charset = 'utf-8';
					var _$tdurl = _$tturl + '?abtype=show&website=' + _$twebsite + "&prefix=_$t&rand="+Math.random();
					_$tdocument.getElementsByTagName('head').item(0).appendChild(_$ttobj);
					setTimeout("_$tdocument.getElementById('tagcode_id').src='"+_$tdurl+"'; ",2000);
				}
			}
			if( _Spageformjs )
			{
				var _$tturl = _$tcounturl_proxy + '/formtrans.js.php';
				var _$ttobj = _$tdocument.createElement('script');
				_$ttobj.type = 'text/javascript';
				_$ttobj.async = true;
				_$ttobj.id = 'formtrans_id';
				_$ttobj.charset = 'utf-8';
				if( _$tformlist && _$tcfre_f )
				{
					var _$tdurl = _$tturl + '?action=reaction&website=' + _$twebsite + '&swebsite=' + _$tpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&uipcode=' + _$tusercookie + '&luipcode=' + _$tserusercookie + '&formlist=' + _$tencode(_$tformlist) + '&pagesite=' + _$thostname + '&phone='+_$tencode(_$ttelphone)+'&system='+_$tencode(_$tsystem)+'&medium='+_$tencode(_$tmediumsource)+'&marknum='+_$trandomid+'&prefix=_$t&rand='+Math.random();
				}
				if( _$tformhidden )
				{
					var _$tdurl = _$tturl + '?action=hidden&website=' + _$twebsite + '&swebsite=' + _$tpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&formlist=' + _$tencode(_$tformlist) + '&prefix=_$t&rand='+Math.random();
				}
				_$tdocument.getElementsByTagName('head').item(0).appendChild(_$ttobj);
				setTimeout("_$tdocument.getElementById('formtrans_id').src='"+_$tdurl+"'; ",2100);
			}
		}
			var _$tformhiddenloop = 1;	
	var _$tclickhot;
	var _$tdoimgerr_2 = 1;
	var _$tclickhotok = 0;
	var _$tmessageid = '';
	var _$tformhidden = 0||0;
	var _$tclickarray = new Array();
	var _$tcf_f = 1||0;
	var _$tcfre_f = 0||0;
	_$tclickarray[0]='(*)';;
	var _$tclickreg = '';
	if (_$tclickarray[0] == 'clickhotall') {
		_$tclickhotok = 1
	}
	function _$tdotest(r)
	{
		r = r+'';
		r = r.replace(/\\/g, '\\/');
		r = r.replace(/\//g, '\\/');
		r = r.replace(/\*/g, '(.*)');
		return r;
	}
	if (_$tclickhot !== 'clickhot' && _$tclickarray[0] !== 'clickhotall') {
		for (var ci = 0; ci < _$tclickarray.length; ci++) {
			if (_$tclickarray[ci].lastIndexOf('*') > - 1) {
				_$tclickarray[ci] = _$tdotest(_$tclickarray[ci]);
				if (_$tclickarray[ci].indexOf('/') === 0) {
					_$tclickarray[ci] = _$tclickarray[ci].substring(1)
				}
				_$tclickreg = eval('/' + _$tclickarray[ci] + '/ig');
				if (_$tclickreg.test(_$tpathname)) {
					_$tclickhotok = 1;
					break
				}
			} else {
				if (_$tclickarray[ci].indexOf('/') !== 0) {
					_$tclickarray[ci] = '/' + _$tclickarray[ci]
				}
				if (_$tclickarray[ci] == _$tpathname) {
					_$tclickhotok = 1;
					break
				}
			}
		}
	}
	var _$tclienturlstr = '';
	var _$tposarr = new Array();

	function _$ttimelong(ini) {
		var tl = _$tgt() - _$tstarttime;
		if (tl >= 1800000) {
			tl = 1000
		}
		if (ini) {
			tl = _$tgt() - _$ttimestart;
			_$ttimestart = _$tgt()
		}
		tl <= 0 ? 0 : tl;
		return tl
	}
	function _$tsetformfield(a,b)
	{
		if( typeof( _$tformfielddetails[a][b] ) == null || typeof( _$tformfielddetails[a][b] ) == 'undefined' )
		{
			_$tformfielddetails[a][b] = {change:0,onkey:0,times:0,focus:0,errors:0,submits:0,inputinfo:0};
		}
	}
	function _$tinitevent(init) {
		var _$tfn;
		var _$tfc;
		_$taddlistener(window, 'unload', _$tunload);
		_$taddlistener(window, 'blur', _$tunload);
		
		if( _$tcf_f )
		{
			for (var a = 0; a < _$tdocument.forms.length; a++) {
				_$tfn = _$tdocument.forms.item(a);
				_$tfc = _$tfn.name || _$tfn.id;
				if( _$tfc && _$tcfre_f )
				{
					_$tformlist = _$tformlist + _$tfc + "::" + _$tfn.action + "||";
					_$tformdetails[_$tfc] = {change:0,onkey:0,times:0,focus:0,submits:0,errors:0,inputinfo:0};
					_$tformfielddetails[_$tfc] = {};
				}
				_$tinitform(_$tfn);
			}
			_$tgetelementby(['form'], ['submit'], _$tsubmit);
			_$tgetelementby(['select', 'input', 'textarea'], ['change'], _$tchangeselect);
			_$tgetelementby(['select', 'input', 'textarea','button'], ['blur'], _$tfocus);
			_$tgetelementby(['select', 'input', 'textarea','button'], ['click'], _$tclick);
		}

		 if (init && 1) {
			_$taddlistener(_$tdocument, 'click', _$tclick);
			_$taddlistener(_$tdocument, 'mousemove', _$tmousemove)
		}
		if (init && _$tcf_f && 0) {
			_$taddlistener(_$tdocument, 'keydown', _$tkeydown);
			_$taddlistener(_$tdocument, 'keyup', _$tkeyup);
		}
	}
	function _$trecord(a) {
		var s = '';
		if (parseInt(Math.random() * 100) < 8*10 && a.a === 'msmv') return;
		switch (a.a) {
		case 'msmv':
			s = '||' + a.a + '::' + a.t + '::' + a.x + '::' + a.y + '::' + _$tencode(a.i) + '::' + a.p;
			_$tcountdourl(s);
			break;
		case 'clk':
		case 'fus':
		case 'link':
		case 'chn':
		case 'down':
		case 'onkey':
		case 'clkout':
		case 'submit':
			s = '||' + a.a + '::' + _$tencode(a.tn) + '::' + _$tencode(a.i) + '::' + _$tencode(a.n) + '::' + a.tp + '::' + _$tencode(a.v) + '::' + _$tencode(a.h) + '::' + _$tencode(a.u) + '::' + a.t + '::' + a.x + '::' + a.y + '::' + a.p + '::' + _$tencode(a.fn) + '::' + _$tencode(a.fa) + '::' + a.e + '::' + a.ef + '::' + _$tencode(a.msg) + '::' + _$tencode(a.ak) + '::' + _$tencode(a.eor);
			_$tcountdourl(s);
			break;
		default:
			_$tcountdourl(a.a);
			break
		}
	}
	function _$tunload() {
		_$tloadgif(_$tclienturlstr);
		_$tclienturlstr = ''
	}
	function _$tcountdourl(s) {
		_$tclienturlstr += s;
		if (_$tclienturlstr.length > 2048 && s) {
			_$tloadgif(_$tclienturlstr);
			_$tclienturlstr = ''
		}
	}
	function _$tdownload(p) {
		var ckda = new Array();
		ckda[0]='.doc';ckda[1]='.csv';ckda[2]='.xls';ckda[3]='.pdf';ckda[4]='.rar';ckda[5]='.zip';;
		var _pin = p.toLowerCase();
		for (var ckdi = 0; ckdi < ckda.length; ckdi++) {
			if (_pin.indexOf(ckda[ckdi]) > - 1) {
				return 1
			}
		}
		return 0
	}
	function _$tclickout(h) {
		var ckoa = new Array();
		ckoa[0]='(*)';;
		var hi = h.toLowerCase();
		for (var ci = 0; ci < ckoa.length; ci++) {
				ckoa[ci] = _$tdotest(ckoa[ci]);
		}
		var reg = eval('/'+ckoa.join('|')+'/ig');
		return (!reg.test(hi));
	}
	function _$ttrackevent()
	{
		var s = '';
		var rs = '';
		var td = window._trackData;
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			s = _trackEvent.trackActionUrl;
			_trackEvent.trackActionUrl = '';
		}
		else if( td && td.length )
		{
			for(var k in td)
			{
				if( !isNaN(k) )
				{
					for(var kk in td[k])
					{
						if( td[k]['0'] == 'viewgoods' )
						{
							for(var rd in _$trefid)
							{
								rs = _$ttypeof(_$tparseurlarr[rd]);
								if( rs )
								{
									td[k]['9'] = rs;
								}
							}
						}
						var jsonid = 0;
						var jsonarr = [];
						var jsonrarr = new Array();
						if( td[k]['0'] == 'addaction' && typeof(td[k]['3']) == 'object' )
						{
							jsonarr = td[k]['3'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['3'] = jsonrarr.join('$');
						}
						if( td[k]['0'] == 'userset' && td[k]['1'] == 'userset' && typeof(td[k]['2']) == 'object' )
						{
							jsonarr = td[k]['2'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['2'] = jsonrarr.join('$');
						}
						if( _$ttestnull(_Sorder_encode_url) === false )
						td[k][kk] = _$tencode(td[k][kk]);
					}
					if( td[k].length == 1 )
					{
						s += '||'+td[k]['0'];
					}
					else
					{
						s += '||'+(td[k].join('::'));
					}
				}
			}
			window._trackData = [];
		}
		return s;
	}
	function _$tdirecttrackevent()
	{
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			_$tloadgif('');
		}
		else if( window._trackData && window._trackData.length )
		{
			_$tloadgif('');
		}
	}
	function _$tloadgif(gs) {
		if( _$tis_can_record == 0 )
		{
			return;
		}
		var gif = new Image();
		var clestr = gs + _$ttrackevent();
		if( clestr.length <= 0 ) {return;}
		gif.onload = function () {
			gif.onload = null;
			_$tdoimgerr_2 = 1;
		};
		gif.onerror = function () {
		   _$tloadgif(gs);_$tdoimgerr_2++;
		};
		if( _$tdoimgerr_2 <= 2 )
		{
			gif.src = _$tcounturl_logcount + '?WS=' + _$twebsite + '&RD=record&SWS='+_$tteststr(_$tpartner_website)+'&SWSID='+_$tteststr(_Schannel_website_id)+'&SWSPID='+_$tteststr(_Schannel_webshop_id)+'&JSVER=' + _$tVersion + '&TDT='+_$tteststr(_trackDataType)+'&UC=' + _$tusercookie + '&LUC=' + (_$tserusercookie==_$tusercookie?'same':_$tserusercookie) + '&VUC=' + _$tvisittime + '&UN=' + _$tencode(_$tusername) + '&UID=' + _$tencode(_$tuserid) + '&RC=' + _$treturncount + '&PS=' + _$thostname + '&PU=' + _$tpathname + '&PT=' + _Spage_type + '&FS=' + _$tfreferrerhost + '&RF=' + _$tencode(_$tref) + '&KW=' + _$tkeywordkey + '&SS=' + _$tscreensize + '&SW=' + _$tscreen_width() + '&SCW=' + _$tclient_width() + '&SCH=' + _$tclientheight + '&SSH=' + _$tscrollheight + '&BR=' + _$tencode(_$tbrowser) + '&LTL=' + Math.ceil(_$ttimelong(1) / 1000) + '&MSRC='+_$tencode(_$tmediumsource)+'&EDM='+_$tencode(_$tedmemail)+'&CLE=' + clestr + '&MID=' + _$trandomid+'&CHK=' + _$tunicode(_$twebsite+_$trandomid) + '&RDM='+Math.random();
		}
		if( _$tpstac.toLowerCase() == 'debug' )
		_$tmessage(gif.src);
	}
	function _$taddlistener(a, b, c) {
		if (a.addEventListener) {
			a.addEventListener(b, c, false)
		} else {
			if (a.attachEvent) {
				a.attachEvent('on' + b, c)
			}
		}
	}
	function _$tclick(ev) {
		_$tcountimg(ev);
		var b = ev.srcElement || ev.target;
		if (b && /input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$tchange(b, b.checked)
		}
		if (b && /button|img|input/i.test(b.tagName) && /submit|button/i.test(b.type)) {
			_$tsubmit_button(b, ev)
		}
	}
	function _$trecodeelement(ele,eleev,eleslt,type,host,url,eff,fname)
	{
		var $v = $e = $x = $y = $fn = $fa = $gfn = $typekey = $p = '';
		var $error = _$terrorcode || '';
		_$terrorcode = '';
		$x = _$tposition(ele).x;
		$y = _$tposition(ele).y;
		$p = ele.type;
		if(type == 'fus')
		{
			$v = _$tgetvalue(ele);
		}
		if((type == 'clk' || type == 'down' || type == 'clkout')&&ele.tagName=='A')
		{
			$v = _$tencode(ele.innerHTML.replace(/<[^>].*?>/g, '') || '');
			$x = _$tcltxy(eleev).x;
			$y = _$tcltxy(eleev).y;
			$e = _$tencode(ele.getAttribute('phpstatevent') || '');
		}
		if(type == 'clk' && ele.tagName!=='A')
		{
			$v = _$tgetvalue(ele);
			$x = _$tcltxy(eleev).x;
			$y = _$tcltxy(eleev).y;
		}
		if(type == 'chn')
		{
			$e = (eleslt === true ? 1 : (eleslt === false ? 0 : eleslt));
			$v = _$tgetvalue(ele);
		}
		if(type == 'onkey')
		{
			$v = eff;
			$typekey = eleslt;
		}
		if(type == 'msmv')
		{
			$x = _$tcltxy(eleev).x;
			$y = _$tcltxy(eleev).y;
		}
		if((/input|textarea|select|button/i.test(ele.tagName)) || (/img/i.test(ele.tagName) && /submit|button/i.test(ele.type)))
		{		
			$gfn = _$tgetformname(ele);
			$fn = $gfn.n;
			$fa = $gfn.a;
		}
		if(type == 'submit')
		{
			$gfn	= _$tgetformname(ele);
			$fn		= $gfn.n;
			$fa		= $gfn.a;
		}	
		if( fname !== '' )
		{
			$fn = fname;
		}
		if( $p === 'password' && $v )
		{
			$v = '********';
		}
		$fa = '';
		var $ig={pose:'',tagid:''};
		$ig = _$tinindeof(ele);
		var $fmsg = '';
		if( $fn && window._trackFormMsg && window._trackFormMsg.length > 0 )
		{
			$fmsg = window._trackFormMsg;
		}
		window._trackFormMsg = '';
		
		if( $fn && $fa && _$tcfre_f )
		{
			var $eln_id = ele.name || ele.id;
			$eln_id = $eln_id || 'unname';
			_$tsetformfield($fn,$eln_id);
			if( $eln_id != 'unname' )
			{
				if(type == 'chn')
				{
					_$tformdetails[$fn].change++;
					_$tformfielddetails[$fn][$eln_id].change++;
					_$tformdetails[$fn].inputinfo = $v;
					_$tformfielddetails[$fn][$eln_id].inputinfo = $v;
				}
				if(type == 'onkey')
				{
					_$tformdetails[$fn].onkey++;
					_$tformfielddetails[$fn][$eln_id].onkey++;
				}
				if(type == 'fus')
				{
					_$tformdetails[$fn].focus++;
					_$tformfielddetails[$fn][$eln_id].focus++;
				}
				if(type == 'submit')
				{
					_$tformdetails[$fn].submits++;
					_$tformfielddetails[$fn][$eln_id].submits++;
				}
				if( $fmsg && $fmsg.indexOf('==failed') )
				{			
					_$tformdetails[$fn].errors++;
					_$tformfielddetails[$fn][$eln_id].errors++;
				}
				_$tformdetails[$fn].times = _$ttimelong(0);
				_$tformfielddetails[$fn][$eln_id].times = _$ttimelong(0);
			}
		}

		_$trecord({
				a:  type,
				ak:  $typekey,
				p:  $ig.pose,
				h:  host,
				u:  url,
				t:  _$ttimelong(0),
				n:  (_$ttestobject(ele.name) || ''),
				i:  ($ig.tagid || _$ttestobject(ele.id)),
				v:  $v,
				x:  $x,
				y:  $y,
				e:  $e,
				tp: (_$ttestobject(ele.type) || ''),
				tn: (_$ttestobject(ele.tagName) || ''),
				fn: $fn,
				fa: $fa,
				ef: eff,
				msg: $fmsg,
				eor: $error
			});
	}
	function _$tfocus(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		if (b && /input|textarea|select/i.test(b.tagName)) {
			_$trecodeelement(b,ev,'','fus','','',0,'');
		}
	}
	function _$tonkey(ev,vc) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = ev.keyCode || ev.charCode;
		if (/input|textarea|select/i.test(b.tagName)) {
			_$trecodeelement(b,ev,vc,'onkey','','',c,'');
		}
	}
	function _$tkeydown(ev)
	{
		_$tonkey(ev,'k_d');
	}
	function _$tkeyup(ev)
	{
		_$tonkey(ev,'k_u');
	}
	function _$tkeypress(ev)
	{
		_$tonkey(ev,'k_p');
	}
	function _$tcountimg(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = b;
		while (b && (!b.href || /img/i.test(b.tagName))) {
			b = b.parentNode
		}
		var gettype = 'clk';
		var chu = clkhost = clkurl = '';
		if (b) {
			chu = _$tgeturlparam(b.href);
			clkhost = chu.h;
			clkurl = chu.p;
			_$trecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			if (_$tdownload(b.href)) {
				gettype = 'down';
				_$trecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
			if (_$tclickout(clkhost)) {
				gettype = 'clkout';			
				_$trecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
		}
		if (c&&b!=c) {
			var eff = 0;var effid = 'id';
			if ((/img|input|textarea|select|a/i.test(c.tagName))) {
				eff = 1
			}
			if ((/img/i.test(c.tagName)) && chu) {
				effid = c.id || '';
			}
			if( effid == 'id' || effid )
			{
				_$trecodeelement(c,ev,'','clk','','',eff,'');
			}
		}
	}
	function _$tscreen_width() {
		return _$tdocument.documentElement.scrollWidth;
	}
	function _$tclient_width() {
		return _$tdocument.documentElement.clientWidth;
	}
	function _$ttestnull(r)
	{
		if( typeof(r) === null )
		{
			return false;
		}
		else if( typeof(r) === 'undefined' )
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	function _$ttestobject(r)
	{
		if( typeof(r) === 'object' )
		{
			return '';
		}
		else
		{
			return r;
		}
	}
	function _$tinindeof(c) {
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var i = 0;
		var b = c;
		var phptag = '';
		var fetchtag = 'phptag_';
		var parentnodes = new Array();
		var resultarray = new Array();
		var resultarraystr = new Array();
		while (b && b !== _$tdocument.body && b !== _$tdocument.documentElement) {
			var ch = 1;
			var g = new Array();
			if(!_$ttestnull(b.parentNode)||!b.parentNode) break;
			g = b.parentNode.childNodes;
			for (var e = 0; e < g.length; e++) {
				if (g[e].tagName && g[e].tagName !== '!' && g[e].tagName !== 'SCRIPT') {
					if (g[e] == b) {
						break
					}
					ch++
				}
			}
			if( ch < 10 )
			{
				parentnodes[i] = '0'+ch;
			}
			else
			{
				parentnodes[i] = ch;
			}
			phptag = phptag == '' ? (b.getAttribute(fetchtag)||'') : phptag;
			b = b.parentNode;
			i++
		}
		resultarray = parentnodes.reverse();
		resultarraystr = resultarray.join('-');
		return {pose:resultarraystr,tagid:phptag}
	}
	function _$tgetformname(c)
	{
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var b = c;
		if(/input|textarea|select|img|button/i.test(c.tagName))
		{
			var i = 0;
			while ( b && b.tagName !== 'FORM' ) 
			{
				if( b.tagName == 'BODY' )break;
				b = b.parentNode;
				i++;
			}
		}
		if( b && b.tagName == 'FORM' )
		{
			return {
				n: ((b.getAttribute('name') || b.getAttribute('id')) || ''),
				a: (b.getAttribute('action') || _$tpathname)
			}
		}
		else
		{
			return {
				n: '',
				a: ''
			}
		}
	}
	function _$tposition(b) {
		var a = {
			x: 0,
			y: 0
		};
		while (b.offsetParent) {
			a.x += parseInt(b.offsetLeft);
			a.y += parseInt(b.offsetTop);
			b = b.offsetParent
		}
		a.x += parseInt(b.offsetLeft);
		a.y += parseInt(b.offsetTop);
		return a
	}
	function _$tgetxy() {
		var x = 0;
		var y = 0;
		if (_$tdocument.body.scrollTop) {
			x = parseInt(_$tdocument.body.scrollLeft);
			y = parseInt(_$tdocument.body.scrollTop);
		} else {
			x = parseInt(_$tdocument.documentElement.scrollLeft);
			y = parseInt(_$tdocument.documentElement.scrollTop);
		};
		return {
			x: x,
			y: y
		}
	}

	function _$tistable(a) {
		return (a.tagName == 'TBODY' || a.tagName == 'TR')
	}
	function _$tchangeselect(c) {
		var b = c.srcElement || c.target;
		if (/input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$tchange(b, b.checked)
		} else if (/input/i.test(b.tagName) && /text/i.test(b.type)) {
			_$tchange(b, b.value.length)
		} else if (/textarea/i.test(b.tagName)) {
			_$tchange(b, _$ttxt_len(b.value))
		} else if (/select/i.test(b.tagName)) {
			_$tchange(b, b.selectedIndex)
		}
	}
	function _$tchange(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return;
		};
		_$trecodeelement(b,'',a,'chn','','',0,'');
		_$tgetby_idname(b);
		_$thiddenele(b,b);
		b.lastvalue = a;
	}
	function _$tchange_com(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return
		};
		b.lastvalue = a;
	}
	function _$tinitform(b) 
	{
		for (var a = 0; a < b.elements.length; a++) {
			var c = b.elements[a];
			if (/input/i.test(c.tagName) && /checkbox|radio/i.test(c.type)) 
			{
				_$tchange_com(c, c.checked);
			} 
			else
			{
				if (/input/i.test(c.tagName) && /text/i.test(c.type)) 
				{
					_$tchange_com(c, c.value.length);
				} 
				else 
				{
					if (/textarea/i.test(c.tagName)) 
					{
						_$tchange_com(c, _$ttxt_len(c.value));
					} 
					else 
					{
						if (/select/i.test(c.tagName)) 
						{
							_$tchange_com(c, c.selectedIndex);
						}
					}
				}
			}
		}
	}
	function _$ttxt_len(a) {
		return a.length - (a.split("\r").length - 1)
	}
	function _$tcltxy(ev) {
		if (!ev) {
			var ev = event
		}
		var y = parseInt(ev.clientY) + parseInt(_$tgetxy().y) - parseInt(_$tdocument.getElementsByTagName('body')[0].offsetTop);
		var x = parseInt(ev.clientX) + parseInt(_$tgetxy().x) - parseInt(_$tdocument.getElementsByTagName('body')[0].offsetLeft);
		if (x > 5000 || x < 0) {
			x = 0
		}
		if (y > 50000 || y < 0) {
			y = 0
		}
		return {
			x: x,
			y: y
		}
	}
	function _$tmousemove(ev) {
		var t = _$tgt();
		var e = ev.srcElement || ev.target;
		if ((t - _$tloadtime) > (parseInt(8) + 1) * 100) {_$trecodeelement(e,ev,0,'msmv','','','','');}
		_$tloadtime = t
	}

	function _$tgetvalue(a) {
		var rv = '';
		if (a.tagName == 'SELECT') {
			rv = a.options[a.selectedIndex].text || ''
		}
		else {
			rv = a.value || '';
			if(rv==''&&_$ttestchildren(a)==1)
			{
				rv = a.innerHTML.replace(/<[^>].*?>/g, '') || '';
			}
		}
		rv = _$tteststr(_$tencode(rv.replace(/\s/g, '')));
		return rv.substring(0, 512)
	}
	function _$tsubmit(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.currentTarget;
		if( b )
		{
			_$trecodeelement(b,ev,'','submit','','',0,'');
		}
	}
	function _$thiddenele(f,t)
	{
		var loop = 1;
		while ( f && f.tagName !== 'FORM' && loop <= 10 ) 
		{
			if( f && f.tagName === 'BODY' )break;
			f = f.parentNode;
			t = f;
			loop++;
		}
		if( f && f.tagName === 'FORM' && _$tformhiddenloop <= 10 ) 
		{
			var b = t.childNodes;
			for (var i = 0; i < b.length; i++) 
			{
				if(b[i] && b[i].tagName === 'INPUT' && (b[i].type === 'hidden'||b[i].style.display === 'none')) 
				{
					var b_lastvalue = _$tteststr(_$tgetvalue(b[i]));
					b[i].lastvalue = _$tteststr(b[i].lastvalue);
					if( b_lastvalue && b[i].lastvalue !== b_lastvalue )
					{
						_$trecodeelement(b[i],'','','chn','','',0,'');
						b[i].lastvalue = b_lastvalue;
					}
				}
				else
				{
					_$thiddenele(f,b[i]);
					_$tformhiddenloop++;
				}
			}
		}
	}
	function _$ttestchildren(f)
	{
		if( f ) 
		{
			return f.childNodes.length;
		}
		else
		{
			return 0;
		}
	}
	function _$tsubmit_button(b,ev) {
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}
		if( b && b.tagName == 'FORM' )
		{
			_$trecodeelement(b,ev,'','submit','','',0,'');
			_$tgetby_idname(b);
			_$thiddenele(b,b);
		}
	}
	function _$tgetby_idname(b)
	{
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}

		if( b && b.tagName === 'FORM' && b.name && _$tformlist && _$tformhidden )
		{
			var gh = phpstat_do_hidden_form(b.name);
			for(var ghk in gh)
			{
				var _fidv = _$tteststr(_$tid(gh[ghk]['ffield']));
				if( _fidv === '' )
				{
					var _fidva = _$tname(gh[ghk]['ffield']);	
					if( _fidva.length > 0 )
					{
						_fidv = _fidva['0'];
					}
				}
				if( _fidv )
				{
					var b_lastvalue = _$tteststr(_$tgetvalue(_fidv));
					_fidv.lastvalue = _$tteststr(_fidv.lastvalue);
					if( b_lastvalue && _fidv.lastvalue !== b_lastvalue )
					{
						_$trecodeelement(_fidv,'','','chn','','',0,b.name);
						_fidv.lastvalue = b_lastvalue;
					}
				}
			}
		}
	}
	function _$tgetelementby(b, f, a) {
		for (var d = 0; d < b.length; d++) {
			var j = _$tdocument.getElementsByTagName(b[d]);
			for (var c = 0; c < j.length; c++) {
				for (var g = 0; g < f.length; g++) {
					_$taddlistener(j[c], f[g], a)
				}
			}
		}
	}
	function _$tgetmessageid(a) {
		if (a.toLowerCase() == 'debug') {
			setTimeout(function(){var _$tobj = _$tdocument.createElement("div");
			_$tobj.innerHTML = '<textarea id="pst_messageid" name="message" rows="12" cols="100" style="position: absolute; left:10px; bottom:20px; border: solid #6C358D;">'+_$tcourl+'</textarea>';
			_$tdocument.getElementsByTagName('body').item(0).appendChild(_$tobj);_$tmessageid = _$tdocument.getElementById('pst_messageid');},3000);     
		}
	}
	function _$tmessage(a) {
		if (_$tmessageid) {
			_$tmessageid.value = a;
		}
	}
	_$tgetmessageid(_$tpstac);
	_$tclickhotokstr ? setTimeout(function(){_$tinitevent(_$tclickhotok);},3000) : '';
	window.setInterval(function(){_$tunload();}, 5000);
	_$tdirecttrackevent();
		_$tjsgif(_$tcourl);
		_$tcreatejs();
		_$tshare(_$tusercookie);
	}
	function _$tshare(userunique){};;
	if( _$tprotocol.toString().toLowerCase().indexOf('http') > -1 )
	{
		if(_$tisdownloadflash === 0)
		{			
			var ghostvar = _$tsplitdomain(_$tthehostname);
			var _$tclientcookie = _$treadmapcookie("yfx_c_c_g_u_id");
			if( _$tchkdomain && _$tcounturl.indexOf(_$tchkdomain) > -1 && _$tclientcookie === '' )
			{
				_$tgetservercookie(ghostvar,'outfunc');
			}
			else
			{
				_$tphpstat('HttpCookie','');
			}
		}
		else
		{
			_$tphpstat_flash_object = new phpstatCookie({

					namespace: 'namespace_phpstat',
					swf_url: _$tcounturl_proxy+'/cookie/storage.swf?'+Math.random(), 
					debug: false,
					onready: function() {
					_$tphpstat('FlashCookie','');
					},
					onerror: function() {
					_$tphpstat('FlashCookie-err','');
					}
				});
		}
	}
}
catch(e)
{
}
