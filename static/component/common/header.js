var header = '';
var header = simpleTpl();
var userStateTpl = '<div class="header-unenter"><a id="header-register" href="javascript:;">注册</a><span class="header-split">|</span><a id="header-login" href="javascript:;">登录</a></div>';
var user_pw = $.cookie('mzs_sufei_s_pw') || '';
var user_nn = $.cookie('mzs_sufei_s_nn') || '';
if (user_pw && user_nn) {
	userStateTpl = '<div class="header-enter"><div id="header-msg" class="header-msg fl"><a class="icon-notifi" href="notice.html" title="我的消息"><i class="msg_count hidden"></i></a><div class="header-msg-ct"><span class="header-tc-ct-bg"></span><div class="news-header"><div class="news-title clr"><span class="news-title-ctx">消息</span><a class="news-title-op" href="javascript:;">全部标记为已读</a></div><ul class="news-list" id="news-list"><li class="news-item clr hover"><a class="news-ctx-link  blank_to" target="_blank" href="" title="课程java出新教程了，快去围观学习吧！">课程java出新教程了，快去围观学习吧！</a><a href="javascript:;" data-id="-1" data-appid="11" class="news-close"></a></li></ul><div class="news-bottom clearfix"><a class="news-bottom-conf" href=""></a><a class="news-more" href="notice.html">查看全部消息</a></div></div></div></div><div id="header-avatar" class="header-avatar ui-navbar fl"><a href="user.html"><img src="/static/images/avatar/avatar01.png"></a><div class="ui-navbar-userbox"><span class="header-tc-ct-bg"></span><div class="user-head"><a href="user.html" class="head-pic"><img src="/static/images/avatar/avatar01.png" alt="" width="100" height="100"><span class="head-cover"></span></a><dl class="user-info"><dt class="user-name"><a href="user.html">' + user_nn + '</a></dt><dd id="menu-my-user-panel-gift"><a href="javascript:void(0);">修改个人信息</a></dd><dd><a href="javascript:void(0);" id="menu-pop-logout-btn">退出</a></dd></dl></div><div class="user-grow-info"><ul><li><a href="javascript:void(0)"><span class="num" id="totalgrowth">16</span>课程</a></li><li><a href="javascript:void(0)"><span class="num">128</span>问答</a></li><li><a href="javascript:void(0)"><span class="num">10</span>经验</a></li></ul></div></div></div></div>';
// ._('<div class="header-enter">')
// 	._('<div id="header-msg" class="header-msg fl">')
// 		._('<a class="icon-notifi" href="notice.html" title="我的消息"><i class="msg_count hidden"></i></a>')
// 		._('<div class="header-msg-ct">')
// 			._('<span class="header-tc-ct-bg"></span>')
// 			._('<div class="news-header">')
// 				._('<div class="news-title clr">')
// 					._('<span class="news-title-ctx">消息</span>')
// 					._('<a class="news-title-op" href="javascript:;">全部标记为已读</a>')
// 				._('</div>')
// 				._('<ul class="news-list" id="news-list">')
// 					._('<li class="news-item clr hover">')
// 						._('<a class="news-ctx-link  blank_to" target="_blank" href="" title="课程java出新教程了，快去围观学习吧！">课程java出新教程了，快去围观学习吧！</a>')
// 						._('<a href="javascript:;" data-id="-1" data-appid="11" class="news-close"></a>')
// 					._('</li>')
// 				._('</ul>')
// 				._('<div class="news-bottom clearfix"><a class="news-bottom-conf" href=""></a><a class="news-more" href="notice.html">查看全部消息</a></div></div>')
// 		._('</div>')
// 	._('</div>')
// 	._('<div id="header-avatar" class="header-avatar ui-navbar fl">')
// 		._('<a href="user.html">')
// 			._('<img src="/static/images/avatar/avatar01.png">')
// 		._('</a>')
// 		._('<div class="ui-navbar-userbox">')
// 			._('<span class="header-tc-ct-bg"></span>')
// 			._('<div class="user-head">')
// 				._('<a href="user.html" class="head-pic">')
// 					._('<img src="/static/images/avatar/avatar01.png" alt="" width="100" height="100">')
// 					._('<span class="head-cover"></span>')
// 				._('</a>')
// 				._('<dl class="user-info">')
// 					._('<dt class="user-name">')
// 						._('<a href="user.html">用户昵称</a>')
// 					._('</dt>')
// 					._('<dd id="menu-my-user-panel-gift"><a href="javascript:void(0);">修改个人信息</a></dd>')
// 					._('<dd><a href="javascript:void(0);" id="menu-pop-logout-btn">退出</a></dd>')
// 				._('</dl>')
// 			._('</div>')
// 			._('<div class="user-grow-info">')
// 				._('<ul>')
// 					._('<li><a href="javascript:void(0)"><span class="num" id="totalgrowth">16</span>课程</a></li>')
// 					._('<li><a href="javascript:void(0)"><span class="num">128</span>问答</a></li>')
// 					._('<li><a href="javascript:void(0)"><span class="num">10</span>经验</a></li>')
// 				._('</ul>')
// 			._('</div>')
// 		._('</div>')
// 	._('</div>')
// ._('</div>')
}
header._('<header class="headertop shadow">')
	._('<div class="container">')
		._('<div class="logotop">')
			._('<a class="header-logo" href="/"><img src="/static/images/common/logo.png"></a>')
			._('<div class="header-nav">')
				._('<a href="/course.html" target="_blank">课程</a>')
				._('<a href="/lecturer.html" target="_blank">名师</a>')
				._('<a href="/forum.html" target="_blank">广场</a>')
			._('</div>')
		._('</div>')
		._('<div class="fl right">')
			._('<div class="search-hd on cl">')
				._('<form action="search.html" method="get" id="searchForm">')
					._('<div class="search-status">')
						._('<div class="search-filter">')
							._('<a href="javascript:;"><span class="tit">全站</span><i class="icon-down2"></i></a>')
							._('<ul class="options" style="display: none;">')
								._('<li><a href="javascript:;" data-rel="all">全站</a></li>')
								._('<li><a href="javascript:;" data-rel="course">课程</a></li>')
								._('<li><a href="javascript:;" data-rel="article">文章</a></li>')
								._('<li><a href="javascript:;" data-rel="lecturer">教师</a></li>')
							._('</ul>')
						._('</div>')
						._('<div class="search-select">')
							._('<input type="text" class="search-val" placeholder="请输入您要查找的内容" autocomplete="off" value="" name="keywords" id="keywords">')
							._('<ul class="options" style="display: none;">')
								._('<li><a href="search.html?keywords=AE入门">AE入门</a></li>')
								._('<li><a href="search.html?keywords=清华大学课程">清华大学课程</a></li>')
								._('<li><a href="search.html?keywords=javascript">javascript</a></li>')
								._('<li><a href="search.html?keywords=硬件入门">硬件入门</a></li>')
								._('<li><a href="search.html?keywords=古汉语文学">古汉语文学</a></li>')
							._('</ul>')
						._('</div>')
					._('</div>')
					._('<input type="hidden" name="type" value="all" id="sType">')
					._('<a class="search-hd-btn" href="javascript:;"><i class="icon-search"></i></a>')
				._('</form>')
			._('</div>')
			._('<div class="header-mobile fl">')
				._('<a href="mobile.html" title="App下载">')
					._('<i class="icon-appdownload"></i>')
				._('</a>')
			._('</div>')
			._('<div id="header-user" class="fl header-user">')
				._(userStateTpl)
			._('</div>')
		._('</div>')
		._('<div class="dropdown header-resp">')
			._('<a id="dLabel" href="javascript:;" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">')
				._('<i class="icon-menu"></i>')
			._('</a>')
			._('<ul class="dropdown-menu .header-menu-r" aria-labelledby="dLabel">')
				._('<li><a href="course.html"> 课程 </a></li>')
				._('<li><a href="lecturer.html"> 名师 </a></li>')
				._('<li><a href="forum.html"> 广场 </a></li>')
				._('<li><a href="search.html"> 搜索 </a></li>')
				._('<li class="none"><a href="notice.html"> 我的消息 </a></li>')
				._('<li class="header-menu-rs2"><a href=""> 登录 </a></li>')
				._('<li class="header-menu-rs2"><a href=""> 注册 </a></li>')
				._('<li class="header-menu-rs none"><a href="user.html"> 个人中心 </a></li>')
			._('</ul>')
		._('</div>')
	._('</div>')
