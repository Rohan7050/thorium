const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    bookName: String, 
    author_id: {
        type: Number,
        required: true
    }, 
    prices: Number,
    rating: String,
    isDeleted:{
        type: Boolean,
        default: false
    }  //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
