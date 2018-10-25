+function() {

    let pageScroll = document.querySelector('.slider__scroll');
    function scrollDown() {
      let windowCoords = document.documentElement.clientHeight;
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
  }()


  

