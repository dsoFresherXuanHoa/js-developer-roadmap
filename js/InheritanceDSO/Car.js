import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
  constructor(model, name, speed) {
    super(name, speed);
    this._model = model;
  }

  get model() {
    return this._model;
  }

  set model(model) {
    this._model = model;
  }
}

export default Car;
