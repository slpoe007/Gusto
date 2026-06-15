$(function(){
    $(".dropdown").click(function(){
        $(this).children('.dropdown-menu').toggle();
    })
    $(".navbar-toggler").click(function(){
        $('.navbar-collapse').toggle();
    })

    var swiper = new Swiper('.swiper-container-banner', {
        pagination: {
            el: '.swiper-pagination-banner',
            clickable: true
        },
        autoplay:true
    });
    var swiper1 = new Swiper('.swiper-container-xinwen', {
        pagination: {
            el: '.swiper-pagination-xinwen',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        autoplay:true
    });
    var galleryThumbs = new Swiper('.gallery-thumbs1', {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top1', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-chanpin',
            clickable: true,
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    var galleryThumbs1 = new Swiper('.gallery-thumbs-fuwu1', {
        spaceBetween: 10,
        slidesPerView: 6,
        loop: true,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop1 = new Swiper('.gallery-top-fuwu1', {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: galleryThumbs1
        }
    });
    var galleryThumbs2 = new Swiper('.gallery-thumbs-fuwu2', {
        spaceBetween: 10,
        slidesPerView: 6,
        loop: true,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop2 = new Swiper('.gallery-top-fuwu2', {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: galleryThumbs2
        }
    });
    var galleryThumbs3 = new Swiper('.gallery-thumbs-fuwu3', {
        spaceBetween: 10,
        slidesPerView: 6,
        loop: true,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop3 = new Swiper('.gallery-top-fuwu3', {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: galleryThumbs3
        }
    });
    var galleryThumbs_g1 = new Swiper('.gallery-thumbs-guanyu1', {
        spaceBetween: 10,
        slidesPerView: 10,
        loop: true,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop_g1 = new Swiper('.gallery-top-guanyu1', {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: galleryThumbs_g1
        }
    });
    var galleryThumbs_g2 = new Swiper('.gallery-thumbs-guanyu2', {
        spaceBetween: 10,
        slidesPerView: 10,
        loop: true,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop_g2 = new Swiper('.gallery-top-guanyu2', {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: galleryThumbs_g2
        }
    });
    $(window).scroll(function(){
        var scrollTop=$(document).scrollTop();
        if(scrollTop>100){
            $(".header").addClass('top-hide');
            $(".search-box").addClass('top-fix');
            $(".banner-box").addClass('top-mt-38');
        }else{
            $(".header").removeClass('top-hide');
            $(".search-box").removeClass('top-fix');
            $(".banner-box").removeClass('top-mt-38');
        }
    })
    new WOW().init();
})