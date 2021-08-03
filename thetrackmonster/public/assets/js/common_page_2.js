
// var y_offsetWhenScrollDisabled = 0;
// function disableScrollOnBody() {
//     y_offsetWhenScrollDisabled = $(window).scrollTop();
//     $('body').addClass('scrollDisabled').css('margin-top', -y_offsetWhenScrollDisabled);
// }
// function enableScrollOnBody() {
//     $('body').removeClass('scrollDisabled').css('margin-top', 0);
//     $(window).scrollTop(y_offsetWhenScrollDisabled);
// }

// $(document).ready(function () {
//     function myFunction() { /**TO SCROLL BACK UP  */

//         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//             $('#myBtn1').show();
//         } else {
//             $('#myBtn1').hide()
//         }
//     }

//     window.onscroll = function () {
//         myFunction()
//     };


//     $("#myBtn1").on('click', function (event) {

//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//             scrollTop: 0
//         }, 800, function () {

//         });

//     });
//     // $(".user_comment_carousel").owlCarousel({
//     //     loop: true,
//     //     margin: 10,
//     //     nav: false,
//     //     responsiveClass: true,
//     //     responsive: {
//     //         0: {
//     //             items: 1,
//     //             nav: true
//     //         },
//     //         600: {
//     //             items: 1,
//     //             nav: false
//     //         },
//     //         1000: {
//     //             items: 1,
//     //             nav: true,
//     //             loop: false
//     //         }
//     //     }
//     // });

//     // $(".most_product_carousel").owlCarousel({
//     //     loop: true,
//     //     margin: 10,
//     //     nav: false,
//     //     responsiveClass: true,
//     //     responsive: {
//     //         0: {
//     //             items: 1,
//     //             nav: true
//     //         },
//     //         600: {
//     //             items: 3,
//     //             nav: false
//     //         },
//     //         1000: {
//     //             items: 4,
//     //             nav: true,
//     //             loop: false
//     //         }
//     //     }
//     // });
//     let user_comment_carousel = $('.user_comment_carousel');
//     let most_product_carousel = $('.most_product_carousel');
//     user_comment_carousel.owlCarousel();
//     most_product_carousel.owlCarousel();
//     // Go to the next item
//     $('.go_next3').click(function () {
//         user_comment_carousel.trigger('next.owl.carousel');
//     })
//     // Go to the previous item
//     $('.go_prev3').click(function () {
//         // With optional speed parameter
//         // Parameters has to be in square bracket '[]'
//         user_comment_carousel.trigger('prev.owl.carousel', [300]);
//     })

//     // Go to the next item
//     $('.go_next1').click(function () {
//         most_product_carousel.trigger('next.owl.carousel');
//     })
//     // Go to the previous item
//     $('.go_prev1').click(function () {
//         // With optional speed parameter
//         // Parameters has to be in square bracket '[]'
//         most_product_carousel.trigger('prev.owl.carousel', [300]);
//     })

//     $('.owl-prev').hide();
//     $('.owl-next').hide();
//     $('.owl-dots').hide();
// });
