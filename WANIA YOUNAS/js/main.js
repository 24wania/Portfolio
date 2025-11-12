(function ($) {
    "use strict";

    // === ALL YOUR EXISTING CODE (BY Muhammad Owais) ===
    

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

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Smooth scrolling
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1500, 'easeInOutExpo');
        }
    });

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    // Portfolio isotope
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

                                                            // FORMSPREE SUBMISSION (NEW)
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var messages = $('#form-messages');

        // M.OWAIS
        messages.empty();

        $.ajax({
            url: form.attr('action'),
            method: 'POST',
            data: form.serialize(),
            dataType: 'json',
            beforeSend: function() {
                form.find('button').prop('disabled', true).text('Sending...');
            },
            success: function(response) {
                if (response.ok) {
                    messages.html('<div class="alert alert-success">Thank you! Your message has been sent.</div>');
                    form.trigger('reset');
                } else {
                    messages.html('<div class="alert alert-danger">Oops! Something went wrong. Try again.</div>');
                }
            },
            error: function() {
                messages.html('<div class="alert alert-danger">Network error. Please check your connection.</div>');
            },
            complete: function() {
                form.find('button').prop('disabled', false).text('Send Message');
                
                setTimeout(function() {
                    $('.alert').fadeOut(500, function() { $(this).remove(); });
                }, 4000);
            }
        });
    });

})(jQuery);

// === (BY Muhammad Owais) ===