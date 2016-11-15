/**
 * Created by Master on 2016/10/28.
 */
;(function ($) {
    $.fn.extend({
        "loadImg":function (){
            var self = this;
                $.getJSON("../json/"+$(this).attr("id")+"-img.json", function (response,status,xhr) {
                    if (status == "success") {
                        var arr = response;
                        var index =0;
                        for(var i=0;i<=arr.length-1;i++){
                            var oA=$("<a href="+arr[index].href+"><img src="+arr[index].src+"></a>");
                            var lis = $(self).find("#"+$(self).attr('id')+"-item").find("li").eq(index);
                            index ++;
                            lis.append(oA);
                        }
                    }
                });
                $(this).find("#"+$(self).attr('id')+"-item").attr("flag","true");
            return this;
        }
    })
})(jQuery);