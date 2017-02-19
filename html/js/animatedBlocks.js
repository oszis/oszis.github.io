(function($){
/*
по клику на элемент
1 элемент абсолютно позиционируется
2 элемент сворачивается в кружок
3 появляются фоновые треугольники
4 элемент едет к верху страницы
5 элемент разворачивается
6 снизу появляется блок контента


по закрытию
1 прячется блок контента
2 элемент сворачивается
3 исчезают фоновые треугольники
4 элемент едет к своему контейнеру
5 элемент разворачивается из кружка
6 ...
7 profit
*/

// Херачим паттерн svg для красоты

function AnimatedBlocks(){

	var _this = this,
		circleClass = 'elem--circle';


	var SELECTORS = {
		pattern: '.pattern',
		cardElem: '.services-elem__content',
		cardElemContainer: '.services-elem',
		cardContainer: '.main-section--main-slider',
		elemContent: '.services-elem__hidden'
	};


	var CLASSES = {
		hiddenClass: 'hidden',
		hiddenElemClass: 'hidden-elem',
		active: 'active',
		patternActive: 'active',
		polygon: 'poly',
		polygonHidden: 'invisible-poly',
		cardContainer: 'card-container',
		elemBigClass: 'services-elem--big'
	}

	var pattern = Trianglify({
		width: window.innerWidth,
		height: window.innerHeight,
		cell_size: 90,
		variance: 1,
		stroke_width: 0.6,
		color_function : function(x, y) {
			return '#000';
		}
	}).svg(); // Render as SVG.

	var polygonMap = {
		paths: null,
		points: null
	};




	this.positionElem = function(elem){
		var elemTop = elem.offset().top - $(window).scrollTop(),
			elemLeft = elem.offset().left;
		elem.css({
			'top': elemTop + 'px',
			'left': elemLeft + 'px'
		});

		if (elem.hasClass(CLASSES.hiddenElemClass)) {
			elem.css('position', 'static');
		} else {
			elem.css('position', 'fixed');
		}

	}

	this.circleElem = function(elem){
		elem.addClass(circleClass);
	}

	this.uncircleElem = function(elem){
		elem.removeClass(circleClass);
	}





	this.mapPolygons = function(pattern) {

		$(SELECTORS.pattern).append(pattern);

		// Convert nodelist to array,
		// Used `.childNodes` because IE doesn't support `.children` on SVG.
		polygonMap.paths = [].slice.call(pattern.childNodes);

		polygonMap.points = [];

		polygonMap.paths.forEach(function(polygon) {

			// Hide polygons by adding CSS classes to each svg path (used attrs because of IE).
			$(polygon).attr('class', CLASSES.polygon + ' ' + CLASSES.polygonHidden);

			var rect = polygon.getBoundingClientRect();

			var point = {
				x: rect.left + rect.width / 2,
				y: rect.top + rect.height / 2
			};

			polygonMap.points.push(point);
		});

		// All polygons are hidden now, display the pattern container.
		$(SELECTORS.pattern).addClass(CLASSES.active);
	};



	this.onCardMove = function(track) {

        var radius = track.width / 2;

        var center = {
          x: track.x,
          y: track.y
        };

        polygonMap.points.forEach(function(point, i) {

          if (_this.detectPointInCircle(point, radius, center)) {

            // Notice that since the points array has been previously generated
            // from the paths array we can safely use the index to get the correct path.
            $(polygonMap.paths[i]).attr('class', CLASSES.polygon);

          } else {
            $(polygonMap.paths[i]).attr('class', CLASSES.polygon + ' ' + CLASSES.polygonHidden);
          }
        });
      }

      /**
       * Detect if a point is inside a circle area.
       * @param {object} point The point to test.
       * @param {number} radius The width of the card.
       * @param {object} center The center of the card.
       * @private
       */
    this.detectPointInCircle = function(point, radius, center) {

        var xp = point.x;
        var yp = point.y;

        var xc = center.x;
        var yc = center.y;

        var d = radius * radius;

        var isInside = Math.pow(xp - xc, 2) + Math.pow(yp - yc, 2) <= d;

        return isInside;
	};

	this.isOpen = function(elem){
		if (elem.hasClass('open-elem')) {
			console.log('elem is open ' + false);
			return false;
		} else {
			console.log('elem is closed ' + true);
			return true;
		};

	}


	this.hideOtherCards = function(elem, elemIndex){
		elem.each(function(){
			if (elem.index() != elemIndex) {
				elem.addClass(CLASSES.hiddenClass)
			} else return;
		})

		console.log('hide cards done');
	}

	this.showCards = function(elem){
		elem.each(function(){
			elem.removeClass(CLASSES.hiddenClass);
		})


		console.log('show cards done');
	}


	this.showElem = function(elem){
		if (!_this.isOpen(elem)) return false;

		var elemIndex = elem.index();

		_this.hideOtherCards(elem, elemIndex);

		$(SELECTORS.cardContainer).addClass(CLASSES.cardContainer);

		_this.positionElem(elem.find(SELECTORS.cardElem));

		elem.addClass(CLASSES.hiddenElemClass);

		console.log('show elem done');

		// setTimeout(function(){
		// 	_this.animateElem(elem.find(SELECTORS.cardElem));
		// }, 1000);

		_this.floatContainer(elem);

	};

	this.hideElem = function(elem){
		if (!_this.isOpen(elem)) return false;

		_this.showCards(elem);

		elem.removeClass(CLASSES.hiddenElemClass);

		// _this.positionElem(elem.find(SELECTORS.cardElem));
		
		$(SELECTORS.cardContainer).removeClass(CLASSES.cardContainer);

		elem.removeClass(CLASSES.hiddenElemClass);


		console.log('hide elem done');


		// setTimeout(function(){
		// 	_this.animateElemBackward(elem.find(SELECTORS.cardElem));
		// }, 1000);
	}


	this.elemShowBig = function(elem){
		elem.addClass(CLASSES.elemBigClass);

		elem.find(SELECTORS.elemContent).addClass(CLASSES.active);
	}

	this.elemHideBig = function(elem){
		elem.find(SELECTORS.elemContent).removeClass(CLASSES.active);

		elem.removeClass(CLASSES.elemBigClass);

		_this.animateElemBackward(elem);
	}


	this.animateElemBackward = function(elem){

		TweenLite.to(elem, 2, {
			top: elem.parent().offset().top,
			left: elem.parent().offset().left + 'px',
			ease: Back.easeOut,
		});
	}


	this.floatContainer = function(elem, callback) {

    // $(document.body).addClass(CLASSES.bodyHidden);

    var TL = new TimelineLite;

    var elemOffset = elem.offset(),
    	elemContent = elem.find(SELECTORS.cardElem);
    	windowW = window.innerWidth;

    var track = {
      width: 0,
      x: elemOffset.left,
      y: elemOffset.top,
    };

    TL.set(elemContent, {
      position: 'fixed',
      width: '90px',
      height: '90px',
      x: elemOffset.left,
      y: elemOffset.top,
      overflow: 'hidden'
    });

    TL.to([elemContent, track], 2, {
      // width: windowW,
      // height: '100%',
      x: windowW / 2,
      y: 0,
      xPercent: -50,
      ease: Expo.easeInOut,
      clearProps: 'all',
      // onUpdate: callback.bind(elemContainer, track)
    });

    console.log('floatContainer done');

    return TL;
  };


  this.openCard = function(){
  	var TL = new TimelineLite;

  	// Добавляем в таймлайн:
  	
  }


	this.init = function(elemArr){
		// _this.initElems(elemArr);
		_this.mapPolygons(pattern);
	}
}

var AnimatedBlocksVar = new AnimatedBlocks();



	$(window).on('load', function(){
		AnimatedBlocksVar.init($('.services-elem'));
	});


	$('.services-elem__content').click(function(e){
		e.preventDefault();

		AnimatedBlocksVar.showElem($(this).parent());

	});



	$('.services-elem__btn').click(function(e){
		e.preventDefault();

		AnimatedBlocksVar
			.hideElem($(this).parents('.services-elem'));
	});

})(jQuery);