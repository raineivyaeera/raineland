let worker = new Worker('TimerWebWorker.js');
let timertext = document.getElementById('timertexth1');

function add1min() { worker.postMessage('add1min'); }
function add5min() { worker.postMessage('add5min'); }
function sub1min() { worker.postMessage('sub1min'); }
function sub5min() { worker.postMessage('sub5min'); }
function reset() { worker.postMessage('reset'); }
function start() { worker.postMessage('starttimer'); }
function pause() { worker.postMessage('pausetimer'); }

worker.onmessage = function(event) {
    const { message, timertotal, mode } = event.data;

    if (message === "update") {
        let seconds = timertotal % 60;
        let minutes = Math.floor(timertotal / 60);
        if (seconds < 10) seconds = "0" + seconds;

        timertext.innerHTML = minutes + ":" + seconds + (mode === "up" ? " ↑" : " ↓");
    }
};

document.addEventListener('keypress', (e) => {
    if (e.key === 'c') {
        worker.postMessage('togglemode');
    }
});

