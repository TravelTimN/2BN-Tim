$(document).ready(function () {

    // smooth scroll + ignore octothorp (#)
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 150
            }, 100);
        }
    });

    // scroll to top button
    $("#btn-top").click(function () {
        $("html, body").animate({
            scrollTop: $("#top").offset().top
        }, 100);
    });

    // update navlinks if section in-view
    $(window).on("scroll resize load", function () {
        // scroll to top button
        if ($(window).scrollTop() > 300) {
            $("#btn-top").css({
                "right": "2em",
                "transform": "rotate(0)"
            });
        } else {
            $("#btn-top").css({
                "right": "-3em",
                "transform": "rotate(180deg)"
            });
        }
        var top = $("#top").offset().top - 200;
        var about = $("#about").offset().top - 200;
        var projects = $("#projects").offset().top - 200;
        var skills = $("#skills").offset().top - 200;
        var contact = $("#contact").offset().top - 200;
        if ($(window).scrollTop() >= top && $(window).scrollTop() <= about) {
            $("#navlink-top").addClass("active-section");
        } else {
            $("#navlink-top").removeClass("active-section");
        }
        if ($(window).scrollTop() >= about && $(window).scrollTop() <= projects) {
            $("#navlink-about").addClass("active-section");
        } else {
            $("#navlink-about").removeClass("active-section");
        }
        if ($(window).scrollTop() >= projects && $(window).scrollTop() <= skills) {
            $("#navlink-projects").addClass("active-section");
        } else {
            $("#navlink-projects").removeClass("active-section");
        }
        if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
            $("#navlink-skills").addClass("active-section");
        } else {
            $("#navlink-skills").removeClass("active-section");
        }
        if ($(window).scrollTop() >= contact) {
            $("#navlink-contact").addClass("active-section");
        } else {
            $("#navlink-contact").removeClass("active-section");
        }
    });

});
