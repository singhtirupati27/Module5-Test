/**
 * @file
 *   Provides slider funtionality.
 */

(function ($, Drupal, once) {
  Drupal.behaviors.sliderBehavior = {
    attach: function (context, settings) {
      const sliderDiv = $('.cricket .view-content');
      once('sliderCricket', sliderDiv, context).forEach(function (element) {
        $(context).find('.cricket .view-content').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 3000,
          draggable: false,
          prevArrow: '<div class="arrow-left"><i class="bi bi-chevron-left"></i></div>',
          nextArrow: '<div class="arrow-right"><i class="bi bi-chevron-right"></i></div>',
          dots: true
        });
      });
    }
  };
})(jQuery, Drupal, once);
