(function($){

	'use strict';

	var CLASSES = {
		active: 'active',
		filterMapContainer: 'filter-elem--map',
		mapOpen: 'open',
		absoluteClass: 'absolute'
	}
	


	// показ-скрытие фильтров
	function mainFilters(){
		var _this = this;

		this.overlay;
		this.filterArr;

		this.init = function(overlay, filterArr){
			_this.overlay = overlay;
			_this.filterArr = filterArr;

			// Прячем оверлей по клику по нему
			_this.overlay.click(function(){
				_this.hideFilters(_this.filterArr);
				$('.btn-mobile-menu').removeClass(CLASSES.active);
				$('.main-header__filter-right').removeClass(CLASSES.active);

			})
		}

		this.hideFilters = function(filterArr){
			_this.hideOverlay();
			filterArr.removeClass(CLASSES.active);

		};

		this.showFilter = function(filter, filterArr){
			mainFiltersArr.hideOverlay();
			
			// фикс: прячем попап карты
			$('.big-map-popup').fadeOut(300);

			if (filter.hasClass(CLASSES.active)) {

				filterArr.removeClass(CLASSES.active);
			} else if (filterArr.hasClass(CLASSES.active)) {
				_this.hideFilters(filterArr);

				setTimeout(function(){
					filter.addClass(CLASSES.active);
				}, 300);
			} else {
				_this.showOverlay();
				filter.addClass(CLASSES.active);
			}
		};

		this.showOverlay = function(){
			_this.overlay.stop().fadeIn(300);
		}
		this.hideOverlay = function(){
			_this.overlay.stop().fadeOut(300);
		}
	}

	var mainFiltersArr = new mainFilters();
	mainFiltersArr
		.init($('.main-header__filter-overlay'),$('.filter-elem'));

	// right filters
	$('.filter-right-form .filter-elem__heading').click(function(){
		var elem = $(this),
			elemParent = elem.parent();
		mainFiltersArr
			.showFilter(elemParent, mainFiltersArr.filterArr);
		mainFiltersArr.showOverlay();

		if (elemParent.hasClass('filter-elem--input')) {
			elemParent.find('input').focus();
		}
		
	});


	// filters on scroll
	$(window).on('load scroll', function(){
		var mainFooter = $('.main-footer'),
			leftFilters = $('.main-header__filter-left'),
			rightFilters = $('.main-header__filter-right'),
			leftFiltersOffset = 170,
			rightFiltersForm = $('.filter-right-form'),
			rightFiltersOffset = 100,
			fixedOffset = 80;

		if ($(window).scrollTop() + rightFilters.outerHeight() + rightFiltersOffset
			> mainFooter.offset().top - rightFiltersOffset) {
			rightFilters.addClass(CLASSES.absoluteClass);
			rightFilters.css({
				top: mainFooter.offset().top - rightFiltersOffset - rightFilters.outerHeight() + 'px'
			})
		} else {
			rightFilters.removeClass(CLASSES.absoluteClass)
			rightFilters.css({
				top: ''
			})
			
		}

		if ($(window).scrollTop() + leftFilters.outerHeight() + leftFiltersOffset
			> mainFooter.offset().top - rightFiltersOffset) {
			leftFilters.addClass(CLASSES.absoluteClass);
			leftFilters.css({
				top: mainFooter.offset().top - rightFiltersOffset - leftFilters.outerHeight() + 'px'
			})
		} else {
			leftFilters.removeClass(CLASSES.absoluteClass);
			leftFilters.css({
				top: ''
			})
		}
		
	})


	// left filters
	$('.filters-left .filter-elem__heading').click(function(){
		var elem = $(this),
			elemParent = elem.parent();
		
		if (elemParent.hasClass(CLASSES.filterMapContainer)) {

			
			if (elemParent.hasClass(CLASSES.active)) {
				mainFiltersArr.hideOverlay();
				mainFiltersArr.hideFilters(mainFiltersArr.filterArr);

				$('.big-map-popup').fadeOut(300);
			} else {
				mainFiltersArr.hideOverlay();
				mainFiltersArr.hideFilters(mainFiltersArr.filterArr);
				elemParent.addClass(CLASSES.active);

				$('.big-map-popup').fadeIn(300)
			}
		} else {
			mainFiltersArr.hideFilters(mainFiltersArr.filterArr);
			mainFiltersArr.hideOverlay();
			mainFiltersArr
				.showFilter(elemParent, mainFiltersArr.filterArr);
			mainFiltersArr.showOverlay();
		}
	});

	$('.filter-right-form .filter-elem--map').click(function(){
		mainFiltersArr.hideOverlay();
		mainFiltersArr.hideFilters(mainFiltersArr.filterArr);
		$('.big-map-popup').fadeIn(300);
		$('.btn-mobile-menu').removeClass(CLASSES.active).addClass(CLASSES.mapOpen);
		$('.main-header__filter-right').removeClass(CLASSES.active);
	});


	// footer overlay show-hide
	$('.main-footer-overlay__btn').click(function(){
		$('.main-footer-overlay').toggleClass(CLASSES.active);
	});


	// right filters resize
	$(window).on('load resize', function(){
		var containerWidth = $('.main-content-container').eq(0).innerWidth(),
			rightFilters = $('.main-header__filter-right'),
			rightFiltersForm = $('.filter-right-form'),
			containerRightOffsetWidth = $(window).innerWidth() - (containerWidth + 160 + 50);

		if ($(window).innerWidth() >= 1490) {
			console.log(containerRightOffsetWidth)
			if (containerRightOffsetWidth <= 400) {
				rightFilters.css({
					width: 400 - containerRightOffsetWidth + 'px'
				})
				
			} else {
				rightFilters.removeAttr('style');
			}
		} else {
			rightFilters.removeAttr('style');
		}
		if ($(window).innerWidth() >= 1200){
			if (rightFiltersForm.innerHeight() >= $(window).outerHeight() - 100) {

				rightFilters.css({
					height: $(window).outerHeight() - $('.main-header__desktop').outerHeight() + 'px'
				});

			} else {
				rightFilters.css({
					height: rightFiltersForm.innerHeight() + 'px'
				})
			}
			
		} else {
			rightFilters.removeClass(CLASSES.absoluteClass);
		}

		$('.nano').nanoScroller();
	});


	// header dropdowns
	$('.main-header__mobile-btn').hover(function(){
		$('.main-header__phone-dropdown').addClass('open');
	});

	$('.main-header__mobile-menu-dropdown').mouseleave(function(){
		console.log(1);
		$('.main-header__phone-dropdown').removeClass('open');
	})



	// range sliders
	/*var rangeSliderIndex = 0;
	$('.main-range-slider__elem').each(function(){
		var elem = $(this),
			elemIndex = rangeSliderIndex,
			minValue = +elem.attr('data-min-value'),
			maxValue = +elem.attr('data-max-value');


		noUiSlider.create($('.main-range-slider__elem').get(rangeSliderIndex), {
			start: [0, maxValue],
			connect: true,
			direction: 'ltr',
			range: {
				'min': minValue,
				'max': maxValue
			}
		});

		$('.main-range-slider__elem').get(rangeSliderIndex).noUiSlider
			.on('update',function(values, handle){
				
				elem
					.parent()
					.find('input').eq(handle).val(Math.round(values[handle]));
				elem
					.parent()
					.find('span').eq(handle).html(Math.round(values[handle]));
		});
		rangeSliderIndex++;
	});*/

	$('.main-range-slider__elem').each(function(){
		var elem = $(this),
			minValue = +elem.attr('data-min-value'),
			maxValue = +elem.attr('data-max-value'),
			steps = +elem.attr('data-steps');
		
		elem.slider({
			range: true,
			min: minValue,
			max: maxValue,
			step: steps,
			values: [ minValue, maxValue],
			create: function(){
				elem.find('.ui-slider-handle').eq(0).append('<span>' + minValue + '</span>');
				elem.find('.ui-slider-handle').eq(1).append('<span>' + maxValue + '</span>');				
			},
			slide: function( event, ui ) {
				elem.parent().find('input').eq(0).val(ui.values[0] );
				elem.parent().find('input').eq(1).val(ui.values[1] );
				elem.find('.ui-slider-handle').eq(0).find('span').html(ui.values[0]);
				elem.find('.ui-slider-handle').eq(1).find('span').html(ui.values[1]);
			}
		})
	})


	// sliders
	if ($('.property-card-slider__content').length) {

		$('.property-card-slider__content').slick({
			centerMode: true,
			centerPadding: '0',
			slidesToShow: 3,
			variableWidth: true,
			infinite: true,
			arrows: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					}
				}
			]
		})
	}
	if ($('.other-property-slider').length) {

		$('.other-property-slider').slick({
			slidesToShow: 4,
			// variableWidth: true,
			infinite: true,
			arrows: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						// arrows: false,
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						// arrows: false,
						slidesToShow: 2
					}
				},
				{
					breakpoint: 560,
					settings: {
						arrows: false,
						slidesToShow: 1
					}
				}
			]
		})
		
	}


	// mobile-menu
	$('.btn-mobile-menu').click(function(){
		if ($(this).hasClass(CLASSES.mapOpen)) {
			$('.big-map-popup').fadeOut(300);
			
			mainFiltersArr.hideOverlay();

			$(this)
				.removeClass(CLASSES.mapOpen)
				.removeClass(CLASSES.active);
			return;
		}
		else {

			if ($(this).hasClass(CLASSES.active)) {
				mainFiltersArr.hideOverlay();
				$(this).removeClass(CLASSES.active);
				$('.main-header__filter-right').removeClass(CLASSES.active)
			} else {
				mainFiltersArr.showOverlay();
				$(this).removeClass(CLASSES.mapOpen).addClass(CLASSES.active);
				$('.main-header__filter-right').addClass(CLASSES.active);
			}
		}
	})



	// popups
	function MainPopups(){
		var _this = this;

		this.showPopup = function(popup){
			popup.stop().fadeIn(300);
		};

		this.hidePopup = function(popup){
			popup.stop().fadeOut(300);
		};
	}

	var MainPopupsVar = new MainPopups()


	$('.main-popup .popup-overlay').click(function(){
		MainPopupsVar
			.hidePopup($(this).parent());
	});

	$('.main-popup .popup-close').click(function(){
		MainPopupsVar
			.hidePopup($(this).parent().parent());
	});


	$('.main-form__submit').click(function(e){
		e.preventDefault();
		MainPopupsVar
			.showPopup($('#requestPopup'));
	});

	$('.main-section').addClass('hidden-class').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		classToRemove: 'hidden-class',
		repeat: false,
		offset: 100
	});

	// input radio checked
	$('.input-label--radio').click(function(e){
		e.preventDefault();
		var elem = $(this);
		if (!elem.find('input').prop('checked')){
			elem.find('input').prop('checked', true);
		} else {
			elem.find('input').prop('checked', false);
		}
		return;
	});

	$('.icon--list-like').click(function(e){
		e.preventDefault();
		var elem = $(this);
		var i = 1;
		
		if (elem.hasClass(CLASSES.active)){
			elem.removeClass(CLASSES.active);
			$('.main-header__like span').text(+$('.main-header__like span').text() - i)
		} else {
			elem.addClass(CLASSES.active);
			$('.main-header__like span').text(+$('.main-header__like span').text() + i)
		}

	})
		
})(jQuery);




