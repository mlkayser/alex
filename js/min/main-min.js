$(document).ready(function(){function e(e){var l=$(".slider li:visible");l.fadeOut();var i;e?(i=l.prev(".slide"),i.length||(i=$(".slider .slide:last-child"))):(i=l.next(".slide"),i.length||(i=$(".slider .slide:eq(0)").first())),i.fadeIn()}$("#search_revealer").on("click",function(){$(this).toggleClass("close"),$("#search").toggle().find("#s").focus()}),$("#menu_revealer").on("click",function(){$(this).toggleClass("icon_close icon_menu"),$("#menu_container").slideToggle("slow")}),$(".menu-item-has-children").prepend('<div class="clickable open"></div>'),$(".clickable").on("click",function(){$(this).siblings(".sub-menu").slideToggle("slow").end().toggleClass("open").toggleClass("close")}),$("html").on("touchstart",function(){var e=$(".menu-item-has-children>a");e.click(function(e){e.preventDefault(),$(this).click(function(){var e=$(this).attr("href");window.location.href=e})})});var l='<div class="slider-control previous">&lt;</div><div class="slider-control next">&gt;</div>';$(l).appendTo(".slider"),$(".slider .slide:gt(0)").hide();var i=$(".slider .slide:eq(0)");i.find("img").css("display","none");var n=i.find("img").attr("src");i.css("background-image","url("+n+")");var s=setInterval(e,7e3);$(".slider-control.next").click(function(){clearInterval(s),e(),s=setInterval(e,7e3)}),$(".slider-control.previous").click(function(){clearInterval(s),e("back"),s=setInterval(e,7e3)})});