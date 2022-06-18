'use strict';

// PG TRANSITIONS
window.addEventListener('load', () => {
    const transitionEl = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transitionEl.classList.remove('is-active');
    }, 400); // set time same as transition duration in CSS

    anchors.forEach(anchor => {
        anchor.addEventListener('click', e => {
            // prevent going to new page
            e.preventDefault();

            // allow going to new page
            let target = e.target.closest('a').href; // traverse
            // console.log(target);

            if (target.slice(-1) !== '#') {
                // add overlay when leaving pg
                transitionEl.classList.add('is-active');

                // target pg reveal
                setTimeout(() => {
                    window.location.href = target;
                }, 400); // set time same as transition duration in CSS
            }
        });
    });
});
// console.log(window);
// console.log(window.location);

// HANDLEBARS
if (window.location.href.endsWith('projects.html')) {
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
            this._title = title;
            this._imgSrc = imgSrc;
            this._imgAlt = imgAlt;
            this._siteLive = siteLive;
            this._siteCode = siteCode;

            this.keyValue();
        }

        get title() {
            return this._title;
        }

        get imgSrc() {
            return this._imgSrc;
        }

        get imgAlt() {
            return this._imgAlt;
        }

        get siteLive() {
            return this._siteLive;
        }

        get siteCode() {
            return this._siteCode;
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
}
