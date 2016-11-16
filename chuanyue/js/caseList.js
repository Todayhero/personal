$(function(){
	$(".case-content-tishi li").click(function(){
		$(".case-content-tishi li").attr("class","");
		$(this).attr("class","tishi-active");
	})
})