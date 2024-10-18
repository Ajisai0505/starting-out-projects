const jokeDiv = document.querySelector(".jokeDiv");
const theJoke = document.querySelector('.theJoke');
const btn = document.querySelector('.btn');


async function getJoke() {
    const config =  {headers: {
        'Accept': 'application/json'}
    };
     const jokeRequest= await fetch('https://icanhazdadjoke.com/', config);
     const response = await jokeRequest.json();
     const jokeText = response.joke;
     return jokeText;
}

btn.addEventListener("click", async ()=>{
    const newJoke = await getJoke();
    theJoke.innerText = newJoke;
});