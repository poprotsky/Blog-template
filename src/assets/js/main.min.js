$(document).ready(function(){

    // CUSTOM functions

    // mobile dropdown menu
    $('.top__nav-has-dropdown').on('click', function(){
        $(this).toggleClass('is-open');
    });

    // sidebar open 
    $('.js-sidebar-open').on('click', function(){
        if($('.sidebar--fixed').length) {
            $('html').addClass('is-sidebar-open');
        }
    })
    // sidebar close
    $('.js-sidebar-close').on('click', function(){
        if($('.sidebar--fixed').length) {
            $('html').removeClass('is-sidebar-open');
        }
    })

	if($.fn.fancybox) {
		$.extend(true, $.fancybox.defaults, {
			hash : false
		});

		$('.magnific').fancybox();
	}
	
	if($.fn.validate) {
		$.validator.setDefaults({
			highlight: function(element, errorClass, validClass) {
				var $element = $(element);
				$element.addClass(errorClass).removeClass(validClass);
				if ($element.attr('type') == 'checkbox' || $element.attr('type') == 'radio') {
					if ($element.attr('type') == 'checkbox') {
						$element.closest('.checkbox').addClass('error-checkbox');
					} else if ($element.attr('type') == 'radio') {
						$element.closest('.radio').addClass('error-radio');
					}
				} else if ($element.prop("tagName") == 'SELECT') {
					$element.closest('.custom-select, .custom-select2, .custom-select2-multiple').addClass('select-error');
				}
			},
			unhighlight: function(element, errorClass, validClass) {
				var $element = $(element);
				$element.removeClass(errorClass).addClass(validClass);
				if ($element.attr('type') == 'checkbox' || $element.attr('type') == 'radio') {
					if ($element.attr('type') == 'checkbox') {
						$element.closest('.checkbox').removeClass('error-checkbox');
					} else if ($element.attr('type') == 'radio') {
						$element.closest('.radio').removeClass('error-radio');
					}
				} else if ($element.prop("tagName") == 'SELECT') {
					$element.closest('.custom-select, .custom-select2, .custom-select2-multiple').removeClass('select-error');
				}
			},
			errorPlacement: function() {
			},
			ignore: ':hidden:not([type="hidden"]):not(select)'
		});

		$('form.validate').each(function() {
			$(this).validate();
		});
	}
	
    if($.fn.owlCarousel) {
        $('.slider').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            stagePadding: 0,
            navText: ['<i class="ico ico-arrow-left"></i>','<i class="ico ico-arrow-right"></i>'],
            responsiveClass: true,
            responsive: {
                0:{
                    items: 1
                },
                600:{
                    items: 1
                },
                1000:{
                    items: 1
                }
            }
        }); 
    }

    // SELECTS
    
    // default selected selects add class .is-selected
    $('select').each(function(){
        if($(this).find('[selected]').length) {
            $(this).closest('.custom-select').addClass('is-selected'); 
        } 
    })
    // on click select options add class .is-selected
    $('select').on('change', function(){
        $(this).closest('.custom-select').addClass('is-selected');
    })
	
	if (typeof jcf == 'object') {
		jcf.setOptions('Select', {
			fakeDropInBody: false,
		    maxVisibleItems: 5,
		    wrapNative: false,
		    wrapNativeOnMobile: true,
			useCustomScroll: false
		});

		jcf.replace($('.custom-select select'));
		jcf.replace($('[type="radio"]'));
		jcf.replace($('[type="checkbox"]'));
	}
	
	$('.wysiwyg iframe').each(function(){
		$(this).wrap('<div class="embed-responsive embed-responsive--16by9"></div>');
	});

	$('.wysiwyg table').each(function(){
		var mT = $(this).css('marginTop');
		var mB = $(this).css('marginBottom');
		$(this).css('marginBottom','0').css('marginTop','0').wrap('<div class="table-responsive" style="margin-bottom: '+mB+'; margin-top: '+mT+';"></div>');
	});
	
    // menu mobile
    $('.menu-trigger').on('click', function(){
        $('html').toggleClass('is-menu-open');
    });
    // body on click
    $('body').on('click touchend', function(e){
        if(!$(e.target).closest('.menu-trigger').length) {
          if(!$(e.target).closest('.top__nav').length) {
            $('html').removeClass('is-menu-open');
          }
        }
        if(!$(e.target).closest('.js-sidebar-open').length) {
          if(!$(e.target).closest('.sidebar--fixed').length) {
            $('html').removeClass('is-sidebar-open');
          }
        }
    });

    //
    // parallax
    //
    if(!device.mobile() && !device.tablet() && !$('html').hasClass('ie')) {
      if($('[data-stellar-background-ratio]').length) {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 50
        });
      }
    }
    
	minimizeTop(); 
});

$(window)
    .scroll(function(){
        // fade out heading content
        $('.breadcrumbs-container__inner, .slider__content').css('opacity', 1 - $(window).scrollTop() / 300);
    })
    .on('load', function(){

    });

function minimizeTop()
{
	var scrollOffset = parseInt($('.top').data('minimize-offset')) > 0 ? parseInt($('.top').data('minimize-offset')) : false;
	if (scrollOffset !== false)
	{
		$(window).scroll(function(){
			if ($(window).scrollTop() >= scrollOffset)
				$('html').addClass('is-top-minimize');
			else
				$('html').removeClass('is-top-minimize');
		}).scroll();
	}
}
