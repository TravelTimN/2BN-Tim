/* jshint esversion: 8 */

// skill details
let skills = [
    "HTML", "CSS", "JavaScript", "Python", "Git", "GitHub",
    "Django", "Flask", "Materialize", "Bootstrap", "Sass",
    "jQuery", "LeafletJS", "Stripe", "D3js", "DCjs", "Jasmine",
    "VSCode", "Heroku", "WordPress", "TravisCI", "Slack",
    "AWS", "MySQL", "PostgreSQL", "MongoDB", "Balsamiq", "Photoshop"
];

// slice array (alternate x6 & x5 per row)
let skillsRow1 = skills.slice(0, 6);
let skillsRow2 = skills.slice(6, 11);
let skillsRow3 = skills.slice(11, 17);
let skillsRow4 = skills.slice(17, 22);
let skillsRow5 = skills.slice(22, 28);

// set variables
let imgType = ".png";
let imgs_skills = "static/img/skills/";
let ul_hex6x = "<ul class='hexagons-6x fadeIn'>";
let ul_hex5x = "<ul class='hexagons-5x fadeIn'>";

// row 1
let row1 = ul_hex6x;
skillsRow1.map(skill => {
    row1 += `<li><div><img src="${imgs_skills}${skill.toLowerCase()}${imgType}" alt="${skill}" lazyload="on"><h1>${skill}</h1></div></li>`;
});
row1 += "</ul>";

// row 2
let row2 = ul_hex5x;
skillsRow2.map(skill => {
    row2 += `<li><div><img src="${imgs_skills}${skill.toLowerCase()}${imgType}" alt="${skill}" lazyload="on"><h1>${skill}</h1></div></li>`;
});
row2 += "</ul>";

// row 3
let row3 = ul_hex6x;
skillsRow3.map(skill => {
    row3 += `<li><div><img src="${imgs_skills}${skill.toLowerCase()}${imgType}" alt="${skill}" lazyload="on"><h1>${skill}</h1></div></li>`;
});
row3 += "</ul>";

// row 4
let row4 = ul_hex5x;
skillsRow4.map(skill => {
    row4 += `<li><div><img src="${imgs_skills}${skill.toLowerCase()}${imgType}" alt="${skill}" lazyload="on"><h1>${skill}</h1></div></li>`;
});
row4 += "</ul>";

// row 5
let row5 = ul_hex6x;
skillsRow5.map(skill => {
    row5 += `<li><div><img src="${imgs_skills}${skill.toLowerCase()}${imgType}" alt="${skill}" lazyload="on"><h1>${skill}</h1></div></li>`;
});
row5 += "</ul>";

// append all rows to #skills
let skillsDiv = document.getElementById("skills");
skillsDiv.innerHTML += (row1 + row2 + row3 + row4 + row5);
