for (let i = 0; i < 100; i++) {
  if (i == 25) {
    console.log("skipped!");
    continue;
  }
  if (i == 30) {
    console.log("Exited!");
    break;
  }
  console.log("Index: " + i);
}
