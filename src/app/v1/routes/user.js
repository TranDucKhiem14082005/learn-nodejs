const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();


//user routes
router.get("/users",(req,res) => userController.getUsers(req,res));
router.get("/user/:userID",(req,res) => userController.getUserById(req,res));
router.post("/user",(req,res) => userController.createdUser(req,res));
router.patch("/user",(req,res) => userController.updateUser(req,res));
router.delete("/user/:userID",(req,res) => userController.deleteUser(req,res));

module.exports = router;