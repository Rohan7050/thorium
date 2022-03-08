const UserModel= require("../models/userModel")


const createUser= async function (req, res) {
    let data= req.body
    let isFreeAppUser = req.headers["isfreeappuser"]
    data.isFreeAppUser = isFreeAppUser
    let savedData= await UserModel.create(data)
    return res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    // console.log(req.newAtribute)
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData