$(document).ready(function () {


    // Activate Carousel of comment on home2 page
    $("#carousel_comment_client_home2").carousel();

    // Enable Carousel Controls
    $(".btn_left_carousel2_home2").click(function () {
        $("#carousel_comment_client_home2").carousel("prev");

    });
    // Enable Carousel Controls
    $(".btn_right_carousel2_home2").click(function () {
        $("#carousel_comment_client_home2").carousel("next");
    });


});