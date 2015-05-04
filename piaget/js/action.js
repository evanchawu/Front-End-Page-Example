$(document).ready(function(e) {
    
    // switch nav
    $('#main-nav').mouseenter(function(e) {
        $(this).stop().animate({opacity: 1});
    });
    
    $('#main-nav').mouseleave(function(e) {
        $(this).stop().animate({opacity: 0});
    });

});