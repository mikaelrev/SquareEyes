const url = "https://squareeyes.flower-power.one/wp-json/wc/store/products?per_page=4";
const moviesContainer = document.querySelector(".movies");

async function getMovies() {
    try {
        const response = await fetch(url);
    const getResults = await response.json();

    createHTML(getResults);
    }
    catch(error) {
        console.log(error);
    }
}

getMovies();

function createHTML(movies) {
    movies.forEach(function(movie) {
        moviesContainer.innerHTML += 
        `<div class="moviecard">
        <h2>${movie.name}</h2>
        <img src="${movie.images[0].src}" alt="${movie.name}">
        
        
        </div>`;
    })
}