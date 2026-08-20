let pomodoro = document.getElementById("pomodoro-timer");
let short = document.getElementById("short-timer");
let long = document.getElementById("long-timer");
let timers = document.querySelectorAll(".timer-display"); //pois aqui ele vai na classe
let session = document.getElementById("pomodoro-timer");
let shortBreak = document.getElementById("short-break");
let longBreak = document.getElementById("long-break");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let timerMessage = document.getElementById("timer-message");
let button = document.getElementById(".button");

let currentTimer = null;
let myInterval = null;

//mostra o tempo padrao
function showDefaultTimer() {
    pomodoro.style.display = "block";
    short.style.display = "none";
    long.style.display = "none";
};

showDefaultTimer();

function hideAll(){
    timers.forEach((timer) => {
        timer.style.display = "none";
    });
};

session.addEventListener("click", () => {
    hideAll();

    pomodoro.style.display = "block";

    session.classList.add("active");
    shortBreak.classList.remove("active")
    longBreak.classList.remove("active")
});

shortBreak.addEventListener("click", () => {
    hideAll();

    short.style.display = "block";

    session.classList.remove("active");
    shortBreak.classList.add("active")
    longBreak.classList.remove("active")
});

longBreak.addEventListener("click", () => {
    hideAll();

    long.style.display = "block";

    session.classList.remove("active");
    shortBreak.classList.remove("active")
    longBreak.classList.add("active")
});
//iniciar o timer
function startTimer(timerDisplay){
    if(myInterval){
        clearInterval(myInterval)
    }

    timerDuration = timerDisplay.getAttribute("data-duration").split(":")[0]

    let durationInMilliSeconds = timerDuration * 60 * 1000
    let endTimestamp = Date.now() + durationInMilliSeconds;

    myInterval= setInterval(() => {
        const timeRemaning = new Date(endTimestamp - Date.now())

        if(timeRemaning <= 0){
            clearInterval(myInterval)
            timerDisplay.textContent = "00:00"

            const alarm = new Audio("https://www.freespecialeffects.co.uk/soundfx/scifi/electronic.wav")
            alarm.play();        
        } else {
            const minutes = Math.floor(timeRemaning / 60000);
            const seconds = ((timeRemaning % 60000) / 1000).toFixed(0);
            const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
            timerDisplay.textContent = formattedTime;
        }
    }, 1000)
}

startButton.addEventListener("click", () => {
    console.log("Botão START clicado");

    if(currentTimer){
        startTimer(currentTimer)
        timerMessage.style.display = "none";
    } else {
        timerMessage.style.display = "block";
    }
});
console.log ("startButton");
