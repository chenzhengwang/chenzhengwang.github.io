var num = 0;
/*$(document)对整个网页文档进行操作 
monsewheel是鼠标滚动方法
mousewheel(event n){} n代表滚动方向 向上为1 向下为-1*/

$(document).mousewheel(function(event,n){
    num=num-n;               
    if(num<0){
        num=0;      //页面在第一页时不可再向上滑
    }
    if(num>4){
        num=4;  //页面在最后一页时不可再向下滑
    }
            //屏幕整屏滚动  section元素相对自身移动
    $('section').stop().animate({'marginTop':-1012*num},400);
    
});