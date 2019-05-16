/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/card.js":
/*!***********************************!*\
  !*** ./src/js/components/card.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-card').each(function (index, component) {
  var $component = $(component);
  var $body = $(document.body);
  $component.on('click', function (e) {
    e.preventDefault();

    if ($component.hasClass('show_in_menu')) {
      var trgt_id = $component.data('id');
      $body.trigger('select_menu_element', [trgt_id]);
      $body.trigger('main-menu:open', []);
    } else {
      var trgt_href = $component.attr('href');
    }
  });
});

/***/ }),

/***/ "./src/js/components/collapse.js":
/*!***************************************!*\
  !*** ./src/js/components/collapse.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-collapse-list').each(function (listIndex, component) {
  var $component = $(component);
  var $collapseHead = $component.find('.js-collapse-head');
  var $collapseContent = $component.find('.js-collapse-content');
  var $scroller = $('.js-scroller');
  $collapseContent.collapse({
    parent: $component,
    toggle: false
  });
  setTimeout(function () {
    $collapseContent.stop(true, true).removeClass('show');
    $component.stop(true, true).addClass('collapse-list_show');
    $(document.body).trigger('scroll:update');
  }, 30);
  $collapseContent.on('hide.bs.collapse', function (e) {
    var $trgt = $(e.target);
    var $item = $trgt.parent();
    var $head = $item.find('.js-collapse-head');
    $head.removeClass('collapse-head_active');
    $item.removeClass('collapse-item_active');
  });
  $collapseContent.on('show.bs.collapse', function (e) {
    var $trgt = $(e.target);
    var $item = $trgt.parent();
    var $head = $item.find('.js-collapse-head');
    $head.addClass('collapse-head_active');
    $item.addClass('collapse-item_active');
  });
  $collapseContent.on('shown.bs.collapse hidden.bs.collapse', function () {
    $(document.body).trigger('scroll:update');
  });
  $collapseContent.on('shown.bs.collapse', function (e) {
    $scroller.animate({
      scrollTop: $(e.target).parent().find('.js-collapse-head').offset().top
    }, 500);
  });
  $collapseHead.on('click', function (e) {
    $(e.currentTarget).closest('.js-collapse-item').find('.js-collapse-content').collapse('toggle');
  });
  $collapseHead.on('click', function (e) {
    e.preventDefault();
    var $trgt = $(e.currentTarget);
    /*if ($trgt.hasClass('collapse-head_active')) {
    	$collapseHead.stop(true, true)
    		.removeClass('collapse-head_active');
    		$(e.currentTarget)
    		.closest('.js-collapse-item')
    		.stop(true, true)
    		.removeClass('collapse-item_active');
    		$(e.currentTarget)
    		.closest('.js-collapse-item')
    		.find('.js-collapse-content')
    		.stop(true, true)
    		.collapse('hide');
    } else {
    	$collapseHead.stop(true, true)
    		.removeClass('collapse-head_active');
    		$(e.currentTarget)
    		.stop(true, true)
    		.addClass('collapse-head_active');
    		$(e.currentTarget)
    		.closest('.js-collapse-item')
    		.find('.js-collapse-content')
    		.stop(true, true)
    		.collapse('show');
    }*/
  });
});

/***/ }),

/***/ "./src/js/components/createVideoJs.js":
/*!********************************************!*\
  !*** ./src/js/components/createVideoJs.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");

window.videojs = video_js__WEBPACK_IMPORTED_MODULE_0__["default"];

function createVideoJs(videoTag) {
  Object(video_js__WEBPACK_IMPORTED_MODULE_0__["default"])(videoTag, {
    fluid: true,
    aspectRatio: '16:9'
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createVideoJs);

/***/ }),

/***/ "./src/js/components/fancybox.js":
/*!***************************************!*\
  !*** ./src/js/components/fancybox.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createVideoJs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createVideoJs */ "./src/js/components/createVideoJs.js");


