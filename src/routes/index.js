/* Node Package Imports */
const express = require("express");

/* Initiate Express Router */
const routes = express.Router();

/* Route Imports */
const auth = require("./auth");
const user = require("./user");

routes.use("/auth", auth);
routes.use("/user", user);

module.exports = routes;