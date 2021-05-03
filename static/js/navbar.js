/* jshint esversion: 8 */


// smooth scroll + ignore octothorp (#)
let anchors = document.querySelectorAll("a");
anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            let hash = document.getElementById(this.hash.replace("#", ""));
            let hashOffset = hash.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: hashOffset - 75
            });
        }
    });
});

// scroll to top button
let btnTop = document.getElementById("btn-top");
btnTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

// update elements when section in viewport

window.addEventListener("scroll", viewportMagic, true);
window.addEventListener("resize", viewportMagic, true);
window.addEventListener("load", viewportMagic, true);

function viewportMagic() {

    // expand navbar once at top
    let nav = document.getElementsByTagName("nav")[0];
    let navOffset = nav.offsetTop - 10;
    if (window.scrollY >= navOffset) {
        nav.style.cssText = "border-top: 10px solid black; height: 80px;";
    } else {
        nav.style.cssText = "border-top: 0 solid transparent; height: 64px;";
    }

    // scroll to top button
    if (window.scrollY > 300) {
        btnTop.style.cssText = "bottom: 0;";
    } else {
        btnTop.style.cssText = "bottom: -100px;";
    }

    // navlink top offset variables
    let topOffset = document.getElementById("top").offsetTop - 200;
    let aboutOffset = document.getElementById("about").offsetTop - 200;
    let portfolioOffset = document.getElementById("portfolio").offsetTop - 200;
    let skillsOffset = document.getElementById("skills").offsetTop - 200;
    let contactOffset = document.getElementById("contact").offsetTop - 500;

    // update navlinks when sections in viewport
    //-- top
    let navlinkTop = document.getElementById("navlink-top");
    if (window.scrollY >= topOffset && window.scrollY <= aboutOffset) {
        navlinkTop.classList.add("active-section");
    } else {
        navlinkTop.classList.remove("active-section");
    }
    //-- about
    let navlinkAbout = document.getElementById("navlink-about");
    let aboutSpan = document.querySelector("#about h2 span");
    if (window.scrollY >= aboutOffset && window.scrollY <= portfolioOffset) {
        navlinkAbout.classList.add("active-section");
        aboutSpan.classList.add("heading-span-active");
    } else {
        navlinkAbout.classList.remove("active-section");
        aboutSpan.classList.remove("heading-span-active");
    }
    //-- portfolio
    let navlinkPortfolio = document.getElementById("navlink-portfolio");
    let portfolioSpan = document.querySelector("#portfolio h2 span");
    if (window.scrollY >= portfolioOffset && window.scrollY <= skillsOffset) {
        navlinkPortfolio.classList.add("active-section");
        portfolioSpan.classList.add("heading-span-active");
    } else {
        navlinkPortfolio.classList.remove("active-section");
        portfolioSpan.classList.remove("heading-span-active");
    }
    //-- skills
    let navlinkSkills = document.getElementById("navlink-skills");
    let skillsSpan = document.querySelector("#skills h2 span");
    if (window.scrollY >= skillsOffset && window.scrollY <= contactOffset) {
        navlinkSkills.classList.add("active-section");
        skillsSpan.classList.add("heading-span-active");
    } else {
        navlinkSkills.classList.remove("active-section");
        skillsSpan.classList.remove("heading-span-active");
    }
    //-- contact
    let navlinkContact = document.getElementById("navlink-contact");
    if (window.scrollY >= contactOffset) {
        navlinkContact.classList.add("active-section");
    } else {
        navlinkContact.classList.remove("active-section");
    }

}
