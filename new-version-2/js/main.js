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

		this.scrollTimeout = true;

		this.scrollDetect = function(e){
			
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

		this.slidePrev = function(){
			
			if (activeSlide > 0) {
				
				_this.slideHide(slides.eq(activeSlide));

				activeSlide--;

				_this.slideShow(slides.eq(activeSlide));

			} else return false;
		}

		this.slideNext = function(){

			
			console.log('Прокрутка!');
			console.log(slides.length);
			if (activeSlide < slides.length - 1) {
				
				_this.slideHide(slides.eq(activeSlide));


				activeSlide++;

				_this.slideShow(slides.eq(activeSlide));

				console.log(activeSlide);
			} else return false;

		}

		this.slideShow = function(slide){
			slide.removeClass(lastClass);
			slide.addClass(activeClass);
		}

		this.slideHide = function(slide){
			slide.removeClass(activeClass);
			slide.addClass(lastClass);
		}

		this.initSlider = function(elem){

			slides = elem;

			activeSlide = 0;

			slides.eq(activeSlide).addClass(activeClass);

		}

		this.init = function(obj){

			_this.initSlider(obj.blocks);

		}

	}

	var slideScrollVar = new SlideScroll();

	slideScrollVar.init({
		blocks: $('.main-section'),
	})


	document.querySelectorAll('.page')[0]
		.addEventListener('wheel', function(){
			if (slideScrollVar.scrollTimeout) {
				slideScrollVar.scrollDetect();
				slideScrollVar.scrollTimeout = false;
				setTimeout(function(){
					slideScrollVar.scrollTimeout = true;
				}, 1000);
			} else {
				return false;
			}

		});



function MainMenu(){

	var _this = this,
		activeClass = 'active',
		headerElem;

	_this.showMenu = function(header){
		headerElem.addClass(activeClass);
	}

	_this.hideMenu = function(header){
		headerElem.removeClass(activeClass);
	}

	_this.init = function(obj){
		headerElem = obj.block;
	}
}

	var mainMenuVar = new MainMenu();

	mainMenuVar.init({
		block: $('.main-header')
	});

	$('.btn-show-menu').click(function(){

		var elem = $(this);
		if (elem.hasClass('active')) {
			$('.btn-show-menu').removeClass('active');

			mainMenuVar.hideMenu();
		} else {
			$('.btn-show-menu').addClass('active');
			mainMenuVar.showMenu();
		}
	})

})(jQuery);