/* Middleware */
const passport = require("passport");

module.exports = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      next(err);
    }
    if (!user) {
      res.status(401).json({
        message: "Incorect Username or Password"
      });
    } else {
      next();
    }
  })(req, res, next);
};
