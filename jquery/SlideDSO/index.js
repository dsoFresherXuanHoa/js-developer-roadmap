const btnSlideDown = $("#btnSlideDown");
const btnSlideUp = $("#btnSlideUp");
const btnSlideToggle = $("#btnSlideToggle");

const box = $(".box");

btnSlideDown.on("click", () => {
  box.slideDown("slow");
});

btnSlideUp.on("click", () => {
  box.slideUp("slow");
});

btnSlideToggle.on("click", () => {
  box.slideToggle("slow");
});
