$('.main-content .owl-carousel').owlCarousel({
    items:1,
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


// var isNS = (navigator.appName == "Netscape") ? 1 : 0;
// if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
// function mischandler(){
//   return false;
// }
// function mousehandler(e){
//   var myevent = (isNS) ? e : event;
//   var eventbutton = (isNS) ? myevent.which : myevent.button;
//   if((eventbutton==2)||(eventbutton==3)) return false;
// }
// document.oncontextmenu = mischandler;
// document.onmousedown = mousehandler;
// document.onmouseup = mousehandler;

/********** Masonry With Filter************/



$('.team .owl-carousel').owlCarousel({
    items:4,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    navText: [
        '<div style="font-size:20px; padding: 8px 20px;letter-spacing: 2px;"><div>PR</div><div style="margin-top:-10px;">EV</div></div>',
        '<div style="font-size:20px; padding: 8px 20px;letter-spacing: 2px;"><div>NE</div><div style="margin-top:-10px;">XT</div></div>',
    ],
    navContainer: '.team .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 4
        }
    }
});

