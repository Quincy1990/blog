(function($) {
	H.index = {
		init: function () {
			var _this = this;
			this.event();

			getResult('carousel', {}, 'carousel');
			getResult('category', {}, 'category');
			getResult('hotCourse', {}, 'hotCourse');
			getResult('famousTeacher', {}, 'famousTeacher');

			getResult('hotQuestion', {}, 'hotQuestion');
			getResult('recommendNote', {}, 'recommendNote');
		},
		event: function() {
			var _this = this;
			$('body').delegate('.pop-close', 'click', function(e) {
				e.preventDefault();
				$('.pop').removeClass('show');
				$('.shine').remove();
			}).delegate('.cover a', 'click', function(e) {
				e.preventDefault();
				var id = $(this).attr('data-id');
				$('.pop img').attr('src', './images/weapon/' + id + '.png');
				$.getJSON('http://qt.qq.com/php_cgi/cfmobile_news/php/wiki/varcache_detail.php?id=' + id, function(data){
					_this.fillDetail(data);
				});
				$('.pop').addClass('show');
			});
		},
		fill: function(data) {
			$('body').append('<div class="last-time">最后修改时间：' + timeTransform(data.last_timestamp * 1e3) + '</div>');
			var tpl = simpleTpl();
			var lists = data.list, tag, hero, level, gtype, ctype, end_date;
			for (var i in lists) {
				tag = lists[i].tag == '1' ? ' new ' : '';
				hero = lists[i].hero == '1' ? ' hero ' : '';
				level = ' l' + lists[i].level + ' ';
				gtype = data.weapon_types[lists[i].gtype] || '';
				ctype = data.currency_types[lists[i].ctype] || '';
				end_date = lists[i].end_date ? timeTransform(lists[i].end_date * 1e3) : '';
				tpl._('<div class="item clearfix col-lg-3 col-md-3 col-sm-6 col-xs-6' + level + hero + tag +'">')
					._('<div class="item-wrap">')
						._('<div class="shade"></div>')
						._('<div class="cover pos">')
							._('<a href="javascript:;" data-id="' + lists[i].id + '" target="_blank" title="' + lists[i].name + '">')
								._('<img src="images/weapon/default.png" delayLoad="images/weapon/' + (lists[i].id || 'default') + '.png" alt="' + lists[i].name + '" rel="nofollow">')
							._('</a>')
							._('<p class="time">' + end_date + '</p>')
						._('</div>')
						._('<div class="info">')
							._('<h4 class="title ellipsis">' + lists[i].name + '</h4>')
							._('<div class="msg mtn cl">')
								._('<span>' + gtype + '</span>')
								._('<span>' + ctype + '</span>')
							._('</div>')
						._('</div>')
					._('</div>')
				._('</div>');
			}
			$('.post').html(tpl.toString());

			need(["biz.delayLoad-min"],function(D){
				var imgs = document.images, l = imgs.length;
				for(var i=0;i<l;i++){
					D.lazyLoad(imgs[i],function(){});
				}
			});
	
			$("#pop").hover3d({
				sensitivity: 100,
				selector: ".pop-in",
				shine: !0
			});
		}
	};

	W.carousel = function(data) {
		if (data.success && data.carousel) {
			var tpl = '';
			for (i in data.carousel) {
				tpl += '<div class="swiper-slide"><a href="' + (data.carousel[i].url || 'javascript:;') + '"><img src="' + data.carousel[i].image + '"></a></div>';
			}
			$('.swiper-wrapper').html(tpl);
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 0,
				loop: true,
				autoplay: 3000,
				observer:true
			});
			$(".swiper-container").mouseenter(function () {
				swiper.stopAutoplay();
			}).mouseleave(function(){
				swiper.startAutoplay();
			});
		}
	};

	W.category = function(data) {
		if (data.success && data.category) {
			var tpl = '';
			for (i in data.category) {
				tpl += '<a href="course.html?keywords=' + data.category[i].title + '" class="col-lg-2-4 col-md-2-4 col-sm-2-4 col-xs-12"><div class="bar-content g-shadow"><p>' + data.category[i].title + '</p><span class="' + (data.category[i].subtitle ? '' : 'none') + '">' + data.category[i].subtitle + '</span></div></a>';
			}
			$('.navbar').html(tpl);
		}
	};

	W.hotCourse = function(data) {
		if (data.success && data.hotCourse) {
			nodetpl.get('/static/template/course.tpl', data, function(result){
				$('.class-lists .lists-content').html(result);
			});
		}
	};

	W.famousTeacher = function(data) {
		if (data.success && data.famousTeacher) {
			nodetpl.get('/static/template/teacher.tpl', data, function(result){
				$('.teacher-lists .lists-content').html(result);
			});
		}
	};

	W.hotQuestion = function(data) {
		if (data.success && data.hotQuestion) {
			nodetpl.get('/static/template/hotQuestion.tpl', data, function(result){
				$('.article-lists .lists-content').html(result);
			});
		}
	};

	W.recommendNote = function(data) {
		if (data.success && data.recommendNote) {
			nodetpl.get('/static/template/recommendNote.tpl', data, function(result){
				$('.note-lists .lists-content').html(result);
			});
		}
	};
})(jQuery);

$(function(){
	H.index.init();
});
