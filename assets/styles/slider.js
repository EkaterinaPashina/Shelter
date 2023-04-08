const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 90,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});