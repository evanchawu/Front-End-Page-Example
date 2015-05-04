$(document).ready(function(e) {
    
    $('.photo').click(function(e) {
        $('.photo').eq(0).animate({
            top: '200px', 
            left: '500px'
        }, 800);
        
        $('.photo').eq(1).animate({
            top: '50%', 
            left: '600px'
        }, 800);
        
        $('.photo').eq(2).animate({
            top: '400px', 
            left: '48%'
        }, 800);
        
        $('.photo').eq(3).animate({
            top: '300px', 
            left: '40%'
        }, 800);
    });

});