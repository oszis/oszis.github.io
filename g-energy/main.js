(function($){
		$('.mobile-dropdown').on('show.bs.dropdown', function(){
			$('.main-header__mobile .icon-home').css('display', 'none');
			$('.mobile-nav').animate({
				'height':  + $('.mobile-nav')[0].scrollHeight + 35 + 'px'
			});
		});

		$('.mobile-dropdown').on('hide.bs.dropdown', function() {
			$('.mobile-nav').animate({
				'height': 0
				},{
					duration: 500,
					complete: function() {
						$('.main-header__mobile .icon-home').css('display', '');
					}
				}
			);
		});

		$('.parallax-img').each(function(){
		var $elem = $(this),
			scrollSpeed = 0.7,
			$elemContainer = $elem.parents('.parallax-container');

		$(window).scroll(function(){
			var $windowOffset = $(window).scrollTop();
				$topOffset = $elemContainer.offset().top;
			if ($windowOffset - $topOffset >= 0) {
				$elem.css('transform', 'translateY(' + ($windowOffset - $topOffset) * scrollSpeed + 'px)');
			}

			// меняем transform translateY * 0.5 при скролле у картинки. Отступ берем по offsetParent контейнера
		});
	});

	$(window).on('load resize', function(){
		if ($(window).outerWidth() < 900) {
			var handler = function(e) {
				var trgt = $(e.target);
				if (trgt.hasClass('main-header-top__input')) {
					$(this).toggleClass('active');
				}
			}
			$('.main-header-top__input').click(handler);
		} else {
			$('.main-header-top__input').unbind("click", handler);
			$('.main-header-top__input').removeClass('active');
		}
	});
	
})(jQuery);