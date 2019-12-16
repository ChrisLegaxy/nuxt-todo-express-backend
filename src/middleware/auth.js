/* Node Package Imports */
const passport = require("passport");
const jwt = require("jsonwebtoken");

/* Local Imports */
const secretKey = require("../config/config").token.SECRET_KEY;

/* Authenticate and Generate JWT Token */
module.exports = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      next(err);
    }
    if (!user) {
      res.status(401).json(info);
    } else {
      const token = new Promise((resolve, reject) => {
        jwt.sign(
          { user },
          secretKey,
          { algorithm: "HS256", expiresIn: "1h" },
          (err, token) => {
            if (err) {
              err = {
                message : "There was an issue when signing token"
              }
              reject(err);
            } else {
              resolve(token);
            }
          }
        );
      }).then(token => {
        res.locals.user = {
          user,
          access_token: token
        };
        next();
      }).catch(err => {
        res.json({
          success: false,
          message: err.message
        })
      })
    }
  })(req, res, next);
};
