const querystring = require("querystring");

const query = "year=2017&month=february";
const q = querystring.parse("year=2017&month=february");

console.log(q);
console.log(querystring.escape(query));
console.log(querystring.unescape(query));
console.log(querystring.stringify(querystring.parse(query)));
