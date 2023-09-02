const volvo = {
  name: "Volvo",
  speed: 200,
  run: function run() {
    console.log("Vehicle is running...");
  },
};

console.log(volvo.name);
console.log(volvo["speed"]);
volvo.run();
