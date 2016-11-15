/**
 * Created by Master on 2016/11/1.
 */
;$(function () {
    //注册页面验证
    var flag1 = false,flag2 = false,flag3 = false,flag4 = false,flag5 = false;
    var random = null;
    var mobilename = null;
    var postname = $("#u_login_postname");
    var pwd = null;
    var pwd1 = null;
    var mobile = null;//输入验证码框
    var sendInfo = null;//发送验证码
    var registerBtn = $(".u-form-btn");//提交注册按钮
    var postBtn = $(".u-form-submit-post");//切换手机注册还是邮箱注册
    var change = $(".u-form-login");
     mobilename = $(".u_login_mobilename").eq(0);
     pwd = $(".J_login_pwd").eq(0);//密码1
     pwd1 = $(".J_login_pwd1").eq(0);//密码2
     mobile = $(".u-mobile-code").eq(0);//输入验证码框
     sendInfo =$(".u-mobile-verifycode").eq(0);//发送验证码

    postBtn.click(function () {//切换手机注册还是邮箱注册 默认是手机
        switch (change.eq(1).hasClass("u-form-login-hidden")){
            case true:
                change.eq(1).removeClass("u-form-login-hidden");
                change.eq(0).addClass("u-form-login-hidden");
                mobilename = $(".u_login_mobilename").eq(1);
                pwd = $(".J_login_pwd").eq(1);
                pwd1 = $(".J_login_pwd1").eq(1);
                mobile = $(".u-mobile-code").eq(1);
                sendInfo =$(".u-mobile-verifycode").eq(1);
                event();
                break;
            case false:
                change.eq(0).removeClass("u-form-login-hidden");
                change.eq(1).addClass("u-form-login-hidden");
                mobilename = $(".u_login_mobilename").eq(0);
                pwd = $(".J_login_pwd").eq(0);
                pwd1 = $(".J_login_pwd1").eq(0);
                mobile = $(".u-mobile-code").eq(0);
                sendInfo =$(".u-mobile-verifycode").eq(0);
                event();
                break;
        }
    });
    postname.focus(function () {
        if(postname.val() !=""){
        }else{
            $(this).parent().find(".u-form-info").html("请输入你的邮箱帐号");
        }
    });
    postname.blur(function () {
        var reg = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,4})$/ig;
        if(postname.val() !=""){
            if(reg.test(postname.val())){
                $(this).parent().find(".u-form-info").html("恭喜邮箱可用");
                $(this).parent().find(".u-form-info").removeClass("u-form-info-color1");
                $(this).parent().find(".u-form-info").addClass("u-form-info-color2");
                flag5 = true;
            }else{
                $(this).parent().find(".u-form-info").html("请输入正确的邮箱账号");
                $(this).parent().find(".u-form-info").removeClass("u-form-info-color2");
                $(this).parent().find(".u-form-info").addClass("u-form-info-color1");
                flag5 = false;
            }
        }else{
        $(this).parent().find(".u-form-info").html("邮箱不能为空");
        }
    });
    event();
    function event() {
        mobilename.focus(function () {
            if(mobilename.val() !=""){
            }else{
                $(this).parent().find(".u-form-info").html("请输入你的11位手机号");
            }
        });
        mobilename.blur(function(){
            var reg = /^1([0-9]{10})$/ig;
            if(mobilename.val() !=""){
                if(reg.test(mobilename.val())){
                    $(this).parent().find(".u-form-info").html("恭喜手机号可用");
                    $(this).parent().find(".u-form-info").removeClass("u-form-info-color1");
                    $(this).parent().find(".u-form-info").addClass("u-form-info-color2");
                    flag1 = true;
                }else{
                    $(this).parent().find(".u-form-info").html("请输入正确的手机号");
                    $(this).parent().find(".u-form-info").removeClass("u-form-info-color2");
                    $(this).parent().find(".u-form-info").addClass("u-form-info-color1");
                    flag1 = false;
                }
                if(flag1){
                    sendInfo.addClass("cursor");
                    $(".cursor").click(function () {
                        var url = "http://localhost:8080/?action=read&number="+mobilename.val();
                        $.ajax(url);
                        random = parseInt(Math.random()*1000000);
                        alert(random);
                    });
                }else{
                    sendInfo.removeClass("cursor");
                }
            }else{
//            $(this).css({"border":"1px solid #fca1a5","background":"#ffe6e7"});
                $(this).parent().find(".u-form-info").html("手机号不能为空");
            }
        });

        pwd.focus(function () {
            if(pwd.val() !=""){
            }else{
                $(this).parent().find(".u-form-info").html("密码由6-20位字母，数字和符号至少两种以上字符组合，区分大小写");
            }
        });
        pwd.blur(function () {
            var reg = /^\w{6,20}$/ig;
            if(pwd.val()!=""){
                if(reg.test(pwd.val())){
                    $(this).parent().find(".u-form-info").html("密码符合要求");
                    $(this).parent().find(".u-form-info").removeClass("u-form-info-color1");
                    $(this).parent().find(".u-form-info").addClass("u-form-info-color2");
                    flag2 =true;
                    if(pwd.val() == pwd1.val()){
                        flag3 = true;
                    }else{
                        flag3 = false;
                        pwd1.parent().find(".u-form-info").html("密码输入有误");
                        pwd1.parent().find(".u-form-info").removeClass("u-form-info-color2");
                        pwd1.parent().find(".u-form-info").addClass("u-form-info-color1");
                    }
                }else{
                    $(this).parent().find(".u-form-info").html("密码不符合要求");
                    $(this).parent().find(".u-form-info").removeClass("u-form-info-color2");
                    $(this).parent().find(".u-form-info").addClass("u-form-info-color1");
                    flag2 = false;
                }
            }else{
                $(this).parent().find(".u-form-info").html("密码不能为空");
            }
        });
        pwd1.focus(function(){
            if(pwd.val() !=""){
            }else{
                $(this).parent().find(".u-form-info").html("请再次输入确认密码");
            }
        });
        pwd1.blur(function () {
            if(pwd1.val() !="" && pwd1.val() == pwd.val()){
                $(this).parent().find(".u-form-info").html("密码输入一致");
                $(this).parent().find(".u-form-info").removeClass("u-form-info-color1");
                $(this).parent().find(".u-form-info").addClass("u-form-info-color2");
                flag3 = true;
            }else{
                $(this).parent().find(".u-form-info").html("密码输入有误");
                $(this).parent().find(".u-form-info").removeClass("u-form-info-color2");
                $(this).parent().find(".u-form-info").addClass("u-form-info-color1");
                flag3 = false;
            }
        });
        mobile.blur(function () {
            if(mobile.val() !="" && mobile.val() == random){
                flag4 = true;
            }else{
                flag4 = false;
            }
        });
        registerBtn.click(function () {
            if(postname.val()!=""){
                if(flag1&&flag2&&flag3&&flag4&&flag5){
                    open("success.html");
                }
            }else{
                if(flag1&&flag2&&flag3&&flag4){
                    open("success.html");
                }
            }
        });
    };
});
