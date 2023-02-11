$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active show");
       
    });

    //scroll to sections

    $(".navbar-start a").on("click", function (e) {
        // 1 
        e.preventDefault();
        // 2 
        const href = $(this).attr("href");
        // 3 
        $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
      });

    // blur effect on portfolio projects

    $(".portfolio .work").hover(function(){
        $(".portfolio").css("background", "linear-gradient(to right, #0d1220,#007fa7, #0d1220)");
    }, function(){
        $(".portfolio").css("background", "#0d1220");
    });
});