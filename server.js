var express = require("express");
const exphbs = require("express-handlebars");

var app = express();

app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", ".hbs");

app.use(express.static(__dirname + "/public"));

// Load controllers into Express
const generalController = require("./controllers/general");
const mealkitController = require("./controllers/mealkit");

app.use("/", generalController);
app.use("/mealkit", mealkitController);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.listen(HTTP_PORT, onHttpStart);
