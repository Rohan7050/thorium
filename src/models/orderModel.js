const mongoose = require("mongoose")

const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type: objectId,
        ref: 'Newuser',
        required: true
    },
    productId: {
        type: objectId,
        ref: 'Newproduct',
        required: true
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: true
    },
    date: String
}, {timestamps: true});

module.exports = mongoose.model("Order", orderSchema)
