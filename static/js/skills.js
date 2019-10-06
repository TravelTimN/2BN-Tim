$(document).ready(function () {

    // skill details
    let imgFolder = "/static/img/skills/";
    let imgType = ".png";
    let skills = ["HTML", "CSS", "JavaScript", "Python", "Git", "GitHub", "Django", "Flask", "Materialize", "Bootstrap", "Sass", "jQuery", "LeafletJS", "Stripe", "D3js", "DCjs", "Jasmine", "VSCode", "Heroku", "WordPress", "TravisCI", "Slack", "AWS", "MySQL", "PostgreSQL", "MongoDB", "Balsamiq", "Photoshop"];
    let skillsDiv = $("#skills");

    // slice array (alternate x6 & x5 per row)
    let skillsRow1 = skills.slice(0, 6);
    let skillsRow2 = skills.slice(6, 11);
    let skillsRow3 = skills.slice(11, 17);
    let skillsRow4 = skills.slice(17, 22);
    let skillsRow5 = skills.slice(22, 28);

    let ul6x = "<ul class='hexagons-6x'>";
    let ul5x = "<ul class='hexagons-5x'>";
    let ulEnd = "</ul>";

    // row 1
    let row1 = ul6x;
    skillsRow1.map(skill => {
        row1 += "<li><div><img src='" + imgFolder + skill.toLowerCase() + imgType + "' alt='" + skill + "' lazyload='on'><h1>" + skill + "</h1></div></li>";
    });
    row1 += ulEnd;

    // row 2
    let row2 = ul5x;
    skillsRow2.map(skill => {
        row2 += "<li><div><img src='" + imgFolder + skill.toLowerCase() + imgType + "' alt='" + skill + "' lazyload='on'><h1>" + skill + "</h1></div></li>";
    });
    row2 += ulEnd;

    // row 3
    let row3 = ul6x;
    skillsRow3.map(skill => {
        row3 += "<li><div><img src='" + imgFolder + skill.toLowerCase() + imgType + "' alt='" + skill + "' lazyload='on'><h1>" + skill + "</h1></div></li>";
    });
    row3 += ulEnd;

    // row 4
    let row4 = ul5x;
    skillsRow4.map(skill => {
        row4 += "<li><div><img src='" + imgFolder + skill.toLowerCase() + imgType + "' alt='" + skill + "' lazyload='on'><h1>" + skill + "</h1></div></li>";
    });
    row4 += ulEnd;

    // row 5
    let row5 = ul6x;
    skillsRow5.map(skill => {
        row5 += "<li><div><img src='" + imgFolder + skill.toLowerCase() + imgType + "' alt='" + skill + "' lazyload='on'><h1>" + skill + "</h1></div></li>";
    });
    row5 += ulEnd;

    // append all rows to #skills
    $(skillsDiv).append(row1, row2, row3, row4, row5);

});
