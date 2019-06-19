(function($) {
    "use strict"
    $(function() {

        $('.__dd__block-fo__carousel__items').slick({
            centerMode: true,
            centerPadding: '15vw',
            prevArrow: '.__dd__block-fo__carousel__controls button.is--prev',
            nextArrow: '.__dd__block-fo__carousel__controls button.is--next',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: false
                    }
                }
            ]
        })

    })
})(jQuery);