var thumbsPs = null;
$('[data-fancybox]').fancybox({
  buttons: ['zoom'],
  backFocus: false,
  modal: false,
  infobar: true,
  image: {
    preload: true
  },
  baseTpl: "<div class=\"fancybox-container\" role=\"dialog\" tabindex=\"-1\">\n\t\t\t\t<div class=\"fancybox-bg\"></div>\n\t\t\t\t<div class=\"fancy fancy_no-caption\">\n\t\t\t\t\t<button data-fancybox-close class=\"fancy__btn fancy__close-btn\" title=\"{{CLOSE}}\">\n\t\t\t\t\t\t<span class=\"icon icon_cross\">\n\t\t\t\t\t\t\t<svg><use xlink:href=\"images/sprites.svg#icon-cross\"></use></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class=\"fancy__inner\">\n\t\t\t\t\t\t<div class=\"fancy__content\">\n\t\t\t\t\t\t\t<div class=\"fancybox-stage fancy__stage\"></div>\n\t\t\t\t\t\t\t{{arrows}}\n\t\t\t\t\t\t\t<div class=\"fancy__toolbar\">{{buttons}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"fancy__caption js-caption\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"fancy__infobar\">\n\t\t\t\t\t\t<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"fancy__thumbs\"></div>\n\t\t\t</div>",
  video: {
    tpl: "<div class=\"fancybox-content\">\n\t\t\t\t\t<div class=\"fancy__video\">\n\t\t\t\t\t\t<video class=\"video video-js js-video\" controls controlsList=\"nodownload\" poster=\"{{poster}}\">\n\t\t\t\t\t\t\t<source src=\"{{src}}\" type=\"{{format}}\" />\n\t\t\t\t\t\t</video>\n\t\t\t\t\t</div>\n\t\t\t\t</div>",
    format: '',
    autoStart: false
  },
  btnTpl: {
    zoom: "<button data-fancybox-zoom class=\"fancy__btn\" title=\"{{ZOOM}}\">\n\t\t\t\t\t<span class=\"icon icon_zoom\">\n\t\t\t\t\t\t<svg><use xlink:href=\"images/sprites.svg#icon-zoom\"></use></svg>\n\t\t\t\t\t</span>\n\t\t\t\t</button>",
    // Arrows
    arrowLeft: "<button data-fancybox-prev class=\"fancy__arrow fancy__arrow_left fancy__btn\" title=\"{{PREV}}\">\n\t\t\t\t\t<svg><use xlink:href=\"images/sprites.svg#icon-angle-left-thin\"></use></svg>\n\t\t\t\t</button>",
    arrowRight: "<button data-fancybox-next class=\"fancy__arrow fancy__arrow_right fancy__btn\" title=\"{{NEXT}}\">\n\t\t\t\t\t<svg><use xlink:href=\"images/sprites.svg#icon-angle-right-thin\"></use></svg>\n\t\t\t\t</button>"
  },
  thumbs: {
    autoStart: true,
    hideOnClose: true,
    parentEl: '.fancy__thumbs',
    axis: 'x'
  },
  onInit: function onInit(instance, current) {},
  beforeLoad: function beforeLoad(instance, current) {
    var $fancyBox = $('.fancybox-container');
    var $fancyThumbs = $fancyBox.find('.fancy__thumbs .fancybox-thumbs');
  },
  afterLoad: function afterLoad(instance, current) {
    var $currentContent = $(current.$content);

    if (current.type === 'video') {
      var $video = $currentContent.find('.js-video');

      if ($(current.opts.$orig).data('audio')) {
        $video.addClass('video_audio');
      }

      Object(_createVideoJs__WEBPACK_IMPORTED_MODULE_1__["default"])($video[0]);
    }
  },
  beforeShow: function beforeShow(instance, current) {
    var $clickedElement = $(current.opts.$orig);
    var currentCaption = ($clickedElement.data('caption') || '') + $.trim($clickedElement.find('.js-data-caption').html() || '');
    var $fancyBox = $('.fancybox-container');
    var $fancy = $fancyBox.find('.fancy');
    var $captionContainer = $fancyBox.find('.js-caption');
    $captionContainer.html(currentCaption);

    if (currentCaption.length === 0) {
      $fancy.addClass('fancy_no-caption');
    } else {
      $fancy.removeClass('fancy_no-caption');
      $captionContainer.find('.js-video').each(function (index, element) {
        if ($(element).data('audio')) {
          $(element).addClass('video_audio');
        }

        Object(_createVideoJs__WEBPACK_IMPORTED_MODULE_1__["default"])($(element)[0]);
      });

      if (thumbsPs) {
        thumbsPs.update();
      }
    }
  },
  afterClose: function afterClose() {
    if (thumbsPs) {
      thumbsPs.destroy();
      thumbsPs = null;
    }
  }
});

/***/ }),

/***/ "./src/js/components/gallery-slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/gallery-slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");

