//shout-outs testimonials carousel
jQuery(document).ready(function($){
	//create the slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	//open the testimonials modal page
	$('.cd-see-all').on('click', function(){
		$('.cd-testimonials-all').addClass('is-visible');
	});

	//close the testimonials modal page
	$('.cd-testimonials-all .close-btn').on('click', function(){
		$('.cd-testimonials-all').removeClass('is-visible');
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
    		$('.cd-testimonials-all').removeClass('is-visible');
	    }
    });

	//build the grid for the testimonials modal page
	$('.cd-testimonials-all-wrapper').children('ul').masonry({
  		itemSelector: '.cd-testimonials-item'
	});
});

//smooth scroll function
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});


jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 300,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

$('.cd-testimonials-wrapper').flexslider({
	//declare the slider items
	selector: ".cd-testimonials > li",
	animation: "slide",
	//do not add navigation for paging control of each slide
	controlNav: false,
	slideshow: false,
	//Allow height of the slider to animate smoothly in horizontal mode
	smoothHeight: true,
	start: function(){
		$('.cd-testimonials').children('li').css({
			'opacity': 1,
			'position': 'relative'
		});
	}
});

jQuery(document).ready(function($){
	var isLateralNavAnimating = false;

	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
	$('.cd-primary-nav a').on('click', function(){
	if( !isLateralNavAnimating ) {
	if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;
				$('body').removeClass('navigation-is-open');

				$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//animation is over
					isLateralNavAnimating = false;
				});
			}
	});
});



// $(function(){
//   // vars for testimonials carousel
//   var $txtcarousel = $('#testimonial-list');
//   var txtcount = $txtcarousel.children().length;
//   var wrapwidth = (txtcount * 415) + 415; // 400px width for each testimonial item
//   $txtcarousel.css('width',wrapwidth);
//   var animtime = 750; // milliseconds for clients carousel
//
//   // prev & next btns for testimonials
//   $('#prv-testimonial').on('click', function(){
//     var $last = $('#testimonial-list li:last');
//     $last.remove().css({ 'margin-left': '-415px' });
//     $('#testimonial-list li:first').before($last);
//     $last.animate({ 'margin-left': '0px' }, animtime);
//   });
//
//   $('#nxt-testimonial').on('click', function(){
//     var $first = $('#testimonial-list li:first');
//     $first.animate({ 'margin-left': '-415px' }, animtime, function() {
//       $first.remove().css({ 'margin-left': '0px' });
//       $('#testimonial-list li:last').after($first);
//     });
//   });
//
//
//   // vars for clients list carousel
//   // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
//   var $clientcarousel = $('#clients-list');
//   var clients = $clientcarousel.children().length;
//   var clientwidth = (clients * 140); // 140px width for each client item
//   $clientcarousel.css('width',clientwidth);
//
//   var rotating = true;
//   var clientspeed = 1800;
//   var seeclients = setInterval(rotateClients, clientspeed);
//
//   $(document).on({
//     mouseenter: function(){
//       rotating = false; // turn off rotation when hovering
//     },
//     mouseleave: function(){
//       rotating = true;
//     }
//   }, '#clients');
//
//   function rotateClients() {
//     if(rotating != false) {
//       var $first = $('#clients-list li:first');
//       $first.animate({ 'margin-left': '-140px' }, 600, function() {
//         $first.remove().css({ 'margin-left': '0px' });
//         $('#clients-list li:last').after($first);
//       });
//     }
//   }
// });
