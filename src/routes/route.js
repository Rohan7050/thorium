const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mw = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.login)

//The userId is sent by front end
router.get("/users/:userId", mw.authenticate, mw.authorise, userController.getUserData1)

router.put("/users/:userId", mw.authenticate, mw.authorise, userController.updateUser)

router.post("/users/:userId/posts", mw.authenticate, mw.authorise, userController.postMessage)

router.delete("/users/:userId", mw.authenticate, mw.authorise, userController.deleteUser)

module.exports = router;