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
    $("#btn-top").mouseenter(function () {
        $(this).addClass("pulse");
    });
    $("#btn-top").mouseleave(function () {
        $(this).removeClass("pulse");
    });

    // update elements when section in viewport
    $(window).on("scroll resize load", function () {

        // expand navbar once at top
        var nav = $("nav").offset().top - 10;
        if ($(window).scrollTop() >= nav) {
            $("nav").css({
                "border-top": "10px solid black",
                "height": "80px"
            });
        } else {
            $("nav").css({
                "border-top": "0 solid transparent",
                "height": "64px"
            });
        }

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

        var top = $("#top").offset().top - 150;
        var about = $("#about").offset().top - 150;
        var portfolio = $("#portfolio").offset().top - 150;
        var skills = $("#skills").offset().top - 150;
        var contact = $("#contact").offset().top - 150;
        var headingSpanIf = {
            "background-color": "rgba(var(--black), 1)",
            "color": "rgba(var(--lightBlueDark4), 1)",
            "border": "3px solid rgba(var(--lightBlueDark4), 1)",
            "box-shadow": "0 0 0 3px rgba(var(--black), 1)",
            "letter-spacing": "5px",
            "font-size": "1.5em"
        };
        var headingSpanElse = {
            "background-color": "rgba(var(--lightBlueDark4), 1)",
            "color": "rgba(var(--white), 1)",
            "border": "3px solid rgba(var(--white), 1)",
            "box-shadow": "0 0 0 3px rgba(var(--lightBlueDark4), 1)",
            "letter-spacing": "2px",
            "font-size": "1.25em"
        };
        if ($(window).scrollTop() >= top && $(window).scrollTop() <= about) {
            $("#navlink-top").addClass("active-section");
        } else {
            $("#navlink-top").removeClass("active-section");
        }
        if ($(window).scrollTop() >= about && $(window).scrollTop() <= portfolio) {
            $("#navlink-about").addClass("active-section");
            $("#about span.heading-span").css(headingSpanIf);
        } else {
            $("#navlink-about").removeClass("active-section");
            $("#about span.heading-span").css(headingSpanElse);
        }
        if ($(window).scrollTop() >= portfolio && $(window).scrollTop() <= skills) {
            $("#navlink-portfolio").addClass("active-section");
            $("#portfolio span.heading-span").css(headingSpanIf);
        } else {
            $("#navlink-portfolio").removeClass("active-section");
            $("#portfolio span.heading-span").css(headingSpanElse);
        }
        if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
            $("#navlink-skills").addClass("active-section");
            $("#skills span.heading-span").css(headingSpanIf);
        } else {
            $("#navlink-skills").removeClass("active-section");
            $("#skills span.heading-span").css(headingSpanElse);
        }
        if ($(window).scrollTop() >= contact) {
            $("#navlink-contact").addClass("active-section");
            $("#contact span.heading-span").css(headingSpanIf);
        } else {
            $("#navlink-contact").removeClass("active-section");
            $("#contact span.heading-span").css(headingSpanElse);
        }
    });

});
