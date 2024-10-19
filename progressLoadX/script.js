console.log('testing');

const progress = document.getElementById('progress');
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let tracker = 1;


next.addEventListener("click", ()=>{
    if(tracker < circles.length){
        tracker++;
        update();
        toActive();
        buttonStatus();
    }
});


prev.addEventListener("click", ()=>{
    if(tracker > 1){
        toPassive();
        tracker--;
        update();
        buttonStatus()
    }
});


function update(){
    progress.style.width = `${((tracker-1)/(circles.length-1))*100}%`
}

function toActive(){
    circles.forEach((c, idx)=>{
            if(idx+1 === tracker){
                c.classList.add('active');
            }
    })
};


function toPassive(){
    circles.forEach((c, idx)=>{
        if(idx+1 === tracker){
            c.classList.remove('active');
        }
    })
};


function buttonStatus(){
    if(tracker === 1){
        prev.disabled = true;
    }else{
        prev.disabled = false;
    };
    if(tracker === circles.length){
        next.disabled = true;
    }else{
        next.disabled = false;
    };
} 