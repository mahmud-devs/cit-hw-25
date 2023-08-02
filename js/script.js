$(function(){
    // bottom to top
    $(".bottom_to_top").click(function(){
        $("body,html").animate({scrollTop:0},1000)
    });
    $(window).scroll(function(){
        let scroll = $(this).scrollTop()
        console.log(scroll);
        if(scroll > 400){
            $(".bottom_to_top").fadeIn(600)
        }else{
            $(".bottom_to_top").fadeOut(600)
        }
        if(scroll > 200){
            $(".nav").addClass("fixed")
        }else{
            $(".nav").removeClass("fixed")
        }
    })
    // ------preloader start here----
    $(window).on("load", function(){
        $(".preloader_main").delay(2000).fadeOut(500)
    })

});