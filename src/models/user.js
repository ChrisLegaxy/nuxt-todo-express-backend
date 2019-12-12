/* Node Package Imports */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

userSchema.pre("save", function(next) {
  if (this.password && this.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          next(err);
        }
        this.password = hash;
        next();
      });
    });
  }
});

module.exports = mongoose.model("User", userSchema);
