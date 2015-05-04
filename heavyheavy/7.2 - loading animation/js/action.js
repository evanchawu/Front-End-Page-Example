$(document).ready(function(e) {
    
    $('.loading-bar').css({width: '0px'}).animate({width: '100%'}, 2000, function(e) {
        $('#loading-mask').fadeOut(1200);
    });
    
});