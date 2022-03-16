const jwt = require("jsonwebtoken")
const blogModel = require("../model/blogModel")
const authorModel = require("../model/authorModel")

// this just chack if auther is login or not
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
// // this check that auther is autherise to do changes in blog, in endpoint where we are gitting blogId from path params
// const authroisation1 = async (req, res, next) => {
//     const token = req.headers["x-api-key"]
//     if (!token){
//         return res.status(404).send({status: false, msg: "important header is missing"})
//     }
//     const data = req.params
    
//     try{
//         const blog = await blogModel.findById(data.blogId)
//         if (!blog){
//             return res.status(400).send({Err: "blog not found"})
//         }
//         // return res.send({data: blog.authorId})
//         const decodeedToken = jwt.verify(token, "projectOne")
//         if(decodeedToken.id == blog.authorId){
//             next()
//         }else{
//             return res.status(404).send({status: false, msg: "you are not autherize to do changes in this blog"})
//         }
//         // return res.send(decodeedToken)
//     }catch(e){
//         return res.status(400).send({status: false, msg: e.message})
//     }
// }

// // this check that auther is autherise to do changes in blog, in endpoint where we are not getting any kind of id, instated we are getting query params
// const authroisation2 = async (req, res, next) => {
//     const token = req.headers["x-api-key"]
//     if (!token){
//         return res.status(404).send({status: false, msg: "important header is missing"})
//     }
//     const data = req.query
    
//     try{
//         const blog = await blogModel.findOne(data)
//         if (!blog){
//             return res.status(400).send({Err: "blog not found"})
//         }
//         // return res.send({data: blog})
//         const decodeedToken = jwt.verify(token, "projectOne")
//         if(decodeedToken.id == blog.authorId){
//             next()
//         }else{
//             return res.status(404).send({status: false, msg: "you are not autherize to do changes in this blog"})
//         }
//         // return res.send(decodeedToken)
//     }catch(e){
//         return res.status(400).send({status: false, msg: e.message})
//     }
// }

// this is combination of autherisation1 and autherisation2.
const authroisation3 = async (req, res, next) => {
    const token = req.headers["x-api-key"]
    if (!token){
        return res.status(404).send({status: false, msg: "important header is missing"})
    }
    const data = req.params
    let blog
    if (Object.keys(data).length == 0){
        const data = req.query
        blog = await blogModel.findOne(data)
        if (!blog){
            return res.status(400).send({Err: "blog not found"})
        }
        // return res.send({status: false, data: data})
    }else{
        blog = await blogModel.findById(data.blogId)
        if (!blog){
            return res.status(400).send({Err: "blog not found"})
        }
        // return res.send({status: false, data: data})
    }
    try{
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

module.exports.authentication = authentication
// module.exports.authroisation1 = authroisation1
// module.exports.authroisation2 = authroisation2
module.exports.authroisation3 = authroisation3