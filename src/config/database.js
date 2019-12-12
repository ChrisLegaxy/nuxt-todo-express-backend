/* Database Connection */

const config = require("./config");
const mongoose = require("mongoose");
const chalk = require("chalk");

/* Console Colors */
let connected = chalk.bold.cyan;
let error = chalk.bold.yellow;
let disconnected = chalk.bold.red;
let termination = chalk.bold.magenta;

// MongoDB Atlas
const connectionString = `mongodb+srv://${config.db.USER}:${config.db.PASSWORD}@maincluster-covtz.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise
    return mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  },
  disconnect: () => {
    mongoose.Promise = Promise
    return mongoose.disconnect();
  },
  onConnected: () => {
    return mongoose.connection.on("open", () => {
      console.log(connected("Database Connected Successfully"));
    });
  },
  onError: (err) => {
    // return mongoose.connection.on("error", err => {
    //   console.log(connected(err));
    // });
    console.log(error(err.reason))
  },
  onDisconnected: () => {
    return mongoose.connection.on("disconnected", () => {
      console.log(disconnected("Database Disconnected"));
    });
  }
};
