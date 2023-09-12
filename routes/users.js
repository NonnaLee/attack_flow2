var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt")

/* GET users listing. */
router.post('/loginAuth', (req, res) => {
    // TODO: login logic server side
    const user = req.body.user
    const pl_pwd = req.body.pwd

    res.send("working")
});

router.post('/signupAuth', (req, res) => {
    // TODO: signup logic server side
    const user = req.body.user
    const pl_pwd = req.body.pwd

    res.send("working")
});

module.exports = router;