// google map
$(document).ready(function(){
	function initialize() {

		// footer map color styles
		var styleArray = [
			{
				featureType: 'all',
				stylers: [
					{
						saturation: -90,
					}
				]
			},
			{
				featureType: 'water',
				stylers: [{color: '#ededed'}]
			},
			{
				featureType: 'landscape',
				stylers:[{
					color: '#f7f7f7'
				}]
			},
			{
				featureType: 'landscape',
				stylers:[{
					color: '#f7f7f7'
				}]
			},
			{
				featureType: 'landscape.natural.landcover',
				stylers:[{
					color: '#e5e5e5'
				}]
			},
			{
				featureType: 'landscape.man_made',
				stylers:[{
					color: '#f7f7f7'
				}]
			},
		];

		// footer map options
		var mapOptions = {
			zoom: 12,
			center: {lat: 41.391018, lng: 2.191113},
			styles: styleArray,
		};


		// footer map
		if (document.getElementById('map')) {
			var map = new google.maps.Map(document.getElementById('map'),
				mapOptions);
			
		}
		var footerMarker = new google.maps.Marker({
			position: {lat: 41.391018, lng: 2.191113},
			map: map,
			icon: '../img/footer-map-logo.png'
		});
		
	}


	google.maps.event.addDomListener(window, 'load', initialize);
	
});