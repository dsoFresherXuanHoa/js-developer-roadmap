const express = require("express");
const app = express();
const port = 3000;

const accessTimeLogger = (req, res, next) => {
  console.log(`Has access: ${new Date()}`);
  next();
};

app.use(accessTimeLogger);

app.get("/", (req, res) => {
  res.send("dsoFresherXuanHoa - GET");
});

app.listen(port, async (req, res) => {
  console.log(`Server is running at: http://localhost:${port}`);
});
