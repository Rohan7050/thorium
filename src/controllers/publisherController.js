const publisherModel = require("../models/publisherModel");

const createPublisher = async function (req, res){
    const data = req.body;
    if (data.name){
        const publisher = await publisherModel.create(data)
        return res.send(publisher)
    }
    res.send({Err: "Enter publisher name"})
}

module.exports.createPublisher = createPublisher;
