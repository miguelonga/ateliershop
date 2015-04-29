// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require shoppe/stripe/form_handler







(function($) {
  jQuery(document).ready(function() {

    // Mobile Menu - Open Sesame -------------
    $('.toggleMenu').click(function() {
     
      var windowHeight = $(window).height();
      
      $('.page-wrap').height(windowHeight); // sets height to cut page to visible window size
      $('body').addClass('active-nav');
      $('.page-wrap').addClass('crop'); // "proper" crop
      
      // Show me the links
      var timer = 0;
      $.each($('.mobile-nav li'), function (i, s) {
        timer = 40 * i;
        setTimeout(function () {
          $(s).addClass('show-nav');
        }, timer); // show menu items on timer
      });
      
    });

    // Mobile Menu - Lock It Up ----------------
    $('.active-click').click(function() {
      $('body').removeClass('active-nav');
      $('.mobile-nav li').removeClass('show-nav');
      
          setTimeout(function(){
        $('.page-wrap').removeClass('crop'); // release the "proper" crop
        $('.page-wrap').height('auto'); // resets height for scolling
      }, 300);
    });
  });

}(jQuery));

$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});


