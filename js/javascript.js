
$(".image-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  draggable: false,
  prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
  draggable: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        infinite: false,
      },
    },
  ],
  // autoplay: true,
  // autoplaySpeed: 1000,
});
$(".status9-2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        infinite: false,
      },
    },
  ],
  autoplay: true,
  autoplaySpeed: 5000,
});

$(".status11").slick({
  slidesToShow: 4,
  slidesToScroll: 3,
  draggable: true,
  prevArrow: `<button type='button'class='status11-1'><i class="fa-solid fa-angle-left"></i></button>`,
  nextArrow: `<button type='button'class='status11-2'><i class="fa-solid fa-angle-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        infinite: false,
      },
    },
  ],
  // autoplay: true,
  // autoplaySpeed: 1000,
});



$(".status14").slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  infinite: true,
  arrows: true,
  draggable: false,
  prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
  draggable: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow:3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        arrows: false,
        infinite: false,
      },
    },
  ],
  // autoplay: true,
  // autoplaySpeed: 1000,
});






$(".mobile-status2-1").slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  infinite: true,
  arrows: true,
  draggable: false,
  prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
  draggable: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        arrows: false,
        infinite: false,
      },
    },
  ],
  // autoplay: true,
  // autoplaySpeed: 1000,
});

$(".mobile-status3-1").slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  infinite: true,
  arrows: true,
  draggable: false,
  prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
  draggable: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        arrows: false,
        infinite: false,
      },
    },
  ],
  // autoplay: true,
  // autoplaySpeed: 1000,
});





$(".mobile-status5").slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  infinite: true,
  arrows: true,
  draggable: false,
  prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
  draggable: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        arrows: false,
        infinite: false,
      },
    },
  ],
  // autoplay: true,
  // autoplaySpeed: 1000,
});












$(document).ready(function(){
  $(".menu6-1").click(function(){
    $(".menu6-2").toggle();
  });
});


$(document).ready(function(){
  $(".mobile-bottom3-2").click(function(){
    $(".mobile-bottom3-3").toggle();
  });
});
$(document).ready(function(){
  $(".mobile-bottom3-4").click(function(){
    $(".mobile-bottom3-5").toggle();
  });
});
$(document).ready(function(){
  $(".mobile-bottom3-6").click(function(){
    $(".mobile-bottom3-7").toggle();
  });
});



