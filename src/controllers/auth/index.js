/* Controller Function Imports */
const login = require("./login");
const register = require("./register");

const auth = {
  login,
  register
};

module.exports = auth;
