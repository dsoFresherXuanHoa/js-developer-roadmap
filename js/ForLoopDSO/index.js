const cars = ["Volvo", "Kia Forte", "Ford Ranger"];

const carsLength = cars.length;

for (let i = 0; i < carsLength; i++) {
  console.log(cars[i]);
}

for (let i in cars) {
  console.log(cars[i]);
}

for (let car of cars) {
  console.log(car);
}
