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
    $body.trigger('main-menu:open');
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
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");



var ps = null;
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
  onInit: function onInit(instance, current) {
    var $fancyBox = $('.fancybox-container');

    if (!ps) {
      ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["default"]($fancyBox.find('.js-caption')[0], {
        suppressScrollX: true
      });
    }
  },
  beforeLoad: function beforeLoad(instance, current) {
    var $fancyBox = $('.fancybox-container');
    var $fancyThumbs = $fancyBox.find('.fancy__thumbs .fancybox-thumbs');

    if ($fancyThumbs.length && !thumbsPs) {
      thumbsPs = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["default"]($fancyThumbs[0], {
        suppressScrollY: true,
        swipeEasing: true
      });
    }
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

      if (ps) {
        ps.update();
      }

      if (thumbsPs) {
        thumbsPs.update();
      }
    }
  },

  /*afterShow: function (instance, current) {
  	let $clickedElement = $(current.opts.$orig);
  	let currentCaption = ($clickedElement.data('caption') || '') +
  		$.trim($clickedElement
  			.find('.js-data-caption')
  			.html() || '');
  		let $fancyBox = $('.fancybox-container');
  	let $fancy = $fancyBox.find('.fancy');
  	let $captionContainer = $fancyBox.find('.js-caption');
  		$captionContainer.html(currentCaption);
  		if (currentCaption.length === 0) {
  		$fancy.addClass('fancy_no-caption');
  	} else {
  		$fancy.removeClass('fancy_no-caption');
  			$captionContainer.find('.js-video')
  			.each((index, element) => {
  				if ($(element)
  					.data('audio')) {
  					$(element)
  						.addClass('video_audio');
  				}
  				createVideoJs($(element)[0]);
  			});
  			if (ps) {
  			ps.update();
  		}
  			if (thumbsPs) {
  			thumbsPs.update();
  		}
  	}
  },*/
  afterClose: function afterClose() {
    if (ps) {
      ps.destroy();
      ps = null;
    }

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");

$('.js-instruction-popup').each(function (index, component) {
  var $component = $(component);
  var $content = $component.find('.js-popup-content');
  var $closeBtn = $component.find('.js-popup-close');
  var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"]($content[0], {
    suppressScrollX: true
  });
  ps.update();
  $(document.body).on('instruction:show', function () {
    $component.fadeIn(200);
    ps.update();
  });
  $(document.body).on('instruction:hide', function () {
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

$('.js-main-menu').each(function (index, component) {
  var $body = $(document.body);
  var $component = $(component);
  var $closeBtn = $component.find('.js-close-menu');
  var $contentContainer = $component.find('.js-main-menu-content');
  var $section = $component.find('.js-main-menu-section');
  var $listBtn = $component.find('.js-menu-list-btn');
  var $list = $component.find('.js-menu-list');
  var ps = [];
  $section.each(function (sectionIndex, item) {
    ps[index] = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"]($(item)[0], {
      suppressScrollX: true
    });
  });

  function hideLists() {
    $section.removeClass('main-menu__section_active');
    $listBtn.removeClass('menu-list__btn_active');
    $list.removeClass('menu-list_active');
    $contentContainer.removeClass('main-menu__content_active');
  }

  function showSection(sectionId, listId) {
    var $currentSection = $section.eq(sectionId);
    var $sectionLists = $currentSection.find('.js-menu-list');
    var $currentList = $sectionLists.eq(listId);
    $currentSection.find('.js-menu-list-btn').removeClass('menu-list__btn_active');

    if (sectionId === 2) {
      $contentContainer.addClass('main-menu__content_active');
    } else {
      $contentContainer.removeClass('main-menu__content_active');
    }

    $section.eq(sectionId + 1).removeClass('main-menu__section_active');
    $currentSection.addClass('main-menu__section_active');
    $sectionLists.removeClass('menu-list_active');
    $currentList.addClass('menu-list_active');
    ps.forEach(function (item) {
      return item.update();
    });
  }

  $listBtn.on('click', function (e) {
    e.preventDefault();
    var $trgt = $(e.target);
    var itemRequestId = $trgt.data('request-id').split('-').map(Number);

    if ($trgt.hasClass('menu-list__btn_active')) {
      window.location = e.target.href;
    }

    var $sectionBtns = $trgt.closest('.js-main-menu-section').find('.js-menu-list-btn');
    $sectionBtns.removeClass('menu-list__btn_active');
    $trgt.addClass('menu-list__btn_active');
    showSection(itemRequestId[0], itemRequestId[1]);
  });
  $body.on('main-menu:open', function () {
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
  var $closeBtn = $component.find('.js-popup-close');
  $(document.body).on('pdf:show', function () {
    $component.fadeIn(200);
  });
  $(document.body).on('pdf:hide', function () {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");

$('.js-scroller').each(function (index, component) {
  var $component = $(component);
  var toTopBtn = $('.js-to-top-btn');
  var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"]($(component)[0], {
    suppressScrollX: true
  });
  $component.on('ps-scroll-y', function () {
    if ($component.scrollTop() >= $(window).innerHeight()) {
      toTopBtn.addClass('to-top-btn_active');
    } else {
      toTopBtn.removeClass('to-top-btn_active');
    }
  });
  toTopBtn.on('click', function (e) {
    e.preventDefault();
    $component.animate({
      scrollTop: 0
    }, 500);
  });
  $(document.body).on('scroll:update', function () {
    ps.update();
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

  function showStandStillTimeout() {
    standstillTimeout = setTimeout(function () {
      $component.fadeIn(300);
      $component.trigger('timeout:start');
    }, 420000);
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
    $counter.html(30);
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

/***/ "./src/js/components/visually-impaired.js":
/*!************************************************!*\
  !*** ./src/js/components/visually-impaired.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*Добавление HTML файла*/
//$( "#d5__everybody_can_see" ).load( "/js/d5__everybody_can_see/d5__everybody_can_see.html" );
$(document).ready(function () {
  /* Всплывающее Меню */
  var CecutientMenuShow = 0;
  $('#CecutientBtn, #CecutientBtn2').click(function () {
    CecutientOn();
    $.cookie("CecutientCookie", "on", {
      expires: 365,
      path: '/'
    });
    SmallFonts(); // Шрифт по умолчанию

    WhiteStyle(); // Фон по умолчанию

    ImageOn(); // Изображения по умолчанию

    VideoOff(); // Видео по умолчанию

    LineHeight_100(); // Междустрочный интервал по умолчанию

    LetterSpacing_1(); // Разрядка по умолчанию

    FontSansSerif(); // Тип шрифта по умолчанию

    $.cookie("settings", "off", {
      expires: 365,
      path: '/'
    });

    if (CecutientMenuShow === 0) {
      $('#CecutientWrapper').animate({
        "height": "55px"
      }, 500);
      CecutientMenuShow = 1;
    } else {
      $('#CecutientWrapper').animate({
        "height": "0px"
      }, 500);
      CecutientMenuShow = 0;
    }

    return false;
  });

  if ($.cookie("CecutientCookie") == "on") {
    if ($.cookie("settings") == "on") {
      $('#CecutientWrapper').css("height", "360px");
      $('#m-header').css("margin-top", "310px"); //Настройка сдвига контента при отображение расширенного меню
    } else {
      $('#CecutientWrapper').css("height", "55px");
      $('#m-header').css("margin-top", "50px");
    }
  }
  /* Конец Всплывающего Меню */

  /* Загрузка парметров из Cookies, если включены */
  //


  Cecutient_init(); //

  /* Конец Загрузки парметров из Cookies, если включены */

  /*Включение стилей для слабовидящих*/

  $('#CecutientOn').click(function () {
    CecutientOn();
  });
  /*Включение Дополнтительного меню*/

  $('#d5__option_settings').click(function () {
    ShowSettings();
  });
  /*Включение выключение изображений*/

  $('#ImageOn').click(function () {
    ImageOn();
  });
  $('#ImageOff').click(function () {
    ImageOff();
  });
  /*Включение выключение видео*/

  $('#VideoOn').click(function () {
    VideoOn();
  });
  $('#VideoOff').click(function () {
    VideoOff();
  });
  /*Размер шрифта*/

  $('#SmallFonts').click(function () {
    SmallFonts();
  });
  $('#MediumFonts').click(function () {
    MediumFonts();
  });
  $('#BigFonts').click(function () {
    BigFonts();
  });
  /*Цветовая схема*/

  $('#WhiteStyle').click(function () {
    WhiteStyle();
  });
  $('#BlackStyle').click(function () {
    BlackStyle();
  });
  $('#BlueStyle').click(function () {
    BlueStyle();
  });
  $('#GreenStyle').click(function () {
    GreenStyle();
  });
  /*Междустрочный Интервал*/

  $('#d5__line_height_100').click(function () {
    LineHeight_100();
  });
  $('#d5__line_height_150').click(function () {
    LineHeight_150();
  });
  $('#d5__line_height_200').click(function () {
    LineHeight_200();
  });
  /*Разрядка*/

  $('#d5__letter_spacing_1').click(function () {
    LetterSpacing_1();
  });
  $('#d5__letter_spacing_2').click(function () {
    LetterSpacing_2();
  });
  $('#d5__letter_spacing_3').click(function () {
    LetterSpacing_3();
  });
  /*Тип шрифта*/

  $('#d5__sans_serif').click(function () {
    FontSansSerif();
  });
  $('#d5__serif').click(function () {
    FontSerif();
  });
  /*Отключение версии для слабовидящих*/

  $('#CecutientOff').click(function () {
    $.cookie("CecutientCookie", "null", {
      expires: 365,
      path: '/'
    });
    $.cookie("settings", "null", {
      expires: 365,
      path: '/'
    });
    $.cookie("style", "null", {
      expires: 365,
      path: '/'
    });
    $.cookie("image", "null", {
      expires: 365,
      path: '/'
    });
    $.cookie("video", "null", {
      expires: 365,
      path: '/'
    });
    $.cookie("fonts", "null", {
      expires: 365,
      path: '/'
    });
    $.cookie("line_height", "null", {
      expires: 365,
      path: '/'
    });
    $.cookie("spacing", "null", {
      expires: 365,
      path: '/'
    });
    $.cookie("type", "null", {
      expires: 365,
      path: '/'
    });
    window.location.reload();
    return false;
  });
}); //Инициализация списка для слабовидящих

function Cecutient_init() {
  if ($.cookie("CecutientCookie") == "on") {
    CecutientOn();

    if ($.cookie("fonts") == "small") {
      SmallFonts();
    }

    if ($.cookie("fonts") == "medium") {
      MediumFonts();
    }

    if ($.cookie("fonts") == "big") {
      BigFonts();
    }

    if ($.cookie("style") == "white") {
      WhiteStyle();
    }

    if ($.cookie("style") == "black") {
      BlackStyle();
    }

    if ($.cookie("style") == "blue") {
      BlueStyle();
    }

    if ($.cookie("style") == "green") {
      GreenStyle();
    }

    if ($.cookie("image") == "on") {
      ImageOn();
    }

    if ($.cookie("image") == "off") {
      ImageOff();
    }

    if ($.cookie("video") == "on") {
      VideoOn();
    }

    if ($.cookie("video") == "off") {
      VideoOff();
    }

    if ($.cookie("line_height") == "100") {
      LineHeight_100();
    }

    if ($.cookie("line_height") == "150") {
      LineHeight_150();
    }

    if ($.cookie("line_height") == "200") {
      LineHeight_200();
    }

    if ($.cookie("spacing") == "1") {
      LetterSpacing_1();
    }

    if ($.cookie("spacing") == "2") {
      LetterSpacing_2();
    }

    if ($.cookie("spacing") == "3") {
      LetterSpacing_3();
    }

    if ($.cookie("type") == "sans-serif") {
      FontSansSerif();
    }

    if ($.cookie("type") == "serif") {
      FontSerif();
    }
  }
}
/*Функция обработчик включения стилей*/


function CecutientOn() {
  $(document.body).addClass('visually');
  $('.d5__hide').css("display", "none"); //Класс элементов, которые не отображаются в специальной версии

  $('#CecutientOn').css("display", "none");
  $('#CecutientOff').css("display", "inline-block");
  $('*').not('#logo, .home-three-akcii-wrap, .home-two-wrap div div div div').css('background', 'transparent');
  $('*').not('#logo, .home-three-akcii-wrap').css('color', '#000');
  $('li').css("list-style-image", "none"); //$('li').css("list-style","none");

  $('body, html').css("background", "#fff");
  $('#CecutientWrapper').css('background', '#fff !important');
  $('#CecutientBtn, #CecutientBtn2').css("display", "none"); //Отключение изображения переключения в режим для слабовидящих

  /*Настройка пользовательских стилей при включении режима для слабовидящих*/
  //

  $('.home-video-btn div, .about-video-btn div').css("display", "none");
  $('.callibri-module-area').css("display", "none");
  $('.d5__shop_3-2_row').css("padding", "15px 0");
  $('.header').css('margin-top', '60px');
  /*Конец Настройки пользовательских стилей при включении режима для слабовидящих*/

  $.cookie("CecutientCookie", "on", {
    expires: 365,
    path: '/'
  });
  return false;
}
/* Функция отображения всплывающего меню */
//


function ShowSettings() {
  if ($.cookie("CecutientCookie") == "on") {
    if ($.cookie("settings") == "on") {
      $('#CecutientWrapper').animate({
        "height": "55px"
      }, 500);
      $('#m-header').animate({
        "margin-top": "50px"
      }, 500);
      $.cookie("settings", "off", {
        expires: 365,
        path: '/'
      });
    } else {
      $('#CecutientWrapper').animate({
        "height": "360px"
      }, 500);
      $('#m-header').animate({
        "margin-top": "310px"
      }, 500); //Настройка сдвига контента при отображение расширенного меню

      $.cookie("settings", "on", {
        expires: 365,
        path: '/'
      });
    }

    return false;
  }
} //

/*Конец Функции отображения всплывающего меню*/

/*Функции изменения размера шрифта*/
//


function SmallFonts() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.main').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
    $('p, h1, h2, h3, h4, h5 a span').css('zoom', '1');
    $('.FontSize').removeClass("A_FontSize");
    $('#SmallFonts').addClass("A_FontSize");
    /*Настройка пользовательских стилей для маленьких шрифтов*/

    /*END*/

    $.cookie("fonts", "small", {
      expires: 365,
      path: '/'
    });
    return false;
    $('.l-menu-item').css("padding-bottom", "20px");
  }
}

function MediumFonts() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.main').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
    $('p, h1, h2, h3, h4, h5 a span').css('zoom', '1.3');
    $('.FontSize').removeClass("A_FontSize");
    $('#MediumFonts').addClass("A_FontSize");
    /*Настройка пользовательских стилей для средних шрифтов*/

    /*END*/

    $.cookie("fonts", "medium", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}

function BigFonts() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.main').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
    $('p, h1, h2, h3, h4, h5 a span').css('zoom', '1.5'); //$('.first_nav, .second_nav').css("width","50%");

    $('.FontSize').removeClass("A_FontSize");
    $('#BigFonts').addClass("A_FontSize");
    /*Настройка пользовательских стилей для больших шрифтов*/

    /*END*/

    $.cookie("fonts", "big", {
      expires: 365,
      path: '/'
    });
    return false;
  }
} //

/*Конец функций изменения размера шрифта*/

/*Функции обработчики отображения изображений*/
//


function ImageOn() {
  if ($.cookie("CecutientCookie") == "on") {
    $('img').css("display", "inline-block");
    $('#ImageOff').css("display", "inline-block");
    $('#ImageOn').css("display", "none");
    $('.logo_image').css("display", "none");
    $.cookie("image", "on", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}

function ImageOff() {
  if ($.cookie("CecutientCookie") == "on") {
    $('img').css("display", "none");
    $('#ImageOff').css("display", "none");
    $('#ImageOn').css("display", "inline-block");
    $('#CecutientBtn img, #CecutientBtn img').css("display", "inline-block");
    $('.img_special_black').css("display", "inline-block");
    $.cookie("image", "off", {
      expires: 365,
      path: '/'
    });
    return false;
  }
} //

/*Конец Функций обработчиков отображения изображений*/

/*Функции обработчики отображения видео*/
//


function VideoOn() {
  if ($.cookie("CecutientCookie") == "on") {
    $('#VideoOff').show();
    $('#VideoOn').hide();
    $('iframe').show();
    $.cookie("video", "on", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}

function VideoOff() {
  if ($.cookie("CecutientCookie") == "on") {
    $('#VideoOff').hide();
    $('#VideoOn').show();
    $('iframe').hide();
    $.cookie("video", "off", {
      expires: 365,
      path: '/'
    });
    return false;
  }
} //

/*Конец Функций обработчиков отображения видео*/

/*Функции изменения цветовой схема*/
//

/*Белая цветовой схема*/


function WhiteStyle() {
  if ($.cookie("CecutientCookie") == "on") {
    $('body, html').css("background", "#fff");
    $('*').css('color', '#000');
    $('#CecutientTop').css("color", "#000");
    $('.ColorStyle').removeClass("A_WhiteStyle A_BlackStyle A_BlueStyle A_GreenStyle");
    $('#WhiteStyle').addClass("A_WhiteStyle");
    /*Настройка пользовательских стилей для белой цветовой схемы*/
    //
    //

    /*Конец Настройки пользовательских стилей для белой цветовой схемы*/

    $.cookie("style", "white", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}
/*Чёрная цветовой схема*/


function BlackStyle() {
  if ($.cookie("CecutientCookie") == "on") {
    $('body, html').css("background", "#000");
    $('*').css('color', '#fff');
    $('#CecutientTop').css("color", "#fff");
    $('.ColorStyle').removeClass("A_WhiteStyle A_BlackStyle A_BlueStyle A_GreenStyle");
    $('#BlackStyle').addClass("A_BlackStyle");
    /*Настройка пользовательских стилей для чёрной цветовой схемы*/
    //
    //

    /*Конец Настройки пользовательских стилей для чёрной цветовой схемы*/

    $.cookie("style", "black", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}
/*Синия цветовой схема*/


function BlueStyle() {
  if ($.cookie("CecutientCookie") == "on") {
    $('body, html').css("background", "#9DD1FF");
    $('*').css('color', '#000');
    $('#CecutientTop').css("color", "#063462");
    $('.ColorStyle').removeClass("A_WhiteStyle A_BlackStyle A_BlueStyle A_GreenStyle");
    $('#BlueStyle').addClass("A_BlueStyle");
    /*Настройка пользовательских стилей для синей цветовой схемы*/
    //
    //

    /*Конец Настройки пользовательских стилей для синей цветовой схемы*/

    $.cookie("style", "blue", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}
/*Зелёная цветовой схема*/


function GreenStyle() {
  if ($.cookie("CecutientCookie") == "on") {
    $('body, html').css("background", "#3B2716");
    $('*').css('color', '#A9E44D');
    $('#CecutientTop').css("color", "#A9E44D");
    $('.ColorStyle').removeClass("A_WhiteStyle A_BlackStyle A_BlueStyle A_GreenStyle");
    $('#GreenStyle').addClass("A_GreenStyle");
    /*Настройка пользовательских стилей для зелёной цветовой схемы*/
    //
    //

    /*Конец Настройки пользовательских стилей для зелёной цветовой схемы*/

    $.cookie("style", "green", {
      expires: 365,
      path: '/'
    });
    return false;
  }
} //

/*Конец Функций изменения цветовой схемы*/

/*Функции изменения междустрочного интервала*/
//

/*Нормальный Интервал*/


function LineHeight_100() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.d5__line_height').removeClass("A_line_height");
    $('#d5__line_height_100').addClass("A_line_height");
    $('*').css("line-height", "100%");
    $.cookie("line_height", "100", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}
/*125% Интервал*/


function LineHeight_150() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.d5__line_height').removeClass("A_line_height");
    $('#d5__line_height_150').addClass("A_line_height");
    $('*').css("line-height", "125%");
    $.cookie("line_height", "150", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}
/*150% Интервал*/


function LineHeight_200() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.d5__line_height').removeClass("A_line_height");
    $('#d5__line_height_200').addClass("A_line_height");
    $('*').css("line-height", "150%");
    $.cookie("line_height", "200", {
      expires: 365,
      path: '/'
    });
    return false;
  }
} //

/*Конец Функций изменения междустрочного интервала*/

/*Функции изменения кернинга*/
//

/*Нормальная Разпрядка*/


function LetterSpacing_1() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.d5__letter_spacing').removeClass("A_letter_spacing");
    $('#d5__letter_spacing_1').addClass("A_letter_spacing");
    $('*').css("letter-spacing", "0px");
    $.cookie("spacing", "1", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}
/*Средняя Разрядка*/


function LetterSpacing_2() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.d5__letter_spacing').removeClass("A_letter_spacing");
    $('#d5__letter_spacing_2').addClass("A_letter_spacing");
    $('*').css("letter-spacing", "1px");
    $.cookie("spacing", "2", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}
/*Большая Разрядка*/


function LetterSpacing_3() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.d5__letter_spacing').removeClass("A_letter_spacing");
    $('#d5__letter_spacing_3').addClass("A_letter_spacing");
    $('*').css("letter-spacing", "2px");
    $.cookie("spacing", "3", {
      expires: 365,
      path: '/'
    });
    return false;
  }
} //

/*Конец Функций изменения разрядки*/

/*Функции изменения типа шрифта*/
//

/*Шрифт Sans-serif*/


function FontSansSerif() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.d5__serifs').removeClass("A_serifs");
    $('#d5__sans_serif').addClass("A_serifs");
    $('*').css("font-family", "Arial, SansSerif");
    $.cookie("type", "sans-serif", {
      expires: 365,
      path: '/'
    });
    return false;
  }
}
/*Шрифт Serif*/


function FontSerif() {
  if ($.cookie("CecutientCookie") == "on") {
    $('.d5__serifs').removeClass("A_serifs");
    $('#d5__serif').addClass("A_serifs");
    $('*').css("font-family", "'Times New Roman', Serif");
    $.cookie("type", "serif", {
      expires: 365,
      path: '/'
    });
    return false;
  }
} //

/*Конец Функций изменения типа шрифта*/

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
/* harmony import */ var _components_pdf_popup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pdf-popup */ "./src/js/components/pdf-popup.js");
/* harmony import */ var _components_pdf_popup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_pdf_popup__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_visually_impaired__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/visually-impaired */ "./src/js/components/visually-impaired.js");
/* harmony import */ var _components_visually_impaired__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_visually_impaired__WEBPACK_IMPORTED_MODULE_16__);






 // sliders












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