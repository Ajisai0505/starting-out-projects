const labels = document.querySelectorAll('.formControl label');

function labelEffect(){
    labels.forEach((lab)=>{
        let labInnerText = lab.innerText;
        let newHTML = '';
        
        for(let i=0; i<labInnerText.length; i++){
            let = labLetter = labInnerText[i];
            newHTML += `<span style="transition-delay:${i * 50}ms">${labLetter}</span>`;
        }
        lab.innerHTML = newHTML;
    })
}

labelEffect();


