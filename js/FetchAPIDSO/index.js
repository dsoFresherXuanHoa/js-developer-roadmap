const btnGetTodo = document.getElementById("btnGetTodo");
const todo = document.getElementById("todo");

const API_URL = "https://jsonplaceholder.typicode.com/todos";

btnGetTodo.addEventListener("click", () => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const html = data.reduce((a, v, i, o) => a + `<li>${v.title}</li>`, "");
      todo.innerHTML = html;
    })
    .catch((err) => console.log(err));
});
