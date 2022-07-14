// Window Start Function
window.onload = function (){
    const div = document.createElement('div');
        div.className = "hero";
        div.innerHTML = `
            <div class="cover"></div>
            <div class="img-container">
                <img src="${imageUrl+posterArr[0]}" id="hero-img" alt="">
            </div>
            <div class="details">
                <h1 id="hero-title">${titleArr[0]}</h1>
                <p id="hero-overview">${overviewArr[0]}</p>
                <div class="wishlist">
                    <a href="#" id="button">Play</a>
                    <span id="icon"><i class='bx bx-list-plus'></i></span>
                </div>
            </div>
        `;
        heroContainer.appendChild(div);
}
// DOM Selector
const cardContainer = document.querySelector('.card-container');
const heroImg = document.querySelector('#hero-img');
const heroTitle = document.querySelector('#hero-title');
const heroOverview = document.querySelector('#hero-overview');
const heroContainer = document.querySelector('.hero-container');

// Global Variable
let titleArr = [];
let overviewArr = [];
let posterArr = [];

const url = {
    apiKey : "adafadb6d4f649502cf4bf3fc4cfb035",
    baseUrl : "https://api.themoviedb.org/3/discover/movie?"
}

const movieUrl = url.baseUrl+`api_key=${url.apiKey}&language=en-US&sort_by=popularity.desc`;
const imageUrl = "https://image.tmdb.org/t/p/w500";

fetchMovie(movieUrl);

function fetchMovie(path){
    fetch(path)
    .then(res => res.json())
    .then(data => showMovie(data))
}

function showMovie(data){
    let res = data.results;
    res.forEach((movie,index)=>{
        titleArr[index] = movie.original_title;
        overviewArr[index] = movie.overview;
        posterArr[index] = movie.poster_path;
        const div = document.createElement('div');
        div.className = "card";
        div.innerHTML = `
            <img src="${imageUrl+movie.poster_path}" alt="">
        `;
        cardContainer.appendChild(div);

    });
    let cards = document.querySelectorAll('.card');
    cards.forEach((card,index) => card.addEventListener('click', (e) => {
        // heroTitle.innerHTML = titleArr[index];
        // heroImg.src = e.target.src;
        // heroOverview.innerHTML = overviewArr[index];
        const div = document.createElement('div');
        div.className = "hero";
        div.innerHTML = `
            <div class="cover"></div>
            <div class="img-container">
                <img src="${e.target.src}" id="hero-img" alt="">
            </div>
            <div class="details">
                <h1 id="hero-title">${titleArr[index]}</h1>
                <p id="hero-overview">${overviewArr[index]}</p>
                <div class="wishlist">
                    <a href="#" id="button">Play</a>
                    <span id="icon"><i class='bx bx-list-plus'></i></span>
                </div>
            </div>
        `;
        heroContainer.appendChild(div);
    }));
};

// function oo(overview){
//     console.log(overview);
// }

// function movieDetails(movie){
//     this.addEventListener('click',()=>console.log("HI"))
// }