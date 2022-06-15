const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Auth= require("../controllers/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", Auth.authenticate, Auth.authorise, userController.getUserData)

router.put("/users/:userId", Auth.authenticate, Auth.authorise, userController.updateUser)

router.delete("/users/:userId", Auth.authenticate, Auth.authorise, userController.deleteUser)

router.post("/users/:userId/posts", Auth.authenticate, Auth.authorise, userController.postMessage)

module.exports = router;