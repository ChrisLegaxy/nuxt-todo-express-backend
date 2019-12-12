const express = require("express");

const auth = express.Router();

const login = require("./login");

auth.get("/login", login);

module.exports = auth;
