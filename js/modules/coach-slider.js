'use strict';

(function () {

  var coachBlock = document.querySelector('.coach');
  var coachList = document.querySelector('.coach__list');
  var nextButton = document.querySelector('.coach__button--next');
  var prevButton = document.querySelector('.coach__button--prev');

  if (coachBlock) {
    prevButton.classList.remove('no-js');
    nextButton.classList.remove('no-js');
    coachList.classList.remove('coach__list--no-js');

    var coachSwiper = new Swiper('.coach__slider', { // eslint-disable-line
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.coach__button--next',
        prevEl: '.coach__button--prev',
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
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        },
      },
    });
  }

})();
