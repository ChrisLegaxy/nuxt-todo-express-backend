/* Database Connection */
const config = require("./config");
const mongoose = require("mongoose");
const chalk = require("../plugins/chalk");

/* Mongoose Settings */
mongoose.set("useCreateIndex", true);

// MongoDB Atlas
const connectionString = `mongodb+srv://${config.db.USER}:${config.db.PASSWORD}@maincluster-covtz.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    return mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  },
  disconnect: () => {
    mongoose.Promise = Promise;
    return mongoose.disconnect();
  },
  onConnected: () => {
    return mongoose.connection.on("open", () => {
      console.log(chalk.info("Database Connected Successfully"));
    });
  },
  onError: err => {
    // return mongoose.connection.on("error", err => {
    //   console.log(connected(err));
    // });
    console.log(chalk.warning(err.reason));
  },
  onDisconnected: () => {
    return mongoose.connection.on("disconnected", () => {
      console.log(chalk.def("Database Disconnected"));
    });
  }
};
