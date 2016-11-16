$(function(){
	//主体的导航切换样式
	var flag = false;
	$("#c-inner-h-t").find("li").on({
		"mouseover":function(){
			$(this).siblings().css({"background":"#cdcdcd"});
			$(this).css({"background":"#dd4012"});
			$(this).siblings().find("a").css({"color":"#333"});
			$(this).find("a").css({"color":"#fff"});
		},
		"mouseout":function(){
			$(this).css({"background":"#cdcdcd"});
			$(this).find("a").css({"color":"#333"});
		},
		"click":function(e){
			e.stopPropagation();
			e.preventDefault();
			var index = $(this).index();
			$(".c_inner_body").eq(index).siblings().css("display","none");
			$(".c_inner_body").eq(index).css("display","block");
			flag = true;
		}
	});


})