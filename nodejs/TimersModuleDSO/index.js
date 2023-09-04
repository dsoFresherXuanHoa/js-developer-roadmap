setTimeout(() => console.log("Timeout"), 1000);
setInterval(() => console.log("Interval"), 1000);
setImmediate(() => {
  console.log("Immediate");
});
