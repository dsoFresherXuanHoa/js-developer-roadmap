const source = document.getElementById("source");
const target = document.getElementById("target");

const startDrag = (e) => e.dataTransfer.setData("text", e.target.id);
const dragOver = (e) => e.preventDefault();
const drop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
};
