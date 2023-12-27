let timer;
let isRunning = false;
let seconds = 0;
let lapNumber = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopButton").innerHTML = '<img src="play.svg" alt="Start">';
  } else {
    timer = setInterval(updateTimer, 1000);
    document.getElementById("startStopButton").innerHTML = '<img src="pause.svg" alt="Start">';
  }
  isRunning = !isRunning;
}

function lap() {
  const lapTime = formatTime(seconds);
  const lapList = document.getElementById("lapList");
  const lapItem = document.createElement("div");
  lapItem.innerText = "Lap " + lapNumber + ": " + lapTime;
  lapList.appendChild(lapItem);
  lapNumber++;
}

function restart() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  lapNumber = 1;
  document.getElementById("timer").innerText = formatTime(seconds);
  document.getElementById("startStopButton").innerHTML = '<img src="play.svg" alt="Start">';
  document.getElementById("lapList").innerHTML = "";
}

function updateTimer() {
  seconds++;
  document.getElementById("timer").innerText = formatTime(seconds);
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return (
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (secs < 10 ? "0" : "") + secs
  );
}