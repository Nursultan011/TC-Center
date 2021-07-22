$('.hamburger').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('hamburger_active');
    return;
});

$('.hamburger').click(function () {
    if ($(".header__burger-menu").is(":visible") == true) {
        $('.header__burger-menu').hide();
        $('body').css('overflow', 'auto');
    } else {
        $('.header__burger-menu').show();
        $('body').css('overflow', 'hidden')
        $('.header__link').click(function () {
            $('.header__burger-menu').hide();
            $('body').css('overflow', 'auto');
            $('.hamburger_active').removeClass('hamburger_active');
        });
    }
});