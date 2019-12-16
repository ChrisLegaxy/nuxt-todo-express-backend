/* Local Imports */
const User = require("../../models/User");

/* Issue out Token after authetication */
module.exports = (req, res) => {
  const user = res.locals.user
  res.status(200).json({
    success: true,
    status: 200,
    access_token: user.access_token,
    user: {
      "_id" : user.user._id,
      "username" : user.user.username
    },
    message: `Welcome ${user.user.username}!`
  })
};
