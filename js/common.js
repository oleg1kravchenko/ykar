$(document).ready(function() {


		//слайдер
$('.slider-for').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		asNavFor: '.slider-nav',
		slidesToScroll: 1,
	});


	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: true,
		dots: false,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				
			}
		}]
	});

	$('.slider-card-images').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.slider-products_simple').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 993,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 360,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider-products_variable').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 993,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				variableWidth: true,
			}
		}
		]
	});

    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").removeClass("active");
		var selectTab = $(this).attr("href");
		$(selectTab).addClass("active");
	});

	 $('.unit-card').click(function(event) {
		event.preventDefault();
		$(this).find(".unit-dropdown").slideToggle(200);
	});

	  $('.unit-dropdown__item').click(function(event) {
		event.preventDefault();
		var tx = $(this).html();
		$(this).parent().siblings(".unit-card_value").html(tx);
	});

	  $('.modal-overlay').click(function() {
		$(".modal-wrap").fadeOut(200);
	});

	   $('.link-city').click(function() {
		$(".modal-city").fadeIn(200);
	});


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


});