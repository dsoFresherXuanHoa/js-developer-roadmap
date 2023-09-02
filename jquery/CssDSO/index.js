const box = $(".box");
const btnAddClass = $("#btnAddClass");
const btnRemoveClass = $("#btnRemoveClass");
const btnToggleClass = $("#btnToggleClass");

btnAddClass.on("click", () => {
  box.addClass("danger");
});

btnRemoveClass.on("click", () => {
  box.removeClass("danger");
});

btnToggleClass.on("click", () => {
  box.toggleClass("danger");
});

box.css("height", "200px");
