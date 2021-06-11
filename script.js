let movieArea = document.getElementById("movie");
let movies = document.getElementById("movies")
const movieForm = document.querySelector("form");
const MY_API_KEY = "e356dca30622eb9d064e6bf5f3b25ef0";
let btn = document.getElementById('btn')
let pageNumber = 1;
// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1


async function loadMovies(){
    const apiURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + MY_API_KEY + "&language=en-US&page=" + pageNumber;
    const response = await fetch(apiURL);
    const responseData = await response.json();
    // console.log(responseData);
    // console.log("Hello");
    applyData(responseData);
}

movieForm.addEventListener("submit", searchMovie)
async function searchMovie(event) {
    event.preventDefault();
    let movieInput = event.target.query;
    let selection = movieInput.value;
    if (selection.length == 0) {
        loadMovies();
    }
    else {
    const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=" + MY_API_KEY + "&language=en-US&page=1&include_adult=false&query=" + selection;
    const response = await fetch(searchURL);
    const responseData = await response.json();
    console.log(responseData);
    loadSearches(responseData);
    }

}

function loadSearches(dat) {
    movies.innerHTML = '';
    for(let i = 0; i<dat.results.length; i+=1) {
        // console.log(dat.results[i].poster_path);
        let imgs = "https://image.tmdb.org/t/p/w500" + dat.results[i].poster_path;
        // console.log(imgs);
        // movies.innerHTML += `<h1>hello </h1>`
        movies.innerHTML += `
        <div class="individual">
        <button onclick="popup()"><img src=${imgs}></img></button>
        <p id="titles"> ${dat.results[i].original_title} </p>
        <p id="votes">${dat.results[i].vote_average}&#11088;</p>
        </div>
        `
    }
}

function applyData(dat) {
    for(let i = 0; i<dat.results.length; i+=1) {
        // console.log(dat.results[i].poster_path);
        let imgs = "https://image.tmdb.org/t/p/w500" + dat.results[i].poster_path;
        // console.log(imgs);
        // movies.innerHTML += `<h1>hello </h1>`
        movies.innerHTML += `
        <div class="individual">
        <img src=${imgs} alt="imageForMovie"></img>
        <p id="titles"> ${dat.results[i].original_title} </p>
        <p id="votes">${dat.results[i].vote_average}&#11088;</p>
        </div>
        `
    }
}

function addMore(){
    pageNumber+=1;
    loadMovies()
}

function popup() {
    console.log("popup")
}


window.onload = loadMovies();
btn.onclick = addMore;

// Get the mod
