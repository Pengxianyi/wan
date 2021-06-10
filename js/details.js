var Wb_whole=document.querySelector(".wanbiao_whole"),searchSent=location.search,dt,ar1,id;async function fun1(){dt=await promiseAjax({url:"../php/details.php",data:"id="+id}),dt=eval("("+dt+")");var str=`
		<div class="W_pt_head">
			<div class="head_wrap clearfix">
				<div class="head_left fl">
					<h1 class="wb_logo fl"> <a href="../pages/page.html" title="正品名表 终身服务"><img src="../img/logo-icon.png" alt=""></a></h1>
					<a href="javascript:;" class="wb_shop_msg fl" id="service-code">
						<div class="sp_txt fl">
							<p class="sp_name">${dt.shops}<i class="shop_add">自营</i></p>
							<p class="sp_sales"><em class="shop_sales">销量${dt.TotalSales}</em>&nbsp;&nbsp;粉丝<em class="shop_fans">${dt.fans}</em>
							</p>
						</div>
					</a>
				</div>
				<div class="head_right fl">
					<div class="head_shop_search fl">
						<div class="searchForm">
							<label class="srh_lab">
								<span class="srh_ipt_txt">搜索 品牌/系列/型号</span> 
								<input type="text" class="srh_ipt_new" value="" maxlength="30">
							</label>
							<button class="srh_btn srh_wbiao" id="srh_wbiao">搜万表</button>
							<button class="srh_btn srh_shop" id="srh_shop">搜本店</button>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
		<div class="W_detail_Bread">
			<div class="Bread_content">
				<div class="Bread_content_left fl">
					<a href="../pages/page.html">首页</a>
					<a class="arrow">&gt;</a>
					<a href="javascript:;">${dt.band}</a>
					<a class="arrow">&gt;</a>
					<a href="javascript:;">${dt.title}</a>
				</div>
				<div class="Bread_content_right fr">
					<span class="right_a">自营</span>
					<span class="right_b"><a href="javascript:;">${dt.shops}</a></span>
				</div>
			</div>
		</div>
		<div class="detail_upper">
			<div class="detail_upper_left fl">
				<div class="content">
					<div class="content_zoom">
						<div class="content_img_wrap" style="z-index: 10;">
							<img id="zoom" src="${dt.imp1}">
						</div>
						<div class="yaofeng" style="z-index: 11;">
							<img src="${dt.imp2}"><span>¥<em class="yaofeng_price">${dt.price}</em></span>
						</div>
                       <div class="mark" style="z-index: 100;"></div>
					</div>
					
					<div class="content_zoom_right">
					      <div class="content_img_right" style="z-index: 10;">
							<img id="zoom" src="${dt.imp1}">
						</div>
					</div>
					
					<div class="content_bottom">
						<div class="bottom_nr">
							<ul>
								<li class="br">
									<div>
									     <img src="${dt.big_img1}">
									</div>
								</li>
								<li>
									<div>
										<img src="${dt.big_img2}" />
									</div>
								</li>
								<li>
									<div>
										<img src="${dt.big_img3}" />
									</div>
								</li>
								<li>
									<div>
										<img src="${dt.big_img4}" />
									</div>
								</li>
								<li>
									<div>
										<img src="${dt.big_img5}" />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="detail_upper_right fr">
				<div class="upper_title">${dt.title}</div>
				<div class="upper_xuyan">"${dt.pa_jiashao}"
					<span class="js_more CUSTOMER-SERVICE">咨询优惠</span>
				</div>
				<div class="upper_model clearfix">
					<div class="fl upper_model_a"><span>${dt.xinghao}</span></div>
					<div class="fl upper_model_b"><span>${dt.bianhao}</span></div>
					<div class="fl upper_model_c"><span>${dt.pinpai}</span></div>
					<div class="fr upper_model_d"><span>${dt.number}</span></div>
				</div>
				<div class="upper_price">
					<div class="upper_price_jiage clearfix">
						<div class="upper_price_jiage_left2 fl">市场价</div>
						<div class="upper_price_jiage_right fl">
							<span class="upper_price_jiage_a">￥</span>
							<span class="upper_price_jiage_b js_price">${dt.shicjia}</span>
							<span class="upper_price_jiage_c">秒杀价¥<em>${dt.price}</em></span>
						</div>
					</div>
				</div>
				<div class="upper_give clearfix">
					<div class="upper_give_left fl">配送</div>
					<div class="upper_give_right fl"><i>（顺丰包邮）</i>17:30前支付，预计1-3个工作日内发货，支持货到付款</div>
				</div>
				<div class="promise clearfix">
					<div class="left fl">承诺</div>
					<div class="right fl">
						<li class="fl"><i></i> <span class="">正品保障</span></li>
						<li class="fl"><i></i> <span class="">正规发票</span></li>
						<li class="fl"><i></i> <span class="">假一赔三</span></li>
						<li class="fl"><i></i> <span class="">全球联保</span></li>
					</div>
				</div>
				<div class="upper_number clearfix">
					<div class="upper_number_left fl">数量</div>
					<div class="upper_number_right fl">
						<div class="upper_number_right_a fl">
							<span class="fl reduce" data-type="subtract">-</span>
							<input type="text" value="1" class="cont fl" id="count">
							<span class="fl plus" data-type="add" data-saletype="3">+</span></div>
						<div class="upper_tips fl"> <span>!</span> 该秒杀商品每个用户限购一件</div>
					</div>
				</div>
				<div class="upper_button clearfix" id="sec-kill-btns">
					<div class="upper_button_a page fl seckill-login-to-purchase"><a href="./cart.html">立即购买</a></div>
					<div class="upper_button_b page fl" id="js_cart">加入购物车</div>
				</div>
			</div>
		</div>
		<div class="detailsAd" id="detailsAd" data-code="45" data-name="名匠列表页广告_t1" style="cursor: pointer;margin-top: 50px;margin: 0 auto;width: 1200px;">
			<img src="//image8.wbiao.co/mall/23fd1feaa22b4fcfb105c87040f15d63.jpg">
		</div>

		<div class="lower_right">
			<div class="lower_right_title clearfix">
				<div class="title_text fl" id="gnTag">
					<li class="on">商品详情</li>
					<li>规格参数</li>
					<li>售后服务</li>
				</div>
			</div>
			<div class="lower_right_content clearfix" id="gnContent">
				<div class="tab_content" style="display: block;">
					<div class="prompt">
						<div class="prompt_a">温馨提示</div>
						<div class="prompt_b">商品展示区划线价或市场价为品牌建议零售价，并非原价；万表价为商品实时售价，欢迎比较购买！</div>
					</div>
					<div class="guaranteeImg">
						<img src="//image8.wbiao.co/shop/c0966c6a1bb543c2ab412f22fae00fee.jpg">
					</div>
					<div class="introduce">
						<p>
							<img src="${dt.big_img1}" class="lazy-load">
							<img src="${dt.big_img3}" class="lazy-load">
							<img src="${dt.big_img5}" class="lazy-load">
						</p>
					</div>
				</div>
				<div class="tab_content" style="display: none;">
					<div class="format">
						<div class="prompt">
							<div class="prompt_a">温馨提示</div>
							<div class="prompt_b">商品展示区划线价或市场价为品牌建议零售价，并非原价；万表价为商品实时售价，欢迎比较购买！</div>
						</div>
						<div class="format_content">
							<div class="format_content_title">${dt.det_1}</div>
							<div class="format_content_container clearfix">
								<div class="left fl">腕表机芯</div>
								<div class="right fl">
									<div class="right_a clearfix"> <span class="right_a_a fl">机芯类型</span> <span class="right_a_b fl">${dt.det_2}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">机芯型号</span> <span class="right_a_b fl">${dt.det_3}</span></div>
								</div>
							</div>
							<div class="format_content_container clearfix">
								<div class="left fl">腕表外壳</div>
								<div class="right fl">
									<div class="right_a clearfix"> <span class="right_a_a fl">外壳材质</span> <span class="right_a_b fl">${dt.det_4}</span></div>
								</div>
							</div>
							<div class="format_content_container clearfix">
								<div class="left fl">腕表表盘</div>
								<div class="right fl">
									<div class="right_a clearfix"> <span class="right_a_a fl">表盘宽度</span> <span class="right_a_b fl">${dt.det_5}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">表耳</span> <span class="right_a_b fl">${dt.det_6}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">表冠</span> <span class="right_a_b fl">${dt.det_7}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">镜面材质</span> <span class="right_a_b fl">${dt.det_8}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">表盘直径</span> <span class="right_a_b fl">${dt.det_9}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">表盘形状</span> <span class="right_a_b fl">${dt.det_10}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">表壳底盖</span> <span class="right_a_b fl">${dt.det_11}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">表盘刻度</span> <span class="right_a_b fl">${dt.det_12}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">表盘颜色</span> <span class="right_a_b fl">${dt.det_13}</span></div>
								</div>
							</div>
							<div class="format_content_container clearfix">
								<div class="left fl">腕表表带</div>
								<div class="right fl">
									<div class="right_a clearfix"> <span class="right_a_a fl">表带颜色</span> <span class="right_a_b fl">${dt.det_14}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">表带材质</span> <span class="right_a_b fl">${dt.det_15}</span></div>
								</div>
							</div>
							<div class="format_content_container clearfix">
								<div class="left fl">腕表表扣</div>
								<div class="right fl">
									<div class="right_a clearfix"> <span class="right_a_a fl">表扣类型</span> <span class="right_a_b fl">${dt.det_16}</span></div>
								</div>
							</div>
							<div class="format_content_container clearfix">
								<div class="left fl">腕表其他</div>
								<div class="right fl">
									<div class="right_a clearfix"> <span class="right_a_a fl">适用人群</span> <span class="right_a_b fl">${dt.det_17}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">包装</span> <span class="right_a_b fl">${dt.det_18}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">推出年份</span> <span class="right_a_b fl">${dt.det_19} </span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">重量</span> <span class="right_a_b fl">${dt.det_20}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">特殊功能</span> <span class="right_a_b fl">${dt.det_21}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">防水</span> <span class="right_a_b fl">${dt.det_22}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">佩戴场合</span> <span class="right_a_b fl">${dt.det_23}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">联保</span> <span class="right_a_b fl">${dt.det_24}</span></div>
									<div class="right_a clearfix"> <span class="right_a_a fl">价格区间</span> <span class="right_a_b fl">${dt.det_25}</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab_content" style="display: none;">
			     	<div class="prompt promptTwo">
					   <div class="prompt_a">温馨提示</div>
					   <div class="prompt_b">1.商品展示区划线价或市场价为品牌建议零售价，并非原价；万表价为商品实时售价，欢迎比较购买！<br> 2.万表商城销售的手表都是正品手表，享受品牌官方保修；亦由万表名匠提供全国售后诚信服务！</div>
				  </div>
				<div class="service">
					<p><img border="0" src="https://image8.wbiao.co/mall/3295adb39e65415780c1d5e36bdffb8d.png">
					<img border="0" src="https://image8.wbiao.co/mall/fcb8a018ff934c31bbefd4c4e72529d7.jpg">
					</p>
				</div>
			</div>
		</div>
	</div>
	
			`;Wb_whole.innerHTML=str,$("#gnTag").children().click(function(){var a=$(this).index();$("#gnTag").children().eq(a).addClass("on").siblings().removeClass("on"),$("#gnContent").children().hide().eq(a).show()}),$(".t_hover").mouseenter(function(){$(".dropdown_line").slideDown(1e3)}),$(".t_hover").mouseleave(function(){$(".dropdown_line").slideUp(1e3)}),$(".navbar-ent").mouseenter(function(){$(".navbar-ufo").slideDown(500)}),$(".navbar-ent").mouseleave(function(){$(".navbar-ufo").slideUp(500)}),$(".content_zoom").mouseenter(function(){$(".yaofeng").fadeOut(500)}),$(".content_zoom").mouseleave(function(){$(".yaofeng").fadeIn(500)});var contentZoomLeft=document.querySelector(".content_zoom"),mark=document.querySelector(".mark"),contentZoomRight=document.querySelector(".content_zoom_right"),contentBottom=document.querySelector(".content_bottom"),contentLis=contentBottom.querySelectorAll("li"),contentImgWrap=contentZoomLeft.querySelector(".content_img_wrap"),imgs1=contentImgWrap.querySelector("img"),imgs2=contentZoomRight.querySelector("img");contentZoomLeft.onmouseenter=function(){mark.style.display="block",contentZoomRight.style.display="block"},contentZoomLeft.onmouseleave=function(){mark.style.display="none",contentZoomRight.style.display="none"},contentZoomLeft.onmousemove=function(a){var s=(a=a||window.event).pageX-$(".content_zoom").offset().left-$(".mark").width()/2,i=a.pageY-$(".content_zoom").offset().top-$(".mark").height()/2,t=contentZoomLeft.offsetWidth-mark.offsetWidth,a=contentZoomLeft.offsetHeight-mark.offsetHeight,s=s<=0?(mark.style.left="0px",0):t<s?(mark.style.left=t+"px",t):(mark.style.left=s+"px",s),a=i<=0?(mark.style.top="0px",0):a<i?(mark.style.top=a+"px",a):(mark.style.top=i+"px",i),i=contentZoomRight.querySelector("img");i.style.left=-2*s+"px",i.style.top=-2*a+"px"};for(let i=0;i<contentLis.length;i++)contentLis[i].onmouseenter=function(){for(let a=0;a<contentLis.length;a++)contentLis[a].className="";this.className="br";var a=this.firstElementChild.firstElementChild.getAttribute("src");imgs1.setAttribute("src",a),imgs2.setAttribute("src",a)};var login=document.querySelector('[name="login"]'),span=document.getElementById("lg"),inpout=document.querySelector('[name="inp_out"]'),listBiao=document.querySelector(".list-biao"),text1=getCookie("name"),bool;text1&&(login.removeAttribute("href"),login.removeAttribute("class"),span.innerHTML=decodeURI(text1)),inpout.onclick=function(){null!=text1&&((bool=confirm("你确定退出账号!"))&&delCookie("name"),window.history.go(0))}}searchSent?(ar1=searchSent.split("="),"?id"==ar1[0]?(id=ar1[1],fun1()):(alert("参数有误"),location.href="list.html")):(alert("您未选择商品,请重新选择你要购买的商品！"),location.href="list.html"),Wb_whole.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement,cartList4,cartList4,bool;"加入购物车"==target.innerHTML&&(cartList4=localStorage.getItem("cartList4")||[],0<cartList4.length?(cartList4=eval("("+cartList4+")"),bool=!0,cartList4.forEach(a=>{dt.wan_id==a.wan_id&&(bool=!1,a.cart_number++,localStorage.setItem("cartList4",JSON.stringify(cartList4)))}),bool&&(dt.cart_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)))):(dt.cart_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4))),alert("添加成功"))};