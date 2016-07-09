(function($){

	$('.mobile-header__nav').hide();
	$('.hamburger').click(function(){
		$('.mobile-header__nav').slideToggle('fast');
	});

	$('.mobile-header__nav a, .main-header__nav a').click(function(e){
		e.stopPropagation();
		var elemHref = $(this).attr('href');
		$('html, body').clearQueue();
		$('html, body').animate({
			scrollTop: $(elemHref).offset().top
		}, 800);
	});


	var tip = {
		show: function(){
			var elem = $(this),
				elemAttr = elem.attr('data-name'),
				tip = '<div class="tip">' + elemAttr + '</div>';
			if ($('body').children('.tip').length == 0) {
				$('body').append(tip);
				var width = $('.tip').css('width');
				$('.tip').css({
					'top': elem.offset().top + (elem.outerHeight() - $('.tip').outerHeight())/2 + 'px',
					'left': elem.offset().left + 10 + elem.width() + 'px',
					'width': 0,
				}).animate({
					'width': width,
				}, 200)
			} else return false;
		},
		hide: function(){
			setTimeout(function(){
				$('.tip').remove();
			}, 1500);
		}
	}

	$('.btn-tip').hover(tip.show, tip.hide);
})(jQuery);