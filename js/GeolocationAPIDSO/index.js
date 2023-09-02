const tfLocation = document.getElementById("tfLocation");
const btnGetLocation = document.getElementById("btnGetLocation");

btnGetLocation.addEventListener("click", () => {
  if (!navigator.geolocation) {
    tfLocation.innerText = "Geolocation is not supported by this browser.";
  } else {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lon = pos.coords.longitude;
        const lat = pos.coords.latitude;
        tfLocation.innerText = `(${lon}, ${lat})`;
      },
      (err) => {
        tfLocation.innerText = err.message;
      }
    );
  }
});
