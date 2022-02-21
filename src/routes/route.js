const express = require('express');
const router = express.Router();
const obj = require("../logger/logger")
const helper = require("../util/helper")
const formatter = require("../validator/formatter")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(obj.url)
    obj.myFunc("Thorium")
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changetoUpperCase()
});

module.exports = router;
