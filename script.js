let timer;
let isRunning = false;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").innerText = "Start";
    } else {
        timer = setInterval(runStopwatch, 0);
        document.getElementById("startStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function runStopwatch() {
    miliseconds++;
    if (miliseconds === 99) {
        miliseconds = 0;

        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    displayStopwatch();
}

function displayStopwatch() {
    let display = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${miliseconds < 10 ? '0' + miliseconds : miliseconds}`;
    document.querySelector('.display').textContent = display;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayStopwatch();
    document.getElementById("startStop").innerText = "Start";
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", resetStopwatch);

displayStopwatch();