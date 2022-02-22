$(function(){
    $('.product').slick({

            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1, 
            arrows:true,
            dots:true,
            dotsClass:'dots-numb',
            prevArrow:'.prevBtn',
            nextArrow:'.nextBtn',
            responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows:false,
                  }
                }
            ]
    });
})
