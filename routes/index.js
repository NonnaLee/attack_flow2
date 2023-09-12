var express = require('express');
var router = express.Router();
const path = require("path")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/main.html"))
});

module.exports = router;
