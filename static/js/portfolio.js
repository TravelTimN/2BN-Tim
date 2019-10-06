$(document).ready(function () {

    // portfolio details
    let portfolio = [
        {
            course: "Code Institute",
            project: "Milestone-01",
            name: "User-Centric Frontend Development",
            image: "milestone01",
            repo: "https://github.com/TravelTimN/ci-milestone01-ucfd",
            link: "https://traveltimn.github.io/ci-milestone01-ucfd",
            "chips": ["HTML", "CSS", "JavaScript"]
        },
        {
            course: "Code Institute",
            project: "Milestone-02",
            name: "Interactive Frontend Development",
            image: "milestone02",
            repo: "https://github.com/TravelTimN/ci-milestone02-ifd",
            link: "https://traveltimn.github.io/ci-milestone02-ifd",
            "chips": ["HTML", "CSS", "JavaScript", "jQuery", "LeafletJS"]
        },
        {
            course: "Code Institute",
            project: "Milestone-04",
            name: "Data-Centric Development",
            image: "milestone04",
            repo: "https://github.com/TravelTimN/ci-milestone04-dcd",
            link: "https://desserts-2bn.herokuapp.com",
            "chips": ["HTML", "CSS", "JavaScript", "jQuery", "Materialize", "Heroku", "Python", "Flask", "MongoDB"]
        },
        {
            course: "Code Institute",
            project: "Milestone-05",
            name: "Full-Stack Frameworks",
            image: "milestone05",
            repo: "https://github.com/TravelTimN/ci-milestone05-fsfw",
            link: "https://unicorn-attractor-2bn.herokuapp.com",
            "chips": ["HTML", "CSS", "JavaScript", "jQuery", "Materialize", "Heroku", "Python", "Django", "PostgreSQL", "Stripe", "AWS", "TravisCI"]
        },
        {
            course: "",
            project: "",
            name: "Bearly Escaped",
            image: "bearly-escaped",
            repo: "https://github.com/TravelTimN/bearly-escaped",
            link: "https://traveltimn.github.io/bearly-escaped",
            "chips": ["HTML", "CSS", "JavaScript", "jQuery"]
        },
        {
            course: "",
            project: "",
            name: "Bauhaus-100",
            image: "bauhaus100",
            repo: "https://github.com/TravelTimN/bauhaus100",
            link: "https://traveltimn.github.io/bauhaus100",
            "chips": ["HTML", "CSS"]
        }
    ];

    // set variables
    let imgType = ".png";
    let imgs_skills = "static/img/skills/";
    let imgs_portfolio = "static/img/portfolio/";
    let div_portfolio = $("#portfolio");
    let ul_portfolio = "<ul class='portfolio-list text-shadow'>";
    let li_project = "";

    // map each project to own <li> item
    portfolio.map(project => {
        li_project += "<li><figure><img src='" + imgs_portfolio + project.image + imgType + "' alt='" + project.name + "' lazyload='on'>";
        li_project += "<figcaption><h2>" + project.course + "</h2><h4>" + project.project + "</h4><h3>" + project.name + "</h3>";
        li_project += "<a href='" + project.repo + "' class='btn' target='_blank'><i class='fab fa-github right' aria-hidden='true'></i>REPO</a>";
        li_project += "<a href='" + project.link + "' class='btn' target='_blank'><i class='fas fa-link right' aria-hidden='true'></i>LIVE</a>";
        li_project += "</figcaption></figure><ul class='chip-container center-align'>";
        // create 'chip' <div> for each tool used
        for(var i in project.chips) {
            li_project += "<li class='chip'><img src='" + imgs_skills + project.chips[i].toLowerCase() + imgType + "' alt='" + project.chips[i] + "'>" + project.chips[i] +"</li>";
        }
        li_project += "</ul></li>";
    });

    // add the <li> items to the main <ul>
    ul_portfolio += li_project + "</ul>";

    // // append <ul> to #portfolio div
    $(div_portfolio).append(ul_portfolio);

});
