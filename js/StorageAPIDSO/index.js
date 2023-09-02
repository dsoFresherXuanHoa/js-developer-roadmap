const tfLocal = document.getElementById("tfLocal");
const tfSession = document.getElementById("tfSession");
const btnAddLocal = document.getElementById("btnAddLocal");
const btnRemoveLocal = document.getElementById("btnRemoveLocal");
const btnAddSession = document.getElementById("btnAddSession");
const btnRemoveSession = document.getElementById("btnRemoveSession");

const username = "dsoFresherXuanHoa";

btnAddLocal.addEventListener("click", () => {
  localStorage.setItem(username, username);
  tfLocal.innerText = username;
});

btnRemoveLocal.addEventListener("click", () => {
  localStorage.removeItem(username, username);
  tfLocal.innerText = "";
});

btnAddSession.addEventListener("click", () => {
  sessionStorage.setItem(username, username);
  tfSession.innerText = username;
});

btnRemoveSession.addEventListener("click", () => {
  sessionStorage.removeItem(username, username);
  tfSession.innerText = "";
});

window.onload = () => {
  tfLocal.innerText = localStorage.getItem(username);
  tfSession.innerText = sessionStorage.getItem(username);
};
