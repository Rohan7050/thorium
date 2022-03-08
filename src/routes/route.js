const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mw = require("../auth/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.login)

//The userId is sent by front end
router.get("/users/:userId", mw.md1, userController.getUserData1)

router.put("/users/:userId", mw.md1, userController.updateUser)

router.delete("/users/:userId", mw.md1, userController.deleteUser)

module.exports = router;