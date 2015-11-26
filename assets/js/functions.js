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
