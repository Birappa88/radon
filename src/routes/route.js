const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")


router.post("/createProduct", UserController.createProduct)

router.post("/createOrder", UserController.middleware, UserController.createOrder)

router.post("/createUser", UserController.middleware, UserController.createUser)


module.exports = router;