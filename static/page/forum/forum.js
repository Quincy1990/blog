$('.notice-head').click(function() {
	isON = $(this).parents('.notice-list').hasClass('on');
	isNoRead = !$(this).parents('.notice-list').hasClass('noread');
	if (isON) {
		$(this).parents('.notice-list').removeClass('on');
	} else {
		$(this).parents('.notice-list').addClass('on');
	}
	if (!isNoRead) $(this).parents('.notice-list').removeClass('noread');
});