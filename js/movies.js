const url = "https://squareeyes.flower-power.one/wp-json/wc/store/products?per_page=12";
const moviesContainer = document.querySelector(".movies-container");
const searchButton = document.querySelector(".search-button");
const backButton = document.querySelector(".back-button");


async function fetchMovies(url) {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const posters = results;

        moviesContainer.innerHTML = "";

        displayPosters(posters);
        }
        catch(error) {
        console.log(error);
    }
}

fetchMovies(url)


function displayPosters(posters) {
        posters.forEach(function(poster) {
        moviesContainer.innerHTML += 
        `<div class="moviecard">
        <a href="movie-title.html?id=${poster.id}"><img src="${poster.images[0].src}">
        ${poster.name}</a>
        </div>`;
    })
}

// searchButton.onclick = function() {
//     const input = document.querySelector("#search-input").value;
//     const newUrl = url + `&search=${input}`;
//     moviesContainer.innerHTML += "";
//     fetchMovies(newUrl);
//     activateBackButton();
// }

function activateBackButton() {
    backButton.style.display = "block";
}

backButton.onclick = function() {
    fetchMovies(url);
    backButton.style.display = "none";
}



