const featuredUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=16";
const recommendedUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=20"
const newMoviesUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=19";
const topRatedUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=17";
const ComingUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=18"
const comingSoon = document.querySelector(".coming_soon-movies");
const topRated = document.querySelector(".top_rated-movies");
const newMovies = document.querySelector(".new-movies")
const featured = document.querySelector(".featured-movies");
const recommended = document.querySelector(".recommended-movies");

async function getFeatured() {
    const response = await fetch(featuredUrl);
    const getResults = await response.json();
    
    getResults.forEach(function(movie) {
        featured.innerHTML +=
        `<div class="moviecard">
        <img src="${movie.images[0].src}" alt="${movie.name}">
        <a>${movie.name}</a>
        </div>`;
    })
}

getFeatured();

async function getRecommended() {
    const response = await fetch(recommendedUrl);
    const getResults = await response.json();
    
    getResults.forEach(function(movie) {
        recommended.innerHTML +=
        `<div class="moviecard">
        <img src="${movie.images[0].src}" alt="${movie.name}">
        <a>${movie.name}</a>
        </div>`;
    })
}

getRecommended();

async function getNewMovies() {
    const response = await fetch(newMoviesUrl);
    const getResults = await response.json();
    
    getResults.forEach(function(movie) {
        newMovies.innerHTML +=
        `<div class="moviecard">
        <img src="${movie.images[0].src}" alt="${movie.name}">
        <a>${movie.name}</a>
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
