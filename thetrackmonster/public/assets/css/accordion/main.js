$('.accordion_parent').children("div.accordion_child").addClass('hide_accordion_child')


$('.accordion_title').click(function (e) {
    if ($(this).parent().children("div.accordion_child").hasClass('hide_accordion_child')) {
        $(this).parent().children("div.accordion_child").removeClass('hide_accordion_child');
        $(this).parent().children("div.accordion_child").addClass('show_accordion_child');

        if (!$(this).parent().hasClass('sub_for_menu_add')) { // CLASSIC ACCORDION
            $(this).parent().children('div.show_accordion_child').css({
                "max-height": $(this).parent().children("div.accordion_child").prop('scrollHeight')
            })
        } else { //FOR MENU ON MOBILE
            $(this).parent().parent().css({
                "max-height": $(this).parent().children("div.accordion_child").prop('scrollHeight') + $(this).parent().parent().prop('scrollHeight')
            })
            $(this).parent().children('div.show_accordion_child').css({
                "max-height": $(this).parent().children("div.accordion_child").prop('scrollHeight')
            })
        }


        $(this).parent().children("div.accordion_title").children('strong.plus_signe_accordion').children("i.fas").addClass('fa-minus');
        $(this).parent().children("div.accordion_title").children('strong.plus_signe_accordion').children("i.fas").removeClass('fa-plus');
        $(this).parent().siblings().children("div.accordion_title").children('strong.plus_signe_accordion').children("i.fas").removeClass('fa-minus');
        $(this).parent().siblings().children("div.accordion_title").children('strong.plus_signe_accordion').children("i.fas").addClass('fa-plus');
    } else {
        $(this).parent().children("div.accordion_child").addClass('hide_accordion_child');
        $(this).parent().children("div.accordion_child").removeClass('show_accordion_child');
        $(this).parent().children("div.accordion_title").children('strong.plus_signe_accordion').children("i.fas").addClass('fa-plus');
        $(this).parent().children("div.accordion_title").children('strong.plus_signe_accordion').children("i.fas").removeClass('fa-minus');

    }
    $(this).parent().siblings().children("div.accordion_child").removeClass('show_accordion_child')
    $(this).parent().siblings().children("div.accordion_child").addClass('hide_accordion_child')
})

//CUSTOMIZING THE SELECT



for (let index = 0; index < $("div.first_select_element").length; index++) {
    $("div.first_select_element:eq(" + index + ")").click(function (e) {
        if ($(this).children("i").hasClass("fa-angle-down")) { //TO OPEN SELECT
            $(this).children("i.fa-angle-down").addClass('fa-angle-up');
            $(this).children("i.fa-angle-down").removeClass('fa-angle-down');
            $(this).siblings().show();
            $(this).parent().siblings().children('div.select_content').hide();
            $(this).parent().siblings().children('div.first_select_element').children("i").addClass('fa-angle-down');
            $(this).parent().siblings().children('div.first_select_element').children("i").removeClass('fa-angle-up');
        } else {
            $(this).siblings().hide();  //TO CLOSE SELECT
            $(this).children("i.fa-angle-up").addClass('fa-angle-down');
            $(this).children("i.fa-angle-up").removeClass('fa-angle-up');

        }
    })

}


$('.fa-check').hide();
$('.select-item').click(function (e) {
    $(this).children('i.fa-check').css({
        "display": "inline-block"
    });
    $(this).siblings().children("i.fa-check").css({
        "display": "none"
    });
    $(this).parent().prev().children("span.txt_select_start").text($(this).children("span.txt_select_content").text())
    $(this).parent().css({
        "display": "none"
    })
    $(this).parent().prev().children("i.fa-angle-up").addClass('fa-angle-down');
    $(this).parent().prev().children("i.fa-angle-up").removeClass('fa-angle-up');
})



// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.first_select_element') && !event.target.matches('.txt_select_start') && !event.target.matches('.irier')) {
        if ($('.first_select_element').children("i").hasClass("fa-angle-up")) {
            $('.first_select_element').siblings().hide();
            $('.first_select_element').children("i.fa-angle-up").addClass('fa-angle-down');
            $('.first_select_element').children("i.fa-angle-up").removeClass('fa-angle-up');
        }
    }
    //FILTER BOX ON GRID_VIEW_1 PAGE
    if (event.target.matches('.filter_side_bar_block')) {
        $('.content_filter_side_bar_block').css({
            "animation": "slideOutLeft",
            "animation-duration": "1s",
        });

        setTimeout(() => {
            $('.content_filter_side_bar_block').removeClass('active_filter')
            $('.filter_side_bar_block').hide() //Close FILTER BOX 
        }, 800);
        enableScrollOnBody();
    }
    //
}

