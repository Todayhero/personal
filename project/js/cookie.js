/**
 * Created by Master on 2016/10/9.
 */
//设置cookie
function setCookie(name,value,date,path,domain,secure) {
    var str="";
    if(name==""||value==""){

    }else{
        str +=name+"="+value;
        if(date instanceof Date){
            str += ";expires="+date;
        }
        if(path){
            str += ";path="+path;
        }
        if(domain){
            str +=";domain="+domain;
        }
        if(secure){
            str +=";secure";
        }
    }
    document.cookie=str;
}
//获取cookie
function getCookie(name){
    var str=document.cookie;
    var reg=/\s/ig;
    str=str.replace(reg,"");
    var arr=str.split(";");
    for(var i=0;i<arr.length;i++){
        var arr1=arr[i].split("=");
        if(arr1[0]==name){
            return arr1[1];
        }
    }
    return "";
}
//移除cookie
/*function removeCookie(name){
    document.cookie=name+"=1"+new Date();
}*/
function removeCookie(name,value){
    document.cookie= name + "=" +value+ ";expires=" + new Date();
}