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

        posterContainer.innerHTML = "";

        displayPoster(posterResults);
    }
    catch(error) {
        console.log(error);
    }
}

fetchPosterImage();

function displayPoster(posterResults) {
    for(let i = 0; i < posterResults.length; i++) {
        const poster = posterResults[i].images[0].src;
        posterContainer.innerHTML += 
        `<div class="image" <a href="#"style="background-image: url('${poster[0].src}')"></div>`;
    }
    
}