let author = "dsoFresherXuanHoa";

console.log(author.length);

console.log(author.slice(1, 3));
console.log(author.substring(1, 3));
console.log(author.substr(1, 3));

console.log(author.replace("a", "e"));
console.log(author.replace(/a/gi, "e"));
console.log(author.replaceAll("a", "e"));

console.log(author.toLowerCase());
console.log(author.toUpperCase());

console.log(author.trim());
console.log(author.trimStart());
console.log(author.trimEnd());

console.log(author.padStart(20, "-"));
console.log(author.padEnd(20, "-"));

console.log(author.charAt(0));
console.log(author.charCodeAt(0));

console.log(author.split(""));

console.log(author.indexOf("e"));
console.log(author.lastIndexOf("e"));

console.log(author.search(/e/gi));

console.log(author.match(/e/gi));
console.log(author.matchAll(/e/gi));

console.log(author.includes("dso"));

console.log(author.startsWith("!"));
console.log(author.endsWith("!"));

console.log(`Hi! ${author}`);
