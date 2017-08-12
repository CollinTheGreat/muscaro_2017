$(window).on('scroll',function(){
    var distance = $(this).scrollTop();
    if(distance >=70){
    	$(".quote").addClass("quote_active");
    }
    if(distance >= 370){
        $(this).off('scroll');

        $(".past").addClass("past_active");
        $(".future").addClass("future_active");
    }
});