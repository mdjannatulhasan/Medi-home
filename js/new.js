// $(document).ready(function(){
//     $('.your-class').slick({
//         prevArrow:'.arrow_prev',
//         nextArrow:'.arrow_next',
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrow:true,
//         dots:true,
//     });
//   });
$('.main-content .owl-carousel').owlCarousel({
    items:1,
    // stagePadding: 50,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    navText: [
        '<div style="font-size:20px; padding: 8px 20px;letter-spacing: 2px;"><div>PR</div><div style="margin-top:-10px;">EV</div></div>',
        '<div style="font-size:20px; padding: 8px 20px;letter-spacing: 2px;"><div>NE</div><div style="margin-top:-10px;">XT</div></div>',
    ],
    navContainer: '.main-content .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }
    }
});