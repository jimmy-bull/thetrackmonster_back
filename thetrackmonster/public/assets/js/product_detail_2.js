

$('.block_show_miniature_big').hide(); //close the big_miniature 
$('.main_over_view_image').click(function (e) {
    $('.block_show_miniature_big').show('slow');
    $('.img_receiving_miniature').attr('src', $(this).attr('src'))
    $('.img_receiving_miniature').attr('data-zoom-image', $(this).attr('src'))
    disableScrollOnBody();
})
$('.btn_close_big_miniature').click(function (e) {
    $(this).parent().hide('slow'); //close the big_miniature 
    $('.img_receiving_miniature').css({
        "transform": "scale(1)",
        'transition': 'all .5s',
        'cursor': 'zoom-in'
    })
    enableScrollOnBody();
})
let scale_up = 0
$('.img_receiving_miniature').click(function (e) {
    if (scale_up == 0) {
        $(this).css({
            "transform": "scale(1.3)",
            'transition': 'all .5s',
            'cursor': 'zoom-out'
        })
        scale_up = 1;
    } else if (scale_up == 1) {
        $(this).css({
            "transform": "scale(1)",
            'transition': 'all .5s',
            'cursor': 'zoom-in'
        })
        scale_up = 0;
    }

})


$(".miniature_images").hover(function (e) {

    $('.contain_big_miniature_images').attr('src', $(this).attr('src'))
    $('.contain_big_miniature_images').attr('data-zoom-image', $(this).attr('src'))

    $('div.zoomWindowContainer div').css({ 'background-image': 'url(' + $(this).attr('src') + ')' });

    $('.zoomWindow').css({
        'border-width': '0px',
        'border-style': 'none'
    })
    $(this).css({
        "border-style": "solid",
        "padding": 0 + "px",
        "border-width": 1 + "px",
        'box-sizing': 'border-box',
        'border-color': "#01FF70"
    })
    $(this).siblings().css({
        "border-style": "none",
    })
    $('.js-image-zoom__zoomed-area').css({
        'background': 'white',
        'opacity': '-=0.1', //TO KEEP THE  Js-image-zoom__zoomed-area AT THE SAME PLACE
    })

})

