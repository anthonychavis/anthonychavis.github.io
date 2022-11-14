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

const projectsRender = () => {
    if (!window.location.href.endsWith('projects.html')) return;

    // select source html
    const templateSource = document.getElementById('projectHB').innerHTML;
    // fxn
    const template = Handlebars.compile(templateSource);
    // call fxn w/ object
    const compiledHtml = template(context);
    // assign
    document.getElementById('project-list').innerHTML = compiledHtml;
};

export default projectsRender;
