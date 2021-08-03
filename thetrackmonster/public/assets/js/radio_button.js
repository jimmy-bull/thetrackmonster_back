$('.radio_button_sub_parent').click(function (e) { /******CUSTOM RADIO BUTTON EFFECT */
    $(this).children('div.self_radio_button').addClass('active_radio_button');
    $(this).parent().siblings().children('div.radio_button_sub_parent').children('div.self_radio_button').removeClass('active_radio_button');
})


