var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const { ObjectId } = require('mongodb');

router.get('/', async function (req, res, next) { // async added here as await could only valid in async function
    // Use connect method to connect to the server

    // Database Name
    const dbName = 'attack_flow2';

    // Connection URL
    const url = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(url);
    await client.connect();
    console.log("Mongo ROUTE Test: Connect successfully");
    const db = client.db(dbName);
 
  
    // TESTING PURPOSE - grab uploaded file from DB

    const collection = db.collection('IncidentReportFile');
    let document = await collection.find({
        // this should find the latest report in the DB
    }).sort({ FileDate: -1 }).limit(1).toArray();


    // write upladed file
    try {
        fs.writeFileSync(document[0].FileName, document[0].FileData.buffer, "binary");
        // file written successfully
    } catch (err) {
        console.error(err);
    }

    res.set({
        'Content-Disposition': 'attachment; filename=' + document[0].FileName
    });

    res.send(document[0].FileData.buffer);
});

module.exports = router;
