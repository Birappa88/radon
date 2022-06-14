const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Auth= require("../controllers/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", Auth.middleware, userController.getUserData)

router.put("/users/:userId", Auth.middleware, userController.updateUser)

router.delete("/users/:userId", Auth.middleware, userController.deleteUser)


module.exports = router;