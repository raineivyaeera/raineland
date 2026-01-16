let initialTime = 900; // 15 minutes
let timertotal = initialTime;
let timeron = false;
let interval;
let mode = "down"; // "down" or "up"

self.onmessage = function(event) {
    const msg = event.data;

    switch(msg) {
        case "add1min": timertotal += 60; sendUpdate(); break;
        case "add5min": timertotal += 300; sendUpdate(); break;
        case "sub1min": if(timertotal >= 60) timertotal -= 60; sendUpdate(); break;
        case "sub5min": if(timertotal >= 300) timertotal -= 300; sendUpdate(); break;

        case "reset":
            timertotal = mode === "down" ? initialTime : 0;
            timeron = false;
            clearInterval(interval);
            sendUpdate();
            break;

        case "pausetimer":
            timeron = false;
            clearInterval(interval);
            break;

        case "starttimer":
            if (!timeron) {
                timeron = true;
                interval = setInterval(() => {
                    if (mode === "down") {
                        if (timertotal > 0) timertotal--;
                        else { timeron = false; clearInterval(interval); }
                    } else {
                        timertotal++;
                    }
                    sendUpdate();
                }, 1000);
            }
            break;

        case "togglemode":
            mode = mode === "down" ? "up" : "down";

            if (!timeron) {
                // If stopped → reset cleanly
                timertotal = mode === "down" ? initialTime : 0;
            } 
            // If running → keep current timertotal and reinterpret it
            // (no change needed)

            sendUpdate();
            break;
    }
};

function sendUpdate() {
    postMessage({ message: "update", timertotal, mode });
}

