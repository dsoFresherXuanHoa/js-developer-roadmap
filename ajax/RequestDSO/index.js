const btnGet = document.getElementById("btnGet");
const btnPost = document.getElementById("btnPost");

const xhr = new XMLHttpRequest();

btnGet.addEventListener("click", () => {
  xhr.onload = function () {
    console.log(this.responseText);
  };
  xhr.open("get", "./index.txt");
  xhr.send();
});

btnPost.addEventListener("click", () => {
  xhr.onload = function () {
    console.log(this.responseText);
  };
  xhr.open("post", "./index.txt");
  xhr.send();
});
