const mealkitModel = require("../models/mealkitList.js");

const express = require("express");
const router = express.Router();

router.get("/onTheMenu", function (req, res) {
  res.render("mealkit/onTheMenu", {
    mealkits: mealkitModel.getAllMealKits(),
  });
});

module.exports = router;
