(function(){
	var dropdownBtn = document.querySelectorAll('.dropdown .dropdown-btn');
	for (var i = 0; i < dropdownBtn.length; i++) {
		dropdownBtn[i].onclick = function() {
			this.parentElement.classList.toggle('active');
		}
	}
})();

(function(){
	// слайдер в шапке
	var navElem = document.querySelectorAll('.head-slider .slide-nav li'),
		prev = document.querySelector('.head-slider .slide-nav .prev'),
		next = document.querySelector('.head-slider .slide-nav .next'),
		slideElem = document.querySelectorAll('.head-slider .slide-nav .slide-elem'),
		slideContainer = document.querySelector('.head-slider .slider-container'),
		counter = 0;

	for (var i = 0; i < navElem.length; i++) {
		navElem[i].onclick = function(){
			counter = parseInt(this.textContent) - 1;
			slide();
		}
	}

	next.onclick = function() {
		if (counter < navElem.length - 1) {
			counter++;
		} else counter = 0;
		slide();
	}
	prev.onclick = function() {
		if (counter > 0) {
			counter--;
		} else counter = navElem.length - 1;
		slide();
	}
	
	function slide() {
		slideContainer.style.marginLeft = -counter * 800 + 'px';
		for (var i = 0; i < navElem.length; i++) {
			navElem[i].classList.remove('active');
		}
		navElem[counter].classList.add('active');
	}
})();

// (function(){
	// слайдер скиллов
	var fill = document.querySelectorAll('.skill .fill'),
		filled = document.querySelectorAll('.skill .filled');

	function slideFilled() {
		var skills = document.querySelector('.skills').getBoundingClientRect();
        
    if (skills.top <= 700) {
      for(var i = 0; i < filled.length; i++) {
        filled[i].style.width = fill[i].getAttribute('data-filled');
          filled[i].querySelectorAll('.text')[0].textContent = fill[i].getAttribute('data-filled');
        setTimeout(function(i){
          filled[i].querySelectorAll('.text')[0].style.opacity = 1;
        },200, i);
      }
    }
  }
  document.addEventListener('scroll', slideFilled);
// })();