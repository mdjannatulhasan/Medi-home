$(document).ready(function(){
    $('.your-class').slick({
        prevArrow:'.arrow_prev',
        nextArrow:'.arrow_next',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow:true,
        dots:true,
    });
  });