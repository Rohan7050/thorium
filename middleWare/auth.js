const jwt = require("jsonwebtoken")
const blogModel = require("../model/blogModel")
const authorModel = require("../model/authorModel")


const authentication = (req, res, next) => {
    const token = req.headers["x-api-key"]
    if (!token){
        return res.status(404).send({status: false, msg: "important header is missing"})
    }
    try{
        const decodeedToken = jwt.verify(token, "projectOne")
        // return res.send(decodeedToken)
    }catch{
        return res.status(400).send({status: false, msg: "this token is not valid"})
    }
    next()
}

const authroisation1 = async (req, res, next) => {
    const token = req.headers["x-api-key"]
    if (!token){
        return res.status(404).send({status: false, msg: "important header is missing"})
    }
    const data = req.params
    
    try{
        const blog = await blogModel.findById(data.blogId)
        // return res.send({data: blog.authorId})
        const decodeedToken = jwt.verify(token, "projectOne")
        if(decodeedToken.id == blog.authorId){
            next()
        }else{
            return res.status(404).send({status: false, msg: "you are not autherize to do changes in this blog"})
        }
        // return res.send(decodeedToken)
    }catch(e){
        return res.status(400).send({status: false, msg: e.message})
    }
}

const authroisation2 = async (req, res, next) => {
    const token = req.headers["x-api-key"]
    if (!token){
        return res.status(404).send({status: false, msg: "important header is missing"})
    }
    const data = req.query
    
    try{
        const blog = await blogModel.findOne(data)
        // return res.send({data: blog})
        const decodeedToken = jwt.verify(token, "projectOne")
        if(decodeedToken.id == blog.authorId){
            next()
        }else{
            return res.status(404).send({status: false, msg: "you are not autherize to do changes in this blog"})
        }
        // return res.send(decodeedToken)
    }catch(e){
        return res.status(400).send({status: false, msg: e.message})
    }
}

module.exports.authentication = authentication
module.exports.authroisation1 = authroisation1
module.exports.authroisation2 = authroisation2