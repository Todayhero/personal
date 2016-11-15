/**
 * Created by Master on 2016/11/7.
 */
;$(function () {
    //    顶部导航栏 轮动固定
    $(document).on("scroll", function () {
        var select = $(".ui-menu-item-wrapper").find(".container > div");
        /*console.log($(this).scrollTop());*/
        var valTop = 624;//新品特卖的位置
        switch (true){
            case $(this).scrollTop()<valTop+select.get(1).offsetTop://相对顶部的高度
                changeCss(1);
                break;
            case $(this).scrollTop()<valTop+select.get(2).offsetTop:
                changeCss(2);
                break;
            case $(this).scrollTop()<valTop+select.get(3).offsetTop:
                changeCss(3);
                break;
            case $(this).scrollTop()<valTop+select.get(4).offsetTop:
                changeCss(4);
                break;
            case $(this).scrollTop()<valTop+select.get(5).offsetTop:
                changeCss(5);
                break;
            case $(this).scrollTop()<valTop+select.get(6).offsetTop:
                changeCss(6);
                break;
            case $(this).scrollTop()<valTop+select.get(7).offsetTop:
                changeCss(7);
                break;
            case $(this).scrollTop()<valTop+select.get(8).offsetTop:
                changeCss(8);
                break;
            case $(this).scrollTop()<valTop+select.get(9).offsetTop:
                changeCss(9);
                break;
            case $(this).scrollTop()<valTop+select.get(10).offsetTop:
                changeCss(10);
                break;
            case $(this).scrollTop()<valTop+select.get(11).offsetTop:
                changeCss(11);
                break;
            case $(this).scrollTop()>valTop+select.get(11).offsetTop:
                $("#nav-list").find("li").eq(11).siblings().removeClass("nav-list-bar-checked");
                $("#nav-list").find("li").eq(11).addClass("nav-list-bar-checked");
                break;
        }
        function changeCss(index) {
            $("#nav-list").find("li").eq(index-1).siblings().removeClass("nav-list-bar-checked");
            $("#nav-list").find("li").eq(index-1).addClass("nav-list-bar-checked");
        }
        /*        console.log(select.eq(0).attr("id")+":"+select.get(0).offsetTop);//0   658
         console.log(select.eq(1).attr("id")+":"+select.get(1).offsetTop);//856 1514
         console.log(select.eq(2).attr("id")+":"+select.get(2).offsetTop);//2199 2857
         console.log(select.eq(3).attr("id")+":"+select.get(3).offsetTop);//3542 4200
         console.log(select.eq(4).attr("id")+":"+select.get(4).offsetTop);//4885 5543
         console.log(select.eq(5).attr("id")+":"+select.get(5).offsetTop);//6288
         console.log(select.eq(6).attr("id")+":"+select.get(6).offsetTop);//7571
         console.log(select.eq(7).attr("id")+":"+select.get(7).offsetTop);//8914
         console.log(select.eq(8).attr("id")+":"+select.get(8).offsetTop);//10257
         console.log(select.eq(9).attr("id")+":"+select.get(9).offsetTop);//11600
         console.log(select.eq(10).attr("id")+":"+select.get(10).offsetTop);//12943
         console.log(select.eq(11).attr("id")+":"+select.get(11).offsetTop);//14286*/

    });
});