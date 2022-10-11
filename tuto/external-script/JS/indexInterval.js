const btn = document.querySelector("button");
const clockHolder = document.querySelector("span");

btn.addEventListener("click", stopOrResumeClock);

var myIntervalId;

startClock();

function startClock() {
    myIntervalId = setInterval(printCurrentTime, 2000);
}

function printCurrentTime() {
    const now = new Date();
    const time = now.toLocaleDateString();
    clockHolder.innerText = time; 
}

function stopOrResumeClock() {
    if (myIntervalId) {
        clearInterval(myIntervalId);
        myIntervalId = undefined;
    } else {
        startClock();
    }
}