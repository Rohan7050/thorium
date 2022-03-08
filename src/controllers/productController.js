const { count } = require("console");
const productModel = require("../models/productModel");
// const proModel= require("../models/productModel")

const createProduct = async function(req, res){
    const data = req.body;
    const product = await productModel.create(data)
    res.send(product)
} 


module.exports.createProduct = createProduct
