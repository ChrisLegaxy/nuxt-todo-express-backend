const express = require("express");

const authRoute = express.Router();

// const passport = require('passport')

const auth = require("../../middleware/auth");

const authController = require("../../controllers/auth");

// auth.post("/register", authController.register);
authRoute.post("/login", auth, authController.login);

module.exports = authRoute;
