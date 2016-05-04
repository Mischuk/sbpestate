$(document).ready(function() {
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    // Mobile menu
    function mobileMenu() {
        $('.user-mobile-menu').click(function(){
            $('.hamburger').toggleClass('open');
        });
    };
    mobileMenu();
    // end Mobile menu


    // Lead filters: select and scrollbar
    function leadFilters() {
        var $fitlersSelect = $('.filters-select');

        $fitlersSelect.selectpicker({
          size: 8
        });
        $fitlersSelect.on('shown.bs.select', function (e) {
            if ( $(window).width() > 1200 ) {
                $('.filters-select .dropdown-menu').perfectScrollbar({
                    wheelSpeed: 1,
                    wheelPropagation: false
                });
            }
        });
        $fitlersSelect.on('hidden.bs.select', function (e) {
             $('.filters-select .dropdown-menu').perfectScrollbar('destroy');
        });
    };
    leadFilters();
    // end Lead filters: select and scrollbar


    // Carousel: Offers
    function offersCarousel() {
        $('.carousel-offers').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            fade: false,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="icon-prev"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="icon-next"></i></button>',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 568,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                  }
                }
              ]
        });
    };
    offersCarousel();

    function offersTrigger() {
        var $trigger = $('.m_special-offers .m_tab-triggers a');

        $trigger.on('click', function(){
            $trigger.removeClass('current');
            $(this).addClass('current');
            var i = $(this).index();
            $('.carousels-offers').find('.carousel-offers').removeClass('current');
            $('.carousels-offers .mpc_preloader').addClass('show');
            setTimeout(function(){
                $('.carousels-offers .mpc_preloader').removeClass('show');
                $('.carousels-offers').find('.carousel-offers').removeClass('current');
                $('.carousels-offers').find('.carousel-offers').eq(i).addClass('current');
            }, 800);
        });
    };
    offersTrigger();
    // end Carousel: Offers

    // Objects tab triggers
    function objectsTrigger() {
        var $trigger = $('.m_objects_new .m_tab-triggers a');

        $trigger.on('click', function(){
            $trigger.removeClass('current');
            $(this).addClass('current');
            var i = $(this).index();
            $('.objects-lists').find('.list').removeClass('current');
            $('.objects-lists .mpc_preloader').addClass('show');
            setTimeout(function(){
                $('.objects-lists .mpc_preloader').removeClass('show');
                $('.objects-lists').find('.list').removeClass('current');
                $('.objects-lists').find('.list').eq(i).addClass('current');
            }, 800);
        });
    };
    objectsTrigger();
    // end Objects tab triggers

    // Similar carousel
    function similarCarousel() {
        $('.similar-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            fade: false,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="icon-prev"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="icon-next"></i></button>',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 568,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                  }
                }
              ]
        });
    };
    similarCarousel();
    // end Similar carousel

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-prev"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon-next"></i></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3
              }
            }
        ]
    });
});