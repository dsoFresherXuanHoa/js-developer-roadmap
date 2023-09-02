const box = $(".box");
const btnHide = $("#btnHide");
const btnShow = $("#btnShow");
const btnToggle = $("#btnToggle");

btnHide.on("click", () => {
  box.hide("slow");
});

btnShow.on("click", () => {
  box.show("slow");
});

btnToggle.on("click", () => {
  box.toggle("slow");
});
