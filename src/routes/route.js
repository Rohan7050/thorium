const express = require('express');
const router = express.Router();
let obj = require("./logger")
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(obj.url)
    obj.myFunc("Thorium")
});

module.exports = router;