const path = require("node:path");

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "dsoFresherXuanHoa",
    message: "dsoFresherXuanHoa",
  });
});

app.listen(port, async (req, res) => {
  console.log(`Server is running at: http://localhost:${port}`);
});
