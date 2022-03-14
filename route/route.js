const express = require("express")
const mongoose = require("mongoose")

const router = express.Router()

const authorController = require("../controller/authorController")
const blogController = require("../controller/blogController")

//for test
router.get("/test", (req, res) =>{
    const bodydata = req.body
    const querydata = req.query
    res.send({msg: "yeeeyyyy its working !!!!!!!!!!!", body: bodydata, query: querydata})
})

// for author
router.post("/authors", authorController.createAuthor)

//for blog
router.post("/blogs", blogController.createBlog)
router.get("/blogs", blogController.getBlog)
router.put("/blogs/:blogId", blogController.updateBlog)
router.delete("/blogs/:blogId", blogController.deleteBlogById)
router.delete("/blogs", blogController.deleteBlogBykey)


module.exports = router