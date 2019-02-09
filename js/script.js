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
    // END image slider
});

$(document).ready(function () {
    //$(".navbar li").width((100/$(".navbar li").length)+"%");
    
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