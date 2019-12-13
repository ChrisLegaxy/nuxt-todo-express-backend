const User = require("../../models/User");

module.exports = (req, res) => {
  // const user = new Promise((resolve, reject) => {
  //   User.findOne({ username: req.body.username }, (err, user) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve(user);
  //     }
  //   });
  // });

  // user.then().catch(err => {
  //   res.status;
  // });
  res.send("Hello")
};
