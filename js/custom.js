var screen_width;

$(document).ready(function(){
	screenWidthCalc();
});

$(window).resize(function(){
	screenWidthCalc();
});

function screenWidthCalc() {
	screen_width = $(window).width();	






	if(screen_width > 768){
		$(".main-navbar-menu .navbar-nav").addClass("pull-right");
	}else if(screen_width <= 768){
		$(".main-navbar-menu .navbar-nav").removeClass("pull-right");
	}



}