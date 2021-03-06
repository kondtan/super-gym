'use strict';

(function () {

  var coachPage = document.querySelector('.coach');
  var slider = document.querySelector('.slider');
  var coachList = slider.querySelector('.coach__list');
  var coachSlides = slider.querySelectorAll('.coach__item');
  var nextButton = slider.querySelector('.slider__button--next');
  var prevButton = slider.querySelector('.slider__button--prev');

  function switchSlider(step, slides, prev, next) {
    var startIndex = 0;
    var endIndex = step;

    function showSlide(a, b) {
      for (var j = 0; j < slides.length; j++) {
        slides[j].style.display = 'none';
      }

      for (var i = a; i < b; i++) {
        if (slides[i]) {
          slides[i].style.display = 'block';
        }
      }
    }

    showSlide(startIndex, endIndex);

    function plusSlide(a) {
      showSlide(startIndex += a, endIndex += a);
    }

    prev.addEventListener('click', function () {
      if (startIndex >= step) {
        plusSlide(-step);
      }
    });

    next.addEventListener('click', function () {
      if (endIndex < slides.length) {
        plusSlide(step);
      }
    });
  }

  function changeCoachSlider() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      switchSlider(1, coachSlides, prevButton, nextButton);
    } else if (window.matchMedia('(max-width: 1199px)').matches) {
      switchSlider(2, coachSlides, prevButton, nextButton);
    } else {
      switchSlider(4, coachSlides, prevButton, nextButton);
    }
  }

  if (coachPage) {
    prevButton.classList.remove('no-js');
    nextButton.classList.remove('no-js');
    coachList.classList.remove('coach__list--no-js');
    changeCoachSlider();
    window.addEventListener('resize', changeCoachSlider);
  }

})();
