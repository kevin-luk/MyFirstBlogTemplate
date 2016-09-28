$(function(){

	'use strict';

	// console.log("loaded");
	var backbtn = $('#back-to-top'),
			screen = $('html body'),
			menu = $('#menu'),
			sider = $('#sider'),
			mask = $('#mask')


	backbtn.on('click', function(){
		screen.animate({scrollTop: 0}, 300);
	})

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > $(window).height())
			backbtn.fadeIn();
		else {
			backbtn.fadeOut();
		}
	})

	menu.on('click', function(){
		sider.animate({right:"0"}, 500);
		mask.fadeIn(500);
	})

	mask.on('click', function(){
		sider.animate({right:"-300px"}, 500);
		mask.fadeOut(500);
	})

})