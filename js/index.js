//top轮播
var num = 0;
var timer = null;

function move() {
	num++
	if (num == 5) {
		num = 0
	}
	$(".silde_img").animate({
		"marginLeft": -540 * num
	});
	$(".silde_btn span").removeClass().eq(num).addClass("btn_on");
}
timer = setInterval(move, 2000)
$(".silde_img").hover(function() {
	clearInterval(timer)
}, function() {
	timer = setInterval(move, 2000)
})
$(".silde_btn span").click(function() {
	$(".silde_btn span").removeClass().eq($(this).index()).addClass("btn_on");
	$(".silde_img").animate({
		"marginLeft": -540 * $(this).index()
	});
})
//top选项卡
$(".tab_btn li").click(function() {
	$(".tab_box_main").hide().siblings().eq($(this).index()).show()
	$(".tab_btn li").removeClass().eq($(this).index()).addClass("li_move");
})

//第三部分
$(".sec3_btn li").click(function() {
	$(".tab_list").hide().siblings().eq($(this).index()).show()
	$(".sec3_btn .tab-active").removeClass("tab_show").eq($(this).index()).addClass("tab_show");
})

$('.slide2-next').click(function() {
	$(".swiper-wrapper ul").animate({
		'marginLeft': -$(".sw_li").width()
	}, 600, function() {
		$(".sw_li").eq(0).appendTo($(".swiper-wrapper ul"));
		$(".swiper-wrapper ul").css('marginLeft', '0px');
	});
})
$('.slide2-prev').click(function() {
	$(".swiper-wrapper ul").css('marginLeft', -$(".sw_li").width());
	$(".sw_li").eq(4).prependTo($(".swiper-wrapper ul"));
	$(".swiper-wrapper ul").animate({
		"marginLeft": "0px"
	}, 600);
})

//第四部分
$(".sec4_btn li").click(function() {
	$(".match_top").hide().siblings().eq($(this).index()).show()
	$(".sec4_btn .tab-active").removeClass("tab_show").eq($(this).index()).addClass("tab_show");
})
var bool = true;
$(".chose").click(function() {
	if (bool) {
		bool = false;
		$(".chose span").removeClass("icon-down").addClass("icon-up")
		$(".chose-block").show()
	} else {
		bool = true;
		$(".chose span").removeClass("icon-up").addClass("icon-down")
		$(".chose-block").hide()
	}

})
//第五部分
$(".sec5_btn li").click(function() {
	$(".section5 .tab-box .tab-panel").hide().siblings().eq($(this).index()).show()
	$(".sec5_btn .tab-active").removeClass("tab_show").eq($(this).index()).addClass("tab_show");
})
$(".sec55_btn li").click(function() {
	$(".tab1-box .tab-panel").hide().siblings().eq($(this).index()).show()
	$(".sec55_btn .tab-active").removeClass("tab_show").eq($(this).index()).addClass("tab_show");
})
//第六部分
$(".sec6_btn li").click(function() {
	$(".section6 .tab-panel").hide().siblings().eq($(this).index()).show()
	$(".sec6_btn .tab-active").removeClass("tab_show").eq($(this).index()).addClass("tab_show");
})


//第七部分
var bNum = 0;
$('.bottomslide-next').click(function() {
	$(".btm-img").animate({
		'marginLeft': -1200
	}, 600, function() {
		$(".btm-img img").eq(0).appendTo($(".btm-img"));
		$(".btm-img").css('marginLeft', '0px');
	});
	bNum++;
	if (bNum == 5) {
		bNum = 0
	}
	$(".swiper-pagination-switch").removeClass("btn-btm-span").eq(bNum).addClass("btn-btm-span")
})
$('.bottomslide-prev').click(function() {
	$(".btm-img").css('marginLeft', -1200);
	$(".btm-img img").eq(4).prependTo($(".btm-img"));
	$(".btm-img").animate({
		"marginLeft": "0px"
	}, 600);
	bNum--;
	if (bNum == -5) {
		bNum = 0
	}
	$(".swiper-pagination-switch").removeClass("btn-btm-span").eq(bNum).addClass("btn-btm-span")
})

var timer1 = null;

