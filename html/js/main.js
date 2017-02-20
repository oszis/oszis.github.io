(function($){

	var hoverClass = 'hovered';

	var CLASSES = {
		mobileActive: 'active-mobile',
		shown: 'shown',
		activeClass: 'active',
		hoverClass: 'hovered',
		pagePopup: 'page-has-popup',
		animated: 'animated',
		cleanBtnClass: 'clean-btn'
	}

var parent, ink, d, x, y;
$(".btn-default").click(function(e){
	e.preventDefault();
	materialButton($(this), e);
});

// Вырубаем прелоадер
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

$(window).on('load', function(){
	$('.material-animate-elem').click(function(e){
		e.preventDefault();

		materialButton($(this), e);
	});
});


function materialButton(elem, e){

	// Передаем элемент elem и событие e

	if(elem.find(".ink").length == 0)
		elem.prepend("<span class='ink'></span>");
		
	ink = elem.find(".ink");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");
	
	//set size of .ink
	if(!ink.height() && !ink.width())
	{
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(elem.outerWidth(), elem.outerHeight());
		ink.css({height: d, width: d});
	}
	
	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - elem.offset().left - ink.width()/2;
	y = e.pageY - elem.offset().top - ink.height()/2;
	
	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");

}



// Аналог jQuery scrollSpy, проверяем при скролле, где находится элемент
function CheckElemOffset(elem, elemPadding){
	if ($(window).scrollTop() >= elem.offset().top - elemPadding) {
		return true;
	} else return false;
}



function MainHeader(){

	this.toggleActive = function(elem){
		if ($(window).scrollTop() > 0) {
			elem.addClass(CLASSES.activeClass)
		} else {
			elem.removeClass(CLASSES.activeClass);
		}
	}
}

var MainHeaderVar = new MainHeader();

MainHeaderVar.toggleActive($('.main-header'));

$(window).on('load scroll', function(){

	MainHeaderVar.toggleActive($('.main-header'));
	
});







$('.main-slider__content').slick({
	speed: 500,
	autoplay: true,
	autoplaySpeed: 3000,
	fade: true,
	dots: true,
	appendDots: $('.main-slider__dots'),
	infinite: true,
	arrows: false
});

$('.region-slider__content').slick({
	infinite: true,
	adaptiveHeight: true,
	arrows: true,
	appendArrows: $('.region-slider__arrows'),
	prevArrow: '<div class="arrow-left btn btn-default btn-arrow material-animate-elem"><span class="ink animate"></span></div>',
	nextArrow: '<div class="arrow-right btn btn-default btn-arrow material-animate-elem"><span class="ink animate"></span></div>'
});



$('.btn-more-news').click(function(e){
	e.preventDefault();
	$(this).addClass(CLASSES.activeClass);

	setTimeout(function(elem){
		elem.removeClass(CLASSES.activeClass);
	}, 3000, $(this));
});










// main search animation

function MainSearch(){

	var _this = this,
		page = $('body');

	this.fieldTimeout;
	this.buttonTimeout;
	this.blockTimeout;

	this.clearTimeouts = function(){

		if (_this.fieldTimeout) {
			clearTimeout(_this.fieldTimeout);
		}
		if (_this.buttonTimeout){
			clearTimeout(_this.buttonTimeout);
		}
		if (_this.blockTimeout){
			clearTimeout(_this.blockTimeout);
		}
	}

	this.showSearch = function(searchBlock, searchField, searchButton) {
		_this.clearTimeouts();
		searchField.stop();
		searchBlock.stop();
		searchButton.stop();

		if ($(window).innerWidth() >= 1025) {
			searchButton.addClass(CLASSES.activeClass);

			_this.blockTimeout = setTimeout(function(elem){
				elem.addClass(CLASSES.activeClass);
			}, 500, searchBlock);

			this.fieldTimeout = setTimeout(function(elem){
				elem.addClass(CLASSES.activeClass);
			}, 1000, searchField);

			this.buttonTimeout = setTimeout(function(elem){
				elem.addClass(CLASSES.cleanBtnClass);
			}, 1200, searchButton);

			page.addClass('search-open');

			searchField.focus();
		} else {
			searchButton.addClass(CLASSES.activeClass);
			searchBlock.addClass(CLASSES.mobileActive);
			searchField.focus();

		}


	};

	this.hideSearch = function(searchBlock, searchField, searchButton) {
		_this.clearTimeouts();

		searchField.stop();
		searchBlock.stop();
		searchButton.stop();

		clearTimeout()

		if ($(window).innerWidth() >= 1025) {
			searchField.removeClass(CLASSES.activeClass);

			page.removeClass('search-open');
			searchButton.removeClass(CLASSES.cleanBtnClass);

			this.buttonTimeout = setTimeout(function(elem){
				elem.removeClass(CLASSES.activeClass);
			}, 900, searchButton);

			this.blockTimeout = setTimeout(function(elem){
				elem.removeClass(CLASSES.activeClass);
			}, 600, searchBlock);

			
		} else {
			searchButton.removeClass(CLASSES.activeClass);
			searchBlock.removeClass(CLASSES.mobileActive);
		}
	};
}

var MainSearchVar = new MainSearch();

$('.main-search__btn').click(function(e){
	e.preventDefault();
	var elem = $(this);
	if (!elem.hasClass(CLASSES.activeClass)) {
		
		MainSearchVar
			.showSearch($('.main-search'), $('.main-search__input'), $(this));
	} else {
		$('.main-search').submit();
	}

});

$('.main-search__input').on('blur', function(){
	if ($(window).innerWidth() >= 1025) {
		MainSearchVar
			.hideSearch($('.main-search'), $(this), $('.main-search__btn'));
	} else {
		return false;
	}
});

$('.btn-close-search').click(function(){
	MainSearchVar
			.hideSearch($('.main-search'), $('.main-search__input'), $('.main-search__btn'));
})



	function CompainesBlock(){
		var _this = this;

		this.showImage = function(elemContainer){
			elemContainer.addClass(CLASSES.activeClass);
		}

		this.showCompany = function(companyElem){

				companyElem.fadeIn(1000).addClass(CLASSES.activeClass);
		}

		this.hoverCompanies = function(hoveredElem, anotherElem, circleElem){
			hoveredElem.addClass(hoverClass);

			anotherElem.addClass(hoverClass);

			circleElem.addClass(hoverClass);
		}

		this.blurCompanies = function(hoveredElem, anotherElem, circleElem){
			hoveredElem.removeClass(hoverClass);

			anotherElem.removeClass(hoverClass);

			circleElem.removeClass(hoverClass);
		}

		this.showCompaniesAnimation = function(elemContainer, elemImg, elemContent, company){

			if ($(window).innerWidth() > 1025) {
				elemContainer.addClass(CLASSES.activeClass);

					_this.showImage(elemImg);

				setTimeout(function(){

					elemContent.addClass(CLASSES.activeClass);
				}, 500);


				setTimeout(function(){
					_this.showCompany(company.eq(0))
				}, 2000);

				setTimeout(function(){
					_this.showCompany(company.eq(1))
				}, 2000);
				
			} else {
				_this.showImage(elemImg);
				elemContainer.addClass(CLASSES.activeClass);
				elemContent.addClass(CLASSES.activeClass);
				_this.showCompany(company.eq(0));
				_this.showCompany(company.eq(1))
			}

		}
	}

	var CompainesBlockVar = new CompainesBlock();


	$(window).on('load scroll', function(){

		if ($(window).innerWidth() > 1024 && $(window).innerWidth() < 2000) {
			if (CheckElemOffset($('.companies-container'), $('.companies-container').innerHeight())
				&& !$('.companies-container').hasClass(CLASSES.activeClass)) {

				CompainesBlockVar
					.showCompaniesAnimation(
						$('.companies-container'),
						$('.companies-img'),
						$('.companies-circle__content'),
						$('.company'));

			}
			
		} else {
			if (CheckElemOffset($('.companies-container'), $('.companies-container').innerHeight() * 2)
				&& !$('.companies-container').hasClass(CLASSES.activeClass)) {
				CompainesBlockVar
					.showCompaniesAnimation(
						$('.companies-container'),
						$('.companies-img'),
						$('.companies-circle__content'),
						$('.company'));
			}
		}



		if (CheckElemOffset($('.img-turbine'), $('.img-turbine').innerHeight()/2)
			&& !$('.img-turbine').hasClass(CLASSES.activeClass)) {
			$('.img-turbine').addClass(CLASSES.activeClass);
		}

		$('.animated-elem').each(function(){
			var elem = $(this);

			if (CheckElemOffset($(this), $(window).outerHeight()/1.2)
				&& !$(this).hasClass('animated')) {
				setTimeout(function(){
					elem.removeClass('hidden');
					
				}, 500);
				$(this).addClass($(this).attr('data-class'));
				$(this).addClass('animated');
			} else return;
		});


		$('.support-elem__block').each(function(){


			if (CheckElemOffset($(this),
				$(window).outerHeight())
				&& !$(this).hasClass(CLASSES.activeClass)) {
				
				$(this).addClass(CLASSES.activeClass);

				$(this).css('height', $(this).attr('data-height'));
				
			}

		
		});

		

	})



	$('.companies-img').each(function(){
		var elem = $(this),
			elemIndex = elem.attr('data-index');
		elem.hover(function(){
			CompainesBlockVar
				.hoverCompanies(elem,
					$('.company').eq(elemIndex),
					$('.company-circle').eq(elemIndex));
		});
		elem.on('mouseout', function(){
			CompainesBlockVar
				.blurCompanies(elem,
					$('.company').eq(elemIndex),
					$('.company-circle').eq(elemIndex));
		});
	});


	$('.company').each(function(){
		var elem = $(this),
			elemIndex = elem.attr('data-index');
		elem.hover(function(){
			CompainesBlockVar
				.hoverCompanies(elem,
					$('.companies-img').eq(elemIndex),
					$('.company-circle').eq(elemIndex));
		});
		elem.on('mouseout', function(){
			CompainesBlockVar
				.blurCompanies(elem, 
					$('.companies-img').eq(elemIndex),
					$('.company-circle').eq(elemIndex));
		});
	});


function NumberCounter(){
	var _this = this;


	this.countSimple = function(elem){
		elem.prop('Counter',0).animate({
			Counter: elem.attr('data-value')
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				elem.text(Math.ceil(now));
			}
		});
	}

	this.countCustom = function(elem){
		var numbersArr = [117, 156, -94, -30, 68, -16, -24, 22, 74, 11, -9, -2];
	}
}

var NumberCounterVar =  new NumberCounter();

var i = 0;
$(window).on('load scroll',function(){
	
	$('.number-count').each(function() {
		var elem = $(this);
		if (CheckElemOffset(elem, $(window).outerHeight()) 
			&& !elem.hasClass('animated')) {

			elem.addClass('animated');
			NumberCounterVar.countSimple($(this));
			
		}
	});

	$('.page-overlay').css('transform', 'translate3d(0px, '
		+ -($(window).scrollTop()/2.2) + 'px, 0px)');




});


	

	$('.services-hidden').slideUp(0).removeClass(CLASSES.activeClass);

	$('.btn-show-services').click(function(){

		var elem = $(this),
			elemContainer = $('.services-hidden'),
			elemActive = elemContainer.hasClass(CLASSES.activeClass);


		if (elemActive) {
			elem.removeClass(CLASSES.activeClass)
				.find('.pseudo-link').html(elem.attr('data-text'));
			elemContainer.slideUp(600).removeClass(CLASSES.activeClass);
		} else {
			elem.addClass(CLASSES.activeClass)
				.find('.pseudo-link').html(elem.attr('data-text-active'));
			elemContainer.slideDown(600).addClass(CLASSES.activeClass);
		}
		
	});



	// main aside menu
	function AsideMenu(){

		var _this = this;

		this.hideMenus = function(menu, menuContainer){ // .aside-list ul, .aside-menu-elem
			menu.stop();
			menu.slideUp(300);
			menuContainer.removeClass('hovered');
			menuContainer.parent().removeClass(CLASSES.activeClass);
		}

		this.showMenu = function(menu, menuContainer, menuScroller){

			menu.stop();
			menuContainer.addClass('hovered');
			menuContainer.parent().addClass(CLASSES.activeClass);
			menu.slideDown(300);

			setTimeout(function(menuScroller){
				menuScroller.nanoScroller({
					preventPageScrolling: true
				});
				
			}, 300, menuScroller);

		}

		this.showAside = function(aside, asideContainer){ // .aside-menu, body
			aside.stop().addClass(CLASSES.activeClass);
			asideContainer.stop().addClass(CLASSES.activeClass);
		}

		this.hideAside = function(aside, asideContainer){ //.aside-menu
			aside.stop().removeClass(CLASSES.activeClass);
			asideContainer.stop().removeClass(CLASSES.activeClass)
		}

		this.init = function(asideList,menu){

			menu.slideUp(0);
			asideList.nanoScroller({
				preventPageScrolling: true
			});
		}

	}

	var asideMenuVar = new AsideMenu();

	asideMenuVar.init($('.aside-menu__list'), $('.aside-list ul'));

	$('.aside-menu').mouseover(function(e){
		e.preventDefault();
		asideMenuVar.showAside($('.aside-menu'), $('body'));
		
	});
	$('.aside-menu').mouseleave(function(e){
		asideMenuVar.hideMenus($('.aside-list ul'), $('.aside-menu-elem'));
		asideMenuVar.hideAside($('.aside-menu'), $('body'));
		$('.aside-menu-btn').removeClass(CLASSES.shown);
	});


	$('.aside-list .aside-menu-elem a').click(function(e){
		e.preventDefault();

		var elemParent = $(this).parent('.aside-menu-elem'),
			elemParentParent = elemParent.parent('.aside-list');
		

		if (elemParentParent.hasClass(CLASSES.activeClass)) {
		asideMenuVar.hideMenus($('.aside-list ul'), $('.aside-menu-elem'));
			return false;
		} else {
		asideMenuVar.hideMenus($('.aside-list ul'), $('.aside-menu-elem'));
		asideMenuVar
			.showMenu(elemParentParent.find('ul'),
				elemParent, $('.aside-menu__list'));
			
		}
	});


	$('.aside-menu-btn').click(function(){
		if ($('.aside-menu-btn').hasClass(CLASSES.shown)) {
			$('.aside-menu-btn').removeClass(CLASSES.shown);
			asideMenuVar.hideAside($('.aside-menu'), $('body'));
		} else {
			asideMenuVar.showAside($('.aside-menu'), $('body'));
			$('.aside-menu-btn').addClass(CLASSES.shown);
		}
	});

	$('.aside-menu .btn-close').click(function(){
		$('.aside-menu-btn').removeClass(CLASSES.shown);
		asideMenuVar.hideAside($('.aside-menu'), $('body'));
	});



// popups

function MainPopup(){
	var _this = this;

	this.showPopup = function(popup,speed){
		var popupParent = popup.parent(),
			popupContent = popup.find('.main-popup__content');
		
		_this.removePageScroll();
		popupParent.fadeIn(speed);
		popup.fadeIn(0);
		
		setTimeout(function(){
			popup.addClass(CLASSES.activeClass);
			popupContent.addClass(CLASSES.activeClass);
		}, 400);
	}

	this.hidePopup = function(popup,speed){
		var popupParent = popup.parent(),
			popupContent = popup.find('.main-popup__content');

		_this.addPageScroll();
		popup.removeClass(CLASSES.activeClass);
		popupContent.removeClass(CLASSES.activeClass);
		setTimeout(function(){
			popup.fadeOut(0);
			popupParent.fadeOut(speed);
			popup.removeClass(CLASSES.activeClass);
			popupContent.removeClass(CLASSES.activeClass);
		}, 400);
	}
	this.removePageScroll = function(){
		$('body').addClass(CLASSES.pagePopup);
	}

	this.addPageScroll = function(){
		$('body').removeClass(CLASSES.pagePopup);
	}
}


var MainPopupVar = new MainPopup();

$('.main-popup__close').click(function(e){
	e.preventDefault();
	var popup = $(this).parent();
	MainPopupVar.hidePopup(popup, 500);
});

$('.main-popup__overlay').click(function(){
	MainPopupVar.hidePopup($('.main-popup__container'), 500);
});


$('.help-block-btn--support').click(function(e){
	e.preventDefault();
	var popup = $('.main-popup--tech-support');
	MainPopupVar.showPopup(popup, 500);
});

$('.help-block-btn--feedback').click(function(e){
	e.preventDefault();
	var popup = $('.main-popup--feedback');
	MainPopupVar.showPopup(popup, 500);
});


})(jQuery);

