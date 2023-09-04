const path = require("node:path");

const express = require("express");
const app = express();
const port = 3000;

const secretRouter = express.Router();

secretRouter.get("/", (req, res) => {
  res.send("Secret - GET");
});

app.use("/secret", secretRouter);

app.use(express.static(path.join(__dirname, "./public")));

app.route("/api/v1/accounts").get((req, res) => {
  res.end("Account - GET");
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Id: ${id}`);
});

app.all("/about", (req, res) => {
  res.send("About");
});

app.get("/", (req, res) => {
  res.send("dsoFresherXuanHoa - GET");
});

app.listen(port, async (req, res) => {
  console.log(`Server is running at: http://localhost:${port}`);
});
