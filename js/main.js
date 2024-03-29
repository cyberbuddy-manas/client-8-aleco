(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


})(jQuery);

// Enquiry form index page

// function fetchEnquiryIndex() {
//     let user = document.getElementById('nameEI').value;
//     let mail = document.getElementById('mailEI').value;
//     let mobile = document.getElementById('mobileEI').value;
//     let service = document.getElementById('serviceEI').value;
//     let date = document.getElementById('dateEI').value;
//     let time = document.getElementById('timeEI').value;
//     let message = document.getElementById('messageEI').value;
// }

function launch_toast(txt1, txt2) {
    var x = document.getElementById("toast")
    x.className = "show";
    var text1 = document.getElementById("txt1");
    var text2 = document.getElementById("txt2");
    text1.innerHTML = txt1;
    text2.innerHTML = txt2;
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}

async function sendEnquiryIndex() {
    let name = document.getElementById('nameEI').value;
    let mail = document.getElementById('mailEI').value;
    let mobile = document.getElementById('mobileEI').value;
    let service = document.getElementById('serviceEI').value;
    let date = document.getElementById('dateEI').value;
    let time = document.getElementById('timeEI').value;
    let message = document.getElementById('messageEI').value;

    if (name == "" || mail == "" || mobile == "" || service == "" || date == "" || time == "" || message == "") {
        return;
    }

    let data = {
        name, mail, mobile, service, date, time, message
    }

    await emailjs.send("service_8t1ekpl", "template_4rg5tbc", data);

    launch_toast("Awesome!", "Your Appointment is Booked.")

    setTimeout(() => {
        document.getElementById('nameEI').value = '';
        document.getElementById('mailEI').value = '';
        document.getElementById('mobileEI').value = '';
        document.getElementById('serviceEI').value = 'default';
        document.getElementById('dateEI').value = '';
        document.getElementById('timeEI').value = '';
        document.getElementById('messageEI').value = '';
    }, 1000)
}

async function sendEnquiryContact() {
    let name = document.getElementById('nameEC').value;
    let mail = document.getElementById('mailEC').value;
    let subject = document.getElementById('subjectEC').value;
    let message = document.getElementById('messageEC').value;

    if (name == "" || mail == "" || subject == "" || message == "") {
        return;
    }

    let data = {
        name, mail, subject, message
    }

    await emailjs.send("service_8t1ekpl", "template_xvphhuh", data);

    launch_toast("Awesome!", "We will contact you soon.")

    setTimeout(() => { document.getElementById("contactForm").reset() }, 1000)
}