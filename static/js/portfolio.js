/* jshint esversion: 8 */

// portfolio details
let portfolio = [
    {
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
        link: "https://tim-ms4.2bn.dev/",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "Materialize", "Heroku", "Python", "Flask", "MongoDB"]
    },
    {
        title: "Unicorn Attractor",
        course: "Code Institute",
        project: "Milestone-05",
        name: "Full-Stack Frameworks",
        image: "milestone05",
        repo: "https://github.com/TravelTimN/ci-milestone05-fsfw",
        link: "https://tim-ms5.2bn.dev/",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "Materialize", "Heroku", "Python", "Django", "PostgreSQL", "Stripe", "AWS", "TravisCI"]
    },
    {
        title: "Simon Memory Game",
        course: "",
        project: "JavaScript memory game",
        name: "Simon Memory Game",
        image: "simon-game",
        repo: "https://github.com/TravelTimN/simon-game",
        link: "https://traveltimn.github.io/simon-game",
        chips: ["HTML", "CSS", "JavaScript", "Jasmine"]
    },
    {
        title: "Data Dashboard",
        course: "",
        project: "JavaScript data dashboard",
        name: "Data Dashboard",
        image: "data-dashboard",
        repo: "https://github.com/TravelTimN/dc-d3-top-eu-restaurants",
        link: "https://traveltimn.github.io/dc-d3-top-eu-restaurants",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "D3js", "DCjs", "LeafletJS"]
    },
    {
        title: "Bearly Escaped",
        course: "",
        project: "Escape Room concept website",
        name: "Bearly Escaped",
        image: "bearly-escaped",
        repo: "https://github.com/TravelTimN/bearly-escaped",
        link: "https://traveltimn.github.io/bearly-escaped",
        chips: ["HTML", "CSS", "JavaScript", "jQuery"]
    },
    {
        title: "Lingo Bingo",
        course: "",
        project: "Language Learning Bingo App",
        name: "Lingo Bingo",
        image: "lingo-bingo",
        repo: "https://github.com/TravelTimN/lingo-bingo",
        link: "https://tim.2bn.dev/lingo-bingo",
        chips: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Iraqi Kurdistan Guide",
        course: "",
        project: "Tour Guide in Kurdistan",
        name: "Iraqi Kurdistan Guide",
        image: "ikg",
        repo: "https://github.com/TravelTimN/iraqikurdistanguide",
        link: "https://www.iraqikurdistanguide.com",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Python", "Django", "PostgreSQL"]
    },
    {
        title: "CI Hackathon App",
        course: "Code Institute",
        project: "Hackathons",
        name: "Original Developer",
        image: "ci-hackathons",
        repo: "https://github.com/Code-Institute-Community/ci-hackathon-app",
        link: "https://hackathon.codeinstitute.net",
        chips: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "Django", "PostgreSQL"]
    },
    {
        title: "CI Mentor Quiz",
        course: "",
        project: "Code Institute Mentor Quizzes",
        name: "CI Mentor Quiz",
        image: "mentor-quiz",
        repo: "https://github.com/TravelTimN/ci-mentor-quiz",
        link: "https://ci-mentor-quiz-e357376a7f02.herokuapp.com",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Heroku", "Python", "Django", "PostgreSQL"]
    },
    {
        title: "Markdown Builder",
        course: "",
        project: "Code Institute Projects",
        name: "Markdown Builder",
        image: "markdown-builder",
        repo: "https://github.com/TravelTimN/markdown-builder",
        link: "https://tim.2bn.dev/markdown-builder/",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    },
    {
        title: "Binge Traveller Mike",
        course: "",
        project: "Mike Murtagh's Travel Blog",
        name: "Binge Traveller Mike",
        image: "binge-traveller",
        repo: "https://github.com/TravelTimN/binge-traveller-mike",
        link: "",
        chips: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Python", "Django", "PostgreSQL"]
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
        title: "Battle Blox",
        course: "",
        project: "Minecraft Multiplayer Game (Java)",
        name: "Battle Blox",
        image: "battle-blox",
        repo: "https://github.com/TravelTimN/minecraft-battle-blox-bedrock",
        link: "",
        chips: ["JavaScript"]
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
    li_project += `<li><div class="divider blue"></div><h2 class="center-align">${project.title}</h2><figure class="fadeUp"><img src="static/img/portfolio/${project.image}.png" alt="${project.title}" loading="lazy"><figcaption>`;
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
