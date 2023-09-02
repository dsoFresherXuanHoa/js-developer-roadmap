let age = 22;
let nan = NaN;
let inf = Infinity;

console.log(isNaN(nan));
console.log(isFinite(inf));

console.log(age.toString());
console.log(age.toString(2));
console.log(age.toExponential());
console.log(age.toFixed(2));
console.log(age.toPrecision(2));

console.log(age.valueOf());
console.log(Number(age));
console.log(parseFloat(age));
console.log(parseInt(age));

console.log(Number.isInteger(age));
console.log(Number.isSafeInteger(age));

console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);
