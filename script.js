// for projects pg
import projects from './modules/projects.js';

/*
const bgImg = async () =>
    (document.body.style.background =
        "url('resources/images/milad-fakurian-PGdW_bHDbpI-unsplash-medium.jpg')center/cover fixed");
        */

// PG TRANSITIONS
window.addEventListener('load', async () => {
    // window.addEventListener('pageshow', () => {
    // corrects for back/forward on desktop browser, but 1) drops page-transition altogether on firefox 2) page "unload" transition dropped on chrome (& at least 2 non-ios, mobile browsers) but page "load" transition maintained.
    // also the nav elements don't always adjust color as they should. Could use dom traversing to deselect the icon color when another icon is hovered/focussed

    const transitionEl = document.querySelector('.transition');
    const navAnchors = document.querySelectorAll('nav a, .pg-transition');
    // promisify setTimeout - fxn that returns a Promise
    const timer = ms => new Promise(resolve => setTimeout(resolve, ms));

    // await bgImg();

    // timer(200).then(() => transitionEl.classList.remove('is-active')); // set time as desired
    let shortDelay = await timer(200);
    shortDelay = transitionEl.classList.remove('is-active'); // set time as desired

    navAnchors.forEach(anchor => {
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
                // timer(400).then(() => (window.location.href = target)); // set time same as transition duration in CSS
                transitionEl.addEventListener(
                    'transitionend',
                    () => (window.location.href = target)
                );
            }
        });
    });
});
// console.log(window);
// console.log(window.location);

// check for persisted
window.addEventListener('pageshow', event => {
    if (event.persisted) {
        console.log('restored from bfcache');
        window.location.reload();
    } else {
        console.log('loaded manually');
    }
});

// HANDLEBARS for projects pg
projects();
