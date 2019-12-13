/* Imports */
const UserModel = require("../../models/User");

module.exports = (req, res) => {
  new Promise((resolve, reject) => {
    UserModel.find((err, users) => {
      if (err) {
        reject(err);
      } else {
        resolve(users);
      }
    });
  })
    .then(users => {
      res.status(200).json({
        success: true,
        message: "All records of users",
        data: users
      });
    })
    .catch(err => {
      res.json({
        success: false,
        message: "There was an issue requesting for all records of users",
        error: err
      });
    });
};
