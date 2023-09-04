const path = require("node:path");

const filePath = path.join(__dirname, "./index.js");

console.log(path.basename(filePath));
console.log(path.delimiter);
console.log(path.isAbsolute(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.format(path.parse(filePath)));
console.log(path.normalize(filePath));
