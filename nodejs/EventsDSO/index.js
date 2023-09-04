const events = require("node:events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on("scream", () => console.log("Scream"));

setTimeout(() => {
  eventEmitter.emit("scream");
}, 3000);
