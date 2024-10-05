const  mainContainer = document.querySelector("main");
createDivs();
const scrollItems = document.querySelectorAll("div.scrollItem");
createText();
appearDisappear();

window.addEventListener("scroll", appearDisappear);

function createDivs(){
    for(let i=0; i<32;i++){
        const newDiv = document.createElement('div');
        newDiv.setAttribute("id", `divNo${i}`);
        newDiv.classList.add('scrollItem');
        if(i%2 === 0){
            newDiv.classList.add('evenID');
        }else{
            newDiv.classList.add('oddID');
        };
        mainContainer.appendChild(newDiv);
    }
};


function createText(){
    scrollItems.forEach((divItem, index)=>{
        const divText = document.createElement('h3');
        divText.setAttribute("id", `divText${index}`);
        divText.classList.add("divText");
        divText.innerText ="Keep Scrolling";
        divItem.appendChild(divText);
    });
};

function appearDisappear(){
    const checkpoint = window.innerHeight*(3/4);
    scrollItems.forEach((item, index)=>{
        const itemPosition = item.getBoundingClientRect().top;
        if(itemPosition<checkpoint){
            item.classList.add("show");
        }else{
            item.classList.remove("show");
        }
    });
};