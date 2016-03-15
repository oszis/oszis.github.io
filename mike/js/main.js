(function(){
  'use strict'
  var mainMenu = document.querySelectorAll('.main-menu')[0],
      itWorksElem = document.querySelectorAll('.it-works')[0],
      mainHeader = document.querySelectorAll('.main-header')[0];

  /*
  *Подгон блока header по высоте window при ресайзе и загрузке
  */
  window.addEventListener('load', headResizer);
  window.addEventListener('resize', headResizer);
  function headResizer() {
    if (window.innerHeight > 800) {
      itWorksElem.style.height = window.innerHeight - mainMenu.offsetHeight + 'px';
    }
  }

  /*
  *Фиксированное меню при прокрутке
  */
  document.onscroll = function() {
    if (mainMenu.getBoundingClientRect().top < 0) {
      mainMenu.style.opacity = 0;
      setTimeout(function(){
        mainMenu.classList.add('fixed');
        mainHeader.classList.add('fixer');
        mainMenu.style.opacity = 1;
      }, 100);
    }
    if (window.pageYOffset < itWorksElem.offsetHeight) {
      mainMenu.classList.remove('fixed');
      mainHeader.classList.remove('fixer');
    }
  }

  /*
  *Слайдер-полоса скиллов
  */
  function slideFilled() {
    var slideElemFilled = document.querySelectorAll('.slide-elem .filled'),
        skillsNPills = document.querySelectorAll('.skills-n-pills')[0].getBoundingClientRect();
    if (skillsNPills.top <= 700) {
      for(var i = 0; i < slideElemFilled.length; i++) {
        slideElemFilled[i].style.width = slideElemFilled[i].parentElement.getAttribute('data-fill');
          slideElemFilled[i].querySelectorAll('.text')[0].textContent = slideElemFilled[i].parentElement.getAttribute('data-fill');
        setTimeout(function(i){
          slideElemFilled[i].querySelectorAll('.text')[0].style.opacity = 1;
        },200, i)
      }
    }
  }
  document.addEventListener('scroll', slideFilled);

  /*
  *Слайдер достижений
  */
  var achievmentCount = 0;
  var achievTimeout;
  var achievmentSlides = document.querySelectorAll('.achievments-elem');
  function achievmentsSlider() {
    for (var i = 0; i < achievmentSlides.length; i++) {
      achievmentSlides[i].classList.remove('active');
    }
    achievmentSlides[achievmentCount].classList.add('active');
    achievmentCount++;
    if (achievmentCount >= achievmentSlides.length) {
      achievmentCount = 0;
    }
    achievTimeout = setTimeout(achievmentsSlider, 3000);

  }

  window.addEventListener('load', achievmentsSlider);

  document.querySelector('.achievments').onmouseover = function(){
    clearTimeout(achievTimeout);
    for (var i = 0; i < achievmentSlides.length; i++) {
      achievmentSlides[i].classList.remove('active');
    }
  }
  document.querySelector('.achievments').onmouseout = function() {
    achievTimeout = setTimeout(achievmentsSlider, 1000);
  }

})();

/*
*слайдер предоставляемых услуг
*/

(function(){
  var servicesSliderNav = document.querySelectorAll('.services-slider .nav-elem'),
    counter = 2,
    slideElem = document.querySelectorAll('.services-slider .slide-elem'),
    slideContainer = document.querySelector('.services-slider__container'),
    prev = document.querySelector('.services-slider__controls .slider-prev'),
    next = document.querySelector('.services-slider__controls .slider-next'),
    marginRight = 40;
    slide();
    for (var i = 0; i < servicesSliderNav.length; i++) {
      servicesSliderNav[i].onclick = function() {
        counter = this.getAttribute('data-counter');
        slide();
      }
    }

    function slide() {
      for (var i = 0; i < servicesSliderNav.length; i++) {
        servicesSliderNav[i].classList.remove('active');
      }
      servicesSliderNav[counter].classList.add('active');

      slideContainer.style.marginLeft = -(counter * (1170 + marginRight)) + 'px';
      slideContainer.style.height = slideElem[counter].offsetHeight + 'px';
    }
    prev.onclick = function() {
      if (counter > 0) {
        counter--;
      } else counter = servicesSliderNav.length -1;
      slide();
    }
    next.onclick = function() {
      if (counter < servicesSliderNav.length -1) {
        counter++;
      } else counter = 0;
      slide();
    }
})();

/*
*Слайдер команды
*/
(function(){
  var slideElem = document.querySelectorAll('.review-slider .slide-elem'),
      slideCarousel = document.querySelector('.review-slider .slider-carousel'),
      counter = 0,
      prev = document.querySelector('.review-slider .slider-prev'),
      next = document.querySelector('.review-slider .slider-next');
      
      function slide() {
        slideCarousel.style.marginLeft = -((slideElem[0].offsetWidth + 20) * counter) + 'px';
      }

      next.onclick = function() {
        if (counter < slideElem.length -1) {
          counter++;
        } else counter = 0;

        slide();
      }

      prev.onclick = function() {
        if (counter >= 0) {
          counter--;
        } else counter = slideElem.length - 1;
        slide();
      }
})();