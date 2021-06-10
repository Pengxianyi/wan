var login=document.querySelector('[name="login"]'),span=document.getElementById("lg"),inpout=document.querySelector('[name="inp_out"]'),text1=getCookie("name"),bool;text1&&(login.removeAttribute("href"),login.removeAttribute("class"),span.innerHTML=decodeURI(text1)),inpout.onclick=function(){null!=text1&&((bool=confirm("你确定退出账号!"))&&delCookie("name"),window.history.go(0))};var menuBoxs=document.querySelectorAll(".menu_box"),subMenus=document.querySelectorAll(".sub_menu");for(let i=0;i<menuBoxs.length;i++)menuBoxs[i].onmouseenter=function(){subMenus[i].style.display="block"},menuBoxs[i].onmouseleave=function(){subMenus[i].style.display="none"};var pLogos=document.querySelectorAll(".p_logo"),pNames=document.querySelectorAll(".p_name"),navMenu=document.querySelector(".navbar-left-menu"),navlis=navMenu.querySelectorAll("li");for(let j=0;j<navlis.length;j++)navlis[j].onmouseenter=function(){pNames[j].style.display="block",pLogos[j].style.display="none"},navlis[j].onmouseleave=function(){pNames[j].style.display="none",pLogos[j].style.display="block"};var row=document.querySelector(".row"),clearFix=row.querySelector(".clearfix"),pagination=document.querySelector(".pagination"),searchFloor=document.querySelector(".search_floor");async function adc(){var arr=await promiseAjax({url:"../php/list.php"}),str;function sensert(){var a={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,a,a=>{var a=arr.slice(16*(a-1),16*a),s="";a.forEach(a=>{s+=`
			<li class="col-lg-3 col-md-4 row-li">
							<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_img">
								<img class=" lazy-load" src="${a.imp1}">
								<div class="yaofeng">
									<img src="${a.imp2}">
									<span>¥<em class="yaofeng_price">${a.price}</em></span>
								</div>
							</a>
							<div class="goods_txt">
								<p class="tPrc"> <span class="s_price"><em>¥</em>${a.price}</span> 
								<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_name elps2">${a.title}</a>
								<div class="goods_sale">
								<span class="sale_tips elps1">${a.tishi}</span>
								<em class="s_sale_num">${a.number}</em></div>
								<a href="javascript:;" class="s_shop">${a.shops}</a>
								<p class="sale_tags"> <span>${a.link}</span> </p>
								<div class="goods_hover">
									<a href="../pages/details.html?id=${a.wan_id}" class="add_to_keep">查看详情</a>
									<a href="../pages/cart.html?id=${a.wan_id}" class="add_to_cart">加入购物车</a>
								</div>
							</div>
						</li>
			`}),clearFix.innerHTML=s,$(".col-lg-3").mouseenter(function(){$(this).find(".goods_hover").css("display","block")}).mouseleave(function(){$(this).find(".goods_hover").css("display","none")})})}arr=eval("("+arr+")"),arr.forEach(a=>{str=`
		<input type="text" name="sousuo" value="" placeholder="请输入商品" class="logo-sos" />
		<button class="logo-sou">搜索</button>
    <div class="srh_result">
					<div class="select_a"><span>已找到${arr.length}件:</span></div>
				</div>
				<div class="search_filter_line ">
					<div class="srh_catalog srh_block clearfix">
						<span class="srh_title fl">全部分类</span>
						<div class="srh_right clearfix">
							<div class="srh_option fl" id="classify">
								<ul class="clearfix">
									<li class="fl on">
										<a href="javascript:;">腕表</a>
									</li>
									<li class="fl">
										<a href="javascript:;">表带</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="srh_price srh_block clearfix">
						<span class="srh_title fl">价格</span>
						<div class="srh_right clearfix">
							<div class="srh_option fl short">
								<ul class="clearfix">
								    <li class="fl backg">
										<a href="javascript:;">全部</a>
									</li>
									<li class="fl">
										<a href="javascript:;">1000以下</a>
									</li>
									<li class="fl">
										<a href="javascript:;">1000-3000</a>
									</li>
									<li class="fl">
										<a href="javascript:;">3000-5000</a>
									</li>
									<li class="fl">
										<a href="javascript:;">5000-10000</a>
									</li>
									<li class="fl">
										<a href="javascript:;">10000-50000</a>
									</li>
									<li class="fl">
										<a href="javascript:;">50000-100000</a>
									</li>
									<li class="fl">
										<a href="javascript:;">100000以上</a>
									</li>
								</ul>
							</div>
							<div class="price_range">
								<input name="minprice" type="text" size="7" maxlength="9" class="price_input" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"> <span>-</span>
								<input name="maxprice" type="text" size="7" maxlength="9" class="price_input" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');">
								<button type="submit" class="price_btn">确定</button></div>
						</div>
					</div>

					<div class="srh_brand srh_block clearfix">
						<span class="srh_title fl dert">品牌</span>
						<div class="brand_con hot_brand fl">
							<div class="brand_option">
								<div class="srh_option rent">
									<ul class="clearfix">
									    <li class="fl backg">
										   <a href="javascript:;">全部</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">库尔沃</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">欧米茄</a>
										</li>
										<li class="fl">
										   <a href="javascript:;">爱宝时</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">浪琴</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">拓天马</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">宝珀</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">江诗丹顿</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">积家</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">柏高</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">万国</a>
										</li>
										<li class="fl">
									     	<a href="javascript:;">莫勒</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">卡地亚</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">雍加毕索</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">沛纳海</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">东方星</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">世纪</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">帝舵</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">百年灵</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">豪利时</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">天梭</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">爱罗</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">罗贝罗班</a>
										</li>
										<li class="fl">
										    <a href="javascript:;">赫柏林</a>
										</li>
										<li class="fl">
											<a href="javascript:;">汉米尔顿</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="property_list over_height">
						<div class="srh_block clearfix  "> <span class="srh_title fl">适用人群</span>
							<div class="srh_right clearfix">
								<div class="srh_option fl fert">
									<ul class="clearfix">
									     <li class="fl backg">
											<a href="javascript:;">全部</a>
										</li>
										<li class="fl">
											<a href="javascript:;">男表</a>
										</li>
										<li class="fl">
											<a href="javascript:;">女表</a>
										</li>
										<li class="fl">
											<a href="javascript:;">中性</a>
										</li>
									</ul>
								</div>

							</div>
						</div>
					</div>

					<div class="srh_block clearfix  ">
						<span class="srh_title fl">机芯类型</span>
						<div class="srh_right clearfix">
							<div class="srh_option fl emt">
								<ul class="clearfix">
								    <li class="fl backg">
									    <a href="javascript:;">全部</a>
								    </li>
									<li class="fl">
										<a href="javascript:;" value-code="42">石英</a>
									</li>
									<li class="fl">
										<a href="javascript:;" value-code="195">自动机械</a>
									</li>
									<li class="fl">
										<a href="javascript:;" value-code="196">手动机械</a>
									</li>
									<li class="fl">
										<a href="javascript:;" value-code="41">机械</a>
									</li>
									<li class="fl">
										<a href="javascript:;" value-code="3269">光动能</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				`}),searchFloor.innerHTML=str,searchFloor.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement,num1,num1,inps,minprice,maxprice,inp,price1;function map(){var num1=target.innerHTML.split("-"),n1=num1[0],n2=num1[1];ajax({url:"../php/list2.php",data:`num1=${n1}&num2=${n2}`,success:function(dt){var arr=eval("("+dt+")"),o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(16*(a-1),16*a),s="";a.forEach(a=>{s+=`
                    	<li class="col-lg-3 col-md-4 row-li">
							<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_img">
								<img class=" lazy-load" src="${a.imp1}">
								<div class="yaofeng">
									<img src="${a.imp2}">
									<span>¥<em class="yaofeng_price">${a.price}</em></span>
								</div>
							</a>
							<div class="goods_txt">
								<p class="tPrc"> <span class="s_price"><em>¥</em>${a.price}</span> 
								<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_name elps2">${a.title}</a>
								<div class="goods_sale">
								<span class="sale_tips elps1">${a.tishi}</span>
								<em class="s_sale_num">${a.number}</em></div>
								<a href="javascript:;" class="s_shop">${a.shops}</a>
								<p class="sale_tags"> <span>${a.link}</span> </p>
								<div class="goods_hover">
									<a href="../pages/details.html?id=${a.wan_id}" class="add_to_keep">查看详情</a>
									<a href="../pages/cart.html?id=${a.wan_id}" class="add_to_cart">加入购物车</a>
								</div>
							</div>
						</li>
                    	`}),clearFix.innerHTML=s,$(".col-lg-3").mouseenter(function(){$(this).find(".goods_hover").css("display","block")}).mouseleave(function(){$(this).find(".goods_hover").css("display","none")})})}})}function vague(){var num1=target.innerHTML;ajax({url:"../php/list5.php",data:`num=${num1}`,success:function(dt){var arr=eval("("+dt+")"),o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(16*(a-1),16*a),s="";a.forEach(a=>{s+=`
                    	<li class="col-lg-3 col-md-4 row-li">
							<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_img">
								<img class=" lazy-load" src="${a.imp1}">
								<div class="yaofeng">
									<img src="${a.imp2}">
									<span>¥<em class="yaofeng_price">${a.price}</em></span>
								</div>
							</a>
							<div class="goods_txt">
								<p class="tPrc"> <span class="s_price"><em>¥</em>${a.price}</span> 
								<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_name elps2">${a.title}</a>
								<div class="goods_sale">
								<span class="sale_tips elps1">${a.tishi}</span>
								<em class="s_sale_num">${a.number}</em></div>
								<a href="javascript:;" class="s_shop">${a.shops}</a>
								<p class="sale_tags"> <span>${a.link}</span> </p>
								<div class="goods_hover">
									<a href="../pages/details.html?id=${a.wan_id}" class="add_to_keep">查看详情</a>
									<a href="../pages/cart.html?id=${a.wan_id}" class="add_to_cart">加入购物车</a>
								</div>
							</div>
						</li>
                    	`}),clearFix.innerHTML=s,$(".col-lg-3").mouseenter(function(){$(this).find(".goods_hover").css("display","block")}).mouseleave(function(){$(this).find(".goods_hover").css("display","none")})})}})}function whole(){ajax({url:"../php/list.php",success:function(dt){var arr=eval("("+dt+")"),o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(16*(a-1),16*a),s="";a.forEach(a=>{s+=`
                    	<li class="col-lg-3 col-md-4 row-li">
							<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_img">
								<img class=" lazy-load" src="${a.imp1}">
								<div class="yaofeng">
									<img src="${a.imp2}">
									<span>¥<em class="yaofeng_price">${a.price}</em></span>
								</div>
							</a>
							<div class="goods_txt">
								<p class="tPrc"> <span class="s_price"><em>¥</em>${a.price}</span> 
								<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_name elps2">${a.title}</a>
								<div class="goods_sale">
								<span class="sale_tips elps1">${a.tishi}</span>
								<em class="s_sale_num">${a.number}</em></div>
								<a href="javascript:;" class="s_shop">${a.shops}</a>
								<p class="sale_tags"> <span>${a.link}</span> </p>
								<div class="goods_hover">
									<a href="../pages/details.html?id=${a.wan_id}" class="add_to_keep">查看详情</a>
									<a href="../pages/cart.html?id=${a.wan_id}" class="add_to_cart">加入购物车</a>
								</div>
							</div>
						</li>
                    	`}),clearFix.innerHTML=s,$(".col-lg-3").mouseenter(function(){$(this).find(".goods_hover").css("display","block")}).mouseleave(function(){$(this).find(".goods_hover").css("display","none")})})}})}"全部"==target.innerHTML?whole():"1000以下"==target.innerHTML?(num1=target.innerHTML.slice(0,4),ajax({url:"../php/list1.php",data:`num=${num1}`,success:function(dt){var arr=eval("("+dt+")"),o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(16*(a-1),16*a),s="";a.forEach(a=>{s+=`
                    	<li class="col-lg-3 col-md-4 row-li">
							<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_img">
								<img class=" lazy-load" src="${a.imp1}">
								<div class="yaofeng">
									<img src="${a.imp2}">
									<span>¥<em class="yaofeng_price">${a.price}</em></span>
								</div>
							</a>
							<div class="goods_txt">
								<p class="tPrc"> <span class="s_price"><em>¥</em>${a.price}</span> 
								<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_name elps2">${a.title}</a>
								<div class="goods_sale">
								<span class="sale_tips elps1">${a.tishi}</span>
								<em class="s_sale_num">${a.number}</em></div>
								<a href="javascript:;" class="s_shop">${a.shops}</a>
								<p class="sale_tags"> <span>${a.link}</span> </p>
								<div class="goods_hover">
									<a href="../pages/details.html?id=${a.wan_id}" class="add_to_keep">查看详情</a>
									<a href="../pages/cart.html?id=${a.wan_id}" class="add_to_cart">加入购物车</a>
								</div>
							</div>
						</li>
                    	`}),clearFix.innerHTML=s,$(".col-lg-3").mouseenter(function(){$(this).find(".goods_hover").css("display","block")}).mouseleave(function(){$(this).find(".goods_hover").css("display","none")})})}})):"1000-3000"==target.innerHTML||"3000-5000"==target.innerHTML||"5000-10000"==target.innerHTML||"10000-50000"==target.innerHTML||"50000-100000"==target.innerHTML?map():"100000以上"==target.innerHTML?(num1=target.innerHTML.slice(0,6),ajax({url:"../php/list3.php",data:`num=${num1}`,success:function(dt){var arr=eval("("+dt+")"),o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(16*(a-1),16*a),s="";a.forEach(a=>{s+=`
                    	<li class="col-lg-3 col-md-4 row-li">
							<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_img">
								<img class=" lazy-load" src="${a.imp1}">
								<div class="yaofeng">
									<img src="${a.imp2}">
									<span>¥<em class="yaofeng_price">${a.price}</em></span>
								</div>
							</a>
							<div class="goods_txt">
								<p class="tPrc"> <span class="s_price"><em>¥</em>${a.price}</span> 
								<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_name elps2">${a.title}</a>
								<div class="goods_sale">
								<span class="sale_tips elps1">${a.tishi}</span>
								<em class="s_sale_num">${a.number}</em></div>
								<a href="javascript:;" class="s_shop">${a.shops}</a>
								<p class="sale_tags"> <span>${a.link}</span> </p>
								<div class="goods_hover">
									<a href="../pages/details.html?id=${a.wan_id}" class="add_to_keep">查看详情</a>
									<a href="../pages/cart.html?id=${a.wan_id}" class="add_to_cart">加入购物车</a>
								</div>
							</div>
						</li>
                    	`}),clearFix.innerHTML=s,$(".col-lg-3").mouseenter(function(){$(this).find(".goods_hover").css("display","block")}).mouseleave(function(){$(this).find(".goods_hover").css("display","none")})})}})):"确定"==target.innerHTML&&(inps=document.querySelectorAll(".price_input"),minprice=inps[0].value,maxprice=inps[1].value,ajax({url:"../php/list4.php",data:`min1=${minprice}&max1=${maxprice}`,success:function(dt){var arr=eval("("+dt+")"),o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(16*(a-1),16*a),s="";a.forEach(a=>{s+=`
                    	<li class="col-lg-3 col-md-4 row-li">
							<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_img">
								<img class=" lazy-load" src="${a.imp1}">
								<div class="yaofeng">
									<img src="${a.imp2}">
									<span>¥<em class="yaofeng_price">${a.price}</em></span>
								</div>
							</a>
							<div class="goods_txt">
								<p class="tPrc"> <span class="s_price"><em>¥</em>${a.price}</span> 
								<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_name elps2">${a.title}</a>
								<div class="goods_sale">
								<span class="sale_tips elps1">${a.tishi}</span>
								<em class="s_sale_num">${a.number}</em></div>
								<a href="javascript:;" class="s_shop">${a.shops}</a>
								<p class="sale_tags"> <span>${a.link}</span> </p>
								<div class="goods_hover">
									<a href="../pages/details.html?id=${a.wan_id}" class="add_to_keep">查看详情</a>
									<a href="../pages/cart.html?id=${a.wan_id}" class="add_to_cart">加入购物车</a>
								</div>
							</div>
						</li>
                    	`}),clearFix.innerHTML=s,$(".col-lg-3").mouseenter(function(){$(this).find(".goods_hover").css("display","block")}).mouseleave(function(){$(this).find(".goods_hover").css("display","none")})})}})),"全部"==target.innerHTML?whole():"库尔沃"==target.innerHTML||"欧米茄"==target.innerHTML||"爱宝时"==target.innerHTML||"浪琴"==target.innerHTML||"拓天马"==target.innerHTML||"宝珀"==target.innerHTML||"江诗丹顿"==target.innerHTML||"积家"==target.innerHTML||"柏高"==target.innerHTML||"万国"==target.innerHTML||"莫勒"==target.innerHTML||"卡地亚"==target.innerHTML||"雍加毕索"==target.innerHTML||"沛纳海"==target.innerHTML||"东方星"==target.innerHTML||"世纪"==target.innerHTML||"帝舵"==target.innerHTML||"百年灵"==target.innerHTML||"豪利时"==target.innerHTML||"天梭"==target.innerHTML||"爱罗"==target.innerHTML||"罗贝罗班"==target.innerHTML||"赫柏林"==target.innerHTML||"汉米尔顿"==target.innerHTML||"男表"==target.innerHTML||"女表"==target.innerHTML||"中性"==target.innerHTML||"石英"==target.innerHTML||"自动机械"==target.innerHTML||"手动机械"==target.innerHTML||"机械"==target.innerHTML||"光动能"==target.innerHTML?vague():"搜索"==target.innerHTML&&(inp=document.querySelector(".logo-sos"),price1=inp.value,ajax({url:"../php/list5.php",data:`num=${price1}`,success:function(dt){var arr=eval("("+dt+")"),o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(16*(a-1),16*a),s="";a.forEach(a=>{s+=`
                    	<li class="col-lg-3 col-md-4 row-li">
							<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_img">
								<img class=" lazy-load" src="${a.imp1}">
								<div class="yaofeng">
									<img src="${a.imp2}">
									<span>¥<em class="yaofeng_price">${a.price}</em></span>
								</div>
							</a>
							<div class="goods_txt">
								<p class="tPrc"> <span class="s_price"><em>¥</em>${a.price}</span> 
								<a href="../pages/details.html?id=${a.wan_id}" class="s_goods_name elps2">${a.title}</a>
								<div class="goods_sale">
								<span class="sale_tips elps1">${a.tishi}</span>
								<em class="s_sale_num">${a.number}</em></div>
								<a href="javascript:;" class="s_shop">${a.shops}</a>
								<p class="sale_tags"> <span>${a.link}</span> </p>
								<div class="goods_hover">
									<a href="../pages/details.html?id=${a.wan_id}" class="add_to_keep">查看详情</a>
									<a href="../pages/cart.html?id=${a.wan_id}" class="add_to_cart">加入购物车</a>
								</div>
							</div>
						</li>
                    	`}),clearFix.innerHTML=s,$(".col-lg-3").mouseenter(function(){$(this).find(".goods_hover").css("display","block")}).mouseleave(function(){$(this).find(".goods_hover").css("display","none")})})}}))},$(".short>ul").children().click(function(){var a=$(this).index();$(".short>ul").children().eq(a).addClass("backg").siblings().removeClass("backg")}),$(".rent>ul").children().click(function(){var a=$(this).index();$(".rent>ul").children().eq(a).addClass("backg").siblings().removeClass("backg")}),$(".fert>ul").children().click(function(){var a=$(this).index();$(".fert>ul").children().eq(a).addClass("backg").siblings().removeClass("backg")}),$(".emt>ul").children().click(function(){var a=$(this).index();$(".emt>ul").children().eq(a).addClass("backg").siblings().removeClass("backg")}),sensert()}adc();