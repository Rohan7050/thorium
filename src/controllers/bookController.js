const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const puulisherModel = require("../models/publisherModel")

const createBook = async function (req, res){
    const data = req.body;
    if (data.author && data.publisher){
        const author = await authorModel.findOne({_id: {$in: data.author}})
        const publisher = await puulisherModel.findOne({_id: {$in: data.publisher}})
        if (!author){
            return res.send({Err:"author not present in DB"})
        }
        if (!publisher){
            return res.send({Err: "publisher not present in DB"})
        }
        // return res.send(publisher)
        const book = await bookModel.create(data)
        return res.send(book)
    }
    res.send({Err: "missing author or publisher name"})
}

const getBookAndPopulate = async function(req, res){
    const BookpopulateData = await bookModel.findOne().populate("author").populate("publisher")
    res.send(BookpopulateData)
}

module.exports.createBook = createBook
module.exports.getBookAndPopulate = getBookAndPopulate






























// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
