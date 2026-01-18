let worker = new Worker('TimerWebWorker.js');
let timertext = document.getElementById('timertexth1');
const timersound = new Audio('BLT_Fadein.mp3');
const timerContainer = document.getElementById('timertext');

let currentMode = null;

function add1min() { worker.postMessage('add1min'); }
function add5min() { worker.postMessage('add5min'); }
function sub1min() { worker.postMessage('sub1min'); }
function sub5min() { worker.postMessage('sub5min'); }
function reset() { worker.postMessage('reset'); }
function start() { worker.postMessage('starttimer'); }
function pause() { worker.postMessage('pausetimer'); }

worker.onmessage = function(event) {
    const { message, timertotal, mode } = event.data;

    if (message === "timersound") {
        timersound.currentTime = 0;
        timersound.play();
        return;
    }

    if (message === "update") {
        let seconds = timertotal % 60;
        let minutes = Math.floor(timertotal / 60);
        if (seconds < 10) seconds = "0" + seconds;

        timertext.innerHTML = minutes + ":" + seconds;

        if (mode !== currentMode) {
            currentMode = mode;

            if (mode === "up") {
                timerContainer.classList.add("stopwatch-mode");
            } else {
                timerContainer.classList.remove("stopwatch-mode");
            }
        }
    }
};

document.addEventListener('keypress', (e) => {
    if (e.key === 'c') {
        worker.postMessage('togglemode');
    }
    if (e.key === 'k') {
        worker.postMessage('add5min');
    }
    if (e.key === 'j') {
        worker.postMessage('sub5min');
    }
    if (e.key === 'h') {
        worker.postMessage('sub1min');
    }
    if (e.key === 'l') {
        worker.postMessage('add1min');
    }
    if (e.key === 'Enter') {
        worker.postMessage('starttimer');
    }
    if (e.key === 'Space') {
        worker.postMessage('pausetimer');
    }
    if (e.key === 'r') {
        worker.postMessage('reset');
    }
});
