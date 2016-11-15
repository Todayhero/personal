/**
 * Created by Master on 2016/11/3.
 */
;$(function () {/*左右轮播*/
    var uls = $(".lady-banner-item");
    uls.append(uls.find("li:first").clone());/*复制第一个到最后面，保证最后出来的是第一张*/
    uls.prepend(uls.find("li").eq(uls.find("li").length-2).clone());/*复制最后第二张图到最前边*/
//    uls.find("li").eq(1).clone().appendTo(uls);
    var oBtn = $('.lady_trigger_btn');
    var ladyBtn = $(".lady-btn");//点击向左右的按钮
    var leftBtn = $(".lady-btn-left");//向左按钮
    var rightBtn = $(".lady-btn-right");//向右按钮
    var lastIndex = uls.find("li").length-1;//拿到最后一张li的下标
    var index = 0;//第一张banner
    var count = 0;//第一个 按按钮的下标
    oBtn.click(function () {
       index = $(this).index();
        uls.animate({left:(index+1)*(-1920)},1000);
        oBtn.eq(index).addClass("selected").siblings().removeClass("selected");
    });//对应的按钮切换图片
    leftBtn.click(function () {//点击左按钮
        if(parseInt(uls.css("left"))-(-1920) == 0){
            uls.stop().animate({left:0},1000,function () {/*临界判断*/
                $(this).css("left",(lastIndex-1)*(-1920)+"px");
            });
            oBtn.eq(oBtn.length-1).addClass("selected").siblings().removeClass("selected");
        }else{
            uls.stop().animate({left:parseInt(uls.css("left"))+1920},1000);
//            console.log(parseInt(uls.css("left"))/(-1920)-2);图片与对应按钮之间的关系
            oBtn.eq(parseInt(uls.css("left"))/(-1920)-(oBtn.length-1)).addClass("selected").siblings().removeClass("selected");
        }
    });
    rightBtn.click(function () {//点击右按钮
        if(parseInt(uls.css("left"))+(-1920) == lastIndex*(-1920)){//即将运动到最后一张（复制的第一张）
            uls.stop().animate({left:lastIndex*(-1920)},1000,function () {//运动到最后一张
                $(this).css("left","-1920px");//改变ul的css样式
            });
            oBtn.eq(count).addClass("selected").siblings().removeClass("selected");//对应按钮的class
        }else{
            uls.stop().animate({left:parseInt(uls.css("left"))-1920},1000);
//            console.log(parseInt(uls.css("left"))/(-1920));图片与对应按钮之间的关系
            oBtn.eq(parseInt(uls.css("left"))/(-1920)).addClass("selected").siblings().removeClass("selected");
        }
    });
    var timer = setInterval(next,3000);//启动间歇
    ladyBtn.hover(function () {
        clearInterval(timer);
    },function () {//out 启动间歇
        clearInterval(timer);
        timer = setInterval(next,3000);
    });
    uls.bind({"mouseenter":function () {//over 停止间歇
        clearInterval(timer);
    },"mouseleave":function () {//out 启动间歇
        clearInterval(timer);
        timer = setInterval(next,3000);
    }});
    oBtn.hover(function () {
        clearInterval(timer);
    },function () {//out 启动间歇
        clearInterval(timer);
        timer = setInterval(next,3000);
    });
    /*切换下一张函数方法*/
    function next() {
        if(index < lastIndex){
            index ++;
            uls.animate({left:(index)*(-1920)},1000);
        }else{
            index = 0;
            uls.animate({left:lastIndex*(-1920)},500, function () {//运动到复制的第一张，并执行回调
                $(this).css("left","-1920px");
            });
        }
        oBtn.eq(index).addClass("selected").siblings().removeClass("selected");
    };
});