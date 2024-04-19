$(function () {
    //caches a jQuery object containing the header element
    var header = $(".navbar");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 68) {
            header.addClass("darkHeader");
        } else {
            header.removeClass("darkHeader");
        }
    });
    feather.replace();

});


$('.eventBox').slick({
    centerMode: false,
    centerPadding: '0px',
    dots: false,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"> <i data-feather="arrow-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i data-feather="arrow-right"></i></button>',
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('ShortNotes-carousel').slick({
    infinite: false,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
}

carousel();


$('.kidsLesson').slick({
  centerMode: false,
  centerPadding: '0px',
  dots: true,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"> <i data-feather="arrow-left"></i> </button>',
  nextArrow: '<button type="button" class="slick-next"><i data-feather="arrow-right"></i></button>',
  speed: 300,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});