const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("dsoFresherXuanHoa");
});

app.listen(port, async (req, res) => {
  console.log(`Server is running at: http://localhost:${port}`);
});
