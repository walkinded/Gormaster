$(document).ready(function() {


	$(".link-page_about").click(function(e) {
		e.preventDefault();
		if ($(this).siblings(".text-about").hasClass("active")) {
			$(this).siblings(".text-about").removeClass("active");
			$(this).html("Показать еще");
		} else {
			$(this).siblings(".text-about").addClass("active");
			$(this).html("Скрыть");
		}
	});

	$(".link-page_review").click(function(e) {
		e.preventDefault();
		if ($(this).siblings(".text-review").hasClass("active")) {
			$(this).siblings(".text-review").removeClass("active");
			$(this).html("Показать еще");
		} else {
			$(this).siblings(".text-review").addClass("active");
			$(this).html("Скрыть");
		}
	});


	$(".btn-simple_more-prices").click(function(e) {
		e.preventDefault();
		if ($(".wrap-prices_block .item-price:nth-child(n+11)").is(":hidden")) {
			$(".wrap-prices_block .item-price:nth-child(n+11)").addClass("active");
			$(this).html("Скрыть");
		} else {
			$(".wrap-prices_block .item-price:nth-child(n+11)").removeClass("active");
			$(this).html("Смотреть ещё");
		}
	});

	$(".link-page_master-services").click(function(e) {
		e.preventDefault();
		if ($(".master-services .line-price:nth-child(n+4)").is(":hidden")) {
			$(".master-services .line-price:nth-child(n+4)").addClass("active");
			$(this).html("Скрыть");
		} else {
			$(".master-services .line-price:nth-child(n+4)").removeClass("active");
			$(this).html("Ещё 5 услуг");
		}
	});


	$(".btn-simple_reviews-master").click(function(e) {
		e.preventDefault();
		if ($(".wrap-reviews_master .review:nth-child(n+4)").is(":hidden")) {
			$(".wrap-reviews_master .review:nth-child(n+4)").addClass("active");
			$(this).html("Скрыть");
		} else {
			$(".wrap-reviews_master .review:nth-child(n+4)").removeClass("active");
			$(this).html("Смотреть ещё");
		}
	});

	$(".btn-simple_reviews-main").click(function(e) {
		e.preventDefault();
		if ($(".wrap-reviews_main .review:nth-child(n+8)").is(":hidden")) {
			$(".wrap-reviews_main .review:nth-child(n+8)").addClass("active");
			$(this).html("Скрыть");
		} else {
			$(".wrap-reviews_main .review:nth-child(n+8)").removeClass("active");
			$(this).html("Показать еще");
		}
	});

	$(".services_frontpage .item-service .link-page").click(function(e) {
		e.preventDefault();
		if ($(this).siblings("ul").find("li:nth-child(n+6)").is(":hidden")) {
			$(this).siblings("ul").find("li:nth-child(n+6)").addClass("active");
			$(this).html("Скрыть");
		} else {
			$(this).siblings("ul").find("li:nth-child(n+6)").removeClass("active");
			$(this).html("Показать еще");
		}
	});


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}


$(".item-question__head").click(function() {
	$(this).parent().toggleClass("active");
	$(this).siblings().slideToggle(200);
	$(this).parent().siblings(".item-question").removeClass("active");
	$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
});

$("li.nav-prices__haschild > a").click(function(e) {
	e.preventDefault();
	$(this).parent().toggleClass("active");
	$(this).siblings().slideToggle(200);
	$(this).parent().siblings("li.nav-prices__haschild").removeClass("active");
	$(this).parent().siblings("li.nav-prices__haschild").find("ul").slideUp(200);
});

$(".btn-main_filter-price").click(function(e) {
	e.preventDefault();
	$(".nav-prices").slideToggle(200);
});


$(".col_form-cooperation form .btn-main").click(function(e) {
	e.preventDefault();
	$.fancybox.open('#modal-cooperation');
});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();

	/*input file*/
	$("input[type='file']").change(function(){
		var filename_text = $(this).parent().siblings(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.html(filename);
	});

	$(".rating_estimate .rating__item").click(function() {
		$(this).parent().removeClass("rating_1");
		$(this).parent().removeClass("rating_2");
		$(this).parent().removeClass("rating_3");
		$(this).parent().removeClass("rating_4");
		$(this).parent().removeClass("rating_5");
		var rating = $(this).attr("data-rating");
		$(this).parent().addClass("rating_" + rating);
	});

	//кнопка sandwich
	$(".btn_nav-menu").click(function() {
		$(".btn_nav-menu .sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile a").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".btn_nav-menu .sandwich").removeClass("active");
	});

	$(".btn_nav-dropdown").click(function() {
		$(".btn_nav-dropdown .sandwich").toggleClass("active");
		if ($(".menu-dropdown").is(":hidden")) {
			$(".menu-dropdown").slideDown(200);
		} else {
			$(".menu-dropdown").slideUp(200);
		}
	});

	$(".menu-dropdown a").click(function() {
		$(".menu-dropdown").slideUp(200);
		$(".btn_nav-dropdown .sandwich").removeClass("active");
	});

	$(document).mouseup(function (e){ 
		var div = $(".item-dropdown"); 
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) { 
			$(".item-dropdown__content").slideUp(200); 
		$(".item-dropdown__value").removeClass("active");
	}
});

	$(document).mouseup(function (e){ 
		var div2 = $(".menu-dropdown ul"); 
		if (!div2.is(e.target) 
			&& div2.has(e.target).length === 0) { 
			$(".menu-dropdown").slideUp(200); 
		$(".btn_nav-dropdown .sandwich").removeClass("active");
	}
});


	$(document).mouseup(function (e){ 
		var div3 = $(".item-header_city"); 
		if (!div3.is(e.target) 
			&& div3.has(e.target).length === 0) { 
			$(".item-header_city").removeClass("active");
		$(".dropdown-city").slideUp(200);
	}
});


	$(".item-dropdown__value").click(function() {
		$(".item-header_city").toggleClass("active");
		$(".dropdown-city").slideToggle(200);
	});
	//слайдер

	$('.slider-photos').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {

			}
		},
		{
			breakpoint: 768,
			settings: {

			}
		}
		]
	});

	$('.slider-reviews-master').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		verticalSwiping: true,
		vertical: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}
		]
	});

	$('.slider-reviews').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.slider-benefits').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		appendArrows:'.benefits .controls-slider',
		appendDots:'.benefits .controls-slider',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				adaptiveHeight: true,
			}
		}
		]

	});

	$('.slider-partners').slick({
		arrows: true,
		dots: false,
		infinite: true,
		variableWidth: true,
		centerMode: true,
		slidesToShow: 5,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.slider-review').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.slider-reviews-main').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);
	});

	$('.nav-prices li:not(".nav-prices__haschild") a').click(function(event) {
		event.preventDefault();
		$('.nav-prices li:not(".nav-prices__haschild")').removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-price").fadeOut(0);
		var selectTab3 = $(this).attr("href");
		$(selectTab3).fadeIn(200);
	});

	$('.reviews-page .tabs li a').click(function(event) {
		$('.slider-review').slick('refresh');
	});

	{
		if ($(window).width() < 992) { 
			$(".footer__title_mob").click(function() {
				$(this).toggleClass("active");
				$(this).siblings(".footer__content").slideToggle(200);
			});

			$('.nav-prices li:not(".nav-prices__haschild") a').click(function(event) {
				$(".nav-prices").slideUp(200);
			});
		}
	}

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

