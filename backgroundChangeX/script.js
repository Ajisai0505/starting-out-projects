const body =  document.querySelector('body');
const slide = document.querySelectorAll('.slide');
const left = document.querySelector('button.left');
const right = document.querySelector('button.right');


/* const images = [
    'https://images.unsplash.com/photo-1575268788548-49aa333ec2ba?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1518602164578-cd0074062767?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]; */

let tracker = 0;

left.addEventListener('click', ()=>{
    if(tracker <= 0 ){
        tracker = slide.length-1;
    }else{
        tracker--;
    }
    changeSlide();
    changeBg(body);
    
    
})


right.addEventListener('click', ()=>{
    if(tracker >= slide.length-1){
        tracker = 0;
    }else{
        tracker++;
    }
    changeSlide();
    changeBg(body);
    
})

function changeBg(e){
    e.style.backgroundImage = `${slide[tracker].style.backgroundImage}`;
}

function changeSlide(){
    slide.forEach(s=>{
        s.classList.remove('active');
    })
    slide[tracker].classList.add('active');

}