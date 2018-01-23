
$(function(){
	var	$bt = $("#float-nav span");
	$(window).resize();
	$("#float-nav a").click(function () {
    	$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top+ "px"}, 500);
    	for (var i = 0; i <$bt.length; i++) {
			if (i + 1== this.childNodes[0].getAttribute('index')) {
    			$bt[i].className = 'bt'+ (i+1) + ' ' + 'on';
			}else{
				var index = $bt[i].getAttribute('index');
    			$bt[i].className = 'bt' + (i+1);
			}	
		}
    	return false;//不要这句会有点卡顿
	});
	$(document).scroll(function(){
		var high = $(document).scrollTop();
		var index = parseInt(high/1012)+1;
    	for (var i = 0; i <$bt.length; i++) {
    		if($bt[i].getAttribute('index') == index){
    			$bt[i].className = 'bt'+ (i+1) + ' ' + 'on';
    		}else{
    			$bt[i].className = 'bt' + (i+1);	
    		}
    	}
	});

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
	if(parseInt($(window).width())<771){	
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


