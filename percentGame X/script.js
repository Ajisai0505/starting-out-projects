const progress = document.getElementById('progress');
const play = document.getElementById('play');
const reset = document.getElementById('reset');
const markers = document.querySelectorAll('.marker');
const triesDisplay = document.getElementById('tries');
const feedback = document.getElementById('feedback');
const seeRules = document.getElementById('seeRules');
const ruleContainer = document.getElementById('ruleContainer');
const setIntervalBTN = document.getElementById('setIntervalBTN');
const intervalInput = document.getElementById('intervalInput');
const rangeClose = document.getElementById('rangeClose');
const currentClickSpan = document.getElementById('currentClickSpan');
const rangeInput = document.getElementById('rangeInput');
const rangeSpan = document.getElementById('rangeSpan');
       
let score = 0;
let tries = 0;
rangeSpanDisplay();

rangeInput.addEventListener("input", ()=>{
    rangeSpanDisplay();
});

play.addEventListener("click", ()=>{
    const generatedNum = genRandNum();
    countTries();
    getNum(generatedNum);
    updateBar();
    feedbackTextUpdate();
    displayTries();
    activateMarker();
    disable(play);
    resetDisabled(reset);
    showRandNum(generatedNum)
});

reset.addEventListener("click", ()=>{
   resetGame();
   resetDisabled(reset);
   deactivateMarker();
   resetTriesDisplay();
   showRandNum('');
   resetText(feedback, 'Click Play to start.');
});

seeRules.addEventListener('click', ()=>{
    toggleHide(ruleContainer);
});

rangeClose.addEventListener('click', ()=>{
    disappear(intervalInput);
    enableBTN(setIntervalBTN);
});

setIntervalBTN.addEventListener('click', ()=>{
    appear(intervalInput);
    disableBTN(setIntervalBTN);
});


function genRandNum(range=rangeInput.value){
    return Math.floor(Math.random()*range+1);
}

function getNum(randNum = genRandNum()){
        
        if(score+randNum < 100){
            score += randNum
            console.log(score);
        }else if(score + randNum > 100){
            const excess = score+randNum - 100;
            score = 100 - excess;   
        }else if(score + randNum === 100){
            score += randNum;
        }
       
};

function showRandNum(display){
    currentClickSpan.innerText = `${display}`
}

function updateBar(){
    progress.style.height = `${score}%`
    if(score === 100){
        progress.style.backgroundColor = `var(--progress-reached)`;
    }else if(score > 75){
        progress.style.backgroundColor = `var(--progress-almost)`
    }else if(score > 50){
        progress.style.backgroundColor = `var(--progress-mid)`;
    }else{
        progress.style.backgroundColor = `var(--progress-low)`;
    }
};

function disable(element){
    if(score === 100){
        element.disabled = true;
    }
};

function resetDisabled(element){
    if(score === 0){
        element.disabled = true;
    }else{
        element.disabled = false;
    }
};

function countTries(){
    tries ++;
};

function resetGame(){
    score = 0;
    tries = 0;
    progress.style.height = '0%';
    play.disabled = false;
};

function activateMarker(){
    markers.forEach((marker, idx)=>{
        if( score/100 >= (idx/(markers.length-1))){
            marker.classList.add('active');
        }
    })
};

function deactivateMarker(){
    for(let i =0; i<markers.length; i++){
        markers[i].classList.remove('active');
    }
};

function displayTries(){
    if(tries === 1 ){
         triesDisplay.innerHTML = `You've made ${tries} try.`
    }else if(tries > 1){
    triesDisplay.innerHTML = `You've made ${tries} tries.`
    }
};

function resetTriesDisplay(){
    triesDisplay.innerHTML = `You've made no tries yet.`
};

function feedbackTextUpdate(){
    if(score === 100){
        feedback.innerText = 'You Won!'
    }else if(score === 99){
        feedback.innerText = 'So close! Just one more point!'
    }else{
        feedback.innerText = `Good luck! You still need to get ${100-score} points.`
    }
};

function resetText(element, textInput=''){
    element.innerText = textInput;
}

function toggleHide(element){
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden');
    }else{
        element.classList.add('hidden');
    }
};

function disappear(element){
    if(!element.classList.contains('disappear')){
        element.classList.add('disappear')
    }
};

function appear(element){
    if(element.classList.contains('disappear')){
        element.classList.remove('disappear');
    }
};

function disableBTN(element){
    element.disabled = true;
};

function enableBTN(element){
        element.disabled = false;
};

function displayRangeSpan(){
    rangeSpan.innerText = rangeInput.value;
}

function rangeSpanDisplay(){
    rangeSpan.innerText =rangeInput.value;
}