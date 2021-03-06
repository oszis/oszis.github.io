(function($){


	// ОБЪЯВЛЯЕМ ПЕРЕМЕННЫЕ
	var activeClass = 'active',
		hiddenClass = 'hidden',
		mainVideo = 
			document.querySelectorAll('.video-container video')[0],
		$mainVideo = $('.video-container video').eq(0),
		mobileVideoBtn = $('.video-container .mobile-btn__content');


	
	// АНИМАЦИЯ БЛОКА ПРОГРЕСС-БАРА
	function PreloadAnimate(){

		var _this = this;

		// ПОКАЗЫВАЕМ БЛОК ПРОГРЕСС-БАРА
		_this.ShowPreload = function(){

			$('.preload-loading span').text('0%');

			$('.preload').fadeIn(300);

			setTimeout(function(){

				$('.preload-line').addClass(activeClass);

			}, 300);

			setTimeout(function(){

				$('.preload-top, .preload-bottom')
					.addClass(activeClass);

				
				setTimeout(function(){

					preloadLoading();

				}, 1000);

			}, 1300);

		};


		// ПРЯЧЕМ БЛОК ПРОГРЕСС-БАРА
		_this.hidePreload = function(){

			$('.preload-top, .preload-bottom')
				.removeClass(activeClass);

			
			setTimeout(function(){

				$('.preload-line').removeClass(activeClass);

			}, 500)

			setTimeout(function(){

				$('.preload').fadeOut(300);

				videoAnimations.showVideo();

			}, 1500);

		}
	}


	var preloadAnimate = new PreloadAnimate();



	// РАБОТА С ВИДЕО
	function VideoAnimations() {

		var _this = this;



		_this.showVideo = function(){
			$('.video-container').fadeIn(300);


			if ($(window).innerWidth() <= 1024) {
				
				_this.mobileVideo();

			} else {
				
				mainVideo.play();

			}


		}


		_this.hideVideo = function(){

			$('.video-container').fadeOut(300);

		}


		_this.mobileVideo = function(){
			
			mobileVideoBtn.parent().fadeIn(300);

		}

	}

	
	var videoAnimations = new VideoAnimations();

	mobileVideoBtn.click(function(e){

		e.preventDefault();


		mainVideo.play();

		$(this).parent().fadeOut(0);
		
	});



	// РАБОТА С ОТКРЫТКОЙ
	function Postcard() {

		var _this = this;

		
		_this.show = function(){

			$('.postcard').fadeIn(0);


			var i = 300;

			$('.postcard-elem').each(function(){

				var elem = $(this);
				
				
				setTimeout(function(){

					elem.addClass(activeClass);

				}, i);

				i+= 400;

			});

		};


		_this.hide = function(){
			
			$('.postcard').fadeOut(300);

			$('.postcard-elem').removeClass(activeClass);

		};


		_this.calculateHeight = function(){
			
			$('.postcard-container').css({
				'margin-top': '-' + 
					$('.postcard-container').outerHeight()/2 + 'px',
			});

		}
	}


	var postcard = new Postcard();





	// ЗАГЛУШКА ПРОГРЕСС-БАРА, ПОКА НЕТ ВИДЕО
	function preloadLoading(){

		$('.preload-loading span').each(function(){
			$(this).prop('Counter',0).animate({
				Counter: $(this).attr('data-value')
			}, {
				duration: 10000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now) + '%');
				}
			});


			setTimeout(preloadAnimate.hidePreload, 10000);

		});

	}


	// ОБРАБОТЧИКИ ПО ОКОНЧАНИЮ ИЛИ ОШИБКЕ ВИДЕО
	mainVideo.addEventListener('ended', function(){

		videoAnimations.hideVideo();

		
		postcard.show();

	});

	mainVideo.addEventListener('error', function(){

		videoAnimations.hideVideo();

		
		postcard.show();

	});



	function MainPage() {

		var _this = this;


		_this.init = function() {
			
			// ПРЯЧЕМ БЛОКИ
			$('.preload, .video-container, .postcard')
				.fadeOut(0);


			postcard.hide();


			preloadAnimate.ShowPreload();

		}
	}

	
	var mainPage = new MainPage();


	mainPage.init();


	$('.repeat-btn').click(function(e){

		e.preventDefault();

		mainPage.init();

	});


})(jQuery)