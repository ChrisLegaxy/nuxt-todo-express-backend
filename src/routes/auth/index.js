/* Node Package Imports */
const express = require("express");

/* Initiate Express Router */
const authRoute = express.Router();

/* Authentication */
const auth = require("../../middleware/auth");

/* Controller */
const authController = require("../../controllers/auth");

// auth.post("/register", authController.register);
authRoute.post("/login", auth, authController.login);

module.exports = authRoute;
