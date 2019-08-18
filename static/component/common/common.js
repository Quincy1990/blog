var W = W || window;
var __ns = function( fullNs ) {
	var nsArray = fullNs.split('.');
	var evalStr = '';
	var ns = '';
	for ( var i = 0, l = nsArray.length; i < l; i++ ) {
		i !== 0 && ( ns += '.' );
		ns += nsArray[i];
		evalStr += '( typeof ' + ns + ' === "undefined" && (' + ns + ' = {}) );';
	}
	evalStr !== '' && eval( evalStr );
};
__ns('H');

var simpleTpl = function( tpl ) {
	tpl = $.isArray( tpl ) ? tpl.join( '' ) : (tpl || '');
	return {
		store: tpl,
		_: function() {
			var me = this;
			$.each( arguments, function( index, value ) {
				me.store += value;
			} );
			return this;
		},
		toString: function() {
			return this.store;
		}
	};
};

var saveData = function(key, value) {
	if (key) window.localStorage.setItem(key + '_' + openid + '_' + mpappid, $.trim(value));
};
var getData = function(key) {
	if (key) return window.localStorage.getItem(key + '_' + openid + '_' + mpappid) || '';
};
var delData = function(key) {
	if (key) window.localStorage.removeItem(key + '_' + openid + '_' + mpappid);
};

var getQueryString = function( name, url ) {
	if (!url) url = location.href;
	var target = url.split('?');
	if (url.indexOf('?') >= 0) {
		var temp = '';
		for(var i = 1; i < target.length; i++) {
			if (i == 1) {
				temp = target[i];
			} else {
				temp = temp + '&' + target[i];
			}
		};
		var currentSearch = decodeURIComponent(temp);
		if (currentSearch != '') {
			var paras = currentSearch.split('&');
			for ( var i = 0, l = paras.length, items; i < l; i++ ) {
				var ori = paras[i];
				if (paras[i].indexOf('#') >= 0) {
					paras[i] = paras[i].split('#')[0];
				}
				items = paras[i].split('=');
				if ( items[0] === name) return items[1];
			};
			return '';
		} else {
			return '';
		}
	} else {
		return '';
	}
};

var regEx = {
	mail: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
};

