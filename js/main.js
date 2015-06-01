$(document).ready(function(){
    
    //---------------------- SEARCH --------------------------------//
    $("#search_revealer").on("click",function() {
       $(this).toggleClass('close');
       $("#search").toggle().find('#s').focus();
    });
    
    //---------------------- MENU REVEALTER --------------------------------//
    $("#menu_revealer").on("click",function() {
       $(this).toggleClass('icon_close icon_menu');
       $("#menu_container").slideToggle('slow');
    });
    
    //-------------------MOBILE NAVIGATION------------------------------//
    $('.menu-item-has-children').prepend('<div class="clickable open"></div>');
    
    $('.clickable').on("click", function() {
        $(this).siblings('.sub-menu').slideToggle('slow')
        .end().toggleClass('open').toggleClass('close');
    });
    
   //-------------------TOUCH SCREEN NAVIGATION------------------------------//
    $('html').on('touchstart',function(){
      var $link = $('.menu-item-has-children>a');
      $link.click(function(event) {
			event.preventDefault();
			    
         $(this).click(function() { //second click
           var href = $(this).attr('href');
           window.location.href = href;
         });
      }); 
    });

	//---------------------- SLIDER --------------------------------//	
	function slider(direction) {   
	
		// current slide
      var $currentSlide = $('.slider li:visible');
		$currentSlide.fadeOut();
	
		// define next slide	
		var $next;
		if ( !direction ) {
			$next = $currentSlide.next('.slide');
			if(!$next.length){ $next = $('.slider .slide:eq(0)').first(); }		
		} else {
			$next = $currentSlide.prev('.slide');
			if(!$next.length){ $next = $('.slider .slide:last-child'); }		
		}
		
		// hide the <img> and make it a background image	
		//$next.find('img').css('display','none');		
		//var url = $next.find('img').attr('src');
		//$next.css('background-image','url(' + url + ')');
		//console.log($url);
		
		// show the slide
		$next.fadeIn();
	}
	
	// hide all slides but the first one
	$('.slider .slide:gt(0)').hide();
	
	// hide the <img> and make it a background image
	var $currentSlide = $('.slider .slide:eq(0)');
	$currentSlide.find('img').css('display','none');	
	var url = $currentSlide.find('img').attr('src');
	$currentSlide.css('background-image','url(' + url + ')');
	
	// call the slider
	setInterval(slider, 8000);
	$('.slider .slide-control-right').click(function() { slider(); });
	$('.slider .slide-control-left').click( function() { slider('back'); });

});
