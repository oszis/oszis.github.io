(function($){
	// Сюда код


	// скролл страницы:

	// если блок контента больше, чем высота окна, то:

	// 1. скроллим до конца блока

	// 2. скроллим к следующему блоку

	function SlideScroll(){

		var _this = this,
			activeClass = 'active',
			lastClass = 'last',
			scrollValue = 0,
			slides,
			activeSlide;

		_this.scrollDetect = function(e){
			
			e = e || window.event;
			var delta = e.deltaY || e.detail || e.wheelDelta;

			scrollValue = delta;

			if (scrollValue > 0) {
				console.log('Событие колесика сработало!');
				return _this.slideNext(activeSlide);
			} else if (scrollValue < 0) {
				return _this.slidePrev(activeSlide);
			}
		}

		_this.slidePrev = function(){
			
			if (activeSlide > 0) {
				
				_this.slideHide(slides.eq(activeSlide));

				activeSlide--;

				_this.slideShow(slides.eq(activeSlide));

			} else return false;
		}

		_this.slideNext = function(){

			
			console.log('Прокрутка!');
			console.log(slides.length);
			if (activeSlide < slides.length - 1) {
				
				_this.slideHide(slides.eq(activeSlide));


				activeSlide++;

				_this.slideShow(slides.eq(activeSlide));

				console.log(activeSlide);
			} else return false;

		}

		_this.slideShow = function(slide){
			slide.removeClass(lastClass);
			slide.addClass(activeClass);
		}

		_this.slideHide = function(slide){
			slide.removeClass(activeClass);
			slide.addClass(lastClass);
		}

		_this.initSlider = function(elem){

			slides = elem;

			activeSlide = 0;

			slides.eq(activeSlide).addClass(activeClass);

		}

		_this.init = function(obj){

			_this.initSlider(obj.blocks);

		}

	}

	var slideScrollVar = new SlideScroll();

	slideScrollVar.init({
		blocks: $('.main-section'),
	})


	document.querySelectorAll('.page')[0]
		.addEventListener('wheel', function(){

			slideScrollVar.scrollDetect();
		});


})(jQuery);