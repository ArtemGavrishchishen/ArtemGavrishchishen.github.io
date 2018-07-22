$(function() {

	$(document).ready(function() {
		$('.menu__link--trigger').click(function() {
			$('.menu__list').slideToggle(500);
		});

		$(window).resize(function() {
			if (  $(window).width() > 500 ) {
				$('.menu__list').removeAttr('style');
			 }
		});
	});

});
