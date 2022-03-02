const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "newAuthor",
        required: true
        
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "Publisher",
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)
