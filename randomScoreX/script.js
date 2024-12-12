const scores = document.querySelectorAll('span.score');
const result = document.querySelector('span.result');
const getScore = document.querySelector('button.getScore');
const reset = document.querySelector('button.reset');


getScore.addEventListener('click', ()=>{
    randomEffect();
    console.log('clicked');
});

reset.addEventListener('click', ()=>{
    scores.forEach((score) => score.classList.remove('focus'));
    location.reload();
});



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    
}

async function randomEffect(){
    scores.forEach((score)=>{
        score.classList.remove('focus');
    });
    for(let i=0; i<10; i++){
        /* const randNum = Math.floor(Math.random()*scores.length);
        const selected = scores[randNum]; */
        const selected = getRandNode(scores);
        await wait(75);
        selected.classList.add('focus');
        displayResult(selected.innerText);
        await wait(75);
        selected.classList.remove('focus');
    }
   finalSelect();
}   

async function finalSelect(){
    const selected = getRandNode(scores);
    await wait(75);
    selected.classList.add('focus');
    displayResult(selected.innerText);

}

function getRandNode(nodeList){
    const randNum = Math.floor(Math.random()*nodeList.length);
    const selectedNode = nodeList[randNum];
    return selectedNode;
}

function displayResult(input){
    result.innerText = `${input}`;

}