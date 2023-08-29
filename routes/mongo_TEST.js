var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');

router.get('/', async function (req, res, next) { // async added here as await could only valid in async function
    // Use connect method to connect to the server

    // Database Name
    const dbName = 'attack_flow2';

    // Connection URL
    const url = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(url);
    await client.connect();
    console.log("Mongo Test: Connect successfully");
    const db = client.db(dbName);
    //codes above this lines will be moved later

    console.log("Mongo Test: Connected to database");

    // TESTING PURPOSE
    //const collection = db.collection('IncidentReport');
    //var results = await collection.find({}).toArray();
    //console.log('Mongo Test: Found documents =>', results);
    // const collectionOther = db.collection('other');
    // await collectionOther.insertOne({ "test": 55 });
    res.send('Connected successfully to MongoDB');
});

module.exports = router;
