$(function() {
    
    let header = $("#header");
    let intro = $("#intro");
    let h;
    let pos = $(window).scrollTop();
    
    $(window).on("scroll load resize", function(){
        h = intro.innerHeight();
        pos = $(this).scrollTop();
   
        if (pos > h){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        let blockID = $(this).data('scroll');
        let blockOffset = $(blockID).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset - 70
        }, 500);
    });

});