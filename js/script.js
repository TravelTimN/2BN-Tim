document.addEventListener("DOMContentLoaded", function () {
    //-------------
    // image slider
    //-------------
    let wrapper = document.getElementById("wrapper");
    let topLayer = wrapper.querySelector(".developer");
    let handle = wrapper.querySelector(".slider");
    let skew = 0;
    let delta = 0;
    if (wrapper.className.indexOf("skewed") != -1) {
        skew = 1000;
    }
    wrapper.addEventListener("mousemove", function (e) {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = e.clientX + delta + "px";
        topLayer.style.width = e.clientX + skew + delta + "px";
    });
});

$(document).ready(function () {

    $(window).on("scroll", function () {

        var about = $("#about").offset().top - 100;
        var projects = $("#projects").offset().top - 100;
        var skills = $("#skills").offset().top - 100;
        var contact = $("#footer").offset().top - 100;

        if ($(window).scrollTop() > 200) {
            $("#top").show();
            $("#top").css({
                "bottom": ""
            });
        } else {
            $("#top").hide();
        }
        if ($(window).scrollTop() <= contact - 10) {
            $("#bottom").show();
        } else {
            $("#bottom").hide();
            $("#top").css({
                "bottom": "15px"
            });
        }

        if ($(window).width() >= 600) {

            if ($(window).scrollTop() >= about && $(window).scrollTop() <= projects) {
                $("#btn-about").children(".data-hover").css({
                    "transform": "rotateX(90deg) translateY(-22px)",
                    "background-color": "#004377"
                });
            } else {
                $("#btn-about").children(".data-hover").css({
                    "transform": "",
                    "background-color": ""
                });
            }

            if ($(window).scrollTop() >= projects && $(window).scrollTop() <= skills) {
                $("#btn-projects").children(".data-hover").css({
                    "transform": "rotateX(90deg) translateY(-22px)",
                    "background-color": "#004377"
                });
            } else {
                $("#btn-projects").children(".data-hover").css({
                    "transform": "",
                    "background-color": ""
                });
            }

            if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
                $("#btn-skills").children(".data-hover").css({
                    "transform": "rotateX(90deg) translateY(-22px)",
                    "background-color": "#004377"
                });
            } else {
                $("#btn-skills").children(".data-hover").css({
                    "transform": "",
                    "background-color": ""
                });
            }

            if ($(window).scrollTop() >= contact) {
                $("#btn-contact").children(".data-hover").css({
                    "transform": "rotateX(90deg) translateY(-22px)",
                    "background-color": "#004377"
                });
            } else {
                $("#btn-contact").children(".data-hover").css({
                    "transform": "",
                    "background-color": ""
                });
            }


        } else if ($(window).width() < 600) {
            if ($(window).scrollTop() >= about && $(window).scrollTop() <= projects) {
                $("#btn-about").children(".data-hover").css({
                    "background-color": "#1BA9DD"
                });
            } else {
                $("#btn-about").children(".data-hover").css({
                    "background-color": ""
                });
            }
            if ($(window).scrollTop() >= projects && $(window).scrollTop() <= skills) {
                $("#btn-projects").children(".data-hover").css({
                    "background-color": "#1BA9DD"
                });
            } else {
                $("#btn-projects").children(".data-hover").css({
                    "background-color": ""
                });
            }

            if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
                $("#btn-skills").children(".data-hover").css({
                    "background-color": "#1BA9DD"
                });
            } else {
                $("#btn-skills").children(".data-hover").css({
                    "background-color": ""
                });
            }

            if ($(window).scrollTop() >= contact) {
                $("#btn-contact").children(".data-hover").css({
                    "background-color": "#1BA9DD"
                });
            } else {
                $("#btn-contact").children(".data-hover").css({
                    "background-color": ""
                });
            }
        }
    });


    $("#top").click(function () {
        $("html, body").animate({
            scrollTop: $("#toTop").offset().top
        }, 100);
    });
    $("#bottom").click(function () {
        $("html, body").animate({
            scrollTop: $("#footer").offset().top - 75
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
            scrollTop: $("#footer").offset().top - 75
        }, 100);
    });

});