const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const MemeController= require("../controllers/memeController")


router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getByDistrictID", CowinController.getByDistrictID)

router.get("/getWeather", WeatherController.getWeather)

router.get("/getSortedTemp", WeatherController.getSortedTemp)

router.get("/getWEatherTemp/london", WeatherController.getWeatherTemp)

router.get("/getAllMemes", MemeController.getAllMemes)

router.post("/getMemeById", MemeController.getMemeById)


module.exports = router;