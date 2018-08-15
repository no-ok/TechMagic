$(document).ready(function () {
  // fixed header
  $(window).on('scroll', function () {
    var fixed = $(".main-header"),
       scroll = $(window).scrollTop();

    if (scroll >= 1) {
      fixed.addClass("fixed-header");
    } else {
      fixed.removeClass("fixed-header");
    }
  });

  // open menu
  $('.nav-toggle').on('click', function(){
    $(this).toggleClass('active');
    $('.main-nav').toggleClass('active');
    $('body').toggleClass('fixed');
    $('#page-overlay').fadeToggle();
  });

  // scroll down button
  $('.scroll-down').on('click', function(){
    $(this).addClass('active');
    $('html,body').animate({scrollTop: $('.index-clients').offset().top}, 1000);
  });

  // init slider
  $('.clients-slider').slick({
    autoplay: true,
    dots: false,
    autoplaySpeed: 8000,
    arrows: true,
    speed: 900,
    slidesToScroll: 1,
    mobileFirst: true,
    accessibility: false,
    cssEase: 'cubic-bezier(0.830, -0.040, 0.310, 1.355',
    nextArrow:'<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#AAA" d="M39 2.124L45.835 9 39 15.876 41.1 18 50 9l-8.9-9z"/><path stroke="#AAA" stroke-linecap="square" stroke-width="3" d="M1.5 9.25h44"/></g></svg></button>',
    prevArrow:'<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#AAA" d="M11 2.124L4.165 9 11 15.876 8.9 18 0 9l8.9-9z"/><path stroke="#AAA" stroke-linecap="square" stroke-width="3" d="M48.5 9.25h-44"/></g></svg></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    return is_ie;
  }
  if (isIE()){
    $('.index-jumbotron').addClass('explorer');
  }
});








