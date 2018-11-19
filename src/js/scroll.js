"use strict";

+function () {
  var pageScroll = document.querySelector('.slider__scroll');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;

    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }

      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  pageScroll.addEventListener('click', scrollDown);
}();