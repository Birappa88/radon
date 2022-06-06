const express = require('express');
const router = express.Router();
 const bookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/bookList", BookController.bookList)

router.post("/getBooksInYear", BookController.getBooksInYear)

router.get("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBook", BookController.getXINRBook)

router.get("/getRandomBooks", BookController.getRandomBooks)


module.exports = router;