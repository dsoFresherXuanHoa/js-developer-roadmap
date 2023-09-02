const btnClick = document.getElementById("btnClick");

btnClick.onclick = function (e) {
  console.log(e);
};

btnClick.addEventListener("click", (e) => {
  console.log(e);
});
