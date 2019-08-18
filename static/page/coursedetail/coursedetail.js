function calHeight() {
	var width = $(window).width();
	var height = $(window).height() - $('.headertop').height() - $('footer').height();
    $('#studyMain, .js-box-wrap').css({
    	'width': width,
    	'height': height
    });
    $('body').css('padding-bottom', $('footer').height());
};
var flag = setInterval(function(){
	var isLoad1 = $('.headertop').length;
	var isLoad2 = $('footer').length;
	if (isLoad1 > 0 && isLoad2 > 0) {
		clearInterval(flag);
		flag = null;
		calHeight();
	}
}, 200);
$(window).resize(function() {
    calHeight();
});

$('.operator .chapter').click(function(e) {
	if ($(this).hasClass('light')) {
		$('.section-list').removeClass('section-open');
		$(this).removeClass('light');
	} else {
		$('.section-list').addClass('section-open');
		$(this).addClass('light');
	}
});