const lang = document.getElementById("lang");

const firstLangItem = document.createElement("li");
const firstLangItemText = document.createTextNode("HTML");
firstLangItem.appendChild(firstLangItemText);

const secondLangItem = document.createElement("li");
const secondLangItemText = document.createTextNode("CSS");
secondLangItem.appendChild(secondLangItemText);

lang.appendChild(firstLangItem);
lang.insertBefore(secondLangItem, firstLangItem);

lang.removeChild(firstLangItem);
lang.replaceChild(firstLangItem, secondLangItem);
