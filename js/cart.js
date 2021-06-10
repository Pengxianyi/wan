var login=document.querySelector('[name="login"]'),span=document.getElementById("lg"),inpout=document.querySelector('[name="inp_out"]'),listBiao=document.querySelector(".list-biao"),text1=getCookie("name"),bool;text1&&(login.removeAttribute("href"),login.removeAttribute("class"),span.innerHTML=decodeURI(text1)),inpout.onclick=function(){null!=text1&&((bool=confirm("你确定退出账号!"))&&delCookie("name"),window.history.go(0))};var WMain=document.querySelector(".W_main"),cartList4=localStorage.getItem("cartList4"),name1=getCookie("name"),url;function showOff(){var t,a;0<cartList4.length?(t=cartList4.every(t=>1==t.is_select),a=`
        <div class="cart_wrap" id="W-cart">
				<h2 class="tit_h2">商品种类（${cartList4.length}）</h2>
				<div class="cart_nav">
					<div class="clearfix fl">
						<input type="checkbox" name="quan" class="all_txt" ${t?"checked":""}>全选</input>
						<span class="msg_txt">商品信息</span>
					</div>
					<ul class="clearfix fr">
						<li>单价</li>
						<li>数量</li>
						<li>小计</li>
						<li>操作</li>
					</ul>
				</div>
				
				`,cartList4.forEach(t=>{a+=`
        	     <div class="cart-content" id="cart-content">
        	     <div class="normal-goods" id="normal-goods">
						<div class="W_store_floor">
							<div class="goods_floor clearfix">
								<div class="goods_info fl clearfix">
									<div class="goods_right clearfix">
										<input type="checkbox" name="xuan" class="select_tik" ${1==t.is_select?"checked":""} data-id=${t.wan_id}>
										<a href="./list.html">
											<div class="goods_img fl"> <img src="${t.imp1}"></div>
											<div class="goods_txt fl">
												<div class="goods_a">
													<p class="p1">${t.title}</p>
													<p class="specifications">${t.det_1}</p>
												</div>
											</div>
										</a>
										<ul class="fr">
											<li class="unit_price"> ¥<em>${t.price}</em></li>
											<li class="goods_num"> 
												<button class="reduce calc-btns" ${t.cart_number<=1?"disabled":""} data-id=${t.wan_id}>-</button> 
												<button type="text" class="num">${t.cart_number}</button> 
												<button class="add calc-btns" ${t.cart_number>=t.max_number?"disabled":""} data-id=${t.wan_id}>+</button>
											</li>
											<li class="total_price">¥<em class="subTotal">${parseFloat(t.price)*parseInt(t.cart_number)}</em></li>
											<li class="others">
												<button class="delete_goods" data-id=${t.wan_id}>删除</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        	     `}),a+=`
				<div class="W_settle_floor" id="W_settle_floor">
					<ul class="clearfix">
						<li class="sel_all_txt">
							<input type="checkbox" name="quan" class="all_txt1" ${t?"checked":""}>全选</input>
						</li>
						<li class="delete_goods">
							<button type="button">清空购物车</button>
						</li>
						<li class="choose_num">已选商品<em id="selectedQuantity">${total()[0]}</em>件</li>
						<li class="settle_btn">
							<button type="button">结算</button>
						</li>
						<li class="settle_price fr">
							<p class="p1">合计&nbsp;¥&nbsp;<span>${total()[1]}</span></p>
							<p class="p2">总额&nbsp;¥&nbsp;<span>${total()[1]}</span></p>
						</li>
					</ul>
				</div>
			</div>
        `,WMain.innerHTML=a):WMain.innerHTML=`
	<div class="cart_empty" id="cart_empty">
				<i class="icon-a-c-cart"></i>
				<p class="p1">你的购物车还是空的</p>
				<div class="cart_btn">
					<a href="./list.html" class="goto_shoping">马上购物</a>
				</div>
			</div>
	`}function total(){var a=0,i=0;return cartList4.forEach(t=>{1==t.is_select&&(a+=t.cart_number,i+=parseFloat(t.price)*parseInt(t.cart_number))}),[a,i]}name1?(cartList4=eval("("+cartList4+")"),showOff()):(alert("您还未登录，请先登录！"),url=location.href,location.href="./logon.html?newUrl="+url),WMain.onclick=function(t){var a,i=(t=t||window.event).target||t.srcElement;"+"==i.innerHTML&&(a=i.getAttribute("data-id"),cartList4.forEach(t=>{t.wan_id==a&&t.cart_number++}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),showOff()),"-"==i.innerHTML&&(a=i.getAttribute("data-id"),cartList4.forEach(t=>{t.wan_id==a&&t.cart_number--}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),showOff()),"删除"==i.innerHTML&&(a=i.getAttribute("data-id"),cartList4=cartList4.filter(t=>t.wan_id!=a),localStorage.setItem("cartList4",JSON.stringify(cartList4)),showOff()),"quan"==i.name&&(cartList4.forEach(t=>{i.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),showOff()),"xuan"==i.name&&(a=i.getAttribute("data-id"),cartList4.forEach(t=>{t.wan_id==a&&(1==t.is_select?t.is_select=0:t.is_select=1)}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),showOff()),"清空购物车"==i.innerHTML&&(cartList4=[],localStorage.setItem("cartList4",JSON.stringify(cartList4)),showOff()),"结算"==i.innerHTML&&(alert("你已支付："+total()[1]+"元"),cartList4=cartList4.filter(t=>1!=t.is_select),localStorage.setItem("cartList4",JSON.stringify(cartList4)),showOff())};