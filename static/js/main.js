/* jshint esversion: 8 */

let word, char;

// materialize
function initMaterialize() {
    let parallax = document.querySelectorAll(".parallax");
    M.Parallax.init(parallax);
    let sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav, {
        edge: "right",
        draggable: true,
        preventScrolling: true
    });
}


// fade + slide into view
let fadeClasses = document.querySelectorAll(".fadeIn, .fadeUp, .fadeLeft, .fadeRight");

function check_if_in_view() {
    let windowH = window.innerHeight;
    let windowTopPosition = window.scrollY;
    let windowBottomPosition = (windowTopPosition + windowH);
    fadeClasses.forEach(item => {
        let itemH = item.offsetHeight;
        let itemTopPosition = item.offsetTop;
        let itemBottomPosition = itemTopPosition + itemH;
        if ((itemBottomPosition >= windowTopPosition) && (itemTopPosition <= windowBottomPosition)) {
            item.classList.add("inView");
        } else {
            item.classList.remove("inView");
        }
    });
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        // materialize
        initMaterialize();

        // image slider after css animation ends
        let skewedDev = document.querySelector(".skewed .developer");
        let devClass = document.querySelector(".developer");
        let header = document.getElementsByTagName("header")[0];
        let delta;
        skewedDev.addEventListener("animationend", function () {
            header.addEventListener("mousemove", function (e) {
                delta = (e.clientX - window.innerWidth / 2) * 0.5;
                devClass.style.width = e.clientX + 1000 + delta + "px";
            });
        });

        // animate <developer> in header
        setTimeout(() => {
            let developer = ["<developer>"];
            let typeChar = function () {
                let devID = document.getElementById("developer");
                devID.append(word[char++]);
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
        window.addEventListener("scroll", check_if_in_view, true);
        window.addEventListener("resize", check_if_in_view, true);
        window.addEventListener("load", check_if_in_view, true);

        // if Windows detected, use image, otherwise use Emoji (not supported on Windows - yet)
        let flagUS = document.getElementById("flag-us");
        let flagDE = document.getElementById("flag-de");
        let flagSCOT = document.getElementById("flag-scot");
        let flagIE = document.getElementById("flag-ie");
        if (navigator.appVersion.indexOf("Win") != -1) {
            flagUS.innerHTML = "<img src='static/img/flag-us.png' alt='USA' lazyload='on'>";
            flagDE.innerHTML = "<img src='static/img/flag-de.png' alt='Germany' lazyload='on'>";
            flagSCOT.innerHTML = "<img src='static/img/flag-scot.png' alt='Scotland' lazyload='on'>";
            flagIE.innerHTML = "<img src='static/img/flag-ie.png' alt='Ireland' lazyload='on'>";
        } else {
            flagUS.innerHTML = "🇺🇸";
            flagDE.innerHTML = "🇩🇪";
            flagSCOT.innerHTML = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
            flagIE.innerHTML = "🇮🇪";
        }

        // get current year for Copyright
        let getYear = new Date().getFullYear();
        let yearID = document.getElementById("year");
        if (getYear == 2019) {
            yearID.innerHTML = getYear;
        } else {
            yearID.innerHTML = `2019 - ${getYear}`;
        }

    }
};