(($, window, document, undefined) => {
  $(() => {
    function initHeaderSlider() {
      $('.header__slider').slick({
        asNavFor: '.header__slider-nav',
        prevArrow: '<div class="slider-nav-prev"><svg viewBox="0 0 48 48"><rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)" fill="#171717"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0607 23.9999L27.5303 29.4696L26.4697 30.5303L19.9393 23.9999L26.4697 17.4696L27.5303 18.5303L22.0607 23.9999Z" fill="white"/></svg></div>',
        nextArrow: '<div class="slider-nav-next"><svg viewBox="0 0 48 48"><rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)" fill="#171717"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0607 23.9999L27.5303 29.4696L26.4697 30.5303L19.9393 23.9999L26.4697 17.4696L27.5303 18.5303L22.0607 23.9999Z" fill="white"/></svg></div>',
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        fade: true,
      });
      $('.header__slider-nav').slick({
        asNavFor: '.header__slider',
        infinite: true,
        arrows: false,
        speed: 700,
        slidesToShow: 2,
        focusOnSelect: true,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 4000,
        mobileFirst: true,
        responsive: [{
            breakpoint: 1024,
            settings: "unslick"
          },
          {
            breakpoint: 1025,
            settings: {
              asNavFor: '.header__slider',
              infinite: true,
              arrows: false,
              speed: 700,
              slidesToShow: 2,
              focusOnSelect: true,
              autoplay: true,
              rtl: true,
              autoplaySpeed: 4000,
            }
          },
        ]
      });
      $('.header__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        let ind = $('.slick-active').data('slick-index') + 1;
        $('.current-slider').hide(200, function () {
          $(this).show(300).text('0' + ind)
        });
      });
    }

    function initCategorySlider() {

      $('.category__slider').slick({
        infinite: false,
        prevArrow: '<div class="category-arrow-prev"><svg viewBox="0 0 48 48"><rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0607 23.9999L27.5303 29.4696L26.4697 30.5303L19.9393 23.9999L26.4697 17.4696L27.5303 18.5303L22.0607 23.9999Z" fill="white"/></svg></div>',
        nextArrow: '<div class="category-arrow-next"><svg viewBox="0 0 48 48"><rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0607 23.9999L27.5303 29.4696L26.4697 30.5303L19.9393 23.9999L26.4697 17.4696L27.5303 18.5303L22.0607 23.9999Z" fill="white"/></svg></div>',
        speed: 700,
        slidesToShow: 4,
        responsive: [{
            breakpoint: 962,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      });

      $('.category-arrow-prev').css('opacity', '0.3')
      $('.category__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        let last = $('.category__item:last-child').attr('aria-hidden');
        let first = $('.category__item:first-child').attr('aria-hidden');

        if (last == 'false') {
          $('.category-arrow-next').css('opacity', '0.3')
        } else {
          $('.category-arrow-next').css('opacity', '1')
        }

        if (first == 'false') {
          $('.category-arrow-prev').css('opacity', '0.3')
        } else {
          $('.category-arrow-prev').css('opacity', '1')
        }
      });

    }

    function initProductSection() {
      $('.product__slider').slick({
        infinite: true,
        prevArrow: '<div class="product-arrow-prev"><svg viewBox="0 0 48 48"><rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0607 23.9999L27.5303 29.4696L26.4697 30.5303L19.9393 23.9999L26.4697 17.4696L27.5303 18.5303L22.0607 23.9999Z" fill="white"/></svg></div>',
        nextArrow: '<div class="product-arrow-next"><svg viewBox="0 0 48 48"><rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0607 23.9999L27.5303 29.4696L26.4697 30.5303L19.9393 23.9999L26.4697 17.4696L27.5303 18.5303L22.0607 23.9999Z" fill="white"/></svg></div>',
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        swipe: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 962,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 660,
            settings: {
              mobileFirst: true,
              centerMode: false,
              slidesToShow: 1,
            }
          },
        ]
      });

      let $current = $('.product__slider__item.slick-current .item-wrapper');

      $current.children('.product__image').css('transform', 'scale(1.8)');
      $current.children('.product__name').children('h3').css({
        "font-size": "1.37rem",
        "font-family": "'Gilroy-Bold'",
      });
      $current.children('.product__name').children('a').css({
        "opacity": "1",
        "display": "block"
      });
      $current.children('.product__name').css("padding-top", "60px");

      $('.product__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        let $current = $('.product__slider__item.slick-current .item-wrapper');

        $current.children('.product__image').css('transform', 'scale(1.8)');
        $current.children('.product__name').children('h3').css({
          "font-size": "1.37rem",
          "font-family": "'Gilroy-Bold'",
        });
        $current.children('.product__name').children('a').css({
          "opacity": "1",
          "display": "block"
        });
        $current.children('.product__name').css("padding-top", "60px");
      });

      $('.product__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let $regular = $('.product__slider__item.slick-current .item-wrapper');

        $regular.children('.product__image').css('transform', 'scale(1)');
        $regular.children('.product__name').children('h3').css({
          "font-size": "1rem",
          "font-family": "'Gilroy-Semibold'",
        })
        $regular.children('.product__name').children('a').css({
          "opacity": "0",
          "display": "none"
        });
        $regular.children('.product__name').css("padding-top", "0px");
      });
    }

    function initTabs() {
      $('.panel__tab:first-child .panel__tab-text').show('slow');
      $('.panel__tab:first-child h4 svg').css('transform', 'rotate(90deg)')
      $('.panel__tab h4').on('click', function () {
        $('.panel__tab h4').children().css('transform', 'rotate(0deg)');
        $(this).children().css('transform', 'rotate(90deg)');
        $('.panel__tab-text').hide('slow');
        $(this).siblings('.panel__tab-text').show('slow');
      })
    }

    function initMenuSection() {
      let windowInnerWidth = window.innerWidth <= 1024 ? ($('.language a:not(".active")').hide('fast'), $('.language-btn').toggle('fast')) : $('.language a:not(".active")').show('fast');

      $('.language a').on('click', function (event) {
        let windowInnerWidth = window.innerWidth;

        $('.language').children('a').removeClass('active');
        $(event.target).addClass('active');

        windowInnerWidth <= 1024 ? ($(event.target).siblings('a').toggle('fast'), $('.language-btn').toggle('fast')) : console.log('> 1024');

      })

      $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
      })
    }

    function initFooterTabs() {
      let footTab = function () {
        let check = $(this).siblings('ul').css('display')
        if (window.innerWidth > 962) {
          if (check == 'block')($('.footer-tab h3').siblings('ul').show('slow'))
        } else {
          $('.footer-tab ul').hide('slow'),
            $('.footer-tab h3').children().css('transform', 'rotate(0deg)'),

            check == 'block' ? ($('.footer-tab ul').hide('slow')) : ($(this).siblings('ul').show('slow'), $(this).children().css('transform', 'rotate(90deg)'))
        }
      }

      $('.footer-tab h3').on('click', footTab)

      if (window.innerWidth <= 962) $('.footer-tab h3').siblings('ul').hide();
      window.addEventListener('resize', function () {
        window.innerWidth <= 962 ? ($('.footer-tab h3').siblings('ul').hide()) : ($('.footer-tab h3').siblings('ul').show())
      })
    }

    function init() {
      initHeaderSlider();
      initCategorySlider();
      initProductSection();
      initTabs();
      initMenuSection();
      initFooterTabs();
    }

    init();

  });
})(window['jQuery'], window, document);