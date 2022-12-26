const mealkitModel = require("../models/mealkitList.js");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("general/home", {
    mealkits: mealkitModel.getTopMeals(),
  });
});

router.get("/log-in", function (req, res) {
  res.render("general/log-in");
});

router.get("/sign-up", function (req, res) {
  res.render("general/sign-up");
});

module.exports = router;
