$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active show");
       
    });

    // blur effect on portfolio projects

    $(".portfolio .work").hover(function(){
        $(".portfolio").css("background", "linear-gradient(to right, #0d1220,#007fa7, #0d1220)");
    }, function(){
        $(".portfolio").css("background", "#0d1220");
    });
});