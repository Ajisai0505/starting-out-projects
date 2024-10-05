
const bg = document.getElementById("bg");
const loadText = document.getElementById("loadText")

loader();


function loader(){
    let loadCounter = 0;
    const countUp = setInterval(blurLoad, 40);
    function blurLoad(){
        if(loadCounter > 99){
            return clearInterval
        }else{
            loadCounter++;
            console.log(loadCounter);     
            loadText.innerHTML = `${loadCounter}%`;
            bg.style.filter = `blur(${((100-loadCounter)/100)*(40)}px)`;
            loadText.style.opacity = `${((100-loadCounter)/100)}`;
        }   
    }
}


