const startStopButton = document.querySelector("#startStopButton");
const resetButton = document.querySelector("#resetButton");

let seconds = 0;
let minutes = 0;
let hours = 0;
let realSeconds;
let realMinutes;
let realHours;
let timerInterval = null;
let timerStatus = "stopped";

const stopWatch = () => {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    realSeconds = "0" + seconds.toString();
  } else {
    realSeconds = seconds;
  }

  if (minutes < 10) {
    realMinutes = "0" + minutes.toString();
  } else {
    realMinutes = minutes;
  }

  if (hours < 10) {
    realHours = "0" + hours.toString();
  } else {
    realHours = hours;
  }

  document.querySelector(
    "#timer"
  ).innerHTML = `${realHours}:${realMinutes}:${realSeconds}`;
};

startStopButton.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopButton"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopButton"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetButton.addEventListener("click", () => {
  window.clearInterval(timerInterval);

  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
  document.getElementById(
    "startStopButton"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = "stopped";
});
