
$(function(){
	$(window).resize();
	// $("#block-nav").css("z-index", 1);
	// $("#block-nav").navFixed();
	// $('#fstPage-down a, nav a, #logo').bind('click',function(event){
	// 	var $anchor = $(this);
	// 	$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
	// 	event.preventDefault();
	// });
});

$(window).resize(function(){ 
	$("#baseinfo-page").css("height", $(window).height());
	if(parseInt($(window).height())<771){	
		$('#float-nav').hide();
	}else{
		$('#float-nav').show();
	}
	// $('.blockTitle').stop().fadeIn("normal").animate({
	// 	"top" : ($(window).height() - $('.blockTitle').outerHeight())/2
	// },500); 
	// $("#block-wantMore").css("height", $(window).height()-52 + "px");
	// $('#block-wantMore>p').css("top", ($("#block-wantMore").outerHeight(true) - $('#block-wantMore>p').outerHeight())/2 + "px"); 
});