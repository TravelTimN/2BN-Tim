$(document).ready(() => {

    // materialize
    function initMaterialize() {
        $(".parallax").parallax();
        $(".sidenav").sidenav({
            edge: "right",
            draggable: true,
            preventScrolling: true
        });
    }
    initMaterialize();

    // image slider after css animation ends
    $(".skewed .developer").on("animationend", function () {
        $("header").on("mousemove", function (e) {
            delta = (e.clientX - window.innerWidth / 2) * 0.5;
            $(".developer").css("width", e.clientX + 1000 + delta + "px");
        });
    });

    // animate <developer> in header
    setTimeout(() => {
        let developer = ["<developer>"];
        let typeChar = function () {
            $("#developer").append(word[char++]);
            if (char < word.length) {
                setTimeout(typeChar, 100);
            } else {
                typeWord();
            }
        };
        let i = 0;
        let typeWord = function () {
            if (i < developer.length) {
                word = developer[i++];
                char = 0;
                typeChar();
            }
        };
        typeWord();
    }, 500);

    // fade + slide into view
    var $animation_elements = $(".fadeIn, .fadeUp, .fadeLeft, .fadeRight");
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass("inView");
            } else {
                $element.removeClass("inView");
            }
        });
    }
    $window.on("scroll resize", check_if_in_view);
    $window.trigger("scroll");

    // get current year for Copyright
    let year = new Date().getFullYear();
    if (year == 2019) {
        $("#year").html(year);
    } else {
        $("#year").html("2019 - " + year);
    }

});
