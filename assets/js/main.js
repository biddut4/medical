
// tab js
$(document).ready(function(){
	$('.tabs_items .tab_item').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs_items .tab_item').removeClass('tab_active');
		$('.content_item').removeClass('content_active');

$(this).addClass('tab_active');
		$("#"+tab_id).addClass('content_active');
	})
}); 

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();


// doctors slick slider
  jQuery(document).ready(function($){
    $(".inner_slider").slick({
      slidesToShow: 3,
      autoplay: 500,
      arrows: false,
      dots: true,
      accessibility: true,
      responsive: [
          {
          breakpoint: 720,
          settings: {
              centerPadding: '0',
              slidesToShow: 2,
              autoplay: 400,
          }
          },
          {
            breakpoint: 520,
            settings: {
                centerPadding: '0',
                slidesToShow: 1,
                autoplay: 400,
            }
            }

      ]
    });
});


// smooth scrool
const siteContainer = document.querySelector('.scrool_smooth');
const contentContainer = document.querySelector('.page_start');

let state = {
	scroll: {
		height: 0,
		offset: 0,
		speed: 0.050,
	}
}


function renderLoop() {
	// If you don't floor this value, it blows up into highp.
  state.scroll.offset += Math.floor((window.pageYOffset - state.scroll.offset) * state.scroll.speed);

  contentContainer.style.transform = `translateY(-${ state.scroll.offset }px)`;

  requestAnimationFrame(renderLoop);
}
renderLoop();

window.addEventListener('resize', function() {
  state.scroll.height = contentContainer.getBoundingClientRect().height;
  body.style.height = Math.floor(state.scroll.height) + "px";
	adjustSiteContainer(siteContainer, 180);
});