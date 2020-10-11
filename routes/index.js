const express = require('express');
const router = express.Router();
const loremIpsum = require('lorem-ipsum').loremIpsum

/* GET home page. */
router.get('/', (req, res, next)  => {
  res.render('index');
});

router.post('/',(req,res,next) => {
  let count = Number(req.body.count)
  let ipsum = loremIpsum({count: count,units:'paragraph'})
  console.log(ipsum.length)
  res.render('display_ipsum',{text: ipsum})
})

module.exports = router;
8