/* Centralize Controller */
const express = require("express");

const routes = express.Router();

const auth = require("./auth");

routes.use("/auth", auth);

module.exports = routes;