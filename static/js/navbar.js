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
    $(window).on("scroll resize", function () {
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

    // // navbar scroll effects
    // $(window).on("scroll", function () {
    //     // top button
    //     if ($(window).scrollTop() > 200) {
    //         $("#btn-top").css({
    //             "right": "2em",
    //             "transform": "rotate(0)"
    //         });
    //     } else {
    //         $("#btn-top").css({
    //             "right": "-3em",
    //             "transform": "rotate(180deg)"
    //         });
    //     }
    //     let about = $("#about").offset().top - 200;
    //     let projects = $("#projects").offset().top - 200;
    //     let skills = $("#skills").offset().top - 200;
    //     let contact = $("footer").offset().top - 200;
    //     // viewport medium and up
    //     if ($(window).width() >= 600) {
    //         // about section
    //         if ($(window).scrollTop() >= about && $(window).scrollTop() <= projects) {
    //             $("#btn-about").children(".data-hover").css({
    //                 "transform": "rotateX(90deg) translateY(-22px)"
    //             });
    //         } else {
    //             $("#btn-about").children(".data-hover").css({
    //                 "transform": ""
    //             });
    //         }
    //         // projects section
    //         if ($(window).scrollTop() >= projects && $(window).scrollTop() <= skills) {
    //             $("#btn-projects").children(".data-hover").css({
    //                 "transform": "rotateX(90deg) translateY(-22px)"
    //             });
    //         } else {
    //             $("#btn-projects").children(".data-hover").css({
    //                 "transform": ""
    //             });
    //         }
    //         // skills section
    //         if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
    //             $("#btn-skills").children(".data-hover").css({
    //                 "transform": "rotateX(90deg) translateY(-22px)"
    //             });
    //         } else {
    //             $("#btn-skills").children(".data-hover").css({
    //                 "transform": ""
    //             });
    //         }
    //         // contact section
    //         if ($(window).scrollTop() >= contact) {
    //             $("#btn-contact").children(".data-hover").css({
    //                 "transform": "rotateX(90deg) translateY(-22px)"
    //             });
    //         } else {
    //             $("#btn-contact").children(".data-hover").css({
    //                 "transform": ""
    //             });
    //         }
    //     } else {
    //         // about section
    //         if ($(window).scrollTop() >= about && $(window).scrollTop() <= projects) {
    //             $("#btn-about").children(".data-hover").css({
    //                 "background-color": "rgba(var(--blueDark1), 1)"
    //             });
    //         } else {
    //             $("#btn-about").children(".data-hover").css({
    //                 "background-color": ""
    //             });
    //         }
    //         // projects section
    //         if ($(window).scrollTop() >= projects && $(window).scrollTop() <= skills) {
    //             $("#btn-projects").children(".data-hover").css({
    //                 "background-color": "rgba(var(--blueDark1), 1)"
    //             });
    //         } else {
    //             $("#btn-projects").children(".data-hover").css({
    //                 "background-color": ""
    //             });
    //         }
    //         // skills section
    //         if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
    //             $("#btn-skills").children(".data-hover").css({
    //                 "background-color": "rgba(var(--blueDark1), 1)"
    //             });
    //         } else {
    //             $("#btn-skills").children(".data-hover").css({
    //                 "background-color": ""
    //             });
    //         }
    //         // contact section
    //         if ($(window).scrollTop() >= contact) {
    //             $("#btn-contact").children(".data-hover").css({
    //                 "background-color": "rgba(var(--blueDark1), 1)"
    //             });
    //         } else {
    //             $("#btn-contact").children(".data-hover").css({
    //                 "background-color": ""
    //             });
    //         }
    //     }
    // });

    // // smooth scroll to sections
    // $("#btn-top").click(function () {
    //     $("html, body").animate({
    //         scrollTop: $("#top").offset().top
    //     }, 100);
    // });
    // $("#btn-about").click(function () {
    //     $("html, body").animate({
    //         scrollTop: $("#about").offset().top - 75
    //     }, 100);
    // });
    // $("#btn-projects").click(function () {
    //     $("html, body").animate({
    //         scrollTop: $("#projects").offset().top - 75
    //     }, 100);
    // });
    // $("#btn-skills").click(function () {
    //     $("html, body").animate({
    //         scrollTop: $("#skills").offset().top - 75
    //     }, 100);
    // });
    // $("#btn-contact").click(function () {
    //     $("html, body").animate({
    //         scrollTop: $("footer").offset().top - 75
    //     }, 100);
    // });

});
