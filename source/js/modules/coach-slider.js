'use strict';

(function () {

  var coachBlock = document.querySelector('.coach');
  var coachList = document.querySelector('.coach__list');
  var nextButton = document.querySelector('.slider__button--next');
  var prevButton = document.querySelector('.slider__button--prev');

  if (coachBlock) {
    prevButton.classList.remove('no-js');
    nextButton.classList.remove('no-js');
    coachList.classList.remove('coach__list--no-js');

    var coachSwiper = new Swiper('.coach__slider', {
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.slider__button--next',
        prevEl: '.slider__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        1100: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        },
      },
    });
  }

})();
