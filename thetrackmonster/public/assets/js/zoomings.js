$("#contain_big_miniature_images").elevateZoom({
    zoomType: "inner",
    cursor: "crosshair",
    easing: true
});
$(window).resize(function (e) {
    $('.zoomContainer').remove();
    $("#contain_big_miniature_images").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        easing: true,
    });
});
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


$("#img-container").mouseleave(function () {
    $('.the_other_side_of_zoom_part').css({
        "opacity": 1
    });
});

$('.others_images:eq(0)').css({
    "border-style": "solid",
    "padding": 0 + "px",
    "border-width": 1 + "px",
    'box-sizing': 'border-box',
    'border-color': "#01FF70"
})
