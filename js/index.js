const featuredUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=16";
const recommendedUrl = "https://squareeyes.flower-power.one/wp-json/wc/store/products?category=20"
const featuredContainer = document.querySelector(".featured-movies");
const recommendedContainer = document.querySelector(".recommended-movies");

async function fetchFeatured() {
    try {
        const response = await fetch(featuredUrl);
        const results = await response.json();
        const posters = results;
        console.log(posters);

        featuredContainer.innerHTML = "";

        postersFeatured(posters);
        }
        catch(error) {
        console.log(error);
    }
}

fetchFeatured()

async function fetchRecommended() {
    try {
        const response = await fetch(recommendedUrl);
        const results = await response.json();
        const posters = results;

        recommendedContainer.innerHTML = "";

        postersRecommended(posters);

        }
        catch(error) {
    }
}

fetchRecommended();


function postersFeatured(posters) {
    posters.forEach(function(poster) {
        featuredContainer.innerHTML += 
        `<div class="moviecard">
        <a href="movie-title.html?id=${poster.id}"><img src="${poster.images[0].src}">
        ${poster.name}</a>
        </div>`;
    })
}

function postersRecommended(posters) {
    posters.forEach(function(poster) {
        recommendedContainer.innerHTML += 
        `<div class="moviecard">
        <a href="movie-title.html?id=${poster.id}"><img src="${poster.images[0].src}">
        ${poster.name}</a>
        </div>`;
    })
}