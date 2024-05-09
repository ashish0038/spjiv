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
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '10px',
    infinite: true,
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
//eventsLesson
$('.eventsLesson').slick({
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
//TestimonialSlider

$('.TestimonialSlider').slick({
  centerMode: false,
  centerPadding: '0px',
  dots: true,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"> <i data-feather="arrow-left"></i> </button>',
  nextArrow: '<button type="button" class="slick-next"><i data-feather="arrow-right"></i></button>',
  speed: 300,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
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

// Satguru 

$('.satgure-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.satgure-for'
});
$('.satgure-for').slick({
  centerMode: true,
  centerPadding: '1rem',
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.satgure-nav',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
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
	
