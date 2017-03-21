(function($){

	var CLASSES = {
		active: 'active',
		filterMapContainer: 'filter-elem--map'
	}
	


	// показ-скрытие фильтров
	function mainFilters(){
		var _this = this;

		this.overlay;
		this.filterArr;

		this.init = function(overlay, filterArr){
			_this.overlay = overlay;
			_this.filterArr = filterArr;
			_this.overlay.click(function(){
				_this.hideFilters(_this.filterArr);
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


	$('.main-footer-overlay__btn').click(function(){
		$('.main-footer-overlay').toggleClass(CLASSES.active);
	});



	// right filters resize
	$(window).on('load resize', function(){
		var containerWidth = $('.main-content-container').eq(0).innerWidth(),
			rightFilters = $('.main-header__filter-right'),
			containerRightOffsetWidth = $(window).innerWidth() - (containerWidth + 160 + 50);

		if ($(window).innerWidth() >= 1490) {
			console.log(containerRightOffsetWidth)
			if (containerRightOffsetWidth <= 400) {
				rightFilters.css({
					right: containerRightOffsetWidth - 400 + 'px'
				})
				
			} else {
				rightFilters.removeAttr('style');
			}
		} else {
			rightFilters.removeAttr('style');
		}
	});

	// google map
	$(document).ready(function(){
		function initialize() {

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

		var mapOptions = {
			zoom: 12,
			center: new google.maps.LatLng(40.6743890, -73.9455),
			styles: styleArray
		};

		var mapOptions2 = {
			zoom: 12,
			center: new google.maps.LatLng(40.6743890, -73.9455),
		};

		if (document.getElementById('map')) {
			var map = new google.maps.Map(document.getElementById('map'),
				mapOptions);
			
		}
		if (document.getElementById('map-popup')) {
			var map2 = new google.maps.Map(document.getElementById('map-popup'),
				mapOptions2);

		}
		if (document.getElementById('elem-page-map')) {
			var map3 = new google.maps.Map(document.getElementById('elem-page-map'),
				mapOptions2);
		}
		}


		google.maps.event.addDomListener(window, 'load', initialize);
		
	});


	$('.main-header__phone-dropdown').hover(function(){
		$(this).addClass('open');
	});




	// range sliders
	var rangeSliderArr = document.querySelectorAll('.main-range-slider__elem'),
		rangeSliderValues = document.querySelectorAll('.main-range-slider input[type="text"]');
	for (var i = 0; i < rangeSliderArr.length; i++) {
		noUiSlider.create(rangeSliderArr[i], {
			start: [0, 100],
			connect: true,
			direction: 'ltr',
			range: {
				'min': 0,
				'max': 100
			}
		});

		rangeSliderArr[i].noUiSlider.on('update', function( values, handle ) {
			rangeSliderValues[handle].value = Math.round(values[handle]);
		});
	}

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
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						arrows: false,
						slidesToShow: 3
					}
				},
				{
					breakpoint: 1024,
					settings: {
						arrows: false,
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
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


$('.btn-mobile-menu').click(function(){
	$(this).toggleClass(CLASSES.active);
})

		
})(jQuery)