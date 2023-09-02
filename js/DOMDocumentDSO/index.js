const box = document.getElementsByTagName("div")[0];
const boxId = document.getElementById("box");
const boxClass = document.getElementsByClassName("box")[0];

console.log(box);
console.log(boxId);
console.log(boxClass);

box.innerHTML = "<h1>dsoFresherXuanHoa</h1>";
box.title = "dsoFresherXuanHoa";
box.style.backgroundColor = "red";
box.setAttribute("data-title", "dsoFresherXuanHoa");
