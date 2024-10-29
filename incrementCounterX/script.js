const counters = document.querySelectorAll('.counter')


counters.forEach(counter=>{
    counter.innerText='0';
    function updateCounter(){
        
        const targetNum = parseInt(counter.getAttribute('data-target'));
        const increment = targetNum/300;
        let currentCount = 0;
        const intervalID = setInterval(()=>{
           
            if(targetNum > currentCount ){
                 currentCount += increment;
                counter.innerText = `${Math.floor(currentCount)}`;
            }else{
                counter.innerText = `${targetNum}`;
                clearInterval(intervalID)
            }
        }, 3)
    }
    updateCounter();
})











/* counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
}) */