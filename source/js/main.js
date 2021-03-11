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
  }

  var coachSwiper = new Swiper('.coach__list', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 32
      },
      768: {
        spaceBetween: 57
      },
      1200: {
        spaceBetween: 80
      }
    },
  });

  coachSwiper();
})();

'use strict';

(function () {

  var reviewBlock = document.querySelector('.review');
  var reviewNext = document.querySelector('.review__button--next');
  var reviewPrev = document.querySelector('.review__button--prev');

  if (reviewBlock) {
    reviewPrev.classList.remove('no-js');
    reviewNext.classList.remove('no-js');
  }

  if (reviewBlock) {
    var reviewSwiper = new window.Swiper('.review__wrapper', {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.review__button--next',
        prevEl: '.review__button--prev',
      }
    });
  }

  reviewSwiper();
})();
