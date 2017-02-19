(function($){
/*
по клику на элемент
1 элемент абсолютно позиционируется
2 элемент сворачивается в кружок
3 элемент едет к верху страницы
4 появляются фоновые треугольники
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

	var SELECTORS = {
		elem: '.services-elem__content',
		elemContainer: '.services-elem',
		elemContent: '.services-elem__hidden',
		pattern: '.pattern'
	}

	var CLASSES = {
		cardContainerSection: 'card-container',
		active: 'active',
		hidden: 'hidden',
		shown: 'shown',
		hiddenCard: 'hidden-elem',
		polygon: 'poly',
    	polygonHidden: 'invisible-poly'
	}

	var _this = this;


	var polygonMap = {
		paths: null,
		points: null
	};

	var track = {
		left: 0,
		top: 0,
		width: 0
	};

	// Показ элемента
	this.showCard = function(card){

		if (card.hasClass(CLASSES.active)){
			return;
		}
		card.addClass(CLASSES.active);

		$('.main-section--main-slider, .content')
			.addClass(CLASSES.cardContainerSection);
		card.css('overflow', 'auto')
		var TL = new TimelineLite;

		TL.add(_this.animateCardCircle(card, 1));
		TL.add(_this.animateCardToTop(card, 1));
		TL.add(_this.animateCardShowBig(card, 1));
		TL.add(_this.showCardContent(card, 1));
	}

	// Скрытие элемента
	this.hideCard = function(card){

		var TL = new TimelineLite;
		TL.add(_this.showCardContent(card,2));
		TL.add(_this.animateCardShowBig(card,2));
		TL.add(_this.animateCardToTop(card,2));
		TL.add(_this.animateCardCircle(card,2));
	}

	// 1 элемент абсолютно позиционируется
	this.cardPosition = function(card){

	}
	// 2 элемент сворачивается в кружок
	this.animateCardCircle = function(card, boolCircle){

		var TL = new TimelineLite,
			windowW = $(window).innerWidth(),
			windowH = $(window).innerHeight(),
			cardParent = card.parent(),
			cardParentOffset = cardParent.offset(),
			cardContent = card.find(SELECTORS.elem);


		if (boolCircle == 1) {
			$(SELECTORS.pattern).addClass(CLASSES.active);
			cardParent.css('z-index', 11);
			TL.fromTo(cardContent, .5, {
				'overflow': 'hidden',
				'left': cardParent[0].getBoundingClientRect().left,
				'top': cardParent[0].getBoundingClientRect().top,
				'width': '260px',
				'height': '230px',
				onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());
					
					_this.onCardMove(track);

				}
			},{
				'position': 'fixed',
				'border-radius': '50%',
				'width': '90px',
				'height': '90px',
				'left': cardParent[0].getBoundingClientRect().left + 
					cardParent.outerWidth()/2 - 45,
				'top': cardParent[0].getBoundingClientRect().top + 
					cardParent.outerHeight()/2 - 45,
					onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());
					
					_this.onCardMove(track);

				}
			});
			
		} else if (boolCircle == 2) {
			TL.fromTo(cardContent, .5, {
				'position': 'fixed',
				'width': '90px',
				'height': '90px',
				'left': cardParent[0].getBoundingClientRect().left + 
					cardParent.outerWidth()/2 - 45,
				'top': cardParent[0].getBoundingClientRect().top + 
					cardParent.outerHeight()/2 - 45,
				'overflow': 'hidden',
				delay: 4
			},{
				'overflow': 'hidden',
				'left': cardParent[0].getBoundingClientRect().left,
				'top': cardParent[0].getBoundingClientRect().top,
				'width': '260px',
				'height': '230px',
				'border-radius': 0,
				onComplete: function(){
					$('.main-section--main-slider, .content')
						.removeClass(CLASSES.cardContainerSection);
					cardContent.css('position', 'static');
					cardParent.css('z-index', '');
					card.removeClass(CLASSES.active).css('overflow', 'hidden');
					$(SELECTORS.pattern).removeClass(CLASSES.active);
				}
			});
		}


		return TL;
	}
	// 4 элемент едет к верху страницы
	this.animateCardToTop = function(card, boolCircle){


		var TL = new TimelineLite,
			windowW = $(window).innerWidth(),
			windowH = $(window).innerHeight(),
			cardParent = card.parent(),
			cardParentOffset = cardParent.offset(),
			cardContent = card.find(SELECTORS.elem);
		
		var rect = card.find(SELECTORS.elem)[0].getBoundingClientRect();

		track = {
	      width: card.outerWidth()*2,
	      left: rect.left + (rect.width / 2),
	      top: rect.top + (rect.height / 2),
	    };

	    console.log(track);



		if (boolCircle == 1) {
			TL.fromTo(cardContent, 1,{
				// 'position': 'fixed',
				left: cardParent[0].getBoundingClientRect().left + 
					cardParent.outerWidth()/2 - 45,

			}, {
				left: windowW / 2,
				onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());
					
					_this.onCardMove(track);

				}
			});

			TL.to([cardContent, track], 1.5,{
				top: 100,
				onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());


					_this.onCardMove(track);
				}
			}, '-=.9');

		} else if (boolCircle == 2) {
				card.removeClass(CLASSES.shown);
			TL.fromTo([cardContent, track], 1,{
				delay: 2

			}, {
				top: 100,
				left: cardParent[0].getBoundingClientRect().left + 
					cardParent.outerWidth()/2 - 45,
				onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());
					
					_this.onCardMove(track);

				}
			});

			TL.to([cardContent, track], 1.5,{
				top: cardParent[0].getBoundingClientRect().top +
					cardParent.outerHeight()/2 -45,
				onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());
					
					_this.onCardMove(track);

				}
			}, '-=.9');
		}

		return TL;

	}

	// Элемент разворачивается
	this.animateCardShowBig = function(card, boolCircle){
		var TL = new TimelineLite,
		cardParent = card.parent(),
		cardContent = card.find(SELECTORS.elem),
		windowW = $(window).innerWidth();

		if (boolCircle == 1) {
			TL.fromTo(cardContent, 1,{
				left: windowW /2 + 'px',
				top: '100px',
				width: '90px',
				height: '90px',
				onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());
					
					_this.onCardMove(track);

				}
			},{
				left: 0,
				top: 0,
				height: '30vh',
				width: $(window).innerWidth(),
				overflow: 'visible',
				onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());
					
					_this.onCardMove(track);

				}
			});
			TL.fromTo(cardContent, .1,{
				'border-radius': '50%'
			}, {
				'border-radius': '0'
			}, '-=1');
			
		} else if (boolCircle == 2) {

			TL.fromTo(cardContent, 1,{
				left: 0,
				top: 0,
				height: '300px',
				width: '300px',
				position: 'fixed',
				overflow: 'hidden',
				'border-radius': '0',
				delay: 2,
				onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());
					
					_this.onCardMove(track);

				}
			},{
				left: windowW /2 - 45 + 'px',
				top: '100px',
				width: '90px',
				height: '90px',
				'border-radius': '50%',
				onUpdate: function(){
					track.left = parseInt(cardContent.css('left'));

					track.top = parseInt(cardContent.css('top'));
					track.width = parseInt(cardContent.innerWidth());
					
					_this.onCardMove(track);

				}
			});
		}

		return TL;
	}

	// 6 снизу появляется блок контента
	this.showCardContent = function(card, boolCircle){
		var TL = new TimelineLite,
			cardParent = card.parent(),
			cardContent = card.find(SELECTORS.elem),
			windowW = $(window).innerWidth(),
			cardHiddenContent = cardParent.find(SELECTORS.elemContent);

		if (boolCircle == 1) {
			TL.fromTo(cardHiddenContent, 1, {
				top: '100%',
				'z-index': 11,
				display: 'block'
			},{
				'z-index': 11,
				top: '30vh'
			})
			
		} else if (boolCircle == 2) {
				TL.fromTo(cardHiddenContent, 1, {
				'z-index': 11,
				top: '30vh',
				display: 'block',
			},{
				display: 'none',
				top: '100%',
				'z-index': 11,
				onStart: function(){
					cardContent.css({
						'top': 0,
						'left': 0,
						'width': '100vw',
						height: '30vh'
					})
				}
			})
		}
		return TL;
	}


	this.mapPolygons = function(pattern) {

    // Append SVG to pattern container.
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
    $(SELECTORS.pattern).removeClass(CLASSES.patternHidden);
  };

	_this.onCardMove = function(track) {

		var radius = track.width * 2;

		var center = {
			x: track.left,
			y: track.top
		};

		polygonMap.points.forEach(function(point, i) {

			if (_this.detectPointInCircle(point, radius, center)) {
				$(polygonMap.paths[i]).attr('class', CLASSES.polygon);
			} else {
				$(polygonMap.paths[i]).attr('class', CLASSES.polygon + ' ' + CLASSES.polygonHidden);
			}
		});
	}


	_this.detectPointInCircle = function(point, radius, center) {

		var xp = point.x;
		var yp = point.y;

		var xc = center.x;
		var yc = center.y;

		var d = radius * radius;

		var isInside = Math.pow(xp - xc, 2) + Math.pow(yp - yc, 2) <= d;

		return isInside;
	};

	this.init = function(){
		var pattern = Trianglify({
	      width: window.innerWidth,
	      height: window.innerHeight,
	      cell_size: 90,
	      variance: 1,
	      stroke_width: 0.6,
	      color_function : function(x, y) {
	        return '#c4c7c7';
	      }
	    }).svg(); // Render as SVG.

    	_this.mapPolygons(pattern);
	}

}


var AnimatedBlocksVar = new AnimatedBlocks();
AnimatedBlocksVar.init();

// $('.services-elem__content').click(function(e){
// 	e.preventDefault();

// 	AnimatedBlocksVar.showCard($(this).parent());
// });


// $('.services-elem__btn').click(function(e){
// 	e.preventDefault();

// 	AnimatedBlocksVar.hideCard($(this).parents('.services-elem'));
// });

})(jQuery);