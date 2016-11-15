/**
 * Created by Master on 2016/10/27.
 */
;$(function () {
    $(document).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $(".main-nav").addClass("main-nav-scroll");
        } else {
            $(".main-nav").removeClass("main-nav-scroll");
        }
        ;
        if ($(this).scrollTop() > 700) {
            $("#nav-list").css("top", $(document).scrollTop() - 564 + "px");
        } else {
            $("#nav-list").css("top", "116px");
        }
        ;
    });
 /*每日新品*/
    $(".hotSale-item:odd").css({"margin-right":0,"margin-left":"20px"});
    $(".grounp-page-item:odd").css({"padding-left":"10px","padding-right":"0px"});
    /*明日预告*/
    var tomorrow = $("#tomorrow .tomorrow-column");
    var column = tomorrow.length;
    for(var i=0;i<column;i++){
        if(i%2==0){
            for(var j=3;j<column;j++){
                if(j == 2*i-1){
                    tomorrow.eq(j).addClass("margin-right-zero");
                }
            }
        }
    };
    /*左侧导航栏*/
    var listBar = $("#nav-list .nav-list-bar");
    listBar.click(function () {
        $(this).siblings().removeClass("nav-list-bar-checked");
        $(this).addClass("nav-list-bar-checked");
    });
/*点击回到顶部*/
    $("#return-top").click(function () {
        $("body").animate({"scrollTop":0},2000);
    })
});
