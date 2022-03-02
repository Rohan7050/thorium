const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

// test route
router.get("/test", function (req, res) {
    res.send("yeyyy it,s workingggg :)")
})

// for book
router.post("/createBook", bookController.createBook)

router.get("/getBookAndPopulate", bookController.getBookAndPopulate)

// for author
router.post("/createAuthor", authorController.createAuthor)


//for publisher
router.post("/createPublisher", publisherController.createPublisher)


//********************************************************************************** */
// router.post("/createUser", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;