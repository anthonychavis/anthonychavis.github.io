// for projects pg
import projects from './modules/projects.js';

import { pgTransitionObj } from './modules/pg-transition.js';

// PG TRANSITIONS
window.addEventListener('pageshow', () => {
    pgTransitionObj.removeOverlay(200);

    const navAnchors = document.querySelectorAll('nav a, .pg-transition');

    navAnchors.forEach(pgTransitionObj.navAnchorClick);
});

/*
// check for persisted
window.addEventListener('pageshow', event => {
    // const transitionEl = document.querySelector('.transition');
    if (event.persisted) {
        console.log('1) restored from bfcache');
        window.location.reload(); // cause increased data use? lighter, viable soln w/o framework?

        // transitionEl.classList.remove('is-active'); // when using "back btn" doesn't allow pg to remain --> goes back to former pg  // ♣♦♥♠ <-- try using constructor? ♣♦♥♠
    } else {
        console.log('1) loaded manually');
    }
});
*/

// window.addEventListener('pagehide', e =>
//     e.persisted
//         ? console.log('2) restored from bfcache')
//         : console.log('2) loaded manually')
// );

// HANDLEBARS for projects pg
projects();
