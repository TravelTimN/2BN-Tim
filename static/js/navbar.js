$(document).ready(function () {

    // navbar scroll effects
    $(window).on("scroll", function () {
        // toTop button
        if ($(window).scrollTop() > 200) {
            $("#btn-up").css({
                "right": "2em",
                "transform": "rotate(0)"
            });
        } else {
            $("#btn-up").css({
                "right": "-3em",
                "transform": "rotate(180deg)"
            });
        }
        let about = $("#about").offset().top - 200;
        let projects = $("#projects").offset().top - 200;
        let skills = $("#skills").offset().top - 200;
        let contact = $("footer").offset().top - 200;
        // viewport medium and up
        if ($(window).width() >= 600) {
            // about section
            if ($(window).scrollTop() >= about && $(window).scrollTop() <= projects) {
                $("#btn-about").children(".data-hover").css({
                    "transform": "rotateX(90deg) translateY(-22px)"
                });
            } else {
                $("#btn-about").children(".data-hover").css({
                    "transform": ""
                });
            }
            // projects section
            if ($(window).scrollTop() >= projects && $(window).scrollTop() <= skills) {
                $("#btn-projects").children(".data-hover").css({
                    "transform": "rotateX(90deg) translateY(-22px)"
                });
            } else {
                $("#btn-projects").children(".data-hover").css({
                    "transform": ""
                });
            }
            // skills section
            if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
                $("#btn-skills").children(".data-hover").css({
                    "transform": "rotateX(90deg) translateY(-22px)"
                });
            } else {
                $("#btn-skills").children(".data-hover").css({
                    "transform": ""
                });
            }
            // contact section
            if ($(window).scrollTop() >= contact) {
                $("#btn-contact").children(".data-hover").css({
                    "transform": "rotateX(90deg) translateY(-22px)"
                });
            } else {
                $("#btn-contact").children(".data-hover").css({
                    "transform": ""
                });
            }
        } else {
            // about section
            if ($(window).scrollTop() >= about && $(window).scrollTop() <= projects) {
                $("#btn-about").children(".data-hover").css({
                    "background-color": "rgba(var(--blueDark1), 1)"
                });
            } else {
                $("#btn-about").children(".data-hover").css({
                    "background-color": ""
                });
            }
            // projects section
            if ($(window).scrollTop() >= projects && $(window).scrollTop() <= skills) {
                $("#btn-projects").children(".data-hover").css({
                    "background-color": "rgba(var(--blueDark1), 1)"
                });
            } else {
                $("#btn-projects").children(".data-hover").css({
                    "background-color": ""
                });
            }
            // skills section
            if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
                $("#btn-skills").children(".data-hover").css({
                    "background-color": "rgba(var(--blueDark1), 1)"
                });
            } else {
                $("#btn-skills").children(".data-hover").css({
                    "background-color": ""
                });
            }
            // contact section
            if ($(window).scrollTop() >= contact) {
                $("#btn-contact").children(".data-hover").css({
                    "background-color": "rgba(var(--blueDark1), 1)"
                });
            } else {
                $("#btn-contact").children(".data-hover").css({
                    "background-color": ""
                });
            }
        }
    });

    // smooth scroll to sections
    $("#btn-up").click(function () {
        $("html, body").animate({
            scrollTop: $("#toTop").offset().top
        }, 100);
    });
    $("#btn-about").click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top - 75
        }, 100);
    });
    $("#btn-projects").click(function () {
        $("html, body").animate({
            scrollTop: $("#projects").offset().top - 75
        }, 100);
    });
    $("#btn-skills").click(function () {
        $("html, body").animate({
            scrollTop: $("#skills").offset().top - 75
        }, 100);
    });
    $("#btn-contact").click(function () {
        $("html, body").animate({
            scrollTop: $("footer").offset().top - 75
        }, 100);
    });

});