var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
Math.sn = function (len, radix) {
	var chars = CHARS, sn = [], i;
	radix = radix || chars.length;
	if (len) {
		for (i = 0; i < len; i++) sn[i] = chars[0 | Math.random()*radix];
	} else {
		var r;
		sn[8] = sn[13] = sn[18] = sn[23] = '-';
		sn[14] = '4';
		for (i = 0; i < 36; i++) {
			if (!sn[i]) {
				r = 0 | Math.random()*16;
				sn[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}
	var re = new RegExp("-", "g");
	return sn.join('').toLocaleLowerCase().replace(re, "");
};

var showLoading = function($container, tips) {
	var t = simpleTpl(), spinnerSize = 146,
		width = $(window).width(),
		height = $(window).height(),
		$container = $container || $('body'),
		$spinner = $container ? $container.find('#spinner') : $('body').children('#spinner'),
		tips = tips || '努力加载中...';

	if ($spinner.length > 0) {
		$spinner.remove();
	};
	t._('<div id="spinner" class="spinner">')
		._('<div class="new-spinner">')
			._('<div class="new-overlay"></div>')
				._('<div class="new-spinner-inner">')
					._('<p class="new-spinner-spinner"></p>')
					._('<p class="new-spinner-text">' + tips + '</p>')
				._('</div>')
			._('</div>')
		._('</div>')
	._('</div>');
	$spinner = $(t.toString()).css({'top': (height - spinnerSize) / 2, 'left': (width - spinnerSize) / 2});
	$container.append($spinner);
	if(screen.width == $(window).width()){
		$('.new-spinner').addClass('scale')
	}
};

var hideLoading = function($container) {
	if ($container) {
		$container.find('.spinner').remove();
	} else {
		$('body').children('.spinner').remove();
	};
};

var showTips = function(word, timer) {
	var id = Math.sn();
	var paddingValue = 0,
		fontSizeValue = 0,
		borderRadiusValue = 0;
	if (screen.width == $(window).width()) {
		paddingValue = '12px 15px';
		fontSizeValue = '14px';
		borderRadiusValue = '6px';
	} else {
		paddingValue = '24px 30px';
		fontSizeValue = '28px';
		borderRadiusValue = '12px';
	}
	
	$('body').append('<div id="tips_' + id + '" class="tips none" style="position:fixed;max-width:80%;top:0;z-index:999;color:#FFF;padding:'+ paddingValue+';background:rgba(0,0,0,.55);font-size:'+fontSizeValue+';text-align:center;border-radius:'+borderRadiusValue+';z-index: 199999;"></div>');
	$('#tips_' + id).html(word).removeClass('none').css('opacity', '0');
	$('#tips_' + id).css({'left': ($(window).width()-$('#tips_' + id).width())/2, '-webkit-transform': "translateY(40vh)"});
	$('#tips_' + id).animate({'opacity': '1', '-webkit-transform': "translateY(45vh)"}, 300, function() {
		setTimeout(function() {
			$('#tips_' + id).animate({'opacity':'0'}, 200, function() {$('#tips_' + id).remove();});
		}, timer || 1200);
	});
};

var getResult = function(url, data, callback, showloading, $target, isAsync) {
	if (debug) {
		if (typeof(eval(callback)) == 'function' && typeof(callback + '_data') != 'undefined') {
			var data = eval(callback + '_data') || null;
			window[callback](data);
		} else {
			console.warn('callback is null!');
		}
	} else {
		if (showloading) showLoading();
		$.ajax({
			type : 'GET',
			async : typeof isAsync === 'undefined' ? false : isAsync,
			url : domain_url + url + dev,
			data: data,
			dataType : "jsonp",
			jsonp : callback,
			complete: function() {
				if (showloading) hideLoading();
			},
			success : function(data) {}
		});
	}
};

var hexcase=0;function hex_md5(a){return !a?'':rstr2hex(rstr_md5(str2rstr_utf8(a)))}function hex_hmac_md5(a,b){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"}function rstr_md5(a){return binl2rstr(binl_md5(rstr2binl(a),a.length*8))}function rstr_hmac_md5(c,f){var e=rstr2binl(c);if(e.length>16){e=binl_md5(e,c.length*8)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=binl_md5(a.concat(rstr2binl(f)),512+f.length*8);return binl2rstr(binl_md5(d.concat(g),512+128))}function rstr2hex(c){try{hexcase}catch(g){hexcase=0}var f=hexcase?"0123456789ABCDEF":"0123456789abcdef";var b="";var a;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);b+=f.charAt((a>>>4)&15)+f.charAt(a&15)}return b}function str2rstr_utf8(c){var b="";var d=-1;var a,e;while(++d<c.length){a=c.charCodeAt(d);e=d+1<c.length?c.charCodeAt(d+1):0;if(55296<=a&&a<=56319&&56320<=e&&e<=57343){a=65536+((a&1023)<<10)+(e&1023);d++}if(a<=127){b+=String.fromCharCode(a)}else{if(a<=2047){b+=String.fromCharCode(192|((a>>>6)&31),128|(a&63))}else{if(a<=65535){b+=String.fromCharCode(224|((a>>>12)&15),128|((a>>>6)&63),128|(a&63))}else{if(a<=2097151){b+=String.fromCharCode(240|((a>>>18)&7),128|((a>>>12)&63),128|((a>>>6)&63),128|(a&63))}}}}}return b}function rstr2binl(b){var a=Array(b.length>>2);for(var c=0;c<a.length;c++){a[c]=0}for(var c=0;c<b.length*8;c+=8){a[c>>5]|=(b.charCodeAt(c/8)&255)<<(c%32)}return a}function binl2rstr(b){var a="";for(var c=0;c<b.length*32;c+=8){a+=String.fromCharCode((b[c>>5]>>>(c%32))&255)}return a}function binl_md5(p,k){p[k>>5]|=128<<((k)%32);p[(((k+64)>>>9)<<4)+14]=k;var o=1732584193;var n=-271733879;var m=-1732584194;var l=271733878;for(var g=0;g<p.length;g+=16){var j=o;var h=n;var f=m;var e=l;o=md5_ff(o,n,m,l,p[g+0],7,-680876936);l=md5_ff(l,o,n,m,p[g+1],12,-389564586);m=md5_ff(m,l,o,n,p[g+2],17,606105819);n=md5_ff(n,m,l,o,p[g+3],22,-1044525330);o=md5_ff(o,n,m,l,p[g+4],7,-176418897);l=md5_ff(l,o,n,m,p[g+5],12,1200080426);m=md5_ff(m,l,o,n,p[g+6],17,-1473231341);n=md5_ff(n,m,l,o,p[g+7],22,-45705983);o=md5_ff(o,n,m,l,p[g+8],7,1770035416);l=md5_ff(l,o,n,m,p[g+9],12,-1958414417);m=md5_ff(m,l,o,n,p[g+10],17,-42063);n=md5_ff(n,m,l,o,p[g+11],22,-1990404162);o=md5_ff(o,n,m,l,p[g+12],7,1804603682);l=md5_ff(l,o,n,m,p[g+13],12,-40341101);m=md5_ff(m,l,o,n,p[g+14],17,-1502002290);n=md5_ff(n,m,l,o,p[g+15],22,1236535329);o=md5_gg(o,n,m,l,p[g+1],5,-165796510);l=md5_gg(l,o,n,m,p[g+6],9,-1069501632);m=md5_gg(m,l,o,n,p[g+11],14,643717713);n=md5_gg(n,m,l,o,p[g+0],20,-373897302);o=md5_gg(o,n,m,l,p[g+5],5,-701558691);l=md5_gg(l,o,n,m,p[g+10],9,38016083);m=md5_gg(m,l,o,n,p[g+15],14,-660478335);n=md5_gg(n,m,l,o,p[g+4],20,-405537848);o=md5_gg(o,n,m,l,p[g+9],5,568446438);l=md5_gg(l,o,n,m,p[g+14],9,-1019803690);m=md5_gg(m,l,o,n,p[g+3],14,-187363961);n=md5_gg(n,m,l,o,p[g+8],20,1163531501);o=md5_gg(o,n,m,l,p[g+13],5,-1444681467);l=md5_gg(l,o,n,m,p[g+2],9,-51403784);m=md5_gg(m,l,o,n,p[g+7],14,1735328473);n=md5_gg(n,m,l,o,p[g+12],20,-1926607734);o=md5_hh(o,n,m,l,p[g+5],4,-378558);l=md5_hh(l,o,n,m,p[g+8],11,-2022574463);m=md5_hh(m,l,o,n,p[g+11],16,1839030562);n=md5_hh(n,m,l,o,p[g+14],23,-35309556);o=md5_hh(o,n,m,l,p[g+1],4,-1530992060);l=md5_hh(l,o,n,m,p[g+4],11,1272893353);m=md5_hh(m,l,o,n,p[g+7],16,-155497632);n=md5_hh(n,m,l,o,p[g+10],23,-1094730640);o=md5_hh(o,n,m,l,p[g+13],4,681279174);l=md5_hh(l,o,n,m,p[g+0],11,-358537222);m=md5_hh(m,l,o,n,p[g+3],16,-722521979);n=md5_hh(n,m,l,o,p[g+6],23,76029189);o=md5_hh(o,n,m,l,p[g+9],4,-640364487);l=md5_hh(l,o,n,m,p[g+12],11,-421815835);m=md5_hh(m,l,o,n,p[g+15],16,530742520);n=md5_hh(n,m,l,o,p[g+2],23,-995338651);o=md5_ii(o,n,m,l,p[g+0],6,-198630844);l=md5_ii(l,o,n,m,p[g+7],10,1126891415);m=md5_ii(m,l,o,n,p[g+14],15,-1416354905);n=md5_ii(n,m,l,o,p[g+5],21,-57434055);o=md5_ii(o,n,m,l,p[g+12],6,1700485571);l=md5_ii(l,o,n,m,p[g+3],10,-1894986606);m=md5_ii(m,l,o,n,p[g+10],15,-1051523);n=md5_ii(n,m,l,o,p[g+1],21,-2054922799);o=md5_ii(o,n,m,l,p[g+8],6,1873313359);l=md5_ii(l,o,n,m,p[g+15],10,-30611744);m=md5_ii(m,l,o,n,p[g+6],15,-1560198380);n=md5_ii(n,m,l,o,p[g+13],21,1309151649);o=md5_ii(o,n,m,l,p[g+4],6,-145523070);l=md5_ii(l,o,n,m,p[g+11],10,-1120210379);m=md5_ii(m,l,o,n,p[g+2],15,718787259);n=md5_ii(n,m,l,o,p[g+9],21,-343485551);o=safe_add(o,j);n=safe_add(n,h);m=safe_add(m,f);l=safe_add(l,e)}return Array(o,n,m,l)}function md5_cmn(h,e,d,c,g,f){return safe_add(bit_rol(safe_add(safe_add(e,h),safe_add(c,f)),g),d)}function md5_ff(g,f,k,j,e,i,h){return md5_cmn((f&k)|((~f)&j),g,f,e,i,h)}function md5_gg(g,f,k,j,e,i,h){return md5_cmn((f&j)|(k&(~j)),g,f,e,i,h)}function md5_hh(g,f,k,j,e,i,h){return md5_cmn(f^k^j,g,f,e,i,h)}function md5_ii(g,f,k,j,e,i,h){return md5_cmn(k^(f|(~j)),g,f,e,i,h)}function safe_add(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))};

var getRandomArbitrary = function(min, max) {
	return parseInt(Math.random()*(max - min)+min);
};

$.fn.countDown = function(options) {
    var defaultVal = {
        // 存放结束时间
        eAttr : 'etime',
        sAttr : 'stime', // 存放开始时间
        wTime : 29, // 以100毫秒为单位进行演算
        etpl : '%H%:%M%:%S%.%ms%', // 还有...结束
        stpl : '%H%:%M%:%S%.%ms%', // 还有...开始
        sdtpl : '已开始',
        otpl : '活动已结束', // 过期显示的文本模版
        stCallback: null,
        sdCallback: null,
        otCallback: null
    };
    var dateNum = function(num) {
        return num < 10 ? '0' + num : num;
    };
    var subNum = function(num){
        numF = num.toString().substring(0,1);
        numS = num.toString().substring(1,num.length);
        return num = "<label><i>"+ numF +"</i><i>"+ numS + "</i></label>";
    };
    var s = $.extend(defaultVal, options);
    var vthis = $(this);
    var num = 60;
    var runTime = function() {
        var nowTime = new Date().getTime();
        vthis.each(function() {
            var nthis = $(this);
            var sorgT = parseInt(nthis.attr(s.sAttr));
            var eorgT = parseInt(nthis.attr(s.eAttr));
            var sT = isNaN(sorgT) ? 0 : sorgT - nowTime;
            var eT = isNaN(eorgT) ? 0 : eorgT - nowTime;
            var showTime = function(rT, showTpl) {
                var s_ = Math.round((rT % 60000) / s.wTime);
                s_ = subNum(dateNum(Math.min(Math.floor(s_ / 1000 * s.wTime), 59)));
                var m_ = subNum(dateNum(Math.floor((rT % 3600000) / 60000)));
                var h_ = subNum(dateNum(Math.floor((rT % 86400000) / 3600000)));
                var d_ = subNum(dateNum(Math.floor(rT / 86400000)));
                var ms_ = Math.floor(rT % 1000);
                if(ms_>=10 && ms_ <100) ms_ = "0"+ms_;
                if(ms_ < 10) ms_ = "00"+ms_;
                ms_ = ms_.toString().substr(0,2);
                ms_ = subNum(ms_);
                nthis.html(showTpl.replace(/%S%/, s_).replace(/%M%/, m_).replace(/%H%/, h_).replace(/%D%/, d_).replace(/%ms%/,ms_));
            };
            if (sT > 0) {
                showTime(sT, s.stpl);
                s.stCallback && s.stCallback();
            } else if (eT > 0) {
                showTime(eT, s.etpl);
                s.sdCallback && s.sdCallback();
            } else {
                nthis.html(s.otpl);
                s.otCallback && s.otCallback();
            }

        });
    };

    setInterval(function() {
        runTime();
    }, s.wTime);
};

$('body').append('<div id="J_GotoTop" class="elevator"><a href="" class="elevator-msg" target="_blank"><i class="icon-feedback"></i><span class="">联系我们</span></a><a href="mobile.html" target="_blank" class="elevator-app"><i class="icon-appdownload"></i><span class="">APP下载</span><div class="elevator-app-box"></div></a><a href="javascript:void(0)" class="elevator-weixin" id="js-elevator-weixin"><i class="icon-wxgzh"></i><span class="">官方微信</span><div class="elevator-weixin-box"></div></a><a href="javascript:void(0)" class="elevator-top no-goto" style="" id="backTop"><i class="icon-up2"></i><span class="">返回顶部</span></a></div>');
function isTop() {
	height = $(window).height(),
	scrollTop = $(document).scrollTop(),
	scrollTop >= 768 ? ($("#backTop").show(),
	$("#js-elevator-weixin").removeClass("no-goto")) : ($("#backTop").hide(),
	$("#js-elevator-weixin").addClass("no-goto"))
};
isTop();
$(window).scroll(function() {
	isTop();
});

$("#backTop").click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 200)
});

var classTpl = simpleTpl();
classTpl._('<div class="lists-content-card col-lg-3 col-md-6 col-sm-6 col-xs-12">')
	._('<a target="_blank" class="course-card g-shadow" href="courselist.html?from=index">')
		._('<div class="course-card-cover" style="background:url(/static/images/classcover/cover.jpg) center center no-repeat;background-size:cover;"></div>')
		._('<div class="course-card-content">')
			._('<h3 class="course-card-name ui-nowrap-multi">BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试BAT大咖助力 全面升级Android面试</h3>')
			._('<p class="course-card-intro ui-nowrap-multi">2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选2017最全面，见效最快的Android面试课程，赢取满意offer的不二之选</p>')
			._('<div class="clearfix course-card-bottom">')
				._('<div class="course-card-teacher">')
					._('<div class="course-card-teacher-avatar">')
						._('<img src="/static/images/avatar/avatar01.png">')
					._('</div>')
					._('<p class="course-card-teacher-name">老师姓名</p>')
				._('</div>')
				._('<div class="course-card-info">564人在学</div>')
			._('</div>')
		._('</div>')
	._('</a>')
._('</div>');

var teacherTpl = simpleTpl();
teacherTpl._('<div class="lists-content-card col-lg-2-4 col-md-3 col-sm-3 col-xs-6">')
	._('<a target="_blank" class="teacher-card g-shadow" href="lecturerdetail.html?from=index">')
		._('<div class="teacher-card-cover" style="background:url(/static/images/avatar/avatar2.jpg) center center no-repeat;background-size:cover;"></div>')
		._('<div class="teacher-card-content">')
			._('<h3 class="teacher-card-name ui-nowrap-flex">教师姓名</h3>')
			._('<p class="teacher-card-school ui-nowrap-flex">清华大学研究生讲师</p>')
			._('<p class="teacher-card-detail ui-nowrap-multi-4">拥有多年带领华为数据挖掘团队给全世界范围内著名运营商提供大数据解决方案的经验所带领的团队主要负责处理、挖掘和分析每天数以TB计的数据。作为一个带领拥有20人团队成功完成多个全球项目的leader,非常了解当今用途</p>')
		._('</div>')
	._('</a>')
._('</div>');

var articleTpl = simpleTpl();
articleTpl._('<p class="clearfix">')
	._('<a class="label" href="">MongoDB</a>')
	._('<i>•</i>')
	._('<a target="_blank" href="forumdetail.html?from=index" class="content ui-nowrap-multi">MongoDB给数据库创建用户</a>')
._('</p>');

var historyTpl = simpleTpl();
historyTpl._('<div class="clearfix tl-item ">')
	._('<span class="time">')
		._('<b>2017</b>')
		._('<em>07月01日</em>')
	._('</span>')
	._('<div class="course-list course-list-m">')
		._('<ul class="clearfix">')
			._('<li class="course-one">')
				._('<div class="course-list-img fl">')
					._('<a href="courselist.html?from=user" target="_blank">')
						._('<img width="200" height="113" alt="课程名称" src="/static/images/classcover/course1.jpg">')
					._('</a>')
				._('</div>')
				._('<div class="course-list-cont">')
					._('<h3 class="study-hd">')
						._('<a href="courselist.html?from=user" target="_blank">课程名称</a>')
						._('<span class="i-new">更新完毕</span>')
					._('</h3>')
					._('<div class="study-points">')
						._('<span class="i-left span-common">已学26%</span>')
						._('<span class="i-mid span-common">用时 86分</span>')
						._('<span class="i-right span-common">学习至3-1 课程名称</span>')
					._('</div>')
					._('<div class="catog-points">')
						._('<span class="i-left span-common"><a href="courselist.html?from=user">笔记 <i>0</i></a></span>')
						._('<span class="i-mid span-common"><a href="courselist.html?from=user">代码 <i>0</i></a></span>')
						._('<span class="i-right span-common"><a href="courselist.html?from=user">问答 <i>0</i></a></span>')
						._('<a href="courselist.html?from=user" target="_blank" class="btn-red continute-btn">继续学习</a>')
					._('</div>')
				._('</div>')
			._('</li>')
		._('</ul>')
	._('</div>')
._('</div>');


var loginTpl = simpleTpl();
loginTpl._('<div class="mod-popup popup mod-login">')
	._('<div class="popup-wrap">')
		._('<a href="" class="btn-popup-close close"><i class="icon-close"></i></a>')
		._('<div class="popup-hd">')
			._('<p class="title">账号密码登录</p>')
		._('</div>')
		._('<div class="popup-bd">')
			._('<form action="" method="post" class="popup-form">')
				._('<div class="popup-input">')
					._('<input type="text" name="email" placeholder="手机号或邮箱" class="clear-input">')
					._('<input name="password" type="password" placeholder="密码" class="clear-input">')
				._('</div>')
				._('<a href="javascript:;" class="btn btn_func_login"><span class="text">立即登录</span></a>')
			._('</form>')
			._('<a class="reset-password red-link">忘记密码？</a>')
			._('<div class="switch-back">还没有账号？<a class="red-link user_sign">立即注册</a></div>')
		._('</div>')
	._('</div>')
._('</div>');

var signTpl = simpleTpl();
signTpl._('<div class="mod-popup popup mod-sign">')
	._('<div class="popup-wrap">')
		._('<a href="" class="btn-popup-close close"><i class="icon-close"></i></a>')
		._('<div class="popup-hd">')
			._('<p class="title">注册账号</p>')
		._('</div>')
		._('<div class="popup-bd">')
			._('<form action="" method="post" class="popup-form">')
				._('<div class="popup-input">')
					._('<input type="text" name="email" placeholder="手机号或邮箱" class="clear-input">')
					._('<input type="text" name="nickname" placeholder="用户名" class="clear-input">')
					._('<input name="password" type="password" placeholder="密码" class="clear-input">')
					._('<input class="none" name="password_repeat" type="password" placeholder="重复密码" class="clear-input">')
					._('<div class="radio-wrap">')
						._('<span class="active">学生</span>')
						._('<span>老师</span>')
					._('</div>')
				._('</div>')
				._('<label for="agree" class="checkbox agree">')
					._('&nbsp;我已阅读并同意相关服务条款和隐私政策')
				._('</label>')
				._('<a href="javascript:;" class="btn btn_func_sign"><span class="text">立即注册</span></a>')
			._('</form>')
			._('<a class="reset-password red-link">忘记密码？</a>')
			._('<div class="switch-back">已有账号？<a class="red-link user_login">立即登录</a></div>')
		._('</div>')
	._('</div>')
._('</div>');

var resetTpl = simpleTpl();
resetTpl._('<div class="mod-popup popup mod-reset">')
	._('<div class="popup-wrap">')
		._('<a href="" class="btn-popup-close close"><i class="icon-close"></i></a>')
		._('<div class="popup-hd">')
			._('<p class="title" class="password_reset">找回密码</p>')
		._('</div>')
		._('<div class="popup-bd">')
			._('<form action="" method="post" class="popup-form">')
				._('<div class="popup-input">')
					._('<input type="text" name="email" placeholder="手机号或邮箱" class="clear-input">')
				._('</div>')
				._('<a href="javascript:;" class="btn btn_func_password_reset"><span class="text">立即重置</span></a>')
			._('</form>')
			._('<div class="switch-back">又想起来了？<a class="red-link user_login">立即登录</a></div>')
		._('</div>')
	._('</div>')
._('</div>');

var infoTpl = simpleTpl();
infoTpl._('<div class="mod-popup popup mod-info">')
	._('<div class="popup-wrap">')
		._('<a href="" class="btn-popup-close close"><i class="icon-close"></i></a>')
		._('<div class="popup-hd">')
			._('<p class="title">修改个人信息</p>')
		._('</div>')
		._('<div class="popup-bd">')
			._('<form action="" method="post" class="popup-form">')
				._('<div class="popup-input">')
					._('<input type="text" name="email" placeholder="手机号或邮箱" class="clear-input">')
					._('<input type="text" name="nickname" placeholder="用户名" class="clear-input">')
					._('<input name="password" type="password" placeholder="密码" class="clear-input">')
					._('<input name="password_repeat" type="password" placeholder="重复密码" class="clear-input">')
					._('<div class="radio-wrap">')
						._('<span class="active">学生</span>')
						._('<span>老师</span>')
					._('</div>')
				._('</div>')
				._('<label for="agree" class="checkbox">')
					._('&nbsp;我已阅读并同意相关服务条款和隐私政策')
				._('</label>')
				._('<div class="btn-box"></div>')
				._('<a href="javascript:;" class="btn"><span class="text">立即注册</span></a>')
			._('</form>')
			._('<div class="switch-back"><a class="red-link">更换头像？</a></div>')
		._('</div>')
	._('</div>')
._('</div>');


// <div class="Modal-wrapper none">
// 	<div class="Modal-backdrop"></div>
// 	<div class="Modal Modal--default Modal-sign none" tabindex="0">
// 		<div class="Modal-inner">
// 			<div class="Modal-content Modal-content--spread">
// 				<div>
// 					<div class="SignFlowModalHeader">
// 						<h1 class="SignFlowModalHeader-title">
// 							加入麦哲思
// 						</h1>
// 					</div>
// 					<form novalidate="" class="SignFlow">
// 						<div class="SignFlow-account">
// 							<div class="SignFlowInput SignFlow-accountInputContainer">
// 								<div class="SignFlow-accountInput Input-wrapper">
// 									<input type="tel" value="" name="phoneNo" class="Input" placeholder="手机号或邮箱">
// 								</div>
// 								<div class="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden">
// 								</div>
// 							</div>
// 						</div>
// 						<div class="SignFlowInput SignFlow-username">
// 							<div class="Input-wrapper">
// 								<input value="" name="fullname" class="Input" placeholder="用户名">
// 							</div>
// 						</div>
// 						<div class="SignFlow-password">
// 							<div class="SignFlowInput">
// 								<div class="Input-wrapper">
// 									<input type="password" value="" name="password" class="Input" placeholder="密码">
// 								</div>
// 							</div>
// 						</div>
// 						<div class="SignFlowInput SignFlow-type">
// 							<div class="Input-wrapper">
// 								<a href="#" class="active">我是学生</a>
// 								<a href="#">我是老师</a>
// 							</div>
// 						</div>
// 						<a class="Button SignFlow-submitButton Button--primary Button--blue"
// 						type="submit">
// 							注册
// 						</a>
// 					</form>
// 					<div class="SignFlowModal-registerFooter">
// 						<span>
// 							注册即代表同意
// 							<a class="Button Button--plain" target="_blank" href="#" type="button">
// 								《麦哲思协议》
// 							</a>
// 						</span>
// 						<span>
// 							<!-- react-text: 55 -->
// 							已有帐号？
// 							<!-- /react-text -->
// 							<a class="Button SignFlowModal-switchButton Button--plain" type="button">
// 								立即登录
// 							</a>
// 						</span>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<a class="Button Modal-closeButton Button--plain" aria-label="关闭" type="button">
// 			<svg viewBox="0 0 14 14" class="Icon Modal-closeIcon Icon--remove" width="16"
// 			height="16" aria-hidden="true" style="height: 16px; width: 16px;">
// 				<title>
// 				</title>
// 				<g>
// 					<path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z">
// 					</path>
// 				</g>
// 			</svg>
// 		</a>
// 	</div>
// 	<div class="Modal Modal--default Modal-login none" tabindex="0">
// 		<div class="Modal-inner">
// 			<div class="Modal-content Modal-content--spread">
// 				<div>
// 					<div class="SignFlowModalHeader">
// 						<h1 class="SignFlowModalHeader-title">
// 							登录麦哲思
// 						</h1>
// 					</div>
// 					<form novalidate="" class="SignFlow">
// 						<div class="SignFlow-account">
// 							<div class="SignFlowInput SignFlow-accountInputContainer">
// 								<div class="SignFlow-accountInput Input-wrapper">
// 									<input type="tel" value="" name="phoneNo" class="Input" placeholder="手机号或邮箱">
// 								</div>
// 								<div class="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden">
// 								</div>
// 							</div>
// 						</div>
// 						<div class="SignFlow-password">
// 							<div class="SignFlowInput">
// 								<div class="Input-wrapper">
// 									<input type="password" value="" name="password" class="Input" placeholder="密码">
// 								</div>
// 							</div>
// 						</div>
// 						<a class="Button SignFlow-submitButton Button--primary Button--blue"
// 						type="submit">
// 							登录
// 						</a>
// 					</form>
// 					<div class="SignFlowModal-registerFooter">
// 						<span>
// 							<a class="Button Button--plain" target="_blank" href="#" type="button">
// 								忘记密码？
// 							</a>
// 						</span>
// 						<span>
// 							还没有账号？
// 							<a class="Button SignFlowModal-switchButton Button--plain" type="button">
// 								立即注册
// 							</a>
// 						</span>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<a class="Button Modal-closeButton Button--plain" aria-label="关闭" type="button">
// 			<svg viewBox="0 0 14 14" class="Icon Modal-closeIcon Icon--remove" width="16"
// 			height="16" aria-hidden="true" style="height: 16px; width: 16px;">
// 				<title>
// 				</title>
// 				<g>
// 					<path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z">
// 					</path>
// 				</g>
// 			</svg>
// 		</a>
// 	</div>
// 	<div class="Modal Modal--default Modal-reset none" tabindex="0">
// 		<div class="Modal-inner">
// 			<div class="Modal-content Modal-content--spread">
// 				<div>
// 					<div class="SignFlowModalHeader">
// 						<h1 class="SignFlowModalHeader-title">
// 							找回登录密码
// 						</h1>
// 					</div>
// 					<form novalidate="" class="SignFlow">
// 						<div class="SignFlow-account">
// 							<div class="SignFlowInput SignFlow-accountInputContainer">
// 								<div class="SignFlow-accountInput Input-wrapper">
// 									<input type="tel" value="" name="phoneNo" class="Input" placeholder="手机号或邮箱">
// 								</div>
// 								<div class="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden">
// 								</div>
// 							</div>
// 						</div>
// 						<a class="Button SignFlow-submitButton Button--primary Button--blue"
// 						type="submit">
// 							下一步
// 						</a>
// 					</form>
// 					<div class="SignFlowModal-registerFooter">
// 						<span>
// 						</span>
// 						<span>
// 							<a class="Button SignFlowModal-switchButton Button--plain" type="button">
// 								又想起来了»
// 							</a>
// 						</span>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<a class="Button Modal-closeButton Button--plain" aria-label="关闭" type="button">
// 			<svg viewBox="0 0 14 14" class="Icon Modal-closeIcon Icon--remove" width="16"
// 			height="16" aria-hidden="true" style="height: 16px; width: 16px;">
// 				<title>
// 				</title>
// 				<g>
// 					<path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z">
// 					</path>
// 				</g>
// 			</svg>
// 		</a>
// 	</div>
// </div>

var flagFoot = setInterval(function(){
	var isFootLoad = $('footer').length;
	if (isFootLoad > 0) {
		clearInterval(flagFoot);
		flagFoot = null;
		fixFootPad();
	}
}, 200);
function fixFootPad() {
    $('body').css('padding-bottom', $('footer').height());
};
$(window).resize(function() {
    fixFootPad();
});