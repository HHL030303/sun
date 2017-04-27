var usename =$(".username").find("input");
var passWord =$(".password").find("input");
var cinfirmPass =$('.confirm_pass').find("input");
var login_btn =$('.login_btn').find("input");
var timer1,timer2;
var i=3;
//同意协议  进行下一步
	$('.confirm_xieyi').find(".check").on("click",function(){
		 if($(this).hasClass("bechecked")){
		 	$(this).removeClass("bechecked");
		 	$("section").find('.login_btn input').addClass("btn_blank")
		 }else{
		 	$(this).addClass("bechecked");
		 	$("section").find('.login_btn input').removeClass("btn_blank")
		 }
	});
	//用户名验证
	function checkName(){
		var usernameValue =usename.val();
		if(usernameValue){
			
		}
	}
login_btn.on("click",function(e){
	var usernameValue =usename.val();
	var passValue =passWord.val();
	var confirm_pas =cinfirmPass.val();
	var reg = /^[1][358][0-9]{9}$/;
	if($("section").find('.login_btn input').hasClass("btn_blank")){
		$('.hidebox').show();
				$('.hidebox').find("dl dd").html("请同意协议");
				setTimeout(function(){
					$('.hidebox').hide();
				},1500)
				return false
	}
	if(usernameValue&&passValue&&reg){
		if(!reg.test(usernameValue)){
				$('.hidebox').show();
				$('.hidebox').find("dl dd").html("你输入的账号格式不正确");
				setTimeout(function(){
					$('.hidebox').hide();
				},1500);
				return false
		}
		if(confirm_pas!=passValue){
			$('.hidebox').show();
				$('.hidebox').find("dl dd").html("两次输入的密码不一致");
				setTimeout(function(){
					$('.hidebox').hide();
				},1500)
				return false
		};
		if(confirm_pas.length<6){
			$('.hidebox').show();
				$('.hidebox').find("dl dd").html("密码的长度大于六位");
				setTimeout(function(){
					$('.hidebox').hide();
				},1500)
				return false
		}
		
		timer=setInterval(function(){
				$('.hidebox').show();
					$('.hidebox').find("dl dt").addClass("success");
				$('.hidebox').find("dl dd").html("注册成功,"+i+"s后自动跳转登陆页面");
				localStorage.setItem("username_"+usernameValue,usernameValue);
				localStorage.setItem("password_"+passValue,passValue)
					i--;
					if(i==0){
						i=3
					}
			},1000)
			setTimeout(function(){
				$('.hidebox').hide();
				mui.openWindow("login.html?username="+usernameValue+"&password="+passValue);
				clearInterval(timer);
				i=3;
				$('.hidebox').find("dl dt").removeClass("success");
			},4000)	
	}else{
			$('.hidebox').show();
			$('.hidebox').find("dl dd").html("请完善你的注册信息");
			setTimeout(function(){
				$('.hidebox').hide();
			},1500);
			return false;
	}
	
})
