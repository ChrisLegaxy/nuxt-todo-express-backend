const User = require("../../models/User");

module.exports = async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  try {
    await user.save(err => {
      if (err) {
        return res.json({});
      }
    });
    res.status(200).json({
      success: true,
      message: "User Created",
      user
    });
  } catch (err) {
    res.status(422).send({
      success: false,
      status: 422,
      message: err
    });
  }
};
