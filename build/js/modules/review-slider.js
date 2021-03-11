'use strict';

(function () {

  var reviewBlock = document.querySelector('.review');
  var reviewNext = document.querySelector('.review__button--next');
  var reviewPrev = document.querySelector('.review__button--prev');

  if (reviewBlock) {
    reviewPrev.classList.remove('no-js');
    reviewNext.classList.remove('no-js');
  }

  var reviewSwiper = new Swiper('.review__wrapper', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.review__button--next',
      prevEl: '.review__button--prev',
    }
  });

})();
