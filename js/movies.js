const newMoviesUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=19";
const topRatedUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=17";
const ComingSoonUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=18"
const comingSoonContainer = document.querySelector(".coming_soon-movies");
const topRatedContainer = document.querySelector(".top_rated-movies");
const newMoviesContainer = document.querySelector(".new-movies")


async function fetchNewMovies() {
    try {
        const response = await fetch(newMoviesUrl);
        const results = await response.json();
        const posters = results;
        console.log(posters);

        newMoviesContainer.innerHTML = "";

        postersNewMovies(posters);
        }
        catch(error) {
        console.log(error);
    }
}

fetchNewMovies()

async function fetchTopRated() {
    try {
        const response = await fetch(topRatedUrl);
        const results = await response.json();
        const posters = results;

        topRatedContainer.innerHTML = "";

        postersTopRated(posters);

        }
        catch(error) {
    }
}

fetchTopRated();

async function fetchComingSoon() {
    try {
        const response = await fetch(ComingSoonUrl);
        const results = await response.json();
        const posters = results;

        comingSoonContainer.innerHTML = "";

        postersComingSoon(posters);

        }
        catch(error) {
    }
}

fetchComingSoon();



function postersNewMovies(posters) {
    for(let i = 0; i < posters.length; i++) {
        const images = posters[i].images[0].src;
    
        newMoviesContainer.innerHTML += 
        `<div class="moviecard moviecard-img">
        <a href="movie-title.html?id=${posters[i].id}"><img src="${images}">
        ${posters[i].name}</a>
        </div>`;
    }
}

function postersTopRated(posters) {
    for(let i = 0; i < posters.length; i++) {
        const images = posters[i].images[0].src;
    
        topRatedContainer.innerHTML += 
        `<div class="moviecard">
        <a href="movie-title.html?id=${posters[i].id}"><img src="${images}">
        ${posters[i].name}</a>
        </div>`;
    }
}

function postersComingSoon(posters) {
    for(let i = 0; i < posters.length; i++) {
        const images = posters[i].images[0].src;
    
        comingSoonContainer.innerHTML += 
        `<div class="moviecard">
        <a href="movie-title.html?id=${posters[i].id}"><img src="${images}">
        ${posters[i].name}</a>
        </div>`;
    }
}