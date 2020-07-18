(function ($) {

  'use strict';

  // bootstrap dropdown hover

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();


  $('nav .dropdown').hover(function () {
    var $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    var $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });


  $('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  });
 
  contentWayPoint();

  //CustomJs
  loadPartials();
  routing();

})(jQuery);

function loadPartials() {
  //Load in Logo for header
  readTextFile("partials/logoHeader.html", (t) => {
    $(".navbar > .container").prepend(t);
   
    setTimeout(() => {updateCarousels(); }, 100);
    setTimeout(() => {contentWayPoint(); }, 300);
  });

  //Load in header
  readTextFile("partials/header.html", (t) => {
    $(".navbar-nav").html(t);

    setTimeout(() => {updateCarousels(); }, 100);
    setTimeout(() => {contentWayPoint(); }, 300);
  });

  //Load in footer
  readTextFile("partials/footer.html", (t) => {
    $(".site-footer > .container").html(t);
  });
}

function routing() {
  loadTextForSporten();
  $(window).on('hashchange', () => {location.reload();});
}

function loadTextForSporten() {
  switch (window.location.pathname) {
    case "/sporten.html":
      switch (window.location.hash) {
        case "#gehoorzaamheid":
          readTextFile("partials/gehoorzaamheid.html", (t) => {
            $("#sportContent").html(t);
          });
          break;
        case "#agility":
          readTextFile("partials/agility.html", (t) => {
            $("#sportContent").html(t);
          });
          break;
        case "#canicross":
          readTextFile("partials/canicross.html", (t) => {
            $("#sportContent").html(t);
          });
          break;
        case "#wandelen":
          readTextFile("partials/wandelen.html", (t) => {
            $("#sportContent").html(t);
          });
          break;
        default:
          //Default, no actions necessary.
          break;
      }
      break;

    default:
      //Default, no actions necessary for other pages.
      break;
  }
}

function readTextFile(file, cb) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        cb(allText);
      }
    }
  }
  rawFile.send(null);
}

//to load elements with 'element-animate' class
function contentWayPoint() {
  var i = 0;
  $('.element-animate').waypoint(function (direction) {
    if (direction === 'down' && !$(this.element).hasClass('element-animated')) {

      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function () {

        $('body .element-animate.item-animate').each(function (k) {
          var el = $(this);
          setTimeout(function () {
            var effect = el.data('animate-effect');
            if (effect === 'fadeIn') {
              el.addClass('fadeIn element-animated');
            } else if (effect === 'fadeInLeft') {
              el.addClass('fadeInLeft element-animated');
            } else if (effect === 'fadeInRight') {
              el.addClass('fadeInRight element-animated');
            } else {
              el.addClass('fadeInUp element-animated');
            }
            el.removeClass('item-animate');
          }, k * 100);
        });

      }, 100);

    }

  }, { offset: '95%' });
};

function updateCarousels(){
  // home slider
  $('.home-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // owl carousel
  var majorCarousel = $('.js-carousel-1');
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // owl carousel
  var major2Carousel = $('.js-carousel-2');
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });
}