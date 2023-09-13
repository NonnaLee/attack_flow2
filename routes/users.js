var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt")
const { MongoClient } = require('mongodb');
// Database Name
const dbName = 'attack_flow2';

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

/* GET users listing. */
router.post('/loginAuth', (req, res) => {
    // TODO: login logic server side
    const user = req.body.user
    const pl_pwd = req.body.pwd

    const client = new MongoClient(url);
    client.connect();
    const db = client.db(dbName)
    const collection = db.collection('users')



    res.send("")
});

// CONSIDER: do we limit users to unique usernames or not
router.post('/signupAuth', (req, res) => {
    const user = req.body.user
    const pl_pwd = req.body.pwd

    const client = new MongoClient(url);
    client.connect().then(() => {
        console.log("connected")
        const db = client.db(dbName)
        const collection = db.collection('users')
        console.log("found collection")

        hashPwd(pl_pwd).then((hs_pwd) => {
            console.log(hs_pwd)
            collection.insertOne({
                "username": user,
                "pwd": hs_pwd,
            }).then((id) => { res.send(String(id.insertedId)) })
        })
    });
});

async function hashPwd(pl_pwd) {
    return await bcrypt.hash(pl_pwd, 10);
}

async function comparePwd(pl_pwd, hs_pwd) {
    return await bcrypt.compare(pl_pwd, hs_pwd)
}



module.exports = router;
