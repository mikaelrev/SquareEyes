const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://squareeyes.flower-power.one/wp-json/wc/store/products?id=" + id;

const posterContainer = document.querySelector(".play-movie");

async function fetchPosterImage() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const posterResults = results.images[0].src;

        document.title = `${posterResults.name}`;

        displayPoster(posterResults);
    }
    catch(error) {
        console.log(error);
    }
}

fetchPosterImage();

function displayPoster(posterResults) {
    posterContainer.innerHTML = 
    `<div class="image" <a href="#"style="background-image: url('${posterResults[0].src}')"></div>`;
}