const firstBox = document.getElementsByClassName("box")[0];

console.log("Parent: ");
console.log(firstBox.parentNode);

console.log("Child: ");
console.log(firstBox.childNodes);
console.log(firstBox.childNodes[1]);
console.log(firstBox.firstChild);
console.log(firstBox.lastChild);
console.log(firstBox.nextSibling);
console.log(firstBox.previousSibling);

console.log(firstBox.nodeName);
console.log(firstBox.nodeType);
console.log(firstBox.nodeValue);
