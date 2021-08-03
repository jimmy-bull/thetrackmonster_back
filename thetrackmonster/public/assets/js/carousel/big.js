
$(document).ready(function () {

    $('.owl-carousel_big').owlCarousel({
        loop: true,
        dragEndSpeed: 1500,
        margin: 10,
        responsiveClass: true,
        navSpeed: 1500,
        dotsSpeed: 1500,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    });
    $('.owl-carousel_big').children("div.owl-dots").addClass('owl-dots-carou_carousel_big');
    $('.owl-carousel_big').children("div.owl-nav").addClass('owl-nav-owl-carousel_big');

    $('.owl-dots-carou_carousel_big').click(function (e) {
        //alert('jhg')
    })
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    });
    AOS.refreshHard()
})