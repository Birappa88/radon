let axios = require("axios")


let getWeather = async function (req, res) {
    try {
        let city = req.query.q
        let key = req.query.appId
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


let getSortedTemp = async function (req, res) {
    try {
        let array = []
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for (let i = 0; i < cities.length; i++) {
            let city = cities[i]
            let key = req.query.appId
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
            }
            let result = await axios(options);
            let data = result.data.main.temp
            let output = { city: city, temp: data }
            array.push(output)
        }
        array.sort((a, b) => a.temp - b.temp)
        res.status(201).send({ status: true, msg: array })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


let getWeatherTemp = async function (req, res) {
    try {
        let city = req.query.q
        let key = req.query.appId
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options);
        let data = result.data.main.temp

        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getWeather = getWeather
module.exports.getWeatherTemp = getWeatherTemp
module.exports.getSortedTemp = getSortedTemp