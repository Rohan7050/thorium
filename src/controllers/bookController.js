const { count } = require("console")
const { updateMany } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res){
    const data = req.body;
    if (data.author && data.publisher){
        const author = await authorModel.findOne({_id: {$in: data.author}})
        const publisher = await publisherModel.findOne({_id: {$in: data.publisher}})
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
    const BookpopulateData = await bookModel.find().populate("author").populate("publisher")
    res.send(BookpopulateData)
}

// for put req

// for changing isHardCover to true
const putBook = async function (req,res){
    const Id = await publisherModel.find({$or: [{name:"Penguin"},{name:"HarperCollins"}]}).select({_id:1})
    for(let i =0; i<Id.length; i++){
         await bookModel.updateMany({publisher: Id[i]._id}, {isHardCover: true})
    } 
    res.send({msg:"done"}) 
}
// for incresing price by 10
const updatePriceByRatings = async function (req, res){
    const author = await authorModel.find({ratings: {$gt : 3.5}}).select({_id: 1})
    for (let i = 0; i < author.length; i++){
        await bookModel.updateMany({author: {$eq: author[i]._id}},{$inc: {price: 10}}, {new:true})
    }
    res.send({status: "Done"})
    //res.send(updatePrice)
}

module.exports.createBook = createBook
module.exports.getBookAndPopulate = getBookAndPopulate
module.exports.putBook = putBook
module.exports.updatePriceByRatings = updatePriceByRatings






























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
