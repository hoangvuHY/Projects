$(document).ready(function () {
    var bodyTop = $('body').scrollTop();
    $(window).scroll(function () {
        var navbarTop = $("#navbarTempo").offset().top;
        
        if (navbarTop > bodyTop + 10) {
            $("#navbarTempo").addClass("scrollMouseNavbar");
            $("#navbarTempo .navbar-brand").addClass("changeBrandNavbar");
            $("#navbarTempo .nav-item .nav-link").addClass("changeLinkNavbar");

        }
        else {
            $("#navbarTempo").removeClass("scrollMouseNavbar");
            $("#navbarTempo .navbar-brand").removeClass("changeBrandNavbar");
            $("#navbarTempo .nav-item .nav-link").removeClass("changeLinkNavbar");
        }
    });
    $("#navbarTempo .nav-item .nav-link").click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var posElement = $(href).offset().top;
        console.log(posElement);
        $('html').animate({
            scrollTop: posElement - 60
        }, 2000, "easeInOutExpo");
    });
});