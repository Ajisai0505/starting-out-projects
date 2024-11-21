const percentage = document.getElementById('percentage');
const cups = document.querySelectorAll('.cup-small');
const remaining = document.getElementById('remaining');
const cupsQuantity = cups.length;
const remSpan = document.querySelector('.rem-span');
const percentPar = document.querySelector('.percent-par');

let cupFull = document.querySelectorAll('.cup-small.full');
let cupFullQuantity = cupFull.length;
let remPerRatio = cupFullQuantity/cupsQuantity; 

activateSmallCups();
function activateSmallCups(){
    cups.forEach((cup, index)=>{
        cup.addEventListener("click", ()=>{
            selectSmallCup(cup, index);
            updateBigCup();
            adjustRemText();
            adjustPerText();
        })
    });
};


function selectSmallCup(cup, index){
    if(!cup.classList.contains("full")){
        for(let i=0; i<=index;i++){
            if(!cups[i].classList.contains("full")){
                cups[i].classList.add("full")
            }
        }
    }else{
        if(index === cupsQuantity-1){
            cup.classList.toggle("full");
        }else if(index !== cupsQuantity-1 && cups[index+1].classList.contains("full")){
            for(let i=index+1; i<cupsQuantity;i++){
                cups[i].classList.remove("full");
            }
        }else if(index !== cupsQuantity-1 && !cups[index+1].classList.contains("full")){
            cup.classList.toggle("full");
        }
    }
};



function updateBigCup(){
    cupFull = document.querySelectorAll('.cup-small.full');
    cupFullQuantity = cupFull.length;
    remPerRatio = cupFullQuantity/cupsQuantity;
    percentage.style.height = `${remPerRatio*100}%`; 
};


function adjustRemText(){
    if(remPerRatio===1){
        remaining.style.display = 'none';
    }else{
        remaining.style.display = 'flex';
        if(cupFullQuantity === cupsQuantity-1){
            remSpan.innerText = `One last cup!`;
        }else{
            remSpan.innerText = `${cupsQuantity - cupFullQuantity} cups left`;
        }
       
    }
    
    if(remPerRatio > .75 && remPerRatio< 1){
        remaining.style.fontSize = '14px';
    }else if(remPerRatio > .5 && remPerRatio <=.75){
        remaining.style.fontSize = '30px';
    }else{
        remaining.style.fontSize = '50px';
    }
};

function adjustPerText(){
    if(cupFullQuantity === 0){
        percentage.style.display = 'none';
    }else{
        percentage.style.display = 'flex';
        if(cupFullQuantity===cupsQuantity){
            percentPar.innerText = 'Good Job!';
        }else{
             percentPar.innerText = `${100*cupFullQuantity/cupsQuantity}%`
        }
       
    }

    if(cupFullQuantity){
        if(cupFullQuantity<=2 && cupFullQuantity>0){
            percentPar.style.fontSize = '30px';
        }else if(cupFullQuantity < 5 && cupFullQuantity> 2){
            percentPar.style.fontSize = '40px';
        }else{
            percentPar.style.fontSize = '60px';
        }
    }
}