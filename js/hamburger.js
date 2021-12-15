const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = links.getAttribute('data-visible');

    if (visibility === "false") {
        links.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        links.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});