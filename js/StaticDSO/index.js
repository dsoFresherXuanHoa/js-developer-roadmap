import Vehicle from "./Vehicle.js";

const volvo = new Vehicle("Volvo", 200);
const bwm = new Vehicle("BWM", 250);

Vehicle.stop(volvo);
Vehicle.stop(bwm);
