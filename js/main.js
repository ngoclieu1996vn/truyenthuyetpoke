(function($) {
    "use strict";
    //Check element in viewport
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $(document).ready(function() {
        // var $menuIcon = $('.menu-humburgur-icon'),$header = $('#header');
        // $menuIcon.on('click',function(e){
        // 	$(this).toggleClass('open');
        // 	let target = $(this).data('target');
        // 	$header.toggleClass('header--open');
        // 	$(target).slideToggle();
        // })
        // $('.menu-close').on('click',function(e){
        //     e.preventDefault();
        //     let target = $(this).attr('href');
        //     console.log(target)
        //     $(target).slideToggle();
        // });

        $('.main-slider').slick({
            // nextArrow: $(".core-values__arrow--right"),
            // prevArrow: $(".core-values__arrow--left"),
            dots: true,
            arrows: false,
            autoplay: true,
            fade: true,
        })
        

    });


})(jQuery);