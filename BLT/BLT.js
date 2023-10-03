let worker = new Worker('TimerWebWorker.js');
let timertext = document.getElementById('timertexth1');
const timersound = new Audio('9.22.23 - Fragment BLT Sound Effects 2 2023-09-22 1618.mp3');
function add1min() {
    worker.postMessage('add1min');
}
function add5min() {
    worker.postMessage('add5min');
}
function sub1min() {
    worker.postMessage('sub1min');
}
function sub5min() {
    worker.postMessage('sub5min');
}
function reset() {
    worker.postMessage('reset');
}

function start() {
    worker.postMessage('starttimer');
}
function pause() {
    worker.postMessage('pausetimer');
}

worker.onmessage = function(event) {
    const messageFromWorker = event.data.message;
    const messagefworker = event.data;
    const timertotalfromworker = event.data.timertotal;
    if (messagefworker == "timersound") { 
        timersound.play();
    }
    if(messageFromWorker == "update") {
        let seconds = timertotalfromworker % 60;
        let minutes = Math.floor(timertotalfromworker/60);
        if(seconds == 0) { seconds = seconds.toString() + "0";}
        else if(seconds < 10) { seconds = "0" + seconds.toString();}

        let formattedtimertotal = minutes.toString() + ":" + seconds.toString();
        timertext.innerHTML = formattedtimertotal;
        // timertext.innerHTML = timertotalfromworker;
    }
  };