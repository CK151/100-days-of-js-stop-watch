const timer = document.querySelector(".time");
const startT = document.querySelector(".start");
const pauseT = document.querySelector(".pause");
const resetT = document.querySelector(".reset");


let [milisecond, seconds, minutes, hours] = [0,0,0,0];

let t = null;


startT.addEventListener("click", startTimer);
pauseT.addEventListener("click", pauseTimer);
resetT.addEventListener("click", resetTimer);

function startTimer() {
    if (t !== null) {
        clearInterval(t)
    }
    t = setInterval(displayTime, 10);
}

function pauseTimer() {
    clearInterval(t)
}

function resetTimer() {
    clearInterval(t);
    [milisecond, seconds, minutes, hours] = [0,0,0,0]

    timer.innerHTML = "00 : 00 : 00 : 000";
}

//display time

function displayTime() {
    milisecond += 10;
    if (milisecond == 1000) {
        milisecond = 0
        seconds ++;

        if(seconds == 60) {
            seconds = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    let ms = milisecond < 10 ? "00" + milisecond : milisecond < 100 ? "0" + milisecond : milisecond;
    
    
    timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}