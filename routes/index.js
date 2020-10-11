const express = require("express");
const router = express.Router();
const loremIpsum = require("lorem-ipsum").loremIpsum;

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/generate", (req, res, next) => {
  let count = Number(req.body.count) || 10;
  let { typegen } = req.body || 'words';
  let ipsum = loremIpsum({ count: count, units: typegen });
  res.render("display_ipsum", { text: ipsum, count, typegen });
});

module.exports = router;
8;