$('.js-gallery-slider').each(function (index, component) {
  var $component = $(component);
  var $slider = $component.find('.swiper-container');
  var sliderOptions = {
    slidesPerView: 'auto',
    spaceBetween: 48,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true
    },
    navigation: {
      nextEl: '.gallery-slider__button_next',
      prevEl: '.gallery-slider__button_prev',
      disabledClass: 'gallery-slider__button_disabled'
    }
  };
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider.eq(0), sliderOptions);
  swiper.on('fromEdge', function () {
    $slider.stop(true, true).addClass('gallery-slider__container_has-before gallery-slider__container_has-after');
  });
  swiper.on('reachBeginning', function () {
    $slider.removeClass('gallery-slider__container_has-before');
  });
  swiper.on('reachEnd', function () {
    $slider.removeClass('gallery-slider__container_has-after');
  });
});

/***/ }),

/***/ "./src/js/components/grid-gallery.js":
/*!*******************************************!*\
  !*** ./src/js/components/grid-gallery.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_0__);

$('.js-grid-gallery').each(function (index, component) {
  var $component = $(component);
  var masonry = new masonry_layout__WEBPACK_IMPORTED_MODULE_0___default.a($component[0], {
    itemSelector: '.grid-gallery__item',
    columnWidth: 280,
    gutter: 30
  });
});

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-header-btn-show-instruction').on('click', function (e) {
  e.preventDefault();
  $(document.body).trigger('instruction:show');
});

/***/ }),

/***/ "./src/js/components/instruction-popup.js":
/*!************************************************!*\
  !*** ./src/js/components/instruction-popup.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-instruction-popup').each(function (index, component) {
  var $component = $(component);
  var $body = $(document.body);
  var $closeBtn = $component.find('.js-popup-close');
  $(document.body).on('instruction:show', function () {
    $body.stop(true, true).addClass('show-popup');
    $component.fadeIn(200);
  });
  $(document.body).on('instruction:hide', function () {
    $body.stop(true, true).removeClass('show-popup');
    $component.fadeOut(200);
  });
  $closeBtn.on('click', function (e) {
    e.preventDefault();
    $(document.body).trigger('instruction:hide');
  });
});

/***/ }),

/***/ "./src/js/components/js-video.js":
/*!***************************************!*\
  !*** ./src/js/components/js-video.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createVideoJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createVideoJs */ "./src/js/components/createVideoJs.js");

$('.js-video').each(function (index, component) {
  var $component = $(component);

  if (!$component.parent('.js-data-caption').length) {
    if ($component.data('audio')) {
      $component.addClass('video_audio');
    }

    Object(_createVideoJs__WEBPACK_IMPORTED_MODULE_0__["default"])($component[0]);
  }
});

/***/ }),

/***/ "./src/js/components/main-menu.js":
/*!****************************************!*\
  !*** ./src/js/components/main-menu.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");

var ps = [];
$('.js-main-menu').each(function (index, component) {
  var $body = $(document.body);
  var $component = $(component);
  var $closeBtn = $component.find('.js-close-menu');
  var $listBtn = $component.find('.js-menu-list-btn');
  var $open_new_page_link = $component.find('.menu_open_new_page');
  var $menuList = $component.find('.js-menu-list');
  $menuList.each(function (index, list) {
    ps[index] = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"]($(list)[0], {
      suppressScrollX: true
    });
  });
  $listBtn.on('click', function (e) {
    var $trgt = $(e.currentTarget);
    var $parentList = $trgt.closest('.js-menu-list');
    var $parentMenuList = $trgt.closest('.menu-list');
    var $listItem = $trgt.closest('.menu-list__item').find('.menu-list');
    var $btnArr = $parentList.find('.js-menu-list-btn');
    var $listArr = $parentList.find('.menu-list');
    $parentMenuList.find('.menu-list__btn').removeClass('menu-list__btn_active');

    if (!$trgt.hasClass('menu-list__btn_active')) {
      $btnArr.removeClass('menu-list__btn_active');
      $trgt.addClass('menu-list__btn_active');
      $listArr.removeClass('menu-list_active');
      $listItem.eq(0).stop(true, true).addClass('menu-list_active');
    } else {
      $trgt.addClass('menu-list__btn_active');
    }
  });
  $open_new_page_link.on('click', function (e) {
    var $trgt = $(e.currentTarget);
    var $parentMenuList = $trgt.closest('.menu-list');
    $parentMenuList.find('.menu-list__btn').removeClass('menu-list__btn_active');
    $parentMenuList.find('.menu-list').removeClass('menu-list_active');
    $trgt.addClass('menu-list__btn_active');
  });

  function hideLists() {
    $component.find('.menu-list').removeClass('menu-list_active');
  }

  $body.on('main-menu:open', function (e) {
    $component.addClass('main-menu_active');
  });
  $body.on('main-menu:close', function () {
    $component.removeClass('main-menu_active');
    hideLists();
  });
  $closeBtn.on('click', function (e) {
    e.preventDefault();
    $body.trigger('main-menu:close');
  });
  $body.on('select_menu_element', function (e, element_id) {
    var $menu_element = $component.find('.menu_index_1 .menu-list__item[data-id="' + element_id + '"]');
    $('.menu-list__btn').removeClass('menu-list__btn_active');
    $menu_element.find('a:first').addClass('menu-list__btn_active');
    $menu_element.find('.menu_index_2:first').addClass('menu-list_active');
  });
});

/***/ }),

