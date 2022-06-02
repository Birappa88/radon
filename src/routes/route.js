const express = require('express');
const externalModule = require('../logger/logger')
const externalModules = require('../util/helper')
const externalModuless = require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {
    
    externalModule.welcome()
    externalModules.d()
    externalModules.B()
    externalModules.D()
    externalModuless.case1
    externalModuless.case2
    externalModuless.case3
    res.send('My first ever api!')
});


module.exports = router;
