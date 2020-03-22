$(function () {
    var position = $(window).scrollTop();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            $('header')
            	.stop(true, false)
                .removeClass('main-header-up')
                .addClass('main-header-down');
        } else {
            $('header')
                .stop(true, false)
                .removeClass('main-header-down')
                .addClass('main-header-up');
        }
        position = scroll;
    });
});

$(function(){
    $(".main-header-nav-item").click(function(){
        var items = document.querySelectorAll(".main-header-nav-item"); 
        for(let i=0;i<items.length;i++) $(items[i]).removeClass('main-header-nav-item-current');
        $(this).addClass('main-header-nav-item-current')
    })
});