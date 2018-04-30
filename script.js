$('.nevigaiton ul li').click(function(){
	
	//$('.nevigaiton ul ul').slideToggle(500);
	$(this).children('ul').slideToggle(500);
	
});

$('.hamberger a').click(function(){
	$('.nevigaiton').slideToggle(500);
});

$('.totop').click(function(){
	$('body,html').animate({scrollTop:100},5000);
});

$(window).scroll(function(){
	var top=$(window).scrollTop();
	//alert(top);
	if(top>2000){
		$('.totop').fadeIn(500);
	}
	else{
		$('.totop').fadeOut(500);
	}
});


$('.drag').draggable();