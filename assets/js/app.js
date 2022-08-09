$(function() {

    const header = $("#header");
    const nav = $("#nav");
    const introH = $("#intro").innerHeight();
    var scrollOffset = $(this).scrollTop();


    /* Fixed header */
    checkScroll(scrollOffset);

    $(window).on("scroll",function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH)
        {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        const blockId = $(this).data('scroll');
        const blockOffset= $(blockId).offset().top;

        $("#nav a").removeClass("active");
        nav.removeClass("active");
        $("#nav-toggle").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /* Menu nav toggle */
    $("#nav-toggle").on("click",function(event){
        event.preventDefault();

        nav.toggleClass("active");
        $(this).toggleClass("active");
    });

    /* Smooth scroll */
    $("[data-collapse]").on("click",function(event){
        event.preventDefault();

       const $this = $(this);
       const blockId = $this.data("collapse");
       $this.toggleClass("active");
    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidersToShow: 3,
        slidersToScroll: 1

    });
});
