const timerElement = document.getElementById('timer');
let timerValue = 0;

setInterval(() => {
  timerValue++;
  timerElement.textContent = timerValue;
}, 1000);
