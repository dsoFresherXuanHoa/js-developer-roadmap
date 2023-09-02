const xhr = new XMLHttpRequest();
xhr.onload = function () {
  console.log(this.getAllResponseHeaders());
  console.log(this.readyState);
  console.log(this.responseText);
  console.log(this.responseXML);
  console.log(this.status);
  console.log(this.statusText);
};
xhr.open("get", "./index.txt");
xhr.send();
