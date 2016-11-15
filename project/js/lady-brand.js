/**
 * Created by Master on 2016/11/4.
 */
;$(function () {
/*可以筛选选择部分*/
    var choice = $(".pro-soetbar-item").find("a");
    choice.click(function () {
        $(this).addClass("choice-check").parent().siblings().find("a").removeClass("choice-check");
    });
    $(".pro-oper").find("span").click(function () {
        $(this).addClass("change").siblings().removeClass("change");
    });

    /*产品详情页 小图Hover 变成大图*/
    var smallImg = $(".list-slide-imgs").find(".list-slide-small");
    smallImg.on({"mouseenter": function () {
        $(this).addClass("list-slide-small-hover").siblings().removeClass("list-slide-small-hover");
        $(this).parent().parent().find(".pro-wrap-list-item")
            .find(".list-slide-img").find("img").attr("src",$(this).find("img").attr("src"));
    },"mouseleave": function () {
        $(this).removeClass("list-slide-small-hover");
        $(this).parent().find("a:first").addClass("list-slide-small-hover");
        $(this).parent().parent().find(".pro-wrap-list-item")
            .find(".list-slide-img").find("img").attr("src",$(this).parent().find("a:first").find("img").attr("src"))
    }});

    /*更多品牌下面的左右点击*/
    var uls = $(".body-wrap");
    uls.append(uls.find("li:first").clone());/*复制第一个到最后面，保证最后出来的是第一张*/
    uls.prepend(uls.find("li").eq(uls.find("li").length-2).clone());/*复制最后第二张图到最前边*/
    var lastIndex = uls.find("li").length-1;
    $(".reco-con-left").click(function () {
        if(parseInt(uls.css("marginLeft"))-(-940)==0){
            uls.stop().animate({"marginLeft":0},1000, function () {
                uls.css("marginLeft",(lastIndex-1)*(-940)+"px");
            });
        }else{
            uls.stop().animate({"marginLeft":parseInt(uls.css("marginLeft"))-(-940)},1000)
        }
        });/*点击往左滑动*/
    $(".reco-con-right").click(function () {
        if(parseInt(uls.css("marginLeft"))+(-940)==lastIndex*(-940)){
            uls.stop().animate({"marginLeft":lastIndex*(-940)},1000, function () {
                uls.css("margin-left","-940px");
            });
        }else{
            uls.stop().animate({"marginLeft":parseInt(uls.css("marginLeft"))+(-940)},1000);
        }
    });/*点击往右滑动*/

});