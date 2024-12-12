const container = document.querySelector('.container');
const toggler = document.querySelector('button.toggler');
const spans = document.querySelectorAll('span');
const needles = document.querySelectorAll('.needle');

const hourNeedle = document.querySelector('.needle.hour');
const minuteNeedle = document.querySelector('.needle.minute');
const secondNeedle = document.querySelector('.needle.second');
const timeDisplay = document.querySelector('.time');
const dateDisplay = document.querySelector('.date');
const dayDisplay = document.querySelector('.day');
const centerPoint = document.querySelector('.center-point');

toggler.addEventListener('click', () => {
    container.classList.toggle('dark');
    toggler.classList.toggle('dark');
    centerPoint.classList.toggle('dark');
    toggleNodeList(spans);
    toggleNodeList(needles);
    changeButton();
});

function toggleNodeList(elements) {
    elements.forEach(el => {
        el.classList.toggle('dark');
    });
};

function changeButton(){
    if(toggler.classList.contains('dark')){
        toggler.innerText = 'Light Mode'
    }else{
        toggler.innerText = 'Dark Mode'
    }
}


function setClock(){
    //using new creates an object instead of just a string
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const monthsArr =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    function hourDisplayFunc(){
        if(hour === 0) return 12;
        return hour>12 ? hour-12 : hour;
    }

    const hourDisplay = hourDisplayFunc();
    const minuteDispay = `${minute}`.length < 2 ? `0`+`${minute}` : `${minute}`;
    const amPm = hour>12 ? 'pm' : 'am';
    //get the correct degrees
    const setHourAngle=()=>{
        if(hour<13){
            return (hour/12)*360 + (minute/720)*360;
        }else{
            return ((hour-12)/12)*360 + (minute/720)*360;
        }
    };

    const hourAngle = setHourAngle();
    const minuteAngle = (minute/60)*360;
    const secondAngle = (second/60)*360;

    //change css styles
    const changeNeedle=(hand, angle)=> {hand.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`}
    changeNeedle(hourNeedle, hourAngle);
    changeNeedle(minuteNeedle, minuteAngle);
    changeNeedle(secondNeedle, secondAngle);

    function changeDisplay(element, text){
        element.innerText = text;
    }


    changeDisplay(timeDisplay, `${hourDisplay} : ${minuteDispay} ${amPm}` );
    changeDisplay(dateDisplay, `${monthsArr[now.getMonth()]} ${now.getDate()}`);
    changeDisplay(dayDisplay, `${daysArr[now.getDay()]}`);
}


setClock();
setInterval(setClock, 1000);

