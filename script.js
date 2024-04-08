let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(runStopwatch, 10);
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(timer);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function runStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
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
    updateDisplay();
}

function updateDisplay() {
    const display = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
    document.querySelector('.display').textContent = display;
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);