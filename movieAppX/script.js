const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const container = document.querySelector('.container');
const searchForm = document.getElementById('searchForm');
const searchBar = document.getElementById('searchBar');

/* searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = searchBar.value
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        searchBar.value = ''
    } else {
        window.location.reload()
    }
}) */
function searchEventInitiate(){
    let debounceTimeout;

    searchBar.addEventListener('input',()=>{
        container.innerHTML = '<h1 class="loader">Loading...</h1>';
        clearTimeout(debounceTimeout);
        debounceTimeout= setTimeout(()=>{
            const searchTerm = searchBar.value.trim();
            if(searchTerm){
                container.innerHTML = '';
                getMovies(SEARCH_API + searchTerm)
            }else{
                container.innerHTML = '';
                getMovies(API_URL)
            }
        },3000);
    })
}

searchEventInitiate();

getMovies(API_URL)


async function getMovies(url) {
    try {
        const response = await fetch(url);
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        showMovies(data.results);
    } catch (error) {
        console.error('There was an error fetching the movies:', error);
        container.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

function showMovies(movies){
    container.innerHTML = '';
    movies.forEach(movie=>{
        const { title, poster_path, vote_average, overview } = movie;
        const panel = document.createElement('div');
        panel.classList.add('panel');
        panel.innerHTML = `
         <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movieInfo">
                <h3 class="title">${title}</h3>
                <span class="rating">${vote_average.toFixed(2)}</span>
            </div>
            <div class="summaryDiv">
                <p class="summaryPar">
                ${overview}
                </p>
            </div>
        `
        container.appendChild(panel);
    })
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(rating=>{
    ratingColorSet(rating);
    });
}


function ratingColorSet(ratingSpan) {
    const ratingValue = parseFloat(ratingSpan.textContent);
    if (ratingValue > 7) {
        ratingSpan.classList.add('high');
    } else if (ratingValue > 5) {
        ratingSpan.classList.add('medium');
    } else {
        ratingSpan.classList.add('low');
    }
}







/* 
function panelCreate(){
    for(let i=0; i<20; i++){
        const panel = document.createElement('div');
        panel.classList.add('panel');
        panel.innerHTML = `
        <img src="https://images.unsplash.com/photo-1507048947301-7afc2aca0edc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            <div class="movieInfo">
                <h3 class="title">Title:This is the Movie Title</h3>
                <span class="rating">${randRating()}</span>
            </div>
            <div class="summaryDiv">
                <p class="summaryPar">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et aliquam error excepturi fugit nemo nesciunt similique in modi! Distinctio cupiditate incidunt repellendus cum perferendis numquam mollitia quo! Hic, magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim officia corporis sapiente alias tempora vel earum expedita aliquam aperiam, consequuntur ex officiis odit ullam, pariatur inventore blanditiis dolores quia nobis.
                </p>
            </div>
        `
        container.appendChild(panel);
    }
}; */