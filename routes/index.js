var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("index", {
    pageTitle: "Niceas",
    pageID: "home",
  });
});

module.exports = router;