function moveB() {
	bNum++
	if (bNum == 5) {
		bNum = 0
	}
	$(".btm-img").animate({
		"marginLeft": -1200 * bNum
	});
	$(".swiper-pagination-switch").removeClass("btn-btm-span").eq(bNum).addClass("btn-btm-span");
}
timer1 = setInterval(moveB, 2000)
$(".btm-img").hover(function() {
	clearInterval(timer1)
}, function() {
	timer1 = setInterval(moveB, 2000)
})


//武器
$(".block_list1 .lab ul li").click(function() {
	$(".block_list1 .lab ul li").removeClass().eq($(this).index()).addClass("curt");
})
$(".block_list2 .lab ul li").click(function() {
	$(".block_list2 .lab ul li").removeClass().eq($(this).index()).addClass("curt");
})
$(".block_list3 .lab ul li").click(function() {
	$(".block_list3 .lab ul li").removeClass().eq($(this).index()).addClass("curt");
})
$(".block_list5 .lab ul li").click(function() {
	$(".block_list5 .lab ul li").removeClass().eq($(this).index()).addClass("curt");
	$(".map_list").hide().siblings().eq($(this).index()).show()
})


//地图
$(".show").click(function() {
	$(".section:nth-child(1) .show span b").eq($(this).index()).toggle()
	$(".map-icon").eq($(this).index()).toggle()
	$(".section:nth-child(2) .show span b").eq($(this).index()).toggle()
	$(".map2-icon").eq($(this).index()).toggle()
	$(".section:nth-child(3) .show span b").eq($(this).index()).toggle()
	$(".map3-icon").eq($(this).index()).toggle()
})

var bool=true;
$(".btn1").click(function() {
	if (bool) {
		bool=false
		$(".map-icon").hide()
		$(".map2-icon").hide()
		$(".map-grid").hide()
		$(".operate .show span b").hide()
		console.log(bool)
	} else{
		bool=true
		$(".map-icon").show()
		$(".map2-icon").show()
		$(".map-grid").show()
		$(".operate .show span b").show()
		console.log(bool)
	}
})

$(".btn2").click(function() {
	$(".map-grid").toggle()
})


//武器 外层选项卡
$(".ziliao_list .tab_li").click(function() {
	$(".block_list").hide().siblings().eq($(this).index()).show()
	$(".tab_li_btm").animate({
		"left": $(this).index() * 146
	})
})

//版本
$(".prev").click(function() {
	$(".page .page-num").removeClass("on")
	$(".page .page-num:nth-child(2)").addClass("on")
	console.log($(".page .page-num:nth-child(1)"))
	$(".bb-list").hide()
	$(".bb-list:nth-child(1)").show()
})
$(".next").click(function() {
	$(".page .page-num").removeClass("on")
	$(".page .page-num:nth-child(3)").addClass("on")
	$(".bb-list").hide()
	$(".bb-list:nth-child(2)").show()
})


//新闻
$(".news-list .tab_li").click(function() {
	$(".news-detail ul").hide().siblings().eq($(this).index()).show()
	$(".tab_li_btm").animate({
		"left": $(this).index() * 146
	})
})

//攻略
$(".gl-list .tab_li").click(function() {
	$(".gl-detail ul").hide().siblings().eq($(this).index()).show()
	$(".tab_li_btm").animate({
		"left": $(this).index() * 146
	})
})


//同人
$(".tongren_list .tab_li").click(function() {
	$(".tr_list ul").hide().siblings().eq($(this).index()).show()
	$(".tongren_list .tab_li").removeClass("on").eq($(this).index()).addClass("on");
})


//视频
$(".shipin-list .tab_li").click(function() {
	$(".video-list-box").hide().siblings().eq($(this).index()).show()
	$(".tab_li_btm").animate({
		"left": $(this).index() * 146
	})
})

//赛事
$(".news-box .nav-list li").click(function() {
	$(".news-box .nav-list li").removeClass("on").eq($(this).index()).addClass("on");
	$(".news-list ul").hide().siblings().eq($(this).index()).show()
})

$(".video-list .nav-list li").click(function() {
	$(".video-list  .nav-list li").removeClass("on").eq($(this).index()).addClass("on");
	$(".v_list_box ul").hide().siblings().eq($(this).index()).show()
})


