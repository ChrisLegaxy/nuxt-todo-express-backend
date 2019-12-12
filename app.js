/* Node Package Imports */
const express = require("express");
const cors = require("cors");

/* Imports */
const routes = require("./src/routes");

/* Initiate Express */
const app = express();

/* Middlewares */
app.use(express.json());
app.use(cors());

/* Router */
app.use("/", routes);

module.exports = app;
