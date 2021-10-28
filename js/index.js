const featuredUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=16";
const recommendedUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=20"
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
    console.log(getResults);
    
    getResults.forEach(function(movie) {
        recommended.innerHTML +=
        `<div class="moviecard">
        <img src="${movie.images[0].src}" alt="${movie.name}">
        <a href="movie-title.html?id=${getResults.id}">${getResults.name}</a>
        </div>`;
    })
}

getRecommended();



