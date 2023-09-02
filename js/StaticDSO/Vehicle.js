class Vehicle {
  constructor(name, speed) {
    this._name = name;
    this._speed = speed;
  }

  get name() {
    return this._name;
  }

  get speed() {
    return this._speed;
  }

  set name(name) {
    this._name = name;
  }

  set speed(speed) {
    this._speed = speed;
  }

  static stop(vehicle) {
    console.log(`${vehicle.name} was stopped!`);
  }
}

export default Vehicle;
