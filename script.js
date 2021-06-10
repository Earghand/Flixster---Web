let movieArea = document.getElementById("movie");
let movies = document.getElementById("movies")
const MY_API_KEY = "e356dca30622eb9d064e6bf5f3b25ef0";
let pageNumber = 1;
// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
function example() {
    console.log("hello")
    console.log("loaded func")
}

async function loadMovies(){
    const apiURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + MY_API_KEY + "&language=en-US&page=" + pageNumber;
    const response = await fetch(apiURL);
    const responseData = await response.json();
    console.log(responseData);
    console.log("Hello");
    applyData(responseData);
}

function applyData(dat) {
    for(let i = 0; i<dat.results.length; i+=1) {
        console.log(dat.results[i].original_title);
        // movies.innerHTML += `<h1>hello </h1>`
        movies.innerHTML += `<p id="titles"> ${dat.results[i].original_title} </p>`
    }
}

// function clicked() {
//     pageNumber +=1;
//     loadMovies();
// }

window.onload = loadMovies();