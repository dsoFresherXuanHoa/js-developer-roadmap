const url = require("node:url");
const path = require("node:path");

const urlString = "http://localhost:8080/default.htm?year=2017&month=february";
const queryString = url.parse(urlString, true);

console.log(queryString);
console.log(url.format(queryString));
console.log(url.resolve(urlString, path.basename(urlString)));
