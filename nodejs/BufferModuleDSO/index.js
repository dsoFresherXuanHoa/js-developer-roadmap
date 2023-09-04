const buff = Buffer.from("dsoFresherXuanHoa");

console.log(Buffer.alloc(15));
console.log(buff.byteLength);
console.log(buff.length);
console.log(buff.equals(buff, Buffer.from("dsoFresherXuanHoa")));
console.log(buff.fill("0"));
console.log(buff.includes("dso"));
console.log(buff.indexOf("dso"));
console.log(buff.lastIndexOf("dso"));
console.log(buff.keys());
console.log(buff.values());
console.log(buff.entries());
console.log(buff.toString());
console.log(buff.toJSON());
