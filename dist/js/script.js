$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu').toggleClass('_active');
        $('body').toggleClass('lock');
    });
    $('.link').click(function(event) {
        let elem = event.target;

        if ($(elem).hasClass("link-btn") || $(elem)[0].tagName == 'IMG' || $(elem).hasClass("link")) {
            $(elem).closest(".link").toggleClass('_active');
            $(elem).closest(".link").siblings(".text-block").toggleClass("_active");
            $(elem).closest(".item-spaces__img").toggleClass("_active");
            $(elem).closest(".item-spaces__img").siblings(".item-spaces__name").toggleClass("_active");
        }
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
        arrows: true,
        // dots: true,
        // autoplay: true,
        // autoplaySpeed: 6000,
    });
});