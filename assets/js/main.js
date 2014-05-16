/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      
      $('.banner').affix({
	      offset: {
		      top: 600
		   }
		});
		
		$('.selectit').mousedown( function($this) {
			$(this).toggleClass('active');
		});
	
	$(".tubepress_container").fitVids();
      
    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
      
      /* var $container = $('.masonry');

        $container.masonry({
            itemSelector: '.blog-item',
            columnWidth: '.blog-item',
            transitionDuration: 0
        }); */	
        
        var ar = $('.masonry').children();
        ar.sort(function(a,b){
	        // Get a random number between 0 and 10
	        var temp = parseInt( Math.random()*10 );
	        // Get 1 or 0, whether temp is odd or even
	        var isOddOrEven = temp%2;
	        // Get +1 or -1, whether temp greater or smaller than 5
	        var isPosOrNeg = temp>5 ? 1 : -1;
	        // Return -1, 0, or +1
	        return( isOddOrEven*isPosOrNeg );
	    });
	    $('.masonry').html(ar);
	    $('.masonry').masonry({ 
            itemSelector: '.blog-item',
            columnWidth: '.blog-item',
            transitionDuration: 0,
            animate: true
         });
      
    }
  },
  // About us page, note the change from about-us to about_us.
  blog: {
    init: function() {
      // JavaScript to be fired on the about us page
      
      var ar = $('.masonry').children();
        ar.sort(function(a,b){
	        // Get a random number between 0 and 10
	        var temp = parseInt( Math.random()*10 );
	        // Get 1 or 0, whether temp is odd or even
	        var isOddOrEven = temp%2;
	        // Get +1 or -1, whether temp greater or smaller than 5
	        var isPosOrNeg = temp>5 ? 1 : -1;
	        // Return -1, 0, or +1
	        return( isOddOrEven*isPosOrNeg );
	    });
	    $('.masonry').html(ar);
	    $('.masonry').masonry({ 
            itemSelector: '.blog-item',
            columnWidth: '.blog-item',
            transitionDuration: 0,
            animate: true
         });
      
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.

