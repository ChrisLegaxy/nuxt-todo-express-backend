const User = require("../../models/User");

module.exports = async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  new Promise((resolve, reject) => {
    user.save(err => {
      if (err) {
        reject(err);
      } else {
        resolve(err);
      }
    });
  })
    .then(() => {
      res.status(200).json({
        success: true,
        status: 200,
        message: "User created",
        data: user
      });
    })
    .catch(err => {
      res.status(422).send({
        success: false,
        status: 422,
        message: "An error occured when creating user",
        error: err
      });
    });
};
