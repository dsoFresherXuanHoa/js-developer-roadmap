const cheerio = require("cheerio");
const express = require("express");

const API_URL = "https://kimetsu-no-yaiba.fandom.com/wiki/Characters";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  fetch(API_URL)
    .then((res) => res.text())
    .then((data) => {
      const $ = cheerio.load(data);

      const portals = $(".portal").each(function (i, e) {
        console.log($(this).find("img").attr("alt"));
        console.log($(this).children("div").attr("style"));
        console.log($(this).contents().html());

        console.log($(this).parent().html());

        console.log($(this).find("a").filter("title").attr("title"));
      });
      console.log(typeof portals);

      res.send("Finished!");
    })
    .catch((err) => console.log(err));
});

app.listen(port, async () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
