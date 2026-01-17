let worker = new Worker('TimerWebWorker.js');
let timertext = document.getElementById('timertexth1');
const timersound = new Audio('BLT_Fadein.mp3');
const timerContainer = document.getElementById('timertext'); // for background color

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

        // No arrow, just the time
        timertext.innerHTML = minutes + ":" + seconds;

        // Change background color depending on mode
        if (mode === "up") {
            timerContainer.style.backgroundColor = "#0f1b33"; // dark navy
        } else {
            timerContainer.style.backgroundColor = "#121c2b"; // slightly different dark shade
        }
    }
};

document.addEventListener('keypress', (e) => {
    if (e.key === 'c' || 'r' || 's') {
        worker.postMessage('togglemode');
    }
});

