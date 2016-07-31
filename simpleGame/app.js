(function($) {
	
	function simpleGame() {

		var gameCount = 0,
			elem = this,
			gameTimer = 0,
			sheitTimer = 0,
			headerHeight = 50,
			sheitTimeout,
			doubleSheitTimeout,
			speed;


		this.init = function(){

			// первоначальные настройки
			$(window).on('load resize', function(){
				$('.overlay-faq').addClass('active');
				$('.block-container').height($(window).height()-50);
				$('#block').css({
					'width': $(window).width()/6 + 'px',
					'height': $(window).width()/6 + 'px',
					'line-height':$(window).width()/6 + 'px',
				}).css({
					'top': ($('.block-container').height()/2 - $('#block').height()/2) +'px',
					'left': ($('.block-container').width()/2 - $('#block').width()/2) +'px'
				});
				speed = $('.speed').val();
				if (speed > 1000 || speed == '') {
					speed = 50;
					$('.speed').val('100');
				} else {
					speed = speed/2;
				}
			});

			// изменяем скорость блока
			$('.speed').on('change input click',function(){
				speed = $(this).val()/2;
				if ($(this).val() < 0) {
					$(this).val('100');
				} else if ($(this).val() > 1000) {
					$(this).val('1000');;
				}
				console.log(speed);
			});


			$('#block').click(function(){
				var container = $('.block-container');
				if (gameTimer == 0) {
					// вырубаем игру через 10сек
					setTimeout(function(){
						$('.overlay__end-game').addClass('active');
						if (gameCount >= 20) $('.overlay__text').text('Илюха пидор!');
						else $('.overlay__text').text('Ваш счет: ' + gameCount);
						gameTimer = 0;
						gameCount = 0;
						sheitTimer = 0;
						// elem.sheeiiiit();
						$('.block-container').css({
							'background-color': 'transparent'
						},300)

						$('#block').animate({
							'top': ($('.block-container').height()/2 - $('#block').height()/2) +'px',
							'left': ($('.block-container').width()/2 - $('#block').width()/2) +'px'
						}, 300).text('0');
					}, 10000);
				}


				// ===!!!Может вырвать во время игры от этой хуйни, кроме шуток!!!!===
				
				// if (gameCount >= 10 && gameCount <= 15) {
				// 	var backColor = ['#ec5cac', '#79ec5c', '#00c4ff', '#eff771', '#f771f3', 'red', 'green', 'blue', 'olive', 'pink'];
				// 	$('.block-container').css({
				// 		'background-color': backColor[Math.round(Math.random() * 10)-1]
				// 	});
				// }

				// if (gameCount > 15 && gameCount < 50) {
				// 	sheitTimer = 1;
				// 	elem.sheeiiiit();
				// }

				// if (gameCount >= 30 && gameCount < 50) {
				// 	sheitTimer = 1;
				// 	elem.doubleSheit();
				// } if (gameCount >= 50) {
				// 	sheitTimer = 0;
				// 	$('.block-container').css('background-color', '#fff');
				// 	$('#block').css('background-color', '#ff008d');
				// }


				// Показываем илюху
				if (gameCount >= 10) {
					$('.peedor').addClass('active');
					setTimeout(function() {
						$('.peedor').removeClass('active');
					}, 100)
				}

				// рандомные координаты блока
				var x = Math.random() * ($('.block-container').width() - $(this).width() -10),
				y = Math.random() * ($('.block-container').height() - $(this).height() -10);
				
				if (x <= 0) x = 10;
				if (y <= 0) y = 10;

				$(this).dequeue()
					.animate({
						'top': y + 'px',
						'left': x + 'px'
					}, speed);
				
				gameCount += 1;
				
				$('.time').text(gameCount);
				
				gameTimer = 1;
			});


			// прячем оверлэи по клику
			$('.overlay__close').click(function(){
				$(this).parent().removeClass('active');
			});
		};

		// стошнит нахуй, пока что отрубил, меняют цвета фона и блока раз в полсекунды, еще та ракосель
		this.sheeiiiit = function() {
			if (sheitTimer) {
				clearTimeout(sheitTimeout);
				sheitTimeout = setTimeout(elem.sheeiiiit, 500);
				var backColor = ['#ec5cac', '#79ec5c', '#00c4ff', '#eff771', '#f771f3', 'red', 'green', 'blue', 'olive', 'pink'];
				$('.block-container').css({
					'background-color': backColor[Math.round(Math.random() * 10)-1]
				});
			} else {
				clearTimeout(sheitTimeout);
				return false;
			}
		};

		this.doubleSheit = function() {
			if (sheitTimer) {
				clearTimeout(doubleSheitTimeout);
				doubleSheitTimeout = setTimeout(elem.doubleSheit, 500);
				var backColor = ['#ec5cac', '#79ec5c', '#00c4ff', '#eff771', '#f771f3', 'red', 'green', 'blue', 'olive', 'pink'];
				$('#block').css({
					'background-color': backColor[Math.round(Math.random() * 10)-1]
				});
			} else {
				clearTimeout(doubleSheitTimeout);
				return false;
			}
		}

		this.hard = function() {
			
		}



	};
	var game = new simpleGame();
	game.init();
})(jQuery);
