$(document).ready(function(e) {
    
    //呈現在畫面上的navigation
    // =================================================
    // navigation
    // =================================================
    $(document).scroll(function(e) {
        //e代表.scroll這件事，但現在{}裡面沒用到，就不寫也可以
        //但現在事件要是prapagation 裡面可能就會寫道e.stop 停止就一定要寫 

        var scrollTop = $(document).scrollTop();
        //.scrollTop 就是監聽這件事
        var isShowHeader = 0;
        if(scrollTop >= 90) {
            showHeader();
        }
        else {
            hideHeader();
        }
    });
    
    //原本header區塊沒設位置，是static
    //那fix就是一直在螢幕上什麼位置，
    //依照原本static的位置固定在那邊。
    var showHeader = function() {
        $('#header').css({position: 'fixed'});
    }
    
    var hideHeader = function() {
        $('#header').css({position: 'static'});
    }
    

    
        /*點按鈕 畫面會跳到下面的功能*/
        $('.tab.read').click(function(e) {
       
        var offset = $(this).offset(); 
        //this指 .tab.read 
        //offset.top 就是到上面多少 .~~ 就是到下面多少
        scrollTop = offset.top - 180;//扣掉header高度
        $('body').animate({ scrollTop: scrollTop }); //左邊是屬性 右邊是上一行算出來的
        
    });

    
    
    // =================================================
    // show title
    // =================================================
    $('.portfolio li').mouseenter(function(e) {
        
        $(this).find('img').animate({
            top: '120px'//位置跑到這 往下推
        }, 200);
        
        $(this).find('.title').animate({
            top: '20px' //title 拉到20
        }, 200);
        
    });
   
    $('.portfolio li').mouseleave(function(e) {
       
        $(this).find('img').animate({
            top: '0px'
        }, 200);
        
        $(this).find('.title').animate({
            top: '100px'
        }, 200);
        
    });

});