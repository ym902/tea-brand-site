$(function(){

    //.mainvisual
    var count = $("#mainvisual-image li").length;
    var current = 1;
    var next = 2;
    var interval = 3000;
    var duration = 700;
    var timer;

    $("#mainvisual-image li:not(:first-child)").hide();

    timer = setInterval(slideTimer, interval);

    function slideTimer(){
        $("#mainvisual-image li:nth-child(" + current + ")").fadeOut(duration);
        $("#mainvisual-image li:nth-child(" + next + ")").fadeIn(duration);

        current = next;
        next = ++next;

        if(next > count){
            next = 1;
        }

        $("#mainvisual-button li a").removeClass("target");
        $("#mainvisual-button li:nth-child(" + current + ") a").addClass("target");
    }

    $("#mainvisual-button li a").click(function(){
        next = $(this).html();

        clearInterval(timer);
        timer = setInterval(slideTimer, interval);

        slideTimer();

        return false;
    });
    

    //header-inner scroll
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $(".header-inner").css("background", "#ff8f39");
        }else{
            $(".header-inner").css("background", "transparent");
            $(".header-inner").hover(function(){
                $(this).css("background", "#ff8f39");
            }, function(){
                $(this).css("background", "transparent");
            });
        }
    });


    //shop scroll
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href);
        var position = target.offset().top;

        $('body,html').stop().animate({scrollTop:position}, 600); // スクロール速度ミリ秒
        return false;
    });


    //hamburger menu slide
    $(".fa-angle-down").click(function(){
        $(".hamburger-content dd").slideToggle(300);
    });
});