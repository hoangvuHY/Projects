$(document).ready(function () {

    var bodyTop = $('body').scrollTop();
    $(window).scroll(function () {
        var navbarTop = $("#navbarTop").offset().top;
        if (navbarTop > bodyTop) {
            $("#navbarTop").addClass('scrollDown');
        } else {
            $("#navbarTop").removeClass('scrollDown');
        }
    });
    $("#navbarTop .nav-item  .nav-link").click(function (e) {
        e.preventDefault();
        e.preventDefault();
        var href = $(this).attr("href");
        var linkBootslander = $(href).offset().top;
        console.log(linkBootslander);
        $("html").animate({
            scrollTop: linkBootslander - 60
        }, 2000, "easeInOutExpo");
    });

    new WOW().init();


    /* FancyBox */
    $(".linkImageGallery").fancybox({
        openEffect: 'easeInOutExpo',
        closeEffect: 'easeInOutExpo',
    });

    $("button.btn.btn-link.collapsed").click(function (e) {
        console.log("Da click");
        e.preventDefault();
        $("button.btn.btn-link .fa-chevron-down").removeClass("rotateIcon")
        $("button.btn.btn-link .fa-chevron-down").toggleClass('rotateIcon');
    });
});