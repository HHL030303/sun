	var username =$('.username').find('input');
	var password =$('.password').find("input");
	var login_btn =$('.login_btn');
	var use,pas;
//	var url =window.location.href.split("?")[1].split("&");
	var url =window.location.href.split("?")[1];
	if(url){
		use =url.split("&")[0].split("=")[1];
	    pas =url.split("&")[1].split("=")[1];
	    username.val(use);
		password.val(pas);
	}
	
	var i =3;
//点击登录按钮
login_btn.on('click','#login_btn',function(e){
		var usernameValue =username.val();
		var passwordValue =password.val();
		var reg =/^1[34578]\d{9}$/;
		if(usernameValue&&passwordValue){
			if(localStorage.getItem("username_"+usernameValue)==usernameValue&&localStorage.getItem("password_"+passwordValue)==passwordValue){
				
			}
			else{
					$('.hidebox').show();
					$('.hidebox').find("dl dd").html("用户名或者密码错误");
					setTimeout(function(){
						$('.hidebox').hide();
					},1500);
					return false
			}
				
		}else{
			$('.hidebox').show();
			$('.hidebox').find("dl dd").html("请完善你的登录信息");
			setTimeout(function(){
				$('.hidebox').hide();
			},1500);
			return false
		};
		timer=setInterval(function(){
			$('.hidebox').show();
			$('.hidebox').find("dl dt").addClass("success");
			$('.hidebox').find("dl dd").html("登录成功,"+i+"s后自动跳转个人页面");
				i--;
				console.log(i);
				if(i==0){
					i=3;
				}
		},1000)
		setTimeout(function(){
			$('.hidebox').hide();
			mui.openWindow("mine.html?");
			clearInterval(timer);
			i=3;
			$('.hidebox').find("dl dt").removeClass("success");
			plus.webview.close();
		},4000)	
		
	})
			
