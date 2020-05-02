$(document).ready(function () {

    var bodyTop = $('body,html').scrollTop();
    $(window).scroll(function () {
        var navbarTop = $("#navbarTop").offset().top;
        if (navbarTop > bodyTop) {
            $("#navbarTop").addClass('scrollDown');
        } else {
            $("#navbarTop").removeClass('scrollDown');
        }
    });
});