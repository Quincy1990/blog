stackBlurImage( 'js-cover-img', 'canvas', 20, false );

$('.chapter h3').click(function(e) {
	var $chapter = $(this).parents('.chapter');
	var isOpen = $chapter.hasClass('chapter-active');
	if (isOpen) {
		$chapter.removeClass('chapter-active');
	} else {
		$chapter.addClass('chapter-active');
	}
});