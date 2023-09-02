const btnStop = $("#btnStop");
const btnAnimate = $("#btnAnimate");
const box = $(".box");

btnAnimate.on("click", () => {
  box
    .animate({
      left: "+100px",
    })
    .slideUp("slow");
});

btnStop.on("click", () => {
  box.stop(true, true);
});
