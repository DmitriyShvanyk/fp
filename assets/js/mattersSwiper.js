(function () {

    'use strict';

    // swiper
    function initSwiper() {
        const swiperEl = document.querySelector('.swiper')

        if (!swiperEl) return

        new Swiper('.matters__swiper', {
            direction: 'vertical',
            loop: true,
            centeredSlides: true,
            centerInsufficientSlides: true,
            slidesPerView: 3,
            initialSlide: 3,
            speed: 800,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            spaceBetween: 20,
        });

    }

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            initSwiper();
        }, 1000);
    });

})();