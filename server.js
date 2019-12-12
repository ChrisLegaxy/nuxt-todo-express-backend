/* Node Package Imports */
const express = require("express");
const chalk = require("chalk");

/* Imports */
const config = require("./src/config/config");
const database = require("./src/config/database");
const routes = require("./src/controllers/index");

/* Console Colors */
const started = chalk.bold.greenBright;
const error = chalk.bold.redBright;

/* Initiate Express */
const app = express();

/* Router */
app.use("/", routes);

/* Starting Up Server */
app.listen(config.app.PORT, async () => {
  try {
    database.connect().catch(err => {
      console.log(err);
      database.onError(err);
    });

    await database.onConnected();

    console.log(started(`Server is running on PORT ${config.app.PORT}`));
  } catch (err) {
    console.log(error("Database Connection Failed"));
  }
});
