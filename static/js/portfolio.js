/* jshint esversion: 8 */

// portfolio details
let portfolio = [{
        title: "Paul M Music",
        course: "Code Institute",
        project: "Milestone-01",
        name: "User-Centric Frontend Development",
        image: "milestone01",
        repo: "https://github.com/TravelTimN/ci-milestone01-ucfd",
        link: "https://traveltimn.github.io/ci-milestone01-ucfd",
        chips: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "IATA Map",
        course: "Code Institute",
        project: "Milestone-02",
        name: "Interactive Frontend Development",
        image: "milestone02",
        repo: "https://github.com/TravelTimN/ci-milestone02-ifd",
        link: "https://traveltimn.github.io/ci-milestone02-ifd",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "LeafletJS"]
    },
    {
        title: "2BN-Desserts",
        course: "Code Institute",
        project: "Milestone-04",
        name: "Data-Centric Development",
        image: "milestone04",
        repo: "https://github.com/TravelTimN/ci-milestone04-dcd",
        link: "https://desserts-2bn.herokuapp.com",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "Materialize", "Heroku", "Python", "Flask", "MongoDB"]
    },
    {
        title: "Unicorn Attractor",
        course: "Code Institute",
        project: "Milestone-05",
        name: "Full-Stack Frameworks",
        image: "milestone05",
        repo: "https://github.com/TravelTimN/ci-milestone05-fsfw",
        link: "https://unicorn-attractor-2bn.herokuapp.com",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "Materialize", "Heroku", "Python", "Django", "PostgreSQL", "Stripe", "AWS", "TravisCI"]
    },
    {
        image: "simon-game",
        title: "Simon Memory Game",
        course: "",
        project: "JavaScript memory game",
        name: "Simon Memory Game",
        repo: "https://github.com/TravelTimN/simon-game",
        link: "https://traveltimn.github.io/simon-game",
        chips: ["HTML", "CSS", "JavaScript", "Jasmine"]
    },
    {
        image: "data-dashboard",
        title: "Data Dashboard",
        course: "",
        project: "JavaScript data dashboard",
        name: "Data Dashboard",
        repo: "https://github.com/TravelTimN/dc-d3-top-eu-restaurants",
        link: "https://traveltimn.github.io/dc-d3-top-eu-restaurants",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "D3js", "DCjs", "LeafletJS"]
    },
    {
        image: "bearly-escaped",
        title: "Bearly Escaped",
        course: "",
        project: "Escape Room concept website",
        name: "Bearly Escaped",
        repo: "https://github.com/TravelTimN/bearly-escaped",
        link: "https://traveltimn.github.io/bearly-escaped",
        chips: ["HTML", "CSS", "JavaScript", "jQuery"]
    },
    {
        image: "lingo-bingo",
        title: "Lingo Bingo",
        course: "",
        project: "Language Learning Bingo App",
        name: "Lingo Bingo",
        repo: "https://github.com/TravelTimN/lingo-bingo",
        link: "https://tim.2bn.dev/lingo-bingo",
        chips: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Bauhaus100",
        course: "",
        project: "Celebrating 100 years of Bauhaus Design with CSS Grid",
        name: "Bauhaus100",
        image: "bauhaus100",
        repo: "https://github.com/TravelTimN/bauhaus100",
        link: "https://traveltimn.github.io/bauhaus100",
        chips: ["HTML", "CSS"]
    },
    {
        title: "Christmas 2013",
        course: "",
        project: "Learning Adobe After Effects",
        name: "Bitstrips Christmas Greeting Animation",
        image: "ae2013",
        repo: "",
        link: "https://youtu.be/7RUtq_EOrJg",
        chips: ["Photoshop", "AfterEffects", "YouTube"]
    }
];

// map each project to own <li> item
let li_project = "";
portfolio.map(project => {
    li_project += `<li><div class="divider blue"></div><h2 class="center-align">${project.title}</h2><figure class="fadeUp"><img src="static/img/portfolio/${project.image}.png" alt="${project.title}" lazyload="on"><figcaption>`;
    if (project.course) {
        li_project += `<h2>${project.course}</h2>`;
    }
    if (project.project) {
        li_project += `<h4>${project.project}</h4>`;
    }
    if (project.name) {
        li_project += `<h3>${project.name}</h3>`;
    }
    if (project.repo) {
        li_project += `<a href="${project.repo}" class="btn" rel="noopener" target="_blank"><i class="fab fa-github right" aria-hidden="true"></i>REPO</a>`;
    }
    if (project.link) {
        li_project += `<a href="${project.link}" class="btn" rel="noopener" target="_blank"><i class="fas fa-link right" aria-hidden="true"></i>LIVE</a>`;
    }
    li_project += `</figcaption></figure><ul class="chip-container center-align">`;
    // create "chip" <div> for each tool used
    if (project.chips) {
        project.chips.forEach(chip => {
            li_project += `<li class="chip fadeIn"><img src="static/img/skills/${chip.toLowerCase()}.png" alt="${chip}">${chip}</li>`;
        });
    }
    li_project += `</ul></li>`;
});

// add the <li> items to the main <ul>
let ul_portfolio = `<ul class="portfolio-list text-shadow">${li_project}</ul>`;

// append <ul> to #portfolio div
let div_portfolio = document.getElementById("portfolio");
div_portfolio.innerHTML += ul_portfolio;
