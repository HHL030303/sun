		var count = 0;
			function pullupRefresh() {
				setTimeout(function() {
					datOper();
					openNewWindow();
//					alert('你第'+count+'次下拉刷新')
					getInfo(2);	
					mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 6)); //参数为true代表没有更多数据了。
					
					
				}, 1500);
			}
//			if (mui.os.plus) {
//				mui.plusReady(function() {
//					setTimeout(function() {
//						mui('#pullrefresh').pullRefresh().pullupLoading();
//					}, 1000);
//
//				});
//			} else {
//				mui.ready(function() {
//					mui('#pullrefresh').pullRefresh().pullupLoading();
//				});
//			}

	var arr1=[];
	var arr2 =[];
	var arr3=[];
			
//		setTimeout(getInfo(20),1000);
		window.setTimeout(function(){
			datOper();
			openNewWindow();
			getInfo(4);	
			
		},1000)
				function getInfo(num){
						mui.ajax({
							type:"get",
							dataType:"jsonp",
							url:"goods.json",
							async:true,
							success:function(data){
									var data =JSON.parse(data);
									var datalength =$(".main_goods").length;
									for(var i=datalength;i<datalength+num;i++){
										if(datalength+num>data.length){
											return 
										}
									 goods_div =$('<div class="main_goods clearfix"><div class="goods_left left"><img src='+data[i].imgList+'></div><div class="goods_right right"><p class="clearfix"><span class="left mallName" data-id="'+(data[i].dataId)+'">'+data[i].title+'</span><span class="right mallPos">'+data[i].location+'m'+'</span></p><p class="priceP"><span>￥:</span><span class="price">'+data[i].price+'</span></p><div class="clearfix third"><p class="left"><span class="peis">免费配送</span><span class="sale">已售<em>'+data[i].sale+'</em></span></p><p class="right"><span class="remove hidden">-</span><span class="Nums hidden">0</span><span class="add">+</span></p></div></div></div>')
										$('.container').append(goods_div);
										arr1[i] =data[i].title;
										arr2[i] =data[i].price;
										
									}
									return arr1;arr2
									},
							error:function(xhr,type,errorThrown){
								console.log(type);
							},
							
							
							});
//				mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
						
					};
				//数据处理	
			function datOper(){
				var goods_left =document.querySelectorAll(".goods_left");
				var goods_right =document.querySelectorAll(".goods_right");
//					var height =document.getElementsByClassName("goods_right")[0].clientHeight;
//					Array.prototype.forEach.call(goods_left,function(el,i){
//							el.style.height= height+'px';
//					});
				
				
				$('.goods_right').find('.remove').each(function(i,o){
					o.onclick =function(){
						var input_value =$(this).parent(".right").find('.Nums').html();
							if(input_value<=1){
							$(this).parent('.right').find(".hidden").css("visibility","hidden");
								}else{
								remove($(this))
							};
						amountremove($(this))
					}
				})
				var flag =true;
				$('.goods_left').find('img').each(function(i,o){
					o.onclick =function(){
						var id =$(this).parents('.main_goods').find('.mallName').attr("data-id")
						return id
					}
				})
				
//			$('.goods_right').find('.add').bind("tap",function(){
//					var $this=$(this);
//					var beforeNum =$this.parent('.right').find('.Nums').html();
//					var price =$this.parents('.goods_right').find('.price').html();
//					var beforeAmount =Math.floor(beforeNum*price);
//					var header_height =$('header').height();
//					var nav_height =$('#segmentedControl').height();
//					var hide_height =$('.hide_bottom').height();
//					var header_height =$('header').height();
//					var nav_height =$('#segmentedControl').height();
//					var hide_height =$('.hide_bottom').height();
//					var windowHeight =$(window).height();
//					$('.hide_bottom').css({"display":"block"});
//					$('.hide_bottom').find('.addcar_check').removeClass('gray')
//					$('.container_wrap').css("height","400px")
//					$(this).parent('.right').find(".hidden").css("visibility","visible");
//					Calc($(this));
//					amount($(this),beforeAmount);
//					}


					$('.goods_right').find('.add').each(function(i,o){
						o.onclick =function(){
							var $this=$(this);
							var beforeNum =$this.parent('.right').find('.Nums').html();
							var price =$this.parents('.goods_right').find('.price').html();
							var beforeAmount =Math.floor(beforeNum*price);
							var header_height =$('header').height();
							var nav_height =$('#segmentedControl').height();
							var hide_height =$('.hide_bottom').height();
							var header_height =$('header').height();
							var nav_height =$('#segmentedControl').height();
							var hide_height =$('.hide_bottom').height();
							var windowHeight =$(window).height();
							$('.hide_bottom').css({"display":"block"});
							$('.hide_bottom').find('.addcar_check').removeClass('gray')
							$('.container_wrap').css("height","400px")
							$(this).parent('.right').find(".hidden").css("visibility","visible");
							Calc($(this));
							amount($(this),beforeAmount);
						}
					})
				//数量的加减
				function Calc(el,amount){
						var input_value =el.parent(".right").find('.Nums').html();
						input_value++;
						el.parent(".right").find('.Nums').html(input_value);
						var dataID =el.parents('.goods_right').find('.mallName').attr('data-id');
						var dataName =el.parents('.goods_right').find('.mallName').text();
					
					if(localStorage.getItem("goodsitem_"+dataID)){
						var i =localStorage.getItem("goodsitem_"+dataID);
						localStorage.setItem("goodsitem_"+dataID,(i*1)+(1*1));
					}else{
						localStorage.setItem("goodsitem_"+dataID,1);
					};
					
						if(input_value){
							arr3[arr3.length] =dataID;
							arr3=arr3.only();
							return arr3
						}
				};

//			function Calc(el,amount){
//				el.each(function(i,o){
//					var input_value =$(this).parent(".right").find('.Nums').html();
//					input_value++;
//					alert(input_value);
//					$(this).parent(".right").find('.Nums').html(input_value);
//					var dataID =$(this).parents('.goods_right').find('.mallName').attr('data-id');
//					var dataName =$(this).parents('.goods_right').find('.mallName').text();
//					if(localStorage.getItem("goodsitem_"+dataID)){
//						var i =localStorage.getItem("goodsitem_"+dataID);
//						localStorage.setItem("goodsitem_"+dataID,(i*1)+(1*1));
//					}else{
//						localStorage.setItem("goodsitem_"+dataID,1);
//					};
//						if(input_value){
//							arr3[arr3.length] =dataID;
//							arr3=arr3.only();
//							return arr3
//						}
//					
//				})
//			}
			
				function remove(el){
					var input_value =el.parent(".right").find('.Nums').html();
						input_value--;
						el.parent(".right").find('.Nums').html(input_value);
						var dataID =el.parents('.goods_right').find('.mallName').attr('data-id');
						var i =localStorage.getItem("goodsitem_"+dataID);
						localStorage.setItem("goodsitem_"+dataID,(i*1)-(1*1));
						if(input_value){
							arr3[arr3.length] =dataID;
							arr3=arr3.only();
							return arr3
						}
				};
				//总金额的加
				function amount(el,amount){
					var beforeAmount =  Number($('.addcar_goods_btn').find('.addcar_amount').find('em').html());
					var nums =el.parent('.right').find(".Nums").html();
					var prices =el.parents('.goods_right').find(".priceP .price").html();
					var nowAmount =$('.addcar_goods_btn').find('.addcar_amount').find('em');
					nowAmount.html(Number(prices)+beforeAmount)
				}
				//总金额的减
				function amountremove(el){
					var beforeAmount =  Number($('.addcar_goods_btn').find('.addcar_amount').find('em').html());
					var nums =el.parent('.right').find(".Nums").html();
					var prices =el.parents('.goods_right').find(".priceP .price").html();
					var nowAmount =$('.addcar_goods_btn').find('.addcar_amount').find('em');
					nowAmount.html(beforeAmount-Number(prices))
				};
				//清空购物车
					$('.hide_bottom').on('tap',".delete",function(){
					var	arr3=null;
						$(this).parents('.hide_bottom').find('.addcar_amount em').html(0);
						$(this).parents('.hide_bottom').find('.addcar_check').addClass('gray')
						$('.goods_right').find('.Nums').html(0)
						$('.goods_right').find(".hidden").css("visibility","hidden");
						for(var i=0;i<50;i++){
							localStorage.removeItem("goodsitem_"+i);
						};
					});
			};
				//跳转页面
			function openNewWindow(){
				$('.addcar_check').on('tap','a',function(e){
					if($(this).parent('.addcar_check ').hasClass("gray")){
						return 
					}else{
						var href =$(this).attr("data-href");
						$('.third').find('.Nums').html(0);
						$('.third').find('.hidden').css('visibility','hidden');
						$('.addcar_amount').find('em').html("");
						$('.hide_bottom').hide();
						var data =new Date();
						var year =data.getFullYear();  //年份
						var month =data.getMonth()+1;
						var day =data.getDate();
						var hours =data.getHours()>10? data.getHours():'0'+data.getHours();
						var min =data.getMinutes()>10?data.getMinutes():'0'+data.getMinutes();
//						var params ={"name":['煌上煌米饭','黄焖鸡米饭','油焖大虾皇','洪湖大闸蟹','潜江小龙虾','武汉周黑鸭'],"value":[145.00,4.50,25.00,223.00,45.00,125.00],"time":[year,month,day,hours,min]};
						var params ={arr1:arr1,arr2:arr2,"time":[year,month,day,hours,min],arr3:arr3};
							mui.openWindow({
								url:href,
								extras:params
							})
					}
				});
			}
				//评论选项卡
			$(".goods_bar").on('tap',"a",function(e){
				if($(this).hasClass('comment_active')){
					}else{
						$(".goods_bar").find('a').removeClass("comment_active")
						 $(this).addClass("comment_active")
					}
					var index =$(this).index();
					$('.goods_wrap').find(".comment").hide().eq(index).show()
				});
					
				//数组去重
				Array.prototype.only = function(){
							 var res = [];
							 var json = {};
							 for(var i = 0; i < this.length; i++){
							  if(!json[this[i]]){
							   res.push(this[i]);
							   json[this[i]] = 1;
							  }
							 }
							 return res;
					};