/***/ "./src/js/components/material-slider.js":
/*!**********************************************!*\
  !*** ./src/js/components/material-slider.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");

$('.js-material-slider').each(function (index, component) {
  var $component = $(component);
  var $slider = $component.find('.swiper-container');
  var slidesLength = $component.find('.swiper-slide').length;
  var sliderOptions = {
    slidesPerView: 3.5,
    spaceBetween: 40,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true
    },
    navigation: {
      nextEl: '.material-slider__button_next',
      prevEl: '.material-slider__button_prev',
      disabledClass: 'material-slider__button_disabled'
    }
  };

  if (slidesLength > sliderOptions.slidesPerView) {
    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider.eq(0), sliderOptions);
    swiper.on('fromEdge', function () {
      $slider.stop(true, true).addClass('material-slider__container_has-before material-slider__container_has-after');
    });
    swiper.on('reachBeginning', function () {
      $slider.stop(true, true).removeClass('material-slider__container_has-before');
    });
    swiper.on('reachEnd', function () {
      $slider.stop(true, true).removeClass('material-slider__container_has-after');
    });
    $(document.body).on('collapse-show', function () {
      swiper.update();
    });
    $(document.body).on('update-sliders', function () {
      swiper.update();
    });
  } else {
    $component.addClass('material-slider_not-slider');
  }
});

/***/ }),

/***/ "./src/js/components/pdf-popup.js":
/*!****************************************!*\
  !*** ./src/js/components/pdf-popup.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-pdf-popup').each(function (index, component) {
  var $component = $(component);
  var $body = $(document.body);
  var $closeBtn = $component.find('.js-popup-close');
  $(document.body).on('pdf:show', function () {
    $body.stop(true, true).addClass('show-popup');
    $component.fadeIn(200);
  });
  $(document.body).on('pdf:hide', function () {
    $body.stop(true, true).removeClass('show-popup');
    $component.fadeOut(200);
  });
  $closeBtn.on('click', function (e) {
    e.preventDefault();
    $(document.body).trigger('pdf:hide');
  });
});
$('.js-material-item-document').on('click', function (e) {
  e.preventDefault();
  var $trgt = $(e.currentTarget);
  var embedStr = "<embed src=\"".concat($trgt.attr('href'), "\" type=\"application/pdf\" width=\"100%\" height=\"100%\"/>");
  $('.js-pdf-popup').find('.js-embed').html(embedStr);
  $(document.body).trigger('pdf:show');
});

/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on('preloader:show', function () {
  $('.js-preloader').fadeIn(300);
});
$(window).on('preloader:hide', function () {
  $('.js-preloader').fadeOut(300);
});
$(window).on('load', function () {
  $(window).trigger('preloader:hide');
});

/***/ }),

/***/ "./src/js/components/presentation-lead.js":
/*!************************************************!*\
  !*** ./src/js/components/presentation-lead.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-presentation-lead').each(function (index, component) {
  var $component = $(component);
  var $componentBackground = $component.find('.js-presentation-lead-bg');
  $componentBackground.css({
    height: $component.outerHeight()
  });
});

/***/ }),

/***/ "./src/js/components/scroller.js":
/*!***************************************!*\
  !*** ./src/js/components/scroller.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-scroller').each(function (index, component) {
  var $component = $(component);
  var toTopBtn = $('.js-to-top-btn');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= $(window).innerHeight()) {
      toTopBtn.addClass('to-top-btn_active');
    } else {
      toTopBtn.removeClass('to-top-btn_active');
    }
  });
  toTopBtn.on('click', function (e) {
    e.preventDefault();
    $(window).scrollTop(0);
  });
});

/***/ }),

