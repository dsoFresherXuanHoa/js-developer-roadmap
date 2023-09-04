const http = require("node:http");
const url = require("node:url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });

    const queryString = url.parse(req.url, true);
    console.log(queryString);

    res.end("dsoFresherXuanHoa");
  })
  .listen(8080);
