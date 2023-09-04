const http = require("node:http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("dsoFresherXuanHoa");
  })
  .listen(8080);
