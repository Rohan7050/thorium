const express = require("express")
const mongoose = require("mongoose")

const router = express.Router()

const authorModel = require("../controller/authorController")

router.get("/test", (req, res) =>{
    const bodydata = req.body
    const querydata = req.query
    res.send({msg: "yeeeyyyy its working !!!!!!!!!!!", body: bodydata, query: querydata})
})

module.exports = router