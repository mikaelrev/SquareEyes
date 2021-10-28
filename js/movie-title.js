const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://squareeyes.flower-power.one/wp-json/wc/store/products/" + id;

const posterContainer = document.querySelector(".play-movie");

async function fetchPosterImage() {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    document.title = `${results.name}`;

    posterContainer.innerHTML = "";
    
    displayPoster(results);
}

fetchPosterImage();

function displayPoster(results) {
    posterContainer.innerHTML = 
    `<div class="movie-poster">
    <img src="${results.images[0].src}">
    </div>`;
}