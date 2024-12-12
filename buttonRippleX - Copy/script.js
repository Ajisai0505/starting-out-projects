/* document.addEventListener('click', function (e) {
    console.log('Mouse X:', e.pageX);
    console.log('Mouse Y:', e.pageY);
  });

  document.querySelector('button').addEventListener('click', function (e) {
    console.log('Element Top:', e.target.offsetTop); // Distance from the top of the offset parent
    console.log('Element Left:', e.target.offsetLeft); // Distance from the left of the offset parent
  });

  
   console.log(`page: X(${docX}), Y(${docY}) `);
   console.log(`btn: Top(${btnTop}), Left(${btnLeft})`);
 */


  const btn = document.querySelector('button');


  btn.addEventListener('click', (e)=>{
    const docX = e.pageX;
    const docY = e.pageY;
    const btnLeft = e.target.offsetLeft;
    const btnTop = e.target.offsetTop;

    const xInside = docX-btnLeft;
    const yInside = docY-btnTop;
   
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;
    btn.appendChild(circle);

    //circleEffect(circle);
    circleEffect2(circle);

  });


function circleEffect(el){
    const duration = 4000;
    const step = 200;
   
    for(let i=0; i<= (duration/2); i = step+i){ 
      const scaleEl = i/(duration/2);
      setTimeout(()=>{el.style.transform = `translate(-50%, -50%) scale(${scaleEl})`}, i);
      console.log(`scale(${scaleEl}), ${i}`);
    }

    for(let i=1000; i<= (duration/2); i = step+i){
      
      const scaleEl = 1-i/(duration/2);
      setTimeout(()=>{el.style.transform = `translate(-50%, -50%) scale(${scaleEl})`}, i);
      console.log(`scale(${scaleEl}), ${i}`);
    }
    setTimeout(()=>el.remove(), duration);
}


function circleEffect2(el){
  const duration = 4000;
  const step = 200;
  const stepCount = duration/step;
  let curr = 0;

  const int = setInterval(()=>{
    if(curr <= stepCount/2){
      const scaleEl = curr/stepCount;
      el.style.transform = `translate(-50%, -50%) scale(${scaleEl})`;
      console.log(`translate(-50%, -50%) scale(${curr/stepCount})`);
    }else if(curr > stepCount/2 && curr <= stepCount){
      const scaleEl = 1- curr/stepCount;
      el.style.transform = `translate(-50%, -50%) scale(${scaleEl})`;
    }else{
      clearInterval(int)
    }
    curr++;
  }, 200)

}





