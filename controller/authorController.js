const validator = require('validator');
const jwt = require("jsonwebtoken")

const authorModel = require("../model/authorModel")

// to create author
const createAuthor = async (req, res) => {
    try{
        const data = req.body;
        if (!validator.isEmail(data.email)){
            return res.status(400).send({status: false, msg: "please enter valid email"})
        }
        const author = await authorModel.create(data)
        res.status(201).send({status: true, data: author})
    }catch(e){
        res.status(400).send({status: false, msg: e.message})
    }
}

// to login author
const login = async (req, res) => {
    try{
        const {email, password} = req.body
        if (email && password){
            const author = await authorModel.findOne({email: email, password: password})
            if (!author){
                return res.status(404).send({status: false, msg: "please enter correct credintials or this user does not exist (plz register)"})
            }
            const token = jwt.sign({id: author._id, fullName: `${author.fname} ${author.lname}`}, "projectOne")
            res.setHeader("x-api-key", token)
            return res.status(201).send({status: true, token: token})
        }
        return res.status(404).send({status: false, msg: "email or password is missing"})
    }catch(e){
        res.status(400).send({status: false, msg: e.message})
    }
}

module.exports.createAuthor = createAuthor;
module.exports.login = login;