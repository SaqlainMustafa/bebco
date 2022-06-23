$('.slick-slider').slick({
  slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '250px',
    vertical: true,
    infinite: true,
    focusOnSelect: true,
    touchMove: true,
    // autoplay: true,
    // autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerPadding: '200px',
          dots: false,
        }
      }
    ]
});


$('.offices-slider').slick({
  centerMode: true,
  centerPadding: '180px',
  slidesToShow: 3,
  dots: true,
  arrows: false,
  autoplay: true,
    autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.archieve-slider').slick({
  centerMode: true,
  centerPadding: '180px',
  slidesToShow: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


$('.main-blog-slider').slick({
  prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/images/left-arrow.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='./assets/images/right-arrow.png'>",
});

$('.recent-article-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
});


$(document).ready(function() {
  new WOW().init();
});

$(document).on('click', '#js-click' , function(){
  $('#submit-form').removeClass('d-none')
  $('#before-submit-form').addClass('d-none');
})

// $(window).scroll(function(){
//     var scroll = $(window).scrollTop();

//   if (scroll >= 500) {
//     $('main').removeClass('bg-all')
//     $('.stock').addClass('bg-all')
//   }
//   else if (scroll <= 499) {
//     $('main').removeClass('bg-all')
//     $('.c-booking').addClass('bg-all')
//   }
// });


var teamBooking = document.querySelector('.booking');
var teamStock = document.querySelector('.stock');
var box = document.querySelector(".bg-all");


function changeTeam() {
  var rect = box.getBoundingClientRect();
  var classes = this.classList;
  var bgAll = $('.bg-all');
  var scroll = $(window).scrollTop();
  console.log(scroll)
  if (scroll <= 999) {
    $('.booking').append(bgAll);
    $('.booking').addClass('padd');
    $('.stock').removeClass('padd');
  }

  else if (scroll >= 1000 && scroll <= 1999) {
    $('.stock').append(bgAll);
    $('.stock').addClass('padd');
    $('.booking').removeClass('padd');
  }

  else if (scroll >= 2000) {
    $('.task').append(bgAll);
    $('.task').addClass('padd');
    $('.stock').removeClass('padd');
  }

  // else if (scroll <= 999) {
  //   $('.booking').append(bgAll);
  //   $('.booking').addClass('padd');
  //   $('.stock').removeClass('padd');
  // }

  // else if (scroll <= 999) {
  //   $('.booking').append(bgAll);
  //   $('.booking').addClass('padd');
  //   $('.stock').removeClass('padd');
  // }

  TweenMax.set(box, {x: 0, y: 0});
  var newRect = box.getBoundingClientRect();

  TweenMax.from(box, 1, {
    x: rect.left - newRect.left,
    y: rect.top - newRect.top,
    ease: Power3.easeOut
  });
}

$(window).scroll(function(){
 changeTeam();
});

