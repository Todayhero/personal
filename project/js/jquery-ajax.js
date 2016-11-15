/**
 * Created by Master on 2016/11/2.
 */
;$(function () {
    /*异步加载地区*/
    $(".header-contact").mouseenter(function () {
        var area = $(".header-area-box")
        if(area.find("li").length!=0){
        }else{
            $.getJSON("../json/area.json", function (response,status,xhr) {
                if (status == "success") {
                    var arr = response;
                    for (var i = 0; i < arr.length; i++) {
                        var li = $("<li></li>");
                        var english = $("<span class='english'>" + arr[i].english + "</span>");
                        var list = arr[i].list;
                        $(li).append(english);
                        for (var j = 0; j < list.length; j++) {
                            var span = $("<span class='area'>" + list[j] + "</span>");
                            span.click(function () {
                                $(".header-contact").find(".header-province").find("a").html($(this).html());
                                $(this).css({background:"#f10582",color:"white"}).attr("flag","true");
                                $(this).siblings().css({background:"white",color:"#777"}).removeAttr("flag");
                                $(this).parent().siblings().find(".area").css({background:"white",color:"#777"}).removeAttr("flag");
                            });
                            span.mouseover(function () {
                                if(!$(this).attr("flag"))$(this).css("color","#f10582");
                            });
                            span.mouseout(function () {
                                if(!$(this).attr("flag"))$(this).css("color", "#777");
                            });
                            $(li).append(span);
                        }
                        area.append(li);
                    }
                    area.find("li:nth-child(3)").find(".area").css({background:"#f10582",color:"white"}).attr("flag","true");;
                }
            })
        }
    });
    //导航 更多 异步加载 的图片
    $(".nav").find("#more").mouseenter(function () {
//        if(!$(this).find("#more-item").attr("flag"))$(this).loadImg();
        $(this).find("#more-item").css("display","block");
    });
    $(".nav").find("#more").mouseleave(function () {
        $(this).find("#more-item").css("display","none");
    });
    var oMore = $(".nav").find("#more").find("#more-item").find("li");
    oMore.click(function () {
        open($(this).find("a").attr("href"));
    });
});