._('</header>');
$.getScript("/static/libs/bootstrap/3.3.7/js/bootstrap.min.js", function() {
	$('#main').before(header.toString());

	$('.search-select input').focus(function(){
		$('.search-select .options').show();
	});
	$('.search-select input').blur(function(){
		setTimeout(function(){
			$('.search-select .options').hide();
		}, 4e2);
	});
	$(".search-hd-btn").click(function(e){
		var e = e || event, // enent做兼容
		isTrue = $(".search-hd").is(".on"); // 判断.search-hd是否是展开状态
		e.stopPropagation(); // 阻止冒泡
		// if ($(".search-hd").addClass('on').find('input').val() == "") { // 在输入框没有文字时执行
		// 	if (isTrue) { // isTrue等于 true 移除on，false就添加on
		// 		$(".search-hd").removeClass('on').find('input').blur();
		// 		$('.search-select ul').hide();
		// 	} else {
		// 		$(".search-hd").addClass('on').find('input').focus();
		// 	}
		// } else { //提交事件search-hd
			$(".search-hd").find('input').focus();
			if (isTrue) $("#searchForm").submit();
		// }
	});
	// $(".search-filter").click(function(e){
	// 	 e.stopPropagation();
	// });
	// $('.search-select a').click(function(){
	// 	$(".search-hd").find('input').val($(this).html());
	// 	$('.search-select .options').hide();
	// });
	// 
	
	$('body').delegate('#header-register, .user_sign', 'click', function(e) {
		e.preventDefault();
		closePop();
		noScroll();
		$('body').append(signTpl.toString());
	}).delegate('#header-login, .user_login', 'click', function(e) {
		e.preventDefault();
		closePop();
		noScroll();
		$('body').append(loginTpl.toString());
	}).delegate('.reset-password', 'click', function(e) {
		e.preventDefault();
		closePop();
		noScroll();
		$('body').append(resetTpl.toString());
	}).delegate('.btn-popup-close', 'click', function(e) {
		e.preventDefault();
		closePop();
	}).delegate('.btn_func_sign', 'click', function(e) {
		e.preventDefault();
		if (sign_check()) {
			var nn = $.trim($('.mod-sign input[name="nickname"]').val());
			var pw = $.trim($('.mod-sign input[name="password"]').val());
			$.cookie('mzs_sufei_s_nn', nn, { expires: 365 });
			$.cookie('mzs_sufei_s_pw', hex_md5(nn + pw), { expires: 365 });
			setTimeout(function () {
				location.href = location.href
			}, 150);
		}
	}).delegate('.btn_func_login', 'click', function(e) {
		e.preventDefault();
		if (login_check()) {
			var nn = $.trim($('.mod-login input[name="email"]').val());
			var pw = $.trim($('.mod-login input[name="password"]').val());
			if (nn === 'admin' && pw === '123456') {
				$.cookie('mzs_sufei_s_nn',nn, { expires: 365 });
				$.cookie('mzs_sufei_s_pw', hex_md5(nn + pw), { expires: 365 });
				setTimeout(function () {
					location.href = location.href
				}, 150);
			} else {
				alert('用户名或密码错误');
			}
		}
	}).delegate('.mod-sign .checkbox', 'click', function(e) {
		e.preventDefault();
		if ($(this).hasClass('check')) {
			$(this).removeClass('check')
		} else {
			$(this).addClass('check')
		}
	}).delegate('.mod-sign .radio-wrap span', 'click', function(e) {
		e.preventDefault();
		$('.mod-sign .radio-wrap span').removeClass('active');
		$(this).addClass('active')
	}).delegate('#menu-pop-logout-btn', 'click', function(e) {
		e.preventDefault();
		$.cookie('mzs_sufei_s_nn', null, { expires: -1 });
		$.cookie('mzs_sufei_s_pw', null, { expires: -1 });
		setTimeout(function () {
			location.href = location.href
		}, 150);
	});

	var sign_check = function () {
		var $email = $.trim($('.mod-popup input[name="email"]').val());
		var $nickname = $.trim($('.mod-popup input[name="nickname"]').val());
		var $password = $.trim($('.mod-popup input[name="password"]').val());
		var type = $('.mod-popup .radio-wrap .active').text() || '学生';
		var check = $('.mod-popup .checkbox').hasClass('check');
		if ($email.length === 0) {
			alert('请填写手机号或邮箱');
			return false;
		}
		if ($email.indexOf('@') >= 0) {
			// 邮箱
			if (!regEx.mail.test($.trim($email))) {
				alert('邮箱格式不正确');
				return false;
			}
		} else if ($email.substring(0, 1) === '1') {
			// 手机号
			if ($.trim($email).length != 11) {
				alert('无效手机号码');
				return false;
			}
		}
		if ($nickname.length === 0) {
			alert('请填写用户名');
			return false;
		}
		if ($password.length === 0 && $password.length < 6) {
			alert('密码不能为空且不可少于6位');
			return false;
		}
		if (!check) {
			alert('您还未同意我们的协议');
			return false;
		}
		return true;
	};

	var login_check = function () {
		var $email = $.trim($('.mod-popup input[name="email"]').val());
		var $password = $.trim($('.mod-popup input[name="password"]').val());
		if ($email.length === 0) {
			alert('请填写手机号或邮箱');
			return false;
		}
		if ($email.indexOf('@') >= 0) {
			// 邮箱
			if (!regEx.mail.test($.trim($email))) {
				alert('邮箱格式不正确');
				return false;
			}
		} else if ($email.substring(0, 1) === '1') {
			// 手机号
			if ($.trim($email).length != 11) {
				alert('无效手机号码');
				return false;
			}
		}
		if ($password.length === 0 && $password.length < 6) {
			alert('密码不能为空且不可少于6位');
			return false;
		}
		return true;
	};

	var closePop = function () {
		$('.mod-popup').remove();
		$('body').removeClass('noScroll')
	};

	var noScroll = function () {
		$('body').addClass('noScroll')
	};
});