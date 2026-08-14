let pomodoro = document.getElementById("pomodoro-time");
let short = document.getElementById("short-time");
let long = document.getElementById("long-time");
let timers = document.getElementById("timer-display");
let session = document.getElementById("pomodoro");
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