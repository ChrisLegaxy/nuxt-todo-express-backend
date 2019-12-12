const express = require("express");

const routes = express.Router();

const auth = require("./auth");
const user = require("./user");

routes.use("/auth", auth);
routes.use("/user", user);

module.exports = routes;