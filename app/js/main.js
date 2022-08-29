$(function () {
    $('.menu__btn, a').on('click', function () {
        $('.header-top').toggleClass('header-top--active');
    });
    $('.faq__item').accordion({
        transitionSpeed: 400,
    });
    $('.service-accordion__item').accordion({
        transitionSpeed: 400,
    });


    $('.team__slider-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="images/team/ar-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="images/team/ar-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    
                }
                
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.testimonials-about__items').slick({
        arrows: false,
        dots: true,
        // cssEase: 'linear',
        centerMode: true,
        
        responsive: [
          
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            }
        ]
    });
    $('.filter-nav__select').styler();
    var mixer = mixitup('.filter-nav__inner');
   

    $('.design-btn, .branding-btn, .illustration-btn , .motion-btn').on('click', function () {
        $('.filter-nav__inner').addClass('filter-nav__inner--flex');
    });
    $('.all-btn').on('click', function () {
        $('.filter-nav__inner').removeClass('filter-nav__inner--flex');
    })


});



$(function () {
    $('.form__select').styler();
    
   
});
