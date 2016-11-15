/**
 * Created by Master on 2016/11/4.
 */
;$(function () {
    var dayDown = $(".pro-list-time-day");
    var hourDown = $(".pro-list-time-hour");
    var minDown = $(".pro-list-time-min");
    var secDown = $(".pro-list-time-sec");
    var stop = $(".pro-list-time");
    var target = new Date("2016/11/11");
//            target.setSeconds(target.getSeconds()+10);
    var timer = setInterval(function () {
        var now = new Date();
        var result = target.valueOf() - now.valueOf();
//            console.log(result);
        var day = Math.floor(result/(24*60*60*1000));
        var hour = toTwo(Math.floor((result%(24*60*60*1000))/(60*60*1000)));
        var minute = toTwo(Math.floor((result%(60*60*1000))/(60*1000)));
        var second = toTwo(Math.floor((result%(60*1000))/1000));
//            console.log(day);
        dayDown.html(day);
        hourDown.html(hour);
        minDown.html(minute);
        secDown.html(second);
        if(result<=0){
            clearInterval(timer);
            stop.html("活动已结束");
        }
    },20);
    function toTwo(num) {
        return num<10?"0"+num:num;
    }
});