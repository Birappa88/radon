const express = require('express');
const router = express.Router();


router.get('/movies', function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
});


router.get('/movies/1', function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
    console.log(movies[1])
});


router.get('/movies/:indexNumber', function (req, res) {
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let i = req.params.indexNumber
    if (i >= movies.length) {
        res.send('Error : Use valid Index')
    }
    else {
        res.send(movies[i])
    }
});


router.get('/films', function (req, res) {
    const movies = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    res.send(movies)
});


router.get('/films/:filmId', function (req, res) {
    const movies = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let i = req.params.filmId - 1
    if (i >= movies.length || i < 0) {
        res.send('No movie exists with this Id')
    }
    else
        res.send(movies[i])
});



router.get("/sol1", function (req, res) {
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });


router.get("/sol2", function (req, res) {
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });

module.exports = router;
