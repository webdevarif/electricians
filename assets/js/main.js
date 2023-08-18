;
(function($) {
    $(document).ready(function() {

        /*-------------------------------------------------------------------------------
        javaScript for sticky header
        -------------------------------------------------------------------------------*/
        $(".header-area").sticky();

        $(".navbar-toggler").on("click", function() {
            $(".header-area").toggleClass("active");
        });

        /*---------------------------------
		Javascript for wow animation
		----------------------------------*/
        new WOW().init();


        /*-------------------------------------------------------------------------------
        testimonial Slider 
        -------------------------------------------------------------------------------*/
        $('.testi-slider-wrap').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            appendDots: $('.slider-dots-box'),
            arrows: true,
            prevArrow: $('.slider-prev'),
            nextArrow: $('.slider-next'),
            fade: false,
            autoplay: true,
            speed: 1000,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });

    });
}(jQuery));


