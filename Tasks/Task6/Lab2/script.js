let clock = document.getElementById("clock");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

let timer = null;
function format(num) {
    return num.toString().padStart(2, '0');
}


function runClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clock.textContent =
        format(hours) + ":" +
        format(minutes) + ":" +
        format(seconds);
}

function startClock() {
    if (timer === null) {
        runClock(); // update immediately
        timer = setInterval(runClock, 1000);
    }
}

function stopClock() {
    clearInterval(timer);
    timer = null;
}

startBtn.addEventListener("click", startClock);
stopBtn.addEventListener("click", stopClock);

window.addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "s") {
        startClock();
    } else if (e.key.toLowerCase() === "x") {
        stopClock();
    }
});

startClock();