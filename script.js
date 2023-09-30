// for projects pg
import projects from './modules/projects.js';

import { pgTransitionObj } from './modules/pg-transition.js';

// PG TRANSITIONS
window.addEventListener('load', () => {
    pgTransitionObj.addTransitionDelay(250);
    pgTransitionObj.removeOverlay();
    const navAnchors = document.querySelectorAll('nav a, .pg-transition');
    navAnchors.forEach(pgTransitionObj.navAnchorClick);
    return;
});

// HANDLEBARS for projects pg
projects();
