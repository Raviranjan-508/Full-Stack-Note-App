const {Router} = require("express");

const userController = Router();

userController.post("/signup", (req,res) => {
    res.send("Signup")
})

userController.post("/login", (req,res) => {
    res.send("Login")
})

module.exports = {
    userController
}