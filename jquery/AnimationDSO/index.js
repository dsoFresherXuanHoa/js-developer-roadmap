const btnAnimate = $("#btnAnimate");
const box = $(".box");

btnAnimate.on("click", () => {
  box.animate({
    left: "+=100px",
  });
});
