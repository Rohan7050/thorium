const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//for user info 
router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

//for book info
router.post("/createBook", bookController.creatBookData)

router.get("/getBookData", bookController.getBookData)

module.exports = router;