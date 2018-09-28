$(function() {
  $(document).ready(function() {
    $('.menu__link--trigger').click(function() {
      $('.menu__list').slideToggle(300);
    });

    $(window).resize(function() {
      if ($(window).width() > 300) {
        $('.menu__list').removeAttr('style');
      }
    });
  });

  $(document).ready(function() {
    $('.owl-carousel').owlCarousel();
  });

  $('.loop').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
  });
});
