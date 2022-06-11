const express = require('express');
const router = express.Router();


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


const midl1 = function (req, res, next) {
    console.log("Hi I am first middleware named Midl1")
    next()
}

const midl2 = function (req, res, next) {
    console.log("Hi I am second middleware named Midl2")
    next()
}

const itsWorking = function (req, res) {
    res.send({ msg: "All middleware are working" })
}


const loginCheck = function (req, res, next) {
    let mailId = true

    if (mailId == true) { console.log("you are eligible to register") 
    next();}
    else
    res.send("Check your mailId")
}

const register = function (req, res) {
  res.send({msg:"you are successfully registered"})
}

router.get('/middleWareChecking', midl1, midl2, itsWorking)
router.get('/register', loginCheck, register)


module.exports = router;