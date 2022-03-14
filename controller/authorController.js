const authorModel = require("../model/authorModel")

// to create author
const createAuthor = async (req, res) => {
    try{
        const data = req.body;
        const author = await authorModel.create(data)
        res.status(201).send({status: true, data: author})
    }catch(e){
        res.status(400).send({status: false, msg: e.message})
    }
}

module.exports.createAuthor = createAuthor;