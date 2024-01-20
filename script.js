// let audio = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
function play() {
  // let audio = new Audio("beep-warning-6387.mp3");
  let audio = new Audio("mixkit-alarm-tone-996 (1).wav");
  audio.play();
}

let alarmHour = 0;
let alarmMinute = 0;
let alarmInterval;
let  snoozeInterval;

document.getElementById("alarmButton").addEventListener("click", function() {
  let inputHour = parseInt(document.getElementById("alarmHour").value);
  let inputMinute = parseInt(document.getElementById("alarmMinute").value);

  if (inputHour >= 0 && inputHour <= 23 && inputMinute >= 0 && inputMinute <= 59) {
    alarmHour = inputHour;
    alarmMinute = inputMinute;
    console.log("Alarm set");
    startAlarm();
  } else {
    alert("Invalid input for alarm time.");
  }
});

function checkAlarm() {
  let  now = new Date();
  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
  if (currentHour === alarmHour && currentMinute === alarmMinute) {
    play();
  }
}

// To run checkAlarm() in every one second..
function startAlarm(){
 clearInterval(alarmInterval);
  alarmInterval = setInterval(checkAlarm, 1000);
}

// To stop the alarm
function stopAlarm() {
  console.log("Alarm stop")
  clearInterval(alarmInterval);
  clearInterval( snoozeInterval);
}

// To snooze the alarm
function snooze(minutes) {
  clearInterval(alarmInterval);
  
  setTimeout(() => {
    console.log("Alarm snoozed")
    snoozeInterval =  setInterval(()=>{
    alarmInterval = setInterval(checkAlarm, 1000);
    play()
  },1000)
  }, minutes * 60000);
}


let hr = document.getElementById("hr");
let m = document.getElementById("m");
let s = document.getElementById("s");
let AMPM = document.getElementById("AMPM");

function updateClock() {
  let clock = new Date();
  let hrs = clock.getHours();
  if (hrs < 10) {
    hr.innerHTML = "0" + hrs;
  }
  else if (hrs == 0) {
    hr.innerHTML = 12;
  }
  else if (hrs > 12) {
    hr.innerHTML = (hrs - 12 < 10) ? "0" + (hrs - 12) : (hrs - 12);
  }
  else {
    hr.innerHTML = hrs;
  }
  let min = clock.getMinutes();
  if (min < 10) {
    m.innerHTML = "0" + min;
  }
  else {
    m.innerHTML = min;
  }
  let sec = clock.getSeconds();
  if (sec < 10) {
    s.innerHTML = "0" + sec;
  }
  else {
    s.innerHTML = sec;
  }
  AMPM.innerHTML = (hrs < 12) ? "AM" : "PM";
}
updateClock()
// To updateClock every second..
setInterval(updateClock, 1000);

