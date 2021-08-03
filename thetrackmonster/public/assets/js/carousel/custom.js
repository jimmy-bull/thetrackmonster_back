
$(document).ready(function () {
    $('.carou_responsive_div').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        touchDrag: false,
        mouseDrag: false,
        navSpeed: 1000,
        responsive: {
            0: {
                items: 2,
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

    $('.owl-carousel_miniature').owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        touchDrag: true,
        mouseDrag: true,
        navSpeed: 1000,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })



    $('.carou_responsive_div').children("div.owl-nav").children("button").addClass('btn_carou_responsive_div');// ADD btn_carou_responsive_div TO THE BUTTON OF THE CUREENT CAROUSEL
    $('.carou_responsive_div').children("div.owl-nav").addClass('owl-nav-carou_responsive_div');
    $('.carou_responsive_div').children("div.owl-dots").addClass('owl-dots-carou_responsive_div');

    let txt_all_item_carou = document.getElementsByClassName("txt_all_item_carou");
    let dotsChildrenLengths = 0;

    for (let i = 0; i < txt_all_item_carou.length; i++) {
        $(".txt_all_item_carou:eq(" + i + ")").text(
            $(".owl-dots:eq(" + i + ")").children().length
        );
    }
    for (let i = 0; i < txt_all_item_carou.length; i++) {
        $(".owl-next:eq(" + i + ")").click(function (e) {
            for (let i = 0; i < txt_all_item_carou.length; i++) {
                dotsChildrenLengths = $(this).parent().next().children().length;
                for (let it = 0; it < dotsChildrenLengths; it++) {
                    if ($(this).parent().next().children("button.owl-dot:eq(" + it + ")").hasClass("active")) {
                        $(this).parent().parent().prev().children("div.row").children("div.txt_counter").text(it + 1);
                    }
                }
            }
        })
    }
    for (let i = 0; i < txt_all_item_carou.length; i++) {
        $(".owl-prev:eq(" + i + ")").click(function (e) {
            for (let i = 0; i < txt_all_item_carou.length; i++) {
                dotsChildrenLengths = $(this).parent().next().children().length;
                for (let it = 0; it < dotsChildrenLengths; it++) {
                    if ($(this).parent().next().children("button.owl-dot:eq(" + it + ")").prev().hasClass("active")) {
                        $(this).parent().parent().prev().children("div.row").children("div.txt_counter").text(it);
                    }
                }
            }
        })
    }


    function toChangeTheNumberOfItem(x) {
        if (x.matches) { // If media query matches 
            for (let i = 0; i < txt_all_item_carou.length; i++) {
                $(".txt_all_item_carou").css({
                    "background-color": '#01FF70',
                })
                let alldotsitem = $(".owl-dots:eq(" + i + ")").children().length;
                setTimeout(() => {
                    $(".txt_all_item_carou:eq(" + i + ")").text(
                        $(".owl-dots:eq(" + i + ")").children().length
                    );
                    $(".txt_counter:eq(" + i + ")").text(Math.ceil((parseInt($(".txt_counter:eq(" + i + ")").text()) * $(".owl-dots:eq(" + i + ")").children().length) / alldotsitem));
                    $(".txt_all_item_carou").css({
                        "background-color": 'white',
                        "transition": "background-color 1s",
                        "transition-timing-function": "linear"
                    })
                }, 1000);

            }
        } else {
            for (let i = 0; i < txt_all_item_carou.length; i++) {
                let alldotsitem = $(".owl-dots:eq(" + i + ")").children().length;
                $(".txt_all_item_carou").css({
                    "background-color": '#01FF70',
                })
                setTimeout(() => {
                    $(".txt_all_item_carou:eq(" + i + ")").text(
                        $(".owl-dots:eq(" + i + ")").children().length
                    );
                    $(".txt_counter:eq(" + i + ")").text(Math.ceil((parseInt($(".txt_counter:eq(" + i + ")").text()) * $(".owl-dots:eq(" + i + ")").children().length) / alldotsitem));
                    $(".txt_all_item_carou").css({
                        "background-color": 'white',
                        "transition": "background-color 1s",
                        "transition-timing-function": "linear"
                    })
                }, 1000);
            }
        }
    }
    var x = window.matchMedia("(max-width: 990px)")
    //toChangeTheNumberOfItem(x) // Call listener function at run time
    x.addListener(toChangeTheNumberOfItem) // Attach listener function on state changes
});

