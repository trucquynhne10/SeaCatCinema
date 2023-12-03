$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>100) {
            $('.nav-menu-wrapper').addClass('sticky')
        }
        else{
            $('.nav-menu-wrapper').removeClass('sticky')
        }
    })
})