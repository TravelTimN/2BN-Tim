$(document).ready(() => {

    // smooth scroll + ignore octothorp (#)
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({scrollTop: $(hash).offset().top - 150}, 100);
        }
    });

    // scroll to top button
    $("#btn-top").click(() => {
        $("html, body").animate({scrollTop: $("#top").offset().top}, 100);
    });

    // update elements when section in viewport
    $(window).on("scroll resize load", () => {

        // expand navbar once at top
        var nav = $("nav").offset().top - 10;
        if ($(window).scrollTop() >= nav) {
            $("nav").css({"border-top": "10px solid black", "height": "80px"});
        } else {
            $("nav").css({"border-top": "0 solid transparent", "height": "64px"});
        }

        // scroll to top button
        if ($(window).scrollTop() > 300) {
            $("#btn-top").css({"bottom": "0"});
        } else {
            $("#btn-top").css({"bottom": "-100px"});
        }

        // navlink top offset variables
        var top = $("#top").offset().top - 200;
        var about = $("#about").offset().top - 200;
        var portfolio = $("#portfolio").offset().top - 200;
        var skills = $("#skills").offset().top - 200;
        var contact = $("#contact").offset().top - 500;

        // update navlinks when sections in viewport
        if ($(window).scrollTop() >= top && $(window).scrollTop() <= about) {
            $("#navlink-top").addClass("active-section");
        } else {
            $("#navlink-top").removeClass("active-section");
        }
        if ($(window).scrollTop() >= about && $(window).scrollTop() <= portfolio) {
            $("#navlink-about").addClass("active-section");
            $("#about h2 span").addClass("heading-span-active");
        } else {
            $("#navlink-about").removeClass("active-section");
            $("#about h2 span").removeClass("heading-span-active");
        }
        if ($(window).scrollTop() >= portfolio && $(window).scrollTop() <= skills) {
            $("#navlink-portfolio").addClass("active-section");
            $("#portfolio h2 span").addClass("heading-span-active");
        } else {
            $("#navlink-portfolio").removeClass("active-section");
            $("#portfolio h2 span").removeClass("heading-span-active");
        }
        if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
            $("#navlink-skills").addClass("active-section");
            $("#skills h2 span").addClass("heading-span-active");
        } else {
            $("#navlink-skills").removeClass("active-section");
            $("#skills h2 span").removeClass("heading-span-active");
        }
        if ($(window).scrollTop() >= contact) {
            $("#navlink-contact").addClass("active-section");
            $("#contact h2 span").addClass("heading-span-active");
        } else {
            $("#navlink-contact").removeClass("active-section");
            $("#contact h2 span").removeClass("heading-span-active");
        }
    });

});
