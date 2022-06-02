const express = require('express');
const externalModule = require('../logger/logger')
const externalModules = require('../util/helper')
const externalModuless = require('../validator/formatter')
const Array = require('../problem4/lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    
    externalModule.welcome()
    externalModules.printDate()
    externalModules.getCurrentMonth()
    externalModules.getCohortData()
    externalModuless.case1
    externalModuless.case2
    externalModuless.case3
    Array.months  
    Array.number
    Array.unique
    Array.object
    res.send('My first ever api!')
});


module.exports = router;
