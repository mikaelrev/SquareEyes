const newMoviesUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=19";
const topRatedUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=17";
const ComingUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=18"
const comingSoon = document.querySelector(".coming_soon-movies");
const topRated = document.querySelector(".top_rated-movies");
const newMovies = document.querySelector(".new-movies")


async function getNewMovies() {
    const response = await fetch(newMoviesUrl);
    const getResults = await response.json();
    
    getResults.forEach(function(movie) {
        newMovies.innerHTML +=
        `<div class="moviecard">
        <img src="${movie.images[0].src}" alt="${movie.name}">
        <a href="movie-title.html?id=${getResults.id}">${movie.name}</a>
        </div>`;
    })
}

getNewMovies();

async function getTopRated() {
    const response = await fetch(topRatedUrl);
    const getResults = await response.json();
    
    getResults.forEach(function(movie) {
        topRated.innerHTML +=
        `<div class="moviecard">
        <img src="${movie.images[0].src}" alt="${movie.name}">
        <a>${movie.name}</a>
        </div>`;
    })
}

getTopRated();

async function getComingSoon() {
    const response = await fetch(ComingUrl);
    const getResults = await response.json();
    
    getResults.forEach(function(movie) {
        comingSoon.innerHTML +=
        `<div class="moviecard">
        <img src="${movie.images[0].src}" alt="${movie.name}">
        <a>${movie.name}</a>
        </div>`;
    })
}

getComingSoon();