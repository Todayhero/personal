/**
 * Created by Master on 2016/11/2.
 */
;$(function () {
    //    banner 透明 自动轮播
    var lis = $("#banner-item").find(".banner-img-item");
    var oBtn = $(".banner-btn").find("li");
    var line = $(".banner-btn-line");
    var lastIndex = lis.length-1;
    var now = 0;
    var target = 0;
    lis.eq(now).stop().fadeTo(15,1);
    lis.eq(now).siblings().stop().fadeTo(15,0);
    oBtn.on("mouseenter", function () {
        lis.eq($(this).index()).stop().fadeTo(500,1);
        lis.eq($(this).index()).siblings().stop().fadeTo(500,0);
        target = parseInt($(this).css("width"))*($(this).index()+1)-100;
        line.animate({left:target+"px"},500);
        now = $(this).index();
    })
    var timer = setInterval(next,2000);
    lis.hover(function () {//over 停止间歇
        clearInterval(timer);
    },function () {//out 启动间歇
        clearInterval(timer);
        timer = setInterval(next,2000);
    })
    oBtn.hover(function () {//over 停止间歇
        clearInterval(timer);
    },function () {//out 启动间歇
        clearInterval(timer);
        timer = setInterval(next,2000);
    })
    function next() {
        if(now < lastIndex){
            now ++;
        }else{
            now = 0;
        }
        target = parseInt(oBtn.eq(now).css("width"))*(now+1)-100;
        lis.eq(now).stop().fadeTo(500,1);
        lis.eq(now).siblings().stop().fadeTo(500,0);
        line.animate({left:target+"px"},500);
    };
});