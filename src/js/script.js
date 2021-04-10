$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu').toggleClass('_active');
        $('body').toggleClass('lock');
    });
    $('.link').click(function(event) {
        $('.link, .item-spaces__name, .item-spaces__img, .text-block').toggleClass('_active');
    })
    $('.introducing-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
    });
    $('.spaces-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        // dots: true,
        // autoplay: true,
        // autoplaySpeed: 6000,
    });
});