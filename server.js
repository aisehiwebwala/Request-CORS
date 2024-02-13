const express = require("express");
const app = express();
const port = 3000;
const request = require("postman-request");
app.use("/api", (req, res) => {
  let url = req.query.url;
  request(url, function (error, response, body) {
  res.send(body);
});
    
});
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
