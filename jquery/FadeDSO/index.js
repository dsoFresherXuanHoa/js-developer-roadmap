const btnFadeIn = $("#btnFadeIn");
const btnFadeOut = $("#btnFadeOut");
const btnFadeToggle = $("#btnFadeToggle");
const btnFadeTo = $("#btnFadeTo");

const box = $(".box");

btnFadeIn.on("click", () => {
  box.fadeIn("slow");
});

btnFadeOut.on("click", () => {
  box.fadeOut("slow");
});

btnFadeToggle.on("click", () => {
  box.fadeToggle("slow");
});

btnFadeTo.on("click", () => {
  box.fadeTo("slow", 0.5);
});
