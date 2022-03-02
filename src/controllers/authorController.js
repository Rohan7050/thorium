const AuthorModel= require("../models/authorModel")

const createAuthor = async function (req, res){
    const data = req.body
    if (data.author_name){
        const author = await AuthorModel.create(data)
        return res.send(author)
    }
    res.send({Err: "Enter authoe name"})
}

module.exports.createAuthor = createAuthor





























// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData