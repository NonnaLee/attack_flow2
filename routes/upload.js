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

    console.log("Mongo ROUTE Test: Connected to database");

    // read uploaded file
    const filepathSource = "testing_files_to_upload/myFile.docx";
    let data;
    try {
        data = fs.readFileSync(filepathSource);

        console.log(data);
    } catch (err) {
        console.error(err);
    }

    // TESTING PURPOSE - insert uploaded file into DB
    const collection = db.collection('IncidentReportFile');
   
    collection.insertOne({
        "FileData": data,
        "FileName": path.basename(filepathSource),
        "FileDate": new Date()
    });

    res.send("Incident report file uploaded successfully");
});

module.exports = router;
