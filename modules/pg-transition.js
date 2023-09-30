const transitionEl = document.querySelector('.transition');

const addTransitionDelay = msTime =>
    (transitionEl.style.transitionDelay = `${msTime}ms`);

const removeTransitionDelay = () => (transitionEl.style.transitionDelay = '');

const removeOverlay = () => {
    transitionEl.classList.remove('is-active');
    transitionEl.addEventListener('transitionend', removeTransitionDelay);
    return;
};

const navigatingTransition = e => {
    // prevent going to new page
    e.preventDefault();

    // allow going to new page
    let target = e.target.closest('a').href; // traverse

    if (target.slice(-1) === '#') return;

    // add overlay when leaving pg
    transitionEl.classList.add('is-active');
    // target pg reveal
    transitionEl.addEventListener(
        'transitionend',
        () => (window.location.href = target)
    );
    return;
};

const navAnchorClick = anchor =>
    anchor.addEventListener('click', navigatingTransition);

export const pgTransitionObj = {
    removeOverlay,
    navAnchorClick,
    addTransitionDelay,
};
