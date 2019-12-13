const UserModel = require("../../models/User");

module.exports = (req, res) => {
  new Promise((resolve, reject) => {
    UserModel.deleteMany(err => {
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
        message: "All records has been deleted"
      });
    })
    .catch(err => {
      res.json({
        success: false,
        status: 422,
        message: "Failed to delete all records",
        error: err
      });
    });
};
