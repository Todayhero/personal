/**
 * Created by Master on 2016/11/2.
 */
;$(function () {
    var username = $("#u_login_name");
    var password = $("#J_login_pwd");
    var submit = $(".u-form-btn");
    username.val(getCookie("username"));
    password.val(getCookie("password"));
    if(username.val()!=""&&password.val()!=""){
        setTimeout(function () {
            submit.click();
        },3000);
    }
    submit.click(function () {
        if(username.val()=="admin123"&&password.val()=="admin123"){
            var date = new Date();
            date.setDate(date.getDate()+10);
            setCookie("username",username.val(),date);
            setCookie("password",password.val(),date);
            open("success.html");
        }
    });
});