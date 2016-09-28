$(function(){
	// console.log("loaded");
	var backbtn = $('#back-to-top'),
			screen = $('html body'),
			menu = $('#menu'),
			sider = $('#sider'),
			mask = $('#page-wrapper')


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
		sider.animate({right:0}, 300);
		mask.animate({background: rgba(0, 0, 0, 0.3)}, 300);
	})

})