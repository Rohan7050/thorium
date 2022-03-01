const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor = async function(req, res){
    let data = req.body
    const saveAuthor = await authorModel.create(data)
    res.send(saveAuthor)
}

const getBookByAuthor = async function(req, res){
    const { author_name } = req.body;
    const fromAuthor = await authorModel.find({author_name: author_name})
    const id = fromAuthor[0].author_id
    const bookList = await bookModel.find({author_id: id}).select({bookName: 1, _id:0})
    res.send(bookList)

}

const findAndUpdate = async function(req, res){
    const bookName = 'Two states';
    const findBook = await bookModel.findOneAndUpdate({bookName: bookName}, {prices: 100},{new: true})
    const id = findBook.author_id
    const findAuthor = await authorModel.findOne({author_id: id})
    res.send({author_name: findAuthor.author_name, book: findBook})
}

const bookAndAuthor = async function (req, res){
    const allIds = await bookModel.find({prices: {$gte: 50, $lte: 100}}).select({author_id: 1, _id: 0})
    const id = allIds.map(x => x.author_id)
    const arr = []
    for (let i of id){
        arr.push(await authorModel.findOne({author_id: i}).select({author_name: 1, _id: 0}))
    }
    res.send(arr)
}

module.exports.createBook= createBook
module.exports.createAuthor = createAuthor
module.exports.getBookByAuthor= getBookByAuthor
module.exports.findAndUpdate = findAndUpdate
module.exports.bookAndAuthor = bookAndAuthor

