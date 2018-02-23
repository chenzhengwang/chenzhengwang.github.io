
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
	var num = 0;
/*$(document)对整个网页文档进行操作 
monsewheel是鼠标滚动方法
mousewheel(event n){} n代表滚动方向 向上为1 向下为-1*/

$(document).mousewheel(function(event,n){
    num=num-n;               
    if(num<0){
        num=0;      //页面在第一页时不可再向上滑
    }
    if(num>6){
        num=6;  //页面在最后一页时不可再向下滑
    }
            //屏幕整屏滚动  section元素相对自身移动
    $('section').stop().animate({'marginTop':-($(window).height())*num},400);
		var index = parseInt(Math.abs(num))+1;
    	for (var i = 0; i <$bt.length; i++) {
    		if($bt[i].getAttribute('index') == index){
    			$bt[i].className = 'bt'+ (i+1) + ' ' + 'on';
    		}else{
    			$bt[i].className = 'bt' + (i+1);	
    		}
    	}
    
});
	// $(document).scroll(function(){
	// });

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
	if($(window).width()>767){
		$('#project-page').css('top',$(window).height());
		$('#skill-page').css('top',2*$(window).height());
		$('#edu-page').css('top',3*$(window).height());
		$('#job-page').css('top',4*$(window).height());
		$('#more-page').css('top',5*$(window).height());
	}else{
		$(".baseinfo-page-content").css({
			'width':"370px",
			'position':"unset",
			'top':"0",
			'left':"0",
			'margin':"0 auto",
			'margin-top':"20%",
		});
		$('section').css({
			"position":"unset",
			"margin-top":"0px",
			"height":"auto",
		});
	}
});
