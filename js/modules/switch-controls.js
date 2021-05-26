'use strict';

(function () {
  var subscriptionBlock = document.querySelector('.subscription');

  if (subscriptionBlock) {
    var toggle = subscriptionBlock.querySelectorAll('.controls__toggle');
    var toggles = Array.prototype.slice.call(toggle);
    var subscriptionSlides = subscriptionBlock.querySelectorAll('.subscription__tabs');

    toggles.forEach(function (button, j) {
      function toggleHandler(evt) {
        evt.preventDefault();

        for (var i = 0; i < subscriptionSlides.length; i++) {
          subscriptionSlides[i].classList.remove('subscription__tabs--active');
          toggles[i].classList.remove('controls__toggle--active');
        }

        toggle[j].classList.add('controls__toggle--active');
        subscriptionSlides[j].classList.add('subscription__tabs--active');
      }

      button.addEventListener('click', toggleHandler);
    });
  }

})();
