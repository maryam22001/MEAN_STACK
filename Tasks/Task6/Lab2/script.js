let clock = document.getElementById("clock");
let timer = null;  
let start =document.getElementById("start");
let end =document.getElementById("stop");

function runClock() {
   
    clock.textContent = new Date().toLocaleTimeString();            
}
function startClock() {
    if (timer === null) {
        runClock();
        timer = setInterval(runClock);
    }
}

function stopClock() {
    clearInterval(timer);
    timer = null; 
}
startClock();



window.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 's') {
        startClock();
    } else if (e.key.toLowerCase() === 'x') {
        stopClock();
    }
});