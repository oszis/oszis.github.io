webpackJsonp([0],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(134);

__webpack_require__(340);

__webpack_require__(343);

__webpack_require__(344);

__webpack_require__(345);

__webpack_require__(346);

__webpack_require__(349);

__webpack_require__(350);

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(135);

var _svg4everybody = __webpack_require__(337);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _jquery = __webpack_require__(130);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(131);

var _bootstrap = __webpack_require__(338);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

window.$ = _jquery2.default;
window.jQuery = _jquery2.default;

__webpack_require__(339);

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(341);

var _fullpage = __webpack_require__(342);

var _fullpage2 = _interopRequireDefault(_fullpage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.js-fullpage').each(function (index, component) {
	var $component = $(component);
	var $fullpageContainer = $component.find('.js-fullpage-container');
	var $verticalNav = $component.find('.js-vertical-nav');

	function generateNavContent(counter) {
		for (var i = 0; i < counter; i++) {
			var target = $fullpageContainer.find('.section').eq(i).data('anchor');
			var $item = '<a href="#' + target + '" class="vertical-nav__item"></a>';
			$verticalNav.find('.vertical-nav__content').append($item);
		}

		$verticalNav.find('.vertical-nav__item').eq(0).addClass('vertical-nav__item_active');
	}

	if ($(window).innerWidth() > 1024) {
		generateNavContent($fullpageContainer.find('.section').length);

		var fullpageComponent = new _fullpage2.default($fullpageContainer[0], {
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			scrollOverflow: true,
			continuousVertical: false,
			scrollingSpeed: 700,
			onLeave: function onLeave(origin, destination, direction) {
				if ($verticalNav) {
					$verticalNav.find('.vertical-nav__item').removeClass('vertical-nav__item_active');
					$verticalNav.find('.vertical-nav__item').eq(destination.index).addClass('vertical-nav__item_active');
				}

				var destinationColor = destination.item.getAttribute('data-color');

				switch (destinationColor) {
					case 'hidden':
						$(window).trigger('main-page-logo:show:3');
						return;
					case 'negative':
						$(window).trigger('main-page-logo:show:2');
						return;
					case 'basic':
						$(window).trigger('main-page-logo:show:1');
						return;
					default:
						return;
				}
			}
		});

		fullpage_api.setAllowScrolling(true);
	}
});

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('.header').each(function (index, component) {
	var $component = $(component);

	$(window).on('fullpage:scrollInner', function () {
		$component.addClass('header_fullpage-active');
	});

	$(window).on('fullpage:scrollToTop', function () {
		$component.removeClass('header_fullpage-active');
	});
});

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('.main-page-logo').each(function (index, component) {
	var $component = $(component);

	$(window).on('main-page-logo:show:1', function () {
		$component.removeClass('main-page-logo_hidden');
		$component.removeClass('main-page-logo_reverse');
	});

	$(window).on('main-page-logo:show:2', function () {
		$component.removeClass('main-page-logo_hidden');
		$component.addClass('main-page-logo_reverse');
	});

	$(window).on('main-page-logo:show:3', function () {
		$component.addClass('main-page-logo_hidden');
	});
});

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _swiper = __webpack_require__(347);

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.main-page-slider').each(function (index, component) {
	var $component = $(component);
	var $sliderContainer = $component.find('.js-slider');
	var $arrowPrev = $component.find('.js-arrow-prev');
	var $arrowNext = $component.find('.js-arrow-next');
	var $activeIndex = $component.find('.js-counter-active');
	var $slideLength = $component.find('.js-counter-length');

	var swiper = new _swiper2.default($sliderContainer[0], {
		slidesPerView: 1,
		navigation: {
			prevEl: $arrowPrev,
			nextEl: $arrowNext
		}
	});

	$slideLength.html(swiper.slides.length);

	swiper.on('slideChange', function () {
		$activeIndex.html(swiper.activeIndex + 1);
	});
});

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('.js-accordion').each(function (index, component) {
	var $component = $(component);
	var $item = $component.find('.js-item');
	var $content = $component.find('.js-content');

	$content.collapse({
		parent: $component,
		toggle: false
	});

	$item.find('.js-title').on('click', function (e) {
		e.preventDefault();

		var $parent = $(e.target).parent();

		$content.collapse('hide');

		if ($parent.hasClass('active')) {
			$parent.removeClass('active');
		} else {
			$item.removeClass('active');
			$parent.addClass('active');
		}

		$parent.find('.js-content').collapse('toggle');
	});
});

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('.map').each(function (index, item) {
	function init() {
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [55.3359882, 86.176571],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 16,
			controls: []
		});
		var myPlacemark = new ymaps.Placemark([55.334782, 86.176571], {}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'images/7/placemark.png',
			// Размеры метки.
			iconImageSize: [60, 85],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-30, -90]
		});
		myMap.behaviors.disable(['rightMouseButtonMagnifier', 'scrollZoom']);
		myMap.geoObjects.add(myPlacemark);
	}

	ymaps.ready(init);
});

/***/ })

},[133]);
//# sourceMappingURL=main.js.map