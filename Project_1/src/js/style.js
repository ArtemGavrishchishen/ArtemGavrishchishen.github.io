$(function() {

	$(document).ready(function() {
		$('.menu__link--trigger').click(function() {
			$('.menu__list').slideToggle(300);
		});

		$(window).resize(function() {
			if (  $(window).width() > 300 ) {
				$('.menu__list').removeAttr('style');
			 }
		});
	});

});
