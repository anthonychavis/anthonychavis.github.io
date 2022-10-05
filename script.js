// for projects pg
import projects from './modules/projects.js';

import { pgTransitionObj } from './modules/pg-transition.js';

/*
const bgImg = async () =>
    (document.body.style.background =
        "url('resources/images/milad-fakurian-PGdW_bHDbpI-unsplash-medium.jpg')center/cover fixed");
        */

// PG TRANSITIONS
window.addEventListener('load', () => {
    // window.addEventListener('pageshow', () => {
    // corrects for back/forward on desktop browser, but 1) drops page-transition altogether on firefox 2) page "unload" transition dropped on chrome (& at least 2 non-ios, mobile browsers) but page "load" transition maintained.
    // also the nav elements don't always adjust color as they should. Could use dom traversing to deselect the icon color when another icon is hovered/focussed

    // await bgImg();

    pgTransitionObj.removeOverlay(200);

    const navAnchors = document.querySelectorAll('nav a, .pg-transition');

    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', pgTransitionObj.navigatingTransition);
    });
});
// console.log(window);
// console.log(window.location);

// check for persisted
window.addEventListener('pageshow', event => {
    if (event.persisted) {
        console.log('1) restored from bfcache');
        window.location.reload();
    } else {
        console.log('1) loaded manually');
    }
});

// window.addEventListener('pagehide', e =>
//     e.persisted
//         ? console.log('2) restored from bfcache')
//         : console.log('2) loaded manually')
// );

// HANDLEBARS for projects pg
projects();
