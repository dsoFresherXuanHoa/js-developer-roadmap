const btnDarkMode = document.getElementById("btnDarkMode");
const html = document.documentElement;

btnDarkMode.addEventListener("click", () => {
  html.setAttribute("data-bs-theme", "dark");
});
