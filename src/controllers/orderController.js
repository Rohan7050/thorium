const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const createOrder = async function (req, res){
    const data = req.body

    if (data.userId && data.productId){
        const user = await userModel.findById(data.userId)
        if (!user){
            return res.send({Err: "user with this id does not exists"})
        }
        const product = await productModel.findById(data.productId)
        if (!product){
            return res.send({Err: "product with this id does not exists"})
        }

        const isFreeAppUser = req.headers["isfreeappuser"]
        data.isFreeAppUser = isFreeAppUser
        if (isFreeAppUser == "true"){
            data.amount = 0
        }else if(isFreeAppUser == "false"){
            if (product.price <= user.balance){
                const a = await userModel.findOneAndUpdate({_id :data.userId}, {$inc: {balance: -product.price}},  {new: true})
                data.amount = product.price
                // return res.send(a)
            }else{
                return res.send({err: "not sufficient balance"})
            }
        }
        
        const order = await orderModel.create(data)
        return res.send(order)
    }
    return res.send({err: "missing userId or productId"})
    
}

module.exports.createOrder = createOrder