/***/ "./src/js/components/show-menu.js":
/*!****************************************!*\
  !*** ./src/js/components/show-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-show-menu-btn').each(function (index, component) {
  var $component = $(component);
  var $body = $(document.body);
  var $presentationLead = $('.js-presentation-lead');

  function checkScrollTop() {
    if ($('.js-scroller').scrollTop() < $presentationLead.outerHeight() - 100) {
      $component.addClass('show-menu__btn_active');
    } else {
      $component.removeClass('show-menu__btn_active');
    }
  }

  if ($presentationLead && $presentationLead.hasClass('presentation-lead_has-bg')) {
    checkScrollTop();
    $('.js-scroller').on('ps-scroll-y', function () {
      checkScrollTop();
    });
  }

  $component.on('click', function (e) {
    e.preventDefault();
    $body.trigger('main-menu:open');
  });
});

/***/ }),

/***/ "./src/js/components/standstill.js":
/*!*****************************************!*\
  !*** ./src/js/components/standstill.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-standstill').each(function (index, component) {
  var $component = $(component);
  var $counter = $component.find('.js-counter');
  var animationInterval = null;
  var standstillTimeout = null;
  var TimeLimitInMinuts = $component.data('timeout_in_minutes');
  TimeLimitInMinuts = Number.isInteger(TimeLimitInMinuts) ? TimeLimitInMinuts : 7;
  var PopupTimeLimitInSeconds = $component.data('popup_timeout_in_seconds');
  PopupTimeLimitInSeconds = Number.isInteger(PopupTimeLimitInSeconds) ? PopupTimeLimitInSeconds : 30;

  function showStandStillTimeout() {
    standstillTimeout = setTimeout(function () {
      if ($('.page_type_main').length) {
        // exclude main page
        $component.trigger('timeout:stop');
      } else {
        $component.fadeIn(300);
        $component.trigger('timeout:start');
      }
    }, TimeLimitInMinuts * 60 * 1000);
  }

  function thirtySecondsTimeout(counter) {
    if (Number(counter) === 0) {
      window.location = '/';
      return 0;
    } else {
      return Number(--counter);
    }
  }

  showStandStillTimeout();
  $component.on('timeout:start', function () {
    $counter.html(PopupTimeLimitInSeconds);
    animationInterval = setInterval(function () {
      var counter = thirtySecondsTimeout($counter.html());
      $counter.html(counter);
    }, 1000);
  });
  $component.on('timeout:stop', function () {
    if (standstillTimeout) {
      clearTimeout(standstillTimeout);
      standstillTimeout = null;
      showStandStillTimeout();
    }

    if (animationInterval) {
      clearInterval(animationInterval);
      animationInterval = null;
    }
  }); // clear timeouts on body click

  $(document.body).on('click', function () {
    $component.trigger('timeout:stop');
  }); // hide component and clear timeouts on component click

  $component.on('click', function () {
    $component.stop(true, true).fadeOut(300);
    $component.trigger('timeout:stop');
  });
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _components_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroller */ "./src/js/components/scroller.js");
/* harmony import */ var _components_scroller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_scroller__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_main_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-menu */ "./src/js/components/main-menu.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card */ "./src/js/components/card.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/collapse */ "./src/js/components/collapse.js");
/* harmony import */ var _components_collapse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_collapse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_presentation_lead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/presentation-lead */ "./src/js/components/presentation-lead.js");
/* harmony import */ var _components_presentation_lead__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_presentation_lead__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_show_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/show-menu */ "./src/js/components/show-menu.js");
/* harmony import */ var _components_show_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_show_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/material-slider */ "./src/js/components/material-slider.js");
/* harmony import */ var _components_gallery_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gallery-slider */ "./src/js/components/gallery-slider.js");
/* harmony import */ var _components_grid_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/grid-gallery */ "./src/js/components/grid-gallery.js");
/* harmony import */ var _components_standstill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/standstill */ "./src/js/components/standstill.js");
/* harmony import */ var _components_standstill__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_standstill__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_fancybox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/fancybox */ "./src/js/components/fancybox.js");
/* harmony import */ var _components_js_video__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/js-video */ "./src/js/components/js-video.js");
/* harmony import */ var _components_instruction_popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/instruction-popup */ "./src/js/components/instruction-popup.js");
/* harmony import */ var _components_instruction_popup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_instruction_popup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_pdf_popup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pdf-popup */ "./src/js/components/pdf-popup.js");
/* harmony import */ var _components_pdf_popup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_pdf_popup__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/preloader */ "./src/js/components/preloader.js");
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_preloader__WEBPACK_IMPORTED_MODULE_16__);






 // sliders









 //import './components/visually-impaired';

 //import './components/common';

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery.cookie */ "./node_modules/jquery.cookie/jquery.cookie.js");
/* harmony import */ var jquery_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js");
/* harmony import */ var bootstrap_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_select__WEBPACK_IMPORTED_MODULE_6__);



svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
 // bootstrap





/***/ }),

/***/ 0:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.js.map