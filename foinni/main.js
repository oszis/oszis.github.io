(function($){

	var scrollSection = $('.main-section');

	$(window).on('scroll load', function(){
		if ($(window).scrollTop() > $('.main-header').height()) {
			$('.main-header').addClass('fixed');
		} else {
			$('.main-header').removeClass('fixed');
		}
	});


	// show works section on sublink click
	$(window).on('load', function(){
		
		$('.works__img-container').eq(0).css('display', 'block');

	});


	$('.works__sublinks-container .sublink').click(function(e){
		e.preventDefault();
		$('.works__sublinks-container .sublink').removeClass('active');
		$(this).addClass('active');
		var containerIndex = $(this).index();
		$('.works__img-container').css('display', 'none');
		$('.works__img-container').eq(containerIndex).css('display', 'block');
	});


	// parallax effect
	$('.parallax-img').each(function(){
		var $elem = $(this),
			scrollSpeed = 0.5,
			$elemContainer = $elem.parents('.parallax-container');

		$(window).scroll(function(){
			var $windowOffset = $(window).scrollTop();
				$topOffset = $elemContainer.offset().top;
			if ($windowOffset - $topOffset >= 0) {
				$elem.css('transform', 'translateY(' + ($windowOffset - $topOffset) * scrollSpeed + 'px)');
			}

			// меняем transform translateY * 0.5 при скролле у картинки. Отступ берем по offsetParent контейнера
		})
	})


	// works popup show-hide
		$('.works-elem img').click(function(){
			var elem = $(this),
				elemWidth = elem.width(),
				elemHeight = elem.height(),
				source = elem.attr('src');
			$('body').addClass('fixed-body');
			$('.foinni-container').css({
				'width': elemWidth + 'px',
				'margin-left': - elemWidth/2 + 'px',
				'top': $(window).height()/2 - elemHeight/2 - 20 + 'px'
			})
			$('.foinni-container__alt').text(elem.attr('alt'));
			$('.foinni-overlay').fadeIn(300).find('img').attr('src', source);
		});

		$('.foinni-overlay').click(function(){
			$(this).fadeOut(300);
			$('body').removeClass('fixed-body');
		})

	
})(jQuery);