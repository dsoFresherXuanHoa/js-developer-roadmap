const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");

const formidable = require("formidable");

http
  .createServer(function (req, res) {
    if (req.url == "/upload") {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) {
          res.end(`Form error: ${err.message}`);
        } else {
          const file = files.files[0];
          const oldPath = file.filepath;
          const newPath = path.join(__dirname, file.originalFilename);
          fs.rename(oldPath, newPath, (err) =>
            err
              ? res.end(`Save file error: ${err.message}`)
              : res.end("File has been save!")
          );
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="/upload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="files"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8080);
