const transitionEl = document.querySelector('.transition');

// promisified setTimeout - to always resolve
const timer = ms => new Promise(resolve => setTimeout(resolve, ms));
// const timer = function (ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     });
// };

// will always resolve
const removeOverlay = async ms => {
    await timer(ms);
    transitionEl.classList.remove('is-active');
};

const navigatingTransition = e => {
    // prevent going to new page
    e.preventDefault();

    // allow going to new page
    let target = e.target.closest('a').href; // traverse
    // console.log(target);

    if (target.slice(-1) !== '#') {
        // add overlay when leaving pg
        transitionEl.classList.add('is-active');
        // target pg reveal
        transitionEl.addEventListener(
            'transitionend',
            () => (window.location.href = target)
        );
    }
};

const navAnchorClick = anchor =>
    anchor.addEventListener('click', navigatingTransition);

export const pgTransitionObj = { removeOverlay, navAnchorClick };
