$(window).on('scroll',function(){
        var distance = $(this).scrollTop();
        if(distance >= 600){
            $(this).off('scroll');

            $(".past").addClass("past_active");
            $(".future").addClass("future_active");
        }
    });