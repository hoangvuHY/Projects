$(document).ready(function () {

    var bodyTop = $('body ').scrollTop();

    bodyTop += 50;

    $(window).scroll(function () {

        var navbarTop = $('#navbarDelicious').offset().top;

        console.log(navbarTop);

        if (navbarTop > bodyTop) {

            $('#navbarDelicious').addClass('scrollDown');

        } else {

            $('#navbarDelicious').removeClass('scrollDown');

        }
    });

    // var indexAbout = $("#About").offset().top + 50;
    // console.log(indexAbout);

    $('.nav .nav-item .nav-link').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        // console.log(href);
        var indexHref = $(href).offset().top;
        console.log(indexHref);
        $('html ').animate({
            scrollTop: indexHref - 60
        }, 2000, 'easeInOutExpo');
    });

});
