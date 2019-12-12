/* Node Package Imports */
const mongoose = require("mongoose");

/* Schema */
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("User", userSchema);
