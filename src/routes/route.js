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
router.post("/createBook", bookController.createBook) // create book

router.get("/getBookAndPopulate", bookController.getBookAndPopulate) // populate book 

router.put("/putBook", bookController.putBook)// for updating isHardCover equal to true for 2 authors

router.put("/updatePriceByRatings", bookController.updatePriceByRatings)// for updating prices

// for author
router.post("/createAuthor", authorController.createAuthor) // create author


//for publisher
router.post("/createPublisher", publisherController.createPublisher) // create publisher


//********************************************************************************** */
// router.post("/createUser", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;