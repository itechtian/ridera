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
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
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
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


document.getElementById('btn').innerHTML = "Submit"

let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('btn').innerHTML = "working..."
    document.getElementById('btn').disable = true
    setTimeout(() => {
        let name = document.getElementById('fullname').value
        let email = document.getElementById('email').value
        let phonenumber = document.getElementById('phonenumber').value
        let movingfrom = document.getElementById('movingfrom').value
        let floorpickup = document.getElementById('floorpickup').value
        let movingto = document.getElementById('movingto').value
        let floordropoff = document.getElementById('floordropoff').value
        let movingtype = document.getElementById('movingtype').value
        let movingdate = document.getElementById('movingdate').value
        let size = document.getElementById('size').value
        let payload = `Hi my name is ${name}, my email ${email} and number ${phonenumber} am moving from ${movingfrom}, ${floorpickup}, to ${movingto}, ${floordropoff}, on ${movingdate} type ${movingtype}, ${size}`
        window.location = ` https://wa.me/+2348142223841?text=${payload}`
        document.getElementById('btn').innerHTML = "Sumbited"
    }, 1500)

})

