const express = require("express");
const router = express.Router();
const dbConnect = require('../config/mongodb.js');

router.get("/", async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
});

router.post('/', async (req, res) => {
    console.log("Request.body", req.body);
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result)
});

module.exports = router;


// POST data with files

// app.post('/', upload.fields([{ name: 'file1' }, { name: 'file2' }]), async (req, res) => {
//     console.log("Request.body", req.body); // Access form data
//     console.log("Request.files", req.files); // Access uploaded files

//     // Handle file uploads - save to database or perform other operations
//     let data = await dbConnect();
//     let result = await data.insertOne({
//         ...req.body, // Assuming req.body contains other form data
//         file1: req.files['file1'][0], // Access the first file uploaded
//         file2: req.files['file2'][0] // Access the second file uploaded
//     });

//     res.send(result);
// });