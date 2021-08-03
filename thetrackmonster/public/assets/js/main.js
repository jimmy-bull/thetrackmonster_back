
$('.miniature_grid').hover(function (e) {
    $(this).parent().parent().prev().children("img.principale_grid_image").attr("src", $(this).attr('src'))
})


//TO DISABLE SCROLLING
var y_offsetWhenScrollDisabled = 0;
function disableScrollOnBody() {
    y_offsetWhenScrollDisabled = $(window).scrollTop();
    $('body').addClass('scrollDisabled').css('margin-top', -y_offsetWhenScrollDisabled);
}
function enableScrollOnBody() {
    $('body').removeClass('scrollDisabled').css('margin-top', 0);
    $(window).scrollTop(y_offsetWhenScrollDisabled);
}







$(document).ready(function () {
    // $(".owl_home2").owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     responsiveClass: true,
    //     navSpeed: 1000,
    //     dragEndSpeed: 1000,
    //     stagePadding: 50,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: true
    //         },
    //         600: {
    //             items: 2,
    //             nav: false
    //         },
    //         1000: {
    //             items: 4,
    //             nav: true,
    //             loop: false
    //         }
    //     }
    // });

    // let owl_home2 = $('.owl_home2');
    // owl_home2.owlCarousel();
    // // Go to the next item
    // $('.btn_right_carousel_home2').click(function () {
    //     owl_home2.trigger('next.owl.carousel', [1000]);
    // })
    // // Go to the previous item
    // $('.btn_left_carousel_home2').click(function () {
    //     // With optional speed parameter
    //     // Parameters has to be in square bracket '[]'
    //     owl_home2.trigger('prev.owl.carousel', [1000]);
    // })

    // $('.li_links_main_menu_ul').hover(function (e) {
    //     $(this).siblings().children('a').css({
    //         'color': 'black',
    //         'letter-spacing': '1px',
    //         "transition": 'all .2s',
    //         'border-bottom-style': 'none'
    //     })

    //     $(this).children('a').css({
    //         'color': 'teal',
    //         'letter-spacing': '2px',
    //         "transition": 'all .2s',
    //         'border-bottom-style': 'solid'
    //     })

    // });

    // $('.li_links_main_menu_ul').eq(0).children("a").css({
    //     'color': 'teal',
    //     'letter-spacing': '2px',
    //     "transition": 'all .2s',
    //     'border-bottom-style': 'solid'
    // })

    // $('.sub_menu_main_menu_ul').eq(0).css({
    //     "display": 'block',
    // })
    // //Menu
    // $('.open_main_menu_side').click(function (e) {
    //     $('.sidebar_main_menu').css({
    //         "width": "100%",
    //         "animation": "slideInLeft",
    //         "animation-duration": ".5s",
    //     });
    //     disableScrollOnBody();
    // })

    // $('.close_main_menu').click(function (e) {
    //     $(".sidebar_main_menu").css({
    //         "width": "0",
    //         "animation": "slideOutLeft",
    //         "animation-duration": ".5s",
    //     });
    //     enableScrollOnBody();
    // })

    // $('.li_links_main_menu_ul').hover(function (e) {
    //     $(this).children(".sub_menu_main_menu_ul").show()
    //     $(this).siblings().children(".sub_menu_main_menu_ul").css({
    //         "display": 'none'
    //     })
    // })
});




// //WHEN PAGE IS TEAL LOADING
// $('.loading_space').css('width', "100%");
// $('.loading_space_child').show()
// disableScrollOnBody();
// window.onload = function (e) {
//     $('.loading_space').css('width', "0%");
//     $('.loading_space_child').hide()
//     enableScrollOnBody() //TO ENABLE SCROLLING WHEN PAGE ISN'T LOADING
// }

