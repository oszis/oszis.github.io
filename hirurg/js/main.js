(function(){
	document.addEventListener('scroll', showBones);
	window.addEventListener('load', showBones);

	function showBones() {
	var girl = document.querySelector('.girl'),
		mainHeader = document.querySelector('.main-header').getBoundingClientRect(),
		setcion1 = document.querySelector('.section-1').getBoundingClientRect(),
		girlSurgery = document.querySelector('.surgery-girl');
		if (mainHeader.bottom > 0) {
			girl.style.height = mainHeader.bottom + 'px';
		} else girl.style.height = 0 + 'px';

		if (girlSurgery.getBoundingClientRect().top > setcion1.bottom) {
			girlSurgery.style.display = 'none';
		} else {
			girlSurgery.style.display = '';
		}
	}
})();

(function($){
	// слайдер
	var doctorSlider = $('.doctor-slider');
	doctorSlider.owlCarousel({
		loop:true,
	    margin:10,
	    nav:false,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        500: {
	        	items:2
	        },
	        800:{
	            items:3
	        }
	    }
	});
	$('.doctor-slider-container .next').click(function(){
		doctorSlider.trigger('next.owl.carousel', [400]);
	});
	$('.doctor-slider-container .prev').click(function(){
		doctorSlider.trigger('prev.owl.carousel', [400]);
	})

	// input mask
	$('input[name="phone"]').inputmask({
		'mask': '+7(999)9999999'
	})
})(jQuery);

(function(){
	// показ ренткен-снимка в section
	var hidden = document.querySelector('.section-4 .right-col .hidden'),
		girl = document.querySelector('.section-4 .right-col'),
		gesture = document.querySelector('.section-4 .right-col .hand-gesture'),
		gestureHeight = document.querySelector('.section-4 .right-col .hand-gesture').offsetHeight;

	girl.addEventListener('mousemove', xRay);

	function xRay(event) {
		hidden.style.height =  event.clientY - girl.getBoundingClientRect().top + 'px';
		gesture.style.top = event.clientY - (gestureHeight/2) - girl.getBoundingClientRect().top + 'px';
		if (event.clientY < girl.getBoundingClientRect().top + (gestureHeight/2)) {
			gesture.style.top = 0 + 'px';
		}
		if ((girl.getBoundingClientRect().bottom - event.clientY) <=( gestureHeight/2)) {
			gesture.style.top = girl.offsetHeight - gestureHeight + 'px';
		}
	}
})();