const btnSubmit = document.getElementById("btnSubmit");

console.log(btnSubmit);

btnSubmit.addEventListener("click", () => {
  const tfUsername = document.getElementById("username");
  if (!tfUsername.checkValidity()) {
    tfUsername.setCustomValidity("Something went wrong!");
  } else {
    console.log("Done!");
  }
});
