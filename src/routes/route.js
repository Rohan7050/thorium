const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController = require("../controllers/orderController")
const mw = require("../middelware/mw")


router.get("/test", function (req, res){
    res.send("yeyyy its working")
})


router.post("/products", productController.createProduct)

router.post("/user", mw.md2, userController.createUser)

router.post("/order", mw.md2, orderController.createOrder)

module.exports = router;