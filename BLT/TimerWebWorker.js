let timertotal = 1500;
let timeron = false;
let interval;

self.onmessage = function (event) {
    const mesgData = event.data;
    if (mesgData == "add1min") {
        timertotal += 60;
        postMessage({ message: "update", timertotal});

    }
    if (mesgData == "add5min") { 
        timertotal += 300;
        postMessage({ message: "update", timertotal});

    }
    if (mesgData == "sub1min" && timertotal >= 60) {
        timertotal -= 60;
        postMessage({ message: "update", timertotal});

    }
    if (mesgData == "sub5min" && timertotal >= 300) { 
        timertotal -= 300;
        postMessage({ message: "update", timertotal});

    }
    if (mesgData == "reset") {
        timertotal = 0;
        postMessage({ message: "update", timertotal});
        timeron = false;
        clearInterval(interval);
    }
    if (mesgData == "pausetimer") {
        timeron = false;
        clearInterval(interval);
    }
    
    if (mesgData == "starttimer" && timertotal > 0) {
        if (!timeron) {
            timeron = true;
            interval = setInterval(() => {
                if (timertotal > 0 && timeron == true) {
                    timertotal--;
                    postMessage({ message: "update", timertotal});
                }
                else { timeron = false; postMessage("timersound"); clearInterval(interval);}
            }, 1000);
        };
    }
}
