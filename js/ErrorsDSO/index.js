try {
  console.log(username);
} catch (error) {
  // throw Error(error.name);
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Finish!");
}
