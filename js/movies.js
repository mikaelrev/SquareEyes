const newMoviesUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=19";
const topRatedUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=17";
const ComingSoonUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=18"
const comingSoonContainer = document.querySelector(".coming-soon-movies");
const topRatedContainer = document.querySelector(".top-rated-movies");
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
        posters.forEach(function(poster) {
        newMoviesContainer.innerHTML += 
        `<div class="moviecard">
        <a href="movie-title.html?id=${poster.id}"><img src="${poster.images[0].src}">
        ${poster.name}</a>
        </div>`;
    })
}

function postersTopRated(posters) {
        posters.forEach(function(poster) {
        topRatedContainer.innerHTML += 
        `<div class="moviecard">
        <a href="movie-title.html?id=${poster.id}"><img src="${poster.images[0].src}">
        ${poster.name}</a>
        </div>`;
    })
}

function postersComingSoon(posters) {
        posters.forEach(function(poster) {
        comingSoonContainer.innerHTML += 
        `<div class="moviecard">
        <a href="movie-title.html?id=${poster.id}"><img src="${poster.images[0].src}">
        ${poster.name}</a>
        </div>`;
    })
}