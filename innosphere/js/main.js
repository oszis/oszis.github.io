{
(function($){
	mobileNavHeight()
	$(window).on('resize', mobileNavHeight);

	function mobileNavHeight() {
		$('.mobile-nav .nav-list').css('height', $(window).height() + 'px');
	}
})(jQuery)

$('input[type=phone]').mask('+7 (999) 999-9999');


var mainSlider = $('.main-slider_carousel');
mainSlider.owlCarousel({
	loop: true,
	// margin: 100,
	responsive : {
		0 : {
			items: 1
		},
		480 : {
			items: 2
		},
		768 : {
			items: 3
		},
		1000 : {
			items: 5
		}
	}
})
$('.main-slider .prev').click(function(){
	mainSlider.trigger('prev.owl.carousel');
})
$('.main-slider .next').click(function(){
	mainSlider.trigger('next.owl.carousel');
})

$('.select-selectize').selectize({});

$('.mobile-nav .burger').click(function(){
	$('.mobile-nav').toggleClass('active');
});

$('.photo-grid').packery({
  itemSelector: '.grid-item',
  gutter: 10
})

}

(function(){
	function formValidate(elem) {
		var self = this,
			form = elem;

		this.initialize = function() {
			form.on('submit', validate);
		};

		function validate() {
			var valid = true;

			form.find('.error-message').detach();
			form.find('.btn.btn-default').addClass('active');
			form.find('input').each(function(index, elem){
				var $input = $(elem),
					$value = $input.val();

				$input.removeClass('valid error');

				if ($value === '') {
					form.append('<div class="error-message">Вы не заполнили поле ' + $input.attr('name') + '</div');
					$input.addClass('error');
					valid = false;
				} else {
					$input.addClass('valid');
				}
			});
			console.log(valid);
			
			form.find('.btn.btn-default').removeClass('active');
			
			return valid;
		}
	}

	var callbackForm = new formValidate($('.callback-form'));
	callbackForm.initialize();

})()