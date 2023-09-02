const btnGet = document.getElementById("btnGet");
const xhr = new XMLHttpRequest();

btnGet.addEventListener("click", () => {
  xhr.onload = function () {
    console.log(this.responseText);
    console.log(this.responseXML);
    console.log(this.getAllResponseHeaders());
  };
  xhr.open("get", "./index.txt");
  xhr.send();
});
