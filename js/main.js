(function($){

	// меню на мобилках по клику
	$(document).on('click', function (e) {
		var hamburger = $('.hamburger'),
			nav = $('.mobile-header__nav');
		if ($(e.target).closest('.hamburger').length) {

			nav.slideToggle('fast');
			hamburger.toggleClass('active');
		} else if (hamburger.hasClass('active')) {
			nav.slideUp('fast');
			hamburger.removeClass('active');
		}
	});

	// добавляем класс active элементу списка nav
	function navLinkActive(e) {
		$('.mobile-header__nav a, .main-header__nav a').removeClass('active');
		e.addClass('active');
	}

	// скролл к section по клику на ссылку в навигации
	$('.mobile-header__nav a, .main-header__nav a').click(function(e){
		e.stopPropagation();
		var link = $(this);
		navLinkActive(link);
		var elemHref = link.attr('href');
		$('html, body').clearQueue();
		$('html, body').animate({
			scrollTop: $(elemHref).offset().top
		}, 800);
	});


	// tooltip
	var tip = {
		show: function(){
			var elem = $(this),
				elemAttr = elem.attr('data-name'),
				tip = '<div class="tip">' + elemAttr + '</div>';
			if ($('body').children('.tip').length == 0) {
				$('body').append(tip);
				var width = $('.tip').css('width');
				$('.tip').css({
					'top': elem.offset().top - $('.tip').outerHeight() - 10 + 'px',
					'left': elem.offset().left + elem.outerWidth() /2 -  $('.tip').outerWidth()/2 + 'px',
				});
			} else return false;
		},
		hide: function(){
			$('.tip').remove();
		}
	}

	$('.btn-tip').hover(tip.show, tip.hide);

	// Меняем background у fixed header по scroll

	var scrollSection = $('.scroll-section');
	$(window).on('scroll load', function(){
		scrollSection.each(function(){
			var elem = $(this),
				scrolled = $(window).scrollTop(),
				header = $('.main-header');
			if (scrolled >= elem.offset().top && scrolled <= elem.offset().top + elem.height()) {
				switch (true) {
					case elem.hasClass('scroll-section--grey'):
						header.removeClass('negative');
						break;
					case elem.hasClass('scroll-section--white'):
						header.addClass('negative')
						break;
				}
			}
		});
	});
})(jQuery);