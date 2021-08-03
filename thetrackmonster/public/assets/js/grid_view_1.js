$('.filter_btn').click(function (e) {
    $('.filter_side_bar_block').show()
    $('.content_filter_side_bar_block').css({
        "animation": "slideInLeft",
        "animation-duration": ".5s",
    });
    $('.content_filter_side_bar_block').addClass('active_filter')
    disableScrollOnBody();
})
$('.btn_done_fliter').click(function (e) {
    $('.content_filter_side_bar_block').css({
        "animation": "slideOutLeft",
        "animation-duration": "1s",
    });
    setTimeout(() => {
        $('.content_filter_side_bar_block').removeClass('active_filter');
        $('.filter_side_bar_block').hide() //Close FILTER BOX 
    }, 800);
    enableScrollOnBody();
})
$('.quick_view_block').click(function (e) {
    $('.quick_view_box').css({
        'width': '100%',
    })
    disableScrollOnBody();
})

$('.btn_done_quick_view_box').click(function (e) {

    $('.quick_view_box').css({
        'width': '0%'
    })
    enableScrollOnBody();
})