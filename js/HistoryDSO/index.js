const btnBack = document.getElementById("btnBack");
const btnForward = document.getElementById("btnForward");
const btnGo = document.getElementById("btnGo");

btnBack.onclick = history.back();
btnForward.onclick = history.forward();
btnGo.onclick = history.go(-1);
