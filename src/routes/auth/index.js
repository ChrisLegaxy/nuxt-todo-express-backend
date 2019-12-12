const express = require("express");

const auth = express.Router();

const authController = require("../../controllers/auth");

auth.post("/register", authController.register);
auth.post("/login", authController.login);

module.exports = auth;
