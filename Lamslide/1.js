
$(document).ready(function () {

    /* Code cho nut next */
    $('.next').click(function (e) {
        //Code cho phan addClass ban dau
        e.preventDefault();
        var sau = $(".active").next();
        //xu ly phan nut
        var vitri = $(".xanh").index() + 1;
        //Cho tat ca nut xoa class nay di
        $('.nutslide ul li').removeClass("xanh");
        if (vitri == $('.nutslide ul li').length) {
            vitri = 0;
        }
        //Cho hien tai add Class xanh
        $(".nutslide ul li:nth-child(" + (vitri + 1) + ")").addClass('xanh');


        //Xu ly phan slide
        if (sau.length == 0) {
            console.log(sau.length);
            $(".active").addClass("bien-mat-o-ben-trai").one('webkitAnimationEnd', function (e) {
                $(".bien-mat-o-ben-trai").removeClass("bien-mat-o-ben-trai");
            });
            $('.nutslide ul li').removeClass("xanh");
            //Cho hien tai add Class xanh
            $(".nutslide ul li:nth-child(" + (vitri + 1) + ")").addClass('xanh');
            $(".anhslide ._1slide:first-child").addClass("active").addClass("di-vao-o-ben-phai").one('webkitAnimationEnd', function (e) {
                $(".active").removeClass("active");
                $(".di-vao-o-ben-phai").addClass("active").removeClass("di-vao-o-ben-phai");
            });/* Cach cua vu
            $('.nutslide ul li').removeClass("xanh");
            //Cho hien tai add Class xanh
            $(".nutslide ul li:first-child").addClass('xanh'); */
        }
        else {
            $(".active").addClass("bien-mat-o-ben-trai").one('webkitAnimationEnd', function (e) {
                $(".bien-mat-o-ben-trai").removeClass("bien-mat-o-ben-trai");
            });
            sau.addClass("di-vao-o-ben-phai").one('webkitAnimationEnd', function (e) {
                $(".active").removeClass("active");
                $(".di-vao-o-ben-phai").addClass("active").removeClass("di-vao-o-ben-phai");
            });
        }
    });

    $('.prev').click(function (e) {
        e.preventDefault();
        var truoc = $(".active").prev();
        console.log('Day la truoc: ' + truoc.length);
        //tinh vitri
        var vitri = $('.xanh').index() + 1;
        //Xoa va them xanh

        $('.nutslide ul li').removeClass("xanh");
        //Cho hien tai add Class xanh
        if (vitri == 1) {
            vitri = $('.nutslide ul li').length + 1;
        }
        $('.nutslide ul li:nth-child(' + (vitri - 1) + ')').addClass('xanh');
        if (truoc.length == 1) {

            $(".active").addClass("bien-mat-o-ben-phai").one('webkitAnimationEnd', function (e) {
                $(".bien-mat-o-ben-phai").removeClass("bien-mat-o-ben-phai");
            });
            truoc.addClass("di-vao-o-ben-trai").one('webkitAnimationEnd', function (e) {
                $(".active").removeClass('active');
                $(".di-vao-o-ben-trai").addClass("active").removeClass("di-vao-o-ben-trai");
            });/* Cach cua vu
            //Xoa va them xan
            $('.nutslide ul li').removeClass("xanh");
            //Cho hien tai add Class xanh
            $('.nutslide ul li:last-child').addClass('xanh'); */
        }
        else {
            $(".active").addClass("bien-mat-o-ben-phai").one('webkitAnimationEnd', function (e) {
                $(".bien-mat-o-ben-phai").removeClass("bien-mat-o-ben-phai");
            });
            $(".anhslide ._1slide:last-child").addClass("di-vao-o-ben-trai").one('webkitAnimationEnd', function (e) {
                $(".active").removeClass('active');
                $(".di-vao-o-ben-trai").addClass("active").removeClass("di-vao-o-ben-trai");
            });
        }
    });
    //Code cho nut
    $('.nutslide ul li').click(function (e) {
        e.preventDefault();
        //Cho tat ca nut xoa class nay di
        $('.nutslide ul li').removeClass("xanh");
        //Cho hien tai add Class xanh
        $(this).addClass('xanh');

        $(".active").addClass("bien-mat-o-ben-phai").one('webkitAnimationEnd', function (e) {
            $(".bien-mat-o-ben-phai").removeClass("bien-mat-o-ben-phai");
        });
        //Cho slide tiep theo di vao
        $(".anhslide ._1slide:nth-child(" + ($(this).index() + 1) + ")").addClass("di-vao-o-ben-trai").one('webkitAnimationEnd', function (e) {
            $(".active").removeClass('active');
            $(".di-vao-o-ben-trai").addClass("active").removeClass("di-vao-o-ben-trai");
        });
    });
    /* //cach 2: Dung index
    $('.nutslide ul li').click(function (e) {
        //Cho slide hien tai bien mat

    }); */

    /*Cach 1 : Danh so thu tu tu 1 - 4
    $('.nutslide ul li:nth-child(3)').click(function (e) {
        $(".active").addClass("bien-mat-o-ben-phai").one('webkitAnimationEnd', function (e) {
            $(".bien-mat-o-ben-phai").removeClass("bien-mat-o-ben-phai");
        });
        $("._1slide:nth-child(3)").addClass("active").addClass("di-vao-o-ben-trai").one('webkitAnimationEnd', function (e) {
            $(".active").removeClass('active');
            $(".di-vao-o-ben-trai").addClass("active").removeClass("di-vao-o-ben-trai");
        });
    }); */

    var tG = setInterval(() => {
        $('.carousel-control-next').trigger('click');
    }, 3000);
    $('.carousel-control-next').click(function (e) {
        e.preventDefault();
        clearInterval(tG)
    });

});