$(document).ready(function () {

    // materialize
    function initMaterialize() {
        $(".parallax").parallax();
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
    setTimeout(function () {
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

});
