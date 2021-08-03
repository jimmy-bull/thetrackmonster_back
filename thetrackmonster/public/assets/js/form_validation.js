
$('.error_txt').hide()
let email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$('.btn_submit_contact').click(function (e) {
    if (email_validator_regex.test($('#email_txt_contact').val())) {
        $('#email_txt_contact').siblings().hide();
    } else {
        $('#email_txt_contact').siblings().show();
    }

    if ($('#name_txt_contact').val().trim() != "") {
        $('#name_txt_contact').siblings().hide();
    } else {
        $('#name_txt_contact').siblings().show();
    }

    if ($('#message_txt_contact').val().trim() != "") {
        $('#message_txt_contact').siblings().hide();
    } else {
        $('#message_txt_contact').siblings().show();
    }

    if (email_validator_regex.test($('#email_txt_contact').val()) && $('#message_txt_contact').val().trim() != "" && $('#name_txt_contact').val().trim() != "") {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been sent successfully!',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            window.location.href = "index.html"
        }, 1600);
    }
    //name_txt_contact email_txt_contact message_txt_contact

})

