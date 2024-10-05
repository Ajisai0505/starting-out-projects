console.log('testing')

const panels = document.querySelectorAll(".panel");
const bigScreen = document.getElementById("bigScreen");
const firstContainer = document.querySelector(".container");
const h3FirstContainer = firstContainer.querySelectorAll('h3');
const bigH3 = document.getElementById("bigH3");
const h1 = bigScreen.querySelector('h1');

 
panels.forEach(panel=>{
    panel.addEventListener("click", ()=>{
            if(panel.classList.contains("active")){
               revertToPassive(panel);
               revertToPassive(h1);
               resetBackGround(bigScreen, bigH3);
               revertToPassive(bigScreen);
            }else{
                panels.forEach(item=>{
                    revertToPassive(item);
                })
                turnActive(panel);
                turnActive(h1);
                setImgAndText(panel, bigScreen, bigH3);
                turnActive(bigScreen);
            }
            
    })
});

bigScreen.addEventListener("click", ()=>{
    if(bigScreen.classList.contains("passive")) return;
    panels.forEach(panel=>{
        revertToPassive(panel);
        revertToPassive(h1);
        resetBackGround(bigScreen, bigH3);
        revertToPassive(bigScreen);
    })
});


function revertToPassive(target){
    target.classList.remove("active");
    target.classList.add("passive");
};

function turnActive(target){
    target.classList.add("active");
    target.classList.remove("passive");
};

function resetBackGround(containerDiv, header){
    containerDiv.style.backgroundImage = "none";
    header.innerText = '';
};

function setImgAndText(target, containerDiv, header){
                const bgImage = window.getComputedStyle(target).backgroundImage;  //panel
                containerDiv.style.backgroundImage = bgImage; //bigScreen
                containerDiv.style.transition = "transition: .25s ease-in-out"; //bigScreen
                header.innerText = target.querySelector('h3').innerText; //bigH3
};

