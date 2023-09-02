const gender = true;
const msg = gender ? "Hi! Mr!" : "Hi! Mrs!";
const nul = null;
const volvo = {
  name: "Volvo",
  speed: 200,
  run: function () {
    console.log("Vehicle is running...");
  },
};

console.log(msg);
console.log(null ?? "Nullish");
console.log(0 || "Falsy");

console.log(volvo?.name);
volvo?.stop?.();
