const path = require("node:path");
const fs = require("node:fs");

const express = require("express");
const app = express();
const port = 3000;

const filePath = path.join(__dirname, "./index.txt");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => new Error("Runtime error!"));

app.get("/file", (req, res, next) => {
  fs.readFile(filePath, (err, data) => (err ? next(err) : res.send(data)));
});

app.use((err, req, res, next) => {
  res.render("index", { err: err.name });
});

app.listen(port, async (req, res) => {
  console.log(`Server is running at: http://localhost:${port}`);
});
