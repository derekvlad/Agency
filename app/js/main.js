$(function () {
    // var accordion = function (){
    //     var data = $('.faq__accordion').attr('data-accordion');
    //     $('.faq__item').on('click', function(){
    //         if (data === 'close'){
    //             $('.faq__item-text').slideUp();
    //             if($(this).hasClass('active')){
    //                 $(this).toggleClass('active');
    //             }
    //             else{
    //                 $('.faq__item-text').removeClass('active')
    //                 $(this).toggleClass('active');

    //             }
    //         }
    //         else {
    //             $(this).toggleClass('active');
               
    //         }
    //         // $(this).next('.faq__item-text').not(':animated').slideToggle();
    //     });
    // };
    // accordion();

    $('.faq__item').accordion({
        "transitionSpeed": 400
    });


    $('.team__slider-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="images/team/ar-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="images/team/ar-right.svg" alt=""></button>',
    });

   

    var mixer = mixitup('.filter-nav__inner');

    $('.design-btn, .branding-btn, .illustration-btn , .motion-btn').on('click', function () {
        $('.filter-nav__inner').addClass('filter-nav__inner--flex');
    });
    $('.all-btn').on('click', function () {
        $('.filter-nav__inner').removeClass('filter-nav__inner--flex');
    })

});