const btnClearTimeout = document.getElementById("btnClearTimeout");
const btnClearInterval = document.getElementById("btnClearInterval");

const timeout = setTimeout(() => {
  console.log("Timeout!");
}, 2000);

const interval = setInterval(() => {
  console.log("Interval!");
}, 1000);

btnClearTimeout.click = () => clearTimeout(timeout);
btnClearInterval.onclick = () => clearInterval(interval);
