

/**FOR THE FIRST CAROUSEL ON THE HOME PAGE */
let i = 0;
let timer = 0;
let carou_small_block_image_wide = document.querySelector('.carou_small_block_image_wide');
let dir = 0;
let img_BAG = document.querySelectorAll('.img_BAG');
let dot_parent = document.getElementById('dot_zone');

for (let iC = 0; iC < carou_small_block_image_wide.children.length; iC++) {
    let div_element = document.createElement("div");
    div_element.setAttribute('class', "dot_element")
    dot_parent.appendChild(div_element);
}
let dot_element = document.getElementsByClassName('dot_element')
let x = 0;
for (let doty = 0; doty < dot_element.length; doty++) {
    $(".dot_element:eq(" + doty + ")").click(function (e) {
        i = doty;

        $('.bag_zone').children().eq(doty).addClass('up_down')
        $('.bag_zone').children().eq(doty).siblings().removeClass('up_down');
        $('.bag_zone').children().eq(doty).removeClass('hide')
        $('.bag_zone').children().eq(doty).siblings().addClass('hide')


        $('.carou_small_block_image_wide').children().eq(doty).addClass('active')
        $('.carou_small_block_image_wide').children().eq(doty).removeClass('none_active')
        $('.carou_small_block_image_wide').children().eq(doty).siblings().removeClass('active')
        $('.carou_small_block_image_wide').children().eq(doty).siblings().addClass('none_active')

        $('.bag_title_zone').children().eq(doty).addClass('typewriter')
        $('.bag_title_zone').children().eq(doty).siblings().removeClass('typewriter');
        $('.bag_title_zone').children().eq(doty).removeClass('hide_txt_carousel_title')
        $('.bag_title_zone').children().eq(doty).siblings().addClass('hide_txt_carousel_title')

        $('.block_txt_price_carousel').children().eq(doty).addClass('txt_price_carousel_up_down')
        $('.block_txt_price_carousel').children().eq(doty).siblings().removeClass('txt_price_carousel_up_down');
        $('.block_txt_price_carousel').children().eq(doty).removeClass('hide_txt_price_carousel')
        $('.block_txt_price_carousel').children().eq(doty).siblings().addClass('hide_txt_price_carousel')


        $('.block_txt_p_carousel').children().eq(doty).addClass('txt_p_carousel_up_down')
        $('.block_txt_p_carousel').children().eq(doty).siblings().removeClass('txt_p_carousel_up_down');
        $('.block_txt_p_carousel').children().eq(doty).removeClass('hide_txt_p_carousel')
        $('.block_txt_p_carousel').children().eq(doty).siblings().addClass('hide_txt_p_carousel')

        $(this).css({
            'transform': 'scale(1.5)',
            'background-color': '#c18d6f',
            'box-shadow': '0 10px 15px rgba(25, 25, 25, 0.1)',
            'border-color': '#c18d6f'
        });
        $(this).siblings().css({
            'transform': 'scale(1)',
            'background-color': 'black',
            'box-shadow': 'none',
            'transition': "all 1s",
            'border-color': 'black'
        });
    });


}

$(".dot_element:eq(" + i + ")").css({
    'transform': 'scale(1.5)',
    'background-color': '#c18d6f',
    'box-shadow': '0 10px 15px rgba(25, 25, 25, 0.1)',
    'border-color': '#c18d6f'
});


function home_carousel(i) {
    $('.loader_carousel_show_parent').show()
    $('.carou_small_block_image_wide').children().eq(i).addClass('active')
    $('.carou_small_block_image_wide').children().eq(i).removeClass('none_active')
    $('.carou_small_block_image_wide').children().eq(i).siblings().removeClass('active')
    $('.carou_small_block_image_wide').children().eq(i).siblings().addClass('none_active')


    $('.bag_zone').children().eq(i).addClass('up_down')
    $('.bag_zone').children().eq(i).siblings().removeClass('up_down');
    $('.bag_zone').children().eq(i).removeClass('hide')
    $('.bag_zone').children().eq(i).siblings().addClass('hide')

    $('.bag_title_zone').children().eq(i).addClass('typewriter')
    $('.bag_title_zone').children().eq(i).siblings().removeClass('typewriter');
    $('.bag_title_zone').children().eq(i).removeClass('hide_txt_carousel_title')
    $('.bag_title_zone').children().eq(i).siblings().addClass('hide_txt_carousel_title')

    $('.block_txt_price_carousel').children().eq(i).addClass('txt_price_carousel_up_down')
    $('.block_txt_price_carousel').children().eq(i).siblings().removeClass('txt_price_carousel_up_down');
    $('.block_txt_price_carousel').children().eq(i).removeClass('hide_txt_price_carousel')
    $('.block_txt_price_carousel').children().eq(i).siblings().addClass('hide_txt_price_carousel')

    $('.block_txt_p_carousel').children().eq(i).addClass('txt_p_carousel_up_down')
    $('.block_txt_p_carousel').children().eq(i).siblings().removeClass('txt_p_carousel_up_down');
    $('.block_txt_p_carousel').children().eq(i).removeClass('hide_txt_p_carousel')
    $('.block_txt_p_carousel').children().eq(i).siblings().addClass('hide_txt_p_carousel')

    $(".dot_element:eq(" + i + ")").css({
        'transform': 'scale(1.5)',
        'background-color': '#c18d6f',
        'box-shadow': '0 10px 15px rgba(25, 25, 25, 0.1)',
        'border-color': '#c18d6f'
    });
    $(".dot_element:eq(" + i + ")").siblings().css({
        'transform': 'scale(1)',
        'background-color': 'black',
        'box-shadow': 'none',
        'transition': "all 2s",
        'border-color': 'black'
    });

}


let startTime;
let intervalTime = 5000;
let resume = 0;
let opicty_reduce_transition = function (intervalTime) {
    timer = setInterval(function () {

        home_carousel(i)
        i++; //INCRIMMENT I TO ITERATE IN THE FUNCTION
        if (i == carou_small_block_image_wide.children.length) {
            i = 0;
        }
        startTime = new Date();

    }, intervalTime);

}


window.onload = function (e) {
    opicty_reduce_transition(intervalTime);
    carou_small_block_image_wide.onmouseover = function (e) {
        clearInterval(timer); //PAUSE

    }
    carou_small_block_image_wide.onmouseout = function (e) {
        opicty_reduce_transition(intervalTime); //START BACK AFTER RESUME

    }
}

/**end  */

/**FOR the featured_product_carousel  */
$(document).ready(function () { // featured_product_carousel

    $(".featured_product_carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });


    $(".join_carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });




    let featured_product_carousel = $('.featured_product_carousel');
    let join_carousel = $('.join_carousel');



    featured_product_carousel.owlCarousel();
    join_carousel.owlCarousel();


    // Go to the next item
    $('.go_next').click(function () {
        featured_product_carousel.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.go_prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        featured_product_carousel.trigger('prev.owl.carousel', [300]);
    })



    // Go to the next item
    $('.go_next2').click(function () {
        join_carousel.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.go_prev2').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        join_carousel.trigger('prev.owl.carousel', [300]);
    })
    $(".brands_carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

});
/**end  */


