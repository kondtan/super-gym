'use strict';

(function () {
  var phoneInput = document.querySelector('input[type="tel"]');

  if (phoneInput) {
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    window.mask = new window.IMask(phoneInput, maskOptions);
  }
})();
