const express = require("express");

const user = express.Router();

const userController = require("../../controllers/user");

user.get("/", userController.list);

module.exports = user;
