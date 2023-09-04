const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("dsoFresherXuanHoa - GET");
});

app.post("/", (req, res) => {
  res.send("dsoFresherXuanHoa - POST");
});

app.put("/", (req, res) => {
  res.send("dsoFresherXuanHoa - PUT");
});

app.delete("/", (req, res) => {
  res.send("dsoFresherXuanHoa - DELETE");
});

app.listen(port, async (req, res) => {
  console.log(`Server is running at: http://localhost:${port}`);
});
