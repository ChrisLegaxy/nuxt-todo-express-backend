const express = require("express");

const userRoute = express.Router();

const userController = require("../../controllers/user");

userRoute.get("/", userController.list);
userRoute.post("/", userController.create);
userRoute.delete("/", userController.remove);

module.exports = userRoute;
