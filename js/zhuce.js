
$(document).ready(function () {
   function validateForm(){
     if(checkUserName()&&checkPassword()&&checkRepassword()&&checkHobby()&&checkStatus()){
         alert("您已注册成功！");
     }
}
});

//验证用户名（为3~16个字符，且不能包含”@”和”#”字符）
function checkUserName(){
    var name=document.getElementById("username").value.trim();
    var nametest=/^[^@#]{3,16}$/;
    if(!nametest.test(name)){
        document.getElementById("nameInfo").innerHTML="用户名为3~16个字符，且不能包含”@”和”#”字符";
    }else{
        document.getElementById("nameInfo").innerHTML="";
        return true;
    }

}
//验证密码（长度在8个字符到16个字符）
function checkPassword(){
    var password=document.getElementById("password").value.trim();
    //var password=$("#password").value;
    $("#passwordInfo").innerHTML="";
    //密码长度在8个字符到16个字符，由字母、数字和".""-""_""@""#""$"组成
    //var passwordtest=/^[0-9A-Za-z.\-\_\@\#\$]{8,16}$/;
    //密码长度在8个字符到16个字符，由字母、数字和"_"组成
    var passwordtest=/^[0-9A-Za-z_]\w{7,15}$/;
    if(!passwordtest.test(password)){
        document.getElementById("passwordInfo").innerHTML="密码长度必须在8个字符到16个字符之间,由字母数字下划线组成";
    }else{
        document.getElementById("passwordInfo").innerHTML="";
    }
}

//验证校验密码（和上面密码必须一致）
function checkRepassword(){
    var repassword=document.getElementById("repassword").value.trim();
    //校验密码和上面密码必须一致
    if(repassword!==password){
        document.getElementById("repasswordInfo").innerHTML="两次输入的密码不一致";
    }else if(repassword==password){
        document.getElementById("repasswordInfo").innerHTML="";
    }
}

//验证手机号码(以一开头的十一位纯数字)
function checkPhone(){
	var phone=document.getElementById("phone").value.trim();
	var phonetest=var reg = /^1[0-9]{10}$/;
	if(!phonetest.test(phone)){
		document.getElementById("phoneInfo").innerHTML="号码必须是以一开头的十一位数字";
	}else{
		document.getElementById("phoneInfo").innerHTML="";
		return true;
	}
}
