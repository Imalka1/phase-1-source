function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

var hoursSpan;
var minutesSpan;
var secondsSpan;

function initializeClock(id, endtime, display) {

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan = ('0' + t.hours).slice(-2);
    minutesSpan = ('0' + t.minutes).slice(-2);
    secondsSpan = ('0' + t.seconds).slice(-2);
    display.textContent = hoursSpan + "h : " + minutesSpan + "m : " + secondsSpan+"s";

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline;

function startCountdownTimer() {
  deadline = new Date(Date.parse(new Date()) + 1 * 5 * 60 * 1000);
  initializeClock('time', deadline, document.querySelector('#time'));
};

function getHours(){
  return hoursSpan;
}

function getMinutes(){
  return minutesSpan;
}

function getSeconds(){
  return secondsSpan;
}
