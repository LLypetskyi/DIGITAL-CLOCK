const hourEl = document.getElementById('hour');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock() {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let amPm = 'AM';

  if (hour > 12) {
    // hour = hour - 12;
    amPm = 'PM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  hourEl.innerText = hour;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
  ampmEl.innerText = amPm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
