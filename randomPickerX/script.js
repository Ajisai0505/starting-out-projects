const textArea = document.getElementById('textArea');
let tag = document.querySelectorAll('.tag');
const container = document.querySelector('.container');
const tagContainer = document.querySelector('.tagContainer');
const eraseBtn = document.querySelector('.eraseBtn');
let choices;

textArea.addEventListener("keyup", (e)=>{
    if(e.key !== "Enter"){
        createTags(e);
    }else{
        selectEffect();
        textArea.value = "";
    }

});

eraseBtn.addEventListener('click', ()=>{
    tagContainer.innerHTML = '';
    textArea.value = '';
});


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function selectEffect(){   
    for(let i=0; i<30;i++){
            const randNum = Math.floor(Math.random()*tag.length);
            await wait(75);
            tag[randNum].classList.add('focused');
            await wait(75);
            tag[randNum].classList.remove('focused');
    }
    finalSelect();
};

async function finalSelect(){
    await wait(75);
    const randNum = Math.floor(Math.random()*tag.length);
    tag[randNum].classList.add('focused');
};

function createTags(event){
        choices = [];
        tagContainer.innerHTML = '';
        choices = commaSplit(textArea.value);
        for(let choice of choices){
            const tagLabel = removeEdgeSpace(choice);
            let newTag = document.createElement('div');
            newTag.classList.add('tag');
            newTag.innerText = tagLabel;
            tagContainer.appendChild(newTag);
        } 
        tag = document.querySelectorAll('.tag');
};

function commaSplit(input){
    const outputArr = [];
    let curr =0;
    for(let i=0; i<input.length;i++){
        if(input[i] === ","){
            const item = input.slice(curr, i);
            outputArr.push(item);
            curr = i+1;
        }else if(i === input.length-1){
            const item = input.slice(curr, i+1);
            outputArr.push(item);
        }
    }
    return(outputArr);
};

function removeEdgeSpace(str){
    const length = str.length;
    let output = '';
    let start = 0;
    let end = length-1;
    for(let i=0; i<length; i++){
        if(!(str[i] === ' ')){
            start = i;
            break;
        }
    }
    for(let i=length-1; i>=0; i--){
        if(!(str[i] === ' ')){
            end = i;
            break;
        }
    }
    for(let i=start; i<=end; i++ ){
        output += str[i];
    }
    return output;
};


