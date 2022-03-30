'use strict';

// HANDLEBARS
const context = {
    projects: [
        {
            title: 'Chore Door',
            imgSrc: 'resources/images/choredoor-mobile-landscape-resize.jpg',
            imgAlt: 'Chore Door game in mobile landscape view',
            siteLive: 'https://anthonychavis.github.io/chore-door/',
            siteCode: 'https://github.com/anthonychavis/chore-door',
        },
        {
            title: 'Pig Game',
            imgSrc: 'resources/images/pig-game2.png',
            imgAlt: 'Pig Game in mobile landscape view',
            siteLive: 'https://anthonychavis.github.io/pig_game/',
            siteCode: 'https://github.com/anthonychavis/pig_game',
        },
        {
            title: 'Guess My Number',
            imgSrc: 'resources/images/guessnumber.png',
            imgAlt: 'Guess My Number game in mobile landscape view',
            siteLive: 'https://anthonychavis.github.io/guessmynumber/',
            siteCode: 'https://github.com/anthonychavis/guessmynumber',
        },
        {
            title: 'Excursion',
            imgSrc: 'resources/images/campground.jpg',
            imgAlt: 'campground with tents in the evening',
            siteLive: 'https://anthonychavis.github.io/excursion/',
            siteCode: 'https://github.com/anthonychavis/excursion',
        },
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

// select source html
const templateSource = document.getElementById('projectHB').innerHTML;
// fxn
const template = Handlebars.compile(templateSource);
// call fxn w/ object
const compiledHtml = template(context);
// assign
document.getElementById('project-list').innerHTML = compiledHtml;
