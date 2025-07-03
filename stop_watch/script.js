const display = document.querySelector(".time-display");
const start = document.querySelector(".start-btn");
const stop = document.querySelector(".stop-btn");
const reset = document.querySelector(".reset-btn");


let secs = 0;
let mins = 0;

let timerId = null;

start.addEventListener('click',()=>{
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,1000)
})

stop.addEventListener('click',()=>{
    clearInterval(timerId)
})

reset.addEventListener('click',()=>{
    clearInterval(timerId);
    display.innerHTML = `00 : 00`;
    secs = mins = 0;
})

const startTimer = ()=>{
    secs++;
    if(secs > 60){
        secs = 0;
        mins++
    }

    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

   display.innerHTML = `${minsString} : ${secsString}` 
}



