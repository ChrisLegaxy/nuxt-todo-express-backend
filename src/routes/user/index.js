/* Node Package Imports */
const express = require("express");

/* Initiate Express Router */
const userRoute = express.Router();

/* Controller */
const userController = require("../../controllers/user");

userRoute.get("/", userController.list);
// userRoute.get("/:id", userController.single);
userRoute.post("/", userController.create);
userRoute.delete("/", userController.remove);

module.exports = userRoute;
