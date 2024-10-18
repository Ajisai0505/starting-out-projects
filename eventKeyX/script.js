const mainContainer = document.querySelector('.mainContainer');
const headH1 = document.getElementById('headH1');
const btn = document.querySelector('.btn');


window.addEventListener("keydown", (evt)=>{
    const displayInnerHTML = `
     <div class="keyContainer">
        <small class="label">evt.key</small>
        <div class="display">${evt.key}</div>
    </div>

     <div class="keyContainer">
        <small class="label">evt.keyCode</small>
        <div class="display">${evt.keyCode}</div>
    </div>

     <div class="keyContainer">
        <small class="label">evt.code</small>
        <div class="display">${evt.code}</div>
    </div>
    `;

    changeInnerHTML(headH1,"Keep on Pressing");
    changeInnerHTML(mainContainer, displayInnerHTML);
})

btn.addEventListener("click", reset);


function changeInnerHTML(element, newHTML){
    element.innerHTML = `${newHTML}`
};

function reset(){
    const displayInnerHTML = `
    <div class="mainContainer">
    
    <div class="keyContainer">
        <p class="label">waiting for a key</p>
        <div class="display">.......</div>
    </div>
    `
    changeInnerHTML(headH1, 'Press Any Key');
    changeInnerHTML(mainContainer, displayInnerHTML);
}