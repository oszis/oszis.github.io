'use strict';

var CLASSES = {
	active: 'active',
	noScroll: 'no-scroll'
};


(function($){
	$(window).on('load', function(){
		// setTimeout(function(){
		$('#page-preloader').fadeOut(300);
		$('.page').removeClass(CLASSES.noScroll)
		// }, 2500)
	});


	function ScrollFunc(){
		var _this = this;

		this.selectLinkOnScroll = function(scrollElemsArr, linkElemsArr, windowScroll){

			console.log(1);

			scrollElemsArr.each(function(){
				var scrollElem = $(this),
					elemOffset = 60;

				if (windowScroll >= scrollElem.offset().top - elemOffset){
					linkElemsArr.each(function(){
						var linkElem = $(this);
						linkElem.removeClass(CLASSES.active);

						if (linkElem.attr('data-index') == scrollElem.attr('data-index')) {
							linkElem.addClass(CLASSES.active);
						}
					});
				}

			});
		};

		this.goToElemOnLinkClick = function(link, elemArr){

		};
	}

	var ScrollFuncVar = new ScrollFunc();

	$('.main-content').on('scroll', function(){

		ScrollFuncVar
			.selectLinkOnScroll($('.main-section'), $('.main-header__desktop ul li a'), $(window).scrollTop())
		
	})
	
})(jQuery);
