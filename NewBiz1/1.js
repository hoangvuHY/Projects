$(document).ready(function () {

    /* About */
    new WOW().init();
    /* End about */
    /* Code menu */
    $('body').scrollspy({
        target: '#containerMenu'
    });
    $(window).scroll(function () {
        var posBody = $('body,html').scrollTop();
        if (posBody > 0) {
            $('.menus').addClass("scrollUp");
        }
        else {
            $('.menus').removeClass("scrollUp");
        }
    });

    $("li.nav-item a.nav-link").click(function (e) {
        e.preventDefault();
        var attr = $(this).attr('href');
        var posAttr = $(attr).offset().top -58;
        $('html').animate({
            scrollTop: posAttr,
        }, 1000, 'easeInExpo')
    });
    /* End menu */
});