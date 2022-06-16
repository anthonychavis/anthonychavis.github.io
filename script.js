'use strict';

// HANDLEBARS
const context = {
    projects: [
        // {
        //     title: 'Chore Door',
        //     imgSrc: 'resources/images/choredoor-mobile-landscape-resize.jpg',
        //     imgAlt: 'Chore Door game in mobile landscape view',
        //     siteLive: 'https://anthonychavis.github.io/chore-door/',
        //     siteCode: 'https://github.com/anthonychavis/chore-door',
        // },
        // {
        // title: 'Pig Game',
        // imgSrc: 'resources/images/pig-game2.png',
        // imgAlt: 'Pig Game in mobile landscape view',
        // siteLive: 'https://anthonychavis.github.io/pig_game/',
        // siteCode: 'https://github.com/anthonychavis/pig_game',
        // },
        // {
        // title: 'Guess My Number',
        // imgSrc: 'resources/images/guessnumber.png',
        // imgAlt: 'Guess My Number game in mobile landscape view',
        // siteLive: 'https://anthonychavis.github.io/guessmynumber/',
        // siteCode: 'https://github.com/anthonychavis/guessmynumber',
        // },
        // {
        //     title: 'Excursion',
        //     imgSrc: 'resources/images/campground.jpg',
        //     imgAlt: 'campground with tents in the evening',
        //     siteLive: 'https://anthonychavis.github.io/excursion/',
        //     siteCode: 'https://github.com/anthonychavis/excursion',
        // },
        // {
        //     title: 'Musicon',
        //     // imgSrc:
        //     // imgAlt:
        //     siteLive: 'https://anthonychavis.github.io/musicon/index.html',
        //     siteCode: 'https://github.com/anthonychavis/musicon',
        // },
        // {
        //     title:
        //     imgSrc:
        //     imgAlt:
        //     siteLive:
        //     siteCode:
        // },
    ],
};

// Parent Class
class Projects {
    constructor(title, imgSrc, imgAlt, siteLive, siteCode) {
        this.title = title;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.siteLive = siteLive;
        this.siteCode = siteCode;

        this.keyValue();
    }

    keyValue() {
        const pairs = {
            title: `${this.title}`,
            imgSrc: `${this.imgSrc}`,
            imgAlt: `${this.imgAlt}`,
            siteLive: `${this.siteLive}`,
            siteCode: `${this.siteCode}`,
        };

        this.pushToContext(pairs);
    }

    pushToContext(newProject) {
        context.projects.push(newProject);
    }
}

// Chore Door
new Projects(
    'Chore Door',
    'resources/images/choredoor-mobile-landscape-resize.jpg',
    'Chore Door game in mobile landscape view',
    'https://anthonychavis.github.io/chore-door/',
    'https://github.com/anthonychavis/chore-door'
);

// Pig Game
new Projects(
    'Pig Game',
    'resources/images/pig-game2.png',
    'Pig Game in mobile landscape view',
    'https://anthonychavis.github.io/pig_game/',
    'https://github.com/anthonychavis/pig_game'
);

// Guess My Number
new Projects(
    'Guess My Number',
    'resources/images/guessnumber.png',
    'Guess My Number game in mobile landscape view',
    'https://anthonychavis.github.io/guessmynumber/',
    'https://github.com/anthonychavis/guessmynumber'
);

// Excursion
new Projects(
    'Excursion',
    'resources/images/campground.jpg',
    'campground with tents in the evening',
    'https://anthonychavis.github.io/excursion/',
    'https://github.com/anthonychavis/excursion'
);

/////////////

// select source html
const templateSource = document.getElementById('projectHB').innerHTML;
// fxn
const template = Handlebars.compile(templateSource);
// call fxn w/ object
const compiledHtml = template(context);
// assign
document.getElementById('project-list').innerHTML = compiledHtml;
