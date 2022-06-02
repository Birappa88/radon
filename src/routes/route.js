const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

 router.get('/hello', function (req, res) {
   
     res.send('Hello there!')
 });

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/movies', function (req, res) {
   const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
   console.log(movies)
    res.send('Hello there!')
});

router.get('/movies/1', function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(movies[1])
     res.send('Hello there!')
 });


 router.get('/movies/6', function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    for (let i=0; i<movies.length;i++) {
         let index = movies[i] 
         if(i>movies.length){
    console.log("use valid index")
         }
         console.log(movies[6])
    }
     res.send('Hello njjn there!')
 });

 router.get('/films', function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(movies[1])
     res.send('Hello there!')
 });


module.exports = router;
// adding this comment for no reason