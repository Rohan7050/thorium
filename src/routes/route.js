const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const memeController = require("../controllers/memeController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// COWIN
router.get("/cowin/states", cowinController.getStates)
router.get("/cowin/districtsInState/:stateId", cowinController.getDistricts)
router.get("/cowin/getByPin", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/disAndDate", cowinController.disAndDate)

//OpenWether
router.get("/getWeather", weatherController.getWether)
router.get("/sortCityByTemp/:api_key", weatherController.sortCityByTemp)

//memes
router.post("/meme", memeController.memeCon)

module.exports = router;