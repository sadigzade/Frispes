$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu').toggleClass('_active');
        $('body').toggleClass('lock');
    });
});