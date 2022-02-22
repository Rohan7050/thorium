const express = require('express');
const router = express.Router();
const obj = require("../logger/logger")
const helper = require("../util/helper")
const formatter = require("../validator/formatter")
const lod = require("../lodashMod/lod")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(obj.url)
    obj.welcome("Welcome to my application. I am Rohan Pagare and a part of FunctionUp Thorium cohort.")
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changetoUpperCase()
});

router.get("/hello", function(req, res){
    res.send("hello world")
    lod.arrSpliter()
    lod.giveTail()
    lod.arrUnion()
    lod.getPairs()
})

module.exports = router;
