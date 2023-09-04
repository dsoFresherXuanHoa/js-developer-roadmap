const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

http
  .createServer((req, res) => {
    const filePath = path.join(__dirname, "./index.txt");
    const newPath = path.join(__dirname, "./index.md");
    /**
    fs.readFile(filePath, (err, data) => (err ? res.end(err) : res.end(data)));
    
    fs.appendFile(filePath, "dsoFresherXuanHoa", (err) =>
      err ? res.end(err) : res.end("File has been append!")
    );
    
    fs.open(filePath, "r", (err, file) =>
      err ? res.end(err) : res.end(file.toString())
    );
    
    fs.writeFile(filePath, "dsoFresherXuanHoa", (err) =>
      err ? res.end(err) : res.end("Record has been write to file!")
    );
    
    fs.unlink(filePath, (err) =>
      err ? res.end(err) : res.end("File has been removed!")
    );
    
    fs.rename(filePath, newPath, (err) =>
      err ? res.end(err) : res.end("File has been rename!")
    );
    */

    console.log(fs.constants);
  })
  .listen(8080);
