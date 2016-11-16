/**
 * Created by Master on 2016/11/15.
 */
;$(function () {
    $(".nav_list").find("li").click(function () {
        $(this).addClass("nav_list_check").siblings().removeClass("nav_list_check");
    });
    $(".logo").click(function () {
        open("caseList.html","_parent");
    });
});