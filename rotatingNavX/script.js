const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const container = document.getElementById("container");
const circle = document.getElementById("circle");
const nav = document.querySelector("nav");
const searchBTN = document.getElementById("searchBTN");
const input = document.querySelector("input");

openButton.addEventListener("click", ()=>{
   turnActive(container, "showNav");
   turnActive(openButton, "showNav");
   turnActive(closeButton, "showNav");
   turnActive(nav, "showNav");
   toggleEnableElement(openButton);
   toggleEnableElement(closeButton);
});


closeButton.addEventListener("click", ()=>{
    disableActive(container, "showNav");
    disableActive(openButton, "showNav");
    disableActive(closeButton, "showNav");
    disableActive(nav, "showNav");
    toggleEnableElement(openButton);
    toggleEnableElement(closeButton);
});

searchBTN.addEventListener("click", ()=>{
    input.classList.toggle("active");
});



function turnActive(e, className){
    if(!e.classList.contains(className)){
        e.classList.add(className);
    }
}

function disableActive(e, className){
    if(e.classList.contains(className)){
        e.classList.remove(className);
    }
}


function toggleEnableElement(el){
    if(el.disabled === true){
        el.disabled = false;
    }else{
        el.disabled = true;
    }
}