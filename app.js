/* Node Package Imports */
const express = require("express");
const cors = require("cors");
const passport = require("passport")

/* Imports */
const config = require("./src/config/config");
const routes = require("./src/routes");

/* Initiate Express */
const app = express();

require('./src/plugins/passport')(passport)

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize())
app.use(passport.session())

/* Router */
app.use(`${config.api.ENDPOINT}/`, routes);

module.exports = app;
