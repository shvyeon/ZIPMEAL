const path = require("path");
const mymodule = require("./modules/mymodule");

const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/name", (req, res) => {
  var strName = mymodule.sayHello(`Seonhye`);
  res.send(strName);
});
app.get("/nameq", (req, res) => {
  let name = req.query.name;
  let helloName = mymodule.sayHello(name);
  res.send(helloName);
});

app.get("/on-the-menu", (req, res) => {
  res.send("ON THE MENU");
});

app.get("/log-in", (req, res) => {
  res.send("LOG IN");
});

app.get("/sign-up", (req, res) => {
  res.send("SIGN UP");
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const HTTP_PORT = process.env.PORT || 8080;

function onHTTPStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.listen(HTTP_PORT, onHTTPStart);
