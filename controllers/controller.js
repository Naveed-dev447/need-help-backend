const dbConnect = require('../config/mongodb.js');

exports.getData = async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
};

exports.createData = async (req, res) => {
    console.log("Request.body", req.body);
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
};
