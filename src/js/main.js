;(function( window, document, $, undefined ) {

'use strict';

	/*
		Some patterns for JS:

		- Immediately-Invoked Function Expression (IIFE)
		http://benalman.com/news/2010/11/immediately-invoked-function-expression/

		- The Module Pattern
		https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

		- Revealing Module Pattern
		https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

		- Locaweb Style
		http://opensource.locaweb.com.br/locawebstyle/documentacao/praticas/javascript/

		- Browser Diet
		https://browserdiet.com/

	*/

function initSmoothScrolling(){
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });
}

function fadeInScrollTopButton(){
  if ($(window).scrollTop() > 250) {
    $('.back-to-top').fadeIn(400);
  } else {
    $('.back-to-top').fadeOut(400);
  }
}

// DOM is ready
$(function(){
  initSmoothScrolling();
  $(window).scroll(fadeInScrollTopButton);
});

})( window, document, jQuery );
