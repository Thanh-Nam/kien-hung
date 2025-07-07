// Open menu mobile
$('.l-header__bar').on('click', () => {
    $('.l-header__mobile-wrap').addClass('open');
});
$('.l-header__mobile-close').on('click', () => {
    $('.l-header__mobile-wrap').removeClass('open');
});

$('.l-header__mobile-wrap .c-button').on('click', () => {
    $('.l-header__mobile-wrap').removeClass('open');
});

// Slide Banner
const progressCircle = document.querySelector(".p-slider__progress svg");
const progressContent = document.querySelector(".p-slider__progress span");
var swiper = new Swiper(".p-slider__banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".p-slider__pagination",
        clickable: true
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});

// Slider Interior
var swiper = new Swiper(".p-interior__list", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    pagination: {
        el: ".p-interior__pagination",
        clickable: true,
    },
    breakpoints: {
        '768': {
            slidesPerView: 3,
        },
        '1024': {
            slidesPerView: 4,
        }
    }
});

// Toggle slide
$(document).ready(function () {
    $('.p-question__content').hide();
    $('.p-question__title').on('click', function () {
        $(this).next('.p-question__content').stop().slideToggle(300);
        $(this).toggleClass('open');
    });

    $('.l-header__mobile-wrap > ul > li > ul').hide();
    $('.l-header__mobile-wrap > ul > li > a > button').on('click', function (e) {
        e.preventDefault();
        $(this).closest('a').next('ul').stop().slideToggle(300); // Tìm ul ngay sau thẻ a
        $(this).parent().toggleClass('open');
    });
    $('.l-header__mobile-wrap > ul > li > ul > li > ul').hide();
    $('.l-header__mobile-wrap > ul > li > ul > li > a > button').on('click', function (e) {
        e.preventDefault();
        $(this).closest('a').next('ul').stop().slideToggle(300);
        $(this).parent().toggleClass('open');
    });
});

// Slider Feedback
var swiper = new Swiper(".p-feedback__list", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".p-feedback__next",
        prevEl: ".p-feedback__prev",
    },
    breakpoints: {
        '768': {
            slidesPerView: 2,
        },
        '1024': {
            slidesPerView: 3,
        }
    }
});

// Fixed header
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('.l-header').addClass('l-header--fixed');
    } else {
        $('.l-header').removeClass('l-header--fixed');
    }
});

// Slide partner
var swiper = new Swiper(".p-partner__list", {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        '768': {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        '1024': {
            slidesPerView: 9,
            spaceBetween: 30,
        }
    }
});

// Link form menu
$('.l-header__form-button').on('click', function(e) {
    e.preventDefault();
    const isHome = location.pathname === '/' || location.pathname === '/index.html';
    if (isHome) {
        $('html, body').animate({
            scrollTop: $('#p-form').offset().top - 80
        }, 600);
    } else {
        window.location.href = '/?scroll=form';
    }
});

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('scroll') === 'form') {
        $('html, body').animate({
            scrollTop: $('#p-form').offset().top - 80
        }, 600);
        
        const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
    }
});

