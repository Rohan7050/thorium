const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )// creating book data in DB

router.post("/getBookByAuthor", BookController.getBookByAuthor)// creating author data in DB

router.post ("/createAuthor", BookController.createAuthor)// find book by taking author name

router.post("/findAndUpdate", BookController.findAndUpdate)//find and author name and update price of input book

router.get("/bookAndAuthor", BookController.bookAndAuthor)//give author name respective to book 








// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)

// router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;