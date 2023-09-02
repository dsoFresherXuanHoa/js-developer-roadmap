const cars = ["Saab", "Volvo", "BMW"];

console.log(cars.length);
console.log(cars[0]);
console.log(cars[cars.length - 1]);

cars.push("Volvo");
cars.pop();

cars.unshift("Volvo");
cars.shift();

console.log(Array.isArray(cars));
console.log(cars instanceof Array);

console.log(cars.join(" - "));

console.log(cars.flat());
cars.splice(0, 0, "Volvo");

console.log(cars.slice(0, 2));

cars.sort((c, n) => c.length - n.length);
cars.reverse();

console.log(cars);

cars.forEach((v, i, o) => console.log(v));
console.log(cars.map((v, i, o) => v.length));
console.log(cars.flatMap((v, i, o) => v.length));
console.log(cars.filter((v, i, o) => v.length > 3));
console.log(cars.reduce((a, v, i, o) => a + v.length, 0));
console.log(cars.every((v, i, o) => v.length > 5));
console.log(cars.some((v, i, o) => v.length > 5));

console.log(cars.indexOf("Volvo"));
console.log(cars.lastIndexOf("Volvo"));

console.log(cars.find((v, i, o) => v.length > 3));
console.log(cars.findIndex((v, i, o) => v.length > 3));

console.log(Array.from(cars));

console.log(cars.keys(), cars.values(), cars.entries());

console.log(cars.includes("Volvo"));

const carsBak = [...cars];

console.log(cars);
