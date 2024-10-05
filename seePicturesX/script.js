console.log('testing')

const panels = document.querySelectorAll(".panel");
 
panels.forEach(panel=>{
    panel.addEventListener("click", (e)=>{
            if(panel.classList.contains("active")) return;
            panels.forEach(item=>{
                item.classList.remove("active");
                item.classList.add("passive");
            })
            panel.classList.add("active");
            panel.classList.remove("passive");
    })
})