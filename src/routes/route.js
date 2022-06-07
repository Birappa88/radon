const express = require('express');
const router = express.Router();
 const bookModel= require("../models/bookModel.js")
 const authorModel= require("../models/authorModel.js")
const BookController= require("../controllers/bookController")


router.post("/createAuthor", BookController.createAuthor)


router.post("/createBook", BookController.createBook  )


router.get("/getBooksbyChetanBhagat", BookController.getBooksbyChetanBhagat)


router.get("/getAuthorOfTwoStates", BookController.getAuthorOfTwoStates)


router.get("/getBookCostBetn50_100", BookController.getBookCostBetn50_100)


module.exports = router;